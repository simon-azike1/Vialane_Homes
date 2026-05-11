/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:    { DEFAULT: '#0F1E3C', deep: '#080F1E', mid: '#152847' },
        gold:    { DEFAULT: '#C9973B', light: '#DDB96A', pale: '#F2E4C4', ultra: '#FBF5E6' },
        terra:   { DEFAULT: '#B84F2A', pale: '#F5E0D5' },
        cream:   { DEFAULT: '#F6F1E9', off: '#FDFAF5' },
        ink:     { DEFAULT: '#18110A', mid: '#3E3328', muted: '#7A6E61' },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
    },
  },
  plugins: [],
};