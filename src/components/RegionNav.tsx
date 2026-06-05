import type { TierId } from '../data/tiers';

const regions: { id: TierId; name: string; subtitle?: string }[] = [
  { id: 'como', name: 'Como', subtitle: 'Base' },
  { id: 'west-shore', name: 'West', subtitle: '10–20 min' },
  { id: 'east-shore', name: 'East', subtitle: '15–25 min' },
  { id: 'centro-lago', name: 'Centro', subtitle: 'Ferry' },
];

export default function RegionNav({
  tierCounts,
  onSelectTier
}: {
  tierCounts: ReadonlyMap<string, number>;
  onSelectTier: (tierId: TierId) => void;
}) {
  return (
    <div className="bg-surface py-3">
      <div className="flex items-center">
        {regions.map((r, i) => {
          const count = tierCounts.get(r.id) ?? 0;
          const disabled = count === 0;

          return (
            <div key={r.id} className="flex items-center flex-1">
              {/* Dotted divider */}
              {i > 0 && (
                <div className="h-8 w-px border-l border-dashed border-muted/30" />
              )}

              <button
                onClick={() => !disabled && onSelectTier(r.id)}
                disabled={disabled}
                className={[
                  'flex-1 flex flex-col items-center gap-0.5 py-2 transition-all',
                  disabled ? 'opacity-30' : 'hover:opacity-70'
                ].join(' ')}
              >
                <span className="text-[14px] font-medium text-foreground">
                  {r.name}
                </span>
                <span className="text-[11px] text-muted">
                  {count > 0 ? `${count} spot${count > 1 ? 's' : ''}` : r.subtitle}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
