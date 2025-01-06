import React from "react";
import Skill from "./Skill";
import styles from "./Skills.module.css";

const Skills = () => {
  const skillData = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 85 },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          Here are my core technical skills and expertise, represented visually.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content">
          {skillData.map((skill, index) => (
            <Skill
              key={index}
              skillName={skill.name}
              skillPercentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
