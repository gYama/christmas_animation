import React from 'react';

// A single particle within the fairy dust trail
const DustParticle: React.FC<{ delay: number; top: number; size: number }> = ({ delay, top, size }) => (
  <div
    className="absolute rounded-full"
    style={{
      top: `${top}%`,
      left: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: Math.random() > 0.5 ? '#ffffff' : '#f1c40f', // Mix of white and gold
      boxShadow: '0 0 4px 1px rgba(255,255,255,0.6)',
      opacity: 0.8,
      animation: `twinkle 0.8s ease-in-out infinite ${delay}s`,
    }}
  />
);

const FairyStream: React.FC<{ delay: string; duration: string; verticalOffset: string }> = ({ delay, duration, verticalOffset }) => {
    return (
        <div 
            className="absolute left-1/2 top-1/2 w-[180px] h-[50px] animate-golden-spiral pointer-events-none z-50"
            style={{ 
                animationDelay: delay,
                animationDuration: duration,
                marginTop: verticalOffset,
                marginLeft: '-90px' // Center the width
            }}
        >
            {/* Fairy Body (The bright distinct light) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_4px_rgba(255,255,255,1),0_0_30px_10px_rgba(241,196,15,0.6)] z-[70] animate-pulse">
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75 duration-1000" />
            </div>
            
            {/* Glow Aura Trail */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-24 h-12 bg-gold-light/20 rounded-full blur-[15px] -z-10" />

            {/* Trail particles */}
            {Array.from({ length: 25 }).map((_, i) => (
                <DustParticle 
                    key={i} 
                    delay={Math.random() * 1} 
                    top={Math.random() * 100} 
                    size={Math.random() * 4 + 1} 
                />
            ))}
        </div>
    );
};

export const FairyDust: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[60] flex items-center justify-center">
      {/* 
        Keyframes are compressed to the first 30% of the duration.
        Duration of 15s means ~4.5s of action and ~10.5s of waiting.
      */}
      
      {/* Stream 1 */}
      <FairyStream delay="2s" duration="14s" verticalOffset="-120px" />
      
      {/* Stream 2 */}
      <FairyStream delay="7s" duration="16s" verticalOffset="60px" />
      
      {/* Stream 3 */}
      <FairyStream delay="12s" duration="15s" verticalOffset="-30px" />
    </div>
  );
};