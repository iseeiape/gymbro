import type { Metadata } from 'next'
import { Bot, Salad, Dumbbell, Pill, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GymBro AI | Asistent Fitness în Română - GymBro.ro',
  description: 'Întreabă GymBro AI orice despre fitness, nutriție și antrenament. Asistent AI gratuit în română, disponibil 24/7.',
  alternates: { canonical: 'https://gymbro.ro/gymbro-ai' },
}

const features = [
  {
    icon: Salad,
    title: 'Expert în nutriție',
    description: 'Calorii, macros, meal timing, hidratare — răspunsuri bazate pe știință.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Dumbbell,
    title: 'Programe personalizate',
    description: 'PPL, Full Body, Upper/Lower — sfaturi adaptate nivelului tău.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Pill,
    title: 'Sfaturi suplimente',
    description: 'Proteine, creatină, omega-3 — ce funcționează și ce nu.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Clock,
    title: 'Disponibil 24/7',
    description: 'Răspunsuri instant oricând ai o întrebare despre fitness.',
    color: 'from-orange-500 to-amber-500',
  },
]

export default function GymBroAIPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 mb-6 shadow-lg shadow-blue-500/30">
            <Bot className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            GymBro AI 🤖
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-1">
              Asistentul tău fitness personal
            </span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Răspunsuri instant la întrebările tale despre antrenament, nutriție și suplimente.
            Gratuit, în română, 24/7.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Online • 5 mesaje gratuite per sesiune
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${f.color} mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10">
          <p className="text-2xl font-bold mb-3">Începe conversația acum 💬</p>
          <p className="text-slate-400 mb-6 text-sm">
            Chat-ul e disponibil în colțul din dreapta jos al oricărei pagini. Dă click pe butonul{' '}
            <strong className="text-white">GymBro AI</strong> pentru a-l deschide.
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <Bot className="h-4 w-4" />
            <span>Powered by Claude AI • Gratuit • Fără login</span>
          </div>
        </div>
      </section>

      {/* Tool links */}
      <section className="py-8 px-4 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-slate-500 text-sm mb-4">Sau folosește tool-urile noastre gratuite:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: 'Calculator calorii', href: '/calculator' },
              { label: 'Generator program', href: '/program-antrenament' },
              { label: 'Meal Prep', href: '/meal-prep' },
              { label: 'Calculator IMC', href: '/imc' },
              { label: 'Calculator 1RM', href: '/calculator-1rm' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
