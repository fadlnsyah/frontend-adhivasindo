import type { AuthUser } from '@/types/auth'

const ACCESS_TOKEN_KEY = 'access_token'
const AUTH_USER_KEY = 'auth_user'

export function saveToken(token: string) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token)
}

export function getToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export function removeToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}

export function saveUser(user: AuthUser) {
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user))
}

export function getUser() {
  const user = localStorage.getItem(AUTH_USER_KEY)

  if (!user) {
    return null
  }

  try {
    return JSON.parse(user) as AuthUser
  } catch {
    return null
  }
}

export function clearAuth() {
  removeToken()
  localStorage.removeItem(AUTH_USER_KEY)
}
