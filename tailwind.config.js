/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#f5f7fa',
        section: '#ffffff',
        card: '#ffffff',
        border: '#e5e7eb',
        primary: {
          DEFAULT: '#22c55e', // Light green
          hover: '#16a34a',
        },
        secondary: {
          DEFAULT: '#3b82f6', // Light blue
          hover: '#2563eb',
        },
        text: {
          primary: '#111827',
          secondary: '#4b5563',
          muted: '#6b7280',
        }
      },
      transitionDuration: {
        250: '250ms',
      },
      maxWidth: {
        '8xl': '1400px',
        '9xl': '1600px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'typing': 'typing 3s steps(20) infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
