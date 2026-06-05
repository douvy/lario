import { useEffect, useState } from 'react';

export default function BoatSprite() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState(-15);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 1200);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const animate = () => {
      setPosition((p) => {
        if (p > 105) {
          setVisible(false);
          return -15;
        }
        return p + 0.06;
      });
    };

    const interval = setInterval(animate, 16);
    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none absolute"
      style={{
        left: `${position}%`,
        bottom: '8px',
        opacity: visible ? 0.6 : 0,
        transition: 'opacity 0.5s'
      }}
    >
      {/* Pixel-perfect Riva runabout */}
      <svg
        width="40"
        height="16"
        viewBox="0 0 40 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ imageRendering: 'pixelated' }}
      >
        {/* Water line reflection */}
        <rect x="6" y="14" width="28" height="2" fill="#2563eb" opacity="0.15" rx="1" />

        {/* Hull shadow */}
        <path d="M4 12 L6 14 L34 14 L36 12" fill="#3D2314" />

        {/* Hull - rich mahogany */}
        <path d="M2 10 L4 12 L36 12 L38 10 L2 10Z" fill="#5C3317" />

        {/* Gunwale - polished wood trim */}
        <rect x="2" y="9" width="36" height="1" fill="#8B5A2B" />

        {/* Deck - varnished planks */}
        <rect x="4" y="6" width="32" height="3" fill="#6B4423" />
        <line x1="6" y1="6" x2="6" y2="9" stroke="#5C3317" strokeWidth="0.5" />
        <line x1="10" y1="6" x2="10" y2="9" stroke="#5C3317" strokeWidth="0.5" />
        <line x1="14" y1="6" x2="14" y2="9" stroke="#5C3317" strokeWidth="0.5" />
        <line x1="30" y1="6" x2="30" y2="9" stroke="#5C3317" strokeWidth="0.5" />
        <line x1="34" y1="6" x2="34" y2="9" stroke="#5C3317" strokeWidth="0.5" />

        {/* Cream center stripe */}
        <rect x="4" y="7" width="32" height="1" fill="#F2E6D9" />

        {/* Cockpit well */}
        <rect x="18" y="4" width="12" height="3" rx="1" fill="#4A3728" />

        {/* Seats - cream leather with stitch */}
        <rect x="20" y="5" width="3" height="1.5" rx="0.5" fill="#EDE4D3" />
        <rect x="25" y="5" width="3" height="1.5" rx="0.5" fill="#EDE4D3" />

        {/* Windscreen - glass with frame */}
        <rect x="16" y="3" width="1" height="4" fill="#A68B5B" />
        <path d="M17 3 L17 7 L19 7 L19 5 Z" fill="#B8D4E8" opacity="0.7" />

        {/* Bow detail */}
        <path d="M2 10 L0 9 L2 8" fill="#5C3317" />

        {/* Chrome fittings */}
        <circle cx="8" cy="7" r="0.5" fill="#D4D4D4" />
        <circle cx="32" cy="7" r="0.5" fill="#D4D4D4" />

        {/* Stern flag */}
        <rect x="36" y="4" width="0.5" height="4" fill="#8B5A2B" />
        <path d="M36.5 4 L40 5.5 L36.5 7 Z" fill="#C41E3A" />
      </svg>
    </div>
  );
}
