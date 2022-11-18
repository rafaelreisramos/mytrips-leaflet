import dynamic from 'next/dynamic'
import { Info } from 'phosphor-react'

import LinkWrapper from '../../components/LinkWrapper'
import { MapProps } from '../../components/Map'

const Map = dynamic(() => import('../../components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <LinkWrapper href="about">
        <Info size={32} />
      </LinkWrapper>
      <Map places={places} className="h-screen w-full" />
    </>
  )
}
