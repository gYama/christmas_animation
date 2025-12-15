import React from 'react';

interface ChristmasTreeProps {
  lightsOn: boolean;
}

const Ornament: React.FC<{ color: string; top: string; left: string; size?: string; delay?: string }> = ({ color, top, left, size = 'w-4 h-4', delay = '0s' }) => (
  <div 
    className={`absolute ${top} ${left} ${size} rounded-full shadow-md z-20`}
    style={{
      background: `radial-gradient(circle at 30% 30%, white, ${color}, black)`,
      boxShadow: '1px 1px 3px rgba(0,0,0,0.3)',
      animation: `twinkle 5s ease-in-out infinite ${delay}`
    }}
  />
);

const Light: React.FC<{ color: string; top: string; left: string; on: boolean; delay?: string }> = ({ color, top, left, on, delay = '0s' }) => (
  <div 
    className={`absolute ${top} ${left} w-2.5 h-2.5 rounded-full z-30 transition-all duration-1000`}
    style={{
      backgroundColor: on ? color : '#333',
      boxShadow: on ? `0 0 12px 3px ${color}` : 'none',
      opacity: on ? 1 : 0.5,
      animation: on ? `twinkle 2s infinite ${delay}` : 'none'
    }}
  />
);

const Tinsel: React.FC<{ top: string; rotate: string; width: string; type?: 'solid' | 'dotted' }> = ({ top, rotate, width, type = 'solid' }) => (
    <div className={`absolute ${top} left-1/2 -translate-x-1/2 ${width} h-8 border-b-[3px] ${type === 'dotted' ? 'border-dotted' : 'border-solid'} border-yellow-400/40 rounded-[100%] ${rotate} pointer-events-none z-10 drop-shadow-sm`} />
);

