import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foretext: "hsl(var(--foretext))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foretext: "hsl(var(--primary-foretext))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foretext: "hsl(var(--secondary-foretext))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foretext: "hsl(var(--destructive-foretext))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foretext: "hsl(var(--muted-foretext))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foretext: "hsl(var(--accent-foretext))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foretext: "hsl(var(--popover-foretext))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foretext: "hsl(var(--card-foretext))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config