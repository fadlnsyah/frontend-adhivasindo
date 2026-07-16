import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/Button'

type PaginationProps = {
  currentPage: number
  lastPage: number
  onPageChange: (page: number) => void
  perPage: number
  total: number
}

export function Pagination({
  currentPage,
  lastPage,
  onPageChange,
  perPage,
  total,
}: PaginationProps) {
  const pages = Array.from({ length: lastPage }, (_, index) => index + 1)

  if (lastPage <= 1) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-100 bg-white px-5 py-4 shadow-sm shadow-slate-200/50">
      <p className="text-sm text-slate-500">
        Showing {perPage} per page from {total} content
      </p>

      <div className="flex items-center gap-2">
        <Button
          className="h-9 bg-white px-3 text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft className="mr-1 size-4" />
          Previous
        </Button>

        {pages.map((page) => (
          <button
            className={
              page === currentPage
                ? 'flex size-9 items-center justify-center rounded-md bg-[#7667f6] text-sm font-bold text-white'
                : 'flex size-9 items-center justify-center rounded-md text-sm font-semibold text-slate-500 transition hover:bg-slate-100'
            }
            key={page}
            onClick={() => onPageChange(page)}
            type="button"
          >
            {page}
          </button>
        ))}

        <Button
          className="h-9 bg-white px-3 text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
          disabled={currentPage >= lastPage}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
          <ChevronRight className="ml-1 size-4" />
        </Button>
      </div>
    </div>
  )
}
