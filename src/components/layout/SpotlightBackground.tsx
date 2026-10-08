import React from "react";

/**
 * Shell wrapper providing rich dark background and noise styling across the entire layout.
 */
export function SpotlightBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#09090b] text-[#ededed] selection:bg-neutral-800 selection:text-white">
      {/* Subtle global grain grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-15 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden="true"
      />

      {/* Main content layer */}
      <div className="relative z-10 flex flex-col items-center w-full min-h-screen">
        {children}
      </div>
    </div>
  );
}
