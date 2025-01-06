import React from "react";
import styles from "./Resume.module.css"; // Modular CSS

const ResumeItem = ({ title, year, description, details }) => {
  return (
    <div className={styles.resumeItem}>
      <h4 className={styles.resumeItemTitle}>{title}</h4>
      {year && <h5 className={styles.resumeItemYear}>{year}</h5>}
      <p className={styles.resumeItemDescription}>
        <em>{description}</em>
      </p>
      {details && (
        <ul className={styles.resumeItemList}>
          {details.map((detail, index) => (
            <li key={index} className={styles.resumeItemDetail}>
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResumeItem;
