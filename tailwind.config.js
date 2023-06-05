/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        offWhite: "rgb(255,252,242)",
        lighterGrey: "rgb(204,197,185)",
        lightGrey: "rgb(64,61,57)",
        darkGrey: "rgb(37,36,34)",
        orange: "rgb(235,94,40)",
      },
    },
  },
  plugins: [],
};
