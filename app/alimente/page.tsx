import type { Metadata } from 'next'
import Link from 'next/link'
import { alimentPages } from './data'

export const metadata: Metadata = {
  title: 'Calorii Alimente | Tabele Nutriționale Complete | GymBro.ro',
  description: 'Baza de date cu valorile nutriționale pentru peste 200 de alimente comune. Calorii, proteine, carbohidrați și grăsimi la 100g pentru carne, lactate, legume, fructe și mai mult.',
  alternates: { canonical: 'https://gymbro.ro/alimente' },
  openGraph: {
    title: 'Calorii Alimente | Tabele Nutriționale Complete | GymBro.ro',
    description: 'Valorile nutriționale complete pentru 200+ alimente. Date corecte, tabele clare, calorii per porție.',
    url: 'https://gymbro.ro/alimente',
  },
}

const CATEGORY_ORDER = [
  'carne',
  'lactate',
  'cereale',
  'legume',
  'fructe',
  'nuci',
  'uleiuri',
  'bauturi',
]

const CATEGORY_ICONS: Record<string, string> = {
  carne: '🥩',
  lactate: '🥛',
  cereale: '🌾',
  legume: '🥦',
  fructe: '🍎',
  nuci: '🥜',
  uleiuri: '🫒',
  bauturi: '☕',
}

export default function AlimenteIndex() {
  // Group by category
  const groups: Record<string, typeof alimentPages> = {}
  for (const page of alimentPages) {
    if (!groups[page.category]) groups[page.category] = []
    groups[page.category].push(page)
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Calorii Alimente
          </h1>
          <p className="text-white/70 text-lg mb-6">
            Tabele nutriționale complete pentru {alimentPages.length} alimente comune din România.
            Calorii, proteine, carbohidrați și grăsimi la 100g.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORY_ORDER.map(cat => (
              <a
                key={cat}
                href={`#${cat}`}
                className="bg-white/5 border border-white/10 hover:border-green-500/30 text-white/70 hover:text-white text-sm px-4 py-2 rounded-full transition-all"
              >
                {CATEGORY_ICONS[cat]} {groups[cat]?.[0]?.categoryName}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {CATEGORY_ORDER.map(cat => {
          const pages = groups[cat]
          if (!pages?.length) return null
          const categoryName = pages[0].categoryName

          return (
            <section key={cat} id={cat}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{CATEGORY_ICONS[cat]}</span>
                <div>
                  <h2 className="text-2xl font-bold">{categoryName}</h2>
                  <p className="text-white/50 text-sm">{pages.length} alimente</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {pages.map(page => (
                  <Link
                    key={page.slug}
                    href={`/alimente/${page.slug}`}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-green-500/30 hover:bg-white/8 transition-all group"
                  >
                    <div className="font-medium text-sm group-hover:text-white transition-colors mb-1">
                      {page.name}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 font-bold text-lg">{page.calories}</span>
                      <span className="text-white/40 text-xs">kcal/100g</span>
                    </div>
                    <div className="text-white/40 text-xs mt-1">
                      P: {page.protein}g · C: {page.carbs}g · G: {page.fat}g
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Calculează-ți necesarul caloric zilnic</h2>
          <p className="text-white/60 mb-6">
            Folosești aceste date pentru a-ți planifica dieta? Calculatorul nostru îți calculează
            TDEE, macros și obiectivele nutriționale personalizate.
          </p>
          <Link
            href="/calculator"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-10 py-4 rounded-xl transition-all text-lg"
          >
            Calculator Calorii Gratuit →
          </Link>
        </section>
      </div>
    </main>
  )
}
