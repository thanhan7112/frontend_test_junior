import daisyui from 'daisyui'
import lightThemeDefault from 'daisyui/src/theming/themes'
import fs from 'fs'
import path from 'path'

const tailwindColorCustomize = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src/assets/design-token-color/tailwind-color.json'), 'utf8')
)

const lightDaisyUICustomize = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src/assets/design-token-color/light-daisyui.json'), 'utf8')
)

const darkDaisyUICustomize = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src/assets/design-token-color/dark-daisyui.json'), 'utf8')
)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'lds-spinner': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'lds-spinner': 'lds-spinner 1.2s linear infinite'
      },
      boxShadow: {
        center: '0px 2px 8px rgba(99, 99, 99, 0.2)'
      },
      colors: {
        ...tailwindColorCustomize
      }
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          ...lightThemeDefault['light'],
          primary: lightDaisyUICustomize['--brand-bg-1-rest'],
          'primary-content': lightDaisyUICustomize['--neutral-fg-onbrand-rest'],
          'secondary-content': lightDaisyUICustomize['--neutral-fg-2-rest'],
          'base-100': lightDaisyUICustomize['--neutral-bg-1-rest'],
          'base-content': lightDaisyUICustomize['--neutral-fg-1-rest'],

          'base-200': lightDaisyUICustomize['--neutral-bg-2-rest'],
          'base-300': lightDaisyUICustomize['--neutral-bg-3-rest'],
          'success-content': lightDaisyUICustomize['--status-success-fg-1-rest'],
          'error-content': lightDaisyUICustomize['--status-danger-fg-1-rest'],
          ...lightDaisyUICustomize, //Token Color for Design
          '--mask-map-flow': 'rgba(126,107,107,0.7)'
        }
      },
      {
        dark: {
          ...lightThemeDefault['dark'],
          primary: darkDaisyUICustomize['--brand-bg-1-rest'],
          'primary-content': darkDaisyUICustomize['--neutral-fg-onbrand-rest'],
          'secondary-content': darkDaisyUICustomize['--neutral-fg-2-rest'],
          'base-100': darkDaisyUICustomize['--neutral-bg-1-rest'],
          'base-content': darkDaisyUICustomize['--neutral-fg-1-rest'],

          'base-200': darkDaisyUICustomize['--neutral-bg-2-rest'],
          'base-300': darkDaisyUICustomize['--neutral-bg-3-rest'],
          'success-content': darkDaisyUICustomize['--status-success-fg-1-rest'],
          'error-content': darkDaisyUICustomize['--status-danger-fg-1-rest'],
          ...darkDaisyUICustomize, //Token Color for Design
          '--mask-map-flow': 'rgba(25,17,17,0.7)'
        }
      }
    ],
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: 'ds-', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root' // The element that receives theme color CSS variables
  },
  plugins: [daisyui]
}
