/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'main': ["var(--font-roboto)", 'sans-serif'],
        'secondary': ["var(--font-rubik)", 'sans-serif']
      },
      colors: {
        black: {
          "dark": "#202124",
          "medium": "#292A2D",
          "light": "#3c4043"
        }
      }
    },
  },
  plugins: [],
}