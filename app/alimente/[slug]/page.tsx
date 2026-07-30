"use client"
import { alimentPages } from '../data'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function AlimentPage({ params }: { params: { slug: string } }) {
  const page = alimentPages.find(p => p.slug === params.slug)
  if (!page) notFound()

  const portiiCalculate = page.portionSizes.map(p => ({
    ...p,
    calories: Math.round(page.calories * p.grams / 100),
    protein: Math.round(page.protein * p.grams / 100 * 10) / 10,
    carbs: Math.round(page.carbs * p.grams / 100 * 10) / 10,
    fat: Math.round(page.fat * p.grams / 100 * 10) / 10,
  }))

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2 mb-4">
            <Link
              href="/alimente"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              ← Toate alimentele
            </Link>
            <span className="text-white/20 text-xs">|</span>
            <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/30">
              {page.categoryName}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{page.h1}</h1>
          <p className="text-white/70 text-lg">{page.intro}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        {/* Macro table per 100g */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Valori Nutriționale la 100g</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { label: 'Calorii', value: page.calories, unit: 'kcal', colorBg: 'bg-blue-500/10', colorBorder: 'border-blue-500/20', colorText: 'text-blue-400' },
              { label: 'Proteine', value: page.protein, unit: 'g', colorBg: 'bg-green-500/10', colorBorder: 'border-green-500/20', colorText: 'text-green-400' },
              { label: 'Carbohidrați', value: page.carbs, unit: 'g', colorBg: 'bg-yellow-500/10', colorBorder: 'border-yellow-500/20', colorText: 'text-yellow-400' },
              { label: 'Grăsimi', value: page.fat, unit: 'g', colorBg: 'bg-red-500/10', colorBorder: 'border-red-500/20', colorText: 'text-red-400' },
              { label: 'Fibre', value: page.fiber, unit: 'g', colorBg: 'bg-purple-500/10', colorBorder: 'border-purple-500/20', colorText: 'text-purple-400' },
            ].map(m => (
              <div key={m.label} className={`${m.colorBg} border ${m.colorBorder} rounded-xl p-4 text-center`}>
                <div className={`text-2xl font-bold ${m.colorText}`}>{m.value}</div>
                <div className="text-white/50 text-xs">{m.unit}</div>
                <div className="text-white/70 text-sm mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Portii */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Calorii per Porție</h2>
          <div className="space-y-3">
            {portiiCalculate.map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center">
                <div>
                  <div className="font-medium">{p.name} ({p.grams}g)</div>
                  <div className="text-white/50 text-sm">{p.protein}g proteină • {p.carbs}g carbo • {p.fat}g grăsimi</div>
                </div>
                <div className="text-blue-400 font-bold text-lg">{p.calories} kcal</div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Beneficii</h2>
          <ul className="space-y-3">
            {page.benefits.map((b, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-white/80">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How to eat */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Cum să-l Incluzi în Dietă</h2>
          <ul className="space-y-3">
            {page.howToEat.map((h, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-blue-400 font-bold">→</span>
                <span className="text-white/80">{h}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold mb-2">Calculează-ți caloriile zilnice</h2>
          <p className="text-white/60 mb-4">Știi acum câte calorii are {page.name}. Calculează totalul zilnic.</p>
          <Link
            href={page.ctaLink}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-3 rounded-xl transition-all"
          >
            {page.ctaText}
          </Link>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Întrebări Frecvente</h2>
          <div className="space-y-4">
            {page.faqs.map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-white/70 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Alimente Similare</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {page.relatedSlugs.map(slug => {
              const related = alimentPages.find(p => p.slug === slug)
              if (!related) return null
              return (
                <Link key={slug} href={`/alimente/${slug}`}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-green-500/30 transition-all text-sm">
                  <div className="font-medium">{related.name}</div>
                  <div className="text-green-400">{related.calories} kcal/100g</div>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
