import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { Info } from 'phosphor-react'

import LinkWrapper from '../../components/LinkWrapper'
import { MapProps } from '../../components/Map'

const Map = dynamic(() => import('../../components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple next leaflet project to show places in a map and some photon when clicked"
        canonical="https://my-trips.rafaelreisramos.dev"
        openGraph={{
          url: 'https://my-trips.rafaelreisramos.dev',
          title: 'My Trips',
          description:
            'A simple next leaflet project to show places in a map and some photon when clicked',
          images: [
            {
              url: 'https://my-trips.rafaelreisramos.dev/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips',
            },
          ],
        }}
      />
      <LinkWrapper href="about">
        <Info size={32} />
      </LinkWrapper>
      <Map places={places} className="h-screen w-full" />
    </>
  )
}
