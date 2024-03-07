import Image from 'next/image'
import * as S from './styles'
import Link from 'next/link'

const logoIgniteShopHorizontal = '/images/logos/ignite-shop-horizontal.svg'

export const Header = () => {
  return (
    <S.Header>
      <Link href='/'>
        <Image
          src={logoIgniteShopHorizontal}
          alt='Logo - Ignite Shop'
          width={146}
          height={52}
        />
      </Link>
    </S.Header>
  )
}
