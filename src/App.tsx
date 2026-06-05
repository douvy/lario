import { useMemo, useState, useRef } from 'react';
import AmbientCanvas from './components/AmbientCanvas';
import InfoBanners from './components/InfoBanners';
import RegionNav from './components/RegionNav';
import StickyHeader from './components/StickyHeader';
import TierSection from './components/TierSection';
import { SPOTS } from './data/spots';
import { TIERS } from './data/tiers';
import { useVisited } from './lib/useVisited';
import type { Spot } from './data/spots';
import type { TabKey } from './components/TabBar';

export default function App() {
  const [tab, setTab] = useState<TabKey>('eat');
  const { isVisited, toggleVisited } = useVisited();
  const regionNavRef = useRef<HTMLDivElement>(null);

  const spotsByTier = useMemo(() => {
    const visible = SPOTS.filter((s) => (tab === 'eat' ? s.kind === 'food' : s.kind === 'activity'));
    const map = new Map<string, Spot[]>();
    for (const tier of TIERS) map.set(tier.id, []);
    for (const spot of visible) map.get(spot.tierId)?.push(spot);
    return map;
  }, [tab]);

  const tierCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const [tierId, list] of spotsByTier.entries()) {
      counts.set(tierId, list.length);
    }
    return counts;
  }, [spotsByTier]);

  const totalSpots = useMemo(() => {
    let total = 0;
    for (const count of tierCounts.values()) total += count;
    return total;
  }, [tierCounts]);

  function scrollToTier(tierId: string) {
    const el = document.getElementById(`${tab}-${tierId}`);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="mx-auto min-h-dvh max-w-xl">
      {/* Hero */}
      <header className="relative px-6 pb-6 pt-10">
        <AmbientCanvas />

        {/* Content */}
        <div className="relative">
          <h1 className="font-display text-[42px] sm:text-[56px] font-medium leading-none tracking-tight text-foreground">
            Lake Como
          </h1>
        </div>
      </header>

      {/* Spots count + Region Navigation */}
      <div className="mx-6 mt-6" ref={regionNavRef}>
        <p className="mb-3 text-[12px] tracking-tight text-muted/60">
          <span className="font-medium text-foreground/70">{totalSpots}</span> {tab === 'eat' ? 'places to eat' : 'things to do'}
        </p>
        <div className="overflow-hidden rounded-lg border border-border">
          <RegionNav
            tierCounts={tierCounts}
            onSelectTier={scrollToTier}
          />
        </div>
      </div>

      {/* Alerts */}
      <div className="px-6 pt-6">
        <InfoBanners />
      </div>

      {/* Spacer before sticky */}
      <div className="h-10" />

      {/* Sticky Header (Compact Nav + Tabs) */}
      <StickyHeader
        tab={tab}
        onTabChange={setTab}
        tierCounts={tierCounts}
        onSelectTier={scrollToTier}
        triggerRef={regionNavRef}
      />

      {/* Content */}
      <main className="mt-8 space-y-16 px-6 pb-20">
        {TIERS.map((tier) => {
          const list = spotsByTier.get(tier.id) ?? [];
          if (tab === 'do' && list.length === 0) return null;
          return (
            <TierSection
              key={tier.id}
              id={`${tab}-${tier.id}`}
              tier={tier}
              tab={tab}
              spots={list}
              isVisited={isVisited}
              toggleVisited={toggleVisited}
            />
          );
        })}
      </main>
    </div>
  );
}
