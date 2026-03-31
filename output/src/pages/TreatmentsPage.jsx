import { useState, useRef, useEffect } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './TreatmentsPage.css'

/* ========== Data ========== */
const TABS = [
  { id: 'signature', label: '시그니처 프로그램' },
  { id: 'lifting', label: '리프팅/탄력' },
  { id: 'injectable', label: '주사 시술' },
  { id: 'pigment', label: '색소/피부톤' },
  { id: 'acne', label: '여드름/흉터' },
  { id: 'skincare', label: '스킨케어' },
  { id: 'disease', label: '피부질환' },
]

const IMG = (path) => `https://jmskin.co.kr/_pc/img/sub/${path}`

const SIGNATURE = [
  {
    img: IMG('21-sec1-1.png'), en: 'JM ALL-IN-ONE', title: 'JM 올인원 — 맞춤 복합 시술',
    sub: '원장이 환자의 피부를 분석 후, 최적의 시술 조합을 직접 설계한 맞춤 프로토콜',
    desc: '써마지로 진피층 콜라겐을 자극하고, 엑소좀 부스터로 재생을 가속하며, 레이저 토닝으로 피부결을 정돈합니다. 하나의 시술이 아닌, 당신의 피부에 맞춘 복합 치료입니다.',
    bullets: ['여러 피부 고민을 한 번에 개선하고 싶은 분', '개인 맞춤 시술을 원하는 분', '전문의가 직접 설계한 프로토콜을 경험하고 싶은 분'],
  },
  {
    img: IMG('41-sec7-1.png'), en: 'JM BOOSTER', title: 'JM 부스터 — 엑소좀 재생 프로그램',
    sub: 'ASCE 엑소좀·줄기세포 배양액 기반 커스텀 부스터',
    desc: '줄기세포 배양액의 핵심 유효성분인 엑소좀을 활용하여 피부 재생력을 근본적으로 끌어올립니다. 손상된 피부를 개선하고 염증을 억제하는 차세대 재생 프로그램입니다.',
    bullets: ['피부 재생력이 떨어진다고 느끼시는 분', '시술 후 빠른 회복을 원하시는 분', '민감성·홍조 피부로 고민이신 분'],
  },
  {
    img: IMG('51-5.png'), en: 'JM CUSTOM CARE', title: 'JM 커스텀 케어 — 1:1 맞춤 처방',
    sub: '피부과 전문의의 개인별 피부 상태 맞춤 관리',
    desc: '획일화된 관리 대신, 피부과 전문의가 개인별 피부 상태를 분석하여 맞춤 처방합니다. 피부 타입, 고민, 생활 환경까지 고려한 나만의 관리를 받으실 수 있습니다.',
    bullets: [],
  },
  {
    img: IMG('31-sec4-2.png'), en: 'JM WELL-AGING', title: 'JM 웰에이징 — 맞춤 리프팅',
    sub: '개인별 얼굴형, 피부 상태, 연령대, 부위 특성을 파악하여 자연스럽고 아름답게',
    desc: '피부를 잘 아는 피부과 전문의가 20대, 30대, 40대, 50대 각 연령대의 얼굴 라인과 피부 특성을 파악하여 시술합니다. 페이스라인에 따른 1:1 맞춤 진료로, 부위별 피부 구조와 처짐 정도에 맞는 안전하고 자연스러운 리프팅을 합니다.',
    bullets: ['주름 — 부위별 주름 개선', '처진 볼살과 턱살 — 얼굴 라인 개선', '탄력 — 피부 탄력 개선', '동안 — 젊음을 되찾고 싶은 분'],
  },
  {
    img: IMG('21-sec4-1.png'), en: 'JM FOCUS-BRIGHTENING', title: 'JM 포커스 브라이트닝 — 3단계 색소 치료',
    sub: '일반적인 레이저 토닝이 아닙니다',
    desc: '',
    steps: [
      { label: 'A) 전문의 토닝', text: '단계별로 접근하여, 잡티의 깊이에 맞춰 치료합니다. 정확한 파장과 강도 조절로 우수한 효과를 보입니다.' },
      { label: 'B) 섬세한 토닝', text: '크기에 따른 사이즈 조절로 치료하여 부작용이 거의 없습니다. 정밀한 레이저 빔 조절이 가능한 레블라이트 SI를 활용합니다.' },
      { label: 'C) 물광토닝', text: '피부 탄력과 모공 축소 효과가 있어, 톤 개선과 함께 물광 효과를 얻을 수 있는 시술입니다.' },
    ],
    bullets: [],
  },
  {
    img: IMG('21-sec5-1.png'), en: 'JM ACNE TOTAL CARE', title: 'JM 여드름 토탈 케어 — 여드름 종합 관리',
    sub: '여드름, 조기에 적극적으로 치료하면 흉터를 최소화할 수 있습니다',
    desc: '',
    steps: [
      { label: 'A) 근본적인 치료', text: '핀홀레이저를 이용하여 보다 근본적으로 여드름을 치료합니다. 피지선에 직접 작용하여 재발을 억제합니다.' },
      { label: 'B) 여드름 자국 시술', text: '붉은 자국과 갈색의 색소를 함께 지울 수 있도록 복합 레이저를 활용합니다.' },
      { label: 'C) 재발 방지 치료', text: '여드름의 반복을 예방하기 위해 골드PTT 치료가 병행됩니다. 장기적인 관점에서 피부를 관리합니다.' },
    ],
    bullets: [],
  },
  {
    img: IMG('21-sec6-1.png'), en: 'JM WEDDING CARE', title: 'JM 웨딩 케어 — 웨딩 프로그램',
    sub: '세상에서 한 번뿐인 그날, 가장 빛나는 결혼식의 주인공이 되세요',
    desc: '결혼식을 앞둔 특별한 시기에 맞춰, 피부과 전문의가 최적의 시술 스케줄을 설계합니다. 자연스럽고 건강한 피부로 가장 아름다운 날을 맞이하세요.',
    bullets: ['원데이 리프팅 및 탄력 치료', '기미/잡티/점 색소 레이저', '아름다운 피부결과 표정 개선 주사'],
  },
]

