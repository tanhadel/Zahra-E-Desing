import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdfbf7',
          100: '#f8f3eb',
          200: '#f0e6d6',
          300: '#e8d9c1',
          400: '#d4b896',
          500: '#c19a6b',
          600: '#a67c52',
          700: '#8b6342',
          800: '#6b4423',
          900: '#4a2f19',
        },
        accent: {
          50: '#faf9f7',
          100: '#f5f1eb',
          200: '#dcd5c8',
          300: '#c3b8a5',
          400: '#a5947a',
          500: '#8b7355',
          600: '#6f5a41',
          700: '#5a4731',
          800: '#433521',
          900: '#2d2415',
        },
        gold: {
          50: '#fffef7',
          100: '#fefbeb',
          200: '#fdf5cf',
          300: '#fbeeb3',
          400: '#f8e07b',
          500: '#f5d343',
          600: '#ddb830',
          700: '#b89728',
          800: '#937620',
          900: '#78611a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'zoom-in': 'zoomIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
