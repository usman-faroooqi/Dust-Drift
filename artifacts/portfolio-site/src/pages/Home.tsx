import { useState, useEffect, useRef } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { DustLayer } from "@/components/DustLayer";
import { PillButton } from "@/components/Buttons";
import { MobileNav } from "@/components/MobileNav";
import { Typewriter } from "@/components/TypingText";
import { WorkSection } from "@/components/WorkSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";

/** Live ticking clock shown in the header on desktop */
function LiveClock() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const hh = String(time.getHours()).padStart(2, "0");
  const mm = String(time.getMinutes()).padStart(2, "0");
  const ss = String(time.getSeconds()).padStart(2, "0");
  return (
    <span className="font-mono text-sm tabular-nums tracking-widest text-slate-600 select-none">
      {hh}<span className="opacity-40">:</span>{mm}<span className="opacity-40">:</span>
      <span className="text-blue-500">{ss}</span>
    </span>
  );
}

/**
 * Ambient showreel — autoplays muted + looped when scrolled into view.
 * No controls shown at any time.
 * To use a real video: set the `src` prop to your hosted video URL.
 */
function AmbientVideo({ src }: { src?: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "16 / 7" }}
    >
      {src ? (
        <video
          ref={videoRef}
          src={src}
          loop
          muted
          playsInline
          autoPlay
          disablePictureInPicture
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <img
          src="/showreel-placeholder.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [px, setPx] = useState(0);
  const [py, setPy] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const nx = (e.clientX / window.innerWidth - 0.5) * 2;
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;
        setPx(nx);
        setPy(ny);
      });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden scene-bg font-sans text-slate-900 selection:bg-blue-200">

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Dust particles — fixed behind everything */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0, translate: `${px * -2}px ${py * -2}px`, transition: "translate 800ms cubic-bezier(0.22,1,0.36,1)" }}
      >
        <DustLayer px={px} py={py} />
      </div>

      {/* Camera drift wrapper */}
      <div className="animate-camera-drift relative" style={{ zIndex: 1 }}>

        {/* ── Header — transparent glassy ── */}
        <header className="sticky top-0 z-40 w-full">
          <div
            className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
            style={{
              background: "rgba(243,245,255,0.52)",
              backdropFilter: "blur(40px) saturate(200%)",
              WebkitBackdropFilter: "blur(40px) saturate(200%)",
              borderBottom: "1px solid rgba(255,255,255,0.55)",
              boxShadow: "0 1px 0 rgba(0,0,0,0.04), 0 6px 24px rgba(59,130,246,0.05), inset 0 1px 0 rgba(255,255,255,0.7)",
            }}
          >
            <span
              className="select-none font-black uppercase text-slate-900"
              style={{ fontSize: "clamp(0.75rem, 1.2vw, 1rem)", letterSpacing: "0.06em" }}
            >
              GFX <span className="text-blue-600">WITH</span> USMAN
            </span>

            <nav className="hidden items-center gap-8 md:flex">
              {["Work", "About", "Services", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
                >
                  {l}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <LiveClock />
              </div>
              <button
                onClick={() => setNavOpen(true)}
                data-testid="button-menu"
                aria-label="Open menu"
                className="md:hidden grid size-10 place-items-center rounded-full text-slate-700 transition-colors hover:bg-slate-100"
              >
                <Menu className="size-5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </header>

        {/* ── Hero ── */}
        <main className="w-full">
          {/* Text + buttons — padded */}
          <section className="relative w-full px-6 pt-10 pb-6 md:px-12">

            {/* Name + niche */}
            <div className="w-full select-none">
              <h1
                className="w-full text-center font-black uppercase leading-none text-slate-900"
                style={{
                  fontSize: "clamp(3rem, 9.5vw, 11rem)",
                  letterSpacing: "-0.02em",
                  whiteSpace: "nowrap",
                  lineHeight: 0.9,
                }}
              >
                Usman Farooqi
              </h1>

              <p
                className="w-full text-center font-semibold uppercase text-slate-400 mt-4"
                style={{ fontSize: "clamp(0.7rem, 1.5vw, 1rem)", letterSpacing: "0.32em" }}
              >
                <Typewriter
                  words={["Graphic Designer", "Brand Designer", "Art Director"]}
                  typeSpeed={100}
                  deleteSpeed={50}
                  holdTime={2000}
                />
              </p>

              <p className="mx-auto mt-4 max-w-sm text-center text-sm leading-relaxed text-slate-400">
                I craft visual identities and digital experiences that help brands stand out and connect with their audience.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <PillButton
                  variant="primary"
                  size="lg"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  data-testid="button-hire-hero"
                >
                  Hire Now <ArrowRight className="size-4" />
                </PillButton>
                <PillButton
                  variant="secondary"
                  size="lg"
                  onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                  data-testid="button-view-work"
                >
                  View work
                </PillButton>
              </div>
            </div>
          </section>

          {/* Ambient showreel — full-bleed, zero padding, seamless UI */}
          <AmbientVideo />

          <WorkSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />

          <footer className="mx-auto w-full max-w-6xl px-6 py-10 text-sm text-slate-400">
            © {new Date().getFullYear()} Usman Farooqi · GFX With Usman. Crafted with care.
          </footer>
        </main>
      </div>

      <MobileNav isOpen={navOpen} setIsOpen={setNavOpen} />
    </div>
  );
}
