import { useEffect, useState, type FormEvent } from "react";
import {
  Check,
  ChevronLeft,
  Clock3,
  ExternalLink,
  FolderKanban,
  HomeIcon,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "osmanfaroooqi@gmail.com",
    href: "mailto:osmanfaroooqi@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/usmanfaroooqi",
    href: "https://www.linkedin.com/in/usmanfaroooqi",
    icon: ExternalLink,
  },
  {
    label: "Behance",
    value: "www.behance.net/usmanfaroooqi",
    href: "https://www.behance.net/usmanfaroooqi",
    icon: ExternalLink,
  },
];

const mobileMenuItems = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Services", href: "/#services", icon: Sparkles },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "About", href: "/#about", icon: UserRound },
  { label: "Contact", href: "/contact", icon: Mail },
];

function MenuClock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => window.clearInterval(id);
  }, []);

  const hh = String(time.getHours()).padStart(2, "0");
  const mm = String(time.getMinutes()).padStart(2, "0");
  const ss = String(time.getSeconds()).padStart(2, "0");

  return (
    <span className="contact-menu-clock">
      {hh}<span>:</span>{mm}<span>:</span><strong>{ss}</strong>
    </span>
  );
}

function MobileLiquidMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const [clockOpen, setClockOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <nav className="contact-mobile-menu" aria-label="Mobile menu">
      <div className="contact-mobile-menu__quick-row">
        <a href="/" aria-label="Go to home" onClick={() => setIsOpen(false)}>
          <HomeIcon size={16} strokeWidth={2} />
        </a>
        <a href="/contact" aria-label="Open contact" onClick={() => setIsOpen(false)}>
          <MessageCircle size={16} strokeWidth={2} />
        </a>
        <button
          type="button"
          aria-label="Show current time"
          onClick={() => setClockOpen((value) => !value)}
        >
          <Clock3 size={16} strokeWidth={2} />
        </button>
      </div>

      {clockOpen && (
        <div className="contact-mobile-menu__clock-popover" aria-live="polite">
          <span>Local time</span>
          <MenuClock />
        </div>
      )}

      <div className="contact-mobile-menu__divider" />

      <div className="contact-mobile-menu__links">
        {mobileMenuItems.map((item) => {
          const Icon = item.icon;

          return (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
              <Icon size={19} strokeWidth={2} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrevqebq";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSent(true);
      form.reset();

      window.setTimeout(() => {
        setSent(false);
      }, 2800);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <style>{`
        .contact-page {
          min-height: 100dvh;
          position: relative;
          overflow-x: hidden;
          padding: 120px 24px 70px;
          background:
            radial-gradient(circle at 50% 0%, rgba(255,255,255,0.98), transparent 46%),
            radial-gradient(circle at 86% 14%, rgba(191,219,254,0.48), transparent 34%),
            radial-gradient(circle at 12% 76%, rgba(226,232,240,0.48), transparent 34%),
            linear-gradient(180deg, #f8fafc 0%, #eef1f5 48%, #f8fafc 100%);
        }

        .contact-topbar {
          position: fixed;
          top: 22px;
          left: 24px;
          right: 24px;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          pointer-events: none;
        }

        .contact-back,
        .contact-menu-button {
          pointer-events: auto;
          border: 1px solid rgba(255,255,255,0.76);
          backdrop-filter: blur(26px) saturate(170%);
          -webkit-backdrop-filter: blur(26px) saturate(170%);
          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,0.72),
              rgba(255,255,255,0.34)
            );
          box-shadow:
            0 18px 44px rgba(15,23,42,0.10),
            inset 0 1px 0 rgba(255,255,255,0.96),
            inset 0 -1px 0 rgba(15,23,42,0.07);
        }

        .contact-back {
          width: 54px;
          height: 54px;
          min-height: 54px;
          padding: 0;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          text-decoration: none;
          font-weight: 900;
        }

        .contact-back svg {
          width: 25px;
          height: 25px;
        }

        .contact-menu-button {
          width: 52px;
          height: 52px;
          border-radius: 999px;
          display: none;
          align-items: center;
          justify-content: center;
          color: #071225;
        }

        .contact-mobile-menu {
          position: fixed;
          top: 86px;
          right: 24px;
          z-index: 21;
          width: min(270px, calc(100vw - 48px));
          padding: 15px;
          border-radius: 26px;
          backdrop-filter: blur(30px) saturate(175%);
          -webkit-backdrop-filter: blur(30px) saturate(175%);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.70) 0%,
              rgba(255, 255, 255, 0.38) 100%
            );
          border: 1px solid rgba(255, 255, 255, 0.78);
          box-shadow:
            0 24px 66px rgba(15, 23, 42, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.92),
            inset 0 -1px 0 rgba(15, 23, 42, 0.08);
          animation: contactMobileMenuIn 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .contact-mobile-menu__quick-row {
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin-bottom: 12px;
        }

        .contact-mobile-menu__quick-row a,
        .contact-mobile-menu__quick-row button {
          width: 36px;
          height: 36px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #0f172a;
          text-decoration: none;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.42);
          border: 1px solid rgba(255, 255, 255, 0.70);
        }

        .contact-mobile-menu__clock-popover {
          margin: -2px 4px 12px;
          padding: 12px 14px;
          border-radius: 18px;
          display: grid;
          gap: 6px;
          background: rgba(255, 255, 255, 0.48);
          border: 1px solid rgba(255, 255, 255, 0.72);
          box-shadow:
            0 14px 32px rgba(15, 23, 42, 0.10),
            inset 0 1px 0 rgba(255, 255, 255, 0.84);
        }

        .contact-mobile-menu__clock-popover > span:first-child {
          color: #94a3b8;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .contact-menu-clock {
          display: inline-flex;
          align-items: baseline;
          gap: 5px;
          color: #071225;
          font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 0.06em;
          line-height: 1;
        }

        .contact-menu-clock span {
          color: #94a3b8;
          font-weight: 700;
        }

        .contact-menu-clock strong {
          color: #2563eb;
          font-weight: 900;
        }

        .contact-mobile-menu__divider {
          height: 1px;
          background: rgba(15, 23, 42, 0.08);
          margin-bottom: 8px;
        }

        .contact-mobile-menu__links {
          display: grid;
          gap: 2px;
        }

        .contact-mobile-menu__links a {
          min-height: 44px;
          padding: 0 6px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 13px;
          color: #0f172a;
          text-decoration: none;
          font-size: 17px;
          font-weight: 850;
          letter-spacing: -0.02em;
        }

        .contact-mobile-menu__links a svg {
          color: #2563eb;
          opacity: 0.86;
        }

        @keyframes contactMobileMenuIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.96);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .contact-inner {
          width: min(980px, 100%);
          margin: 0 auto;
        }

        .contact-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          color: #94a3b8;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.30em;
          text-transform: uppercase;
        }

        .contact-eyebrow span:nth-child(1) {
          width: 40px;
          height: 4px;
          border-radius: 999px;
          background: #2563eb;
        }

        .contact-eyebrow span:nth-child(2) {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #2563eb;
        }

        .contact-title {
          margin: 0;
          color: #071225;
          font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
          font-size: clamp(44px, 7vw, 84px);
          line-height: 0.95;
          font-weight: 850;
          letter-spacing: -0.07em;
          text-transform: uppercase;
        }

        .contact-subline {
          max-width: 560px;
          margin: 22px 0 38px;
          color: #64748b;
          font-size: clamp(17px, 2vw, 22px);
          line-height: 1.55;
          font-weight: 600;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 22px;
          align-items: start;
        }

        .contact-card,
        .contact-form {
          border-radius: 30px;
          backdrop-filter: blur(26px) saturate(170%);
          -webkit-backdrop-filter: blur(26px) saturate(170%);
          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,0.70),
              rgba(255,255,255,0.36)
            );
          border: 1px solid rgba(255,255,255,0.78);
          box-shadow:
            0 24px 70px rgba(15,23,42,0.10),
            inset 0 1px 0 rgba(255,255,255,0.92),
            inset 0 -1px 0 rgba(15,23,42,0.06);
        }

        .contact-card {
          padding: 22px;
        }

        .contact-link {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 14px;
          align-items: center;
          padding: 16px 0;
          color: #071225;
          text-decoration: none;
          border-bottom: 1px solid rgba(15,23,42,0.07);
        }

        .contact-link:last-child {
          border-bottom: none;
        }

        .contact-link-icon {
          width: 48px;
          height: 48px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,0.78),
              rgba(255,255,255,0.38)
            );
          border: 1px solid rgba(255,255,255,0.82);
        }

        .contact-link strong {
          display: block;
          font-size: 16px;
          font-weight: 900;
        }

        .contact-link span {
          display: block;
          margin-top: 4px;
          color: #64748b;
          font-size: 14px;
          font-weight: 650;
          overflow-wrap: anywhere;
        }

        .contact-form {
          padding: 24px;
          display: grid;
          gap: 14px;
        }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          width: 100%;
          border: 1px solid rgba(148,163,184,0.22);
          outline: none;
          border-radius: 18px;
          padding: 15px 16px;
          color: #071225;
          font-size: 14px;
          font-weight: 700;
          background: rgba(255,255,255,0.56);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.84);
        }

        .contact-form textarea {
          min-height: 130px;
          resize: vertical;
        }

        .contact-send {
          min-height: 52px;
          border: 1px solid rgba(255,255,255,0.82);
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          color: #071225;
          font-weight: 900;
          cursor: pointer;
          background:
            radial-gradient(circle at 44% 8%, rgba(255,255,255,0.96), rgba(255,255,255,0.34) 31%, transparent 58%),
            linear-gradient(180deg, #dbeafe 0%, #93c5fd 44%, #3b82f6 100%);
          box-shadow:
            0 18px 42px rgba(37,99,235,0.28),
            inset 0 2px 2px rgba(255,255,255,0.72),
            inset 0 -2px 5px rgba(29,78,216,0.22);
        }

        .contact-toast {
          position: fixed;
          left: 50%;
          top: 28px;
          z-index: 40;
          transform: translateX(-50%);
          min-height: 52px;
          padding: 0 22px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #071225;
          font-weight: 900;
          backdrop-filter: blur(24px) saturate(165%);
          -webkit-backdrop-filter: blur(24px) saturate(165%);
          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,0.76),
              rgba(255,255,255,0.36)
            );
          border: 1px solid rgba(255,255,255,0.82);
          box-shadow: 0 20px 50px rgba(15,23,42,0.13);
        }

        .contact-toast--error {
          color: #991b1b;
        }

        .contact-send:disabled {
          cursor: wait;
          opacity: 0.72;
          transform: none;
        }

        @media (max-width: 760px) {
          .contact-page {
            padding: 112px 16px 54px;
          }

          .contact-topbar {
            top: 14px;
            left: 12px;
            right: 12px;
          }

          .contact-back,
          .contact-menu-button {
            width: 50px;
            height: 50px;
            min-height: 50px;
          }

          .contact-menu-button {
            display: inline-flex;
          }

          .contact-title {
            font-size: clamp(38px, 12vw, 58px);
          }

          .contact-subline {
            margin-bottom: 28px;
            font-size: 16px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-card,
          .contact-form {
            border-radius: 24px;
          }
        }
      `}</style>

      {sent && (
        <div className="contact-toast">
          <Check size={19} strokeWidth={2.4} />
          Message sent
        </div>
      )}

      {submitError && (
        <div className="contact-toast contact-toast--error">
          Please try again
        </div>
      )}

      <div className="contact-topbar">
        <a className="contact-back" href="/" aria-label="Back home">
          <ChevronLeft size={24} strokeWidth={2.4} />
        </a>

        <button
          className="contact-menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <MobileLiquidMenu
        isOpen={menuOpen}
        setIsOpen={setMenuOpen}
      />

      <div className="contact-inner">
        <div className="contact-eyebrow">
          <span />
          <span />
          Contact
        </div>

        <h1 className="contact-title">Let's Work Together</h1>

        <p className="contact-subline">Have a project in mind? Let's talk.</p>

        <div className="contact-grid">
          <aside className="contact-card">
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  className="contact-link"
                  key={item.label}
                  href={item.href}
                  target={item.label === "Email" ? undefined : "_blank"}
                  rel={item.label === "Email" ? undefined : "noreferrer"}
                >
                  <div className="contact-link-icon">
                    <Icon size={21} strokeWidth={2.1} />
                  </div>

                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </div>
                </a>
              );
            })}
          </aside>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            action={FORMSPREE_ENDPOINT}
            method="POST"
          >
            <input type="hidden" name="_subject" value="New portfolio inquiry from usmanfarooqi.com" />
            <input type="text" name="name" placeholder="Your name" required />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
            />
            <input type="url" name="website" placeholder="Website optional" />

            <select name="budget" required defaultValue="">
              <option value="" disabled>
                Select budget
              </option>
              <option>Less than $300</option>
              <option>$300 - $700</option>
              <option>$700 - $1,500</option>
              <option>$1,500 - $3,000</option>
              <option>Above $3,000</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell me about your project"
              required
            />

            <button className="contact-send" type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
