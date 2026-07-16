import { AlertCircle } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

type ContentErrorStateProps = {
  onRetry: () => void
}

export function ContentErrorState({ onRetry }: ContentErrorStateProps) {
  return (
    <Card className="flex min-h-80 flex-col items-center justify-center border-red-100 bg-red-50/60 p-8 text-center">
      <div className="flex size-14 items-center justify-center rounded-full bg-red-100 text-red-500">
        <AlertCircle className="size-7" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-[#27243f]">
        Failed to load content.
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
        Terjadi masalah saat mengambil data content dari server.
      </p>
      <Button className="mt-6" onClick={onRetry}>
        Retry
      </Button>
    </Card>
  )
}
