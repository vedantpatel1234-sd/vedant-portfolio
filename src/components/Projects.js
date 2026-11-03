import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'GBTAC',
      imageLabel: 'GBTAC',
      subtitle: 'Energy Visualization Platform — Capstone Project',
      description: 'Developed the React front-end for a full-stack energy monitoring platform for a net-zero greenhouse research facility, visualizing 130,000+ sensor data rows across energy, solar, and weather datasets.',
      bullets: [
        'Built responsive dashboard pages and KPI visualizations using Power BI Embedded and Recharts, with front-end authentication and role-based access via Microsoft Entra ID and MSAL.js across 4 user roles.',
        'Integrated React components with 18–20 Azure Functions APIs, collaborating in a 3-person Agile team using Jira and GitHub Actions CI/CD.',
      ],
      role: 'Frontend Developer',
      tech: ['React', 'JavaScript', 'Power BI Embedded', 'Recharts', 'Microsoft Entra ID', 'MSAL.js', 'Azure Functions', 'GitHub Actions'],
      category: 'Frontend',
      date: 'May 2026 – Aug. 2026',
      github: '',
      live: ''
    },
    {
      title: 'CourseSync',
      imageLabel: 'CourseSync',
      subtitle: 'Multi-Tenant Academic Scheduling SaaS',
      description: 'A multi-tenant web application that helps colleges assign instructors to course sections, with separate portals for administrators, coordinators, and instructors.',
      bullets: [
        'Built a multi-tenant instructor-assignment SaaS in React 19, TypeScript and Supabase with three role-based portals and a weighted matching engine that scores candidates and excludes conflicts.',
        'Enforced tenant isolation with PostgreSQL row-level security on 15 tables, verified by database tests within a 913-test suite (Vitest, PGlite) run in GitHub Actions CI.',
        'Integrated the Anthropic Claude API via a server-side Deno Edge Function for a human-in-the-loop scheduling copilot, with proposals re-validated by conflict rules and capped by per-school token budgets.',
        'Added invitation-based onboarding, plan limits with AI usage metering, school-level data export and deletion tooling, and a staging environment with an automated smoke test.',
      ],
      role: 'Full Stack Developer',
      tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Supabase', 'PostgreSQL', 'Row-Level Security', 'Deno Edge Functions', 'Claude API', 'Vitest', 'GitHub Actions', 'Vercel'],
      category: 'Full Stack',
      date: 'May 2026 – Present',
      github: 'https://github.com/vedantpatel1234-sd/CourseSync',
      live: ''
    },
    {
      title: 'Portfolio',
      imageLabel: 'Portfolio',
      subtitle: 'Personal Portfolio Website',
      description: 'Designed and built a fast, visually polished public portfolio website end-to-end using React and JavaScript, accurately translating a custom creative direction into clean, well-structured code.',
      bullets: [
        'Set up a CI/CD pipeline connected to Git and GitHub for automatic redeployment on every push, keeping the live site always up to date.',
      ],
      role: 'Frontend Developer — Solo',
      tech: ['React.js', 'JavaScript', 'CSS3', 'Framer Motion', 'Git', 'Vercel'],
      category: 'Frontend',
      date: 'Sep. 2025 – Present',
      github: 'https://github.com/vedantpatel1234-sd/vedant-portfolio',
      live: 'https://vedant-portfolio-five-sigma.vercel.app'
    }
  ];

  // All shows everything, Full Stack shows CourseSync only,
  // Frontend shows GBTAC + Portfolio
  const categories = ['All', 'Full Stack', 'Frontend'];

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

                <p style={{ fontSize: '0.8rem', color: 'var(--accent-color)', marginBottom: '10px' }}>{project.date}</p>

                <p className="project-description">{project.description}</p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '15px' }}>
                  {project.bullets.map((b, i) => (
                    <li key={i} style={{ position: 'relative', paddingLeft: '18px', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.5' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>▹</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub →
                    </a>
                  )}
                  {project.live && (
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