import { useState, type FormEvent } from "react";
import {
  ArrowLeft,
  Check,
  ExternalLink,
  Mail,
  Menu,
  Send,
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

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();

    window.setTimeout(() => {
      setSent(false);
    }, 2400);
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
          min-height: 52px;
          padding: 0 20px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #2563eb;
          text-decoration: none;
          font-weight: 900;
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
            inset 0 1px 0 rgba(255, 255, 255, 0.92);
        }

        .contact-mobile-menu a {
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #071225;
          text-decoration: none;
          font-weight: 850;
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
          border: 0;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: white;
          font-weight: 900;
          cursor: pointer;
          background:
            linear-gradient(180deg, #3b82f6 0%, #2563eb 48%, #1d4ed8 100%);
          box-shadow:
            0 16px 36px rgba(37,99,235,0.32),
            inset 0 2px 2px rgba(255,255,255,0.48),
            inset 0 -2px 5px rgba(0,0,0,0.22);
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

        @media (max-width: 760px) {
          .contact-page {
            padding: 112px 16px 54px;
          }

          .contact-topbar {
            top: 14px;
            left: 12px;
            right: 12px;
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

      <div className="contact-topbar">
        <a className="contact-back" href="/#selected-work">
          <ArrowLeft size={18} />
          Back Home
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

      {menuOpen && (
        <nav className="contact-mobile-menu">
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/#about">Profile</a>
        </nav>
      )}

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

          <form className="contact-form" onSubmit={handleSubmit}>
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

            <button className="contact-send" type="submit">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}