import type { Metadata } from 'next'
import { dietPages } from '../data'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = dietPages.find(p => p.slug === params.slug)
  if (!page) return { title: 'Diete | GymBro.ro' }
  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: `https://gymbro.ro/diete/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `https://gymbro.ro/diete/${page.slug}`,
    },
  }
}

export async function generateStaticParams() {
  return dietPages.map(p => ({ slug: p.slug }))
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
