"use client"

import Link from "next/link"

export default function GhidSalaPage() {
  const handleDownloadPDF = () => window.print()

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Ghid Începători la Sală</h1>
          <p className="text-slate-400 text-lg">
            Tot ce trebuie să știi ca să începi la sală — echipament, reguli, program și nutriție.
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
        <div className="prose prose-invert max-w-none space-y-10">

          {/* Echipament */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Echipament Necesar</h2>
            <p className="text-slate-300 mb-4">Pentru început, nu ai nevoie de investiții mari:</p>
            <ul className="space-y-2 text-slate-300">
              <li>🩳 <strong className="text-white">Îmbrăcăminte confortabilă</strong> — pantaloni scurți/lungi și tricou din material respirabil</li>
              <li>👟 <strong className="text-white">Pantofi sport</strong> — pentru stabilitate la exerciții cu greutăți (nu șlapi)</li>
              <li>🏋️ <strong className="text-white">Prosoape</strong> — unul pentru tine, unul să pui pe bancă (igienă)</li>
              <li>💧 <strong className="text-white">Băutură</strong> — sticlă cu apă (1-2L la antrenament)</li>
            </ul>
            <div className="mt-4 bg-slate-800 border border-slate-700 rounded-xl p-4">
              <p className="text-amber-400 font-semibold">⚠️ Nu cumpăra încă:</p>
              <p className="text-slate-300 mt-1">Cingători, mănuși, centură — ai nevoie doar după 3-6 luni de antrenament constant.</p>
            </div>
          </section>

          {/* Reguli de Baza */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Reguli de Bază</h2>

            <div className="space-y-6">
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h3 className="text-lg font-bold text-blue-400 mb-2">1. Încălzire (10 minute)</h3>
                <p className="text-slate-300 mb-2">Fă mereu încălzire înainte de antrenament:</p>
                <ul className="text-slate-300 space-y-1 list-disc list-inside">
                  <li>5 minute mers pe bandă sau bicicletă</li>
                  <li>5 minute mișcări ușoare — rotații articulații, stretching dinamic</li>
                </ul>
              </div>

              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h3 className="text-lg font-bold text-blue-400 mb-2">2. Forma &gt; Greutate</h3>
                <p className="text-slate-300 mb-2">E mai bine să faci 10 repetări corecte cu 10kg, decât 10 repetări proaste cu 20kg.</p>
                <p className="text-slate-400 mb-1">Forma corectă înseamnă:</p>
                <ul className="text-slate-300 space-y-1 list-disc list-inside">
                  <li>Mișcarea controlată (nu arunci greutatea)</li>
                  <li>Menții spatele drept</li>
                  <li>Respiri corect (expiră la efort)</li>
                  <li>Folosești gama completă de mișcare</li>
                </ul>
              </div>

              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h3 className="text-lg font-bold text-blue-400 mb-2">3. Progresia Graduală</h3>
                <p className="text-slate-300">Crește greutatea doar când poți face toate repetările cu formă bună.</p>
                <p className="text-slate-300 mt-1"><strong className="text-white">Regulă:</strong> crește cu 1-2.5kg pe săptămână.</p>
              </div>

              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h3 className="text-lg font-bold text-blue-400 mb-2">4. Odihna între Serii</h3>
                <ul className="text-slate-300 space-y-1">
                  <li>⏱️ <strong className="text-white">Pauză standard:</strong> 60-90 secunde la majoritatea exercițiilor</li>
                  <li>⏱️ <strong className="text-white">Pauză mai lungă:</strong> 2-3 minute la exerciții mari (genuflexiuni, îndreptări)</li>
                </ul>
              </div>

              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h3 className="text-lg font-bold text-blue-400 mb-2">5. Frecvența Antrenamentelor</h3>
                <p className="text-slate-300">Începător: <strong className="text-white">3-4 zile pe săptămână</strong>, restul zile odihnă.</p>
                <p className="text-slate-300 mt-1">Nu antrena același grup muscular 2 zile la rând.</p>
              </div>
            </div>
          </section>

          {/* Program */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Program Antrenament Începători (4 zile/săptămână)</h2>

            <div className="space-y-6">
              {[
                {
                  day: "Ziua 1: Piept și Triceps",
                  exercises: [
                    "Împins la bancă cu gantere — 4 serii × 12 repetări",
                    "Împins la bancă cu bara (până la piept) — 4 serii × 10 repetări",
                    "Împins la presa pentru piept — 4 serii × 12 repetări",
                    "Extensii la cablu — 3 serii × 15 repetări",
                    "Triceps la capră — 3 serii × 12 repetări",
                  ]
                },
                {
                  day: "Ziua 2: Spate și Biceps",
                  exercises: [
                    "Tracțiuni la helcometru — 4 serii × 12 repetări",
                    "Ramă cu bara — 4 serii × 10 repetări",
                    "Remadări cu gantere — 4 serii × 12 repetări",
                    "Biceps cu bara — 3 serii × 12 repetări",
                    "Ridicări cu gantere — 3 serii × 15 repetări",
                  ]
                },
                {
                  day: "Ziua 3: Picioare și Abdomen",
                  exercises: [
                    "Genuflexiuni cu bara — 4 serii × 10 repetări",
                    "Îndreptări românești — 4 serii × 12 repetări",
                    "Fesier la presă — 3 serii × 15 repetări",
                    "Aduceri la cablu — 3 serii × 12 repetări",
                    "Crunches la sol — 4 serii × 20 repetări",
                  ]
                },
                {
                  day: "Ziua 4: Umeri și Antebrațe",
                  exercises: [
                    "Împins cu gantere — 4 serii × 12 repetări",
                    "Ridicări laterale — 4 serii × 15 repetări",
                    "Ridicări în față — 4 serii × 12 repetări",
                    "Împins la presă pentru umeri — 4 serii × 10 repetări",
                    "Îndreptări antebrațe la bara — 3 serii × 15 repetări",
                  ]
                },
              ].map((day, i) => (
                <div key={i} className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                  <h3 className="text-lg font-bold text-purple-400 mb-3">{day.day}</h3>
                  <ol className="space-y-2">
                    {day.exercises.map((ex, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300">
                        <span className="text-purple-500 font-bold min-w-[1.5rem]">{j+1}.</span>
                        <span dangerouslySetInnerHTML={{ __html: ex.replace(/^([^—]+)/, '<strong class="text-white">$1</strong>') }} />
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          {/* Greutati */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Cum să Calculezi Greutățile de Început</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                <div>
                  <p className="font-bold text-white">Află 1RM (Repetiția Maximă)</p>
                  <p className="text-slate-300">Folosește <Link href="/calculator-1rm" className="text-blue-400 hover:text-blue-300 underline">calculatorul nostru 1RM</Link> pentru a afla greutatea maximă la fiecare exercițiu.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                <div>
                  <p className="font-bold text-white">Începe cu 50-60% din 1RM</p>
                  <p className="text-slate-300">Pentru începători, folosește 50-60% din greutatea maximă pe o singură repetare.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                <div>
                  <p className="font-bold text-white">Crește gradual</p>
                  <p className="text-slate-300">Dacă poți face ușor toate repetările cu formă bună, crește cu 2.5-5kg săptămâna viitoare.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Greseli */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Cele Mai Comune Greșeli</h2>
            <div className="space-y-4">
              {[
                { title: "Nu mă încălzesc", risc: "Accidentări, articulații rigide.", fix: "Încălzire 10 minute înainte de antrenament." },
                { title: "Folosesc greutăți prea mari", risc: "Formă proastă, accidentări, zero progres real.", fix: "Prioritizează forma peste greutate." },
                { title: "Nu mă odihnesc suficient", risc: "Oboseală cronică, zero creștere musculară.", fix: "Dorm 7-9 ore pe noapte, 1-2 zile odihnă pe săptămână." },
                { title: "Schimb programul prea des", risc: "Nu progresi, confuzie, frustrare.", fix: "Păstrează același program minimum 8-12 săptămâni." },
                { title: "Mănânc prost", risc: "Zero energie, zero creștere, recuperare lentă.", fix: "Calculează caloriile și macros cu calculatorul nostru." },
              ].map((g, i) => (
                <div key={i} className="bg-slate-900 rounded-xl p-5 border border-red-900/30">
                  <p className="font-bold text-red-400 mb-2">❌ Greșeala {i+1}: {g.title}</p>
                  <p className="text-slate-400 text-sm"><span className="text-amber-400 font-semibold">Risc:</span> {g.risc}</p>
                  <p className="text-slate-300 text-sm mt-1"><span className="text-green-400 font-semibold">Fix:</span> {g.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Nutritie */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Nutriția pentru Începători</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h3 className="text-lg font-bold text-green-400 mb-3">🔥 Calorii</h3>
                <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Masă musculară:</strong> +200-300 kcal/zi</p>
                <p className="text-slate-300 text-sm"><strong className="text-white">Slăbit:</strong> -300-500 kcal/zi</p>
              </div>
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h3 className="text-lg font-bold text-blue-400 mb-3">🥩 Proteine</h3>
                <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Masă:</strong> 1.6-2.2g/kg</p>
                <p className="text-slate-300 text-sm"><strong className="text-white">Slăbit:</strong> 1.8-2.4g/kg</p>
              </div>
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h3 className="text-lg font-bold text-cyan-400 mb-3">💧 Apă</h3>
                <p className="text-slate-300 text-sm">2-3 litri/zi + 500ml în timpul antrenamentului</p>
              </div>
            </div>
          </section>

          {/* Progress */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Cum să Măsori Progresul</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🏋️", title: "Greutatea la Exerciții", desc: "Notează în fiecare săptămână greutățile folosite. Dacă crești, progresi." },
                { icon: "⚖️", title: "Greutatea Corporală", desc: "Cântărește-te 1-2 ori pe săptămână, dimineața pe stomacul gol." },
                { icon: "📸", title: "Fotografiile", desc: "Fă poze în față, profil și spate o dată la lună." },
                { icon: "📏", title: "Măsurătorile", desc: "Notează circumferința pieptului, brațului, taliei, coapsei o dată pe lună." },
              ].map((item, i) => (
                <div key={i} className="bg-slate-900 rounded-xl p-4 border border-slate-800">
                  <p className="font-bold text-white mb-1">{item.icon} {item.title}</p>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Pot începe fără antrenor personal?",
                  a: "Da. Dacă urmezi ghidul, formezi corect, și crești gradual, poți face progres mare fără antrenor."
                },
                {
                  q: "Când îmi văd primele rezultate?",
                  a: "Formă mai bună: 2-3 săptămâni. Rezultate vizibile: 6-8 săptămâni. Transformare majoră: 6-12 luni."
                },
                {
                  q: "Ce fac dacă mă rănesc?",
                  a: "Oprește antrenamentul, pune gheață pe zonă, consultă medic. Nu încerca să ignori durerea."
                },
                {
                  q: "Pot să fac și cardio?",
                  a: "Da. 2-3 sesiuni de 20-30 minute pe săptămână e ideal. Cardio în zilele de odihnă de la forță."
                },
                {
                  q: "Când cumpăr cingători, mănuși, centură?",
                  a: "După 3-6 luni de antrenament constant. La început, nu ai nevoie."
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                  <p className="font-bold text-white mb-2">❓ {item.q}</p>
                  <p className="text-slate-300">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Calculatoare Utile */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Calculatoare Utile</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { href: "/calculator-1rm", label: "Calculator 1RM", desc: "Greutatea maximă la exerciții" },
                { href: "/calculator", label: "Calculator Calorii", desc: "Necesarul caloric zilnic" },
                { href: "/greutate-ideala", label: "Calculator Greutate Ideală", desc: "Greutatea ideală pentru tine" },
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
          <p className="text-slate-400 mb-4">Salvează ghidul pentru referință offline:</p>
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
