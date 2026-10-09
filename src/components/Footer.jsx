import React from 'react';
import { Sparkles, ArrowUp, Heart, Github, Linkedin, Instagram } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-[#2c67ed]/20 bg-[#030712]/90 backdrop-blur-xl py-12 px-4 md:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#2c67ed] to-[#00d2ff] p-[1.5px]">
              <div className="w-full h-full bg-[#030712] rounded-full flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-[#00d2ff]" />
              </div>
            </div>
            <span className="font-bold text-lg text-white">
              Gangsar<span className="text-[#2c67ed]">.id</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 font-light max-w-sm">
            {personalInfo.tagline}
          </p>
        </div>

        {/* Center Credits */}
        <div className="text-center text-xs text-slate-400">
          <p className="flex items-center justify-center gap-1 mb-1 text-slate-300">
            Didesain & Dibuat dengan <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> menggunakan
          </p>
          <p className="font-mono text-[#8eb6fd]">
            React &bull; Tailwind CSS &bull; Framer Motion
          </p>
          <p className="text-[11px] text-slate-500 mt-2">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#060b1e] border border-[#2c67ed]/40 hover:border-[#00d2ff] text-slate-300 hover:text-white text-xs font-mono transition-all duration-300 shadow-[0_0_12px_rgba(44,103,237,0.2)] hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] cursor-pointer"
          >
            <span>Back to Orbit</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00d2ff] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
