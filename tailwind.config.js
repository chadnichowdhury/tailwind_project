/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Cormorant': ['Cormorant Upright', 'serif'],
      'Open Sans': ['Open Sans', 'sans-serif'],
    },
    // font-family: "", ; font-family: "", serif; font-family: "Open Sans", sans-serif;

    extend: {
      backgroundImage : {
        "my-bg": "url('../images/BG.jpg')",
      },
     

    },
  },
  plugins: [],
}