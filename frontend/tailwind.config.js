/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bricolage Grotesque', 'Georgia', 'sans-serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#F2B705',
          deep: '#C98F00',
          soft: '#FFF4CC',
        },
        leaf: {
          DEFAULT: '#1E6B3C',
          deep: '#124A28',
          soft: '#E2F1E7',
        },
        surface: '#F7F8F4',
        line: '#E1E5DC',
        ink: '#1F2528',
        mute: '#59636A',
        turn: '#B98A00',
      },
    },
  },
  plugins: [],
}
