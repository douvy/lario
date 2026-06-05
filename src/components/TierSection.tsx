import type { Tier } from '../data/tiers';
import type { Spot } from '../data/spots';
import type { TabKey } from './TabBar';
import SpotCard from './SpotCard';

export default function TierSection({
  id,
  tier,
  tab,
  spots,
  isVisited,
  toggleVisited
}: {
  id: string;
  tier: Tier;
  tab: TabKey;
  spots: Spot[];
  isVisited: (spotId: string) => boolean;
  toggleVisited: (spotId: string) => void;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      {/* Section header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-[22px] font-medium text-foreground">
            {tier.label}
          </h2>
          <div className="flex items-center gap-1 rounded-sm border border-black/10 bg-black/[0.03] px-2.5 py-1 text-[11px] tracking-tight [box-shadow:hsl(218,13%,30%,0.06)_0_-2px_0_0_inset]">
            <span className="text-foreground">{spots.length}</span>
            <span className="text-muted/70">{spots.length === 1 ? 'spot' : 'spots'}</span>
          </div>
        </div>
        <p className="mt-1 text-[13px] text-muted">{tier.driveFromHotel}</p>
      </div>

      {tier.note && (
        <p className="mb-6 rounded-sm border border-dashed border-ocean/30 bg-ocean/5 px-3 py-2.5 text-[13px] leading-relaxed text-foreground/80 [box-shadow:hsl(330,60%,50%,0.05)_0_-2px_0_0_inset]">
          {tier.note}
        </p>
      )}

      <div className="stagger space-y-4">
        {spots.map((spot) => (
          <SpotCard
            key={spot.id}
            spot={spot}
            visited={isVisited(spot.id)}
            onToggleVisited={() => toggleVisited(spot.id)}
          />
        ))}
      </div>
    </section>
  );
}
