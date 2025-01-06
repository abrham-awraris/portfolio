import React from "react";
import styles from "./Stats.module.css"; // Modular CSS

const StatsItem = ({ icon, count, label }) => {
  return (
    <div className={styles.statsItem}>
      {icon} {/* Display the React Icon component */}
      <span>{count}</span>
      <p>
        <strong>{label}</strong>
      </p>
    </div>
  );
};

export default StatsItem;
