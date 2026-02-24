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
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f5f0e8',
          300: '#ebe3d5',
          400: '#D4C5B0',
          500: '#c0a882',
          600: '#a98e6a',
          700: '#8b7355',
          800: '#6d5a42',
          900: '#4a3d2d',
        },
        accent: {
          50: '#faf9f8',
          100: '#f2f0ed',
          200: '#e5e0d9',
          300: '#d1c8bc',
          400: '#b8a89a',
          500: '#9d8a78',
          600: '#7d6c5d',
          700: '#62554a',
          800: '#4a3f37',
          900: '#342d27',
        },
        gold: {
          50: '#fffef9',
          100: '#fefcf0',
          200: '#fdf7d8',
          300: '#fbedb8',
          400: '#f8d97f',
          500: '#E5C272',
          600: '#d4a955',
          700: '#b88d42',
          800: '#926f31',
          900: '#6e5323',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
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
