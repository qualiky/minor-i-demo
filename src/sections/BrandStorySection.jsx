import React from "react";
import styles from "./BrandStorySection.module.css"; // Will create this CSS module

const BrandStorySection = () => {
  return (
    <section className={styles.brandStory}>
      <h1>Our Story</h1>
      <p>
        PawPal was born from the passion of three animal lovers who volunteered
        in animal shelters and saw a lack of accessible digital tools to
        simplify pet adoption and post-adoption care. Our aim is to bridge that
        gap using clean design, modern technology, and a little heart.
      </p>
      <p>
        Year Established: <strong>2021</strong>
      </p>

      <h2>Mission & Vision</h2>
      <div className={styles.missionVision}>
        <div className={styles.mission}>
          <h3>Mission</h3>
          <p>
            To connect adorable stray and shelter pets with loving homes while
            providing accessible resources and tools for pet care and
            well-being.
          </p>
        </div>
        <div className={styles.vision}>
          <h3>Vision</h3>
          <p>
            A world where every pet has a family, and every family has the
            knowledge to care for their furry friend with confidence and love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
