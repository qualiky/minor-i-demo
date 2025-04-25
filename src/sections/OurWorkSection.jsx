import React from "react";
import styles from "./OurWorkSection.module.css"; // Will create this CSS module

// Placeholder statistics (these could be dynamic later)
const stats = [
  { id: 1, number: "500+", label: "Pets Rescued" },
  { id: 2, number: "150+", label: "Volunteers Enrolled" },
  { id: 3, number: "50+", label: "Monthly Adoptions" },
  { id: 4, number: "10+", label: "Partner Vets/Shelters" },
];

const OurWorkSection = () => {
  return (
    <section className={styles.ourWork}>
      <h2>Our Work in Numbers</h2>
      <div className={styles.statsContainer}>
        {stats.map((stat) => (
          <div key={stat.id} className={styles.statCard}>
            <div className={styles.number}>{stat.number}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorkSection;
