/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Cormorant': ['Cormorant Upright', 'serif'],
      'Open Sans': ['Open Sans', 'sans-serif'],
      'common': ["Open Sans", "sans-serif"],
      'sub': ["Cormorant Upright", "serif"],
    },
   

    extend: {
      backgroundImage : {
        "my-bg": "url('../images/BG.jpg')",
      },
     

    },
  },
  plugins: [],
}