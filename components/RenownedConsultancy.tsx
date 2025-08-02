"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const images = [
  "/assets/renowned/image1.png",
  "/assets/renowned/image2.png",
  "/assets/renowned/image3.png",
  "/assets/renowned/image4.png",
];

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};
const imageVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const RenownedConsultancy = () => {
  return (
    <div className="lg:py-10 w-full">
      {/* top hat  */}
      <div className="hidden px-4 lg:px-10 w-full max-w-7xl mx-auto lg:flex items-center gap-6 mb-10">
        <Image src="/assets/hat.svg" alt="Hat" height={80} width={80} />
        <div className="w-full h-[.5px] bg-black"></div>
      </div>
      <div className="w-full max-w-7xl p-4 lg:p-10 mx-auto flex flex-col lg:flex-row justify-between items-center lg:gap-20 space-y-3">
        {/* left  */}
        <div className="lg:w-1/2 flex flex-col space-y-3">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
            className="text-2xl lg:text-3xl font-bold text-primary text-center md:text-start mb-6"
          >
            Renowned Education Consultancy in Nepal
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.3,
            }}
            className="text-sm md:text-base text-center lg:text-start text-black/80"
          >
            &quot;A Complete way for Global Education for Global
            Competition&quot;, with the very motto Ample International Education
            offers quality counseling and guides them to secure the perfect
            future student.
          </motion.p>
          <motion.h5
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4,
            }}
            className="hidden lg:block text-lg text-black/80"
          >
            &quot;We explore your ample potential through quality
            education.&quot;
          </motion.h5>
          <button className="hidden lg:block px-4 py-2 rounded-md text-sm font-semibold  border-2 border-primary/60 text-primary cursor-pointer w-fit  relative overflow-hidden group">
            <Link
              href="#"
              className="relative z-10 transition-colors duration-300 group-hover:text-white"
            >
              Learn more
            </Link>
            <span className="absolute z-0 w-0 h-full inset-0 bg-gradient-to-r from-[#3D03FA] to-secondary  transition-all duration-300 left-0 group-hover:w-full"></span>
          </button>
        </div>

        {/* right  */}
        <div className="lg:w-1/2 w-full grid grid-cols-2 gap-2 lg:gap-4">
          {images.map((image, index) => (
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.2,
              }}
              key={index}
              className={`break-inside-avoid ${
                index === 2 ? "-mt-24 lg:-mt-40" : ""
              }`}
            >
              <Image
                src={image}
                alt="Grid Images"
                height={150}
                width={150}
                className="w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <button className="lg:hidden px-4 py-2 rounded-md text-sm font-semibold  border-2 border-primary/60 text-primary cursor-pointer w-full">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default RenownedConsultancy;
