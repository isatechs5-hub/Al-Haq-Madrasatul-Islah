import { LucideIcon, icons } from 'lucide-react';

export function getIcon(name: string): LucideIcon {
  const icon = icons[name as keyof typeof icons];
  return icon || icons.Circle;
}

export { icons };
export type { LucideIcon };
