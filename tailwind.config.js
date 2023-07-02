/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BeauSans:
          "PF BeauSans Pro ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
      },

      colors: {
        white: "#fff",
        bleck: "#121212",
        grayF: "#A7A7A7",
        greenF: "#4FBC5B",
        red: "#E63739",
        lightBlack: "#302F2F",
      },

      screens: {
        minMobil:'320px',
        mobil: "480px",
        // mobil

        tablet: "768px",
        // => @media (min-width: 640px)

        laptop: "1024px",
        // => @media (min-width: 1024px)

        desktop: "1280px",
        // => @media (min-width: 1280px)
      },
    },
    screens: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
