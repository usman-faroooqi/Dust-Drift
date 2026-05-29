import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const projects = [
  {
    title: "Lumen — Brand Identity",
    tag: "Branding",
    img: "/work/brand-identity.png",
    span: "lg:col-span-2",
  },
  {
    title: "Vault — Fintech App",
    tag: "Product UI",
    img: "/work/mobile-app.png",
    span: "",
  },
  {
    title: "Form & Function",
    tag: "Poster Series",
    img: "/work/poster-series.png",
    span: "",
  },
  {
    title: "Aura — Packaging",
    tag: "Packaging",
    img: "/work/packaging.png",
    span: "lg:col-span-2",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-6 py-24">
      <Reveal className="mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-sm font-medium text-blue-600">Selected work</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Crafted with intent.
          </h2>
        </div>
        <p className="hidden max-w-xs text-sm leading-relaxed text-slate-500 sm:block">
          A glimpse into recent projects spanning brand systems, product interfaces, and print.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 90}
            as="article"
            className={`glass group rounded-3xl p-3 ${p.span}`}
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl">
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between px-3 py-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-blue-600">{p.tag}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-900">{p.title}</h3>
              </div>
              <span className="grid size-9 place-items-center rounded-full bg-slate-900/5 text-slate-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
