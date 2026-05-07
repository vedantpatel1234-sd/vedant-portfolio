import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="about container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Hello! I'm Vedant.</h3>
            <p>
              I'm currently pursuing my Software Development Diploma at{' '}
              <span className="highlight">SAIT (Southern Alberta Institute of Technology)</span>,
              with an expected graduation in August 2026.
            </p>
            <p>
              My journey in software development started with a curiosity about how things work
              behind the scenes. I've built that foundation with modern technologies including
              JavaScript, Python, C#, PostgreSQL, React, Next.js, and Supabase — and I've applied
              Agile methodologies through multiple real-world team projects.
            </p>
            <p>
              I'm particularly passionate about creating <strong>intuitive user interfaces</strong> and
              building applications that solve real-world problems — from AI-powered SaaS platforms
              to fitness trackers. I love turning complex ideas into clean, functional code.
            </p>
            <p>
              <strong>Location:</strong> Calgary, Alberta, Canada 🇨🇦
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {!imgError ? (
              <img
                src="/profile.jpg"
                alt="Vedant Patel"
                className="profile-image"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className="profile-image"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-card)',
                  fontSize: '4rem',
                  gap: '10px'
                }}
              >
                <span>👨‍💻</span>
                <span style={{ fontSize: '1rem', color: 'var(--text-light)' }}>Vedant Patel</span>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;