/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F4EFEA',
          300: '#EDE4D8',
          400: '#E4D9C7',
        },
        sand: {
          100: '#F6F2EB',
          200: '#ECE5D8',
          300: '#E2D8C5',
          400: '#D5C8AF',
          500: '#C2B294',
        },
        olive: {
          50: '#F5F6F2',
          100: '#E6E9DF',
          200: '#CBD2BE',
          300: '#AAB597',
          400: '#8A9773',
          500: '#6B7A54',
          600: '#586545',
          700: '#465037',
          800: '#383F2C',
          900: '#2A3022',
          950: '#1D2217',
        },
        charcoal: {
          800: '#232620',
          900: '#1A1C17',
          950: '#141612',
        },
        gold: {
          400: '#D6BA85',
          500: '#C6A76E',
          600: '#B08E55',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'card': '0 12px 36px rgba(42, 48, 34, 0.08)',
        'floating': '0 20px 40px rgba(26, 28, 23, 0.12)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
