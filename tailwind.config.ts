/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '/src/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    safelist: [
      { pattern: /bg-\[url\(.+\)\]/ },
    ],
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        gochiHand: ['Gochi Hand', 'sans-serif'],
        mono: ['"Source Code Pro"', "monospace"]
      },
      colors: {
        "neutral": {
          "50": "#f8f8f8",
          "100": "#e0e0e0",
          "200": "#c7c7c7",
          "300": "#aeaead",
          "400": "#949494",
          "500": "#7b7b7b",
          "600": "#626262",
          "700": "#484848",
          "800": "#303030",
          "900": "#181818",
          "950": "#000000"
        },
        "primary": {
          "50": "#eae2ff",
          "100": "#cec2e6",
          "200": "#ac92cc",
          "300": "#8a62b3",
          "400": "#683f99",
          "500": "#4a197f",
          "600": "#3a1466",
          "700": "#2b0f4c",
          "800": "#1c0933",
          "900": "#0e0420"
        },
        "secondary": {
          "50": "#e0f2ff",
          "100": "#b3d8ff",
          "200": "#80bdff",
          "300": "#4da2ff",
          "400": "#1a87ff",
          "500": "#006ded",
          "600": "#005dbd",
          "700": "#004c8e",
          "800": "#003b5e",
          "900": "#00293f"
        },
        "accent": {
          "50": "#e0f9f3",
          "100": "#b3ede4",
          "200": "#80e1d3",
          "300": "#4dd5c2",
          "400": "#1ac9b1",
          "500": "#00b199",
          "600": "#009080",
          "700": "#006d66",
          "800": "#00594d",
          "900": "#004433"
        }
      }
    }
  },
  plugins: []
};