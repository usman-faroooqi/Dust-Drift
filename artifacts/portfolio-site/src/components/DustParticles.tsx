import React, { useMemo } from "react";

export function DustParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => {
      const size = Math.random() * 3 + 1; // 1 to 4px
      const opacity = Math.random() * 0.2 + 0.2; // 20-40%
      const blur = Math.random() * 1.5;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 7 + 8; // 8-15s
      const delay = Math.random() * -15; // Random negative delay to start at diff points
      const group = Math.random() > 0.5 ? 1 : 2; // Group 1 background, Group 2 foreground

      return {
        id: i,
        size,
        opacity,
        blur,
        left,
        top,
        duration,
        delay,
        group,
      };
    });
  }, []);

  return (
    <>
      <div className="absolute inset-0 pointer-events-none z-0" data-depth="5" id="particles-group-1">
        {particles.filter(p => p.group === 1).map((p) => (
          <div
            key={p.id}
            className="particle absolute rounded-full bg-gray-500"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
              filter: `blur(${p.blur}px)`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none z-10" data-depth="15" id="particles-group-2">
        {particles.filter(p => p.group === 2).map((p) => (
          <div
            key={p.id}
            className="particle absolute rounded-full bg-gray-600"
            style={{
              width: p.size * 1.2,
              height: p.size * 1.2,
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
              filter: `blur(${p.blur}px)`,
              animationDuration: `${p.duration * 1.1}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
