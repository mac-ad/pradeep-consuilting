"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { motion } from "motion/react";
import { SlLocationPin } from "react-icons/sl";

export interface EntryRequirement {
  id: string;
  criteria: string;
  details: string;
  programId: string;
}

export interface AvailableProgram {
  id: string;
  program_name: string;
  duration: string;
  degree_type: string;
  department: string;
  description: string;
  universityId: string;
  entry_requirements: EntryRequirement[];
}

export interface University {
  id: string;
  university_name: string;
  university_about: string;
  university_image: string;
  university_address: string;
  available_programs: AvailableProgram[];
}

const Universities = () => {
  const [universities, setUniversities] = useState<University[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchAllUniversities = async () => {
      try {
        const response = await fetch("/api/university/");
        if (response.ok) {
          const data = await response.json();
          setLoading(true);
          setUniversities(data);
        }
      } catch (error) {
        console.log("error fetching universities: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllUniversities();
  }, []);

  const [searchText, setSearchText] = useState("");
  const [searchedUniversity, setSearchedUniversity] = useState<University[]>(
    []
  );

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      const trimmed = searchText.trim();
      if (trimmed === "") {
        setSearchedUniversity([]);
        return;
      }

      try {
        const response = await fetch(`/api/university?name=${trimmed}`);
        if (response.ok) {
          const data = await response.json();
          setSearchedUniversity(data);
        }
      } catch (error) {
        console.error("Error while searching university:", error);
      }
    }, 500); // debounce delay in ms

    return () => clearTimeout(delayDebounce);
  }, [searchText]);

  const handleSearchUniversity = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="w-full my-3 lg:my-10">
      <div className="w-full max-w-7xl px-4 lg:px-10 mx-auto">
        {/* hero  */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="lg:w-1/2 space-y-5">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                duration: 0.6,
                stiffness: 100,
                damping: 20,
                delay: 0.4,
              }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center md:text-start"
            >
              Discover top Universities Represented by Ample Education
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                duration: 0.6,
                stiffness: 100,
                damping: 20,
                delay: 0.6,
              }}
              className="text-sm md:text-base text-black/80 text-center md:text-start"
            >
              We work with the top ranked universities. 4th of the World’s top 6
              universities and 19th out World’s Top 100 Universities are in the
              UK as per QS World Rankings. We provide researchers, educators and
              students excellent research opportunities. A handful of research
              centric universities forms an elite group called the Russell
              Group.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                duration: 0.6,
                stiffness: 100,
                damping: 20,
                delay: 0.6,
              }}
              className="relative w-full max-w-xs"
            >
              <input
                type="text"
                placeholder="Search Universities"
                className="w-full px-10 py-2 rounded-full border border-gray-400 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              focus:border-transparent placeholder-gray-500
              text-gray-700"
                value={searchText}
                onChange={(e) => handleSearchUniversity(e)}
              />
              <BiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 
              h-5 w-5 text-gray-500"
              />
            </motion.div>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              duration: 0.6,
              stiffness: 100,
              damping: 20,
              delay: 0.6,
            }}
            className="lg:w-1/2 h-60 lg:h-96 w-auto"
          >
            <Image
              src="assets/university_hero.svg"
              alt="Hero Image"
              height={100}
              width={100}
              className="h-full w-full"
            />
          </motion.div>
        </div>

        <div className="py-10">
          {loading ? (
            // Skeleton Grid
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="relative aspect-square w-full max-w-[300px] mx-auto animate-pulse bg-gray-200 rounded-sm"
                ></div>
              ))}
            </div>
          ) : (
            // University Grid
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {(searchedUniversity.length > 0
                ? searchedUniversity
                : universities || []
              ).map((uni: University, index) => (
                <Link key={index} href={`/universities/single/${uni.id}`}>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: 40 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      type: "spring",
                      duration: 0.3,
                      stiffness: 100,
                      damping: 20,
                      delay: 0.2 * index,
                    }}
                    className="relative aspect-square w-full max-w-[300px] mx-auto group cursor-pointer"
                  >
                    <Image
                      src={uni.university_image}
                      alt={uni.university_name}
                      height={300}
                      width={300}
                      className="w-full h-full object-cover rounded-sm"
                    />
                    <div className="absolute bottom-3 left-3 flex flex-col">
                      <span className="text-white font-medium text-sm md:text-base hover:underline">
                        {uni.university_name}
                      </span>
                      <span className="text-gray-100 flex gap-x-2 items-center">
                        <SlLocationPin className="text-white" />
                        {uni.university_address}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Universities;
