import React from "react";
import styles from "./About.module.css"; // Modular CSS

const AboutDetails = () => {
  return (
    <div
      className={styles.detailsContainer}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className={styles.detailsRow}>
        <div className={styles.detailsCol}>
          <ul>
            <li>
              <strong>Birthday:</strong> <span>1 May 1993</span>
            </li>

            <li>
              <strong>Phone:</strong> <span>+251914468985</span>
            </li>
            <li>
              <strong>City:</strong> <span>Ethiopia</span>
            </li>
          </ul>
        </div>
        <div className={styles.detailsCol}>
          <ul>
            <li>
              <strong>Age:</strong> <span>30</span>
            </li>

            <li>
              <strong>Email:</strong> <span>abriloodesta@gmail.com</span>
            </li>
            <li>
              <strong>Freelance:</strong> <span>Available</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
