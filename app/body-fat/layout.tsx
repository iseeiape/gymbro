import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Calculator Grăsime Corporală | Body Fat % Gratuit - GymBro.ro',
  description: 'Calculează-ți procentul de grăsime corporală gratuit cu metoda US Navy. Mai precis decât IMC — află exact câtă grăsime ai și ce înseamnă pentru sănătatea ta.',
  keywords: 'calculator grasime corporala, body fat procent, procent grasime corp, navy method calculator, body fat romania',
  alternates: {
    canonical: 'https://gymbro.ro/body-fat',
  },
  openGraph: {
    title: 'Calculator Grăsime Corporală | GymBro.ro',
    url: 'https://gymbro.ro/body-fat',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cum se calculează procentul de grăsime corporală?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Metoda US Navy folosește circumferința taliei, gâtului și șoldurilor (la femei) împreună cu înălțimea. Formula: Bărbați: 86.010 × log10(talie - gât) - 70.041 × log10(înălțime) + 36.76. Este o metodă accesibilă cu precizie de ±3-4%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce procent de grăsime e normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bărbați: Atletic 6-13%, Fitness 14-17%, Acceptabil 18-24%, Obezitate 25%+. Femei: Esențial 10-13%, Atletic 14-20%, Fitness 21-24%, Acceptabil 25-31%, Obezitate 32%+.',
      },
    },
    {
      '@type': 'Question',
      name: 'Care e diferența dintre IMC și % grăsime corporală?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IMC folosește doar greutatea și înălțimea, ignorând compoziția corpului. Un culturist cu multă masă musculară poate avea IMC ridicat dar % grăsime scăzut. % grăsime corporală e mult mai relevant pentru fitness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cum să scad procentul de grăsime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deficit caloric de 300-500 kcal/zi + antrenament de forță (păstrezi mușchii) + cardio moderat. Pierdere sănătoasă: 0.5-1% grăsime corporală pe lună.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce este grăsimea viscerală?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grăsimea viscerală înconjoară organele interne și e mai periculoasă decât grăsimea subcutanată. O talie >94cm (bărbați) sau >80cm (femei) indică risc crescut cardiovascular.',
      },
    },
  ],
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Calculator Grăsime Corporală GymBro',
  url: 'https://gymbro.ro/body-fat',
  description: 'Calculator gratuit pentru procentul de grăsime corporală folosind metoda US Navy. Determină masa de grăsime, masa slabă și categoria de fitness.',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'RON',
  },
  inLanguage: 'ro-RO',
};

export default function BodyFatLayout({ children }: { children: React.ReactNode }) {
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
