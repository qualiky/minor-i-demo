import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css"; // Import CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={`${styles.footerSection} ${styles.about}`}>
          {" "}
          {/* Combine classes */}
          <h3>PawPal</h3>
          <p>Connecting loving pets with loving homes.</p>
          {/* Social links here later */}
        </div>
        <div className={`${styles.footerSection} ${styles.links}`}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/gallery">Adopt a Pet</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* Sitemap links here later */}
          </ul>
        </div>
        {/* Newsletter form here later */}
      </div>
      <div className={styles.footerBottom}>
        © {new Date().getFullYear()} PawPal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
