"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Calculator, Dumbbell, Utensils, BookOpen, Home, Info, ShoppingCart, Bot, HelpCircle } from "lucide-react";

const navItems = [
  { name: "Acasă", href: "/", icon: Home },
  { name: "Calculator", href: "/calculator", icon: Calculator },
  { name: "Programe", href: "/program-antrenament", icon: Dumbbell },
  { name: "Meal Prep", href: "/meal-prep", icon: Utensils },
  { name: "AI Chat 🤖", href: "/gymbro-ai", icon: Bot },
  { name: "Deals 🔥", href: "/suplimente", icon: ShoppingCart },
  { name: "Quiz 🎯", href: "/quiz-suplimente", icon: HelpCircle },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Despre", href: "/despre", icon: Info },
];

const blogCategories = [
  { name: "Nutriție", href: "/blog?category=nutritie" },
  { name: "Antrenament", href: "/blog?category=antrenament" },
  { name: "Slăbire", href: "/blog?category=slabit" },
  { name: "Masă Musculară", href: "/blog?category=masa" },
  { name: "Sănătate", href: "/blog?category=sanatate" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-lg border-b border-white/10"
            : "bg-slate-950/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Dumbbell className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                GymBro
              </span>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">
                .ro
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 transition-colors group ${
                    pathname === item.href
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}

              <Link
                href="/calculator"
                className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-blue-500/25"
              >
                Începe Gratuit
              </Link>
            </nav>

            {/* Hamburger Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] bg-slate-900 border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <Dumbbell className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GymBro.ro
            </span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Închide meniul"
          >
            <X className="h-5 w-5 text-slate-400" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">

          {/* Stats banner */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Utilizatori activi</span>
              <span className="text-green-400 font-bold text-sm">12.5K+</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">Alătură-te comunității noastre</div>
          </div>

          {/* Main nav */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Navigare
            </p>
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                    pathname === item.href
                      ? "bg-blue-500/15 text-white"
                      : "hover:bg-white/5 text-slate-300 hover:text-white"
                  }`}
                >
                  <div className="p-1.5 rounded-md bg-white/5 group-hover:bg-white/10">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{item.name}</span>
                  {pathname === item.href && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Blog categories */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Categorii Blog
            </p>
            <div className="space-y-1">
              {blogCategories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="block px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-sm"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Calculatoare */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Calculatoare
            </p>
            <div className="space-y-1">
              {[
                { label: "📊 Calculator IMC", href: "/imc" },
                { label: "⚖️ Greutate Ideală", href: "/greutate-ideala" },
                { label: "💪 Calculator 1RM", href: "/calculator-1rm" },
                { label: "⏱️ Rest Timer", href: "/rest-timer" },
                { label: "💧 Calculator Apă", href: "/calculator-apa" },
                { label: "🔥 Body Fat %", href: "/body-fat" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resurse */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Resurse
            </p>
            <div className="space-y-1">
              {[
                { label: "❓ Întrebări Frecvente", href: "/faq" },
                { label: "📞 Contact", href: "/contact" },
                { label: "🔒 Confidențialitate", href: "/confidentialitate" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Fixed CTA at bottom */}
        <div className="p-5 border-t border-white/10">
          <Link
            href="/calculator"
            className="block w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-center hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg"
          >
            🚀 Începe Gratuit Acum
          </Link>
          <p className="text-xs text-slate-500 text-center mt-2">
            Fără card · Fără abonament · 100% gratuit
          </p>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}
