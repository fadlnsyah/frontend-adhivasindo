import { AppLayout } from '@/components/layout/AppLayout'

export function ContentsPage() {
  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-8.5rem)] rounded-xl border border-dashed border-slate-200 bg-white p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#8b7cf6]">
          Content
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#27243f]">
          LMS Content Area
        </h2>
      </div>
    </AppLayout>
  )
}
