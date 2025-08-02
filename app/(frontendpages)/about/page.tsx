import React from "react";
import AboutAmple from "./components/AboutAmple";
import WhyAmpleEducation from "./components/WhyAmpleEducation";
import GlobalBranches from "./components/GlobalBranches";
import AboutCTA from "./components/AboutCTA";
import OurTeam from "./components/OurTeam";
import OurMission from "./components/OurMission";

const About: React.FC = () => {
  return (
    <div className="w-full py-5 lg:py-10">
      <AboutAmple />
      <WhyAmpleEducation />
      <OurMission />
      <GlobalBranches />
      <AboutCTA />
      <OurTeam />
    </div>
  );
};

export default About;
