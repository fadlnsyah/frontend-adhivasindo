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
    <aside className="flex min-h-screen w-64 shrink-0 flex-col bg-[#2a2548] px-5 py-7 text-white">
      <nav className="space-y-3">
        {mainMenus.map((item) => (
          <button
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
            key={item.label}
            type="button"
          >
            <item.icon className="size-4" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-9 border-t border-white/15 pt-5">
        <p className="mb-4 px-4 text-xs font-semibold uppercase tracking-wide text-white/55">
          Profile
        </p>
        <nav className="space-y-3">
          {profileMenus.map((item) => (
            <button
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
              key={item.label}
              type="button"
            >
              <item.icon className="size-4" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto border-t border-white/15 pt-7">
        <button
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
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
