/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        text: {
          gray:"#999999"
        },
        background: {
          primary: "#006654"
        },

      }
    },
  },
  plugins: [],
}
