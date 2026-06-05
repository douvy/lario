import { ChevronRight } from 'lucide-react';

export default function InfoBanners() {
  return (
    <details className="group">
      <summary className="flex cursor-pointer select-none list-none items-center gap-2 text-[13px] text-muted hover:text-foreground">
        <ChevronRight size={14} className="transition-transform group-open:rotate-90" />
        <span>Travel updates</span>
        <span className="text-[11px] text-muted/50">4</span>
      </summary>
      <ul className="mt-3 space-y-2 border-l border-border pl-4 text-[13px] leading-relaxed text-muted">
        <li><strong className="text-foreground">Holey Grail Hanalei</strong> may be closed — Kapaʻa truck is reliable</li>
        <li><strong className="text-foreground">Trucking Delicious</strong> is now "Wake Up Delicious" at 5-5144 Kuhio Hwy</li>
        <li><strong className="text-foreground">Hāʻena State Park</strong> requires shuttle from Waipā ($40/person)</li>
        <li><strong className="text-foreground">Cell coverage</strong> drops past Hanalei + West Side</li>
      </ul>
    </details>
  );
}
