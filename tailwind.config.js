/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradto: "#F9FAFB",
        gradfrom: "#D2D6DB",
        disabledbtn: "#A3A3A3"
      }
    },
  },
  plugins: [],
}

