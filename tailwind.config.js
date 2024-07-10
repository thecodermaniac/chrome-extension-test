/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{ts,tsx}"],

  theme: {
    extend: {
      colors: {
        blueColor: "#3B82F6",
        grayColor: "#666D80",
        lightBlue: "#DBEAFE",
        lightGray: "#DFE1E7"
      }
    }
  },
  plugins: []
}
