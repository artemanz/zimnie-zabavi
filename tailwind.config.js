/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "0.75rem",
    },
    extend: {
      screens: {
        xl: "1324px",
      },
      fontFamily: {
        primary: "Circe, sans-serif",
      },
      maxWidth: {
        "container-sm": "20rem",
        "container-lg": "60rem",
        "container-xl": "81.25rem",
      },
      colors: {
        base: "#003C96",
        "base-2": "#6396D1",
        "base-3": "#1B5BBA",
        "base-4": "#84BAF8",
        accent: "#84BC2C ",
        neutral: "#EBEBEB",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        slideUp: "slideUp 500ms ease-in-out",
      },
    },
  },
  plugins: [],
};
