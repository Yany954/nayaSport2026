/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A192F',
        cyan: {
          400: '#00D4FF',
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'slideDown': 'slideDown 0.3s ease-out',
        'fadeIn': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
