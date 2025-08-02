"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const countries = [
  {
    name: "United Kingdom",
    image: "/assets/country/flag/uk.jpg",
    link: "/uk",
  },
  {
    name: "United States",
    image: "/assets/country/flag/usa.png",
    link: "/study-abroad/usa",
  },
  {
    name: "Canada",
    image: "/assets/country/flag/canada.png",
    link: "/study-abroad/canada",
  },
  {
    name: "Australia",
    image: "/assets/country/flag/australia.png",
    link: "/study-abroad/australia",
  },
  {
    name: "New Zealand",
    image: "/assets/country/flag/nz.png",
    link: "/study-abroad/newzealand",
  },
  {
    name: "India",
    image: "/assets/country/flag/india.png",
    link: "/study-abroad/india",
  },
];

const StudyAbroad = () => {
  return (
    <div className="py-5">
      {/* top hat */}
      <div className="hidden px-4 lg:px-10 w-full max-w-7xl mx-auto lg:flex items-center gap-6 mb-10">
        <div className="w-full h-[0.5px] bg-black"></div>
        <Image src="/assets/hat.svg" alt="Hat" height={80} width={80} />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 lg:px-10 md:h-[75vh]">
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
          className="text-2xl sm:text-3xl font-bold text-primary text-center mb-2"
        >
          STUDY ABROAD
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
          className="text-gray-600 max-w-2xl mx-auto text-center  mb-10"
        >
          Discover the best countries to study abroad with Ample. Get expert
          support to choose the right destination.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:mt-10 lg:mt-14">
          {countries.map((country, index) => (
            <a
              key={index}
              href={country.link}
              className="flex flex-col items-center justify-center group"
            >
              <div className="h-24 w-34 lg:h-36 lg:w-52 overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={country.image}
                  alt={country.name}
                  width={208}
                  height={144}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="font-semibold text-base mt-2 text-center">
                {country.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;
