import { ChevronRight } from 'lucide-react'

type InstructorSchedule = {
  color: string
  time: string
  title: string
}

type InstructorScheduleCardProps = {
  schedules: InstructorSchedule[]
}

export function InstructorScheduleCard({
  schedules,
}: InstructorScheduleCardProps) {
  return (
    <section>
      <h3 className="mb-5 text-sm font-extrabold uppercase text-[#2a2548]">
        Jadwal Pemateri
      </h3>
      <div className="space-y-5">
        {schedules.map((schedule) => (
          <div className="flex items-center gap-4" key={schedule.title}>
            <span
              className="size-10 rounded"
              style={{ backgroundColor: schedule.color }}
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-[#2a2548]">
                {schedule.title}
              </p>
              <p className="mt-1 text-xs text-slate-400">{schedule.time}</p>
            </div>
            <ChevronRight className="size-5 text-slate-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
