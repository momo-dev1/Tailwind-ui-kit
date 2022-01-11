module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        primary: "0px 9.9px 21.6px rgba(136, 202, 41, 0.41)",
      },
    },
  },

  plugins: [require("tailwind-scrollbar")],
};
