import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom"; // Import Navigate for redirection
import { useUser } from "../contexts/UserContext"; // Import user context hook
import PetCard from "../components/PetCard"; // Reuse the PetCard component
import styles from "./Dashboard.module.css"; // Will create this CSS module
// Need to fetch pets data again for the dashboard to display favorites
// In a larger app, this data might be in context or a global store.
// For simplicity here, we'll fetch just the necessary pets.
const fetchPetByIds = async (ids) => {
  if (!ids || ids.length === 0) return [];
  try {
    const response = await fetch("/data/pets.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Filter the full list to get only the pets with matching IDs
    return data.filter((pet) => ids.includes(pet.id));
  } catch (error) {
    console.error("Failed to fetch pets for dashboard:", error);
    return [];
  }
};

const Dashboard = () => {
  const { user, isLoggedIn, logout } = useUser(); // Get user context

  const [favoritePets, setFavoritePets] = useState([]);
  const [loadingPets, setLoadingPets] = useState(true);
  const [petsError, setPetsError] = useState(null);

  // If not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Fetch favorite pets when the component mounts or user changes (shouldn't change here but good practice)
  useEffect(() => {
    const loadFavoritePets = async () => {
      setLoadingPets(true);
      setPetsError(null); // Clear previous errors
      try {
        // User object is guaranteed to exist here due to the isLoggedIn check above
        const idsToFetch = user.favoritePetIds || []; // Get favorite IDs, handle missing property
        const pets = await fetchPetByIds(idsToFetch);
        setFavoritePets(pets);
      } catch (err) {
        setPetsError("Failed to load favorite pets.");
        console.error("Error loading favorite pets:", err);
      } finally {
        setLoadingPets(false);
      }
    };

    loadFavoritePets();
  }, [user]); // Depend on user object

  return (
    <div className={styles.dashboardPage}>
      <h2>Welcome, {user.name}!</h2> {/* Display user's name */}
      <section className={styles.favoritePetsSection}>
        <h3>My Favorite Pets (Simulated)</h3>
        {loadingPets && <p>Loading your favorite pets...</p>}
        {petsError && <p className={styles.errorMessage}>{petsError}</p>}
        {!loadingPets && favoritePets.length === 0 && (
          <p>You haven't favorited any pets yet.</p>
        )}

        {!loadingPets && favoritePets.length > 0 && (
          <div className={styles.petGrid}>
            {/* Reuse the PetCard component */}
            {/* Note: Clicking these cards won't open a modal unless you add that logic */}
            {favoritePets.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
                onCardClick={() =>
                  console.log("View pet details for:", pet.name)
                }
              />
            ))}
          </div>
        )}
      </section>
      {/* Add other dashboard sections here (e.g., application status, saved searches) */}
      {/* Logout Button */}
      <div className={styles.logoutSection}>
        <button onClick={logout} className={styles.logoutButton}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
