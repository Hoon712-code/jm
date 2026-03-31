import { useEffect, useRef } from 'react'

/**
 * useFadeIn — IntersectionObserver-based entrance animation
 * @param {Object} options
 * @param {number} options.threshold — IntersectionObserver threshold (default 0.15)
 * @param {string} options.direction — Animation direction: 'up' (default), 'left', 'right', 'scale'
 * @param {number} options.delay — Delay in ms before animation starts (for staggering)
 */
export default function useFadeIn({ threshold = 0.15, direction = 'up', delay = 0 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Set CSS custom properties for the animation direction and delay
    el.setAttribute('data-fade-direction', direction)
    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, direction, delay])

  return ref
}
