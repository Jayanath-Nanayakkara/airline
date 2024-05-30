/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "custom-40": "40px",
      },
      padding: {
        30: "30px",
        40: "40px",
      },
      backgroundImage: {
        "custom-image": "url('/src/assets/background-image.jpg')",
      },
      colors: {
        "custom-hsla-1": "hsla(2, 0%, 36%, 1)",
        "custom-hsla-2": "hsla(1, 29%, 87%, 0)",
        "custom-hsla-3": "hsla(0, 212%, 255%, 0.398)",
      },
    },
  },
  plugins: [],
};
