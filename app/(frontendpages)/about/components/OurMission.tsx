"use client";

import React from "react";
import { motion } from "motion/react";

const OurMission = () => {
  return (
    <div className="mt-10">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-10">
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
            delay: 0.4,
          }}
          className="text-4xl font-bold text-secondary text-center"
        >
          Our Mission
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
          className="text-base lg:text-[18px] text-black/80 text-center w-full max-w-4xl mx-auto mt-10"
        >
          Our mission is to empower students to make well-informed decisions
          about their education, future careers, the best courses in the UK, and
          the best universities in the UK. We believe that quality education is
          a stepping stone to success, and we are here to make that journey
          smoother, less stressful, and more rewarding. Whether you&apos;re a
          student seeking to study abroad, a parent looking to support your
          child&apos;s education, or an educational institution seeking to
          enhance your offerings, Ample International Education is here to guide
          you every step of the way to study in the UK.
        </motion.p>
      </div>
    </div>
  );
};

export default OurMission;
