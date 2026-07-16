import { CalendarDays, UserRound } from 'lucide-react'

import { Button } from '@/components/ui/Button'

type DashboardHeroProps = {
  category: string
  date: string
  description: string
  instructor: string
  title: string
}

export function DashboardHero({
  category,
  date,
  description,
  instructor,
  title,
}: DashboardHeroProps) {
  return (
    <section className="rounded-lg bg-gradient-to-br from-[#9b7cff] to-[#6c4df6] px-7 py-6 text-white shadow-sm">
      <p className="text-xs font-bold uppercase text-[#ffe56f]">{category}</p>
      <div className="mt-4 flex items-end justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold leading-tight">{title}</h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-white/78">
            {description}
          </p>
          <div className="mt-8 flex items-center gap-10 text-sm font-semibold text-white/85">
            <span className="flex items-center gap-2">
              <UserRound className="size-4" />
              Pemateri By {instructor}
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="size-4" />
              {date}
            </span>
          </div>
        </div>
        <Button className="h-14 shrink-0 bg-white px-8 text-[#2f2a4f] hover:bg-white/90">
          Mulai Learning
        </Button>
      </div>
    </section>
  )
}
