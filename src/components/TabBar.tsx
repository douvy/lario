import { Utensils, Compass } from 'lucide-react';

export type TabKey = 'eat' | 'do';

export default function TabBar({ tab, onChange }: { tab: TabKey; onChange: (t: TabKey) => void }) {
  return (
    <div className="flex -mb-px">
      <button
        type="button"
        onClick={() => onChange('eat')}
        className={[
          'flex flex-1 items-center justify-center gap-1.5 py-2.5 text-[13px] font-medium tracking-tight transition-colors',
          tab === 'eat'
            ? 'bg-ocean/5 text-ocean border-b border-ocean'
            : 'text-muted hover:text-foreground',
        ].join(' ')}
        aria-pressed={tab === 'eat'}
      >
        <Utensils size={12} />
        Where to Eat
      </button>

      <button
        type="button"
        onClick={() => onChange('do')}
        className={[
          'flex flex-1 items-center justify-center gap-1.5 py-2.5 text-[13px] font-medium tracking-tight transition-colors',
          tab === 'do'
            ? 'bg-ocean/5 text-ocean border-b border-ocean'
            : 'text-muted hover:text-foreground',
        ].join(' ')}
        aria-pressed={tab === 'do'}
      >
        <Compass size={12} />
        Things to Do
      </button>
    </div>
  );
}
