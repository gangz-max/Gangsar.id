import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  MessageSquare, 
  Sparkles, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  CheckCircle 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate cosmic dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Open user mail client with prefilled data
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Kolaborasi Proyek dari ' + formData.name)}&body=${encodeURIComponent(
        `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;

      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1000);
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: personalInfo.socials.github, color: '#FFFFFF', hoverGlow: 'rgba(255,255,255,0.3)' },
    { name: 'LinkedIn', icon: Linkedin, url: personalInfo.socials.linkedin, color: '#0077B5', hoverGlow: 'rgba(0,119,181,0.5)' },
    { name: 'Instagram', icon: Instagram, url: personalInfo.socials.instagram, color: '#E1306C', hoverGlow: 'rgba(225,48,108,0.5)' },
    { name: 'Twitter / X', icon: Twitter, url: personalInfo.socials.twitter, color: '#1DA1F2', hoverGlow: 'rgba(29,161,242,0.5)' },
    { name: 'Discord', icon: MessageSquare, url: personalInfo.socials.discord, color: '#5865F2', hoverGlow: 'rgba(88,101,242,0.5)' },
  ];

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 max-w-7xl mx-auto z-10">
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
          <span>Koneksi & Sinyal</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Contact <span className="bg-gradient-to-r from-[#00d2ff] to-[#2c67ed] bg-clip-text text-transparent">Me</span>
        </motion.h2>
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
          Tertarik untuk berkolaborasi dalam proyek seru atau ingin sekadar berdiskusi tentang teknologi? Kirimkan pesan Anda!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
        {/* Left Column: Direct Info & Social Channels */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Direct Email Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-[#060b1e]/85 border border-[#2c67ed]/30 shadow-[0_0_25px_rgba(44,103,237,0.15)] backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Mari Terhubung
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Saya selalu terbuka untuk mendiskusikan peluang proyek web development, freelance, ataupun posisi tim developer.
            </p>

            <div className="p-4 rounded-2xl bg-[#0b1430] border border-[#2c67ed]/30 flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-[#2c67ed]/20 text-[#00d2ff]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] text-slate-400 font-mono block">Direct Email</span>
                  <span className="text-sm font-semibold text-white truncate block">{personalInfo.email}</span>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-[#2c67ed]/20 hover:bg-[#2c67ed] text-[#00d2ff] hover:text-white border border-[#2c67ed]/40 transition-colors flex-shrink-0 cursor-pointer"
                title="Salin Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Availability Indicator */}
            <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#00d2ff]" />
                <span>Lokasi: {personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#00d2ff]" />
                <span>Waktu Respon: Cepat (&lt; 24 Jam)</span>
              </div>
            </div>
          </div>

          {/* Social Media Grid */}
          <div className="p-6 md:p-8 rounded-3xl bg-[#060b1e]/85 border border-[#2c67ed]/30 shadow-[0_0_25px_rgba(44,103,237,0.15)] backdrop-blur-xl">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4">
              Sosial Media & Jaringan
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0b1430] border border-white/5 hover:border-[#2c67ed]/60 hover:bg-[#0e1b42] text-slate-300 hover:text-white transition-all duration-300 group shadow-sm hover:shadow-[0_0_15px_rgba(44,103,237,0.4)]"
                  >
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-[#00d2ff] transition-colors" />
                    <span className="text-xs font-semibold">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Glassmorphism Interactive Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-[#060b1e]/90 border border-[#2c67ed]/40 shadow-[0_0_35px_rgba(44,103,237,0.25)] backdrop-blur-2xl">
            {/* Background Glow inside form card */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#2c67ed]/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-2">
              Kirim Pesan Kosmik
            </h3>
            <p className="text-slate-400 text-sm mb-8 font-light">
              Isi form di bawah dan pesan Anda akan diteruskan secara instan.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Nama Lengkap <span className="text-[#00d2ff]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="mis. Alex Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0b1430]/90 border border-[#2c67ed]/30 focus:border-[#00d2ff] focus:ring-2 focus:ring-[#2c67ed]/50 text-white placeholder-slate-500 text-sm transition-all outline-none shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Alamat Email <span className="text-[#00d2ff]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0b1430]/90 border border-[#2c67ed]/30 focus:border-[#00d2ff] focus:ring-2 focus:ring-[#2c67ed]/50 text-white placeholder-slate-500 text-sm transition-all outline-none shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Subjek / Kebutuhan
                </label>
                <input
                  type="text"
                  placeholder="mis. Pembuatan Website Portofolio / Kolaborasi Proyek"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0b1430]/90 border border-[#2c67ed]/30 focus:border-[#00d2ff] focus:ring-2 focus:ring-[#2c67ed]/50 text-white placeholder-slate-500 text-sm transition-all outline-none shadow-inner"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Isi Pesan <span className="text-[#00d2ff]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tuliskan ide proyek, penawaran, atau pertanyaan Anda di sini..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0b1430]/90 border border-[#2c67ed]/30 focus:border-[#00d2ff] focus:ring-2 focus:ring-[#2c67ed]/50 text-white placeholder-slate-500 text-sm transition-all outline-none shadow-inner resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2c67ed] via-[#3d77f4] to-[#1d4fd8] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(44,103,237,0.6)] hover:shadow-[0_0_35px_rgba(44,103,237,0.9),0_0_20px_rgba(0,210,255,0.4)] border border-[#00d2ff]/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Mentransmisikan Sinyal...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#00d2ff]" />
                    <span>Luncurkan Pesan</span>
                  </>
                )}
              </button>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 flex items-center gap-3 text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>
                      Pesan Anda berhasil disiapkan! Aplikasi email Anda telah dibuka untuk verifikasi pengiriman.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
