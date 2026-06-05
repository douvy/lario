import type { LucideIcon } from 'lucide-react';
import {
  Fish, Utensils, Truck, Beef, Cookie, CupSoda,
  Mountain, TrainFront, Leaf, Coffee, IceCreamCone,
  MapPin, Car, TreePalm, Waves, Ship, Trees, Palette
} from 'lucide-react';

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

const tierIconMap: Record<string, LucideIcon> = {
  'right-here': MapPin,
  'quick-drive': Car,
  'south-shore': Waves,
  'north-shore': TreePalm,
  'west-side': Mountain,
};

export function CategoryIcon({ name, className = '' }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  return Icon ? <Icon size={18} className={className} /> : null;
}

export function TierIcon({ tierId, className = '' }: { tierId: string; className?: string }) {
  const Icon = tierIconMap[tierId];
  return Icon ? <Icon size={16} className={className} /> : null;
}
