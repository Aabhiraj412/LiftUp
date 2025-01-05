/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1d4ed8",
          secondary: "#9333ea",
          accent: "#22d3ee",
          neutral: "#111827",
          "base-100": "#ffffff",
          info: "#3b82f6",
          success: "#16a34a",
          warning: "#f59e0b",
          error: "#dc2626",
        },
        dark: {
          primary: "#1e40af",
          secondary: "#7c3aed",
          accent: "#0ea5e9",
          neutral: "#f3f4f6",
          "base-100": "#1f2937",
          info: "#60a5fa",
          success: "#10b981",
          warning: "#fbbf24",
          error: "#f87171",
        },
      },
    ],
    darkTheme: "dark", // Default dark theme
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}

