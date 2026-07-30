import { dietPages } from '../data'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function DietPage({ params }: { params: { slug: string } }) {
  const page = dietPages.find(p => p.slug === params.slug)
  if (!page) notFound()

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className="bg-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full border border-orange-500/30">
              {page.objectiveName}
            </span>
            <span className="bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full border border-purple-500/30">
              {page.profileName}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{page.h1}</h1>
          <p className="text-white/70 text-lg">{page.intro}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        {/* Calorie range */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Calorii Zilnice Recomandate</h2>
          <div className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">
              {page.calories.min} - {page.calories.max}
            </div>
            <div className="text-white/60">kcal pe zi</div>
          </div>
        </section>

        {/* Macros */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Raport Macronutrienți</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-400">{page.macros.protein}</div>
              <div className="text-white/50 text-sm">Proteine</div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">{page.macros.carbs}</div>
              <div className="text-white/50 text-sm">Carbohidrați</div>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-red-400">{page.macros.fat}</div>
              <div className="text-white/50 text-sm">Grăsimi</div>
            </div>
          </div>
        </section>

        {/* Meals */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Exemplu Meniu Zilnic</h2>
          <div className="space-y-4">
            {page.meals.map((meal, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-bold text-lg text-orange-400">{meal.name}</h3>
                    <p className="text-white/60 text-sm mt-1">{meal.description}</p>
                  </div>
                  <div className="text-purple-400 font-bold whitespace-nowrap">{meal.calories} kcal</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Foods */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Alimente Recomandate</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {page.foods.map((food, i) => (
              <div key={i} className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 text-center text-sm">
                {food}
              </div>
            ))}
          </div>
        </section>

        {/* Avoid */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Alimente de Evitat</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {page.avoid.map((food, i) => (
              <div key={i} className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-center text-sm">
                {food}
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Sfaturi pentru Reușită</h2>
          <ul className="space-y-3">
            {page.tips.map((tip, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-orange-400 mt-0.5 flex-shrink-0">✓</span>
                <span className="text-white/80">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold mb-2">Calculează-ți caloriile personalizate</h2>
          <p className="text-white/60 mb-4">Află exact câte calorii ai nevoie pentru {page.objectiveName.toLowerCase()}</p>
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
          <h2 className="text-2xl font-bold mb-4">Diete Similare</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {page.relatedSlugs.map(slug => {
              const related = dietPages.find(p => p.slug === slug)
              if (!related) return null
              return (
                <Link key={slug} href={`/diete/${slug}`}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-orange-500/30 transition-all text-sm">
                  {related.h1}
                </Link>
              )
            })}
          </div>
        </section>

        {/* Back to index */}
        <div className="pt-4 pb-8 text-center">
          <Link href="/diete" className="text-orange-400 hover:text-orange-300 transition-colors text-sm">
            ← Înapoi la toate dietele
          </Link>
        </div>
      </div>
    </main>
  )
}
