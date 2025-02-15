/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00F5FF',
        secondary: '#7B2FFE',
        dark: '#0A1929',
      },
    },
  },
  plugins: [],
} 