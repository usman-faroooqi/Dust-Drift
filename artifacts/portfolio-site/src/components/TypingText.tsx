import { useState, useEffect, useRef, useCallback } from "react";

const WORDS = ["Graphic Designer", "Brand Strategist", "Visual Artist", "Creative Director"];
const TYPE_SPEED = 80;
const DELETE_SPEED = 45;
const PAUSE_AFTER_TYPE = 1600;
const PAUSE_AFTER_DELETE = 400;

function useTypingSound() {
  const ctxRef = useRef<AudioContext | null>(null);

  const playTick = useCallback(() => {
    try {
      if (!ctxRef.current) {
        ctxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = ctxRef.current;
      if (ctx.state === "suspended") ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 780 + Math.random() * 180;
      osc.type = "triangle";
      gain.gain.setValueAtTime(0.035, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.045);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.045);
    } catch {
      // AudioContext not available, skip
    }
  }, []);

  return playTick;
}

export function TypingText() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const playTick = useTypingSound();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];

    const tick = () => {
      if (!isDeleting) {
        if (displayed.length < currentWord.length) {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
          playTick();
          timeoutRef.current = setTimeout(tick, TYPE_SPEED);
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(currentWord.slice(0, displayed.length - 1));
          playTick();
          timeoutRef.current = setTimeout(tick, DELETE_SPEED);
        } else {
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % WORDS.length);
          timeoutRef.current = setTimeout(tick, PAUSE_AFTER_DELETE);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, wordIndex, playTick]);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-baseline">
      <span
        className="font-medium"
        style={{ color: "#2563eb" }}
      >
        {displayed}
      </span>
      <span
        className="ml-0.5 inline-block w-0.5 h-[1em] align-middle"
        style={{
          background: "#2563eb",
          opacity: showCursor ? 1 : 0,
          transition: "opacity 0.1s",
          borderRadius: 2,
        }}
      />
    </span>
  );
}
