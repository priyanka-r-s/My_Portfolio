/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: '#FFFDF0',
          100: '#FEF9C3',
          200: '#FEEAA1',
          300: '#FDD868',
          400: '#F8C52E',
          500: '#F4B41A',
          600: '#E09F0D',
          700: '#B87B07',
        },
        brandYellow: {
          50: '#FFFDF0',
          100: '#FEF9C3',
          200: '#FEEAA1',
          300: '#FDD868',
          400: '#F8C52E',
          500: '#F4B41A',
          600: '#E09F0D',
          700: '#B87B07',
        },
        brandDark: {
          700: '#343842',
          800: '#23262D',
          900: '#181A1E',
          950: '#121316',
        },
        brandSlate: {
          600: '#4D5564',
          700: '#3D4450',
          800: '#2C323B',
          900: '#1F242C',
        },
        brandLight: {
          50: '#FAFAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
        },
        charcoal: {
          700: '#343842',
          800: '#23262D',
          900: '#181A1E',
          950: '#121316',
        },
        gold: {
          400: '#F8C52E',
          500: '#F4B41A',
          600: '#E09F0D',
        }
      },
      fontFamily: {
        display: ['"Outfit"', '"Syne"', 'system-ui', 'sans-serif'],
        syne: ['"Syne"', '"Outfit"', 'system-ui', 'sans-serif'],
        serif: ['"Outfit"', '"Playfair Display"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'card': '0 12px 36px rgba(18, 19, 22, 0.08)',
        'floating': '0 20px 40px rgba(18, 19, 22, 0.16)',
        'yellow-glow': '0 0 25px rgba(244, 180, 26, 0.35)',
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
