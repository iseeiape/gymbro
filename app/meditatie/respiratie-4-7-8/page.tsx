import Link from "next/link";
import { ArrowLeft, Clock, PlayCircle } from "lucide-react";

export default function Respiratie478Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🫁</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Respirația 4-7-8</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            O tehnică simplă dar puternică dezvoltată de Dr. Andrew Weil. 
            Calmează sistemul nervos în doar câteva respirații.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 3-5 minute</span>
            <span>•</span>
            <span>Potrivit pentru toți</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl border border-cyan-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Cum funcționează?</h2>
          <p className="text-slate-300 mb-4">
            Această tehnică forțează organismul să acumuleze mai mult oxigen, 
            iar expirația lungă elimină mai mult dioxid de carbon. 
            Acest lucru încetinește ritmul cardiac și calmează sistemul nervos.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl font-bold text-cyan-400 mb-1">4</div>
              <div className="text-sm text-slate-400">secunde inspir</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl font-bold text-cyan-400 mb-1">7</div>
              <div className="text-sm text-slate-400">secunde ține</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl font-bold text-cyan-400 mb-1">8</div>
              <div className="text-sm text-slate-400">secunde expir</div>
            </div>
          </div>
        </div>

        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Pașii Tehnicii</h2>

          {[
            {
              step: "1",
              title: "Poziția",
              desc: "Așează-te confortabil pe un scaun sau pe saltea, cu spatele drept. Pune o mână pe abdomen pentru a simți mișcarea.",
            },
            {
              step: "2",
              title: "Expiră complet",
              desc: "Fă o expirație profundă pe gură, eliminând tot aerul din plămâni. Fă sunetul 'haaa'.",
            },
            {
              step: "3",
              title: "Inspiră (4 secunde)",
              desc: "Închide gura și inspiră ușor pe nas timp de 4 secunde. Simte cum abdomenul se extinde.",
            },
            {
              step: "4",
              title: "Ține (7 secunde)",
              desc: "Ține aerul timp de 7 secunde. Nu te tensiona - fii blând cu tine însuți.",
            },
            {
              step: "5",
              title: "Expiră (8 secunde)",
              desc: "Expiră complet pe gură timp de 8 secunde, făcând sunetul 'haaa'. Acesta este cel mai important pas.",
            },
            {
              step: "6",
              title: "Repetă",
              desc: "Aceasta este o respirație completă. Repetă ciclul de încă 3 ori (total 4 respirații).",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
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
          <h2 className="text-xl font-bold mb-4">Când să folosești această tehnică</h2>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Înainte de somn - induce somnul rapid</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <span>În momente de anxietate sau panică</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <span>După o zi stresantă la muncă</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Când simți că inima îți bate prea tare</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl border border-cyan-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">⚠️ Important</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Nu face mai mult de 4 respirații deodată la început</li>
            <li>• Dacă simți amețeală, oprește-te și respiră normal</li>
            <li>• Poți mări treptat până la 8 respirații pe parcursul lunilor</li>
            <li>• Constanța este mai importantă decât cantitatea</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/meditatie" className="flex-1 text-center py-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            ← Toate tehnicile
          </Link>
          <Link href="/meditatie/box-breathing" className="flex-1 text-center py-4 bg-cyan-600 rounded-xl hover:bg-cyan-700 transition-colors font-semibold">
            Următoarea: Box Breathing →
          </Link>
        </div>
      </div>
    </div>
  );
}
