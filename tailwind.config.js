/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Helvetica Neue", sans-serif',
      pen: "'Nanum Pen Script', cursive",
      mono: "ui-monospace, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
    },
    extend: {
      colors: {
        gray: {
          100: "#000",
          200: "#111",
          300: "#333",
          400: "#444",
          500: "#666",
          600: "#888",
          700: "#999",
          800: "#eaeaea",
          900: "#fafafa",
        },
        success: "#0070f3",
        successLight: "#3291ff",
        successDark: "#0366d6",
        cyan: "#50E3C2",
        cyanLight: "#79FFE1",
        cyanDark: "#29BC9B",
        error: "#e00",
        errorLight: "#ff1a1a",
        errorDark: "#c00",
        warning: "#f5a623",
        warningLight: "#f7b955",
        warningDark: "#f49b0b",
        purple: "#F81CE5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-radix")()],
};
