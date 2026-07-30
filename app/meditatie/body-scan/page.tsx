import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function BodyScanPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🫀</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Body Scan Meditation</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            O călătorie conștientă prin corpul tău. Observă, eliberează tensiunea 
            și cultivă o conexiune profundă cu tine însuți.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10-20 minute</span>
            <span>•</span>
            <span>Relaxare profundă</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl border border-green-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Ce este Body Scan?</h2>
          <p className="text-slate-300">
            O formă de meditație mindfulness în care muți atenția sistematic prin diferite 
            părți ale corpului. Observi senzațiile fără judecată, eliberând tensiunea acumulată.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold">Ghid Practic</h2>

          {[
            { step: "1", title: "Pregătirea", desc: "Întinde-te pe spate într-o poziție confortabilă. Pune o pernă sub genunchi dacă ai dureri de spate." },
            { step: "2", title: "Degetele picioarelor", desc: "Adus atenția pe degetele de la picioare. Observă orice senzație - căldură, rece, furnicături, nimic." },
            { step: "3", title: "Picioarele", desc: "Mută atenția prin tălpi, glezne, gambe, genunchi. La fiecare oprire, relaxează intenționat mușchii." },
            { step: "4", title: "Șoldurile și abdomenul", desc: "Scanază zona pelviană, abdomenul, partea inferioară a spatelui. Respiră în zonele tensionate." },
            { step: "5", title: "Pieptul și spatele", desc: "Observă mișcarea naturală a respirației. Simte cum pieptul se ridică și coboară." },
            { step: "6", title: "Umerii și brațele", desc: "Eliberează tensiunea din umeri. Mută atenția prin brațe, coate, încheieturi, degete." },
            { step: "7", title: "Gâtul și fața", desc: "Relaxază maxilarul, limba, ochii. Observă expresia feței tale. Eliberează orice încordare." },
            { step: "8", title: "Corpul ca întreg", desc: "Simte corpul în totalitate. Imaginează-ți că respiri în întregul corp, umplându-l cu energie." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl border border-green-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Beneficii</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Reduce durerea cronică",
              "Îmbunătățește somnul",
              "Reduce anxietatea",
              "Crește conștientizarea corporală",
              "Eliberează tensiunea musculară",
              "Cultivă acceptarea",
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300">
                <span className="text-green-400">✓</span> {benefit}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/meditatie/box-breathing" className="flex-1 text-center py-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            ← Box Breathing
          </Link>
          <Link href="/meditatie" className="flex-1 text-center py-4 bg-green-600 rounded-xl hover:bg-green-700 transition-colors font-semibold">
            Toate tehnicile →
          </Link>
        </div>
      </div>
    </div>
  );
}
