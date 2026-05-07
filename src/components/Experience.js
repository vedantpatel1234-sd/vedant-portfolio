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
        'Pick, pack, and fulfill online customer orders accurately and within tight SLA windows in a high-volume omnichannel retail environment.',
        'Collaborate with fulfillment team to maintain order accuracy and meet daily throughput targets across in-store and curbside pickup channels.',
      ]
    },
    {
      title: 'Sales Associate',
      company: '7-Eleven',
      location: 'Calgary, AB',
      date: 'Feb. 2025 – Dec. 2025',
      bullets: [
        'Delivered consistent customer service in a high-volume retail environment, handling transactions accurately under time pressure.',
        'Collaborated with team members to maintain store operations and meet daily targets across an 11-month tenure.',
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