/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Helvetica Neue", sans-serif',
      mono: "ui-monospace, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
    },
    colors: {
      gray: [
        "#000",
        "#111",
        "#333",
        "#444",
        "#666",
        "#888",
        "#999",
        "#eaeaea",
        "#fafafa",
      ],
      success: "#0070f3",
      successLight: "#3291ff",
      successDark: "#0366d6",
      error: "#e00",
      errorLight: "#ff1a1a",
      errorDark: "#c00",
      warning: "#f5a623",
      warningLight: "#f7b955",
      warningDark: "#f49b0b",
    },
    extend: {},
  },
  plugins: [],
};
