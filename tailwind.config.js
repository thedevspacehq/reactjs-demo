/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // prettier-ignore
      colors: {
    "light": "#d1d5db",
    "dark": "#111827",
    "primary": "#7c3aed",
    "primary-dark": "#7e22ce",
    "primary-light": "#d8b4fe",
    "danger": "#ef4444",
    "danger-dark": "#dc2626",
    "danger-light": "#fca5a5",
  },
    },
  },
  plugins: [],
};
