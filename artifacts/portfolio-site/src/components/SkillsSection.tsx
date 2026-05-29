import { motion } from "framer-motion";

const skills = [
  {
    id: 1,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="2" fill="#2563eb" fillOpacity="0.9"/>
        <rect x="15" y="3" width="10" height="10" rx="2" fill="#2563eb" fillOpacity="0.4"/>
        <rect x="3" y="15" width="10" height="10" rx="2" fill="#2563eb" fillOpacity="0.4"/>
        <rect x="15" y="15" width="10" height="10" rx="2" fill="#2563eb" fillOpacity="0.7"/>
      </svg>
    ),
    title: "Brand Identity",
    desc: "Logos, typography systems, colour palettes, and brand guidelines that define who you are — consistently and confidently.",
    tools: ["Illustrator", "Photoshop", "Figma"],
  },
  {
    id: 2,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="6" width="24" height="16" rx="3" stroke="#2563eb" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="4" fill="#2563eb" fillOpacity="0.8"/>
        <path d="M8 14h2M18 14h2" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "UI / UX Design",
    desc: "Clean, functional interfaces that feel intuitive from the first tap. From wireframes to pixel-perfect mockups.",
    tools: ["Figma", "Framer", "Webflow"],
  },
  {
    id: 3,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L25 8.5V19.5L14 25L3 19.5V8.5L14 3Z" stroke="#2563eb" strokeWidth="1.5"/>
        <path d="M14 3V25M3 8.5L25 19.5M25 8.5L3 19.5" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.4"/>
      </svg>
    ),
    title: "Motion Design",
    desc: "Animation that adds meaning, not noise. Scroll effects, micro-interactions, and cinematic brand videos.",
    tools: ["After Effects", "Lottie", "Rive"],
  },
  {
    id: 4,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L10 8L16 16L20 12L24 20H4Z" fill="#2563eb" fillOpacity="0.2" stroke="#2563eb" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Print & Editorial",
    desc: "Brochures, reports, packaging, and editorial layouts designed for maximum visual impact on paper.",
    tools: ["InDesign", "Illustrator", "Canva Pro"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-20 w-full px-6 md:px-16 lg:px-24 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-500 mb-4 block">What I Do</span>
        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
          Craft at every layer.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } }}
            data-testid={`card-skill-${s.id}`}
            className="relative rounded-2xl p-7 flex flex-col gap-5"
            style={{
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              background: "rgba(255,255,255,0.48)",
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.09), 0 24px 50px rgba(0,0,0,0.05)",
            }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-2xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-2xl pointer-events-none" />

            <div className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(37,99,235,0.08)",
                border: "1px solid rgba(37,99,235,0.15)",
              }}>
              {s.icon}
            </div>

            <div className="relative z-10">
              <h3 className="font-semibold text-gray-900 mb-2 tracking-tight">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light">{s.desc}</p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto">
              {s.tools.map(t => (
                <span key={t}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(37,99,235,0.08)",
                    color: "#2563eb",
                    border: "1px solid rgba(37,99,235,0.15)",
                  }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
