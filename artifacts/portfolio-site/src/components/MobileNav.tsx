import { useEffect } from "react";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigate = (href: string) => {
    setIsOpen(false);
    document.body.style.overflow = "";

    window.setTimeout(() => {
      if (href === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 flex flex-col transition-all duration-300",
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      style={{
        zIndex: 9000,
        background:
          "linear-gradient(160deg, rgba(248,250,255,0.72) 0%, rgba(219,234,254,0.62) 55%, rgba(191,219,254,0.58) 100%)",
        backdropFilter: "blur(56px) saturate(200%)",
        WebkitBackdropFilter: "blur(56px) saturate(200%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.8), 0 24px 80px rgba(15,23,42,0.14)",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent pointer-events-none" />

      <div className="flex flex-1 flex-col px-6 pb-8 pt-28">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-slate-500">
            Navigation
          </p>

          <h2 className="mt-3 text-3xl font-light tracking-tight text-slate-900">
            Explore the portfolio
          </h2>
        </div>

        <nav className="flex-1" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => handleNavigate(item.href)}
                  className="group flex w-full items-center justify-between border-b border-blue-100/60 py-4 text-left text-3xl font-light tracking-tight text-slate-700 transition-colors hover:text-blue-600"
                >
                  <span>{item.label}</span>

                  <span className="text-sm font-medium text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-500">
                    0{index + 1}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-blue-100/70 pt-5">
          <button
            type="button"
            data-testid="button-hire-now"
            className="btn-capsule w-full"
            style={{
              background:
                "linear-gradient(180deg, #ffe066 0%, #ffd11a 50%, #f5b800 100%)",
              color: "#1a1400",
              boxShadow:
                "0 8px 16px -4px rgba(245,184,0,0.45), inset 0 2px 2px rgba(255,255,255,0.7), inset 0 -2px 4px rgba(150,110,0,0.25)",
            }}
            onClick={() => handleNavigate("#contact")}
          >
            Hire Now
          </button>

          <button
            type="button"
            data-testid="button-lets-connect"
            className="btn-capsule btn-3d-secondary mt-3 w-full"
            onClick={() => handleNavigate("#contact")}
          >
            Let&apos;s connect
          </button>
        </div>
      </div>
    </div>
  );
}