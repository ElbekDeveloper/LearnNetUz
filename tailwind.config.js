/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      boxShadow: {
        shadowsharp: "0 0px 5px #76288c",
      },
      colors: {
        bgsharp: {
          500: "#76288c",
          700: "#67217a",
        },
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
