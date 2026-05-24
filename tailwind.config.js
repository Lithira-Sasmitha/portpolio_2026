/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00d4ff",
        secondary: "#7b2fff",
        accent: "#00fff2",
        dark: "#030308",
        "dark-2": "#0a0a1a",
        "dark-3": "#0f0f2a",
        "dark-card": "rgba(255,255,255,0.03)",
        neon: {
          blue: "#00d4ff",
          purple: "#7b2fff",
          cyan: "#00fff2",
          orange: "#ff6b35",
          pink: "#ff2d78",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "galaxy": "radial-gradient(ellipse at 50% 0%, rgba(123,47,255,0.15) 0%, rgba(0,212,255,0.05) 40%, transparent 70%)",
        "glow-blue": "radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)",
        "glow-purple": "radial-gradient(circle, rgba(123,47,255,0.3) 0%, transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
        "cursor-ping": "cursorPing 1.5s ease-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6", filter: "blur(20px)" },
          "50%": { opacity: "1", filter: "blur(30px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        cursorPing: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.2)",
        "glow-purple": "0 0 20px rgba(123,47,255,0.5), 0 0 40px rgba(123,47,255,0.2)",
        "glow-cyan": "0 0 20px rgba(0,255,242,0.5), 0 0 40px rgba(0,255,242,0.2)",
        "glow-sm": "0 0 10px rgba(0,212,255,0.3)",
        "card": "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,212,255,0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
