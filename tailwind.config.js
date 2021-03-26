module.exports = {
  purge: ["./{pages,components}/**/*.{ts,tsx,js,jsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        nanum: ["Nanum Pen Script", "cursive"],
        peachy: [
          "peachy-keen-jf",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
