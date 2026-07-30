import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function ConfidentialitatePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500/20 text-green-400 mb-4">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Politica de Confidențialitate</h1>
          <p className="text-slate-400">
            Ultima actualizare: 6 Martie 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Informații Generale</h2>
            <p className="text-slate-300 mb-4">
              La GymBro.ro, confidențialitatea dumneavoastră este prioritară. 
              Această politică explică ce date colectăm, cum le folosim și cum le protejăm.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Ce Date Colectăm</h2>
            <p className="text-slate-300 mb-4">
              Colectăm următoarele tipuri de date:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>
                <strong>Date de utilizare</strong>: Informații despre cum utilizați site-ul 
                (pagini vizitate, timp petrecut) prin Google Analytics
              </li>
              <li>
                <strong>Date tehnice</strong>: Adresă IP, tip de browser, dispozitiv folosit
              </li>
              <li>
                <strong>Date voluntare</strong>: Email (doar dacă alegeți să primiți programele pe email)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. Cum Folosim Datele</h2>
            <p className="text-slate-300 mb-4">
              Folosim datele pentru:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Îmbunătățirea funcționalității site-ului</li>
              <li>Analiza traficului și comportamentului utilizatorilor</li>
              <li>Personalizarea conținutului</li>
              <li>Trimiterea programelor generate (la cerere)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Cookie-uri și Tehnologii Similare</h2>
            <p className="text-slate-300 mb-4">
              Folosim cookie-uri pentru a îmbunătăți experiența utilizatorilor. 
              Acestea sunt mici fișiere text stocate pe dispozitivul dumneavoastră. 
              Puteți dezactiva cookie-urile din setările browserului, dar aceasta poate 
              afecta funcționalitatea site-ului.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Google Analytics</h2>
            <p className="text-slate-300 mb-4">
              Folosim Google Analytics pentru a înțelege cum este utilizat site-ul nostru. 
              Google poate colecta informații despre activitatea dumneavoastră pe site. 
              Pentru mai multe informații, consultați{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Politica de Confidențialitate Google
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. Securitatea Datelor</h2>
            <p className="text-slate-300 mb-4">
              Implementăm măsuri de securitate pentru a proteja datele împotriva accesului 
              neautorizat, modificării sau divulgării. Site-ul folosește conexiuni HTTPS 
              criptate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">7. Drepturile Dumneavoastră</h2>
            <p className="text-slate-300 mb-4">
              Aveți dreptul să:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Accesați datele personale pe care le deținem despre dumneavoastră</li>
              <li>Solicitați corectarea datelor incorecte</li>
              <li>Solicitați ștergerea datelor ("dreptul de a fi uitat")</li>
              <li>Vă opuneți procesării datelor</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">8. Modificări ale Politicii</h2>
            <p className="text-slate-300 mb-4">
              Putem actualiza această politică periodic. Modificările vor fi publicate 
              pe această pagină cu data actualizată.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">9. Contact</h2>
            <p className="text-slate-300 mb-4">
              Pentru întrebări despre confidențialitate, contactați-ne la:{' '}
              <a href="mailto:contact@gymbro.ro" className="text-blue-400 hover:underline">contact@gymbro.ro</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