export const ChristmasTree: React.FC<ChristmasTreeProps> = ({ lightsOn }) => {
  return (
    // Added mb-2.5 (10px) to move the whole tree up
    <div className="relative flex flex-col items-center justify-end w-80 h-[480px] mb-2.5">
      
      {/* Star - Moved down 5px (top-[-49px] -> top-[-44px]) */}
      <div className="absolute top-[-44px] left-[calc(50%-32px)] -translate-x-1/2 z-[60] animate-twinkle origin-center">
         <div className="relative flex items-center justify-center">
             <div className="absolute w-16 h-16 bg-gold-light blur-[25px] opacity-60 rounded-full" />
             <svg width="64" height="64" viewBox="0 0 24 24" fill="#f1c40f" className={`drop-shadow-lg relative z-10 ${lightsOn ? 'filter drop-shadow-[0_0_20px_rgba(241,196,15,1)]' : ''}`}>
               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
             </svg>
         </div>
      </div>

      {/* Tree Layers Container */}
      <div className="relative z-10 flex flex-col items-center -space-y-16 mt-6">
        
        {/* Layer 1 (Top) */}
        <div className="relative z-40 w-36 h-32 filter drop-shadow-xl">
             <div className="w-full h-full bg-[radial-gradient(circle_at_50%_100%,#40916c,#1b4332)] clip-triangle shadow-inner" />
             <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.1),transparent_50%,rgba(0,0,0,0.1))] clip-triangle" />
             
             {/* Decorations */}
             <Tinsel top="top-[45%]" rotate="rotate-2" width="w-[60%]" />
             <Light color="#e74c3c" top="top-[60%]" left="left-[50%]" on={lightsOn} delay="0s" />
             <Ornament color="#f1c40f" top="top-[70%]" left="left-[35%]" size="w-3 h-3" delay="1s" />
             <Ornament color="#3498db" top="top-[70%]" left="left-[65%]" size="w-3 h-3" delay="2s" />
        </div>

        {/* Layer 2 */}
        <div className="relative z-30 w-52 h-44 filter drop-shadow-xl">
             <div className="w-full h-full bg-[radial-gradient(circle_at_50%_100%,#2d6a4f,#14402e)] clip-triangle shadow-inner" />
             <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.1),transparent_50%,rgba(0,0,0,0.1))] clip-triangle" />
             
             {/* Decorations */}
             <Tinsel top="top-[50%]" rotate="-rotate-2" width="w-[70%]" />
             
             <Light color="#f1c40f" top="top-[60%]" left="left-[35%]" on={lightsOn} delay="0.5s" />
             <Light color="#e74c3c" top="top-[60%]" left="left-[65%]" on={lightsOn} delay="1.5s" />
             <Light color="#3498db" top="top-[75%]" left="left-[50%]" on={lightsOn} delay="2.5s" />
             
             <Ornament color="#9b59b6" top="top-[75%]" left="left-[25%]" size="w-4 h-4" />
             <Ornament color="#e74c3c" top="top-[80%]" left="left-[75%]" size="w-4 h-4" delay="0.5s" />
        </div>

        {/* Layer 3 */}
        <div className="relative z-20 w-64 h-52 filter drop-shadow-xl">
             <div className="w-full h-full bg-[radial-gradient(circle_at_50%_100%,#275940,#0f392b)] clip-triangle shadow-inner" />
             <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.1),transparent_50%,rgba(0,0,0,0.1))] clip-triangle" />
             
             {/* Decorations */}
             <Tinsel top="top-[55%]" rotate="rotate-1" width="w-[80%]" type="dotted" />
             <Tinsel top="top-[45%]" rotate="-rotate-1" width="w-[60%]" />
             
             <Light color="#3498db" top="top-[65%]" left="left-[25%]" on={lightsOn} delay="1s" />
             <Light color="#f1c40f" top="top-[65%]" left="left-[75%]" on={lightsOn} delay="0.2s" />
             <Light color="#e74c3c" top="top-[75%]" left="left-[50%]" on={lightsOn} delay="1.8s" />
             
             <Ornament color="#f1c40f" top="top-[80%]" left="left-[30%]" size="w-5 h-5" delay="0.5s" />
             <Ornament color="#9b59b6" top="top-[80%]" left="left-[70%]" size="w-5 h-5" />
             <Ornament color="#e74c3c" top="top-[55%]" left="left-[50%]" size="w-3 h-3" />
        </div>

        {/* Layer 4 (Bottom) */}
        <div className="relative z-10 w-80 h-60 filter drop-shadow-xl">
             <div className="w-full h-full bg-[radial-gradient(circle_at_50%_100%,#1e4d38,#062c1f)] clip-triangle shadow-inner" />
             <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.1),transparent_50%,rgba(0,0,0,0.1))] clip-triangle" />
             
             {/* Decorations */}
             <Tinsel top="top-[55%]" rotate="-rotate-2" width="w-[85%]" />
             <Tinsel top="top-[70%]" rotate="rotate-1" width="w-[90%]" type="dotted" />
             
             <Light color="#f1c40f" top="top-[60%]" left="left-[40%]" on={lightsOn} delay="0.3s" />
             <Light color="#e74c3c" top="top-[60%]" left="left-[60%]" on={lightsOn} delay="0.7s" />
             <Light color="#3498db" top="top-[80%]" left="left-[20%]" on={lightsOn} delay="1.2s" />
             <Light color="#9b59b6" top="top-[80%]" left="left-[80%]" on={lightsOn} delay="2s" />
             <Light color="#f1c40f" top="top-[85%]" left="left-[50%]" on={lightsOn} delay="0s" />
             
             <Ornament color="#e74c3c" top="top-[75%]" left="left-[30%]" size="w-6 h-6" />
             <Ornament color="#3498db" top="top-[75%]" left="left-[70%]" size="w-6 h-6" delay="1s" />
             <Ornament color="#f1c40f" top="top-[90%]" left="left-[15%]" size="w-5 h-5" />
             <Ornament color="#e74c3c" top="top-[90%]" left="left-[85%]" size="w-5 h-5" />
        </div>

      </div>

      {/* Trunk - Height extended from h-24 to h-[106px] (+10px) */}
      <div className="relative -mt-4 w-14 h-[106px] bg-[#3e2723] rounded-b-xl z-0 overflow-hidden shadow-2xl">
         <div className="w-full h-full bg-[linear-gradient(90deg,rgba(0,0,0,0.4),transparent,rgba(0,0,0,0.4))]" />
         <div className="absolute top-0 w-full h-6 bg-black/30 filter blur-sm" />
      </div>

    </div>
  );
};