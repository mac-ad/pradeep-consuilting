import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    
   try{ 
    const{event_title,event_date,event_time,event_location,event_details,event_image}=await request.json();
      if (
      !event_title ||
      !event_date ||
      !event_time ||
      !event_location ||
      !event_details ||
      !event_image
    ) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }


    const newEvent=await prisma.event.create({
        data:{
            event_title,
            event_date,
            event_time,
            event_location,
            event_details,
            event_image
        }
    });
    return NextResponse.json({message:"Event created successfully",newEvent},{status:201,});
   }catch(error){
    console.log("error: ",error)
     return NextResponse.json({message:"failed to create event"},{status:500});
   }


}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const notExpired = searchParams.get('not_expired');
    const expired = searchParams.get('expired');

    // Return single event by ID
    if (id) {
      const event = await prisma.event.findUnique({ where: { id } });

      if (!event) {
        return NextResponse.json({ message: 'Event not found' }, { status: 404 });
      }

      return NextResponse.json(event);
    }

    // Return not expired events (event_date >= today)
    if (notExpired === 'true') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const events = await prisma.event.findMany({
        where: {
          event_date: {
            gte: today,
          },
        },
        orderBy: { event_date: 'asc' },
      });

      return NextResponse.json(events);
    }

    // Return expired events (event_date < today)
    if (expired === 'true') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const events = await prisma.event.findMany({
        where: {
          event_date: {
            lt: today,
          },
        },
        orderBy: { event_date: 'desc' },
      });

      return NextResponse.json(events);
    }

    // Return all events (default)
    const allEvents = await prisma.event.findMany({
      orderBy: { event_date: 'asc' },
    });

    return NextResponse.json(allEvents);
  } catch (error) {
    console.error('GET event error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const {
      id,
      event_title,
      event_date,
      event_time,
      event_location,
      event_details,
      event_image,
    } = await request.json();

    if (!id) {
      return NextResponse.json({ message: 'Event ID is required' }, { status: 400 });
    }

    const updatedEvent = await prisma.event.update({
      where: { id },
      data: {
        event_title,
        event_date: new Date(event_date),
        event_time,
        event_location,
        event_details,
        event_image,
      },
    });

    return NextResponse.json({message:"event update successfully.",updatedEvent}, { status: 200 });
  } catch (error) {
    console.error('Error updating event:', error);
    return NextResponse.json({ message: 'Failed to update event' }, { status: 500 });
  }
}




export async function DELETE(req: NextRequest) {
  try {
   const searchParams = req.nextUrl.searchParams;
   const id = searchParams.get("event_id");

    if (!id) {
      return NextResponse.json({ message: "Event ID is required" }, { status: 400 });
    }

    const deletedEvent = await prisma.event.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Event deleted successfully", deletedEvent },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to delete event:", error);
    return NextResponse.json({ message: "Failed to delete event" }, { status: 500 });
  }
}
