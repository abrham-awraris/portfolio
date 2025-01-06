import React from "react";
import PropTypes from "prop-types";
import styles from "./InfoItem.module.css"; // Import InfoItem.module.css

const InfoItem = ({ icon, title, content }) => {
  return (
    <div className={styles.infoItem}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

InfoItem.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default InfoItem;
