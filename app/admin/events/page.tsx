import prisma from "@/lib/prisma";
import EventTableClient from "./eventTable";
import Link from "next/link";



export default async function Events() {
  const events=await prisma.event.findMany({});
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-semibold">Events</h1>
       <Link href='/admin/events/createEvent'  className="ml-auto inline-block bg-primary text-white font-medium py-2 px-4 rounded hover:bg-primary/90 transition">Create Events</Link>
      <p className="text-muted-foreground">
        Here you can manage your events. You can create, edit, and delete
        events.
      </p>
      {/* events table */}
        <EventTableClient initialData={events}/>
    </div>
  );
}
