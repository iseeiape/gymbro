import Link from "next/link";
import { ArrowLeft, Clock, PlayCircle, CheckCircle } from "lucide-react";

const poses = [
  {
    name: "Poziția Copilului (Balasana)",
    duration: "1-2 min",
    description: "Poziție de odihnă care calmează mintea și eliberează tensiunea din spate.",
    instructions: [
      "Așează-te în genunchi, șezând pe călcâie",
      "Întinde brațele înainte sau lasă-le lângă corp",
      "Lasă fruntea să atingă salteaua",
      "Respiră adânc și relaxează umerii",
    ],
    benefits: ["Calmează sistemul nervos", "Eliberează tensiunea cervicală", "Odihnește picioarele"],
  },
  {
    name: "Câinele cu Fața în Jos (Adho Mukha Svanasana)",
    duration: "1-2 min",
    description: "Poziție inversată care întinde tot corpul și crește circulația.",
    instructions: [
      "Începe din poziția de patru puncte (mâini și genunchi)",
      "Ridică șoldurile în sus formând un V",
      "Întinde brațele și împinge călcâiele spre saltea",
      "Menține capul între brațe, privind spre picioare",
    ],
    benefits: ["Întinde posteriorul picioarelor", "Întărește brațele și umerii", "Energizează corpul"],
  },
  {
    name: "Poziția Muntețelui (Tadasana)",
    duration: "30 sec - 1 min",
    description: "Fundamentul tuturor pozițiilor în picioare. Îmbunătățește postura și alinierea.",
    instructions: [
      "Stai în picioare cu picioarele la distanța șoldurilor",
      "Întinde coloana vertebrală în sus, ca și cum cineva te trage de creștet",
      "Relaxează umerii în jos, departe de urechi",
      "Activează mușchii coapselor și ridică arcada piciorului",
    ],
    benefits: ["Îmbunătățește postura", "Crește conștientizarea corporală", "Întărește picioarele"],
  },
  {
    name: "Poziția Războiului I (Virabhadrasana I)",
    duration: "30 sec - 1 min fiecare parte",
    description: "Poziție de forță care deschide șoldurile și întinde flexorii șoldului.",
    instructions: [
      "Pasul unui picior în față în lungime mare",
      "Îndoaie genunchiul din față la 90 de grade",
      "Ridică brațele deasupra capului, palmele unite",
      "Țintește în sus sau înainte, păstrând gâtul lung",
    ],
    benefits: ["Întărește picioarele și gleznele", "Deschide șoldurile", "Crește încrederea"],
  },
  {
    name: "Poziția Războiului II (Virabhadrasana II)",
    duration: "30 sec - 1 min fiecare parte",
    description: "Poziție puternică care întărește picioarele și crește concentrarea.",
    instructions: [
      "Din Războiul I, deschide șoldurile și umerii spre latură",
      "Extinde brațele la nivelul umerilor, paralele cu solul",
      "Privește peste degetele mâinii din față",
      "Menține genunchiul din față deasupra gleznei",
    ],
    benefits: ["Crește anduranța picioarelor", "Întinde pieptul și umerii", "Îmbunătățește concentrarea"],
  },
  {
    name: "Poziția Triunghiului (Trikonasana)",
    duration: "30 sec - 1 min fiecare parte",
    description: "Întindere laterală care deschide pieptul și întărește picioarele.",
    instructions: [
      "Din Războiul II, îndreaptă genunchiul din față",
      "Apleacă-te lateral, coborând o mână spre gambă sau saltea",
      "Ridică cealaltă mână spre tavan, deschizând pieptul",
      "Privește spre mâna ridicată sau în jos, după confort",
    ],
    benefits: ["Întinde părțile laterale ale corpului", "Îmbunătățește echilibrul", "Stimulează organele abdominale"],
  },
  {
    name: "Poziția Mortului (Savasana)",
    duration: "3-5 min",
    description: "Relaxare finală care integrează toate beneficiile practicii.",
    instructions: [
      "Întinde-te pe spate cu picioarele depărtate și brațele pe lângă corp",
      "Lasă palmele să se deschidă în sus, degetele relaxate",
      "Închide ochii și respiră natural",
      "Permite corpului să se scufunde în saltea, eliberând orice tensiune",
    ],
    benefits: ["Relaxare profundă", "Reduce oboseala", "Întegrează practica"],
  },
];

const tips = [
 "Respiră întotdeauna pe nas, atât la inspirație cât și la expirație",
 "Nu forța niciodată corpul într-o poziție care provoacă durere ascuțită",
 "Folosește pături sau perne pentru a face pozițiile mai confortabile",
 "Practica regulată este mai importantă decât durata - chiar și 10 minute zilnic contează",
 "Hidratează-te înainte și după practică",
];

export default function YogaIncepatoriPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌱</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Yoga pentru Începători
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Un program blând și accesibil pentru cei care fac primii pași în lumea yoga. 
            Fără echipament special, fără experiență necesară.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> 15-20 minute
            </span>
            <span>•</span>
            <span>7 poziții</span>
            <span>•</span>
            <span>Nivel: Începător</span>
          </div>
        </div>

        {/* Quick Start */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-purple-400" />
            Înainte să începi
          </h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Alege un spațiu liniștit unde nu vei fi deranjat</li>
            <li>• Folosește o saltea de yoga sau o pătură pliată</li>
            <li>• Îmbracă-te în haine confortabile care permit mișcarea</li>
            <li>• Practică pe stomacul gol sau la 2-3 ore după masă</li>
            <li>• Pune telefonul pe modul silent</li>
          </ul>
        </div>

        {/* Sequence */}
        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Secvența de Practica</h2>

          {poses.map((pose, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm text-purple-400 font-medium">
                    Poziția {idx + 1}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{pose.name}</h3>
                </div>
                <span className="flex items-center gap-1 text-sm text-slate-500">
                  <Clock className="h-4 w-4" />
                  {pose.duration}
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
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm"
                  >
                    <CheckCircle className="h-3 w-3" />
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="bg-white/5 rounded-2xl border border-white/10 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Sfaturi pentru Începători</h2>
          <ul className="space-y-3">
            {tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300">
                <span className="text-purple-400 mt-1">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/yoga"
            className="flex-1 text-center py-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
          >
            ← Toate programele
          </Link>
          <Link
            href="/yoga/yoga-flexibilitate"
            className="flex-1 text-center py-4 bg-purple-600 rounded-xl hover:bg-purple-700 transition-colors font-semibold"
          >
            Următorul: Yoga pentru Flexibilitate →
          </Link>
        </div>
      </div>
    </div>
  );
}
