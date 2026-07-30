"use client";

import { useState, useMemo } from "react";
import { Search, Star, ShoppingCart, ExternalLink, Filter, X, CheckCircle, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { supplements, type Supplement, type PriceEntry } from "./data";

type Category = 'toate' | 'proteina' | 'creatina' | 'bcaa' | 'omega3' | 'vitamine' | 'preworkout' | 'alte';
type Goal = 'toate' | 'bulk' | 'cut' | 'sanatate' | 'forta';
type Store = 'toate' | 'Myprotein' | 'eMAG' | 'iHerb' | 'Olimp' | 'allnutrition';
type SortBy = 'cheapest' | 'rating' | 'popular' | 'gymbro';

const categoryLabels: Record<Category, string> = {
  toate: 'Toate',
  proteina: 'Proteine',
  creatina: 'Creatină',
  bcaa: 'BCAA',
  omega3: 'Omega-3',
  vitamine: 'Vitamine',
  preworkout: 'Pre-workout',
  alte: 'Alte',
};

const goalLabels: Record<Goal, string> = {
  toate: 'Toate',
  bulk: 'Bulk',
  cut: 'Slăbire',
  sanatate: 'Sănătate',
  forta: 'Forță',
};

const goalEmojis: Record<string, string> = {
  bulk: '💪',
  cut: '🔥',
  sanatate: '❤️',
  forta: '⚡',
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3.5 w-3.5 ${
            star <= Math.floor(rating)
              ? 'text-yellow-400 fill-yellow-400'
              : star - 0.5 <= rating
              ? 'text-yellow-400 fill-yellow-400/50'
              : 'text-slate-600'
          }`}
        />
      ))}
    </div>
  );
}

function getLowestPrice(prices: PriceEntry[]): number {
  return Math.min(...prices.filter((p) => p.inStock).map((p) => p.price));
}

function SupplementCard({ supplement }: { supplement: Supplement }) {
  const [expanded, setExpanded] = useState(false);
  const lowestPrice = getLowestPrice(supplement.prices);
  const sortedPrices = [...supplement.prices].sort((a, b) => a.price - b.price);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-200 flex flex-col">
      {/* Image + Badge */}
      <div className="relative h-48 bg-slate-800/50 overflow-hidden">
        {supplement.image ? (
          <Image
            src={supplement.image}
            alt={supplement.name}
            fill
            className="object-cover opacity-80"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ShoppingCart className="h-16 w-16 text-slate-600" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        {supplement.gymbroRecommended && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
            ⭐ GymBro Recomandă
          </div>
        )}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="text-xs text-slate-400 mb-0.5">{supplement.brand}</div>
          <div className="font-bold text-white leading-tight">{supplement.name}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Rating + Reviews */}
        <div className="flex items-center gap-2">
          <StarRating rating={supplement.rating} />
          <span className="text-sm text-slate-400">{supplement.rating.toFixed(1)}</span>
          <span className="text-xs text-slate-500">({supplement.reviewCount.toLocaleString()} recenzii)</span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed">{supplement.description}</p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-1.5">
          {supplement.benefits.slice(0, 3).map((b) => (
            <span key={b} className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {b}
            </span>
          ))}
        </div>

        {/* Goals */}
        <div className="flex flex-wrap gap-1.5">
          {supplement.forGoal.map((g) => (
            <span key={g} className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              {goalEmojis[g]} {goalLabels[g as Goal]}
            </span>
          ))}
          {supplement.weight && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">
              {supplement.weight}
            </span>
          )}
          {supplement.servings && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">
              {supplement.servings} porții
            </span>
          )}
        </div>

        {/* Price comparison */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-300">Comparator prețuri</span>
            <span className="text-lg font-bold text-green-400">de la {lowestPrice} RON</span>
          </div>

          <div className="space-y-2">
            {(expanded ? sortedPrices : sortedPrices.slice(0, 3)).map((entry) => {
              const isCheapest = entry.price === lowestPrice;
              return (
                <a
                  key={entry.store}
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between px-3 py-2 rounded-xl border transition-all hover:scale-[1.01] group ${
                    isCheapest
                      ? 'bg-green-500/20 border-green-500/30 hover:bg-green-500/25'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isCheapest && (
                      <span className="text-xs font-bold px-1.5 py-0.5 rounded-md bg-green-500 text-white">
                        CEL MAI IEFTIN
                      </span>
                    )}
                    <span className={`text-sm font-medium ${isCheapest ? 'text-green-400' : 'text-slate-300'}`}>
                      {entry.store}
                    </span>
                    {!entry.inStock && (
                      <span className="text-xs text-red-400">Stoc epuizat</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${isCheapest ? 'text-green-400' : 'text-white'}`}>
                      {entry.price} RON
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                </a>
              );
            })}
          </div>

          {sortedPrices.length > 3 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 w-full text-xs text-slate-500 hover:text-slate-300 transition-colors py-1"
            >
              {expanded ? '▲ Ascunde' : `▼ +${sortedPrices.length - 3} magazine`}
            </button>
          )}

          {/* Primary CTA */}
          <a
            href={sortedPrices[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-blue-500/25"
          >
            <ShoppingCart className="h-4 w-4" />
            Cumpără la {sortedPrices[0]?.store} — {sortedPrices[0]?.price} RON
          </a>
        </div>
      </div>
    </div>
  );
}

