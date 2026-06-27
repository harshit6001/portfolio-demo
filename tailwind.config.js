/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0f172a',
          900: '#0f1419',
          800: '#1e293b',
        },
        cyan: {
          400: '#06b6d4',
          500: '#06b6d4',
        },
      },
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        'xl': '40px',
      },
    },
  },
  plugins: [],
}
