export const personalInfo = {
  name: "Gangsar Wijaya",
  nickName: "Gangsar",
  roles: [
    "Junior Developer",
    "Tech Enthusiast",
    "Frontend Specialist",
    "Fullstack Explorer",
    "UI/UX Enthusiast"
  ],
  bio: "Seorang pengembang web yang antusias menjelajahi teknologi modern, berfokus pada pembangunan antarmuka web yang interaktif, responsif, dan performan tinggi dengan nuansa visual yang memukau.",
  tagline: "Membangun Pengalaman Digital yang Menembus Batas Gravitasi.",
  location: "Indonesia",
  availability: "Available for Freelance & Full-time Roles",
  email: "gangsar.wijaya.dev@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    discord: "https://discord.com",
  },
  stats: [
    { label: "Projects Completed", value: "20+", count: 20 },
    { label: "Happy Clients & Orgs", value: "12+", count: 12 },
    { label: "Git Commits (Year)", value: "650+", count: 650 },
    { label: "Tech Stack Mastered", value: "15+", count: 15 }
  ],
  education: [
      {
        degree: "S1 Teknik Informatika / Ilmu Komputer",
        institution: "Universitas Terkemuka Indonesia",
        period: "2021 - 2025",
        description: "Fokus pada Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Web Development, dan Cloud Computing.",
        gpa: "3.85 / 4.00",
        highlight: "Ketua Divisi Web Development Club Kampus"
      },
      {
        degree: "Jurusan Teknik komputer danjaringan / SMK",
        institution: "SMKN 1 PUNGGING MOJOKERTO",
        period: "2025 - SEKARANG",
        description: "Mempelajari logika pemrograman, algoritma dasar, HTML/CSS/JS, dan database SQL.",
        gpa: "Lulusan Terbaik",
        highlight: "Juara Lomba Desain Web & Algoritma Siswa"
      },
      {
        degree: "Bootcamp Fullstack Web Development",
        institution: "Nama Bootcamp / Kursus Online",
        period: "2023 - 2024",
        description: "Mendalami React, Node.js, REST API, dan Git melalui proyek nyata serta code review mentor.",
        gpa: "Lulus dengan Predikat Sangat Baik",
        highlight: "Proyek Capstone Terbaik Angkatan"
      },
      {
        degree: "Sekolah Menengah Pertama (SMP)",
        institution: "SMP Negeri Nama Sekolah",
        period: "2022 - 2025",
        description: "Mengenal komputer dasar, Microsoft Office, dan mulai tertarik membuat website sederhana.",
        gpa: "Peringkat 3 Besar",
        highlight: "Anggota Ekstrakurikuler Komputer"
      },
      {
        degree: "Sekolah Dasar (SD)",
        institution: "SD Negeri Nama Sekolah",
        period: "2016 - 2022",
        description: "Membangun fondasi belajar: membaca, berhitung, dan logika dasar serta rasa ingin tahu pada teknologi.",
        gpa: "Lulus dengan Nilai Baik",
        highlight: "Juara Lomba Cerdas Cermat Sekolah"
      }
    ],
  experience: [
    {
      role: "Junior Web Developer",
      company: "Digital Inovasi Solusindo",
      period: "2023 - 2024",
      type: "Internship / Contract",
      description: "Mengembangkan komponen frontend modular menggunakan React.js dan Tailwind CSS, mengintegrasikan RESTful API, dan mengoptimalkan kecepatan muat halaman hingga 40%.",
      technologies: ["React", "Tailwind CSS", "REST API", "Git", "Figma"]
    },
    {
      role: "Frontend Developer & UI Designer",
      company: "Freelance / Independent Projects",
      period: "2022 - Sekarang",
      type: "Freelance",
      description: "Merancang dan membangun 15+ website custom untuk klien UMKM, portofolio perusahaan, dan landing page acara dengan animasi smooth dan visual modern.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vite"]
    },
    {
      role: "Lead Tech & Open Source Contributor",
      company: "Komunitas Pengembang Kampus",
      period: "2022 - 2023",
      type: "Organization",
      description: "Mengkoordinir workshop frontend development untuk 100+ mahasiswa baru dan membimbing peserta dalam membangun proyek web pertama mereka.",
      technologies: ["JavaScript", "HTML/CSS", "Git", "Mentoring"]
    }
  ],
  projects: [
    {
      id: "nebula-store",
      title: "Nebula E-Commerce Platform",
      category: "Web App",
      description: "Platform e-commerce modern dengan fitur katalog interaktif, real-time cart, checkout payment gateway simulasi, dan dashboard analytics dark-mode.",
      tags: ["React", "Tailwind CSS", "Redux", "Node.js", "Stripe API"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
      demoUrl: "https://demo-ecommerce-space.example.com",
      githubUrl: "https://github.com/gangsar/nebula-ecommerce",
      featured: true
    },
    {
      id: "astro-dashboard",
      title: "Cosmic SaaS Analytics Dashboard",
      category: "Web App",
      description: "Dashboard manajemen data interaktif dengan visualisasi grafik chart interaktif, tracking metrik performa real-time, dan export PDF report.",
      tags: ["React", "Framer Motion", "Chart.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      demoUrl: "https://demo-dashboard-cosmic.example.com",
      githubUrl: "https://github.com/gangsar/astro-dashboard",
      featured: true
    },
    {
      id: "ai-prompt-orbit",
      title: "Orbit AI Prompt Studio",
      category: "Web App",
      description: "Aplikasi generator & organizer prompt AI bertenaga LLM dengan fitur preset template, copy instan, tag manager, dan dark interstellar UI.",
      tags: ["React", "Tailwind CSS", "OpenAI API", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      demoUrl: "https://demo-ai-orbit.example.com",
      githubUrl: "https://github.com/gangsar/orbit-ai-studio",
      featured: true
    },
    {
      id: "space-task-flow",
      title: "Galaxy Task & Kanban Board",
      category: "Web App",
      description: "Aplikasi produktivitas drag-and-drop Kanban board dengan fitur subtasks, deadline reminder, tag priority, dan local persistence.",
      tags: ["React", "Dnd-Kit", "Tailwind CSS", "Zustand"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
      demoUrl: "https://demo-task-galaxy.example.com",
      githubUrl: "https://github.com/gangsar/galaxy-taskflow",
      featured: false
    },
    {
      id: "crypto-nova",
      title: "Nova Crypto & Token Tracker",
      category: "Mobile/UI",
      description: "Antarmuka pemantau harga cryptocurrency real-time dengan grafik candle stick interaktif, alert harga otomatis, dan portfolio simulator.",
      tags: ["React Native / Web", "Tailwind CSS", "CoinGecko API"],
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=800&auto=format&fit=crop&q=80",
      demoUrl: "https://demo-crypto-nova.example.com",
      githubUrl: "https://github.com/gangsar/crypto-nova",
      featured: false
    },
    {
      id: "stellar-portfolio-v1",
      title: "Stellar Developer Portfolio Template",
      category: "Design",
      description: "Desain dan template portofolio developer open source dengan arsitektur micro-interactions dan performa Lighthouse 100/100.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "SEO Ready"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
      demoUrl: "https://demo-stellar-portfolio.example.com",
      githubUrl: "https://github.com/gangsar/stellar-portfolio",
      featured: false
    }
  ],
  certificates: [
    {
      id: "cert-1",
      title: "Frontend Developer Expert (React & State Management)",
      issuer: "Dicoding Indonesia & Kemendikbud",
      issueDate: "Desember 2023",
      credentialId: "DCD-FE-88921-X9",
      credentialUrl: "https://www.dicoding.com/certificates/DCD-FE-88921-X9",
      skills: ["React.js", "Redux", "Clean Architecture", "PWA", "Automation Testing"],
      image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "cert-2",
      title: "Meta Certified Front-End Developer Specialization",
      issuer: "Meta / Coursera",
      issueDate: "Oktober 2023",
      credentialId: "COURSERA-META-7482",
      credentialUrl: "https://coursera.org/verify/COURSERA-META-7482",
      skills: ["React Advanced", "JavaScript ES6+", "UI/UX Principles", "Version Control", "Jest Testing"],
      image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "cert-3",
      title: "Fullstack Web Development Bootcamp",
      issuer: "Alibaba Cloud & Digitalent Kominfo",
      issueDate: "Juli 2023",
      credentialId: "KOMINFO-DTS-99014",
      credentialUrl: "https://digitalent.kominfo.go.id/verify/99014",
      skills: ["Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Cloud Computing"],
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "cert-4",
      title: "Responsive Web Design & Algorithms",
      issuer: "freeCodeCamp",
      issueDate: "Maret 2023",
      credentialId: "FCC-RWD-5512",
      credentialUrl: "https://freecodecamp.org/certification/gangsar/responsive-web-design",
      skills: ["HTML5", "CSS3 Flexbox & Grid", "Accessibility", "Responsive Layouts"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80"
    }
  ],
  techStack: [
    {
      category: "Frontend Development",
      description: "Membangun tampilan antarmuka interaktif, cepat, dan responsif.",
      items: [
        { name: "React.js", level: "Advanced", icon: "react", color: "#61DAFB", proficiency: 92 },
        { name: "Tailwind CSS", level: "Expert", icon: "tailwind", color: "#38BDF8", proficiency: 95 },
        { name: "JavaScript (ES6+)", level: "Advanced", icon: "javascript", color: "#F7DF1E", proficiency: 90 },
        { name: "TypeScript", level: "Intermediate", icon: "typescript", color: "#3178C6", proficiency: 80 },
        { name: "Next.js", level: "Intermediate", icon: "nextjs", color: "#FFFFFF", proficiency: 82 },
        { name: "Framer Motion", level: "Advanced", icon: "framer", color: "#FF0055", proficiency: 88 },
        { name: "HTML5 / CSS3", level: "Expert", icon: "html5", color: "#E34F26", proficiency: 98 }
      ]
    },
    {
      category: "Backend & Database",
      description: "Mengelola server-side logic, API endpoint, dan struktur basis data.",
      items: [
        { name: "Node.js", level: "Intermediate", icon: "nodejs", color: "#339933", proficiency: 80 },
        { name: "Express.js", level: "Intermediate", icon: "express", color: "#AAAAAA", proficiency: 78 },
        { name: "PostgreSQL", level: "Intermediate", icon: "postgresql", color: "#4169E1", proficiency: 75 },
        { name: "MongoDB", level: "Intermediate", icon: "mongodb", color: "#47A248", proficiency: 76 },
        { name: "RESTful API", level: "Advanced", icon: "api", color: "#2c67ed", proficiency: 88 },
        { name: "Supabase / Firebase", level: "Intermediate", icon: "supabase", color: "#3ECF8E", proficiency: 80 }
      ]
    },
    {
      category: "Tools, DevOps & Design",
      description: "Alat penunjang alur kerja, kolaborasi, testing, dan desain UI/UX.",
      items: [
        { name: "Git & GitHub", level: "Advanced", icon: "git", color: "#F05032", proficiency: 92 },
        { name: "VS Code", level: "Expert", icon: "vscode", color: "#007ACC", proficiency: 96 },
        { name: "Figma (UI/UX)", level: "Advanced", icon: "figma", color: "#F24E1E", proficiency: 85 },
        { name: "Vite / Webpack", level: "Advanced", icon: "vite", color: "#646CFF", proficiency: 90 },
        { name: "Postman", level: "Advanced", icon: "postman", color: "#FF6C37", proficiency: 86 },
        { name: "Vercel / Netlify", level: "Advanced", icon: "vercel", color: "#00d2ff", proficiency: 88 }
      ]
    }
  ]
};
