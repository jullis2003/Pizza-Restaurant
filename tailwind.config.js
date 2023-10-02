/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue, js, css, html}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1120px",
        },
      },

      screens: {
        sm: "320px",
        md: "768px",
        lg: "1120px",
        xl: "1440px",
      },

      backgroundColor: {
        "hero-text-bg": "rgba(236, 236, 236, 0.7)",
      },
    },
    plugins: [],
  },
};
