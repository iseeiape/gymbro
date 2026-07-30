"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Camera, Award, Calendar, ChevronRight, Download, Trash2, Upload, Target, Flame, Trophy, Star } from "lucide-react";
import Link from "next/link";

interface ProgressEntry {
  id: string;
  date: string;
  weight: number;
  chest?: number;
  waist?: number;
  hips?: number;
  arms?: number;
  thighs?: number;
  notes?: string;
  photos?: {
    front?: string;
    side?: string;
    back?: string;
  };
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export default function ProgressTracker() {
  const [entries, setEntries] = useState<ProgressEntry[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showPhotoCompare, setShowPhotoCompare] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<ProgressEntry | null>(null);
  const [badges, setBadges] = useState<Badge[]>([
    { id: "1", name: "Primul Pas", description: "Prima înregistrare", icon: "🎯", unlocked: false },
    { id: "2", name: "Constanță", description: "7 zile consecutive", icon: "🔥", unlocked: false },
    { id: "3", name: "Transformare", description: "-5kg atins", icon: "⚡", unlocked: false },
    { id: "4", name: "Bodybuilder", description: "+2kg masă musculară", icon: "💪", unlocked: false },
    { id: "5", name: "Maratonist", description: "30 de zile consecutive", icon: "🏃", unlocked: false },
    { id: "6", name: "Maestru", description: "100 de intrări", icon: "👑", unlocked: false },
  ]);

  const [formData, setFormData] = useState({
    weight: "",
    chest: "",
    waist: "",
    hips: "",
    arms: "",
    thighs: "",
    notes: "",
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("gymbro-progress");
    if (saved) {
      setEntries(JSON.parse(saved));
    }
    const savedBadges = localStorage.getItem("gymbro-badges");
    if (savedBadges) {
      setBadges(JSON.parse(savedBadges));
    }
  }, []);

  // Save to localStorage when entries change
  useEffect(() => {
    localStorage.setItem("gymbro-progress", JSON.stringify(entries));
    checkBadges();
  }, [entries]);

  const checkBadges = () => {
    const newBadges = [...badges];
    
    // First Step
    if (entries.length >= 1 && !newBadges[0].unlocked) {
      newBadges[0].unlocked = true;
      newBadges[0].unlockedAt = new Date().toISOString();
    }
    
    // 7 days streak
    if (entries.length >= 7 && !newBadges[1].unlocked) {
      newBadges[1].unlocked = true;
      newBadges[1].unlockedAt = new Date().toISOString();
    }
    
    // 30 days streak
    if (entries.length >= 30 && !newBadges[4].unlocked) {
      newBadges[4].unlocked = true;
      newBadges[4].unlockedAt = new Date().toISOString();
    }
    
    // 100 entries
    if (entries.length >= 100 && !newBadges[5].unlocked) {
      newBadges[5].unlocked = true;
      newBadges[5].unlockedAt = new Date().toISOString();
    }
    
    setBadges(newBadges);
    localStorage.setItem("gymbro-badges", JSON.stringify(newBadges));
  };

  const addEntry = () => {
    if (!formData.weight) return;
    
    const newEntry: ProgressEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      weight: parseFloat(formData.weight),
      chest: formData.chest ? parseFloat(formData.chest) : undefined,
      waist: formData.waist ? parseFloat(formData.waist) : undefined,
      hips: formData.hips ? parseFloat(formData.hips) : undefined,
      arms: formData.arms ? parseFloat(formData.arms) : undefined,
      thighs: formData.thighs ? parseFloat(formData.thighs) : undefined,
      notes: formData.notes,
    };
    
    setEntries([newEntry, ...entries]);
    setFormData({ weight: "", chest: "", waist: "", hips: "", arms: "", thighs: "", notes: "" });
    setShowAddModal(false);
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter(e => e.id !== id));
  };

  const getWeightChange = () => {
    if (entries.length < 2) return 0;
    return entries[0].weight - entries[entries.length - 1].weight;
  };

  const getProgressPercentage = () => {
    if (entries.length < 2) return 0;
    const start = entries[entries.length - 1].weight;
    const current = entries[0].weight;
    const change = current - start;
    // Assuming goal is 10% of starting weight
    return Math.min(Math.abs(change) / (start * 0.1) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
            Tracker Progres
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Urmărește-ți transformarea. Grafice, poze before/after și badge-uri pentru fiecare milestone.
          </p>
        </div>

        {entries.length === 0 ? (
          /* Empty State */
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Începe-ți Călătoria</h2>
              <p className="text-slate-400 mb-8">
                Adaugă prima înregistrare pentru a-ți urmări progresul. Vezi grafice, compară poze și câștigă badge-uri!
              </p>
              <button
                onClick={() => setShowAddModal(true)}
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Adaugă Prima Înregistrare
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-6 border border-orange-500/30">
                <div className="text-sm text-slate-400 mb-1">Greutate Curentă</div>
                <div className="text-3xl font-bold">{entries[0]?.weight} kg</div>
                <div className={`text-sm ${getWeightChange() < 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {getWeightChange() > 0 ? '+' : ''}{getWeightChange().toFixed(1)} kg de la start
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-sm text-slate-400 mb-1">Zile Înregistrate</div>
                <div className="text-3xl font-bold">{entries.length}</div>
                <div className="text-sm text-slate-500">{entries.length >= 7 ? '🔥 Streak activ!' : 'Continuă!'} </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-sm text-slate-400 mb-1">Progres spre Goal</div>
                <div className="text-3xl font-bold">{getProgressPercentage().toFixed(0)}%</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div 
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all"
                    style={{ width: `${getProgressPercentage()}%` }}
                  />
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-sm text-slate-400 mb-1">Badge-uri Deblocate</div>
                <div className="text-3xl font-bold">{badges.filter(b => b.unlocked).length}/{badges.length}</div>
                <div className="flex gap-1 mt-2">
                  {badges.filter(b => b.unlocked).slice(0, 5).map((b, i) => (
                    <span key={i} className="text-lg">{b.icon}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Badges Section */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="h-6 w-6 text-yellow-400" />
                <h2 className="text-xl font-bold">Badge-urile Tale</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {badges.map((badge) => (
                  <div 
                    key={badge.id}
                    className={`p-4 rounded-xl text-center transition-all ${
                      badge.unlocked 
                        ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30' 
                        : 'bg-black/30 border border-white/10 opacity-50'
                    }`}
                  >
                    <div className="text-3xl mb-2">{badge.unlocked ? badge.icon : '🔒'}</div>
                    <div className="font-medium text-sm">{badge.name}</div>
                    <div className="text-xs text-slate-400">{badge.description}</div>
                    {badge.unlocked && badge.unlockedAt && (
                      <div className="text-xs text-yellow-400 mt-1">
                        Deblocat {new Date(badge.unlockedAt).toLocaleDateString('ro-RO')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Simple Chart */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                  <h2 className="text-xl font-bold">Evoluție Greutate</h2>
                </div>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  + Adaugă
                </button>
              </div>
              
              {/* Chart Visualization */}
              <div className="h-64 relative">
                <div className="absolute inset-0 flex items-end justify-between gap-2 px-4">
                  {entries.slice(0, 14).reverse().map((entry, idx) => {
                    const max = Math.max(...entries.map(e => e.weight));
                    const min = Math.min(...entries.map(e => e.weight));
                    const range = max - min || 1;
                    const height = ((entry.weight - min) / range) * 80 + 10;
                    
                    return (
                      <div key={entry.id} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t transition-all hover:opacity-80"
                          style={{ height: `${height}%` }}
                          title={`${entry.weight} kg - ${entry.date}`}
                        />
                        <div className="text-xs text-slate-500 mt-2 rotate-45 origin-left">
                          {entry.date.slice(5)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Entries List */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-bold mb-6">Istoric Înregistrări</h2>
              
              <div className="space-y-3">
                {entries.map((entry) => (
                  <div key={entry.id} className="flex items-center justify-between p-4 bg-black/30 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">{entry.weight} kg</div>
                        <div className="text-sm text-slate-400">{new Date(entry.date).toLocaleDateString('ro-RO')}</div>
                        {entry.notes && <div className="text-xs text-slate-500 mt-1">{entry.notes}</div>}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {entry.waist && (
                        <span className="text-xs bg-white/10 px-2 py-1 rounded">Talie: {entry.waist}cm</span>
                      )}
                      {entry.arms && (
                        <span className="text-xs bg-white/10 px-2 py-1 rounded">Brațe: {entry.arms}cm</span>
                      )}
                      <button
                        onClick={() => deleteEntry(entry.id)}
                        className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>

      {/* Add Entry Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/10 rounded-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Înregistrare Nouă</h2>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Greutate (kg) *</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-orange-500 focus:outline-none"
                  placeholder="75.5"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Talie (cm)</label>
                  <input
                    type="number"
                    value={formData.waist}
                    onChange={(e) => setFormData({...formData, waist: e.target.value})}
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-orange-500 focus:outline-none"
                    placeholder="85"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Brațe (cm)</label>
                  <input
                    type="number"
                    value={formData.arms}
                    onChange={(e) => setFormData({...formData, arms: e.target.value})}
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-orange-500 focus:outline-none"
                    placeholder="35"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Notițe (opțional)</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:border-orange-500 focus:outline-none h-20 resize-none"
                  placeholder="Cum te simți azi?"
                />
              </div>
              
              <button
                onClick={addEntry}
                disabled={!formData.weight}
                className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                Salvează Înregistrarea
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
