import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

type CompetencyCardProps = {
  lessons: readonly string[]
  theme: 'coral' | 'image' | 'yellow'
  title: string
}

const themeClass = {
  coral: 'bg-[#ff837c]',
  image: 'bg-[linear-gradient(rgba(13,27,51,0.42),rgba(13,27,51,0.72)),radial-gradient(circle_at_top_right,#1ec9ff,transparent_30%),linear-gradient(135deg,#06192f,#16253b)] text-white',
  yellow: 'bg-[#ffdd75]',
}

export function CompetencyCard({ lessons, theme, title }: CompetencyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div
        className={cn(
          'flex h-36 items-center justify-center rounded-t-lg text-sm font-extrabold uppercase text-[#2b2944]',
          themeClass[theme],
        )}
      >
        {title}
      </div>
      <div className="p-4">
        <p className="mb-3 text-[0.68rem] font-bold uppercase text-[#2a2548]">
          Materi Kompetensi
        </p>
        <div className="space-y-2">
          {lessons.map((lesson, index) => (
            <p
              className={cn(
                'rounded px-3 py-2 text-[0.68rem] font-medium leading-4 text-[#423f58]',
                index === 1 ? 'bg-[#fff028]' : 'bg-[#f7f7fb]',
              )}
              key={lesson}
            >
              {lesson}
            </p>
          ))}
        </div>
      </div>
    </Card>
  )
}
