import { apiClient } from '@/api/client'
import type { ContentsResponse } from '@/types/content'

export async function getContents() {
  const response = await apiClient.get<ContentsResponse>('/contents')

  return response.data
}
