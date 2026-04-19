import type { Config } from "tailwindcss";
import medxPlugins from "./theme/tailwind.plugins.cjs";
import medxTheme from "./theme/tailwind.theme.cjs";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: medxTheme,
  plugins: medxPlugins,
} satisfies Config;

export default config;
