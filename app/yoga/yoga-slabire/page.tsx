import Link from "next/link";
import { ArrowLeft, Clock, PlayCircle, CheckCircle, Flame } from "lucide-react";

const poses = [
  {
    name: "Sun Salutation A (Surya Namaskar A) - 5x",
    duration: "5 min",
    description: "Secvență dinamică care încălzește întregul corp și crește ritmul cardiac.",
    instructions: [
      "Începe în Tadasana (Munte)",
      "Inspiră și ridică brațele (Urdhva Hastasana)",
      "Expiră și apleacă-te înainte (Uttanasana)",
      "Inspiră, extinde coloana (Ardha Uttanasana)",
      "Expiră, palmele jos, picioarele înapoi (Plank)",
      "Cobori în Chaturanga Dandasana",
      "Inspiră în Urdhva Mukha Svanasana (Câinele în sus)",
      "Expiră în Adho Mukha Svanasana (Câinele cu fața în jos) - 5 respirații",
      "Salt înainte și repetă de 5 ori",
    ],
    benefits: ["Încălzire completă", "Crește ritmul cardiac", "Activează metabolismul"],
  },
  {
    name: "Câinele cu Fața în Jos cu Ridicare de Picior",
    duration: "1 min fiecare parte",
    description: "Variantă dinamică care activează fesierii și coapsele.",
    instructions: [
      "Din Adho Mukha Svanasana, ridică piciorul drept în sus",
      "Îndoaie genunchiul și deschide șoldul spre dreapta",
      "Extinde piciorul înapoi și coboară",
      "Repetă de 5 ori, apoi schimbă piciorul",
    ],
    benefits: ["Tonifiază fesierii", "Întărește core-ul", "Crește stabilitatea"],
  },
  {
    name: "Scaunul (Utkatasana) cu Pulsații",
    duration: "1 min",
    description: "Genuflexiuni yoga care lucrează coapsele și ridică temperatura corpului.",
    instructions: [
      "Stai în picioare, picioarele unite sau la distanța șoldurilor",
      "Apleacă-te ca și cum ai sta pe un scaun invizibil",
      "Ridică brațele deasupra capului",
      "Pulsații mici în jos-sus timp de 30 de secunde",
      "Menține poziția joasă încă 30 de secunde",
    ],
    benefits: ["Arde calorii", "Întărește coapsele", "Activează metabolismul"],
  },
  {
    name: "Războiul III (Virabhadrasana III) - Dinamic",
    duration: "1 min fiecare parte",
    description: "Poziție de echilibru care lucrează întregul corp și crește focul intern.",
    instructions: [
      "Din Virabhadrasana I, înclină-te înainte și ridică piciorul din spate",
      "Formează un T cu corpul - trunchiul și piciorul ridicate paralele cu solul",
      "Brațele înainte sau pe lângă corp",
      "Menține 5 respirații, coboară și repetă de 3 ori pe fiecare parte",
    ],
    benefits: ["Întărește core-ul", "Îmbunătățește echilibrul", "Lucrează mușchii stabilizatori"],
  },
  {
    name: "Barca (Navasana) - 3 Runde",
    duration: "30 sec x 3",
    description: "Poziție de forță pentru abdomen care crește temperatura corporală.",
    instructions: [
      "Așează-te pe oasele ischionice (sitz bones)",
      "Ridică picioarele de la sol, îndoite sau drepte",
      "Extinde brațele înainte, paralele cu solul",
      "Menține spatele drept, pieptul deschis",
      "Ține 30 de secunde, odihnă 10 secunde, repetă de 3 ori",
    ],
    benefits: ["Întărește abdomenul", "Îmbunătățește digestia", "Crește temperatura internă"],
  },
  {
    name: "Podul (Setu Bandhasana)",
    duration: "1 min",
    description: "Deschide pieptul și activează tiroida, stimulând metabolismul.",
    instructions: [
      "Întinde-te pe spate, genunchii îndoiți, picioarele pe sol",
      "Ridică șoldurile de pe saltea, presând în picioare",
      "Închide umerii sub tine și ridică pieptul",
      "Menține 5-8 respirații profunde",
    ],
    benefits: ["Stimulează tiroida", "Întinde pieptul", "Întărește spatele"],
  },
  {
    name: "Twisted Cobra (Bhujangasana cu Răsucire)",
    duration: "30 sec fiecare parte",
    description: "Combină deschiderea pieptului cu rotația, stimulând organele digestive.",
    instructions: [
      "Întinde-te pe burtă, palmele sub umeri",
      "Ridică pieptul în Cobra",
      "Rotește umerii spre dreapta și privește peste umărul drept",
      "Menține, apoi repetă spre stânga",
    ],
    benefits: ["Stimulează digestia", "Întinde abdomenul", "Crește mobilitatea coloanei"],
  },
  {
    name: "Relaxare cu Picioarele pe Perete (Viparita Karani)",
    duration: "3 min",
    description: "Inversare blândă pentru recuperare și drenaj limfatic.",
    instructions: [
      "Așează-te cu șoldurile aproape de perete",
      "Ridică picioarele pe perete, întinse sau îndoite",
      "Extinde brațele în T sau pe lângă corp",
      "Relaxază complet și respiră profund",
    ],
    benefits: ["Reduce oboseala", "Îmbunătățește circulația", "Calmează sistemul nervos"],
  },
];

