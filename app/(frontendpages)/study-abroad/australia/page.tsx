import React from 'react';
import CountryHero from '../components/CountryHero';
import WhyStudyInThisCountry from '../components/WhyStudyInThisCountry';
import CountryWhyAmple from '../components/CountryWhyAmple';
import VisaProcess from '../components/VisaProcess';
import CountryFaq from '../components/CountryFaq';
import CountryUniversity from '../components/CountryUniversity';
const australiaContent = [
  "Australia is one of the most sought-after destinations for Nepalese students due to its top-ranked universities, friendly environment, and high quality of life. It offers a perfect blend of academic excellence and vibrant student life.",
  "The Australian education system is known for its innovation, research, and strong global reputation. Whether you're pursuing business, IT, healthcare, or engineering, there's a program tailored for you.",
  "Living in Australia means being part of a multicultural society. Students enjoy a safe and inclusive environment, modern cities, and breathtaking natural beauty — from beaches to the Outback.",
  "International students in Australia also have the advantage of working part-time during studies and full-time during breaks, along with post-study work visas that enhance long-term career prospects.",
];

const australiaFaqs = [
  {
    question: "Is my Nepalese education accepted by Australian universities?",
    answer:
      "Yes. Most Australian universities accept Nepalese +2 or equivalent qualifications. You’ll also need to meet English language requirements, such as IELTS or PTE scores, based on the program.",
  },
  {
    question: "What kind of scholarships are available for Nepalese students?",
    answer:
      "Many Australian universities offer merit-based scholarships for international students. Additionally, government-sponsored awards like the Australia Awards Scholarships are also open to Nepalese applicants.",
  },
  {
    question: "What is the process for obtaining an Australian student visa?",
    answer:
      "To apply for an Australian student visa (subclass 500), you need an offer letter, Confirmation of Enrolment (CoE), proof of funds, English proficiency, and valid health insurance. You must apply online through the Australian immigration portal.",
  },
  {
    question: "Can I stay in Australia after completing my studies?",
    answer:
      "Yes. Australia offers Temporary Graduate Visas (subclass 485) for international students to stay and work after graduation. Duration and eligibility depend on your qualification and location of study.",
  },
];

const australiaVisaSteps = [
  "Apply to an Australian university and receive Confirmation of Enrolment (CoE)",
  "Create an ImmiAccount and gather required documents",
  "Complete and submit the online visa application (subclass 500)",
  "Undergo health examination and provide biometrics if required",
  "Pay the visa fee and await decision",
];

const AustraliaHome = () => {
  return (
    <div className="w-full">
      <CountryHero
        imageUrl="/assets/country/australia.jpg"
        headline="Study Globally. Thrive Locally. Study in Australia."
      />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-10 flex flex-col">
        <WhyStudyInThisCountry
          title="Why Study in Australia?"
          paragraphs={australiaContent}
        />
        <CountryUniversity countryName='AUSTRALIA' />
        <CountryWhyAmple />
        <VisaProcess visaSteps={australiaVisaSteps} />
        <CountryFaq faqs={australiaFaqs} />
      </div>
    </div>
  );
};

export default AustraliaHome;
