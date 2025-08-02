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

const page = () => {
  return (
    <div className="w-full lg:py-10">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-10 flex flex-col md:flex-row justify-between items-center">
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
            Message us to know more about{" "}
            <span className="text-[#FA1303]">
              Ample International Education
            </span>
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
            We will response you within 4 hours through your email or phone.
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
            <form action="" className="p-4 sm:p-6 md:p-10 lg:p-16">
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

              {/* Phone Number */}
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

              {/* Message */}
              <div className="flex flex-col gap-y-1 mb-4">
                <label
                  htmlFor="message"
                  className="text-sm md:text-base font-medium"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message here"
                  rows={5}
                  className="px-4 py-2 border border-[#2287fd] rounded-lg shadow-md resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-colors mt-2 cursor-pointer"
              >
                Send a message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <div className="w-full max-w-7xl px-4 md:px-10 lg:px-10 mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.410730484059!2d85.32003177530058!3d27.70460207618414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c1b1bc8bff%3A0x947706cf045f00e8!2sAmple%20International%20Education!5e0!3m2!1sen!2snp!4v1744283633584!5m2!1sen!2snp"
          width="600"
          height="450"
          loading="lazy"
          className="mx-auto mt-10 md:mt-16 lg:mt-24 w-full rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
