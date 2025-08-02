import React from 'react'
import CountryFaq from '../components/CountryFaq';
import VisaProcess from '../components/VisaProcess';
import CountryWhyAmple from '../components/CountryWhyAmple';
import WhyStudyInThisCountry from '../components/WhyStudyInThisCountry';
import CountryHero from '../components/CountryHero';
import CountryUniversity from '../components/CountryUniversity';

const nzContent = [
  "New Zealand is known for its stunning natural landscapes, safe environment, and world-class education system — making it a top destination for international students from Nepal.",
  "The country offers globally recognized universities and institutions, especially strong in areas like agriculture, IT, environmental science, and business.",
  "With a small population and multicultural society, students enjoy personalized learning and opportunities to build global friendships.",
  "New Zealand also provides flexible post-study work opportunities, making it easier for graduates to gain practical experience and transition into the workforce.",
];

const nzFaqs = [
  {
    question: "Can Nepalese students apply to study in New Zealand?",
    answer:
      "Yes, Nepalese students are eligible to apply to New Zealand institutions. Each university or college may have specific academic and English language requirements.",
  },
  {
    question: "Are there scholarships for Nepalese students in New Zealand?",
    answer:
      "Absolutely. There are various scholarships provided by New Zealand government, institutions, and external organizations for international students, including Nepalese applicants.",
  },
  {
    question: "What are the visa requirements for New Zealand?",
    answer:
      "To obtain a student visa for New Zealand, students need to show proof of enrollment, financial stability, a valid passport, medical insurance, and pass character and health checks. The application is usually submitted online.",
  },
  {
    question: "Can I work while studying in New Zealand?",
    answer:
      "Yes. Students can work up to 20 hours per week during the academic year and full-time during scheduled breaks, provided their visa permits it.",
  },
];

const nzVisaSteps = [
  "Secure admission from a New Zealand education provider",
  "Create a RealMe login and complete the online visa application",
  "Gather necessary documents (COE, financial, medical, insurance, etc.)",
  "Pay the visa application fee",
  "Submit the application online or through a VAC",
  "Complete health checks and provide biometrics (if required)",
  "Wait for visa processing",
  "Receive your decision and prepare for travel",
];

const NewZealandHome = () => {
  return (
    <div className="w-full">
      <CountryHero
        imageUrl="/assets/country/new-zealand.jpg"
        headline="Adventure Awaits. Study in New Zealand."
      />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-10 flex flex-col">
        <WhyStudyInThisCountry
          title="Why Study in New Zealand?"
          paragraphs={nzContent}
        />
        <CountryUniversity countryName='NEWZELAND'/>
        <CountryWhyAmple />
        <VisaProcess visaSteps={nzVisaSteps} />
        <CountryFaq faqs={nzFaqs} />
      </div>
    </div>
  );
};

export default NewZealandHome;
