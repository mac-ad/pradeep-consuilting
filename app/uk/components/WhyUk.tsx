import React from "react";
import Image from "next/image";

const WhyUk = () => {
  return (
    <section className="relative w-full h-auto py-10 md:py-24 bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/big-ben.jpg"
          alt="Big Ben UK"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Why Study in the <span className="text-primary">United Kingdom?</span>
        </h2>

        <div className="text-base sm:text-lg md:text-xl text-white/90 space-y-4 lg:px-10">
          <p>
            Are you a Nepalese student dreaming of pursuing higher education abroad? Look no further than the United Kingdom! With its prestigious universities, rich cultural heritage, and world-class education system, the UK is an ideal destination for international learners.
          </p>
          <p>
            Studying in the UK can be a life-changing experience. Not only do you gain access to top-tier academic resources, but you also open doors to global career opportunities and personal development.
          </p>
          <p>
            An international education equips you with the skills and knowledge to thrive in today’s interconnected world — making you a valuable asset in the job market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUk;
