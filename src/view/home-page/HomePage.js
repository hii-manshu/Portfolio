import HeroSection from "@/components/Home/HeroSection";
import MyProjects from "@/components/Home/MyProjects";
import OurTeam from "@/components/common/OurTeam";
import React from "react";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <OurTeam />
      <MyProjects />
    </div>
  );
}

export default HomePage;
