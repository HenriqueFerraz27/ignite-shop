import { styled } from '@/styles'
import { pxToRem } from '@/utils/pxToRem'

export const Home = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100dvw - ((100dvw - 1184px) /2))',
  marginLeft: 'auto',
})

export const Product = styled('a', {
  position: 'relative',
  padding: pxToRem(120),
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: pxToRem(8),
  cursor: 'pointer',
  overflow: 'hidden',

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: pxToRem(8),
    left: pxToRem(8),
    right: pxToRem(8),
    padding: pxToRem(32),
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    borderRadius: pxToRem(8),
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.1s ease-out',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
})
