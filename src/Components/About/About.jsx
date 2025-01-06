import React from "react";
import AboutTitle from "./AboutTitle"; // Modular title and description
import AboutDetails from "./AboutDetails"; // Modular details list
import styles from "./About.module.css"; // Modular CSS

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <AboutTitle />
      <AboutDetails />
    </section>
  );
};

export default About;
