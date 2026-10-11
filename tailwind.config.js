import plugin from 'tailwindcss/plugin'
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { p5red: '#e60012', p5dark: '#8b0000', p5black: '#0a0a0a' },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        body: ['"Barlow Condensed"', 'Arial Narrow', 'sans-serif'],
      },
      keyframes: {
        flicker: { '0%,100%': { opacity: 1 }, '92%': { opacity: 1 }, '94%': { opacity: .4 }, '96%': { opacity: 1 }, '98%': { opacity: .6 } },
        glitch: { '0%,100%': { transform: 'translate(0)' }, '20%': { transform: 'translate(-3px,2px)' }, '40%': { transform: 'translate(3px,-2px)' }, '60%': { transform: 'translate(-2px,-1px)' } },
      },
      animation: { flicker: 'flicker 4s infinite', glitch: 'glitch .3s steps(2) infinite' },
    },
  },
  plugins: [
    // Diagonal game shapes
    plugin(({ addUtilities }) =>
      addUtilities({
        '.clip-slant': { clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)' },
        '.clip-card': { clipPath: 'polygon(4% 0, 100% 0, 96% 100%, 0 100%)' },
        '.clip-btn': { clipPath: 'polygon(6% 0, 100% 0, 94% 100%, 0 100%)' },
        '.clip-hero': { clipPath: 'polygon(0 0, 62% 0, 38% 100%, 0 100%)' },
        '.clip-tag': { clipPath: 'polygon(0 0, 100% 0, 88% 100%, 0 100%)' },
        '.clip-star': { clipPath: 'polygon(50% 0, 62% 38%, 100% 38%, 69% 60%, 80% 100%, 50% 75%, 20% 100%, 31% 60%, 0 38%, 38% 38%)' },
      })
    ),
  ],
}
