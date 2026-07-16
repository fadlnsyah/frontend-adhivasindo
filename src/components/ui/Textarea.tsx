import type { TextareaHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        'min-h-40 w-full resize-y rounded-md border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#8b7cf6] focus:ring-2 focus:ring-[#8b7cf6]/20',
        className,
      )}
      {...props}
    />
  )
}
