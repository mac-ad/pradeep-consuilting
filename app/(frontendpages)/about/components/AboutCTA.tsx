"use client";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const AboutCTA = () => {
  return (
    <div className="py-10 bg-[#D8CDFE] w-full">
      <div className="w-full max-w-7xl px-4 lg:px-10 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="lg:w-3/5 space-y-3">
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
            className="text-xl md:text-2xl font-bold"
          >
            Ready to make your study abroad dream a reality?
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -20 },
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
              delay: 0.6,
            }}
            className="text-base md:text-lg text-black/80"
          >
            Explore our tailored student services, and let us guide you every
            step of the way. Contact us today to start your journey
          </motion.p>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 20 },
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
            delay: 0.8,
          }}
          className="lg:w-2/5 w-full flex justify-start md:justify-end mt-5 md:mt-0"
        >
          <button className="w-fit max-w-xs md:w-full px-7 py-3 rounded-md text-sm font-semibold  border border-primary/60 text-white cursor-pointer bg-gradient-to-r from-[#3D03FA] to-[#240294] relative group overflow-hidden">
            <Link
              href="/appointment"
              className="relative z-10 transition-colors duration-300 group-hover:text-white"
            >
              Book an Appointment
            </Link>
            <span className="absolute inset-0 w-0 h-full left-0 bg-gradient-to-r from-secondary to-[#3D03FA] transition-all duration-500 group-hover:w-full"></span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCTA;
