import React, { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  opacity: number;
  size: number;
}

export const Snow: React.FC<{ count: number }> = ({ count }) => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 10,
      opacity: 0.3 + Math.random() * 0.7,
      size: 0.2 + Math.random() * 0.6,
    }));
    setSnowflakes(flakes);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-[-10px] bg-white rounded-full animate-snow blur-[1.5px]"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}rem`,
            height: `${flake.size}rem`,
            opacity: flake.opacity,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `-${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};