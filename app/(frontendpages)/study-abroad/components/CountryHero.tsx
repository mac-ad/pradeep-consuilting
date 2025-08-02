import React from "react";

interface CountryHeroProps {
  imageUrl: string;
  headline: string;
}

const CountryHero = ({ imageUrl, headline }: CountryHeroProps) => {
  return (
    <div className="-mt-12 relative md:h-[85vh]">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      <div className="w-full relative h-full">
        <div className="w-full h-full max-w-7xl mx-auto px-4 md:px-6 lg:px-10 flex justify-center md:justify-start items-center">
          <h1 className="text-3xl text-center md:text-start md:text-5xl lg:text-7xl font-bold text-white max-w-2xl py-20 md:py-0">
            {headline}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CountryHero;
