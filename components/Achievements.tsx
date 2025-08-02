"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const achievements = [
  {
    id: 1,
    svg: "/assets/achievement/student.svg",
    count: "20k +",
    text: "Students Abroad",
  },
  {
    id: 2,
    svg: "/assets/achievement/brain.svg",
    count: "8k +",
    text: "Scholarship Holders",
  },
  {
    id: 3,
    svg: "/assets/achievement/university.svg",
    count: "60+",
    text: "Universities Affiliations",
  },
  {
    id: 4,
    svg: "/assets/achievement/certificate.svg",
    count: "500+",
    text: "Certifications Provided",
  },
];
const imageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};
const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Achievements = () => {
  return (
    <div id="achievements" className="w-full mx-auto my-10">
      <div className="w-full max-w-7xl p-4 lg:px-10 mx-auto flex flex-col md:flex-row gap-6 justify-between items-center">
        {/* left  */}

        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="hidden md:block lg:w-1/2"
        >
          <Image
            src="/assets/achievement/achievement_image.png"
            alt="achievement_image"
            height={500}
            width={500}
          />
        </motion.div>
        {/* right  */}
        <div className="lg:w-1/2 space-y-3">
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
            Our Achievements
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
            className="text-center md:text-start mb-4 text-black/80"
          >
            Ample Education has helped students secure top university
            admissions, win scholarships, and excel in exams shaping bright
            futures with expert guidance.
          </motion.p>
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.3,
                }}
                key={achievement.id}
                className="flex flex-col justify-start items-start space-y-2 shadow-sm border border-primary p-6 rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                <div className="bg-primary rounded-md p-2">
                  <Image
                    src={achievement.svg}
                    alt="image"
                    height={35}
                    width={35}
                  />
                </div>
                <h4 className="text-[20px] lg:text-[28px] font-semibold">
                  {achievement.count}
                </h4>
                <span className="text-[12px] lg:text-[18px] font-medium">
                  {achievement.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
