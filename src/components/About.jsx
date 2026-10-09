import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code2, 
  Sparkles, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  FolderGit2, 
  Users, 
  Cpu, 
  Flame 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const [activeSubTab, setActiveSubTab] = useState('experience');

  const statIcons = [
    FolderGit2,
    Users,
    Flame,
    Cpu
  ];

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto z-10">
      {/* Section Title Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b1430] border border-[#2c67ed]/40 shadow-[0_0_12px_rgba(44,103,237,0.3)] text-xs font-mono uppercase tracking-widest text-[#00d2ff] mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Biografi & Perjalanan</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          About <span className="bg-gradient-to-r from-[#00d2ff] to-[#2c67ed] bg-clip-text text-transparent">Me</span>
        </motion.h2>
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
          Mengenal lebih dekat latar belakang saya, dedikasi dalam rekayasa perangkat lunak, dan pengalaman yang telah saya lalui.
        </p>
      </div>

      {/* Profile Card & Bio Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        {/* Left Column: Cosmic Profile Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-center"
        >
          <div className="relative group w-72 sm:w-80 h-72 sm:h-80">
            {/* Glowing Nebula Ring */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#2c67ed] via-[#00d2ff] to-[#a855f7] opacity-70 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition duration-500 animate-pulse-slow" />

            {/* Profile Frame */}
            <div className="relative w-full h-full rounded-3xl bg-[#060b1e] border-2 border-[#2c67ed]/60 p-3 flex flex-col items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(44,103,237,0.35)]">
              {/* Profile Image / Avatar Placeholder with High Tech Style */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#0e1a40] to-[#040816] flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b1e] via-transparent to-transparent opacity-80" />

                {/* Floating Micro Badge in Image */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#060b1e]/90 backdrop-blur-md border border-[#2c67ed]/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-medium text-white">Active Developer</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00d2ff] bg-[#2c67ed]/20 px-2 py-0.5 rounded-full">
                    ID 🇮🇩
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Badges */}
          <div className="w-full mt-6 grid grid-cols-2 gap-3 max-w-sm">
            <div className="p-3 rounded-2xl bg-[#060b1e]/70 border border-[#2c67ed]/30 backdrop-blur-sm text-center">
              <span className="text-xs text-slate-400 block mb-1">Domisili</span>
              <div className="flex items-center justify-center gap-1.5 text-sm font-semibold text-white">
                <MapPin className="w-3.5 h-3.5 text-[#00d2ff]" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-[#060b1e]/70 border border-[#2c67ed]/30 backdrop-blur-sm text-center">
              <span className="text-xs text-slate-400 block mb-1">Status</span>
              <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Open for Work</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio Narrative & Statistics */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          <div className="p-6 md:p-8 rounded-3xl bg-[#060b1e]/80 border border-[#2c67ed]/30 shadow-[0_0_25px_rgba(44,103,237,0.15)] backdrop-blur-xl mb-6">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span>Menghubungkan Ide & Kode Menjadi Solusi Digital</span>
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
              Halo! Saya <span className="text-[#00d2ff] font-semibold">{personalInfo.name}</span>, seorang Junior Web Developer yang memiliki passion mendalam terhadap ekosistem web modern seperti React, Tailwind CSS, dan animasi interaktif.
            </p>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Saya senang mengeksplorasi estetika antarmuka luar angkasa (interstellar & cyberpunk), merancang micro-interactions yang mulus, serta membangun arsitektur kode yang bersih, mudah dikembangkan, dan scalable.
            </p>
          </div>

          {/* Project Statistics Counter Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {personalInfo.stats.map((stat, idx) => {
              const IconComponent = statIcons[idx] || FolderGit2;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-4 rounded-2xl bg-[#060b1e]/90 border border-[#2c67ed]/30 hover:border-[#00d2ff]/60 shadow-[0_0_15px_rgba(44,103,237,0.2)] hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all flex flex-col items-center text-center group"
                >
                  <div className="p-2 rounded-xl bg-[#2c67ed]/20 text-[#00d2ff] group-hover:bg-[#2c67ed] group-hover:text-white transition-colors duration-300 mb-2">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-white to-[#8eb6fd] bg-clip-text text-transparent group-hover:from-[#00d2ff] group-hover:to-white">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 font-medium leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Experience & Education Tab Navigation */}
      <div className="mt-12">
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#060b1e]/80 border border-[#2c67ed]/40 backdrop-blur-xl shadow-[0_0_20px_rgba(44,103,237,0.3)]">
            <button
              onClick={() => setActiveSubTab('experience')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeSubTab === 'experience'
                  ? 'bg-gradient-to-r from-[#2c67ed] to-[#1d4fd8] text-white shadow-[0_0_15px_rgba(44,103,237,0.6)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4 text-[#00d2ff]" />
              <span>Pengalaman & Karier</span>
            </button>
            <button
              onClick={() => setActiveSubTab('education')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeSubTab === 'education'
                  ? 'bg-gradient-to-r from-[#2c67ed] to-[#1d4fd8] text-white shadow-[0_0_15px_rgba(44,103,237,0.6)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-[#00d2ff]" />
              <span>Riwayat Pendidikan</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        {activeSubTab === 'experience' ? (
          <div className="space-y-4 max-w-4xl mx-auto">
            {personalInfo.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#060b1e]/75 border border-[#2c67ed]/30 hover:border-[#00d2ff]/60 shadow-[0_0_20px_rgba(44,103,237,0.15)] hover:shadow-[0_0_25px_rgba(44,103,237,0.35)] transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#00d2ff] to-[#2c67ed] group-hover:w-2 transition-all duration-300" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-medium text-[#8eb6fd]">
                      {exp.company} &bull; <span className="text-slate-400 text-xs font-normal">{exp.type}</span>
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2c67ed]/20 text-[#00d2ff] text-xs font-mono self-start sm:self-auto border border-[#2c67ed]/40">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mt-3 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-[#0b1430] border border-white/10 text-slate-300 text-xs font-mono group-hover:border-[#2c67ed]/40"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 max-w-4xl mx-auto">
            {personalInfo.education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#060b1e]/75 border border-[#2c67ed]/30 hover:border-[#00d2ff]/60 shadow-[0_0_20px_rgba(44,103,237,0.15)] hover:shadow-[0_0_25px_rgba(44,103,237,0.35)] transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#2c67ed] to-[#a855f7] group-hover:w-2 transition-all duration-300" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-[#8eb6fd]">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2c67ed]/20 text-[#00d2ff] text-xs font-mono self-start sm:self-auto border border-[#2c67ed]/40">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mt-2 mb-3">
                  {edu.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/5">
                  <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/50 px-2.5 py-1 rounded-md border border-emerald-500/30">
                    GPA / Capaian: {edu.gpa}
                  </span>
                  <span className="text-xs text-slate-400 italic">
                    ★ {edu.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