const tips = [
 "Acest program arde aproximativ 150-200 calorii în 45 de minute",
 "Fă practica dimineața pe stomacul gol pentru maximizarea arderii",
 "Hidratează-te bine înainte, în timpul și după practică",
 "Combină cu un deficit caloric moderat pentru rezultate optime",
 "Nu te compara cu others - fiecare corp răspunde diferit",
];

export default function YogaSlabirePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔥</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Yoga pentru Slăbire</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Flow-uri dinamice și poziții de forță care accelerează metabolismul, 
            tonifiază musculatura și ard calorii. Transformă-ți corpul cu puterea yoga.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 45 minute</span>
            <span>•</span>
            <span>8 poziții</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Flame className="h-4 w-4 text-orange-500" /> Ardere ridicată</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl border border-orange-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-orange-400" />
            Recomandări pentru Ardere Maximă
          </h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Practică dimineața pentru a activa metabolismul pe tot parcursul zilei</li>
            <li>• Menține un ritm dinamic - treci rapid de la o poziție la alta</li>
            <li>• Respiră profund în fiecare poziție - oxigenul arde grăsimea</li>
            <li>• Fă o cană de ceai verde înainte pentru stimulare naturală</li>
            <li>• Combină cu o dietă sănătoasă - 70% nutriție, 30% exercițiu</li>
          </ul>
        </div>

        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Secvența de Practica</h2>

          {poses.map((pose, idx) => (
            <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm text-orange-400 font-medium">Poziția {idx + 1}</span>
                  <h3 className="text-xl font-bold mt-1">{pose.name}</h3>
                </div>
                <span className="flex items-center gap-1 text-sm text-slate-500">
                  <Clock className="h-4 w-4" />{pose.duration}
                </span>
              </div>

              <p className="text-slate-400 mb-4">{pose.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-slate-300">Cum se face:</h4>
                <ol className="space-y-1 text-slate-400 list-decimal list-inside">
                  {pose.instructions.map((instruction, i) => (
                    <li key={i}>{instruction}</li>
                  ))}
                </ol>
              </div>

              <div className="flex flex-wrap gap-2">
                {pose.benefits.map((benefit, i) => (
                  <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                    <CheckCircle className="h-3 w-3" />{benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 rounded-2xl border border-white/10 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Sfaturi pentru Slăbire</h2>
          <ul className="space-y-3">
            {tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300">
                <span className="text-orange-400 mt-1">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/yoga/yoga-flexibilitate" className="flex-1 text-center py-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            ← Yoga pentru Flexibilitate
          </Link>
          <Link href="/yoga/yoga-stres" className="flex-1 text-center py-4 bg-orange-600 rounded-xl hover:bg-orange-700 transition-colors font-semibold">
            Următorul: Yoga pentru Stres →
          </Link>
        </div>
      </div>
    </div>
  );
}
