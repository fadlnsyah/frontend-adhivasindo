import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { ContentForm } from '@/components/content/ContentForm'
import type { ContentFormValues } from '@/components/content/content-form.schema'
import { PageContainer } from '@/components/common/PageContainer'
import { SectionTitle } from '@/components/common/SectionTitle'
import { AppLayout } from '@/components/layout/AppLayout'
import { Card } from '@/components/ui/Card'
import {
  createContent,
  getContentErrorMessage,
} from '@/services/content.service'

export function CreateContentPage() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const createContentMutation = useMutation({
    mutationFn: createContent,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['contents'] })
      toast.success('Content created successfully')
      navigate('/contents')
    },
    onError: (error) => {
      toast.error(getContentErrorMessage(error))
    },
  })

  function handleCreate(values: ContentFormValues) {
    createContentMutation.mutate({
      title: values.title,
      content: values.content,
      image: values.image || null,
    })
  }

  const isSaving = createContentMutation.isPending

  return (
    <AppLayout>
      <PageContainer className="max-w-4xl">
        <div>
          <SectionTitle eyebrow="Content">Create Content</SectionTitle>
          <p className="mt-3 text-sm text-slate-500">
            Tambahkan materi baru untuk ditampilkan di LMS.
          </p>
        </div>

        <Card className="p-6">
          <ContentForm
            defaultValues={{ title: '', content: '', image: '' }}
            loading={isSaving}
            onCancel={() => navigate('/contents')}
            onSubmit={handleCreate}
            submitLabel="Save"
          />
        </Card>
      </PageContainer>
    </AppLayout>
  )
}
