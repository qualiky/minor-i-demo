import React from "react";
import styles from "./PartnersSection.module.css"; // Will create this CSS module

// Placeholder partner logos data
const partners = [
  {
    id: 1,
    name: "Local Shelter A",
    logo: "https://placehold.co/100x50?text=Shelter+A",
  },
  {
    id: 2,
    name: "Pet Food Co B",
    logo: "https://placehold.co/100x50?text=Food+Co+B",
  },
  {
    id: 3,
    name: "Vet Clinic C",
    logo: "https://placehold.co/100x50?text=Vet+C",
  },
  {
    id: 4,
    name: "Pet Supply D",
    logo: "https://placehold.co/100x50?text=Supply+D",
  },
];

const PartnersSection = () => {
  return (
    <section className={styles.partners}>
      <h2>Our Partners</h2>
      <div className={styles.partnersGrid}>
        {partners.map((partner) => (
          <div key={partner.id} className={styles.partnerLogo}>
            <img src={partner.logo} alt={`${partner.name} Logo`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
