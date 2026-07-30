import Link from "next/link";
import { ArrowRight, Clock, PlayCircle, Brain, Moon, Sun, Wind, Heart } from "lucide-react";

const techniques = [
  {
    slug: "respiratie-4-7-8",
    title: "Respirația 4-7-8",
    description: "Tehnica de relaxare instant care calmează sistemul nervos și induce somnul.",
    duration: "3-5 min",
    icon: <Wind className="h-6 w-6" />,
    color: "from-cyan-500/20 to-blue-500/20",
    benefits: ["Reduce anxietatea", "Induce somnul", "Scade tensiunea"],
  },
  {
    slug: "box-breathing",
    title: "Box Breathing",
    description: "Tehnica pătratului folosită de Navy SEALs pentru calm și concentrare.",
    duration: "5 min",
    icon: <Brain className="h-6 w-6" />,
    color: "from-purple-500/20 to-pink-500/20",
    benefits: ["Crește focusul", "Reduce stresul", "Îmbunătățește performanța"],
  },
  {
    slug: "body-scan",
    title: "Body Scan Meditation",
    description: "Scanarea corpului pentru relaxare profundă și conștientizare corporală.",
    duration: "10-20 min",
    icon: <Heart className="h-6 w-6" />,
    color: "from-green-500/20 to-emerald-500/20",
    benefits: ["Relaxare profundă", "Reducere durere", "Conștientizare"],
  },
  {
    slug: "morning-meditation",
    title: "Morning Meditation",
    description: "Meditație de 5 minute pentru a începe ziua cu intenție și claritate.",
    duration: "5 min",
    icon: <Sun className="h-6 w-6" />,
    color: "from-orange-500/20 to-yellow-500/20",
    benefits: ["Claritate mentală", "Setare intenții", "Energie pozitivă"],
  },
  {
    slug: "sleep-meditation",
    title: "Sleep Meditation",
    description: "Meditație ghidată pentru a adormi rapid și a dormi profund.",
    duration: "15-20 min",
    icon: <Moon className="h-6 w-6" />,
    color: "from-indigo-500/20 to-purple-500/20",
    benefits: ["Adormire rapidă", "Somn profund", "Reducere insomnie"],
  },
];

const benefits = [
  {
    icon: "🧠",
    title: "Claritate Mentală",
    description: "Reduce 'mental clutter' și îmbunătățește abilitatea de concentrare.",
  },
  {
    icon: "😌",
    title: "Reducere Stres",
    description: "Cortizol scăzut cu până la 23% după 8 săptămâni de practică.",
  },
  {
    icon: "❤️",
    title: "Sănătate Cardiovasculară",
    description: "Scade tensiunea arterială și îmbunătățește variabilitatea ritmului cardiac.",
  },
  {
    icon: "😴",
    title: "Somn de Calitate",
    description: "Adormire mai rapidă și somn mai odihnitor, fără medicamente.",
  },
  {
    icon: "🎯",
    title: "Emoții Echilibrate",
    description: "Mai puțin reactiv, mai multă răbdare și compasiune.",
  },
  {
    icon: "✨",
    title: "Prezență și Flow",
    description: "Starea de flow crește, productivitatea se îmbunătățește natural.",
  },
];

export default function MeditatiePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="w-full h-80 md:h-96 bg-gradient-to-br from-indigo-600/30 via-purple-500/20 to-pink-500/30 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🧘‍♂️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meditație & Mindfulness
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tehnici de respirație și meditație ghidată pentru claritate mentală, 
              reducerea stresului și somn odihnitor. Începe cu doar 5 minute pe zi.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: "5", label: "Tehnici", icon: "🧘" },
            { value: "5-20", label: "Minute/sesiune", icon: "⏱️" },
            { value: "0", label: "Experiență necesară", icon: "✨" },
            { value: "100%", label: "Gratuit", icon: "🎁" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Techniques */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-10 h-1 bg-purple-500 rounded-full"></span>
            Tehnici de Meditație
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((tech) => (
              <Link
                key={tech.slug}
                href={`/meditatie/${tech.slug}`}
                className={`group bg-gradient-to-br ${tech.color} rounded-2xl border border-white/10 p-6 hover:scale-[1.02] transition-all overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white/10 rounded-xl text-purple-400">
                      {tech.icon}
                    </div>
                    <span className="flex items-center gap-1 text-sm text-slate-400">
                      <Clock className="h-4 w-4" />
                      {tech.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm">{tech.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {tech.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/10 rounded text-xs text-slate-300"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-purple-400 font-medium text-sm">
                    Începe acum <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-10 h-1 bg-green-500 rounded-full"></span>
            Beneficiile Meditației
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 p-6">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl border border-purple-500/30 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Începe Călătoria Mindfulness
              </h2>
              <p className="text-slate-400 mb-6">
                Nu ai nevoie de experiență prealabilă sau de echipament special. 
                Doar 5 minute pe zi pot schimba modul în care te simți și reacționezi.
              </p>
              <Link
                href="/meditatie/respiratie-4-7-8"
                className="inline-flex items-center px-8 py-4 bg-purple-600 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Prima Meditație (5 min)
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              {[
                { num: "1", text: "Găsește un loc liniștit" },
                { num: "2", text: "Setează un timer" },
                { num: "3", text: "Închide ochii și respiră" },
                { num: "4", text: "Fii blând cu tine însuți" },
              ].map((step, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{step.num}</div>
                  <div className="text-sm text-slate-300">{step.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
