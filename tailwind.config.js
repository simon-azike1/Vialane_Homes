/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0F1E3C',
          deep:    '#080F1E',
          mid:     '#152847',
        },
        gold: {
          DEFAULT: '#C9973B',
          light:   '#DDB96A',
          pale:    '#F2E4C4',
          ultra:   '#FBF5E6',
        },
        cream: {
          DEFAULT: '#F6F1E9',
          off:     '#FDFAF5',
        },
        ink: {
          DEFAULT: '#18110A',
          mid:     '#3E3328',
          muted:   '#7A6E61',
        },
        wa: '#25D366',
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem', letterSpacing: '0.1em' }],
      },
      animation: {
        rise: 'rise 0.8s ease forwards',
        bob:  'bob 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};