import React from "react";
// No page-specific CSS module needed for now, sections have their own
// import styles from "./Home.module.css";

// Import section components
import HeroSection from "../sections/HeroSection";
import AboutIntroSection from "../sections/AboutIntroSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import SuccessStoriesSection from "../sections/SuccessStoriesSection"; // Will implement next
import CtaGridSection from "../sections/CtaGridSection";
import LatestNewsSection from "../sections/LatestNewsSection"; // Will implement next

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutIntroSection />
      <HowItWorksSection />
      <SuccessStoriesSection /> {/* Add Success Stories section */}
      <CtaGridSection />
      <LatestNewsSection /> {/* Add Latest News section */}
    </div>
  );
};

export default Home;
