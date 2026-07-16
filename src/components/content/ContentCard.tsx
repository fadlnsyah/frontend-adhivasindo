import { FileText, UserRound } from 'lucide-react'

import { Card } from '@/components/ui/Card'
import type { Content } from '@/types/content'
import { formatContentDate } from '@/utils/date'

type ContentCardProps = {
  content: Content
}

export function ContentCard({ content }: ContentCardProps) {
  return (
    <Card className="overflow-hidden">
      {content.image ? (
        <img
          alt={content.title}
          className="h-40 w-full object-cover"
          src={content.image}
        />
      ) : (
        <div className="flex h-40 items-center justify-center bg-gradient-to-br from-[#f2efff] to-[#e9f6ff] text-[#7667f6]">
          <FileText className="size-11" />
        </div>
      )}

      <div className="p-5">
        <h3 className="line-clamp-2 text-lg font-bold text-[#27243f]">
          {content.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
          {content.content}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
          <span className="flex min-w-0 items-center gap-2">
            <UserRound className="size-4 shrink-0 text-[#7667f6]" />
            <span className="truncate font-semibold text-[#423f58]">
              {content.author.name}
            </span>
          </span>
          <span className="shrink-0">{formatContentDate(content.created_at)}</span>
        </div>
      </div>
    </Card>
  )
}
