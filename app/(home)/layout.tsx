import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GymBro.ro - Cea mai completă platformă de fitness din România | Calculator Calorii, Programe, Meal Prep",
  description: "Transformă-ți corpul cu GymBro.ro. Calculator calorii gratuit, programe de antrenament personalizate, meal prep și tracking progres. Tot ce ai nevoie pentru fitness într-un singur loc.",
  keywords: "calculator calorii, program antrenament, meal prep, fitness romania, slabit, masa musculara, nutritie, gym, sala",
  openGraph: {
    title: "GymBro.ro - Cea mai completă platformă de fitness din România",
    description: "Calculator calorii, programe personalizate și meal prep. Transformă-ți corpul astăzi! 💪",
    type: "website",
    url: "https://gymbro.ro",
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
    title: "GymBro.ro - Cea mai completă platformă de fitness din România",
    description: "Calculator calorii, programe personalizate și meal prep. Transformă-ți corpul! 💪",
    images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop"],
  },
  alternates: {
    canonical: "https://gymbro.ro",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
