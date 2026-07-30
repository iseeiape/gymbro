import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Generator Program Antrenament Personalizat | GymBro.ro',
  description: 'Generează un program de antrenament personalizat gratuit: Full Body, Upper/Lower sau PPL. Adaptat pentru nivelul tău, echipament și obiectiv. Folosit de 8.200+ utilizatori.',
  keywords: 'program antrenament, antrenament personalizat, full body, upper lower split, PPL, program sala, exercitii forta, fitness romania, program incepatori',
  alternates: {
    canonical: 'https://gymbro.ro/program-antrenament',
  },
  openGraph: {
    title: 'Generator Program Antrenament Personalizat | GymBro.ro',
    description: 'Generează gratuit un program de antrenament adaptat pentru tine: Full Body, Upper/Lower sau PPL.',
    url: 'https://gymbro.ro/program-antrenament',
    siteName: 'GymBro.ro',
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generator Program Antrenament Personalizat | GymBro.ro',
    description: 'Generează gratuit un program de antrenament adaptat pentru tine. 8.200+ utilizatori activi!',
  },
}

export default function ProgramAntrenamentLayout({
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
            name: 'Generator Program Antrenament GymBro',
            url: 'https://gymbro.ro/program-antrenament',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Web',
            inLanguage: 'ro-RO',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'RON',
            },
            description: 'Generator gratuit de programe de antrenament personalizate: Full Body, Upper/Lower, PPL. Adaptat pentru toate nivelurile.',
            featureList: 'Programe Full Body, Upper/Lower Split, PPL, Adaptat nivelului de experiență, Exerciții personalizate',
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
              { '@type': 'ListItem', position: 2, name: 'Program Antrenament', item: 'https://gymbro.ro/program-antrenament' },
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
                name: 'De câte ori pe săptămână ar trebui să merg la sală?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Începătorii: 3x/săptămână (Full Body). Intermediari: 4x/săptămână (Upper/Lower split). Avansați: 5-6x/săptămână (Push/Pull/Legs). Cel mai important e consistența — 3x regulat bate 6x haotic.',
                },
              },
              {
                '@type': 'Question',
                name: 'Ce program de antrenament e bun pentru începători?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pentru începători, programul Full Body 3x/săptămână este ideal. Include exerciții compuse: squat, deadlift, bench press, rowing, overhead press. Durată: 45-60 minute per sesiune. Progresie liniară: crești greutatea cu 2.5kg când faci toate repetările corect.',
                },
              },
              {
                '@type': 'Question',
                name: 'Cum arată un program Push Pull Legs?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'PPL (Push Pull Legs) se împarte în: Push (piept, umeri, triceps), Pull (spate, biceps) și Legs (picioare, fese). Se poate face 3x/săptămână (o rundă) sau 6x/săptămână (două runde). Ideal pentru intermediari cu 6+ luni experiență.',
                },
              },
              {
                '@type': 'Question',
                name: 'Câte seturi și repetări ar trebui să fac?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pentru forță: 3-5 seturi × 1-5 repetări (greutate mare). Pentru hipertrofie (masă musculară): 3-4 seturi × 8-12 repetări. Pentru rezistență: 2-3 seturi × 15-20 repetări. Pauze: 2-3 minute pentru forță, 60-90 secunde pentru hipertrofie.',
                },
              },
              {
                '@type': 'Question',
                name: 'Pot face antrenament acasă fără echipament?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Da! Antrenamentul acasă cu greutatea corpului este eficient pentru începători și intermediari. Exerciții cheie: flotări (variante), tracțiuni (bară), genuflexiuni, fandări, plank. Generatorul nostru creează programe adaptate pentru acasă sau sală.',
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
