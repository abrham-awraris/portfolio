// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css"; // Assuming your CSS is in App.css or imported elsewhere

// import Header from "./Components/HEADER/HEADER";
// import Hero from "./Components/Hero/Hero";
// import About from "./Components/About/About";
// import Stats from "./Components/Status/Stats";
// import Skills from "./Components/Skills/Skills";
// import Resume from "./Components/Resume/Resume";
// import Portfolio from "./Components/Portfolio/portfolio";
// import Services from "./Components/Service/Services";
// import Testimonials from "./Components/Testmonial/Testmonials";
// import Contact from "./Components/Contact/Contact";
// import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
// // import PortfolioDetails from "./Components/PortfolioDetails/PortfolioDetails";
// import PortfolioDetails from "./Components/PortfolioDetailss/PortfolioDetails";

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Header />
//         <main className="main-content">
//           <Routes>
//             {/* Home route */}
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Hero />
//                   <About />
//                   <Stats />
//                   <Skills />
//                   <Resume />
//                   <Portfolio />
//                   <PortfolioDetails />
//                   <Services />
//                   <Testimonials />
//                   <Contact />
//                 </>
//               }
//             />

//             {/* Portfolio details route */}
//             <Route path="/portfolio/:id" element={<PortfolioDetails />} />

//             {/* Service details route */}
//             <Route path="/services/:id" element={<ServiceDetails />} />

//             {/* Default fallback route */}
//             <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";

// import Header from "./Components/HEADER/HEADER";

// import Hero from "./Components/Hero/Hero";
// import About from "./Components/About/About";
// import Stats from "./Components/Status/Stats";
// import Skills from "./Components/Skills/Skills";
// import Resume from "./Components/Resume/Resume";
// import Portfolio from "./Components/Portfolio/Portfolio";
// import Services from "./Components/Service/Services";

// import Contact from "./Components/Contact/Contact";
// import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
// import PortfolioDetails from "./Components/PortfolioDetailss/PortfolioDetails";

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Header />
//         <main className="main-content">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Hero />
//                   <About />
//                   <Stats />
//                   <Skills />
//                   <Resume />
//                   <Portfolio />
//                   <Services />

//                   <Contact />
//                 </>
//               }
//             />
//             <Route path="/portfolio/:id" element={<PortfolioDetails />} />
//             <Route path="/services/:id" element={<ServiceDetails />} />
//             <Route path="*" element={<h1>404 - Page Not Found</h1>} />

//             <Route path="/about" element={<About />} />
//             <Route path="/resume" element={<Resume />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/services" element={<Services />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import Components
// import Header from "./Components/HEADER/HEADER";
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
