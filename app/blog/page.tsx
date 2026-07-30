import Link from 'next/link'
import { getAllPosts, getFeaturedPosts } from '@/lib/mdx'
import { Dumbbell, Utensils, Flame, Search } from 'lucide-react'

export default function BlogPage() {
  const posts = getAllPosts()
  const featuredPosts = getFeaturedPosts()
  const regularPosts = posts.filter(p => !p.featured)

  const categoryColors: Record<string, { bg: string; text: string; icon: React.ReactNode }> = {
    nutritie: { 
      bg: 'bg-green-500/20', 
      text: 'text-green-400',
      icon: <Utensils className="h-4 w-4" /> 
    },
    antrenament: { 
      bg: 'bg-purple-500/20', 
      text: 'text-purple-400',
      icon: <Dumbbell className="h-4 w-4" /> 
    },
    'meal-prep': { 
      bg: 'bg-orange-500/20', 
      text: 'text-orange-400',
      icon: <Flame className="h-4 w-4" /> 
    },
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="w-full h-64 md:h-80 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 text-4xl mb-6">
              📚
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog GymBro</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ghiduri complete despre fitness, nutriție și transformare corporală
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
              Articole Recomandate
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => {
                const colors = categoryColors[post.category] || categoryColors.antrenament
                const formattedDate = new Date(post.publishedAt).toLocaleDateString('ro-RO', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-blue-500/30 transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative p-8">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text} mb-4`}>
                        {colors.icon}
                        {post.category.toUpperCase()}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-400 mb-4 line-clamp-2">{post.excerpt}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>{formattedDate}</span>
                        <span>•</span>
                        <span>{post.readingTime} min citire</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
            Toate Articolele
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => {
              const colors = categoryColors[post.category] || categoryColors.antrenament
              const formattedDate = new Date(post.publishedAt).toLocaleDateString('ro-RO', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-blue-500/30 transition-all"
                >
                  <div className="p-6">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} mb-4`}>
                      {colors.icon}
                      {post.category.toUpperCase()}
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{formattedDate}</span>
                      <span>{post.readingTime} min</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl border border-blue-500/30 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Începe Transformarea Acum</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Folosește tool-urile GymBro pentru a-ți atinge obiectivele mai rapid. Calculator calorii, programe de antrenament și meal prep.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center px-8 py-4 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 transition-all"
          >
            Calculează-ți Caloriile →
          </Link>
        </div>
      </div>
    </div>
  )
}
