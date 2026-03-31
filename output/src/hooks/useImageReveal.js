import { useEffect, useRef } from 'react'

/**
 * useImageReveal — IntersectionObserver-based clip-path reveal for images
 * Applies a subtle clip-path transition from hidden to fully visible.
 * @param {Object} options
 * @param {number} options.threshold — IntersectionObserver threshold (default 0.2)
 */
export default function useImageReveal({ threshold = 0.2 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.add('img-reveal')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('img-reveal--visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
