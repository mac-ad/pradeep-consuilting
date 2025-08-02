"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const certifications = [
  "/assets/british_council.svg",
  "/assets/ctevte.svg",
  "/assets/nepal_gov.svg",
];

const ProfessionalCertifications = () => {
  return (
    <div className="w-full py-10">
      {/* Top Hat */}
      <div className="hidden px-4 lg:px-10 w-full max-w-7xl mx-auto lg:flex items-center gap-6 my-10">
        <Image src="/assets/hat.svg" alt="Hat" height={80} width={80} />
        <div className="w-full h-[.5px] bg-black"></div>
      </div>

      {/* start  */}
      <div className="w-full max-w-7xl px-4 lg:px-10 mx-auto">
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
          className="text-2xl lg:text-3xl font-bold text-primary text-center mb-16"
        >
          PROFESSIONAL CERTIFICATIONS
        </motion.h1>

        <div className="flex justify-center items-center px-4 gap-x-4 lg:gap-x-20 h-14 lg:h-24 w-auto">
          {certifications.map((certification, index) => (
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
                duration: 1.2,
                stiffness: 100,
                damping: 20,
                delay: index * 0.3,
              }}
              key={index}
              className="h-36 md:h-44 w-auto flex justify-center items-center"
            >
              <Image
                key={index}
                src={certification}
                alt="certification"
                height={120}
                width={120}
                className="object-fit"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCertifications;
