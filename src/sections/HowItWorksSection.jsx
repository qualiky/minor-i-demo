import React from "react";
import styles from "./HowItWorksSection.module.css"; // Will create this CSS module
import { Link } from "react-router-dom";

const HowItWorksSection = () => {
  const steps = [
    { id: 1, text: "Find a pet" },
    { id: 2, text: "Submit an application" },
    { id: 3, text: "Bring them home" },
  ];

  return (
    <section className={styles.howItWorks}>
      <h2>How Adoption Works</h2>
      <div className={styles.stepsContainer}>
        {steps.map((step) => (
          <div key={step.id} className={styles.step}>
            <div className={styles.stepNumber}>{step.id}</div>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
      <Link to="/contact">
        {" "}
        {/* Link to the contact/adoption form */}
        <button>Start the Process</button>
      </Link>
    </section>
  );
};

export default HowItWorksSection;
