import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 10 Greșeli pe care le Fac Începătorii în Sală | GymBro",
  description: "Evită aceste greșeli comune care îți încetinesc progresul. De la formă greșită la overtraining - tot ce trebuie să știi.",
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <span className="text-purple-400 text-sm font-medium">ANTRENAMENT</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Top 10 Greșeli pe care le Fac Începătorii în Sală
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>1 Martie 2026</span>
            <span>•</span>
            <span>6 minute de citit</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-slate-300 leading-relaxed mb-6">
            Primele 6 luni la sală sunt cruciale. Fă greșelile astea și vei pierde luni de progres. 
            Evită-le și vei crește mai rapid decât 90% din oamenii de la sală.
          </p>

          {[
            {
              num: 1,
              title: "Nu ai un plan",
              content: "Intri la sală și faci ce exerciții îți vin în minte. GREȘIT! Ai nevoie de un program structurat cu progresie. Folosește generatorul nostru de programe.",
              fix: "Folosește GymBro Program Generator pentru un plan personalizat."
            },
            {
              num: 2,
              title: "Formă greșită",
              content: "Vrei să ridici mai mult și sacrifici forma. Asta duce la accidentări și mușchi sub-dezvoltați.",
              fix: "Ridică 20% mai puțin și execută PERFECT. Calitate > cantitate."
            },
            {
              num: 3,
              title: "Neglijezi picioarele",
              content: "Toți facem bench și biceps, dar evităm squat-ul. Picioarele sunt 50% din corpul tău!",
              fix: "Minimum 1 zi de picioare pe săptămână. Nu negocia."
            },
            {
              num: 4,
              title: "Nu mănânci suficient",
              content: "Te antrenezi ca un animal dar mănânci ca un păsărel. Mușchii au nevoie de material să crească.",
              fix: "Folosește Calculatorul Calorii pentru a-ți afla surplusul."
            },
            {
              num: 5,
              title: "Overtraining",
              content: "Crezi că mai mult = mai bine. Fără odihnă, mușchii nu cresc. De fapt, se micșorează.",
              fix: "Minimum 48h odihnă între antrenamente pentru același grup muscular."
            },
            {
              num: 6,
              title: "Compari cu alții",
              content: "Te uiți la tipul care ridică de 5 ani și te simți slab. Fiecare are ritmul lui.",
              fix: "Compară-te doar cu tine de acum 1 lună."
            },
            {
              num: 7,
              title: "Nu ții evidența",
              content: "Nu știi cât ai ridicat săptămâna trecută. Cum să progresezi?",
              fix: "Folosește GymBro Tracker pentru a înregistra fiecare antrenament."
            },
            {
              num: 8,
              title: "Neglijezi încălzirea",
              content: "Intri direct în seturile grele. Mușchii reci = accidentări.",
              fix: "5-10 minute încălzire + 2 seturi ușoare înainte de greutatea de lucru."
            },
            {
              num: 9,
              title: "Nu dormi suficient",
              content: "Te antrenezi perfect dar dormi 5 ore. Somnul e când crești!",
              fix: "Minimum 7-8 ore pe noapte. Punct."
            },
            {
              num: 10,
              title: "Renunți prea repede",
              content: "Vrei rezultate în 2 săptămâni. Transformarea ia luni, chiar ani.",
              fix: "Fă un angajament de 6 luni. Vei fi uimit de rezultate."
            }
          ].map((greseala) => (
            <div key={greseala.num} className="mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center font-bold text-xl">
                  {greseala.num}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">{greseala.title}</h2>
                  <p className="text-slate-300 mb-3">{greseala.content}</p>
                  <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded">
                    <strong className="text-green-400">✓ Soluția:</strong> {greseala.fix}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 my-12 border border-blue-500/30">
            <h3 className="text-xl font-bold mb-4">🎯 Rezumat</h3>
            <p className="text-slate-300 mb-4">
              Fiecare începător face aceste greșeli. Diferența între cei care reușesc și cei care renunță 
              este că cei de succes le corectează rapid.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/calculator" className="p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-colors text-center">
                <strong>Calculator Calorii</strong>
              </a>
              <a href="/program-antrenament" className="p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-colors text-center">
                <strong>Generator Program</strong>
              </a>
              <a href="/progress" className="p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-colors text-center">
                <strong>Tracker Progres</strong>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
