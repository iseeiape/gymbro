import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Calculator IMC Gratuit | Indice Masă Corporală - GymBro.ro',
  description: 'Calculează-ți gratuit Indicele de Masă Corporală (IMC). Află dacă ești subponderal, normoponderal sau supraponderal și ce înseamnă pentru sănătatea ta.',
  keywords: 'calculator IMC, indice masa corporala, IMC normal, calculator greutate, BMI calculator romania',
  alternates: {
    canonical: 'https://gymbro.ro/imc',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ce este IMC-ul (Indicele de Masă Corporală)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IMC (Indicele de Masă Corporală) sau BMI (Body Mass Index) este o măsurătoare care calculează raportul dintre greutatea corporală și înălțime. Formula este: IMC = greutate (kg) / înălțime² (m). Un IMC normal conform OMS este între 18.5 și 24.9.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce IMC este considerat normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Conform Organizației Mondiale a Sănătății (OMS), un IMC normal este între 18.5 și 24.9. Sub 18.5 ești subponderal, între 25-29.9 ești supraponderal, iar peste 30 se consideră obezitate.',
      },
    },
    {
      '@type': 'Question',
      name: 'IMC-ul este același pentru bărbați și femei?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Formula IMC este aceeași pentru ambele sexe, dar interpretarea poate diferi ușor. Femeile au în mod natural un procent mai mare de grăsime corporală decât bărbații. De aceea, unii medici recomandă interpretarea IMC-ului împreună cu alte măsurători precum circumferința taliei.',
      },
    },
    {
      '@type': 'Question',
      name: 'Care sunt limitele calculatorului IMC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IMC-ul nu face diferența între masă musculară și grăsime. Un sportiv cu multă masă musculară poate avea un IMC crescut fără a fi supraponderal. IMC-ul este un instrument de screening, nu de diagnostic. Consultați un medic pentru o evaluare completă.',
      },
    },
  ],
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculator IMC GymBro',
  url: 'https://gymbro.ro/imc',
  description: 'Calculator gratuit pentru Indicele de Masă Corporală (IMC/BMI). Află categoria ta de greutate și greutatea ideală.',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'RON',
  },
  inLanguage: 'ro-RO',
};

export default function ImcLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      {children}
    </>
  );
}
