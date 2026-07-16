import { apiClient } from '@/api/client'
import type {
  ContentResponse,
  ContentsResponse,
  CreateContentRequest,
} from '@/types/content'

export async function getContents() {
  const response = await apiClient.get<ContentsResponse>('/contents')

  return response.data
}

export async function createContent(payload: CreateContentRequest) {
  const response = await apiClient.post<ContentResponse>('/contents', payload)

  return response.data
}
