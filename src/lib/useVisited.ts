import { useCallback, useMemo, useState } from 'react';

const STORAGE_KEY = 'kauai-visited';

function readVisited(): Record<string, true> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || '{}';
    const parsed = JSON.parse(raw) as Record<string, boolean>;
    const clean: Record<string, true> = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (v) clean[k] = true;
    }
    return clean;
  } catch {
    return {};
  }
}

export function useVisited() {
  const [visited, setVisited] = useState<Record<string, true>>(() => readVisited());

  const isVisited = useCallback((spotId: string) => Boolean(visited[spotId]), [visited]);

  const toggleVisited = useCallback((spotId: string) => {
    setVisited((prev) => {
      const next = { ...prev };
      if (next[spotId]) delete next[spotId];
      else next[spotId] = true;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return useMemo(() => ({ visited, isVisited, toggleVisited }), [visited, isVisited, toggleVisited]);
}

