import React, { useState } from "react";
import styles from "./Header.module.css";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaHome,
  FaUser,
  FaFileAlt,
  FaImages,
  FaServicestack,
  FaChevronDown,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <div className={styles.mobileToggle} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <header
        className={`${styles.header} ${
          isMobileMenuOpen ? styles.mobileOpen : ""
        }`}
      >
        <div className={styles.headerContent}>
          {/* Profile Image */}
          <div className={styles.profileImg}>
            <img
              src="assets/img/do-more-profile.jpg"
              alt="Profile"
              className={styles.ovalImg}
            />
          </div>

          {/* Site Name / Logo */}
          <Link to="/" className={styles.logo}>
            <h1 className={styles.siteName}>Abrham Awraris</h1>
          </Link>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a
              href="https://twitter.com/abrhamawraris"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.twitter}
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/abrhamawraris"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.facebook}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/abrhamawraris"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagram}
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/abrhamawraris"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedin}
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Navigation Menu */}
          <nav id="navmenu" className={styles.navmenu}>
            <ul>
              <li>
                <Link to="/" className="active">
                  <FaHome className={styles.navicon} /> Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <FaUser className={styles.navicon} /> About
                </Link>
              </li>
              <li>
                <Link to="/resume">
                  <FaFileAlt className={styles.navicon} /> Resume
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  <FaImages className={styles.navicon} /> Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <FaServicestack className={styles.navicon} /> Services
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <FaEnvelope className={styles.navicon} /> Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
