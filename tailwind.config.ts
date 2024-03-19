import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-bg": "#150B23",
        "main-pink": "#FF0DF5",
        "main-blue": "#6117ab",
        "main-grey": "#363333",
      },
      fontFamily: {
        striger: ["striger", "sans-serif"],
        sarpanch: "var(--font-sarpanch)",
      },
      dropShadow: {
        xl: " 4px 2px 10px #FF0DF5",
      },
    },
    plugins: [],
  },
};
export default config;
