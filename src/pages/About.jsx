import React from "react";
// import styles from './About.module.css'; // No page-specific CSS needed yet

// Import section components
import BrandStorySection from "../sections/BrandStorySection";
import OurWorkSection from "../sections/OurWorkSection";
import OurValuesSection from "../sections/OurValuesSection";
import TeamSection from "../sections/TeamSection";
import PartnersSection from "../sections/PartnersSection";

const About = () => {
  return (
    <div className="about-page">
      <BrandStorySection />
      <OurWorkSection />
      <OurValuesSection />
      <TeamSection />
      <PartnersSection />
    </div>
  );
};

export default About;
