/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff", // branco 
        secondary: "#F37021", // laranja
        dark: "#002840",     // azul escuro (para textos)
        grayish: "#808285",  // cinza "tecnologia"
        light: "#ffffff",    // branco
      },
    },
  },
  plugins: [],
}



