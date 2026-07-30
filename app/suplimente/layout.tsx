import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cele Mai Ieftine Suplimente Fitness din România | GymBro.ro',
  description: 'Compară prețurile suplimentelor fitness din România. Proteină, creatină, BCAA, omega-3 — găsește cel mai mic preț de la Myprotein, eMAG, Olimp, iHerb și altele.',
  keywords: 'suplimente ieftine romania, proteina ieftina, creatina pret, comparator suplimente, myprotein romania, emag suplimente fitness',
  alternates: { canonical: 'https://gymbro.ro/suplimente' },
  openGraph: {
    title: 'Cele Mai Ieftine Suplimente Fitness din România',
    description: 'Compară prețuri de la Myprotein, eMAG, Olimp, iHerb și mai multe.',
    url: 'https://gymbro.ro/suplimente',
    type: 'website',
  },
}

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'GymBro Comparator Suplimente',
  description: 'Compară prețurile suplimentelor fitness din România',
  url: 'https://gymbro.ro/suplimente',
  applicationCategory: 'ShoppingApplication',
  operatingSystem: 'Web',
  inLanguage: 'ro-RO',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'RON',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Unde este cel mai ieftin să cumpăr proteină în România?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prețurile variază între magazine. Myprotein RO are des reduceri de 30-50%, eMAG oferă cashback, iar Olimp are produse locale la prețuri competitive. Folosește comparatorul GymBro pentru prețul de azi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Care este cea mai bună proteină whey din România?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cele mai populare și raport calitate/preț bun: Myprotein Impact Whey, Optimum Nutrition Gold Standard, Olimp Whey Protein Complex. Alege în funcție de buget și obiectiv.',
      },
    },
    {
      '@type': 'Question',
      name: 'Merită să cumpăr creatină?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da. Creatina monohidrat este unul dintre cele mai studiate suplimente — crește forța și masa musculară. Este și ieftină: 5g/zi, 1kg ajunge pentru ~200 zile.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce suplimente sunt esențiale pentru începători?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stack esențial: 1) Proteină whey (dacă nu atingi necesarul din mâncare) 2) Creatină monohidrat 3) Omega-3 4) Vitamina D3. Restul sunt opționale.',
      },
    },
    {
      '@type': 'Question',
      name: 'iHerb livrează în România?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, iHerb livrează în România. Prețurile sunt în USD dar incluse taxele vamale. Avantaj: produse americane greu de găsit local.',
      },
    },
  ],
}

export default function SuplimenteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
