/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A855F7',
          DEFAULT: '#8A2BE2',
          dark: '#6A1CB2',
        },
        secondary: {
          light: '#FF69B4',
          DEFAULT: '#FF1493',
          dark: '#C71585',
        },
        accent: {
          light: '#38BDF8',
          DEFAULT: '#00BFFF',
          dark: '#0099CC',
        },
        success: {
          light: '#34D399',
          DEFAULT: '#10B981',
          dark: '#059669',
        },
        warning: {
          light: '#FBBF24',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        error: {
          light: '#F87171',
          DEFAULT: '#EF4444',
          dark: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(138, 43, 226, 0.5)',
        'glow-lg': '0 0 30px rgba(138, 43, 226, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};