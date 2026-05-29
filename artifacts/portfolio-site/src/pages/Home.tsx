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

        {/* ── Header — Apple-style solid glass ── */}
        <header className="sticky top-0 z-40 w-full">
          {/* Apple glass pill/bar */}
          <div
            className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
            style={{
              background: "rgba(243,245,255,0.52)",
              backdropFilter: "blur(40px) saturate(200%)",
              WebkitBackdropFilter: "blur(40px) saturate(200%)",
              borderBottom: "1px solid rgba(255,255,255,0.55)",
              boxShadow:
                "0 1px 0 rgba(0,0,0,0.04), 0 6px 24px rgba(59,130,246,0.05), inset 0 1px 0 rgba(255,255,255,0.7)",
            }}
          >
            {/* Logo */}
            <span className="select-none text-base font-black tracking-tight text-slate-900 uppercase" style={{ letterSpacing: "0.04em" }}>
              GFX <span className="text-blue-600">WITH</span> USMAN
            </span>

            {/* Desktop nav links — hidden on mobile */}
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

            {/* Right side: clock on desktop, hamburger on mobile only */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <LiveClock />
              </div>
              {/* Hamburger — mobile only */}
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
          <section className="relative flex min-h-[95vh] w-full flex-col px-6 pt-10 pb-10 md:px-12">

            {/* ── Name + niche pushed near top ── */}
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

              {/* Niche typewriter — centered */}
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

              {/* Supporting text — centered */}
              <p className="mx-auto mt-4 max-w-sm text-center text-sm leading-relaxed text-slate-400">
                I craft visual identities and digital experiences that help brands stand out and connect with their audience.
              </p>

              {/* CTA buttons — left aligned */}
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

            {/* ── Video / showreel rectangle ── */}
            <div className="mt-10 w-full">
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{
                  aspectRatio: "16/7",
                  background: "linear-gradient(135deg, rgba(15,23,42,0.88) 0%, rgba(30,58,138,0.82) 100%)",
                  boxShadow: "0 24px 64px -12px rgba(15,23,42,0.28), 0 0 0 1px rgba(255,255,255,0.08)",
                  backdropFilter: "blur(2px)",
                }}
              >
                {/* Shimmer overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(59,130,246,0.18) 0%, transparent 70%)",
                  }}
                />
                {/* Grid lines for depth */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                  }}
                />
                {/* Play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <button
                    aria-label="Play showreel"
                    className="group flex size-16 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 active:scale-95"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      border: "1.5px solid rgba(255,255,255,0.3)",
                      backdropFilter: "blur(8px)",
                      boxShadow: "0 8px 32px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                    }}
                  >
                    {/* Triangle */}
                    <span
                      className="ml-1"
                      style={{
                        width: 0,
                        height: 0,
                        borderStyle: "solid",
                        borderWidth: "10px 0 10px 18px",
                        borderColor: "transparent transparent transparent rgba(255,255,255,0.9)",
                        display: "block",
                      }}
                    />
                  </button>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                    Watch showreel
                  </p>
                </div>
                {/* Corner labels */}
                <span className="absolute bottom-4 left-5 text-xs font-mono tracking-widest text-white/30 uppercase">
                  Showreel 2025
                </span>
                <span className="absolute bottom-4 right-5 text-xs font-mono tracking-widest text-white/30">
                  0:42
                </span>
              </div>
            </div>
          </section>

          <WorkSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />

          <footer className="mx-auto w-full max-w-6xl px-6 py-10 text-sm text-slate-400">
            © {new Date().getFullYear()} Usman Farooqi · GFX With Usman. Crafted with care.
          </footer>
        </main>
      </div>

      {/* Mobile nav overlay */}
      <MobileNav isOpen={navOpen} setIsOpen={setNavOpen} />
    </div>
  );
}
