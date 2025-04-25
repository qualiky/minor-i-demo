import React from "react";
import styles from "./PetCard.module.css"; // Import CSS Module

const PetCard = ({ pet, onCardClick }) => {
  // Use the first photo as the main card image
  const imageUrl =
    pet.photos && pet.photos.length > 0
      ? pet.photos[0]
      : "https://placehold.co/300x200?text=No+Image";

  return (
    <div
      className={`${styles.petCard} ${pet.status === "Adopted" ? styles.adopted : ""}`}
      onClick={() => onCardClick(pet)}
    >
      <div className={styles.imageContainer}>
        <img
          src={imageUrl}
          alt={`Photo of ${pet.name}`}
          className={styles.petImage}
        />
        {pet.status === "Adopted" && (
          <div className={styles.adoptedOverlay}>Adopted!</div>
        )}{" "}
        {/* Overlay for adopted pets */}
        <div className={styles.nameOverlay}>{pet.name}</div>{" "}
        {/* Name reveal on hover */}
      </div>
      <div className={styles.info}>
        <h3>{pet.name}</h3>
        <p>
          <strong>Species:</strong> {pet.species}
        </p>
        <p>
          <strong>Breed:</strong> {pet.breed}
        </p>
        <p>
          <strong>Age:</strong> {pet.age} year{pet.age !== 1 ? "s" : ""}
        </p>
        <p className={styles.tagline}>"{pet.tagline}"</p>
        {/* Optional: Add a button here that also triggers the modal */}
        {/* <button onClick={(e) => { e.stopPropagation(); onCardClick(pet); }}>Learn More</button> */}
      </div>
    </div>
  );
};

export default PetCard;
