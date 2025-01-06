import React from "react";
import { Link } from "react-router-dom";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Evangadi Forum",
      category: "Books",
      description: "A project for Evangadi Forum.",
      image: "/assets/img/evangadi.png",
    },
    {
      id: 2,
      title: "Netflix Clone",
      category: "Product",
      description: "A project for Netflix.",
      image: "/assets/img/netflix.avif",
    },
    {
      id: 3,
      title: "Amazone Clone",
      category: "Branding",
      description: "Aproject for Amazone.",
      image: "/assets/img/amazon.avif",
    },
    // {
    //   id: 4,
    //   title: "Apple Clone",
    //   category: "App",
    //   description: "A project about Apple.",
    //   image: "/assets/img/apple.jpg",
    // },
  ];

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Portfolio</h2>
        <ul className={styles.filters}>
          <li className={styles.filterItem}>PRODUCTS</li>
        </ul>
        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item) => (
            <div key={item.id} className={styles.portfolioItem}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.portfolioImage}
              />
              <div className={styles.portfolioInfo}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <Link
                  to={`/portfolio/${item.id}`}
                  className={styles.detailsLink}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
