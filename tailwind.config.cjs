/** @type {import('tailwindcss').Config} */
/* eslint @typescript-eslint/no-var-requires: "off" */


const colors = require('tailwindcss/colors')
  
  module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {  
      colors: {
          'warm-gray': colors.stone,
          teal: colors.teal,
        }},
  },
  plugins: [
    //...
    require("@tailwindcss/forms"),
  ],
};
