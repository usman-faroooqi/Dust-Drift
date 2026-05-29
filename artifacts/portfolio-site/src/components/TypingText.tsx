import { useEffect, useRef, useState } from "react";

/** Soft premium haptic — a very short double-pulse like iOS UIImpactFeedbackGenerator */
function haptic() {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate([4, 2, 4]);
  }
}

/** Slightly longer haptic burst when a full word is completed */
function hapticWordComplete() {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate([8, 4, 8, 4, 12]);
  }
}

export function Typewriter({
  words,
  className,
  typeSpeed = 110,
  deleteSpeed = 55,
  holdTime = 1400,
}: {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);

  // Only start animating once the element scrolls into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const current = words[wordIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timer = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
          haptic();
        }, typeSpeed);
      } else {
        hapticWordComplete();
        timer = setTimeout(() => setPhase("deleting"), holdTime);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(current.slice(0, text.length - 1));
          haptic();
        }, deleteSpeed);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, phase, wordIndex, words, active]);

  return (
    <span ref={containerRef} className={className}>
      {text}
      <span
        aria-hidden
        className="ml-1 inline-block h-[0.95em] w-[2px] translate-y-[0.12em] animate-pulse rounded-full bg-current"
      />
    </span>
  );
}
