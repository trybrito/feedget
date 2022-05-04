module.exports = {
  content: ["./src/**/*.{tsx, css}"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#996dff",
          500: "#8257e6",
        },
        theme: {
          900: "#09090a",
        },
      },
      borderRadius: {
        md: "4px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
