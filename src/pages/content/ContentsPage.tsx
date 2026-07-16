import { AppLayout } from '@/components/layout/AppLayout'
import { PageContainer } from '@/components/common/PageContainer'
import { SectionTitle } from '@/components/common/SectionTitle'
import { Card } from '@/components/ui/Card'

export function ContentsPage() {
  return (
    <AppLayout>
      <PageContainer>
        <Card className="min-h-[calc(100vh-8.5rem)] border-dashed border-slate-200 p-8">
          <SectionTitle eyebrow="Content">LMS Content Area</SectionTitle>
        </Card>
      </PageContainer>
    </AppLayout>
  )
}
