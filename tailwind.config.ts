import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDFBF7",          // Alabaster White - clean, ultra-luxury, high-end gallery neutral
        surface: "#F5F1E6",             // Travertine Champagne - warm stone texture for panels and cards
        "text-primary": "#181615",      // Obsidian Black - a deep charcoal with a touch of warm luxury ash
        "text-muted": "#756E63",        // Satin Bronze - warm grey-bronze for secondary typography
        "gold-accent": "#C2A261",       // Polished Gold - a brilliant satin metallic gold that looks expensive and bright
        "secondary-accent": "#54152A",  // Cartier Red / Cabernet Burgundy - a regal, opulent crimson for luxury highlights
        border: "#E5DECD",              // Soft Champagne Border - clean, refined separations
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "50": "12.5rem",
        "100": "25rem",
        "120": "30rem",
        "140": "35rem",
      },
      transitionDuration: {
        "400": "400ms",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
