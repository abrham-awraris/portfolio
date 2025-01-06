import React from "react";
import styles from "./PortfolioItem.module.css";

const PortfolioItem = ({ item, onClick }) => {
  return (
    <div className={`col-lg-4 col-md-6 ${styles.portfolioItem}`}>
      <div className={styles.portfolioContent} onClick={onClick}>
        <img src={item.image} alt={item.title} className="img-fluid" />
        <div className={styles.portfolioInfo}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
