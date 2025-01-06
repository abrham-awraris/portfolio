import React, { useEffect } from "react";
import Typed from "typed.js";
import styles from "./Hero.module.css";

const Hero = () => {
  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: ["Developer"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: false,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <img
        src="assets/img/tech-bg.jpg"
        alt="Background"
        className={styles.backgroundImage}
      />
      <div className={styles.container}>
        <h2>Abrham Awraris</h2>
        <p>
          I'm <span id="typed-text" className={styles.typed}></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
