import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'CourseSync',
      imageLabel: 'CourseSync',
      subtitle: 'Instructor-Course Assignment System',
      description: 'A full-stack multi-tenant SaaS platform for academic departments to manage instructor-to-section assignments, replacing spreadsheet-based workflows. Integrated Claude API as a natural language AI assistant allowing admins to query assignments conversationally.',
      impact: 'Designed automated matching engine using the Hungarian algorithm to generate optimized assignment drafts, reducing manual admin time.',
      role: 'Full Stack Developer',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Claude API', 'Recharts'],
      category: 'Full Stack',
    },
    {
      title: 'Portfolio',
      imageLabel: 'Portfolio',
      subtitle: 'Cyberpunk-themed Portfolio Website',
      description: 'Designed and built a cyberpunk-themed portfolio with custom animations and a cohesive visual identity showcasing projects and technical skills.',
      impact: 'Built with React, Framer Motion animations, and a fully responsive design for all screen sizes.',
      role: 'Solo Developer',
      tech: ['React', 'JavaScript', 'CSS3', 'Framer Motion'],
      category: 'Frontend',
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Featured Projects</h2>

        <div className="project-filters">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <div className="project-image">
                {project.imageLabel}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <div>
                    <h3>{project.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', opacity: 0.7, marginTop: '2px' }}>{project.subtitle}</p>
                  </div>
                  <span className="project-role">{project.role}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <p className="project-impact">
                  <strong>Impact:</strong> {project.impact}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;