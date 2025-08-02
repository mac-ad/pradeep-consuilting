import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req:NextRequest){
  try{
    const{name,email,phone,city,street,branch,date,time}=await req.json();

     const trimmedFields = [name, email, phone, city, street, branch, date, time].map(field => field?.trim());

    if (trimmedFields.some(field => !field)) {
    return NextResponse.json({message:"all fields are required.."},{status:400});
    }


    const session=await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        mode:'payment',
        line_items:[
            {
                price_data:{
                    currency:'gbp',
                    product_data:{
                        name:'Appointment Booking'
                    },
                    unit_amount:1200,
                },
                quantity:1,
                
            }
        ],
        customer_email:email,
        success_url:`${process.env.CLIENT_URL}/uk/appointment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url:`${process.env.CLIENT_URL}/uk/appointment/cancel`,
        metadata:{
         name,
         email,
         phone,
         city,
         street,
         branch,
         date,
         time,
        }
    });
    //store appointment in the database
    const appointmentData={
      name,
      email,
      phone,
      city,
      street,
      branch,
      date,
      time,
      session_id:session.id,
    }
  return NextResponse.json(appointmentData,{status:200});
  }catch(err){
    console.log("error: ",err);
  return NextResponse.json({message:"somthing went wrong"},{status:500});
  }
}