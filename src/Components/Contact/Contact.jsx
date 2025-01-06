import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Icons for Contact
import InfoItem from "./InfoItem"; // Import InfoItem component
import ContactForm from "./ContactForm"; // Import ContactForm component
import styles from "./Contact.module.css"; // Import the module CSS

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.sectionTitle}>Contact</h2>
      <div className={styles.infoWrap}>
        <InfoItem
          icon={<FaMapMarkerAlt />}
          title="Address"
          content="Ethiopia"
        />
        <InfoItem icon={<FaPhoneAlt />} title="Phone" content="+251914468985" />
        <InfoItem
          icon={<FaEnvelope />}
          title="Email"
          content="abriloodesta@gmail.com"
        />
      </div>

      <ContactForm setSuccessMessage={setSuccessMessage} />
      {successMessage && (
        <p className={styles.successMessage}>{successMessage}</p>
      )}
    </section>
  );
};

export default Contact;
