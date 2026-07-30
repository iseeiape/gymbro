"use client";

import { useState } from "react";
import Link from "next/link";
import { Dumbbell, Droplets, ChevronRight } from "lucide-react";
import { ProudShare } from "../components/ProudShare";

type ActivityLevel = "sedentar" | "usor" | "moderat" | "activ" | "atlet";
type TempLevel = "racoros" | "normal" | "cald" | "canicula";

interface WaterResult {
  total: number;
  pahare: number;
  distributie: {
    dimineata: number;
    pranz: number;
    dupaAmiaza: number;
    seara: number;
  };
}

const activityOptions: { value: ActivityLevel; label: string; factor: number }[] = [
  { value: "sedentar", label: "Sedentar (birou, fără sport)", factor: 0 },
  { value: "usor", label: "Activ ușor (1-2x/săpt)", factor: 0.35 },
  { value: "moderat", label: "Moderat (3-4x/săpt)", factor: 0.6 },
  { value: "activ", label: "Foarte activ (5+/săpt)", factor: 0.9 },
  { value: "atlet", label: "Atlet profesionist", factor: 1.2 },
];

const tempOptions: { value: TempLevel; label: string; factor: number }[] = [
  { value: "racoros", label: "Răcoros (<15°C)", factor: -0.2 },
  { value: "normal", label: "Normal (15-25°C)", factor: 0 },
  { value: "cald", label: "Cald (25-32°C)", factor: 0.3 },
  { value: "canicula", label: "Caniculă (>32°C)", factor: 0.6 },
];

