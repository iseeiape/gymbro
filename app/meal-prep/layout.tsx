import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meal Prep Planner Gratuit | Plan Alimentar Săptămânal - GymBro.ro',
  description: 'Creează-ți planul alimentar săptămânal gratuit cu liste de cumpărături și buget calculat în lei. Adaptat pentru supermarketurile din România (Lidl, Kaufland, Carrefour). 5.100+ utilizatori.',
  keywords: 'meal prep, plan alimentar, dieta saptamanala, lista cumparaturi, buget mancare, nutritie romania, meal planning, pregatire mancare, dieta sanatoasa',
  alternates: {
    canonical: 'https://gymbro.ro/meal-prep',
  },
  openGraph: {
    title: 'Meal Prep Planner Gratuit | Plan Alimentar Săptămânal - GymBro.ro',
    description: 'Plan alimentar săptămânal gratuit cu liste de cumpărături și buget calculat în lei.',
    url: 'https://gymbro.ro/meal-prep',
    siteName: 'GymBro.ro',
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meal Prep Planner Gratuit | Plan Alimentar Săptămânal - GymBro.ro',
    description: 'Plan alimentar săptămânal cu liste de cumpărături și buget. 5.100+ utilizatori activi!',
  },
}

export default function MealPrepLayout({
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
            name: 'Meal Prep Planner GymBro',
            url: 'https://gymbro.ro/meal-prep',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Web',
            inLanguage: 'ro-RO',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'RON',
            },
            description: 'Planner gratuit pentru meal prep săptămânal cu liste de cumpărături și buget calculat în lei. Adaptat pentru produse din supermarketurile românești.',
            featureList: 'Plan alimentar 7 zile, Liste cumpărături, Calculator buget, Adaptat obiectivului caloric, Produse România',
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
              { '@type': 'ListItem', position: 2, name: 'Meal Prep Planner', item: 'https://gymbro.ro/meal-prep' },
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
                name: 'Ce este meal prep și cum să îl fac?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Meal prep înseamnă pregătirea meselor în avans, de obicei duminica pentru toată săptămâna. Pași: 1) Planifică meniurile 2) Fă lista de cumpărături 3) Gătește în bulk (orez, pui, legume) 4) Porționează în recipiente 5) Depozitează la frigider 3-5 zile sau congelator.',
                },
              },
              {
                '@type': 'Question',
                name: 'Cât timp ține mâncarea pregătită la frigider?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Preparatele gătite se păstrează la frigider (4°C) astfel: carne gătită 3-4 zile, orez/paste fierte 4-5 zile, legume gătite 3-5 zile, salate (fără dressing) 3-4 zile. La congelator: 2-3 luni pentru majoritatea preparatelor.',
                },
              },
              {
                '@type': 'Question',
                name: 'Cum fac meal prep ieftin în România?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Surse proteice ieftine din România: piept de pui Lidl/Kaufland (~15 lei/kg), ouă (8-10 lei/10 buc), ton la conservă (~5 lei), fasole/linte (~4 lei/kg). Carbohidrați: orez (5-8 lei/kg), paste (4-6 lei), cartofi dulci (~7 lei/kg). Un meal prep săptămânal complet costă 100-150 lei.',
                },
              },
              {
                '@type': 'Question',
                name: 'Ce recipiente folosesc pentru meal prep?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Recipiente recomandate: containere glass cu capac (BPA-free, microwave safe) sau plastic alimentar de calitate. Dimensiuni utile: 750ml pentru mese principale, 350ml pentru snack-uri. Investiție inițială: 50-100 lei pentru un set complet.',
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
