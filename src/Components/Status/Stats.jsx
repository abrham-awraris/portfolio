import React from "react";
import StatsItem from "./StatsItem"; // Modular StatsItem component
import { FaRegSmile, FaFileAlt, FaHeadset, FaUsers } from "react-icons/fa"; // Importing icons from react-icons
import styles from "./Stats.module.css"; // Modular CSS

const Stats = () => {
  return (
    <section id="stats" className={styles.statsSection}>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className={`row ${styles.row}`}>
          {" "}
          {/* Add 'styles.row' to ensure modular class is applied */}
          <StatsItem icon={<FaRegSmile />} count={0} label="Happy Clients" />
          <StatsItem icon={<FaFileAlt />} count={3} label="Projects" />
          <StatsItem icon={<FaHeadset />} count={0} label="Hours Of Support" />
          <StatsItem icon={<FaUsers />} count={1} label="Hard Workers" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
