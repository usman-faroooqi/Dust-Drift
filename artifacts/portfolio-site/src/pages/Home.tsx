import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Menu } from "lucide-react";
import { DustParticles } from "@/components/DustParticles";
import { GlassCard } from "@/components/GlassCard";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { MobileNav } from "@/components/MobileNav";
import { TypingText } from "@/components/TypingText";
import { WorkSection } from "@/components/WorkSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  // Parallax
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const bgX = useTransform(mouseX, [-1, 1], [-2, 2]);
  const bgY = useTransform(mouseY, [-1, 1], [-2, 2]);
  const particles1X = useTransform(mouseX, [-1, 1], [-5, 5]);
  const particles1Y = useTransform(mouseY, [-1, 1], [-5, 5]);
  const particles2X = useTransform(mouseX, [-1, 1], [-15, 15]);
  const particles2Y = useTransform(mouseY, [-1, 1], [-15, 15]);
  const cardsX = useTransform(mouseX, [-1, 1], [-35, 35]);
  const cardsY = useTransform(mouseY, [-1, 1], [-35, 35]);

  return (
    <div className="relative w-full overflow-x-hidden bg-vignette font-sans text-gray-900 selection:bg-blue-200">

      {/* ── Fixed background scene (particles + gradients) ── */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="noise-bg" />
        <motion.div className="absolute inset-0 light-gradient" style={{ x: bgX, y: bgY }} />
        <motion.div className="absolute inset-0 overflow-hidden" style={{ x: particles1X, y: particles1Y }}>
          <DustParticles />
        </motion.div>
        <motion.div className="absolute inset-0 overflow-hidden opacity-60" style={{ x: particles2X, y: particles2Y }}>
          {/* second parallax layer handled inside DustParticles via groups */}
        </motion.div>
      </div>

      {/* ── Sticky header ── */}
      <header className="fixed top-0 left-0 right-0 z-40 p-6 md:p-8 flex justify-between items-center pointer-events-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg font-semibold tracking-tight text-gray-800"
        >
          Usman<span style={{ color: "#2563eb" }}>.</span>
        </motion.span>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hidden md:flex items-center gap-8"
        >
          {["Work", "About", "Skills", "Contact"].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={() => setNavOpen(true)}
          data-testid="button-menu"
          className="p-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-full shadow-sm hover:bg-white/60 transition-colors"
        >
          <Menu className="w-5 h-5 text-gray-800" strokeWidth={2} />
        </motion.button>
      </header>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[100dvh] w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-16 lg:px-24 pt-28 pb-16"
        style={{ zIndex: 1 }}>

        {/* Left: Name + Typing role */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-8 z-30 mb-16 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.25 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.05] tracking-tight text-gray-900 mb-4">
              Usman Farooqi
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight min-h-[1.4em]">
              <TypingText />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
            className="flex flex-wrap items-center gap-4"
          >
            <PrimaryButton onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}>
              See My Work
            </PrimaryButton>
            <SecondaryButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Let's Talk
            </SecondaryButton>
          </motion.div>

          {/* Subtle availability badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full"
            style={{
              background: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.7)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-600 font-medium">Available for new projects</span>
          </motion.div>
        </div>

        {/* Right: Glass Cards Parallax */}
        <motion.div
          className="w-full lg:w-1/2 relative h-[400px] lg:h-[580px] flex items-center justify-center pointer-events-auto"
          style={{ x: cardsX, y: cardsY }}
        >
          <div className="relative w-full h-full max-w-lg">
            <GlassCard
              name="Interface Layout"
              role="Web System"
              stat="+42% Conv."
              initialRotate={-3}
              className="absolute top-10 right-4 lg:right-10 z-10 scale-90 opacity-90"
            />
            <GlassCard
              name="Interaction Design"
              role="Mobile Application"
              stat="98% CSAT"
              initialRotate={2}
              className="absolute bottom-10 left-4 lg:left-10 z-30"
            />
            <GlassCard
              name="Brand Identity"
              role="Visual System"
              stat="Award Winner"
              initialRotate={-1}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 shadow-2xl"
            />
          </div>
        </motion.div>
      </section>

      {/* ── Page Sections ── */}
      <div className="relative" style={{ zIndex: 1 }}>
        <WorkSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </div>

      {/* ── Footer ── */}
      <footer className="relative z-10 px-6 md:px-16 lg:px-24 py-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-sm text-gray-400">© 2024 Usman Farooqi. All rights reserved.</span>
        <div className="flex items-center gap-6">
          {["Behance", "Dribbble", "LinkedIn"].map(s => (
            <a key={s} href="#" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">{s}</a>
          ))}
        </div>
      </footer>

      {/* ── Mobile Nav Overlay ── */}
      <MobileNav isOpen={navOpen} setIsOpen={setNavOpen} />
    </div>
  );
}
