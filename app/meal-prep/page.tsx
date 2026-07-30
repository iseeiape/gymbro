"use client";

import { useState } from "react";
import { Utensils, ChevronRight, Download, RotateCcw, ShoppingCart, Flame, Apple, Beef, Wheat, Check, Clock, Wallet, ChefHat, Timer, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { ViralLoop } from "../components/ViralLoop";
import { ProudShare } from "../components/ProudShare";

interface MealPlan {
  dailyCalories: number;
  macros: { protein: number; carbs: number; fats: number };
  days: DayMeals[];
  shoppingList: ShoppingItem[];
  fastingSchedule?: FastingSchedule;
  budgetEstimate: number;
}

interface FastingSchedule {
  type: string;
  eatingWindow: string;
  fastingWindow: string;
  mealTimes: string[];
}

interface DayMeals {
  day: string;
  meals: Meal[];
  dailyTotals: { calories: number; protein: number; carbs: number; fats: number };
}

interface Meal {
  type: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  ingredients: string[];
  prepTime: string;
  complexity: 'easy' | 'medium' | 'hard';
  estimatedCost: number;
}

interface ShoppingItem {
  name: string;
  amount: string;
  category: string;
  estimatedPrice: number;
}

export default function MealPrepPlanner() {
  const [formData, setFormData] = useState({
    calories: "",
    goal: "",
    dietType: "",
    restrictions: [] as string[],
    mealsPerDay: "4",
    fastingType: "none",
    budget: "medium",
    prepComplexity: "standard",
  });

  const [mealPlan, setMealPlan] = useState<MealPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [showShoppingList, setShowShoppingList] = useState(false);
  const [showFastingInfo, setShowFastingInfo] = useState(false);

  const restrictions = [
    "Lactoza", "Gluten", "Nuci", "Fructe de mare", 
    "Carne de porc", "Ouă", "Soia"
  ];

  const toggleRestriction = (item: string) => {
    setFormData(prev => ({
      ...prev,
      restrictions: prev.restrictions.includes(item)
        ? prev.restrictions.filter(r => r !== item)
        : [...prev.restrictions, item]
    }));
  };

  const generateMealPlan = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const plan = createMealPlan(formData);
      setMealPlan(plan);
      setLoading(false);
    }, 1500);
  };

  const createMealPlan = (data: typeof formData): MealPlan => {
    const targetCalories = parseInt(data.calories) || 2000;
    const goal = data.goal;
    const dietType = data.dietType;
    const restrictions = data.restrictions;
    const mealsPerDay = parseInt(data.mealsPerDay);
    const fastingType = data.fastingType;
    const budget = data.budget;
    const prepComplexity = data.prepComplexity;

    // Adjust calories for IF
    let adjustedCalories = targetCalories;
    let fastingSchedule: FastingSchedule | undefined;
    
    if (fastingType === "16:8") {
      fastingSchedule = {
        type: "16:8",
        eatingWindow: "12:00 - 20:00",
        fastingWindow: "20:00 - 12:00 (următoarea zi)",
        mealTimes: ["12:00 (Prânz)", "16:00 (Gustare)", "19:30 (Cină)"]
      };
    } else if (fastingType === "18:6") {
      fastingSchedule = {
        type: "18:6",
        eatingWindow: "13:00 - 19:00",
        fastingWindow: "19:00 - 13:00 (următoarea zi)",
        mealTimes: ["13:00 (Prânz)", "18:30 (Cină)"]
      };
    } else if (fastingType === "20:4") {
      fastingSchedule = {
        type: "20:4 (OMAD)",
        eatingWindow: "16:00 - 20:00",
        fastingWindow: "20:00 - 16:00 (următoarea zi)",
        mealTimes: ["17:00 (OMAD - Masă Principală)"]
      };
    } else if (fastingType === "5:2") {
      fastingSchedule = {
        type: "5:2",
        eatingWindow: "Zile normale + 2 zile fasting (500-600 cal)",
        fastingWindow: "2 zile/săptămână restricție calorică",
        mealTimes: ["Variază în funcție de zi"]
      };
    }

    // Calculate macros based on goal
    let macros = { protein: 0, carbs: 0, fats: 0 };
    if (goal === "slabire") {
      macros = { protein: 40, carbs: 30, fats: 30 };
    } else if (goal === "masa") {
      macros = { protein: 30, carbs: 50, fats: 20 };
    } else {
      macros = { protein: 30, carbs: 40, fats: 30 };
    }

    const proteinCal = adjustedCalories * (macros.protein / 100);
    const carbsCal = adjustedCalories * (macros.carbs / 100);
    const fatsCal = adjustedCalories * (macros.fats / 100);

    const macroGrams = {
      protein: Math.round(proteinCal / 4),
      carbs: Math.round(carbsCal / 4),
      fats: Math.round(fatsCal / 9),
    };

    // Generate 7 days
    const days: DayMeals[] = [];
    const dayNames = ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"];
    
    dayNames.forEach((dayName, idx) => {
      // For 5:2, days 3 and 6 are fasting days
      let dayCalories = adjustedCalories;
      if (fastingType === "5:2" && (idx === 2 || idx === 5)) {
        dayCalories = 600;
      }
      
      const dayMeals = generateDayMeals(dayCalories, mealsPerDay, dietType, restrictions, goal, prepComplexity);
      days.push({
        day: dayName,
        meals: dayMeals,
        dailyTotals: calculateDayTotals(dayMeals),
      });
    });

    const shoppingList = generateShoppingList(days, budget);
    const totalBudget = shoppingList.reduce((acc, item) => acc + item.estimatedPrice, 0);

    return {
      dailyCalories: adjustedCalories,
      macros: macroGrams,
      days,
      shoppingList,
      fastingSchedule,
      budgetEstimate: Math.round(totalBudget / 7), // per day
    };
  };

  const generateDayMeals = (
    targetCalories: number, 
    mealCount: number, 
    dietType: string, 
    restrictions: string[],
    goal: string,
    complexity: string
  ): Meal[] => {
    const meals: Meal[] = [];
    const calPerMeal = Math.round(targetCalories / mealCount);

    const mealTypes = mealCount === 2
      ? ["Prânz", "Cină"]
      : mealCount === 3 
      ? ["Mic Dejun", "Prânz", "Cină"]
      : mealCount === 4
      ? ["Mic Dejun", "Prânz", "Gustare", "Cină"]
      : ["Mic Dejun", "Gustare 1", "Prânz", "Gustare 2", "Cină"];

    const mealDatabase = getMealDatabase(dietType, restrictions, goal, complexity);

    mealTypes.forEach((type) => {
      const suitableMeals = mealDatabase.filter(m => m.type === type);
      const randomMeal = suitableMeals[Math.floor(Math.random() * suitableMeals.length)];
      meals.push({ ...randomMeal, calories: calPerMeal });
    });

    return meals;
  };

  const getMealDatabase = (dietType: string, restrictions: string[], goal: string, complexity: string): Meal[] => {
    // Price multipliers for budget
    const priceMultipliers: Record<string, number> = {
      "economic": 0.7,
      "medium": 1,
      "premium": 1.5
    };
    
    const budgetMultiplier = priceMultipliers[complexity] || 1;

    const baseMeals: Meal[] = [
      // MIC DEJUN - EXPRESS (5-10 min)
      { type: "Mic Dejun", name: "Ovăz cu proteine și banană", calories: 0, protein: 25, carbs: 45, fats: 8, ingredients: ["ovăz 80g", "proteină whey 30g", "banană 1 buc", "miere 10g"], prepTime: "5 min", complexity: "easy", estimatedCost: Math.round(8 * budgetMultiplier) },
      { type: "Mic Dejun", name: "Pâine integrală cu avocado și ou", calories: 0, protein: 15, carbs: 35, fats: 18, ingredients: ["pâine integrală 2 felii", "avocado 1/2 buc", "ou fiert 1 buc", "semințe chia 5g"], prepTime: "5 min", complexity: "easy", estimatedCost: Math.round(12 * budgetMultiplier) },
      { type: "Mic Dejun", name: "Iaurt grecesc cu fructe de pădure", calories: 0, protein: 20, carbs: 30, fats: 5, ingredients: ["iaurt grecesc 200g", "afine 100g", "nuci 15g", "miere 10g"], prepTime: "3 min", complexity: "easy", estimatedCost: Math.round(15 * budgetMultiplier) },
      
      // MIC DEJUN - STANDARD (10-15 min)
      { type: "Mic Dejun", name: "Omletă cu 3 ouă și legume", calories: 0, protein: 20, carbs: 8, fats: 15, ingredients: ["ouă 3 buc", "spanac 50g", "roșii 50g", "ulei măsline 10g"], prepTime: "10 min", complexity: "medium", estimatedCost: Math.round(10 * budgetMultiplier) },
      { type: "Mic Dejun", name: "Clătite proteice cu sirop", calories: 0, protein: 30, carbs: 40, fats: 10, ingredients: ["făină ovăz 50g", "proteină 30g", "ou 1 buc", "sirop fără zahăr 20ml"], prepTime: "15 min", complexity: "medium", estimatedCost: Math.round(12 * budgetMultiplier) },
      
      // MIC DEJUN - GOURMET (15+ min)
      { type: "Mic Dejun", name: "Ouă Benedict cu somon afumat", calories: 0, protein: 25, carbs: 25, fats: 20, ingredients: ["ouă 2 buc", "somon afumat 50g", "pâine 1 felie", "sos olandez"], prepTime: "20 min", complexity: "hard", estimatedCost: Math.round(25 * budgetMultiplier) },
      { type: "Mic Dejun", name: "Shakshuka cu pâine", calories: 0, protein: 18, carbs: 35, fats: 15, ingredients: ["ouă 2 buc", "roșii 200g", "ardei", "pâine integrală"], prepTime: "25 min", complexity: "hard", estimatedCost: Math.round(14 * budgetMultiplier) },
      
      // PRÂNZ - EXPRESS (15-20 min)
      { type: "Prânz", name: "Paste integrale cu ton și roșii", calories: 0, protein: 30, carbs: 55, fats: 10, ingredients: ["paste integrale 100g (uscat)", "ton în apă 150g", "roșii cherry 100g", "ulei măsline 10g"], prepTime: "15 min", complexity: "easy", estimatedCost: Math.round(15 * budgetMultiplier) },
      { type: "Prânz", name: "Salată de pui cu quinoa", calories: 0, protein: 35, carbs: 40, fats: 12, ingredients: ["piept pui 150g", "quinoa 80g", "legume", "dressing"], prepTime: "15 min", complexity: "easy", estimatedCost: Math.round(18 * budgetMultiplier) },
      
      // PRÂNZ - STANDARD (25-35 min)
      { type: "Prânz", name: "Piept de pui la grătar cu orez și salată", calories: 0, protein: 40, carbs: 50, fats: 12, ingredients: ["piept pui 200g", "orez 100g (crud)", "salată mixtă 150g", "ulei măsline 10g"], prepTime: "25 min", complexity: "medium", estimatedCost: Math.round(20 * budgetMultiplier) },
      { type: "Prânz", name: "Somon cu cartofi dulci și broccoli", calories: 0, protein: 35, carbs: 45, fats: 20, ingredients: ["somon 180g", "cartofi dulci 200g", "broccoli 150g", "lămâie"], prepTime: "30 min", complexity: "medium", estimatedCost: Math.round(35 * budgetMultiplier) },
      
      // PRÂNZ - GOURMET (40+ min)
      { type: "Prânz", name: "Tocăniță de vită cu legume", calories: 0, protein: 35, carbs: 25, fats: 18, ingredients: ["vită 200g", "cartofi 150g", "morcovi 100g", "ceapă", "usturoi"], prepTime: "45 min", complexity: "hard", estimatedCost: Math.round(28 * budgetMultiplier) },
      { type: "Prânz", name: "Risotto cu ciuperci și parmezan", calories: 0, protein: 20, carbs: 65, fats: 18, ingredients: ["orez risotto 100g", "ciuperci 200g", "parmezan 40g", "vin", "supă"], prepTime: "40 min", complexity: "hard", estimatedCost: Math.round(22 * budgetMultiplier) },
      
      // GUSTARE - TOATE SIMPLE
      { type: "Gustare", name: "Shake proteic cu lapte", calories: 0, protein: 25, carbs: 15, fats: 5, ingredients: ["proteină whey 30g", "lapte 300ml", "gheață"], prepTime: "2 min", complexity: "easy", estimatedCost: Math.round(8 * budgetMultiplier) },
      { type: "Gustare", name: "Mere cu unt de arahide", calories: 0, protein: 8, carbs: 25, fats: 16, ingredients: ["mere 1 buc mare", "unt arahide 30g"], prepTime: "2 min", complexity: "easy", estimatedCost: Math.round(6 * budgetMultiplier) },
      { type: "Gustare", name: "Ouă fierte și crackers", calories: 0, protein: 12, carbs: 15, fats: 10, ingredients: ["ouă fierte 2 buc", "crackers integrali 30g"], prepTime: "1 min", complexity: "easy", estimatedCost: Math.round(5 * budgetMultiplier) },
      { type: "Gustare 1", name: "Shake proteic cu lapte", calories: 0, protein: 25, carbs: 15, fats: 5, ingredients: ["proteină whey 30g", "lapte 300ml", "gheață"], prepTime: "2 min", complexity: "easy", estimatedCost: Math.round(8 * budgetMultiplier) },
      { type: "Gustare 1", name: "Mere cu unt de arahide", calories: 0, protein: 8, carbs: 25, fats: 16, ingredients: ["mere 1 buc mare", "unt arahide 30g"], prepTime: "2 min", complexity: "easy", estimatedCost: Math.round(6 * budgetMultiplier) },
      { type: "Gustare 2", name: "Iaurt cu nuci", calories: 0, protein: 15, carbs: 12, fats: 12, ingredients: ["iaurt 150g", "nuci 20g"], prepTime: "1 min", complexity: "easy", estimatedCost: Math.round(7 * budgetMultiplier) },
      { type: "Gustare 2", name: "Hummus cu legume", calories: 0, protein: 8, carbs: 20, fats: 12, ingredients: ["hummus 60g", "morcovi 100g", "ardei 100g"], prepTime: "3 min", complexity: "easy", estimatedCost: Math.round(10 * budgetMultiplier) },
      
      // CINĂ - EXPRESS (15-20 min)
      { type: "Cină", name: "Salată de ton cu legume și ulei", calories: 0, protein: 30, carbs: 15, fats: 15, ingredients: ["ton în apă 200g", "salată 100g", "castraveți 100g", "roșii 100g", "ulei măsline 15g"], prepTime: "10 min", complexity: "easy", estimatedCost: Math.round(18 * budgetMultiplier) },
      { type: "Cină", name: "Omletă cu 2 ouă și brânză", calories: 0, protein: 20, carbs: 5, fats: 18, ingredients: ["ouă 2 buc", "brânză 50g", "legume", "ulei"], prepTime: "10 min", complexity: "easy", estimatedCost: Math.round(10 * budgetMultiplier) },
      
      // CINĂ - STANDARD (20-30 min)
      { type: "Cină", name: "Piept de curcan cu salată verde", calories: 0, protein: 35, carbs: 10, fats: 10, ingredients: ["piept curcan 180g", "salată verde 200g", "roșii", "castraveți", "ulei"], prepTime: "20 min", complexity: "medium", estimatedCost: Math.round(22 * budgetMultiplier) },
      { type: "Cină", name: "Cotlet de porc la grătar cu legume", calories: 0, protein: 35, carbs: 15, fats: 20, ingredients: ["cotlet porc 180g", "legume la grătar 200g", "ulei"], prepTime: "25 min", complexity: "medium", estimatedCost: Math.round(20 * budgetMultiplier) },
      
      // CINĂ - GOURMET (30+ min)
      { type: "Cină", name: "Supă de pui cu legume", calories: 0, protein: 25, carbs: 20, fats: 8, ingredients: ["piept pui 150g", "legume", "supă"], prepTime: "30 min", complexity: "hard", estimatedCost: Math.round(16 * budgetMultiplier) },
      { type: "Cină", name: "File de pește în crustă de ierburi", calories: 0, protein: 30, carbs: 25, fats: 15, ingredients: ["file pește 200g", "ierburi", "cartofi noi 150g", "sparangel"], prepTime: "35 min", complexity: "hard", estimatedCost: Math.round(30 * budgetMultiplier) },
    ];

    // Filter based on complexity
    let filtered = baseMeals;
    if (complexity === "express") {
      filtered = baseMeals.filter(m => m.complexity === "easy");
    } else if (complexity === "standard") {
      filtered = baseMeals.filter(m => m.complexity === "easy" || m.complexity === "medium");
    }
    // If "gourmet", keep all

    // Filter based on restrictions
    filtered = filtered.filter(meal => {
      const text = meal.name + " " + meal.ingredients.join(" ");
      
      if (restrictions.includes("Lactoza") && (text.includes("iaurt") || text.includes("lapte") || text.includes("brânză") || text.includes("parmezan"))) return false;
      if (restrictions.includes("Gluten") && (text.includes("pâine") || text.includes("paste") || text.includes("făină") || text.includes("crackers") || text.includes("quinoa"))) return false;
      if (restrictions.includes("Ouă") && text.includes("ou")) return false;
      if (restrictions.includes("Carne de porc") && text.includes("porc")) return false;
      if (restrictions.includes("Fructe de mare") && (text.includes("fructe de mare") || text.includes("somon") || text.includes("ton") || text.includes("pește"))) return false;
      if (restrictions.includes("Nuci") && (text.includes("nuci") || text.includes("arahide"))) return false;
      if (restrictions.includes("Soia") && text.includes("soia")) return false;
      
      return true;
    });

    // Filter based on diet type
    if (dietType === "vegetarian") {
      filtered = filtered.filter(m => !m.ingredients.some(i => i.includes("pui") || i.includes("vită") || i.includes("porc") || i.includes("curcan") || i.includes("pește") || i.includes("somon") || i.includes("ton") || i.includes("file")));
    } else if (dietType === "vegan") {
      filtered = filtered.filter(m => !m.ingredients.some(i => 
        i.includes("pui") || i.includes("vită") || i.includes("porc") || i.includes("curcan") || 
        i.includes("pește") || i.includes("somon") || i.includes("ton") || i.includes("file") ||
        i.includes("ou") || i.includes("brânză") || i.includes("lapte") || i.includes("iaurt") || i.includes("parmezan")
      ));
    }

    return filtered.length > 0 ? filtered : baseMeals;
  };

  const calculateDayTotals = (meals: Meal[]) => {
    return meals.reduce((acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fats: acc.fats + meal.fats,
    }), { calories: 0, protein: 0, carbs: 0, fats: 0 });
  };

  const generateShoppingList = (days: DayMeals[], budget: string): ShoppingItem[] => {
    const ingredientMap = new Map<string, { count: number; cost: number }>();
    
    days.forEach(day => {
      day.meals.forEach(meal => {
        meal.ingredients.forEach(ing => {
          const baseName = ing.replace(/\d+/g, '').replace(/g|ml|buc/g, '').trim();
          const existing = ingredientMap.get(baseName);
          if (existing) {
            existing.count += 1;
            existing.cost += meal.estimatedCost / meal.ingredients.length;
          } else {
            ingredientMap.set(baseName, { 
              count: 1, 
              cost: meal.estimatedCost / meal.ingredients.length 
            });
          }
        });
      });
    });

    const categories: Record<string, string> = {
      "pui": "Proteine", "vită": "Proteine", "porc": "Proteine", "curcan": "Proteine",
      "pește": "Proteine", "somon": "Proteine", "ton": "Proteine", "file": "Proteine",
      "ou": "Proteine", "ouă": "Proteine",
      "lapte": "Lactate", "iaurt": "Lactate", "brânză": "Lactate", "parmezan": "Lactate",
      "ovăz": "Cereale", "pâine": "Cereale", "paste": "Cereale", "orez": "Cereale", "quinoa": "Cereale",
      "cartofi": "Legume", "morcovi": "Legume", "broccoli": "Legume", "spanac": "Legume",
      "roșii": "Legume", "castraveți": "Legume", "ardei": "Legume", "salată": "Legume",
      "banană": "Fructe", "mere": "Fructe", "afine": "Fructe", "avocado": "Fructe",
      "ulei": "Uleiuri", "unt": "Uleiuri",
      "nuci": "Nuci & Semințe", "arahide": "Nuci & Semințe", "chia": "Nuci & Semințe",
      "proteină": "Suplimente", "whey": "Suplimente",
    };

    return Array.from(ingredientMap.entries()).map(([name, data]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      amount: `${data.count * 7} porții`,
      category: Object.entries(categories).find(([k]) => name.includes(k))?.[1] || "Altele",
      estimatedPrice: Math.round(data.cost * 7),
    })).sort((a, b) => a.category.localeCompare(b.category));
  };

  const downloadMealPlan = () => {
    let content = `PLAN ALIMENTAR GYMBRO - ${new Date().toLocaleDateString('ro-RO')}\n`;
    content += `Calorii zilnice: ${mealPlan?.dailyCalories}\n`;
    content += `Macros: P:${mealPlan?.macros.protein}g C:${mealPlan?.macros.carbs}g F:${mealPlan?.macros.fats}g\n`;
    content += `${'='.repeat(50)}\n\n`;

    mealPlan?.days.forEach(day => {
      content += `${day.day.toUpperCase()}\n`;
      content += `${'-'.repeat(30)}\n`;
      day.meals.forEach(meal => {
        content += `${meal.type}: ${meal.name}\n`;
        content += `  ${meal.calories} kcal | P:${meal.protein}g C:${meal.carbs}g F:${meal.fats}g\n`;
        content += `  Ingrediente: ${meal.ingredients.join(', ')}\n`;
        content += `  Prep: ${meal.prepTime}\n\n`;
      });
      content += `Total zilnic: ${day.dailyTotals.calories} kcal\n\n`;
    });

    content += `${'='.repeat(50)}\nLISTĂ DE CUMPĂRĂTURI\n${'='.repeat(50)}\n\n`;
    
    let currentCategory = "";
    mealPlan?.shoppingList.forEach(item => {
      if (item.category !== currentCategory) {
        currentCategory = item.category;
        content += `\n[${item.category}]\n`;
      }
      content += `☐ ${item.name} - ${item.amount}\n`;
    });

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `plan-alimentar-gymbro-${mealPlan?.dailyCalories}kcal.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
            Generator Meal Prep
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Plan alimentar săptămânal personalizat. Mese gata calculate, listă de cumpărături inclusă.
          </p>
        </div>

        {!mealPlan ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <form onSubmit={generateMealPlan} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Calorii Zilnice</label>
                    <input
                      type="number"
                      required
                      min="1200"
                      max="5000"
                      placeholder="ex: 2500"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-green-500 focus:outline-none"
                      value={formData.calories}
                      onChange={(e) => setFormData({...formData, calories: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Obiectiv</label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-green-500 focus:outline-none"
                      value={formData.goal}
                      onChange={(e) => setFormData({...formData, goal: e.target.value})}
                    >
                      <option value="">Selectează</option>
                      <option value="slabire">Slăbire (40P/30C/30F)</option>
                      <option value="mentinere">Menținere (30P/40C/30F)</option>
                      <option value="masa">Masă Musculară (30P/50C/20F)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Tip Dietă</label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-green-500 focus:outline-none"
                      value={formData.dietType}
                      onChange={(e) => setFormData({...formData, dietType: e.target.value})}
                    >
                      <option value="">Selectează</option>
                      <option value="omnivor">Omnivor (Toate)</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mese pe Zi</label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-green-500 focus:outline-none"
                      value={formData.mealsPerDay}
                      onChange={(e) => setFormData({...formData, mealsPerDay: e.target.value})}
                    >
                      <option value="2">2 mese (IF 18:6)</option>
                      <option value="3">3 mese (Standard)</option>
                      <option value="4">4 mese (+gustare)</option>
                      <option value="5">5 mese (+2 gustări)</option>
                    </select>
                  </div>
                </div>

                {/* NEW: Intermittent Fasting */}
                <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl p-4 border border-purple-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Timer className="h-5 w-5 text-purple-400" />
                    <label className="text-sm font-medium">Intermittent Fasting (opțional)</label>
                    <button 
                      type="button"
                      onClick={() => setShowFastingInfo(!showFastingInfo)}
                      className="text-xs text-purple-400 hover:text-purple-300 underline ml-auto"
                    >
                      Ce e?
                    </button>
                  </div>
                  
                  {showFastingInfo && (
                    <div className="text-xs text-slate-400 mb-3 p-2 bg-black/20 rounded">
                      <strong>16:8</strong> = Mănânci 8 ore, postești 16 (ex: 12:00-20:00)<br/>
                      <strong>18:6</strong> = Mănânci 6 ore, postești 18 (ex: 13:00-19:00)<br/>
                      <strong>20:4 (OMAD)</strong> = O masă mare pe zi<br/>
                      <strong>5:2</strong> = 5 zile normal, 2 zile 500-600 cal
                    </div>
                  )}

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[
                      { value: "none", label: "Fără IF", icon: Sun },
                      { value: "16:8", label: "16:8", icon: Timer },
                      { value: "18:6", label: "18:6", icon: Moon },
                      { value: "20:4", label: "20:4 OMAD", icon: Moon },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData({...formData, fastingType: option.value})}
                        className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                          formData.fastingType === option.value
                            ? 'bg-purple-600 text-white'
                            : 'bg-black/30 text-slate-400 hover:bg-black/50'
                        }`}
                      >
                        <option.icon className="h-4 w-4" />
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* NEW: Budget & Complexity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Wallet className="h-4 w-4 text-yellow-400" />
                      Buget
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-green-500 focus:outline-none"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    >
                      <option value="economic">💰 Economic (~30-40 lei/zi)</option>
                      <option value="medium">💰💰 Mediu (~50-70 lei/zi)</option>
                      <option value="premium">💰💰💰 Premium (~80-100+ lei/zi)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <ChefHat className="h-4 w-4 text-orange-400" />
                      Complexitate Preparare
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-green-500 focus:outline-none"
                      value={formData.prepComplexity}
                      onChange={(e) => setFormData({...formData, prepComplexity: e.target.value})}
                    >
                      <option value="express">⚡ Express (max 15 min/masă)</option>
                      <option value="standard">👨‍🍳 Standard (15-30 min)</option>
                      <option value="gourmet">👨‍🍳🔥 Gourmet (30+ min)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Restricții Alimentare</label>
                  <div className="flex flex-wrap gap-2">
                    {restrictions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleRestriction(item)}
                        className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                          formData.restrictions.includes(item)
                            ? 'bg-green-600 text-white'
                            : 'bg-black/30 text-slate-400 hover:bg-black/50'
                        }`}
                      >
                        {formData.restrictions.includes(item) && <Check className="inline h-4 w-4 mr-1" />}
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <><RotateCcw className="h-5 w-5 animate-spin" /> Generez Planul...</>
                  ) : (
                    <>Generează Planul Alimentar<ChevronRight className="h-5 w-5" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            {/* Summary Card */}
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30 mb-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">Plan Alimentar Complet</h2>
                  <p className="text-slate-400">{mealPlan.dailyCalories} kcal/zi • 7 zile • {formData.mealsPerDay} mese/zi</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowShoppingList(!showShoppingList)}
                    className="inline-flex items-center px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {showShoppingList ? 'Ascunde Lista' : 'Lista Cumpărături'}
                  </button>
                  <button
                    onClick={downloadMealPlan}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Descarcă Plan
                  </button>
                </div>
              </div>

              {/* Fasting Schedule */}
              {mealPlan.fastingSchedule && (
                <div className="mt-4 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Timer className="h-5 w-5 text-purple-400" />
                    <h3 className="font-semibold text-purple-400">Intermittent Fasting: {mealPlan.fastingSchedule.type}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Sun className="h-4 w-4 text-yellow-400" />
                      <span>Fereastră de mâncare: <strong>{mealPlan.fastingSchedule.eatingWindow}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Moon className="h-4 w-4 text-blue-400" />
                      <span>Fereastră de post: <strong>{mealPlan.fastingSchedule.fastingWindow}</strong></span>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {mealPlan.fastingSchedule.mealTimes.map((time, i) => (
                      <span key={i} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">{time}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Budget & Complexity Info */}
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <Wallet className="h-4 w-4 text-yellow-400 mx-auto mb-1" />
                  <div className="text-xs text-slate-400">Buget estimat</div>
                  <div className="font-semibold">~{mealPlan.budgetEstimate} lei/zi</div>
                </div>
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <ChefHat className="h-4 w-4 text-orange-400 mx-auto mb-1" />
                  <div className="text-xs text-slate-400">Complexitate</div>
                  <div className="font-semibold capitalize">{formData.prepComplexity}</div>
                </div>
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <Clock className="h-4 w-4 text-blue-400 mx-auto mb-1" />
                  <div className="text-xs text-slate-400">Timp total/zi</div>
                  <div className="font-semibold">
                    {Math.round(mealPlan.days[0].meals.reduce((acc, m) => acc + parseInt(m.prepTime), 0))} min
                  </div>
                </div>
                <div className="bg-black/30 rounded-lg p-3 text-center">
                  <Apple className="h-4 w-4 text-green-400 mx-auto mb-1" />
                  <div className="text-xs text-slate-400">Tip dietă</div>
                  <div className="font-semibold capitalize">{formData.dietType}</div>
                </div>
              </div>
              
              {/* Macros */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-black/30 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-blue-400 mb-1">
                    <Beef className="h-5 w-5" />
                    <span className="font-semibold">Proteine</span>
                  </div>
                  <div className="text-2xl font-bold">{mealPlan.macros.protein}g</div>
                  <div className="text-sm text-slate-400">{Math.round((mealPlan.macros.protein * 4 / mealPlan.dailyCalories) * 100)}%</div>
                </div>
                <div className="bg-black/30 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-yellow-400 mb-1">
                    <Wheat className="h-5 w-5" />
                    <span className="font-semibold">Carbohidrați</span>
                  </div>
                  <div className="text-2xl font-bold">{mealPlan.macros.carbs}g</div>
                  <div className="text-sm text-slate-400">{Math.round((mealPlan.macros.carbs * 4 / mealPlan.dailyCalories) * 100)}%</div>
                </div>
                <div className="bg-black/30 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-red-400 mb-1">
                    <Flame className="h-5 w-5" />
                    <span className="font-semibold">Grăsimi</span>
                  </div>
                  <div className="text-2xl font-bold">{mealPlan.macros.fats}g</div>
                  <div className="text-sm text-slate-400">{Math.round((mealPlan.macros.fats * 9 / mealPlan.dailyCalories) * 100)}%</div>
                </div>
              </div>
            </div>

            {/* Shopping List Modal */}
            {showShoppingList && (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="h-6 w-6 text-green-400" />
                    <h3 className="text-xl font-semibold">Listă de Cumpărături</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-400">Total estimat</div>
                    <div className="text-xl font-bold text-green-400">
                      ~{mealPlan.shoppingList.reduce((acc, item) => acc + item.estimatedPrice, 0)} lei/săpt
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Array.from(new Set(mealPlan.shoppingList.map(i => i.category))).map(category => (
                    <div key={category} className="bg-black/30 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-green-400">{category}</h4>
                        <span className="text-xs text-slate-500">
                          {mealPlan.shoppingList.filter(i => i.category === category).reduce((acc, i) => acc + i.estimatedPrice, 0)} lei
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {mealPlan.shoppingList.filter(i => i.category === category).map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-4 h-4 border border-white/30 rounded" />
                            <span>{item.name}</span>
                            <span className="text-slate-500 ml-auto">{item.amount}</span>
                            <span className="text-green-400 text-xs">{item.estimatedPrice} lei</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Daily Meal Plans */}
            <div className="grid gap-6">
              {mealPlan.days.map((day, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-bold">
                        {idx + 1}
                      </div>
                      <h3 className="text-xl font-semibold">{day.day}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-400">Total zilnic</div>
                      <div className="font-bold text-green-400">{day.dailyTotals.calories} kcal</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {day.meals.map((meal, mIdx) => (
                      <div key={mIdx} className="flex items-start gap-4 p-4 bg-black/20 rounded-xl">
                        <div className="flex-shrink-0 w-16 text-xs text-slate-500">
                          {meal.type}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{meal.name}</span>
                            {meal.complexity === 'easy' && <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">⚡ Express</span>}
                            {meal.complexity === 'medium' && <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded">👨‍🍳 Standard</span>}
                            {meal.complexity === 'hard' && <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded">🔥 Gourmet</span>}
                          </div>
                          <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                            <span className="bg-white/10 px-2 py-1 rounded">{meal.calories} kcal</span>
                            <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">P: {meal.protein}g</span>
                            <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">C: {meal.carbs}g</span>
                            <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded">F: {meal.fats}g</span>
                            <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded">⏱ {meal.prepTime}</span>
                            <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">💰 {meal.estimatedCost} lei</span>
                          </div>
                          <div className="text-xs text-slate-500 mt-2">
                            {meal.ingredients.join(', ')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <ProudShare
                toolName="Meal Prep Generator GymBro"
                achievement="Creat un plan alimentar complet pentru 7 zile"
                impact="Ai economisit ore de planificare și ai o strategie clară pentru nutriție. Prietenii tăi merită să știe și ei secretul! 🥗"
              />
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => {
                  setMealPlan(null);
                  setShowShoppingList(false);
                }}
                className="text-slate-400 hover:text-white transition-colors"
              >
                ← Generează alt plan
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
