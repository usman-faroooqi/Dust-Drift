import { useMemo } from "react";

type Particle = {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
  blur: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  scale: number;
  depth: number;
};

function makeParticles(count: number, seed: number): Particle[] {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: count }, (_, id) => {
    const depth = rand();
    const blurry = rand() > 0.82;
    return {
      id,
      top: rand() * 100,
      left: rand() * 100,
      size: 1 + rand() * (depth * 1.6 + 0.8),
      opacity: 0.35 + rand() * 0.35,
      blur: blurry ? 0.5 + rand() * 1 : 0,
      duration: (9 + rand() * 8) / 5,
      delay: -rand() * 12,
      driftX: 12 + rand() * 24,
      driftY: 24 + rand() * 30,
      scale: 1.4 + rand() * 0.6,
      depth,
    };
  });
}

export function DustLayer({
  count = 120,
  px = 0,
  py = 0,
}: {
  count?: number;
  px?: number;
  py?: number;
}) {
  const particles = useMemo(() => makeParticles(count, 7), [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          data-dust
          className="absolute rounded-full bg-neutral-700"
          style={
            {
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              filter: p.blur ? `blur(${p.blur}px)` : undefined,
              translate: `${px * (4 + p.depth * 14)}px ${py * (4 + p.depth * 14)}px`,
              transition: "translate 600ms cubic-bezier(0.22, 1, 0.36, 1)",
              animation: `floatDust ${p.duration}s ease-in-out ${p.delay}s infinite`,
              "--p-x": `${p.driftX}px`,
              "--p-y": `${p.driftY}px`,
              "--p-opacity": p.opacity,
              "--p-scale": p.scale,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
