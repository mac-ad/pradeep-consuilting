"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";

const tabs = [
  { id: "nepal", label: "In Nepal" },
  { id: "uk", label: "In United Kingdom" },
];

const nepalBranches = [
  {
    id: 1,
    name: "Ample Education Kathmandu",
    address: "Ramshah Path, Kathmandu",
    phoneNo: "+977 15354445 ",
    link: "",
  },
  {
    id: 2,
    name: "Ample Education Pokhara",
    address: "Siddhartha Chowk Pokhara 33700",
    phoneNo: "+977 15354445 ",
    link: "",
  },
];
const ukBranches = [
  {
    id: 1,
    name: "Ample Education Uk",
    address: "Ramshah Path, Kathmandu",
    phoneNo: "+977 15354445 ",
    link: "",
  },
  {
    id: 2,
    name: "Ample Education London",
    address: "Siddhartha Chowk Pokhara 33700",
    phoneNo: "+977 15354445 ",
    link: "",
  },
];

const GlobalBranches = () => {
  const [activeTab, setActiveTab] = useState("nepal");

  return (
    <div className="w-full max-w-5xl mx-auto p-4 lg:p-10 my-10 py-10">
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 20 },
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
        className="text-4xl font-bold text-secondary text-center"
      >
        Global Branches
      </motion.h1>

      {/* toggler */}

      <div className="my-12 flex justify-center items-center space-x-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id
                ? "border-b-3 border-secondary text-secondary font-semibold"
                : ""
            } text-lg font-medium`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* branch card  */}
      {activeTab === "nepal" && (
        <div className=" w-full flex flex-col md:flex-row space-y-4 justify-between items-center">
          {nepalBranches.map((nepal) => (
            <div key={nepal.id} className="flex space-x-3">
              <div className="lg:w-2/5 h-36 border rounded-lg">
                <Image
                  src="/assets/ctevte.svg"
                  alt="img"
                  height={100}
                  width={100}
                  className="h-full w-full"
                />
              </div>
              <div className="lg:w-3/5 flex flex-col space-y-2 justify-start h-full">
                <h1 className="text-base sm:text-lg md:text-xl font-semibold">
                  {nepal.name}
                </h1>
                <span className="text-xs md:text-base">{nepal.address}</span>
                <span className="text-xs md:text-base">{nepal.phoneNo}</span>
                <button className="text-xs px-2 py-1 rounded-full border w-fit">
                  <Link href={nepal.link}> View in Google Map</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === "uk" && (
        <div className=" w-full flex flex-col md:flex-row space-y-4 justify-between items-center">
          {ukBranches.map((nepal) => (
            <div key={nepal.id} className="flex space-x-3">
              <div className="lg:w-2/5 h-36 border rounded-lg">
                <Image
                  src="/assets/ctevte.svg"
                  alt="img"
                  height={100}
                  width={100}
                  className="h-full w-full"
                />
              </div>
              <div className="lg:w-3/5 flex flex-col space-y-2 justify-start h-full">
                <h1 className="text-base sm:text-lg md:text-xl font-semibold">
                  {nepal.name}
                </h1>
                <span className="text-xs md:text-base">{nepal.address}</span>
                <span className="text-xs md:text-base">{nepal.phoneNo}</span>
                <button className="text-xs px-2 py-1 rounded-full border w-fit">
                  <Link href={nepal.link}> View in Google Map</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GlobalBranches;
