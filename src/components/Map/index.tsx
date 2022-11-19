import { useRouter } from 'next/router'
import {
  MapContainer,
  TileLayer,
  Marker,
  MapContainerProps,
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

  return (
    <MapContainer
      className={className}
      center={[51.505, -0.09]}
      zoom={3}
      {...rest}
    >
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
