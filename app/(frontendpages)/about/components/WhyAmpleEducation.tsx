"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const why = [
  {
    icon: "/assets/about/user.svg",
    title: "Professional Counseling Team",
    description:
      "Ample Education consultants are trained and registered with authorized government awarding bodies of the respective countries they specialize in.",
  },
  {
    icon: "/assets/about/headset.svg",
    title: "Reliable and Quick Services Anytime",
    description:
      "Our dedicated support team is available round the clock to address your queries and provide timely assistance throughout your application journey.",
  },
  {
    icon: "/assets/about/pro.svg",
    title: "Personalized Guidance",
    description:
      "We provide customized education pathways based on your academic background, career goals, and personal preferences.",
  },
  {
    icon: "/assets/about/transparency.svg",
    title: "Transparency Through the Visa Process",
    description:
      "We maintain complete transparency about visa requirements, processing times, and success rates to ensure you're well-informed at every stage.",
  },
];

const WhyAmpleEducation = () => {
  return (
    <div className="py-10 lg:p-10 bg-[#D8CDFE]">
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
          className="text-2xl lg:text-[32px] text-center mb-3 w-full"
        >
          WHY <span className="text-primary font-bold">AMPLE EDUCATION?</span>
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
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
            delay: 0.6,
          }}
          className="text-center max-w-2xl mx-auto text-black/80"
        >
          Your journey to a world-class education begins here. Ample Education
          is committed to guiding you through every step, from application to
          arrival, with unparalleled expertise.
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 my-14">
          {why.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
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
                delay: index * 0.2,
              }}
              className="group p-3 sm:p-4 lg:p-7 rounded-xl bg-white space-y-4 hover:bg-[#0A3971] hover:text-white transition-all duration-150 ease-in-out"
            >
              <div className="h-10 w-10 md:h-12 md:w-12">
                <Image
                  src={item.icon}
                  alt="Icon"
                  height={55}
                  width={55}
                  className="group-hover:invert"
                />
              </div>

              <h1 className="text-xs md:text-base font-bold">{item.title}</h1>
              <p className="text-xs md:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAmpleEducation;
