import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#021627", 900: "#042A4C", 800: "#053A66", 700: "#0A4C82" },
        amber: { DEFAULT: "#FFB700", deep: "#E5A400" },
        wa: { DEFAULT: "#25D366", dark: "#128C4A" },
        dim: "#9DB4C8",
        ink: "#EAF2FA",
      },
      fontFamily: {
        display: ["Archivo", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      borderColor: { line: "rgba(255,255,255,.09)" },
    },
  },
  plugins: [],
};
export default config;
