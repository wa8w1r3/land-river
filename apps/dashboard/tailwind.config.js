const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#2CA388",
        "primary-dark": "#106B6B",
        secondary: "#A6D683",
      },
      height: {
        "40v": "40vh",
        "50v": "50vh",
      },
    },
  },
};
