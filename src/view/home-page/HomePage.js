import HeroSection from "@/components/Home/HeroSection";
import MyProjects from "@/components/Home/MyProjects";
import HomeBlogs from "@/components/Home/blogs";
import OurTeam from "@/components/common/OurTeam";
import React from "react";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <OurTeam />
      <MyProjects />
      <HomeBlogs />
    </div>
  );
}

export default HomePage;
