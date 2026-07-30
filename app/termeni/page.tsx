import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermeniPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 mb-4">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Termeni și Condiții</h1>
          <p className="text-slate-400">
            Ultima actualizare: 6 Martie 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Acceptarea Termenilor</h2>
            <p className="text-slate-300 mb-4">
              Prin utilizarea site-ului GymBro.ro, acceptați acești termeni și condiții în totalitate. 
              Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați site-ul.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Descrierea Serviciilor</h2>
            <p className="text-slate-300 mb-4">
              GymBro.ro oferă următoarele servicii gratuite:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Calculator de calorii și macronutrienți</li>
              <li>Generator de programe de antrenament</li>
              <li>Planificator de meal prep</li>
              <li>Programe de yoga și meditație</li>
              <li>Blog cu articole despre fitness și nutriție</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. Disclaimer Medical</h2>
            <p className="text-slate-300 mb-4">
              Informațiile furnizate pe acest site au scop informativ și educational. 
              Nu constituie sfat medical, nutrițional sau de fitness profesional. 
              Consultați întotdeauna un medic înainte de a începe orice program de exerciții 
              sau dietă, mai ales dacă aveți condiții medicale preexistente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Utilizarea Corectă</h2>
            <p className="text-slate-300 mb-4">
              Nu puteți utiliza site-ul în următoarele moduri:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>În mod ilegal sau fraudulos</li>
              <li>Pentru a distribui malware sau viruși</li>
              <li>Pentru a colecta date despre alți utilizatori</li>
              <li>Pentru a încălca drepturile de proprietate intelectuală</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Proprietate Intelectuală</h2>
            <p className="text-slate-300 mb-4">
              Tot conținutul de pe GymBro.ro (texte, imagini, logo-uri, programe) 
              este protejat de drepturi de autor și aparține GymBro.ro. 
              Nu puteți copia, distribui sau modifica conținutul fără permisiunea explicită.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. Limitarea Răspunderii</h2>
            <p className="text-slate-300 mb-4">
              GymBro.ro nu este responsabil pentru nicio pierdere sau daună care poate 
              rezulta din utilizarea informațiilor de pe site. Utilizați informațiile pe 
              propria răspundere și consultați profesioniști calificați pentru sfaturi personalizate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">7. Modificări ale Termenilor</h2>
            <p className="text-slate-300 mb-4">
              Ne rezervăm dreptul de a modifica acești termeni în orice moment. 
              Modificările vor fi publicate pe această pagină cu data actualizată. 
              Continuarea utilizării site-ului constituie acceptarea noilor termeni.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">8. Contact</h2>
            <p className="text-slate-300 mb-4">
              Pentru întrebări despre acești termeni, contactați-ne la: contact@gymbro.ro
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
