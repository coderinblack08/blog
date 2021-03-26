module.exports = {
  purge: ["./{pages,components}/**/*.{ts,tsx,js,jsx}"],
  darkMode: false,
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: null,
          },
        },
      },
      fontFamily: {
        nanum: ["Nanum Gothic", "cursive"],
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
  plugins: [require("@tailwindcss/typography")],
};
