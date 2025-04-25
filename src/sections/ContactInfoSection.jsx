import React from "react";
import styles from "./ContactInfoSection.module.css"; // Will create this CSS module

const ContactInfoSection = () => {
  return (
    <section className={styles.contactInfo}>
      <h2>Contact Details</h2>
      <div className={styles.infoDetails}>
        <p>
          <strong>Address:</strong> 123 Adoption Lane, Pet City, PC 12345
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> info@pawpal.org
        </p>
        <p>
          <strong>Operating Hours:</strong> Mon - Fri: 9 AM - 5 PM, Sat: 10 AM -
          4 PM, Sun: Closed
        </p>
      </div>

      <div className={styles.mapContainer}>
        {/* Embedded Google Map Placeholder */}
        {/* Replace with an actual iframe or map library later */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE_LONGITUDE!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zYOUR_SHELTER_NAME!5e0!3m2!1sen!2sus!4vYOUR_TIMESTAMP"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="PawPal Location"
        ></iframe>
        {/* Note: Replace YOUR_LATITUDE_LONGITUDE, YOUR_SHELTER_NAME, YOUR_TIMESTAMP with actual data if embedding */}
        {/* For a simple placeholder, a static image or colored div with text is sufficient: */}
        {/* <div className={styles.mapPlaceholder}>Embedded Map Placeholder</div> */}
      </div>
    </section>
  );
};

export default ContactInfoSection;
