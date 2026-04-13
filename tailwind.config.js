import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#07090f",
        night: "#0b1020",
        glass: "rgba(255,255,255,0.08)",
        electric: "#5eead4",
        solar: "#f8e16c",
        coral: "#ff6b6b"
      },
      boxShadow: {
        glow: "0 0 60px rgba(94, 234, 212, 0.22)",
        card: "0 28px 90px rgba(0, 0, 0, 0.34)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)"
      }
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("light-mode", "body.light-mode &");
    })
  ]
};
