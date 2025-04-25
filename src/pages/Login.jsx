import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom"; // Import hooks for navigation
import { useUser } from "../contexts/UserContext"; // Import user context hook
import styles from "./Login.module.css"; // Will create this CSS module
import { Link } from "react-router-dom";

// Mock credentials and user data
const MOCK_EMAIL = "test@example.com";
const MOCK_PASSWORD = "password123";
const MOCK_USER_DATA = {
  id: "user-1",
  name: "PawPal User",
  email: MOCK_EMAIL,
  // Add mock favorite pet IDs from your pets.json for the dashboard
  favoritePetIds: ["pet-001", "pet-003"], // Example: Bella and Coco
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const navigate = useNavigate(); // Hook for navigation programmatically
  const { user, login, isLoggedIn } = useUser(); // Get user context state and login function

  // If already logged in, redirect to dashboard immediately
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setIsAuthenticating(true);

    // Simulate authentication delay
    setTimeout(() => {
      if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
        // Simulated successful login
        console.log("Mock login successful!");
        login(MOCK_USER_DATA); // Update user context and localStorage
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        // Simulated failed login
        setError("Invalid email or password");
        setIsAuthenticating(false);
      }
    }, 1000); // Simulate network delay
  };

  return (
    <div className={styles.loginPage}>
      <h2>Login to PawPal</h2>
      <div className={styles.loginFormContainer}>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={isAuthenticating}>
            {isAuthenticating ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
      {/* Optional: Link to register */}
      <p className={styles.registerLink}>
        Don't have an account? <Link to="/register">Sign Up (Simulated)</Link>
      </p>{" "}
      {/* Create a placeholder /register page later */}
    </div>
  );
};

export default Login;
