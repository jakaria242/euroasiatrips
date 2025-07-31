/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
            colors: {
        "headBg": "#F9F3EF",

      },
            backgroundImage: {
        'custom-blue-gradient': 'linear-gradient(180deg, #00AEEF 0%, #2D51A3 100%)',
         'custom-gradient': 'linear-gradient(to bottom, transparent, #01080faf)',
      },
      maxWidth: {
        container: "1320px",
      },
      fontFamily: {
        marcellus: "Marcellus, serif",
        dmSans: "DM Sans, sans-serif",
        satisfy: "Satisfy, cursive",
      },
    },
    screens: {
      xs: "400px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1920px",
    },
  },
  plugins: [],
};
