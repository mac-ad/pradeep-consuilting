"use client";
import React from "react";
import { motion } from "motion/react";
import { IoArrowForward, IoPerson } from "react-icons/io5";

const FAQ = () => {
  return (
    <div className="w-full lg:py-10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="text-center mb-10">
          <motion.h2
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
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Join Our Team
          </motion.h2>
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
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Come Become a Part of One of The Best Educational Consultancy in
            Nepal!
          </motion.p>
        </div>

        {/* opening cards  */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 rounded-lg border border-secondary bg-white">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
              Receptionist
            </h1>
            <span className="flex items-center gap-x-2 text-gray-600 text-sm mt-2">
              <IoPerson className="w-5 h-5" /> 2 Open Positions
            </span>
            <p className="mt-3 text-gray-700 text-base">
              Join our team as a Receptionist! Greet visitors, manage calls, and
              provide excellent customer service in a fast-paced environment.
              Strong communication and organizational skills required.
            </p>
            <button className="mt-4 flex items-center gap-x-2 px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors cursor-pointer">
              Apply Now <IoArrowForward className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
