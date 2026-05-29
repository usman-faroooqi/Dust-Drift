import { useState, useEffect, useRef } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { DustLayer } from "@/components/DustLayer";
import { FloatingCards } from "@/components/FloatingCards";
import { PillButton } from "@/components/Buttons";
import { MobileNav } from "@/components/MobileNav";
import { Typewriter } from "@/components/TypingText";
import { WorkSection } from "@/components/WorkSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";

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

        {/* ── Header ── */}
        <header className="sticky top-0 z-40 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          {/* Frosted header bg */}
          <div className="absolute inset-0 bg-[#f3f3f5]/70 backdrop-blur-md" style={{ zIndex: -1 }} />
          <span className="relative text-xl font-bold tracking-tight text-slate-900">
            Portfolio<span className="text-blue-600">.</span>
          </span>
          <nav className="relative hidden items-center gap-8 md:flex">
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
          <div className="relative flex items-center gap-3">
            <PillButton
              variant="primary"
              size="md"
              className="hidden md:inline-flex"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-hire-header"
            >
              Hire me
            </PillButton>
            <button
              onClick={() => setNavOpen(true)}
              data-testid="button-menu"
              aria-label="Open menu"
              className="grid size-10 place-items-center rounded-full bg-white/50 border border-white/60 backdrop-blur-md text-slate-700 shadow-sm transition-colors hover:bg-white/70"
            >
              <Menu className="size-5" strokeWidth={2} />
            </button>
          </div>
        </header>

        {/* ── Hero ── */}
        <main className="w-full">
          <section className="relative flex min-h-[90vh] w-full flex-col justify-between overflow-hidden px-6 pb-12 pt-8 md:px-12 md:pb-16">

            {/* ── Full-bleed name ── */}
            <div className="mt-6 w-full select-none">
              <h1
                className="w-full text-center font-black uppercase leading-none tracking-tight text-slate-900"
                style={{ fontSize: "clamp(3.5rem, 13vw, 14rem)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
              >
                Usman Farooqi
              </h1>

              {/* Niche — centered small-caps tag */}
              <p
                className="mx-auto mt-6 text-center font-semibold uppercase tracking-[0.25em] text-slate-500"
                style={{ fontSize: "clamp(0.65rem, 1.4vw, 1rem)", letterSpacing: "0.3em" }}
              >
                <Typewriter
                  words={["Graphic Designer", "Brand Designer", "Art Director"]}
                  typeSpeed={100}
                  deleteSpeed={50}
                  holdTime={2000}
                />
              </p>
            </div>

            {/* ── Bottom row: description + floating cards + CTA ── */}
            <div className="mt-10 flex w-full flex-col items-end gap-8 md:flex-row md:items-end md:justify-between">
              {/* Description + buttons */}
              <div className="max-w-xs">
                <p className="mb-6 text-sm leading-relaxed text-slate-500">
                  I craft visual identities and digital experiences that help brands stand out and connect with their audience.
                </p>
                <div className="flex flex-wrap items-center gap-3">
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

              {/* Floating cards — parallax */}
              <div
                className="shrink-0"
                style={{
                  translate: `${px * -30}px ${py * -20}px`,
                  transition: "translate 700ms cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <FloatingCards px={px} py={py} />
              </div>
            </div>
          </section>

          <WorkSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />

          <footer className="mx-auto w-full max-w-6xl px-6 py-10 text-sm text-slate-400">
            © {new Date().getFullYear()} Usman Farooqi. Crafted with care.
          </footer>
        </main>
      </div>

      {/* Mobile nav overlay */}
      <MobileNav isOpen={navOpen} setIsOpen={setNavOpen} />
    </div>
  );
}
