import React from "react";
import styles from "./StepStyles.module.css"; // Single CSS module for all steps

const PersonalDetailsStep = ({ formData, handleInputChange, errors }) => {
  return (
    <div className={styles.stepContent}>
      <h3>Step 1: Personal Details</h3>
      <div className={styles.formGroup}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
          aria-invalid={errors.fullName ? "true" : "false"}
        />
        {errors.fullName && (
          <span className={styles.errorMessage}>{errors.fullName}</span>
        )}
        {!errors.fullName && formData.fullName.trim() && (
          <span className={styles.validationIcon}>✅</span>
        )}
        {errors.fullName && <span className={styles.validationIcon}>❌</span>}
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
          /\S+@\S+\.\S/.test(formData.email) && (
            <span className={styles.validationIcon}>✅</span>
          )}
        {(errors.email ||
          (formData.email.trim() && !/\S+@\S+\.\S/.test(formData.email))) && (
          <span className={styles.validationIcon}>❌</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel" // Use tel type for phone number
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          aria-invalid={errors.phone ? "true" : "false"}
        />
        {errors.phone && (
          <span className={styles.errorMessage}>{errors.phone}</span>
        )}
        {/* Basic phone format validation (can be improved) */}
        {!errors.phone &&
          formData.phone.trim() &&
          /^\d{10,}$/.test(formData.phone.replace(/\D/g, "")) && (
            <span className={styles.validationIcon}>✅</span>
          )}
        {(errors.phone ||
          (formData.phone.trim() &&
            !/^\d{10,}$/.test(formData.phone.replace(/\D/g, "")))) && (
          <span className={styles.validationIcon}>❌</span>
        )}
        <p className={styles.hint}>
          Enter phone number including area code (e.g., 123-456-7890)
        </p>{" "}
        {/* Add hint */}
      </div>
      {/* Add a password strength meter here if optional login requires it (can be a separate component) */}
      {/* <div className={styles.formGroup}>
             <label htmlFor="password">Create Password (Optional):</label>
             <input type="password" id="password" name="password" />
              <div className={styles.passwordStrength}>Password Strength Meter will go here</div>
         </div> */}
    </div>
  );
};

export default PersonalDetailsStep;
