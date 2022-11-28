import { NextSeo } from 'next-seo'
import { X } from 'phosphor-react'

import LinkWrapper from '../../components/LinkWrapper'

export type PageProps = {
  page: {
    slug: string
    heading: string
    body?: {
      html: string
      text: string
    }
  }
}

export default function PageTemplate({ page }: PageProps) {
  return (
    <>
      <NextSeo
        title={`${page.heading} - My Trips`}
        description={page.body?.text}
        canonical="https://my-trips.rafaelreisramos.dev"
        openGraph={{
          url: `https://my-trips.rafaelreisramos.dev/${page.slug}`,
          title: `${page.heading} - My Trips`,
          description: page.body?.text,
        }}
      />
      <section className="mt-32 flex flex-col items-center max-w-[100rem] m-auto">
        <LinkWrapper href="/">
          <X size={32} />
        </LinkWrapper>

        <div
          className="prose prose-base prose-h1:text-center prose-p:indent-16 prose-ul:ml-16 max-w-6xl prose-invert"
          dangerouslySetInnerHTML={{
            __html: `<h1>${page.heading}</h1> ${page.body?.html || ''}`,
          }}
        />
      </section>
    </>
  )
}
