import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, Mail } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { type LoginFormValues, loginSchema } from '@/pages/auth/login.schema'
import { getLoginErrorMessage, login } from '@/services/auth.service'

export function LoginPage() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleLogin(values: LoginFormValues) {
    setIsSubmitting(true)

    try {
      const response = await login(values)

      localStorage.setItem('access_token', response.data.token)
      localStorage.setItem('auth_user', JSON.stringify(response.data.user))

      toast.success(response.message)
      navigate('/contents')
    } catch (error) {
      toast.error(getLoginErrorMessage(error))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f7fb] px-6 py-10">
      <Card className="w-full max-w-md p-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex items-center justify-center gap-3">
            <div className="relative size-11">
              <span className="absolute left-1 top-2 h-8 w-5 -rotate-12 rounded-full border-[5px] border-[#0b77bd]" />
              <span className="absolute right-1 top-0 h-10 w-5 rotate-12 rounded-full bg-[#79bd42]" />
            </div>
            <span className="text-[1.7rem] font-bold leading-none tracking-tight text-[#16456d]">
              adhivasindo
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#27243f]">
            Login LMS
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Masuk untuk mengelola konten pembelajaran.
          </p>
        </div>

        <form className="space-y-5" noValidate onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label
              className="mb-2 block text-sm font-semibold text-[#27243f]"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                aria-invalid={Boolean(errors.email)}
                autoComplete="email"
                id="email"
                placeholder="john@example.com"
                type="email"
                className="pl-10"
                {...register('email')}
              />
            </div>
            {errors.email ? (
              <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
            ) : null}
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-semibold text-[#27243f]"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                aria-invalid={Boolean(errors.password)}
                autoComplete="current-password"
                id="password"
                placeholder="Minimal 8 karakter"
                type="password"
                className="pl-10"
                {...register('password')}
              />
            </div>
            {errors.password ? (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            ) : null}
          </div>

          <Button className="h-11 w-full" disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Memproses...' : 'Login'}
          </Button>
        </form>
      </Card>
    </main>
  )
}
