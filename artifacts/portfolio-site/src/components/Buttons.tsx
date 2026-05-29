import React from "react";
import { motion } from "framer-motion";

export function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative px-8 py-3 rounded-full text-white font-semibold text-sm transition-shadow duration-300 outline-none select-none"
      style={{
        background: "linear-gradient(180deg, #4a90e2 0%, #1a5fd8 100%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 12px rgba(26,95,216,0.45), 0 1px 3px rgba(0,0,0,0.2)",
      }}
    >
      <div className="absolute top-0 inset-x-4 h-1/2 bg-white/20 blur-[2px] rounded-t-full pointer-events-none" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

export function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative px-8 py-3 rounded-full text-[#1a2744] font-medium text-sm transition-all duration-300 outline-none select-none"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #d8ecff 50%, #b8d9ff 100%)",
        border: "1px solid rgba(100,150,220,0.3)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 8px rgba(100,150,220,0.25)",
      }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
