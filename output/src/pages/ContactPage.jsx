import useFadeIn from '../hooks/useFadeIn'
import './ContactPage.css'

export default function ContactPage() {
  const ref = useFadeIn()

  return (
    <>
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <p className="en-label" style={{ color: 'var(--color-gold)' }}>LOCATION</p>
          <h1 className="contact-hero-title">오시는 길</h1>
        </div>
      </section>

      {/* Map + Info */}
      <section className="section contact-map-section">
        <div className="container fade-in" ref={ref}>
          <div className="contact-grid">
            <div className="contact-map">
              <iframe
                src="https://map.kakao.com/?urlX=504190&urlY=1106893&name=JM김정민피부과&map_type=TYPE_MAP&from=roughmap"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JM김정민피부과 위치"
              />
            </div>
            <div className="contact-info">
              <div className="contact-info-block">
                <h3 className="contact-label">주소</h3>
                <p>서울 서초구 사임당로 158</p>
                <p>래미안리더스원 상가 305호</p>
              </div>
              <div className="contact-info-block">
                <h3 className="contact-label">전화</h3>
                <p><a href="tel:02-6953-1212">02-6953-1212</a></p>
              </div>
              <div className="contact-info-block">
                <h3 className="contact-label">이메일</h3>
                <p>jmskin77@gmail.com</p>
              </div>
              <div className="contact-info-block">
                <h3 className="contact-label">팩스</h3>
                <p>02-6953-5566</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="section contact-hours">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>진료시간 안내</h2>
          <div className="hours-table-wrap">
            <table className="contact-hours-table">
              <tbody>
                <tr>
                  <td className="hours-day">월 · 화 · 목 · 금</td>
                  <td className="hours-time">AM 10:00 – PM 6:30</td>
                </tr>
                <tr>
                  <td className="hours-day">토요일</td>
                  <td className="hours-time">AM 10:00 – PM 3:00 (점심시간 없음)</td>
                </tr>
                <tr>
                  <td className="hours-day">점심시간</td>
                  <td className="hours-time">PM 1:00 – PM 2:00</td>
                </tr>
                <tr>
                  <td className="hours-day">휴진</td>
                  <td className="hours-time">수요일 · 일요일 · 공휴일</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ color: 'var(--color-white)' }}>진료 예약 및 상담</h2>
          <div className="contact-cta-buttons">
            <a href="tel:02-6953-1212" className="btn-gold">
              전화 상담 02-6953-1212
            </a>
            <a href="http://pf.kakao.com/_ZAdNG" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
