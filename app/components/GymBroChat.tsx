"use client"

import { useState, useRef, useEffect } from 'react'
import { X, Send, Bot, User, Sparkles, RefreshCw } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME_MESSAGE: Message = {
  role: 'assistant',
  content: 'Salut! 💪 Sunt GymBro AI, asistentul tău fitness. Poți să mă întrebi orice despre antrenament, nutriție sau suplimente. Ce vrei să știi?',
}

const SUGGESTIONS = [
  'Câte calorii am nevoie să slăbesc?',
  'Ce suplimente să iau ca începător?',
  'Cum calculez proteinele necesare?',
  'PPL sau Full Body pentru masă?',
]

const MAX_FREE_MESSAGES = 5

export function GymBroChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [messageCount, setMessageCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Load message count from localStorage
    const saved = localStorage.getItem('gymbro-chat-count')
    if (saved) setMessageCount(parseInt(saved, 10))
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const sendMessage = async (text?: string) => {
    const messageText = text || input.trim()
    if (!messageText || isLoading) return
    if (messageCount >= MAX_FREE_MESSAGES) return

    const newMessage: Message = { role: 'user', content: messageText }
    const updatedMessages = [...messages, newMessage]
    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    const newCount = messageCount + 1
    setMessageCount(newCount)
    localStorage.setItem('gymbro-chat-count', newCount.toString())

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      })

      if (!response.ok) throw new Error('API error')
      const data = await response.json()

      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Îmi pare rău, a apărut o eroare. Încearcă din nou! 🙏',
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const resetChat = () => {
    setMessages([WELCOME_MESSAGE])
    setMessageCount(0)
    localStorage.removeItem('gymbro-chat-count')
  }

  const remaining = MAX_FREE_MESSAGES - messageCount
  const isLimitReached = messageCount >= MAX_FREE_MESSAGES

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Deschide GymBro AI Chat"
      >
        <Bot className="h-5 w-5" />
        <span className="font-semibold text-sm">GymBro AI</span>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-5rem)] flex flex-col rounded-2xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-sm flex items-center gap-1">
                  GymBro AI
                  <Sparkles className="h-3 w-3 text-yellow-400" />
                </div>
                <div className="text-xs text-green-400">Online • Răspunde instant</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={resetChat} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors" title="Reset chat">
                <RefreshCw className="h-4 w-4 text-slate-400" />
              </button>
              <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
                <X className="h-4 w-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                )}
                <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-br-sm'
                    : 'bg-white/10 text-slate-200 rounded-bl-sm'
                }`}>
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="h-3.5 w-3.5 text-slate-300" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Suggestions (show only at start) */}
            {messages.length === 1 && (
              <div className="space-y-2 pt-2">
                <p className="text-xs text-slate-500 text-center">Întrebări populare:</p>
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(s)}
                    className="w-full text-left text-xs px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Limit reached */}
            {isLimitReached && (
              <div className="text-center p-4 bg-amber-500/10 rounded-xl border border-amber-500/30">
                <p className="text-sm text-amber-400 font-medium mb-2">Ai folosit cele {MAX_FREE_MESSAGES} mesaje gratuite 🎉</p>
                <p className="text-xs text-slate-400 mb-3">Resetează conversația sau folosește tool-urile gratuite:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <a href="/calculator" className="text-xs px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">Calculator calorii</a>
                  <a href="/program-antrenament" className="text-xs px-3 py-1.5 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors">Generator program</a>
                </div>
                <button onClick={resetChat} className="mt-3 text-xs text-slate-500 hover:text-white transition-colors underline">
                  Resetează chat
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10">
            {!isLimitReached && (
              <p className="text-xs text-slate-600 mb-2 text-center">
                {remaining} mesaje gratuite rămase
              </p>
            )}
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                placeholder={isLimitReached ? 'Limita atinsă' : 'Întreabă-mă orice despre fitness...'}
                disabled={isLimitReached || isLoading}
                className="flex-1 px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 disabled:opacity-50"
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isLoading || isLimitReached}
                className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
