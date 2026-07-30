"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, RotateCcw, ShoppingCart, Calculator, Trophy } from "lucide-react";
import { ProudShare } from "../components/ProudShare";

// ── Types ──────────────────────────────────────────────────────────────────────

type Goal = "bulk" | "cut" | "forta" | "sanatate";
type Level = "incepator" | "intermediar" | "avansat";
type Budget = "mic" | "mediu" | "bun" | "nelimitat";
type Restrictie = "niciuna" | "lactoza" | "vegan" | "cardio" | "altele";
type Somn = "prost" | "ok" | "bine" | "excelent";

interface Answers {
  goal: Goal | null;
  level: Level | null;
  budget: Budget | null;
  restrictie: Restrictie | null;
  somn: Somn | null;
}

interface Supliment {
  nume: string;
  motiv: string;
  prioritate: "esential" | "recomandat" | "optional";
  pretMin: number;
  pretMax: number;
  categorie: string;
}

// ── Recommendation logic ───────────────────────────────────────────────────────

function generateStack(answers: Answers): Supliment[] {
  const { goal, level, budget, restrictie, somn } = answers;
  const stack: Supliment[] = [];

  const isVegan = restrictie === "vegan";
  const isLactoza = restrictie === "lactoza";
  const isCardio = restrictie === "cardio";
  const somnProst = somn === "prost";
  const isBulk = goal === "bulk";
  const isCut = goal === "cut";
  const isAvansat = level === "avansat";
  const budgetBun = budget === "bun" || budget === "nelimitat";

  // 1. Proteina
  const proteinaNume = isVegan
    ? "Vegan Protein Blend (Pea + Rice)"
    : isLactoza
    ? "Whey Izolat (Iso Whey Zero)"
    : isAvansat && budgetBun
    ? "Whey Izolat (Dymatize ISO 100)"
    : "Proteină Whey 1kg";

  stack.push({
    nume: proteinaNume,
    motiv: isVegan
      ? "Alternativă completă la whey pentru vegani — mix de mazăre și orez pentru toți aminoacizii esențiali."
      : isLactoza
      ? "Izolatul de whey are sub 1g lactoză pe porție — perfect pentru intoleranți fără a sacrifica calitatea."
      : "Cel mai convenabil mod de a atinge 1.6g proteină/kg corp. Esențial dacă dieta nu acoperă necesarul.",
    prioritate: "esential",
    pretMin: isVegan ? 120 : isAvansat && budgetBun ? 200 : 70,
    pretMax: isVegan ? 200 : isAvansat && budgetBun ? 320 : 130,
    categorie: "proteine",
  });

  // 2. Creatina
  const creatinaNume =
    isAvansat && budgetBun
      ? "Creatină Creapure (Premium)"
      : "Creatină Monohidrat";

  stack.push({
    nume: creatinaNume,
    motiv:
      isCut
        ? "Menține forța și masa musculară în deficit caloric — cel mai important supliment în perioadă de cut."
        : "Cel mai mare ROI din toate suplimentele: +5-15% forță, mai multă masă, recuperare mai rapidă. 700+ studii clinice.",
    prioritate: "esential",
    pretMin: isAvansat && budgetBun ? 80 : 39,
    pretMax: isAvansat && budgetBun ? 140 : 65,
    categorie: "creatina",
  });

  // 3. Vitamina D3 (pentru non-bulk-avansat)
  if (!(isAvansat && isBulk && !budgetBun)) {
    stack.push({
      nume: "Vitamina D3 (2000-5000 UI)",
      motiv:
        "Studiile arată că 80% din români au deficiență de vitamina D, mai ales iarna. Impactează hormonii, recuperarea și imunitatea.",
      prioritate: "recomandat",
      pretMin: 15,
      pretMax: 30,
      categorie: "vitamine",
    });
  }

  // 4. Omega-3 (pentru intermediar+ sau budget mediu+)
  if (level !== "incepator" || budget !== "mic") {
    stack.push({
      nume: "Omega-3 (EPA + DHA)",
      motiv:
        "Reduce inflamația, îmbunătățește recuperarea și sănătatea cardiovasculară. Benefic indiferent de obiectiv.",
      prioritate: budgetBun ? "recomandat" : "optional",
      pretMin: 30,
      pretMax: 60,
      categorie: "vitamine",
    });
  }

  // 5. L-Carnitine (cut)
  if (isCut && budget !== "mic") {
    stack.push({
      nume: "L-Carnitină Lichidă",
      motiv:
        "Ajută transportul acizilor grași în mitocondrii pentru energie. Beneficiu modest dar real în deficit caloric cu cardio.",
      prioritate: "recomandat",
      pretMin: 40,
      pretMax: 80,
      categorie: "slabit",
    });
  }

  // 6. CLA (cut, budget bun)
  if (isCut && budgetBun) {
    stack.push({
      nume: "CLA (Acid Linoleic Conjugat)",
      motiv:
        "Supliment opțional pentru definire — efect modest în reducerea grăsimii corporale și menținerea masei musculare.",
      prioritate: "optional",
      pretMin: 40,
      pretMax: 70,
      categorie: "slabit",
    });
  }

  // 7. ZMA (avansat sau budget bun sau somn prost)
  if (isAvansat || somnProst) {
    stack.push({
      nume: "ZMA (Zinc, Magneziu, B6)",
      motiv:
        somnProst
          ? "Somnul slab îți sabotează progresul! ZMA îmbunătățește calitatea somnului și nivelurile hormonale pentru recuperare optimă."
          : "Optimizează producția de testosteron și hormonul de creștere în timpul somnului. Esențial pentru sportivi avansați.",
      prioritate: somnProst ? "esential" : "recomandat",
      pretMin: 40,
      pretMax: 80,
      categorie: "recuperare",
    });
  }

  // 8. Magneziu + Melatonin (somn prost)
  if (somnProst) {
    stack.push({
      nume: "Magneziu Glicinat + Melatonin",
      motiv:
        "Combo puternic pentru somn: magneziul relaxează mușchii și sistemul nervos, melatonina reglează ciclul somn-veghe.",
      prioritate: "esential",
      pretMin: 30,
      pretMax: 55,
      categorie: "recuperare",
    });
  }

  // 9. Pre-workout (nu pentru cardio și nu pentru incepator-mic)
  if (!isCardio && !(level === "incepator" && budget === "mic")) {
    stack.push({
      nume: budgetBun ? "Pre-workout Premium (cu caffeine + beta-alanine)" : "Pre-workout de bază (caffeine + beta-alanine)",
      motiv:
        "Creștere de energie, focus și pompă musculară. Util pentru antrenamente intense — nu e necesar zilnic.",
      prioritate: isAvansat ? "recomandat" : "optional",
      pretMin: 60,
      pretMax: 120,
      categorie: "pre-workout",
    });
  }

  // Limităm la maxim 6 suplimente, ordonate după prioritate
  const priorityOrder = { esential: 0, recomandat: 1, optional: 2 };
  stack.sort((a, b) => priorityOrder[a.prioritate] - priorityOrder[b.prioritate]);

  return stack.slice(0, 6);
}

