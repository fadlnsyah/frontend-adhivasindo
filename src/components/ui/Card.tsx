import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-slate-100 bg-white shadow-sm shadow-slate-200/60 transition-shadow',
        className,
      )}
      {...props}
    />
  )
}
