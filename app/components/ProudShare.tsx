"use client";

import { useState } from "react";
import { Share2, Copy, Check, Heart, Trophy, Users, Sparkles, MessageCircle, Facebook, Twitter } from "lucide-react";

interface ProudShareProps {
  toolName: string;
  achievement: string;
  impact: string;
}

export function ProudShare({ toolName, achievement, impact }: ProudShareProps) {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareCount, setShareCount] = useState(0);

  const handleShare = () => {
    setShowModal(true);
  };

  const copyToClipboard = () => {
    const shareText = `Am ${achievement} folosind ${toolName} de la GymBro! 💪\n\nDacă vrei și tu rezultate, încearcă:`;
    navigator.clipboard.writeText(shareText + " https://gymbro.ro");
    setCopied(true);
    setShareCount(prev => prev + 1);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareMessages = [
    { platform: "WhatsApp", icon: MessageCircle, color: "bg-green-600", text: "Am descoperit ceva genial! 💪" },
    { platform: "Facebook", icon: Facebook, color: "bg-blue-600", text: "Recomand pentru toți cei care vor să se pună în mișcare! 🏋️‍♂️" },
    { platform: "Twitter", icon: Twitter, color: "bg-sky-500", text: "Game changer pentru fitness! 🔥" },
  ];

  return (
    <>
      {/* Proud Share Button - Not Forced */}
      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-6 border border-amber-500/30 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Trophy className="h-6 w-6 text-amber-400" />
          <h3 className="text-lg font-semibold">Felicitări! 🎉</h3>
        </div>
        
        <p className="text-slate-300 mb-4">
          {achievement}
        </p>
        
        <div className="bg-black/30 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-center gap-2 text-amber-400 mb-2">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">Impactul tău</span>
          </div>
          <p className="text-sm text-slate-400">{impact}</p>
        </div>

        <button
          onClick={handleShare}
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-[1.02]"
        >
          <Heart className="mr-2 h-5 w-5" />
          {shareCount > 0 ? `Ai inspirat ${shareCount} prieteni!` : "Împărtășește cu prietenii"}
        </button>

        {shareCount > 0 && (
          <div className="mt-4 p-3 bg-green-500/20 rounded-lg">
            <div className="flex items-center gap-2 text-green-400">
              <Users className="h-5 w-5" />
              <span className="font-medium">Ești un adevărat GymBro! 💪</span>
            </div>
            <p className="text-sm text-slate-400 mt-1">Prietenii tăi îți mulțumesc pentru motivație!</p>
          </div>
        )}
      </div>

      {/* Share Modal - Voluntary & Proud */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-amber-500/30 rounded-2xl max-w-lg w-full p-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Ești un exemplu! 🌟</h3>
              <p className="text-slate-400">
                Ai făcut primul pas spre o viață mai sănătoasă. 
                <strong>Ajută și prietenii tăi</strong> să înceapă călătoria!
              </p>
            </div>

            {/* Achievement Badge */}
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-4 mb-6 border border-amber-500/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-amber-400">{achievement}</div>
                  <div className="text-sm text-slate-400">Realizat cu {toolName}</div>
                </div>
              </div>
            </div>

            {/* Share Options */}
            <div className="space-y-3 mb-6">
              <p className="text-sm text-slate-400 text-center mb-3">Alege cum vrei să inspiri:</p>

              {shareMessages.map((option) => (
                <button
                  key={option.platform}
                  onClick={() => {
                    if (option.platform === "WhatsApp") {
                      window.open(`https://wa.me/?text=${encodeURIComponent(option.text + " https://gymbro.ro")}`, '_blank');
                    } else if (option.platform === "Facebook") {
                      window.open(`https://www.facebook.com/sharer/sharer.php?u=https://gymbro.ro`, '_blank');
                    } else if (option.platform === "Twitter") {
                      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(option.text + " https://gymbro.ro")}`, '_blank');
                    }
                    setShareCount(prev => prev + 1);
                  }}
                  className={`w-full flex items-center gap-3 p-3 ${option.color} rounded-lg hover:opacity-90 transition-opacity`}
                >
                  <option.icon className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">{option.platform}</div>
                    <div className="text-xs opacity-80">{option.text}</div>
                  </div>
                </button>
              ))}

              <button 
                onClick={copyToClipboard}
                className="w-full flex items-center justify-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                {copied ? <><Check className="h-5 w-5 text-green-400" /> Link copiat!</> : <><Copy className="h-5 w-5" /> Copiază mesajul</>}
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-amber-400" />
                <span>2,500+ oameni activi</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4 text-red-400" />
                <span>Comunitate de susținere</span>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-6 py-3 text-slate-400 hover:text-white transition-colors"
            >
              Mulțumesc, poate mai târziu
            </button>
          </div>
        </div>
      )}
    </>
  );
}
