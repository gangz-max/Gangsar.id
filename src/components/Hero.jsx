import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Rocket, Code2, Sparkles, Send, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const roles = personalInfo.roles;

  // Typewriter effect
  useEffect(() => {
    const handleType = () => {
      const fullText = roles[currentRoleIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at end before deleting
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 md:px-8 overflow-hidden z-10"
    >
      {/* Background Orbit Rings Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[750px] h-[400px] md:h-[750px] rounded-full border border-[#2c67ed]/15 pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1100px] h-[600px] md:h-[1100px] rounded-full border border-[#00d2ff]/10 pointer-events-none" />

      {/* Floating Space Elements */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute top-36 left-16 p-3 rounded-2xl bg-[#060b1e]/80 border border-[#2c67ed]/40 shadow-[0_0_20px_rgba(44,103,237,0.35)] backdrop-blur-md items-center gap-3"
      >
        <div className="p-2 rounded-xl bg-[#2c67ed]/20 text-[#00d2ff]">
          <Code2 className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-mono">Status</p>
          <p className="text-sm font-semibold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Ready for Missions
          </p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden lg:flex absolute bottom-36 right-16 p-3 rounded-2xl bg-[#060b1e]/80 border border-[#00d2ff]/40 shadow-[0_0_20px_rgba(0,210,255,0.25)] backdrop-blur-md items-center gap-3"
      >
        <div className="p-2 rounded-xl bg-[#00d2ff]/20 text-[#00d2ff]">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-mono">Specialty</p>
          <p className="text-sm font-semibold text-white">Interactive Web & UI</p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        {/* Pulsar Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0b1430]/90 border border-[#2c67ed]/50 shadow-[0_0_15px_rgba(44,103,237,0.4)] backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d2ff] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2c67ed]" />
          </span>
          <span className="text-xs md:text-sm font-mono tracking-wider uppercase text-slate-300 font-medium">
            WELCOME TO MY COSMIC SPACE
          </span>
        </motion.div>

        {/* Large Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6"
        >
          Halo, Saya{' '}
          <span className="bg-gradient-to-r from-white via-[#8eb6fd] to-[#2c67ed] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(44,103,237,0.6)]">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Typewriter Text Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-16 md:h-20 flex items-center justify-center mb-6"
        >
          <div className="inline-flex items-center text-xl sm:text-2xl md:text-4xl font-mono font-semibold text-slate-200">
            <span className="text-[#2c67ed] mr-2 md:mr-3">&gt;</span>
            <span className="text-slate-300 mr-2 md:mr-3">I am a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-[#5990fb] to-[#2c67ed] underline decoration-[#2c67ed]/60 underline-offset-8">
              {currentText}
            </span>
            <span className="w-1 md:w-1.5 h-6 md:h-9 bg-[#00d2ff] ml-1.5 animate-pulse rounded-full" />
          </div>
        </motion.div>

        {/* Tagline / Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('portfolio')}
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-[#2c67ed] to-[#1d4fd8] text-white font-semibold text-sm md:text-base shadow-[0_0_25px_rgba(44,103,237,0.6)] hover:shadow-[0_0_40px_rgba(44,103,237,0.9),0_0_20px_rgba(0,210,255,0.5)] border border-[#00d2ff]/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 cursor-pointer"
          >
            <Rocket className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300 text-[#00d2ff]" />
            <span>Lihat Portfolio</span>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="px-7 py-3.5 rounded-full bg-[#060b1e]/80 hover:bg-[#0f1d47]/80 text-slate-200 hover:text-white font-semibold text-sm md:text-base border border-[#2c67ed]/40 hover:border-[#00d2ff]/60 shadow-[0_0_15px_rgba(44,103,237,0.2)] hover:shadow-[0_0_25px_rgba(44,103,237,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4 text-[#2c67ed]" />
            <span>Hubungi Saya</span>
          </button>

          <a
            href={`mailto:${personalInfo.email}`}
            className="px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-sm md:text-base border border-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-slate-400" />
            <span>Resume / CV</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 md:mt-24 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => scrollTo('about')}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2 hover:text-[#00d2ff] transition-colors">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="p-2 rounded-full bg-[#060b1e]/60 border border-[#2c67ed]/30 text-[#00d2ff] shadow-[0_0_10px_rgba(44,103,237,0.3)]"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
