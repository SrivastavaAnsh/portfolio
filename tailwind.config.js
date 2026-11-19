/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0C0C0C",
        secondary: "#8A99A5",
        tertiary: "#14171B",
        frost: "#D7E2EA",
        "black-100": "#101318",
        "black-200": "#080A0C",
        accent: {
          DEFAULT: "#B600A8",
          glow: "#D900C7",
          cyan: "#4E8CF9",
          green: "#10A37F",
        },
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        sans: ["Kanit", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