const LIFTING = [
  { img: IMG('21-sec2-1.png'), en: 'THERMAGE FLX', title: '써마지 FLX', oneliner: '고주파 콜라겐 리모델링', desc: '고주파 전류를 이용하여 진피층에 열을 전달하고, 콜라겐 리모델링을 유도하는 비침습적 리프팅 시술입니다. 표피는 냉각하면서 진피에 열을 발생시켜, 안전하면서도 효과적인 타이트닝을 실현합니다.', bullets: ['속부터 겉까지 탄력 있는 피부를 원하시는 분', '빠르고 강력한 시술 효과와 높은 지속력이 필요하신 분', '피부가 얇아 자극되는 리프팅 시술은 싫으신 분', '안전성이 입증된 정품팁으로 시술을 원하시는 분'], note: '써마지 FLX 마스터 공식 수료 원장이 직접 시술합니다.' },
  { img: IMG('21-sec2-3.png'), en: 'ULTHERAPY PRIME', title: '울쎄라 프라임', oneliner: '고강도 초음파 리프팅', desc: '고강도 집속 초음파(HIFU) 리프팅 레이저로, 향상된 초음파 해상도와 더 깊어진 집속력으로 피부층을 더 정밀하게 관찰하며 시술할 수 있습니다. DeepSEE 기술로 시술 부위를 실시간으로 확인하면서 정확한 깊이에 에너지를 전달합니다.', bullets: ['나이 들며 처지는 턱선이 고민이신 분', '주름, 피부 탄력의 전반적 개선을 원하시는 분', '눈가 탄력이 걱정이신 분', '이마 처짐과 주름이 신경 쓰이시는 분'] },
  { img: IMG('21-sec2-2.png'), en: 'TITANIUM', title: '티타늄', oneliner: '적은 통증, 드라마틱 효과', desc: '기존 리프팅 장비와 다르게 적은 통증으로 드라마틱한 효과를 얻을 수 있으며, 시술 속도가 빠르다는 장점이 있습니다. 리프팅과 타이트닝뿐 아니라 모공 개선, 피부톤 및 색소 개선까지 3가지 이상의 효과를 동시에 기대할 수 있는 올인원 레이저입니다.', bullets: ['얼굴 처짐, 심술보, 팔자주름이 고민이신 분', '통증 때문에 리프팅을 주저해 오셨던 분', '다운타임 없이 바로 일상으로 복귀해야 하시는 분', '즉각적인 리프팅 효과를 기대하시는 분'] },
  { img: IMG('21-sec2-4.png'), en: 'OPUS', title: '오푸스', oneliner: '미세 플라즈마 기술', desc: '미세 플라즈마 기술을 활용해 피부 표면과 깊은 층을 동시에 개선하는 하이엔드 고주파 시술입니다. 레이저와 고주파의 장점을 결합하여, 탄력 개선과 피부 재생을 동시에 실현합니다.', bullets: ['피부 탄력과 모공 케어를 동시에 원하시는 분', '염증성 여드름을 완화하고 싶으신 분', '여드름 흉터 개선이 필요하신 분'] },
]

