import type { Metadata } from 'next'
import { alimentPages } from '../data'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = alimentPages.find(p => p.slug === params.slug)
  if (!page) return { title: 'Alimente | GymBro.ro' }
  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: `https://gymbro.ro/alimente/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `https://gymbro.ro/alimente/${page.slug}`,
    },
  }
}

export async function generateStaticParams() {
  return alimentPages.map(p => ({ slug: p.slug }))
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
