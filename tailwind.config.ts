import { themeDefault } from "./src/themes/themeDefault";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'coral': themeDefault.colors.coral_orange,
        'turquoise': themeDefault.colors.turquoise_blue,
        'yellow': themeDefault.colors.light_yellow,
        'lime': themeDefault.colors.lime_green,
        'salmon': themeDefault.colors.salmon_pink,
        'aqua': themeDefault.colors.aqua_green,
        'gray': {
          light: themeDefault.colors.light_gray,
          dark: themeDefault.colors.dark_gray,
        },
        'white': themeDefault.colors.pure_white,
      },
    },
  },
  plugins: [],
};

export default config;
