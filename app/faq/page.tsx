import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Cât costă să folosesc GymBro?",
    answer: "GymBro este 100% gratuit. Toate tool-urile - calculator calorii, programe de antrenament, meal prep, yoga și meditație - sunt disponibile fără costuri. Nu există abonamente ascunse sau trial-uri.",
  },
  {
    question: "Cât de precis este calculatorul de calorii?",
    answer: "Calculatorul folosește formula Mifflin-St Jeor, considerată cea mai precisă pentru populația generală. Acuratețea este de ±10%. Pentru rezultate optime, monitorizează progresul 2-3 săptămâni și ajustează dacă e necesar.",
  },
  {
    question: "Pot să slăbesc fără să merg la sală?",
    answer: "Da! Avem programe complete de antrenament acasă care nu necesită echipament. Plus, slăbitul este 80% nutriție și 20% exercițiu. Folosește calculatorul de calorii și meal prep pentru a controla ce mănânci.",
  },
  {
    question: "Cât timp trebuie să fac yoga pentru rezultate?",
    answer: "Chiar și 10-15 minute zilnic pot aduce beneficii semnificative. Constanța este mai importantă decât durata. Începe cu Yoga pentru Începători de 15 minute și crește gradual.",
  },
  {
    question: "Meditația chiar funcționează?",
    answer: "Da! Studiile arată că meditația regulată reduce cortizolul (hormonul de stres), îmbunătățește somnul și crește capacitatea de concentrare. Începe cu 5 minute zilnic folosind Respirația 4-7-8.",
  },
  {
    question: "Câte proteine am nevoie pe zi?",
    answer: "Depinde de obiectiv: pentru slăbire 2.0-2.4g/kg, pentru masă musculară 1.6-2.2g/kg, pentru menținere 1.2-1.6g/kg. Calculatorul nostru îți dă valoarea exactă bazată pe datele tale.",
  },
  {
    question: "Pot să salvez programele generate?",
    answer: "Da! După ce generezi un program de antrenament, poți să-l copiezi, să-l trimiți pe email sau să-l share-ui pe WhatsApp. Toate programele sunt personalizate pentru tine.",
  },
  {
    question: "Cum funcționează meal prep-ul?",
    answer: "Introduci caloriile zilnice, obiectivul și bugetul în lei, iar generatorul îți creează un plan alimentar pentru 7 zile cu rețete adaptate supermarketurilor din România (Lidl, Kaufland, Carrefour).",
  },
  {
    question: "Sunt începător, de unde să încep?",
    answer: "Începe cu: 1) Calculator Calorii să-ți afli necesarul, 2) Program pentru Începători (Full Body 3 zile/săptămână), 3) Yoga pentru Începători pentru mobilitate. Avem ghiduri complete pentru fiecare pas.",
  },
  {
    question: "Datele mele sunt în siguranță?",
    answer: "Absolut. Nu stocăm date personale sensibile. Calculele se fac în browser și nu salvăm istoricul. Pentru mai multe detalii, vezi Politica de Confidențialitate.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 mb-4">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Întrebări Frecvente</h1>
          <p className="text-slate-400">
            Răspunsuri la cele mai comune întrebări despre GymBro
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 p-6">
              <h3 className="text-lg font-bold mb-3 text-blue-400">{faq.question}</h3>
              <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Nu ai găsit răspunsul căutat?</p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Contactează-ne
          </Link>
        </div>
      </div>
    </div>
  );
}
