/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E8BEBE",
        dark: "rgb(207 159 159)",
        green: "#004946",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
