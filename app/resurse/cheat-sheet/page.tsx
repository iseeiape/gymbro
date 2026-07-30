"use client"

import Link from "next/link"

export default function CheatSheetPage() {
  const handleDownloadPDF = () => window.print()

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Cheat Sheet Calculatoare Fitness</h1>
          <p className="text-slate-400 text-lg">
            Formule și valori de referință pentru calculatoarele GymBro — IMC, calorii, 1RM, greutate ideală.
          </p>
        </div>

        {/* Download Button - Top */}
        <div className="mb-10 flex justify-center">
          <button
            onClick={handleDownloadPDF}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 text-lg"
          >
            📄 Descarcă ca PDF
          </button>
        </div>

        {/* Content */}
        <div className="space-y-10">

          {/* IMC */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">IMC — Indicele de Masă Corporală</h2>
            <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 mb-4">
              <p className="text-slate-400 text-sm mb-1 font-semibold uppercase tracking-wide">Formula</p>
              <code className="text-green-400 text-lg font-mono">IMC = greutate (kg) / înălțime (m)²</code>
            </div>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="text-left p-3 text-slate-300 font-semibold rounded-tl-lg">IMC</th>
                    <th className="text-left p-3 text-slate-300 font-semibold rounded-tr-lg">Categorie</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["&lt; 18.5", "Subponderal", "text-blue-400"],
                    ["18.5 – 24.9", "Normal ✅", "text-green-400"],
                    ["25 – 29.9", "Supraponderal", "text-yellow-400"],
                    ["30 – 34.9", "Obezitate I", "text-orange-400"],
                    ["35 – 39.9", "Obezitate II", "text-red-400"],
                    ["≥ 40", "Obezitate III", "text-red-600"],
                  ].map(([imc, cat, color], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-slate-900" : "bg-slate-800/50"}>
                      <td className="p-3 text-slate-300 font-mono" dangerouslySetInnerHTML={{ __html: imc as string }} />
                      <td className={`p-3 font-semibold ${color}`}>{cat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-4">
              <p className="text-amber-400 font-semibold text-sm mb-1">⚠️ Limitări IMC:</p>
              <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
                <li>Nu distinge între masă musculară și grăsime</li>
                <li>Sportivii pot avea IMC crescut din cauza mușchilor</li>
              </ul>
            </div>
          </section>

          {/* BMR */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Calorii Zilnice — Formula BMR</h2>
            <p className="text-slate-400 mb-3">Formula Harris-Benedict (revizuită, 1984):</p>
            <div className="space-y-3 mb-5">
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <p className="text-blue-400 font-semibold mb-2">👨 Bărbați:</p>
                <code className="text-green-400 font-mono text-sm leading-relaxed block">
                  BMR = 88.362 + (13.397 × kg) + (4.799 × cm) - (5.677 × ani)
                </code>
              </div>
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <p className="text-pink-400 font-semibold mb-2">👩 Femei:</p>
                <code className="text-green-400 font-mono text-sm leading-relaxed block">
                  BMR = 447.593 + (9.247 × kg) + (3.098 × cm) - (4.330 × ani)
                </code>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-300 mb-3">Multiplicatori Activitate (TDEE)</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="text-left p-3 text-slate-300 font-semibold rounded-tl-lg">Nivel Activitate</th>
                    <th className="text-right p-3 text-slate-300 font-semibold rounded-tr-lg">× BMR</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Sedentar (puțin sau deloc sport)", "1.2"],
                    ["Ușor activ (sport 1-3 zile/săpt)", "1.375"],
                    ["Moderat activ (sport 3-5 zile/săpt)", "1.55"],
                    ["Foarte activ (sport 6-7 zile/săpt)", "1.725"],
                    ["Extrem de activ (sport intens zilnic)", "1.9"],
                  ].map(([act, mult], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-slate-900" : "bg-slate-800/50"}>
                      <td className="p-3 text-slate-300">{act}</td>
                      <td className="p-3 text-green-400 font-bold text-right font-mono">{mult}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-900 rounded-xl p-5 border border-blue-800/30">
              <p className="text-blue-400 font-semibold mb-2">📋 Exemplu: Bărbat 30 ani, 80kg, 175cm, moderat activ</p>
              <code className="text-slate-300 font-mono text-sm leading-relaxed block whitespace-pre-wrap">{`BMR = 88.362 + (13.397×80) + (4.799×175) - (5.677×30)
    = 88.362 + 1071.76 + 839.825 - 170.31
    = 1829.6 kcal

TDEE = 1829.6 × 1.55 = 2836 kcal`}</code>
            </div>
          </section>

          {/* Macros */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Procente Macronutrienți</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              {[
                {
                  goal: "🔥 Slăbit",
                  color: "border-orange-700/40",
                  headColor: "text-orange-400",
                  macros: [["Proteine", "30-40%"], ["Carbohidrați", "25-35%"], ["Grăsimi", "25-30%"]]
                },
                {
                  goal: "💪 Masă Musculară",
                  color: "border-blue-700/40",
                  headColor: "text-blue-400",
                  macros: [["Proteine", "25-30%"], ["Carbohidrați", "45-55%"], ["Grăsimi", "20-25%"]]
                },
                {
                  goal: "⚖️ Menținere",
                  color: "border-green-700/40",
                  headColor: "text-green-400",
                  macros: [["Proteine", "20-25%"], ["Carbohidrați", "45-55%"], ["Grăsimi", "20-30%"]]
                },
              ].map((obj, i) => (
                <div key={i} className={`bg-slate-900 rounded-xl p-5 border ${obj.color}`}>
                  <h3 className={`font-bold mb-3 ${obj.headColor}`}>{obj.goal}</h3>
                  {obj.macros.map(([name, val], j) => (
                    <div key={j} className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">{name}</span>
                      <span className="text-white font-semibold">{val}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
              <p className="text-slate-400 font-semibold text-sm mb-2">Formulă Conversie (calorii → grame):</p>
              <code className="text-green-400 font-mono text-sm leading-relaxed block whitespace-pre-wrap">{`g proteine  = (calorii × %proteine) / 4
g carbo     = (calorii × %carbo) / 4
g grăsimi   = (calorii × %grăsimi) / 9`}</code>
            </div>
          </section>

          {/* 1RM */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">1RM — Repetiția Maximă</h2>
            <div className="space-y-3 mb-5">
              {[
                {
                  name: "Formula Brzycki (1980)",
                  note: "Limit: maxim 10 repetări",
                  formula: "1RM = greutate / (1.0278 - (0.0278 × repetări))"
                },
                {
                  name: "Formula Epley (1995)",
                  formula: "1RM = greutate × (1 + 0.0333 × repetări)"
                },
                {
                  name: "Formula Lander (1985)",
                  formula: "1RM = 100 × greutate / (101.3 - 2.67123 × repetări)"
                },
              ].map((f, i) => (
                <div key={i} className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                  <p className="text-purple-400 font-semibold mb-1">{f.name}</p>
                  {f.note && <p className="text-amber-400 text-xs mb-2">⚠️ {f.note}</p>}
                  <code className="text-green-400 font-mono text-sm">{f.formula}</code>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-slate-300 mb-3">Procentaje pentru Antrenament</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="text-left p-3 text-slate-300 font-semibold">% din 1RM</th>
                    <th className="text-left p-3 text-slate-300 font-semibold">Obiectiv</th>
                    <th className="text-right p-3 text-slate-300 font-semibold">Repetări/Serie</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["60-70%", "Încălzire, formă", "12-20", "text-slate-300"],
                    ["70-80%", "Hipertrofie (masă)", "8-12", "text-blue-400"],
                    ["80-85%", "Forță", "4-8", "text-purple-400"],
                    ["85-100%", "Maximă forță", "1-4", "text-red-400"],
                  ].map(([pct, obj, reps, color], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-slate-900" : "bg-slate-800/50"}>
                      <td className={`p-3 font-bold font-mono ${color}`}>{pct}</td>
                      <td className="p-3 text-slate-300">{obj}</td>
                      <td className="p-3 text-slate-400 text-right">{reps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-4">
              <p className="text-amber-400 font-semibold text-sm mb-1">⚠️ Reguli de Siguranță:</p>
              <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
                <li>Formulele sunt estimate — 1RM real poate diferi cu ±10%</li>
                <li>Testează 1RM numai dacă ai 6+ luni de antrenament</li>
                <li>Folosește spotter pentru exerciții grele (împins la bancă, genuflexiuni)</li>
              </ul>
            </div>
          </section>

          {/* Greutate Ideala */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Greutate Ideală</h2>
            <div className="space-y-3 mb-4">
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <p className="text-slate-400 font-semibold mb-2">Formula Devine (1974):</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-blue-400 text-sm mb-1">👨 Bărbați:</p>
                    <code className="text-green-400 font-mono text-sm">Greutate ideală (kg) = 50 + 2.3 × (înălțime cm / 2.54 - 60)</code>
                  </div>
                  <div>
                    <p className="text-pink-400 text-sm mb-1">👩 Femei:</p>
                    <code className="text-green-400 font-mono text-sm">Greutate ideală (kg) = 45.5 + 2.3 × (înălțime cm / 2.54 - 60)</code>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <p className="text-slate-400 font-semibold mb-2">Formula BMI-based (mai simplă):</p>
                <code className="text-green-400 font-mono text-sm block mb-2">Greutate ideală (kg) = IMC țintă × înălțime (m)²</code>
                <p className="text-slate-400 text-sm">IMC țintă recomandat: <span className="text-white font-semibold">21.75 – 24</span> (zona normală)</p>
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-5 border border-blue-800/30">
              <p className="text-blue-400 font-semibold mb-2">📋 Exemplu: Femeie, 165cm, IMC țintă 22</p>
              <code className="text-slate-300 font-mono text-sm">Greutate ideală = 22 × 1.65² = 22 × 2.7225 = 59.9 kg</code>
            </div>
          </section>

          {/* Apa */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Apă Zilnică Recomandată</h2>
            <div className="space-y-3 mb-4">
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <p className="text-slate-400 font-semibold mb-1">Formula simplă:</p>
                <code className="text-green-400 font-mono">Apa (L) = greutate (kg) × 0.033</code>
              </div>
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <p className="text-slate-400 font-semibold mb-1">Formula cu activitate:</p>
                <code className="text-green-400 font-mono">Apa (L) = greutate (kg) × 0.033 + 0.5 × ore sport</code>
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-5 border border-blue-800/30 mb-4">
              <p className="text-blue-400 font-semibold mb-2">📋 Exemplu: 80kg, 2 ore sport/zi</p>
              <code className="text-slate-300 font-mono text-sm">Apa = 80×0.033 + 0.5×2 = 2.64 + 1 = 3.64 L</code>
            </div>
            <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-4">
              <p className="text-red-400 font-semibold text-sm mb-1">🚨 Semne de Deshidratare:</p>
              <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
                <li>Urină galben închis</li>
                <li>Gură uscată</li>
                <li>Oboseală excesivă</li>
                <li>Dureri de cap</li>
              </ul>
            </div>
          </section>

          {/* Body Fat */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Procentaj Grăsime Corporală</h2>
            <div className="space-y-3 mb-5">
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <p className="text-blue-400 font-semibold mb-2">👨 Bărbați (US Navy):</p>
                <code className="text-green-400 font-mono text-sm leading-relaxed block">
                  %BF = 86.010 × log10(abdomen - gât) - 70.041 × log10(înălțime) + 36.76
                </code>
              </div>
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <p className="text-pink-400 font-semibold mb-2">👩 Femei (US Navy):</p>
                <code className="text-green-400 font-mono text-sm leading-relaxed block">
                  %BF = 163.205 × log10(talie + sold - gât) - 97.684 × log10(înălțime) - 78.387
                </code>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="overflow-x-auto">
                <p className="text-blue-400 font-semibold mb-2">👨 Clasificare Bărbați</p>
                <table className="w-full text-sm">
                  <thead><tr className="bg-slate-800"><th className="text-left p-2 text-slate-300">%BF</th><th className="text-left p-2 text-slate-300">Categorie</th></tr></thead>
                  <tbody>
                    {[["2-5%", "Sportiv Elite", "text-yellow-400"], ["6-13%", "Athletic", "text-green-400"], ["14-17%", "Fitness", "text-blue-400"], ["18-24%", "Acceptabil", "text-slate-300"], ["25%+", "Obezitate", "text-red-400"]].map(([pct, cat, color], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-slate-900" : "bg-slate-800/50"}>
                        <td className="p-2 font-mono text-slate-300">{pct}</td>
                        <td className={`p-2 font-semibold ${color}`}>{cat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="overflow-x-auto">
                <p className="text-pink-400 font-semibold mb-2">👩 Clasificare Femei</p>
                <table className="w-full text-sm">
                  <thead><tr className="bg-slate-800"><th className="text-left p-2 text-slate-300">%BF</th><th className="text-left p-2 text-slate-300">Categorie</th></tr></thead>
                  <tbody>
                    {[["10-13%", "Sportiv Elite", "text-yellow-400"], ["14-20%", "Athletic", "text-green-400"], ["21-24%", "Fitness", "text-blue-400"], ["25-31%", "Acceptabil", "text-slate-300"], ["32%+", "Obezitate", "text-red-400"]].map(([pct, cat, color], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-slate-900" : "bg-slate-800/50"}>
                        <td className="p-2 font-mono text-slate-300">{pct}</td>
                        <td className={`p-2 font-semibold ${color}`}>{cat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Valori Referinta */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Valori de Referință Rapidă</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h3 className="text-blue-400 font-bold mb-3">🥩 Proteine per kg</h3>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>Începători slăbit: <strong className="text-white">1.8-2.2g/kg</strong></li>
                  <li>Începători masă: <strong className="text-white">1.6-2.0g/kg</strong></li>
                  <li>Avansați masă: <strong className="text-white">1.8-2.4g/kg</strong></li>
                </ul>
              </div>
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h3 className="text-orange-400 font-bold mb-3">🍚 Carbohidrați per kg</h3>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>Slăbit: <strong className="text-white">3-4g/kg</strong></li>
                  <li>Masă: <strong className="text-white">4-6g/kg</strong></li>
                  <li>Definire: <strong className="text-white">2-3g/kg</strong></li>
                </ul>
              </div>
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h3 className="text-yellow-400 font-bold mb-3">🥑 Grăsimi per kg</h3>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>Minimum sănătos: <strong className="text-white">0.6-0.8g/kg</strong></li>
                  <li>Optimum: <strong className="text-white">0.8-1.0g/kg</strong></li>
                </ul>
              </div>
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h3 className="text-purple-400 font-bold mb-3">⏱️ Odihnă Între Serii</h3>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li>Exerciții mari: <strong className="text-white">2-3 min</strong></li>
                  <li>Exerciții medii: <strong className="text-white">60-90 sec</strong></li>
                  <li>Izolații: <strong className="text-white">45-60 sec</strong></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conversii */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Conversii Rapide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "⚖️ Greutate",
                  items: ["1 kg = 2.2046 lbs", "1 lbs = 0.4536 kg"]
                },
                {
                  title: "📏 Lungime",
                  items: ["1 cm = 0.3937 inch", "1 inch = 2.54 cm", "1 m = 3.2808 ft"]
                },
                {
                  title: "💧 Volum",
                  items: ["1 cup = 240 ml (aprox)", "1 oz = 30 ml"]
                },
                {
                  title: "🔥 Energie",
                  items: ["1 kcal = 4184 J", "1 kJ = 0.239 kcal"]
                },
              ].map((section, i) => (
                <div key={i} className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                  <h3 className="font-bold text-slate-300 mb-3">{section.title}</h3>
                  <ul className="space-y-1">
                    {section.items.map((item, j) => (
                      <li key={j} className="text-slate-400 font-mono text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Calculatoare */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Calculatoare GymBro</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { href: "/imc", label: "Calculator IMC", desc: "Indicele de masă corporală" },
                { href: "/calculator", label: "Calculator Calorii", desc: "Necesarul caloric zilnic" },
                { href: "/calculator-1rm", label: "Calculator 1RM", desc: "Repetiția maximă" },
                { href: "/greutate-ideala", label: "Calculator Greutate Ideală", desc: "Greutatea ideală" },
                { href: "/body-fat", label: "Calculator Grăsime Corporală", desc: "Procentaj grăsime" },
                { href: "/calculator-apa", label: "Calculator Apă", desc: "Apă zilnică recomandată" },
              ].map((calc, i) => (
                <Link key={i} href={calc.href} className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 border border-slate-700 transition-colors">
                  <p className="font-bold text-blue-400">{calc.label}</p>
                  <p className="text-slate-400 text-sm mt-1">{calc.desc}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>

        {/* Download Button - Bottom */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Salvează cheat sheet-ul pentru referință offline:</p>
          <button
            onClick={handleDownloadPDF}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 text-lg"
          >
            📄 Descarcă ca PDF
          </button>
        </div>
      </div>
    </div>
  )
}
