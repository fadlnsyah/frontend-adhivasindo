import { z } from 'zod'

const optionalUrl = z
  .string()
  .trim()
  .refine((value) => value === '' || z.string().url().safeParse(value).success, {
    message: 'Image harus berupa URL valid',
  })

export const contentFormSchema = z.object({
  title: z
    .string()
    .min(1, 'Title wajib diisi')
    .min(3, 'Title minimal 3 karakter')
    .max(255, 'Title maksimal 255 karakter'),
  content: z.string().min(1, 'Content wajib diisi'),
  image: optionalUrl,
})

export type ContentFormValues = z.infer<typeof contentFormSchema>
