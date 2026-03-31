import { useState, useEffect } from 'react'
import './FloatingCTA.css'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Mobile: bottom fixed bar */}
      <div className={`floating-mobile${visible ? ' visible' : ''}`}>
        <a href="tel:02-6953-1212" className="floating-mobile-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          전화하기
        </a>
        <a href="http://pf.kakao.com/_ZAdNG" target="_blank" rel="noopener noreferrer" className="floating-mobile-btn kakao">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.56-.96 3.6-.99 3.82 0 0-.02.16.08.22.1.06.22.03.22.03.29-.04 3.38-2.22 3.92-2.6.68.1 1.39.15 2.12.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
          </svg>
          카카오톡
        </a>
      </div>

      {/* Desktop: floating kakao button */}
      <a
        href="http://pf.kakao.com/_ZAdNG"
        target="_blank"
        rel="noopener noreferrer"
        className={`floating-desktop${visible ? ' visible' : ''}`}
        aria-label="카카오톡 상담"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-black)">
          <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.56-.96 3.6-.99 3.82 0 0-.02.16.08.22.1.06.22.03.22.03.29-.04 3.38-2.22 3.92-2.6.68.1 1.39.15 2.12.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
        </svg>
        <span className="floating-desktop-text">카카오톡 상담</span>
      </a>
    </>
  )
}
