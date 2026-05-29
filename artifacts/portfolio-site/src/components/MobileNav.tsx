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
        "fixed inset-0 z-50 flex flex-col transition-all duration-300",
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      style={{
        background: "linear-gradient(160deg, rgba(255,255,255,0.97) 0%, rgba(219,234,254,0.95) 50%, rgba(191,219,254,0.93) 100%)",
        backdropFilter: "blur(28px) saturate(180%)",
        WebkitBackdropFilter: "blur(28px) saturate(180%)",
        borderRight: "1px solid rgba(255,255,255,0.6)",
        boxShadow: "inset 1px 0 0 rgba(255,255,255,0.8), 4px 0 40px rgba(59,130,246,0.08)",
      }}
      aria-hidden={!isOpen}
    >
      {/* Top edge highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between px-6 pb-5 pt-6 border-b border-blue-100/60">
        <span className="text-xl font-bold tracking-tight text-blue-600">
          Portfolio<span className="text-slate-900">.</span>
        </span>
        <button
          onClick={() => setIsOpen(false)}
          data-testid="button-close-nav"
          aria-label="Close menu"
          className="grid size-10 place-items-center rounded-full bg-white/60 border border-blue-100 text-slate-600 transition-colors hover:bg-blue-50 hover:text-slate-900 shadow-sm"
        >
          <X className="size-5" />
        </button>
      </div>

      {/* Links */}
      <nav className="flex-1 overflow-y-auto px-6 pt-5">
        {sections.map((section, si) => (
          <div key={si}>
            <ul>
              {section.map((item) => (
                <li key={item.label} className="py-0.5">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setExpanded((v) => (v === item.label ? null : item.label))
                        }
                        className="flex w-full items-center justify-between py-3 text-2xl font-light tracking-wide text-slate-700 transition-colors hover:text-blue-600"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "size-5 text-slate-400 transition-transform duration-300",
                            expanded === item.label && "rotate-180 text-blue-500",
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
                                className="block py-2.5 text-base font-light text-slate-500 transition-colors hover:text-blue-600"
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
                      className="block py-3 text-2xl font-light tracking-wide text-slate-700 transition-colors hover:text-blue-600"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            {si < sections.length - 1 && (
              <div className="my-3 h-px w-full bg-gradient-to-r from-transparent via-blue-200/70 to-transparent" />
            )}
          </div>
        ))}
      </nav>

      {/* Bottom CTAs — same btn-capsule system */}
      <div className="flex items-center gap-3 px-6 pb-10 pt-5 border-t border-blue-100/60">
        {/* Hire Now — yellow gradient skeuomorphic */}
        <button
          data-testid="button-hire-now"
          className="btn-capsule flex-1"
          style={{
            background: "linear-gradient(180deg, #ffe066 0%, #ffd11a 50%, #f5b800 100%)",
            color: "#1a1400",
            boxShadow:
              "0 8px 16px -4px rgba(245,184,0,0.45), inset 0 2px 2px rgba(255,255,255,0.7), inset 0 -2px 4px rgba(150,110,0,0.25)",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = "";
          }}
          onMouseDown={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(2px)";
          }}
          onMouseUp={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
          }}
        >
          Hire Now
        </button>

        {/* Let's connect — secondary style */}
        <button
          data-testid="button-lets-connect"
          className="btn-capsule btn-3d-secondary flex-1"
        >
          Let&apos;s connect
        </button>
      </div>
    </div>
  );
}
