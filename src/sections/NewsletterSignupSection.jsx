import React, { useState } from "react";
import styles from "./NewsletterSignupSection.module.css"; // Will create this CSS module

const NewsletterSignupSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(null); // Clear error on change
    if (successMessage) setSuccessMessage(null); // Clear success on change
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (error) setError(null); // Clear error on change
    if (successMessage) setSuccessMessage(null); // Clear success on change
  };

  const validateForm = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    // Name is optional for this simple form

    setError(null); // Clear any previous errors
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate newsletter signup
      console.log("Newsletter Signup:", { email, name });
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessMessage("Thank you for subscribing!");
        setEmail(""); // Reset form
        setName("");
        setTimeout(() => setSuccessMessage(null), 5000); // Hide message
      }, 800); // Simulate delay
    }
  };

  return (
    <section className={styles.newsletterSignup}>
      <h2>Newsletter Signup</h2>
      <p>Want updates on available pets, adoption events, and care tips?</p>
      {successMessage && (
        <p className={styles.successMessage}>{successMessage}</p>
      )}
      {error && <p className={styles.errorMessage}>{error}</p>}

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <label htmlFor="newsletter-email">Email:</label>
          <input
            type="email"
            id="newsletter-email"
            value={email}
            onChange={handleEmailChange}
            required
            aria-invalid={error ? "true" : "false"}
          />
          {!error && email.trim() && /\S+@\S+\.\S/.test(email) && (
            <span className={styles.validationIcon}>✅</span>
          )}{" "}
          {/* Real-time feedback */}
          {(error || (email.trim() && !/\S+@\S+\.\S/.test(email))) && (
            <span className={styles.validationIcon}>❌</span>
          )}{" "}
          {/* Real-time feedback for invalid format */}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="newsletter-name">Name (Optional):</label>
          <input
            type="text"
            id="newsletter-name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </section>
  );
};

export default NewsletterSignupSection;
