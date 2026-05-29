import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  name: string;
  role: string;
  stat: string;
  initialRotate: number;
  className?: string;
  style?: React.CSSProperties;
}

export function GlassCard({ name, role, stat, initialRotate, className, style }: GlassCardProps) {
  return (
    <motion.div
      initial={{ rotate: initialRotate, y: 0 }}
      whileHover={{
        y: -15,
        scale: 1.02,
        rotate: initialRotate * 0.5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1), 0 40px 80px rgba(0,0,0,0.06)",
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
      }}
      className={`relative w-64 p-6 rounded-2xl cursor-default overflow-hidden ${className}`}
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.45)",
        border: "1px solid rgba(255,255,255,0.6)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.12), 0 30px 60px rgba(0,0,0,0.08)",
        ...style
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none rounded-2xl" />
      <div className="relative z-10 flex flex-col items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gray-200 to-white shadow-inner flex items-center justify-center border border-white/50">
          <div className="w-4 h-4 bg-gray-400 rounded-full opacity-50" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 tracking-tight">{name}</h3>
          <p className="text-sm text-gray-600 mt-0.5">{role}</p>
        </div>
        <div className="mt-2 pt-4 border-t border-black/5 w-full flex justify-between items-center">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">IMPACT</span>
          <span className="text-sm font-bold text-gray-900">{stat}</span>
        </div>
      </div>
    </motion.div>
  );
}
