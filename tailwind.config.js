/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#080807',
          secondary: '#131513',
        },
        card: '#2A2A24',
        accent: {
          DEFAULT: '#544231',
          light: '#7A624A',
          glow: 'rgba(84, 66, 49, 0.35)',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}