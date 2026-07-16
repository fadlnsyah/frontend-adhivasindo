export type LoginRequest = {
  email: string
  password: string
}

export type AuthUser = {
  id: number
  name: string
  email: string
}

export type LoginResponse = {
  success: boolean
  message: string
  data: {
    token: string
    token_type: string
    user: AuthUser
  }
}
