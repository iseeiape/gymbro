import Link from "next/link";
import { ArrowLeft, Clock, Sun } from "lucide-react";

export default function MorningMeditationPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌅</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Morning Meditation</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Începe ziua cu intenție și claritate. 5 minute dimineața pot transforma 
            întreaga ta zi.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 5 minute</span>
            <span>•</span>
            <span className="flex items-center gap-2"><Sun className="h-4 w-4 text-orange-400" /> Pentru dimineață</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600/20 to-yellow-600/20 rounded-2xl border border-orange-500/30 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">De ce dimineața?</h2>
          <p className="text-slate-300">
            Mintea este mai clară și mai receptivă dimineața. Aceste 5 minute setează 
            tonul pentru întreaga zi - vei fi mai calm, mai focusat și mai pozitiv.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold">Practica de 5 Minute</h2>

          {[
            { time: "0:00-1:00", title: "Setează intenția", desc: "Stai confortabil. Întreabă-te: 'Cum vreau să mă simt astăzi?' Sau: 'Ce vreau să creez azi?'" },
            { time: "1:00-3:00", title: "Respirație conștientă", desc: "Concentrează-te pe respirație. Inspiră adânc pe nas (4 sec), expiră lent pe gură (6 sec). Fă asta de 10 ori." },
            { time: "3:00-4:00", title: "Afirmații pozitive", desc: "Spune în gând sau cu voce tare: 'Sunt capabil. Sunt prezent. Azi va fi o zi bună.' Alege ce rezonează cu tine." },
            { time: "4:00-5:00", title: "Recunoștință", desc: "Gândește-te la 3 lucruri pentru care ești recunoscător astăzi. Pot fi simple: somn, cafea, soare." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 text-sm text-orange-400 font-mono">
                  {item.time}
                </div>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 rounded-2xl border border-white/10 p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Sfaturi pentru rutina de dimineață</h2>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3"><span className="text-orange-400">•</span><span>Fă meditația imediat după ce te trezești, înainte să verifici telefonul</span></li>
            <li className="flex items-start gap-3"><span className="text-orange-400">•</span><span>Deschide fereastra pentru lumină naturală</span></li>
            <li className="flex items-start gap-3"><span className="text-orange-400">•</span><span>Poți combina cu o cafea sau ceai - meditație mindful în timp ce bei</span></li>
            <li className="flex items-start gap-3"><span className="text-orange-400">•</span><span>Fii consecvent - aceeași oră în fiecare zi crează obiceiul</span></li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/meditatie" className="flex-1 text-center py-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            ← Toate tehnicile
          </Link>
          <Link href="/meditatie/sleep-meditation" className="flex-1 text-center py-4 bg-orange-600 rounded-xl hover:bg-orange-700 transition-colors font-semibold">
            Sleep Meditation →
          </Link>
        </div>
      </div>
    </div>
  );
}
