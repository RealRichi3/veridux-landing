/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2400px",
      },
      colors: {
        primary: "#006FCF",
        secondary: "#6A6B6C",
        tertiary: "#DDEBF8",
      },
      fontFamily : {
        sans : ['"Open Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
};