const INJECTABLES = [
  { img: IMG('41-sec2-1.png'), en: 'SCULPTRA', title: '스컬트라', oneliner: 'PLLA 콜라겐 재생', desc: '노화된 피부에 부족한 콜라겐의 생성을 촉진하는 PLLA(폴리-L-유산) 성분의 주사 시술입니다. 평균 3회 시술로 25개월까지 효과가 유지되며, FDA 승인을 받은 안전한 제품입니다.', bullets: ['얼굴 전체적으로 자연스러운 주름 개선을 원하시는 분', '지방이식 후유증이 우려되시는 분', '피부 탄력 및 힘이 부족하다고 느끼시는 분', '눈에 띄지 않는 자연스러운 윤곽 교정을 원하시는 분', '고령으로 수술이 어려우신 분'] },
  { img: IMG('41-sec3-1.png'), en: 'RADIESSE', title: '레디어스', oneliner: 'ECM 개선, 자연스러운 스킨 퀄리티', desc: '세포 외 기질(ECM)을 개선하여 자연스러운 피부 퀄리티를 향상시킵니다. 무너진 피부 구조를 정상화하고, 잔주름 및 피부결을 개선하며, 탄력과 볼륨을 회복시킵니다.', bullets: ['안전성이 우려되시는 분 (FDA 승인 제품)', '자연스러운 스킨 퀄리티 개선을 원하시는 분', '옆 볼 꺼짐이 고민이신 분', '탄력 상실 및 처짐이 걱정이신 분'] },
  { img: IMG('41-sec4-1.png'), en: 'BOTOX', title: '보톡스', oneliner: '주름 예방 및 표정 개선', desc: '주름이 만들어지는 것을 예방하며, 근육 움직임의 평형을 유지하면서 자연스러운 표정을 만듭니다. FDA 승인 제품만을 사용합니다.', bullets: ['제오민 — 독일 멀츠사, 복합단백질 없는 순수 톡신. FDA/EMA/MFDS 삼중 승인.', '나보타 — 70여 개국 수출. FDA 및 KFDA 인증.'], bulletLabel: '사용 제품:', subImages: [{ src: IMG('41-sec4-2.png'), label: '제오민' }, { src: IMG('41-sec4-3.png'), label: '나보타' }] },
  { img: IMG('41-sec5-1.png'), en: 'JUVELOOK', title: '콜라겐부스터 쥬베룩', oneliner: 'PLA + 히알루론산 콜라겐 생성', desc: '고분자 PLA와 히알루론산의 조합으로 자연스러우면서 안전한 콜라겐 생성을 촉진합니다. 피부 속부터 탄력을 채워주는 차세대 콜라겐 부스터입니다.', bullets: ['잔주름, 속탄력 저하가 고민이신 분', '먹는 콜라겐이나 홈케어 기기를 고려 중이신 분', '피부 탄력이 전반적으로 떨어졌다고 느끼시는 분'] },
  { img: IMG('41-sec6-1.png'), en: 'REJURAN HB PLUS', title: '프리미엄 리쥬란', oneliner: '피부 재생력 강화', desc: '손상 피부 개선뿐만 아니라 피부의 재생력 자체를 강화하는 FDA 승인 스킨부스터입니다. 얇아지고 치밀도가 저하된 피부에 특히 효과적입니다.', bullets: ['피부가 전반적으로 얇아지고 힘이 없다고 느끼시는 분', '피부 재생력을 근본적으로 끌어올리고 싶으신 분', '자연스러운 피부 개선을 원하시는 분'], subImages: [{ src: IMG('41-sec6-2.png'), label: '리쥬란 HB' }, { src: IMG('41-sec6-3.png'), label: '리쥬란 아이' }, { src: IMG('41-sec6-4.png'), label: '리쥬란 스킨부스터' }] },
  { img: IMG('41-sec7-1.png'), en: 'EXOSOME ASCE', title: '엑소좀 ASCE', oneliner: '줄기세포 배양액 핵심 성분', desc: '줄기세포 배양액의 0.1% 핵심 유효성분만을 추출한 엑소좀을 활용합니다. 손상된 피부를 개선하고 염증을 억제하는 효과가 있으며, 다양한 피부 고민에 폭넓게 적용됩니다.', bullets: ['홍조, 민감성, 여드름 피부로 고민이신 분', '리쥬란의 통증이 부담되시는 분', '모공, 흉터 피부 개선을 원하시는 분'] },
  { img: IMG('41-sec8-1.png'), en: 'NCTF BOOST 135H', title: '필로르가 스킨부스터', oneliner: '53가지 복합성분', desc: '53가지 복합성분과 히알루론산으로 섬유아세포의 기능을 향상시킵니다. 아미노산 23가지, 미네랄 6가지, 비타민 12가지, 핵산 5가지, 코엔자임 6가지가 피부에 영양을 공급합니다.', bullets: ['피부에 종합적인 영양 공급이 필요하신 분', '건조하고 생기 없는 피부를 개선하고 싶으신 분', '스킨부스터 시술을 처음 받으시는 분'] },
]

const PIGMENT = [
  { img: IMG('21-sec2-5.png'), en: 'GENTLEMAX PRO', title: '젠틀맥스프로', oneliner: '색소질환, 영구제모, 혈관질환', desc: '미국 칸델라사의 명품 롱펄스레이저로, 755nm 알렉산드라이트레이저와 1064nm 엔디야그 레이저를 동시에 구현합니다. 색소질환, 혈관질환, 프리미엄 제모까지 폭넓게 활용됩니다.', bullets: ['프리미엄 제모 (겨드랑이, 팔, 다리, 비키니 등)', '피부톤 개선 (잡티, 색소침착)', '혈관 질환 (모세혈관 확장, 안면홍조)'], bulletLabel: '적용 분야:' },
  { img: IMG('21-sec2-8.png'), en: 'M22 IPL', title: 'M22', oneliner: '광노화 개선', desc: '다양한 파장의 빛을 조사하는 시술 모드를 통해, 표피층의 색소질환과 혈관질환에 선택적으로 빛을 흡수시켜 치료합니다.', bullets: ['브라이트닝 (전체적인 피부톤 개선)', '홍조, 혈관 확장 치료', '탄력, 주름 개선'], bulletLabel: '적용 분야:' },
  { img: IMG('21-sec2-6.png'), en: 'REVLITE SI', title: '레블라이트 SI', oneliner: '색소 정밀 치료', desc: '레이저 빔의 크기를 0.1mm 단위로 조절하여, 색소 병변에 정교하게 맞추어 치료합니다. 멜라닌 색소를 선택적으로 파괴하고 콜라겐 리모델링을 유도합니다.', bullets: ['색소 개선 (기미, 흑자, 주근깨, 색소침착)', '흉터 및 모공 치료', '피부결 개선'], bulletLabel: '적용 분야:' },
  { img: IMG('21-sec2-7.png'), en: 'GV LASER', title: 'GV 레이저', oneliner: '혈관/홍조 전문 치료', desc: 'Long-pulsed 532nm KTP와 1064nm ND:YAG, GENESIS 모드가 탑재된 레이저입니다. 병변의 깊이에 따라 맞춤 치료가 가능하며, 부작용을 최소화합니다.', bullets: ['안면홍조, 여드름 홍반, 붉은 피부 치료', '잡티 제거', '피부 개선 (노화 피부, 예민한 피부)'], bulletLabel: '적용 분야:' },
]

