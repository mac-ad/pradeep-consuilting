import React from "react";

interface WhyStudyProps {
  title: string;
  paragraphs: string[];
}

const WhyStudyInThisCountry = ({ title, paragraphs }: WhyStudyProps) => {
  return (
    <div className="my-10">
      <h1 className="text-2xl lg:text-3xl font-bold text-primary text-center mb-12">
        {title}
      </h1>
      {paragraphs.map((para, i) => (
        <p
          key={i}
          className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed text-center"
        >
          {para}
        </p>
      ))}
    </div>
  );
};

export default WhyStudyInThisCountry;
