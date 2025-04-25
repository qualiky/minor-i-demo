import React, { useState } from "react"; // Import useState for carousel
import styles from "./PetDetailsModal.module.css"; // Import CSS Module

const PetDetailsModal = ({ pet, onClose }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % pet.photos.length);
  };

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex - 1 + pet.photos.length) % pet.photos.length,
    );
  };

  // Handle cases where pet data or photos array might be missing
  if (!pet) {
    return null; // Or display an error message
  }

  const photos = pet.photos || [];
  const hasMultiplePhotos = photos.length > 1;

  return (
    <div className={styles.petDetailsModal}>
      <button className={styles.closeButton} onClick={onClose}>
        ×
      </button>{" "}
      {/* Close button */}
      <h2>Meet {pet.name}</h2>
      {photos.length > 0 && (
        <div className={styles.photoCarousel}>
          <img
            src={photos[currentPhotoIndex]}
            alt={`Photo of ${pet.name} - ${currentPhotoIndex + 1}`}
            className={styles.currentPhoto}
          />
          {hasMultiplePhotos && (
            <>
              <button
                className={`${styles.carouselNavButton} ${styles.prev}`}
                onClick={goToPreviousPhoto}
              >
                {"<"}
              </button>
              <button
                className={`${styles.carouselNavButton} ${styles.next}`}
                onClick={goToNextPhoto}
              >
                {">"}
              </button>
            </>
          )}
          {/* Optional: Photo indicators */}
          {hasMultiplePhotos && (
            <div className={styles.photoIndicators}>
              {photos.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.indicator} ${index === currentPhotoIndex ? styles.active : ""}`}
                  onClick={() => setCurrentPhotoIndex(index)}
                ></span>
              ))}
            </div>
          )}
        </div>
      )}
      <div className={styles.details}>
        <p>
          <strong>Status:</strong>{" "}
          <span
            className={
              pet.status === "Available"
                ? styles.availableStatus
                : styles.adoptedStatus
            }
          >
            {pet.status}
          </span>
        </p>
        <p>
          <strong>Species:</strong> {pet.species}
        </p>
        <p>
          <strong>Breed:</strong> {pet.breed}
        </p>
        <p>
          <strong>Age:</strong> {pet.age} year{pet.age !== 1 ? "s" : ""}
        </p>
        <p>
          <strong>Size:</strong> {pet.size}
        </p>
        <p>
          <strong>Gender:</strong> {pet.gender}
        </p>
        {pet.location && pet.status === "Available" && (
          <p>
            <strong>Location:</strong> {pet.location}
          </p>
        )}

        <h3>Story</h3>
        <p>{pet.story || "No story available."}</p>

        <h3>Medical History</h3>
        <p>{pet.medicalHistory || "No medical history provided."}</p>

        {pet.compatibility && (
          <>
            <h3>Compatibility</h3>
            {pet.compatibility.children && (
              <p>
                <strong>Children:</strong> {pet.compatibility.children}
              </p>
            )}
            {pet.compatibility.otherPets && (
              <p>
                <strong>Other Pets:</strong> {pet.compatibility.otherPets}
              </p>
            )}
          </>
        )}

        {pet.status === "Available" && (
          <div className={styles.callToAction}>
            <p>Interested in adopting {pet.name}?</p>
            {/* Link to the adoption form */}
            {/* Note: Linking inside a modal requires state or context to change route and close modal */}
            {/* For now, let's just add a button */}
            <button
              onClick={() => {
                /* Implement navigation to contact/form page here */ alert(
                  "Navigate to Contact/Adoption Form",
                );
              }}
            >
              Apply to Adopt {pet.name}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetDetailsModal;