export default function CalculatorApaPage() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState<ActivityLevel>("moderat");
  const [temp, setTemp] = useState<TempLevel>("normal");
  const [alapteaza, setAlapteaza] = useState(false);
  const [gravida, setGravida] = useState(false);
  const [result, setResult] = useState<WaterResult | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    if (!w || w < 30 || w > 250) return;

    const actFactor = activityOptions.find((a) => a.value === activity)!.factor;
    const tmpFactor = tempOptions.find((t) => t.value === temp)!.factor;

    let total = w * 0.033 + actFactor + tmpFactor;
    if (alapteaza) total += 0.7;
    if (gravida) total += 0.3;
    total = Math.max(1.5, Math.min(5.0, total));
    total = Math.round(total * 10) / 10;

    const pahare = Math.round((total * 1000) / 250);
    const perPeriod = total / 4;

    setResult({
      total,
      pahare,
      distributie: {
        dimineata: Math.round(perPeriod * 10) / 10,
        pranz: Math.round(perPeriod * 10) / 10,
        dupaAmiaza: Math.round(perPeriod * 10) / 10,
        seara: Math.round(perPeriod * 10) / 10,
      },
    });
  };

  const activityTip = () => {
    if (activity === "activ" || activity === "atlet") {
      return "Bea 500ml cu 2h înainte de antrenament, 200ml la fiecare 20 min în timpul, 500ml după";
    }
    if (activity === "sedentar") {
      return "Setează un reminder la fiecare 2h să bei un pahar de apă";
    }
    if (activity === "moderat") {
      return "Hidratează-te bine înainte și după antrenament. Urmărește culoarea urinei — ideal galben deschis.";
    }
    return "Distribuie aportul de apă uniform pe parcursul zilei";
  };

  const fillPercent = result ? Math.round((result.total / 5) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            💧 Calculator Hidratare
          </h1>
          <p className="text-slate-400">
            Află câtă apă ai nevoie pe zi, personalizat pentru tine
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
          <div className="space-y-6">
            {/* Weight */}
            <div>
              <label className="block text-sm font-medium mb-2">Greutate (kg)</label>
              <input
                type="number"
                min={30}
                max={250}
                placeholder="70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
              />
            </div>

            {/* Activity */}
            <div>
              <label className="block text-sm font-medium mb-2">Nivel activitate</label>
              <div className="space-y-2">
                {activityOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setActivity(opt.value)}
                    className={`w-full px-4 py-3 rounded-lg text-left transition-all text-sm font-medium ${
                      activity === opt.value
                        ? "bg-blue-600 text-white"
                        : "bg-black/30 text-slate-300 hover:bg-black/50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Temperature */}
            <div>
              <label className="block text-sm font-medium mb-2">Temperatură ambientală</label>
              <div className="grid grid-cols-2 gap-2">
                {tempOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setTemp(opt.value)}
                    className={`px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                      temp === opt.value
                        ? "bg-cyan-600 text-white"
                        : "bg-black/30 text-slate-300 hover:bg-black/50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                    alapteaza ? "bg-blue-600 border-blue-600" : "border-white/30"
                  }`}
                  onClick={() => setAlapteaza((prev) => !prev)}
                >
                  {alapteaza && <span className="text-white text-xs font-bold">✓</span>}
                </div>
                <span className="text-sm text-slate-300 group-hover:text-white">
                  Alăptezi? <span className="text-slate-500">(+0.7L)</span>
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <div
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                    gravida ? "bg-pink-600 border-pink-600" : "border-white/30"
                  }`}
                  onClick={() => setGravida((prev) => !prev)}
                >
                  {gravida && <span className="text-white text-xs font-bold">✓</span>}
                </div>
                <span className="text-sm text-slate-300 group-hover:text-white">
                  Ești gravidă? <span className="text-slate-500">(+0.3L)</span>
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              onClick={calculate}
              disabled={!weight || parseFloat(weight) < 30}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Droplets className="h-5 w-5" />
              Calculează Necesarul
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="space-y-6 mb-8">
            {/* Main result */}
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-6 text-center">
              <div className="text-slate-400 text-sm mb-1">Necesarul tău zilnic</div>
              <div className="text-6xl font-bold text-cyan-400 mb-1">{result.total}L</div>
              <div className="text-slate-400">
                asta înseamnă{" "}
                <span className="text-white font-semibold">{result.pahare} pahare</span> de 250ml
              </div>
            </div>

            {/* Visual fill bar */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Nivel hidratare vizualizat
              </h3>
              <div className="relative h-8 bg-black/40 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-1000"
                  style={{ width: `${fillPercent}%` }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                  {result.total}L / 5L max
                </div>
              </div>
              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>0L</span>
                <span>2.5L</span>
                <span>5L</span>
              </div>
            </div>

            {/* Distribution */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span>🕐</span> Distribuție pe zile
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "🌅 Dimineață", value: result.distributie.dimineata, sub: "06:00 - 12:00" },
                  { label: "☀️ Prânz", value: result.distributie.pranz, sub: "12:00 - 15:00" },
                  { label: "🌤️ După-amiază", value: result.distributie.dupaAmiaza, sub: "15:00 - 19:00" },
                  { label: "🌙 Seară", value: result.distributie.seara, sub: "19:00 - 22:00" },
                ].map((period) => (
                  <div key={period.label} className="bg-black/30 rounded-xl p-3 text-center">
                    <div className="text-sm mb-1">{period.label}</div>
                    <div className="text-2xl font-bold text-cyan-400">{period.value}L</div>
                    <div className="text-xs text-slate-500">{period.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personalized tip */}
            <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span>💡</span> Sfat personalizat
              </h3>
              <p className="text-slate-300 text-sm">{activityTip()}</p>
            </div>

            {/* Dehydration signs */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span>⚠️</span> Semne de deshidratare
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "Urină galben închis",
                  "Dureri de cap",
                  "Oboseală inexplicabilă",
                  "Gură uscată",
                  "Amețeli",
                  "Performanță scăzută",
                  "Concentrare dificilă",
                  "Constipație",
                ].map((sign) => (
                  <div key={sign} className="flex items-center gap-2 text-slate-400">
                    <span className="text-orange-400">•</span>
                    {sign}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">
                Deshidratarea de 2% reduce performanța fizică cu până la 20%!
              </p>
            </div>

            {/* ProudShare */}
            <ProudShare
              toolName="Calculatorul de Hidratare GymBro"
              achievement={`Necesarul tău zilnic: ${result.total}L (${result.pahare} pahare)`}
              impact="Hidratarea corectă îmbunătățește performanța cu 20%. Spune-le și prietenilor!"
            />
          </div>
        )}

        {/* FAQ */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <span>❓</span> Întrebări Frecvente
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "Câtă apă trebuie să bei pe zi?",
                a: "Necesarul variază: baza este 33ml per kg. Un adult de 70kg are nevoie de ~2.3L, mai mult dacă e activ sau e cald afară.",
              },
              {
                q: "Contează și apa din cafea sau ceai?",
                a: "Da, dar cafeaua are efect ușor diuretic. Contorizează-le ca 75% din cantitate. Sucurile dulci nu se pun la socoteală.",
              },
              {
                q: "Când să bei mai multă apă?",
                a: "Înainte, în timpul și după antrenament. Pe vreme caldă. Dacă ai urma de galben închis în urină — bea imediat.",
              },
              {
                q: "Poți bea prea multă apă?",
                a: "Teoretic da (hiponatremie), dar e rar la nivelul de activitate normal. Rămâi sub 5L/zi și ești în siguranță.",
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-black/30 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-black/50 transition-colors">
                  <span className="font-medium pr-4 text-sm">{faq.q}</span>
                  <span className="text-blue-400 text-lg transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="p-4 pt-0 text-slate-400 text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
