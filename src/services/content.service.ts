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

export async function getContents() {
  const response = await apiClient.get<ContentsResponse>('/contents')

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
