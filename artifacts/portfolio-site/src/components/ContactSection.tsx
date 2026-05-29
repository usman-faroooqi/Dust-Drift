import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1400);
  };

  return (
    <section id="contact" className="relative z-20 w-full px-6 md:px-16 lg:px-24 py-28 pb-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-500 mb-4 block">Get In Touch</span>
        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
          Let's build something<br />
          <span style={{ color: "#2563eb" }}>remarkable.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl">
        {/* Info cards — left */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {[
            { label: "Email", value: "usman@farooqi.design", icon: "✉" },
            { label: "Based In", value: "Pakistan", icon: "📍" },
            { label: "Availability", value: "Open to projects", icon: "🟢" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative rounded-2xl p-5"
              style={{
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                background: "rgba(255,255,255,0.48)",
                border: "1px solid rgba(255,255,255,0.65)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08), 0 20px 40px rgba(0,0,0,0.05)",
              }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-2xl" />
              <div className="flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</div>
                  <div className="text-sm font-medium text-gray-800">{item.value}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message form — right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-span-3 relative rounded-2xl p-8 md:p-10"
          style={{
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            background: "rgba(255,255,255,0.50)",
            border: "1px solid rgba(255,255,255,0.65)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.10), 0 30px 60px rgba(0,0,0,0.07)",
          }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-2xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl pointer-events-none" />

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-4 py-8"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
                style={{ background: "linear-gradient(135deg, #4facfe 0%, #2563eb 100%)" }}>
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Message Sent</h3>
              <p className="text-gray-500 text-sm max-w-xs">Thanks for reaching out. I'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Name</label>
                  <input
                    data-testid="input-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none transition-all focus:ring-2"
                    style={{
                      background: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(0,0,0,0.09)",
                      focusRingColor: "rgba(37,99,235,0.35)",
                    } as React.CSSProperties}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Email</label>
                  <input
                    data-testid="input-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none transition-all focus:ring-2"
                    style={{
                      background: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(0,0,0,0.09)",
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Message</label>
                <textarea
                  data-testid="input-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-gray-800 placeholder-gray-400 outline-none resize-none transition-all focus:ring-2"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(0,0,0,0.09)",
                  }}
                />
              </div>

              <motion.button
                data-testid="button-submit"
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={sending}
                className="w-full py-4 rounded-full font-semibold text-white text-base flex items-center justify-center gap-2 mt-1 transition-opacity disabled:opacity-70"
                style={{
                  background: "linear-gradient(180deg, #4a90e2 0%, #1a5fd8 100%)",
                  boxShadow: "0 4px 12px rgba(26,95,216,0.45), 0 1px 3px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.25)",
                }}
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3"/>
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </span>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
