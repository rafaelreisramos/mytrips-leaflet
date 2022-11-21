import { useRouter } from 'next/router'
import {
  MapContainer,
  TileLayer,
  Marker,
  MapContainerProps,
  useMap,
} from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
} & MapContainerProps

export default function Map({
  className,
  children,
  places = [],
  ...rest
}: MapProps) {
  const router = useRouter()

  const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
  const MAPBOX_USER_ID = process.env.NEXT_PUBLIC_MAPBOX_USER_ID
  const MAPBOX_STYLE_ID = process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID

  const CustomTileLayer = () => {
    return MAPBOX_API_KEY ? (
      <TileLayer
        attribution='© <a href="https://www.mapbox.com/contribute/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>/>'
        url={`https://api.mapbox.com/styles/v1/${MAPBOX_USER_ID}/${MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
      />
    ) : (
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    )
  }

  const SmallScreenMap = () => {
    const map = useMap()
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

    if (width < 768) {
      map.setMinZoom(1.75)
    }
    return null
  }

  return (
    <MapContainer
      className={className}
      center={[0, 0]}
      zoomSnap={0}
      zoom={2.5}
      minZoom={2.5}
      maxBounds={[
        [-180, 180],
        [180, -180],
      ]}
      {...rest}
    >
      <SmallScreenMap />
      <CustomTileLayer />

      {places?.length > 0 &&
        places.map(({ id, name, slug, location }) => {
          const { latitude, longitude } = location

          return (
            <Marker
              key={`${id}-${slug}`}
              position={[latitude, longitude]}
              title={name}
              eventHandlers={{
                click: () => {
                  router.push(`places/${slug}`)
                },
              }}
            />
          )
        })}
      {children}
    </MapContainer>
  )
}
