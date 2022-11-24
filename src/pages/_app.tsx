import NextNProgress from 'nextjs-progressbar'
import { DefaultSeo } from 'next-seo'

import '../styles/global.css'
import SEO from '../../next-seo.config'

import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <NextNProgress color="#cc79a7" />
      <Component {...pageProps} />
    </>
  )
}

export default App
