import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Omni Customer Fulfillment Associate',
      company: 'Walmart',
      location: 'Calgary, AB',
      date: 'Nov. 2025 – Present',
      bullets: [
        'Pick, pack, and fulfill 150+ online customer orders daily with high accuracy under tight deadlines in a high-volume omnichannel environment.',
      ]
    },
    {
      title: 'Sales Associate',
      company: '7-Eleven',
      location: 'Calgary, AB',
      date: 'Feb. 2025 – Dec. 2025',
      bullets: [
        'Handled customer transactions and store operations reliably in a fast-paced retail setting.',
      ]
    }
  ];

  return (
    <div className="experience container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Experience</h2>

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            className="exp-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{ marginBottom: index < experiences.length - 1 ? '24px' : '0' }}
          >
            <div className="exp-header">
              <div>
                <h4 className="exp-title">{exp.title}</h4>
                <p className="exp-sub">{exp.company}</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <p className="exp-date">{exp.date}</p>
                <p className="exp-location">{exp.location}</p>
              </div>
            </div>
            <ul className="exp-bullets">
              {exp.bullets.map((b, i) => (
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
        ))}

      </motion.div>
    </div>
  );
};

export default Experience;