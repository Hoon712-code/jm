import { Link } from 'react-router-dom'
import useFadeIn from '../hooks/useFadeIn'
import './MainPage.css'

function HeroSection() {
  return (
    <section className="main-hero">
      <div className="main-hero-bg">
        <img
          src="https://blancdevie.com/asset/img/main/s2_bg.jpg"
          alt="JM김정민피부과 프리미엄 클리닉"
          loading="eager"
        />
        <div className="main-hero-overlay" />
      </div>
      <div className="main-hero-content">
        <p className="en-label hero-stagger hero-stagger--1" style={{ color: 'var(--color-gold)' }}>JM DERMATOLOGY CLINIC</p>
        <h1 className="main-hero-title hero-stagger hero-stagger--2">아름다움에 과학을 더하다</h1>
        <p className="main-hero-subtitle hero-stagger hero-stagger--3">피부과 전문의가 처음부터 끝까지 직접 봅니다</p>
        <div className="main-hero-buttons hero-stagger hero-stagger--4">
          <a href="http://pf.kakao.com/_ZAdNG" target="_blank" rel="noopener noreferrer" className="btn-gold">
            상담 예약하기
          </a>
          <Link to="/about" className="btn-outline-white">
            병원 둘러보기
          </Link>
        </div>
      </div>
      <div className="main-hero-scroll">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

function WhyJMSection() {
  const ref = useFadeIn({ direction: 'left' })
  return (
    <section className="section why-jm" style={{ background: 'var(--color-warm-white)' }}>
      <div className="container fade-in" ref={ref}>
        <p className="en-label">WHY JM</p>
        <h2 className="section-title">소중한 피부, 처음부터 피부과 전문의와 상의하세요</h2>
        <div className="why-jm-grid">
          <div className="why-jm-card">
            <span className="why-jm-number" style={{ fontFamily: 'var(--font-en)' }}>01</span>
            <h3 className="why-jm-card-title">대한민국 의사 중 2%</h3>
            <p className="why-jm-card-text">KAIST 출신 피부과 전문의가 처음부터 끝까지 직접 봅니다</p>
          </div>
          <div className="why-jm-card">
            <span className="why-jm-number" style={{ fontFamily: 'var(--font-en)' }}>02</span>
            <h3 className="why-jm-card-title">원장 전담 1:1 진료</h3>
            <p className="why-jm-card-text">대리 시술 없이 상담부터 시술, 경과 관찰까지 원장이 직접 합니다</p>
          </div>
          <div className="why-jm-card">
            <span className="why-jm-number" style={{ fontFamily: 'var(--font-en)' }}>03</span>
            <h3 className="why-jm-card-title">프리미엄 장비 15종</h3>
            <p className="why-jm-card-text">직접 경험하고 검증한 치료만, 써마지 FLX 마스터 공식 수료</p>
          </div>
        </div>
        <Link to="/about" className="btn-text" style={{ marginTop: '48px' }}>
          병원 소개 더 알아보기 <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

function SignatureProgramsSection() {
  const ref = useFadeIn({ direction: 'right' })

  const programs = [
    {
      img: 'https://jmskin.co.kr/_pc/img/sub/21-sec1-1.png',
      en: 'JM ALL-IN-ONE',
      title: '맞춤 복합 시술',
      desc: '원장이 직접 설계한 최적의 시술 조합',
    },
    {
      img: 'https://jmskin.co.kr/_pc/img/sub/41-sec7-1.png',
      en: 'JM BOOSTER',
      title: '엑소좀 재생 부스터',
      desc: '줄기세포 배양액 기반 피부 재생',
    },
    {
      img: 'https://jmskin.co.kr/_pc/img/sub/21-sec4-1.png',
      en: 'JM CUSTOM CARE',
      title: '1:1 맞춤 처방',
      desc: '피부과 전문의의 개인별 맞춤 관리',
    },
  ]

  return (
    <section className="section signature-programs">
      <div className="container fade-in" ref={ref}>
        <p className="en-label">SIGNATURE PROGRAMS</p>
        <h2 className="section-title">같은 장비라도 다른 결과를 만듭니다</h2>
        <div className="programs-grid">
          {programs.map((p, i) => (
            <Link to="/treatments" key={i} className="program-card">
              <div className="program-card-img">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="program-card-overlay" />
              </div>
              <div className="program-card-info">
                <span className="program-card-en">{p.en}</span>
                <h3 className="program-card-title">{p.title}</h3>
                <p className="program-card-desc">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/treatments" className="btn-text" style={{ marginTop: '48px' }}>
          시술 안내 전체 보기 <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

function ClinicInfoSection() {
  const ref = useFadeIn()
  return (
    <section className="clinic-info">
      <div className="container fade-in" ref={ref}>
        <div className="clinic-info-grid">
          <div className="clinic-info-hours">
            <h3 className="clinic-info-heading">진료시간</h3>
            <table className="hours-table">
              <tbody>
                <tr><td>월 · 화 · 목 · 금</td><td>AM 10:00 – PM 6:30</td></tr>
                <tr><td>토요일</td><td>AM 10:00 – PM 3:00 (점심시간 없음)</td></tr>
                <tr><td>점심시간</td><td>PM 1:00 – PM 2:00</td></tr>
                <tr><td>휴진</td><td>수요일 · 일요일 · 공휴일</td></tr>
              </tbody>
            </table>
          </div>
          <div className="clinic-info-contact">
            <p className="clinic-info-phone">
              <a href="tel:02-6953-1212">02-6953-1212</a>
            </p>
            <p className="clinic-info-address">서울 서초구 사임당로 158, 래미안리더스원 상가 305호</p>
          </div>
          <div className="clinic-info-cta">
            <a href="tel:02-6953-1212" className="btn-gold" style={{ width: '100%', textAlign: 'center', marginBottom: '12px' }}>
              전화 상담 02-6953-1212
            </a>
            <a href="http://pf.kakao.com/_ZAdNG" target="_blank" rel="noopener noreferrer"
              className="btn-outline-white" style={{ width: '100%', textAlign: 'center' }}>
              카카오톡 상담
            </a>
            <Link to="/contact" className="btn-text" style={{ marginTop: '24px', color: 'var(--color-gold)' }}>
              오시는 길 <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <WhyJMSection />
      <SignatureProgramsSection />
      <ClinicInfoSection />
    </>
  )
}
