/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          darkest: '#030712',
          darker: '#060b1e',
          card: 'rgba(11, 20, 48, 0.65)',
          border: 'rgba(44, 103, 237, 0.25)',
          glow: '#2c67ed',
          cyan: '#00d2ff',
          purple: '#a855f7',
        },
        primary: {
          DEFAULT: '#2c67ed',
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd2fe',
          300: '#8eb6fd',
          400: '#5990fb',
          500: '#2c67ed',
          600: '#1d4fd8',
          700: '#173eb0',
          800: '#17358e',
          900: '#183072',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(44, 103, 237, 0.4)',
        'glow-md': '0 0 25px rgba(44, 103, 237, 0.55), 0 0 50px rgba(44, 103, 237, 0.2)',
        'glow-lg': '0 0 35px rgba(44, 103, 237, 0.7), 0 0 70px rgba(0, 210, 255, 0.3)',
        'glow-cyan': '0 0 25px rgba(0, 210, 255, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        twinkle: {
          '0%': { opacity: '0.2', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}
