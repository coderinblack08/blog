const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.tsx"],
  mode: "jit",
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    colors: {
      gray: colors.trueGray,
      yellow: "#F3BE52",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
