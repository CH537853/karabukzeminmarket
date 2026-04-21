'use client'

import { useEffect, useRef, useState } from 'react'

type Animation = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in'

interface Props {
  children: React.ReactNode
  className?: string
  animation?: Animation
  delay?: number
  threshold?: number
}

const hidden: Record<Animation, React.CSSProperties> = {
  'fade-up':    { opacity: 0, transform: 'translateY(48px)' },
  'fade-in':    { opacity: 0, transform: 'none' },
  'slide-left': { opacity: 0, transform: 'translateX(-48px)' },
  'slide-right':{ opacity: 0, transform: 'translateX(48px)' },
  'zoom-in':    { opacity: 0, transform: 'scale(0.92)' },
}

const visible: React.CSSProperties = { opacity: 1, transform: 'none' }

export default function AnimateOnScroll({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(show ? visible : hidden[animation]),
        transition: `opacity 0.65s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
