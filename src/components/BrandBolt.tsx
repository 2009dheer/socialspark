import React, { useId } from 'react';

interface BrandBoltProps {
  className?: string;
  glow?: boolean;
}

/**
 * Vector recreation of Social Spark's signature lightning mark.
 * Renders at 0KB network cost and razor-sharp on any DPI screen.
 */
export const BrandBolt: React.FC<BrandBoltProps> = ({ className = 'w-8 h-12', glow = false }) => {
  const gradId = useId();
  const filterId = useId();

  return (
    <svg
      viewBox="0 0 120 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Social Spark Mark"
    >
      <defs>
        <linearGradient id={gradId} x1="95" y1="8" x2="25" y2="172" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE600" />
          <stop offset="45%" stopColor="#FF7A18" />
          <stop offset="82%" stopColor="#FF2E79" />
          <stop offset="100%" stopColor="#C026D3" />
        </linearGradient>
        {glow && (
          <filter id={filterId} x="-35%" y="-25%" width="170%" height="150%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>
      <path
        d="M104 6L34 89H63L16 174L94 82H62L104 6Z"
        fill={`url(#${gradId})`}
        filter={glow ? `url(#${filterId})` : undefined}
      />
    </svg>
  );
};
