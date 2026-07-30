"use client";

import { useState, useEffect } from "react";
import { Calculator, Dumbbell, Utensils, TrendingUp, ArrowRight, Star, Zap, Play, ChevronDown, CheckCircle, Activity, Heart, Flame, Award, Scale, Droplets, ShoppingCart, HelpCircle } from "lucide-react";
import Link from "next/link";

// Animated Counter Component
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [target]);
  
  return <span>{count.toLocaleString()}{suffix}</span>;
}


function TestimonialCard({ name, role, text, rating }: { name: string; role: string; text: string; rating: number }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} />
        ))}
      </div>
      <p className="text-slate-300 mb-4">"{text}"</p>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-slate-500">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [activeTool, setActiveTool] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const tools = [
    {
      icon: Calculator,
      title: "Calculator Calorii",
      description: "Calculează BMR, TDEE și macro-urile perfecte pentru obiectivul tău. 100% gratuit.",
      color: "from-blue-500 to-cyan-500",
      href: "/calculator",
      status: "Live",
      users: "12.5K+",
    },
    {
      icon: Dumbbell,
      title: "Programe Personalizate",
      description: "Generează program de antrenament adaptat pentru tine: Full Body, Upper/Lower sau PPL.",
      color: "from-purple-500 to-pink-500",
      href: "/program-antrenament",
      status: "Live",
      users: "8.2K+",
    },
    {
      icon: Utensils,
      title: "Meal Prep Planner",
      description: "Plan alimentar săptămânal complet cu liste de cumpărături și buget calculat.",
      color: "from-green-500 to-emerald-500",
      href: "/meal-prep",
      status: "Live",
      users: "5.1K+",
    },
    {
      icon: TrendingUp,
      title: "Tracker Progres",
      description: "Urmărește greutatea, forța și transformarea. Grafice și predicții.",
      color: "from-orange-500 to-red-500",
      href: "#",
      status: "Coming Soon",
      users: "—",
    },
    {
      icon: Scale,
      title: "Calculator IMC",
      description: "Calculează Indicele de Masă Corporală și află dacă greutatea ta este sănătoasă.",
      color: "from-blue-500 to-cyan-500",
      href: "/imc",
      status: "Live",
      users: "Nou",
    },
    {
      icon: Scale,
      title: "Greutate Ideală",
      description: "Calculează greutatea ideală cu formulele Devine, Robinson și Miller.",
      color: "from-purple-500 to-pink-500",
      href: "/greutate-ideala",
      status: "Live",
      users: "Nou",
    },
    {
      icon: Dumbbell,
      title: "Calculator 1RM",
      description: "Calculează maximul tău pe o repetare și obține tabelul complet de procente.",
      color: "from-orange-500 to-red-500",
      href: "/calculator-1rm",
      status: "Live",
      users: "Nou",
    },
    {
      icon: Activity,
      title: "Rest Timer",
      description: "Timer pentru pauze între seturi. Preset-uri pentru forță, hipertrofie și cardio.",
      color: "from-blue-500 to-purple-500",
      href: "/rest-timer",
      status: "Live",
      users: "Nou",
    },
    {
      icon: Droplets,
      title: "Calculator Apă",
      description: "Calculează necesarul zilnic de apă în funcție de greutate, activitate și temperatură.",
      color: "from-cyan-500 to-blue-500",
      href: "/calculator-apa",
      status: "Live",
      users: "Nou",
    },
    {
      icon: Flame,
      title: "Calculator Body Fat %",
      description: "Calculează procentul de grăsime corporală cu metoda US Navy. Mai precis decât IMC.",
      color: "from-orange-500 to-red-500",
      href: "/body-fat",
      status: "Live",
      users: "Nou",
    },
    {
      icon: ShoppingCart,
      title: "Deals Suplimente 🔥",
      description: "Compară prețurile suplimentelor fitness din România. Proteină, creatină, omega-3 — cel mai mic preț garantat.",
      color: "from-orange-500 to-yellow-500",
      href: "/suplimente",
      status: "Live",
      users: "Nou",
    },
  ];

  const testimonials = [
    {
      name: "Andrei M.",
      role: "Utilizator GymBro de 3 luni",
      text: "Am slăbit 12kg folosind calculatorul și meal prep-ul. Cel mai bun tool gratuit din România!",
      rating: 5,
    },
    {
      name: "Maria K.",
      role: "Antrenoare personală",
      text: "Recomand GymBro tuturor clienților mei. Programele sunt profesioniste și adaptate.",
      rating: 5,
    },
    {
      name: "Cristian D.",
      role: "Fost începător",
      text: "Nu știam de unde să încep. GymBro m-a ghidat pas cu pas. Acum am 6 luni de progres!",
      rating: 5,
    },
  ];

  const handleToolHover = (idx: number) => {
    setActiveTool(idx);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* JSON-LD Schema - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'GymBro.ro',
            url: 'https://gymbro.ro',
            logo: 'https://gymbro.ro/logo.png',
            description: 'Platforma all-in-one fitness #1 în România. Calculator calorii gratuit, programe de antrenament personalizate și meal prep.',
            inLanguage: 'ro-RO',
            sameAs: [
              'https://instagram.com/gymbro.ro',
              'https://tiktok.com/@gymbro.ro',
              'https://youtube.com/@gymbro',
            ],
          }),
        }}
      />

      {/* JSON-LD Schema - WebSite with SearchAction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'GymBro.ro',
            url: 'https://gymbro.ro',
            inLanguage: 'ro-RO',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://gymbro.ro/blog?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />

      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h1>GymBro - Platforma #1 de Fitness din România</h1>
        <p>Calculator calorii gratuit, programe de antrenament personalizate, meal prep planner cu liste de cumpărături și buget. Transformă-ți corpul cu GymBro.ro</p>
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative">
          {/* 100% Gratuit */}
          <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 mt-6 mb-8">
            <Zap className="mr-2 h-4 w-4" />
            Gratuit | Fără Cont | Pentru România
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Transformă-ți Corpul
          </h1>
          
          <p className="mx-auto max-w-2xl text-xl text-slate-400 mb-10">
            Calculator calorii gratuit, programe personalizate de antrenament și meal prep. 
            <span className="text-white font-semibold">Tot ce ai nevoie într-un singur loc.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform"
            >
              Începe Gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <button 
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-colors"
            >
              <Play className="mr-2 h-5 w-5" />
              Vezi Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">100%</div>
              <div className="text-sm text-slate-500">Gratuit</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">47</div>
              <div className="text-sm text-slate-500">K+ Programe Generate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400">Fără</div>
              <div className="text-sm text-slate-500">Cont Necesar</div>
            </div>
          </div>
          
          <div className="mt-8 animate-bounce">
            <ChevronDown className="h-6 w-6 mx-auto text-slate-600" />
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section id="demo" className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-medium">TOOL-URI GRATUITE</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Tot Ce Ai Nevoie pentru Fitness
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              4 tool-uri profesioniste, 100% gratuite. Fără card, fără abonament ascuns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, idx) => (
              <Link
                key={idx}
                href={tool.href}
                onMouseEnter={() => handleToolHover(idx)}
                className={`group relative p-6 rounded-2xl bg-white/5 border transition-all duration-300 ${
                  activeTool === idx ? 'border-white/30 scale-[1.02]' : 'border-white/10 hover:border-white/20'
                }`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${tool.color}`}>
                    <tool.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="text-right">
                    {tool.status === "Live" ? (
                      <>
                        <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                          Live
                        </span>
                        <div className="text-xs text-slate-500 mt-1">{tool.users} users</div>
                      </>
                    ) : (
                      <span className="text-xs font-medium text-amber-400 bg-amber-400/10 px-2 py-1 rounded-full">
                        Soon
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{tool.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{tool.description}</p>
                
                <div className="flex items-center text-sm text-blue-400 group-hover:translate-x-2 transition-transform">
                  Începe acum <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-400 font-medium">TESTIMONIALE</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Ce Spun Utilizatorii</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <TestimonialCard key={idx} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-400 font-medium">DE CE GYMBRO?</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Fitness Simplificat
              </h2>
              <p className="text-slate-400 mb-8">
                Nu mai căuta zeci de aplicații. GymBro îți oferă tot ce ai nevoie 
                pentru a-ți atinge obiectivele fitness într-un singur loc.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Activity, text: "Calculatoare bazate pe știință" },
                  { icon: Heart, text: "Programe adaptate pentru începători" },
                  { icon: Flame, text: "Meal prep rapid și economic" },
                  { icon: Award, text: "100% gratuit, fără cont" },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <span className="text-slate-300">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-xl text-slate-400">Gratuit</div>
                  <div className="text-sm text-slate-500 mt-2">Fără card, fără abonament</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gata să Începi?
            </h2>
            
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Alătură-te celor care își transformă corpul cu GymBro. 
              Acces instant la toate tool-urile, 100% gratuit.
            </p>
            
            <Link 
              href="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform"
            >
              Începe Transformarea
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>100% Gratuit</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Fără Card</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-xl">GymBro</span>
              </div>
              <p className="text-sm text-slate-500">
                Platforma #1 de fitness din România. Calculator calorii, programe personalizate și meal prep.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tool-uri</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/calculator" className="hover:text-white transition-colors">Calculator Calorii</Link></li>
                <li><Link href="/program-antrenament" className="hover:text-white transition-colors">Programe</Link></li>
                <li><Link href="/yoga" className="hover:text-white transition-colors">Yoga</Link></li>
                <li><Link href="/meditatie" className="hover:text-white transition-colors">Meditație</Link></li>
                <li><Link href="/meal-prep" className="hover:text-white transition-colors">Meal Prep</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resurse</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/yoga" className="hover:text-white transition-colors">Ghiduri Yoga</Link></li>
                <li><Link href="/meditatie" className="hover:text-white transition-colors">Tehnici Meditație</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/termeni" className="hover:text-white transition-colors">Termeni și Condiții</Link></li>
                <li><Link href="/confidentialitate" className="hover:text-white transition-colors">Politica de Confidențialitate</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500">
              © 2026 GymBro.ro. Toate drepturile rezervate.
            </p>
            
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">TikTok</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
