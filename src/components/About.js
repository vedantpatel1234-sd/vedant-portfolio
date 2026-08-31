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
              I'm happiest when an idea turns into something I can actually open in a browser and use.
            </p>
            <p>
              I'm a <span className="highlight">Software Development graduate from SAIT</span> focused on full-stack web application
              development, with hands-on experience across React, TypeScript, JavaScript, PostgreSQL,
              REST APIs, and CI/CD. I enjoy working across the stack — from building responsive
              frontends to designing databases, developing application logic, integrating APIs, and
              deploying applications.
            </p>
            <p>
              I'm particularly passionate about building <strong>useful, well-designed web applications</strong> that
              solve real problems — from AI-integrated SaaS platforms to energy visualization dashboards.
              I use AI-assisted development tools as part of my normal workflow and love turning complex
              ideas into clean, functional code.
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