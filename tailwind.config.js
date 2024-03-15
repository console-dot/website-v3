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
        "custom-purple": "rgba(14, 119, 137, 1)",
      },
    },
    screens: {
      xs: "320px",
      // => @media Custom 'xs' breakpoint

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
