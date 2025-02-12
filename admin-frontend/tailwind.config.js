/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
      extend: {
        colors: {
          foreground: {
          100: "#fdfeff",
          200: "#fbfefe",
          300: "#f8fdfe",
          400: "#f6fdfd",
          500: "#f4fcfd",
          600: "#c3caca",
          700: "#929798",
          800: "#626565",
          900: "#313233"
          },
          background: {
          100: "#cdd2d2",
          200: "#9ba5a5",
          300: "#697879",
          400: "#374b4c",
          500: "#051e1f",
          600: "#041819",
          700: "#031213",
          800: "#020c0c",
          900: "#010606"
          },
          primary: {
          100: "#d1e2e5",
          200: "#a3c6cb",
          300: "#76a9b0",
          400: "#488d96",
          500: "#1a707c",
          600: "#155a63",
          700: "#10434a",
          800: "#0a2d32",
          900: "#051619"
          },
          secondary: {
          100: "#d3ccdf",
          200: "#a699be",
          300: "#7a669e",
          400: "#4d337d",
          500: "#21005d",
          600: "#1a004a",
          700: "#140038",
          800: "#0d0025",
          900: "#070013"
          },
          accent: {
          100: "#d4f2f8",
          200: "#a9e6f1",
          300: "#7ed9eb",
          400: "#53cde4",
          500: "#28c0dd",
          600: "#209ab1",
          700: "#187385",
          800: "#104d58",
          900: "#08262c"
},
         },
        fontFamily: {
          sans: ['Roboto', 'sans-serif'],
        },
      },
    },
    plugins: [require('tailwindcss-animated')],
  };
  