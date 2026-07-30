import Link from "next/link";
import { ArrowRight, Clock, Flame, Heart, Sparkles, Sun } from "lucide-react";

const yogaPrograms = [
  {
    slug: "yoga-incepatori",
    title: "Yoga pentru Începători",
    description: "Primele tale pașe în lumea yoga. Poziții de bază, respirație și relaxare.",
    duration: "15-20 min",
    level: "Începător",
    icon: "🌱",
    color: "from-green-500/20 to-emerald-500/20",
    benefits: ["Flexibilitate de bază", "Relaxare", "Postură corectă"],
  },
  {
    slug: "yoga-flexibilitate",
    title: "Yoga pentru Flexibilitate",
    description: "Întinderi profunde pentru mobilitate și eliberarea tensiunii.",
    duration: "30 min",
    level: "Intermediar",
    icon: "🤸",
    color: "from-purple-500/20 to-pink-500/20",
    benefits: ["Mobilitate crescută", "Eliberare tensiune", "Prevenire accidentări"],
  },
  {
    slug: "yoga-slabire",
    title: "Yoga pentru Slăbire",
    description: "Flow-uri dinamice care ard calorii și tonifiază corpul.",
    duration: "45 min",
    level: "Intermediar-Avansat",
    icon: "🔥",
    color: "from-orange-500/20 to-red-500/20",
    benefits: ["Ardere calorii", "Tonifiere", "Energie crescută"],
  },
  {
    slug: "yoga-stres",
    title: "Yoga pentru Stres",
    description: "Secvențe calmante pentru minte și eliberare emoțională.",
    duration: "20 min",
    level: "Toate nivelurile",
    icon: "🧘",
    color: "from-blue-500/20 to-cyan-500/20",
    benefits: ["Reducere stres", "Somn mai bun", "Claritate mentală"],
  },
];

const dailyFlows = [
  {
    time: "Morning Flow",
    duration: "15 min",
    description: "Energizează-te pentru ziua care începe",
    icon: <Sun className="h-5 w-5" />,
  },
  {
    time: "Lunch Break",
    duration: "10 min",
    description: "Reîncarcă-te la mijlocul zilei",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    time: "Evening Flow",
    duration: "30 min",
    description: "Detensionează-te înainte de somn",
    icon: <Heart className="h-5 w-5" />,
  },
];

export default function YogaPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="w-full h-80 md:h-96 bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-orange-400/30 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🧘‍♀️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Yoga GymBro
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Găsește-ți echilibrul între corp și minte. Programe pentru toate nivelurile, 
              de la primii pași până la practicanți avansați.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: "4", label: "Programe", icon: "🧘" },
            { value: "15-45", label: "Minute/sesiune", icon: "⏱️" },
            { value: "3", label: "Flow-uri zilnice", icon: "🌅" },
            { value: "0", label: "Echipament necesar", icon: "✨" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-10 h-1 bg-purple-500 rounded-full"></span>
            Programe de Yoga
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {yogaPrograms.map((program) => (
              <Link
                key={program.slug}
                href={`/yoga/${program.slug}`}
                className={`group relative bg-gradient-to-br ${program.color} rounded-2xl border border-white/10 p-6 hover:scale-[1.02] transition-all overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{program.icon}</div>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {program.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{program.description}</p>

                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <Clock className="h-4 w-4" />
                    {program.duration}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {program.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/10 rounded text-xs text-slate-300"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-purple-400 font-medium">
                    Începe acum <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Daily Flows */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-10 h-1 bg-orange-500 rounded-full"></span>
            Flow-uri Zilnice
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {dailyFlows.map((flow, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                    {flow.icon}
                  </div>
                  <div>
                    <h3 className="font-bold">{flow.time}</h3>
                    <span className="text-sm text-slate-500">{flow.duration}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm">{flow.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-10 h-1 bg-green-500 rounded-full"></span>
            Beneficiile Yoga
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "💪",
                title: "Forță & Flexibilitate",
                desc: "Îmbunătățește mobilitatea articulațiilor și tonifică musculatura profundă.",
              },
              {
                icon: "🧠",
                title: "Claritate Mentală",
                desc: "Reduce anxietatea și îmbunătățește concentrarea prin respirație conștientă.",
              },
              {
                icon: "😴",
                title: "Somn de Calitate",
                desc: "Secvențele de seară te pregătesc pentru un somn profund și odihnitor.",
              },
              {
                icon: "❤️",
                title: "Sănătate Cardiovasculară",
                desc: "Scade tensiunea arterială și îmbunătățește circulația sanguină.",
              },
              {
                icon: "🎯",
                title: "Echilibru & Postură",
                desc: "Corectează dezechilibrele musculare și îmbunătățește alinierea coloanei.",
              },
              {
                icon: "⚡",
                title: "Energie & Vitalitate",
                desc: "Flow-urile de dimineață stimulează metabolismul și cresc energia.",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 p-6">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl border border-purple-500/30 p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Începe Călătoria Yoga Astăzi
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Nu ai nevoie de echipament special sau experiență. Doar un spațiu mic 
            și 15 minute pentru tine.
          </p>
          <Link
            href="/yoga/yoga-incepatori"
            className="inline-flex items-center px-8 py-4 bg-purple-600 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
          >
            Primul Meu Flow <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
