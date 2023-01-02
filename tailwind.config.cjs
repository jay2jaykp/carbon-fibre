/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibm-sans': ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        'ibm-serif': ['IBM Plex Serif', ...defaultTheme.fontFamily.serif],
        'ibm-mono': ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      }
    },
  },
  plugins: [],
}
