/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B14',
          900: '#0B1325',
          850: '#101A30',
          800: '#16223D',
          700: '#203154',
          600: '#2D4472',
        },
        gold: {
          100: '#FBF5E6',
          200: '#F5E6BF',
          300: '#EBD292',
          400: '#DFB76C',
          500: '#C5A059',
          600: '#A98440',
          700: '#87672D',
          800: '#644A1E',
          900: '#433113',
        },
        cream: {
          50: '#FDFCF7',
          100: '#FAF7ED',
          200: '#F3EEDB',
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'Merriweather', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(197, 160, 89, 0.3)',
        'luxury': '0 20px 40px -15px rgba(11, 19, 37, 0.12), 0 0 1px 1px rgba(197, 160, 89, 0.15)',
        'elevated': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
