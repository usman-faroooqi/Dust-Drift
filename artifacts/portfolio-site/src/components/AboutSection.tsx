import { Reveal } from "./Reveal";

const stats = [
  { k: "8+", v: "Years designing" },
  { k: "120+", v: "Projects shipped" },
  { k: "40+", v: "Happy clients" },
];

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <Reveal className="glass rounded-3xl p-3">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <img
              src="/usman-portrait.png"
              alt="Portrait of Usman Farooqi"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mb-3 text-sm font-medium text-blue-600">About me</p>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            I turn ideas into calm, confident design.
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-slate-500">
            I&apos;m Usman Farooqi — a graphic designer obsessed with clarity,
            balance, and the small details that make a brand feel premium. From
            identity systems to product interfaces, I build visuals that breathe
            and communicate without shouting.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-slate-500">
            My approach is simple: understand the goal, strip away the noise,
            and craft something that feels effortless and timeless.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.v}
                className="glass rounded-2xl px-4 py-5 text-center"
              >
                <p className="text-2xl font-semibold tracking-tight text-slate-900">{s.k}</p>
                <p className="mt-1 text-xs text-slate-500">{s.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
