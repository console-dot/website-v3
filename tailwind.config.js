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
        "footer-color" : "#14213D",
        "custom-purple": "rgba(14, 119, 137, 1)",
        "custom-blue1": "#3C5A85",
        "custom-grey": "#8C8787",
        aboutustext: "#8C8888",
        "custom-white": "#FFFFFF",
        primaryText: "#0E7789",
        dottedBorder: "#3C5A85",
        webHeading: "#1B2B4E",
        webDescrip: "#8C8787",
        btnGroup: "#E1ECF1",
        fromclr: "#0E7789",
        footerBg: "#273C69",
        toclr: "#3C5A85",
        firstProcess: "#30D1C7",
        webdevHover: "#30B1C7",
        checks: "#25324B",
        backgroundColor: "#f8f9fc",
        // offwhite: "#eaeaea",
        offwhite: "#f8f9fc",
      },
      safelist: [
        "animate-[fade-in_1s_ease-in-out]",
        "animate-[fade-in-down_1s_ease-in-out]",
      ],
      screens: {
        xxs: "2px",
        xss: "360px", // Correct
        // xs: "320px",
        xs: "475px",
        sm: "640px", // Correct
        md: "768px", // Correct
        lg: "1024px", // Correct
        "2lg": "1163px", // Correct
        // tech: "540px",
        xl: "1280px", // Correct
        "2xl": "1536px", // Correct
        "3xl": "1868px", // Correct
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
