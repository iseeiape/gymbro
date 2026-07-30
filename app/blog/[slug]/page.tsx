import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllSlugs, getPostBySlug } from '@/lib/mdx'
import { mdxComponents } from '@/components/mdx-components'
import { Dumbbell, Utensils, Flame, Calendar, Clock, ArrowRight } from 'lucide-react'
import EmailCapture from '@/app/components/EmailCapture'

export function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Articol negăsit | GymBro',
    }
  }

  return {
    title: `${post.title} | GymBro Blog`,
    description: post.metaDescription,
    keywords: post.tags.join(', '),
    alternates: {
      canonical: `https://gymbro.ro/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  console.log('Rendering article page for slug:', slug)
  const post = getPostBySlug(slug)
  console.log('Post found:', post ? 'YES' : 'NO')

  if (!post) {
    console.log('Post not found, returning 404')
    notFound()
  }

  const relatedPosts = getAllSlugs()
    .filter((slug) => slug !== post.slug)
    .slice(0, 3)
    .map((slug) => getPostBySlug(slug))
    .filter(Boolean)

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('ro-RO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const categoryConfig: Record<string, { color: string; icon: React.ReactNode; label: string }> = {
    nutritie: {
      color: 'bg-green-500/20 text-green-400 border-green-500/30',
      icon: <Utensils className="h-5 w-5" />,
      label: 'NUTRIȚIE',
    },
    antrenament: {
      color: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      icon: <Dumbbell className="h-5 w-5" />,
      label: 'ANTRENAMENT',
    },
    'meal-prep': {
      color: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      icon: <Flame className="h-5 w-5" />,
      label: 'MEAL PREP',
    },
  }

  const config = categoryConfig[post.category] || categoryConfig.antrenament

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* JSON-LD Schema - BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.metaDescription,
            image: `https://gymbro.ro${post.coverImage}`,
            keywords: post.tags.join(', '),
            wordCount: post.readingTime * 200,
            articleSection: post.category,
            inLanguage: 'ro-RO',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['.article-headline', '.article-summary', 'h2', 'h3'],
            },
            author: {
              '@type': 'Organization',
              name: 'Echipa GymBro',
              url: 'https://gymbro.ro/despre',
              logo: {
                '@type': 'ImageObject',
                url: 'https://gymbro.ro/logo.png',
              },
              knowsAbout: ['fitness', 'nutriție', 'antrenament', 'calculul caloriilor'],
            },
            publisher: {
              '@type': 'Organization',
              name: 'GymBro.ro',
              logo: {
                '@type': 'ImageObject',
                url: 'https://gymbro.ro/logo.png',
              },
            },
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://gymbro.ro/blog/${post.slug}`,
            },
          }),
        }}
      />

      {/* JSON-LD Schema - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gymbro.ro' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://gymbro.ro/blog' },
              { '@type': 'ListItem', position: 3, name: post.title, item: `https://gymbro.ro/blog/${post.slug}` },
            ],
          }),
        }}
      />

      {/* JSON-LD Schema - HowTo (conditional) */}
      {(post.category === 'antrenament' || post.category === 'nutritie') &&
        (post.title.toLowerCase().includes('cum') ||
          post.title.toLowerCase().includes('ghid') ||
          post.title.toLowerCase().includes('pas')) && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'HowTo',
                name: post.title,
                description: post.metaDescription,
                inLanguage: 'ro-RO',
                totalTime: `PT${post.readingTime}M`,
                step: [
                  {
                    '@type': 'HowToStep',
                    position: 1,
                    name: 'Citește ghidul complet',
                    text: post.excerpt,
                    url: `https://gymbro.ro/blog/${post.slug}`,
                  },
                ],
              }),
            }}
          />
        )}

      {/* Header */}
      <header className="border-b border-white/10 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs">{post.title}</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className={`w-full h-48 md:h-72 bg-gradient-to-br flex items-center justify-center ${config.color.split(' ')[0].replace('/20', '/30')}`}>
          <div className="text-center p-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${config.color}`}>
              {config.icon}
            </div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${config.color}`}>
              {config.label}
            </span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-8 -mt-16 relative z-10">
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 p-6 md:p-10 shadow-2xl">
          {/* Article Header */}
          <div className="mb-8 text-center">
            <h1 className="article-headline text-2xl md:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> {formattedDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> {post.readingTime} min citire
              </span>
            </div>
            {post.excerpt && (
              <p className="article-summary mt-4 text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
                {post.excerpt}
              </p>
            )}
          </div>

          {/* MDX Content */}
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* CTA Banner */}
          <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 text-center">
            <h3 className="text-xl font-bold mb-2">Pune în practică ce-ai învățat</h3>
            <p className="text-slate-400 mb-6">
              Folosește tool-urile GymBro pentru a-ți atinge obiectivele mai rapid.
            </p>
            <Link
              href={post.ctaLink}
              className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {post.ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Email Capture */}
        <div className="mt-12 mb-8 max-w-2xl mx-auto">
          <EmailCapture variant="inline" />
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-blue-500 rounded-full"></span>
              Articole similare
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedPosts.map((related) => {
                if (!related) return null
                const relatedConfig = categoryConfig[related.category] || categoryConfig.antrenament
                return (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <span className={`text-xs px-2 py-1 rounded-full ${relatedConfig.color}`}>
                      {relatedConfig.label}
                    </span>
                    <h4 className="font-semibold mt-2 line-clamp-2">{related.title}</h4>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
