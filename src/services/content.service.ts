import { isAxiosError } from 'axios'

import { apiClient } from '@/api/client'
import type {
  ContentResponse,
  ContentsResponse,
  CreateContentRequest,
} from '@/types/content'

type ApiErrorResponse = {
  success: false
  message?: string
}

type GetContentsParams = {
  page?: number
  perPage?: number
  search?: string
}

export async function getContents({
  page = 1,
  perPage = 10,
  search = '',
}: GetContentsParams = {}) {
  const response = await apiClient.get<ContentsResponse>('/contents', {
    params: {
      page,
      per_page: perPage,
      search: search || undefined,
    },
  })

  return response.data
}

export async function getContentById(id: number) {
  const response = await apiClient.get<ContentResponse>(`/contents/${id}`)

  return response.data
}

export function getContentErrorMessage(error: unknown) {
  if (isAxiosError<ApiErrorResponse>(error)) {
    return error.response?.data.message ?? 'Failed to process content'
  }

  return 'Failed to process content'
}

export async function createContent(payload: CreateContentRequest) {
  const response = await apiClient.post<ContentResponse>('/contents', payload)

  return response.data
}

export async function updateContent(id: number, payload: CreateContentRequest) {
  const response = await apiClient.put<ContentResponse>(`/contents/${id}`, payload)

  return response.data
}

export async function deleteContent(id: number) {
  const response = await apiClient.delete<ContentResponse>(`/contents/${id}`)

  return response.data
}
