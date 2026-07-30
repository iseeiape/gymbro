import type { Metadata } from 'next'
import { exercisePages } from '../data'

type Props = {
  params: Promise<{ slug: string }>
  children: React.ReactNode
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = exercisePages.find(p => p.slug === slug)
  if (!page) return { title: 'Exercitii | GymBro.ro' }

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: `https://gymbro.ro/exercitii/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `https://gymbro.ro/exercitii/${page.slug}`,
    },
  }
}

export async function generateStaticParams() {
  return exercisePages.map(p => ({ slug: p.slug }))
}

export default function Layout({ children }: Props) {
  return <>{children}</>
}
