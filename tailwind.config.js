/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  // ["./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        ci1: "#ffced9",
        ci2: "#f3b6c4",
        ci3: "#e7a89d"
      },
      fontFamily: {
        anton: ["Anton"],
        lilita: ["Lilita One"],
        sofia: ["Sofia Sans"]
      }
    },
  },
  plugins: [
    require('daisyui'),
    // require('flowbite/plugin')
  ],

}

