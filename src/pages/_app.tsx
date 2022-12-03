import { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import NextNProgress from 'nextjs-progressbar'
import { DefaultSeo } from 'next-seo'

import '../styles/global.css'
import SEO from '../../next-seo.config'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

import Analytics from '../components/Analytics'

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <DefaultSeo {...SEO} />
      <NextNProgress color="#cc79a7" />
      <Component {...pageProps} />
      <Analytics />
    </main>
  )
}

export default App
