import { Bell, Mail, Search, Settings } from 'lucide-react'

export function AppTopbar() {
  return (
    <header className="flex h-20 items-center gap-8 border-b border-slate-100 bg-white px-7">
      <div className="flex min-w-72 items-center gap-3">
        <div className="relative size-11">
          <span className="absolute left-1 top-2 h-8 w-5 -rotate-12 rounded-full border-[5px] border-[#0b77bd]" />
          <span className="absolute right-1 top-0 h-10 w-5 rotate-12 rounded-full bg-[#79bd42]" />
        </div>
        <span className="text-[1.7rem] font-bold leading-none tracking-tight text-[#16456d]">
          adhivasindo
        </span>
      </div>

      <h1 className="shrink-0 text-sm font-extrabold uppercase tracking-wide text-[#2a2548]">
        Learning Management System
      </h1>

      <div className="ml-auto flex items-center gap-5">
        <label className="flex h-11 w-80 items-center gap-3 rounded-md border border-slate-200 bg-white px-4 text-slate-400 shadow-sm shadow-slate-100">
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
          <div className="size-12 rounded-full bg-gradient-to-br from-[#f6efe8] via-[#e5d2c4] to-[#c8a48d]" />
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
