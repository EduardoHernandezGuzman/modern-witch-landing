/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#c813ec",
        "background-light": "#f8f6f8",
        "background-dark": "#1f1022",
        cream: "#fdfbf7",
        "lavender-soft": "#f3e8ff",
        "plum-deep": "#4a1d4a",
        "rose-powder": "#fff1f2"
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"]
      },
      boxShadow: {
        glow: "0 10px 30px rgba(200, 19, 236, 0.18)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(200,19,236,0.12), transparent 40%)"
      }
    }
  },
  plugins: []
};