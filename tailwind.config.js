/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        strong_cyan: "hsl(171, 66%, 44%)",
        light_blue: "hsl(233, 100%, 69%)",
        dark_grayish_blue: "hsl(210, 10%, 33%)",
        grayish_blue: "hsl(201, 11%, 66%)",
      },
    },
  },
  plugins: [],
};
