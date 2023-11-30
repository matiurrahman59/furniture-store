import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "rgba(var(--black))",
        white: "rgba(var(--white))",
        orange: "rgba(var(--orange))",
        gray: "rgba(var(--gray))",
        red: "rgba(var(--red))",
        orangeAlpha: "rgba(var(--orange--alpha))",
      },

      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
