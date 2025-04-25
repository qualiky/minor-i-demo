import React from "react";
import styles from "./CtaGridSection.module.css"; // Will create this CSS module

const CtaGridSection = () => {
  const ctas = [
    {
      id: 1,
      title: "Become a Volunteer",
      description: "Give your time to help pets in need.",
      link: "/contact",
    }, // Link to contact/volunteer form
    {
      id: 2,
      title: "Donate to Save Lives",
      description: "Your contribution helps feed and care for pets.",
      link: "/contact",
    }, // Link to contact/donations form
    {
      id: 3,
      title: "Foster a Pet",
      description: "Provide a temporary home and make a big difference.",
      link: "/contact",
    }, // Link to contact/foster form
  ];

  return (
    <section className={styles.ctaGrid}>
      <h2>Get Involved</h2>
      <div className={styles.cardsContainer}>
        {ctas.map((cta) => (
          <div key={cta.id} className={styles.card}>
            <h3>{cta.title}</h3>
            <p>{cta.description}</p>
            <a href={cta.link}>
              <button>{cta.title}</button>
            </a>{" "}
            {/* Using <a> with <button> for now, could be <Link> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CtaGridSection;
