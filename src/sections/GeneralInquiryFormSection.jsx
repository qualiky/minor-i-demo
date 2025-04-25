import React, { useState } from "react";
import styles from "./GeneralInquiryFormSection.module.css"; // Will create this CSS module

const GeneralInquiryFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Adoption", // Default subject
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field as user types (optional)
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission (e.g., sending data to a backend API)
      console.log("Form Data:", formData);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "Adoption", message: "" }); // Reset form
        setErrors({}); // Clear errors
        console.log("Form submitted successfully (simulated)");
        // Hide success message after a few seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1000); // Simulate network delay
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <section className={styles.generalInquiryForm}>
      <h2>General Inquiry</h2>
      {submitSuccess && (
        <p className={styles.successMessage}>
          Thank you for your message! We will get back to you shortly.
        </p>
      )}
      <form onSubmit={handleSubmit} noValidate>
        {" "}
        {/* noValidate prevents browser's default validation */}
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required // HTML5 validation hint, but JS handles it primarily
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <span className={styles.errorMessage}>{errors.name}</span>
          )}
          {!errors.name && formData.name.trim() && (
            <span className={styles.validationIcon}>✅</span>
          )}{" "}
          {/* Real-time feedback */}
          {errors.name && (
            <span className={styles.validationIcon}>❌</span>
          )}{" "}
          {/* Real-time feedback */}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <span className={styles.errorMessage}>{errors.email}</span>
          )}
          {!errors.email &&
            formData.email.trim() &&
            /\S+@\S+\.\S+/.test(formData.email) && (
              <span className={styles.validationIcon}>✅</span>
            )}{" "}
          {/* Real-time feedback */}
          {(errors.email ||
            (formData.email.trim() && !/\S+@\S+\.\S/.test(formData.email))) && (
            <span className={styles.validationIcon}>❌</span>
          )}{" "}
          {/* Real-time feedback for invalid format */}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject:</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          >
            <option value="Adoption">Adoption</option>
            <option value="Volunteering">Volunteering</option>
            <option value="Donations">Donations</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            aria-invalid={errors.message ? "true" : "false"}
          ></textarea>
          {errors.message && (
            <span className={styles.errorMessage}>{errors.message}</span>
          )}
          {!errors.message && formData.message.trim() && (
            <span className={styles.validationIcon}>✅</span>
          )}{" "}
          {/* Real-time feedback */}
          {errors.message && (
            <span className={styles.validationIcon}>❌</span>
          )}{" "}
          {/* Real-time feedback */}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default GeneralInquiryFormSection;
