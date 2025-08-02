"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const UkLandingPage = () => {
  return (
    <section className="w-full md:h-[80vh] my-10 md:my-5">

      {/* Main Content */}
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row justify-between items-center mx-auto px-4 md:px-6 lg:px-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6 z-10 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
          >
            The <span className="text-primary">Leading UK</span> Education
            Consultancy in Nepal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-700"
          >
            Study at top universities in the UK with expert guidance and
            support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link href="/appointment" passHref>
              <button className="relative px-7 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#3D03FA] to-[#240294] rounded-md group overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Book an Appointment
                  <Image
                    src="/assets/country/uk.jpg"
                    alt="UK Flag"
                    height={14}
                    width={30}
                  />
                </span>
                <span className="absolute inset-0 w-0 h-full bg-gradient-to-r from-secondary to-primary group-hover:w-full transition-all duration-500 z-0 left-0"></span>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Section - Hero Image */}
        <div className="w-full md:w-1/2 md:-mr-10 flex justify-center md:justify-end relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[36rem] lg:h-[36rem]"
          >
            <Image
              src="/uk-home.png"
              alt="Hero Image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default UkLandingPage;
