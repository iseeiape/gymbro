"use client"
import { useState } from 'react'

interface Props {
  variant: 'popup' | 'banner' | 'inline'
  onClose?: () => void
}

const MAGNETS = [
  { id: 'plan-alimentar', emoji: '📋', title: 'Plan alimentar 7 zile', desc: 'Meniu complet calculat pentru slăbit sau masă' },
  { id: 'ghid-sala', emoji: '💪', title: 'Ghid începători sală', desc: 'Program 4 săptămâni + exerciții explicate' },
  { id: 'cheat-sheet', emoji: '🧮', title: 'Cheat Sheet Calculatoare', desc: 'Toate formulele fitness pe o singură pagină' },
]

export default function EmailCapture({ variant, onClose }: Props) {
  const [step, setStep] = useState(1)
  const [selectedMagnet, setSelectedMagnet] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!email.includes('@')) { setError('Email invalid'); return }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, leadMagnet: selectedMagnet }),
      })
      if (!res.ok) throw new Error('Eroare')
      localStorage.setItem('emailCaptured', 'true')
      setStep(3)
    } catch {
      setError('Ceva nu a mers. Încearcă din nou.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 relative">
      {variant === 'popup' && onClose && (
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white text-xl">✕</button>
      )}

      {step === 1 && (
        <>
          <h2 className="text-xl font-bold text-white mb-2">Alege resursa ta GRATUITĂ 👇</h2>
          <p className="text-white/60 text-sm mb-4">Selectează ce ți se potrivește:</p>
          <div className="space-y-3">
            {MAGNETS.map(m => (
              <button
                key={m.id}
                onClick={() => { setSelectedMagnet(m.id); setStep(2) }}
                className="w-full text-left p-4 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{m.emoji}</span>
                  <div>
                    <div className="font-semibold text-white group-hover:text-blue-400">{m.title}</div>
                    <div className="text-white/50 text-sm">{m.desc}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <button onClick={() => setStep(1)} className="text-white/50 hover:text-white text-sm mb-4">← Înapoi</button>
          <h2 className="text-xl font-bold text-white mb-2">
            {MAGNETS.find(m => m.id === selectedMagnet)?.emoji} {MAGNETS.find(m => m.id === selectedMagnet)?.title}
          </h2>
          <p className="text-white/60 text-sm mb-4">Introdu emailul și îl primești instant:</p>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder="emailul@tau.ro"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 mb-3"
          />
          {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 rounded-xl transition-all disabled:opacity-50"
          >
            {loading ? 'Se trimite...' : 'Trimite-mi gratuit 🚀'}
          </button>
          <p className="text-white/30 text-xs text-center mt-3">Fără spam. Dezabonare oricând.</p>
        </>
      )}

      {step === 3 && (
        <div className="text-center py-4">
          <div className="text-4xl mb-3">✅</div>
          <h2 className="text-xl font-bold text-white mb-2">Verifică emailul!</h2>
          <p className="text-white/60">Resursa ta e pe drum. Verifică și spam-ul dacă nu apare în inbox.</p>
        </div>
      )}
    </div>
  )
}
