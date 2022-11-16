import dynamic from 'next/dynamic'
import LinkWrapper from '../components/LinkWrapper'
import { Info } from 'phosphor-react'

const Map = dynamic(() => import('../components/Map'), { ssr: false })

export default function Home() {
  return (
    <>
      <LinkWrapper href="about">
        <Info size={32} />
      </LinkWrapper>
      <Map className="h-screen w-full" />
    </>
  )
}
