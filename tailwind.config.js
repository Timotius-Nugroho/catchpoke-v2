module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      card: "#353535",
    }),
    extend: {
      boxShadow: {
        yellow: "0 0 20px 0 rgba(235, 171, 52, 0.4)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
