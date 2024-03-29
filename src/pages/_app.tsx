import { Header } from '@/components'
import { Container } from '@/styles/pages/app'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  )
}
