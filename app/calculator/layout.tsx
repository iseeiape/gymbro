import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculator Calorii Gratuit | BMR, TDEE, Macros - GymBro.ro',
  description: 'Calculează-ți BMR, TDEE și macronutrienții (proteine, carbohidrați, grăsimi) gratuit. Adaptat pentru slăbire, menținere și masă musculară. Folosit de 12.500+ utilizatori din România.',
  keywords: 'calculator calorii, BMR calculator, TDEE calculator, macronutrienti, calorii zilnice, slabire, masa musculara, nutritie, fitness romania',
  alternates: {
    canonical: 'https://gymbro.ro/calculator',
  },
  openGraph: {
    title: 'Calculator Calorii Gratuit | BMR, TDEE, Macros - GymBro.ro',
    description: 'Calculează-ți BMR, TDEE și macronutrienții gratuit. Adaptat pentru obiectivul tău fitness.',
    url: 'https://gymbro.ro/calculator',
    siteName: 'GymBro.ro',
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculator Calorii Gratuit | BMR, TDEE, Macros - GymBro.ro',
    description: 'Calculează-ți BMR, TDEE și macronutrienții gratuit. 12.500+ utilizatori activi!',
  },
}

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Calculator Calorii GymBro',
            url: 'https://gymbro.ro/calculator',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Web',
            inLanguage: 'ro-RO',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'RON',
            },
            description: 'Calculator gratuit BMR, TDEE și macronutrienți. Adaptat pentru utilizatori din România.',
            featureList: 'Calcul BMR, Calcul TDEE, Distribuție macronutrienți, Recomandări personalizate',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gymbro.ro' },
              { '@type': 'ListItem', position: 2, name: 'Calculator Calorii', item: 'https://gymbro.ro/calculator' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Cum calculez câte calorii am nevoie pe zi?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Caloriile zilnice se calculează folosind formula BMR (Mifflin-St Jeor) înmulțită cu factorul de activitate (TDEE). Pentru bărbați: BMR = 10 × greutate(kg) + 6.25 × înălțime(cm) - 5 × vârstă + 5. Calculatorul nostru gratuit face asta automat în 30 de secunde.',
                },
              },
              {
                '@type': 'Question',
                name: 'Ce este TDEE și cum îl calculez?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'TDEE (Total Daily Energy Expenditure) reprezintă totalul caloriilor arse într-o zi, incluzând activitatea fizică. Se calculează: TDEE = BMR × factor activitate (1.2 sedentar, 1.375 activ ușor, 1.55 moderat activ, 1.725 foarte activ, 1.9 extrem de activ).',
                },
              },
              {
                '@type': 'Question',
                name: 'Câte calorii să mănânc ca să slăbesc?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pentru slăbit sănătos, creează un deficit de 300-500 kcal față de TDEE-ul tău. Exemplu: dacă TDEE-ul tău e 2500 kcal, mănâncă 2000-2200 kcal/zi. Evită deficitele mai mari de 500 kcal ca să nu pierzi masă musculară.',
                },
              },
              {
                '@type': 'Question',
                name: 'Care sunt macronutrienții și cum îi împart?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Macronutrienții sunt proteine, carbohidrați și grăsimi. Distribuție recomandată pentru fitness: 30-35% proteine (2g/kg corp), 35-40% carbohidrați, 25-30% grăsimi. Calculatorul nostru îți calculează automat macros în funcție de obiectiv.',
                },
              },
              {
                '@type': 'Question',
                name: 'Câtă proteină am nevoie pe zi?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pentru creștere musculară: 1.6-2.2g proteină per kg corp/zi. Pentru slăbit: 2-2.5g/kg ca să păstrezi masa musculară. Exemplu: o persoană de 80kg care face sport are nevoie de 128-176g proteină/zi.',
                },
              },
              {
                '@type': 'Question',
                name: 'Este gratuit calculatorul de calorii GymBro?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Da, calculatorul de calorii GymBro.ro este 100% gratuit. Calculează BMR, TDEE și macronutrienți personalizat fără cont sau abonament.',
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