// ── Constants ──────────────────────────────────────────────────────────────────

const STEPS = [
  {
    id: 1,
    intrebare: "Care e obiectivul tău principal?",
    optiuni: [
      { value: "bulk", label: "Creștere masă musculară", emoji: "💪", sub: "bulk" },
      { value: "cut", label: "Slăbire și definire", emoji: "🔥", sub: "cut" },
      { value: "forta", label: "Forță și performanță", emoji: "⚡", sub: "" },
      { value: "sanatate", label: "Sănătate generală și energie", emoji: "🏃", sub: "" },
    ],
  },
  {
    id: 2,
    intrebare: "Care e nivelul tău de experiență?",
    optiuni: [
      { value: "incepator", label: "Începător", emoji: "🌱", sub: "0-1 ani de antrenament" },
      { value: "intermediar", label: "Intermediar", emoji: "📈", sub: "1-3 ani" },
      { value: "avansat", label: "Avansat", emoji: "🏆", sub: "3+ ani" },
    ],
  },
  {
    id: 3,
    intrebare: "Care e bugetul tău lunar pentru suplimente?",
    optiuni: [
      { value: "mic", label: "Sub 100 lei", emoji: "💚", sub: "buget mic" },
      { value: "mediu", label: "100-250 lei", emoji: "💛", sub: "buget mediu" },
      { value: "bun", label: "250-500 lei", emoji: "🔵", sub: "buget bun" },
      { value: "nelimitat", label: "Peste 500 lei", emoji: "💎", sub: "fără limită" },
    ],
  },
  {
    id: 4,
    intrebare: "Ai vreo restricție alimentară sau problemă de sănătate?",
    optiuni: [
      { value: "niciuna", label: "Nu, nicio restricție", emoji: "✅", sub: "" },
      { value: "lactoza", label: "Intoleranță la lactoză", emoji: "🥛", sub: "" },
      { value: "vegan", label: "Vegan / Vegetarian", emoji: "🌱", sub: "" },
      { value: "cardio", label: "Probleme cardiovasculare", emoji: "❤️", sub: "evit stimulanți" },
      { value: "altele", label: "Alte restricții", emoji: "💊", sub: "" },
    ],
  },
  {
    id: 5,
    intrebare: "Câte ore dormi în medie pe noapte?",
    optiuni: [
      { value: "prost", label: "Mai puțin de 6 ore", emoji: "😴", sub: "somn prost" },
      { value: "ok", label: "6-7 ore", emoji: "😊", sub: "ok" },
      { value: "bine", label: "7-8 ore", emoji: "🌟", sub: "bine" },
      { value: "excelent", label: "8+ ore", emoji: "✨", sub: "excelent" },
    ],
  },
];

