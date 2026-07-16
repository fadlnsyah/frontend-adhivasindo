import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

import { ContentErrorState } from '@/components/content/ContentErrorState'
import { ContentForm } from '@/components/content/ContentForm'
import type { ContentFormValues } from '@/components/content/content-form.schema'
import { ContentLoadingCard } from '@/components/content/ContentLoadingCard'
import { PageContainer } from '@/components/common/PageContainer'
import { SectionTitle } from '@/components/common/SectionTitle'
import { AppLayout } from '@/components/layout/AppLayout'
import { Card } from '@/components/ui/Card'
import {
  getContentById,
  getContentErrorMessage,
  updateContent,
} from '@/services/content.service'

export function EditContentPage() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const params = useParams()
  const contentId = Number(params.id)

  const contentQuery = useQuery({
    queryKey: ['contents', contentId],
    queryFn: () => getContentById(contentId),
    enabled: Number.isFinite(contentId),
  })

  const updateContentMutation = useMutation({
    mutationFn: (values: ContentFormValues) =>
      updateContent(contentId, {
        title: values.title,
        content: values.content,
        image: values.image || null,
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['contents'] })
      toast.success('Content updated successfully.')
      navigate('/contents')
    },
    onError: (error) => {
      toast.error(getContentErrorMessage(error))
    },
  })

  const isSaving = updateContentMutation.isPending
  const content = contentQuery.data?.data

  return (
    <AppLayout>
      <PageContainer className="max-w-4xl">
        <div>
          <SectionTitle eyebrow="Content">Edit Content</SectionTitle>
          <p className="mt-3 text-sm text-slate-500">
            Perbarui materi pembelajaran yang sudah tersedia.
          </p>
        </div>

        {contentQuery.isLoading ? (
          <ContentLoadingCard />
        ) : null}

        {contentQuery.isError ? (
          <ContentErrorState onRetry={() => void contentQuery.refetch()} />
        ) : null}

        {content ? (
          <Card className="p-6">
            <ContentForm
              defaultValues={{
                title: content.title,
                content: content.content,
                image: content.image ?? '',
              }}
              loading={isSaving}
              onCancel={() => navigate('/contents')}
              onSubmit={(values) => updateContentMutation.mutate(values)}
              submitLabel="Save"
            />
          </Card>
        ) : null}
      </PageContainer>
    </AppLayout>
  )
}
