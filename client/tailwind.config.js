/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#ffffff',
        'background': '#01211e',
        'sidebar-bg': '#203335',
        'primary': '#94123D',
        'secondary': '#125594',
        'accent': '#851860',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
}

