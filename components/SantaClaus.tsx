import React from 'react';

export const SantaClaus: React.FC = () => {
  return (
    <div className="relative w-48 h-64 flex flex-col items-center justify-end animate-happy-dance origin-bottom">
      
      {/* Hat Group */}
      {/* Adjusted Left ~33% to move it ~10px right from previous 28% position (away from tree) */}
      <div className="absolute -top-1 left-[33%] -translate-x-1/2 z-50 animate-sway origin-bottom-left">
         {/* Pompom */}
         <div className="absolute -right-5 top-12 w-9 h-9 bg-white rounded-full shadow-lg z-20 flex items-center justify-center">
             <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)]" />
         </div>
         {/* Hat Body */}
         <div className="w-20 h-24 bg-santa-red-light rounded-t-full rounded-br-full skew-x-[10deg] rotate-[15deg] shadow-lg relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.1),transparent)]" />
         </div>
         {/* Brim */}
         <div className="absolute bottom-0 -left-4 w-24 h-10 bg-white rounded-full shadow-md z-20 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#f8fafc,#e2e8f0)] opacity-80" />
         </div>
      </div>

      {/* Head */}
      <div className="absolute top-16 z-40 flex flex-col items-center">
        <div className="w-20 h-20 bg-skin-light rounded-[2.5rem] relative shadow-inner z-10">
           {/* Eyes */}
           <div className="absolute top-9 left-4 w-3 h-3 bg-black rounded-full animate-blink">
               <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full opacity-60" />
           </div>
           <div className="absolute top-9 right-4 w-3 h-3 bg-black rounded-full animate-blink">
               <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full opacity-60" />
           </div>
           {/* Blush */}
           <div className="absolute top-11 left-2 w-4 h-3 bg-red-400 rounded-full opacity-20 blur-[2px]" />
           <div className="absolute top-11 right-2 w-4 h-3 bg-red-400 rounded-full opacity-20 blur-[2px]" />
           {/* Nose */}
           <div className="absolute top-10 left-1/2 -translate-x-1/2 w-5 h-4 bg-red-300 rounded-full shadow-sm" />
        </div>

        {/* Beard & Mustache */}
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
             <div className="flex -space-x-1 z-20 mt-2">
                 <div className="w-9 h-5 bg-white rounded-l-full rounded-tr-xl shadow-sm bg-gray-50" />
                 <div className="w-9 h-5 bg-white rounded-r-full rounded-tl-xl shadow-sm bg-gray-50" />
             </div>
             <div className="relative -mt-2 w-28 h-24 z-10">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-[40%] shadow-md bg-[radial-gradient(circle_at_50%_10%,#fff,#e2e8f0)]" />
             </div>
        </div>
      </div>

      {/* Body Container */}
      <div className="absolute bottom-8 z-20 flex flex-col items-center">
         {/* Main Body */}
         <div className="w-40 h-36 bg-santa-red-light rounded-[3rem] shadow-xl flex flex-col items-center relative overflow-hidden bg-[radial-gradient(circle_at_30%_30%,#e74c3c,#922b21)]">
            {/* Belt */}
            <div className="absolute top-20 w-full h-9 bg-gray-900 shadow-md flex justify-center items-center z-20">
               <div className="w-12 h-7 border-[4px] border-gold-light rounded-md bg-transparent shadow-[0_0_5px_rgba(241,196,15,0.4)]" />
            </div>
            {/* Buttons */}
            <div className="mt-10 space-y-3 relative z-20 opacity-90">
               <div className="w-3 h-3 bg-gold-light rounded-full shadow-sm border border-yellow-600" />
               <div className="w-3 h-3 bg-gold-light rounded-full shadow-sm border border-yellow-600" />
            </div>
            <div className="absolute top-0 w-10 h-full bg-white opacity-10 blur-sm" />
         </div>
         
         {/* Arms */}
         <div className="absolute top-4 -left-3 w-10 h-20 bg-santa-red-dark rounded-full rotate-12 -z-10 shadow-lg" />
         <div className="absolute top-4 -right-3 w-10 h-20 bg-santa-red-dark rounded-full -rotate-12 -z-10 shadow-lg" />
         {/* Mittens */}
         <div className="absolute top-20 -left-6 w-8 h-8 bg-green-800 rounded-full border-2 border-white shadow-sm" />
         <div className="absolute top-20 -right-6 w-8 h-8 bg-green-800 rounded-full border-2 border-white shadow-sm" />
      </div>

      {/* Boots */}
      <div className="absolute bottom-0 z-10 flex gap-8">
         <div className="w-12 h-12 bg-gray-900 rounded-b-xl rounded-t-lg shadow-lg bg-[radial-gradient(circle_at_30%_20%,#333,#000)]" />
         <div className="w-12 h-12 bg-gray-900 rounded-b-xl rounded-t-lg shadow-lg bg-[radial-gradient(circle_at_30%_20%,#333,#000)]" />
      </div>
    </div>
  );
};