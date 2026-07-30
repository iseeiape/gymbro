"use client";

import { useState } from "react";
import { Calculator, ChevronRight, RotateCcw, Dumbbell, ArrowRight, TrendingUp } from "lucide-react";
import { ProudShare } from "../components/ProudShare";
import Link from "next/link";

interface OneRMResult {
  epley: number;
  brzycki: number;
  lander: number;
  media: number;
  percentages: { pct: number; kg: number }[];
}

const EXERCISES = [
  "Squat",
  "Bench Press",
  "Deadlift",
  "Overhead Press",
  "Altul",
];

const PERCENTAGES = [50, 60, 70, 75, 80, 85, 90, 95, 100];

export default function Calculator1rmPage() {
  const [formData, setFormData] = useState({
    weight: "",
    reps: "",
    exercise: "Squat",
  });
  const [result, setResult] = useState<OneRMResult | null>(null);
  const [loading, setLoading] = useState(false);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const w = parseFloat(formData.weight);
      const r = parseInt(formData.reps);

      const epley = Math.round(w * (1 + r / 30) * 10) / 10;
      const brzycki = r === 1 ? w : Math.round((w * 36 / (37 - r)) * 10) / 10;
      const lander = Math.round(((100 * w) / (101.3 - 2.67123 * r)) * 10) / 10;
      const media = Math.round(((epley + brzycki + lander) / 3) * 10) / 10;

      const percentages = PERCENTAGES.map((pct) => ({
        pct,
        kg: Math.round((media * pct) / 100 * 10) / 10,
      }));

      setResult({ epley, brzycki, lander, media, percentages });
      setLoading(false);
    }, 800);
  };

  const reset = () => setResult(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6">
            <Dumbbell className="h-4 w-4" />
            Formule Epley · Brzycki · Lander
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
            Calculator 1RM
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Calculează maximul tău pe o repetare (One Rep Max) pentru orice exercițiu și obține tabelul de procente complet.
          </p>
        </div>

        {!result ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <form onSubmit={calculate} className="space-y-6">
                {/* Exercise dropdown */}
                <div>
                  <label className="block text-sm font-medium mb-2">Exercițiu</label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-orange-500 focus:outline-none"
                    value={formData.exercise}
                    onChange={(e) => setFormData({ ...formData, exercise: e.target.value })}
                  >
                    {EXERCISES.map((ex) => (
                      <option key={ex} value={ex}>{ex}</option>
                    ))}
                  </select>
                </div>

                {/* Weight & Reps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Greutate ridicată (kg)</label>
                    <input
                      type="number"
                      required
                      min="1"
                      max="500"
                      step="0.5"
                      placeholder="100"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-orange-500 focus:outline-none"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Număr repetări (1–20)</label>
                    <input
                      type="number"
                      required
                      min="1"
                      max="20"
                      placeholder="5"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-orange-500 focus:outline-none"
                      value={formData.reps}
                      onChange={(e) => setFormData({ ...formData, reps: e.target.value })}
                    />
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 text-sm text-orange-300">
                  💡 <strong>Sfat:</strong> Formulele sunt cele mai precise pentru 2–8 repetări. Folosește o greutate cu care poți face maxim 10 rep curate.
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <><RotateCcw className="h-5 w-5 animate-spin" /> Calculez...</>
                  ) : (
                    <>Calculează 1RM <ChevronRight className="h-5 w-5" /></>
                  )}
                </button>
              </form>
            </div>

            {/* Explanation */}
            <div className="mt-6 bg-white/5 rounded-2xl p-6 border border-white/10">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-orange-400" />
                De ce contează 1RM?
              </h2>
              <p className="text-slate-400 text-sm mb-4">
                1RM (One Rep Maximum) este standardul de referință în antrenamentul de forță. Știind 1RM-ul tău, poți:
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">→</span>
                  <span><strong className="text-white">Măsura progresul</strong> — compară 1RM-ul de azi cu cel de acum 3 luni</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">→</span>
                  <span><strong className="text-white">Programa antrenamentele</strong> — folosești procente din 1RM pentru intensitate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">→</span>
                  <span><strong className="text-white">Evita accidentările</strong> — știi exact când să te oprești</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">→</span>
                  <span><strong className="text-white">Compara cu alți sportivi</strong> — 1RM standardizat la greutatea corporală</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* Main Result */}
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-8 border border-orange-500/30 mb-6 text-center">
              <p className="text-slate-400 text-sm mb-1">1RM estimat — {formData.exercise}</p>
              <p className="text-xs text-slate-500 mb-4">Bazat pe {formData.weight}kg × {formData.reps} repetări</p>
              <div className="text-7xl font-bold text-orange-400 mb-2">{result.media} kg</div>
              <div className="text-slate-400 text-sm">Media celor 3 formule</div>
            </div>

            {/* Formulas comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { name: "Epley", value: result.epley, desc: "Cea mai populară formulă", badge: "" },
                { name: "Brzycki", value: result.brzycki, desc: "Precisă pentru 2–10 rep", badge: "" },
                { name: "Lander", value: result.lander, desc: "Spectru larg de repetări", badge: "" },
              ].map((f) => (
                <div key={f.name} className="bg-white/5 rounded-2xl p-5 border border-white/10 text-center">
                  <div className="text-sm text-slate-500 mb-1">Formula {f.name}</div>
                  <div className="text-3xl font-bold text-orange-400 mb-1">{f.value} kg</div>
                  <div className="text-xs text-slate-500">{f.desc}</div>
                </div>
              ))}
            </div>

            {/* Percentages Table — the main attraction */}
            <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden mb-6">
              <div className="p-4 border-b border-white/10 flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-orange-400" />
                <h2 className="text-lg font-semibold">Tabel Procente din 1RM</h2>
                <span className="text-xs text-slate-500 ml-auto">bazat pe {result.media} kg</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 text-left text-xs text-slate-400 font-medium uppercase">% din 1RM</th>
                      <th className="px-4 py-3 text-left text-xs text-slate-400 font-medium uppercase">Greutate (kg)</th>
                      <th className="px-4 py-3 text-left text-xs text-slate-400 font-medium uppercase">Utilizare</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { pct: 50, use: "Încălzire, volum mare (15+ rep)" },
                      { pct: 60, use: "Volum, rezistență musculară (12-15 rep)" },
                      { pct: 70, use: "Hipertrofie (8-12 rep)" },
                      { pct: 75, use: "Hipertrofie (6-10 rep)" },
                      { pct: 80, use: "Forță/Hipertrofie (4-8 rep)" },
                      { pct: 85, use: "Forță (3-5 rep)" },
                      { pct: 90, use: "Forță maximă (2-3 rep)" },
                      { pct: 95, use: "Forță maximă (1-2 rep)" },
                      { pct: 100, use: "1RM — testare maximă" },
                    ].map(({ pct, use }) => {
                      const kg = result.percentages.find((p) => p.pct === pct)?.kg ?? 0;
                      const isMax = pct === 100;
                      return (
                        <tr
                          key={pct}
                          className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                            isMax ? "bg-orange-500/10" : ""
                          }`}
                        >
                          <td className={`px-4 py-3 font-bold ${isMax ? "text-orange-400" : "text-white"}`}>
                            {pct}%
                          </td>
                          <td className={`px-4 py-3 font-semibold text-lg ${isMax ? "text-orange-400" : "text-slate-200"}`}>
                            {kg} kg
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-400">{use}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Training tip */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-orange-400" />
                Cum să folosești 1RM în antrenament
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-400">
                <div>
                  <span className="text-orange-400 font-semibold">Forță maximă (powerlifting):</span> 85–100% din 1RM, 1–5 rep, 3–5 minute pauze
                </div>
                <div>
                  <span className="text-green-400 font-semibold">Hipertrofie (masă musculară):</span> 65–80% din 1RM, 6–12 rep, 1–2 minute pauze
                </div>
                <div>
                  <span className="text-blue-400 font-semibold">Rezistență musculară:</span> 50–65% din 1RM, 12–20 rep, 30–60 secunde pauze
                </div>
                <div>
                  <span className="text-purple-400 font-semibold">Volum progresiv:</span> Crește 1RM-ul cu 2.5–5 kg la fiecare 2–4 săptămâni
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={reset}
                className="flex-1 py-3 bg-white/10 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="h-4 w-4" /> Alt exercițiu
              </button>
              <Link
                href="/program-antrenament"
                className="flex-1 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Generează program bazat pe forța ta <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Share */}
            <ProudShare
              toolName="Calculatorul 1RM GymBro"
              achievement={`1RM calculat: ${result?.media} kg — beast mode activat! 🏋️`}
              impact="Acum știi exact cât poți ridica. Arată-le și prietenilor tăi cât de tare ești! 💪"
            />
          </div>
        )}

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">❓</span>
              </div>
              <h2 className="text-2xl font-bold">Întrebări Frecvente despre 1RM</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Ce este 1RM (One Rep Max)?",
                  a: "1RM (One Rep Maximum) este greutatea maximă pe care o poți ridica o singură dată cu formă corectă. Este standardul de referință în antrenamentul de forță și se folosește pentru a stabili intensitatea antrenamentelor.",
                },
                {
                  q: "Cum calculez 1RM fără să testez direct?",
                  a: "Ridici o greutate submaximalǎ de mai multe repetări și folosești o formulă. Epley: 1RM = greutate × (1 + reps/30). Brzycki: 1RM = greutate × 36 / (37 - reps). Calculatorul GymBro calculează automat toate formulele.",
                },
                {
                  q: "Care formulă de 1RM este cea mai precisă?",
                  a: "Epley este cel mai popular pentru repetări puține (1-10). Brzycki este precisă pentru 2-10 repetări. Lander funcționează bine pentru spectru larg. Media celor 3 oferă cel mai bun rezultat.",
                },
                {
                  q: "Cum folosesc 1RM în antrenament?",
                  a: "50-60% pentru încălzire și volum mare, 70-80% pentru hipertrofie (6-12 rep), 85-95% pentru forță maximă (1-5 rep), 95-100% pentru testare maximă. Calculatorul îți afișează automat aceste procente.",
                },
                {
                  q: "La câte repetări este cel mai precis calculatorul 1RM?",
                  a: "Formulele sunt cele mai precise pentru 2-8 repetări. La mai mult de 10 repetări precizia scade. Recomandat: testează cu o greutate cu care poți face 3-8 repetări curate.",
                },
              ].map((faq, idx) => (
                <details key={idx} className="group bg-black/30 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-black/50 transition-colors">
                    <span className="font-medium pr-4">{faq.q}</span>
                    <span className="text-orange-400 text-xl transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="p-4 pt-0 text-slate-400">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-2xl font-bold mb-3">Acum generează un program bazat pe forța ta!</h3>
            <p className="text-slate-400 mb-6">Programele noastre personalizate folosesc procentele din 1RM pentru antrenamente precise.</p>
            <Link
              href="/program-antrenament"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Generează program bazat pe forța ta <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
