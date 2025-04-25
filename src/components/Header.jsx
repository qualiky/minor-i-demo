import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext"; // Import useUser hook
import styles from "./Header.module.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, isLoggedIn, logout } = useUser(); // Get user context

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleThemeToggleClick = () => {
    toggleTheme();
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoutClick = () => {
    logout(); // Call logout from context
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    // Optional: Redirect to home or login after logout
    // navigate('/'); // Would need to import useNavigate here
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">🐾 PawPal</Link>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ""}`}
        >
          <li>
            <NavLink to="/" onClick={handleNavLinkClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleNavLinkClick}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={handleNavLinkClick}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleNavLinkClick}>
              Contact
            </NavLink>
          </li>
          {/* Conditional Links based on login status */}
          {isLoggedIn ? (
            <>
              <li>
                <NavLink to="/dashboard" onClick={handleNavLinkClick}>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogoutClick}
                  className={styles.navLogoutButton}
                >
                  Logout
                </button>
              </li>{" "}
              {/* Use a button for logout */}
            </>
          ) : (
            <li>
              <NavLink to="/login" onClick={handleNavLinkClick}>
                Login
              </NavLink>
            </li>
          )}
        </ul>

        {/* Theme Toggle Button */}
        <button className={styles.themeToggle} onClick={handleThemeToggleClick}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* Hamburger Icon Button for Mobile */}
        <button className={styles.hamburger} onClick={toggleMobileMenu}>
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Header;
