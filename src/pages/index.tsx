import Image from 'next/image'
import * as S from '@/styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
const tShirt1 = '/images/t-shirts/1.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 2.5, spacing: 48 },
  })

  return (
    <S.Home ref={sliderRef} className='keen-slider'>
      <S.Product className='keen-slider__slide'>
        <Image src={tShirt1} alt='T-Shirt 1' width={420} height={420} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product className='keen-slider__slide'>
        <Image src={tShirt1} alt='T-Shirt 1' width={420} height={420} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product className='keen-slider__slide'>
        <Image src={tShirt1} alt='T-Shirt 1' width={420} height={420} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product className='keen-slider__slide'>
        <Image src={tShirt1} alt='T-Shirt 1' width={420} height={420} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
    </S.Home>
  )
}
