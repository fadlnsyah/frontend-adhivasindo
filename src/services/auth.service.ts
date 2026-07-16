import { isAxiosError } from 'axios'

import { apiClient } from '@/api/client'
import type { LoginRequest, LoginResponse } from '@/types/auth'

type ApiErrorResponse = {
  success: false
  message?: string
  errors?: Record<string, string[]>
}

export async function login(payload: LoginRequest) {
  const response = await apiClient.post<LoginResponse>('/login', payload)

  return response.data
}

export function getLoginErrorMessage(error: unknown) {
  if (isAxiosError<ApiErrorResponse>(error)) {
    return error.response?.data.message ?? 'Login gagal'
  }

  return 'Login gagal'
}
