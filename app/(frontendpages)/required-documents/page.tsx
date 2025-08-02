"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const tabs = [
  { id: "main", label: "Study In UK" },
  { id: "secondary", label: "English Proficiency" },
];

const Documents = () => {
  const [activeTab, setActiveTab] = useState("main");

  return (
    <div className="w-full py-10">
      <div className="w-full max-w-7xl px-4 lg:px-10 mx-auto">
        {/* hero  */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="lg:w-1/2 space-y-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center md:text-start">
              Important Documents that you must have.
            </h1>
            <p className="text-sm md:text-base text-black/80 text-center md:text-start">
              These documents are necessary for your visa and application
              process. Group.
            </p>
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search Documents"
                className="w-full px-10 py-2 rounded-full border border-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:border-transparent placeholder-gray-500
                         text-gray-700"
              />
              <BiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 
                         h-5 w-5 text-gray-500"
              />
            </div>
          </div>
          <div className="lg:w-1/2 h-60 lg:h-96 w-auto">
            <Image
              src="assets/docs.svg"
              alt="Hero Image"
              height={100}
              width={100}
              className="h-full w-full"
            />
          </div>
        </div>

        <div>
          {/* menu  */}
          <div className="flex justify-center items=center py-16 gap-x-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer ${
                  activeTab === tab.id
                    ? "text-secondary font-semibold border-b-3"
                    : ""
                }`}
              >
                <h4>{tab.label}</h4>
              </button>
            ))}
          </div>
          {/* card  */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-7">
            <div className="p-4 rounded-2xl shadow-lg">
              <div className="w-full h-80 px-3">
                <Image
                  src="/assets/blogimagesmaple.jpg"
                  alt="Document"
                  height={200}
                  width={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <h6 className="p-2">Grade 10 Transcript</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
