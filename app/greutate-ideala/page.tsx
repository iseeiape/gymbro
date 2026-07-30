"use client";

import { useState } from "react";
import { Calculator, ChevronRight, RotateCcw, Scale, ArrowRight, Info } from "lucide-react";
import { ProudShare } from "../components/ProudShare";
import Link from "next/link";

interface FormulaResult {
  name: string;
  weight: number;
  description: string;
  year: string;
}

interface GreutateResult {
  devine: number;
  robinson: number;
  miller: number;
  media: number;
  min: number;
  max: number;
  imcIdeal: number;
  currentWeight?: number;
  difference?: number;
}

function calcGreutateIdeala(heightCm: number, gender: string): { devine: number; robinson: number; miller: number } {
  const heightInch = heightCm / 2.54;
  const inchOver60 = heightInch - 60;

  if (gender === "male") {
    return {
      devine: Math.round((50 + 2.3 * inchOver60) * 10) / 10,
      robinson: Math.round((52 + 1.9 * inchOver60) * 10) / 10,
      miller: Math.round((56.2 + 1.41 * inchOver60) * 10) / 10,
    };
  } else {
    return {
      devine: Math.round((45.5 + 2.3 * inchOver60) * 10) / 10,
      robinson: Math.round((49 + 1.7 * inchOver60) * 10) / 10,
      miller: Math.round((53.1 + 1.36 * inchOver60) * 10) / 10,
    };
  }
}

