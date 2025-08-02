"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoCallOutline, IoLogoWhatsapp, IoMailOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { motion } from "motion/react";
import Link from "next/link";

const Appointment = () => {
  return (
    <div className="w-full py-5 lg:py-10">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-10 flex flex-col md:flex-row justify-between items-start">
        <div className="lg:w-1/2 space-y-5">
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
              delay: 0.2,
            }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary max-w-xl lg:leading-12"
          >
            Check Your Eligibility
            <span className="text-[#FA1303]"> International </span>
            for Study
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
            className="text-sm md:text-base text-black/80 text-justify"
          >
            We work with the top ranked universities. 4th of the World’s top 6
            universities and 19th out World’s Top 100 Universities are in the UK
            as per QS World Rankings. We provide researchers, educators and
            students excellent research opportunities. A handful of research
            centric universities forms an elite group called the Russell Group..
          </motion.p>
          <motion.div
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
              delay: 0.8,
            }}
          >
            <div className="flex flex-col text-lg space-y-3">
              <span className="flex space-x-2 items-center">
                <SlLocationPin className="h-5 w-5" />
                <span>Ramshah Path, Kathmandu</span>
              </span>
              <span className="flex space-x-2 items-center">
                <SlLocationPin className="h-5 w-5" />
                <span>Siddhartha Chowk, Pokhara 33700</span>
              </span>
              <span className="flex space-x-2 items-center">
                <IoMailOutline className="h-5 w-5" />
                <Link href="mailto:nepal@ampleedu.com">nepal@ampleedu.com</Link>
              </span>
              <span className="flex space-x-2 items-center">
                <IoCallOutline className="h-5 w-5" />
                <Link href="tel:+97715354445">+977 15354445</Link>
              </span>
              <span className="flex space-x-2 items-center">
                <IoLogoWhatsapp className="h-5 w-5" />
                <Link href="https://wa.me/+9779851184081">+977 9851184081</Link>
              </span>
              <Link href="https://wa.me/+447403444728">+447403444728</Link>
              <Link href="https://wa.me/+9779802314772">+977 9802314772</Link>
            </div>
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
                delay: 1,
              }}
              className="flex gap-x-3 md:gap-x-6 lg:gap-x-8 my-10"
            >
              <a target="_blank" href="https://www.facebook.com/ampleedu">
                <FaFacebookF className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/ample_international_education/"
              >
                <FaInstagram className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCyLK5WdmcYnAlPi8bUClQUg"
              >
                <FaYoutube className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/ample-international-education/"
              >
                <FaLinkedinIn className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
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
            delay: 0.6,
          }}
          className="lg:w-1/2 flex justify-end w-full"
        >
          <div className="w-full max-w-80 px-3 md:px-8 lg:max-w-lg mx-auto border-2 border-primary rounded-xl shadow-md">
            <form action="" className="p-4 sm:p-6 md:p-10 lg:p-14">
              {/* Name */}
              <div className="flex flex-col gap-y-1 mb-4">
                <label
                  htmlFor="name"
                  className="text-sm md:text-base font-medium"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your full name"
                  className="px-4 py-2 border border-[#2287fd] rounded-lg shadow-md"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-y-1 mb-4">
                <label
                  htmlFor="email"
                  className="text-sm md:text-base font-medium"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="px-4 py-2 border border-[#2287fd] rounded-lg shadow-md"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-y-1 mb-4">
                <label
                  htmlFor="phone"
                  className="text-sm md:text-base font-medium"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="px-4 py-2 border border-[#2287fd] rounded-lg shadow-md"
                />
              </div>

              {/* City */}
              <div className="flex flex-col gap-y-1 mb-4">
                <label
                  htmlFor="city"
                  className="text-sm md:text-base font-medium"
                >
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City Name"
                  className="px-4 py-2 border border-[#2287fd] rounded-lg shadow-md"
                />
              </div>

              {/* Street */}
              <div className="flex flex-col gap-y-1 mb-4">
                <label
                  htmlFor="street"
                  className="text-sm md:text-base font-medium"
                >
                  Street <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="street"
                  id="street"
                  placeholder="Street address"
                  className="px-4 py-2 border border-[#2287fd] rounded-lg shadow-md"
                />
              </div>

              {/* Branch */}
              <div className="flex flex-col gap-y-1 mb-4">
                <label
                  htmlFor="branch"
                  className="text-sm md:text-base font-medium"
                >
                  Select a Branch <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="branch"
                  id="branch"
                  placeholder="Branch"
                  className="px-4 py-2 border border-[#2287fd] rounded-lg shadow-md"
                />
              </div>

              {/* Date */}
              <div className="flex flex-col gap-y-1 mb-4">
                <label
                  htmlFor="date"
                  className="text-sm md:text-base font-medium"
                >
                  Appointment Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Set Appointment Date"
                  className="px-4 py-2 border border-[#2287fd] rounded-lg shadow-md w-full"
                />
              </div>

              {/* Time */}
              <div className="flex flex-col gap-y-1 mb-4">
                <label
                  htmlFor="time"
                  className="text-sm md:text-base font-medium"
                >
                  Appointment Time <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="px-4 py-2 border border-[#2287fd] rounded-lg shadow-md w-full"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-colors mt-2 cursor-pointer"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Appointment;
