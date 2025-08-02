"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const offers = [
  {
    id: 1,
    icon: "/assets/edu.svg",
    title: `Career Counseling & Course Selection`,
    description:
      "Not sure which course or career path to choose? Our expert counselors assess your interests, skills, and future job market trends to guide you toward the best educational opportunities.",
    details:
      "Our career counseling includes personalized assessment tests, one-on-one sessions with industry professionals, and comprehensive reports that map out potential career trajectories. We analyze current job market demands and future trends to ensure your educational investment pays off in the long run.",
  },
  {
    id: 2,
    icon: "/assets/book.svg",
    title: "Study Abroad Guidance through Professionals",
    description:
      "Dreaming of studying in the USA, UK, Canada, or Australia? We help you pick the best university, course, and country based on your goals, budget, and career prospects.",
    details:
      "Our study abroad consultants have direct relationships with over 500 universities worldwide. We provide country-specific guidance on education systems, living costs, work opportunities, and immigration policies. Our service includes ROI analysis for different countries and programs to help you make an informed decision.",
  },
  {
    id: 3,
    icon: "/assets/uni.svg",
    title: "University Application & Visa Assistance",
    description:
      "Applying to universities can be overwhelming. We streamline the process by handling paperwork, SOPs, scholarships, and visa applications.",
    details:
      "Our application success rate is over 95%. We provide SOP writing workshops, recommendation letter guidance, and application review services. For visas, we conduct mock interviews, prepare documentation, and offer guidance on financial requirements. We also help you apply for scholarships with a dedicated scholarship matching service.",
  },
  {
    id: 4,
    icon: "/assets/test.png",
    title: "Test Preparation (IELTS, TOEFL etc.)",
    description:
      "Ace your entrance exams with our expertly designed test prep courses. We provide personalized coaching, mock tests, and tips to help you succeed.",
    details:
      "Our test prep programs feature small batch sizes with instructors who scored in the top 1% of their respective exams. We offer customized study plans, weekly practice tests, and detailed performance analytics. Our students improve their scores by an average of 15-20% after completing our programs.",
  },
  {
    id: 5,
    icon: "/assets/accommodation.png",
    title: "Accommodation & Post-Arrival Support",
    description:
      "From finding safe housing to settling into a new culture, our team ensures you feel at home abroad with reliable post-arrival services and support.",
    details:
      "We partner with trusted accommodation providers near major universities. Our post-arrival support includes airport pickup services, local SIM cards, bank account setup assistance, and cultural orientation programs. We also organize regular meetups with other international students and alumni networks in your destination country.",
  },
  {
    id: 6,
    icon: "/assets/placement.png",
    title: "Scholarship & Financial Aid Support",
    description:
      "We assist students in applying for scholarships and financial aid, helping reduce overall study and living expenses abroad.",
    details:
      "We guide students through scholarship and financial aid applications to improve their chances of securing support. Our assistance helps make studying and living in countries like the UK, Australia, Canada, and others more affordable.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Offer = () => {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleCardFlip = (id: number): void => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="w-full mx-auto py-10 px-4 sm:px-6">
      {/* Top hat */}
      <div className="hidden lg:flex items-center gap-6 mb-10 max-w-7xl mx-auto">
        <div className="w-full h-[0.5px] bg-black"></div>
        <Image src="/assets/hat.svg" alt="Hat" height={80} width={80} />
      </div>
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
          delay: 0.3,
        }}
        className="text-2xl sm:text-3xl font-bold text-primary text-center mb-2"
      >
        WHAT DO WE OFFER?
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
        className="text-gray-600 max-w-2xl mx-auto text-center  mb-10"
      >
        Ample offers end-to-end support for your study abroad journey. Explore
        tailored guidance, visa assistance, and more.
      </motion.p>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {offers.map((offer, index) => (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 1.2,
              damping: 20,
              delay: index * 0.3,
            }}
            key={offer.id}
            className="relative min-h-[320px] sm:min-h-[360px]"
          >
            {/* Card container with perspective and isolation */}
            <div
              className="w-full h-full relative"
              style={{ perspective: "1000px", isolation: "isolate" }}
            >
              {/* Flipping container */}
              <div
                className={`relative w-full h-full transition-all duration-700 ${
                  flippedCards[offer.id] ? "z-10" : "z-0"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards[offer.id]
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)",
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute w-full h-full flex flex-col space-y-4 p-4 sm:p-6 rounded-lg border "
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                  }}
                >
                  <div className="h-12 w-12 sm:h-14 sm:w-14">
                    <Image
                      src={offer.icon}
                      alt="Icon"
                      height={70}
                      width={70}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold">
                    {offer.title}
                  </h3>
                  <p className="text-sm sm:text-base flex-1 text-black/80">
                    {offer.description}
                  </p>
                  <button
                    onClick={() => toggleCardFlip(offer.id)}
                    className="rounded-full py-1 px-3 border text-xs sm:text-sm self-start cursor-pointer hover:border-primary hover:text-primary transition-all duration-100 ease-in-out"
                    aria-label={`Learn more about ${offer.title}`}
                  >
                    Learn more
                  </button>
                </div>

                {/* Back of card */}
                <div
                  className="absolute w-full h-full flex flex-col p-4 sm:p-6 rounded-lg border bg-primary/5 shadow-sm"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden", // For Safari
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-sm sm:text-[18px] flex-1 text-black/80 overflow-y-auto">
                    {offer.details}
                  </p>
                  <button
                    onClick={() => toggleCardFlip(offer.id)}
                    className="rounded-full py-1 px-3 border text-xs sm:text-sm self-start cursor-pointer hover:border-primary hover:text-primary transition-all duration-100 ease-in-out mt-4"
                    aria-label={`Go back to ${offer.title} overview`}
                  >
                    Go back
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
