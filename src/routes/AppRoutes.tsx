import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage } from '@/pages/auth/LoginPage'
import { CreateContentPage } from '@/pages/content/CreateContentPage'
import { ContentsPage } from '@/pages/content/ContentsPage'
import { DashboardPage } from '@/pages/dashboard/DashboardPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProtectedRoute } from '@/routes/ProtectedRoute'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contents"
        element={
          <ProtectedRoute>
            <ContentsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contents/create"
        element={
          <ProtectedRoute>
            <CreateContentPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
