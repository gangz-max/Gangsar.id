import React, { useState } from 'react';
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CrossBanner from './components/CrossBanner';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="relative min-h-screen bg-[#02040a] text-slate-100 selection:bg-[#2c67ed] selection:text-white overflow-x-hidden font-sans">
      {/* 1. Dynamic Space Animated Canvas Background (Twinkling Stars, Meteors, Nebula) */}
      <SpaceBackground />

      {/* 2. Floating Navbar with Blue Neon Glow */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* 3. Main Sections */}
      <main className="relative z-10">
        <Hero />
        <CrossBanner />
        <About />
        <Portfolio />
        <Contact />
      </main>

      {/* 4. Cosmic Footer */}
      <Footer />
    </div>
  );
}
