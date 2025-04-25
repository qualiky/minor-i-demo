import React from "react";
import styles from "./AboutIntroSection.module.css"; // Will create this CSS module
import { Link } from "react-router-dom";

const AboutIntroSection = () => {
  return (
    <section className={styles.aboutIntro}>
      <h2>About PawPal</h2>
      <p>
        We’re dedicated to rescuing, rehabilitating, and rehoming stray and
        abandoned pets. PawPal was born from the passion of animal lovers who
        saw a need for accessible digital tools to simplify pet adoption and
        post-adoption care.
      </p>
      <Link to="/about">
        <button>Learn More About Us</button>
      </Link>
    </section>
  );
};

export default AboutIntroSection;
