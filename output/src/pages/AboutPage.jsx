import { useState } from 'react'
import { Link } from 'react-router-dom'
import useFadeIn from '../hooks/useFadeIn'
import './AboutPage.css'

// 방송사 로고 (11-sec3)
const BROADCAST_LOGOS = Array.from({ length: 10 }, (_, i) =>
  `https://jmskin.co.kr/_pc/img/sub/11-sec3-${i + 1}.png`
)

// 원장님 방송 출연 사진 (11-sec4)
const TV_IMAGES = Array.from({ length: 8 }, (_, i) =>
  `https://jmskin.co.kr/_pc/img/sub/11-sec4-${i + 1}.png`
)

// 학술/미디어 활동 사진 (11-sec5)
const ACADEMIC_IMAGES = Array.from({ length: 9 }, (_, i) =>
  `https://jmskin.co.kr/_pc/img/sub/11-sec5-${i + 1}.png`
)

const DEVICES = [
  { name: '써마지 FLX', desc: '고주파 콜라겐 리모델링', img: 'https://jmskin.co.kr/_pc/img/sub/21-sec2-1.png' },
  { name: '티타늄', desc: '적은 통증, 드라마틱 효과', img: 'https://jmskin.co.kr/_pc/img/sub/21-sec2-2.png' },
  { name: '울쎄라 프라임', desc: '고강도 초음파 리프팅', img: 'https://jmskin.co.kr/_pc/img/sub/21-sec2-3.png' },
  { name: '오푸스', desc: '미세 플라즈마 기술', img: 'https://jmskin.co.kr/_pc/img/sub/21-sec2-4.png' },
  { name: '젠틀맥스프로', desc: '색소질환, 영구제모, 혈관질환', img: 'https://jmskin.co.kr/_pc/img/sub/21-sec2-5.png' },
  { name: '레블라이트 SI', desc: '색소 정밀 치료', img: 'https://jmskin.co.kr/_pc/img/sub/21-sec2-6.png' },
  { name: 'GV 레이저', desc: '혈관/홍조 치료', img: 'https://jmskin.co.kr/_pc/img/sub/21-sec2-7.png' },
  { name: 'M22', desc: '광노화 개선', img: 'https://jmskin.co.kr/_pc/img/sub/21-sec2-8.png' },
  { name: '리써 FX', desc: '맞춤형 프락셔널 레이저', img: 'https://jmskin.co.kr/_pc/img/sub/21-sec2-9.png' },
  { name: '에이플러스레이저', desc: '여드름 전문 치료', img: 'https://jmskin.co.kr/_pc/img/sub/21-sec2-10.png' },
  { name: '실펌엑스', desc: '마이크로니들 고주파', img: 'https://jmskin.co.kr/_pc/img/sub/21-sec2-11.png' },
  { name: '더마샤인프로', desc: '진피층 약물 주입', img: 'https://jmskin.co.kr/_pc/img/sub/21-sec2-12.png' },
  { name: 'SNJ CO2 레이저', desc: '피부양성종양 제거', img: 'https://jmskin.co.kr/_pc/img/sub/21-sec2-13.png' },
  { name: '마크뷰', desc: '피부상태 정밀 분석', img: 'https://jmskin.co.kr/_pc/img/sub/21-sec2-14.png' },
  { name: '소노스타일러', desc: '의료용 초음파', img: 'https://jmskin.co.kr/_pc/img/sub/21-sec2-15.jpg' },
]

function HeroSection() {
  return (
    <section className="about-hero">
      <div className="about-hero-bg">
        <img src="https://blancdevie.com/asset/img/main/s3_bg02.jpg" alt="JM김정민피부과 프리미엄 진료 공간" loading="eager" />
        <div className="about-hero-overlay" />
      </div>
      <div className="about-hero-content">
        <p className="en-label" style={{ color: 'var(--color-gold)' }}>ABOUT JM CLINIC</p>
        <h1 className="about-hero-title">피부과다운 피부과</h1>
        <p className="about-hero-subtitle">정직한 치료, 수준 높은 치료를 추구합니다</p>
      </div>
    </section>
  )
}

