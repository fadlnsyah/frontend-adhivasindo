import { apiClient } from '@/api/client'
import type { LoginRequest, LoginResponse } from '@/types/auth'

export async function login(payload: LoginRequest) {
  const response = await apiClient.post<LoginResponse>('/login', payload)

  return response.data
}
