import React from "react";
import ResumeCategory from "./ResumeCategory"; // Modular category
import styles from "./Resume.module.css"; // Modular CSS

const ResumeContent = () => {
  return (
    <div className={styles.resumeContent}>
      <div className="row">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <ResumeCategory
            title="Summary"
            items={[
              {
                title: "Abrham Awraris",
                description:
                  "Creative developer with a passion for building dynamic web solutions. Adept at turning ideas into clean, efficient, and user-friendly digital experiences.",
                details: [
                  "Ethiopia",
                  "(251) 914468985",
                  "abriloodesta@gmail.com",
                ],
              },
            ]}
          />
          <ResumeCategory
            title="Education"
            items={[
              {
                title: "Fullstack Web Development",
                year: "2024",
                description: "Evangadi Networks, Maryland USA",
              },
            ]}
          />
        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <ResumeCategory
            title="Professional Experience"
            items={[
              {
                title: "Junior Web Developer",
                year: "2024",
                description: "Ethiopia, Addis Ababa",
                details: [
                  "Collaborated in the development of feature-rich web applications.",
                  "Implemented responsive layouts and optimized performance for better user experience.",
                  "Engaged in full-stack development using modern JavaScript frameworks.",
                  "Created and maintained code documentation for team collaboration.",
                ],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;
