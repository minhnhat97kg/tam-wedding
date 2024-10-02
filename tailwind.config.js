/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {},
    colors: {
      red: "#B23434",
      primary: "#625348",
      secondary: "#ffffff",
    },
    fontFamily: {
      secondary: ["secondary", "sans-serif"],
      primary: ["primary"],
    },
    extend: {},
  },
  plugins: [],
};
