import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, Rocket, User, Briefcase, Mail } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Rocket },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, setActiveSection]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-2 md:gap-6 px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 backdrop-blur-xl border ${
            scrolled
              ? 'bg-[#060b1e]/85 border-[#2c67ed]/50 shadow-[0_0_25px_rgba(44,103,237,0.45),0_0_50px_rgba(0,210,255,0.15)]'
              : 'bg-[#060b1e]/60 border-[#2c67ed]/30 shadow-[0_0_15px_rgba(44,103,237,0.3)]'
          }`}
        >
          {/* Logo / Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
          >
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-[#2c67ed] to-[#00d2ff] p-[1.5px] shadow-[0_0_12px_#2c67ed]">
              <div className="w-full h-full bg-[#030712] rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#00d2ff] group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <span className="font-bold text-base md:text-lg tracking-wide text-white flex items-center">
              Gangsar<span className="text-[#2c67ed]">.id</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] ml-1 animate-pulse" />
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-[#0a1435]/50 px-2 py-1 rounded-full border border-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2c67ed]/80 to-[#1d4fd8]/80 shadow-[0_0_15px_rgba(44,103,237,0.6)] border border-[#00d2ff]/40"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 relative z-10 transition-colors ${isActive ? 'text-[#00d2ff]' : 'text-slate-400'}`} />
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Action / Connect CTA */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden lg:flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white rounded-full bg-gradient-to-r from-[#2c67ed] to-[#17358e] hover:from-[#3b75f2] hover:to-[#2c67ed] border border-[#00d2ff]/30 shadow-[0_0_15px_rgba(44,103,237,0.5)] hover:shadow-[0_0_20px_rgba(0,210,255,0.7)] transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <span>Connect</span>
              <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-full text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 p-4 rounded-2xl bg-[#060b1e]/95 backdrop-blur-2xl border border-[#2c67ed]/40 shadow-[0_0_30px_rgba(44,103,237,0.4)] md:hidden flex flex-col gap-2"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#2c67ed]/40 to-transparent text-white border-l-4 border-[#00d2ff]'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#00d2ff]' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#2c67ed] to-[#1d4fd8] text-white text-center font-semibold text-sm shadow-[0_0_20px_rgba(44,103,237,0.5)] border border-[#00d2ff]/40"
            >
              🚀 Let's Collaborate
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
