import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  ArrowUpRight, 
  Cpu, 
  Code2, 
  GraduationCap, 
  Layers, 
  Layout, 
  Server, 
  Terminal, 
  Settings,
  Menu,
  X,
  Mail
} from 'lucide-react';
import './App.css';

const ProjectCard = ({ title, category, description, tech, link, image }) => (
  <a 
    href={link || "#"} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group relative bg-zinc-900/40 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 p-6 md:p-8 rounded-xl overflow-hidden hover:bg-zinc-900/60 block"
  >
    {/* NEW: Sample Photo Placeholder */}
    <div className="w-full h-48 mb-6 overflow-hidden rounded-lg bg-zinc-800/50 border border-white/5 relative">
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
        />
      ) : (
        <div className="flex items-center justify-center h-full text-zinc-600 text-sm tracking-widest uppercase">
          Sample Image
        </div>
      )}
    </div>

    <div className="flex justify-between items-start mb-6">
      <div>
        <span className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-2 block">{category}</span>
        <h3 className="text-xl md:text-2xl font-semibold text-zinc-100 group-hover:text-white transition-colors">{title}</h3>
      </div>
      <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors duration-300" size={20} />
    </div>
    
    <p className="text-zinc-400 leading-relaxed mb-8 font-light text-sm md:text-base">
      {description}
    </p>

    <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
      {tech.map((t, i) => (
        <span key={i} className="text-xs font-medium text-zinc-400 bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700/50">
          {t}
        </span>
      ))}
    </div>
  </a>
);
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-zinc-300 relative selection:bg-white selection:text-black font-sans">
      
      {/* Background Texture */}
      <div className="noise-bg"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="font-bold text-xl text-white tracking-tight z-[60]">
            ASHFAQ<span className="text-zinc-600">.DEV</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 bg-zinc-900/50 px-8 py-2 rounded-full border border-white/5">
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Socials */}
          <div className="hidden md:flex gap-5">
            <a href="https://github.com/ashfaq-ui" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/ashfaq-mohamed" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>

          {/* Mobile Toggle Button */}
          {!isMobileMenuOpen && (
            <button 
              className="md:hidden text-zinc-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          )}
        </div>

        {/* MOBILE MENU - THE SOLID GRID FIX 
            We use a solid background color to BLOCK the page content below.
        */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[9999] md:hidden">
            
            {/* LAYER 1: Solid Grid Background (No transparency) */}
            <div 
              className="absolute inset-0 bg-[#050505]"
              style={{ 
                // This creates the faint grid lines like your reference
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '35px 35px'
              }}
            ></div>

            {/* LAYER 2: The Menu Content */}
            <div className="relative h-full flex flex-col animate-fade-in">
              
              {/* Header */}
              <div className="h-20 px-6 flex items-center justify-between border-b border-white/10 bg-black/50">
                <div className="font-bold text-xl text-white tracking-tight">
                  ASHFAQ<span className="text-zinc-600">.DEV</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors p-2 bg-zinc-900 rounded-full border border-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 flex flex-col items-center justify-center gap-10 p-6">
                {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                  <button 
                    key={item} 
                    onClick={() => handleNavClick(item.toLowerCase())}
                    className="text-4xl font-bold text-zinc-300 hover:text-white hover:scale-105 transition-all tracking-tight"
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Footer Socials */}
              <div className="p-10 flex justify-center gap-8 border-t border-white/10 bg-black/40">
                <a href="https://github.com/ashfaq-ui" className="text-zinc-500 hover:text-white transition-colors p-3 bg-zinc-900 rounded-full border border-white/5"><Github size={24} /></a>
                <a href="https://linkedin.com/in/ashfaq-mohamed" className="text-zinc-500 hover:text-white transition-colors p-3 bg-zinc-900 rounded-full border border-white/5"><Linkedin size={24} /></a>
                <a href="mailto:ashfaq.cs2025@gmail.com" className="text-zinc-500 hover:text-white transition-colors p-3 bg-zinc-900 rounded-full border border-white/5"><Mail size={24} /></a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-6 md:px-20 max-w-7xl mx-auto pt-32 md:pt-40 pb-20">
        
        {/* HERO */}
        <section id="about" className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 mb-24 md:mb-32 animate-fade-in scroll-mt-28">
          <div className="max-w-3xl flex-1 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Internships
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-6 md:mb-8">
              MOHAMED <br />
              <span className="text-zinc-500">ASHFAQ</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl mb-8 md:mb-10 mx-auto md:mx-0">
              Computer Science Undergraduate at the <span className="text-white font-medium">University of Westminster</span>. 
              I specialize in architecting scalable AI systems and engineering high-performance full-stack applications.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#projects" className="bg-white text-black font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-zinc-200 transition-colors text-sm md:text-base">View Work</a>
              <a href="/cv.pdf" className="bg-zinc-900 text-white border border-zinc-800 font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-zinc-800 transition-colors text-sm md:text-base">Resume</a>
            </div>
          </div>
          <div className="relative group w-64 h-64 md:w-96 md:h-96 flex-shrink-0 order-1 md:order-2">
            <div className="absolute inset-0 bg-zinc-800 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl">
              <img src="/profilePic.jpeg" alt="Mohamed Ashfaq" width="400" height="400" loading="eager" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"/>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section id="skills" className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 border-y border-white/5 py-8 md:py-12 mb-20 md:mb-32 scroll-mt-28">
          {[
            { label: 'Focus', value: 'AI & Deep Learning', icon: <Cpu /> },
            { label: 'Stack', value: 'Java / React / MySQL', icon: <Code2 /> },
            { label: 'Education', value: 'BSc Computer Science', icon: <GraduationCap /> },
            { label: 'Location', value: 'Sri Lanka', icon: <Layers /> }
          ].map((stat, i) => (
            <div key={i} className="space-y-2 hover:bg-zinc-900/30 p-4 rounded-lg transition-colors text-center md:text-left">
              <div className="text-zinc-500 mb-1 flex justify-center md:justify-start">{stat.icon}</div>
              <h4 className="text-white font-semibold text-base md:text-lg leading-tight">{stat.value}</h4>
              <p className="text-xs md:text-sm text-zinc-600 uppercase tracking-wider font-medium">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* SKILLS */}
        <section className="mb-32">
          <h3 className="text-xl font-bold text-white mb-8 pl-4 border-l-2 border-white">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Frontend', icon: <Layout />, skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'Next.js'] },
              { title: 'Backend & DB', icon: <Server />, skills: ['Spring Boot', 'Python', 'MySQL', 'PostgreSQL'] },
              { title: 'Languages', icon: <Terminal />, skills: ['Java', 'Python', 'C++', 'JavaScript'] },
              { title: 'AI/ML & Tools', icon: <Settings />, skills: ['TensorFlow', 'Keras', 'Git', 'GitHub', 'VS Code', 'Postman', 'SupaBase', 'Railway'] }
            ].map((group, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group">
                <div className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-2">
                  <div className="text-zinc-500 group-hover:text-zinc-300 transition-colors">{group.icon}</div>
                  <h4 className="text-zinc-400 text-sm font-medium uppercase tracking-widest">{group.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {group.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 text-xs md:text-sm text-zinc-300 bg-zinc-800/80 rounded-full border border-zinc-700 hover:border-zinc-500 hover:text-white transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        {/* PROJECTS SECTION (Updated with 5 Items) */}
        <section id="projects" className="mb-32 scroll-mt-28">
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Selected Work</h2>
            <span className="text-zinc-600 text-sm hidden md:block">01 — 05</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* 1. Project Airea */}
            <ProjectCard 
              title="Project Airea" 
              category="IoT & AI Research" 
              description="A medical IoT system for monitoring lung health. I led the development of a TensorFlow model capable of detecting cough anomalies." 
              tech={['TensorFlow', 'IoT', 'Python', 'Signal Proc']} 
              link="https://airea.lk"
              image="/airea.png" 
            />

            {/* 2. Black Olives */}
            <ProjectCard 
              title="Black Olives" 
              category="Premium E-commerce" 
              description="A high-performance retail platform for Apple products. Features a minimalist dark UI, dynamic product navigation, and optimized SEO." 
              tech={['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL']} 
              link="https://web-pro-1.netlify.app/" 
              image="/blackolives.png"
            />

            {/* 3. SpendWise */}
            <ProjectCard 
              title="SpendWise" 
              category="FinTech Full Stack" 
              description="A secure expense tracker with a decoupled 3-tier architecture. Handles business logic via Spring Boot and offers real-time interaction through React." 
              tech={['Spring Boot', 'React', 'PostgreSQL', 'Railway']} 
              link="https://jazzy-concha-e4ad62.netlify.app/" 
              image="/spendwise.png"
            />

            {/* 4. Eco Pulse */}
            <ProjectCard 
              title="Eco Pulse" 
              category="Sustainable Web Design" 
              description="A responsive platform advocating for UN SDG 13 (Climate Action). Built entirely from scratch using semantic HTML5, CSS3, and vanilla JavaScript." 
              tech={['HTML5', 'CSS3', 'JavaScript', 'UI/UX']} 
              link="https://spectacular-haupia-11b44a.netlify.app/" 
              image="/eco_pulse.png"
            />

            {/* 5. Traffic Analyst (Added as requested) */}
            <ProjectCard 
              title="Traffic Analyst" 
              category="Data Science & Viz" 
              description="A Python-based analytical tool for processing council traffic surveys. Generates automated statistical reports and dynamic histograms." 
              tech={['Python', 'Tkinter', 'Pandas', 'Data Viz']} 
              link="https://github.com/ashfaq-ui/Traffic_Data_Analysis" 
              image="/traffic.png"
            />

          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mb-32 max-w-4xl scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12">Education</h2>
          <div className="border-l border-zinc-800 pl-6 md:pl-8 space-y-12">
            <div className="relative">
              <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-700"></span>
              <h3 className="text-lg md:text-xl font-bold text-white">BSc (Hons) Computer Science</h3>
              <p className="text-zinc-500 mb-2 text-sm md:text-base">Informatics Institute of Technology (IIT) | 2024 - Present</p>
              <p className="text-zinc-400 max-w-2xl text-sm md:text-base leading-relaxed">
                Affiliated with the University of Westminster. Specialized coursework in AI, Data Structures, and Algorithms.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-700"></span>
              <h3 className="text-lg md:text-xl font-bold text-white">Collegiate & Secondary Education</h3>
              <p className="text-zinc-500 mb-4 text-sm md:text-base">Hindu College, Rathmalana | Jan 2010 - Dec 2023</p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-zinc-300 font-semibold text-xs md:text-sm uppercase tracking-wide mb-1">G.C.E. Advanced Level (Physical Science)</h4>
                  <p className="text-zinc-400 max-w-2xl text-sm leading-relaxed">Achieved strong passes in Combined Mathematics and Physics.</p>
                </div>
                <div>
                  <h4 className="text-zinc-300 font-semibold text-xs md:text-sm uppercase tracking-wide mb-1">G.C.E. Ordinary Level</h4>
                  <p className="text-zinc-400 max-w-2xl text-sm leading-relaxed">Demonstrated foundational academic strength with an A Grade in Mathematics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="py-8 mt-12 border-t border-white/5 scroll-mt-28">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Let's build something.</h3>
              <p className="text-sm text-zinc-600">Open for internships and collaborations.</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-6 text-sm font-medium text-zinc-500">
                <a href="mailto:ashfaq.cs2025@gmail.com" className="hover:text-white transition-colors">Get in touch</a>
                <a href="https://linkedin.com/in/ashfaq-mohamed" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/ashfaq-ui" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              </div>
              <div className="text-xs text-zinc-800">© 2026 Mohamed Ashfaq. All rights reserved.</div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}