const ACNE_SCAR = [
  { img: IMG('21-sec2-9.png'), en: 'RESUR FX', title: '리써 FX', oneliner: '맞춤형 프락셔널 레이저', desc: '약 500개 이상의 프로그램이 가능한 맞춤형 프락셔널 레이저입니다. 비박피형 시술로 일상생활의 불편감을 최소화하면서, 여드름 흉터와 수술 흉터, 피부 재생에 효과적입니다.', bullets: ['여드름 흉터, 수술 흉터', '피부 재생', '리프팅, 주름 개선'], bulletLabel: '적용 분야:' },
  { img: IMG('21-sec2-10.png'), en: 'A+ LASER', title: '에이플러스레이저', oneliner: '여드름 전문 치료', desc: '여드름에 효과적인 1450nm 파장을 사용하는 16W 고출력 다이오드레이저입니다. 피지선을 위축시켜 여드름을 진정하고 예방하는 효과가 있습니다.', bullets: ['통증 없는 여드름 치료', '모공 개선', '탄력 증가', '유수분 밸런스 조절'], bulletLabel: '적용 분야:' },
  { img: IMG('21-sec2-11.png'), en: 'SYLFIRMX', title: '실펌엑스', oneliner: '마이크로니들 고주파', desc: '마이크로니들을 이용해 피부 속에 직접 고주파를 전달하는 장비입니다. 부위별로 니들 깊이를 조절할 수 있어, 표피 손상을 최소화하면서 정밀한 치료가 가능합니다.', bullets: ['모공/여드름', '흉터', '혈관', '난치성 색소'], bulletLabel: '적용 분야:' },
  { img: IMG('21-sec2-13.png'), en: 'SNJ CO2 LASER', title: 'SNJ CO2 레이저', oneliner: '피부양성종양 제거', desc: '10600nm 파장을 이용하는 울트라펄스 탄산가스레이저입니다. 주변 조직의 손상을 최소화하면서 정밀한 제거가 가능합니다.', bullets: ['피부양성종양', '비립종', '사마귀', '피지선증식증'], bulletLabel: '적용 분야:' },
]

const SKINCARE_BASIC = [
  { img: IMG('31-sec4-1.png'), en: 'HYDRATION & CALMING', title: '수분진정관리', desc: '손상된 피부장벽의 회복을 도와주는 히알루론산을 비롯한 특수 물질을 침투시켜, 손상받은 피부를 정상화하고 재생을 촉진합니다.', bullets: ['촉촉한 피부', '속부터 건강한 피부', '매끈한 피부결', '속당김 해결'] },
  { img: IMG('31-sec4-3.png'), en: 'BRIGHTENING & RADIANCE', title: '미백·광채관리', desc: '특수 물질을 이온화시켜 전류나 초음파로 피부 깊은 곳까지 침투시켜, 멜라닌 색소의 형성을 억제하고 콜라겐 형성을 촉진합니다.', bullets: ['피부톤 개선', '기미, 색소 완화', '주름, 탄력 개선', '염증 후 자국 개선'] },
  { img: IMG('31-sec4-2.png'), en: 'FIRMING & LIFTING', title: '탄력·리프팅관리', desc: '진피 내 환경을 활성화시켜서 혈액순환과 신진대사를 촉진합니다. 피부 깊은 곳부터 탄력을 회복시킵니다.', bullets: ['리프팅, 탄력, 모공 개선', '피부결 및 피부톤 개선', '잔주름 개선', '시술 후 피부 재생 촉진'] },
  { img: IMG('31-sec4-4.png'), en: 'ACNE & PORE CARE', title: '여드름·피지·모공관리', desc: '피지 관리, 여드름 압출과 함께 피부 표면에 모공을 막는 각질을 정리해주고, 모공을 열어주어 여드름 염증의 회복을 유도합니다. 얼굴뿐 아니라 등, 가슴의 여드름도 관리합니다.', bullets: ['여드름 염증 완화', '여드름 예방', '여드름 자국 및 색소침착 개선', '모공 및 피부결 개선'] },
]

