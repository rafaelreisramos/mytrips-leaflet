import { X } from 'phosphor-react'

import LinkWrapper from '../../components/LinkWrapper'

export default function AboutTemplate() {
  return (
    <section className="flex items-center justify-center text-center flex-col h-screen max-w-container m-auto">
      <LinkWrapper href="/">
        <X size={32} />
      </LinkWrapper>

      <h1 className="text-lg mb-large">My trips</h1>

      <div>
        <p className="text-md leading-md">
          Morbi libero nisi, rutrum sed mi sed, suscipit rutrum lorem. Quisque
          varius enim eros, non tristique lorem interdum et. Suspendisse
          tristique porttitor libero quis dapibus. Suspendisse potenti. Cras
          varius ipsum id ornare dapibus. Curabitur tincidunt magna in vulputate
          tincidunt. In sit amet pellentesque tortor.
        </p>
      </div>
    </section>
  )
}
