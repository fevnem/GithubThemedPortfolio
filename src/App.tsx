import React from 'react';
import { Mail, Code, Briefcase, User, Star, Terminal, GitFork, Eye, Heart, Coffee, Github, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';

function App() {
  return (
    <div className="min-h-screen text-gray-100 font-sans">
      <Navbar />
      
      {/* Hero Section - Ultra Compact */}
      <section className="pt-6 px-3 max-w-5xl mx-auto animated-bg min-h-[25vh] flex items-center">
        <div className="flex flex-col md:flex-row items-start justify-between gap-1 relative w-full">
          <div className="md:w-3/4 relative">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                Hi, I'm <span className="gradient-text">Sam</span>
              </h1>
              {/* Profile Picture - Next to name */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-accent-500 glow-effect">
                <img 
                  src="https://res.cloudinary.com/dh24bkcuh/image/upload/fl_preserve_transparency/v1740747816/comp2rr3ell1u7ywwhvi.jpg?_s=public-apps" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-base md:text-xl font-semibold text-gray-300">
              Crafting digital experiences
            </h2>
            <p className="text-xs md:text-sm text-gray-400 mb-3 max-w-lg leading-relaxed">
              I build exceptional digital experiences with modern technologies.
              Focused on creating clean, user-friendly applications that solve real problems.
            </p>
            <div className="flex gap-2 mb-4">
              <a href="#about" className="px-3 py-1.5 bg-accent-600 hover:bg-accent-500 text-white rounded-md transition-colors glow-effect text-xs font-medium">
                About Me
              </a>
              <a href="#projects" className="px-3 py-1.5 bg-dark-600/50 backdrop-blur-sm hover:bg-dark-500 text-white rounded-md transition-colors border border-dark-500 text-xs font-medium">
                View Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - GitHub Themed */}
      <Section id="about" title="About Me" icon={<User size={16} />}>
        <div className="rounded-lg border border-dark-600 overflow-hidden">
          {/* GitHub-style header */}
          <div className="bg-dark-700 px-3 py-2 border-b border-dark-600 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User size={14} className="text-accent-400" />
              <span className="text-xs font-medium text-white">README.md</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 bg-dark-800 px-1.5 py-0.5 rounded-md">5 min read</span>
            </div>
          </div>
          
          {/* GitHub-style content */}
          <div className="p-3 bg-dark-800/50">
            <div className="prose prose-sm prose-invert max-w-none">
              <div className="mb-3 pb-3 border-b border-dark-600">
                <h3 className="text-sm font-semibold mb-1.5 text-white flex items-center">
                  <span className="text-accent-400 mr-1.5">#</span> Introduction
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  I'm a passionate full-stack developer with 5+ years of experience building web applications.
                  My journey in tech started when I built my first website at 15, and I've been hooked ever since.
                </p>
              </div>
              
              <div className="mb-3 pb-3 border-b border-dark-600">
                <h3 className="text-sm font-semibold mb-1.5 text-white flex items-center">
                  <span className="text-accent-400 mr-1.5">#</span> Expertise
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-2">
                  I specialize in React, Node.js, and modern JavaScript, but I'm always exploring new technologies
                  to stay at the cutting edge of web development.
                </p>
                <div className="bg-dark-700/70 p-2 rounded-md border border-dark-600">
                  <h4 className="text-xs font-semibold mb-1.5 text-white flex items-center">
                    <Terminal size={12} className="text-accent-400 mr-1.5" /> Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    <SkillBadge name="React" />
                    <SkillBadge name="TypeScript" />
                    <SkillBadge name="Node.js" />
                    <SkillBadge name="Express" />
                    <SkillBadge name="MongoDB" />
                    <SkillBadge name="PostgreSQL" />
                    <SkillBadge name="GraphQL" />
                    <SkillBadge name="Next.js" />
                    <SkillBadge name="Tailwind CSS" />
                    <SkillBadge name="Git" />
                    <SkillBadge name="Docker" />
                    <SkillBadge name="AWS" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold mb-1.5 text-white flex items-center">
                  <span className="text-accent-400 mr-1.5">#</span> Personal
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes.
                  I believe in continuous learning and contributing to open source projects whenever possible.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[10px] text-gray-400">
                    <Star size={10} className="text-accent-400" />
                    <span>42 stars on this repo</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400">
                    <span>15 forks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section - GitHub Themed */}
      <Section id="projects" title="Projects" icon={<Code size={16} />}>
        <div className="rounded-lg border border-dark-600 overflow-hidden">
          {/* GitHub-style header */}
          <div className="bg-dark-700 px-3 py-2 border-b border-dark-600 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code size={14} className="text-accent-400" />
              <span className="text-xs font-medium text-white">repositories.md</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 bg-dark-800 px-1.5 py-0.5 rounded-md">
                <span className="font-mono">4</span> pinned repositories
              </span>
            </div>
          </div>
          
          {/* GitHub-style content */}
          <div className="p-3 bg-dark-800/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* E-Commerce Platform */}
              <div className="bg-dark-700/50 backdrop-blur-sm rounded-lg overflow-hidden border border-dark-600 hover:border-accent-500/30 transition-all duration-300">
                <div className="p-2.5">
                  <div className="flex items-start justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <Code size={14} className="text-accent-400" />
                      <a href="#" className="text-sm font-semibold text-white hover:text-accent-400 transition-colors">e-commerce-platform</a>
                    </div>
                    <span className="text-[10px] text-gray-400 bg-dark-800 px-1.5 py-0.5 rounded-full">Public</span>
                  </div>
                  
                  <p className="text-gray-300 mb-2 text-[11px] leading-relaxed">
                    A full-featured online store with payment processing, user authentication, and inventory management.
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">React</span>
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">Node.js</span>
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">MongoDB</span>
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">Stripe</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1.5 border-t border-dark-600">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <span>JavaScript</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={10} className="text-gray-400" />
                        <span>24</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={10} className="text-gray-400" />
                        <span>8</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a href="#" className="text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-0.5">
                        <Eye size={10} />
                        <span>Demo</span>
                      </a>
                      <a href="#" className="text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-0.5">
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Task Management App */}
              <div className="bg-dark-700/50 backdrop-blur-sm rounded-lg overflow-hidden border border-dark-600 hover:border-accent-500/30 transition-all duration-300">
                <div className="p-2.5">
                  <div className="flex items-start justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <Code size={14} className="text-accent-400" />
                      <a href="#" className="text-sm font-semibold text-white hover:text-accent-400 transition-colors">task-management-app</a>
                    </div>
                    <span className="text-[10px] text-gray-400 bg-dark-800 px-1.5 py-0.5 rounded-full">Public</span>
                  </div>
                  
                  <p className="text-gray-300 mb-2 text-[11px] leading-relaxed">
                    A Kanban-style project management tool with drag-and-drop interface and team collaboration features.
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">TypeScript</span>
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">React</span>
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">Firebase</span>
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">Tailwind</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1.5 border-t border-dark-600">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span>TypeScript</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={10} className="text-gray-400" />
                        <span>32</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={10} className="text-gray-400" />
                        <span>12</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a href="#" className="text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-0.5">
                        <Eye size={10} />
                        <span>Demo</span>
                      </a>
                      <a href="#" className="text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-0.5">
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Weather Dashboard */}
              <div className="bg-dark-700/50 backdrop-blur-sm rounded-lg overflow-hidden border border-dark-600 hover:border-accent-500/30 transition-all duration-300">
                <div className="p-2.5">
                  <div className="flex items-start justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <Code size={14} className="text-accent-400" />
                      <a href="#" className="text-sm font-semibold text-white hover:text-accent-400 transition-colors">weather-dashboard</a>
                    </div>
                    <span className="text-[10px] text-gray-400 bg-dark-800 px-1.5 py-0.5 rounded-full">Public</span>
                  </div>
                  
                  <p className="text-gray-300 mb-2 text-[11px] leading-relaxed">
                    Real-time weather application with location detection, forecasts, and interactive maps.
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">JavaScript</span>
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">React</span>
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">OpenWeather API</span>
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">Leaflet</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1.5 border-t border-dark-600">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <span>JavaScript</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={10} className="text-gray-400" />
                        <span>18</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={10} className="text-gray-400" />
                        <span>5</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a href="#" className="text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-0.5">
                        <Eye size={10} />
                        <span>Demo</span>
                      </a>
                      <a href="#" className="text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-0.5">
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Content Generator */}
              <div className="bg-dark-700/50 backdrop-blur-sm rounded-lg overflow-hidden border border-dark-600 hover:border-accent-500/30 transition-all duration-300">
                <div className="p-2.5">
                  <div className="flex items-start justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <Code size={14} className="text-accent-400" />
                      <a href="#" className="text-sm font-semibold text-white hover:text-accent-400 transition-colors">ai-content-generator</a>
                    </div>
                    <span className="text-[10px] text-gray-400 bg-dark-800 px-1.5 py-0.5 rounded-full">Public</span>
                  </div>
                  
                  <p className="text-gray-300 mb-2 text-[11px] leading-relaxed">
                    An AI-powered application that generates blog posts, social media content, and marketing copy.
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">Python</span>
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">React</span>
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">OpenAI API</span>
                    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500">Flask</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1.5 border-t border-dark-600">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span>Python</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={10} className="text-gray-400" />
                        <span>42</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={10} className="text-gray-400" />
                        <span>15</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a href="#" className="text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-0.5">
                        <Eye size={10} />
                        <span>Demo</span>
                      </a>
                      <a href="#" className="text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-0.5">
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience" icon={<Briefcase size={16} />}>
        <div className="rounded-lg border border-dark-600 overflow-hidden">
          {/* GitHub-style header */}
          <div className="bg-dark-700 px-3 py-2 border-b border-dark-600 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase size={14} className="text-accent-400" />
              <span className="text-xs font-medium text-white">work-history.md</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 bg-dark-800 px-1.5 py-0.5 rounded-md">Updated 2 weeks ago</span>
            </div>
          </div>
          
          {/* GitHub-style content */}
          <div className="p-3 bg-dark-800/50">
            <div className="space-y-2">
              <div className="border-l-2 border-accent-500 pl-2 relative">
                <div className="absolute w-2 h-2 bg-accent-500 rounded-full -left-[5px] top-1 glow-effect"></div>
                <h3 className="text-sm font-semibold text-white">Senior Frontend Developer</h3>
                <p className="text-accent-400 text-[10px] font-medium tracking-wide">TECHCORP INC. • 2021 - PRESENT</p>
                <p className="text-gray-300 mt-1 bg-dark-700/30 p-2 rounded-lg backdrop-blur-sm text-xs leading-relaxed">
                  Led the development of the company's flagship SaaS product, improving performance by 40%.
                  Mentored junior developers and implemented modern CI/CD practices.
                </p>
              </div>
              
              <div className="border-l-2 border-accent-500 pl-2 relative">
                <div className="absolute w-2 h-2 bg-accent-500 rounded-full -left-[5px] top-1 glow-effect"></div>
                <h3 className="text-sm font-semibold text-white">Full Stack Developer</h3>
                <p className="text-accent-400 text-[10px] font-medium tracking-wide">WEBSOLUTIONS • 2018 - 2021</p>
                <p className="text-gray-300 mt-1 bg-dark-700/30 p-2 rounded-lg backdrop-blur-sm text-xs leading-relaxed">
                  Developed and maintained multiple client projects using React, Node.js, and MongoDB.
                  Implemented responsive designs and optimized application performance.
                </p>
              </div>
              
              <div className="border-l-2 border-accent-500 pl-2 relative">
                <div className="absolute w-2 h-2 bg-accent-500 rounded-full -left-[5px] top-1 glow-effect"></div>
                <h3 className="text-sm font-semibold text-white">Junior Developer</h3>
                <p className="text-accent-400 text-[10px] font-medium tracking-wide">STARTUPX • 2016 - 2018</p>
                <p className="text-gray-300 mt-1 bg-dark-700/30 p-2 rounded-lg backdrop-blur-sm text-xs leading-relaxed">
                  Assisted in building the company's web application from the ground up.
                  Worked with JavaScript, HTML, CSS, and learned React on the job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Enhanced Terminal-inspired Footer */}
      <footer className="mt-4 border-t border-accent-500/20">
        {/* Matrix-like animation effect - Reduced height */}
        <div className="w-full h-4 overflow-hidden relative">
          <div className="absolute inset-0 flex justify-center">
            <div className="flex space-x-1">
              {[...Array(80)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-0.5 bg-gradient-to-b from-transparent via-accent-500/30 to-transparent"
                  style={{ 
                    height: `${Math.floor(Math.random() * 30) + 10}px`,
                    marginTop: `${Math.floor(Math.random() * 20)}px`,
                    opacity: Math.random() * 0.7 + 0.3,
                    animation: `pulse-slow ${Math.floor(Math.random() * 3) + 2}s infinite ${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-3 py-4 relative">
          {/* Terminal Window with enhanced styling */}
          <div className="rounded-lg overflow-hidden border border-accent-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)] relative z-10">
            {/* Terminal Header with glowing effect */}
            <div className="bg-gradient-to-r from-dark-800 to-dark-900 px-3 py-2 border-b border-accent-500/20 flex items-center">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs font-medium text-gray-300 font-mono tracking-wide">sam@portfolio ~</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-400 bg-dark-800/80 px-1.5 py-0.5 rounded-md border border-dark-600">bash</span>
              </div>
            </div>
            
            {/* Terminal Content with enhanced styling */}
            <div className="bg-gradient-to-b from-dark-900 to-dark-800 p-4 font-mono relative">
              {/* Background matrix effect */}
              <div className="absolute inset-0 opacity-5">
                {[...Array(100)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute text-[8px] text-accent-400 font-mono"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.8 + 0.2,
                    }}
                  >
                    {Math.random() > 0.5 ? '1' : '0'}
                  </div>
                ))}
              </div>

              <div className="space-y-2 relative z-10">
                {/* AlexDev Logo with enhanced styling */}
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-accent-500/20">
                  <div className="p-1.5 bg-dark-700/80 rounded-md border border-accent-500/30 shadow-[0_0_8px_rgba(99,102,241,0.2)]">
                    <Code size={16} className="text-accent-400" />
                  </div>
                  <h3 className="text-base font-bold text-white flex items-center">
                    Sam<span className="gradient-text"></span>
                    <span className="ml-2 text-[10px] text-accent-400 bg-dark-700/80 px-1.5 py-0.5 rounded-full border border-accent-500/30">v2.5.0</span>
                  </h3>
                </div>
                
                <div className="flex items-center">
                  <span className="text-accent-400 mr-1">$</span>
                  <span className="text-gray-300 text-xs">cat contact.json</span>
                </div>
                <div className="text-gray-300 text-xs bg-dark-800/30 p-3 rounded-md border border-dark-700 font-mono relative overflow-hidden">
                  <div className="relative z-10">
                    {`{
  "name": "z9tri",
  "email": "tri@broken.cat",
  "location": "Dhaka,Bangladesh",
  "availability": "Open to work",
  "interests": ["Web Development", "UI/UX", "Open Source"],
  "languages": ["JavaScript", "TypeScript", "Python", "Go"]
}`}
                  </div>
                  {/* Subtle scan line effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent opacity-30"
                    style={{ 
                      animation: 'scanline 2s linear infinite',
                      backgroundSize: '100% 8px'
                    }}
                  ></div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-accent-400 mr-1">$</span>
                  <span className="text-gray-300 text-xs">./connect.sh</span>
                </div>
                <div className="text-gray-300 text-xs space-y-2 bg-dark-800/30 p-3 rounded-md border border-dark-700 relative">
                  <p className="text-accent-300">Initializing connection protocol...</p>
                  <div className="w-full h-1 bg-dark-700 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-gradient-to-r from-accent-600 to-accent-400 w-full animate-pulse"></div>
                  </div>
                  <p>Connection established! Available communication channels:</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
                    <a 
                      href="mailto:hello@example.com" 
                      className="flex items-center gap-2 p-2 bg-dark-700/50 hover:bg-dark-600/50 rounded-md border border-dark-600 hover:border-accent-500/30 transition-all group"
                    >
                      <div className="p-1 bg-dark-600 rounded-md border border-dark-500 group-hover:border-accent-500/30 transition-all">
                        <Mail size={12} className="text-accent-400" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400">Email</p>
                        <p className="text-xs text-gray-300 group-hover:text-accent-400 transition-colors">sam@example.com</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 p-2 bg-dark-700/50 hover:bg-dark-600/50 rounded-md border border-dark-600 hover:border-accent-500/30 transition-all group"
                    >
                      <div className="p-1 bg-dark-600 rounded-md border border-dark-500 group-hover:border-accent-500/30 transition-all">
                        <Github size={12} className="text-accent-400" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400">GitHub</p>
                        <p className="text-xs text-gray-300 group-hover:text-accent-400 transition-colors">github.com/sam</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 p-2 bg-dark-700/50 hover:bg-dark-600/50 rounded-md border border-dark-600 hover:border-accent-500/30 transition-all group"
                    >
                      <div className="p-1 bg-dark-600 rounded-md border border-dark-500 group-hover:border-accent-500/30 transition-all">
                        <Linkedin size={12} className="text-accent-400" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400">LinkedIn</p>
                        <p className="text-xs text-gray-300 group-hover:text-accent-400 transition-colors">linkedin.com/in/sam</p>
                      </div>
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-3 pt-2 border-t border-dark-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-accent-400 font-semibold">Status: Available For Hire</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-xs">© {new Date().getFullYear()} Sam. All rights reserved.</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Bottom Credits */}
          <div className="mt-3 text-center relative z-10">
            <div className="inline-flex items-center justify-center gap-3 px-4 py-1.5 bg-dark-800/50 rounded-full border border-accent-500/20 shadow-[0_0_10px_rgba(99,102,241,0.1)]">
              <span className="flex items-center justify-center gap-1 text-[10px] text-gray-400">
                <Code size={10} className="text-accent-500" />
                <span>Built with React </span>
              </span>
              <span className="h-3 w-px bg-dark-600"></span>
              <span className="flex items-center justify-center gap-1 text-[10px] text-gray-400">
                <Heart size={10} className="text-accent-500" />
                <span>Last updated: February 2025</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
