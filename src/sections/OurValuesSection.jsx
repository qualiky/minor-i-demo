import React from "react";
import styles from "./OurValuesSection.module.css"; // Will create this CSS module

const values = [
  {
    id: 1,
    value: "Compassion",
    description:
      "We believe every animal deserves kindness, respect, and a loving home.",
  },
  {
    id: 2,
    value: "Responsibility",
    description:
      "We are committed to the health, safety, and well-being of all animals in our care.",
  },
  {
    id: 3,
    value: "Transparency",
    description:
      "We operate openly and honestly with our community and partners.",
  },
  {
    id: 4,
    value: "Community Engagement",
    description:
      "We foster a supportive network of pet lovers, volunteers, and partners.",
  },
];

const OurValuesSection = () => {
  return (
    <section className={styles.ourValues}>
      <h2>Our Values</h2>
      <ul className={styles.valuesList}>
        {values.map((item) => (
          <li key={item.id} className={styles.valueItem}>
            <h3>{item.value}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurValuesSection;
