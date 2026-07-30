import type { Metadata } from 'next'
import Link from 'next/link'
import { exercisePages } from './data'

export const metadata: Metadata = {
  title: 'Exercitii pentru Fiecare Grupa Musculara | GymBro.ro',
  description: 'Ghiduri complete de exercitii pentru toate grupele musculare. Variante acasa, sala, incepatori si avansati. Gratuit.',
  alternates: { canonical: 'https://gymbro.ro/exercitii' },
}

export default function ExercitiiIndex() {
  const grouped = exercisePages.reduce((acc, page) => {
    if (!acc[page.muscle]) acc[page.muscle] = { name: page.muscleName, pages: [] as typeof exercisePages }
    acc[page.muscle].pages.push(page)
    return acc
  }, {} as Record<string, { name: string; pages: typeof exercisePages }>)

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Exerciții pentru Fiecare Grupă Musculară</h1>
        <p className="text-white/60 max-w-2xl mx-auto">100+ ghiduri complete — acasă, sală, începători și avansați</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        {Object.entries(grouped).map(([muscle, group]) => (
          <div key={muscle}>
            <h2 className="text-xl font-bold mb-4 text-blue-400">{group.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {group.pages.map(page => (
                <Link
                  key={page.slug}
                  href={`/exercitii/${page.slug}`}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 hover:border-blue-500/30 transition-all text-sm text-center"
                >
                  {page.variantName}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
