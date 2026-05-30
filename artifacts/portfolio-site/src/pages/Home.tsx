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
  const headerRef = useRef<HTMLElement | null>(null);
  const floatRef = useRef<HTMLButtonElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  /* Mouse parallax */
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

  /* Scroll-reveal header + floating button dock */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const pastHero = !entry.isIntersecting;
        headerRef.current?.classList.toggle("is-visible", pastHero);
        floatRef.current?.classList.toggle("is-docked", pastHero);
      },
      { threshold: 0.1 },
    );
    io.observe(hero);
    return () => io.disconnect();
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

        {/* ── Header — scroll-reveal AI glass strip ── */}
        <header ref={headerRef} className="ai-glass-header">
          <div className="ai-glass-header__inner">
            {/* Brand */}
            <span className="ai-glass-header__brand select-none font-black uppercase">
              GFX <span>WITH</span> USMAN
            </span>

            {/* Desktop nav */}
            <nav className="ai-glass-header__nav">
              {["Work", "About", "Services", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="ai-glass-header__link">
                  {l}
                </a>
              ))}
            </nav>

            {/* Right: clock + mobile hamburger */}
            <div className="flex items-center gap-3">
              <div className="ai-glass-header__clock">
                <LiveClock />
              </div>
              <button
                onClick={() => setNavOpen(true)}
                data-testid="button-menu"
                aria-label="Open menu"
                className="ai-glass-header__menu"
              >
                <Menu className="size-5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </header>

        {/* ── Floating message button ── */}
        <button
          ref={floatRef}
          className="floating-message-button"
          aria-label="Send a message"
          onClick={() => {
            const el = document.getElementById("contact");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>

        {/* ── Hero ── */}
        <main ref={heroRef} className="w-full">
          {/* Text + buttons — padded */}
          <section className="relative w-full px-6 pb-6 md:px-12">

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
