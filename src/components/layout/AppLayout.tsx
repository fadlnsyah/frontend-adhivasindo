import type { ReactNode } from 'react'

import { AppSidebar } from '@/components/layout/AppSidebar'
import { AppTopbar } from '@/components/layout/AppTopbar'

type AppLayoutProps = {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f8f8fb] text-[#27243f]">
      <AppTopbar />
      <div className="flex">
        <AppSidebar />
        <main className="min-w-0 flex-1 px-7 py-7">{children}</main>
      </div>
    </div>
  )
}
