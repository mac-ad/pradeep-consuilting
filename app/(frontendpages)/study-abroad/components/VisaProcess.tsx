import React from "react";

type VisaStep = string;

interface VisaProcessProps {
  visaSteps: VisaStep[];
}

const VisaProcess: React.FC<VisaProcessProps> = ({ visaSteps }) => {
  return (
    <div className="my-10">
      <h2  className="text-2xl lg:text-3xl font-bold text-primary text-center mb-16">
        Visa Process
      </h2>
      <div className="space-y-6">
        {visaSteps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="text-primary font-bold text-sm md:text-base lg:text-lg">
              Step {index + 1}:
            </div>
            <p className="text-gray-700 text-base">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaProcess;
