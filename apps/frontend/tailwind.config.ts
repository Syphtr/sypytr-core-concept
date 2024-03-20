import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/abstract.jpg')",
        "hero-pattern-alternative": "url('/alternative.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
