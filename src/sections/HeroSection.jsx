import React from "react";
import styles from "./HeroSection.module.css"; // Will create this CSS module

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1>Find Your Furry Best Friend Today</h1>
      <p>Connecting loving pets with loving homes – one paw at a time.</p>
      <div className={styles.ctaButtons}>
        <button>Adopt Now</button> {/* Link to /gallery later */}
        <button>See Available Pets</button> {/* Also link to /gallery */}
      </div>
    </section>
  );
};

export default HeroSection;
