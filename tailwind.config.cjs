/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': "url('/src/assets/heade2.jpeg')"
      }
    },
  },
  plugins: [require('flowbite/plugin'), require("daisyui"),require('tailwindcss-animated')],
}