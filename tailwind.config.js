/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        striger: ["var(--font-striger)", "system-ui", "sans-serif"],
        roboto: ["var(--font-roboto)", "system-ui", "sans-serif"],
      },
      colors:{
        main-bg: "#150B23",
        main-pink: "#FF0DF5",
        main-blue: "#6117AB",
        main-grey: "#363333"
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
