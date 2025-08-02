import React from 'react';
import CountryHero from '../components/CountryHero';
import WhyStudyInThisCountry from '../components/WhyStudyInThisCountry';
import CountryWhyAmple from '../components/CountryWhyAmple';
import VisaProcess from '../components/VisaProcess';
import CountryFaq from '../components/CountryFaq';
import CountryUniversity from '../components/CountryUniversity';

const indiaContent = [
  "India, a land of rich cultural heritage and academic excellence, is an increasingly popular destination for Nepalese students. Its proximity to Nepal, affordable tuition fees, and cultural similarities make it an attractive option.",
  "India offers a wide range of programs in fields such as medicine, engineering, business, and the arts. Renowned institutions like IITs, AIIMS, and Delhi University provide quality education with global recognition.",
  "With a large population of international students, you’ll experience a diverse learning environment, vibrant campus life, and the chance to build networks across South Asia.",
  "India also offers opportunities for internships and practical experience, especially in sectors like IT, healthcare, and startups — giving students a competitive edge after graduation.",
];

const indiaFaqs = [
  {
    question: "Can I study in India with a Nepalese academic background?",
    answer:
      "Yes. Nepalese students can easily apply to Indian universities with their local qualifications. Many Indian institutions recognize Nepalese board results like SEE or +2 and may require entrance exams depending on the program.",
  },
  {
    question: "Are scholarships available for Nepalese students in India?",
    answer:
      "Yes, many Indian universities and the Indian government offer scholarships for SAARC country students, including Nepalese applicants. Programs like ICCR scholarships are popular and competitive.",
  },
  {
    question: "Do Nepalese students need a visa to study in India?",
    answer:
      "Nepalese students generally do not need a visa to study in India due to the bilateral agreements between Nepal and India. However, it’s advised to check with your institution and the embassy for the latest regulations.",
  },
  {
    question: "What are the living costs like in India for students?",
    answer:
      "Living costs in India are relatively affordable compared to Western countries. Depending on the city, students can manage accommodation, food, and travel on a moderate budget.",
  },
];

const indiaVisaSteps = [
  "Choose a recognized Indian university or college",
  "Submit your academic documents and application",
  "Wait for admission confirmation and enrollment procedures",
  "Apply for a student ID and clearance if required",
  "Travel arrangements and settlement in campus or private housing",
];

const IndiaHome = () => {
  return (
    <div className="w-full">
      <CountryHero
        imageUrl="/assets/country/india.jpg"
        headline="Affordable Excellence. Study in India."
      />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-10 flex flex-col">
        <CountryUniversity countryName='INDIA'/>
        <WhyStudyInThisCountry
          title="Why Study in India?"
          paragraphs={indiaContent}
        />
        <CountryWhyAmple />
        <VisaProcess visaSteps={indiaVisaSteps} />
        <CountryFaq faqs={indiaFaqs} />
      </div>
    </div>
  );
};

export default IndiaHome;
