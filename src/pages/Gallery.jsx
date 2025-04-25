import React, { useState, useEffect, useMemo } from "react"; // Import useEffect and useMemo
import styles from "./Gallery.module.css"; // Will create this CSS module
import PetCard from "../components/PetCard"; // Will create this component
import Modal from "../components/Modal"; // Will create this component
import PetDetailsModal from "../components/PetDetailsModal"; // Will create this component for modal content

const Gallery = () => {
  const [allPets, setAllPets] = useState([]); // Store original fetched data
  const [filteredPets, setFilteredPets] = useState([]); // Store pets after filtering/sorting
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for filters
  const [filters, setFilters] = useState({
    species: "All",
    size: "All",
    age: "All", // Could be 'All', 'Young', 'Adult', 'Senior'
    status: "Available", // 'Available' or 'Adopted' or 'All'
  });

  // State for sorting
  const [sortBy, setSortBy] = useState("name"); // 'name', 'age', 'added' (simulated)

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("/data/pets.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllPets(data);
        setFilteredPets(data); // Initially show all fetched data
        setLoading(false);
      } catch (err) {
        setError("Failed to load pet data.");
        setLoading(false);
        console.error("Fetch error:", err);
      }
    };

    fetchPets();
  }, []); // Empty dependency array means this runs only once

  // --- Filtering and Sorting Logic ---
  // Use useMemo to re-calculate filtered/sorted pets only when dependencies change
  const petsToDisplay = useMemo(() => {
    let pets = [...allPets]; // Start with a copy of all pets

    // 1. Apply Filters
    if (filters.species !== "All") {
      pets = pets.filter((pet) => pet.species === filters.species);
    }
    if (filters.size !== "All") {
      pets = pets.filter((pet) => pet.size === filters.size);
    }
    if (filters.age !== "All") {
      // Simple age filtering logic (adjust based on your data/needs)
      pets = pets.filter((pet) => {
        if (filters.age === "Young") return pet.age < 1; // Example: less than 1 year
        if (filters.age === "Adult") return pet.age >= 1 && pet.age < 8; // Example: 1 to 7 years
        if (filters.age === "Senior") return pet.age >= 8; // Example: 8+ years
        return true; // 'All' case
      });
    }
    if (filters.status !== "All") {
      pets = pets.filter((pet) => pet.status === filters.status);
    }

    // 2. Apply Sorting
    pets.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "age") {
        return a.age - b.age; // Sort by age ascending
      }
      // For 'added' (recently added), you'd typically need a timestamp in your data.
      // Since we don't have one, we can just return 0 or sort by ID, or add a mock date.
      // Let's simulate 'recently added' by reversing the default JSON order (assuming it's oldest first)
      // Or add a mock 'addedDate' to the JSON data. Let's add a mock date.
      if (sortBy === "added") {
        // Assuming a 'addedDate' property exists in JSON, sort descending
        // Need to parse dates correctly for comparison
        // return new Date(b.addedDate) - new Date(a.addedDate);
        // For now, let's sort by ID descending to simulate 'recently added'
        return b.id.localeCompare(a.id); // Simple simulation
      }
      return 0; // No specific sort
    });

    return pets;
  }, [allPets, filters, sortBy]); // Re-run this calculation if allPets, filters, or sortBy change

  // Update filteredPets state whenever petsToDisplay changes
  useEffect(() => {
    setFilteredPets(petsToDisplay);
  }, [petsToDisplay]);

  // --- Modal Handlers ---
  const openModal = (pet) => {
    setSelectedPet(pet);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPet(null); // Clear selected pet when closing
  };

  // --- Filter/Sort Handlers ---
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  if (loading) {
    return <div className={styles.galleryPage}>Loading pets...</div>;
  }

  if (error) {
    return (
      <div className={styles.galleryPage}>
        <p>{error}</p>
      </div>
    );
  }

  // Get unique filter options from the data
  const speciesOptions = ["All", ...new Set(allPets.map((pet) => pet.species))];
  const sizeOptions = ["All", ...new Set(allPets.map((pet) => pet.size))];
  // Age options are defined manually based on the filtering logic
  const ageOptions = ["All", "Young", "Adult", "Senior"];
  const statusOptions = ["All", "Available", "Adopted"]; // Or extract from data if more statuses exist

  return (
    <div className={styles.galleryPage}>
      <h1>Adoptable Pets</h1>

      <section className={styles.galleryControls}>
        <div className={styles.filters}>
          <h3>Filter By:</h3>
          <label>
            Species:
            <select
              name="species"
              value={filters.species}
              onChange={handleFilterChange}
            >
              {speciesOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Size:
            <select
              name="size"
              value={filters.size}
              onChange={handleFilterChange}
            >
              {sizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Age:
            <select
              name="age"
              value={filters.age}
              onChange={handleFilterChange}
            >
              {ageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Status:
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className={styles.sort}>
          <h3>Sort By:</h3>
          <label>
            <select value={sortBy} onChange={handleSortChange}>
              <option value="name">Name (A-Z)</option>
              <option value="age">Age (Youngest First)</option>
              <option value="added">Recently Added (Simulated)</option>
            </select>
          </label>
        </div>
      </section>

      {filteredPets.length === 0 ? (
        // Empty State Message
        <div className={styles.emptyStateMessage}>
          <p>
            Looks like there are no pets matching your criteria right now. Try
            adjusting the filters or check back soon!
          </p>
        </div>
      ) : (
        // Pet Cards Grid
        <section className={styles.petGrid}>
          {filteredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} onCardClick={openModal} />
          ))}
        </section>
      )}

      {/* Modal for Pet Details */}
      {isModalOpen && selectedPet && (
        <Modal onClose={closeModal}>
          {/* Content for the modal */}
          <PetDetailsModal pet={selectedPet} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
