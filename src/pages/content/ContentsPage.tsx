import { useQuery } from '@tanstack/react-query'

import { AppLayout } from '@/components/layout/AppLayout'
import { PageContainer } from '@/components/common/PageContainer'
import { SectionTitle } from '@/components/common/SectionTitle'
import { Card } from '@/components/ui/Card'
import { getContents } from '@/services/content.service'

export function ContentsPage() {
  const { data } = useQuery({
    queryKey: ['contents'],
    queryFn: getContents,
  })

  return (
    <AppLayout>
      <PageContainer>
        <Card className="min-h-[calc(100vh-8.5rem)] border-dashed border-slate-200 p-8">
          <SectionTitle eyebrow="Content">Content Management</SectionTitle>
          <p className="mt-3 text-sm text-slate-500">
            {data?.meta.total ?? 0} content available.
          </p>
        </Card>
      </PageContainer>
    </AppLayout>
  )
}
