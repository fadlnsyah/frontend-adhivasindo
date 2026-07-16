import type { ReactNode } from 'react'
import { useState } from 'react'

import { AppSidebar } from '@/components/layout/AppSidebar'
import { AppTopbar } from '@/components/layout/AppTopbar'

type AppLayoutProps = {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f7f7fb] text-[#27243f]">
      <AppTopbar onMenuClick={() => setIsSidebarOpen(true)} />
      <div className="flex">
        <div className="hidden lg:block">
          <AppSidebar />
        </div>
        {isSidebarOpen ? (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              aria-label="Close sidebar"
              className="absolute inset-0 bg-slate-950/40"
              onClick={() => setIsSidebarOpen(false)}
              type="button"
            />
            <div className="relative h-full">
              <AppSidebar onNavigate={() => setIsSidebarOpen(false)} />
            </div>
          </div>
        ) : null}
        <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
          {children}
        </main>
      </div>
    </div>
  )
}
