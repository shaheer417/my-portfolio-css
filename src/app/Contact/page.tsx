import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import styles from "../Styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
        {/* Contact Information */}
        <div className={styles.contactInfoWrapper}>
          <span>
            <ContactInfo />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
