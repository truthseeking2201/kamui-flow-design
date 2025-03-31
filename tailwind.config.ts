
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        kamui: {
          accent: "#7DF9FF",    // Bright cyan 
          purple: "#9b87f5",    // Primary brand color
          teal: "#00FFDD",      // Secondary accent
          indigo: "#7466EE",    // Darker purple
          pink: "#D946EF",      // Highlight accent
          dark: "#0D1117",      // Primary background
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
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
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.6",
            filter: "blur(10px)"
          },
          "50%": {
            opacity: "1",
            filter: "blur(15px)"
          }
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-10px)"
          }
        },
        "glow": {
          "0%, 100%": {
            boxShadow: "0 0 15px rgba(125, 249, 255, 0.5)"
          },
          "50%": {
            boxShadow: "0 0 30px rgba(125, 249, 255, 0.8)"
          }
        },
        "glow-purple": {
          "0%, 100%": {
            boxShadow: "0 0 15px rgba(155, 135, 245, 0.5)"
          },
          "50%": {
            boxShadow: "0 0 30px rgba(155, 135, 245, 0.8)"
          }
        },
        "glow-teal": {
          "0%, 100%": {
            boxShadow: "0 0 15px rgba(0, 255, 221, 0.5)"
          },
          "50%": {
            boxShadow: "0 0 30px rgba(0, 255, 221, 0.8)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
        "glow-purple": "glow-purple 3s ease-in-out infinite",
        "glow-teal": "glow-teal 3s ease-in-out infinite",
      },
      textColor: {
        gradient: {
          master: 'bg-gradient-to-br from-kamui-accent via-kamui-teal to-blue-400 bg-clip-text text-transparent',
          intelligence: 'bg-gradient-to-br from-kamui-teal via-kamui-purple to-blue-500 bg-clip-text text-transparent',
          user: 'bg-gradient-to-br from-kamui-purple via-kamui-pink to-kamui-accent bg-clip-text text-transparent'
        }
      },
      boxShadow: {
        'neon-accent': '0 0 15px rgba(125, 249, 255, 0.3)',
        'neon-purple': '0 0 15px rgba(155, 135, 245, 0.3)',
        'neon-teal': '0 0 15px rgba(0, 255, 221, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'inner-glow': 'inset 0 0 15px rgba(125, 249, 255, 0.15)',
        'inner-glow-purple': 'inset 0 0 15px rgba(155, 135, 245, 0.15)',
        'inner-glow-teal': 'inset 0 0 15px rgba(0, 255, 221, 0.15)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
