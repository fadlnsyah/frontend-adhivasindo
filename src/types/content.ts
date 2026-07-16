export type ContentAuthor = {
  id: number
  name: string
}

export type Content = {
  id: number
  title: string
  content: string
  image: string | null
  author: ContentAuthor
  created_at: string
  updated_at: string
}

export type PaginationMeta = {
  current_page: number
  last_page: number
  per_page: number
  total: number
}

export type ContentsResponse = {
  success: boolean
  message: string
  data: Content[]
  meta: PaginationMeta
}

export type CreateContentRequest = {
  title: string
  content: string
  image?: string | null
}

export type ContentResponse = {
  success: boolean
  message: string
  data: Content
}
