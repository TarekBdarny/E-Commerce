/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        "primary-hover": "#38bdf8",
        "sub-title": "#57534e",
        disabled: "#0c4a6e",
        "nav-background": "#0c0a09", //v
        "text-color": "#292524", // v
        "main-bg": "#e7e5e4", //v
        accent: "#fafaf9",
      },
      backgroundImage: {
        "credit-cart-front": "url('/bg-card-back.png')",
        "credit-cart-back": "url('/img/bg-card-front.png')",
        "main-desktop": "url('/img/bg-main-desktop.png')",
        "main-mobile": "url('/img/bg-main-mobile.png')",
      },
    },
  },
  plugins: [daisyui, "prettier-plugin-tailwindcss"],
  daisyui: {
    themes: false,
  },
};
