import React from 'react';
import { Github, Linkedin, ArrowUpRight, Mail, Cpu, Layers, Code2, GraduationCap } from 'lucide-react';
import './App.css';

// Minimalist Project Card
const ProjectCard = ({ title, category, description, tech }) => (
  <div className="group relative bg-zinc-900/40 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 p-8 rounded-xl overflow-hidden hover:bg-zinc-900/60">
    <div className="flex justify-between items-start mb-6">
      <div>
        <span className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-2 block">{category}</span>
        <h3 className="text-2xl font-semibold text-zinc-100 group-hover:text-white transition-colors">{title}</h3>
      </div>
      <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors duration-300" size={20} />
    </div>
    
    <p className="text-zinc-400 leading-relaxed mb-8 font-light">
      {description}
    </p>

    <div className="flex flex-wrap gap-3 mt-auto">
      {tech.map((t, i) => (
        <span key={i} className="text-xs font-medium text-zinc-400 bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700/50">
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen text-zinc-300 relative selection:bg-white selection:text-black">
      
      {/* Background Texture */}
      <div className="noise-bg"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-lg text-white tracking-tight">
          ASHFAQ<span className="text-zinc-600">.DEV</span>
        </div>

        {/* NEW: Navigation Links (Hidden on mobile, visible on desktop) */}
        <div className="hidden md:flex items-center gap-8 bg-zinc-900/50 px-8 py-2 rounded-full border border-white/5">
          {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a href="https://github.com" target="_blank" className="text-zinc-500 hover:text-white transition-colors"><Github size={18} /></a>
          <a href="https://linkedin.com" target="_blank" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto pt-40 pb-20">
        
        {/* Hero / ABOUT Section */}
        <section id="about" className="flex flex-col md:flex-row items-start md:items-center justify-between gap-16 mb-32 animate-fade-in scroll-mt-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Internships
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              Engineering <br />
              <span className="text-zinc-500">Intelligence.</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl mb-10">
              I am <span className="text-white font-medium">Mohamed Ashfaq</span>, a Computer Science student at IIT. 
              I build scalable AI systems and full-stack applications with precision and purpose.
            </p>

            <div className="flex gap-4">
              <a href="#projects" className="bg-white text-black font-semibold py-4 px-8 rounded-lg hover:bg-zinc-200 transition-colors">
                View Work
              </a>
              <a href="/cv.pdf" className="bg-zinc-900 text-white border border-zinc-800 font-semibold py-4 px-8 rounded-lg hover:bg-zinc-800 transition-colors">
                Resume
              </a>
            </div>
          </div>

          {/* Photo Frame */}
          <div className="relative group w-72 h-72 md:w-96 md:h-96 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
            <div className="absolute inset-0 bg-zinc-800 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl">
              <img 
                src="/profilePic.jpeg" 
                alt="Mohamed Ashfaq" 
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* SKILLS Section (Stats) */}
        <section id="skills" className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-12 mb-32 scroll-mt-28">
          {[
            { label: 'Focus', value: 'AI & Deep Learning', icon: <Cpu /> },
            { label: 'Stack', value: 'Java / React / MySQL', icon: <Code2 /> },
            { label: 'Education', value: 'BSc Computer Science', icon: <GraduationCap /> },
            { label: 'Location', value: 'Sri Lanka', icon: <Layers /> }
          ].map((stat, i) => (
            <div key={i} className="space-y-2 hover:bg-zinc-900/30 p-4 rounded-lg transition-colors">
              <div className="text-zinc-500 mb-1">{stat.icon}</div>
              <h4 className="text-white font-semibold text-lg">{stat.value}</h4>
              <p className="text-sm text-zinc-600 uppercase tracking-wider font-medium">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* PROJECTS Section */}
        <section id="projects" className="mb-32 scroll-mt-28">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Selected Work</h2>
            <span className="text-zinc-600 text-sm hidden md:block">01 — 04</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Plannora"
              category="Full Stack Engineering"
              description="An AI-powered trip planner designed for Sri Lankan tourism. Features a custom recommendation engine built with Python and a responsive React interface."
              tech={['React', 'Flask', 'Machine Learning', 'Google Maps API']}
            />
            <ProjectCard 
              title="Project Airea"
              category="IoT & AI Research"
              description="A medical IoT system for monitoring lung health. I led the development of a TensorFlow model capable of detecting cough anomalies in real-time audio streams."
              tech={['TensorFlow', 'IoT', 'Python', 'Signal Processing']}
            />
            <ProjectCard 
              title="Exoplanet Hunter"
              category="Deep Learning Research"
              description="An astronomical analysis tool processing Kepler telescope data. Uses deep neural networks to identify potential exoplanet candidates with high accuracy."
              tech={['Keras', 'Data Science', 'Neural Networks']}
            />
             <ProjectCard 
              title="Mystery Solver AI"
              category="Natural Language Processing"
              description="An intelligent assistant for law enforcement that analyzes case files to suggest investigative lines of questioning."
              tech={['NLP', 'LLMs', 'Python']}
            />
          </div>
        </section>

        {/* EDUCATION Section */}
        <section id="education" className="mb-32 max-w-4xl scroll-mt-28">
          <h2 className="text-3xl font-bold text-white mb-12">Education</h2>
          <div className="border-l border-zinc-800 pl-8 space-y-12">
            <div className="relative">
              <span className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-700"></span>
              <h3 className="text-xl font-bold text-white">BSc (Hons) Computer Science</h3>
              <p className="text-zinc-500 mb-2">Informatics Institute of Technology (IIT) | 2024 - Present</p>
              <p className="text-zinc-400 max-w-2xl">
                Affiliated with the University of Westminster. Specialized coursework in Artificial Intelligence, 
                Data Structures, and Advanced Algorithms. Active Student Ambassador.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT Section (Footer) */}
        <footer id="contact" className="pt-20 border-t border-white/5 scroll-mt-28">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Let's build something.</h3>
              <p className="text-zinc-600">Open for internships and collaborations.</p>
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-zinc-500">
              <a href="mailto:email@example.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} /> Get in touch
              </a>
              <a href="https://linkedin.com" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
          <div className="text-center mt-20 text-xs text-zinc-700 pb-10">
            © 2026 Mohamed Ashfaq. All rights reserved.
          </div>
        </footer>

      </main>
    </div>
  );
}