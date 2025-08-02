import { NextRequest, NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma'; 
import { stripe } from '@/lib/stripe';
import { verifyToken } from '@/lib/jwt';


export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      phone,
      city,
      street,
      branch,
      date,
      time,
      session_id,
    } = await req.json();
    // Trim values
    const trimmedFields = [name, email, phone, city, street, branch, date, time, session_id].map(field => field?.trim());

    if (trimmedFields.some(field => !field)) {
    return NextResponse.json({message:"all fields are required.."},{status:400});
    }
      const existingAppointment = await prisma.appointment.findFirst({
      where: {
        date,
        time,
        paymentStatus: 'paid'
      },
    });

    const session=await stripe.checkout.sessions.retrieve(session_id);
    if(!session){
      return NextResponse.json({message:"stripe session id is invalid"},{status:400});
    }

    if(existingAppointment){
      return NextResponse.json(
        {message:"This appointment slot is already booked.please selct another date"},
        {status:409}
      )
    }


    // const appointment_amount = parseInt(process.env.APPOINTMENT_PAYMENT_AMOUNT || '12', 10);
await prisma.appointment.create({
      data: {
        name,
        email,
        phone,
        city,
        street,
        branch,
        date,
        time,
        stripeSessionId: session_id,
        paymentAmount: 12,
        paymentStatus: 'unpaid',
      },
    });

    return NextResponse.json({ message: "Appointment created successfully." }, { status: 201 });

  } catch (error) {
    console.log("Error creating appointment:", error);
    return NextResponse.json( {message:error} , { status: 500 });
  }
} 


export async function PUT(req:NextRequest){
  try{
    const{session_id}=await req.json();
    if(!session_id.trim() || !session_id){
      return NextResponse.json({message:'session id is required...'},{status:400})
    };
    
   const session=await stripe.checkout.sessions.retrieve(session_id);
   if(!session || session.payment_status!=='paid'){
    return NextResponse.json({message:"payment not completed."},{status:400});
   }

    const updatedAppointment=await prisma.appointment.updateMany({
      where:{stripeSessionId:session_id.trim()},
      data:{paymentStatus:'paid'}
    });
    if(updatedAppointment.count===0){
      return NextResponse.json({message:"No appointment found.."},{status:404});
    }
    return NextResponse.json({session_id},{status:200})
  }catch(error){
   console.log("Error updating payment status: ",error);
   return NextResponse.json({message:error},{status:500});
  }
}


export async function GET(req:NextRequest){
  const {searchParams}= new URL(req.url);
  const id=searchParams.get("id");
  console.log("id: ",id);
  const booking_dates=searchParams.get("booking_dates");
  const search=searchParams.get("search");

    console.log("bookingDates is true: ",booking_dates)
   try {

    if(id){
    const appointment=await prisma.appointment.findFirst({
      where:{
         stripeSessionId:id
      },
       
      
    });
    if(!appointment){
     return NextResponse.json({message:"appointment Not found"},{status:400});
    }
     return NextResponse.json(appointment,{status:200});

  }

  if(booking_dates){

    const today = new Date().toISOString().split('T')[0]; 

    const appointments = await prisma.appointment.findMany({
      where: {
        paymentStatus: 'paid',
        date: {
          gte: today,
        },
      },
      orderBy: {
        date: 'asc',
      },
    });

    const dates=appointments.map((appointment)=>{
       return appointment.date;
    });
    if(!(dates.length>0)){
       return NextResponse.json([],{status:200})
    }
    return NextResponse.json(dates, { status: 200 });
    
  }
  if(search){
    const searchText=search.trim();
    const searchResult=await prisma.appointment.findMany({
      where:{
        OR:[
         {
          name: {
            contains: searchText,
            mode: 'insensitive',
          },
        },
        {
          email: {
            contains: searchText,
            mode: 'insensitive',
          },
        },
        {
          phone: {
            contains: searchText,
            mode: 'insensitive',
          },
        },
        {
          stripeSessionId: {
            contains: searchText,
            mode: 'insensitive',
          },
        },
        ]
      },
      orderBy:{
        createdAt:'desc',
      }
    });
    console.log("search Result: ",searchResult)
    return NextResponse.json(searchResult,{status:200});
  }

const token=req.cookies.get('auth')?.value;
if(!token){
return NextResponse.json({message:"Unauthorized"},{status:403});
}
const payload=await verifyToken(token);
if(!payload || payload.role !=='admin'){
  return NextResponse.json({message:"Unauthorized"},{status:403});
}

 const allAppointments=await prisma.appointment.findMany({
  orderBy:{
    createdAt:'desc'
  }
 });

 return NextResponse.json(allAppointments,{status:200});



  }catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json(error, { status: 500 });
  }

}



export async function PATCH(req:NextRequest){
  const {searchParams}=new URL(req.url);
  const id=searchParams.get("id");
  if(!id){
    return NextResponse.json({message:"appointment id is required..."},{status:400})
  }
  try{
   const{appointment_status}=await req.json();
   await prisma.appointment.update({
    where:{id:String(id)},
    data:{appointment_status}
   });
   return NextResponse.json({message:"appointment status updated successfully.."},{status:200});
  }catch(error){
   console.log(error);
   return NextResponse.json({message:"faild to update appointment"},{status:500});
  }
}