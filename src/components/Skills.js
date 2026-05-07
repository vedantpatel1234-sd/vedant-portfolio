import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'Python', 'C#', 'SQL (PostgreSQL)', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'React Native', 'Framer Motion', 'Recharts']
    },
    {
      title: 'Databases & Cloud',
      skills: ['PostgreSQL', 'Supabase', 'MySQL', 'Vercel', 'Render']
    },
    {
      title: 'Tools & AI',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Claude API', 'Groq API', 'REST APIs']
    },
    {
      title: 'Soft Skills',
      skills: ['Teamwork', 'Problem Solving', 'Deadline Oriented', 'Communication', 'Reliability', 'Agile / SDLC']
    }
  ];

  return (
    <div className="skills container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;