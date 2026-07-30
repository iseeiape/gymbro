"use client";

import { useState } from "react";
import { Calculator, ChevronRight, RotateCcw, Flame, Target, TrendingUp, Download, Check } from "lucide-react";
import Link from "next/link";
import { ViralLoop } from "../components/ViralLoop";
import { ProudShare } from "../components/ProudShare";

interface Results {
  bmr: number;
  tdee: number;
  macros: {
    protein: number;
    carbs: number;
    fats: number;
  };
  water: number;
}

export default function CalorieCalculator() {
  const [formData, setFormData] = useState({
    gender: "male",
    age: "",
    weight: "",
    height: "",
    activity: "1.2",
    goal: "maintain",
  });

  const [results, setResults] = useState<Results | null>(null);
  const [loading, setLoading] = useState(false);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const age = parseInt(formData.age);
      const weight = parseFloat(formData.weight);
      const height = parseFloat(formData.height);
      const activity = parseFloat(formData.activity);

      // Mifflin-St Jeor Equation
      let bmr = 0;
      if (formData.gender === "male") {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
      } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
      }

      const tdee = Math.round(bmr * activity);
      
      // Adjust based on goal
      let targetCalories = tdee;
      if (formData.goal === "lose") targetCalories = tdee - 500;
      if (formData.goal === "gain") targetCalories = tdee + 500;

      // Calculate macros based on goal
      let macros = { protein: 0, carbs: 0, fats: 0 };
      
      if (formData.goal === "lose") {
        // High protein for cutting
        macros.protein = Math.round((targetCalories * 0.4) / 4);
        macros.carbs = Math.round((targetCalories * 0.3) / 4);
        macros.fats = Math.round((targetCalories * 0.3) / 9);
      } else if (formData.goal === "gain") {
        // High carbs for bulking
        macros.protein = Math.round((targetCalories * 0.3) / 4);
        macros.carbs = Math.round((targetCalories * 0.5) / 4);
        macros.fats = Math.round((targetCalories * 0.2) / 9);
      } else {
        // Balanced for maintenance
        macros.protein = Math.round((targetCalories * 0.3) / 4);
        macros.carbs = Math.round((targetCalories * 0.4) / 4);
        macros.fats = Math.round((targetCalories * 0.3) / 9);
      }

      // Water intake (35ml per kg)
      const water = Math.round(weight * 35);

      setResults({
        bmr: Math.round(bmr),
        tdee: targetCalories,
        macros,
        water,
      });
      setLoading(false);
    }, 1000);
  };

  const downloadResults = () => {
    if (!results) return;
    
    let content = `REZULTATE CALCULATOR GYMBRO\n`;
    content += `${'='.repeat(40)}\n\n`;
    content += `BMR (Metabolism Bazal): ${results.bmr} kcal\n`;
    content += `TDEE (Calorii Zilnice): ${results.tdee} kcal\n\n`;
    content += `MACRO-URI:\n`;
    content += `  Proteine: ${results.macros.protein}g\n`;
    content += `  Carbohidrați: ${results.macros.carbs}g\n`;
    content += `  Grăsimi: ${results.macros.fats}g\n\n`;
    content += `Apă recomandată: ${results.water}ml/zi\n\n`;
    content += `Generat de GymBro.ro`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rezultate-gymbro.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-4">
            Calculator Calorii
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Calculează BMR, TDEE și macro-urile perfecte pentru obiectivul tău.
          </p>
        </div>

        {!results ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <form onSubmit={calculate} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Gen</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, gender: "male"})}
                        className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                          formData.gender === "male"
                            ? 'bg-blue-600 text-white'
                            : 'bg-black/30 text-slate-400 hover:bg-black/50'
                        }`}
                      >
                        Masculin
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, gender: "female"})}
                        className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                          formData.gender === "female"
                            ? 'bg-pink-600 text-white'
                            : 'bg-black/30 text-slate-400 hover:bg-black/50'
                        }`}
                      >
                        Feminin
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Vârstă (ani)</label>
                    <input
                      type="number"
                      required
                      min="15"
                      max="80"
                      placeholder="25"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Greutate (kg)</label>
                    <input
                      type="number"
                      required
                      min="40"
                      max="200"
                      placeholder="75"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none"
                      value={formData.weight}
                      onChange={(e) => setFormData({...formData, weight: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Înălțime (cm)</label>
                    <input
                      type="number"
                      required
                      min="140"
                      max="220"
                      placeholder="175"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none"
                      value={formData.height}
                      onChange={(e) => setFormData({...formData, height: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nivel Activitate</label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none"
                    value={formData.activity}
                    onChange={(e) => setFormData({...formData, activity: e.target.value})}
                  >
                    <option value="1.2">Sedentar (birou, fără sport)</option>
                    <option value="1.375">Ușor activ (sport 1-3 zile/săpt)</option>
                    <option value="1.55">Moderat activ (sport 3-5 zile/săpt)</option>
                    <option value="1.725">Foarte activ (sport 6-7 zile/săpt)</option>
                    <option value="1.9">Extrem de activ (sport zilnic + muncă fizică)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Obiectiv</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: "lose", label: "Slăbire", icon: TrendingUp, color: "from-green-600 to-emerald-600" },
                      { value: "maintain", label: "Menținere", icon: Target, color: "from-blue-600 to-cyan-600" },
                      { value: "gain", label: "Masă", icon: Flame, color: "from-purple-600 to-pink-600" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData({...formData, goal: option.value})}
                        className={`flex flex-col items-center p-3 rounded-lg border transition-all ${
                          formData.goal === option.value
                            ? `bg-gradient-to-r ${option.color} border-transparent`
                            : 'bg-black/30 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <option.icon className="h-5 w-5 mb-1" />
                        <span className="text-sm font-medium">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <><RotateCcw className="h-5 w-5 animate-spin" /> Calculez...</>
                  ) : (
                    <>Calculează<ChevronRight className="h-5 w-5" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/30 text-center mb-8">
              <h2 className="text-2xl font-bold mb-6">Rezultatele Tale</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/30 rounded-xl p-6">
                  <div className="text-sm text-slate-400 mb-2">BMR (Metabolism Bazal)</div>
                  <div className="text-4xl font-bold text-blue-400">{results.bmr}</div>
                  <div className="text-sm text-slate-500">kcal/zi</div>
                </div>

                <div className="bg-black/30 rounded-xl p-6">
                  <div className="text-sm text-slate-400 mb-2">TDEE (Calorii Zilnice)</div>
                  <div className="text-4xl font-bold text-cyan-400">{results.tdee}</div>
                  <div className="text-sm text-slate-500">kcal/zi</div>
                </div>

                <div className="bg-black/30 rounded-xl p-6">
                  <div className="text-sm text-slate-400 mb-2">Apă Recomandată</div>
                  <div className="text-4xl font-bold text-blue-400">{results.water}</div>
                  <div className="text-sm text-slate-500">ml/zi</div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Distribuție Macronutrienți</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="text-blue-400 font-semibold mb-1">Proteine</div>
                    <div className="text-2xl font-bold">{results.macros.protein}g</div>
                    <div className="text-xs text-slate-500">{Math.round((results.macros.protein * 4 / results.tdee) * 100)}%</div>
                  </div>

                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="text-yellow-400 font-semibold mb-1">Carbohidrați</div>
                    <div className="text-2xl font-bold">{results.macros.carbs}g</div>
                    <div className="text-xs text-slate-500">{Math.round((results.macros.carbs * 4 / results.tdee) * 100)}%</div>
                  </div>

                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="text-red-400 font-semibold mb-1">Grăsimi</div>
                    <div className="text-2xl font-bold">{results.macros.fats}g</div>
                    <div className="text-xs text-slate-500">{Math.round((results.macros.fats * 9 / results.tdee) * 100)}%</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
                <button
                  onClick={downloadResults}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Salvează Rezultatele
                </button>
                <button
                  onClick={() => setResults(null)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <Check className="mr-2 h-5 w-5" />
                  Calculează Din Nou
                </button>
              </div>
            </div>

            {/* Proud Share Section - Voluntary */}
            <div className="mb-8">
              <ProudShare
                toolName="Calculatorul Calorii GymBro"
                achievement="Calculat macro-urile perfecte"
                impact="Acum știi EXACT câte calorii și macros ai nevoie pentru a-ți atinge obiectivul. Cunoștința e putere! 💪"
              />
            </div>

            <div className="text-center">
              <Link 
                href="/meal-prep" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Generează Plan Alimentar
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        )}

        {/* FAQ Section - LLM Optimized */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">❓</span>
              </div>
              <h2 className="text-2xl font-bold">Întrebări Frecvente</h2>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  q: "Ce este TDEE și cum se calculează?",
                  a: "TDEE (Total Daily Energy Expenditure) reprezintă totalul de calorii arse într-o zi, incluzând metabolismul bazal și activitatea fizică. Se calculează înmulțind BMR-ul cu factorul de activitate fizică. Calculatorul GymBro face asta automat pentru tine."
                },
                {
                  q: "Ce este BMR și de ce este important?",
                  a: "BMR (Basal Metabolic Rate) este numărul de calorii pe care corpul tău le arde în repaus complet pentru funcțiile vitale (respirație, circulație, temperatură). Reprezintă 60-75% din totalul caloriilor zilnice și este fundamentul pentru calcularea necesarului caloric personalizat."
                },
                {
                  q: "Câte proteine am nevoie pe zi pentru masă musculară?",
                  a: "Pentru creșterea masei musculare, ai nevoie de 1.6-2.2 grame de proteină per kilogram de greutate corporală. De exemplu, o persoană de 75kg are nevoie de 120-165g de proteine zilnic. Calculatorul GymBro îți oferă valoarea exactă bazată pe datele tale."
                },
                {
                  q: "Cum calculez caloriile pentru slăbire?",
                  a: "Pentru slăbire sănătoasă, calculează TDEE-ul tău și scade 300-500 kcal. Aceasta este o rată de slăbire sustenabilă de 0.5-1kg pe săptămână. Calculatorul GymBro setează automat deficitul caloric când selectezi obiectivul 'Slăbire'."
                },
                {
                  q: "Ce sunt macronutrienții și cum îi calculez?",
                  a: "Macronutrienții sunt proteinele, carbohidrații și grăsimile. Distribuția optimă depinde de obiectiv: pentru slăbire 40% proteine / 30% carbohidrați / 30% grăsimi; pentru masă 30% proteine / 50% carbohidrați / 20% grăsimi; pentru menținere 30% / 40% / 30%."
                },
                {
                  q: "Cât de precis este calculatorul de calorii?",
                  a: "Calculatorul folosește formula Mifflin-St Jeor, considerată cea mai precisă pentru populația generală. Acuratețea este de ±10% pentru majoritatea oamenilor. Pentru rezultate optime, monitorizează-ți progresul timp de 2-3 săptămâni și ajustează dacă e necesar."
                }
              ].map((faq, idx) => (
                <details key={idx} className="group bg-black/30 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-black/50 transition-colors">
                    <span className="font-medium pr-4">{faq.q}</span>
                    <span className="text-blue-400 text-xl transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="p-4 pt-0 text-slate-400">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
