import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog GymBro - Ghiduri Fitness, Nutriție și Antrenament",
  description: "Citește articole despre fitness, nutriție, programe de antrenament și transformare corporală. Ghiduri practice de la experți.",
  openGraph: {
    title: "Blog GymBro - Articole Fitness",
    description: "Ghiduri complete despre fitness, nutriție și transformare corporală",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
