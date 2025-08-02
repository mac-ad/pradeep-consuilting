"use client";
import { EventFormData } from "@/app/types/event";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect,useState } from "react";
import { FaCalendar, FaMapMarkerAlt, FaClock } from "react-icons/fa";


const Events = () => {
  const[events,setEvents]=useState<EventFormData[] | []>([]);
  const[expiredEvents,setExpiredEvents]=useState<EventFormData[] | []>([]);


  useEffect(()=>{
   const fetchEvents=async()=>{
     try{
        const response=await fetch('/api/event?not_expired=true');
        if(response.ok){
          const data=await response.json();
          console.log("events: ",data);
          setEvents(data);
        }
    
     }catch(error){
      console.log("error while fetching unexpired events: ",error);
     }
   }
   const fetchExpiredEvents=async()=>{
    try{
     const response=await fetch('/api/event?expired=true');
     if(response.ok){
      const data=await response.json();
      setExpiredEvents(data);
     }
    }catch(error){
  console.log("error while fetching expired events: ",error);
    }
   }
   fetchEvents();
   fetchExpiredEvents();
  },[]);
  return (
    <div className="w-full py-10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="max-w-lg w-full mx-auto flex flex-col justify-center items-center space-y-3">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              duration: 0.6,
              stiffness: 100,
              damping: 20,
              delay: 0.6,
            }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center"
          >
            Events at Ample International Education
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              duration: 0.6,
              stiffness: 100,
              damping: 20,
              delay: 0.6,
            }}
            className="text-sm md:text-base text-black/80 text-center"
          >
            Join our upcoming events to learn more about study opportunities
            abroad
          </motion.p>
        </div>
        <div className="flex flex-col space-y-8 mt-10">
          {events.map((event, index) => (
            <div
              key={index}
              className={`p-2 py-4 sm:p-3 lg:p-10 flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } justify-between items-center gap-6 md:gap-10 border-b`}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  type: "spring",
                  duration: 0.6,
                  stiffness: 100,
                  damping: 20,
                  delay: 0.4,
                }}
                className="w-full md:w-2/5 lg:w-2/6 h-64 sm:h-72 md:h-80"
              >
                <Image
                  src={event?.event_image}
                  alt={event?.event_title}
                  height={100}
                  width={100}
                  className="h-full w-full object-cover rounded-lg shadow-lg"
                />
              </motion.div>
              <div className="w-full md:w-3/5 lg:w-4/6 space-y-2 lg:space-y-4 mt-4 md:mt-0">
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    type: "spring",
                    duration: 0.6,
                    stiffness: 100,
                    damping: 20,
                    delay: 0.4,
                  }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold"
                >
                  {event?.event_title}
                </motion.h1>

                {/* Event details */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    type: "spring",
                    duration: 0.6,
                    stiffness: 100,
                    damping: 20,
                    delay: 0.5,
                  }}
                  className="flex items-center gap-6 text-sm sm:text-base text-secondary flex-wrap"
                >
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{new Date(event.event_date).toLocaleDateString('en-CA')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock />
                    <span>{new Date(`1970-01-01T${event?.event_time}`).toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>{event?.event_location}</span>
                  </div>
                </motion.div>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    type: "spring",
                    duration: 0.6,
                    stiffness: 100,
                    damping: 20,
                    delay: 0.6,
                  }}
                  className="text-sm sm:text-base text-justify text-black/80"
                >
                  {event?.event_details}
                </motion.p>

                {/* Registration button */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    type: "spring",
                    duration: 0.6,
                    stiffness: 100,
                    damping: 20,
                    delay: 0.8,
                  }}
                >
                  {/* <button className="hidden md:block px-6 py-2.5 rounded-md text-sm font-semibold  border-2 border-primary/60 text-primary cursor-pointer relative overflow-hidden group"> */}
                    {/* <Link
                      href={event.registrationLink}
                      className="relative z-10 transition-colors duration-300 group-hover:text-white"
                    >
                      Register Now
                    </Link> */}
                    {/* <span className="absolute inset-0 z-0 w-0 h-full transition-all duration-300 bg-gradient-to-r from-[#3D03FA] to-secondary  left-0 group-hover:w-full"></span>
                  </button> */}
                </motion.div>
              </div>
            </div>
          ))}

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              duration: 0.6,
              stiffness: 100,
              damping: 20,
              delay: 0.6,
            }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center"
          >
            Previous Events
          </motion.h1>
          {/* expired events  */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {expiredEvents
              .map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col border border-primary rounded-xl overflow-hidden"
                >
                  <Image
                    src={event?.event_image}
                    alt="Blog Image"
                    height={200}
                    width={300}
                    className="w-full h-62 object-cover"
                  />
                  <div className="p-4 space-y-1.5">
                    <h3 className="text-xl font-semibold hover:text-primary">
                      <Link href="#">{event.event_title}</Link>
                    </h3>
                    <p className="text-xs text-gray-500 flex gap-x-2 items-center">
                      <FaCalendar />
                      {new Date(event?.event_date).toLocaleDateString('en-CA')} — {new Date(`1970-01-01T${event?.event_time}`).toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })}
                    </p>
                    <p className="text-xs text-secondary flex gap-x-2 items-center">
                      <FaClock />
                      {event?.event_location}
                    </p>
                    <p className="text-black/80">
                      {event?.event_details.substring(0, 35)} ......
                    </p>
                    <button className="py-1 px-2 text-xs text-left border hover:border-primary hover:text-primary ease-in-out duration-200 w-fit rounded-full cursor-pointer">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
