"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "motion/react";

import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "swiper/css/autoplay";
import { useClient } from "@/hooks/use-client";

const testimonials = [
  {
    name: "Yogesh Shrestha",
    image: "/assets/blogimagesmaple.jpg",
    date: "2025-04-13",
    message:
      "I was really confused about the UK student visa process, but Ample International Consultancy guided me with such clarity. From university selection to visa documentation, their team was incredibly supportive and responsive. I'm now in the UK, and it's all thanks to them!",
  },

  {
    name: "Anita Gurung",
    image: "/assets/testimonial-anita.jpg",
    date: "2025-04-10",
    message:
      "Ample International Consultancy made my UK student visa process so smooth and stress-free. The team was very professional and always available for my queries.",
  },
  {
    name: "Rajiv Thapa",
    image: "/assets/testimonial-rajiv.jpg",
    date: "2025-03-22",
    message:
      "From choosing the right UK university to getting my CAS letter, Ample supported me at every step. I’m really grateful for their expert guidance.",
  },
  {
    name: "Sujata K.C.",
    image: "/assets/testimonial-sujata.jpg",
    date: "2025-02-18",
    message:
      "I had no idea where to begin for UK studies, but Ample made everything simple—from application to visa. Now I'm studying in London!",
  },
  {
    name: "Bibek Maharjan",
    image: "/assets/testimonial-bibek.jpg",
    date: "2025-01-05",
    message:
      "Highly recommend Ample International Consultancy if you're planning to study in the UK. They helped me pick the best course and university for my goals.",
  },
];

const Testimonials: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const isClient = useClient();

  return (
    <div id="testimonials" className="w-full py-10">
      {/* Top Hat */}
      <div className="hidden px-4 lg:px-10 w-full max-w-7xl mx-auto lg:flex items-center gap-6 mb-10">
        <Image src="/assets/hat.svg" alt="Hat" height={80} width={80} />
        <div className="w-full h-[.5px] bg-black"></div>
      </div>
      {/* Start */}
      <div className="w-full max-w-7xl px-4 lg:px-10 mx-auto">
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
            duration: 0.8,
            stiffness: 100,
            damping: 20,
            delay: 0.3,
          }}
          className="text-2xl lg:text-3xl font-bold text-primary text-center mb-2"
        >
          STUDENT EXPERIENCES AND STORIES
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
            duration: 0.8,
            stiffness: 100,
            damping: 20,
            delay: 0.6,
          }}
          className="text-gray-600 max-w-2xl mx-auto text-center mb-10"
        >
          Hear directly from students who turned their study abroad dreams into
          reality. Real journeys, real challenges, and real growth — shared to
          inspire your own path.
        </motion.p>
        <div className="relative">
          <Swiper
            navigation={{
              nextEl: ".custom-next-button",
              prevEl: ".custom-prev-button",
            }}
            loop={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="mySwiper"
          >
            {testimonials.map((testi, index) => (
              <SwiperSlide
                key={index}
                className="border-2 border-primary rounded-2xl"
              >
                <div className="flex flex-col justify-center items-center max-w-2xl mx-auto p-14 md:p-8 lg:p-16 space-y-3">
                  <div className="rounded-full h-16 w-16 md:h-28 md:w-28 overflow-hidden">
                    <Image
                      src="/assets/blogimagesmaple.jpg"
                      alt="Student"
                      height={96}
                      width={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="font-semibold text-lg md:text-xl">
                    {testi.name}
                  </h4>
                  <span className="text-sm md:text-base text-gray-600">
                    {isClient ? new Date(testi.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }) : testi.date}
                  </span>
                  <p className="font-times-new-roman text-center text-sm md:text-base">
                    {testi.message}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="custom-prev-button bg-primary text-white p-2 rounded-full hover:bg-opacity-80 absolute top-1/2 left-[-15px] md:left-[-20px] transform -translate-y-1/2 z-10"
            aria-label="Previous Slide"
          >
            <GoArrowLeft className="w-5 h-5" />
          </button>
          <button
            className="custom-next-button bg-primary text-white p-2 rounded-full hover:bg-opacity-80 absolute top-1/2 right-[-15px] md:right-[-20px] transform -translate-y-1/2 z-10"
            aria-label="Next Slide"
          >
            {/* <FaArrowRight  /> */}
            <GoArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
