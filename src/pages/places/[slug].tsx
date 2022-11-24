import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import {
  GetPlaceBySlugQuery,
  GetPlacesQuery,
} from '../../graphql/generated/graphql'
import { GET_PLACES, GET_PLACE_BY_SLUG } from '../../graphql/queries'
import client from '../../graphql/client'

import PlacesTemplate, { PlaceProps } from '../../templates/Places'

export default function Place({ place }: PlaceProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <PlacesTemplate place={place} />
}

export const getStaticPaths = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 5,
  })

  const paths = places.map(({ slug }) => ({ params: { slug } }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`,
    }
  )

  if (!place) return { notFound: true }

  return {
    revalidate: 60 * 60,
    props: {
      place,
    },
  }
}
