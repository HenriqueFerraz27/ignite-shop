import { styled } from '@/styles'
import { pxToRem } from '@/utils/pxToRem'

export const Container = styled('div', {
  maxWidth: pxToRem(1440),
  width: '88%',
  margin: 'auto',

  '@media (min-width: 768px)': {
    width: '80%',
  },
})
