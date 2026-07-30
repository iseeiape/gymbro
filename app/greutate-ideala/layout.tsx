import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Calculator Greutate Ideală | Cât Ar Trebui Să Cântăresc - GymBro.ro',
  description: 'Calculează gratuit greutatea ideală pentru înălțimea ta. Formule Devine, Robinson și Miller pentru bărbați și femei.',
  keywords: 'greutate ideala, cat sa cantaresc, greutate normala inaltime, calculator greutate ideala romania',
  alternates: {
    canonical: 'https://gymbro.ro/greutate-ideala',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cum se calculează greutatea ideală?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Greutatea ideală se calculează folosind formule precum Devine, Robinson și Miller, care iau în calcul înălțimea și genul. Cele mai utilizate formule pentru bărbați sunt: Devine: 50 + 2.3 × (înălțime în inch - 60), Robinson: 52 + 1.9 × (înălțime în inch - 60). Pentru femei: Devine: 45.5 + 2.3 × (înălțime în inch - 60).',
      },
    },
    {
      '@type': 'Question',
      name: 'Cât ar trebui să cântăresc la înălțimea mea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Greutatea sănătoasă depinde de înălțime, gen și constituție corporală. Calculatorul nostru folosește 3 formule medicale (Devine, Robinson, Miller) și îți oferă un interval recomandat. De exemplu, un bărbat de 175cm ar trebui să cântărească între 68-76 kg conform acestor formule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Care formulă de greutate ideală este cea mai precisă?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fiecare formulă are avantajele ei. Formula Devine este cea mai veche și mai folosită în medicină. Robinson și Miller sunt ajustări mai recente. Calculatorul GymBro afișează media celor 3 formule pentru un rezultat cât mai echilibrat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Greutatea ideală este aceeași pentru toți la aceeași înălțime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nu. Greutatea ideală variază în funcție de gen, vârstă, constituție osoasă și masa musculară. Formulele oferă un interval orientativ. Persoanele cu constituție atletică pot fi sănătoase și la greutăți mai mari decât intervalul calculat.',
      },
    },
  ],
};

export default function GreutateIdealaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
