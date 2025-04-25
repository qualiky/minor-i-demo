import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const ThemeContext = createContext(null);

// Custom hook to easily access the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Theme Provider component
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme ('light' or 'dark')
  // Try to get theme from localStorage, default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // Check if the saved theme is valid ('light' or 'dark')
    return savedTheme === "dark" ? "dark" : "light";
  });

  // Effect to update the body class and localStorage whenever the theme state changes
  useEffect(() => {
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode"); // Ensure only one class is present
    } else {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
    }
    // Save the current theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]); // Re-run effect whenever `theme` state changes

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Provide the theme state and toggle function through the context
  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
