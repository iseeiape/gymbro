"use client";

import { useState } from "react";
import { ChevronRight, RotateCcw, Flame, ArrowRight, Info } from "lucide-react";
import { ProudShare } from "../components/ProudShare";
import Link from "next/link";

interface BodyFatResult {
  bodyFat: number;
  category: string;
  color: string;
  bgColor: string;
  borderColor: string;
  interpretation: string;
  progressPercent: number;
  fatMass: number | null;
  leanMass: number | null;
  toFitness: number | null;
  tips: string[];
}

function getCategory(bf: number, gender: string): {
  category: string;
  color: string;
  bgColor: string;
  borderColor: string;
  interpretation: string;
  tips: string[];
} {
  if (gender === "male") {
    if (bf < 6) return {
      category: "Esențial",
      color: "text-orange-400",
      bgColor: "bg-orange-500",
      borderColor: "border-orange-500/30",
      interpretation: "Sub minimul sănătos. Specific competițiilor de bodybuilding.",
      tips: [
        "Procentul de grăsime esențial este necesar pentru funcțiile vitale.",
        "Nu menține acest nivel pe termen lung fără supraveghere medicală.",
        "Reintroducerea caloriilor trebuie făcută treptat pentru a evita rebound-ul.",
      ],
    };
    if (bf <= 13) return {
      category: "Atletic 🏆",
      color: "text-green-400",
      bgColor: "bg-green-500",
      borderColor: "border-green-500/30",
      interpretation: "Definit, venos. Tipic sportivilor de performanță.",
      tips: [
        "Menține-ți performanța cu un surplus caloric mic de 100-200 kcal.",
        "Prioritizează somnul și recuperarea pentru a menține compoziția corporală.",
        "Antrenamentul de forță 4-5x/săptămână te va ajuta să rămâi definit.",
      ],
    };
    if (bf <= 17) return {
      category: "Fitness ✅",
      color: "text-green-400",
      bgColor: "bg-green-500",
      borderColor: "border-green-500/30",
      interpretation: "Abdomen vizibil. Foarte bun aspect fizic.",
      tips: [
        "Ești într-o zonă excelentă! Menține stilul de viață actual.",
        "Un deficit mic de 200-300 kcal/zi te poate aduce la nivelul atletic.",
        "Continuă cu antrenamentul de forță combinat cu cardio moderat.",
      ],
    };
    if (bf <= 24) return {
      category: "Acceptabil",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500",
      borderColor: "border-yellow-500/30",
      interpretation: "Greutate sănătoasă. Îmbunătățibil cu efort moderat.",
      tips: [
        "Deficit caloric de 300-500 kcal/zi pentru o pierdere sănătoasă.",
        "Antrenamentul de forță 3x/săptămână te va ajuta să păstrezi mușchii.",
        "Cardio moderat (30 min x 3-4/săpt.) accelerează arderea grăsimilor.",
      ],
    };
    if (bf <= 31) return {
      category: "Supraponderal",
      color: "text-orange-400",
      bgColor: "bg-orange-500",
      borderColor: "border-orange-500/30",
      interpretation: "Risc crescut. Recomandăm deficit caloric.",
      tips: [
        "Deficit caloric de 500 kcal/zi — pierdere de ~0.5kg/săptămână.",
        "Începe cu mersul pe jos 30-45 min/zi dacă nu ești obișnuit cu exercițiul.",
        "Prioritizează proteinele (1.6-2g/kg corp) pentru a păstra masa musculară.",
        "Consultă un nutriționist pentru un plan personalizat.",
      ],
    };
    return {
      category: "Obezitate",
      color: "text-red-400",
      bgColor: "bg-red-500",
      borderColor: "border-red-500/30",
      interpretation: "Risc cardiovascular ridicat. Consultă un medic.",
      tips: [
        "Consultă un medic înainte de a începe orice program de exerciții.",
        "Modificările în alimentație sunt esențiale — consultă un nutriționist.",
        "Chiar și o pierdere de 5-10% din greutate reduce semnificativ riscurile.",
        "Începe cu exerciții ușoare: mersul pe jos, înot, ciclism.",
      ],
    };
  } else {
    // female
    if (bf < 14) return {
      category: "Esențial",
      color: "text-orange-400",
      bgColor: "bg-orange-500",
      borderColor: "border-orange-500/30",
      interpretation: "Sub minimul sănătos pentru femei. Poate afecta funcțiile hormonale.",
      tips: [
        "Grăsimea esențială la femei protejează funcțiile hormonale și reproductive.",
        "Consultă un medic dacă te afli în această categorie.",
        "Reintroducerea caloriilor trebuie ghidată medical.",
      ],
    };
    if (bf <= 20) return {
      category: "Atletic 🏆",
      color: "text-green-400",
      bgColor: "bg-green-500",
      borderColor: "border-green-500/30",
      interpretation: "Definit și atletic. Tipic sportivelor de performanță.",
      tips: [
        "Menține performanța cu un aport caloric adecvat obiectivelor tale.",
        "Prioritizează proteinele și recuperarea post-antrenament.",
        "Antrenamentul de forță îți va menține forma atletică.",
      ],
    };
    if (bf <= 24) return {
      category: "Fitness ✅",
      color: "text-green-400",
      bgColor: "bg-green-500",
      borderColor: "border-green-500/30",
      interpretation: "Excelent aspect fizic. Ești în formă bună.",
      tips: [
        "Ești într-o zonă de fitness excelentă — menține stilul de viață!",
        "Un deficit mic de 200-300 kcal/zi te poate aduce la nivelul atletic.",
        "Antrenamentul de forță combinat cu cardio moderat este ideal.",
      ],
    };
    if (bf <= 31) return {
      category: "Acceptabil",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500",
      borderColor: "border-yellow-500/30",
      interpretation: "Greutate sănătoasă. Îmbunătățibil cu efort moderat.",
      tips: [
        "Deficit caloric de 300-400 kcal/zi pentru pierdere sănătoasă.",
        "Antrenamentul de forță 3x/săptămână păstrează masa musculară.",
        "Cardio moderat 3-4x/săptămână accelerează progresul.",
      ],
    };
    if (bf <= 39) return {
      category: "Supraponderal",
      color: "text-orange-400",
      bgColor: "bg-orange-500",
      borderColor: "border-orange-500/30",
      interpretation: "Risc crescut. Recomandăm deficit caloric și exercițiu.",
      tips: [
        "Deficit caloric de 400-500 kcal/zi pentru o pierdere sustenabilă.",
        "Mersul pe jos 30-45 min/zi este un excelent punct de start.",
        "Prioritizează proteinele în alimentație (1.5-1.8g/kg corp).",
        "Consultă un nutriționist pentru un plan personalizat.",
      ],
    };
    return {
      category: "Obezitate",
      color: "text-red-400",
      bgColor: "bg-red-500",
      borderColor: "border-red-500/30",
      interpretation: "Risc cardiovascular ridicat. Consultă un medic.",
      tips: [
        "Consultă un medic înainte de orice program de exerciții sau dietă.",
        "Modificările în alimentație sunt esențiale — consultă un nutriționist.",
        "Chiar și o pierdere de 5-10% din greutate reduce riscurile cardiovasculare.",
        "Exerciții ușoare: mersul pe jos, înot, yoga.",
      ],
    };
  }
}

