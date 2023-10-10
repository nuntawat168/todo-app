/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Josefin: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "img-mobile-light":
          "linear-gradient(225deg, rgba(85, 150, 255, 0.75) 0%, rgba(172, 45, 235, 0.75) 100%), url('/src/assets/bg-img-mobile-light.png')",
        "img-mobile-dark":
          "linear-gradient(225deg, rgba(164, 35, 149, 0.75) 0%, rgba(55, 16, 189, 0.75) 100%), url('/src/assets/bg-img-mobile-dark.png')",
        "img-desktop-light":
          "linear-gradient(225deg, rgba(85, 150, 255, 0.75) 0%, rgba(172, 45, 235, 0.75) 100%), url('/src/assets/bg-img-desktop-light.png')",
        "img-desktop-dark":
          "linear-gradient(225deg, rgba(164, 35, 149, 0.75) 0%, rgba(55, 16, 189, 0.75) 100%), url('/src/assets/bg-img-desktop-dark.png')",
      },
      boxShadow: {
        light: "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",
        dark: "0px 35px 50px -15px rgba(0, 0, 0, 0.5)",
      },
      backgroundPosition: {
        "top-ice": "center bottom",
      },
    },
  },
  plugins: [],
};
