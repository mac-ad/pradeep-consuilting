"use client"
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { University } from "@/prisma/generated/client";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface CountryUniversityProps {
  countryName: string; 
}

const CountryUniversity: React.FC<CountryUniversityProps> = ({ countryName }) => {
  const [universities, setUniversities] = useState<University[]>([]);
  const router=useRouter();

  useEffect(() => {
    const fetchUniversitiesByCountryName = async () => {
      try {
        const response = await fetch(`/api/university?country=${countryName}`);
        if (response.ok) {
          const data: University[] = await response.json();
          setUniversities(data);
        } else {
          // handle errors here if needed
          setUniversities([]);
        }
      } catch (error: unknown) {
        console.log("error: ",error);
        // error handling
        setUniversities([]);
      }
    };
    fetchUniversitiesByCountryName();
  }, [countryName]);

  return (
    <div className="container mx-auto px-4 py-6">
      {universities.length>0 &&   <h1 className="text-2xl lg:text-3xl font-bold text-primary text-center mb-16">
        Suggested Universities in {countryName}
      </h1> }

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: "40px" }}
      >
        {universities.map((uni) => (
          <SwiperSlide key={uni.id}>
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 h-full flex flex-col">
              <Image
                src={uni.university_image}
                alt={uni.university_name}
                className="w-full h-40 object-cover rounded mb-4 cursor-pointer"
                width={100}
                height={100}
                onClick={()=>{
                  router.push(`/universities/single/${uni.id}`)
                }}
           
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {uni.university_name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{uni.university_address}</p>
              <p className="text-sm text-gray-700 mb-2 line-clamp-3">
                {uni.university_about}
              </p>
              {/* <p className="text-xs text-gray-500 mt-auto">
                Programs: {uni.available_programs.length}
              </p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CountryUniversity;
