import React from "react";
import styles from "./Resume.module.css"; // Modular CSS

const ResumeHeader = () => {
  return (
    <div className={styles.resumeHeader}>
      <h2 className={styles.sectionTitle}>Resume</h2>
      <p className={styles.sectionDescription}>
        As a skilled web developer, I specialize in creating intuitive,
        responsive, and innovative digital experiences. Proficient in front-end
        and back-end technologies, I leverage modern tools to deliver
        high-quality projects on time. Driven by a passion for innovation, I
        craft web solutions that are both functional and memorable.
      </p>
    </div>
  );
};

export default ResumeHeader;