export default function SuplimentePage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category>('toate');
  const [goal, setGoal] = useState<Goal>('toate');
  const [store, setStore] = useState<Store>('toate');
  const [sortBy, setSortBy] = useState<SortBy>('gymbro');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...supplements];

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.brand.toLowerCase().includes(q) ||
          s.tags.some((t) => t.toLowerCase().includes(q)) ||
          s.description.toLowerCase().includes(q)
      );
    }

    // Category
    if (category !== 'toate') {
      result = result.filter((s) => s.category === category);
    }

    // Goal
    if (goal !== 'toate') {
      result = result.filter((s) => s.forGoal.includes(goal));
    }

    // Store
    if (store !== 'toate') {
      result = result.filter((s) => s.prices.some((p) => p.store === store));
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'cheapest') return getLowestPrice(a.prices) - getLowestPrice(b.prices);
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'popular') return b.reviewCount - a.reviewCount;
      if (sortBy === 'gymbro') {
        if (a.gymbroRecommended && !b.gymbroRecommended) return -1;
        if (!a.gymbroRecommended && b.gymbroRecommended) return 1;
        return b.rating - a.rating;
      }
      return 0;
    });

    return result;
  }, [search, category, goal, store, sortBy]);

  const totalStores = new Set(supplements.flatMap((s) => s.prices.map((p) => p.store))).size;
  const activeFilters = [
    category !== 'toate',
    goal !== 'toate',
    store !== 'toate',
  ].filter(Boolean).length;

  const clearFilters = () => {
    setCategory('toate');
    setGoal('toate');
    setStore('toate');
    setSortBy('gymbro');
    setSearch('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            🔥 Deals
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Cel Mai Ieftin{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Supliment Fitness
            </span>{' '}
            din România
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Compară prețuri de la {totalStores} magazine. Proteină, creatină, omega-3 și mai multe — găsește cel mai mic preț acum.
          </p>
        </div>

        {/* Warning Banner */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm mb-6">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Prețurile sunt actualizate săptămânal.</strong> Verifică prețul final pe site-ul magazinului înainte de cumpărare.
          </span>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap items-center gap-4 justify-center text-sm text-slate-500 mb-8">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <strong className="text-slate-300">{supplements.length} produse</strong> comparate
          </span>
          <span className="text-slate-700">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <strong className="text-slate-300">{totalStores} magazine</strong> monitorizate
          </span>
          <span className="text-slate-700">•</span>
          <span>Actualizat <strong className="text-slate-300">19 Mar 2026</strong></span>
        </div>

        {/* Search + Filters */}
        <div className="mb-6 space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input
              type="text"
              placeholder="Caută proteină, creatină, brand..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Filter toggle (mobile) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-all md:hidden"
            >
              <Filter className="h-4 w-4" />
              Filtre
              {activeFilters > 0 && (
                <span className="px-1.5 py-0.5 rounded-full bg-blue-500 text-white text-xs font-bold">
                  {activeFilters}
                </span>
              )}
            </button>
            {activeFilters > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-slate-500 hover:text-white transition-colors"
              >
                <X className="h-3.5 w-3.5" />
                Resetează filtrele
              </button>
            )}
          </div>

          {/* Filters grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 ${filtersOpen || 'hidden md:grid'}`}>
            {/* Category */}
            <div>
              <label className="text-xs text-slate-500 uppercase tracking-wide mb-1 block">Categorie</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer"
              >
                {(Object.keys(categoryLabels) as Category[]).map((c) => (
                  <option key={c} value={c} className="bg-slate-900">
                    {categoryLabels[c]}
                  </option>
                ))}
              </select>
            </div>

            {/* Goal */}
            <div>
              <label className="text-xs text-slate-500 uppercase tracking-wide mb-1 block">Obiectiv</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value as Goal)}
                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer"
              >
                {(Object.keys(goalLabels) as Goal[]).map((g) => (
                  <option key={g} value={g} className="bg-slate-900">
                    {goalLabels[g]}
                  </option>
                ))}
              </select>
            </div>

            {/* Store */}
            <div>
              <label className="text-xs text-slate-500 uppercase tracking-wide mb-1 block">Magazin</label>
              <select
                value={store}
                onChange={(e) => setStore(e.target.value as Store)}
                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer"
              >
                {(['toate', 'Myprotein', 'eMAG', 'iHerb', 'Olimp', 'allnutrition'] as Store[]).map((s) => (
                  <option key={s} value={s} className="bg-slate-900">
                    {s === 'toate' ? 'Toate magazinele' : s}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="text-xs text-slate-500 uppercase tracking-wide mb-1 block">Sortare</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer"
              >
                <option value="gymbro" className="bg-slate-900">⭐ GymBro Picks</option>
                <option value="cheapest" className="bg-slate-900">💰 Cel mai ieftin</option>
                <option value="rating" className="bg-slate-900">⭐ Rating</option>
                <option value="popular" className="bg-slate-900">🔥 Populare</option>
              </select>
            </div>
          </div>

          {/* Category pills (desktop shortcut) */}
          <div className="flex flex-wrap gap-2 hidden md:flex">
            {(Object.keys(categoryLabels) as Category[]).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  category === c
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {categoryLabels[c]}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-slate-500 mb-5">
          {filtered.length === supplements.length
            ? `${filtered.length} produse`
            : `${filtered.length} din ${supplements.length} produse`}
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filtered.map((s) => (
              <SupplementCard key={s.id} supplement={s} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium mb-2">Niciun produs găsit</p>
            <p className="text-sm">Încearcă alte filtre sau caută alt termen.</p>
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm transition-colors"
            >
              Resetează filtrele
            </button>
          </div>
        )}

        {/* Affiliate Disclaimer */}
        <div className="p-4 rounded-xl bg-white/3 border border-white/5 text-center text-sm text-slate-500 mt-8">
          <span className="text-slate-400 font-medium">Transparență:</span>{' '}
          GymBro.ro participă în programe de afiliere. Dacă cumperi prin linkurile noastre, primim un mic comision fără cost suplimentar pentru tine. Asta ne ajută să menținem serviciul gratuit. Mulțumim! 🙏
        </div>
      </div>
    </div>
  );
}
