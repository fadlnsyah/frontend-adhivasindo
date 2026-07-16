import { useQuery } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { ContentCard } from '@/components/content/ContentCard'
import { ContentEmptyState } from '@/components/content/ContentEmptyState'
import { ContentErrorState } from '@/components/content/ContentErrorState'
import { ContentLoadingCard } from '@/components/content/ContentLoadingCard'
import { AppLayout } from '@/components/layout/AppLayout'
import { PageContainer } from '@/components/common/PageContainer'
import { SectionTitle } from '@/components/common/SectionTitle'
import { Button } from '@/components/ui/Button'
import { getContents } from '@/services/content.service'

export function ContentsPage() {
  const navigate = useNavigate()
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['contents'],
    queryFn: getContents,
  })

  const contents = data?.data ?? []

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

        {isLoading ? (
          <div className="grid grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <ContentLoadingCard key={index} />
            ))}
          </div>
        ) : null}

        {isError ? <ContentErrorState onRetry={() => void refetch()} /> : null}

        {!isLoading && !isError && contents.length === 0 ? (
          <ContentEmptyState />
        ) : null}

        {!isLoading && !isError && contents.length > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            {contents.map((content) => (
              <ContentCard content={content} key={content.id} />
            ))}
          </div>
        ) : null}
      </PageContainer>
    </AppLayout>
  )
}
