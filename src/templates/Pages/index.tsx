import { X } from 'phosphor-react'

import LinkWrapper from '../../components/LinkWrapper'

export type PageProps = {
  heading: string
  body: string
}

export default function PageTemplate({ heading, body }: PageProps) {
  return (
    <section className="flex items-center justify-center text-center flex-col h-screen max-w-[100rem] max-w m-auto">
      <LinkWrapper href="/">
        <X size={32} />
      </LinkWrapper>

      <h1 className="text-7xl mb-20">{heading}</h1>

      <div
        className="mt-8 prose prose-slate lg:prose-lg"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </section>
  )
}
