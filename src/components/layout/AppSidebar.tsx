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

const mainMenus = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Modul', icon: BookOpen },
  { label: 'Peserta', icon: UsersRound },
  { label: 'Group Chat', icon: MessageCircle },
  { label: 'Pemateri', icon: UserRound },
]

const profileMenus = [
  { label: 'Settings', icon: Settings },
  { label: 'Kalender', icon: CalendarDays },
]

export function AppSidebar() {
  return (
    <aside className="flex min-h-[calc(100vh-5rem)] w-64 shrink-0 flex-col bg-[#292343] px-5 py-7 text-white">
      <nav className="space-y-2.5">
        {mainMenus.map((item) => (
          <button
            className="flex h-12 w-full items-center gap-3 rounded-lg px-4 text-left text-sm font-medium text-white/68 transition hover:bg-white/10 hover:text-white"
            key={item.label}
            type="button"
          >
            <item.icon className="size-4" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-9 border-t border-white/14 pt-5">
        <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wide text-white/55">
          Profile
        </p>
        <nav className="space-y-2.5">
          {profileMenus.map((item) => (
            <button
              className="flex h-12 w-full items-center gap-3 rounded-lg px-4 text-left text-sm font-medium text-white/68 transition hover:bg-white/10 hover:text-white"
              key={item.label}
              type="button"
            >
              <item.icon className="size-4" />
              <span>{item.label}</span>
            </button>
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
