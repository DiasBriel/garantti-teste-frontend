module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#273D6B",
        orange: "#EFAD0B",
        yellow: "#F6CE3B",
        black: "#292929",
        grey: "#C4C4C4",
        lightGrey: "#FBFBFB",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Poppins", "serif"],
      },
    },
    screens: {
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
