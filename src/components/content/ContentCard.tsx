import { FileText, Pencil, Trash2, UserRound } from 'lucide-react'

import { Card } from '@/components/ui/Card'
import type { Content } from '@/types/content'
import { formatContentDate } from '@/utils/date'

type ContentCardProps = {
  content: Content
  deleting?: boolean
  onDelete?: (content: Content) => void
  onEdit?: (content: Content) => void
}

export function ContentCard({
  content,
  deleting = false,
  onDelete,
  onEdit,
}: ContentCardProps) {
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

        <div className="mt-4 flex items-center justify-end gap-2">
          <button
            className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 px-3 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
            onClick={() => onEdit?.(content)}
            type="button"
          >
            <Pencil className="size-3.5" />
            Edit
          </button>
          <button
            className="inline-flex h-9 items-center gap-2 rounded-md border border-red-100 px-3 text-xs font-semibold text-red-500 transition hover:bg-red-50 disabled:pointer-events-none disabled:opacity-60"
            disabled={deleting}
            onClick={() => onDelete?.(content)}
            type="button"
          >
            <Trash2 className="size-3.5" />
            {deleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </Card>
  )
}
