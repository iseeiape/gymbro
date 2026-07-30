import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Calculator 1RM | One Rep Max Gratuit - GymBro.ro',
  description: 'Calculează-ți maximul pe o repetare (1RM) pentru orice exercițiu. Formule Epley, Brzycki și Lander pentru rezultate precise.',
  keywords: 'calculator 1rm, one rep max, maxim o repetare, calculator forta, 1RM formula romania',
  alternates: {
    canonical: 'https://gymbro.ro/calculator-1rm',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ce este 1RM (One Rep Max)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1RM (One Rep Maximum) este greutatea maximă pe care o poți ridica o singură dată cu formă corectă la un exercițiu. Este standardul de referință în antrenamentul de forță și se folosește pentru a stabili intensitatea antrenamentelor (% din 1RM).',
      },
    },
    {
      '@type': 'Question',
      name: 'Cum calculez 1RM fără să testez direct?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Poți estima 1RM ridicând o greutate submaximalǎ de mai multe repetări. Formula Epley: 1RM = greutate × (1 + reps/30). Formula Brzycki: 1RM = greutate × 36 / (37 - reps). Formula Lander: 1RM = (100 × greutate) / (101.3 - 2.67123 × reps).',
      },
    },
    {
      '@type': 'Question',
      name: 'Care formulă de 1RM este cea mai precisă?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Epley este cel mai popular și funcționează bine pentru repetări puține (1-10). Brzycki este precisă pentru 2-10 repetări. Lander funcționează bine pentru un spectru larg. Media celor 3 oferă de obicei cel mai bun rezultat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cum folosesc 1RM în antrenament?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Odată ce știi 1RM-ul, îl folosești ca referință: 50-60% pentru încălzire și volum mare, 70-80% pentru hipertrofie (6-12 rep), 85-95% pentru forță maximă (1-5 rep), 95-100% pentru testare maximă. Calculatorul GymBro îți afișează automat aceste procente.',
      },
    },
    {
      '@type': 'Question',
      name: 'La câte repetări este cel mai precis calculatorul 1RM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Formulele de estimare 1RM sunt cel mai precise pentru 2-8 repetări. La mai mult de 10 repetări, precizia scade deoarece rezistența și tehnica devin factori importanți. Recomandat: testează cu o greutate cu care poți face 3-8 repetări curate.',
      },
    },
  ],
};

export default function Calculator1rmLayout({ children }: { children: React.ReactNode }) {
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
