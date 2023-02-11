/** @type {import('tailwindcss').Config} */
/* eslint @typescript-eslint/no-var-requires: "off" */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "warm-gray": colors.stone,
        teal: colors.teal,
        sGreen: "#00c970",
        shGreen: "#00c590",
        sDark: "#191921",
        sGrey: "#ffffff",
      },
    },
  },
  plugins: [
    //...
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
