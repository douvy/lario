import { Utensils, Compass } from 'lucide-react';

export type TabKey = 'eat' | 'do';

export default function TabBar({ tab, onChange }: { tab: TabKey; onChange: (t: TabKey) => void }) {
  return (
    <div className="flex">
      <button
        type="button"
        onClick={() => onChange('eat')}
        className={[
          'group relative flex flex-1 flex-col items-center gap-1 py-4 transition-colors',
          tab === 'eat' ? 'text-foreground' : 'text-muted hover:text-foreground',
        ].join(' ')}
        aria-pressed={tab === 'eat'}
      >
        <span className="text-[15px] tracking-tight font-medium">
          Eat
        </span>
        <span className={[
          'text-[13px] tracking-normal transition-colors',
          tab === 'eat' ? 'text-muted' : 'text-muted/50'
        ].join(' ')}>
          Coffee to aperitivo
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
          'group relative flex flex-1 flex-col items-center gap-1 py-4 transition-colors',
          tab === 'do' ? 'text-foreground' : 'text-muted hover:text-foreground',
        ].join(' ')}
        aria-pressed={tab === 'do'}
      >
        <span className="text-[15px] tracking-tight font-medium">
          Explore
        </span>
        <span className={[
          'text-[13px] tracking-normal transition-colors',
          tab === 'do' ? 'text-muted' : 'text-muted/50'
        ].join(' ')}>
          Villas, views, villages
        </span>
        {/* Active indicator */}
        {tab === 'do' && (
          <div className="absolute bottom-0 left-4 right-4 h-px bg-foreground/20" />
        )}
      </button>
    </div>
  );
}
