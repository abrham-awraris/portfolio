import React from "react";
import styles from "./Skills.module.css";

const Skill = ({ skillName, skillPercentage }) => {
  return (
    <div className="col-lg-6">
      <div className={styles.progress}>
        <div className={styles.skill}>
          <span>{skillName}</span>
          <div className={styles.progressBarWrap}>
            <div
              className={styles.progressBar}
              style={{ width: `${skillPercentage}%` }}
            ></div>
          </div>
          <span className={styles.val}>{skillPercentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
