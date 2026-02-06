import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:pvedu2006@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus('✅ Email client opened! Please send the message.');
      setFormData({ name: '', email: '', message: '' });
    }, 500);
  };

  return (
    <div className="contact container">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-intro">
          <p>
            I'm actively seeking internship and co-op opportunities in software development.
            Let's connect and discuss how I can contribute to your team!
          </p>
        </div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
            />
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
          </button>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                marginTop: '20px',
                textAlign: 'center',
                color: status.includes('✅') ? '#00f0ff' : '#ff006e'
              }}
            >
              {status}
            </motion.p>
          )}
        </motion.form>

        <motion.div
          style={{
            marginTop: '40px',
            textAlign: 'center',
            padding: '20px',
            background: 'var(--bg-card)',
            borderRadius: '10px',
            border: '1px solid rgba(0, 240, 255, 0.2)'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p style={{ marginBottom: '15px', fontWeight: 'bold' }}>Reach me directly:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <a
              href="mailto:pvedu2006@gmail.com"
              style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
            >
              📧 pvedu2006@gmail.com
            </a>

            <a
              href="tel:+13683990093"
              style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
            >
              📱 +1 (368) 399-0093
            </a>

            <a
              href="https://www.linkedin.com/in/vedant-patel-aa2729325"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
            >
              💼 LinkedIn Profile
            </a>

            <p style={{ color: 'var(--text-light)' }}>
              📍 Calgary, Alberta, Canada
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
