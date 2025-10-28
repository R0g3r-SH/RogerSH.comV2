/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#5363FF',
          dark: '#0d0d0d',
          light: '#1a1a1a',
          accent: '#00D4FF',
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
        }
      },
    },
    plugins: [],
  }