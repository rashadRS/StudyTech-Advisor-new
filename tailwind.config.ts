import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          500: '#4f46e5',
          600: '#4338ca',
          700: '#3730a3'
        },
        secondary: {
          500: '#06b6d4',
          600: '#0891b2'
        },
        accent: {
          500: '#f59e0b',
          600: '#d97706'
        }
      },
      boxShadow: {
        premium: '0 10px 35px -12px rgba(79,70,229,0.35)'
      }
    }
  },
  plugins: []
} satisfies Config;
