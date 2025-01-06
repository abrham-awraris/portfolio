import React from "react";
import { Link } from "react-router-dom";
import styles from "./Services.module.css"; // Custom CSS for styling
import { BiLaptop, BiMobileAlt, BiPalette } from "react-icons/bi"; // Use modern, professional icons

const Services = () => {
  // Mock service data
  const services = [
    {
      id: 1,
      title: "WEB APPLICATION DEVELOPMENT",
      description:
        "Develop innovative, custom-tailored solutions designed to meet your unique business needs.",
      icon: <BiLaptop />,
    },
  ];

  return (
    <section id="services" className={`${styles.servicesSection} section`}>
      <div className="container section-title" data-aos="fade-up">
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <p className={styles.sectionDescription}>
          Explore our wide range of services designed to accelerate your
          business success.
        </p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={`${styles.icon} flex-shrink-0`}>
                {service.icon}
              </div>
              <div>
                <h4 className={styles.serviceTitle}>
                  <Link
                    to={`/services/${service.id}`}
                    className="stretched-link"
                  >
                    {service.title}
                  </Link>
                </h4>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
