/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "custom-blue": "rgba(25, 40, 78, 1)",
        "custom-lightBlue": "#0E77891A",

        "custom-purple": "rgba(14, 119, 137, 1)",
        "custom-blue1": "#3C5A85",
        "custom-grey": "#8C8787",
        offwhite: "#eaeaea",
        aboutustext: "#8C8888",
        "custom-white": "#FFFFFF",
        "primaryText":"#0E7789",
        "dottedBorder":"#3C5A85",
        "webHeading":"#1B2B4E",
        "webDescrip" : "#8C8787",
        "btnGroup":"#E1ECF1",
        "fromclr":"#0E7789",
        "toclr":"#3C5A85",
        "firstProcess":"#30D1C7",
        "checks":"#25324B",
        'backgroundColor':"#f8f9fc"
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      borderWidth: {
        "custom-border-w-3": "8px", // Add custom border width here, adjust as needed
      },
      keyframes: {
        moveBorder: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(100%) translateY(0)" },
          "50%": { transform: "translateX(100%) translateY(100%)" },
          "75%": { transform: "translateX(0) translateY(100%)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
      },
      animation: {
        moveBorder: "moveBorder 1.5s infinite alternate",
      },
    },
  },
  plugins: [],
};
