/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#F31503',
        'second-color': '#fff',
      },
    },
  },
  plugins: [],
};
