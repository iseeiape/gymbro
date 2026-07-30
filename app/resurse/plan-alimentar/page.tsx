"use client"

const days = [
  {
    name: "LUNI",
    total: 1600,
    meals: [
      { name: "Mic dejun", kcal: 450, desc: "Omletă 3 ouă + 2 felii pâine integrală + cafea" },
      { name: "Prânz", kcal: 550, desc: "Piept pui 200g la grătar + cartofi fierți 200g + salată verde" },
      { name: "Cină", kcal: 400, desc: "Iaurt grecesc 300g + fulgi ovăz 50g + 1 banană" },
      { name: "Snack", kcal: 200, desc: "Mere 2 bucăți sau brânză telemea 50g" },
    ],
  },
  {
    name: "MARȚI",
    total: 1600,
    meals: [
      { name: "Mic dejun", kcal: 400, desc: "Fulgi ovăz 80g cu lapte + miere + nuci 20g" },
      { name: "Prânz", kcal: 600, desc: "Tocăniță pui 200g + orez 100g (fiert) + morcovi fierți" },
      { name: "Cină", kcal: 450, desc: "Pește (macrou/ton) 150g + salată de legume + pâine integrală 1 felie" },
      { name: "Snack", kcal: 150, desc: "Iaurt simplu 200g" },
    ],
  },
  {
    name: "MIERCURI",
    total: 1600,
    meals: [
      { name: "Mic dejun", kcal: 450, desc: "Omletă 2 ouă + șuncă slabă 50g + roșii + pâine integrală" },
      { name: "Prânz", kcal: 550, desc: "Mușchi porc 180g la cuptor + piure cartofi 150g + brocoli" },
      { name: "Cină", kcal: 400, desc: "Supă cremă legume + pâine integrală 2 felii" },
      { name: "Snack", kcal: 200, desc: "Hummus 80g + morcovi cruzi" },
    ],
  },
  {
    name: "JOI",
    total: 1600,
    meals: [
      { name: "Mic dejun", kcal: 400, desc: "Clătite proteice (2 ouă + 50g brânză + 30g făină) + iaurt" },
      { name: "Prânz", kcal: 600, desc: "Piept curcan 200g + quinoa 80g + salată ardei + roșii" },
      { name: "Cină", kcal: 450, desc: "Fasole bătută 200g + pâine integrală + ceapă roșie" },
      { name: "Snack", kcal: 150, desc: "Nuci 30g sau 1 portocală" },
    ],
  },
  {
    name: "VINERI",
    total: 1600,
    meals: [
      { name: "Mic dejun", kcal: 450, desc: "Omletă 3 ouă + 100g roșii + pâine integrală + cafea" },
      { name: "Prânz", kcal: 550, desc: "Somon 180g la cuptor + cartofi dulci 200g + salată verde" },
      { name: "Cină", kcal: 400, desc: "Iaurt grecesc 300g + fructe de sezon 200g" },
      { name: "Snack", kcal: 200, desc: "Brânză telemea 60g + roșii" },
    ],
  },
  {
    name: "SÂMBĂTĂ",
    total: 1650,
    meals: [
      { name: "Mic dejun", kcal: 500, desc: "Pancakes ovăz (80g ovăz + 2 ouă + lapte) + miere" },
      { name: "Prânz", kcal: 600, desc: "Grătar mixt (pui 150g + mici 2 buc) + salată de varză + muștar" },
      { name: "Cină", kcal: 400, desc: "Ciorbă de legume + pâine integrală 2 felii" },
      { name: "Snack", kcal: 150, desc: "Mere 2 bucăți" },
    ],
  },
  {
    name: "DUMINICĂ",
    total: 1600,
    meals: [
      { name: "Mic dejun", kcal: 450, desc: "Omletă 3 ouă + brânză feta + spanac + pâine integrală" },
      { name: "Prânz", kcal: 600, desc: "Pui la cuptor 250g + piure cartofi + salată verde" },
      { name: "Cină", kcal: 350, desc: "Iaurt grecesc 400g + granola 40g" },
      { name: "Snack", kcal: 200, desc: "Hummus + ardei gras crud" },
    ],
  },
]

const rules = [
  { icon: "💧", text: "Bea 2-3L apă/zi (folosește ", link: { label: "gymbro.ro/calculator-apa", href: "/calculator-apa" }, after: ")" },
  { icon: "⏰", text: "Nu sări peste mese — metabolismul rămâne activ" },
  { icon: "🍱", text: "Gătește în avans (meal prep duminică pentru toată săptămâna)" },
  { icon: "🔢", text: "Ajustează porțiile cu calculatorul de calorii: ", link: { label: "gymbro.ro/calculator", href: "/calculator" }, after: "" },
  { icon: "🥦", text: "Dacă îți e foame: adaugă legume (aproape 0 calorii)" },
]

