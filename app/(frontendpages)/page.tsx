import Achievements from "@/components/Achievements";
import BlogsComponent from "@/components/BlogsComponent";
import HeroSection from "@/components/HeroSection";
import Offer from "@/components/Offer";
import OurLocations from "@/components/OurLocations";
import ProfessionalCertifications from "@/components/ProfessionalCertifications";
import RenownedConsultancy from "@/components/RenownedConsultancy";
import StudyAbroad from "@/components/StudyAbroad";
import Testimonials from "@/components/Testimonials";
import TopPrograms from "@/components/TopPrograms";
import TopUKUni from "@/components/TopUKUni";
import React from "react";
import AboutCTA from "./about/components/AboutCTA";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Achievements />
      <StudyAbroad />
      <RenownedConsultancy />
      <Offer />
      <AboutCTA />
      <TopPrograms />
      <TopUKUni />
      <BlogsComponent />
      <Testimonials />
      <OurLocations />
      <ProfessionalCertifications />
    </>
  );
};

export default Home;
