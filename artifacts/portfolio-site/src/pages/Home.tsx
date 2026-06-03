import ServicesFinal from "../components/ServicesFinal";
import SelectedWorkFinal from "../components/SelectedWorkFinal";
import { useState, useEffect, useRef, type FormEvent } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Clock3,
  FolderKanban,
  HomeIcon,
  Mail,
  Menu,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { DustLayer } from "@/components/DustLayer";
import { PillButton } from "@/components/Buttons";
import { Typewriter } from "@/components/TypingText";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "#about" },
];

const mobileMenuItems = [
  { label: "Home", href: "#top", icon: HomeIcon },
  { label: "Work", href: "#work", icon: BriefcaseBusiness },
  { label: "Services", href: "#services", icon: Sparkles },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Contact", href: "/contact", icon: Mail },
];

const aboutStats = [
  { value: "3+", label: "YEARS OF EXPERIENCE", icon: "●" },
  { value: "120+", label: "PROJECTS COMPLETED", icon: "▣" },
  { value: "40+", label: "BRANDS COLLABORATED", icon: "★" },
];

const clientReviews = [
  {
    name: "Ahmed Khan",
    role: "Founder, Digital Marketing Agency",
    timeAgo: "2 weeks ago",
    text: "The branding system was clean, professional, and easy for our team to implement across all platforms.",
  },
  {
    name: "Sarah Mitchell",
    role: "Business Coach, Personal Brand",
    timeAgo: "1 month ago",
    text: "Our social media now feels consistent and recognizable. The quality improved significantly.",
  },
  {
    name: "Michael Torres",
    role: "CEO, SaaS Startup",
    timeAgo: "3 weeks ago",
    text: "Professional work, timely delivery, and a clear understanding of our business goals.",
  },
  {
    name: "Emma Wilson",
    role: "Marketing Manager, Tech Company",
    timeAgo: "2 months ago",
    text: "The carousel designs helped us present complex information in a simple and engaging way.",
  },
  {
    name: "Daniel Moore",
    role: "Real Estate Consultant",
    timeAgo: "4 months ago",
    text: "The brand guidelines made it much easier to maintain a consistent visual identity.",
  },
  {
    name: "Chloe Bennett",
    role: "LinkedIn Creator, Personal Brand",
    timeAgo: "5 weeks ago",
    text: "The designs felt modern, premium, and aligned with our target audience.",
  },
  {
    name: "Ryan Cooper",
    role: "Agency Owner, Social Media Agency",
    timeAgo: "6 days ago",
    text: "A dependable creative partner for branding and ongoing content production.",
  },
  {
    name: "Lisa Chen",
    role: "Financial Educator, Content Business",
    timeAgo: "3 months ago",
    text: "The short-form video content was clean, engaging, and delivered exactly as requested.",
  },
  {
    name: "James Foster",
    role: "Co-Founder, B2B Software Company",
    timeAgo: "7 months ago",
    text: "The marketing materials looked polished and helped us present our brand more confidently.",
  },
];

function MobileLiquidMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="mobile-liquid-menu">
      <div className="mobile-liquid-menu__quick-row">
        <span>
          <HomeIcon size={16} strokeWidth={2} />
        </span>
        <span>
          <Clock3 size={16} strokeWidth={2} />
        </span>
        <span>
          <Mail size={16} strokeWidth={2} />
        </span>
      </div>

      <div className="mobile-liquid-menu__divider" />

      <nav className="mobile-liquid-menu__links" aria-label="Mobile menu">
        {mobileMenuItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              <span>{item.label}</span>
              <Icon size={19} strokeWidth={2} />
            </a>
          );
        })}
      </nav>
    </div>
  );
}

