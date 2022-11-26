import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { DefaultSeo } from 'next-seo'

import '../styles/global.css'
import SEO from '../../next-seo.config'

import { AppProps } from 'next/app'
import Analytics from '../components/Analytics'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="GYTUrblSkAZ6M6IL-3hOQplFb__ei46ySGHOgqxKuow"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <NextNProgress color="#cc79a7" />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default App
