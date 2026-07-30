import Link from "next/link";
import { ArrowLeft, Clock, PlayCircle, CheckCircle } from "lucide-react";

const poses = [
  {
    name: "Fluturele (Baddha Konasana)",
    duration: "2-3 min",
    description: "Deschide șoldurile și întinde părțile interioare ale coapselor.",
    instructions: [
      "Așează-te cu picioarele unite și genunchii în exterior",
      "Prinde-ți degetele de la picioare cu mâinile",
      "Îndoaie ușor corpul înainte, menținând spatele drept",
      "Simte întinderea în șolduri și nu forța",
    ],
    benefits: ["Deschide șoldurile", "Întinde adductorii", "Calmează mintea"],
  },
  {
    name: "Privirea Pământului (Prasarita Padottanasana)",
    duration: "1-2 min",
    description: "Întindere profundă pentru posteriorul picioarelor și coloana vertebrală.",
    instructions: [
      "Stai în picioare cu picioarele depărtate (o lungime de picior)",
      "Pune mâinile pe șolduri și inspiră",
      "La expirație, apleacă-te înainte din șolduri",
      "Pune palmele pe sol sau prinde gleznele",
    ],
    benefits: ["Întinde ischiogambierii", "Întărește coloana", "Crește circulația"],
  },
  {
    name: "Șarpele (Bhujangasana)",
    duration: "30 sec - 1 min",
    description: "Deschide pieptul și întărește mușchii spatelui inferior.",
    instructions: [
      "Întinde-te pe burtă cu palmele sub umeri",
      "Împinge în palme și ridică pieptul de pe sol",
      "Menține coapsele și picioarele pe saltea",
      "Deschide umerii și privește în sus sau în față",
    ],
    benefits: ["Întinde abdomenul", "Întărește coloana lombară", "Deschide pieptul"],
  },
  {
    name: "Porumbarul (Eka Pada Rajakapotasana) - Varianta Blândă",
    duration: "2 min fiecare parte",
    description: "Întindere profundă pentru flexoriii șoldului (psoas).",
    instructions: [
      "Din poziția de câine cu fața în jos, adu genunchiul stâng în față",
      "Extinde piciorul drept înapoi, aproape de sol",
      "Pune mâinile pe lângă genunchiul din față sau înainte",
      "Simte întinderea în șoldul drept",
    ],
    benefits: ["Deschide flexorii șoldului", "Eliberează tensiunea lombară", "Întinde fesierii"],
  },
  {
    name: "Spatele Rotunjit (Balasana cu Brațele în Spate)",
    duration: "2 min",
    description: "Întindere pentru umeri și partea superioară a spatelui.",
    instructions: [
      "Începe în poziția copilului",
      "Adu brațele în spate, de-a lungul corpului",
      "Ridică ușor palmele spre tavan",
      "Lasă fruntea pe saltea și respiră adânc",
    ],
    benefits: ["Întinde umerii", "Deschide pieptul", "Calmează nervos"],
  },
  {
    name: "Pozița Pasărea în Semi-Cer (Parivrtta Surya Yantrasana)",
    duration: "1-2 min fiecare parte",
    description: "Întindere laterală profundă pentru șolduri și partea exterioară a coapsei.",
    instructions: [
      "Stai în picioare și ridică genunchiul drept spre piept",
      "Prinde genunchiul cu mâna dreaptă",
      "Deschide genunchiul spre dreapta, simțind întinderea în șoldul stâng",
      "Menține echilibrul și respiră",
    ],
    benefits: ["Crește mobilitatea șoldurilor", "Întinde IT band", "Îmbunătățește echilibrul"],
  },
  {
    name: "Întinderea în Canapea (Supta Virasana)",
    duration: "2-3 min",
    description: "Întindere profundă pentru coapse (quadriceps) și glezne.",
    instructions: [
      "Stai în genunchi și așează-te între picioare",
      "Dacă e prea intens, apleacă-te pe spate sprijinindu-te pe coate sau spate",
      "Extinde brațele deasupra capului pentru o întindere suplimentară",
      "Respiră profund și relaxează",
    ],
    benefits: ["Întinde quadricepsul", "Îmbunătățește flexibilitatea gleznelor", "Stimulează digestia"],
  },
];

const tips = [
 "Rezistă tentației de a forța - flexibilitatea vine în timp, nu prin forță",
 "Respiră profund în fiecare poziție, imaginează-ți că respiri în zona care se întinde",
 "Folosește perne sau pături pentru a face pozițiile mai accesibile",
 "Constanța este cheia - practică de 3-4 ori pe săptămână pentru rezultate vizibile",
 "Corpul tău este diferit în fiecare zi - ascultă-l și respectă-i limitele",
];

export default function YogaFlexibilitatePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🤸</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Yoga pentru Flexibilitate
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Elonghează mușchii, crește mobilitatea articulațiilor și eliberează tensiunea acumulată. 
            Un program ideal pentru cei care petrec mult timp la birou sau în mașină.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> 30 minute
            </span>
            <span>•</span>
            <span>7 poziții</span>
            <span>•</span>
            <span>Nivel: Intermediar</span>
          </div>
        </div>

        {/* Quick Start */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-purple-400" />
            Înainte să începi
          </h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Încălzește-te 5 minute înainte - rotații articulare, mers pe loc</li>
            <li>• Asigură-te că ai suficient spațiu pentru a te întinde în toate direcțiile</li>
            <li>• Folosește o saltea confortabilă sau o pătură groasă</li>
            <li>• Pune o pernă aproape - te va ajuta în anumite poziții</li>
            <li>• Poartă haine care permit mișcare liberă</li>
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
                    className="inline-flex items-center gap-1 px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
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
          <h2 className="text-xl font-bold mb-4">Sfaturi pentru Flexibilitate</h2>
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
            href="/yoga/yoga-incepatori"
            className="flex-1 text-center py-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
          >
            ← Yoga pentru Începători
          </Link>
          <Link
            href="/yoga/yoga-slabire"
            className="flex-1 text-center py-4 bg-purple-600 rounded-xl hover:bg-purple-700 transition-colors font-semibold"
          >
            Următorul: Yoga pentru Slăbire →
          </Link>
        </div>
      </div>
    </div>
  );
}
