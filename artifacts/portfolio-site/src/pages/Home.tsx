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
          <section className="mx-auto flex min-h-[86vh] w-full max-w-6xl flex-col items-start justify-center px-6 py-16 md:flex-row md:items-center md:gap-12">

            {/* Left copy */}
            <div className="max-w-xl flex-1">
              <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Usman Farooqi
              </h1>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-blue-600 sm:text-4xl lg:text-5xl">
                <Typewriter words={["Graphic Designer", "Brand Designer", "Art Director"]} />
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
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

            {/* Right — floating cards */}
            <div
              className="mt-12 flex flex-1 justify-center md:mt-0"
              style={{
                translate: `${px * -30}px ${py * -20}px`,
                transition: "translate 700ms cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <FloatingCards px={px} py={py} />
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
