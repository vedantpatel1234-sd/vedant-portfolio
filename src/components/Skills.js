import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'SQL', 'C++', 'C', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React 19', 'Next.js', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'React Native', '.NET', 'Blazor', 'Zustand', 'React Router', 'Recharts', 'Vite']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'Oracle SQL / APEX', 'MySQL', 'Supabase', 'Row-Level Security', 'SQL Query Optimization']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Git', 'GitHub', 'GitHub Actions (CI/CD)', 'Docker', 'Azure', 'Azure Functions', 'Azure SQL', 'Deno Edge Functions', 'Vercel', 'PowerShell']
    },
    {
      title: 'APIs & AI',
      skills: ['RESTful APIs', 'Microsoft Entra ID', 'MSAL.js', 'Anthropic Claude API', 'Power BI Embedded', 'AI Service Integration']
    },
    {
      title: 'Tools & Methodology',
      skills: ['VS Code', 'Figma', 'Jira', 'Power BI', 'Agile/Scrum', 'SDLC', 'OOP', 'Unit & Integration Testing', 'Vitest', 'Secure Coding']
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