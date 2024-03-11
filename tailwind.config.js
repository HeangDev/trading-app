/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            'nunito': ['Noto Sans Thai', 'sans-serif'],
        },
    },
  },
  plugins: [],
}

