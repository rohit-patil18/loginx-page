/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-50": "#F9F9F9",
        "neutral-100": "#F4F4F4",
        "neutral-200": "#E4E4E4",
        "neutral-300": "#D3D3D3",
        "neutral-400": "#A2A2A2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0A0A0A",
        "neutral-1000": "#000000",
        "twitter-blue-default": "#1D9BF0",
        "twitter-blue-hover": "#1871CA",
        "twitter-blue-disabled": "#1E5D87",
        "blue-wash": "rgba(117, 190, 239, 0.2)",
        "button-stroke": "#546A7A",
        "searchbar-fill": "#212327",
        "card-fill": "#16181C",
        "green-success": "#00BE74",
        "red-error": "#8B141A",
        "stroke": "rgba(29, 155, 240, 0.24)"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      padding: {
        page: "236.5px 161.936px",
      },
      borderRadius: {
        "button": "65px",
      },
      boxShadow: {
        button: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
      }
    },
  },
  plugins: [],
}