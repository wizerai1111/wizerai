import React from 'react';

export function WizerLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="text-current font-bold tracking-[0.15em] leading-none text-[1.5em]">
        WIZER AI
      </div>
      <div className="w-full h-[2px] bg-[#7FE03D] mt-1" />
    </div>
  );
}