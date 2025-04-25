import React from "react";
import styles from "./QuickCtaSection.module.css"; // Will create this CSS module
import { Link } from "react-router-dom";

const QuickCtaSection = () => {
  const quickLinks = [
    // These links might eventually point to specific parts of the Contact page
    // or open modals/forms with pre-filled context. For now, linking to contact.
    {
      id: 1,
      title: "Report a Lost Pet",
      link: "/contact",
      description: "Help us reunite lost pets with their families.",
    },
    {
      id: 2,
      title: "Want to Visit the Shelter?",
      link: "/contact",
      description: "Schedule a time to meet adoptable pets in person.",
    },
    {
      id: 3,
      title: "Questions About Adoption?",
      link: "/contact",
      description: "Get in touch with our adoption coordinator.",
    },
  ];

  return (
    <section className={styles.quickCtas}>
      <h2>Quick Actions</h2>
      <div className={styles.cardsContainer}>
        {quickLinks.map((item) => (
          <Link to={item.link} key={item.id} className={styles.ctaCardLink}>
            {" "}
            {/* Use Link for navigation */}
            <div className={styles.ctaCard}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuickCtaSection;
