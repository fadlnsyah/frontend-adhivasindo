import { FileText } from 'lucide-react'

import { Card } from '@/components/ui/Card'

type ContentEmptyStateProps = {
  description?: string
  message?: string
}

export function ContentEmptyState({
  description = 'Content dari backend belum tersedia untuk ditampilkan.',
  message = 'No content available.',
}: ContentEmptyStateProps) {
  return (
    <Card className="flex min-h-80 flex-col items-center justify-center border-dashed p-8 text-center">
      <div className="flex size-14 items-center justify-center rounded-full bg-[#f2efff] text-[#7667f6]">
        <FileText className="size-7" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-[#27243f]">
        {message}
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
        {description}
      </p>
    </Card>
  )
}
