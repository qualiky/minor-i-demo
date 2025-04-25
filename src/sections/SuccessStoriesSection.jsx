import React, { useState } from "react";
import styles from "./SuccessStoriesSection.module.css"; // Will create this CSS module

const mockSuccessStories = [
  {
    id: 1,
    petName: "Luna",
    story:
      "Luna was found injured on the streets—today, she’s a therapy dog for children, bringing smiles wherever she goes. Her transformation is a testament to the power of love and care.",
    imageBefore: "/placeholders/luna-before.jpg", // Placeholder image paths
    imageAfter: "/placeholders/luna-after.jpg",
    adopterName: "The Miller Family",
  },
  {
    id: 2,
    petName: "Buddy",
    story:
      "Buddy, a shy senior cat, spent years in the shelter. Now, he’s king of his castle, curled up on a warm lap, proving that age is just a number when it comes to finding forever love.",
    imageBefore: "/placeholders/buddy-before.jpg",
    imageAfter: "/placeholders/buddy-after.jpg",
    adopterName: "Sarah & Tom",
  },
  {
    id: 3,
    petName: "Daisy",
    story:
      "Daisy was abandoned but never lost hope. Adopted by a family with kids, she’s now their energetic playmate, filling their home with laughter and endless tail wags.",
    imageBefore: "/placeholders/daisy-before.jpg",
    imageAfter: "/placeholders/daisy-after.jpg",
    adopterName: "The Garcia Family",
  },
];

const SuccessStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? mockSuccessStories.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === mockSuccessStories.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Preload placeholder images (optional but good practice for demos)
  // Need to add images to /public directory
  // Create /public/placeholders directory and add images like luna-before.jpg, luna-after.jpg etc.
  // For now, you can use generic placeholder images if you don't have specific ones.
  // Example: imageBefore: 'https://via.placeholder.com/400x300?text=Before',
  //          imageAfter: 'https://via.placeholder.com/400x300?text=After',

  return (
    <section className={styles.successStories}>
      <h2>Success Stories</h2>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselContent}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Use CSS transform for sliding
        >
          {mockSuccessStories.map((story, index) => (
            <div key={story.id} className={styles.carouselSlide}>
              <div className={styles.storyImages}>
                <div className={styles.imageWrapper}>
                  <img
                    src={
                      story.imageBefore ||
                      "https://via.placeholder.com/400x300?text=Before"
                    }
                    alt={`${story.petName} Before`}
                  />
                  <p>Before Adoption</p>
                </div>
                <div className={styles.imageWrapper}>
                  <img
                    src={
                      story.imageAfter ||
                      "https://via.placeholder.com/400x300?text=After"
                    }
                    alt={`${story.petName} After`}
                  />
                  <p>After Adoption</p>
                </div>
              </div>
              <div className={styles.storyText}>
                <h3>{story.petName}'s Story</h3>
                <p>{story.story}</p>
                <p className={styles.adopter}>- {story.adopterName}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          className={`${styles.carouselButton} ${styles.prev}`}
          onClick={goToPrevious}
        >
          {"<"}
        </button>
        <button
          className={`${styles.carouselButton} ${styles.next}`}
          onClick={goToNext}
        >
          {">"}
        </button>
      </div>
      <button>Read More Stories</button>{" "}
      {/* Link to a potential Stories page or just a button */}
    </section>
  );
};

export default SuccessStoriesSection;
