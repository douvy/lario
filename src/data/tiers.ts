export type TierId = 'right-here' | 'quick-drive' | 'south-shore' | 'north-shore' | 'west-side';

export type Tier = {
  id: TierId;
  label: string;
  driveFromHotel: string;
  icon: string;
  accent: 'teal' | 'coral' | 'north' | 'ink';
  note?: string;
};

export const TIERS: Tier[] = [
  { id: 'right-here', label: 'Lihue', driveFromHotel: '0–10 min', icon: '📍', accent: 'teal' },
  {
    id: 'quick-drive',
    label: 'Quick Drive',
    driveFromHotel: '10–25 min',
    icon: '🚗',
    accent: 'teal',
    note: 'Traffic through Kapaʻa can add 15–30 min at rush hour.'
  },
  { id: 'south-shore', label: 'South Shore', driveFromHotel: '20–30 min (Poipu/Koloa)', icon: '🏖️', accent: 'coral' },
  { id: 'north-shore', label: 'North Shore', driveFromHotel: '30–50 min (Kilauea → Hanalei)', icon: '🌿', accent: 'north' },
  { id: 'west-side', label: 'West Side', driveFromHotel: '45–60 min (Waimea)', icon: '🏜️', accent: 'ink' }
];

