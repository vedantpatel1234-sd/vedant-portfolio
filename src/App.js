import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  /* Navbar background on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Active section detection (FIXED) */
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* Scroll with navbar offset */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const yOffset = 110;
    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">

      {/* Background Effects */}
      <div className="animated-bg">
        <div className="grid-overlay"></div>
        <div className="glow-orb glow-1"></div>
        <div className="glow-orb glow-2"></div>
        <div className="glow-orb glow-3"></div>
      </div>

      {/* Navbar */}
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">

          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
            role="button"
            tabIndex={0}
          >
            {'<VP />'}
          </motion.div>

          <ul className="nav-links">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${item}`}
                  className={activeSection === item ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>

        </div>
      </motion.nav>

      {/* Main Sections */}
      <main>

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">

          <p>&copy; 2026 Vedant Patel. Built with React & passion.</p>

          <div className="footer-links">

            <a
              href="https://github.com/vedantpatel1234-sd"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vedant-patel-aa2729325"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:pvedu2006@gmail.com">
              Email
            </a>

          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;
