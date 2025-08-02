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

const TopUKUni = () => {
  return (
    <div className="w-full py-10 mt-16 md:mt-8 lg:mt-0">
      {/* top hat  */}
      <div className="hidden px-4 lg:px-10 w-full max-w-7xl mx-auto lg:flex items-center gap-6 mb-10">
        <Image src="/assets/hat.svg" alt="Hat" height={80} width={80} />
        <div className="w-full h-[.5px] bg-black"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 lg:px-10 flex flex-col md:flex-row justify-between gap-x-20">
        {/* left  */}
        <div className="lg:w-2/5 space-y-6">
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
              delay: 0.3,
            }}
            className="text-3xl lg:text-3xl font-bold text-center md:text-start text-primary"
          >
            Get Admitted to Top Universities in{" "}
            <span className="text-[#FA1303]">UK</span>
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
            className="text-base text-black/80 text-justify"
          >
            We work with the top ranked universities. 4th of the World&apos;s
            top 6 universities and 19th out World&apos;s Top 100 Universities
            are in the UK as per QS World Rankings. We provide researchers,
            educators and students excellent research opportunities. A handful
            of research centric universities forms an elite group called the
            Russell Group.
          </motion.p>
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 40 },
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
              delay: 0.5,
            }}
            className="hidden md:block px-6 py-2.5 rounded-md text-sm font-semibold  border-2 border-primary/60 text-primary cursor-pointer relative overflow-hidden group"
          >
            <Link
              href="/universities"
              className="relative z-10 transition-colors duration-300 group-hover:text-white"
            >
              Explore More
            </Link>
            <span className="absolute inset-0 z-0 w-0 h-full transition-all duration-300 bg-gradient-to-r from-[#3D03FA] to-secondary  left-0 group-hover:w-full"></span>
          </motion.button>
        </div>

        {/* right  */}
        <div className="lg:w-3/5">
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
          <button className=" mt-10  w-full md:hidden px-4 py-3 rounded-md text-sm font-semibold  border-2 border-primary text-primary cursor-pointer">
            <Link href="/universities">Explore More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopUKUni;
