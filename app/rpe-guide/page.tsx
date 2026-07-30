import Link from "next/link";
import { ArrowLeft, Activity, Target, TrendingUp, AlertCircle } from "lucide-react";

export default function RPEGuidePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 mb-4">
            <Activity className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Ghid RPE pentru Începători</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Învață să folosești scala de percepție a efortului pentru antrenamente mai eficiente și sigure.
          </p>
        </div>

        {/* What is RPE */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Ce este RPE?</h2>
          <p className="text-slate-300 mb-4">
            <strong>RPE (Rate of Perceived Exertion)</strong> este o scală de la 1 la 10 care măsoară 
            cât de greu simți un exercițiu. Spre deosebire de procente din 1RM, RPE se adaptează 
            la starea ta zilnică.
          </p>
          <div className="flex items-center gap-2 text-blue-400">
            <Target className="h-5 w-5" />
            <span className="font-semibold">Target: RPE 8 pentru majoritatea seturilor</span>
          </div>
        </div>

        {/* RPE Scale */}
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold">Scala RPE 1-10</h2>
          
          {[
            { rpe: "10", desc: "Eșec muscular", reps: "0 reps rezervă", color: "bg-red-500" },
            { rpe: "9", desc: "Foarte greu", reps: "1 rep rezervă", color: "bg-orange-500" },
            { rpe: "8.5", desc: "Greu", reps: "~1-2 reps", color: "bg-yellow-500" },
            { rpe: "8", desc: "Provocator", reps: "2 reps clare", color: "bg-green-500" },
            { rpe: "7.5", desc: "Moderat-greu", reps: "~2-3 reps", color: "bg-blue-500" },
            { rpe: "7", desc: "Moderat", reps: "3 reps rezervă", color: "bg-indigo-500" },
            { rpe: "6", desc: "Ușor-moderat", reps: "4+ reps", color: "bg-purple-500" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
              <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center font-bold text-lg`}>
                {item.rpe}
              </div>
              <div>
                <div className="font-semibold">{item.desc}</div>
                <div className="text-sm text-slate-400">{item.reps}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Why RPE 8 */}
        <div className="bg-white/5 rounded-2xl border border-white/10 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-400" />
            De ce RPE 8?
          </h2>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <span>Stimul suficient pentru creștere musculară</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <span>Recuperare rezonabilă (24-48 ore)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <span>Risc scăzut de accidentare</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <span>Sustenabil pe termen lung</span>
            </li>
          </ul>
        </div>

        {/* Common Mistakes */}
        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl border border-red-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-400" />
            Erori Comune
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-red-400 mb-1">Ego Lifting</h3>
              <p className="text-slate-300 text-sm">Zici că e RPE 8, dar de fapt e RPE 10. Fii onest cu tine!</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-400 mb-1">Prea Mult, Prea Des</h3>
              <p className="text-slate-300 text-sm">Toate seturile la RPE 9-10 duc la epuizare rapidă.</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-400 mb-1">Ignorarea Stării Zilei</h3>
              <p className="text-slate-300 text-sm">Dacă ești obosit, ajustează greutatea, nu forța aceeași intensitate.</p>
            </div>
          </div>
        </div>

        {/* Progression */}
        <div className="bg-white/5 rounded-2xl border border-white/10 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Progresie cu RPE</h2>
          <p className="text-slate-300 mb-4">
            Când poți face toate seturile la capătul superior al range-ului la RPE 8, 
            crește greutatea și resetează reps.
          </p>
          <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
            <div className="text-green-400">Săptămâna 1: 60kg x 8,8,7 @ RPE 8</div>
            <div className="text-blue-400">Săptămâna 2: 60kg x 8,8,8 @ RPE 8 ✓</div>
            <div className="text-purple-400">Săptămâna 3: 62.5kg x 8,7,7 @ RPE 8</div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/blog/ghid-complet-rpe-scala-perceptie-efort" className="flex-1 text-center py-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
            Ghid Complet RPE →
          </Link>
          <Link href="/program-antrenament" className="flex-1 text-center py-4 bg-green-600 rounded-xl hover:bg-green-700 transition-colors font-semibold">
            Generează Program →
          </Link>
        </div>
      </div>
    </div>
  );
}
