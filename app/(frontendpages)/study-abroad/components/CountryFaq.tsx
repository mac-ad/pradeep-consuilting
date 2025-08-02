"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

type FAQ = {
  question: string;
  answer: string;
};

type CountryFaqProps = {
  faqs: FAQ[];
};

const CountryFaq: React.FC<CountryFaqProps> = ({ faqs }) => {
  return (
    <>
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
          Get answers to common questions about studying in our consultancy
          services
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
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-lg lg:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base lg:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </>
  );
};

export default CountryFaq;
