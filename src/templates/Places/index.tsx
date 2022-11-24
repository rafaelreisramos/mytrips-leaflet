import Image from 'next/image'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { X } from 'phosphor-react'

import LinkWrapper from '../../components/LinkWrapper'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlaceProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={place.description?.text}
        canonical="https://my-trips.rafaelreisramos.dev"
        openGraph={{
          url: `https://my-trips.rafaelreisramos.dev/${place.slug}`,
          title: `${place.name} - My Trips`,
          description: place.description?.text,
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`,
            },
          ],
        }}
      />
      <section className="mt-32 flex flex-col items-center max-w-[100rem] m-auto">
        <LinkWrapper href="/">
          <X size={32} />
        </LinkWrapper>

        <div
          className="prose prose-base prose-h1:text-center prose-p:indent-16 max-w-6xl prose-invert"
          dangerouslySetInnerHTML={{
            __html: `<h1>${place.name}</h1> ${place.description?.html || ''}`,
          }}
        />

        <div className="mt-16 grid gap-16">
          {place.gallery.map((image, index) => (
            <Image
              key={`photo-${index}`}
              src={image.url}
              alt={place.name}
              width={1000}
              height={600}
              quality={75}
              // className="bg-[#f6f7f8] bg-gradient-to-r from-[#f6f7f8] via-[#edeef1] to-[#f6f7f8]"
            />
          ))}
        </div>
      </section>
    </>
  )
}
