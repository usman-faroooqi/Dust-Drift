import React, { useMemo } from "react";

export function DustParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => {
      const size = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.2 + 0.2;
      const blur = Math.random() * 1.5;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = (Math.random() * 1.4 + 1.6); // 5x faster: 1.6–3s
      const delay = Math.random() * -3;
      const group = Math.random() > 0.5 ? 1 : 2;

      return { id: i, size, opacity, blur, left, top, duration, delay, group };
    });
  }, []);

  return (
    <>
      <div className="absolute inset-0 pointer-events-none z-0" id="particles-group-1">
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
      <div className="absolute inset-0 pointer-events-none z-10" id="particles-group-2">
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
