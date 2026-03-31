import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <img
            src="https://jmskin.co.kr/_pc/img/common/logo-ft.png"
            alt="JM김정민피부과"
            className="footer-logo"
          />
          <p className="footer-slogan">아름다움에 과학을 더하다</p>
          <div className="footer-sns">
            <a href="https://www.instagram.com/jmskin.clinic" target="_blank" rel="noopener noreferrer" aria-label="인스타그램">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://blog.naver.com/seochoskin" target="_blank" rel="noopener noreferrer" aria-label="네이버 블로그">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.27 3H7.73A4.73 4.73 0 003 7.73v8.54A4.73 4.73 0 007.73 21h8.54A4.73 4.73 0 0021 16.27V7.73A4.73 4.73 0 0016.27 3zm-2.6 12.67h-2.34V12L8.67 8.33h2.56l1.43 2.44 1.43-2.44h2.56L14 12v3.67h-.33z" />
              </svg>
            </a>
            <a href="http://pf.kakao.com/_ZAdNG" target="_blank" rel="noopener noreferrer" aria-label="카카오톡">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.56-.96 3.6-.99 3.82 0 0-.02.16.08.22.1.06.22.03.22.03.29-.04 3.38-2.22 3.92-2.6.68.1 1.39.15 2.12.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col footer-hours">
          <h4 className="footer-heading">진료시간</h4>
          <div className="footer-info-list">
            <p>월 · 화 · 목 · 금 10:00 – 18:30</p>
            <p>토 10:00 – 15:00</p>
            <p>휴진: 수 · 일 · 공휴일</p>
          </div>
        </div>

        <div className="footer-col footer-contact">
          <h4 className="footer-heading">연락처</h4>
          <div className="footer-info-list">
            <p>서울 서초구 사임당로 158</p>
            <p>래미안리더스원 상가 305호</p>
            <p>TEL <a href="tel:02-6953-1212">02-6953-1212</a></p>
            <p>FAX 02-6953-5566</p>
            <p>EMAIL jmskin77@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; 2026 JM김정민피부과의원. All rights reserved.</p>
          <p>사업자번호: 226-12-61709</p>
        </div>
      </div>
    </footer>
  )
}
