"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const programs = [
  {
    id: 1,
    image: "/assets/programs/nursing.png",
    title: "BSc Hons Nursing Studies",
    description:
      "This degree has been designed for international nurses and is aimed at those who wish to enhance their career in nursing.",
  },
  {
    id: 2,
    image: "/assets/programs/adult_nursing.png",
    title: "BSc Hons Adult Nursing",
    description:
      "Adult Nursing courses will give you the ability to cope with a demanding and satisfying profession",
  },
  {
    id: 3,
    image: "/assets/programs/nursing.png",
    title: "Master in Business Administration",
    description:
      "A master of Business Administration is a postgraduate degree focused on business management.",
  },
  {
    id: 4,
    image: "/assets/programs/nursing.png",
    title: "BSc Hons Computing",
    description:
      "A complete IT course for every one focusing on modern tools, technology and methodology. Provides real life skills.",
  },
];

const TopPrograms = () => {
  return (
    <div className="w-full py-16 relative md:h-[120vh] flex justify-center items-center ">
      {/* Background image with lower opacity */}
      <div
        className="absolute inset-0 w-full h-full opacity-75"
        style={{
          backgroundImage: "url(/assets/ukflag.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="w-full max-w-6xl mx-auto relative z-10 px-4">
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
            delay: 0.3,
          }}
          className="text-2xl lg:text-3xl font-bold text-primary text-center mb-10 lg:mb-24"
        >
          TOP PROGRAMS IN UK
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {programs.map((program, index) => (
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
                duration: 0.8,
                stiffness: 100,
                damping: 20,
                delay: index * 0.3,
              }}
              key={program.id}
              className="space-y-3 flex flex-col justify-between items-center"
            >
              <div className="flex justify-center w-32 h-32 object-cover">
                <Image
                  src={program.image}
                  alt={program.title}
                  height={200}
                  width={200}
                />
              </div>
              <h5 className="text-lg md:text-xl font-semibold text-center">
                {program.title}
              </h5>
              <p className="text-xs md:text-sm text-center text-black/80">
                {program.description}
              </p>
              {/* <button className="text-primary font-semibold text-xs md:text-sm flex items-center gap-x-2">
                Learn more <IoChevronForwardSharp />
              </button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPrograms;
