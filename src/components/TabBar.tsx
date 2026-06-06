import { Utensils, Compass } from 'lucide-react';

export type TabKey = 'eat' | 'do';

export default function TabBar({ tab, onChange }: { tab: TabKey; onChange: (t: TabKey) => void }) {
  return (
    <div className="flex">
      <button
        type="button"
        onClick={() => onChange('eat')}
        className={[
          'group relative flex flex-1 items-center justify-center py-3 transition-colors',
          tab === 'eat' ? 'text-foreground' : 'text-muted hover:text-foreground',
        ].join(' ')}
        aria-pressed={tab === 'eat'}
      >
        <span className="text-[15px] tracking-tight font-medium">
          Eat
        </span>
        {/* Active indicator */}
        {tab === 'eat' && (
          <div className="absolute bottom-0 left-4 right-4 h-px bg-foreground/20" />
        )}
      </button>

      {/* Dotted divider */}
      <div className="flex flex-col items-center justify-center">
        <div className="h-6 w-px border-l border-dashed border-muted/30" />
      </div>

      <button
        type="button"
        onClick={() => onChange('do')}
        className={[
          'group relative flex flex-1 items-center justify-center py-3 transition-colors',
          tab === 'do' ? 'text-foreground' : 'text-muted hover:text-foreground',
        ].join(' ')}
        aria-pressed={tab === 'do'}
      >
        <span className="text-[15px] tracking-tight font-medium">
          Explore
        </span>
        {/* Active indicator */}
        {tab === 'do' && (
          <div className="absolute bottom-0 left-4 right-4 h-px bg-foreground/20" />
        )}
      </button>
    </div>
  );
}
