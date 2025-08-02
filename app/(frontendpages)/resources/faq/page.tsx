"use client";
import React from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      id: "item-1",
      question: "What services does your UK education consultancy offer?",
      answer:
        "We provide comprehensive services including university selection, application assistance, visa guidance, accommodation arrangements, pre-departure orientation, and ongoing support throughout your studies in the UK.",
    },
    {
      id: "item-2",
      question: "How do I choose the right UK university for my course?",
      answer:
        "Our consultants will help you select the best university based on your academic profile, career goals, budget, and preferred location. We consider university rankings, course structure, employability rates, and scholarship opportunities to make personalized recommendations.",
    },
    {
      id: "item-3",
      question: "What are the entry requirements for UK universities?",
      answer:
        "Entry requirements vary by university and course level. For undergraduate programs, you typically need completed high school with good grades. For postgraduate courses, a bachelor's degree with a minimum GPA is required. Most programs also require English language proficiency tests like IELTS or TOEFL. We can provide specific requirements for your chosen program.",
    },
    {
      id: "item-4",
      question: "What are the costs of studying in the UK?",
      answer:
        "Tuition fees range from £12,000 to £35,000 per year depending on the course and university. Living costs vary from £9,000 to £15,000 per year depending on the location. London has higher living costs compared to other UK cities. Our consultants can help you find scholarships and budgeting options.",
    },
    {
      id: "item-5",
      question: "What is the UK student visa application process?",
      answer:
        "You'll need to apply for a Student Visa (previously Tier 4). The process includes receiving a Confirmation of Acceptance for Studies (CAS) from your university, proving you have sufficient funds, demonstrating English language proficiency, and attending a visa interview. Our visa experts provide step-by-step guidance throughout this process.",
    },
    {
      id: "item-6",
      question: "Can I work while studying in the UK?",
      answer:
        "Yes, international students can work up to 20 hours per week during term time and full-time during holidays. This helps with living expenses and provides valuable work experience. After graduation, you can apply for the Graduate Route visa, allowing you to work in the UK for 2 years (3 years for PhD graduates).",
    },
    {
      id: "item-7",
      question: "When should I start my UK university application process?",
      answer:
        "We recommend starting at least 12-15 months before your intended start date. For September intake, begin your preparation in June-July of the previous year. Some competitive courses like medicine have earlier deadlines. The earlier you start, the more time you'll have for university selection, application preparation, and visa processing.",
    },
    {
      id: "item-8",
      question: "How does your consultancy fee structure work?",
      answer:
        "We offer various service packages to meet different needs. Our basic package includes university selection and application assistance, while premium packages cover everything from application to arrival in the UK. We also offer individual services. Please contact us for a detailed fee structure based on your requirements.",
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

export default FAQ;