const mealColors: Record<string, string> = {
  "Mic dejun": "text-yellow-400",
  "Prânz": "text-blue-400",
  "Cină": "text-purple-400",
  "Snack": "text-green-400",
}

export default function PlanAlimentarPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .day-card { break-inside: avoid; border: 1px solid #ccc !important; background: #f9f9f9 !important; }
          .meal-row { color: #333 !important; border-color: #ddd !important; }
          .meal-label { color: #555 !important; }
          .kcal-badge { background: #e5e7eb !important; color: #374151 !important; }
          .print-header { display: block !important; }
          .rules-section { background: #f0f4ff !important; color: #1e293b !important; }
          .rule-item { color: #1e293b !important; }
        }
        .print-header { display: none; }
      `}</style>

      <div className="min-h-screen bg-slate-950 text-white">
        {/* Print-only header */}
        <div className="print-header text-center py-4 border-b border-gray-300">
          <h1 className="text-2xl font-bold">📋 Plan Alimentar 7 Zile — GymBro.ro</h1>
          <p className="text-sm text-gray-600">gymbro.ro/resurse/plan-alimentar</p>
        </div>

        {/* Hero */}
        <div className="no-print bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              GRATUIT • Personalizat cu calculatoarele GymBro
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              📋 Plan Alimentar 7 Zile
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Meniu complet calculat | Stil românesc | ~1800 kcal/zi
            </p>
            <p className="text-sm text-slate-400 mb-8">
              Potrivit pentru: Slăbit 0.5kg/săptămână | Bărbat 80kg, activitate moderată
              <br />
              <span className="text-blue-400">Ajustează porțiile cu calculatorul → gymbro.ro/calculator</span>
            </p>
            <button
              onClick={handlePrint}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg shadow-blue-900/40 transition-all duration-200 hover:scale-105"
            >
              ⬇️ Descarcă ca PDF
            </button>
          </div>
        </div>

        {/* Days */}
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
          {days.map((day) => (
            <div
              key={day.name}
              className="day-card bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-6 py-4 flex items-center justify-between border-b border-white/10">
                <h2 className="text-xl font-black tracking-wider text-white">{day.name}</h2>
                <span className="text-sm text-slate-400 font-semibold">
                  Total: <span className="text-white">~{day.meals.reduce((s, m) => s + m.kcal, 0)} kcal</span>
                </span>
              </div>
              <div className="divide-y divide-white/5">
                {day.meals.map((meal) => (
                  <div key={meal.name} className="meal-row px-6 py-3 flex items-start gap-4">
                    <div className="flex-shrink-0 w-28">
                      <span className={`meal-label text-sm font-bold ${mealColors[meal.name] || "text-white"}`}>
                        {meal.name}
                      </span>
                    </div>
                    <div className="flex-1 text-slate-300 text-sm leading-relaxed">{meal.desc}</div>
                    <div className="flex-shrink-0">
                      <span className="kcal-badge bg-slate-800 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-lg">
                        {meal.kcal} kcal
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Golden Rules */}
          <div className="rules-section bg-gradient-to-br from-blue-950 to-purple-950 border border-blue-500/20 rounded-2xl p-8 mt-8">
            <h2 className="text-2xl font-black mb-6 text-white flex items-center gap-2">
              🏆 Reguli de Aur
            </h2>
            <div className="space-y-4">
              {rules.map((rule, i) => (
                <div key={i} className="rule-item flex items-start gap-3 text-slate-300">
                  <span className="text-xl flex-shrink-0">{rule.icon}</span>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">{i + 1}. </span>
                    {rule.text}
                    {rule.link && (
                      <a href={rule.link.href} className="text-blue-400 hover:text-blue-300 underline">
                        {rule.link.label}
                      </a>
                    )}
                    {rule.after}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="no-print text-center py-10">
            <p className="text-slate-400 mb-4 text-lg">
              Vrei un plan personalizat pe caloriile tale exacte?
            </p>
            <a
              href="/calculator"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition-all duration-200 hover:scale-105"
            >
              Calculează caloriile tale exacte →
            </a>
            <p className="text-slate-500 text-sm mt-3">gymbro.ro/calculator</p>
          </div>

          {/* Download button bottom */}
          <div className="no-print text-center pb-8">
            <button
              onClick={handlePrint}
              className="bg-slate-800 hover:bg-slate-700 border border-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              ⬇️ Descarcă ca PDF
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
