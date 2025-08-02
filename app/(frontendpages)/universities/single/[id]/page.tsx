"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { University } from "../../page";
import { EventFormData } from "@/app/types/event";
import { useClient } from "@/hooks/use-client";
const tabs = [
  { id: "about", label: "About University" },
  { id: "courses", label: "Available Courses/Programs" },
];

const UniversityPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("about");
  const [university, setUniversity] = useState<University | null>(null);
  const [events, setEvents] = useState<EventFormData[] | []>([]);
  const isClient = useClient();
  useEffect(() => {
    const fetchSingleUniversity = async () => {
      try {
        const response = await fetch(`/api/university?id=${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log("university data: ", data);
          setUniversity(data);
        }
      } catch (error) {
        console.log("error fetching single university: ", error);
      }
    };
    const fetchEvents = async () => {
      try {
        const response = await fetch(`/api/event?not_expired=true`);
        if (response.ok) {
          const data = await response.json();
          console.log("events: ", data);
          setEvents(data);
        }
      } catch (error) {
        console.log("error while fetching events: ", error);
      }
    };
    fetchSingleUniversity();
    fetchEvents();
  }, [id]);
  return (
    <div className="w-full -mt-11 md:-mt-16">
      {/* University Image */}
      <div className="relative w-full h-[60vh]">
        <Image
          src={university?.university_image ?? "/fallback-image.png"}
          alt={university?.university_name ?? "university image"}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute bottom-5 lg:left-35 text-white bg-white/10 backdrop-blur-sm p-3 rounded-md z-20">
          <h3 className="font-semibold text-4xl">
            {university?.university_name}
          </h3>
          <h6 className="font-medium text-xl">
            {university?.university_address}
          </h6>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-7xl px-4 lg:px-10 mx-auto py-10 flex flex-col lg:flex-row md:gap-x-4">
        {/* Main Content */}
        <div className="lg:w-4/6 flex flex-col space-y-3">
          {/* Menu */}
          <div className="grid grid-cols-2 gap-x-2 md:gap-x-4 shadow p-2 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "font-semibold bg-secondary text-white"
                    : ""
                } rounded-md py-4 px-2 text-[10px] md:text-base font-medium cursor-pointer`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* About Section */}
          {activeTab === "about" && (
            <div className="space-y-2 p-4 shadow-lg">
              <h3 className="font-bold text-secondary text-2xl">
                About {university?.university_name ?? "University"}
              </h3>
              <p className="text-black/80 leading-7">
                {university?.university_about}
              </p>
            </div>
          )}

          {activeTab === "courses" && (
            <div className="space-y-6 p-6 shadow-lg rounded-lg bg-white">
              <h3 className="font-bold text-secondary text-3xl mb-4 border-b pb-2">
                Available Programs
              </h3>

              {university?.available_programs?.length ? (
                university.available_programs.map((program) => (
                  <div
                    key={program.id}
                    className="p-4 border rounded-lg shadow-sm bg-gray-50 space-y-2"
                  >
                    <h4 className="text-xl font-semibold text-primary">
                      {program.program_name}
                    </h4>

                    <div className="text-black/80 leading-6">
                      <span className="font-medium">Degree Type:</span>{" "}
                      {program.degree_type} <br />
                      <span className="font-medium">Duration:</span>{" "}
                      {program.duration} <br />
                      <span className="font-medium">Department:</span>{" "}
                      {program.department}
                    </div>

                    {program.description && (
                      <p className="text-black/70 mt-2 italic">
                        {program.description}
                      </p>
                    )}

                    {program.entry_requirements ? (
                      <div className="mt-3">
                        <h5 className="font-semibold text-sm text-gray-700">
                          Entry Requirements
                        </h5>
                        {program.entry_requirements.map((req, idx) => (
                          <p key={idx} className="text-black/80 leading-6">
                            <span className="font-medium">{req.criteria}:</span>{" "}
                            {req.details}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 italic">
                        No entry requirements listed.
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-black/70 italic">No courses available.</p>
              )}
            </div>
          )}
        </div>

        {/* Upcoming Events */}
        {events.length > 0 && (
          <div className="w-72 md:w-96 lg:w-2/6 p-4 shadow-lg rounded-xl flex flex-col space-y-2">
            <h2 className="text-lg font-semibold">Upcoming Event</h2>
            <Image
              src={events[0].event_image || "/assets/blogimagesmaple.jpg"} // fallback
              alt="Upcoming Event"
              height={300}
              width={200}
              className="object-cover w-full"
            />
            <h2 className="text-lg font-semibold text-secondary">
              {events[0].event_title}
            </h2>
            <span className="font-medium text-base">
              Happening at:{" "}
              {isClient ? new Date(events[0].event_date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }) : events[0].event_date}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversityPage;
