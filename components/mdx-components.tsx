import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import { TLDRBox } from './TLDRBox'

interface MDXComponentsProps {
  children?: ReactNode
}

export const mdxComponents = {
  h1: ({ children }: MDXComponentsProps) => (
    <h1 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-6 leading-tight">{children}</h1>
  ),
  h2: ({ children }: MDXComponentsProps) => (
    <h2 className="text-2xl font-bold text-white mt-10 mb-4 text-blue-400">{children}</h2>
  ),
  h3: ({ children }: MDXComponentsProps) => (
    <h3 className="text-xl font-semibold text-white mt-8 mb-3">{children}</h3>
  ),
  h4: ({ children }: MDXComponentsProps) => (
    <h4 className="text-lg font-semibold text-slate-200 mt-6 mb-2">{children}</h4>
  ),
  p: ({ children }: MDXComponentsProps) => (
    <p className="text-slate-300 leading-relaxed mb-4">{children}</p>
  ),
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <div className="my-6 rounded-xl overflow-hidden">
      <Image 
        src={src || ''} 
        alt={alt || ''} 
        width={800} 
        height={400} 
        className="w-full h-auto object-cover"
      />
      {alt && <p className="text-sm text-slate-500 text-center mt-2 italic">{alt}</p>}
    </div>
  ),
  ul: ({ children }: MDXComponentsProps) => (
    <ul className="list-disc list-inside space-y-2 my-4 text-slate-300 ml-4">{children}</ul>
  ),
  ol: ({ children }: MDXComponentsProps) => (
    <ol className="list-decimal list-inside space-y-2 my-4 text-slate-300 ml-4">{children}</ol>
  ),
  li: ({ children }: MDXComponentsProps) => (
    <li className="leading-relaxed">{children}</li>
  ),
  strong: ({ children }: MDXComponentsProps) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
  em: ({ children }: MDXComponentsProps) => (
    <em className="text-slate-200 italic">{children}</em>
  ),
  blockquote: ({ children }: MDXComponentsProps) => (
    <blockquote className="border-l-4 border-blue-500 pl-6 my-6 text-slate-300 italic bg-white/5 p-4 rounded-r-xl">{children}</blockquote>
  ),
  a: ({ href, children }: { href?: string; children?: ReactNode }) => {
    const isExternal = href?.startsWith('http')
    if (isExternal) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href || '#'} className="text-blue-400 hover:underline"
      >
        {children}
      </Link>
    )
  },
  hr: () => <hr className="border-white/10 my-8" />,
  table: ({ children }: MDXComponentsProps) => (
    <div className="overflow-x-auto my-6 rounded-xl border border-white/10">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: MDXComponentsProps) => (
    <thead className="text-slate-400 border-b border-white/10 bg-white/5">{children}</thead>
  ),
  tbody: ({ children }: MDXComponentsProps) => (
    <tbody className="text-slate-300">{children}</tbody>
  ),
  tr: ({ children }: MDXComponentsProps) => (
    <tr className="border-b border-white/5 last:border-0">{children}</tr>
  ),
  th: ({ children }: MDXComponentsProps) => (
    <th className="text-left py-3 px-4 font-semibold">{children}</th>
  ),
  td: ({ children }: MDXComponentsProps) => (
    <td className="py-3 px-4">{children}</td>
  ),
  code: ({ children }: MDXComponentsProps) => (
    <code className="bg-slate-800/50 px-2 py-1 rounded text-sm font-mono text-blue-400">
      {children}
    </code>
  ),
  pre: ({ children }: MDXComponentsProps) => (
    <pre className="bg-slate-800/50 p-4 rounded-xl overflow-x-auto my-6">{children}</pre>
  ),
  TLDRBox,
}
