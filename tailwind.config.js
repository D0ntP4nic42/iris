/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  daisyui: {
    themes: [
      {
        irisWhite: {

          "primary": "#155BCB",

          "secondary": "#0c326f",

          "accent": "#6b7280",

          "neutral": "#303030",

          "base-100": "#ffffff",

          "info": "#e0e0e0",

          "success": "#168821",

          "warning": "#ffcd07",

          "error": "#e52207",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
}

