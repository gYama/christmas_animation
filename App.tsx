import React, { useState, useEffect, useRef } from 'react';
import { ChristmasTree } from './components/ChristmasTree';
import { SantaClaus } from './components/SantaClaus';
import { Reindeer } from './components/Reindeer';
import { Present } from './components/Present';
import { Snow } from './components/Snow';

// Google Actions Sound Library - Jingle Bells (Reliable public URL)
const DEFAULT_MUSIC_URL = "";

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicSrc, setMusicSrc] = useState(DEFAULT_MUSIC_URL);
  const [inputValue, setInputValue] = useState(DEFAULT_MUSIC_URL);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize Audio Object
  useEffect(() => {
    audioRef.current = new Audio(musicSrc);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle Source Changes
  useEffect(() => {
    if (audioRef.current && audioRef.current.src !== musicSrc) {
      const wasPlaying = !audioRef.current.paused;
      audioRef.current.src = musicSrc;
      if (wasPlaying || isPlaying) {
        audioRef.current.play().catch((err) => {
          console.error("Audio playback failed:", err);
          setIsPlaying(false);
        });
      }
    }
  }, [musicSrc, isPlaying]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Audio playback failed:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleUrlSubmit = () => {
    if (inputValue && inputValue !== musicSrc) {
      setMusicSrc(inputValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleUrlSubmit();
      (e.target as HTMLInputElement).blur();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setMusicSrc(objectUrl);
      setInputValue(file.name); // Display filename for convenience, though underlying src is blob
      // Auto-play when file is selected
      if (!isPlaying) setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black flex items-end justify-center">
      
      {/* Controls Area */}
      <div className="absolute top-4 right-4 z-[100] flex flex-col items-end gap-2">
        {/* Play/Stop Button */}
        <button
          onClick={toggleMusic}
          className="bg-white/5 hover:bg-white/10 text-white/90 backdrop-blur-md px-6 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all border border-white/10 shadow-lg flex items-center gap-2 w-fit"
        >
          {isPlaying ? (
            <>
              <span>Stop Music</span>
              <span className="animate-pulse text-yellow-300">♫</span>
            </>
          ) : (
            <>
              <span>Play Music</span>
              <span className="text-gray-300">♪</span>
            </>
          )}
        </button>

        {/* Music Source Input Panel */}
        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md p-1.5 rounded-lg border border-white/10 shadow-xl transition-all hover:bg-black/40">
           <div className="relative group">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={handleUrlSubmit}
                onKeyDown={handleKeyDown}
                placeholder="Music URL..."
                className="bg-transparent text-white/80 text-[10px] px-2 py-1 w-32 sm:w-48 outline-none border-b border-transparent focus:border-white/30 transition-colors placeholder-white/20 truncate"
              />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[9px] text-white/30 pointer-events-none pr-1 hidden group-hover:block">
                Enter to apply
              </span>
           </div>
           
           <div className="w-[1px] h-4 bg-white/10 mx-1" />

           <button 
             onClick={() => fileInputRef.current?.click()}
             className="text-white/70 hover:text-yellow-300 p-1 transition-colors"
             title="Select Local File"
           >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
             </svg>
           </button>
           <input 
             type="file" 
             ref={fileInputRef} 
             onChange={handleFileSelect} 
             accept="audio/*" 
             className="hidden" 
           />
        </div>
      </div>

      {/* Moon / Ambience */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-100 rounded-full shadow-[0_0_100px_rgba(253,203,110,0.3)] opacity-80 z-0" />

      {/* Stars in background */}
      <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '0s' }} />
      <div className="absolute top-32 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
      <div className="absolute top-20 right-1/3 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />

      {/* Snow Effect - Always On */}
      <Snow count={80} />

      {/* Ground Layers (Hills) */}
      <div className="absolute bottom-0 w-[120%] -left-[10%] h-[35vh] bg-slate-300 rounded-[100%] shadow-[0_-10px_50px_rgba(0,0,0,0.3)] z-10 scale-y-75 origin-bottom" />
      <div className="absolute bottom-[-20px] w-[120%] -right-[10%] h-[30vh] bg-slate-100 rounded-[100%] shadow-[0_-5px_20px_rgba(255,255,255,0.5)] z-20 scale-y-75 origin-bottom" />
      
      {/* Foreground Snow (Covers feet) */}
      <div className="absolute -bottom-10 w-full h-[20vh] bg-white rounded-[50%] blur-[5px] z-50 scale-y-90 origin-bottom opacity-90" />

      {/* Main Scene Container */}
      <div className="relative z-40 flex items-end justify-center w-full max-w-6xl mx-auto px-4 pb-[12vh] gap-4 md:gap-12">
        
        {/* Reindeer - Left */}
        <div className="relative scale-90 sm:scale-100 transition-transform hover:scale-105 duration-700 z-30 origin-bottom">
            <Reindeer />
            {/* Shadow */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/20 rounded-full blur-sm -z-10" />
        </div>

        {/* Tree - Center - Lights Always On */}
        <div className="relative z-20 mx-auto -mb-6 scale-[0.85] sm:scale-100 md:scale-110 origin-bottom transition-transform duration-700">
            <ChristmasTree lightsOn={true} />
            {/* Shadow */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/30 rounded-full blur-md -z-10" />
            
            {/* Presents Cluster */}
            <div className="absolute bottom-8 -left-20 z-30 flex items-end -space-x-4">
              <div className="z-10 transform -rotate-6 origin-bottom-right"><Present color="bg-red-700" ribbon="bg-gold-light" pattern="striped" size="w-16 h-14" /></div>
              <div className="z-0 transform scale-90 -translate-y-2"><Present color="bg-green-800" ribbon="bg-red-500" pattern="solid" size="w-14 h-16" /></div>
            </div>
            <div className="absolute bottom-6 -right-16 z-30">
              <div className="transform rotate-3 origin-bottom-left"><Present color="bg-blue-800" ribbon="bg-white" pattern="dots" size="w-12 h-12" /></div>
            </div>
            <div className="absolute bottom-4 right-12 z-40">
               <Present color="bg-purple-800" ribbon="bg-yellow-400" pattern="solid" size="w-10 h-10" />
            </div>
        </div>

        {/* Santa - Right */}
        <div className="relative scale-90 sm:scale-100 transition-transform hover:scale-105 duration-700 z-30 origin-bottom">
            <SantaClaus />
            {/* Shadow */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-40 h-6 bg-black/20 rounded-full blur-sm -z-10" />
        </div>

      </div>
    </div>
  );
};

export default App;