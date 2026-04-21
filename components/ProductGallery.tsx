'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'

export interface GalleryImage {
  src: string
  alt: string
}

interface ProductGalleryProps {
  images: GalleryImage[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const open = (i: number) => setLightboxIndex(i)
  const close = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : 0))
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : 0))

  if (images.length === 0) return null

  const main = images[0]
  const rest = images.slice(1, 5)
  const extraCount = images.length - 5

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {/* Ana görsel — tam genişlik */}
        <button
          className="col-span-2 relative h-64 rounded-xl overflow-hidden group cursor-zoom-in"
          onClick={() => open(0)}
          aria-label={`${main.alt} - büyüt`}
        >
          <Image
            src={main.src}
            alt={main.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
          <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            Büyüt
          </div>
        </button>

        {/* Küçük görseller */}
        {rest.map((img, i) => {
          const isLast = i === 3 && extraCount > 0
          return (
            <button
              key={i}
              className="relative h-36 sm:h-44 rounded-xl overflow-hidden group cursor-zoom-in"
              onClick={() => open(i + 1)}
              aria-label={`${img.alt} - büyüt`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={`object-cover group-hover:scale-105 transition-transform duration-500 ${isLast ? 'opacity-60' : ''}`}
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              {isLast ? (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">+{extraCount + 1}</span>
                </div>
              ) : (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              )}
            </button>
          )
        })}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
