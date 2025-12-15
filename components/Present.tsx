import React from 'react';

interface PresentProps {
  color: string;
  ribbon: string;
  pattern: 'solid' | 'striped' | 'dots';
  size: string;
}

export const Present: React.FC<PresentProps> = ({ color, ribbon, pattern, size }) => {
  const patternClass = 
    pattern === 'striped' ? 'bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:10px_10px]' :
    pattern === 'dots' ? 'bg-[radial-gradient(rgba(255,255,255,0.2)_2px,transparent_2px)] bg-[length:10px_10px]' :
    '';

  return (
    <div className={`relative ${size} shadow-xl rounded-sm flex items-center justify-center group`}>
      {/* Box Body with gradient for 3D effect */}
      <div className={`absolute inset-0 ${color} rounded-sm overflow-hidden bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(0,0,0,0.2))]`}>
          <div className={`absolute inset-0 ${patternClass}`} />
      </div>

      {/* Vertical Ribbon */}
      <div className={`h-full w-[15%] ${ribbon} absolute shadow-sm z-10`} />
      {/* Horizontal Ribbon */}
      <div className={`w-full h-[15%] ${ribbon} absolute shadow-sm z-10`} />
      
      {/* Bow Complex */}
      <div className="absolute -top-[15%] w-[50%] h-[30%] z-20">
         {/* Left Loop */}
         <div className={`absolute left-0 bottom-0 w-[60%] h-full ${ribbon} rounded-[50%_0_0_50%] rounded-tr-sm rotate-[-10deg] shadow-md border-r border-black/10`} />
         {/* Right Loop */}
         <div className={`absolute right-0 bottom-0 w-[60%] h-full ${ribbon} rounded-[0_50%_50%_0] rounded-tl-sm rotate-[10deg] shadow-md border-l border-black/10`} />
         {/* Center Knot */}
         <div className={`absolute left-1/2 bottom-0 -translate-x-1/2 w-[20%] h-[50%] ${ribbon} rounded-sm shadow-inner`} />
      </div>
    </div>
  );
};