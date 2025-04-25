import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const UserContext = createContext(null);

// Custom hook to easily access the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// User Provider component
export const UserProvider = ({ children }) => {
  // State to hold the current user object (or null if logged out)
  // Initialize from localStorage
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("pawpalUser");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error("Could not parse user from localStorage", e);
      return null; // Handle potential parsing errors
    }
  });

  // Effect to update localStorage whenever the user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("pawpalUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("pawpalUser");
    }
  }, [user]); // Re-run effect whenever `user` state changes

  // Function to "log in" a user (set user state)
  const login = (userData) => {
    // Simulate setting user data after successful login check
    setUser(userData);
  };

  // Function to "log out" a user (clear user state)
  const logout = () => {
    setUser(null);
  };

  // Provide the user state and login/logout functions through the context
  const value = {
    user, // The current user object (or null)
    login, // Function to log in
    logout, // Function to log out
    isLoggedIn: user !== null, // Convenience boolean
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
