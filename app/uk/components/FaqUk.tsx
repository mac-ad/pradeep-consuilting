"use client";
import React from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqUk = () => {
const faqItems = [
  {
    id: "item-1",
    question: "Can Nepalese students work part-time while studying in the UK?",
    answer:
      "Yes, Nepalese students can work up to 20 hours per week during term time and full-time during holidays. However, it's important to follow UK visa regulations and ensure work doesn't interfere with academic commitments.",
  },
  {
    id: "item-2",
    question: "What are the post-study options for Nepalese students in the UK?",
    answer:
      "After graduation, Nepalese students can apply for internships, graduate schemes, or full-time jobs. The Graduate Route visa allows them to work for 2 years (3 years for PhD graduates). Alternatively, students may return to Nepal with valuable skills and experience.",
  },
  {
    id: "item-3",
    question: "How can an education consultancy help Nepalese students?",
    answer:
      "Our consultancy provides academic counseling, university application support, document preparation, visa guidance, test preparation, scholarship advice, and ongoing assistance throughout the study journey.",
  },
  {
    id: "item-4",
    question: "What are the benefits of studying in the UK for Nepalese students?",
    answer:
      "The UK offers world-class education, career opportunities, cultural diversity, and international networking. Students gain globally recognized qualifications and personal growth through a vibrant academic environment.",
  },
  {
    id: "item-5",
    question: "Are there scholarships or financial aid for Nepalese students?",
    answer:
      "Yes, many UK universities offer scholarships based on merit, need, or field of study. Our consultancy helps you explore these options and assists with the application process.",
  },
  {
    id: "item-6",
    question: "What services does your UK education consultancy offer?",
    answer:
      "We provide comprehensive services including university selection, application assistance, visa guidance, accommodation arrangements, pre-departure orientation, and ongoing support throughout your studies in the UK.",
  },
  {
    id: "item-7",
    question: "How do I choose the right UK university for my course?",
    answer:
      "Our consultants help you choose the best university based on your academic profile, career goals, budget, and preferences. We consider rankings, course structure, employability rates, and scholarships.",
  },
  {
    id: "item-8",
    question: "What are the entry requirements for UK universities?",
    answer:
      "Undergraduate programs require completed high school with good grades. Postgraduate courses need a bachelor's degree with a minimum GPA. English language tests like IELTS or TOEFL are often required. We can guide you with exact requirements.",
  },
  {
    id: "item-9",
    question: "What are the costs of studying in the UK?",
    answer:
      "Tuition fees range from £12,000 to £35,000 per year. Living costs vary from £9,000 to £15,000 annually depending on location. London is more expensive. We help you plan your budget and explore scholarship options.",
  },
  {
    id: "item-10",
    question: "What is the UK student visa application process?",
    answer:
      "To apply for a Student Visa, you'll need a CAS (Confirmation of Acceptance for Studies), proof of funds, English language proficiency, and may need to attend an interview. Our visa experts guide you step-by-step.",
  },
  {
    id: "item-11",
    question: "When should I start my UK university application process?",
    answer:
      "Start your application process at least 12-15 months in advance. For the September intake, begin planning in June or July of the previous year. Early preparation increases your chances of success.",
  },
  {
    id: "item-12",
    question: "How does your consultancy fee structure work?",
    answer:
      "We offer flexible service packages. The basic package includes university and application support, while premium packages cover end-to-end services including arrival support. Contact us for detailed pricing.",
  },
];


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
            Frequently Asked Questions
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
            Get answers to common questions about studying in the UK and our
            consultancy services
          </motion.p>
        </div>

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
          className="w-full lg:max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left font-medium text-lg lg:text-xl">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base lg:text-lg">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default FaqUk;
