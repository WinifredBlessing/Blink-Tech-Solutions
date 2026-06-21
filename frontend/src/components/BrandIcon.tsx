import * as Icons from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function BrandIcon({ name, className = '', size = 24 }: IconProps) {
  // Dynamically resolve the icon from the Lucide bundle, fallback to HelpCircle if not found
  const LucideIcon = (Icons as any)[name] || Icons.HelpCircle;
  return <LucideIcon className={className} size={size} />;
}
export default BrandIcon;
