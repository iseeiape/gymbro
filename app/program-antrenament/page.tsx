"use client";

import { useState } from "react";
import { Dumbbell, ChevronRight, Save, Share2, Copy, Check, Gift, Users, Zap, Trophy, Target, Mail, Download } from "lucide-react";
import Link from "next/link";

interface Program {
  name: string;
  split: string;
  days: DayWorkout[];
}

interface DayWorkout {
  day: string;
  focus: string;
  exercises: Exercise[];
}

interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
}

export default function ProgramGenerator() {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    experience: "",
    goal: "",
    daysPerWeek: "",
    equipment: "",
    duration: "",
  });

  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [referralCount, setReferralCount] = useState(0);
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  const generateProgram = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const generatedProgram = createProgram(formData);
      setProgram(generatedProgram);
      setLoading(false);
    }, 1500);
  };

  const createProgram = (data: typeof formData): Program => {
    const { experience, goal, daysPerWeek, equipment } = data;
    
    let name = "";
    let split = "";
    let days: DayWorkout[] = [];
    
    if (daysPerWeek === "3") {
      split = "Full Body 3x/week";
      name = `${experience === "beginner" ? "Beginner" : "Intermediate"} Full Body`;
      days = [
        { day: "Ziua 1", focus: "Full Body A", exercises: getExercises("A", equipment, goal, experience) },
        { day: "Ziua 2", focus: "Full Body B", exercises: getExercises("B", equipment, goal, experience) },
        { day: "Ziua 3", focus: "Full Body C", exercises: getExercises("C", equipment, goal, experience) },
      ];
    } else if (daysPerWeek === "4") {
      split = "Upper/Lower Split";
      name = `Upper/Lower ${experience === "advanced" ? "Advanced" : "Standard"}`;
      days = [
        { day: "Ziua 1", focus: "Upper Body", exercises: getUpper(equipment, goal, experience) },
        { day: "Ziua 2", focus: "Lower Body", exercises: getLower(equipment, goal, experience) },
        { day: "Ziua 3", focus: "Upper Body", exercises: getUpper(equipment, goal, experience, true) },
        { day: "Ziua 4", focus: "Lower Body", exercises: getLower(equipment, goal, experience, true) },
      ];
    } else {
      split = "Push/Pull/Legs";
      name = `PPL ${experience === "advanced" ? "Advanced" : "Standard"}`;
      days = [
        { day: "Ziua 1", focus: "Push", exercises: getPush(equipment, goal, experience) },
        { day: "Ziua 2", focus: "Pull", exercises: getPull(equipment, goal, experience) },
        { day: "Ziua 3", focus: "Legs", exercises: getLegs(equipment, goal, experience) },
        { day: "Ziua 4", focus: "Push", exercises: getPush(equipment, goal, experience, true) },
        { day: "Ziua 5", focus: "Pull", exercises: getPull(equipment, goal, experience, true) },
        { day: "Ziua 6", focus: "Legs", exercises: getLegs(equipment, goal, experience, true) },
      ].slice(0, parseInt(daysPerWeek || "5"));
    }
    
    return { name, split, days };
  };

  const getExercises = (day: string, equipment: string, goal: string, exp: string): Exercise[] => {
    const isBeginner = exp === "beginner";
    const base: Exercise[] = [
      { name: "Squat", sets: isBeginner ? 3 : 4, reps: goal === "strength" ? "5-6" : "8-12", rest: "2-3 min" },
      { name: "Bench Press", sets: isBeginner ? 3 : 4, reps: goal === "strength" ? "5-6" : "8-12", rest: "2-3 min" },
      { name: "Deadlift", sets: isBeginner ? 2 : 3, reps: goal === "strength" ? "5" : "8-10", rest: "3 min" },
      { name: "Overhead Press", sets: 3, reps: "8-12", rest: "90 sec" },
      { name: "Rows", sets: 3, reps: "10-12", rest: "90 sec" },
    ];
    
    if (equipment === "home") {
      return base.map(e => ({
        ...e,
        name: e.name === "Squat" ? "Bodyweight Squats" : 
              e.name === "Bench Press" ? "Push-ups" :
              e.name === "Deadlift" ? "Glute Bridges" :
              e.name === "Rows" ? "Inverted Rows" : e.name
      }));
    }
    return base;
  };

  const getUpper = (equipment: string, goal: string, exp: string, alt = false): Exercise[] => {
    const exercises = alt ? [
      { name: "Incline Bench", sets: 3, reps: "10-12", rest: "90 sec" },
      { name: "Lat Pulldown", sets: 3, reps: "10-12", rest: "90 sec" },
      { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60 sec" },
      { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec" },
    ] : [
      { name: "Bench Press", sets: 4, reps: "8-10", rest: "2 min" },
      { name: "Barbell Row", sets: 4, reps: "8-10", rest: "2 min" },
      { name: "Overhead Press", sets: 3, reps: "8-12", rest: "90 sec" },
      { name: "Pull-ups", sets: 3, reps: "8-12", rest: "90 sec" },
    ];
    return equipment === "home" 
      ? exercises.map(e => ({...e, name: e.name.replace("Barbell", "Dumbbell")}))
      : exercises;
  };

  const getLower = (equipment: string, goal: string, exp: string, alt = false): Exercise[] => {
    const exercises = alt ? [
      { name: "Romanian Deadlift", sets: 3, reps: "10-12", rest: "2 min" },
      { name: "Leg Press", sets: 3, reps: "12-15", rest: "2 min" },
      { name: "Leg Curls", sets: 3, reps: "12-15", rest: "90 sec" },
      { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" },
    ] : [
      { name: "Squat", sets: 4, reps: "6-10", rest: "2-3 min" },
      { name: "Deadlift", sets: 3, reps: "6-8", rest: "3 min" },
      { name: "Walking Lunges", sets: 3, reps: "10 each", rest: "2 min" },
      { name: "Leg Extensions", sets: 3, reps: "12-15", rest: "90 sec" },
    ];
    return equipment === "home"
      ? exercises.map(e => ({...e, name: e.name.replace("Leg Press", "Split Squats")}))
      : exercises;
  };

  const getPush = (equipment: string, goal: string, exp: string, alt = false): Exercise[] => {
    if (alt) return [
      { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "90 sec" },
      { name: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", rest: "90 sec" },
      { name: "Cable Flyes", sets: 3, reps: "12-15", rest: "60 sec" },
      { name: "Lateral Raises", sets: 4, reps: "15-20", rest: "60 sec" },
      { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60 sec" },
    ];
    return [
      { name: "Bench Press", sets: 4, reps: "8-10", rest: "2 min" },
      { name: "Overhead Press", sets: 4, reps: "8-10", rest: "2 min" },
      { name: "Incline Press", sets: 3, reps: "10-12", rest: "90 sec" },
      { name: "Lateral Raises", sets: 4, reps: "12-15", rest: "60 sec" },
      { name: "Tricep Extensions", sets: 3, reps: "12-15", rest: "60 sec" },
    ];
  };

  const getPull = (equipment: string, goal: string, exp: string, alt = false): Exercise[] => {
    if (alt) return [
      { name: "Chest-Supported Rows", sets: 3, reps: "10-12", rest: "90 sec" },
      { name: "Cable Pullovers", sets: 3, reps: "12-15", rest: "90 sec" },
      { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec" },
      { name: "Barbell Curls", sets: 3, reps: "10-12", rest: "60 sec" },
      { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "60 sec" },
    ];
    return [
      { name: "Barbell Row", sets: 4, reps: "8-10", rest: "2 min" },
      { name: "Pull-ups", sets: 4, reps: "8-12", rest: "2 min" },
      { name: "Seated Cable Row", sets: 3, reps: "10-12", rest: "90 sec" },
      { name: "Face Pulls", sets: 4, reps: "15-20", rest: "60 sec" },
      { name: "Barbell Curls", sets: 4, reps: "10-12", rest: "60 sec" },
    ];
  };

  const getLegs = (equipment: string, goal: string, exp: string, alt = false): Exercise[] => {
    if (alt) return [
      { name: "Front Squat", sets: 3, reps: "8-10", rest: "2 min" },
      { name: "Romanian Deadlift", sets: 3, reps: "10-12", rest: "2 min" },
      { name: "Hack Squat", sets: 3, reps: "12-15", rest: "2 min" },
      { name: "Leg Curls", sets: 3, reps: "12-15", rest: "90 sec" },
      { name: "Seated Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" },
    ];
    return [
      { name: "Squat", sets: 4, reps: "6-8", rest: "2-3 min" },
      { name: "Deadlift", sets: 3, reps: "5-6", rest: "3 min" },
      { name: "Leg Press", sets: 3, reps: "12-15", rest: "2 min" },
      { name: "Walking Lunges", sets: 3, reps: "10 each", rest: "90 sec" },
      { name: "Calf Raises", sets: 5, reps: "15-20", rest: "60 sec" },
    ];
  };

  const copyToClipboard = () => {
    const shareText = `Am generat un program de antrenament personalizat cu GymBro! 💪\n\n${program?.name}\n${program?.split}\n\nGenerează și tu gratuit: https://gymbro.ro/program-antrenament`;
    navigator.clipboard.writeText(shareText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShare = () => {
    setShowShareModal(true);
    setReferralCount(prev => prev + 1);
  };

  const handleSave = () => {
    setShowSaveModal(true);
  };

  const downloadProgram = () => {
    if (!email || !email.includes('@')) {
      alert('Te rugăm să introduci un email valid!');
      return;
    }
    
    // Generate program text
    let content = `PROGRAM DE ANTRENAMENT - GymBro\n`;
    content += `================================\n\n`;
    content += `Program: ${program?.name}\n`;
    content += `Split: ${program?.split}\n`;
    content += `Generat pentru: ${email}\n`;
    content += `Data: ${new Date().toLocaleDateString('ro-RO')}\n\n`;
    content += `================================\n\n`;
    
    program?.days.forEach((day) => {
      content += `${day.day} - ${day.focus}\n`;
      content += `${'-'.repeat(40)}\n`;
      day.exercises.forEach(ex => {
        content += `• ${ex.name}\n`;
        content += `  ${ex.sets} seturi × ${ex.reps} reps | Pauză: ${ex.rest}\n\n`;
      });
      content += `\n`;
    });
    
    content += `================================\n`;
    content += `Ghid Video: https://fitness-calculator-v2.vercel.app/ghiduri\n`;
    content += `© 2026 Dan Fitness - Toate drepturile rezervate\n`;
    
    // Download file
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `program-antrenament-${program?.name.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setShowSaveModal(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
            Generator Program Antrenament
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Primește un program personalizat bazat pe experiența ta, obiectivele și echipamentul disponibil.
          </p>
        </div>

        {!program ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <form onSubmit={generateProgram} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Gen</label>
                    <select required className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none" value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                      <option value="">Selectează</option>
                      <option value="male">Masculin</option>
                      <option value="female">Feminin</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Vârstă (ani)</label>
                    <input type="number" required min="15" max="80" placeholder="25" className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nivel Experiență</label>
                    <select required className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none" value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})}>
                      <option value="">Selectează</option>
                      <option value="beginner">Începător (0-1 ani)</option>
                      <option value="intermediate">Intermediar (1-3 ani)</option>
                      <option value="advanced">Avansat (3+ ani)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Obiectiv Principal</label>
                    <select required className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none" value={formData.goal} onChange={(e) => setFormData({...formData, goal: e.target.value})}>
                      <option value="">Selectează</option>
                      <option value="strength">Forță Maximă</option>
                      <option value="hypertrophy">Hipertrofie (Mușchi)</option>
                      <option value="fatloss">Slăbire + Definire</option>
                      <option value="athletic">Performanță Atletică</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Zile pe Săptămână</label>
                    <select required className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none" value={formData.daysPerWeek} onChange={(e) => setFormData({...formData, daysPerWeek: e.target.value})}>
                      <option value="">Selectează</option>
                      <option value="3">3 zile (Full Body)</option>
                      <option value="4">4 zile (Upper/Lower)</option>
                      <option value="5">5 zile (Push/Pull/Legs)</option>
                      <option value="6">6 zile (Push/Pull/Legs)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Echipament Disponibil</label>
                    <select required className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none" value={formData.equipment} onChange={(e) => setFormData({...formData, equipment: e.target.value})}>
                      <option value="">Selectează</option>
                      <option value="gym">Sală Completă</option>
                      <option value="home">Acasă (Gantere + Bench)</option>
                      <option value="minimal">Doar Bandă Elastică</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Timp per Sesiune</label>
                  <select required className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none" value={formData.duration} onChange={(e) => setFormData({...formData, duration: e.target.value})}>
                    <option value="">Selectează</option>
                    <option value="30">30 minute (Express)</option>
                    <option value="45">45 minute (Standard)</option>
                    <option value="60">60 minute (Recomandat)</option>
                    <option value="90">90 minute (Intensiv)</option>
                  </select>
                </div>

                <button type="submit" disabled={loading} className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2">
                  {loading ? <><Zap className="h-5 w-5 animate-pulse" /> Generez Programul...</> : <>Generează Programul Meu<ChevronRight className="h-5 w-5" /></>}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
                <Target className="h-4 w-4" /> Program Generat
              </div>
              <h2 className="text-3xl font-bold mb-2">{program.name}</h2>
              <p className="text-slate-400">{program.split}</p>
            </div>

            <div className="space-y-6">
              {program.days.map((day, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold">{idx + 1}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{day.day}</h3>
                      <p className="text-sm text-slate-400">{day.focus}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {day.exercises.map((exercise, exIdx) => (
                      <div key={exIdx} className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                        <div>
                          <div className="font-medium">{exercise.name}</div>
                          <div className="text-sm text-slate-400">{exercise.sets} seturi × {exercise.reps} reps</div>
                        </div>
                        <div className="text-right text-sm text-slate-500">Pauză: {exercise.rest}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA + Viral Loop */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/30 text-center">
              <h3 className="text-xl font-semibold mb-2">Vrei să salvezi acest program?</h3>
              <p className="text-slate-400 mb-4">Primește programul în format PDF + ghid video pentru fiecare exercițiu.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={handleSave} className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  <Save className="mr-2 h-5 w-5" /> Salvează Programul
                </button>
                <button onClick={handleShare} className="inline-flex items-center justify-center px-6 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition-colors">
                  <Share2 className="mr-2 h-5 w-5" /> Partajează
                </button>
              </div>
            </div>

            {/* SAVE PROGRAM MODAL */}
            {showSaveModal && (
              <div className="mt-6 p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl border border-purple-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <Download className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-purple-400">📥 Salvează Programul</h3>
                </div>
                
                <p className="text-slate-300 mb-4">
                  Introdu emailul pentru a primi programul în format text 
                  <span className="text-purple-400 font-bold">+ acces la ghidurile video</span> pentru fiecare exercițiu!
                </p>

                <div className="bg-black/30 rounded-xl p-4 mb-4">
                  <div className="text-sm text-slate-400 mb-2">Ce primești:</div>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> Program complet descărcabil</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> Ghid video pentru fiecare exercițiu</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> Tips & tricks pentru progres</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> Newsletter săptămânal cu noutăți</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="exemplu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none text-white"
                    />
                  </div>
                  
                  <button 
                    onClick={downloadProgram}
                    disabled={saved}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {saved ? (
                      <><Check className="mr-2 h-5 w-5" /> Descărcat! Verifică emailul</>
                    ) : (
                      <><Download className="mr-2 h-5 w-5" /> Descarcă Programul + Ghid Video</>
                    )}
                  </button>
                </div>

                <p className="mt-4 text-xs text-slate-500 text-center">
                  Nu împărtășim emailul cu nimeni. Te poți dezabona oricând.
                </p>
              </div>
            )}

            {/* VIRAL LOOP MODAL */}
            {showShareModal && (
              <div className="mt-6 p-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl border border-green-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="h-6 w-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-green-400">🎁 Ofertă Specială!</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  <strong>Partajează programul cu 3 prieteni</strong> și primești <span className="text-green-400 font-bold"> 1 lună GRATIS </span> la abonamentul Pro (valoare $27)!
                </p>
                <div className="bg-black/30 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">Progres:</span>
                    <span className="text-sm font-medium">{referralCount}/3 prieteni</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500" style={{ width: `${(referralCount / 3) * 100}%` }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button onClick={copyToClipboard} className="inline-flex items-center justify-center px-4 py-3 bg-white/10 rounded-lg font-medium hover:bg-white/20 transition-colors">
                    {copied ? <><Check className="mr-2 h-5 w-5 text-green-400" /> Copiat!</> : <><Copy className="mr-2 h-5 w-5" /> Copiază</>}
                  </button>
                  
                  <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`Am generat un program de antrenament personalizat cu GymBro! 💪\n\n${program?.name}\n${program?.split}\n\nGenerează și tu gratuit: https://gymbro.ro/program-antrenament`)}`, '_blank')} className="inline-flex items-center justify-center px-4 py-3 bg-green-600 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </button>
                  
                  <button onClick={() => {
                    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://gymbro.ro/program-antrenament')}`;
                    window.open(fbUrl, '_blank', 'width=600,height=400');
                  }} className="inline-flex items-center justify-center px-4 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                  </button>

                  <button onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'GymBro - Program Antrenament',
                        text: `Am generat un program de antrenament personalizat cu GymBro! 💪\n\n${program?.name}\n${program?.split}`,
                        url: 'https://gymbro.ro/program-antrenament'
                      });
                    } else {
                      copyToClipboard();
                    }
                  }} className="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:opacity-90 transition-opacity sm:hidden">
                    <Share2 className="mr-2 h-5 w-5" />
                    Native
                  </button>

                  <button onClick={() => {
                    const msgUrl = `fb-messenger://share/?link=${encodeURIComponent('https://gymbro.ro/program-antrenament')}`;
                    window.location.href = msgUrl;
                  }} className="hidden sm:inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.744 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.975 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.26-5.963 3.26 6.559-6.963 3.13 3.26 5.889-3.26-6.559 6.963z"/></svg>
                    Messenger
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-1"><Trophy className="h-4 w-4 text-yellow-400" /><span>500+ programe partajate</span></div>
                  <div className="flex items-center gap-1"><Zap className="h-4 w-4 text-yellow-400" /><span>Primești instant accesul</span></div>
                </div>
              </div>
            )}

            <div className="text-center mt-8">
              <button onClick={() => setProgram(null)} className="text-slate-400 hover:text-white transition-colors">← Generează alt program</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
