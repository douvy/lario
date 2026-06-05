import { useEffect, useState } from 'react';

export default function SunSprite() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="pointer-events-none absolute top-6 right-0 overflow-hidden transition-all duration-[1500ms] ease-out"
      style={{
        opacity: visible ? 0.7 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(16px)',
        width: 28,
        height: 28,
      }}
    >
      {/* Pixel sun peeking from right edge */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="crispEdges"
        style={{ marginLeft: -12 }}
      >
        {/* Core pixels */}
        <rect x="10" y="6" width="2" height="2" fill="#FBBF24" />
        <rect x="12" y="6" width="2" height="2" fill="#FBBF24" />
        <rect x="8" y="8" width="2" height="2" fill="#FBBF24" />
        <rect x="10" y="8" width="2" height="2" fill="#FDE68A" />
        <rect x="12" y="8" width="2" height="2" fill="#FBBF24" />
        <rect x="14" y="8" width="2" height="2" fill="#FBBF24" />
        <rect x="8" y="10" width="2" height="2" fill="#FBBF24" />
        <rect x="10" y="10" width="2" height="2" fill="#FBBF24" />
        <rect x="12" y="10" width="2" height="2" fill="#FBBF24" />
        <rect x="14" y="10" width="2" height="2" fill="#FBBF24" />
        <rect x="10" y="12" width="2" height="2" fill="#FBBF24" />
        <rect x="12" y="12" width="2" height="2" fill="#FBBF24" />
      </svg>
    </div>
  );
}
