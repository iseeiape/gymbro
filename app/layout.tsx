import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientHeader from "./components/ClientHeader";
import { GymBroChat } from "./components/GymBroChat";
import FooterBanner from "./components/FooterBanner";
import ExitIntentPopup from "./components/ExitIntentPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gymbro.ro'),
  title: "GymBro.ro - Platforma de Fitness All-in-One din România 🇷🇴",
  description: "Calculator calorii gratuit, programe de antrenament personalizate și meal prep în lei. Totul gratuit, fără cont. Creat pentru România.",
  keywords: "calculator calorii, program antrenament, meal prep, fitness romania, slabit, masa musculara, nutritie, gym, sala, BMR, TDEE, macronutrienti",
  authors: [{ name: "GymBro" }],
  creator: "GymBro",
  publisher: "GymBro",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://gymbro.ro",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://gymbro.ro",
    siteName: "GymBro.ro",
    title: "GymBro.ro - Platforma de Fitness All-in-One din România",
    description: "Calculator calorii gratuit, programe personalizate și meal prep în lei. Totul gratuit, fără cont. Creat pentru România. 💪",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "GymBro - Platforma Fitness România",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gymbro_ro",
    creator: "@gymbro_ro",
    title: "GymBro.ro - Platforma de Fitness All-in-One din România",
    description: "Calculator calorii gratuit, programe personalizate și meal prep. Creat pentru România. 💪",
    images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <meta name="google-site-verification" content="KAW2BhYs1OE4vBXi2oJZlZD5wV2nS680F1OZfPdwhek" />
        <meta name="msvalidate.01" content="6344903EC8E96B412B093C98F3AEAF3A" />
        {/* Schema.org Global */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "GymBro.ro",
              "url": "https://gymbro.ro",
              "description": "Calculator calorii gratuit și programe de antrenament personalizate pentru România.",
              "inLanguage": "ro-RO",
              "publisher": {
                "@type": "Organization",
                "name": "GymBro",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://gymbro.ro/logo.png"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://gymbro.ro/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />

        {/* Schema.org Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GymBro.ro",
              "url": "https://gymbro.ro",
              "logo": "https://gymbro.ro/logo.png",
              "description": "Calculator calorii gratuit online. Programe de antrenament și meal prep pentru România.",
              "foundingDate": "2026",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "RO"
              },
              "sameAs": [
                "https://instagram.com/gymbro.ro",
                "https://tiktok.com/@gymbro.ro",
                "https://youtube.com/@gymbro"
              ]
            }),
          }}
        />

        {/* Schema.org SoftwareApplication - Calculator */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Calculator Calorii GymBro",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "RON"
              },
              "description": "Calculator gratuit BMR, TDEE și macronutrienți pentru slăbire, menținere sau masă musculară. Adaptat pentru utilizatori din România.",
              "featureList": "Calcul BMR, Calcul TDEE, Distribuție macronutrienți, Recomandări personalizate",
              "softwareVersion": "1.0",
              "availableOnDevice": "Desktop, Mobile, Tablet"
            }),
          }}
        />

        {/* Schema.org FAQPage Global */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Ce este TDEE și cum se calculează?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TDEE (Total Daily Energy Expenditure) reprezintă totalul de calorii arse într-o zi, incluzând metabolismul bazal și activitatea fizică. Se calculează înmulțind BMR-ul cu factorul de activitate fizică (1.2 sedentar, 1.375 ușor activ, 1.55 moderat activ, 1.725 foarte activ, 1.9 extrem de activ)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Cum funcționează calculatorul de calorii GymBro?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Calculatorul GymBro folosește formula Mifflin-St Jeor pentru a calcula BMR-ul (metabolismul bazal), apoi aplică factorul de activitate pentru a obține TDEE-ul. Pe baza obiectivului ales (slăbire, menținere, masă), calculează surplusul sau deficitul caloric optim și distribuția de macronutrienți (proteine, carbohidrați, grăsimi)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Câte proteine am nevoie pe zi pentru masă musculară?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pentru creșterea masei musculare, ai nevoie de 1.6-2.2 grame de proteină per kilogram de greutate corporală. De exemplu, o persoană de 75kg are nevoie de 120-165g de proteine zilnic. Calculatorul GymBro îți oferă valoarea exactă bazată pe datele tale personale."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Este GymBro.ro gratuit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Da, toate tool-urile GymBro.ro sunt 100% gratuite: calculator calorii, generator program antrenament, meal prep planner și tracker progres. Nu necesită card, nu există abonamente ascunse. Platforma este susținută prin parteneriate și donații volontare."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Cum fac un program de antrenament pentru începători?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pentru începători, recomandăm un program Full Body de 3 zile pe săptămână, cu exerciții compuse (genuflexiuni, împins la piept, îndreptări, tracțiuni). Generatorul GymBro creează automat un program personalizat bazat pe nivelul tău de experiență, obiectiv și echipament disponibil."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Cum fac meal prep săptămânal în România?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Meal prep în România este accesibil și economic. Cu GymBro.ro, introduci caloriile zilnice, obiectivul și bugetul în lei, iar generatorul îți creează un plan alimentar complet pentru 7 zile cu rețete adaptate produselor din supermarketurile românești (Lidl, Kaufland, Carrefour, Mega Image)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ce este BMR și de ce este important?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BMR (Basal Metabolic Rate) este numărul de calorii pe care corpul tău le arde în repaus complet pentru funcțiile vitale (respirație, circulație, temperatură). Reprezintă 60-75% din totalul caloriilor zilnice și este fundamentul pentru calcularea necesarului caloric personalizat."
                  }
                }
              ]
            }),
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WMLW27K2BC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WMLW27K2BC');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950`}
      >
        <ClientHeader />
        {children}
        <FooterBanner />
        <ExitIntentPopup />
        <GymBroChat />
      </body>
    </html>
  );
}
