import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import {
  contentFormSchema,
  type ContentFormValues,
} from '@/components/content/content-form.schema'

type ContentFormProps = {
  defaultValues: ContentFormValues
  loading: boolean
  onCancel: () => void
  onSubmit: (values: ContentFormValues) => void
  submitLabel: string
}

export function ContentForm({
  defaultValues,
  loading,
  onCancel,
  onSubmit,
  submitLabel,
}: ContentFormProps) {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ContentFormValues>({
    resolver: zodResolver(contentFormSchema),
    defaultValues,
  })

  return (
    <form className="space-y-5" noValidate onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="space-y-5" disabled={loading}>
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
            <p className="mt-2 text-sm text-red-500">{errors.title.message}</p>
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
            <p className="mt-2 text-sm text-red-500">{errors.content.message}</p>
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
            <p className="mt-2 text-sm text-red-500">{errors.image.message}</p>
          ) : null}
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-5">
          <Button
            className="bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
            onClick={onCancel}
            type="button"
          >
            Cancel
          </Button>
          <Button disabled={loading} type="submit">
            {loading ? 'Saving...' : submitLabel}
          </Button>
        </div>
      </fieldset>
    </form>
  )
}
