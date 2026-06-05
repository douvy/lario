export type TierId = 'como' | 'west-shore' | 'east-shore' | 'centro-lago';

export type Tier = {
  id: TierId;
  label: string;
  driveFromHotel: string;
  icon: string;
  accent: 'teal' | 'coral' | 'north' | 'ink';
  note?: string;
};

export const TIERS: Tier[] = [
  { id: 'como', label: 'Como', driveFromHotel: 'Walking distance', icon: '📍', accent: 'teal' },
  { id: 'west-shore', label: 'West Shore', driveFromHotel: '10–20 min', icon: '🚗', accent: 'teal', note: 'Cernobbio, Laglio, Argegno' },
  { id: 'east-shore', label: 'East Shore', driveFromHotel: '15–25 min', icon: '🚗', accent: 'coral', note: 'Torno, Nesso' },
  { id: 'centro-lago', label: 'Centro Lago', driveFromHotel: '30–60 min or ferry', icon: '⛴️', accent: 'north', note: 'Bellagio, Varenna, Menaggio, Tremezzo' }
];
