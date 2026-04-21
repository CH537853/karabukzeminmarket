'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'

interface LightboxProps {
  images: { src: string; alt: string }[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  const current = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium select-none">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Close */}
      <button
        className="absolute top-4 right-4 z-10 text-white bg-white/10 hover:bg-white/25 rounded-full w-11 h-11 flex items-center justify-center transition-colors"
        onClick={onClose}
        aria-label="Kapat"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className="absolute left-3 sm:left-6 z-10 text-white bg-white/10 hover:bg-white/25 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Önceki"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="relative w-full max-w-5xl mx-16 sm:mx-24 h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          className="absolute right-3 sm:right-6 z-10 text-white bg-white/10 hover:bg-white/25 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Sonraki"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Alt text */}
      {current.alt && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs select-none">
          {current.alt}
        </div>
      )}
    </div>
  )
}