const GOAL_LABELS: Record<string, string> = {
  bulk: "Creștere masă musculară",
  cut: "Slăbire și definire",
  forta: "Forță și performanță",
  sanatate: "Sănătate și energie",
};

const PRIORITY_CONFIG = {
  esential: { label: "Esențial", color: "bg-red-500/20 text-red-400 border-red-500/30", dot: "🔴" },
  recomandat: { label: "Recomandat", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", dot: "🟡" },
  optional: { label: "Opțional", color: "bg-green-500/20 text-green-400 border-green-500/30", dot: "🟢" },
};

// ── Component ──────────────────────────────────────────────────────────────────

export default function QuizSuplimente() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({
    goal: null,
    level: null,
    budget: null,
    restrictie: null,
    somn: null,
  });
  const [transitioning, setTransitioning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [stack, setStack] = useState<Supliment[]>([]);

  const ANSWER_KEYS: (keyof Answers)[] = ["goal", "level", "budget", "restrictie", "somn"];

  const currentKey = ANSWER_KEYS[step - 1];
  const currentAnswer = answers[currentKey];

  const selectOption = (value: string) => {
    const newAnswers = { ...answers, [currentKey]: value as never };
    setAnswers(newAnswers);

    if (step < 5) {
      setTransitioning(true);
      setTimeout(() => {
        setStep(step + 1);
        setTransitioning(false);
      }, 300);
    } else {
      // Last step — generate results
      setTransitioning(true);
      setTimeout(() => {
        const generatedStack = generateStack(newAnswers);
        setStack(generatedStack);
        setFinished(true);
        setTransitioning(false);
      }, 400);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setTransitioning(true);
      setTimeout(() => {
        setStep(step - 1);
        setTransitioning(false);
      }, 200);
    }
  };

  const restart = () => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(1);
      setAnswers({ goal: null, level: null, budget: null, restrictie: null, somn: null });
      setFinished(false);
      setStack([]);
      setTransitioning(false);
    }, 300);
  };

  const totalMin = stack.reduce((s, x) => s + x.pretMin, 0);
  const totalMax = stack.reduce((s, x) => s + x.pretMax, 0);

  const currentStep = STEPS[step - 1];

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-3xl mx-auto px-4 py-12">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
            Quiz Suplimente 🎯
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            5 întrebări rapide → stack personalizat bazat pe știință, cu prețuri din România.
          </p>
        </div>

        {/* Quiz or Results */}
        {!finished ? (
          <div
            className={`transition-all duration-300 ${transitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
                <span>Pasul {step} din 5</span>
                <span>{Math.round((step / 5) * 100)}% complet</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                  style={{ width: `${(step / 5) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div
                    key={n}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      n < step
                        ? "bg-purple-500 text-white"
                        : n === step
                        ? "bg-pink-500 text-white ring-2 ring-pink-400 ring-offset-2 ring-offset-slate-950"
                        : "bg-slate-800 text-slate-500"
                    }`}
                  >
                    {n < step ? "✓" : n}
                  </div>
                ))}
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-center">{currentStep.intrebare}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentStep.optiuni.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => selectOption(opt.value)}
                    className={`group p-4 rounded-xl border-2 text-left transition-all hover:scale-[1.02] active:scale-[0.98] ${
                      currentAnswer === opt.value
                        ? "border-purple-500 bg-purple-500/20"
                        : "border-white/10 bg-black/20 hover:border-white/30 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl leading-none mt-0.5">{opt.emoji}</span>
                      <div>
                        <div className="font-semibold text-white">{opt.label}</div>
                        {opt.sub && <div className="text-xs text-slate-400 mt-0.5">{opt.sub}</div>}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Back Button */}
              {step > 1 && (
                <div className="mt-6 flex justify-start">
                  <button
                    onClick={goBack}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Înapoi
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ── RESULTS ── */
          <div
            className={`transition-all duration-300 ${transitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
          >
            {/* Result Header */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 md:p-8 border border-purple-500/30 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="h-8 w-8 text-yellow-400" />
                <h2 className="text-2xl font-bold">Stack-ul tău personalizat 🎯</h2>
              </div>
              <p className="text-slate-300 mb-4">
                Bazat pe obiectivul tău de{" "}
                <strong className="text-purple-400">
                  {GOAL_LABELS[answers.goal ?? "bulk"]}
                </strong>
                , am selectat{" "}
                <strong>{stack.length} suplimente</strong> optimizate pentru tine.
              </p>

              {/* Total estimate */}
              <div className="bg-black/30 rounded-xl px-4 py-3 inline-flex items-center gap-2">
                <span className="text-slate-400 text-sm">Estimat total lunar:</span>
                <span className="text-white font-bold text-lg">
                  {totalMin}–{totalMax} lei
                </span>
              </div>
            </div>

            {/* Stack Cards */}
            <div className="space-y-4 mb-8">
              {stack.map((sup, idx) => {
                const prio = PRIORITY_CONFIG[sup.prioritate];
                return (
                  <div
                    key={idx}
                    className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold text-white text-lg leading-tight">{sup.nume}</h3>
                      <span
                        className={`flex-shrink-0 text-xs font-semibold px-2 py-1 rounded-full border ${prio.color}`}
                      >
                        {prio.dot} {prio.label}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">{sup.motiv}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        ~{sup.pretMin}–{sup.pretMax} lei/lună
                      </span>
                      <Link
                        href={`/suplimente?categorie=${sup.categorie}`}
                        className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
                      >
                        Vezi prețuri <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 mb-8">
              <Link
                href="/suplimente"
                className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 hover:scale-[1.01] transition-all"
              >
                <ShoppingCart className="h-5 w-5" />
                Vezi prețurile și cumpără →
              </Link>
              <Link
                href="/calculator"
                className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                <Calculator className="h-5 w-5" />
                Calculează caloriile → /calculator
              </Link>
            </div>

            {/* ProudShare */}
            <div className="mb-6">
              <ProudShare
                toolName="Quiz Suplimente GymBro"
                achievement={`Stack personalizat generat pentru obiectivul: ${GOAL_LABELS[answers.goal ?? "bulk"]}!`}
                impact="Acum știi EXACT ce suplimente îți trebuie și nu mai arunci bani pe produse inutile. 💪"
              />
            </div>

            {/* Restart */}
            <div className="text-center">
              <button
                onClick={restart}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700 transition-all font-medium"
              >
                <RotateCcw className="h-4 w-4" />
                Reîncepe Quiz
              </button>
            </div>

            {/* FAQ */}
            <div className="mt-16 bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">❓</span>
                </div>
                <h2 className="text-2xl font-bold">Întrebări Frecvente</h2>
              </div>
              <div className="space-y-4">
                {[
                  {
                    q: "Ce suplimente ar trebui să ia un începător la sală?",
                    a: "Un începător are nevoie de puține suplimente: creatină monohidrat (cel mai mare ROI), proteină whey (dacă nu atingi 1.6g/kg din mâncare) și vitamina D3. Evită pre-workout și BCAA la acest nivel.",
                  },
                  {
                    q: "Cât costă un stack de bază în România?",
                    a: "Un stack minimal eficient costă 80-150 lei/lună: creatină monohidrat (39-55 lei/300g), vitamina D3 (15-25 lei) și opțional whey protein (50-80 lei/kg).",
                  },
                  {
                    q: "Am nevoie de BCAA dacă mănânc suficiente proteine?",
                    a: "Nu. Dacă consumi suficiente proteine (1.6-2.2g/kg corp/zi) din mâncare sau whey, BCAA-urile sunt redundante și nu aduc beneficii suplimentare.",
                  },
                  {
                    q: "Creatina este sigură? Are efecte secundare?",
                    a: "Da, creatina monohidrat este cel mai cercetat supliment de sport cu 700+ studii. Singurul 'efect secundar' este o creștere de 1-2kg din retenție de apă intramusculară — normală și benefică.",
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
        )}
      </main>
    </div>
  );
}
