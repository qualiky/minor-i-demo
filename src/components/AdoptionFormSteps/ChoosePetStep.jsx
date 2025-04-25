import React from "react";
import styles from "./StepStyles.module.css"; // Single CSS module for all steps
import DragDropFileInput from "../DragDropFileInput/DragDropFileInput"; // Import drag/drop component

const ChoosePetStep = ({
  formData,
  handleInputChange,
  handleFileDrop,
  errors,
  availablePets,
}) => {
  return (
    <div className={styles.stepContent}>
      <h3>Step 3: Choose Preferred Pet & Final Details</h3>

      <div className={styles.formGroup}>
        <label htmlFor="preferredPetId">Preferred Pet:</label>
        <select
          id="preferredPetId"
          name="preferredPetId"
          value={formData.preferredPetId}
          onChange={handleInputChange}
          required
          aria-invalid={errors.preferredPetId ? "true" : "false"}
        >
          {availablePets.map((pet) => (
            <option key={pet.value} value={pet.value} disabled={pet.disabled}>
              {pet.label}
            </option>
          ))}
        </select>
        {errors.preferredPetId && (
          <span className={styles.errorMessage}>{errors.preferredPetId}</span>
        )}
        {!errors.preferredPetId && formData.preferredPetId && (
          <span className={styles.validationIcon}>✅</span>
        )}
        {errors.preferredPetId && (
          <span className={styles.validationIcon}>❌</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="visitDate">Preferred Date for Interview/Visit:</label>
        <input
          type="date" // Use HTML5 date input
          id="visitDate"
          name="visitDate"
          value={formData.visitDate}
          onChange={handleInputChange}
          required
          aria-invalid={errors.visitDate ? "true" : "false"}
        />
        {errors.visitDate && (
          <span className={styles.errorMessage}>{errors.visitDate}</span>
        )}
        {!errors.visitDate && formData.visitDate && (
          <span className={styles.validationIcon}>✅</span>
        )}
        {errors.visitDate && <span className={styles.validationIcon}>❌</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="profilePhoto">
          Upload a Family Photo (Optional, Simulated):
        </label>
        {/* Use the DragDropFileInput component */}
        <DragDropFileInput
          name="profilePhoto"
          onFileSelect={handleFileDrop} // Callback for when a file is selected/dropped
          currentFile={formData.profilePhoto} // Pass the currently selected file
        />
        {errors.profilePhoto && (
          <span className={styles.errorMessage}>{errors.profilePhoto}</span>
        )}
        {/* No ✅/❌ for optional file input */}
      </div>
    </div>
  );
};

export default ChoosePetStep;
