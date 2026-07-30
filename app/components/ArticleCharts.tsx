"use client";

interface MacroChartProps {
  protein: number;
  carbs: number;
  fat: number;
  title?: string;
}

export function MacroChart({ protein, carbs, fat, title = "Distribuție Macronutrienți" }: MacroChartProps) {
  const total = protein + carbs + fat;
  const pPct = (protein / total) * 100;
  const cPct = (carbs / total) * 100;
  const fPct = (fat / total) * 100;

  return (
    <div className="my-8 p-6 bg-white/5 rounded-2xl border border-white/10">
      <h4 className="text-lg font-semibold mb-4 text-center">{title}</h4>
      
      {/* Pie Chart SVG */}
      <div className="flex justify-center mb-6">
        <svg viewBox="0 0 200 200" className="w-48 h-48">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="transparent"
            stroke="#3b82f6"
            strokeWidth="40"
            strokeDasharray={`${pPct * 5.02} ${(100 - pPct) * 5.02}`}
            strokeDashoffset="0"
            transform="rotate(-90 100 100)"
          />
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="transparent"
            stroke="#10b981"
            strokeWidth="40"
            strokeDasharray={`${cPct * 5.02} ${(100 - cPct) * 5.02}`}
            strokeDashoffset={-pPct * 5.02}
            transform="rotate(-90 100 100)"
          />
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="transparent"
            stroke="#f59e0b"
            strokeWidth="40"
            strokeDasharray={`${fPct * 5.02} ${(100 - fPct) * 5.02}`}
            strokeDashoffset={-(pPct + cPct) * 5.02}
            transform="rotate(-90 100 100)"
          />
          <text x="100" y="105" textAnchor="middle" className="fill-white text-sm font-bold">
            {total}g
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-3 bg-blue-500/20 rounded-lg">
          <div className="text-blue-400 font-bold text-xl">{protein}g</div>
          <div className="text-sm text-slate-400">Proteine</div>
          <div className="text-xs text-slate-500">{pPct.toFixed(0)}%</div>
        </div>
        <div className="p-3 bg-green-500/20 rounded-lg">
          <div className="text-green-400 font-bold text-xl">{carbs}g</div>
          <div className="text-sm text-slate-400">Carbohidrați</div>
          <div className="text-xs text-slate-500">{cPct.toFixed(0)}%</div>
        </div>
        <div className="p-3 bg-amber-500/20 rounded-lg">
          <div className="text-amber-400 font-bold text-xl">{fat}g</div>
          <div className="text-sm text-slate-400">Grăsimi</div>
          <div className="text-xs text-slate-500">{fPct.toFixed(0)}%</div>
        </div>
      </div>
    </div>
  );
}

interface BMRChartProps {
  bmr: number;
  tdee: number;
}

