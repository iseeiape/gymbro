import Link from "next/link";
import { ArrowLeft, Clock, PlayCircle, CheckCircle, Heart } from "lucide-react";

const poses = [
  {
    name: "Poziția Copilului (Balasana) - Extinsă",
    duration: "3-5 min",
    description: "Poziție de bază pentru relaxare profundă. Permite corpului să se odihnească și mintea să se liniștească.",
    instructions: [
      "Așează-te în genunchi, șezând pe călcâie",
      "Sepără genunchii la lățimea șoldurilor pentru a permite pieptului să cadă între ei",
      "Extinde brațele înainte sau lângă corp, cu palmele în sus pentru receptivitate",
      "Fruntea pe saltea, respiră adânc în abdomen",
      "Focalizează-te pe expirații lungi - inhalează pe 4, exhalează pe 6-8",
    ],
    benefits: ["Calmează sistemul nervos", "Reduce anxietatea", "Eliberează tensiunea cervicală"],
  },
  {
    name: "Legs Up The Wall (Viparita Karani)",
    duration: "5-10 min",
    description: "Inversare blândă care activează răspunsul de relaxare și reduce stresul.",
    instructions: [
      "Așează-ți șoldurile cât mai aproape de perete",
      "Ridică picioarele pe perete, întinse sau ușor îndoite",
      "Pune o pernă sub șolduri pentru confort suplimentar",
      "Brațele pe lângă corp sau pe abdomen",
      "Închide ochii și focalizează-te pe respirație timp de 5-10 minute",
    ],
    benefits: ["Reduce oboseala", "Calmează mintea", "Îmbunătățește circulația"],
  },
  {
    name: "Thread the Needle (Urdhva Mukha Pasasana)",
    duration: "1 min fiecare parte",
    description: "Răsucire blândă care eliberează tensiunea din umeri și partea superioară a spatelui.",
    instructions: [
      "Începe în poziția de patru puncte",
      "Ridică brațul drept spre tavan, deschizând pieptul",
      "La expirație, adu brațul drept sub brațul stâng",
      "Umărul drept și templul pe saltea",
      "Întinde brațul stâng înainte sau în sus",
    ],
    benefits: ["Eliberează umerii", "Rotește coloana blând", "Calmează sistemul nervos"],
  },
  {
    name: "Supported Fish Pose (Matsyasana)",
    duration: "3-5 min",
    description: "Deschide pieptul și contracarează poziția încovoiată de la birou.",
    instructions: [
      "Așează o pernă sau o pătură pliată pe verticală sub omoplați",
      "Întinde-te pe spate, cu perna susținând pieptul deschis",
      "Lasă capul să cadă pe spate dacă e confortabil, sau pune o pernă sub el",
      "Brațele în T sau cactus (cotul la 90 grade)",
      "Respiră în piept și simte cum se deschide",
    ],
    benefits: ["Deschide pieptul", "Contracarează poziția la birou", "Îmbunătățește respirația"],
  },
  {
    name: "Banana Pose (Bananasana)",
    duration: "3 min fiecare parte",
    description: "Întindere laterală blândă pentru partea exterioară a corpului.",
    instructions: [
      "Întinde-te pe spate, brațele deasupra capului",
      "Împinge șoldurile și umerii spre dreapta, formând o curbă de banană",
      "Ridică picioarele și brațele spre dreapta",
      "Ține gleznele încrucișate pentru a intensifica întinderea",
      "Respiră în partea stângă a corpului",
    ],
    benefits: ["Întinde părțile laterale", "Eliberează coastele", "Stimulează meridianele laterale"],
  },
  {
    name: "Reclined Butterfly (Supta Baddha Konasana)",
    duration: "5 min",
    description: "Poziție pasivă care deschide șoldurile fără efort și calmează mintea.",
    instructions: [
      "Așează-te pe spate și unirile tălpile",
      "Lasă genunchii să cadă spre exterior în formă de fluture",
      "Pune perne sau blocuri sub genunchi pentru suport",
      "O mână pe inimă, una pe abdomen - simte respirația",
      "Închide ochii și rămâi aici timp de 5 minute",
    ],
    benefits: ["Deschide șoldurile pasiv", "Stimulează organele abdominale", "Calmează profund"],
  },
  {
    name: "Yoga Nidra / Corp Scan",
    duration: "10 min",
    description: "Meditație de tip body scan care induce relaxare profundă.",
    instructions: [
      "Întinde-te în Savasana, complet relaxat",
      "Închide ochii și respiră natural",
      "Mută atenția prin corp: de la degetele picioarelor la cap",
      "Pentru fiecare zonă, observă, apoi relaxează intenționat",
      "Nu încerca să schimbi nimic, doar observă și lasă să fie",
    ],
    benefits: ["Relaxare profundă", "Reduce insomnia", "Calmează anxietatea"],
  },
];

const breathing = {
  name: "4-7-8 Breathing (Respirația Relaxării)",
  description: "Tehnică de respirație care activează sistemul nervos parasimpatic.",
  steps: [
    "Inspiră pe nas timp de 4 secunde",
    "Ține aerul timp de 7 secunde",
    "Expiră complet pe gură timp de 8 secunde, făcând sunetul 'haaa'",
    "Repetă de 4-8 ori",
  ],
  benefits: ["Reduce anxietatea instant", "Induce somnul", "Scade tensiunea arterială"],
};

export default function YogaStresPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🧘</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Yoga pentru Stres</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            O practică blândă și restaurativă care activează răspunsul de relaxare, 
            calmează sistemul nervos și aduce mintea în momentul prezent.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 20 minute</span>
            <span>•</span>
            <span>7 poziții + respirație</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Heart className="h-4 w-4 text-blue-400" /> Toate nivelurile</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl border border-blue-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-blue-400" />
            Când să folosești acest program
          </h2>
          <ul className="space-y-2 text-slate-300">
            <li>• După o zi stresantă la birou</li>
            <li>• Când simți anxietate sau te simți copleșit</li>
            <li>• Înainte de somn pentru odihnă mai bună</li>
            <li>• Dimineața pentru a începe ziua cu calm</li>
            <li>• Oricând ai nevoie de o pauză mentală</li>
          </ul>
        </div>

        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Secvența de Relaxare</h2>

          {poses.map((pose, idx) => (
            <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm text-blue-400 font-medium">Poziția {idx + 1}</span>
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
                  <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    <CheckCircle className="h-3 w-3" />{benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl border border-cyan-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">🫁 {breathing.name}</h2>          <p className="text-slate-300 mb-4">{breathing.description}</p>
          <ol className="space-y-2 text-slate-300 mb-4 list-decimal list-inside">
            {breathing.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-2">
            {breathing.benefits.map((benefit, i) => (
              <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                <CheckCircle className="h-3 w-3" />{benefit}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/yoga/yoga-slabire" className="flex-1 text-center py-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            ← Yoga pentru Slăbire
          </Link>
          <Link href="/meditatie" className="flex-1 text-center py-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
            Descoperă Meditația →
          </Link>
        </div>
      </div>
    </div>
  );
}
