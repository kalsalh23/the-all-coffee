/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3E2723",
        secondary: "#F5F0E6",
        accent: "#C89B3C",
        success: "#2E7D32",
        danger: "#C62828",
        text: "#1A1A1A",
        muted: "#6B6B6B",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
}
