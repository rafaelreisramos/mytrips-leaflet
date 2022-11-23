import { X } from 'phosphor-react'

import LinkWrapper from '../../components/LinkWrapper'

export type PageProps = {
  heading: string
  body: string
}

export default function PageTemplate({ heading, body }: PageProps) {
  return (
    <section className="mt-32 flex flex-col items-center max-w-[100rem] m-auto">
      <LinkWrapper href="/">
        <X size={32} />
      </LinkWrapper>

      <div
        className="prose prose-base prose-h1:text-center prose-p:indent-16 prose-ul:ml-16 max-w-6xl prose-invert"
        dangerouslySetInnerHTML={{ __html: `<h1>${heading}</h1> ${body}` }}
      />
    </section>
  )
}
