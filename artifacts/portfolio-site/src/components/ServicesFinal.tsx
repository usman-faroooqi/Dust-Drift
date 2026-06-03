const services = [
    {
      title: "BRAND IDENTITY",
      description:
        "Your brand is the first thing people judge you by. I build identities that look established, credible, and worth paying for — from logo to full visual system.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3v4" />
          <path d="M7 7h10" />
          <path d="M9 7l-2 10h10L15 7" />
          <path d="M12 11v6" />
          <path d="M10 14h4" />
        </svg>
      ),
    },
    {
      title: "SOCIAL MEDIA CONTENT",
      description:
        "Consistent, high-quality content that positions you as the authority in your space — designed to perform, not just look good.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 14h3l7 4V6l-7 4H5v4Z" />
          <path d="M18 10.5a3 3 0 0 1 0 3" />
          <path d="M20 8a6 6 0 0 1 0 8" />
        </svg>
      ),
    },
    {
      title: "MARKETING COLLATERAL",
      description:
        "Brochures, standees, and banners that bring your brand into physical spaces with the same quality and professionalism as your digital presence.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M8 8h8" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
        </svg>
      ),
    },
    {
      title: "REEL EDITING",
      description:
        "Your ideas, expertise, and stories — edited into fast, engaging reels that grow your audience and keep them watching.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M8 5v14l11-7L8 5Z" />
          <path d="M4 5v14" />
        </svg>
      ),
    },
  ];
  
  export default function ServicesFinal() {
    return (
      <section id="services" className="gfx-services-clean">
        <style>{`
          .gfx-services-clean {
            position: relative;
            width: 100%;
            padding: 54px 24px 70px;
            overflow: hidden;
            isolation: isolate;
            background: transparent;
          }
  
          .gfx-services-clean,
          .gfx-services-clean * {
            box-sizing: border-box;
          }
  
          .gfx-services-clean__inner {
            position: relative;
            z-index: 2;
            width: 100%;
            max-width: 920px;
            margin: 0 auto;
          }
  
          .gfx-services-clean__header {
            max-width: 640px;
            margin: 0 0 30px;
            text-align: left;
          }
  
          .gfx-services-clean__eyebrow {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
            color: #94a3b8;
            font-size: 11px;
            font-weight: 900;
            letter-spacing: 0.30em;
            text-transform: uppercase;
            line-height: 1;
          }
  
          .gfx-services-clean__line {
            width: 40px;
            height: 4px;
            border-radius: 999px;
            background: #2563eb;
            box-shadow: 0 5px 12px rgba(37, 99, 235, 0.22);
          }
  
          .gfx-services-clean__dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: #2563eb;
            box-shadow: 0 5px 12px rgba(37, 99, 235, 0.22);
          }
  
          .gfx-services-clean__title {
            margin: 0 0 14px;
            color: #071225;
            font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
            font-size: clamp(36px, 5vw, 54px);
            font-weight: 850;
            line-height: 0.96;
            letter-spacing: -0.065em;
            text-transform: uppercase;
          }
  
          .gfx-services-clean__description {
            margin: 0;
            max-width: 600px;
            color: #64748b;
            font-family: "Inter", system-ui, sans-serif;
            font-size: clamp(15px, 1.45vw, 18px);
            line-height: 1.55;
            font-weight: 550;
          }
  
          .gfx-services-clean__grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
            width: 100%;
          }
  
          .gfx-services-clean-card {
            position: relative;
            min-height: 238px;
            padding: 24px;
            border-radius: 26px;
            overflow: hidden;
            backdrop-filter: blur(24px) saturate(165%);
            -webkit-backdrop-filter: blur(24px) saturate(165%);
            background:
              linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.70) 0%,
                rgba(255, 255, 255, 0.38) 58%,
                rgba(255, 255, 255, 0.24) 100%
              );
            border: 1px solid rgba(255, 255, 255, 0.78);
            box-shadow:
              0 20px 48px rgba(15, 23, 42, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.92),
              inset 0 -1px 0 rgba(15, 23, 42, 0.06);
            transition:
              transform 0.24s ease,
              box-shadow 0.24s ease;
          }
  
          .gfx-services-clean-card::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background:
              radial-gradient(circle at 16% 12%, rgba(255,255,255,0.84), transparent 24%),
              linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.35) 0%,
                rgba(255, 255, 255, 0.10) 48%,
                rgba(255, 255, 255, 0) 100%
              );
          }
  
          .gfx-services-clean-card:hover {
            transform: translateY(-4px);
            box-shadow:
              0 28px 64px rgba(15, 23, 42, 0.10),
              inset 0 1px 0 rgba(255, 255, 255, 0.94),
              inset 0 -1px 0 rgba(15, 23, 42, 0.07);
          }
  
          .gfx-services-clean-card__icon {
            position: relative;
            z-index: 2;
            width: 54px;
            height: 54px;
            margin-bottom: 20px;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(18px) saturate(160%);
            -webkit-backdrop-filter: blur(18px) saturate(160%);
            background:
              radial-gradient(circle at 35% 24%, rgba(255,255,255,0.95), transparent 34%),
              linear-gradient(
                180deg,
                rgba(219, 234, 254, 0.94) 0%,
                rgba(255, 255, 255, 0.64) 100%
              );
            border: 1px solid rgba(255, 255, 255, 0.86);
            box-shadow:
              0 16px 32px rgba(37, 99, 235, 0.14),
              inset 0 1px 0 rgba(255, 255, 255, 0.96),
              inset 0 -1px 0 rgba(15, 23, 42, 0.06);
          }
  
          .gfx-services-clean-card__icon svg {
            width: 26px;
            height: 26px;
            stroke: #2563eb;
            stroke-width: 1.9;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
  
          .gfx-services-clean-card__title {
            position: relative;
            z-index: 2;
            margin: 0 0 12px;
            color: #071225;
            font-family: "Inter", system-ui, sans-serif;
            font-size: 17px;
            font-weight: 950;
            line-height: 1.15;
            letter-spacing: 0.075em;
            text-transform: uppercase;
          }
  
          .gfx-services-clean-card__text {
            position: relative;
            z-index: 2;
            margin: 0;
            max-width: 360px;
            color: #64748b;
            font-family: "Inter", system-ui, sans-serif;
            font-size: 13.6px;
            line-height: 1.5;
            font-weight: 600;
          }
  
          @media (max-width: 720px) {
            .gfx-services-clean {
              padding: 46px 16px 62px;
            }
  
            .gfx-services-clean__header {
              margin-bottom: 24px;
            }
  
            .gfx-services-clean__eyebrow {
              font-size: 10px;
              letter-spacing: 0.26em;
              margin-bottom: 13px;
            }
  
            .gfx-services-clean__line {
              width: 34px;
              height: 4px;
            }
  
            .gfx-services-clean__title {
              font-size: clamp(34px, 11vw, 46px);
              line-height: 0.96;
              margin-bottom: 12px;
            }
  
            .gfx-services-clean__description {
              font-size: 15px;
              line-height: 1.48;
            }
  
            .gfx-services-clean__grid {
              grid-template-columns: 1fr;
              gap: 14px;
            }
  
            .gfx-services-clean-card {
              min-height: 216px;
              padding: 20px;
              border-radius: 23px;
            }
  
            .gfx-services-clean-card__icon {
              width: 50px;
              height: 50px;
              margin-bottom: 16px;
            }
  
            .gfx-services-clean-card__icon svg {
              width: 24px;
              height: 24px;
            }
  
            .gfx-services-clean-card__title {
              font-size: 16px;
              line-height: 1.12;
              margin-bottom: 10px;
            }
  
            .gfx-services-clean-card__text {
              font-size: 13.2px;
              line-height: 1.45;
            }
          }
        `}</style>
  
        <div className="gfx-services-clean__inner">
          <div className="gfx-services-clean__header">
            <div className="gfx-services-clean__eyebrow">
              <span className="gfx-services-clean__line" />
              <span className="gfx-services-clean__dot" />
              <span>SERVICES</span>
            </div>
  
            <h2 className="gfx-services-clean__title">SERVICES</h2>
  
            <p className="gfx-services-clean__description">
              I offer end-to-end design solutions that help brands communicate,
              engage, and grow.
            </p>
          </div>
  
          <div className="gfx-services-clean__grid">
            {services.map((service) => (
              <article className="gfx-services-clean-card" key={service.title}>
                <div className="gfx-services-clean-card__icon">
                  {service.icon}
                </div>
  
                <h3 className="gfx-services-clean-card__title">
                  {service.title}
                </h3>
  
                <p className="gfx-services-clean-card__text">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }