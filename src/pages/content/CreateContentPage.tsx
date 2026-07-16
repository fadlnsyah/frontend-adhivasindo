import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { PageContainer } from '@/components/common/PageContainer'
import { SectionTitle } from '@/components/common/SectionTitle'
import { AppLayout } from '@/components/layout/AppLayout'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import {
  createContentSchema,
  type CreateContentFormValues,
} from '@/pages/content/create-content.schema'

export function CreateContentPage() {
  const navigate = useNavigate()
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<CreateContentFormValues>({
    resolver: zodResolver(createContentSchema),
    defaultValues: {
      title: '',
      content: '',
      image: '',
    },
  })

  function handleCreate() {
    return undefined
  }

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
          <form className="space-y-5" noValidate onSubmit={handleSubmit(handleCreate)}>
            <div>
              <label
                className="mb-2 block text-sm font-semibold text-[#27243f]"
                htmlFor="title"
              >
                Title
              </label>
              <Input
                aria-invalid={Boolean(errors.title)}
                id="title"
                placeholder="First Content"
                {...register('title')}
              />
              {errors.title ? (
                <p className="mt-2 text-sm text-red-500">
                  {errors.title.message}
                </p>
              ) : null}
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-semibold text-[#27243f]"
                htmlFor="content"
              >
                Content
              </label>
              <Textarea
                aria-invalid={Boolean(errors.content)}
                id="content"
                placeholder="This is content body."
                {...register('content')}
              />
              {errors.content ? (
                <p className="mt-2 text-sm text-red-500">
                  {errors.content.message}
                </p>
              ) : null}
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-semibold text-[#27243f]"
                htmlFor="image"
              >
                Image URL
              </label>
              <Input
                aria-invalid={Boolean(errors.image)}
                id="image"
                placeholder="https://example.com/image.jpg"
                type="url"
                {...register('image')}
              />
              {errors.image ? (
                <p className="mt-2 text-sm text-red-500">
                  {errors.image.message}
                </p>
              ) : null}
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-5">
              <Button
                className="bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
                onClick={() => navigate('/contents')}
                type="button"
              >
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Card>
      </PageContainer>
    </AppLayout>
  )
}
