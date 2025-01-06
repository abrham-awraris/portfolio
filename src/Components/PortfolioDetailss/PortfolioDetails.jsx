import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./PortfolioDetails.module.css";

const PortfolioDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const portfolioItems = [
    {
      id: 1,
      title: "Evangadi Forum",
      description: "A project for Evangadi Forum.",
      category: "Product Design",
      client: "Self.",
      date: "23 dec, 2024",
      url: "https://evangadi-forum-group-2-4-2024.netlify.app",
      image: "/assets/img/evangadi.png",
    },

    {
      id: 2,
      title: "Netflix Clone",
      description: "A project for Netflix Clone.",
      category: "Product Design",
      client: "Self",
      date: "26 Nov, 2024",
      url: "https://abrham-awraris.github.io/netflix-clon-2024/",
      image: "/assets/img/netflix.avif",
    },
    {
      id: 3,
      title: "Amazon Clone",
      description: "A project for Amazone Clone.",
      category: "Product Design",
      client: "Self.",
      date: "14 dec, 2024",
      url: " https://amazone-abrhams-clone.netlify.app/",
      image: "/assets/img/amazon.avif",
    },
    // {
    //   id: 4,
    //   title: "Apple Project",
    //   description: "A detailed description about the Apple project.",
    //   category: "Web design",
    //   client: "ASU Company",
    //   date: "01 March, 2020",
    //   url: "https://www.example.com",
    //   image: "/assets/img/apple.jpg",
    // },
  ];

  const project = portfolioItems.find((item) => item.id === parseInt(id));

  if (!project) {
    return (
      <div>
        <h2>Project not found</h2>
        <button onClick={() => navigate("/")}>Back to Portfolio</button>
      </div>
    );
  }

  return (
    <div className={styles.detailsPage}>
      {/* Page Title Section with Back Button */}
      <div className={styles.pageTitle}>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          Back
        </button>
        <h2>Portfolio Details</h2>
      </div>

      {/* Content Section */}
      <div className={styles.contentContainer}>
        {/* Image Section */}
        <div className={styles.imageContainer}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.projectImage}
          />
        </div>

        {/* Project Information Section */}
        <div className={styles.infoContainer}>
          <h3>Project Information</h3>
          <ul>
            <li>
              <strong>Category:</strong> {project.category}
            </li>
            <li>
              <strong>Client:</strong> {project.client}
            </li>
            <li>
              <strong>Project Date:</strong> {project.date}
            </li>
            <li>
              <strong>Project URL:</strong>{" "}
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.url}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Description Section
      <div className={styles.descriptionContainer}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div> */}
    </div>
  );
};

export default PortfolioDetails;
