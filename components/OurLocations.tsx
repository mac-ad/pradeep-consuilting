"use client";
import Image from "next/image";
import WorldMap from "./ui/world-map";
import { motion } from "motion/react";

const OurLocations = () => {
  return (
    <div className="w-full py-10">
      {/* Top Hat */}
      <div className="hidden px-4 lg:px-10 w-full max-w-7xl mx-auto lg:flex items-center gap-6 mb-10">
        <div className="w-full h-[.5px] bg-black"></div>
        <Image src="/assets/hat.svg" alt="Hat" height={80} width={80} />
      </div>
      {/* start  */}
      <div className="w-full max-w-7xl px-4 lg:px-10 mx-auto overflow-hidden">
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
            duration: 0.8,
            stiffness: 100,
            damping: 20,
            delay: 0.3,
          }}
          className="text-2xl lg:text-3xl font-bold text-primary text-center mb-2"
        >
          OUR LOCATION ACROSS GLOBE
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
            duration: 0.8,
            stiffness: 100,
            damping: 20,
            delay: 0.6,
          }}
          className="text-gray-600 max-w-2xl mx-auto text-center mb-10 md:mb-16 lg:mb-20"
        >
          With a presence in key locations around the world, Ample connects
          students to global opportunities with local support. Find us wherever
          your dreams take you.
        </motion.p>

        <WorldMap
          dots={[
            {
              start: { lat: 27.7172, lng: 85.324, label: "Nepal" },
              end: { lat: 51.5072, lng: -0.1276, label: "UK" }, // London
            },
            {
              start: { lat: 27.7172, lng: 85.324, label: "Nepal" },
              end: { lat: 12.9716, lng: 77.5946, label: "India (Bangalore)" },
            },
            {
              start: { lat: 27.7172, lng: 85.324, label: "Nepal" },
              end: { lat: -60.9006, lng: 174.886, label: "New Zealand" },
            },
            {
              start: { lat: 27.7172, lng: 85.324, label: "Nepal" },
              end: { lat: 37.0902, lng: -95.7129, label: "USA" },
            },
            {
              start: { lat: 27.7172, lng: 85.324, label: "Nepal" },
              end: { lat: -40.2744, lng: 133.7751, label: "Australia" },
            },
            {
              start: { lat: 27.7172, lng: 85.324, label: "Nepal" },
              end: { lat: 56.1304, lng: -106.3468, label: "Canada" },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default OurLocations;
