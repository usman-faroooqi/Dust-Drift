import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { PillButton } from "./Buttons";
import { Reveal } from "./Reveal";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-24">
      <Reveal className="glass rounded-[2rem] p-8 sm:p-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left copy */}
          <div>
            <p className="mb-3 text-sm font-medium text-blue-600">Let&apos;s talk</p>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-slate-500">
              Tell me a little about what you&apos;re building. I usually reply within a day, and I&apos;d love to hear the story behind it.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-600">
                <span className="grid size-10 place-items-center rounded-xl bg-slate-900/5">
                  <Mail className="size-4" />
                </span>
                <span className="text-sm">hello@usmanfarooqi.design</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <span className="grid size-10 place-items-center rounded-xl bg-slate-900/5">
                  <MapPin className="size-4" />
                </span>
                <span className="text-sm">Lahore, Pakistan · Remote</span>
              </div>
            </div>
          </div>

          {/* Right form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name" htmlFor="name">
                <input
                  id="name"
                  required
                  data-testid="input-name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none backdrop-blur-sm transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  type="email"
                  required
                  data-testid="input-email"
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none backdrop-blur-sm transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                />
              </Field>
            </div>
            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                required
                rows={4}
                data-testid="input-message"
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none backdrop-blur-sm transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
              />
            </Field>
            <PillButton variant="primary" size="lg" className="mt-1 w-full" type="submit" data-testid="button-submit">
              {sent ? "Message sent — thank you!" : "Send message"}
              {!sent && <ArrowRight className="size-4" />}
            </PillButton>
          </form>
        </div>
      </Reveal>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-xs font-medium text-slate-500">{label}</span>
      {children}
    </label>
  );
}
