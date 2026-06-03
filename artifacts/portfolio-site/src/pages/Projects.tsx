import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { DustLayer } from "@/components/DustLayer";

const allProjects = [
  { number: "01", title: "Nexora", cats: "Branding • Web Design • UI/UX", visual: "nexora" },
  { number: "02", title: "Lumina", cats: "Branding • Packaging • Art Direction", visual: "lumina" },
  { number: "03", title: "Aurea", cats: "Branding • Print • Art Direction", visual: "aurea" },
  { number: "04", title: "Pulse", cats: "App Design • UI/UX • Branding", visual: "pulse" },
  { number: "05", title: "Orbit Studio", cats: "Branding • Visual Identity", visual: "orbit" },
  { number: "06", title: "Nova Cafe", cats: "Packaging • Social Media", visual: "nova" },
  { number: "07", title: "BlueMark", cats: "Logo Design • Brand System", visual: "blue" },
  { number: "08", title: "Motion Lab", cats: "Motion Graphics • Digital", visual: "motion" },
];

const projectNavItems = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Selected Work", href: "/#selected-work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [px, setPx] = useState(0);
  const [py, setPy] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        const nx = (e.clientX / window.innerWidth - 0.5) * 2;
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;

        setPx(nx);
        setPy(ny);
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <main className="projects-clean-page">
      <style>{`
        .projects-clean-page {
          position: relative;
          min-height: 100vh;
          padding: 132px 24px 120px;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 58% 8%, rgba(255, 255, 255, 0.92) 0%, transparent 58%),
            radial-gradient(circle at center, transparent 38%, rgba(0, 0, 0, 0.045) 100%),
            #f3f3f5;
        }

        .projects-clean-page,
        .projects-clean-page * {
          box-sizing: border-box;
        }

        .projects-clean-page::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.028;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }

        .projects-fixed-topbar {
          position: fixed;
          top: 20px;
          left: 24px;
          right: 24px;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: space-between;
          pointer-events: none;
        }

        .projects-back-home,
        .projects-menu-button {
          pointer-events: auto;
          backdrop-filter: blur(24px) saturate(165%);
          -webkit-backdrop-filter: blur(24px) saturate(165%);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.42) 0%,
              rgba(255, 255, 255, 0.22) 50%,
              rgba(255, 255, 255, 0.12) 100%
            );
          border: 1px solid rgba(255, 255, 255, 0.62);
          box-shadow:
            0 16px 38px rgba(15, 23, 42, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.86),
            inset 0 -1px 0 rgba(15, 23, 42, 0.07);
        }

        .projects-back-home {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 54px;
          padding: 14px 26px;
          border-radius: 999px;
          text-decoration: none;
          color: #2563eb;
          font-size: 16px;
          font-weight: 850;
          white-space: nowrap;
        }

        .projects-menu-button {
          display: none;
          width: 54px;
          height: 54px;
          border-radius: 999px;
          align-items: center;
          justify-content: center;
          color: #1e293b;
          cursor: pointer;
        }

        .projects-mobile-menu {
          position: fixed;
          top: 86px;
          right: 16px;
          z-index: 99998;
          width: min(260px, calc(100vw - 32px));
          padding: 14px;
          border-radius: 24px;
          display: none;
          backdrop-filter: blur(24px) saturate(165%);
          -webkit-backdrop-filter: blur(24px) saturate(165%);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.48) 0%,
              rgba(255, 255, 255, 0.26) 100%
            );
          border: 1px solid rgba(255, 255, 255, 0.65);
          box-shadow:
            0 20px 48px rgba(15, 23, 42, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.86);
        }

        .projects-mobile-menu.is-open {
          display: grid;
          gap: 6px;
        }

        .projects-mobile-menu a {
          padding: 13px 14px;
          border-radius: 16px;
          text-decoration: none;
          color: #0f172a;
          font-weight: 800;
          font-size: 14px;
        }

        .projects-mobile-menu a:hover {
          background: rgba(255, 255, 255, 0.36);
        }

        .projects-dust-layer {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .projects-clean-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          animation: projectsFadeSide 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes projectsFadeSide {
          from {
            opacity: 0;
            transform: translateX(20px);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        .projects-clean-eyebrow {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 24px;
          color: #94a3b8;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          line-height: 1;
        }

        .projects-clean-eyebrow::before {
          content: "";
          width: 48px;
          height: 5px;
          border-radius: 999px;
          background: #2563eb;
          box-shadow: 0 5px 12px rgba(37, 99, 235, 0.26);
        }

        .projects-clean-eyebrow::after {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #2563eb;
        }

        .projects-clean-title {
          margin: 0 0 24px;
          color: #071225;
          font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
          font-size: clamp(48px, 7vw, 86px);
          line-height: 0.95;
          font-weight: 800;
          letter-spacing: -0.075em;
          text-transform: uppercase;
        }

        .projects-clean-intro {
          max-width: 680px;
          color: #64748b;
          font-size: clamp(18px, 2vw, 23px);
          line-height: 1.55;
          margin: 0 0 54px;
          font-weight: 500;
        }

        .projects-clean-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .projects-clean-card {
          overflow: hidden;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.94);
          box-shadow:
            0 24px 60px rgba(15, 23, 42, 0.075),
            0 8px 20px rgba(15, 23, 42, 0.035);
        }

        .projects-clean-card__visual {
          position: relative;
          height: 270px;
          overflow: hidden;
        }

        .projects-clean-card__visual.nexora,
        .projects-clean-card__visual.pulse,
        .projects-clean-card__visual.motion {
          background:
            radial-gradient(circle at 70% 48%, rgba(59, 130, 246, 0.42), transparent 24%),
            linear-gradient(135deg, #020617 0%, #0f172a 54%, #1e3a8a 100%);
        }

        .projects-clean-card__visual.lumina,
        .projects-clean-card__visual.blue {
          background:
            radial-gradient(circle at 82% 20%, rgba(191, 219, 254, 0.82), transparent 34%),
            linear-gradient(135deg, #f8fafc 0%, #e0f2fe 48%, #ffffff 100%);
        }

        .projects-clean-card__visual.aurea,
        .projects-clean-card__visual.nova,
        .projects-clean-card__visual.orbit {
          background:
            radial-gradient(circle at 78% 28%, rgba(245, 158, 11, 0.18), transparent 30%),
            linear-gradient(135deg, #f8fafc 0%, #e7dccb 48%, #ffffff 100%);
        }

        .projects-clean-card__visual::after {
          content: attr(data-title);
          position: absolute;
          left: 38px;
          top: 40px;
          color: #071225;
          font-size: 32px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .projects-clean-card__visual.nexora::after,
        .projects-clean-card__visual.pulse::after,
        .projects-clean-card__visual.motion::after {
          color: white;
        }

        .projects-clean-card__content {
          min-height: 136px;
          padding: 28px 32px 30px;
          background: linear-gradient(180deg, rgba(255,255,255,0.97), rgba(248,250,252,0.97));
        }

        .projects-clean-card__number {
          display: block;
          margin-bottom: 12px;
          color: #2563eb;
          font-size: 13px;
          font-weight: 800;
        }

        .projects-clean-card__title {
          margin: 0 0 12px;
          color: #071225;
          font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
          font-size: 34px;
          line-height: 1;
          letter-spacing: -0.06em;
          text-transform: uppercase;
        }

        .projects-clean-card__cats {
          margin: 0;
          color: #2563eb;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        @media (max-width: 860px) {
          .projects-clean-page {
            padding: 132px 18px 92px;
          }

          .projects-clean-grid {
            grid-template-columns: 1fr;
          }

          .projects-fixed-topbar {
            left: 18px;
            right: 18px;
          }

          .projects-menu-button {
            display: inline-flex;
          }
        }

        @media (max-width: 520px) {
          .projects-clean-page {
            padding: 132px 16px 86px;
          }

          .projects-fixed-topbar {
            top: 16px;
            left: 16px;
            right: 16px;
          }

          .projects-back-home {
            min-height: 50px;
            padding: 12px 20px;
            font-size: 15px;
          }

          .projects-menu-button {
            width: 50px;
            height: 50px;
          }

          .projects-clean-title {
            font-size: 46px;
          }

          .projects-clean-intro {
            font-size: 17px;
          }

          .projects-clean-card__visual {
            height: 230px;
          }

          .projects-clean-card__visual::after {
            left: 26px;
            top: 30px;
            font-size: 26px;
          }

          .projects-clean-card__content {
            padding: 24px 26px 26px;
          }

          .projects-clean-card__title {
            font-size: 30px;
          }
        }
      `}</style>

      <div
        className="projects-dust-layer"
        style={{
          translate: `${px * -2}px ${py * -2}px`,
          transition: "translate 800ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <DustLayer px={px} py={py} />
      </div>

      <div className="projects-fixed-topbar">
        <a href="/#selected-work" className="projects-back-home">
          ← Back Home
        </a>

        <button
          className="projects-menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={24} strokeWidth={2.2} /> : <Menu size={24} strokeWidth={2.2} />}
        </button>
      </div>

      <nav className={`projects-mobile-menu ${menuOpen ? "is-open" : ""}`}>
        {projectNavItems.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="projects-clean-inner">
        <div className="projects-clean-eyebrow">All Projects</div>

        <h1 className="projects-clean-title">All Projects</h1>

        <p className="projects-clean-intro">
          A wider collection of branding, packaging, UI/UX, social media, and
          visual identity projects.
        </p>

        <div className="projects-clean-grid">
          {allProjects.map((project) => (
            <article className="projects-clean-card" key={project.title}>
              <div
                className={`projects-clean-card__visual ${project.visual}`}
                data-title={project.title}
              />

              <div className="projects-clean-card__content">
                <span className="projects-clean-card__number">{project.number}</span>

                <h2 className="projects-clean-card__title">{project.title}</h2>

                <p className="projects-clean-card__cats">{project.cats}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}