import { cn } from "@/lib/utils";
import { ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const sections: NavItem[][] = [
  [
    { label: "Home", href: "#" },
    {
      label: "Work",
      children: [
        { label: "Case studies", href: "#work" },
        { label: "Experiments", href: "#work" },
        { label: "Archive", href: "#work" },
      ],
    },
    {
      label: "Services",
      children: [
        { label: "Product design", href: "#services" },
        { label: "Web development", href: "#services" },
        { label: "Brand systems", href: "#services" },
      ],
    },
  ],
  [
    { label: "About", href: "#about" },
    { label: "Journal", href: "#" },
    {
      label: "Resources",
      children: [
        { label: "Templates", href: "#" },
        { label: "Toolkit", href: "#" },
      ],
    },
  ],
  [{ label: "Contact", href: "#contact" }],
];

export function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col bg-navy text-white transition-all duration-300",
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!isOpen}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 pb-4 pt-6">
        <span className="text-xl font-bold tracking-tight text-emerald-400">Portfolio.</span>
        <button
          onClick={() => setIsOpen(false)}
          data-testid="button-close-nav"
          aria-label="Close menu"
          className="grid size-10 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="size-6" />
        </button>
      </div>

      {/* Links */}
      <nav className="flex-1 overflow-y-auto px-6 pt-4">
        {sections.map((section, si) => (
          <div key={si}>
            <ul>
              {section.map((item) => (
                <li key={item.label} className="py-1">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setExpanded((v) => (v === item.label ? null : item.label))
                        }
                        className="flex w-full items-center justify-between py-2 text-2xl font-light tracking-wide text-white/80 transition-colors hover:text-white"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "size-5 text-white/50 transition-transform duration-300",
                            expanded === item.label && "rotate-180",
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "grid transition-all duration-300 ease-out",
                          expanded === item.label
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <ul className="overflow-hidden pl-4">
                          {item.children.map((c) => (
                            <li key={c.label}>
                              <a
                                href={c.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-lg font-light text-white/55 transition-colors hover:text-emerald-300"
                              >
                                {c.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-2xl font-light tracking-wide text-white/80 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            {si < sections.length - 1 && (
              <div className="my-3 h-px w-full bg-white/10" />
            )}
          </div>
        ))}
      </nav>

      {/* Bottom CTAs */}
      <div className="flex items-center gap-3 px-6 pb-8 pt-4">
        <button
          data-testid="button-hire-now"
          className="group relative h-14 flex-1 rounded-full text-base font-semibold text-slate-900 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-px bg-[linear-gradient(180deg,#ffe066_0%,#ffd11a_50%,#f5b800_100%)] shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset,0_-6px_12px_-6px_rgba(150,110,0,0.5)_inset,0_12px_26px_-10px_rgba(245,184,0,0.7),0_30px_55px_-20px_rgba(180,130,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
        >
          <span className="pointer-events-none absolute inset-x-3 top-0.5 h-1/2 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0))]" />
          Hire Now
        </button>
        <button
          data-testid="button-lets-connect"
          className="h-14 flex-1 rounded-full border border-white/40 bg-white/5 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
        >
          Let&apos;s connect
        </button>
      </div>
    </div>
  );
}
