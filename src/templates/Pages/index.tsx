import { X } from 'phosphor-react'

import LinkWrapper from '../../components/LinkWrapper'

export type PageProps = {
  heading: string
  body: string
}

export default function PageTemplate({ heading, body }: PageProps) {
  return (
    <section
      className={`${
        heading.toLowerCase() !== 'about' ? 'mt-32' : 'h-screen'
      } flex items-center justify-center text-center flex-col max-w-[100rem] max-w m-auto`}
    >
      <LinkWrapper href="/">
        <X size={32} />
      </LinkWrapper>

      <h1 className="text-7xl mb-20">{heading}</h1>

      <div
        className={`${
          heading.toLowerCase() !== 'about'
            ? 'text-justify prose-p:indent-16'
            : ''
        } prose prose-2xl max-w-none prose-invert prose-ul:ml-16`}
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </section>
  )
}
