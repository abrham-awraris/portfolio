import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ServiceDetails.module.css"; // Custom CSS for styling

const ServiceDetails = () => {
  const { id } = useParams(); // Get service ID from URL

  // Mock service details (replace with API call if needed)
  const serviceDetails = {
    1: {
      title: "WEB APPLICATION DEVELOPMENT",
      details:
        "We specialize in building scalable and efficient web applications tailored to meet your unique business needs. Using modern frameworks and technologies, we ensure that your application is both functional and user-friendly.",
    },
    2: {
      title: "MOBILE APP DEVELOPMENT",
      details:
        "Our mobile app development services ensure that your app provides an exceptional user experience. From Android to iOS, we create responsive, intuitive, and high-performing apps for any platform.",
    },
    3: {
      title: "UI/UX DESIGN",
      details:
        "Our UI/UX design services help you create visually stunning, easy-to-use interfaces that engage users. We work with you to craft experiences that make your product stand out.",
    },
  };

  const service = serviceDetails[id];

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <section
      id="service-details"
      className={`${styles.serviceDetailsSection} section`}
    >
      <div className="container">
        <h2 className={styles.title}>{service.title}</h2>
        <p className={styles.description}>{service.details}</p>
      </div>
    </section>
  );
};

export default ServiceDetails;
