interface TLDRBoxProps {
  points: string[]
}

export function TLDRBox({ points }: TLDRBoxProps) {
  return (
    <div className="article-summary my-6 p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30">
      <div className="flex items-center gap-2 mb-3 font-bold text-blue-400">
        <span>⚡</span>
        <span>TL;DR — Rezumat rapid</span>
      </div>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-300">
            <span className="text-blue-400 mt-0.5">→</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
