import React from "react";
import styles from "./StepStyles.module.css"; // Single CSS module for all steps

const HomeEnvironmentStep = ({ formData, handleInputChange, errors }) => {
  return (
    <div className={styles.stepContent}>
      <h3>Step 2: Home Environment</h3>

      <div className={styles.formGroup}>
        <label htmlFor="livingSituation">What is your living situation?</label>
        <select
          id="livingSituation"
          name="livingSituation"
          value={formData.livingSituation}
          onChange={handleInputChange}
          required
          aria-invalid={errors.livingSituation ? "true" : "false"}
        >
          <option value="">Select one</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          <option value="Other">Other</option>
        </select>
        {errors.livingSituation && (
          <span className={styles.errorMessage}>{errors.livingSituation}</span>
        )}
        {!errors.livingSituation && formData.livingSituation && (
          <span className={styles.validationIcon}>✅</span>
        )}
        {errors.livingSituation && (
          <span className={styles.validationIcon}>❌</span>
        )}
      </div>

      <div className={styles.formGroupCheckbox}>
        {" "}
        {/* Use a different class for checkboxes */}
        <input
          type="checkbox"
          id="hasYard"
          name="hasYard"
          checked={formData.hasYard}
          onChange={handleInputChange}
        />
        <label htmlFor="hasYard">Do you have a yard?</label>
      </div>

      {formData.hasYard && ( // Only show if hasYard is true
        <div className={styles.formGroupCheckbox}>
          <input
            type="checkbox"
            id="isFenced"
            name="isFenced"
            checked={formData.isFenced}
            onChange={handleInputChange}
            required={formData.hasYard} // Make required only if yard exists
            aria-invalid={errors.isFenced ? "true" : "false"}
          />
          <label htmlFor="isFenced">Is the yard securely fenced?</label>
          {errors.isFenced && (
            <span className={styles.errorMessage}>{errors.isFenced}</span>
          )}
          {formData.hasYard && !errors.isFenced && (
            <span className={styles.validationIcon}>✅</span>
          )}
          {formData.hasYard && errors.isFenced && (
            <span className={styles.validationIcon}>❌</span>
          )}
        </div>
      )}

      <div className={styles.formGroup}>
        <label htmlFor="otherPets">
          Do you currently have other pets? If so, please list them (type and
          number):
        </label>
        <input
          type="text"
          id="otherPets"
          name="otherPets"
          value={formData.otherPets}
          onChange={handleInputChange}
        />
        {/* No validation icon needed if not required */}
      </div>

      <div className={styles.formGroupCheckbox}>
        <input
          type="checkbox"
          id="hasChildren"
          name="hasChildren"
          checked={formData.hasChildren}
          onChange={handleInputChange}
        />
        <label htmlFor="hasChildren">
          Are there children living in the home?
        </label>
      </div>

      {formData.hasChildren && ( // Only show if hasChildren is true
        <div className={styles.formGroup}>
          <label htmlFor="childrenAges">
            Please list the ages of children:
          </label>
          <input
            type="text"
            id="childrenAges"
            name="childrenAges"
            value={formData.childrenAges}
            onChange={handleInputChange}
            required={formData.hasChildren} // Make required only if children exist
            aria-invalid={errors.childrenAges ? "true" : "false"}
          />
          {errors.childrenAges && (
            <span className={styles.errorMessage}>{errors.childrenAges}</span>
          )}
          {formData.hasChildren &&
            !errors.childrenAges &&
            formData.childrenAges.trim() && (
              <span className={styles.validationIcon}>✅</span>
            )}
          {formData.hasChildren &&
            (errors.childrenAges ||
              (formData.childrenAges.trim() === "" &&
                !errors.childrenAges)) && (
              <span className={styles.validationIcon}>❌</span>
            )}
        </div>
      )}
    </div>
  );
};

export default HomeEnvironmentStep;
