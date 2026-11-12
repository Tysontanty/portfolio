export function SkyAtmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <style>{`
        @keyframes sky-aurora {
          0%, 100% { transform: translate3d(-3%, -2%, 0) rotate(-6deg); }
          50% { transform: translate3d(4%, 3%, 0) rotate(8deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .sky-aurora { animation: none !important; }
        }
      `}</style>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% -10%, #24357a 0%, rgba(15, 24, 64, 0.55) 38%, transparent 72%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 12%, rgba(60, 255, 232, 0.16) 0%, rgba(40, 90, 180, 0.12) 34%, transparent 68%)",
        }}
      />
      <div
        className="sky-aurora absolute -inset-[40%] opacity-80"
        style={{
          background:
            "linear-gradient(12deg, transparent 0%, rgba(36, 70, 160, 0.22) 18%, rgba(50, 90, 190, 0.32) 32%, rgba(30, 60, 140, 0.16) 46%, transparent 60%, rgba(28, 80, 170, 0.18) 74%, rgba(60, 255, 232, 0.08) 86%, transparent 96%)",
          animation: "sky-aurora 28s ease-in-out infinite",
        }}
      />
      <div
        className="sky-aurora absolute -inset-[40%] opacity-70"
        style={{
          background:
            "linear-gradient(-8deg, transparent 8%, rgba(40, 80, 170, 0.18) 28%, rgba(70, 110, 210, 0.28) 46%, rgba(24, 50, 120, 0.12) 64%, transparent 84%)",
          animation: "sky-aurora 34s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(92, 128, 196, 0.32) 0%, rgba(92, 128, 196, 0.12) 10%, transparent 22%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, transparent 58%, rgba(5, 8, 20, 0.28) 82%, rgba(5, 8, 20, 0.55) 100%)",
        }}
      />
    </div>
  );
}
