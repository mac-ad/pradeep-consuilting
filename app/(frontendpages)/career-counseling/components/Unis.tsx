"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const universityLogos = [
  "/assets/uniLogos/1.svg",
  "/assets/uniLogos/2.svg",
  "/assets/uniLogos/3.svg",
  "/assets/uniLogos/4.svg",
  "/assets/uniLogos/5.svg",
  "/assets/uniLogos/6.svg",
  "/assets/uniLogos/7.svg",
  "/assets/uniLogos/8.svg",
  "/assets/uniLogos/9.svg",
  "/assets/uniLogos/10.svg",
  "/assets/uniLogos/11.svg",
];

const Unis = () => {
  return (
    <div className="w-full max-w-7xl mx-auto  flex flex-col md:flex-row justify-between gap-x-10">
      {/* left  */}
      <div className="lg:w-1/2 space-y-5">
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
            duration: 0.4,
            stiffness: 100,
            damping: 20,
            delay: 0.2,
          }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary w-full"
        >
          Career Counseling & Course Selection
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
            delay: 0.4,
          }}
          className="text-sm md:text-base text-black/80 text-justify"
        >
          Ample Education Consultancy offers expert career counseling and course
          selection guidance to help students choose the right academic path in
          the UK. Our experienced counselors assess your interests and goals to
          recommend suitable universities and programs. Whether for
          undergraduate or postgraduate studies, we provide personalized support
          to ensure informed decisions, enhancing your career prospects and
          academic success. Let us guide you toward a bright and fulfilling
          future.
        </motion.p>
        <button className="hidden md:block px-6 py-2 rounded-md text-sm font-semibold  border-2 border-primary/60 text-primary cursor-pointer group relative overflow-hidden">
          <Link
            href="/universities"
            className="relative z-10 transition-colors duration-300 group-hover:text-white"
          >
            Explore More
          </Link>
          <span className="absolute inset-0 w-0 z-0 h-full left-0 bg-gradient-to-r from-[#3D03FA] to-secondary transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>

      {/* right  */}
      <div className="lg:w-1/2">
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
            duration: 0.7,
            stiffness: 100,
            damping: 20,
            delay: 0.5,
          }}
          className="font-semibold text-2xl"
        >
          Universities in UK{" "}
        </motion.h1>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-2 md:gap-y-5 items-center">
          {universityLogos.map((uni, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -10 },
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
                delay: index * 0.1,
              }}
              key={index}
              className="h-24 w-auto flex justify-center items-center"
            >
              <Image
                src={uni}
                alt="University Logo"
                height={100}
                width={100}
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
        <button className="md:hidden px-6 py-2 rounded-md text-sm font-semibold  border-2 border-primary/60 text-primary cursor-pointer w-full">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Unis;
