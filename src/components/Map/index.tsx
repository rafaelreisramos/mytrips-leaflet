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

  return (
    <MapContainer
      className={className}
      center={[51.505, -0.09]}
      zoom={3}
      {...rest}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

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
