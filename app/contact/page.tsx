import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/20 text-purple-400 mb-4">
            <Mail className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact</h1>
          <p className="text-slate-400">
            Ai întrebări, sugestii sau feedback? Scrie-ne!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 rounded-2xl border border-white/10 p-8">
            <h2 className="text-xl font-bold mb-6">Informații Contact</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-slate-400">contact@gymbro.ro</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Social Media</h3>
                  <div className="flex gap-3 mt-2">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">TikTok</a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">YouTube</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-xl">
              <h3 className="font-semibold mb-2">Timp de Răspuns</h3>
              <p className="text-slate-400 text-sm">
                De obicei răspundem în 24-48 de ore. Pentru întrebări frecvente, 
                verifică și <Link href="/faq" className="text-blue-400 hover:underline">pagina FAQ</Link>.
              </p>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 p-8">
            <h2 className="text-xl font-bold mb-6">Trimite un Mesaj</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nume</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Numele tău"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="email@exemplu.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subiect</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500">
                  <option>Întrebare generală</option>
                  <option>Problemă tehnică</option>
                  <option>Sugestie</option>
                  <option>Colaborare</option>
                  <option>Altceva</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mesaj</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Scrie mesajul tău aici..."
                />
              </div>

              <button 
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Trimite Mesaj
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
