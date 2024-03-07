import { globalCss } from '.'

export const globalStyles = globalCss({
  '*, *:before, *:after': {
    margin: 0,
    padding: 0,
    color: '$gray100',
    fontFamily: '$roboto',
    fontWeight: '$regular',
    boxSizing: 'border-box',
    outline: '2px solid transparent',
    '-webkit-font-smoothing': 'antialiased',
  },

  '*:focus': {
    outline: '2px solid $brand100',
  },

  body: {
    color: '$gray100',
    backgroundColor: '$black',
  },

  '@media (max-width: 1024px)': {
    html: {
      fontSize: '93.75%',
    }
  },

  '@media (max-width: 768px)': {
    html: {
      fontSize: '87.5%',
    }
  },

  'ul, ol': {
    listStyle: 'none',
  },

  button: {
    backgroundColor: 'transparent',
    border: 'none',
  },

  a: {
    textDecoration: 'none',
  },

  'button, a': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },

  'strong, strong *': {
    fontWeight: '$bold',
  },
})
