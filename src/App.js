import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    setActiveSection(sectionId);

    const NAV_OFFSET = 80;
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const scrollTo = elementTop - NAV_OFFSET;

    window.scrollTo({ top: scrollTo, behavior: 'smooth' });
    window.history.replaceState(null, '', `#${sectionId}`);
  };

  // min-height: 100vh ensures the next section never peeks in at the bottom
  const sectionStyle = {
    minHeight: '100vh',
    padding: '20px 20px 100px',
    scrollMarginTop: '80px',
  };

  return (
    <div className="App">
      <div className="animated-bg">
        <div className="grid-overlay"></div>
        <div className="glow-orb glow-1"></div>
        <div className="glow-orb glow-2"></div>
        <div className="glow-orb glow-3"></div>
      </div>

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
          >
            {'<VP />'}
          </motion.div>

          <ul className="nav-links">
            {['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'].map((item, index) => (
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

      <main>
        <section id="home" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
          <Hero />
        </section>

        <section id="about" style={sectionStyle}>
          <About />
        </section>

        <section id="education" style={sectionStyle}>
          <Education />
        </section>

        <section id="experience" style={sectionStyle}>
          <Experience />
        </section>

        <section id="skills" style={sectionStyle}>
          <Skills />
        </section>

        <section id="projects" style={sectionStyle}>
          <Projects />
        </section>

        <section id="contact" style={sectionStyle}>
          <Contact />
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Vedant Patel. Built with React & passion.</p>
          <div className="footer-links">
            <a href="https://github.com/vedantpatel1234-sd" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/vedant-patel-aa2729325" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:pvedu2006@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;