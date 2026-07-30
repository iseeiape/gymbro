import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timer Pauze Antrenament | Rest Timer Gratuit - GymBro.ro",
  description:
    "Timer gratuit pentru pauze între seturi la sală. Preset-uri pentru forță, hipertrofie și rezistență. Sunet la final, funcționează pe telefon.",
  keywords:
    "timer pauze sala, rest timer antrenament, timer gym, pauze intre seturi, timer fitness romania",
  alternates: { canonical: "https://gymbro.ro/rest-timer" },
};

export default function RestTimerLayout({
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
            name: "Rest Timer - Timer Pauze Antrenament",
            url: "https://gymbro.ro/rest-timer",
            description:
              "Timer gratuit pentru pauze între seturi la sală. Preset-uri pentru forță, hipertrofie și rezistență.",
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
                name: "Rest Timer",
                item: "https://gymbro.ro/rest-timer",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
