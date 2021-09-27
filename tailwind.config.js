module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      main_blue: "#282c34",
      second_blue: "#282c34",
      purp: "#282c34",
      yellow: "#FFCC00",
      red: "#B61919",
      transparent: "transparent"
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
