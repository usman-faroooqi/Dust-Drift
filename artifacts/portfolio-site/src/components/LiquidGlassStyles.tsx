export default function LiquidGlassStyles() {
    return (
      <style>{`
        html,
        body {
          background:
            radial-gradient(circle at 50% 0%, rgba(255,255,255,0.98), transparent 45%),
            radial-gradient(circle at 88% 16%, rgba(191,219,254,0.50), transparent 32%),
            radial-gradient(circle at 10% 78%, rgba(226,232,240,0.50), transparent 34%),
            linear-gradient(180deg, #f8fafc 0%, #eef1f5 48%, #f8fafc 100%) !important;
        }
  
        .scene-bg,
        .projects-clean-page,
        .contact-page {
          background:
            radial-gradient(circle at 50% 0%, rgba(255,255,255,0.98), transparent 46%),
            radial-gradient(circle at 86% 14%, rgba(191,219,254,0.48), transparent 34%),
            radial-gradient(circle at 12% 76%, rgba(226,232,240,0.48), transparent 34%),
            linear-gradient(180deg, #f8fafc 0%, #eef1f5 48%, #f8fafc 100%) !important;
        }
  
        .noise-overlay {
          opacity: 0.032 !important;
        }
  
        .site-footer-final {
          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,0.30),
              rgba(255,255,255,0.10)
            ) !important;
          backdrop-filter: blur(18px) saturate(145%) !important;
          -webkit-backdrop-filter: blur(18px) saturate(145%) !important;
          border-top: 1px solid rgba(255,255,255,0.62) !important;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.78),
            0 -18px 50px rgba(15,23,42,0.035) !important;
        }
  
        .site-footer-final a {
          color: rgba(15,23,42,0.72) !important;
        }
  
        .site-footer-final a:hover {
          color: #2563eb !important;
        }
  
        html {
          scroll-behavior: smooth;
        }
  
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    );
  }