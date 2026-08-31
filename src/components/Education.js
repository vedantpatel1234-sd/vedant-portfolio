import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className="experience container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Education</h2>

        <motion.div
          className="exp-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="exp-header">
            <div>
              <h4 className="exp-title">Southern Alberta Institute of Technology (SAIT)</h4>
              <p className="exp-sub">Diploma — Software Development</p>
              <p style={{ color: 'var(--primary-color)', fontSize: '0.9rem', marginTop: '4px' }}>GPA: 3.63 / 4.0</p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <p className="exp-date">Jan. 2025 – Aug. 2026</p>
              <p className="exp-location">Calgary, AB</p>
            </div>
          </div>
          <ul className="exp-bullets">
            {[
              'Coursework includes: Object-Oriented Programming, Database Design, Web Development, Mobile App Development, Software Testing, Cloud Computing, UI/UX Design, and System Analysis & Design.',
              'Built full-stack web and mobile applications using React, TypeScript, Node.js, C#, Python, SQL, and REST APIs across multiple academic and capstone projects.',
              'Applied Agile/Scrum methodologies and SDLC principles through team-based projects from requirements gathering through deployment and testing.',
              'Graduated with a GPA of 3.63/4.0.',
            ].map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                {b}
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Education;