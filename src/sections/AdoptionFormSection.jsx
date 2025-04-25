import React, { useState, useEffect } from "react";
import styles from "./AdoptionFormSection.module.css"; // Will create this CSS module

// Import step components (will create next)
import PersonalDetailsStep from "../components/AdoptionFormSteps/PersonalDetailsStep";
import HomeEnvironmentStep from "../components/AdoptionFormSteps/HomeEnvironmentStep";
import ChoosePetStep from "../components/AdoptionFormSteps/ChoosePetStep";

// Import validation function (will create a helper file)
import { validateStep } from "../utils/validation";

// Import pets data utility (will use the same fetch as Gallery or pass down)
// For simplicity here, we'll fetch again or pass down if refactored later
// Let's refetch for now, assuming this component might be used independently
const fetchPetsForDropdown = async () => {
  try {
    const response = await fetch("/data/pets.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Filter for available pets and format for dropdown
    return data
      .filter((pet) => pet.status === "Available")
      .map((pet) => ({ value: pet.id, label: `${pet.name} (${pet.species})` }));
  } catch (error) {
    console.error("Failed to fetch pets for dropdown:", error);
    return []; // Return empty array on error
  }
};

const AdoptionFormSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Details
    fullName: "",
    email: "",
    phone: "",
    // Step 2: Home Environment
    livingSituation: "", // e.g., 'House', 'Apartment'
    hasYard: false,
    isFenced: false, // Only relevant if hasYard is true
    otherPets: "", // e.g., 'None', '1 dog', '2 cats'
    hasChildren: false,
    childrenAges: "", // Relevant if hasChildren is true
    // Step 3: Choose Preferred Pet
    preferredPetId: "", // Will store the ID from pets.json
    visitDate: "", // Date picker
    profilePhoto: null, // File object for drag/drop
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [availablePets, setAvailablePets] = useState([]); // For the dropdown

  useEffect(() => {
    // Fetch pets for the dropdown when the component mounts
    fetchPetsForDropdown().then((pets) => {
      setAvailablePets(pets);
      // Add a default "Select a pet" option
      setAvailablePets([
        { value: "", label: "Select a pet", disabled: true },
        ...pets,
      ]);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
    // Optional: Clear error for this field as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleFileDrop = (file) => {
    setFormData({ ...formData, profilePhoto: file });
    if (errors.profilePhoto) {
      setErrors({ ...errors, profilePhoto: null });
    }
  };

  const handleNextStep = () => {
    // Validate current step before proceeding
    const currentStepErrors = validateStep(currentStep, formData);
    if (Object.keys(currentStepErrors).length === 0) {
      setErrors({}); // Clear previous errors
      setCurrentStep(currentStep + 1);
    } else {
      setErrors(currentStepErrors);
      console.log("Validation errors:", currentStepErrors);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
    setErrors({}); // Clear errors when going back
  };

  const handleSubmit = () => {
    // Validate the final step (or all steps again) before final submission
    const finalErrors = validateStep(currentStep, formData);
    if (Object.keys(finalErrors).length === 0) {
      setErrors({}); // Clear previous errors
      setIsSubmitting(true);
      // Simulate final form submission
      console.log("Final Form Data:", formData);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        // Reset form (or navigate to a confirmation page)
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          livingSituation: "",
          hasYard: false,
          isFenced: false,
          otherPets: "",
          hasChildren: false,
          childrenAges: "",
          preferredPetId: "",
          visitDate: "",
          profilePhoto: null,
        });
        setCurrentStep(1); // Go back to step 1
        console.log("Adoption form submitted successfully (simulated)");
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 2000); // Simulate longer submission delay
    } else {
      setErrors(finalErrors);
      console.log("Final validation errors:", finalErrors);
    }
  };

  // Determine which step component to render
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetailsStep
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );
      case 2:
        return (
          <HomeEnvironmentStep
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );
      case 3:
        return (
          <ChoosePetStep
            formData={formData}
            handleInputChange={handleInputChange}
            handleFileDrop={handleFileDrop} // Pass file drop handler
            errors={errors}
            availablePets={availablePets} // Pass pets for dropdown
          />
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  const totalSteps = 3; // Define total steps

  return (
    <section className={styles.adoptionFormSection}>
      <h2>Adoption Interest Form</h2>

      {submitSuccess && (
        <p className={styles.successMessage}>
          Thank you for your adoption application! We will review it and contact
          you soon.
        </p>
      )}

      {/* Progress Bar */}
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>
        <div className={styles.stepIndicators}>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <span
              key={index}
              className={`${styles.stepIndicator} ${index + 1 === currentStep ? styles.active : ""} ${index + 1 < currentStep ? styles.completed : ""}`}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()} noValidate>
        {" "}
        {/* Prevent default form submit */}
        {renderStep()}
        {/* Navigation Buttons */}
        <div className={styles.navigationButtons}>
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePreviousStep}
              disabled={isSubmitting}
            >
              Previous
            </button>
          )}

          {currentStep < totalSteps && (
            <button
              type="button"
              onClick={handleNextStep}
              disabled={isSubmitting}
            >
              Next
            </button>
          )}

          {currentStep === totalSteps && (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default AdoptionFormSection;
