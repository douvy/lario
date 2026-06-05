import type { TierId } from '../data/tiers';

const regions: { id: TierId; name: string; direction?: string }[] = [
  { id: 'como', name: 'Como' },
  { id: 'west-shore', name: 'West', direction: '←' },
  { id: 'east-shore', name: 'East', direction: '→' },
  { id: 'centro-lago', name: 'Centro', direction: '↑' },
];

export default function RegionNav({
  tierCounts,
  onSelectTier
}: {
  tierCounts: ReadonlyMap<string, number>;
  onSelectTier: (tierId: TierId) => void;
}) {
  return (
    <div className="relative bg-surface">
      <div className="grid grid-cols-4">
        {regions.map((r) => {
          const isHere = r.id === 'como';
          const count = tierCounts.get(r.id) ?? 0;
          const disabled = count === 0;

          return (
            <button
              key={r.id}
              onClick={() => !disabled && onSelectTier(r.id)}
              disabled={disabled}
              className={[
                'group relative px-2 py-5 transition-all',
                disabled ? 'opacity-30' : 'hover:bg-ocean/5'
              ].join(' ')}
            >
              {/* Active indicator line */}
              <div className={[
                'absolute inset-x-3 bottom-2 h-[2px] rounded-full transition-all',
                isHere && !disabled ? 'bg-palm' : 'bg-transparent group-hover:bg-ocean/30'
              ].join(' ')} />

              {/* Direction arrow */}
              {r.direction && (
                <div className="mb-1 text-[11px] text-muted/60">{r.direction}</div>
              )}

              {/* Marker dot for Here */}
              {isHere && !disabled && (
                <div className="mb-1 flex justify-center">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-palm opacity-30" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-palm" />
                  </span>
                </div>
              )}

              <div className={[
                'font-display text-[15px]',
                isHere && !disabled ? 'text-palm' : 'text-foreground'
              ].join(' ')}>
                {r.name}
              </div>

              {/* Count */}
              <div className="mt-1.5 text-[11px] tabular-nums text-muted">
                {count > 0 ? count : '—'}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
