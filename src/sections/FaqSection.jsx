import React from "react";
import styles from "./FaqSection.module.css"; // Will create this CSS module

const faqs = [
  {
    id: 1,
    question: "What is the adoption fee?",
    answer:
      "Our adoption fees vary depending on the type of animal and their age. These fees help cover veterinary care, food, and shelter expenses.",
  },
  {
    id: 2,
    question: "What is the adoption process?",
    answer:
      "The process starts with completing our online adoption application. After review, we conduct interviews and potentially home visits to ensure a good match.",
  },
  {
    id: 3,
    question: "Can I volunteer?",
    answer:
      "Absolutely! We always need volunteers. Please fill out the volunteer interest form on our contact page, and our coordinator will be in touch.",
  },
  {
    id: 4,
    question: "How can I donate?",
    answer:
      "You can donate financially through our website or donate supplies like food, blankets, and toys directly at our shelter location during operating hours.",
  },
  {
    id: 5,
    question: "Are all pets spayed/neutered and vaccinated?",
    answer:
      "Yes, all pets adopted through PawPal are spayed or neutered, vaccinated, and microchipped before going to their new homes.",
  },
];

const FaqSection = () => {
  return (
    <section className={styles.faq}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.accordion}>
        {faqs.map((item) => (
          <div key={item.id} className={styles.accordionItem}>
            {/* Using CSS-only accordion technique */}
            <input
              type="checkbox"
              id={`faq-${item.id}`}
              className={styles.accordionToggle}
            />
            <label htmlFor={`faq-${item.id}`} className={styles.accordionTitle}>
              {item.question}
              <span className={styles.accordionIcon}>+</span>{" "}
              {/* Plus/Minus icon placeholder */}
            </label>
            <div className={styles.accordionContent}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
