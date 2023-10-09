/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Josefin: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        img: "linear-gradient(225deg, rgba(85, 150, 255, 0.75) 0%, rgba(172, 45, 235, 0.75) 100%), url('/src/assets/bg_img2.png')",
      },
      boxShadow: {
        todoLists: "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",
      },
    },
  },
  plugins: [],
};
