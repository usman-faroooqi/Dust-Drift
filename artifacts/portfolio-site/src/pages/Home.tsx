import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Menu } from "lucide-react";
import { DustParticles } from "@/components/DustParticles";
import { GlassCard } from "@/components/GlassCard";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { MobileNav } from "@/components/MobileNav";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax setup
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize between -1 and 1
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Transforms for layers
  const bgX = useTransform(mouseX, [-1, 1], [-2, 2]);
  const bgY = useTransform(mouseY, [-1, 1], [-2, 2]);
  
  const particles1X = useTransform(mouseX, [-1, 1], [-5, 5]);
  const particles1Y = useTransform(mouseY, [-1, 1], [-5, 5]);

  const particles2X = useTransform(mouseX, [-1, 1], [-15, 15]);
  const particles2Y = useTransform(mouseY, [-1, 1], [-15, 15]);

  const cardsX = useTransform(mouseX, [-1, 1], [-35, 35]);
  const cardsY = useTransform(mouseY, [-1, 1], [-35, 35]);

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-vignette font-sans text-gray-900 selection:bg-blue-200">
      <div className="noise-bg" />
      
      {/* Background soft light */}
      <motion.div 
        className="absolute inset-0 light-gradient pointer-events-none"
        style={{ x: bgX, y: bgY }}
      />

      {/* Dust Particles Layer */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ x: particles1X, y: particles1Y }}>
        <div id="p1-container" className="absolute inset-0" />
      </motion.div>
      <motion.div className="absolute inset-0 z-10 pointer-events-none" style={{ x: particles2X, y: particles2Y }}>
        <div id="p2-container" className="absolute inset-0" />
      </motion.div>
      
      {/* Mount actual particles via standard render */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-multiply opacity-80">
        <DustParticles />
      </div>

      {/* Header / Nav Trigger */}
      <header className="absolute top-0 left-0 right-0 z-40 p-6 md:p-10 flex justify-between items-center pointer-events-auto">
        <span className="text-xl font-semibold tracking-tight text-gray-800">Folio.</span>
        <button 
          onClick={() => setNavOpen(true)}
          className="p-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-full shadow-sm hover:bg-white/60 transition-colors"
        >
          <Menu className="w-5 h-5 text-gray-800" strokeWidth={2} />
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-20 w-full min-h-[100dvh] flex flex-col lg:flex-row items-center justify-center px-6 md:px-16 lg:px-24 pt-20">
        
        {/* Left: Hero Copy */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-8 z-30 mb-16 lg:mb-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-gray-900 mb-6">
              Design that <br />
              <span className="text-gray-400">feels human.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-md font-light leading-relaxed">
              Crafting digital experiences with obsessive attention to detail, motion, and purpose.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <PrimaryButton>Get Started</PrimaryButton>
            <SecondaryButton>Learn More</SecondaryButton>
          </motion.div>
        </div>

        {/* Right: Glass Cards Parallax Scene */}
        <motion.div 
          className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] flex items-center justify-center pointer-events-auto"
          style={{ x: cardsX, y: cardsY }}
        >
          <div className="relative w-full h-full max-w-lg">
            {/* Card 1 - Background */}
            <GlassCard 
              name="Interface Layout"
              role="Web System"
              stat="+42% Conv."
              initialRotate={-3}
              className="absolute top-10 right-4 lg:right-10 z-10 scale-90 opacity-90"
            />
            
            {/* Card 2 - Foreground */}
            <GlassCard 
              name="Interaction Design"
              role="Mobile Application"
              stat="98% CSAT"
              initialRotate={2}
              className="absolute bottom-10 left-4 lg:left-10 z-30"
            />
            
            {/* Card 3 - Middle */}
            <GlassCard 
              name="Brand Identity"
              role="Visual System"
              stat="Award Winner"
              initialRotate={-1}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 shadow-2xl"
            />
          </div>
        </motion.div>
      </main>

      {/* Mobile Nav Overlay */}
      <MobileNav isOpen={navOpen} setIsOpen={setNavOpen} />
    </div>
  );
}
