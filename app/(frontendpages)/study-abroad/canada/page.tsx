import React from 'react';
import CountryHero from '../components/CountryHero';
import WhyStudyInThisCountry from '../components/WhyStudyInThisCountry';
import CountryWhyAmple from '../components/CountryWhyAmple';
import VisaProcess from '../components/VisaProcess';
import CountryFaq from '../components/CountryFaq';
import CountryUniversity from '../components/CountryUniversity';

const canadaContent = [
  "Canada has emerged as a top destination for Nepalese students due to its high-quality education system, affordable tuition, and welcoming environment. Canadian institutions are known for their academic rigor and practical approach.",
  "Whether you're pursuing a diploma, undergraduate, or postgraduate degree, Canada offers globally recognized programs in fields like healthcare, technology, business, and more.",
  "Canada also provides an excellent quality of life, safe cities, and a multicultural society that helps international students feel at home. Plus, many Canadian cities rank among the best in the world for students.",
  "Post-graduation work opportunities are another reason to choose Canada. Programs like the Post-Graduation Work Permit (PGWP) allow students to gain valuable work experience after completing their studies.",
];

const canadaFaqs = [
  {
    question: "Can I study in Canada with a Nepalese academic background?",
    answer:
      "Yes. Canadian universities accept Nepalese qualifications like the +2 or A-levels. You may need to provide certified transcripts and meet program-specific requirements, such as language proficiency (IELTS or TOEFL).",
  },
  {
    question: "Are scholarships available for Nepalese students in Canada?",
    answer:
      "Yes. Many universities in Canada offer scholarships to international students based on merit, need, or leadership. Additionally, external organizations and the Canadian government also provide funding options for Nepalese students.",
  },
  {
    question: "Do I need a visa to study in Canada?",
    answer:
      "Yes. Nepalese students must apply for a Canadian Study Permit. You'll need an acceptance letter from a Designated Learning Institution (DLI), proof of financial support, and other supporting documents to apply.",
  },
  {
    question: "Can I work while studying in Canada?",
    answer:
      "Yes. International students in Canada are allowed to work part-time (up to 20 hours per week) during academic sessions and full-time during scheduled breaks, provided they meet the eligibility criteria.",
  },
];

const canadaVisaSteps = [
  "Apply and get accepted by a Designated Learning Institution (DLI)",
  "Gather required documents (proof of funds, acceptance letter, etc.)",
  "Apply online or via paper for a Canadian Study Permit",
  "Provide biometrics and attend visa interview if required",
  "Wait for visa decision and prepare for travel to Canada",
];

const CanadaHome = () => {
  return (
    <div className="w-full">
      <CountryHero
        imageUrl="/assets/country/canada.jpg"
        headline="Study Smart. Live Better. Study in Canada."
      />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-10 flex flex-col">
        <WhyStudyInThisCountry
          title="Why Study in Canada?"
          paragraphs={canadaContent}
        />
        <CountryUniversity countryName='CANADA'/>
        <CountryWhyAmple />
        <VisaProcess visaSteps={canadaVisaSteps} />
        <CountryFaq faqs={canadaFaqs} />
      </div>
    </div>
  );
};

export default CanadaHome;
