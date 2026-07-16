import { ChevronLeft, ChevronRight } from 'lucide-react'

type CalendarDay = {
  active?: boolean
  date: string
  day: string
}

type CalendarCardProps = {
  days: CalendarDay[]
}

export function CalendarCard({ days }: CalendarCardProps) {
  return (
    <section className="rounded-lg bg-[#292343] p-5 text-white">
      <div className="mb-5 flex items-center justify-center gap-3">
        <ChevronLeft className="size-4 text-white/60" />
        <p className="text-sm font-bold">April 2025</p>
        <ChevronRight className="size-4 text-white/60" />
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <div
            className="rounded-md bg-white px-1.5 py-2 text-center text-[#2a2548]"
            key={day.day}
          >
            <p className="text-[0.6rem] font-bold">{day.day}</p>
            <p className="mt-1 text-xs font-bold">{day.date}</p>
            {day.active ? (
              <span className="mx-auto mt-1 block size-1.5 rounded-full bg-[#6c4df6]" />
            ) : (
              <span className="mx-auto mt-1 block size-1.5" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
