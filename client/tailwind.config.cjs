/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B74E4',
        gray: {
          light: '#F0F2F5',
          dark: '#65676B',
        },
      },
    },
  },
  plugins: [],
};
