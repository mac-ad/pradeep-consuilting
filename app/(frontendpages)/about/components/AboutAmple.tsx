"use client";
import React from "react";
import { motion } from "motion/react";

const AboutAmple = () => {
  return (
    <div className="lg:h-[70vh] md:py-10 w-full max-w-7xl mx-auto px-4 lg:px-10 flex flex-col-reverse md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-2">
        <motion.h3
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
            delay: 0.2,
          }}
          className="text-base md:text-xl font-semibold"
        >
          Welcome to Ample,
        </motion.h3>
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
            delay: 0.4,
          }}
          className="font-bold text-primary text-2xl md:text-3xl lg:text-4xl"
        >
          About Ample Education
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
          className="text-base text-black/80 text-justify"
        >
          Ample Education Consultancy offers expert career counseling and course
          selection services to help students make the right academic and
          professional choices. Our experienced counselors assess your
          interests, skills, and career goals to recommend the best UK
          universities and programs. Whether for undergraduate or postgraduate
          studies, we provide personalized guidance to align your education with
          future opportunities. With our support, you can confidently choose a
          path that leads to success.
        </motion.p>
      </div>

      {/* Right Section */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 40 },
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
        className="w-full md:w-1/2 mb-8"
      >
        <iframe
          src="https://www.youtube.com/embed/xP2n_Z5ft1Y?si=19ky-lGU0Mlk79Js"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-64 md:h-72 lg:h-84"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default AboutAmple;
