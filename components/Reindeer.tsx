import React from 'react';

export const Reindeer: React.FC = () => {
  return (
    <div className="relative w-44 h-64 group animate-happy-dance-delayed flex flex-col items-center justify-end origin-bottom">
      
      {/* Antlers Group */}
      <div className="absolute top-0 z-10 w-full flex justify-center gap-16">
        {/* Left Antler */}
        <div className="relative opacity-90 origin-bottom-right rotate-[-10deg]">
          <div className="w-2 h-14 bg-[#5d4037] rounded-full shadow-sm" />
          <div className="absolute top-4 -left-4 w-1.5 h-8 bg-[#5d4037] -rotate-45 rounded-full" />
          <div className="absolute top-2 right-1 w-1.5 h-6 bg-[#5d4037] rotate-45 rounded-full" />
        </div>
        {/* Right Antler */}
        <div className="relative opacity-90 scale-x-[-1] origin-bottom-left rotate-[-10deg]">
          <div className="w-2 h-14 bg-[#5d4037] rounded-full shadow-sm" />
          <div className="absolute top-4 -left-4 w-1.5 h-8 bg-[#5d4037] -rotate-45 rounded-full" />
          <div className="absolute top-2 right-1 w-1.5 h-6 bg-[#5d4037] rotate-45 rounded-full" />
        </div>
      </div>

      {/* Head */}
      <div className="absolute top-12 z-20">
         {/* Ears */}
         <div className="absolute top-2 -left-4 w-8 h-10 bg-[#8d6e63] rounded-[100%] -rotate-[45deg] z-0 border-l border-black/10" />
         <div className="absolute top-2 -right-4 w-8 h-10 bg-[#8d6e63] rounded-[100%] rotate-[45deg] z-0 border-r border-black/10" />

         {/* Face Shape */}
         <div className="relative w-28 h-32 bg-[#8d6e63] rounded-[45%] shadow-lg overflow-hidden z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#a1887f,#5d4037)]" />
            
            {/* Eyes */}
            <div className="absolute top-10 left-5 w-6 h-7 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-4 bg-black rounded-full" />
            </div>
            <div className="absolute top-10 right-5 w-6 h-7 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-4 bg-black rounded-full" />
            </div>
            
            {/* Snout */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-12 bg-[#d7ccc8] rounded-[35%] flex justify-center items-end pb-3 shadow-inner opacity-90">
                 <div className="w-6 h-3 border-b-2 border-black/60 rounded-full opacity-60" />
            </div>
            {/* Nose */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.5)] bg-[radial-gradient(circle_at_30%_30%,#ef5350,#b71c1c)] z-20">
                <div className="absolute top-2 left-2 w-2 h-1 bg-white rounded-full opacity-60" />
            </div>
         </div>
      </div>

      {/* Neck */}
      <div className="absolute top-36 w-14 h-16 bg-[#8d6e63] z-10 rounded-full" />
      
      {/* Collar */}
      <div className="absolute top-44 w-16 h-6 bg-red-700 rounded-md z-20 flex items-center justify-center shadow-md rotate-1">
         <div className="w-5 h-5 bg-gold-light rounded-full border-2 border-yellow-600 shadow-sm animate-wiggle" />
      </div>

      {/* Body & Legs Container */}
      <div className="absolute bottom-0 z-10 flex flex-col items-center">
         {/* Torso */}
         <div className="w-32 h-24 bg-[#8d6e63] rounded-t-[40%] rounded-b-3xl shadow-md bg-[radial-gradient(circle_at_50%_10%,#8d6e63,#5d4037)] relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-16 bg-[#a1887f] rounded-[50%] opacity-30 blur-md" />
         </div>
         
         {/* Legs */}
         <div className="relative -mt-4 flex gap-6">
            <div className="w-8 h-10 bg-[#5d4037] rounded-b-2xl shadow-sm" />
            <div className="w-8 h-10 bg-[#5d4037] rounded-b-2xl shadow-sm" />
         </div>
      </div>

    </div>
  );
};