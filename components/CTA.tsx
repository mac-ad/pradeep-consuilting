import Image from "next/image";
import React from "react";

const CTA: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-4 sm:mx-6 md:mx-auto rounded-2xl bg-[#2287FD] p-3 flex flex-col md:flex-row items-center justify-between h-auto shadow-lg z-50 absolute -top-8">
      {/* Left Section */}
      <div className="flex items-start space-x-4 w-full">
        <Image
          src="/ample-logo.svg"
          alt="Ample Logo"
          height={60}
          width={60}
          className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0"
        />
        <div className="flex flex-col space-y-2 w-full">
          <h1 className="font-bold text-white text-base sm:text-lg md:text-2xl">
            Ample International Education
          </h1>
          <p className="text-xs sm:text-sm text-white opacity-80 leading-relaxed">
            Ample Education empowers students with expert guidance for
            university admissions, scholarships, and test prep, ensuring a
            smooth academic journey and a brighter future through personalized
            education consulting.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex justify-center w-full md:w-2/5 mt-4 md:mt-0">
        <div className="h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48">
          <Image
            src="/assets/footersvg.svg"
            alt="Footer Image"
            height={150}
            width={150}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
