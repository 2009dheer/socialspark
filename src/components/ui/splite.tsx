'use client'

import { Suspense, lazy, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

// Suppress known Spline resize observer warning spam
if (typeof window !== 'undefined') {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('updating from')) return;
    originalWarn(...args);
  };
}

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></span>
        </div>
      )}
      <Suspense fallback={null}>
        <div className="w-full h-full transition-opacity duration-1000" style={{ opacity: isLoading ? 0 : 1 }}>
          <Spline
            scene={scene}
            style={{ width: '100%', height: '100%', display: 'block' }}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </Suspense>
    </div>
  )
}

