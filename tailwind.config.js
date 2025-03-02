/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#9AB948',
        'dark-grey': '#4D5059',
        'light-grey': '#91949F',
        'dark-blue': '#1A3B79',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '20': '80px',
        '10': '40px',
      },
      lineHeight: {
        'relaxed': '1.625',
        'normal': '1.6',
        'tight': '1.25',
      },
    },
  },
  plugins: [],
};