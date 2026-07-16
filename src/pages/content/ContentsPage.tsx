import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Plus, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'

import { ContentCard } from '@/components/content/ContentCard'
import { ContentEmptyState } from '@/components/content/ContentEmptyState'
import { ContentErrorState } from '@/components/content/ContentErrorState'
import { ContentLoadingCard } from '@/components/content/ContentLoadingCard'
import { Pagination } from '@/components/content/Pagination'
import { AppLayout } from '@/components/layout/AppLayout'
import { PageContainer } from '@/components/common/PageContainer'
import { SectionTitle } from '@/components/common/SectionTitle'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { useDebounce } from '@/hooks/useDebounce'
import {
  deleteContent,
  getContentErrorMessage,
  getContents,
} from '@/services/content.service'
import type { Content } from '@/types/content'

export function ContentsPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const queryClient = useQueryClient()
  const [selectedContent, setSelectedContent] = useState<Content | null>(null)
  const pageParam = Number(searchParams.get('page') ?? '1')
  const page = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1
  const search = searchParams.get('search') ?? ''
  const [searchInput, setSearchInput] = useState(search)
  const debouncedSearch = useDebounce(searchInput, 300)

  useEffect(() => {
    if (debouncedSearch === search) {
      return
    }

    const nextParams = new URLSearchParams(searchParams)

    if (debouncedSearch) {
      nextParams.set('search', debouncedSearch)
    } else {
      nextParams.delete('search')
    }

    nextParams.delete('page')
    setSearchParams(nextParams)
  }, [debouncedSearch, search, searchParams, setSearchParams])

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['contents', page, search],
    queryFn: () => getContents({ page, search }),
  })

  const deleteContentMutation = useMutation({
    mutationFn: deleteContent,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['contents'] })
      toast.success('Content deleted successfully.')
      setSelectedContent(null)
    },
    onError: (error) => {
      toast.error(getContentErrorMessage(error))
    },
  })

  const contents = data?.data ?? []
  const isDeleting = deleteContentMutation.isPending
  const meta = data?.meta

  function handlePageChange(nextPage: number) {
    const nextParams = new URLSearchParams(searchParams)

    if (nextPage > 1) {
      nextParams.set('page', String(nextPage))
    } else {
      nextParams.delete('page')
    }

    setSearchParams(nextParams)
  }

  return (
    <AppLayout>
      <PageContainer>
        <div className="flex items-start justify-between gap-6">
          <div>
            <SectionTitle eyebrow="Content">Content Management</SectionTitle>
            <p className="mt-3 text-sm text-slate-500">
              Daftar materi pembelajaran yang tersedia di LMS.
            </p>
          </div>
          <Button onClick={() => navigate('/contents/create')}>
            <Plus className="mr-2 size-4" />
            Create Content
          </Button>
        </div>

        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <Input
            className="h-11 pl-10"
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Search content..."
            type="search"
            value={searchInput}
          />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <ContentLoadingCard key={index} />
            ))}
          </div>
        ) : null}

        {isError ? <ContentErrorState onRetry={() => void refetch()} /> : null}

        {!isLoading && !isError && contents.length === 0 ? (
          <ContentEmptyState
            message={
              search ? 'No content found' : 'No content available.'
            }
          />
        ) : null}

        {!isLoading && !isError && contents.length > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            {contents.map((content) => (
              <ContentCard
                content={content}
                deleting={isDeleting && selectedContent?.id === content.id}
                key={content.id}
                onDelete={setSelectedContent}
                onEdit={(selected) => navigate(`/contents/${selected.id}/edit`)}
              />
            ))}
          </div>
        ) : null}

        {!isLoading && !isError && meta ? (
          <Pagination
            currentPage={meta.current_page}
            lastPage={meta.last_page}
            onPageChange={handlePageChange}
            perPage={meta.per_page}
            total={meta.total}
          />
        ) : null}

        {selectedContent ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-6">
            <Card className="w-full max-w-md p-6">
              <h2 className="text-lg font-bold text-[#27243f]">
                Delete Content
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Are you sure you want to delete this content?
              </p>
              <p className="mt-2 text-sm font-semibold text-[#27243f]">
                {selectedContent.title}
              </p>
              <div className="mt-6 flex justify-end gap-3">
                <Button
                  className="bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
                  disabled={isDeleting}
                  onClick={() => setSelectedContent(null)}
                  type="button"
                >
                  Cancel
                </Button>
                <Button
                  className="bg-red-500 hover:bg-red-600"
                  disabled={isDeleting}
                  onClick={() => deleteContentMutation.mutate(selectedContent.id)}
                  type="button"
                >
                  {isDeleting ? 'Deleting...' : 'Delete'}
                </Button>
              </div>
            </Card>
          </div>
        ) : null}
      </PageContainer>
    </AppLayout>
  )
}
