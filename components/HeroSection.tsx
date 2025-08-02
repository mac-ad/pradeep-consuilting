"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="-mt-6 md:mt-0 w-full mx-auto my-5 lg:my-24 relative">
      {/* scroll down  */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        className="hidden lg:flex flex-col items-center gap-5 absolute right-10 bottom-5"
      >
        <span className="vertical-text">Scroll Down</span>
        <Image
          src="/assets/arrow_down.png"
          alt="arrow"
          height={30}
          width={30}
          className="h-10 w-auto"
        />
      </motion.div>
      <div className="hidden md:block absolute top-0 right-10 h-32 auto">
        <Image
          src="/assets/ICEF.png"
          alt="icef"
          height={150}
          width={150}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-full max-w-7xl h-full mx-auto p-4 flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-x-10 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
        >
          <Image
            src="/assets/hero_arrow.svg"
            alt="Arrow"
            height={1100}
            width={1100}
            className="hidden lg:block absolute -top-16 -left-36 z-20"
          />
        </motion.div>
        {/* left section  */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4 z-30 md:text-left my-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
            className="text-3xl sm:text-[44px] md:text-4xl lg:text-6xl font-semibold font-hero max-w-lg mx-auto md:mx-0"
          >
            The <span className="text-primary">Leading Global</span> Education
            Consultancy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
            className="text-black/80 text-lg sm:text-[20px]"
          >
            Discover the Opportunity to Study in Universities of Your Choice All
            Over the World.
          </motion.p>

          <div className="flex items-center justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              className="flex items-center -space-x-4 -ml-3 md:ml-0"
            >
              {[1, 2, 3, 4].map((uni, index) => (
                <div
                  key={index}
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/30 backdrop-blur-sm border-2 border-primary flex items-center justify-center"
                >
                  <Image
                    src="/ample-logo.svg"
                    alt="University"
                    className="object-cover rounded-full p-[3px]"
                    height={80}
                    width={80}
                  />
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
              className="ml-6 lg:ml-2 text-sm sm:text-[16px] font-semibold text-black"
            >
              Trusted by
              <span className="text-primary"> 20k+ </span>
              Students
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
              className="relative overflow-hidden px-7 py-3 rounded-md text-sm font-semibold text-white border-primary/60 bg-gradient-to-r from-[#3D03FA] to-[#240294] group cursor-pointer"
            >
              <Link
                href="/appointment"
                className="relative z-10 transition-colors duration-300 group-hover:text-white"
              >
                Apply Online
              </Link>
              <span className="absolute inset-0 z-0 w-0 h-full transition-all duration-500 bg-gradient-to-r from-secondary to-primary group-hover:w-full left-0"></span>
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
              className="relative overflow-hidden px-4 py-3 rounded-md text-sm font-semibold border border-primary/60 text-primary cursor-pointer group"
            >
              <Link
                href="/contact"
                className="relative z-10 transition-colors duration-300 group-hover:text-white"
              >
                Request a Callback
              </Link>
              <span className="absolute inset-0 left-0 z-0 h-full w-0 bg-gradient-to-r from-[#3D03FA] to-secondary transition-all duration-500 group-hover:w-full"></span>
            </motion.button>
          </div>
        </div>

        {/* right section  */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center -mt-8 md:mt-0 relative">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute right-10 top-8 md:right-6 md:top-15 bg-primary/40 h-16 w-16 lg:h-20 lg:w-20 rounded-full z-40"
          ></motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
            className="absolute left-10 -bottom-5 md:left-40 md:-bottom-10 bg-primary/60 h-24 w-24 lg:h-40 lg:w-40 rounded-full z-40"
          ></motion.span>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
            className="h-64 w-64 sm:h-72 sm:w-72 mx-auto md:mx-0 lg:h-[28rem] lg:w-[28rem] z-50"
          >
            <Image
              src="/assets/hero_image.svg"
              alt="Hero Image"
              height={450}
              width={450}
              className=" w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* CSS for scroll rotation */}
      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
