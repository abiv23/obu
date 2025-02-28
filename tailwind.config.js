/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#9AB948', // RGB(154, 185, 72) in hex
      },
    },
  },
  plugins: [],
};