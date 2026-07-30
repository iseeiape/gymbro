"use client";

import { useState } from "react";
import { Calculator, ChevronRight, RotateCcw, Scale, ArrowRight } from "lucide-react";
import { ProudShare } from "../components/ProudShare";
import Link from "next/link";

interface ImcResult {
  imc: number;
  category: string;
  color: string;
  bgColor: string;
  interpretation: string;
  idealMin: number;
  idealMax: number;
  progressPercent: number;
}

function getImcCategory(imc: number): { category: string; color: string; bgColor: string; interpretation: string } {
  if (imc < 18.5) return {
    category: "Subponderal",
    color: "text-blue-400",
    bgColor: "bg-blue-500",
    interpretation: "Ești subponderal. Este recomandat să crești aportul caloric și să consulți un medic sau nutriționist pentru un plan personalizat de creștere în greutate sănătoasă.",
  };
  if (imc < 25) return {
    category: "Greutate normală ✅",
    color: "text-green-400",
    bgColor: "bg-green-500",
    interpretation: "Felicitări! Ai o greutate sănătoasă conform OMS. Continuă stilul tău de viață activ și o alimentație echilibrată pentru a menține aceste rezultate.",
  };
  if (imc < 30) return {
    category: "Supraponderal",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500",
    interpretation: "Ești ușor supraponderal. Un deficit caloric moderat (300-500 kcal/zi) combinat cu activitate fizică regulată te poate ajuta să ajungi la o greutate normală.",
  };
  if (imc < 35) return {
    category: "Obezitate grad I",
    color: "text-orange-400",
    bgColor: "bg-orange-500",
    interpretation: "IMC-ul indică obezitate de grad I. Recomandăm consultarea unui medic și adoptarea unui plan structurat de alimentație și exerciții fizice.",
  };
  if (imc < 40) return {
    category: "Obezitate grad II",
    color: "text-red-400",
    bgColor: "bg-red-500",
    interpretation: "IMC-ul indică obezitate de grad II. Este important să consulți un medic pentru evaluare și tratament. Modificările în stilul de viață sunt esențiale.",
  };
  return {
    category: "Obezitate grad III",
    color: "text-red-600",
    bgColor: "bg-red-700",
    interpretation: "IMC-ul indică obezitate severă (grad III). Consultarea urgentă a unui medic specialist este necesară. Un program medical supervizat poate ajuta.",
  };
}

function getProgressPercent(imc: number): number {
  // Map IMC 15-45 to 0-100%
  const min = 15;
  const max = 45;
  return Math.min(100, Math.max(0, ((imc - min) / (max - min)) * 100));
}