function getToFitness(bf: number, gender: string): number | null {
  const fitnessMin = gender === "male" ? 14 : 21;
  if (bf > fitnessMin) {
    return Math.round((bf - fitnessMin) * 10) / 10;
  }
  return null;
}

function getProgressPercent(bf: number): number {
  // Map 3-50% to 0-100%
  const min = 3;
  const max = 50;
  return Math.min(100, Math.max(0, ((bf - min) / (max - min)) * 100));
}

export default function BodyFatPage() {
  const [formData, setFormData] = useState({
    gender: "male",
    height: "",
    neck: "",
    waist: "",
    hip: "",
    weight: "",
  });
  const [result, setResult] = useState<BodyFatResult | null>(null);
  const [loading, setLoading] = useState(false);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const height = parseFloat(formData.height);
      const neck = parseFloat(formData.neck);
      const waist = parseFloat(formData.waist);
      const hip = parseFloat(formData.hip);
      const weight = formData.weight ? parseFloat(formData.weight) : null;

      let raw: number;
      if (formData.gender === "male") {
        raw = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
      } else {
        raw = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
      }

      const bf = Math.round(Math.max(3, Math.min(60, raw)) * 10) / 10;
      const { category, color, bgColor, borderColor, interpretation, tips } = getCategory(bf, formData.gender);

      const fatMass = weight ? Math.round((weight * bf / 100) * 10) / 10 : null;
      const leanMass = weight && fatMass !== null ? Math.round((weight - fatMass) * 10) / 10 : null;
      const toFitness = getToFitness(bf, formData.gender);

      setResult({
        bodyFat: bf,
        category,
        color,
        bgColor,
        borderColor,
        interpretation,
        progressPercent: getProgressPercent(bf),
        fatMass,
        leanMass,
        toFitness,
        tips,
      });
      setLoading(false);
    }, 800);
  };

  const reset = () => {
    setResult(null);
    setFormData({ gender: "male", height: "", neck: "", waist: "", hip: "", weight: "" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-7xl mx-auto px-4 py-12">

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6">
            <Flame className="h-4 w-4" />
            Metoda US Navy · Gratuit · Fără înregistrare
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
            Calculator Grăsime Corporală
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Află procentul tău de grăsime corporală cu metoda US Navy. Mai precis decât IMC — știi exact ce procent din corpul tău e grăsime.
          </p>
        </div>

        {!result ? (
          <div className="max-w-2xl mx-auto">
            {/* Measuring Instructions */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Info className="h-5 w-5 text-blue-400" />
                <h2 className="font-semibold text-blue-300">Cum să măsori corect</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2 text-slate-300">
                  <span className="text-lg">📏</span>
                  <div>
                    <span className="font-medium text-white">Gât:</span> La baza gâtului, ușor deasupra claviculei. Menține capul drept.
                  </div>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <span className="text-lg">📏</span>
                  <div>
                    <span className="font-medium text-white">Talie:</span> La nivelul ombilicului, respiră normal și relaxează abdomenul.
                  </div>
                </div>
                <div className="flex items-start gap-2 text-slate-300 sm:col-span-2">
                  <span className="text-lg">📏</span>
                  <div>
                    <span className="font-medium text-white">Șolduri (femei):</span> La punctul cel mai lat al șoldurilor/feselor. Picioarele apropiate.
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-3">💡 Folosește o bandă de măsurat flexibilă. Repetă de 2-3 ori și ia media.</p>
            </div>

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
                      👨 Masculin
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
                      👩 Feminin
                    </button>
                  </div>
                </div>

                {/* Height */}
                <div>
                  <label className="block text-sm font-medium mb-2">Înălțime (cm)</label>
                  <input
                    type="number"
                    required
                    min="100"
                    max="250"
                    step="0.5"
                    placeholder="175"
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-orange-500 focus:outline-none"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  />
                </div>

                {/* Neck & Waist */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Gât (cm)</label>
                    <p className="text-xs text-slate-500 mb-2">La baza gâtului, unde îți porți cravata</p>
                    <input
                      type="number"
                      required
                      min="20"
                      max="60"
                      step="0.5"
                      placeholder="38"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-orange-500 focus:outline-none"
                      value={formData.neck}
                      onChange={(e) => setFormData({ ...formData, neck: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Talie (cm)</label>
                    <p className="text-xs text-slate-500 mb-2">La ombilic, relaxat</p>
                    <input
                      type="number"
                      required
                      min="40"
                      max="200"
                      step="0.5"
                      placeholder="80"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-orange-500 focus:outline-none"
                      value={formData.waist}
                      onChange={(e) => setFormData({ ...formData, waist: e.target.value })}
                    />
                  </div>
                </div>

                {/* Hip — female only */}
                {formData.gender === "female" && (
                  <div>
                    <label className="block text-sm font-medium mb-1">Șolduri (cm)</label>
                    <p className="text-xs text-slate-500 mb-2">La punctul cel mai lat al șoldurilor</p>
                    <input
                      type="number"
                      required
                      min="50"
                      max="200"
                      step="0.5"
                      placeholder="95"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-orange-500 focus:outline-none"
                      value={formData.hip}
                      onChange={(e) => setFormData({ ...formData, hip: e.target.value })}
                    />
                  </div>
                )}

                {/* Weight (optional) */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Greutate (kg) <span className="text-slate-500 font-normal">(opțional — pentru masa de grăsime)</span>
                  </label>
                  <input
                    type="number"
                    min="30"
                    max="300"
                    step="0.5"
                    placeholder="75"
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-orange-500 focus:outline-none"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <><RotateCcw className="h-5 w-5 animate-spin" /> Calculez...</>
                  ) : (
                    <>Calculează Body Fat % <ChevronRight className="h-5 w-5" /></>
                  )}
                </button>
              </form>

              {/* Reference table */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-slate-500 mb-3 font-medium uppercase tracking-wide">
                  Categorii — {formData.gender === "male" ? "Bărbați" : "Femei"}
                </p>
                <div className="space-y-2 text-sm">
                  {(formData.gender === "male" ? [
                    { label: "Esențial", range: "< 6%", color: "text-orange-400" },
                    { label: "Atletic 🏆", range: "6 – 13%", color: "text-green-400" },
                    { label: "Fitness ✅", range: "14 – 17%", color: "text-green-400" },
                    { label: "Acceptabil", range: "18 – 24%", color: "text-yellow-400" },
                    { label: "Supraponderal", range: "25 – 31%", color: "text-orange-400" },
                    { label: "Obezitate", range: "≥ 32%", color: "text-red-400" },
                  ] : [
                    { label: "Esențial", range: "< 14%", color: "text-orange-400" },
                    { label: "Atletic 🏆", range: "14 – 20%", color: "text-green-400" },
                    { label: "Fitness ✅", range: "21 – 24%", color: "text-green-400" },
                    { label: "Acceptabil", range: "25 – 31%", color: "text-yellow-400" },
                    { label: "Supraponderal", range: "32 – 39%", color: "text-orange-400" },
                    { label: "Obezitate", range: "≥ 40%", color: "text-red-400" },
                  ]).map((cat) => (
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
            <div className={`bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-8 border ${result.borderColor} mb-6 text-center`}>
              <p className="text-slate-400 text-sm mb-2">Procentul tău de grăsime corporală</p>
              <div className={`text-7xl font-bold mb-2 ${result.color}`}>
                {result.bodyFat}%
              </div>
              <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${result.color} bg-white/10`}>
                {result.category}
              </div>

              {/* Progress bar / gauge */}
              <div className="mb-6">
                <div className="relative h-6 bg-black/40 rounded-full overflow-hidden">
                  {/* Color zones — male */}
                  <div className="absolute inset-0 flex">
                    <div className="h-full bg-orange-500/40" style={{ width: "6.38%" }} title="Esențial" />
                    <div className="h-full bg-green-500/40" style={{ width: "17.02%" }} title="Atletic" />
                    <div className="h-full bg-green-400/40" style={{ width: "8.51%" }} title="Fitness" />
                    <div className="h-full bg-yellow-500/40" style={{ width: "14.89%" }} title="Acceptabil" />
                    <div className="h-full bg-orange-500/40" style={{ width: "14.89%" }} title="Supraponderal" />
                    <div className="h-full bg-red-500/40" style={{ width: "38.31%" }} title="Obezitate" />
                  </div>
                  {/* Indicator */}
                  <div
                    className={`absolute top-0 bottom-0 w-1 ${result.bgColor} shadow-lg transition-all`}
                    style={{ left: `${result.progressPercent}%`, transform: "translateX(-50%)" }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>3%</span>
                  <span>6%</span>
                  <span>14%</span>
                  <span>18%</span>
                  <span>25%</span>
                  <span>32%</span>
                  <span>50%+</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm max-w-xl mx-auto">{result.interpretation}</p>
            </div>

            {/* Body Composition */}
            {(result.fatMass !== null || result.toFitness !== null) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {result.fatMass !== null && (
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-sm text-slate-400 mb-4 font-medium">Compoziție corporală</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-black/30 rounded-xl p-4 text-center">
                        <div className="text-xs text-slate-400 mb-1">Masă grăsime</div>
                        <div className="text-2xl font-bold text-orange-400">{result.fatMass} kg</div>
                      </div>
                      <div className="bg-black/30 rounded-xl p-4 text-center">
                        <div className="text-xs text-slate-400 mb-1">Masă slabă</div>
                        <div className="text-2xl font-bold text-green-400">{result.leanMass} kg</div>
                      </div>
                    </div>
                  </div>
                )}
                {result.toFitness !== null && (
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-center">
                    <h3 className="text-sm text-slate-400 mb-2 font-medium">Până la categoria Fitness</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-1">{result.toFitness}%</div>
                    <p className="text-xs text-slate-500">Mai ai {result.toFitness}% până la categoria Fitness ✅. Cu un deficit de 400-500 kcal/zi ajungi în câteva luni!</p>
                  </div>
                )}
              </div>
            )}

            {/* Tips */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Flame className="h-5 w-5 text-orange-400" />
                Recomandări personalizate
              </h3>
              <ul className="space-y-2">
                {result.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-orange-400 mt-0.5">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={reset}
                className="flex-1 py-3 bg-white/10 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="h-4 w-4" /> Calculează Din Nou
              </button>
              <Link
                href="/calculator"
                className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Calculează caloriile pentru a slăbi <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mb-8">
              <Link
                href="/program-antrenament"
                className="block w-full py-3 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2"
              >
                🏋️ Găsește program de antrenament <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* ProudShare */}
            <ProudShare
              toolName="Calculatorul Body Fat GymBro"
              achievement={`Body fat calculat: ${result.bodyFat}% — categoria ${result.category}`}
              impact="Primul pas spre transformare e să știi de unde pornești! Inspiră-ți prietenii să facă același pas. 💪"
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
              <h2 className="text-2xl font-bold">Întrebări Frecvente despre Grăsimea Corporală</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Cum se calculează procentul de grăsime corporală?",
                  a: "Metoda US Navy folosește circumferința taliei, gâtului și șoldurilor (la femei) împreună cu înălțimea. Formula: Bărbați: 86.010 × log10(talie - gât) - 70.041 × log10(înălțime) + 36.76. Este o metodă accesibilă cu precizie de ±3-4%.",
                },
                {
                  q: "Ce procent de grăsime e normal?",
                  a: "Bărbați: Atletic 6-13%, Fitness 14-17%, Acceptabil 18-24%, Obezitate 25%+. Femei: Esențial 10-13%, Atletic 14-20%, Fitness 21-24%, Acceptabil 25-31%, Obezitate 32%+.",
                },
                {
                  q: "Care e diferența dintre IMC și % grăsime corporală?",
                  a: "IMC folosește doar greutatea și înălțimea, ignorând compoziția corpului. Un culturist cu multă masă musculară poate avea IMC ridicat dar % grăsime scăzut. % grăsime corporală e mult mai relevant pentru fitness.",
                },
                {
                  q: "Cum să scad procentul de grăsime?",
                  a: "Deficit caloric de 300-500 kcal/zi + antrenament de forță (păstrezi mușchii) + cardio moderat. Pierdere sănătoasă: 0.5-1% grăsime corporală pe lună.",
                },
                {
                  q: "Ce este grăsimea viscerală?",
                  a: "Grăsimea viscerală înconjoară organele interne și e mai periculoasă decât grăsimea subcutanată. O talie >94cm (bărbați) sau >80cm (femei) indică risc crescut cardiovascular.",
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

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-2xl font-bold mb-3">Știi procentul de grăsime — acum calculează caloriile!</h3>
            <p className="text-slate-400 mb-6">Calculatorul nostru de calorii îți oferă TDEE, BMR și macro-urile personalizate pentru a slăbi sau a crește masa musculară.</p>
            <Link
              href="/calculator"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Calculează-ți caloriile <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
