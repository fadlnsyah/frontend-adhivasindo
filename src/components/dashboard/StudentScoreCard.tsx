import { Card } from '@/components/ui/Card'

type StudentScore = {
  className: string
  module: string
  name: string
  point: string
  rank: number
}

type StudentScoreCardProps = {
  scores: StudentScore[]
}

export function StudentScoreCard({ scores }: StudentScoreCardProps) {
  return (
    <Card className="overflow-hidden p-5">
      <h3 className="mb-4 text-lg font-extrabold uppercase text-[#2a2548]">
        Nilai Peserta
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead className="text-xs uppercase text-slate-400">
            <tr>
              <th className="py-3 font-bold">Rank</th>
              <th className="py-3 font-bold">Name</th>
              <th className="py-3 font-bold">Class</th>
              <th className="py-3 font-bold">Modul</th>
              <th className="py-3 font-bold">Point</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-[#4a465f]">
            {scores.map((score) => (
              <tr key={score.rank}>
                <td className="py-4 font-bold text-[#ffdd75]">{score.rank}</td>
                <td className="py-4 font-semibold">{score.name}</td>
                <td className="py-4 uppercase text-slate-500">
                  {score.className}
                </td>
                <td className="py-4">{score.module}</td>
                <td className="py-4 font-semibold text-emerald-500">
                  {score.point}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
