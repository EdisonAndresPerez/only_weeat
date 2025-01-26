/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Botones: "#E07A5F",
        Texto_principal: "#1C1C1C",
        detalles: "#E9C4C8",
      },
      boxShadow: {
        custom: '-1px 10px 8px -6px rgba(0,0,0,0.75)',}
      
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
