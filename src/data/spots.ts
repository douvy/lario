import type { TierId } from './tiers';

export type SpotKind = 'food' | 'activity';

export type Spot = {
  id: string;
  kind: SpotKind;
  name: string;
  tierId: TierId;
  categoryIcon: string;
  categoryLabel: string;
  teaser: string;
  driveBadge: string;
  driveDetails: string;
  address: string;
  lat: number;
  lng: number;
  hours?: string;
  notes: string;
  source?: string;
};

export const SPOTS: Spot[] = [
  {
    id: 'bliss-cafe',
    kind: 'food',
    name: 'Bliss Cafè',
    tierId: 'como',
    categoryIcon: 'coffee',
    categoryLabel: 'Espresso Bar',
    teaser: 'Best coffee in Como — pistachio croissants + lemon cake.',
    driveBadge: 'Walking',
    driveDetails: 'Walking distance',
    address: 'Via Domenico Fontana, 25, 22100 Como CO, Italy',
    lat: 45.8081,
    lng: 9.0852,
    hours: 'Opens 7:30 AM',
    notes:
      'One of the friendliest spots in Como. 4.7 stars with 789 reviews. Excellent espresso from a real machine, best crostata cake in town, and great savory snacks. The pistachio croissant and lemon cake are popular picks. Good for a quick lunch or aperitivo — try the Spritz. Working wifi and indoor seating. €1–10 per person.',
  }
];
