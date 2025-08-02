"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const professionals = [
  {
    image: "/assets/career-counseling/yogesh.png",
    name: "Yogesh Shrestha",
  },
  {
    image: "/assets/career-counseling/nishan.png",
    name: "Nishan Giri",
  },
  {
    image: "/assets/career-counseling/sishir.png",
    name: "Sishir Sharma",
  },
];

const Guidance = () => {
  return (
    <div className="flex flex-col md:flex-row gap-y-5 justify-between items-center my-10 md:mt-16 lg:mt-20">
      <div className="flex lg:w-1/2">
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
          className="h-60 lg:h-90 w-auto mr-auto"
        >
          <Image
            src="assets/career-counseling/guidance.svg"
            alt="Hero Image"
            height={100}
            width={100}
            className="h-full w-full"
          />
        </motion.div>
      </div>
      <div className="w-full lg:w-1/2 space-y-5">
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
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary"
        >
          Study Abroad Guidance through Professionals
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
          Ample Education Consultancy provides expert study abroad guidance
          through experienced professionals. Our team offers personalized
          support in selecting the right university, course, and country based
          on your goals and aspirations. From application assistance to visa
          processing, we ensure a smooth journey to studying in the UK. With our
          in-depth knowledge and professional expertise, we help students make
          informed decisions for a successful international education
          experience.
        </motion.p>

        <div className="flex flex-col justify-start items-start max-w-sm w-full space-y-5 mr-auto md:mr-0  ml-0 md:ml-auto">
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
            className="text-2xl font-semibold md:ml-auto"
          >
            Meet Our Professionals
          </motion.h1>
          <div className="w-full flex justify-start md:justify-end items-center gap-4 lg:gap-10">
            {professionals.map((pro, index) => (
              <motion.div
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
                  delay: index * 0.4,
                }}
                key={index}
                className="flex flex-col items-center space-y-3"
              >
                <Image
                  src={pro.image}
                  alt={pro.name}
                  height={80}
                  width={80}
                  className=" h-13 w-13 lg:h-20 lg:w-20 object-cover rounded-full"
                />
                <span className="text-sm font-medium text-center md:text-start text-black/70">
                  {pro.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidance;
