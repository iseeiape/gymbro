import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculator Hidratare | Câtă Apă Să Bei Pe Zi - GymBro.ro",
  description:
    "Calculează câtă apă ai nevoie pe zi în funcție de greutate, activitate fizică și temperatură. Recomandări personalizate pentru sportivi.",
  keywords:
    "calculator apa, cat apa sa bei, hidratare sportivi, necesarul de apa zilnic, apa pe zi romania",
  alternates: { canonical: "https://gymbro.ro/calculator-apa" },
};

export default function CalculatorApaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Calculator Hidratare - Câtă Apă Să Bei Pe Zi",
            url: "https://gymbro.ro/calculator-apa",
            description:
              "Calculează câtă apă ai nevoie pe zi în funcție de greutate, activitate fizică și temperatură.",
            applicationCategory: "HealthApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "RON",
            },
            inLanguage: "ro-RO",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Câtă apă ar trebui să bei pe zi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Necesarul de apă variază în funcție de greutate, activitate fizică și temperatură. Formula de bază este 33ml per kg de greutate corporală, ajustată în funcție de activitate și climat. Un adult mediu de 70kg are nevoie de aproximativ 2.3L/zi.",
                },
              },
              {
                "@type": "Question",
                name: "Câtă apă trebuie să bea un sportiv pe zi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sportivii activi (5+ antrenamente/săptămână) au nevoie cu 0.9-1.2L mai mult față de media. Bea 500ml cu 2h înainte de antrenament, 200ml la fiecare 20 minute în timpul și 500ml după antrenament pentru rehidratare optimă.",
                },
              },
              {
                "@type": "Question",
                name: "Care sunt semnele de deshidratare?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Semnele de deshidratare includ: sete, urină de culoare închisă (galben întunecat), oboseală, dureri de cap, scăderea performanței fizice și cognitive, gură uscată și amețeli. Deshidratarea de 2% reduce performanța fizică cu până la 20%.",
                },
              },
              {
                "@type": "Question",
                name: "Contează și apa din alimente?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Da, aproximativ 20-30% din necesarul zilnic de apă provine din alimente. Fructele și legumele sunt surse excelente (90-95% apă). Calculatorul GymBro indică necesarul total, inclusiv apa din alimente.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Acasă",
                item: "https://gymbro.ro",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Calculator Hidratare",
                item: "https://gymbro.ro/calculator-apa",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
