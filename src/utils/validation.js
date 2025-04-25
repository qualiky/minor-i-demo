// Basic validation utility for multi-step form

export const validateStep = (step, formData) => {
  let errors = {};

  // Validation for Step 1: Personal Details
  if (step === 1) {
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    // Basic phone validation: require at least 10 digits after removing non-digits
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) {
      errors.phone = "Please enter a valid phone number (min 10 digits)";
    }
    // Password validation would go here if implemented
  }

  // Validation for Step 2: Home Environment
  if (step === 2) {
    if (!formData.livingSituation) {
      errors.livingSituation = "Please select your living situation";
    }
    // Validate fenced yard only if yard exists
    if (formData.hasYard && formData.isFenced === false) {
      // This validation depends on whether fenced yard is strictly required if yard exists
      // If required, you might do:
      // if (!formData.isFenced) { errors.isFenced = 'Please confirm if yard is fenced'; }
      // For now, let's assume it's not a hard stop unless 'isFenced' is empty/null when yard exists.
      // The checkbox returns boolean, so we check if yard exists AND isFenced is false.
      // If you require them to explicitly check the box if it IS fenced:
      // if (formData.hasYard && !formData.isFenced) { errors.isFenced = 'Please check if your yard is fenced'; }
      // Let's assume it's required to state if it is fenced, if you have a yard.
      // If the checkbox is not checked when they have a yard and it's a requirement:
      // if (formData.hasYard && !formData.isFenced) { errors.isFenced = 'Please confirm if your yard is fenced'; }
      // Let's simplify and just require a selection for living situation and maybe list children ages if children exist.
      // Children ages required only if hasChildren is true and the field is empty
      if (formData.hasChildren && !formData.childrenAges.trim()) {
        errors.childrenAges = "Please list children's ages";
      }
    } else {
      // If no yard, clear any potential isFenced error
      if (errors.isFenced) delete errors.isFenced;
    }
  }

  // Validation for Step 3: Choose Preferred Pet & Final Details
  if (step === 3) {
    if (!formData.preferredPetId) {
      errors.preferredPetId = "Please select a pet";
    }
    if (!formData.visitDate) {
      errors.visitDate = "Please select a preferred date";
    }
    // File upload is optional, so no validation needed unless it was required.
    // If required: if (!formData.profilePhoto) { errors.profilePhoto = 'Profile photo is required'; }
  }

  return errors;
};

// Optional: Add a validateAllSteps function for the final submit if needed
export const validateAllSteps = (formData) => {
  let errors = {};
  errors = { ...errors, ...validateStep(1, formData) };
  errors = { ...errors, ...validateStep(2, formData) };
  errors = { ...errors, ...validateStep(3, formData) };
  return errors;
};
