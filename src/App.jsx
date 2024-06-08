import React, { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';

const App = () => {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <div className="container">
        <div ref={homeRef} id="home" className="section">
          <Home />
        </div>
        <div ref={projectsRef} id="projects" className="section">
          <Projects />
        </div>
        <div ref={aboutRef} id="about" className="section">
          <About />
        </div>
        <div ref={contactRef} id="contact" className="section">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
