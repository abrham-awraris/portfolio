import React from "react";
import ResumeHeader from "./ResumeHeader"; // Modular header
import ResumeContent from "./ResumeContent"; // Modular content
import styles from "./Resume.module.css"; // Modular CSS

const Resume = () => {
  return (
    <section id="resume" className={styles.resumeSection}>
      <ResumeHeader />
      <ResumeContent />
    </section>
  );
};

export default Resume;
