import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage } from '@/pages/auth/LoginPage'
import { ContentsPage } from '@/pages/content/ContentsPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contents" element={<ContentsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
