import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  metaDescription: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
  updatedAt: string
  readingTime: number
  coverImage: string
  excerpt: string
  content: string
  ctaText: string
  ctaLink: string
  featured: boolean
  tldr?: string[]
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || 'Untitled',
        metaDescription: data.metaDescription || data.description || '',
        category: data.category || 'antrenament',
        tags: data.tags || [],
        author: data.author || 'Echipa GymBro',
        publishedAt: data.publishedAt || data.date || new Date().toISOString().split('T')[0],
        updatedAt: data.updatedAt || data.publishedAt || data.date || new Date().toISOString().split('T')[0],
        readingTime: data.readingTime || Math.ceil(content.split(' ').length / 200),
        coverImage: data.coverImage || '/blog/images/default.jpg',
        excerpt: data.excerpt || '',
        content,
        ctaText: data.ctaText || 'Află mai multe',
        ctaLink: data.ctaLink || '/',
        featured: data.featured || false,
        tldr: data.tldr,
      }
    })

  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    let fullPath = path.join(postsDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(postsDirectory, `${slug}.md`)
    }
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || 'Untitled',
      metaDescription: data.metaDescription || data.description || '',
      category: data.category || 'antrenament',
      tags: data.tags || [],
      author: data.author || 'Echipa GymBro',
      publishedAt: data.publishedAt || data.date || new Date().toISOString().split('T')[0],
      updatedAt: data.updatedAt || data.publishedAt || data.date || new Date().toISOString().split('T')[0],
      readingTime: data.readingTime || Math.ceil(content.split(' ').length / 200),
      coverImage: data.coverImage || '/blog/images/default.jpg',
      excerpt: data.excerpt || '',
      content,
      ctaText: data.ctaText || 'Află mai multe',
      ctaLink: data.ctaLink || '/',
      featured: data.featured || false,
      tldr: data.tldr,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.mdx?$/, ''))
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category)
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured)
}
