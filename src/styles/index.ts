import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
  prefix,
  reset,
} = createStitches({
  theme: {
    colors: {
      brand100: '#00B37E',
      brand200: '#00875F',

      white: '#FFFFFF',

      gray100: '#CCCCCC',
      gray200: '#333333',

      black: '#000000',
    },
    fonts: {
      roboto: 'Roboto',
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
  },
})
