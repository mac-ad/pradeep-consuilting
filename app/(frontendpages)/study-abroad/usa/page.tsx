import React from "react";
import CountryFaq from "../components/CountryFaq";
import VisaProcess from "../components/VisaProcess";
import WhyStudyInThisCountry from "../components/WhyStudyInThisCountry";
import CountryHero from "../components/CountryHero";
import CountryWhyAmple from "../components/CountryWhyAmple";
import CountryUniversity from '../components/CountryUniversity';

const usaContent = [
  "Ah, the land of opportunity, Hollywood's home, and the birthplace of the Big Mac — no wonder studying in the USA is a dream for many Nepalese students. But beyond the allure of American pop culture and fast food, the USA offers a world-class education that’s hard to ignore.",
  "American universities are globally renowned for their academic excellence and groundbreaking research. Whether you’re into engineering, business, or even Beyoncé studies (yes, that’s a thing), there’s a top-tier program waiting for you.",
  "Studying in the USA also means immersing yourself in a vibrant, multicultural environment. You’ll meet people from every corner of the globe, expand your worldview, and maybe even perfect your Spanish while binge-watching telenovelas with your new amigos.",
  "And let’s not forget the career prospects. A degree from an American university opens doors to global job opportunities. Plus, “Studied in the USA” does look pretty impressive on your LinkedIn profile.",
];

const usaFaqs = [
  {
    question: "Can I study in the USA with a Nepalese educational background?",
    answer:
      "Yes, Nepalese students can study in the USA with their educational background from Nepal. However, it is important to research and understand the specific admission requirements of each university and program. Many universities consider international students for admission and may have specific criteria for evaluating foreign credentials.",
  },
  {
    question:
      "Are there scholarships available for Nepalese students studying in the USA?",
    answer:
      "Of course, there are scholarships available for Nepalese students studying in the USA. Many universities offer scholarships and financial aid programs specifically for international students. Additionally, there are external scholarships and grants that Nepalese students can explore. It is recommended to research and apply for scholarships well in advance, as deadlines may vary.",
  },
  {
    question: "How can I prepare for the student visa interview?",
    answer:
      "Preparing for the student visa interview is crucial for obtaining a student visa to the USA. It is important to gather all the required documentation, such as the I-20 form, financial documents, and proof of admission. Practice answering common interview questions, demonstrate your genuine intent to study, and provide clear explanations about your educational and career goals. It is advisable to consult with the nearest United States Embassy or Consulate for specific guidance on the visa interview process.",
  },
  {
    question:
      "What are the post-graduation options for Nepalese students in the USA?",
    answer:
      "After graduation, Nepalese students in the USA have various post-graduation options. They can explore opportunities for Optional Practical Training (OPT) and Curricular Practical Training (CPT) to gain practical work experience related to their field of study. Additionally, some students may choose to pursue further studies through graduate programs or professional courses in the USA. It is essential to stay updated with the latest rules and regulations regarding work permits and immigration policies to make informed decisions.",
  },
];

const visaSteps = [
  "Acceptance from an SEVP-Approved Institution",
  "Pay the SEVIS Fee",
  "Complete the Online DS-160 Application",
  "Schedule and Attend a Visa Interview",
  "Compile Required Documentation",
  "Attend the Visa Interview",
  "Pay the Visa Application Fee",
  "Await Visa Processing",
  "Embrace Visa Approval or Denial",
];

const UsaHome = () => {
  return (
    <div className="w-full">
      <CountryHero
        imageUrl="/assets/country/usa.jpg"
        headline="Dream Big. Learn Bigger. Study in the USA.xx"
      />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-10 flex flex-col">
        <WhyStudyInThisCountry
          title="Why Study in USA?"
          paragraphs={usaContent}
        />
        <CountryUniversity countryName={"USA"}/>
        <CountryWhyAmple />
        <VisaProcess visaSteps={visaSteps} />
        <CountryFaq faqs={usaFaqs} />
      </div> 
    </div>
  );
};

export default UsaHome;