export function BMRChart({ bmr, tdee }: BMRChartProps) {
  const activityLevels = [
    { name: "Sedentar", factor: 1.2, calories: Math.round(bmr * 1.2) },
    { name: "Ușor activ", factor: 1.375, calories: Math.round(bmr * 1.375) },
    { name: "Moderat activ", factor: 1.55, calories: Math.round(bmr * 1.55) },
    { name: "Foarte activ", factor: 1.725, calories: Math.round(bmr * 1.725) },
    { name: "Extrem activ", factor: 1.9, calories: Math.round(bmr * 1.9) },
  ];

  const maxCal = Math.max(...activityLevels.map(l => l.calories));

  return (
    <div className="my-8 p-6 bg-white/5 rounded-2xl border border-white/10">
      <h4 className="text-lg font-semibold mb-4 text-center">TDEE în funcție de activitate</h4>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
          <div>
            <div className="font-semibold text-purple-300">BMR (Bazal)</div>
            <div className="text-xs text-slate-400">Calorii în repaus</div>
          </div>
          <div className="text-2xl font-bold text-purple-400">{bmr}</div>
        </div>
        
        {activityLevels.map((level) => (
          <div key={level.name} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300">{level.name}</span>
              <span className="font-semibold">{level.calories} kcal</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all"
                style={{ width: `${(level.calories / maxCal) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ProteinChartProps {
  weight: number;
}

export function ProteinChart({ weight }: ProteinChartProps) {
  const scenarios = [
    { name: "Sedentar", amount: Math.round(weight * 0.8), color: "bg-slate-500" },
    { name: "Activ", amount: Math.round(weight * 1.4), color: "bg-blue-500" },
    { name: "Slăbire", amount: Math.round(weight * 2.2), color: "bg-green-500" },
    { name: "Masă", amount: Math.round(weight * 1.9), color: "bg-purple-500" },
  ];

  const maxAmount = Math.max(...scenarios.map(s => s.amount));

  return (
    <div className="my-8 p-6 bg-white/5 rounded-2xl border border-white/10">
      <h4 className="text-lg font-semibold mb-4 text-center">Proteine necesare pentru {weight}kg</h4>
      
      <div className="space-y-4">
        {scenarios.map((scenario) => (
          <div key={scenario.name} className="flex items-center gap-4">
            <div className="w-24 text-sm font-medium text-slate-300">{scenario.name}</div>
            <div className="flex-1">
              <div className="h-8 bg-white/10 rounded-lg overflow-hidden relative">
                <div 
                  className={`h-full ${scenario.color} rounded-lg flex items-center justify-end px-3 transition-all`}
                  style={{ width: `${(scenario.amount / maxAmount) * 100}%` }}
                >
                  <span className="font-bold text-white">{scenario.amount}g</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <p className="mt-4 text-xs text-slate-400 text-center">
        * Valori zilnice recomandate în funcție de obiectiv
      </p>
    </div>
  );
}

interface TimelineProps {
  steps: { time: string; title: string; description: string }[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="my-8 p-6 bg-white/5 rounded-2xl border border-white/10">
      <div className="relative">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-4 mb-6 last:mb-0">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center text-blue-400 font-bold text-sm">
                {idx + 1}
              </div>
              {idx < steps.length - 1 && (
                <div className="w-0.5 h-full bg-blue-500/30 mt-2" />
              )}
            </div>
            <div className="flex-1 pb-6">
              <div className="text-xs text-blue-400 font-semibold mb-1">{step.time}</div>
              <h5 className="font-semibold text-white mb-1">{step.title}</h5>
              <p className="text-sm text-slate-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ComparisonTableProps {
  title: string;
  leftTitle: string;
  rightTitle: string;
  items: { label: string; left: string; right: string }[];
}

export function ComparisonTable({ title, leftTitle, rightTitle, items }: ComparisonTableProps) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-white/10">
      <h4 className="text-lg font-semibold p-4 bg-white/5 text-center">{title}</h4>
      
      <div className="grid grid-cols-3 bg-white/5">
        <div className="p-3 text-sm font-semibold text-slate-400">Caracteristică</div>
        <div className="p-3 text-sm font-semibold text-green-400 text-center">{leftTitle}</div>
        <div className="p-3 text-sm font-semibold text-red-400 text-center">{rightTitle}</div>
      </div>
      
      {items.map((item, idx) => (
        <div key={idx} className="grid grid-cols-3 border-t border-white/10">
          <div className="p-3 text-sm text-slate-300">{item.label}</div>
          <div className="p-3 text-sm text-green-300 bg-green-500/5 text-center">{item.left}</div>
          <div className="p-3 text-sm text-red-300 bg-red-500/5 text-center">{item.right}</div>
        </div>
      ))}
    </div>
  );
}

interface MealPrepGridProps {
  meals: { name: string; protein: number; calories: number; price: string }[];
}

export function MealPrepGrid({ meals }: MealPrepGridProps) {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {meals.map((meal, idx) => (
        <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
          <h5 className="font-semibold text-white mb-2">{meal.name}</h5>
          <div className="flex gap-4 text-sm">
            <span className="text-blue-400">{meal.protein}g proteine</span>
            <span className="text-slate-400">{meal.calories} kcal</span>
            <span className="text-green-400">{meal.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function HeroPlaceholder({ title, category }: { title: string; category: string }) {
  const colors = {
    nutritie: "from-green-500/20 to-emerald-500/20",
    antrenament: "from-purple-500/20 to-blue-500/20",
    "meal-prep": "from-orange-500/20 to-amber-500/20",
  };

  return (
    <div className={`w-full h-64 md:h-80 rounded-2xl bg-gradient-to-br ${colors[category as keyof typeof colors] || colors.antrenament} border border-white/10 flex items-center justify-center mb-8`}>
      <div className="text-center p-8">
        <div className="text-6xl mb-4">💪</div>
        <h2 className="text-2xl font-bold text-white/80">{title}</h2>
      </div>
    </div>
  );
}
