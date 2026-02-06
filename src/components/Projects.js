import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Student Management System',
      description: 'Built a full-stack web application for managing student records with role-based authentication and real-time updates. Implemented CRUD operations and designed a responsive admin dashboard.',
      impact: 'Reduced data entry time by 40% and improved user experience with intuitive UI/UX design.',
      role: 'Solo Developer',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      category: 'Full Stack',
      github: 'https://github.com/yourusername/student-management',
      live: '#'
    },
    {
      title: 'Task Tracker Application',
      description: 'Developed a productivity tool with drag-and-drop task management, priority tagging, and deadline notifications. Integrated localStorage for data persistence.',
      impact: 'Helped users organize 100+ tasks with visual Kanban board and automated reminders.',
      role: 'Frontend Developer',
      tech: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      category: 'Frontend',
      github: 'https://github.com/yourusername/task-tracker',
      live: '#'
    },
    {
      title: 'Weather API Integration',
      description: 'Created a weather dashboard consuming OpenWeather API with location-based forecasts, interactive charts, and responsive mobile design.',
      impact: 'Delivered real-time weather data for 50+ cities with 95% uptime and fast load times.',
      role: 'Solo Developer',
      tech: ['JavaScript', 'React', 'OpenWeather API', 'Chart.js'],
      category: 'Full Stack',
      github: 'https://github.com/yourusername/weather-app',
      live: '#'
    },
    {
      title: 'Database Design Project',
      description: 'Designed and implemented a normalized PostgreSQL database schema for an e-commerce platform with complex queries, triggers, and stored procedures.',
      impact: 'Optimized query performance by 60% through indexing and efficient schema design.',
      role: 'Backend Developer',
      tech: ['PostgreSQL', 'SQL', 'Database Design', 'Python'],
      category: 'Backend',
      github: 'https://github.com/yourusername/db-project',
      live: '#'
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

        {/* Filter Buttons */}
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
                {project.title}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-role">{project.role}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <p className="project-impact">
                  <strong>Impact:</strong> {project.impact}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub →
                    </a>
                  )}
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      Live Demo →
                    </a>
                  )}
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