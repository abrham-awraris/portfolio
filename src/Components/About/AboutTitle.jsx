import React from "react";
import styles from "./About.module.css"; // Modular CSS

const AboutTitle = () => {
  return (
    <div className={styles.titleContainer} data-aos="fade-up">
      <h2>About</h2>
      <p>
        Hello! I’m Abrham Awraris, a passionate web developer dedicated to
        transforming ideas into dynamic, functional websites. With a background
        in fullstack web development, I bring a blend of creativity and
        technical expertise to every project. Let’s create something
        extraordinary together!
      </p>
    </div>
  );
};

export default AboutTitle;