const SKINCARE_BRANDS = [
  { img: IMG('51-1.png'), name: '스킨수티컬즈', en: 'SKIN CEUTICALS', desc: '로레알의 메디컬 스킨케어 브랜드. 과학적으로 입증된 고효능 제품으로, 피토쉴드·CE항산화·디스컬러레이션 케어를 제공합니다.' },
  { img: IMG('51-2.png'), name: '더미오케어플러스', en: 'DERMIOCARE PLUS', desc: '독일 바이오간츠사 제품. 자연에서 나오는 음이온보다 5,000배 이상 많은 음이온을 배출하여 항노화 작용을 합니다.' },
  { img: IMG('51-3.png'), name: '코레지셀핏', en: 'CORRAGE CELLFIT', desc: '4~64MHz까지 16개의 멀티파장 공명에너지로 피부 세포를 자극하고 재생을 촉진합니다.' },
  { img: IMG('51-4.png'), name: '벨라소닉', en: 'BELLASONIC', desc: '3.3MHz/10MHz와 40kHz 저주파를 결합한 물광초음파 장비로, 약물의 피부 침투를 극대화합니다.' },
  { img: IMG('51-5.png'), name: '더마비쥬얼스', en: 'DERMAVIDUALS', desc: '1:1 개인별 문제점에 착안하여 필요한 관리를 세분화하는 맞춤형 스킨케어입니다.' },
  { img: IMG('51-6.png'), name: '이온자임', en: 'IONZYME', desc: '고농도의 비타민과 히알루론산을 전기이온영동법으로 피부 깊숙이 침투시키는 시스템입니다.' },
  { img: IMG('51-7.png'), name: '용카', en: 'YONKA', desc: '1954년부터 생산된 프랑스 명품 천연 아로마 브랜드. 자연 성분 기반의 프리미엄 관리입니다.' },
]

const DISEASES = [
  { img: IMG('61-sec2-1.png'), en: 'CORN · VERRUCA', title: '티눈 · 사마귀', desc: '사마귀는 인유두종바이러스(HPV) 감염으로 발생하는 질환입니다. 자가 전염 및 타인에게 전염될 수 있어 반드시 치료가 필요합니다. 티눈은 물리적 자극이나 마찰이 원인이 되어 피부 각질층이 두꺼워지면서 통증을 유발합니다. 냉동요법, 주사요법, 약물요법, 레이저 치료 등 병변의 종류와 위치를 고려하여 최적의 치료법을 선택합니다.' },
  { img: IMG('61-sec3-1.png'), en: 'BURN · SKIN DEFECT', title: '화상 · 피부 찰과상', desc: '불, 뜨거운 물, 화학물질, 아스팔트 쓸림, 햇빛 노출 등으로 인한 피부 손상입니다. 화상 드레싱, 약물 치료, LED 재생레이저의 단계별 치료를 시행합니다.' },
  { img: IMG('61-sec4-1.png'), en: 'HERPES ZOSTER', title: '대상포진', desc: '수두바이러스 감염 후, 면역력이 저하될 때 잠복해 있던 바이러스가 신경절을 따라 피부 발진과 수포를 유발하는 바이러스 질환입니다. 약물 치료, 드레싱, 신경차단술, LED 재생레이저의 단계별 치료를 시행합니다.' },
  { img: IMG('61-sec5-1.png'), en: 'TINEA', title: '무좀', desc: '피부사상균이 각질층이나 손발톱에 감염되는 표재성 감염입니다. 정확한 진단(KOH test, 우드등 검사)이 필수이며, 자가 진단에 의한 무단 약물 복용은 치료 기간을 연장하고 병변을 변형시킬 수 있습니다.' },
  { img: IMG('61-sec6-1.png'), en: 'ATOPIC · SEBORRHEIC DERMATITIS', title: '아토피 피부염 · 지루성 피부염', desc: '아토피 피부염은 알레르기 민감성으로 인한 만성 질환이며, 지루성 피부염은 유전, 피지선 이상 등의 요인으로 발생합니다. 적절한 보습제와 클렌저 사용, 초음파 수분관리, 피부 재생관리를 통한 지속적인 관리가 필요합니다.' },
  { img: IMG('61-sec7-1.png'), en: 'HAIR LOSS CLINIC', title: 'JM 탈모·모발치료 클리닉', desc: '원형탈모, 남성탈모, 여성탈모, M자탈모, 여성헤어라인 등을 치료합니다. "겉보다 속을 치료하는 것이 중요합니다." 16년 경력의 피부과 전문의가 모낭에 직접 약물을 주입하여 모발의 숱과 굵기 회복을 촉진합니다.' },
]

const EXTRA_DEVICES = [
  { img: IMG('21-sec2-12.png'), en: 'DERMA SHINE PRO', title: '더마샤인프로', desc: '음압을 이용하여 피부 속 진피층에 약물을 고르게 주입하기 위해 사용하는 장비입니다. 물광주사, 스킨부스터, 콜라겐주사에 활용됩니다.' },
  { img: IMG('21-sec2-14.png'), en: 'MARKVIEW', title: '마크뷰', desc: '1800만 화소의 카메라를 통해 색소, 여드름, 홍조, 주름 등 고객의 피부 상태를 정확하게 분석합니다. 모든 시술 전 피부 분석에 활용하여 1:1 맞춤 시술 계획을 수립합니다.' },
  { img: IMG('21-sec2-15.jpg'), en: 'SONO STYLER', title: '소노스타일러', desc: '3MHz~1MHz가 사용되는 의료용 초음파 장비입니다. 피부장벽 손상, 시술로 건조해진 피부, 리프팅 시술 전후, 상처 재생 및 부종, 피부 탄력 관리에 적용됩니다.' },
]

