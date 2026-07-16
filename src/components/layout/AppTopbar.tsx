import { Bell, Mail, Search, Settings } from 'lucide-react'

export function AppTopbar() {
  return (
    <header className="flex h-20 items-center gap-8 bg-white px-7">
      <div className="flex min-w-72 items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-[#f4f9ff]">
          <span className="text-xl font-bold text-[#0b77bd]">a</span>
        </div>
        <span className="text-2xl font-bold tracking-tight text-[#16456d]">
          adhivasindo
        </span>
      </div>

      <h1 className="shrink-0 text-sm font-bold uppercase tracking-wide text-[#2a2548]">
        Learning Management System
      </h1>

      <div className="ml-auto flex items-center gap-5">
        <label className="flex h-11 w-80 items-center gap-3 rounded-md border border-slate-200 bg-white px-4 text-slate-400 shadow-sm">
          <Search className="size-4" />
          <input
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            placeholder="Search class..."
            readOnly
            type="search"
          />
        </label>

        <button
          className="relative flex size-10 items-center justify-center rounded-full text-slate-400 hover:bg-slate-50"
          type="button"
        >
          <Bell className="size-5" />
        </button>

        <button
          className="relative flex size-10 items-center justify-center rounded-full text-slate-400 hover:bg-slate-50"
          type="button"
        >
          <Mail className="size-5" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-[#ff776d]" />
        </button>

        <div className="flex items-center gap-4 pl-7">
          <div className="size-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-100" />
          <button
            className="flex size-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-50"
            type="button"
          >
            <Settings className="size-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
