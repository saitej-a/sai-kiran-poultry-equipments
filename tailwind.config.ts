import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#121614",
          soft: "#3B423D",
          mute: "#6B726B",
        },
        paper: {
          DEFAULT: "#F4F3EE",
          deep: "#EAE8E0",
          card: "#FBFBF8",
        },
        line: {
          DEFAULT: "#D8D5CA",
          strong: "#BFBCAF",
          dark: "#2A302C",
        },
        brand: {
          50: "#EEF4F0",
          100: "#D9E7DE",
          200: "#B4D0C1",
          300: "#84B29C",
          400: "#4E9077",
          500: "#1C7A5B",
          600: "#0F6A4E",
          700: "#0B5540",
          800: "#093F31",
          900: "#062A22",
        },
        steel: "#C7C3B6",
        clay: "#A85B3A",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        micro: ["10.5px", { lineHeight: "1.25", letterSpacing: "0.16em" }],
        caption: ["12px", { lineHeight: "1.4", letterSpacing: "0.01em" }],
        body: ["15px", { lineHeight: "1.65" }],
        lead: ["17px", { lineHeight: "1.6" }],
      },
      maxWidth: {
        shell: "1280px",
      },
      borderRadius: {
        DEFAULT: "6px",
        card: "8px",
        panel: "10px",
      },
      boxShadow: {
        lift: "0 1px 0 rgba(18,22,20,0.04), 0 12px 28px -18px rgba(18,22,20,0.35)",
      },
      transitionTimingFunction: {
        craft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        airflow: {
          from: { strokeDashoffset: "0" },
          to: { strokeDashoffset: "-160" },
        },
      },
      animation: {
        airflow: "airflow 9s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