const CAUTION_ITEMS = [
  '시술 후 과음, 사우나, 열탕목욕, 격한 운동은 피해주시는 것이 좋습니다.',
  '미세한 붉은 기, 화끈거리는 느낌이 있을 수 있으나 곧 완화됩니다.',
  '간혹 시술 후 딱지가 생길 수 있으나 자연스럽게 탈락되오니 손으로 떼지 않도록 주의해주세요.',
  '시술 당일 화장은 바로 가능하지만, 레티놀·화이트닝 등 기능성 화장품의 당일 사용은 주의가 필요합니다.',
  '기타 불편한 사항이 있을 경우 병원으로 연락 주세요. (02-6953-1212)',
]

/* ========== Item display components ========== */

/* Card layout for signature programs */
function SignatureCard({ item, index }) {
  const isReversed = index % 2 === 1
  return (
    <div className={`sig-card ${isReversed ? 'sig-card--reversed' : ''}`}>
      <div className="sig-card-img"><img src={item.img} alt={item.title} loading="lazy" /></div>
      <div className="sig-card-content">
        <span className="treat-item-en">{item.en}</span>
        <h3 className="sig-card-title">{item.title}</h3>
        {item.sub && <p className="sig-card-sub">{item.sub}</p>}
        {item.desc && <p className="treat-item-desc">{item.desc}</p>}
        {item.steps && item.steps.map((s, i) => (
          <div key={i} className="treat-step">
            <strong>{s.label}</strong>
            <p>{s.text}</p>
          </div>
        ))}
        {item.bullets && item.bullets.length > 0 && (
          <>
            <p className="treat-bullet-label">이런 분께 추천합니다:</p>
            <ul className="treat-bullets">
              {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

/* Accordion layout for device/treatment items */
function TreatmentItem({ item, isOpen, onToggle }) {
  return (
    <div className={`treat-item${isOpen ? ' open' : ''}`}>
      <button className="treat-item-header" onClick={onToggle}>
        <div className="treat-item-header-left">
          <div className="treat-item-thumb">
            <img src={item.img} alt={item.title} loading="lazy" />
          </div>
          <div>
            <span className="treat-item-en">{item.en}</span>
            <h3 className="treat-item-title">{item.title}</h3>
            {item.oneliner && <p className="treat-item-oneliner">{item.oneliner}</p>}
          </div>
        </div>
        <span className="treat-item-toggle">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="treat-item-body">
          {item.sub && <p className="treat-item-sub">{item.sub}</p>}
          {item.desc && <p className="treat-item-desc">{item.desc}</p>}
          {item.steps && item.steps.map((s, i) => (
            <div key={i} className="treat-step">
              <strong>{s.label}</strong>
              <p>{s.text}</p>
            </div>
          ))}
          {item.bullets && item.bullets.length > 0 && (
            <>
              {item.bulletLabel && <p className="treat-bullet-label">{item.bulletLabel}</p>}
              {!item.bulletLabel && <p className="treat-bullet-label">이런 분께 추천합니다:</p>}
              <ul className="treat-bullets">
                {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </>
          )}
          {item.subImages && item.subImages.length > 0 && (
            <div className={`treat-sub-images treat-sub-images--col${item.subImages.length}`}>
              {item.subImages.map((si, idx) => (
                <div key={idx} className="treat-sub-image">
                  <img src={si.src} alt={si.label} loading="lazy" />
                  <span className="treat-sub-image-label">{si.label}</span>
                </div>
              ))}
            </div>
          )}
          {item.note && <p className="treat-note">{item.note}</p>}
        </div>
      )}
    </div>
  )
}

/* ========== Main component ========== */
export default function TreatmentsPage() {
  const [activeTab, setActiveTab] = useState('signature')
  const [openItems, setOpenItems] = useState({})
  const tabBarRef = useRef(null)
  const ref = useFadeIn()

  const toggleItem = (key) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  // Reset open items on tab change
  useEffect(() => {
    setOpenItems({})
  }, [activeTab])

  const scrollTabIntoView = (tabId) => {
    if (!tabBarRef.current) return
    const btn = tabBarRef.current.querySelector(`[data-tab="${tabId}"]`)
    if (btn) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="treat-hero">
        <div className="treat-hero-bg">
          <img src="https://blancdevie.com/asset/img/main/s5_bg.jpg" alt="JM김정민피부과 프리미엄 시술 공간" loading="eager" />
          <div className="treat-hero-overlay" />
        </div>
        <div className="treat-hero-content">
          <p className="en-label" style={{ color: 'var(--color-gold)' }}>TREATMENTS</p>
          <h1 className="treat-hero-title">자연스러운 아름다움을 추구합니다</h1>
          <p className="treat-hero-subtitle">피부과 전문의의 정확한 진단과 맞춤 시술로 건강한 피부를 만들어드립니다</p>
        </div>
      </section>

      {/* Tab navigation */}
      <div className="treat-tabs-wrap">
        <div className="treat-tabs" ref={tabBarRef}>
          {TABS.map(t => (
            <button
              key={t.id}
              data-tab={t.id}
              className={`treat-tab${activeTab === t.id ? ' active' : ''}`}
              onClick={() => { setActiveTab(t.id); scrollTabIntoView(t.id) }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <section className="section treat-content">
        <div className="container fade-in" ref={ref}>

          {/* Signature — card layout with alternating image/text */}
          {activeTab === 'signature' && (
            <div className="treat-category">
              <p className="en-label">SIGNATURE PROGRAMS</p>
              <p className="treat-cat-intro">같은 장비라도 다른 결과를 만듭니다. 써마지 공인 마스터 수료 원장이 설계한 JM만의 맞춤 프로토콜입니다.</p>
              {SIGNATURE.map((item, i) => (
                <SignatureCard key={i} item={item} index={i} />
              ))}
            </div>
          )}

          {/* Lifting — hybrid layout: 써마지 FLX hero card + accordion for rest */}
          {activeTab === 'lifting' && (
            <div className="treat-category">
              <p className="en-label">LIFTING &amp; FIRMING</p>
              <p className="treat-cat-intro">여의사 피부과 전문의가 피부 겉부터 속까지 모든 층을 공략합니다. 연령대와 피부 특성에 맞는 장비를 선택하여 자연스러운 리프팅을 실현합니다.</p>

              {/* 써마지 FLX — hero-style featured card */}
              <div className="lifting-hero-card">
                <div className="lifting-hero-img"><img src={LIFTING[0].img} alt={LIFTING[0].title} loading="lazy" /></div>
                <div className="lifting-hero-content">
                  <span className="treat-item-en">{LIFTING[0].en}</span>
                  <h3 className="lifting-hero-title">{LIFTING[0].title}</h3>
                  <p className="lifting-hero-oneliner">{LIFTING[0].oneliner}</p>
                  <p className="treat-item-desc">{LIFTING[0].desc}</p>
                  {LIFTING[0].bullets && LIFTING[0].bullets.length > 0 && (
                    <>
                      <p className="treat-bullet-label">이런 분께 추천합니다:</p>
                      <ul className="treat-bullets">
                        {LIFTING[0].bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </>
                  )}
                  {LIFTING[0].note && <p className="treat-note">{LIFTING[0].note}</p>}
                </div>
              </div>

              {/* Remaining lifting items as accordion */}
              {LIFTING.slice(1).map((item, i) => (
                <TreatmentItem key={i} item={item} isOpen={!!openItems[`lift-${i + 1}`]} onToggle={() => toggleItem(`lift-${i + 1}`)} />
              ))}
            </div>
          )}

          {/* Injectables */}
          {activeTab === 'injectable' && (
            <div className="treat-category">
              <p className="en-label">INJECTABLES</p>
              <p className="treat-cat-intro">자연스러움이 다른 JM피부과. 섬세한 손끝에서 만들어지는 미묘한 차이가 자연스러운 아름다움을 만듭니다.</p>
              {INJECTABLES.map((item, i) => (
                <TreatmentItem key={i} item={item} isOpen={!!openItems[`inj-${i}`]} onToggle={() => toggleItem(`inj-${i}`)} />
              ))}
              <div className="treat-caution">
                <h4>주사 시술 후 주의사항</h4>
                <ol>
                  <li>시술 후 붓기, 멍, 통증, 붉은 자국이 발생할 수 있으나 수일 내에 사라집니다.</li>
                  <li>시술 후 1~2주간 음주, 사우나, 격한 운동을 삼가주세요.</li>
                  <li>시술 부위에 불필요한 자극을 피해주세요.</li>
                  <li>필링이나 스크럽은 1주일간 피해주세요.</li>
                  <li>불편한 사항이 있으시면 병원으로 연락 주세요. (02-6953-1212)</li>
                </ol>
              </div>
            </div>
          )}

          {/* Pigment */}
          {activeTab === 'pigment' && (
            <div className="treat-category">
              <div className="treat-cat-banner">
                <img src={PIGMENT[0].img} alt="색소/피부톤" loading="lazy" />
                <div className="treat-cat-banner-overlay" />
                <div className="treat-cat-banner-text">
                  <p className="en-label" style={{ color: 'var(--color-gold)', marginBottom: '8px' }}>PIGMENTATION &amp; SKIN TONE</p>
                  <h2 className="treat-cat-banner-title">색소 · 피부톤</h2>
                  <p className="treat-cat-banner-desc">다양한 파장의 레이저로 색소의 깊이와 유형에 맞는 정밀한 치료</p>
                </div>
              </div>
              <p className="treat-cat-intro">맞춤형 복합 레이저 치료로 기미, 잡티, 색소침착을 개선합니다. 다양한 파장의 레이저를 보유하고 있어, 색소의 깊이와 유형에 맞는 정밀한 치료가 가능합니다.</p>
              {PIGMENT.map((item, i) => (
                <TreatmentItem key={i} item={item} isOpen={!!openItems[`pig-${i}`]} onToggle={() => toggleItem(`pig-${i}`)} />
              ))}
            </div>
          )}

          {/* Acne */}
          {activeTab === 'acne' && (
            <div className="treat-category">
              <div className="treat-cat-banner">
                <img src={ACNE_SCAR[0].img} alt="여드름/흉터" loading="lazy" />
                <div className="treat-cat-banner-overlay" />
                <div className="treat-cat-banner-text">
                  <p className="en-label" style={{ color: 'var(--color-gold)', marginBottom: '8px' }}>ACNE &amp; SCAR</p>
                  <h2 className="treat-cat-banner-title">여드름 · 흉터</h2>
                  <p className="treat-cat-banner-desc">조기 치료로 흉터를 최소화하는 종합적 여드름 관리</p>
                </div>
              </div>
              <p className="treat-cat-intro">여드름은 조기에 적극적으로 치료하면 흉터를 최소화할 수 있습니다. 다양한 치료 방식을 병합하여 여드름과 흉터, 모공을 종합적으로 개선합니다.</p>
              {ACNE_SCAR.map((item, i) => (
                <TreatmentItem key={i} item={item} isOpen={!!openItems[`acne-${i}`]} onToggle={() => toggleItem(`acne-${i}`)} />
              ))}
            </div>
          )}

          {/* Skincare */}
          {activeTab === 'skincare' && (
            <div className="treat-category">
              <p className="en-label">MEDICAL SKIN CARE</p>
              <p className="treat-cat-intro">피부과 전문의의 처방 아래, 검증된 전문 브랜드의 제품과 장비를 활용한 메디컬 스킨케어입니다. 피부 타입과 고민에 맞는 맞춤 관리를 받으실 수 있습니다.</p>

              <h3 className="skincare-section-title">기본 프로그램</h3>
              {SKINCARE_BASIC.map((item, i) => (
                <TreatmentItem key={i} item={{ ...item, oneliner: '', en: item.en, bullets: item.bullets, bulletLabel: '효과:' }} isOpen={!!openItems[`sc-${i}`]} onToggle={() => toggleItem(`sc-${i}`)} />
              ))}

              <h3 className="skincare-section-title" style={{ marginTop: '56px' }}>전문 스킨케어 브랜드</h3>
              <p className="treat-cat-intro">JM김정민피부과에서는 세계적으로 검증된 전문 스킨케어 브랜드를 도입하여 환자 개개인의 피부 상태에 맞는 맞춤 관리를 제공합니다.</p>
              <div className="brand-grid">
                {SKINCARE_BRANDS.map((b, i) => (
                  <div key={i} className="brand-card">
                    <div className="brand-img">
                      <img src={b.img} alt={b.name} loading="lazy" />
                    </div>
                    <div className="brand-info">
                      <span className="brand-en">{b.en}</span>
                      <h4 className="brand-name">{b.name}</h4>
                      <p className="brand-desc">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Disease */}
          {activeTab === 'disease' && (
            <div className="treat-category">
              <div className="treat-cat-banner">
                <img src={DISEASES[0].img} alt="피부질환" loading="lazy" />
                <div className="treat-cat-banner-overlay" />
                <div className="treat-cat-banner-text">
                  <p className="en-label" style={{ color: 'var(--color-gold)', marginBottom: '8px' }}>SKIN DISEASES</p>
                  <h2 className="treat-cat-banner-title">피부질환</h2>
                  <p className="treat-cat-banner-desc">피부과 본연의 전문 진료를 충실히 수행합니다</p>
                </div>
              </div>
              <p className="treat-cat-intro">피부과 전문의의 정확한 진단으로 피부질환을 근본적으로 치료합니다. 미용 시술뿐 아니라, 피부과 본연의 전문 진료를 충실히 수행합니다.</p>
              {DISEASES.map((item, i) => (
                <TreatmentItem key={i} item={{ ...item, oneliner: '' }} isOpen={!!openItems[`dis-${i}`]} onToggle={() => toggleItem(`dis-${i}`)} />
              ))}
            </div>
          )}

          {/* Extra devices (always visible at bottom for relevant tabs) */}
          {(activeTab === 'injectable' || activeTab === 'skincare' || activeTab === 'acne') && (
            <div className="extra-devices">
              <h3 className="skincare-section-title">추가 장비</h3>
              <div className="extra-devices-grid">
                {EXTRA_DEVICES.map((d, i) => (
                  <div key={i} className="extra-device-card">
                    <img src={d.img} alt={d.title} loading="lazy" />
                    <div>
                      <span className="treat-item-en">{d.en}</span>
                      <h4 style={{ fontSize: '17px', fontWeight: 600, margin: '4px 0 8px' }}>{d.title}</h4>
                      <p className="caption-text">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Common caution */}
          <div className="treat-caution" style={{ marginTop: '64px' }}>
            <h4>시술 후 공통 주의사항</h4>
            <ol>
              {CAUTION_ITEMS.map((c, i) => <li key={i}>{c}</li>)}
            </ol>
          </div>

        </div>
      </section>
    </>
  )
}
