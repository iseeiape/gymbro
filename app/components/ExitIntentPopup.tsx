"use client"
import { useEffect, useState } from 'react'
import EmailCapture from './EmailCapture'

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('emailCaptured')) return
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setShow(true)
    }
    
    let lastScroll = window.scrollY
    const handleScroll = () => {
      const current = window.scrollY
      if (lastScroll - current > 100 && current < 200) setShow(true)
      lastScroll = current
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md">
        <EmailCapture variant="popup" onClose={() => setShow(false)} />
      </div>
    </div>
  )
}