function FeaturedCapsules() {
  const capsules = [
    "Clean Design",
    "Consistent Quality",
    "On-Time Delivery",
    "Detail-Focused Design",
    "Easy Collaboration",
  ];

  return (
    <section className="featured-capsules-section" id="work">
      <div className="featured-capsules-window">
        <div className="featured-capsules-track">
          {[...capsules, ...capsules, ...capsules, ...capsules].map(
            (item, index) => (
              <span className="featured-capsule" key={`${item}-${index}`}>
                ✨ {item}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function OptionAAboutSection() {
  return (
    <section className="option-a-about-section" id="about">
      <div className="option-a-about-inner">
        <div className="option-a-about-label-wrap">
          <span className="option-a-about-line"></span>
          <span className="option-a-about-dot"></span>
          <span className="option-a-about-label">ABOUT ME</span>
        </div>

        <h2 className="option-a-about-title">ABOUT ME</h2>

        <p className="option-a-about-copy">
          I design visuals specializing in branding, content design, marketing
          creatives, and reel editing for modern businesses.
        </p>

        <p className="option-a-about-copy option-a-about-copy--second">
          From brand identity systems to daily content and promotional
          materials, I help brands communicate clearly and consistently across
          every touchpoint.
        </p>

        <div className="option-a-about-cta-row">
          <button
            className="option-a-journey-button"
            type="button"
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            Connect With Me
            <ArrowRight className="size-4" />
          </button>
        </div>

        <div
          className="option-a-workspace-card"
          aria-label="Graphic designer workspace"
        >
          <div className="option-a-blue-circle" aria-hidden="true" />
          <div className="option-a-dotted-pattern" aria-hidden="true" />
          <div
            className="option-a-curve option-a-curve-one"
            aria-hidden="true"
          />
          <div
            className="option-a-curve option-a-curve-two"
            aria-hidden="true"
          />

          <div className="option-a-desk-surface" aria-hidden="true" />

          <div className="option-a-lamp" aria-hidden="true">
            <span className="option-a-lamp-head" />
            <span className="option-a-lamp-arm-one" />
            <span className="option-a-lamp-arm-two" />
            <span className="option-a-lamp-base" />
          </div>

          <div className="option-a-pencil-cup" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="option-a-laptop" aria-hidden="true">
            <span />
          </div>

          <div className="option-a-mug" aria-hidden="true" />

          <div className="option-a-role-pill">
            <span />
            GRAPHIC DESIGNER
          </div>
        </div>

        <div className="option-a-stats-row" aria-label="Portfolio statistics">
          {aboutStats.map((stat) => (
            <article className="option-a-stat-card" key={stat.label}>
              <div className="option-a-stat-icon">{stat.icon}</div>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewSystem() {
  const [activeReview, setActiveReview] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [panelOpen, setPanelOpen] = useState(false);
  const [reviewSent, setReviewSent] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const playSoftNotification = () => {
    try {
      const AudioContextClass =
        window.AudioContext || (window as any).webkitAudioContext;

      if (!AudioContextClass) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContextClass();
      }

      const audioContext = audioContextRef.current;

      const play = () => {
        const now = audioContext.currentTime;
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(620, now);
        oscillator.frequency.exponentialRampToValueAtTime(880, now + 0.13);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.045, now + 0.025);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start(now);
        oscillator.stop(now + 0.32);
      };

      if (audioContext.state === "suspended") {
        audioContext.resume().then(play).catch(() => {});
      } else {
        play();
      }
    } catch {
      // Sound is optional.
    }
  };

  useEffect(() => {
    let timeoutId: number;

    if (panelOpen) return;

    if (isVisible) {
      playSoftNotification();

      timeoutId = window.setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    } else {
      timeoutId = window.setTimeout(() => {
        setActiveReview((current) => (current + 1) % clientReviews.length);
        setIsVisible(true);
      }, 2500);
    }

    return () => window.clearTimeout(timeoutId);
  }, [isVisible, panelOpen]);

  const review = clientReviews[activeReview];

  const handleReviewSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setReviewSent(true);
    event.currentTarget.reset();

    window.setTimeout(() => {
      setReviewSent(false);
    }, 2400);
  };

  return (
    <>
      <style>{`
        .review-system-button {
          position: fixed;
          right: 18px;
          bottom: 18px;
          z-index: 10000;
          width: 58px;
          height: 58px;
          border: 0;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          cursor: pointer;
          background:
            radial-gradient(circle at 32% 24%, rgba(255,255,255,0.36), transparent 28%),
            linear-gradient(180deg, #3b82f6 0%, #2563eb 45%, #1d4ed8 100%);
          box-shadow:
            0 18px 38px rgba(37, 99, 235, 0.34),
            inset 0 2px 2px rgba(255, 255, 255, 0.46),
            inset 0 -2px 5px rgba(0, 0, 0, 0.22);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .review-system-button:hover {
          transform: translateY(-2px);
        }

        .review-system-button svg {
          width: 30px;
          height: 30px;
        }

        .review-toast-loop {
          position: fixed;
          right: 18px;
          bottom: 88px;
          z-index: 9999;
          width: min(318px, calc(100vw - 36px));
          pointer-events: none;
        }

        .review-toast-card {
          position: relative;
          overflow: hidden;
          width: 100%;
          border: 0;
          text-align: left;
          border-radius: 22px;
          padding: 13px 14px 14px;
          backdrop-filter: blur(24px) saturate(165%);
          -webkit-backdrop-filter: blur(24px) saturate(165%);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.62) 0%,
              rgba(255, 255, 255, 0.36) 58%,
              rgba(255, 255, 255, 0.24) 100%
            );
          border: 1px solid rgba(255, 255, 255, 0.74);
          box-shadow:
            0 16px 42px rgba(15, 23, 42, 0.13),
            inset 0 1px 0 rgba(255, 255, 255, 0.88),
            inset 0 -1px 0 rgba(15, 23, 42, 0.06);
          animation: reviewToastSmallIn 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;
          pointer-events: auto;
          cursor: pointer;
        }

        .review-toast-card::after {
          display: none;
        }

        .review-toast-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 8px;
        }

        .review-toast-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #2563eb;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .review-toast-label span {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #2563eb;
          box-shadow: 0 0 0 5px rgba(37, 99, 235, 0.10);
        }

        .review-toast-stars {
          color: #f5b301;
          font-size: 11px;
          letter-spacing: 0.04em;
          white-space: nowrap;
          text-shadow: 0 2px 8px rgba(245, 179, 1, 0.22);
        }

        .review-toast-text {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: 13px;
          line-height: 1.36;
          font-weight: 800;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .review-toast-person {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .review-toast-avatar {
          width: 34px;
          height: 34px;
          min-width: 34px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          font-size: 11px;
          font-weight: 900;
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.78),
              rgba(255, 255, 255, 0.38)
            );
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow:
            0 8px 18px rgba(37, 99, 235, 0.13),
            inset 0 1px 1px rgba(255, 255, 255, 0.7);
        }

        .review-toast-name-row {
          display: flex;
          align-items: center;
          gap: 7px;
          min-width: 0;
        }

        .review-toast-name {
          display: block;
          color: #071225;
          font-size: 13px;
          font-weight: 900;
          line-height: 1.1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .review-toast-time {
          color: #94a3b8;
          font-size: 10.5px;
          font-weight: 800;
          white-space: nowrap;
        }

        .review-toast-role {
          display: block;
          margin-top: 3px;
          color: #64748b;
          font-size: 11px;
          font-weight: 750;
          line-height: 1.1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .review-panel-overlay {
          position: fixed;
          inset: 0;
          z-index: 10001;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 18px;
          background: rgba(15, 23, 42, 0.045);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
        }

        .review-panel {
          width: min(420px, calc(100vw - 36px));
          height: min(545px, calc(100dvh - 36px));
          overflow: hidden;
          display: grid;
          grid-template-rows: auto minmax(0, 1fr) auto;
          border-radius: 28px;
          backdrop-filter: blur(28px) saturate(175%);
          -webkit-backdrop-filter: blur(28px) saturate(175%);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.58) 0%,
              rgba(255, 255, 255, 0.34) 100%
            );
          border: 1px solid rgba(255, 255, 255, 0.74);
          box-shadow:
            0 30px 80px rgba(15, 23, 42, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          animation: reviewPanelIn 0.34s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .review-panel-header {
          padding: 18px 20px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-bottom: 1px solid rgba(148, 163, 184, 0.16);
        }

        .review-panel-header h3 {
          margin: 0;
          color: #071225;
          font-size: 22px;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .review-panel-header p {
          margin: 4px 0 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.35;
          font-weight: 700;
        }

        .review-panel-close {
          width: 42px;
          height: 42px;
          min-width: 42px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.72);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f172a;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.48);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.85);
        }

        .review-panel-body {
          overflow-y: auto;
          padding: 14px 16px;
          display: grid;
          gap: 12px;
          align-content: start;
          scrollbar-width: thin;
          scrollbar-color: rgba(37, 99, 235, 0.35) transparent;
        }

        .review-list-card {
          min-height: 112px;
          padding: 14px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.42);
          border: 1px solid rgba(255, 255, 255, 0.58);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.82);
          overflow: visible;
        }

        .review-list-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 7px;
        }

        .review-list-name {
          color: #071225;
          font-size: 13px;
          font-weight: 900;
        }

        .review-list-time {
          color: #94a3b8;
          font-size: 11px;
          font-weight: 800;
          white-space: nowrap;
        }

        .review-list-stars {
          color: #f5b301;
          font-size: 11px;
          margin-bottom: 8px;
        }

        .review-list-text {
          margin: 0;
          color: #334155;
          font-size: 13px;
          line-height: 1.45;
          font-weight: 700;
        }

        .review-panel-form {
          padding: 13px 16px 15px;
          border-top: 1px solid rgba(148, 163, 184, 0.16);
          display: grid;
          gap: 9px;
          background: rgba(255, 255, 255, 0.16);
        }

        .review-panel-submit-row {
          display: grid;
          grid-template-columns: 1fr 44px;
          gap: 9px;
        }

        .review-panel-form input,
        .review-panel-form textarea {
          width: 100%;
          border: 1px solid rgba(148, 163, 184, 0.22);
          outline: none;
          border-radius: 16px;
          padding: 12px 14px;
          color: #0f172a;
          font-size: 13px;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.52);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.82);
        }

        .review-panel-form textarea {
          min-height: 58px;
          max-height: 84px;
          resize: vertical;
        }

        .review-panel-submit {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.68);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          cursor: pointer;
          background:
            radial-gradient(circle at 32% 25%, rgba(255, 255, 255, 0.45), transparent 30%),
            linear-gradient(180deg, rgba(148, 163, 184, 0.72), rgba(71, 85, 105, 0.84));
          box-shadow:
            0 10px 24px rgba(15, 23, 42, 0.18),
            inset 0 1px 1px rgba(255, 255, 255, 0.52),
            inset 0 -1px 2px rgba(0, 0, 0, 0.18);
        }

        .review-panel-submit svg {
          width: 22px;
          height: 22px;
        }

        .review-panel-submit.is-sent {
          background: linear-gradient(180deg, #22c55e 0%, #15803d 100%);
        }

        @keyframes reviewToastSmallIn {
          from {
            opacity: 0;
            transform: translateX(14px) translateY(12px) scale(0.97);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes reviewPanelIn {
          from {
            opacity: 0;
            transform: translateX(18px) translateY(18px) scale(0.97);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @media (max-width: 720px) {
          .review-system-button {
            right: 14px;
            bottom: 16px;
            width: 56px;
            height: 56px;
          }

          .review-toast-loop {
            right: 14px;
            bottom: 82px;
            width: min(274px, calc(100vw - 28px));
          }

          .review-toast-card {
            border-radius: 18px;
            padding: 11px 12px 12px;
          }

          .review-toast-top {
            margin-bottom: 6px;
          }

          .review-toast-label {
            font-size: 9px;
            gap: 6px;
          }

          .review-toast-stars {
            font-size: 10px;
          }

          .review-toast-text {
            font-size: 11.8px;
            line-height: 1.32;
            margin-bottom: 8px;
          }

          .review-toast-avatar {
            width: 30px;
            height: 30px;
            min-width: 30px;
            font-size: 10px;
          }

          .review-toast-name {
            font-size: 12px;
          }

          .review-toast-time {
            font-size: 9.5px;
          }

          .review-toast-role {
            font-size: 10px;
          }

          .review-panel-overlay {
            padding: 14px;
            align-items: flex-end;
            justify-content: center;
          }

          .review-panel {
            width: calc(100vw - 28px);
            height: min(505px, calc(100dvh - 28px));
            border-radius: 24px;
          }

          .review-panel-header {
            padding: 15px 16px 12px;
          }

          .review-panel-header h3 {
            font-size: 18px;
          }

          .review-panel-header p {
            font-size: 11.5px;
          }

          .review-panel-close {
            width: 38px;
            height: 38px;
            min-width: 38px;
          }

          .review-panel-body {
            padding: 11px 12px;
            gap: 10px;
          }

          .review-list-card {
            min-height: 102px;
            padding: 12px;
            border-radius: 16px;
          }

          .review-list-name {
            font-size: 12px;
          }

          .review-list-time {
            font-size: 10px;
          }

          .review-list-text {
            font-size: 12px;
            line-height: 1.38;
          }

          .review-panel-form {
            padding: 11px 12px 13px;
          }

          .review-panel-form textarea {
            min-height: 50px;
          }
        }
      `}</style>

      {!panelOpen && isVisible && (
        <div className="review-toast-loop" id="reviews" aria-live="polite">
          <button
            className="review-toast-card"
            key={activeReview}
            type="button"
            onClick={() => setPanelOpen(true)}
            aria-label="Open client reviews"
          >
            <div className="review-toast-content">
              <div className="review-toast-top">
                <div className="review-toast-label">
                  <span />
                  Review
                </div>

                <div className="review-toast-stars">★★★★★</div>
              </div>

              <p className="review-toast-text">“{review.text}”</p>

              <div className="review-toast-person">
                <div className="review-toast-avatar">
                  {review.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div>
                  <div className="review-toast-name-row">
                    <span className="review-toast-name">{review.name}</span>
                    <span className="review-toast-time">{review.timeAgo}</span>
                  </div>

                  <span className="review-toast-role">{review.role}</span>
                </div>
              </div>
            </div>
          </button>
        </div>
      )}

      <button
        className="review-system-button"
        type="button"
        aria-label="Open reviews"
        onClick={() => setPanelOpen(true)}
      >
        <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path
            d="M39.8 15.5c-4.8 0-8.3 3.6-11.4 6.9l-5.7 6.1c-2.1 2.2-4.6 4.3-8.1 4.3-3.7 0-6.6-2.8-6.6-6.4 0-3.8 3.1-6.7 7-6.7 2.2 0 4.1.8 5.8 2.1"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M24.2 48.5c4.8 0 8.3-3.6 11.4-6.9l5.7-6.1c2.1-2.2 4.6-4.3 8.1-4.3 3.7 0 6.6 2.8 6.6 6.4 0 3.8-3.1 6.7-7 6.7-2.2 0-4.1-.8-5.8-2.1"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {panelOpen && (
        <div className="review-panel-overlay" role="dialog" aria-modal="true">
          <section className="review-panel">
            <div className="review-panel-header">
              <div>
                <h3>Client Reviews</h3>
                <p>What clients say about working with me.</p>
              </div>

              <button
                className="review-panel-close"
                type="button"
                aria-label="Close reviews"
                onClick={() => setPanelOpen(false)}
              >
                <X size={20} strokeWidth={2.2} />
              </button>
            </div>

            <div className="review-panel-body">
              {clientReviews.map((item) => (
                <article className="review-list-card" key={item.name}>
                  <div className="review-list-top">
                    <span className="review-list-name">{item.name}</span>
                    <span className="review-list-time">{item.timeAgo}</span>
                  </div>

                  <div className="review-list-stars">★★★★★</div>

                  <p className="review-list-text">“{item.text}”</p>
                </article>
              ))}
            </div>

            <form className="review-panel-form" onSubmit={handleReviewSubmit}>
              <div className="review-panel-submit-row">
                <input
                  type="text"
                  name="reviewer"
                  placeholder="Your name"
                  required
                />

                <button
                  className={`review-panel-submit ${
                    reviewSent ? "is-sent" : ""
                  }`}
                  type="submit"
                  aria-label="Send review"
                >
                  {reviewSent ? (
                    <Check size={20} strokeWidth={2.4} />
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 19V5"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6.5 10.5 12 5l5.5 5.5"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <textarea
                name="review"
                placeholder="Write a short review..."
                required
              />
            </form>
          </section>
        </div>
      )}
    </>
  );
}

function SiteFooterFinal() {
  return (
    <footer className="site-footer-final">
      <nav className="site-footer-final__links" aria-label="Footer navigation">
        <a href="#services">Services</a>
        <a href="/projects">Projects</a>
        <a href="#about">Profile</a>
        <a href="#reviews">Reviews</a>
        <a href="/contact">Contact</a>
      </nav>

      <div className="site-footer-final__socials" aria-label="Social links">
        <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
          𝕏
        </a>

        <a
          href="https://www.linkedin.com/in/usmanfaroooqi"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          in
        </a>

        <a
          href="https://www.behance.net/usmanfaroooqi"
          target="_blank"
          rel="noreferrer"
          aria-label="Behance"
        >
          Be
        </a>
      </div>

      <style>{`
        .site-footer-final {
          position: relative;
          z-index: 5;
          width: 100%;
          min-height: 92px;
          padding: 0 8vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          background: transparent;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
        }

        .site-footer-final__links,
        .site-footer-final__socials {
          display: flex;
          align-items: center;
          gap: clamp(22px, 3vw, 42px);
        }

        .site-footer-final a {
          color: rgba(15, 23, 42, 0.72);
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          transition: color 0.22s ease, transform 0.22s ease;
        }

        .site-footer-final a:hover {
          color: #2563eb;
          transform: translateY(-1px);
        }

        .site-footer-final__socials a {
          color: #071225;
          font-size: 18px;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        @media (max-width: 720px) {
          .site-footer-final {
            min-height: auto;
            padding: 28px 22px 34px;
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }

          .site-footer-final__links {
            flex-wrap: wrap;
            gap: 18px 26px;
          }

          .site-footer-final__socials {
            gap: 24px;
          }
        }
      `}</style>
    </footer>
  );
}

function LiveClock() {
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
    <span className="font-mono text-sm tabular-nums tracking-widest text-slate-600 select-none">
      {hh}
      <span className="opacity-40">:</span>
      {mm}
      <span className="opacity-40">:</span>
      <span className="text-blue-500">{ss}</span>
    </span>
  );
}

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [px, setPx] = useState(0);
  const [py, setPy] = useState(0);
  const frameRef = useRef<number | null>(null);

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
    <div
      id="top"
      className="relative w-full min-h-screen overflow-x-hidden scene-bg font-sans text-slate-900 selection:bg-blue-200"
    >
      <style>{`
        .portfolio-liquid-header {
          position: fixed;
          top: 24px;
          left: 32px;
          right: 32px;
          z-index: 9999;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 28px;
          opacity: 1;
          transform: none;
          pointer-events: auto;
        }

        .portfolio-liquid-header__brand {
          justify-self: start;
          color: #071225;
          font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
          font-size: clamp(22px, 2.2vw, 34px);
          font-weight: 900;
          letter-spacing: -0.065em;
          line-height: 1;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.55);
        }

        .portfolio-liquid-header__nav {
          justify-self: center;
          min-height: 64px;
          padding: 7px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 6px;
          backdrop-filter: blur(30px) saturate(180%);
          -webkit-backdrop-filter: blur(30px) saturate(180%);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.68) 0%,
              rgba(255, 255, 255, 0.34) 52%,
              rgba(255, 255, 255, 0.20) 100%
            );
          border: 1px solid rgba(255, 255, 255, 0.80);
          box-shadow:
            0 24px 70px rgba(15, 23, 42, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.96),
            inset 0 -1px 0 rgba(15, 23, 42, 0.07);
        }

        .portfolio-liquid-header__nav a {
          min-height: 48px;
          padding: 0 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #071225;
          text-decoration: none;
          font-size: 15px;
          font-weight: 800;
          transition:
            background 0.22s ease,
            transform 0.22s ease,
            color 0.22s ease,
            box-shadow 0.22s ease;
        }

        .portfolio-liquid-header__nav a:hover {
          color: #2563eb;
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.46);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.85),
            0 10px 22px rgba(15, 23, 42, 0.06);
        }

        .portfolio-liquid-header__right {
          justify-self: end;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .portfolio-liquid-header__hire {
          min-height: 50px;
          padding: 0 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          text-decoration: none;
          color: #ffffff;
          font-size: 14px;
          font-weight: 900;
          background:
            linear-gradient(
              180deg,
              #60a5fa 0%,
              #2563eb 48%,
              #1d4ed8 100%
            );
          border: 1px solid rgba(255, 255, 255, 0.48);
          box-shadow:
            0 18px 44px rgba(37, 99, 235, 0.34),
            inset 0 2px 2px rgba(255, 255, 255, 0.55),
            inset 0 -2px 5px rgba(0, 0, 0, 0.24);
        }

        .portfolio-liquid-header__clock {
          min-height: 50px;
          padding: 0 18px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(26px) saturate(170%);
          -webkit-backdrop-filter: blur(26px) saturate(170%);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.66),
              rgba(255, 255, 255, 0.28)
            );
          border: 1px solid rgba(255, 255, 255, 0.78);
          box-shadow:
            0 16px 36px rgba(15, 23, 42, 0.09),
            inset 0 1px 0 rgba(255, 255, 255, 0.92);
        }

        .portfolio-liquid-mobile-pill {
          display: none;
        }

        .mobile-liquid-menu {
          display: none;
        }

        @media (min-width: 900px) {
          .hero-section {
            padding-top: 168px !important;
            min-height: 660px !important;
            padding-bottom: 42px !important;
          }

          .hero-description {
            max-width: 690px !important;
            font-size: 16px !important;
            line-height: 1.65 !important;
          }

          .hero-actions {
            width: 100% !important;
            justify-content: center !important;
            margin-top: 26px !important;
          }
        }

        .hero-actions button {
          min-height: 48px !important;
          border-radius: 999px !important;
          padding: 0 28px !important;
          font-weight: 900 !important;
          backdrop-filter: blur(24px) saturate(165%) !important;
          -webkit-backdrop-filter: blur(24px) saturate(165%) !important;
          border: 1px solid rgba(255, 255, 255, 0.78) !important;
          transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            background 0.22s ease !important;
        }

        .hero-actions button:first-child {
          color: #ffffff !important;
          background:
            linear-gradient(
              180deg,
              #1e40af 0%,
              #2563eb 48%,
              #1e3a8a 100%
            ) !important;
          box-shadow:
            0 12px 30px rgba(29, 78, 216, 0.30),
            inset 0 2px 2px rgba(255, 255, 255, 0.44),
            inset 0 -2px 5px rgba(0, 0, 0, 0.22) !important;
        }

        .hero-actions button:nth-child(2) {
          color: #2563eb !important;
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.78),
              rgba(255, 255, 255, 0.34)
            ) !important;
          box-shadow:
            0 12px 30px rgba(15, 23, 42, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.96),
            inset 0 -1px 0 rgba(15, 23, 42, 0.07) !important;
        }

        .hero-actions button:hover {
          transform: translateY(-2px) !important;
        }

        .featured-capsules-section {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 16px 0 72px;
          overflow: hidden;
          background: transparent;
        }

        .featured-capsules-window {
          width: 100%;
          overflow: hidden;
          padding: 8px 0;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
        }

        .featured-capsules-track {
          display: flex;
          align-items: center;
          gap: 14px;
          width: max-content;
          animation: featuredCapsulesMove 30s linear infinite;
          will-change: transform;
        }

        .featured-capsule {
          height: 46px;
          padding: 0 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          white-space: nowrap;
          color: #071225;
          font-size: 15px;
          font-weight: 750;
          letter-spacing: -0.02em;
          backdrop-filter: blur(22px) saturate(165%);
          -webkit-backdrop-filter: blur(22px) saturate(165%);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.80),
              rgba(255, 255, 255, 0.40)
            );
          border: 1px solid rgba(255, 255, 255, 0.82);
          box-shadow:
            0 14px 32px rgba(15, 23, 42, 0.07),
            inset 0 1px 0 rgba(255, 255, 255, 0.96),
            inset 0 -1px 0 rgba(15, 23, 42, 0.05);
        }

        @keyframes featuredCapsulesMove {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .option-a-about-section {
          padding-top: 72px !important;
        }

        .option-a-about-title {
          font-size: clamp(40px, 6vw, 64px) !important;
          line-height: 0.95 !important;
          letter-spacing: -0.065em !important;
        }

        .option-a-about-copy {
          font-size: clamp(16px, 1.55vw, 19px) !important;
          line-height: 1.55 !important;
        }

        .option-a-about-copy--second {
          margin-top: 12px !important;
        }

        .option-a-about-cta-row {
          width: 100%;
          display: flex;
          justify-content: center;
          margin: 24px 0 34px;
        }

        .option-a-journey-button {
          max-width: 360px !important;
          min-height: 50px !important;
        }

        @media (max-width: 899px) {
          .portfolio-liquid-header {
            top: 14px;
            left: 12px;
            right: 12px;
            display: block;
          }

          .portfolio-liquid-header__brand,
          .portfolio-liquid-header__nav,
          .portfolio-liquid-header__right {
            display: none;
          }

          .portfolio-liquid-mobile-pill {
            width: 100%;
            min-height: 62px;
            padding: 7px 9px 7px 18px;
            border-radius: 999px;
            display: flex;
            align-items: center;
            gap: 9px;
            backdrop-filter: blur(30px) saturate(180%);
            -webkit-backdrop-filter: blur(30px) saturate(180%);
            background:
              linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.72) 0%,
                rgba(255, 255, 255, 0.36) 54%,
                rgba(255, 255, 255, 0.22) 100%
              );
            border: 1px solid rgba(255, 255, 255, 0.84);
            box-shadow:
              0 18px 48px rgba(15, 23, 42, 0.12),
              inset 0 1px 0 rgba(255, 255, 255, 0.96),
              inset 0 -1px 0 rgba(15, 23, 42, 0.07);
          }

          .portfolio-liquid-mobile-pill__brand {
            margin-right: auto;
            color: #071225;
            text-decoration: none;
            font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
            font-size: 18px;
            font-weight: 900;
            letter-spacing: -0.065em;
            white-space: nowrap;
          }

          .portfolio-liquid-mobile-pill__mini-link {
            color: #071225;
            text-decoration: none;
            font-size: 13px;
            font-weight: 850;
            white-space: nowrap;
          }

          .portfolio-liquid-mobile-pill__hire,
          .portfolio-liquid-mobile-pill__menu {
            width: 48px;
            height: 48px;
            min-width: 48px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.78);
            backdrop-filter: blur(22px) saturate(165%);
            -webkit-backdrop-filter: blur(22px) saturate(165%);
            box-shadow:
              0 10px 26px rgba(15, 23, 42, 0.11),
              inset 0 1px 0 rgba(255, 255, 255, 0.90);
          }

          .portfolio-liquid-mobile-pill__hire {
            color: #ffffff;
            background:
              linear-gradient(
                180deg,
                rgba(59, 130, 246, 0.96),
                rgba(29, 78, 216, 0.96)
              );
          }

          .portfolio-liquid-mobile-pill__menu {
            color: #071225;
            cursor: pointer;
            background:
              linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.78),
                rgba(255, 255, 255, 0.34)
              );
          }

          .mobile-liquid-menu {
            position: absolute;
            top: 74px;
            right: 0;
            width: min(270px, calc(100vw - 24px));
            padding: 15px;
            border-radius: 26px;
            display: block;
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
            animation: mobileLiquidMenuIn 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
          }

          .mobile-liquid-menu__quick-row {
            display: flex;
            align-items: center;
            justify-content: space-around;
            color: #0f172a;
            margin-bottom: 12px;
          }

          .mobile-liquid-menu__quick-row span {
            width: 36px;
            height: 36px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #0f172a;
            background: rgba(255, 255, 255, 0.42);
            border: 1px solid rgba(255, 255, 255, 0.70);
          }

          .mobile-liquid-menu__divider {
            height: 1px;
            background: rgba(15, 23, 42, 0.08);
            margin-bottom: 8px;
          }

          .mobile-liquid-menu__links {
            display: grid;
            gap: 2px;
          }

          .mobile-liquid-menu__links a {
            min-height: 44px;
            padding: 0 4px 0 6px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            color: #0f172a;
            text-decoration: none;
            font-size: 17px;
            font-weight: 850;
            letter-spacing: -0.02em;
          }

          .mobile-liquid-menu__links a svg {
            color: #0f172a;
            opacity: 0.72;
          }

          @keyframes mobileLiquidMenuIn {
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

          .hero-section {
            padding-top: 140px !important;
            padding-bottom: 30px !important;
            min-height: auto !important;
          }

          .hero-actions button {
            min-height: 50px !important;
            padding: 0 24px !important;
          }

          .featured-capsules-section {
            padding: 12px 0 68px;
          }

          .featured-capsules-window {
            padding: 8px 0 12px;
          }

          .featured-capsules-track {
            gap: 10px;
            animation-duration: 22s;
          }

          .featured-capsule {
            height: 40px;
            padding: 0 16px;
            font-size: 13px;
          }

          .option-a-about-title {
            font-size: clamp(38px, 12vw, 52px) !important;
          }

          .option-a-about-cta-row {
            margin: 20px 0 28px;
          }
        }

        @media (max-width: 390px) {
          .portfolio-liquid-mobile-pill__brand {
            font-size: 16px;
          }

          .portfolio-liquid-mobile-pill__mini-link {
            display: none;
          }

          .portfolio-liquid-mobile-pill__hire,
          .portfolio-liquid-mobile-pill__menu {
            width: 46px;
            height: 46px;
            min-width: 46px;
          }
        }
      `}</style>

      <div className="noise-overlay" />

      <header className="portfolio-liquid-header">
        <div className="portfolio-liquid-header__brand">Portfolio.</div>

        <nav
          className="portfolio-liquid-header__nav"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="portfolio-liquid-header__right">
          <a href="/contact" className="portfolio-liquid-header__hire">
            Hire Now
            <ArrowRight className="size-4" />
          </a>

          <div className="portfolio-liquid-header__clock">
            <LiveClock />
          </div>
        </div>

        <div className="portfolio-liquid-mobile-pill">
          <a href="#top" className="portfolio-liquid-mobile-pill__brand">
            Portfolio.
          </a>

          <a href="#work" className="portfolio-liquid-mobile-pill__mini-link">
            Work
          </a>

          <a
            href="/contact"
            className="portfolio-liquid-mobile-pill__hire"
            aria-label="Hire Now"
          >
            <BriefcaseBusiness size={18} strokeWidth={2.3} />
          </a>

          <button
            onClick={() => setNavOpen(!navOpen)}
            aria-label={navOpen ? "Close menu" : "Open menu"}
            className="portfolio-liquid-mobile-pill__menu"
            type="button"
          >
            {navOpen ? (
              <X size={24} strokeWidth={2.2} />
            ) : (
              <Menu size={24} strokeWidth={2.2} />
            )}
          </button>
        </div>

        <MobileLiquidMenu isOpen={navOpen} setIsOpen={setNavOpen} />
      </header>

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          translate: `${px * -2}px ${py * -2}px`,
          transition: "translate 800ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <DustLayer px={px} py={py} />
      </div>

      <div className="animate-camera-drift relative" style={{ zIndex: 1 }}>
        <main className="w-full">
          <section className="hero-section relative w-full px-6 pb-20 md:px-12">
            <div className="hero-content w-full select-none">
              <h1 className="hero-main-title w-full text-center uppercase text-slate-900">
                USMAN FAROOQI
              </h1>

              <p className="hero-subtitle w-full text-center font-semibold uppercase text-slate-400">
                <Typewriter
                  words={["Graphic Designer", "Brand Designer", "Reel Editor"]}
                  typeSpeed={100}
                  deleteSpeed={50}
                  holdTime={2000}
                />
              </p>

              <p className="hero-description mx-auto max-w-sm text-center text-sm leading-relaxed text-slate-400">
                Turning expertise into impactful visuals.
              </p>

              <div className="hero-mobile-proof" aria-label="Creative focus">
                <div className="hero-proof-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <p>Identity systems · Social visuals · Digital brand presence</p>
              </div>

              <div className="hero-actions flex flex-wrap items-center gap-3">
                <PillButton
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                  data-testid="button-hire-hero"
                >
                  Hire Now <ArrowRight className="size-4" />
                </PillButton>

                <PillButton
                  variant="secondary"
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("work")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  data-testid="button-view-work"
                >
                  View Work
                </PillButton>
              </div>
            </div>
          </section>

          <FeaturedCapsules />

          <ServicesFinal />

          <SelectedWorkFinal />

          <OptionAAboutSection />

          <SiteFooterFinal />
        </main>
      </div>

      <ReviewSystem />
    </div>
  );
}