/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      whity: "#EEEEEE",
      grayy: "#787A91",
      lightBlue: "#141E61",
      darkBlue: "#0F044C",
    },
    backgroundColor: {
      whity: "#EEEEEE",
      grayy: "#787A91",
      lightBlue: "#141E61",
      darkBlue: "#0F044C"
    },
    borderColor: {
      whity: "#EEEEEE",
      grayy: "#787A91",
      lightBlue: "#141E61",
      darkBlue: "#0F044C"
    },
    fontFamily: {
      fuzzyBold: "Fuzzy-Bold",
      fuzzy: "Fuzzy",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
