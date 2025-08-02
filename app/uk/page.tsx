import React from "react";
import UkLandingPage from "./components/UkLandingPage";
import WhyUk from "./components/WhyUk";
import TopUKUni from "@/components/TopUKUni";
import TopPrograms from "@/components/TopPrograms";
import FaqUk from "./components/FaqUk";

const UkHome = () => {
  return (
    <div>
      <UkLandingPage />
      <WhyUk />
      <TopUKUni />
      <TopPrograms />
      <FaqUk />
    </div>
  );
};

export default UkHome;
