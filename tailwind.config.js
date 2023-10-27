/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        default: {
          background: colors.zinc[300],
          foreground: colors.zinc[600], // text color
        },
        colors: {
          background: "#FFFFFF", // or DEFAULT
          foreground: "#11181C", // or 50 to 900 DEFAULT
          primary: {
            foreground: "#FFFFFF",
            DEFAULT: colors.purple[500],
          },
          secondary: {
            foreground: colors.gray[200],
            DEFAULT: colors.pink[400],
          },
          success: {
            foreground: "#FFFFFF",
            DEFAULT: colors.emerald[400],
          },
        },
      },
    },
  })],
}
