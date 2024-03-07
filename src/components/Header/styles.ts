import { styled } from '@/styles'
import { pxToRem } from '@/utils/pxToRem'

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  padding: `${pxToRem(40)} 0`,

  img: {
    height: `${pxToRem(52)}`,
  },
})
