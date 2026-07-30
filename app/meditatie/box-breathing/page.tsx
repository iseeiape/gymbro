import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function BoxBreathingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📦</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Box Breathing</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tehnica pătratului folosită de Navy SEALs pentru calm și concentrare în situații de stres maxim.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 5 minute</span>
            <span>•</span>
            <span>Navy SEALs technique</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Cum funcționează?</h2>
          <p className="text-slate-300 mb-4">
            Box breathing creează un ritm egal care echilibrează sistemul nervos 
            și crește concentrarea. Este folosit de elita militară în situații de stres.
          </p>
          <div className="grid grid-cols-4 gap-2 text-center">
            {["Inspiră 4s", "Ține 4s", "Expiră 4s", "Pauză 4s"].map((step, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-400 mb-1">4</div>
                <div className="text-xs text-slate-400">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold">Pașii Tehnicii</h2>
          
          {[
            { step: "1", title: "Poziția", desc: "Așează-te confortabil cu spatele drept. Poți sta pe scaun sau în picioare în poziție de atenție." },
            { step: "2", title: "Inspiră (4 sec)", desc: "Inspiră lent pe nas, numărând în gând 1-2-3-4. Simte cum aerul umple plămânii." },
            { step: "3", title: "Ține (4 sec)", desc: "Ține aerul fără să te tensionezi. Numără 1-2-3-4. Corpul rămâne relaxat." },
            { step: "4", title: "Expiră (4 sec)", desc: "Expiră lent pe nas sau gură, numărând 1-2-3-4. Golește complet plămânii." },
            { step: "5", title: "Pauză (4 sec)", desc: "Rămâi fără aer timp de 4 secunde înainte de următoarea inspirație." },
            { step: "6", title: "Repetă", desc: "Repetă ciclul de 5-10 ori sau timp de 5 minute. Creează un ritm constant ca un metronom." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
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

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Când să folosești</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Înainte de prezentări importante</li>
            <li>• Când simți că pierzi concentrarea</li>
            <li>• În trafic sau situații frustrante</li>
            <li>• Înainte de competiții sau examene</li>
            <li>• Pentru claritate mentală la locul de muncă</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/meditatie/respiratie-4-7-8" className="flex-1 text-center py-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            ← Respirația 4-7-8
          </Link>
          <Link href="/meditatie/body-scan" className="flex-1 text-center py-4 bg-purple-600 rounded-xl hover:bg-purple-700 transition-colors font-semibold">
            Body Scan →
          </Link>
        </div>
      </div>
    </div>
  );
}
