import { FileText } from 'lucide-react'

import { Card } from '@/components/ui/Card'

export function ContentEmptyState() {
  return (
    <Card className="flex min-h-80 flex-col items-center justify-center border-dashed p-8 text-center">
      <div className="flex size-14 items-center justify-center rounded-full bg-[#f2efff] text-[#7667f6]">
        <FileText className="size-7" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-[#27243f]">
        No content available.
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
        Content dari backend belum tersedia untuk ditampilkan.
      </p>
    </Card>
  )
}
