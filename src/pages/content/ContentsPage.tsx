import { useQuery } from '@tanstack/react-query'

import { ContentCard } from '@/components/content/ContentCard'
import { AppLayout } from '@/components/layout/AppLayout'
import { PageContainer } from '@/components/common/PageContainer'
import { SectionTitle } from '@/components/common/SectionTitle'
import { getContents } from '@/services/content.service'

export function ContentsPage() {
  const { data } = useQuery({
    queryKey: ['contents'],
    queryFn: getContents,
  })

  return (
    <AppLayout>
      <PageContainer>
        <div>
          <SectionTitle eyebrow="Content">Content Management</SectionTitle>
          <p className="mt-3 text-sm text-slate-500">
            Daftar materi pembelajaran yang tersedia di LMS.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {data?.data.map((content) => (
            <ContentCard content={content} key={content.id} />
          ))}
        </div>
      </PageContainer>
    </AppLayout>
  )
}
