import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const NAV_ITEMS = [
  { path: '/', label: '홈' },
  { path: '/about', label: '병원 소개' },
  { path: '/treatments', label: '시술 안내' },
  { path: '/contact', label: '오시는 길' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <NavLink to="/" className="header-logo">
            <img
              className="logo-light"
              src="https://jmskin.co.kr/_pc/img/common/logo.png"
              alt="JM김정민피부과"
              style={{ opacity: scrolled ? 0 : 1 }}
            />
            <img
              className="logo-dark"
              src="https://jmskin.co.kr/_pc/img/common/logo-bk.png"
              alt="JM김정민피부과"
              style={{ opacity: scrolled ? 1 : 0 }}
            />
          </NavLink>

          <nav className="header-nav desktop-only">
            {NAV_ITEMS.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-cta desktop-only">
            <a href="tel:02-6953-1212" className="header-icon-btn" aria-label="전화">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </a>
            <a href="http://pf.kakao.com/_ZAdNG" target="_blank" rel="noopener noreferrer" className="header-icon-btn" aria-label="카카오톡 상담">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.56-.96 3.6-.99 3.82 0 0-.02.16.08.22.1.06.22.03.22.03.29-.04 3.38-2.22 3.92-2.6.68.1 1.39.15 2.12.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
              </svg>
            </a>
          </div>

          <button
            className="hamburger mobile-only"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            <span className={`hamburger-line${mobileOpen ? ' open' : ''}`} />
            <span className={`hamburger-line${mobileOpen ? ' open' : ''}`} />
            <span className={`hamburger-line${mobileOpen ? ' open' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <nav className="mobile-nav">
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu-cta">
          <a href="tel:02-6953-1212" className="btn-gold" style={{ width: '100%', textAlign: 'center' }}>
            전화 상담 02-6953-1212
          </a>
          <a href="http://pf.kakao.com/_ZAdNG" target="_blank" rel="noopener noreferrer"
            className="btn-outline-white" style={{ width: '100%', textAlign: 'center', marginTop: '12px', color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
            카카오톡 상담
          </a>
        </div>
      </div>
    </>
  )
}
