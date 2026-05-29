import { Layers, PenTool, Smartphone, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: PenTool,
    title: "Brand Identity",
    desc: "Logos, visual systems, and guidelines that give your brand a confident, lasting voice.",
  },
  {
    icon: Smartphone,
    title: "Product & UI",
    desc: "Clean, usable interfaces for web and mobile — designed to feel effortless and premium.",
  },
  {
    icon: Layers,
    title: "Art Direction",
    desc: "Cohesive visual language across campaigns, print, and digital touchpoints.",
  },
  {
    icon: Sparkles,
    title: "Motion & Polish",
    desc: "Micro-interactions and motion that add life without ever getting in the way.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-6 py-24">
      <Reveal className="mb-12 max-w-xl">
        <p className="mb-3 text-sm font-medium text-blue-600">What I do</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Services built around your story.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 90}
            as="article"
            className="glass group rounded-3xl p-7"
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-blue-600 text-white shadow-[0_8px_18px_-6px_rgba(31,99,230,0.6)] transition-transform duration-300 group-hover:-translate-y-1">
              <s.icon className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-pretty leading-relaxed text-slate-500">{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
