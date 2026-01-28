import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, CheckCircle2, Moon, Sun, Cpu, ExternalLink } from 'lucide-react';
import './App.css';

// Animation Component
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${isVisible ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`portfolio-root ${isDarkMode ? 'dark' : 'light'}`}>
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
            <div className="logo">ASHFAQ<span>.</span></div>
            <div className="nav-menu">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="theme-toggle">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#projects">Projects</a>
            <a href="#contact" className="btn-contact">Contact</a>
            </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-fullscreen">
        <div className="container hero-grid">
          <div className="hero-text">
            <div className="badge">
              <CheckCircle2 size={14} /> Available for AI Internships
            </div>
            <h1>Engineering <br /><span className="gradient">Intelligence.</span></h1>
            <p>
              Computer Science student at IIT specializing in <strong>Machine Learning</strong> and <strong>Deep Learning</strong>. 
              Currently building impactful software solutions like <em>Plannora</em> & <em>Airea</em>.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn-primary">View Projects</a>
              <div className="social-links">
                <a href="https://github.com" target="_blank"><Github size={20} /></a>
                <a href="https://linkedin.com" target="_blank"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-frame">
              {/* Ensure this image is in your public folder */}
              <img src="/profilePic.jpeg" alt="Mohamed Ashfaq" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
            <RevealOnScroll>
            <h2 className="section-title"><Cpu size={28} /> Featured Work</h2>
            <div className="project-grid">
                
                <div className="project-card">
                <div className="card-header">
                    <span className="card-tag">AI & IoT</span>
                    <ExternalLink size={16} className="link-icon"/>
                </div>
                <h3>Project Airea</h3>
                <p>An IoT system for monitoring lung patients. I led the AI model training for cough detection and anomaly prediction using Python.</p>
                <div className="tech-stack">
                    <span>Python</span><span>TensorFlow</span><span>IoT</span>
                </div>
                </div>

                <div className="project-card">
                <div className="card-header">
                    <span className="card-tag">Full-Stack</span>
                    <ExternalLink size={16} className="link-icon"/>
                </div>
                <h3>Plannora</h3>
                <p>AI-powered trip planner for tourists in Sri Lanka. Collaborated with a team of six to build a seamless React frontend.</p>
                <div className="tech-stack">
                    <span>React</span><span>Flask</span><span>AI</span>
                </div>
                </div>

            </div>
            </RevealOnScroll>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
            <h2>Let's build something.</h2>
            <p>Seeking AI opportunities in Sri Lanka.</p>
            <a href="mailto:your-email@example.com" className="email-link">Get in touch <ExternalLink size={16} /></a>
        </div>
      </footer>
    </div>
  );
}