export default function GreutateIdealaPage() {
  const [formData, setFormData] = useState({
    height: "",
    gender: "male",
    age: "",
    currentWeight: "",
  });
  const [result, setResult] = useState<GreutateResult | null>(null);
  const [loading, setLoading] = useState(false);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const height = parseFloat(formData.height);
      const { devine, robinson, miller } = calcGreutateIdeala(height, formData.gender);

      const media = Math.round(((devine + robinson + miller) / 3) * 10) / 10;
      const min = Math.min(devine, robinson, miller);
      const max = Math.max(devine, robinson, miller);

      const heightM = height / 100;
      const imcIdeal = Math.round((media / (heightM * heightM)) * 10) / 10;

      const currentWeight = formData.currentWeight ? parseFloat(formData.currentWeight) : undefined;
      const difference = currentWeight ? Math.round((currentWeight - media) * 10) / 10 : undefined;

      setResult({ devine, robinson, miller, media, min, max, imcIdeal, currentWeight, difference });
      setLoading(false);
    }, 800);
  };

  const reset = () => setResult(null);

  const formulaCards: FormulaResult[] = result
    ? [
        {
          name: "Devine",
          weight: result.devine,
          description: "Cea mai utilizată formulă în practica medicală, dezvoltată de B.J. Devine în 1974. Referință standard în farmacocinetics.",
          year: "1974",
        },
        {
          name: "Robinson",
          weight: result.robinson,
          description: "Formulă revizuită de J.D. Robinson în 1983, considerată mai exactă pentru persoanele de statură medie.",
          year: "1983",
        },
        {
          name: "Miller",
          weight: result.miller,
          description: "Formulă dezvoltată de D.R. Miller în 1983, tinde să dea valori ușor mai mari decât celelalte formule.",
          year: "1983",
        },
      ]
    : [];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
            <Scale className="h-4 w-4" />
            3 Formule Medicale · Gratuit
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
            Calculator Greutate Ideală
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Calculează greutatea ideală pentru înălțimea ta folosind formulele Devine, Robinson și Miller.
          </p>
        </div>

        {!result ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <form onSubmit={calculate} className="space-y-6">
                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium mb-2">Gen</label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, gender: "male" })}
                      className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                        formData.gender === "male"
                          ? "bg-blue-600 text-white"
                          : "bg-black/30 text-slate-400 hover:bg-black/50"
                      }`}
                    >
                      Masculin
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, gender: "female" })}
                      className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                        formData.gender === "female"
                          ? "bg-pink-600 text-white"
                          : "bg-black/30 text-slate-400 hover:bg-black/50"
                      }`}
                    >
                      Feminin
                    </button>
                  </div>
                </div>

                {/* Height */}
                <div>
                  <label className="block text-sm font-medium mb-2">Înălțime (cm)</label>
                  <input
                    type="number"
                    required
                    min="140"
                    max="230"
                    placeholder="175"
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  />
                </div>

                {/* Age & Current Weight (optional) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Vârstă <span className="text-slate-500 font-normal">(opțional)</span>
                    </label>
                    <input
                      type="number"
                      min="15"
                      max="100"
                      placeholder="25"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Greutate actuală (kg) <span className="text-slate-500 font-normal">(opțional)</span>
                    </label>
                    <input
                      type="number"
                      min="30"
                      max="300"
                      placeholder="80"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none"
                      value={formData.currentWeight}
                      onChange={(e) => setFormData({ ...formData, currentWeight: e.target.value })}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <><RotateCcw className="h-5 w-5 animate-spin" /> Calculez...</>
                  ) : (
                    <>Calculează <ChevronRight className="h-5 w-5" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* Main Result */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30 mb-6 text-center">
              <p className="text-slate-400 text-sm mb-2">Greutatea ta ideală (media celor 3 formule)</p>
              <div className="text-7xl font-bold text-purple-400 mb-2">{result.media} kg</div>
              <p className="text-slate-400 text-sm mb-6">
                Interval recomandat: <span className="text-white font-semibold">{result.min} – {result.max} kg</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-black/30 rounded-xl p-4">
                  <div className="text-xs text-slate-500 mb-1">IMC la greutatea ideală</div>
                  <div className="text-2xl font-bold text-green-400">{result.imcIdeal}</div>
                  <div className="text-xs text-slate-500">normal (18.5–24.9)</div>
                </div>
                <div className="bg-black/30 rounded-xl p-4">
                  <div className="text-xs text-slate-500 mb-1">Greutate minimă sănătoasă</div>
                  <div className="text-2xl font-bold text-purple-400">{result.min} kg</div>
                  <div className="text-xs text-slate-500">formula Devine</div>
                </div>
                <div className="bg-black/30 rounded-xl p-4">
                  <div className="text-xs text-slate-500 mb-1">Greutate maximă sănătoasă</div>
                  <div className="text-2xl font-bold text-purple-400">{result.max} kg</div>
                  <div className="text-xs text-slate-500">formula Miller</div>
                </div>
              </div>

              {/* Comparison with current weight */}
              {result.difference !== undefined && result.currentWeight !== undefined && (
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold ${
                  Math.abs(result.difference) < 2
                    ? "bg-green-500/20 text-green-400"
                    : result.difference > 0
                    ? "bg-orange-500/20 text-orange-400"
                    : "bg-blue-500/20 text-blue-400"
                }`}>
                  {Math.abs(result.difference) < 2
                    ? "✅ Ești foarte aproape de greutatea ideală!"
                    : result.difference > 0
                    ? `📉 Ai ${result.difference} kg în plus față de media ideală`
                    : `📈 Ai ${Math.abs(result.difference)} kg în minus față de media ideală`}
                </div>
              )}
            </div>

            {/* Formula Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {formulaCards.map((f) => (
                <div key={f.name} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-purple-400">Formula {f.name}</h3>
                      <span className="text-xs text-slate-500">{f.year}</span>
                    </div>
                    <div className="text-2xl font-bold">{f.weight} kg</div>
                  </div>
                  <p className="text-sm text-slate-400">{f.description}</p>
                </div>
              ))}
            </div>

            {/* Info note */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-start gap-3 mb-6">
              <Info className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-400">
                Aceste formule sunt ghiduri orientative și pot varia în funcție de constituția osoasă și masa musculară.
                O persoană cu musculatură bine dezvoltată poate fi sănătoasă la o greutate mai mare decât intervalul calculat.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={reset}
                className="flex-1 py-3 bg-white/10 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="h-4 w-4" /> Calculează Din Nou
              </button>
              <Link
                href="/calculator"
                className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Calculează caloriile pentru greutatea ta ideală <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Share */}
            <ProudShare
              toolName="Calculatorul Greutate Ideală GymBro"
              achievement={`Greutatea ta ideală: ${result?.min}–${result?.max} kg (medie: ${result?.media} kg)`}
              impact="Acum știi exact unde vrei să ajungi. Împărtășește cu prietenii tăi care vor același lucru! 🎯"
            />
          </div>
        )}

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">❓</span>
              </div>
              <h2 className="text-2xl font-bold">Întrebări Frecvente despre Greutatea Ideală</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Cum se calculează greutatea ideală?",
                  a: "Greutatea ideală se calculează folosind formule precum Devine, Robinson și Miller, care iau în calcul înălțimea și genul. Calculatorul GymBro combină cele 3 formule pentru un rezultat echilibrat.",
                },
                {
                  q: "Cât ar trebui să cântăresc la înălțimea mea?",
                  a: "Depinde de gen și constituție. Un bărbat de 175cm ar trebui să cântărească între 68–76 kg. O femeie de 165cm – între 57–65 kg. Calculatorul oferă intervalul exact pentru înălțimea ta.",
                },
                {
                  q: "Care formulă de greutate ideală este cea mai precisă?",
                  a: "Fiecare formulă are avantajele ei. Devine este cea mai folosită în medicină, Robinson este mai exactă pentru statură medie, Miller tinde spre valori ușor mai mari. Media celor 3 oferă cel mai echilibrat rezultat.",
                },
                {
                  q: "Greutatea ideală este aceeași pentru toți la aceeași înălțime?",
                  a: "Nu. Variază în funcție de gen, vârstă și constituție osoasă. Formulele oferă un interval orientativ. Persoanele cu masă musculară mare pot fi sănătoase și la greutăți mai mari decât intervalul calculat.",
                },
              ].map((faq, idx) => (
                <details key={idx} className="group bg-black/30 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-black/50 transition-colors">
                    <span className="font-medium pr-4">{faq.q}</span>
                    <span className="text-purple-400 text-xl transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="p-4 pt-0 text-slate-400">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-2xl font-bold mb-3">Știi greutatea ideală. Acum calculează caloriile!</h3>
            <p className="text-slate-400 mb-6">Calculatorul nostru de calorii îți spune exact ce să mănânci pentru a ajunge la greutatea ideală.</p>
            <Link
              href="/calculator"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Calculează caloriile pentru greutatea ta ideală <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
