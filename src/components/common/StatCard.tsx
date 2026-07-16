import type { ReactNode } from 'react'

import { Card } from '@/components/ui/Card'

type StatCardProps = {
  title: string
  value: string
  icon?: ReactNode
}

export function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <Card className="flex items-center justify-between p-5">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <p className="mt-2 text-2xl font-bold text-[#27243f]">{value}</p>
      </div>
      {icon ? (
        <div className="flex size-11 items-center justify-center rounded-lg bg-[#f2efff] text-[#7667f6]">
          {icon}
        </div>
      ) : null}
    </Card>
  )
}
