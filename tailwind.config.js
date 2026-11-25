/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070b12',
          900: '#0b111a',
          850: '#101824',
          800: '#16202e',
          700: '#212f42',
        },
        agro: {
          400: '#4ade80',
          500: '#2ea043',
          600: '#238636',
          700: '#196127',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
