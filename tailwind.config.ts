import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "var(--c-black)",
        "black-rgb": "rgb(var(--c-black-rgb))",
        berry: "var(--c-berry)",
        "berry-rgb": "rgb(var(--c-berry-rgb))",
        purple: "var(--c-purple)",
        "purple-rgb": "rgb(var(--c-purple-rgb))",
        grey: "var(--c-grey)",
        "grey-rgb": "rgb(var(--c-grey-rgb))",
        "grey-dark": "var(--c-grey-dark)",
        "grey-dark-rgb": "rgb(var(--c-grey-dark-rgb))",
      },
    },
  },
  plugins: [],
} satisfies Config;