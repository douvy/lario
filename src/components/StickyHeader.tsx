import { useEffect, useState } from 'react';
import { Circle, ArrowRight, ArrowUp, ArrowLeft } from 'lucide-react';
import TabBar, { type TabKey } from './TabBar';
import type { TierId } from '../data/tiers';

const regions: { id: TierId; name: string; Icon: typeof Circle }[] = [
  { id: 'como', name: 'Como', Icon: Circle },
  { id: 'west-shore', name: 'West', Icon: ArrowLeft },
  { id: 'east-shore', name: 'East', Icon: ArrowRight },
  { id: 'centro-lago', name: 'Centro', Icon: ArrowUp },
];

export default function StickyHeader({
  tab,
  onTabChange,
  tierCounts,
  onSelectTier,
  triggerRef,
}: {
  tab: TabKey;
  onTabChange: (t: TabKey) => void;
  tierCounts: ReadonlyMap<string, number>;
  onSelectTier: (tierId: TierId) => void;
  triggerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [showCompact, setShowCompact] = useState(false);
  const [activeRegion, setActiveRegion] = useState<TierId | null>(null);

  // Observe when the original region nav leaves viewport
  useEffect(() => {
    if (!triggerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCompact(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '-1px 0px 0px 0px' }
    );

    observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, [triggerRef]);

  // Track which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = regions
        .map((r) => ({
          id: r.id,
          el: document.getElementById(`${tab}-${r.id}`),
        }))
        .filter((s) => s.el !== null);

      // Check if at bottom of page - activate last visible section
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (atBottom && sections.length > 0) {
        // Find last section that exists
        for (let i = sections.length - 1; i >= 0; i--) {
          if (sections[i].el) {
            setActiveRegion(sections[i].id);
            return;
          }
        }
      }

      // Normal detection - find section in view
      for (const { id, el } of sections) {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveRegion(id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tab]);

  return (
    <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-md">
      {/* Compact Region Nav */}
      <div
        className={[
          'overflow-hidden transition-all duration-300 ease-out',
          showCompact ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className="flex gap-1.5 overflow-x-auto px-6 pb-2.5 pt-3 scrollbar-none">
          {regions.map((r) => {
            const count = tierCounts.get(r.id) ?? 0;
            const disabled = count === 0;
            const isHere = r.id === 'como';
            const isActive = activeRegion === r.id;

            return (
              <button
                key={r.id}
                onClick={() => !disabled && onSelectTier(r.id)}
                disabled={disabled}
                className={[
                  'flex shrink-0 items-center gap-1 rounded border px-2 py-1 font-mono text-[10px] tracking-tight transition-all',
                  disabled
                    ? 'opacity-30 cursor-default border-border'
                    : isActive
                      ? isHere
                        ? 'border-palm/20 bg-palm/5 text-palm'
                        : 'border-ocean/20 bg-ocean/5 text-ocean'
                      : 'border-border bg-transparent text-muted hover:border-ocean/20 hover:bg-ocean/5 hover:text-ocean',
                ].join(' ')}
              >
                <r.Icon size={10} className={isActive ? (isHere ? 'text-palm' : 'text-ocean') : 'text-muted/50'} fill={isHere && isActive ? 'currentColor' : 'none'} />
                {r.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Bar */}
      <div className="border-b border-[#e5e7eb] pt-1">
        <div className="px-6">
          <TabBar tab={tab} onChange={onTabChange} />
        </div>
      </div>
    </div>
  );
}
