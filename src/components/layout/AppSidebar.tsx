import {
  BookOpen,
  CalendarDays,
  LayoutDashboard,
  LogOut,
  MessageCircle,
  Settings,
  UserRound,
  UsersRound,
} from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'

const mainMenus = [
  { label: 'Dashboard', icon: LayoutDashboard, to: '/dashboard' },
  { label: 'Modul', icon: BookOpen, to: '/contents' },
  { label: 'Peserta', icon: UsersRound, to: '/dashboard' },
  { label: 'Group Chat', icon: MessageCircle, to: '/dashboard' },
  { label: 'Pemateri', icon: UserRound, to: '/dashboard' },
]

const profileMenus = [
  { label: 'Settings', icon: Settings, to: '/dashboard' },
  { label: 'Kalender', icon: CalendarDays, to: '/dashboard' },
]

type AppSidebarProps = {
  onNavigate?: () => void
}

export function AppSidebar({ onNavigate }: AppSidebarProps) {
  const location = useLocation()

  function isActive(path: string) {
    if (path === '/contents') {
      return location.pathname.startsWith('/contents')
    }

    return location.pathname === path
  }

  return (
    <aside className="flex min-h-full w-64 shrink-0 flex-col bg-[#292343] px-5 py-7 text-white lg:min-h-[calc(100vh-5rem)]">
      <nav className="space-y-2.5">
        {mainMenus.map((item) => (
          <NavLink
            className={cn(
              'flex h-12 w-full items-center gap-3 rounded-lg px-4 text-left text-sm font-medium text-white/68 transition hover:bg-white/10 hover:text-white',
              isActive(item.to) && 'bg-white text-[#292343] shadow-sm hover:bg-white',
            )}
            key={item.label}
            onClick={onNavigate}
            to={item.to}
          >
            <item.icon className="size-4" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-9 border-t border-white/14 pt-5">
        <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wide text-white/55">
          Profile
        </p>
        <nav className="space-y-2.5">
          {profileMenus.map((item) => (
            <NavLink
              className="flex h-12 w-full items-center gap-3 rounded-lg px-4 text-left text-sm font-medium text-white/68 transition hover:bg-white/10 hover:text-white"
              key={item.label}
              onClick={onNavigate}
              to={item.to}
            >
              <item.icon className="size-4" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto border-t border-white/14 pt-7">
        <button
          className="flex h-12 w-full items-center gap-3 rounded-lg px-4 text-left text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
          type="button"
        >
          <span className="flex size-5 items-center justify-center rounded-full bg-[#ff776d]">
            <LogOut className="size-3.5" />
          </span>
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  )
}
