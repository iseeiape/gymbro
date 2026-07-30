import Link from "next/link";
import { ArrowLeft, Clock, Moon, Star } from "lucide-react";

export default function SleepMeditationPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌙</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sleep Meditation</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Adoarme natural și profund cu această meditație ghidată. 
            Fără pastile, fără efort - doar relaxare profundă.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 15-20 minute</span>
            <span>•</span>
            <span className="flex items-center gap-2"><Moon className="h-4 w-4 text-indigo-400" /> Pentru somn</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl border border-indigo-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Cum funcționează?</h2>
          <p className="text-slate-300 mb-4">
            Această meditație combină relaxarea progresivă musculară cu vizualizări calme 
            pentru a induce starea naturală de somn. Te vei trezi odihnit și refăcut.
          </p>
          <div className="flex items-center gap-2 text-indigo-400">
            <Star className="h-4 w-4" />
            <span className="text-sm">Folosită de 10.000+ oameni pentru a scăpa de insomnie</span>
          </div>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold">Ghid pentru Somn Profund</h2>

          {[
            { step: "1", title: "Pregătirea", desc: "Stinge lumina. Pune telefonul pe silent. Asigură-te că ești confortabil în pat. Temperatura ideală: 18-20°C." },
            { step: "2", title: "Scanarea relaxării", desc: "Începe de la degetele picioarelor. Imaginează-ți că fiecare parte a corpului devine grea și caldă. 'Picioarele mele sunt grele și relaxate...'" },
            { step: "3", title: "Respirația de somn", desc: "Inspiră pe 4, ține pe 7, expiră pe 8. Ritmul lung stimulează parasimpaticul - sistemul de odihnă." },
            { step: "4", title: "Vizualizarea", desc: "Imaginează-ți că plutești pe un nor sau că ești pe o plajă liniștită la apus. Detaliază senzațiile: sunete, mirosuri, căldura." },
            { step: "5", title: "Lăsarea", desc: "Dacă apar gânduri, nu te lupta cu ele. Observă-le și spune 'Gânduri de somn'. Apoi revino la respirație." },
            { step: "6", title: "Adormirea", desc: "Nu te forța să adormi. Concentrarea pe relaxare va aduce somnul natural. Încredințează-te procesului." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 rounded-2xl border border-white/10 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Rutina ideală de seară</h2>
          <div className="space-y-3">
            {[
              { time: "21:00", activity: "Ultima masă ușoară" },
              { time: "21:30", activity: "Fără ecrane (telefon, laptop, TV)" },
              { time: "22:00", activity: "Duș călduț sau baie relaxantă" },
              { time: "22:15", activity: "Meditație pentru somn" },
              { time: "22:30", activity: "Adormire naturală" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0">
                <span className="text-indigo-400 font-mono w-12">{item.time}</span>
                <span className="text-slate-300">{item.activity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl border border-indigo-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">💡 Sfaturi pentru insomnie</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Dacă nu adormi în 20 minute, ridică-te și citește ceva plictisitor</li>
            <li>• Folosește patul doar pentru somn și intimitate - nu pentru muncă</li>
            <li>• Evită cafeina după ora 14:00</li>
            <li>• Fă mișcare în timpul zilei, dar nu cu 3 ore înainte de somn</li>
            <li>• Menține aceeași oră de culcare în fiecare zi, inclusiv în weekend</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/meditatie/morning-meditation" className="flex-1 text-center py-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            ← Morning Meditation
          </Link>
          <Link href="/yoga/yoga-stres" className="flex-1 text-center py-4 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors font-semibold">
            Yoga pentru Stres →
          </Link>
        </div>
      </div>
    </div>
  );
}
