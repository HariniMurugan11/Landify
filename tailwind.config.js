/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'width': '25.75rem', 
        'height': '24.875rem', 
      },
      colors: {
        subHeading: '#374151',
        subcontent: '#111827',
        getstarted: '#7C3AED',
        content1bg: '#D5FAFC',
        contentbg: '#1DB5BE',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
