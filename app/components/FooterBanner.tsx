"use client"
import { useEffect, useState } from 'react'
import EmailCapture from './EmailCapture'

export default function FooterBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('emailCaptured')) {
      setShow(true)
    }
  }, [])

  if (!show) return null

  return (
    <div className="w-full bg-slate-900 border-t border-white/10">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <EmailCapture variant="banner" onClose={() => setShow(false)} />
      </div>
    </div>
  )
}
