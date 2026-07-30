import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plan Alimentar 7 Zile Gratuit | GymBro.ro',
  description: 'Plan alimentar complet pentru slăbit sau masă musculară. Mâncare românească, calorii calculate, meal prep inclus. Descarcă gratuit PDF.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
