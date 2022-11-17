import { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  href: string
  children: ReactNode
}

export default function LinkWrapper({ href, children }: Props) {
  return (
    // z-index 1100 bigger than leaflet z-index 1000
    <div className="fixed z-[1100] top-16 right-16 cursor-pointer">
      <Link className="text-gray-100 hover:text-primary" href={href}>
        {children}
      </Link>
    </div>
  )
}
