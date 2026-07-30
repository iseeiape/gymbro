import type { Metadata } from 'next'
import Link from 'next/link'
import { dietPages } from './data'

export const metadata: Metadata = {
  title: 'Diete Personalizate pentru Fiecare Obiectiv | Planuri Alimentare | GymBro.ro',
  description: 'Găsește planul alimentar perfect pentru tine: diete de slăbit, masă musculară, definire, forță și energie. 100+ planuri personalizate cu meniuri, macro-uri și sfaturi practice.',
  alternates: { canonical: 'https://gymbro.ro/diete' },
  openGraph: {
    title: 'Diete Personalizate pentru Fiecare Obiectiv | GymBro.ro',
    description: '100+ planuri alimentare personalizate: slăbit, masă musculară, definire, forță și energie.',
    url: 'https://gymbro.ro/diete',
  },
}

const objectives = [
  { key: 'slabire', label: 'Slăbit', emoji: '🔥', color: 'orange', description: 'Pierde grăsime sustenabil cu planuri adaptate stilului tău de viață' },
  { key: 'masa', label: 'Masă Musculară', emoji: '💪', color: 'blue', description: 'Construiește masă musculară curată cu nutriție optimizată pentru bulk' },
  { key: 'definire', label: 'Definire', emoji: '⚡', color: 'purple', description: 'Sculptează corpul cu definiție musculară și deficit caloric inteligent' },
  { key: 'mentinere', label: 'Menținere', emoji: '⚖️', color: 'green', description: 'Menține greutatea ideală cu obiceiuri alimentare echilibrate' },
  { key: 'forta', label: 'Forță', emoji: '🏋️', color: 'red', description: 'Maximizează forța și performanța cu nutriție pentru powerlifting și forță' },
  { key: 'energie', label: 'Energie', emoji: '✨', color: 'yellow', description: 'Boost de energie naturală și vitalitate cu nutriție anti-oboseală' },
  { key: 'keto', label: 'Keto', emoji: '🥑', color: 'teal', description: 'Intră în cetoză și arde grăsime ca principal combustibil' },
  { key: 'vegetariana', label: 'Vegetarian', emoji: '🥗', color: 'emerald', description: 'Nutriție vegetariană completă cu ouă și lactate pentru orice obiectiv' },
  { key: 'vegana', label: 'Vegan', emoji: '🌱', color: 'lime', description: 'Nutriție 100% din plante pentru performanță și sănătate optimă' },
]

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', badge: 'bg-orange-500/20 text-orange-300 border-orange-500/30' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400', badge: 'bg-green-500/20 text-green-300 border-green-500/30' },
  red: { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-400', badge: 'bg-red-500/20 text-red-300 border-red-500/30' },
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: 'text-yellow-400', badge: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
  teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/20', text: 'text-teal-400', badge: 'bg-teal-500/20 text-teal-300 border-teal-500/30' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
  lime: { bg: 'bg-lime-500/10', border: 'border-lime-500/20', text: 'text-lime-400', badge: 'bg-lime-500/20 text-lime-300 border-lime-500/30' },
}

export default function DietIndexPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-5xl mb-4">🥗</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Diete Personalizate
          </h1>
          <p className="text-white/70 text-lg mb-8">
            100+ planuri alimentare pentru fiecare obiectiv și stil de viață. Găsește dieta perfectă pentru tine.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm border border-orange-500/30">
              100 planuri disponibile
            </div>
            <div className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm border border-purple-500/30">
              8 obiective diferite
            </div>
            <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm border border-green-500/30">
              Macro-uri + meniuri complete
            </div>
          </div>
        </div>
      </div>

      {/* Groups */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {objectives.map(obj => {
          const pages = dietPages.filter(p => p.objective === obj.key)
          if (pages.length === 0) return null
          const colors = colorMap[obj.color] || colorMap.orange

          return (
            <section key={obj.key} id={obj.key}>
              {/* Section header */}
              <div className={`${colors.bg} ${colors.border} border rounded-2xl p-6 mb-6`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{obj.emoji}</span>
                  <h2 className={`text-2xl font-bold ${colors.text}`}>{obj.label}</h2>
                  <span className={`text-xs px-2 py-1 rounded-full border ${colors.badge}`}>
                    {pages.length} planuri
                  </span>
                </div>
                <p className="text-white/60">{obj.description}</p>
              </div>

              {/* Diet cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {pages.map(page => (
                  <Link
                    key={page.slug}
                    href={`/diete/${page.slug}`}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-orange-500/30 hover:bg-white/8 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-sm leading-tight group-hover:text-orange-400 transition-colors">
                        {page.h1}
                      </h3>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded">
                        {page.calories.min}–{page.calories.max} kcal
                      </span>
                      <span className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded">
                        P: {page.macros.protein}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto px-4 pb-16 text-center">
        <div className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3">Nu știi ce dietă să alegi?</h2>
          <p className="text-white/60 mb-6">
            Calculatorul nostru de calorii îți arată exact câte calorii ai nevoie pentru obiectivul tău.
          </p>
          <Link
            href="/calculator"
            className="inline-block bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-500 hover:to-purple-500 text-white font-bold px-8 py-3 rounded-xl transition-all"
          >
            Calculează-ți Caloriile Gratuit
          </Link>
        </div>
      </div>
    </main>
  )
}
