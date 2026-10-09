import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Award, 
  Cpu, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Eye, 
  X,
  Code
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [projectFilter, setProjectFilter] = useState('All');

  const mainTabs = [
    { id: 'projects', label: 'Projects', icon: FolderGit2, count: personalInfo.projects.length },
    { id: 'certificates', label: 'Certificates', icon: Award, count: personalInfo.certificates.length },
    { id: 'techstack', label: 'Tech Stack', icon: Cpu, count: personalInfo.techStack.reduce((acc, cat) => acc + cat.items.length, 0) },
  ];

  const projectCategories = ['All', 'Web App', 'Mobile/UI', 'Design'];

  const filteredProjects = projectFilter === 'All'
    ? personalInfo.projects
    : personalInfo.projects.filter(p => p.category === projectFilter);

  return (
    <section id="portfolio" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto z-10">
      {/* Section Title Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1430] border border-[#2c67ed]/40 shadow-[0_0_12px_rgba(44,103,237,0.3)] text-xs font-mono uppercase tracking-widest text-[#00d2ff] mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Karya & Kompetensi</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Featured <span className="bg-gradient-to-r from-[#00d2ff] to-[#2c67ed] bg-clip-text text-transparent">Portfolio</span>
        </motion.h2>
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
          Eksplorasi proyek-proyek unggulan, sertifikasi kompetensi profesional, dan penguasaan teknologi pengembangan software.
        </p>
      </div>

      {/* Main Tab Navigation Buttons */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 rounded-2xl bg-[#060b1e]/90 border border-[#2c67ed]/40 backdrop-blur-2xl shadow-[0_0_25px_rgba(44,103,237,0.35)]">
          {mainTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePortfolioTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2c67ed] to-[#1d4fd8] shadow-[0_0_20px_rgba(44,103,237,0.7)] border border-[#00d2ff]/40"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <Icon className={`w-4 h-4 relative z-10 transition-colors ${isActive ? 'text-[#00d2ff]' : 'text-slate-400'}`} />
                <span className="relative z-10">{tab.label}</span>
                <span className={`relative z-10 text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-[#030712]/50 text-[#00d2ff] border border-[#00d2ff]/30' : 'bg-white/10 text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: PROJECTS */}
      {activeTab === 'projects' && (
        <motion.div
          key="projects-tab"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Sub Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setProjectFilter(category)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  projectFilter === category
                    ? 'bg-[#2c67ed]/25 text-[#00d2ff] border border-[#00d2ff]/50 shadow-[0_0_12px_rgba(0,210,255,0.4)]'
                    : 'bg-[#060b1e]/60 text-slate-400 border border-white/5 hover:text-white hover:border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="group rounded-3xl bg-[#060b1e]/85 border border-[#2c67ed]/30 hover:border-[#00d2ff]/70 shadow-[0_0_20px_rgba(44,103,237,0.15)] hover:shadow-[0_0_30px_rgba(44,103,237,0.4),0_0_15px_rgba(0,210,255,0.3)] transition-all duration-500 flex flex-col overflow-hidden"
              >
                {/* Image Container with Hover Zoom & Action Overlay */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#0a1435]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b1e] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill on Image */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#060b1e]/90 border border-[#2c67ed]/50 backdrop-blur-md text-[11px] font-mono text-[#00d2ff]">
                    {project.category}
                  </div>

                  {/* Quick Preview Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[#030712]/60 backdrop-blur-[2px] transition-opacity duration-300 gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 rounded-full bg-[#2c67ed] text-white shadow-[0_0_15px_#2c67ed] hover:scale-110 transition-transform"
                      title="Quick Preview"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-800 text-white border border-white/20 hover:scale-110 transition-transform"
                      title="View GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00d2ff] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4 font-light">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-[#0b1430] border border-[#2c67ed]/30 text-slate-300 text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action Links */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d2ff] hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* TAB 2: CERTIFICATES */}
      {activeTab === 'certificates' && (
        <motion.div
          key="certificates-tab"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {personalInfo.certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-[#060b1e]/85 border border-[#2c67ed]/30 hover:border-[#00d2ff]/60 shadow-[0_0_20px_rgba(44,103,237,0.15)] hover:shadow-[0_0_30px_rgba(44,103,237,0.35)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Issuer and Date */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-[#2c67ed]/20 to-[#00d2ff]/20 border border-[#2c67ed]/40 text-[#00d2ff]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-slate-400 block">{cert.issueDate}</span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      Verified
                    </span>
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#00d2ff] transition-colors mb-1.5">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-[#8eb6fd] mb-4">
                  Penerbit: {cert.issuer}
                </p>

                {/* Skills Learned */}
                <div className="mb-6">
                  <p className="text-xs text-slate-400 font-mono mb-2">Verified Competencies:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-[#0b1430] border border-white/5 text-slate-300 text-xs flex items-center gap-1 font-mono"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#00d2ff]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Credential ID & Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 block font-mono">Credential ID:</span>
                  <span className="text-xs font-mono text-slate-300">{cert.credentialId}</span>
                </div>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#2c67ed]/20 hover:bg-[#2c67ed] text-[#00d2ff] hover:text-white border border-[#2c67ed]/40 text-xs font-semibold transition-all duration-300 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* TAB 3: TECH STACK */}
      {activeTab === 'techstack' && (
        <motion.div
          key="techstack-tab"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-10 max-w-6xl mx-auto"
        >
          {personalInfo.techStack.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-6 md:p-8 rounded-3xl bg-[#060b1e]/80 border border-[#2c67ed]/30 shadow-[0_0_25px_rgba(44,103,237,0.15)] backdrop-blur-xl"
            >
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]" />
                  <span>{category.category}</span>
                </h3>
                <p className="text-sm text-slate-400 mt-1 font-light">
                  {category.description}
                </p>
              </div>

              {/* Tech Items Grid with Animated Skill Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((tech, tIdx) => (
                  <motion.div
                    key={tIdx}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-2xl bg-[#08112e]/70 border border-[#2c67ed]/20 hover:border-[#00d2ff]/50 shadow-[0_0_12px_rgba(44,103,237,0.1)] hover:shadow-[0_0_20px_rgba(0,210,255,0.2)] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }}
                        />
                        <span className="font-semibold text-white text-sm">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-medium text-[#00d2ff] bg-[#2c67ed]/20 px-2 py-0.5 rounded-md border border-[#2c67ed]/30">
                        {tech.level}
                      </span>
                    </div>

                    {/* Progress Bar with Cosmic Gradient */}
                    <div className="w-full bg-[#030712] rounded-full h-2 overflow-hidden p-[1px] border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: tIdx * 0.05, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-[#2c67ed] via-[#5990fb] to-[#00d2ff] shadow-[0_0_10px_#2c67ed]"
                      />
                    </div>
                    <div className="flex justify-between items-center mt-1.5 text-[11px] font-mono text-slate-400">
                      <span>Proficiency</span>
                      <span className="text-slate-300">{tech.proficiency}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#060b1e] border border-[#2c67ed]/50 p-6 md:p-8 shadow-[0_0_40px_rgba(44,103,237,0.5)] overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#2c67ed]/20 text-[#00d2ff] text-xs font-mono border border-[#2c67ed]/40">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#0b1430] border border-[#2c67ed]/40 text-slate-200 text-xs font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2c67ed] to-[#1d4fd8] text-white font-semibold text-sm shadow-[0_0_20px_rgba(44,103,237,0.6)] flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl rounded-3xl bg-[#060b1e] border border-[#2c67ed]/50 p-6 md:p-8 shadow-[0_0_40px_rgba(44,103,237,0.5)] overflow-hidden"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-white/10 bg-[#0b1430] flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#00d2ff] bg-[#2c67ed]/20 px-2.5 py-1 rounded-full border border-[#2c67ed]/40">
                  {selectedCert.issuer}
                </span>
                <span className="text-xs font-mono text-slate-400">{selectedCert.issueDate}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {selectedCert.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-6">
                ID Kredensial: <span className="text-slate-200">{selectedCert.credentialId}</span>
              </p>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2c67ed] to-[#1d4fd8] text-white font-semibold text-sm shadow-[0_0_20px_rgba(44,103,237,0.6)] flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Buka Verifikasi Asli</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
