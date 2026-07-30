import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz Suplimente | Ce Suplimente Să Iei - GymBro.ro",
  description:
    "Răspunde la 5 întrebări și primești stack-ul de suplimente personalizat pentru obiectivul tău. Gratuit, bazat pe știință, cu prețuri din România.",
  keywords:
    "ce suplimente sa iau, quiz suplimente fitness, stack suplimente incepator, suplimente recomandate romania",
  alternates: {
    canonical: "https://gymbro.ro/quiz-suplimente",
  },
};

export default function QuizSuplimenteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Ce suplimente ar trebui să ia un începător la sală?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un începător are nevoie de puține suplimente: creatină monohidrat (cel mai mare ROI), proteină whey (dacă nu atingi 1.6g/kg din mâncare) și vitamina D3 (deficiență comună în România). Evită pre-workout și BCAA la acest nivel — nu sunt necesare.",
        },
      },
      {
        "@type": "Question",
        name: "Cât costă un stack de suplimente de bază în România?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un stack minimal eficient costă 80-150 lei/lună: creatină monohidrat (39-55 lei/300g), vitamina D3 (15-25 lei) și opțional whey protein (50-80 lei/kg). Poți fi eficient și cu buget mic dacă prioritizezi corect.",
        },
      },
      {
        "@type": "Question",
        name: "Am nevoie de BCAA dacă mănânc suficiente proteine?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nu. Dacă consumi suficiente proteine (1.6-2.2g/kg corp/zi) din mâncare sau whey protein, BCAA-urile sunt redundante. Sunt un supliment de marketing fără beneficii suplimentare pentru cei cu un aport proteic adecvat.",
        },
      },
      {
        "@type": "Question",
        name: "Creatina este sigură? Are efecte secundare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da, creatina monohidrat este cel mai cercetat supliment de sport — cu peste 700 studii clinice. Este sigură pentru adulți sănătoși. Singurul 'efect secundar' poate fi o creștere de 1-2kg din retenție de apă intramusculară în primele săptămâni, care este normală și benefică.",
        },
      },
    ],
  };

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