export default function ImcPage() {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "male",
  });
  const [result, setResult] = useState<ImcResult | null>(null);
  const [loading, setLoading] = useState(false);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const weight = parseFloat(formData.weight);
      const heightM = parseFloat(formData.height) / 100;
      const imc = weight / (heightM * heightM);
      const rounded = Math.round(imc * 10) / 10;

      const { category, color, bgColor, interpretation } = getImcCategory(rounded);

      const heightCm = parseFloat(formData.height);
      const idealMin = Math.round(18.5 * heightM * heightM * 10) / 10;
      const idealMax = Math.round(24.9 * heightM * heightM * 10) / 10;

      setResult({
        imc: rounded,
        category,
        color,
        bgColor,
        interpretation,
        idealMin,
        idealMax,
        progressPercent: getProgressPercent(rounded),
      });
      setLoading(false);
    }, 800);
  };

  const reset = () => setResult(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
            <Scale className="h-4 w-4" />
            Gratuit · Fără înregistrare
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Calculator IMC
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Calculează-ți Indicele de Masă Corporală și află dacă greutatea ta este sănătoasă conform standardelor OMS.
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

                {/* Weight & Height */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Greutate (kg)</label>
                    <input
                      type="number"
                      required
                      min="30"
                      max="300"
                      placeholder="75"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Înălțime (cm)</label>
                    <input
                      type="number"
                      required
                      min="100"
                      max="250"
                      placeholder="175"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    />
                  </div>
                </div>

                {/* Age (optional) */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Vârstă <span className="text-slate-500 font-normal">(opțional)</span>
                  </label>
                  <input
                    type="number"
                    min="15"
                    max="100"
                    placeholder="25"
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <><RotateCcw className="h-5 w-5 animate-spin" /> Calculez...</>
                  ) : (
                    <>Calculează IMC <ChevronRight className="h-5 w-5" /></>
                  )}
                </button>
              </form>

              {/* Scale reference */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-slate-500 mb-3 font-medium uppercase tracking-wide">Categorii OMS</p>
                <div className="space-y-2 text-sm">
                  {[
                    { label: "Subponderal", range: "< 18.5", color: "text-blue-400" },
                    { label: "Greutate normală", range: "18.5 – 24.9", color: "text-green-400" },
                    { label: "Supraponderal", range: "25 – 29.9", color: "text-yellow-400" },
                    { label: "Obezitate grad I", range: "30 – 34.9", color: "text-orange-400" },
                    { label: "Obezitate grad II", range: "35 – 39.9", color: "text-red-400" },
                    { label: "Obezitate grad III", range: "≥ 40", color: "text-red-600" },
                  ].map((cat) => (
                    <div key={cat.label} className="flex justify-between items-center">
                      <span className={`font-medium ${cat.color}`}>{cat.label}</span>
                      <span className="text-slate-400 font-mono text-xs">{cat.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {/* Main Result */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 mb-6 text-center">
              <p className="text-slate-400 text-sm mb-2">Indicele tău de Masă Corporală</p>
              <div className={`text-7xl font-bold mb-3 ${result.color}`}>
                {result.imc}
              </div>
              <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${result.color} bg-white/10`}>
                {result.category}
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="relative h-6 bg-black/40 rounded-full overflow-hidden">
                  {/* Color zones */}
                  <div className="absolute inset-0 flex">
                    <div className="h-full bg-blue-500/40" style={{ width: "11.67%" }} />
                    <div className="h-full bg-green-500/40" style={{ width: "21.67%" }} />
                    <div className="h-full bg-yellow-500/40" style={{ width: "16.67%" }} />
                    <div className="h-full bg-orange-500/40" style={{ width: "16.67%" }} />
                    <div className="h-full bg-red-500/40" style={{ width: "16.67%" }} />
                    <div className="h-full bg-red-700/40" style={{ width: "16.65%" }} />
                  </div>
                  {/* Indicator */}
                  <div
                    className={`absolute top-0 bottom-0 w-1 ${result.bgColor} shadow-lg transition-all`}
                    style={{ left: `${result.progressPercent}%`, transform: "translateX(-50%)" }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>15</span>
                  <span>18.5</span>
                  <span>25</span>
                  <span>30</span>
                  <span>35</span>
                  <span>40</span>
                  <span>45+</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm max-w-xl mx-auto">{result.interpretation}</p>
            </div>

            {/* Ideal weight card */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Scale className="h-5 w-5 text-green-400" />
                Greutatea Ideală pentru Înălțimea Ta
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-xl p-4 text-center">
                  <div className="text-sm text-slate-400 mb-1">Minim sănătos</div>
                  <div className="text-3xl font-bold text-green-400">{result.idealMin} kg</div>
                  <div className="text-xs text-slate-500">IMC 18.5</div>
                </div>
                <div className="bg-black/30 rounded-xl p-4 text-center">
                  <div className="text-sm text-slate-400 mb-1">Maxim sănătos</div>
                  <div className="text-3xl font-bold text-green-400">{result.idealMax} kg</div>
                  <div className="text-xs text-slate-500">IMC 24.9</div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-3 text-center">
                Conform OMS, intervalul sănătos de IMC este 18.5–24.9
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
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Calculează-ți caloriile <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Share */}
            <ProudShare
              toolName="Calculatorul IMC GymBro"
              achievement={`IMC calculat: ${result?.imc} — ${result?.category}`}
              impact="Primul pas spre sănătate e să știi unde ești. Acum știi! Inspiră și prietenii tăi să facă același pas. 💪"
            />
          </div>
        )}

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">❓</span>
              </div>
              <h2 className="text-2xl font-bold">Întrebări Frecvente despre IMC</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Ce este IMC-ul (Indicele de Masă Corporală)?",
                  a: "IMC (Indicele de Masă Corporală) sau BMI (Body Mass Index) calculează raportul dintre greutatea corporală și înălțime. Formula este: IMC = greutate (kg) / înălțime² (m). Un IMC normal conform OMS este între 18.5 și 24.9.",
                },
                {
                  q: "Ce IMC este considerat normal?",
                  a: "Conform OMS: sub 18.5 = subponderal, 18.5–24.9 = greutate normală, 25–29.9 = supraponderal, 30+ = obezitate. Intervalul optim pentru sănătate este 18.5–24.9.",
                },
                {
                  q: "IMC-ul este același pentru bărbați și femei?",
                  a: "Formula IMC este aceeași pentru ambele sexe, dar femeile au în mod natural un procent mai mare de grăsime corporală. Unii medici recomandă interpretarea IMC-ului împreună cu alte măsurători.",
                },
                {
                  q: "Care sunt limitele calculatorului IMC?",
                  a: "IMC-ul nu diferențiază masa musculară de grăsime. Un sportiv cu multă masă musculară poate avea un IMC crescut fără a fi supraponderal. Este un instrument de screening, nu de diagnostic.",
                },
              ].map((faq, idx) => (
                <details key={idx} className="group bg-black/30 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-black/50 transition-colors">
                    <span className="font-medium pr-4">{faq.q}</span>
                    <span className="text-blue-400 text-xl transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="p-4 pt-0 text-slate-400">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-2xl font-bold mb-3">Vrei să știi câte calorii ai nevoie?</h3>
            <p className="text-slate-400 mb-6">Calculatorul nostru de calorii îți oferă TDEE, BMR și macro-urile personalizate.</p>
            <Link
              href="/calculator"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Calculează-ți caloriile <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
