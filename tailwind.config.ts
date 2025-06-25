import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        v4: {
          red: {
            DEFAULT: '#e50914',
            dark: '#b20710',
            darker: '#80050b',
            darkest: '#400306',
          },
          light: {
            DEFAULT: '#ffffff',
            gray1: '#e5e5e5',
            gray2: '#cccccc',
            gray3: '#b3b3b3',
          },
          dark: {
            gray1: '#333333',
            gray2: '#262626',
            gray3: '#1a1a1a',
            black: '#000000',
          },
        },
        primary: '#e50914',
        secondary: '#b20710',
        background: '#1a1a1a',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        display: ['"Proxima Nova"', '"Montserrat"', 'sans-serif'],
        body: ['"Montserrat"', 'sans-serif'],
      },
      fontSize: {
        h1: ['72px', '58px'],
        h2: ['60px', '58px'],
        h3: ['22px', '29px'],
        h4: ['18px', '20px'],
        p: ['16px', '18px'],
      },
    },
  },
  plugins: [],
}

export default config
