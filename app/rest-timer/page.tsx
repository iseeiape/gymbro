"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Dumbbell, Plus, Minus, RotateCcw, Play, Pause } from "lucide-react";
import { ProudShare } from "../components/ProudShare";

const PRESETS = [
  { label: "30s", seconds: 30, desc: "Cardio/Superset", color: "from-pink-600 to-rose-600" },
  { label: "60s", seconds: 60, desc: "Hipertrofie light", color: "from-orange-500 to-amber-500" },
  { label: "90s", seconds: 90, desc: "Hipertrofie", color: "from-yellow-500 to-orange-500" },
  { label: "2 min", seconds: 120, desc: "Forță", color: "from-blue-600 to-cyan-600" },
  { label: "3 min", seconds: 180, desc: "Powerlifting", color: "from-purple-600 to-blue-600" },
  { label: "5 min", seconds: 300, desc: "Max effort", color: "from-slate-600 to-slate-500" },
];

function playBeep() {
  const AudioCtx =
    window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const ctx = new AudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.frequency.value = 880;
  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.5);
}

function formatTime(secs: number) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function RestTimerPage() {
  const [totalSeconds, setTotalSeconds] = useState(90);
  const [remaining, setRemaining] = useState(90);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [setCount, setSetCount] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [customMin, setCustomMin] = useState(1);
  const [customSec, setCustomSec] = useState(30);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Update document title
  useEffect(() => {
    if (running) {
      document.title = `${formatTime(remaining)} ⏱️ GymBro Timer`;
    } else {
      document.title = "Timer Pauze Antrenament | Rest Timer Gratuit - GymBro.ro";
    }
    return () => {
      document.title = "Timer Pauze Antrenament | Rest Timer Gratuit - GymBro.ro";
    };
  }, [running, remaining]);

  const handleFinish = useCallback(() => {
    setRunning(false);
    setFinished(true);
    setHasCompleted(true);
    setSetCount((prev) => prev + 1);
    playBeep();
    setTimeout(() => {
      setFinished(false);
      setRemaining(totalSeconds);
    }, 3000);
  }, [totalSeconds]);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            handleFinish();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, handleFinish]);

  const selectPreset = (seconds: number) => {
    setRunning(false);
    setFinished(false);
    setTotalSeconds(seconds);
    setRemaining(seconds);
  };

  const applyCustom = () => {
    const s = customMin * 60 + customSec;
    if (s > 0) selectPreset(s);
  };

  const handleReset = () => {
    setRunning(false);
    setFinished(false);
    setRemaining(totalSeconds);
  };

  const handleStartPause = () => {
    if (finished) return;
    setRunning((prev) => !prev);
  };

  // Progress ring
  const radius = 110;
  const circumference = 2 * Math.PI * radius;
  const progress = totalSeconds > 0 ? remaining / totalSeconds : 1;
  const dashOffset = circumference * (1 - progress);

  const timerColor =
    remaining < 10
      ? "text-red-400"
      : remaining < 30
      ? "text-yellow-400"
      : "text-green-400";

  const ringColor =
    remaining < 10
      ? "#f87171"
      : remaining < 30
      ? "#facc15"
      : "#34d399";

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            ⏱️ Rest Timer
          </h1>
          <p className="text-slate-400">Timer pauze între seturi — simplu, rapid, fără distrageri</p>
        </div>

        {/* Set Counter */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setSetCount((prev) => Math.max(0, prev - 1))}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <Minus className="h-4 w-4" />
          </button>
          <div className="text-center">
            <div className="text-2xl font-bold">Setul #{setCount + 1}</div>
            <div className="text-xs text-slate-500">seturi completate: {setCount}</div>
          </div>
          <button
            onClick={() => setSetCount((prev) => prev + 1)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* Timer Display with Progress Ring */}
        <div className="flex items-center justify-center mb-8 relative">
          <svg width="270" height="270" className="rotate-[-90deg]">
            {/* Background circle */}
            <circle
              cx="135"
              cy="135"
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="10"
            />
            {/* Progress circle */}
            <circle
              cx="135"
              cy="135"
              r={radius}
              fill="none"
              stroke={ringColor}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{ transition: "stroke-dashoffset 0.9s linear, stroke 0.3s ease" }}
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span
              className={`text-7xl md:text-8xl font-mono font-bold leading-none ${timerColor} transition-colors`}
            >
              {formatTime(remaining)}
            </span>
            {finished && (
              <div className="mt-2 text-base font-semibold text-green-400 animate-pulse text-center">
                Pauză terminată! Înapoi la treabă 💪
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={handleReset}
            className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <RotateCcw className="h-6 w-6" />
          </button>
          <button
            onClick={handleStartPause}
            disabled={finished}
            className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center disabled:opacity-50"
          >
            {running ? (
              <Pause className="h-8 w-8" />
            ) : (
              <Play className="h-8 w-8 ml-1" />
            )}
          </button>
          <div className="w-14 h-14" />
        </div>

        {/* Preset Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {PRESETS.map((preset) => (
            <button
              key={preset.seconds}
              onClick={() => selectPreset(preset.seconds)}
              className={`p-4 rounded-xl bg-gradient-to-r ${preset.color} hover:opacity-90 transition-all active:scale-95 flex flex-col items-center gap-1 ${
                totalSeconds === preset.seconds ? "ring-2 ring-white/50 shadow-lg" : ""
              }`}
            >
              <span className="text-xl font-bold">{preset.label}</span>
              <span className="text-xs opacity-80">{preset.desc}</span>
            </button>
          ))}
        </div>

        {/* Custom Timer */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8">
          <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
            Timer Custom
          </h3>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label className="text-xs text-slate-500 mb-1 block">Minute</label>
              <input
                type="number"
                min={0}
                max={59}
                value={customMin}
                onChange={(e) => setCustomMin(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
                className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none text-center text-lg font-mono"
              />
            </div>
            <span className="text-2xl font-bold text-slate-500 mt-4">:</span>
            <div className="flex-1">
              <label className="text-xs text-slate-500 mb-1 block">Secunde</label>
              <input
                type="number"
                min={0}
                max={59}
                value={customSec}
                onChange={(e) => setCustomSec(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
                className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none text-center text-lg font-mono"
              />
            </div>
            <button
              onClick={applyCustom}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              Setează
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span>📚</span> Când să folosești fiecare pauză?
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold w-20 shrink-0">Forță</span>
              <span className="text-slate-300">2-3 minute — recuperare completă a sistemului ATP-PC</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold w-20 shrink-0">Hipertrofie</span>
              <span className="text-slate-300">60-90 secunde — maximizezi tensiunea metabolică</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-pink-400 font-bold w-20 shrink-0">Rezistență</span>
              <span className="text-slate-300">30-60 secunde — menții frecvența cardiacă ridicată</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-400 font-bold w-20 shrink-0">Powerlifting</span>
              <span className="text-slate-300">3-5 minute — recuperare maximă pentru efort maximal</span>
            </div>
          </div>
        </div>

        {/* ProudShare */}
        {hasCompleted && (
          <div className="mb-8">
            <ProudShare
              toolName="Rest Timer GymBro"
              achievement={`${setCount} seturi completate cu pauze perfecte! 🏋️`}
              impact="Pauzele corecte = progres mai rapid. Antrenează-te smart, nu doar greu!"
            />
          </div>
        )}
      </main>
    </div>
  );
}
