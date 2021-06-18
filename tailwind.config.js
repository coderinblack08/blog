const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.tsx", "./posts/**/*.{md,mdx}", "./components/**/*.tsx"],
  mode: "jit",
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    colors: {
      white: "#FFFFFF",
      gray: colors.trueGray,
      yellow: "#F3BE52",
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: 14,
            color: theme("colors.gray.300"),
            // fontFamily: "Inter, sans-serif",
            '[class~="lead"]': {
              color: theme("colors.gray.300"),
            },
            a: {
              color: theme("colors.white"),
            },
            strong: {
              color: theme("colors.white"),
            },
            "ol > li::before": {
              color: theme("colors.gray.400"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.600"),
            },
            hr: {
              borderColor: theme("colors.gray.200"),
            },
            blockquote: {
              color: theme("colors.gray.200"),
              borderLeftColor: theme("colors.gray.600"),
            },
            h1: {
              color: theme("colors.white"),
            },
            h2: {
              color: theme("colors.white"),
            },
            h3: {
              color: theme("colors.white"),
            },
            h4: {
              color: theme("colors.white"),
            },
            "figure figcaption": {
              color: theme("colors.gray.400"),
            },
            code: {
              color: theme("colors.white"),
            },
            "a code": {
              color: theme("colors.white"),
            },
            pre: {
              color: theme("colors.gray.200"),
            },
            thead: {
              color: theme("colors.white"),
              borderBottomColor: theme("colors.gray.400"),
            },
            "tbody tr": {
              borderBottomColor: theme("colors.gray.600"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
