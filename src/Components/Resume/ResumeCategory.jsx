import React from "react";
import ResumeItem from "./ResumeItem"; // Individual resume item
import styles from "./Resume.module.css"; // Modular CSS

const ResumeCategory = ({ title, items }) => {
  return (
    <div className={styles.resumeCategory}>
      <h3 className={styles.resumeCategoryTitle}>{title}</h3>
      {items.map((item, index) => (
        <ResumeItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ResumeCategory;
