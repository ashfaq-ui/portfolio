import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  FolderGit2, 
  GraduationCap, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  MapPin,
  FileText,
  Menu,
  X,
  ChevronRight,
  Code2,
  Terminal,
  Cpu,
  MonitorSmartphone,
  Briefcase,
  Award,
  CheckCircle2,
  TrendingUp,
  Activity
} from 'lucide-react';
import './App.css';

const projects = [
  {
    title: "Airea - Smart Monitor",
    category: "IoT Health Platform",
    description: "End-to-end IoT platform. ESP32 wearables with TensorFlow Lite edge ML, Spring Boot microservices, and a Flutter mobile app.",
    tech: ["C++", "Flutter", "Spring Boot", "TensorFlow"],
    link: "https://airea.lk",
    icon: MonitorSmartphone,
    status: "Production",
    image: "/airea.png"
  },
  {
    title: "Ai - MediBook",
    category: "Full-Stack Web App",
    description: "Clinic system with 3 roles, JWT auth, and a Google Gemini API-powered Patient Health Assistant.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Gemini AI"],
    link: "https://medi-book-flax.vercel.app/",
    icon: Code2,
    status: "Live",
    image: "/medibook.png"
  },
  {
    title: "SpendWise",
    category: "FinTech App",
    description: "Highly secure 3-tier expense tracker with normalized PostgreSQL schema, deployed on Railway & Netlify.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
    link: "https://jazzy-concha-e4ad62.netlify.app/",
    icon: Briefcase,
    status: "Live",
    image: "/spendwise.png"
  },
  {
    title: "Black Olives",
    category: "Premium E-commerce",
    description: "Next.js SSR e-commerce platform for Apple products with dynamic routing and high SEO scores.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "https://web-pro-1.netlify.app/",
    icon: Terminal,
    status: "Archived",
    image: "/blackolives.png"
  },
  {
    title: "Loan Prediction ML",
    category: "Machine Learning",
    description: "End-to-end pipeline on 58,640 samples. Tuned KNN (92% accuracy) with GridSearchCV.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    link: "https://github.com/ashfaq-ui/Machine-learning-cw",
    icon: Cpu,
    status: "Completed",
    image: "/ML.png"
  },
  {
    title: "Invoice Manager",
    category: "Desktop App",
    description: "Cross-platform desktop app for Mac and Windows delivered solo in 3 weeks. Manages invoices, sales ledger, and financial analysis across 3 report types with zero-install distribution via GitHub Releases.",
    tech: ["Electron", "JavaScript", "Node.js"],
    link: "https://github.com/ashfaq-ui/invoice-manager",
    icon: FolderGit2,
    status: "Live",
    image: "/dataentry.png"
  },
  {
    title: "Eco Pulse",
    category: "Sustainable Web Design",
    description: "A responsive platform advocating for UN SDG 13 (Climate Action). Built entirely from scratch using semantic HTML5, CSS3, and vanilla JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    link: "https://spectacular-haupia-11b44a.netlify.app/", // Live link
    icon: LayoutDashboard,
    status: "Live",
    image: "/eco_pulse.png"
  },
  {
    title: "Traffic Analyst",
    category: "Data Science & Viz",
    description: "A Python-based analytical tool for processing council traffic surveys. Generates automated statistical reports and dynamic histograms.",
    tech: ["Python", "Tkinter", "Pandas", "Data Viz"],
    link: "https://github.com/ashfaq-ui",
    icon: Activity,
    status: "Completed",
    image: "/traffic.png"
  }
];


