"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const CourseSelection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-y-5 justify-between items-center">
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
          Career Counseling & Course Selection{" "}
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
          Ample Education Consultancy offers expert career counseling and course
          selection services to help students make the right academic and
          professional choices. Our experienced counselors assess your
          interests, skills, and career goals to recommend the best UK
          universities and programs. Whether for undergraduate or postgraduate
          studies, we provide personalized guidance to align your education with
          future opportunities. With our support, you can confidently choose a
          path that leads to success.
        </motion.p>

        <div className="flex flex-col justify-start items-start max-w-sm w-full space-y-5">
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
            className="text-2xl font-semibold"
          >
            English Test Preparation
          </motion.h1>
          <div className="flex gap-4">
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
                delay: 0.4,
              }}
              className="h-32 w-40 border rounded-md flex flex-col justify-around items-center"
            >
              <Image
                src="/assets/career-counseling/ielts.svg"
                alt="IELTS Preparation"
                height={80}
                width={80}
                className="object-contain"
              />
              <span className="mt-2 text-start font-medium text-black/70">
                IELTS Preparation
              </span>
            </motion.div>
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
                delay: 0.4,
              }}
              className="h-32 w-40 border rounded-md flex flex-col justify-around items-center"
            >
              <Image
                src="/assets/career-counseling/pearson.svg"
                alt="PET Preparation"
                height={80}
                width={80}
                className="object-contain"
              />
              <span className="mt-2 text-start font-medium text-black/70">
                PET Preparation
              </span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex lg:w-1/2">
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
          className="h-60 lg:h-90 w-auto ml-auto"
        >
          <Image
            src="assets/career-counseling/course.svg"
            alt="Hero Image"
            height={100}
            width={100}
            className="h-full w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CourseSelection;
