"use client";

import { useState } from "react";
import { Gift, Share2, Copy, Check, Users, Trophy, Zap, MessageCircle, Facebook, Twitter } from "lucide-react";

interface ViralLoopProps {
  toolName: string;
  unlockText: string;
  unlockFeatures: string[];
  onShareComplete?: () => void;
}

export function ViralLoop({ toolName, unlockText, unlockFeatures, onShareComplete }: ViralLoopProps) {
  const [showModal, setShowModal] = useState(false);
  const [referralCount, setReferralCount] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    setShowModal(true);
    setReferralCount(prev => prev + 1);
  };

  const copyToClipboard = () => {
    const shareText = `Am folosit ${toolName} de la GymBro și e genial! 💪\n\n${unlockText}\n\nÎncearcă și tu gratuit:`;
    navigator.clipboard.writeText(shareText + " https://gymbro.ro");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const progressPercent = Math.min((referralCount / 3) * 100, 100);
  const isUnlocked = referralCount >= 3;

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={handleShare}
        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-[1.02]"
      >
        <Gift className="mr-2 h-5 w-5" />
        {isUnlocked ? "✨ Deblocat!" : "Deblochează Extra"}
      </button>

      {/* Viral Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-purple-500/30 rounded-2xl max-w-lg w-full p-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">🎁 Ofertă Specială!</h3>
              <p className="text-slate-400">
                Partajează {toolName} cu <strong>3 prieteni</strong> și primești acces la:
              </p>
            </div>

            {/* Features List */}
            <div className="bg-black/30 rounded-xl p-4 mb-6">
              <ul className="space-y-2">
                {unlockFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      isUnlocked ? 'bg-green-500' : 'bg-slate-700'
                    }`}>
                      {isUnlocked ? <Check className="h-3 w-3" /> : <span className="text-xs">{idx + 1}</span>}
                    </div>
                    <span className={isUnlocked ? 'text-green-400' : 'text-slate-300'}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">Progres:</span>
                <span className="text-sm font-semibold">{referralCount}/3 prieteni</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Share Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
              <button 
                onClick={copyToClipboard}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                {copied ? <><Check className="h-4 w-4 text-green-400" /> Copiat</> : <><Copy className="h-4 w-4" /> Copiază</>}
              </button>

              <button 
                onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`Am folosit ${toolName} de la GymBro și e genial! 💪 Încearcă și tu: https://gymbro.ro`)}`, '_blank')}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </button>

              <button 
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=https://gymbro.ro`, '_blank')}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-4 w-4" /> Facebook
              </button>

              <button 
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Am folosit ${toolName} de la GymBro 💪 https://gymbro.ro`)}`, '_blank')}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-sky-500 rounded-lg hover:bg-sky-600 transition-colors"
              >
                <Twitter className="h-4 w-4" /> Twitter
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Trophy className="h-4 w-4 text-yellow-400" />
                <span>2,500+ utilizatori</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span>Acces instant</span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                setShowModal(false);
                if (isUnlocked && onShareComplete) {
                  onShareComplete();
                }
              }}
              className="w-full mt-6 py-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              {isUnlocked ? "Închide și vezi extra-urile!" : "Închide"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
