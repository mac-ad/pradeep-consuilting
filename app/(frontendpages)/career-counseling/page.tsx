import React from "react";
import CourseSelection from "./components/CourseSelection";
import Guidance from "./components/Guidance";
import Image from "next/image";
import Unis from "./components/Unis";

const CareerCounseling = () => {
  return (
    <div className="w-full py-5 lg:py-10 ">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-10">
        <CourseSelection />
        {/* top hat  */}
        <div className="hidden w-full max-w-7xl mx-auto lg:flex items-center gap-6 my-16">
          <Image src="/assets/hat.svg" alt="Hat" height={80} width={80} />
          <div className="w-full h-[.5px] bg-black"></div>
        </div>
        <Guidance />
        {/* top hat  */}
        <div className="hidden w-full max-w-7xl mx-auto lg:flex items-center gap-6 my-16">
          <div className="w-full h-[.5px] bg-black"></div>
          <Image src="/assets/hat.svg" alt="Hat" height={80} width={80} />
        </div>
        <Unis />
      </div>
    </div>
  );
};

export default CareerCounseling;
