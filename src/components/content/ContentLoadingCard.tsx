import { Card } from '@/components/ui/Card'

export function ContentLoadingCard() {
  return (
    <Card className="overflow-hidden">
      <div className="h-40 animate-pulse bg-slate-100" />
      <div className="space-y-4 p-5">
        <div className="h-5 w-3/4 animate-pulse rounded bg-slate-100" />
        <div className="space-y-2">
          <div className="h-3 animate-pulse rounded bg-slate-100" />
          <div className="h-3 animate-pulse rounded bg-slate-100" />
          <div className="h-3 w-2/3 animate-pulse rounded bg-slate-100" />
        </div>
        <div className="flex justify-between border-t border-slate-100 pt-4">
          <div className="h-3 w-24 animate-pulse rounded bg-slate-100" />
          <div className="h-3 w-20 animate-pulse rounded bg-slate-100" />
        </div>
      </div>
    </Card>
  )
}
