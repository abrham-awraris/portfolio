import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import Components

import Header from "./Components/HEADER/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Stats from "./Components/Status/Stats";
import Skills from "./Components/Skills/Skills";
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Service/Services";
import Contact from "./Components/Contact/Contact";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import PortfolioDetails from "./Components/PortfolioDetailss/PortfolioDetails";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header Component */}
        <Header />

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Stats />
                  <Skills />
                  <Resume />
                  <Portfolio />
                  <Services />
                  <Contact />
                </>
              }
            />

            {/* Individual Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />

            {/* Dynamic Routes */}
            <Route path="/portfolio/:id" element={<PortfolioDetails />} />
            <Route path="/services/:id" element={<ServiceDetails />} />

            {/* 404 Page */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
