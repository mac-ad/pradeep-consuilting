import React from "react";
import {
  BookOpen,
  University,
  FileText,
  DollarSign,
  BookText,
} from "lucide-react";

const services = [
  {
    title: "Information Dissemination",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    description:
      "Get updated insights on US programs, universities, and academic requirements.",
  },
  {
    title: "University Selection",
    icon: <University className="w-8 h-8 text-primary" />,
    description:
      "Personalized guidance to help you find the right university fit.",
  },
  {
    title: "Application Support",
    icon: <FileText className="w-8 h-8 text-primary" />,
    description:
      "Expert help with forms, documents, and deadlines for a strong application.",
  },
  {
    title: "Scholarship Support",
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    description:
      "Explore scholarships and get help applying to ease your financial load.",
  },
  {
    title: "Visa Assistance",
    icon: <BookText className="w-8 h-8 text-primary" />,
    description: "Step-by-step guidance through your US student visa process.",
  },
];

const CountryWhyAmple = () => {
  return (
    <div className="my-10">
      <h1  className="text-2xl lg:text-3xl font-bold text-primary text-center mb-16">
        Why Ample International Education
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-primary rounded-2xl p-10 shadow-md hover:shadow-lg transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2 text-secondary">
              {service.title}
            </h2>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryWhyAmple;
