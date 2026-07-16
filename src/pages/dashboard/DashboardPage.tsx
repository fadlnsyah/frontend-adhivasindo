import { CalendarCard } from '@/components/dashboard/CalendarCard'
import { CompetencyCard } from '@/components/dashboard/CompetencyCard'
import { DashboardHero } from '@/components/dashboard/DashboardHero'
import { InstructorScheduleCard } from '@/components/dashboard/InstructorScheduleCard'
import { StudentScoreCard } from '@/components/dashboard/StudentScoreCard'
import { WelcomeCard } from '@/components/dashboard/WelcomeCard'
import { AppLayout } from '@/components/layout/AppLayout'
import { PageContainer } from '@/components/common/PageContainer'
import {
  calendarDays,
  competencyModules,
  featuredModule,
  instructorSchedules,
  studentScores,
} from '@/data/dashboard'

export function DashboardPage() {
  return (
    <AppLayout>
      <PageContainer className="grid max-w-none gap-8 xl:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-7">
          <DashboardHero {...featuredModule} />

          <section>
            <h2 className="mb-5 text-lg font-extrabold uppercase text-[#2a2548]">
              Modul Kompetensi
            </h2>
            <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
              {competencyModules.map((module) => (
                <CompetencyCard key={module.title} {...module} />
              ))}
            </div>
          </section>

          <StudentScoreCard scores={studentScores} />
        </div>

        <aside className="space-y-8">
          <WelcomeCard />
          <CalendarCard days={calendarDays} />
          <InstructorScheduleCard schedules={instructorSchedules} />
          <div className="h-36 rounded-lg bg-[linear-gradient(rgba(14,32,59,0.1),rgba(14,32,59,0.45)),radial-gradient(circle_at_30%_20%,#35d5ff,transparent_28%),linear-gradient(135deg,#09213a,#123b68)]" />
          <div className="h-16 rounded-lg bg-slate-200" />
        </aside>
      </PageContainer>
    </AppLayout>
  )
}
