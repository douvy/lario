import { useId, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Fish, Utensils, Truck, Beef, Cookie, CupSoda,
  Mountain, TrainFront, Leaf, Coffee, IceCreamCone,
  Waves, Ship, Trees, Palette
} from 'lucide-react';
import type { Spot } from '../data/spots';

const iconMap: Record<string, LucideIcon> = {
  fish: Fish,
  utensils: Utensils,
  truck: Truck,
  beef: Beef,
  cookie: Cookie,
  'cup-soda': CupSoda,
  'hot-dog': Beef,
  'ice-cream-cone': IceCreamCone,
  leaf: Leaf,
  coffee: Coffee,
  mountain: Mountain,
  'train-front': TrainFront,
  waves: Waves,
  ship: Ship,
  trees: Trees,
  palette: Palette,
};

function mapsLink(lat: number, lng: number) {
  const destination = encodeURIComponent(`${lat},${lng}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

export default function SpotCard({
  spot,
  visited,
  onToggleVisited
}: {
  spot: Spot;
  visited: boolean;
  onToggleVisited: () => void;
}) {
  const [open, setOpen] = useState(false);
  const visitedId = useId();
  const Icon = iconMap[spot.categoryIcon];

  return (
    <article
      className={[
        'group rounded-lg border border-border bg-surface transition-all duration-200',
        visited && !open ? 'opacity-40' : '',
      ].join(' ')}
    >
      <button
        type="button"
        className="flex w-full items-start gap-4 px-5 py-4 text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {Icon && <Icon size={18} className="mt-0.5 text-ocean shrink-0" />}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-display text-[16px] font-medium text-foreground">
                {spot.name}
                {visited && !open && (
                  <span className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-ocean text-[9px] text-white">✓</span>
                )}
              </h3>
              <div className="mt-1.5">
                <span className="h-[18px] px-1 pt-px inline-flex items-center border border-ocean/30 bg-ocean/5 font-mono text-[0.625rem] leading-6 text-ocean">
                  {spot.categoryLabel}
                </span>
                {spot.hours && (
                  <p className="mt-1 text-[10px] text-[#4c5461]">{spot.hours}</p>
                )}
              </div>
            </div>
            <span className="shrink-0 h-[18px] px-1.5 flex items-center border border-border bg-black/[0.02] font-mono text-[10px] text-muted">
              {spot.driveBadge}
            </span>
          </div>
          <p className="mt-2 text-[14px] leading-relaxed text-[#4c5461]">{spot.teaser}</p>
        </div>
      </button>

      {open && (
        <div className="animate-fade-up px-5 pb-5">
          {/* Notes */}
          <p className="whitespace-pre-wrap text-[14px] leading-[1.7] text-[#4c5461]">
            {spot.notes}
          </p>

          {/* Address */}
          <p className="mt-4 text-[12px] text-[#4c5461]">{spot.address}</p>

          {/* Actions */}
          <div className="mt-5 flex gap-3">
            <a
              href={mapsLink(spot.lat, spot.lng)}
              className="flex-1 rounded-sm bg-ocean py-2.5 text-center text-[13px] tracking-tight text-white transition-all [box-shadow:hsl(217,91%,40%)_0_-2px_0_0_inset,hsl(217,91%,95%)_0_1px_3px_0] hover:bg-[hsl(217,91%,45%)] hover:[box-shadow:none] active:scale-[.99]"
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noreferrer"
            >
              Navigate
            </a>
            <a
              href={`/spots/${spot.id}`}
              className="hidden"
              tabIndex={-1}
            >
              {spot.name}
            </a>

            <label
              htmlFor={visitedId}
              className={[
                'flex flex-1 cursor-pointer items-center justify-center rounded-sm py-2.5 text-[13px] tracking-tight transition-all active:scale-[.99]',
                visited
                  ? 'bg-ocean text-white [box-shadow:hsl(217,91%,40%)_0_-2px_0_0_inset,hsl(217,91%,95%)_0_1px_3px_0] hover:bg-[hsl(217,91%,45%)] hover:[box-shadow:none]'
                  : 'border border-border bg-surface text-muted [box-shadow:hsl(218,13%,50%,0.1)_0_-2px_0_0_inset] hover:bg-black/[0.02] hover:text-foreground hover:[box-shadow:none]'
              ].join(' ')}
              onClick={(e) => e.stopPropagation()}
            >
              <input
                id={visitedId}
                type="checkbox"
                checked={visited}
                onChange={() => onToggleVisited()}
                className="sr-only"
              />
              {visited ? 'Visited ✓' : 'Mark visited'}
            </label>
          </div>
        </div>
      )}
    </article>
  );
}
