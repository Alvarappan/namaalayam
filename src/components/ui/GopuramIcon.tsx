interface Props {
  size?: number;
  className?: string;
}

export default function GopuramIcon({ size = 24, className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Kalasam (pinnacle ornament) */}
      <circle cx="12" cy="1.5" r="0.9" />
      <rect x="11.4" y="2.2" width="1.2" height="1" />
      {/* Pointed shikara */}
      <path d="M12 3.2 L15.2 7 L8.8 7 Z" />
      {/* Tier 4 (top) */}
      <rect x="8" y="7" width="8" height="2" rx="0.3" />
      {/* Tier 3 */}
      <rect x="6.5" y="9" width="11" height="3" rx="0.3" />
      {/* Tier 2 */}
      <rect x="5" y="12" width="14" height="3.5" rx="0.3" />
      {/* Tier 1 (largest) */}
      <rect x="3" y="15.5" width="18" height="4" rx="0.3" />
      {/* Plinth */}
      <rect x="1.5" y="19.5" width="21" height="2.5" rx="0.3" />
    </svg>
  );
}
