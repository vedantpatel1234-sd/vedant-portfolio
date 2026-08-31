import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '8px' }}
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ marginBottom: '16px' }}
          >
            Vedant Patel
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{ marginBottom: '16px' }}
          >
            Full-Stack Developer | <span className="highlight">React • TypeScript • PostgreSQL</span> | Building AI-Integrated SaaS Applications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Software Development graduate from <span className="highlight">SAIT</span> with hands-on experience building
            full-stack web applications end-to-end — from database design and backend logic to
            responsive frontends using <span className="highlight">React, TypeScript, PostgreSQL</span> and <span className="highlight">AI integrations</span>.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;