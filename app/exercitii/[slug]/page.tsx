"use client"
import { exercisePages } from '../data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { use } from 'react'

export default function ExercisePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const page = exercisePages.find(p => p.slug === slug)
  if (!page) notFound()

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2 mb-4">
            <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/30">
              {page.muscleName}
            </span>
            <span className="bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full border border-purple-500/30">
              {page.variantName}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{page.h1}</h1>
          <p className="text-white/70 text-lg">{page.intro}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        {/* Exercises */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Exerciții Recomandate</h2>
          <div className="space-y-4">
            {page.exercises.map((ex, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-lg text-white">{i + 1}. {ex.name}</h3>
                    <p className="text-white/50 text-sm mt-1">{ex.tip}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-blue-400 font-bold">{ex.sets}</div>
                    <div className="text-white/50 text-sm">{ex.reps}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Sfaturi Practice</h2>
          <ul className="space-y-3">
            {page.tips.map((tip, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-green-400 mt-0.5">✓</span>
                <span className="text-white/80">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold mb-2">Calculează-ți programul personalizat</h2>
          <p className="text-white/60 mb-4">Folosește calculatoarele GymBro pentru rezultate optime</p>
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
          <h2 className="text-2xl font-bold mb-4">Pagini Înrudite</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {page.relatedSlugs.map(relSlug => {
              const related = exercisePages.find(p => p.slug === relSlug)
              if (!related) return null
              return (
                <Link
                  key={relSlug}
                  href={`/exercitii/${relSlug}`}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-blue-500/30 transition-all text-sm font-medium"
                >
                  {related.h1}
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
