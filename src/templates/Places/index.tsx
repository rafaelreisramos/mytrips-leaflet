import Image from 'next/image'
import { useRouter } from 'next/router'
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
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlaceProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <section
      className={`mt-32 flex items-center justify-center text-center flex-col max-w-[100rem] max-w m-auto`}
    >
      <LinkWrapper href="/">
        <X size={32} />
      </LinkWrapper>

      <h1 className="text-7xl mb-20">{place.name}</h1>
      <div
        className="text-justify prose-p:indent-16 prose prose-2xl max-w-none prose-invert prose-ul:ml-16"
        dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
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
  )
}
