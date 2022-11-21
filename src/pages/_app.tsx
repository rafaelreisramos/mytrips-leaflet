import NextNProgress from 'nextjs-progressbar'
import '../styles/global.css'

import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#cc79a7" />
      <Component {...pageProps} />
    </>
  )
}

export default App
