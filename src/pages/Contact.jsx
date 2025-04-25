import React from "react";
// import styles from './Contact.module.css'; // No page-specific CSS needed yet

// Import section components
import ContactInfoSection from "../sections/ContactInfoSection";
import GeneralInquiryFormSection from "../sections/GeneralInquiryFormSection";
import AdoptionFormSection from "../sections/AdoptionFormSection"; // Will create this next
import QuickCtaSection from "../sections/QuickCtaSection";
import NewsletterSignupSection from "../sections/NewsletterSignupSection";
import FaqSection from "../sections/FaqSection";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Let’s Get in Touch</h1> {/* Keep main page heading */}
      <ContactInfoSection />
      <GeneralInquiryFormSection />
      <AdoptionFormSection /> {/* Add the multi-step form section */}
      <QuickCtaSection />
      <NewsletterSignupSection />
      <FaqSection />
    </div>
  );
};

export default Contact;
