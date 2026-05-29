import { motion } from "framer-motion";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "80+", label: "Projects Delivered" },
  { value: "34", label: "Happy Clients" },
  { value: "12", label: "Awards" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative z-20 w-full px-6 md:px-16 lg:px-24 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-500 mb-4 block">About Me</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2">
        {/* Left — Bio glass card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-2xl p-8 md:p-10"
          style={{
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            background: "rgba(255,255,255,0.48)",
            border: "1px solid rgba(255,255,255,0.65)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.10), 0 30px 60px rgba(0,0,0,0.06)",
          }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-2xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl pointer-events-none" />

          <div className="relative z-10">
            {/* Avatar placeholder */}
            <div className="w-16 h-16 rounded-2xl mb-6 overflow-hidden"
              style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">UF</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-6">
              Turning ideas into<br />
              <span style={{ color: "#2563eb" }}>visual experiences.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-base mb-4">
              I'm Usman Farooqi, a graphic designer based in Pakistan with over 6 years of experience helping brands find their visual voice. I specialise in brand identity, UI design, and motion — the kind of work that makes people stop scrolling.
            </p>
            <p className="text-gray-500 leading-relaxed text-base">
              My process starts with understanding, not aesthetics. Every pixel has a reason. Every colour has a meaning. The result is work that doesn't just look good — it works.
            </p>
          </div>
        </motion.div>

        {/* Right — Stats grid */}
        <div className="flex flex-col gap-6">
          {/* Stats glass card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="relative rounded-2xl p-8"
            style={{
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              background: "rgba(255,255,255,0.48)",
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.10), 0 30px 60px rgba(0,0,0,0.06)",
            }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-2xl" />
            <div className="grid grid-cols-2 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="text-4xl font-semibold text-gray-900 tracking-tight mb-1"
                    style={{ fontVariantNumeric: "tabular-nums" }}>
                    {s.value}
                  </div>
                  <div className="text-sm text-gray-500 font-light">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote glass card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="relative rounded-2xl p-8 flex-1"
            style={{
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              background: "rgba(255,255,255,0.48)",
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.10), 0 30px 60px rgba(0,0,0,0.06)",
            }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-2xl" />
            <blockquote className="text-xl font-light text-gray-700 leading-relaxed italic">
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>
            <p className="mt-4 text-sm text-gray-400">— Steve Jobs</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
