/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "greyscale-50": "#f8fafc",
        "additional-white": "#fff",
        "greyscale-900": "#0f172a",
        "greyscale-100": "#f1f5f9",
        "greyscale-500": "#64748b",
        crimson: "#eb2554",
        "primary-600-base": "#2563eb",
        yellowgreen: "#d8db4c",
        darkturquoise: "#25dfeb",
        mediumpurple: "#b586f1",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#d6e3db",
          "300": "#e3d9de",
        },
        "additional-sky": "#38bdf8",
        "greyscale-200": "#e2e8f0",
        gray: {
          "100": "rgba(15, 23, 42, 0.7)",
          "200": "rgba(15, 23, 42, 0.2)",
        },
        "greyscale-300": "#cbd5e1",
        "additional-emerald": "#34d399",
        "secondary-glamour-pink-50": "#fdf2f8",
        "secondary-glamour-pink-500-base": "#ed4f9d",
        "secondary-algal-fuel-50": "#f0fdf4",
        "secondary-algal-fuel-500-base": "#24d164",
        "primary-50": "#eff6ff",
      },
      spacing: {},
      fontFamily: {
        "body-small-semibold": "Inter",
      },
      borderRadius: {
        "31xl": "50px",
        "981xl": "1000px",
      },
    },
    fontSize: {
      xs: "12px",
      mini: "15px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
