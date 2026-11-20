/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#050A09',
          secondary: '#08120F',
          forest: '#0B1E18',
        },
        emerald: {
          base: '#15966C',
          glow: 'rgba(21, 150, 108, 0.25)',
        },
        mint: {
          primary: '#48E7A8',
          bright: '#63F0B9',
          dim: 'rgba(72, 231, 168, 0.7)',
        },
        text: {
          primary: '#F2F5F3',
          secondary: '#B8C7C0',
          muted: '#71877C',
        },
        border: {
          technical: 'rgba(72, 231, 168, 0.15)',
          subtle: 'rgba(72, 231, 168, 0.08)',
          highlight: 'rgba(72, 231, 168, 0.35)',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 6s ease-in-out infinite',
        'line-pulse': 'linePulse 4s ease-in-out infinite',
        'glow-shift': 'glowShift 8s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.28' },
        },
        linePulse: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.6' },
        },
        glowShift: {
          '0%': { transform: 'scale(1) translate(0px, 0px)', opacity: '0.85' },
          '100%': { transform: 'scale(1.08) translate(15px, 10px)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
