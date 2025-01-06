/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Modo oscuro activado mediante una clase
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6A4C9C", // Morado Claro
          DEFAULT: "#4B2E83", // Morado Oscuro
        },
        dark: {
          background: "#121212", // Fondo Oscuro
          text: "#EDEDED", // Texto Principal
          secondaryText: "#A1A1A1", // Texto Secundario
          contrast: "#9C3E91", // Botones y Enlaces
          shadow: "#2C1F6B", // Sombra
        },
        accent: {
          complementary: "#F4A261", // Color Complementario
          border: "#3E2A8E", // Color Suave para Bordes
        },
      },
      fontFamily: {
        primaryRegular: ["Regular", "sans-serif"],
        primaryMedium: ["Medium", "sans-serif"],
        primarybold: ["Bold", "sans-serif"],
        titleSemiBold: ["PixelifySans-Semibold"],
        Filano: ["filano"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
