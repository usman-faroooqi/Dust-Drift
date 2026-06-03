const selectedProjects = [
    {
      number: "01",
      title: "NEXORA",
      tags: "Branding • Web Design • UI/UX",
      image: "",
      theme: "nexora",
    },
    {
      number: "02",
      title: "LUMINA",
      tags: "Branding • Packaging • Art Direction",
      image: "",
      theme: "lumina",
    },
    {
      number: "03",
      title: "AUREA",
      tags: "Branding • Print • Art Direction",
      image: "",
      theme: "aurea",
    },
    {
      number: "04",
      title: "PULSE",
      tags: "App Design • UI/UX • Branding",
      image: "",
      theme: "pulse",
    },
  ];
  
  export default function SelectedWorkFinal() {
    const openProjects = () => {
      window.location.href = "/projects";
    };
  
    return (
      <section id="selected-work" className="sw-final">
        <style>{`
          .sw-final {
            position: relative;
            width: 100%;
            padding: 66px 24px 82px;
            overflow: hidden;
            background: transparent;
          }
  
          .sw-final,
          .sw-final * {
            box-sizing: border-box;
          }
  
          .sw-final__inner {
            width: 100%;
            max-width: 980px;
            margin: 0 auto;
          }
  
          .sw-final__header {
            margin-bottom: 34px;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 28px;
          }
  
          .sw-final__eyebrow {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 16px;
            color: #94a3b8;
            font-size: 11px;
            font-weight: 900;
            letter-spacing: 0.30em;
            text-transform: uppercase;
            line-height: 1;
          }
  
          .sw-final__eyebrow span:nth-child(1) {
            width: 40px;
            height: 4px;
            border-radius: 999px;
            background: #2563eb;
            box-shadow: 0 5px 12px rgba(37, 99, 235, 0.22);
          }
  
          .sw-final__eyebrow span:nth-child(2) {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: #2563eb;
            box-shadow: 0 5px 12px rgba(37, 99, 235, 0.22);
          }
  
          .sw-final__title {
            margin: 0;
            color: #071225;
            font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
            font-size: clamp(38px, 5.2vw, 58px);
            line-height: 0.95;
            font-weight: 850;
            letter-spacing: -0.065em;
            text-transform: uppercase;
          }
  
          .sw-final__description {
            margin: 16px 0 0;
            max-width: 520px;
            color: #64748b;
            font-size: clamp(15px, 1.45vw, 18px);
            line-height: 1.55;
            font-weight: 550;
          }
  
          .sw-final__grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }
  
          .sw-final-card {
            position: relative;
            min-height: 360px;
            border: 0;
            padding: 0;
            overflow: hidden;
            text-align: left;
            cursor: pointer;
            border-radius: 28px;
            backdrop-filter: blur(24px) saturate(165%);
            -webkit-backdrop-filter: blur(24px) saturate(165%);
            background:
              linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.70) 0%,
                rgba(255, 255, 255, 0.40) 100%
              );
            border: 1px solid rgba(255, 255, 255, 0.78);
            box-shadow:
              0 22px 54px rgba(15, 23, 42, 0.09),
              inset 0 1px 0 rgba(255, 255, 255, 0.92),
              inset 0 -1px 0 rgba(15, 23, 42, 0.06);
            transition:
              transform 0.24s ease,
              box-shadow 0.24s ease;
          }
  
          .sw-final-card:hover {
            transform: translateY(-4px);
            box-shadow:
              0 32px 74px rgba(15, 23, 42, 0.12),
              inset 0 1px 0 rgba(255, 255, 255, 0.94),
              inset 0 -1px 0 rgba(15, 23, 42, 0.07);
          }
  
          .sw-final-card__visual {
            position: relative;
            height: 215px;
            overflow: hidden;
            background: #dbeafe;
          }
  
          .sw-final-card__visual img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
  
          .sw-final-card__visual-placeholder {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(7, 18, 37, 0.72);
            font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
            font-size: clamp(30px, 4vw, 54px);
            font-weight: 850;
            letter-spacing: -0.06em;
            text-transform: uppercase;
          }
  
          .sw-final-card--nexora .sw-final-card__visual {
            background:
              radial-gradient(circle at 68% 48%, rgba(59, 130, 246, 0.70), transparent 32%),
              linear-gradient(135deg, #030712 0%, #1e3a8a 100%);
          }
  
          .sw-final-card--lumina .sw-final-card__visual {
            background:
              radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.92), transparent 34%),
              linear-gradient(135deg, #e0f2fe 0%, #f8fafc 100%);
          }
  
          .sw-final-card--aurea .sw-final-card__visual {
            background:
              radial-gradient(circle at 35% 20%, rgba(255, 255, 255, 0.85), transparent 34%),
              linear-gradient(135deg, #f3e7cf 0%, #fff7ed 100%);
          }
  
          .sw-final-card--pulse .sw-final-card__visual {
            background:
              radial-gradient(circle at 72% 42%, rgba(37, 99, 235, 0.50), transparent 30%),
              linear-gradient(135deg, #020617 0%, #0f172a 100%);
          }
  
          .sw-final-card--nexora .sw-final-card__visual-placeholder,
          .sw-final-card--pulse .sw-final-card__visual-placeholder {
            color: rgba(255, 255, 255, 0.92);
          }
  
          .sw-final-card__body {
            position: relative;
            min-height: 145px;
            padding: 22px 24px 24px;
            background:
              linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.72),
                rgba(255, 255, 255, 0.38)
              );
            border-top: 1px solid rgba(255, 255, 255, 0.68);
          }
  
          .sw-final-card__number {
            display: block;
            margin-bottom: 8px;
            color: #2563eb;
            font-size: 12px;
            font-weight: 950;
            letter-spacing: 0.08em;
          }
  
          .sw-final-card__title {
            margin: 0 0 8px;
            color: #071225;
            font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
            font-size: clamp(26px, 3vw, 38px);
            line-height: 1;
            font-weight: 850;
            letter-spacing: -0.055em;
          }
  
          .sw-final-card__tags {
            margin: 0;
            color: #2563eb;
            font-size: 11px;
            line-height: 1.4;
            font-weight: 900;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
  
          .sw-final-card__view {
            position: absolute;
            right: 20px;
            bottom: 20px;
            min-height: 34px;
            padding: 0 13px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: #2563eb;
            font-size: 12px;
            font-weight: 900;
            background:
              linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.82),
                rgba(255, 255, 255, 0.42)
              );
            border: 1px solid rgba(255, 255, 255, 0.82);
            box-shadow:
              0 10px 24px rgba(15, 23, 42, 0.07),
              inset 0 1px 0 rgba(255, 255, 255, 0.92);
          }
  
          @media (max-width: 720px) {
            .sw-final {
              padding: 56px 16px 68px;
            }
  
            .sw-final__header {
              display: block;
              margin-bottom: 28px;
            }
  
            .sw-final__eyebrow {
              font-size: 10px;
              letter-spacing: 0.26em;
              margin-bottom: 14px;
            }
  
            .sw-final__eyebrow span:nth-child(1) {
              width: 34px;
              height: 4px;
            }
  
            .sw-final__title {
              font-size: clamp(34px, 11vw, 48px);
              line-height: 0.96;
            }
  
            .sw-final__description {
              margin-top: 12px;
              font-size: 15px;
              line-height: 1.48;
            }
  
            .sw-final__grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }
  
            .sw-final-card {
              min-height: 318px;
              border-radius: 24px;
            }
  
            .sw-final-card__visual {
              height: 185px;
            }
  
            .sw-final-card__body {
              min-height: 133px;
              padding: 19px 20px 21px;
            }
  
            .sw-final-card__title {
              font-size: 28px;
            }
  
            .sw-final-card__view {
              right: 16px;
              bottom: 16px;
            }
          }
        `}</style>
  
        <div className="sw-final__inner">
          <div className="sw-final__header">
            <div>
              <div className="sw-final__eyebrow">
                <span />
                <span />
                Selected Work
              </div>
  
              <h2 className="sw-final__title">Selected Work</h2>
  
              <p className="sw-final__description">
                A few focused projects across branding, packaging, digital design,
                and visual identity.
              </p>
            </div>
          </div>
  
          <div className="sw-final__grid">
            {selectedProjects.map((project) => (
              <button
                type="button"
                className={`sw-final-card sw-final-card--${project.theme}`}
                key={project.title}
                onClick={openProjects}
                aria-label={`View all projects including ${project.title}`}
              >
                <div className="sw-final-card__visual">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="sw-final-card__visual-placeholder">
                      {project.title}
                    </div>
                  )}
                </div>
  
                <div className="sw-final-card__body">
                  <span className="sw-final-card__number">{project.number}</span>
  
                  <h3 className="sw-final-card__title">{project.title}</h3>
  
                  <p className="sw-final-card__tags">{project.tags}</p>
  
                  <span className="sw-final-card__view">
                    View All
                    <span>→</span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }