"use client";

import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { motion } from "motion/react";

const directors = [
  {
    name: "Mr. Yogesh Shrestha",
    role: "Director - United Kingdom",
    description:
      "Mr. Shrestha executes the position of Director who manages the overall operations of the business. He holds a Master's in Business and Marketing degree from Australia & UK Universities. Mr. Shrestha is also a certified agent for British Council.",
    phone: "+447447627889",
    email: "hari@ampleeducation.co.uk",
    socialLinks: [
      {
        icon: <FaFacebook />,
        link: "#",
      },
    ],
  },
  {
    name: "Ms. Anisha Sharma",
    role: "Director - Nepal",
    description:
      "Ms. Sharma is responsible for overseeing the operations in Nepal. She has extensive experience in education consultancy and holds a Master's in Business Administration.",
    phone: "+9779851234567",
    email: "anisha@ampleeducation.com",
    socialLinks: [
      {
        icon: <FaFacebook />,
        link: "#",
      },
    ],
  },
];

const teamMembers = [
  {
    image: "/assets/blogimagesmaple.jpg",
    name: "Yogesh Shrestha",
    role: "Director - Nepal",
  },
  {
    image: "/assets/blogimagesmaple.jpg",
    name: "Anisha Sharma",
    role: "Marketing Manager",
  },
  {
    image: "/assets/blogimagesmaple.jpg",
    name: "Rajesh Karki",
    role: "Operations Head",
  },
  {
    image: "/assets/blogimagesmaple.jpg",
    name: "Sita Pandey",
    role: "HR Manager",
  },
  {
    image: "/assets/blogimagesmaple.jpg",
    name: "Prakash Bista",
    role: "Finance Manager",
  },
  {
    image: "/assets/blogimagesmaple.jpg",
    name: "Sunita Thapa",
    role: "Project Coordinator",
  },
  {
    image: "/assets/blogimagesmaple.jpg",
    name: "Bikash Gurung",
    role: "IT Specialist",
  },
  {
    image: "/assets/blogimagesmaple.jpg",
    name: "Krishna Adhikari",
    role: "Senior Developer",
  },
  {
    image: "/assets/blogimagesmaple.jpg",
    name: "Meena Shrestha",
    role: "Customer Relations",
  },
  {
    image: "/assets/blogimagesmaple.jpg",
    name: "Dipesh Maharjan",
    role: "Business Analyst",
  },
];

const OurTeam = () => {
  return (
    <div
      id="team"
      className="w-full max-w-7xl px-4 sm:px-6 lg:px-10 mx-auto py-10"
    >
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
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary text-center mb-8"
      >
        Meet Our Team
      </motion.h1>

      {/* Directors */}
      <div className="flex flex-col">
        {directors.map((director, index) => (
          <div
            key={index}
            className={`p-2 py-4 sm:p-3 lg:p-10 flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } justify-between items-center gap-6 md:gap-10 border-b`}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -40 },
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
              className="w-full md:w-2/5 lg:w-2/6 h-64 sm:h-72 md:h-80"
            >
              <Image
                src="/assets/blogimagesmaple.jpg"
                alt={director.name}
                height={100}
                width={100}
                className="h-full w-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            <div className="w-full md:w-3/5 lg:w-4/6 space-y-2 lg:space-y-4 mt-4 md:mt-0">
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
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold"
              >
                {director.name}
              </motion.h1>
              <motion.div
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
                  delay: 0.5,
                }}
                className="text-secondary text-sm sm:text-base"
              >
                {director.role}
              </motion.div>
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
                  duration: 0.6,
                  stiffness: 100,
                  damping: 20,
                  delay: 0.6,
                }}
                className="text-sm sm:text-base text-justify text-black/80"
              >
                {director.description}
              </motion.p>

              {/* Contact info */}
              <motion.div
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
                  delay: 0.8,
                }}
                className="flex flex-col text-sm sm:text-base"
              >
                <div className="flex gap-x-2">
                  <span className="text-black/80">Contact Number:</span>
                  <span className="text-secondary/80 font-medium">
                    {director.phone}
                  </span>
                </div>
                <div className="flex gap-x-2">
                  <span className="text-black/80">Email:</span>
                  <span className="text-secondary/80 font-medium">
                    {director.email}
                  </span>
                </div>
              </motion.div>

              {/* Social links */}
              <div className="flex gap-x-3 text-xl">
                {director.socialLinks.map((social, i) => (
                  <motion.a
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
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other members */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 pt-10">
        {teamMembers.map((team, index) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              duration: 0.4,
              stiffness: 100,
              damping: 20,
              delay: index * 0.1,
            }}
            key={index}
            className="flex flex-col justify-center items-center space-y-2 py-6 px-4 sm:px-6 lg:px-10 shadow-[0px_3px_15px_0px_rgba(0,_0,_0,_0.1)] rounded-2xl"
          >
            <div className="h-24 w-24 sm:h-32 sm:w-36 lg:h-40 lg:w-40 mb-4">
              <Image
                src={team.image}
                alt="Team Member"
                height={100}
                width={100}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-sm md:text-lg font-semibold text-center">
              {team.name}
            </h1>
            <span className="text-xs md:text-base text-secondary text-center">
              {team.role}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
