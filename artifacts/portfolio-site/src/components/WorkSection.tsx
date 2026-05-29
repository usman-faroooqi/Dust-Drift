import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Lumina Brand Identity",
    category: "Branding",
    year: "2024",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accent: "#764ba2",
  },
  {
    id: 2,
    title: "Orbit App UI",
    category: "UI Design",
    year: "2024",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accent: "#f5576c",
  },
  {
    id: 3,
    title: "Solaris Annual Report",
    category: "Print Design",
    year: "2023",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    accent: "#00b4db",
  },
  {
    id: 4,
    title: "Verdant Campaign",
    category: "Social Media",
    year: "2023",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    accent: "#38c172",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export function WorkSection() {
  return (
    <section id="work" className="relative z-20 w-full px-6 md:px-16 lg:px-24 py-28">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-500 mb-4 block">Selected Work</span>
        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
          Projects that matter.
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } }}
            data-testid={`card-project-${p.id}`}
            className="group relative rounded-2xl overflow-hidden cursor-pointer"
            style={{
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              background: "rgba(255,255,255,0.48)",
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.10), 0 30px 60px rgba(0,0,0,0.06)",
            }}
          >
            {/* Top highlight sheen */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

            {/* Gradient artwork area */}
            <div
              className="w-full h-52 relative overflow-hidden"
              style={{ background: p.gradient }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                  <circle cx="90" cy="90" r="80" stroke="white" strokeWidth="1" strokeDasharray="6 6" />
                  <circle cx="90" cy="90" r="50" stroke="white" strokeWidth="1" />
                  <circle cx="90" cy="90" r="20" fill="white" fillOpacity="0.3" />
                </svg>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-16"
                style={{ background: "linear-gradient(to top, rgba(255,255,255,0.15), transparent)" }}
              />
            </div>

            {/* Card body */}
            <div className="p-6 flex justify-between items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: p.accent }}>
                  {p.category}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight">{p.title}</h3>
              </div>
              <span className="text-sm text-gray-400 font-light">{p.year}</span>
            </div>

            {/* Hover arrow */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/60 backdrop-blur-sm border border-white/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#1a2744" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