// Views
const Overview = ({ setActiveTab }) => (
  <div className="animate-fade-in max-w-5xl mx-auto space-y-8">
    <div className="flex flex-col-reverse md:flex-row gap-8 items-start justify-between bg-[#161925] border border-white/5 p-8 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="flex-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                Open for Internships
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
                Mohamed <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">Ashfaq</span>
            </h1>
            <p className="text-lg text-slate-400 font-light max-w-2xl leading-relaxed mb-8">
                Computer Science Undergraduate specializing in Full-Stack Web Development, AI Integrations, and IoT Systems. 
                I turn complex problems into elegant, highly scalable solutions.
            </p>
            <div className="flex flex-wrap gap-4">
                <button onClick={() => setActiveTab('projects')} className="bg-white text-black font-semibold py-2.5 px-6 rounded-lg hover:bg-slate-200 transition-colors shadow-lg">
                    View Projects
                </button>
                <a href="/Mohamed_Ashfaq_CV.pdf" target="_blank" className="bg-[#1d2130] border border-white/10 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-[#252a3d] hover:border-white/20 transition-all">
                    Resume
                </a>
            </div>
        </div>
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0 relative z-10 self-center md:self-auto">
            <img src="/profilePic.jpeg" alt="Mohamed Ashfaq" className="w-full h-full object-cover" />
        </div>
    </div>

    {/* Metric Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
            { label: "Shipped Projects", value: "8+", icon: Activity, color: "text-blue-400", bg: "bg-blue-400/10" },
            { label: "Current Level", value: "Level 05", icon: TrendingUp, color: "text-green-400", bg: "bg-green-400/10" },
            { label: "Primary Language", value: "Java / JS", icon: Code2, color: "text-yellow-400", bg: "bg-yellow-400/10" },
            { label: "Location", value: "Colombo, LK", icon: MapPin, color: "text-rose-400", bg: "bg-rose-400/10" }
        ].map((stat, i) => (
            <div key={i} className="bg-[#161925] border border-white/5 p-6 rounded-2xl flex flex-col items-start hover:border-white/10 transition-colors">
                <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
                    <stat.icon size={20} />
                </div>
                <p className="text-slate-500 text-sm font-medium mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
            </div>
        ))}
    </div>

    {/* Core Skills Tech Stack */}
    <div className="bg-[#161925] border border-white/5 p-8 rounded-2xl">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Terminal size={20} className="text-red-400" />
            Core Technology Stack
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Tailwind CSS', 'Flutter'].map(t => (
                        <span key={t} className="px-3 py-1 bg-[#1d2130] border border-white/5 rounded-md text-sm text-slate-300">{t}</span>
                    ))}
                </div>
            </div>
            <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Backend & Database</h4>
                <div className="flex flex-wrap gap-2">
                    {['Java (Spring Boot)', 'Node.js', 'PostgreSQL', 'REST APIs'].map(t => (
                        <span key={t} className="px-3 py-1 bg-[#1d2130] border border-white/5 rounded-md text-sm text-slate-300">{t}</span>
                    ))}
                </div>
            </div>
            <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">AI & Edge</h4>
                <div className="flex flex-wrap gap-2">
                    {['Python', 'TensorFlow Lite', 'Gemini AI', 'C++ (ESP32)'].map(t => (
                        <span key={t} className="px-3 py-1 bg-[#1d2130] border border-white/5 rounded-md text-sm text-slate-300">{t}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
  </div>
);

const ProjectsList = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    const p = selectedProject;
    return (
      <div className="animate-fade-in max-w-4xl mx-auto space-y-6">
        <button 
          onClick={() => setSelectedProject(null)} 
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium w-fit"
        >
            <ChevronRight size={16} className="rotate-180" /> Back to Projects
        </button>

        <div className="bg-[#161925] border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="flex items-start md:items-center gap-5 mb-8 relative z-10 flex-col md:flex-row">
                <div className="w-16 h-16 rounded-2xl bg-[#252a3d] border border-white/10 flex items-center justify-center flex-shrink-0 text-red-400 shadow-xl">
                    <p.icon size={32} />
                </div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">{p.title}</h1>
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm font-semibold text-rose-400 uppercase tracking-widest">{p.category}</span>
                        <span className={`text-xs px-3 py-1 rounded-full border flex items-center gap-1.5 font-medium
                            ${p.status === 'Production' || p.status === 'Live' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                              p.status === 'Completed' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                              'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}
                        >
                            {p.status === 'Production' || p.status === 'Live' ? <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> : null}
                            {p.status}
                        </span>
                    </div>
                </div>
            </div>

            {p.image && (
                <div className="mb-10 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative z-10 bg-[#1d2130]">
                    <img src={p.image} alt={p.title} className="w-full h-auto object-cover max-h-[500px]" />
                </div>
            )}

            <div className="mb-12 relative z-10">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-3">Project Overview</h3>
                <p className="text-lg text-slate-300 leading-relaxed">{p.description}</p>
            </div>

            <div className="mb-12 relative z-10">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-3">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => (
                        <span key={t} className="px-4 py-2 bg-[#1d2130] border border-white/5 rounded-xl text-sm font-medium text-slate-200">{t}</span>
                    ))}
                </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex gap-4 relative z-10">
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-red-600/20 w-full md:w-auto justify-center">
                    Visit Project Link <ExternalLink size={18} />
                </a>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
          <div>
              <h2 className="text-2xl font-bold text-white mb-1">Projects</h2>
              <p className="text-slate-500 text-sm">A collection of full-stack, AI, and IoT applications.</p>
          </div>
      </div>

      <div className="bg-[#161925] border border-white/5 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 bg-[#1d2130]/50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <div className="col-span-12 md:col-span-5">Project / Description</div>
              <div className="hidden md:block md:col-span-3">Tech Stack</div>
              <div className="hidden md:block md:col-span-2">Status</div>
              <div className="hidden md:block md:col-span-2 text-right">Action</div>
          </div>
          
          <div className="divide-y divide-white/5">
              {projects.map((p, i) => (
                  <div key={i} onClick={() => setSelectedProject(p)} className="grid grid-cols-12 gap-4 p-6 hover:bg-[#1d2130] transition-colors items-center group cursor-pointer">
                      <div className="col-span-12 md:col-span-5 flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-lg bg-[#252a3d] border border-white/10 flex items-center justify-center flex-shrink-0 text-red-400 group-hover:scale-110 transition-transform">
                              <p.icon size={20} />
                          </div>
                          <div>
                              <h3 className="text-base font-bold text-slate-200 mb-1 flex items-center gap-2 group-hover:text-red-400 transition-colors">
                                  {p.title}
                                  <span className="md:hidden text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">{p.status}</span>
                              </h3>
                              <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{p.description}</p>
                              
                              <div className="flex flex-wrap gap-1.5 mt-3 md:hidden">
                                  {p.tech.map(t => (
                                      <span key={t} className="text-[10px] px-2 py-1 bg-[#252a3d] border border-white/5 rounded text-slate-400">{t}</span>
                                  ))}
                              </div>
                          </div>
                      </div>
                      
                      <div className="hidden md:flex md:col-span-3 flex-wrap gap-1.5 items-center">
                          {p.tech.map(t => (
                              <span key={t} className="text-xs px-2 py-1 bg-[#252a3d] border border-white/5 rounded text-slate-400">{t}</span>
                          ))}
                      </div>
                      
                      <div className="hidden md:flex md:col-span-2 items-center">
                          <span className={`text-xs px-2.5 py-1 rounded-full border flex items-center gap-1.5
                              ${p.status === 'Production' || p.status === 'Live' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                                p.status === 'Completed' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                                'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}
                          >
                              {p.status === 'Production' || p.status === 'Live' ? <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> : null}
                              {p.status}
                          </span>
                      </div>

                      <div className="hidden md:flex md:col-span-2 items-center justify-end text-slate-500 group-hover:text-white transition-colors">
                          <span className="text-sm font-medium mr-2 opacity-0 group-hover:opacity-100 transition-opacity">View Details</span>
                          <ChevronRight size={18} />
                      </div>
                      
                      <div className="col-span-12 mt-2 md:hidden">
                          <div className="w-full py-2 flex items-center justify-center gap-2 bg-[#252a3d] border border-white/5 rounded-lg text-sm text-slate-300">
                              View Details <ChevronRight size={14} />
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

const Background = () => (
  <div className="animate-fade-in max-w-5xl mx-auto space-y-8">
    
    <div className="bg-[#161925] border border-white/5 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <GraduationCap className="text-red-400" />
            Education
        </h2>
        
        <div className="space-y-8 pl-4 border-l border-white/10 ml-3">
            <div className="relative">
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-red-500 ring-4 ring-[#161925]"></div>
                <h3 className="text-lg font-bold text-slate-200">BSc (Hons) Computer Science</h3>
                <p className="text-sm font-medium text-red-400 mb-2">University of Westminster | Sep 2024 - Present</p>
                <div className="bg-[#1d2130] border border-white/5 p-4 rounded-xl inline-block mt-2">
                    <p className="text-slate-400 text-sm mb-1">Core Modules:</p>
                    <p className="text-slate-200 text-sm font-medium">Database Systems, OOP, Machine Learning, Algorithms, Client Server Architecture</p>
                </div>
            </div>

            <div className="relative">
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-600 ring-4 ring-[#161925]"></div>
                <h3 className="text-lg font-bold text-slate-200">Advanced Level - Physical Science</h3>
                <p className="text-sm font-medium text-slate-500 mb-2">Hindu College, Rathmalana | 2010 - 2023</p>
                <p className="text-slate-400 text-sm">Combined Mathematics & Physics</p>
            </div>
        </div>
    </div>

    <div className="bg-[#161925] border border-white/5 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <Award className="text-rose-400" />
            Achievements & Leadership
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
                "Finalist in Hackathons CodeRally 6.0 and Xtreme 19.0",
                "Competitor in the Hult Prize competition and SLIIT MATHFEST 2023",
                "IEEE Member at Informatics Institute of Technology (2024 - Present)",
                "Leadership Prefect (2019 - 2022) at Hindu College"
            ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl bg-[#1d2130] border border-white/5 items-start hover:border-white/10 transition-colors">
                    <CheckCircle2 className="text-rose-500 flex-shrink-0 mt-0.5" size={18}/>
                    <p className="text-sm text-slate-300 font-medium leading-relaxed">{item}</p>
                </div>
            ))}
        </div>
    </div>

  </div>
);

const Contact = () => (
  <div className="animate-fade-in max-w-3xl mx-auto space-y-8">
    <div className="text-center mb-10">
        <div className="w-16 h-16 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail size={32} />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Get in touch</h1>
        <p className="text-slate-400 max-w-lg mx-auto">
            I'm currently looking for new opportunities and internships. Whether you have a question or just want to connect, my inbox is always open.
        </p>
    </div>

    <div className="bg-[#161925] border border-white/5 p-8 md:p-10 rounded-2xl">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Name</label>
                    <input type="text" className="w-full bg-[#1d2130] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Email</label>
                    <input type="email" className="w-full bg-[#1d2130] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" placeholder="john@example.com" />
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea rows="5" className="w-full bg-[#1d2130] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none" placeholder="How can I help you?"></textarea>
            </div>
            <button className="w-full bg-white text-black font-bold py-3.5 rounded-lg hover:bg-slate-200 transition-colors shadow-lg">
                Send Message
            </button>
        </form>
    </div>

    <div className="flex justify-center gap-4 pt-6 border-t border-white/5">
        <a href="https://github.com/ashfaq-ui" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#161925] border border-white/5 rounded-xl hover:bg-[#1d2130] hover:text-white text-slate-400 transition-all">
            <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/ashfaq-mohamed" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#161925] border border-white/5 rounded-xl hover:bg-[#1d2130] hover:text-blue-500 text-slate-400 transition-all">
            <Linkedin size={24} />
        </a>
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { setLoading(false); }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'background', label: 'Background', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0f111a] flex items-center justify-center z-50">
        <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const renderContent = () => {
    switch(activeTab) {
        case 'overview': return <Overview setActiveTab={setActiveTab} />;
        case 'projects': return <ProjectsList />;
        case 'background': return <Background />;
        case 'contact': return <Contact />;
        default: return <Overview setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0f111a] text-slate-200 font-sans selection:bg-red-500/30 overflow-hidden relative">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none"></div>

      {/* MOBILE HEADER */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#161925]/80 backdrop-blur-xl border-b border-white/5 z-40 flex items-center justify-between px-4">
        <div className="font-bold text-white tracking-tight flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-red-600 flex items-center justify-center text-xs"><Terminal size={14} className="text-white"/></div>
            Ashfaq
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-400">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* SIDEBAR NAVIGATION */}
      <aside className={`fixed md:relative top-0 left-0 h-full w-64 bg-[#161925] border-r border-white/5 z-[60] transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} flex flex-col`}>
        {/* Logo / Profile snippet */}
        <div className="h-20 flex items-center px-6 border-b border-white/5">
            <div className="font-bold text-xl text-white tracking-tight flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-sm shadow-lg shadow-red-600/20">
                    <Terminal size={18} className="text-white"/>
                </div>
                Ashfaq
            </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-8 space-y-2">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-3 mb-4">Menu</div>
            {tabs.map(tab => (
                <button 
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setMobileMenuOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                        ${activeTab === tab.id ? 'bg-[#252a3d] text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-[#1d2130]'}`}
                >
                    <tab.icon size={18} className={activeTab === tab.id ? 'text-red-400' : ''} />
                    {tab.label}
                </button>
            ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-white/5">
            <a href="/Mohamed_Ashfaq_CV.pdf" target="_blank" className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#1d2130] hover:bg-[#252a3d] border border-white/5 rounded-xl text-sm font-medium text-slate-300 transition-colors">
                <FileText size={16} /> Resume PDF
            </a>
        </div>
      </aside>

      {/* OVERLAY FOR MOBILE */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]" onClick={() => setMobileMenuOpen(false)}></div>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 h-full flex flex-col relative z-10 w-full overflow-hidden">
        {/* Sticky Header */}
        <header className="h-20 flex-shrink-0 flex items-center px-8 hidden md:flex">
            <div className="flex items-center text-sm font-medium text-slate-500">
                <span>Ashfaq</span>
                <ChevronRight size={16} className="mx-2 text-slate-700" />
                <span className="text-slate-200 capitalize">{activeTab}</span>
            </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden pt-24 md:pt-4 px-4 sm:px-8 pb-32">
            {renderContent()}
        </div>
      </main>
      
    </div>
  );
}
