import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

function AccordionItem({ title, subLinks }: { title: string, subLinks: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-2xl font-light text-[#c8d0dc] tracking-wide">{title}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ChevronDown className="w-6 h-6 text-[#c8d0dc]" strokeWidth={1.5} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-4 flex flex-col gap-4">
              {subLinks.map((link, i) => (
                <a key={i} href="#" className="text-lg text-[#c8d0dc]/60 hover:text-white transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0.5 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-50 bg-[#0d1b2a] flex flex-col font-sans"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 md:p-8">
            <span className="text-xl font-bold text-green-400 tracking-tight">Portfolio.</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto px-6 md:px-12 py-8 flex flex-col">
            <div className="flex flex-col mb-12">
              <a href="#" className="py-5 text-2xl font-light text-[#c8d0dc] border-b border-white/10 tracking-wide hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="py-5 text-2xl font-light text-[#c8d0dc] border-b border-white/10 tracking-wide hover:text-white transition-colors">
                About
              </a>
              <AccordionItem 
                title="Work" 
                subLinks={["Case Studies", "Experiments", "Archive"]} 
              />
              <AccordionItem 
                title="Services" 
                subLinks={["Design Systems", "Prototyping", "Advisory"]} 
              />
            </div>
            
            <div className="flex flex-col border-t border-white/10 pt-4">
              <a href="#" className="py-4 text-xl font-light text-[#c8d0dc]/80 hover:text-white transition-colors">
                Blog
              </a>
              <a href="#" className="py-4 text-xl font-light text-[#c8d0dc]/80 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="p-6 md:p-8 flex flex-col gap-4 bg-[#0d1b2a] border-t border-white/5 pb-10">
            <button 
              className="w-full py-4 rounded-full font-semibold text-[#0d1b2a] text-lg tracking-wide shadow-lg"
              style={{ background: "linear-gradient(135deg, #f5c518 0%, #e6a800 100%)" }}
            >
              Hire Now
            </button>
            <button 
              className="w-full py-4 rounded-full font-medium text-white text-lg tracking-wide transition-colors hover:bg-white/10"
              style={{ border: "1.5px solid rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.06)" }}
            >
              Let's connect
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
