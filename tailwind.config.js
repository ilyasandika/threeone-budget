/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily :{
      sans : ["Quicksand", "sans-serif"],
    },
    extend: {
      colors: {
        'bg-primary': '#F2F6FE',
        'primary': '#227B94',
        'secondary': '#FFDC7F',
        'dark': '#273240'
      },
      lineHeight: {
        'fit': '0.5'
      },
    },
  },
  plugins: [],
}