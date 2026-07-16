import type { ReactNode } from 'react'

type SectionTitleProps = {
  children: ReactNode
  eyebrow?: string
}

export function SectionTitle({ children, eyebrow }: SectionTitleProps) {
  return (
    <div>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wide text-[#8b7cf6]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-1 text-xl font-bold text-[#27243f]">{children}</h2>
    </div>
  )
}