function PhilosophySection() {
  const ref = useFadeIn({ direction: 'up' })
  return (
    <section className="section philosophy">
      <div className="container fade-in" ref={ref}>
        <p className="en-label">PHILOSOPHY</p>
        <h2 className="section-title">당신의 피부는 당신만큼 소중합니다</h2>
        <div className="philosophy-text">
          <p className="body-emphasis">
            JM김정민피부과를 내원하는 환자들을<br />나와 내 가족처럼 생각합니다.
          </p>
          <p className="body-emphasis">
            그래서 직접 저의 피부에 경험해본<br />좋은 것만 도입하는 것이 큰 원칙입니다.
          </p>
          <p className="body-emphasis">
            나의 피부에 절대 무리한 시술을 하지 않으며,<br />안전한 치료와 시술로 피부를 건강하게 만드는 것이 목표입니다.
          </p>
          <p className="body-emphasis">
            피부는 머리부터 발끝까지<br />가장 큰 면적을 차지하는 존재이자,<br />가장 먼저 눈에 띄는 부위입니다.
          </p>
          <p className="body-emphasis">
            건강하고 아름다운 피부는<br />시각적인 의미를 넘어서<br />우리의 삶을 건강하고 아름답게<br />만들 수 있는 힘을 가지고 있습니다.
          </p>
          <p className="philosophy-signature">— 김정민 원장</p>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const ref = useFadeIn({ direction: 'left' })
  const values = [
    { num: '01', title: '내 가족에게 권하고 싶은 치료', desc: '안전한 치료만을 시행하는 병원입니다. 환자를 가족처럼 생각하며, 필요 없는 시술은 절대 권하지 않습니다.' },
    { num: '02', title: '프리미엄 장비와 좋은 재료', desc: '써마지 FLX, 울쎄라 프라임 등 검증된 프리미엄 장비와 정품 재료만을 사용합니다. 장비와 재료에 타협하지 않습니다.' },
    { num: '03', title: '직접 경험하고 검증한 치료만 도입', desc: '원장이 직접 자신의 피부에 경험해본 후, 효능과 안전성이 확인된 치료만 도입합니다. 유행을 좇지 않고, 과학적으로 검증된 것만 합니다.' },
    { num: '04', title: '끊임없는 연구와 학술 활동', desc: 'SCI급 국제학술지 게재, 국내학술지 20편 이상 게재. 대한피부과의사회를 비롯한 11개 학회 정회원으로 활동하며 최신 치료법을 연구합니다.' },
  ]

  return (
    <section className="section values">
      <div className="container fade-in" ref={ref}>
        <p className="en-label">OUR VALUES</p>
        <h2 className="section-title">JM김정민피부과가 지키는 약속</h2>
        <div className="values-list">
          {values.map(v => (
            <div key={v.num} className="value-item">
              <span className="value-number">{v.num}</span>
              <div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DoctorSection() {
  const ref = useFadeIn({ direction: 'right' })
  return (
    <section className="section doctor">
      <div className="container fade-in" ref={ref}>
        <div className="doctor-grid">
          <div className="doctor-image">
            <img src="https://jmskin.co.kr/_pc/img/sub/11-sec2-1.png" alt="김정민 원장" loading="lazy" />
          </div>
          <div className="doctor-info">
            <p className="en-label">DOCTOR PROFILE</p>
            <h2 className="section-title">피부과 전문의 김정민</h2>
            <p className="doctor-subtitle">여의사 피부과 전문의 · KAIST 생명과학과</p>

            <div className="doctor-profile-block">
              <div className="profile-row">
                <span className="profile-label">학력</span>
                <span>한국과학기술원(KAIST) 생명과학과 졸업</span>
              </div>
              <div className="profile-row">
                <span className="profile-label">자격</span>
                <span>피부과 전문의 (대한민국 의사 중 2%)</span>
              </div>
              <div className="profile-row">
                <span className="profile-label">주요 경력</span>
                <span>전 반포 퓨린피부과 원장<br />써마지 FLX 마스터 공식 수료</span>
              </div>
              <div className="profile-row">
                <span className="profile-label">학술 활동</span>
                <span>피부과 SCI/SCI급 국제저명학술지 게재<br />피부과 국내학술지 20편 이상 게재</span>
              </div>
            </div>

            <div className="doctor-societies">
              <span className="profile-label" style={{ display: 'block', marginBottom: '8px', whiteSpace: 'nowrap' }}>정회원 학회</span>
              <p className="caption-text">
                대한피부과의사회 · 대한피부레이저학회 · 대한피부항노화연구회 · 대한미용피부외과학회 · 대한여드름학회 · 대한아토피피부염학회 · 대한건선학회 · 대한백반증학회 · 대한광의학회 · 대한접촉피부염 및 알레르기학회 · 대한모발학회
              </p>
            </div>

            <blockquote className="doctor-quote">
              "피부질환 치료부터 미용시술까지, 피부에 대해 잘 아는 여의사 피부과 전문의가 여러분의 피부를 건강하게 만들어드리도록 노력합니다. 세심한 서비스와 시술로 만족스러운 결과를 보여드리겠습니다."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

function DevicesSection() {
  const ref = useFadeIn({ direction: 'scale' })

  return (
    <section className="section facilities">
      <div className="container fade-in" ref={ref}>
        <p className="en-label" style={{ color: 'var(--color-gold)' }}>DEVICES</p>
        <h2 className="section-title" style={{ color: 'var(--color-white)' }}>실력만큼 중요한 최고의 장비</h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '48px' }}>
          숙련된 노하우와 다양한 최신 장비로 개인맞춤형 치료를 통해 보다 효과적인 결과를 보여드립니다
        </p>

        <div className="devices-grid">
          {DEVICES.map((d, i) => (
            <div key={i} className="device-card">
              <div className="device-img-wrap">
                <img src={d.img} alt={d.name} loading="lazy" />
              </div>
              <div className="device-info">
                <h4 className="device-name">{d.name}</h4>
                <p className="device-desc">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/treatments" className="btn-text" style={{ marginTop: '48px', color: 'var(--color-gold)' }}>
          시술 안내에서 자세히 보기 <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

function MediaSection() {
  const ref = useFadeIn({ direction: 'up' })
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="section media">
      <div className="container fade-in" ref={ref}>
        <p className="en-label">MEDIA &amp; PRESS</p>
        <h2 className="section-title">미디어 출연 및 학술 활동</h2>

        {/* 방송사 로고 — 5열 그리드, 짤리지 않게 */}
        <div className="broadcast-grid">
          {BROADCAST_LOGOS.map((src, i) => (
            <div key={i} className="broadcast-grid-item">
              <img src={src} alt={`방송사 ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {/* 원장님 방송 출연 사진 */}
        <div className="media-grid">
          {TV_IMAGES.map((src, i) => (
            <div key={`tv-${i}`} className="media-item" onClick={() => setLightbox(src)}>
              <img src={src} alt={`방송 출연 ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {/* 학술/미디어 활동 사진 */}
        <div className="media-grid" style={{ marginTop: '16px' }}>
          {ACADEMIC_IMAGES.map((src, i) => (
            <div key={`ac-${i}`} className="media-item" onClick={() => setLightbox(src)}>
              <img src={src} alt={`학술 활동 ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="확대 보기" />
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="닫기">
            &times;
          </button>
        </div>
      )}
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <ValuesSection />
      <DoctorSection />
      <DevicesSection />
      <MediaSection />
    </>
  )
}
