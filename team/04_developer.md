# 개발자 작업지시서 — Claude #4

> 작업 전 `README.md` 먼저 확인하세요.

---

## ⚠️ 보고 원칙 (팀장 지시 — 필수)

**작업 완료 후 반드시 팀장(Claude #1)에게 직접 보고해야 한다.**

- `log.md` 기록 후
- 팀장 창에 다음 형식으로 보고: `"개발자 N차 완료 — [작업 요약 1줄]"`
- 팀장이 검토 후 다음 지시를 내린다. 임의로 다음 작업 진행 금지.

---

## 역할 정의

기능 구현, 버그 수정, 성능 최적화. 파일 직접 수정 가능.
수정 완료 후 반드시 `log.md`에 기록.

---

## 기술 스택

- **프론트:** Vanilla HTML / CSS / JavaScript (프레임워크 없음)
- **DB:** Supabase (포트폴리오 관리)
- **메일:** EmailJS
- **호스팅:** GitHub Pages
- **기타:** SortableJS (admin 드래그앤드롭 예정)

---

## 파일 구조

```
C:\Users\PC\Desktop\vdirectors\
├── index.html
├── about.html
├── services.html
├── portfolio.html
├── portfolio-detail.html
├── admin.html              ← 미완성
├── css/
│   ├── style.css           ← 메인 스타일
│   ├── detail.css          ← 포트폴리오 상세 스타일
│   └── admin.css           ← 미완성
├── js/
│   ├── main.js             ← 메인 JS (커서, 스크롤, 포트폴리오 렌더)
│   ├── transitions.js      ← 페이지 전환 애니
│   ├── supabase-client.js  ← Supabase 클라이언트 초기화
│   ├── detail.js           ← 포트폴리오 상세 페이지
│   └── admin.js            ← 미완성
└── assets/
    └── portfolio/img/      ← pt1.png ~ pt37.png
```

---

## Supabase 정보

```javascript
// js/supabase-client.js
const SUPABASE_URL  = 'https://zpyzgicyfkancewoxmbg.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // 파일에서 확인
// 중요: window.supabase = window.supabase.createClient(URL, ANON)
// CDN이 window.supabase를 이미 점유하므로 const 선언 불가
```

### Supabase 테이블: `portfolio`
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | int | PK |
| name | text | 프로젝트명 |
| category | text | 'web' 또는 'design' |
| tags | text[] | 태그 배열 |
| thumb_url | text | 썸네일 URL |
| sort_order | int | 정렬 순서 |
| (상세 컬럼들) | | detail.js 참고 |

---

## 현재 미완성 작업 목록

### 🔴 Admin 페이지 (최우선)
`admin.html` + `admin.js` + `css/admin.css` 구현 필요

**기능 요구사항:**
- Supabase Auth 로그인 (이메일/비밀번호)
- 포트폴리오 목록 조회
- 포트폴리오 등록 (이미지 업로드 + 텍스트)
- 포트폴리오 수정 / 삭제
- 순서 변경 (SortableJS 드래그앤드롭 → sort_order 업데이트)

**참고:**
```html
<!-- SortableJS CDN -->
<script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"></script>
```

### 🟡 EmailJS 키 연결
`js/main.js` 안 플레이스홀더 교체 필요 (Boss가 키 제공 예정)
```javascript
emailjs.init('YOUR_PUBLIC_KEY');          // ← 교체 필요
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', params); // ← 교체 필요
```

### 🟢 포트폴리오 이미지
현재 Supabase DB에 thumb_url 미등록 상태. Admin 완성 후 Boss가 직접 등록 예정.

---

## 알려진 버그 / 주의사항

1. `window.supabase` 재선언 이슈 — 이미 수정됨, 건드리지 말 것
2. `detail.css`에서 `var(--border)` → `var(--g4)` 수정 완료
3. `portfolio-detail.html`의 "ALL WORKS" 링크 → `portfolio.html` 수정 완료
4. 모바일에서 services 교차 레이아웃 반응형 — 수정 완료

---

## 산출물 형식

파일 직접 수정 후 `log.md`에 기록.
팀장 검토가 필요한 큰 변경은 먼저 이 파일 하단에 설명 작성.

---

## 역할 분담 원칙

- **디자이너(3번)** 산출물(`03_output.md`)에 CSS/JS 코드가 있으면 → 개발자가 실제 파일에 반영
- 팀장은 검토/조율만, 직접 코드 반영은 개발자 담당
- 반영 후 반드시 `log.md` 기록

---

## 🆕 현재 작업 요청 (디자이너 직전달 — 2026-03-26 / 20차)

### 포트폴리오 카드 — 유리 바 슬라이드업 CSS 반영 (03_output.md 기준)

**Boss 확정 방향**: 검정 그라디언트 오버레이 → 반투명 유리 바 하단 슬라이드업 + 카드 배경 흰색 + floating shadow

**`css/style.css` 수정 (위치별 교체):**

```css
/* 1. Card base — background #fff + box-shadow transition 추가 */
.portfolio-item {
  position: relative;
  overflow: hidden;
  background: #fff;
  display: block;
  will-change: transform;
  transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.5s ease;
}

/* 2. hover — box-shadow 추가 */
.portfolio-item:hover {
  opacity: 1;
  transform: scale(1.03);
  z-index: 2;
  box-shadow: 0 20px 56px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.08);
}

/* 3. 이미지 줌 */
.portfolio-item:hover .portfolio-thumb img { transform: scale(1.08); }

/* 4. 오버레이 전면 교체 — 유리 바 슬라이드업 */
.portfolio-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: flex-start;
  opacity: 1;
  transform: translateY(100%);
  transition: transform 0.45s var(--ease);
}
.portfolio-item:hover .portfolio-overlay { transform: translateY(0); }

/* 5. overlay-inner — translateY 제거 */
.overlay-inner {
  padding: 20px 24px;
  transform: none;
  transition: none;
}

/* 6. 텍스트 색상 — 검정 계열로 전환 */
.overlay-cat {
  display: block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.25em;
  color: var(--g2);
  margin-bottom: 4px;
}
.overlay-name {
  font-size: 15px;
  font-weight: 800;
  color: var(--black);
  letter-spacing: -0.01em;
  margin-bottom: 0;
}
.overlay-tags {
  font-size: 11px;
  color: var(--g2);
}
```

완료 후 `log.md`에 기록:
`2026-03-26 | 개발자 | 포트폴리오 유리바 슬라이드업 CSS 반영 (디자이너 20차) — ✅ 완료`

---

## 🆕 이전 작업 요청 (팀장 지시 — 2026-03-26 / 19차)

### A. 버그 수정 (기획자 11차)

**A-1. footer 주소 통일** (`about.html`, `services.html`, `index.html`)
정확한 주소: `인천광역시 연수구 송도과학로56, 송도테크노파크BT센터 1401호`
- about.html: "송도미래로30, E동 508호" → 위 주소로 교체
- services.html: "송도미래로30, E동 508호" → 위 주소로 교체
- index.html: "BT센터" → "송도테크노파크BT센터" 로 표기 통일

**A-2. portfolio-detail.html nav + 뒤로가기 링크 수정**
```html
<!-- nav 수정 -->
href="index.html#about" → href="about.html"
href="index.html#services" → href="services.html"
<!-- 모바일 메뉴도 동일하게 -->

<!-- 뒤로가기 -->
href="index.html#portfolio" → href="portfolio.html"
```

**A-3. `css/style.css` — page-hero-dark 레이블 색상**
```css
.page-hero-dark .page-hero-label { color: #666; }
```

**A-4. `js/main.js` — replayHeroLabel() 루프 전체 제거**
`replayHeroLabel` 함수 + `setTimeout/setInterval` 호출 블록 삭제.

**A-5. `about.html` — count-up 2021 제거**
설립연도 span에서 `count-up` 클래스 제거 → 정적 텍스트 "2021" 표시.

**A-6. `css/style.css` — 기타 소폭 수정 3줄**
```css
textarea { height: 130px; }           /* 90px → 130px */
.service-card p { color: #777; }      /* #505050 → #777 */
.service-tag { font-size: 11px; }     /* 9px → 11px */
.page-hero-label { font-size: 12px; } /* 11px → 12px */
```

**A-7. portfolio-detail.html "← PORTFOLIO" 링크**
```html
href="index.html#portfolio" → href="portfolio.html"
```

---

### B. 모션 개선 (디자이너 7차)

**B-1. `css/style.css` — 마르키 hover pause 제거 (1줄 삭제)**
```css
/* 아래 줄 삭제 */
.marquee-wrap:hover .marquee-track { animation-play-state: paused; }
```

**B-2. `css/style.css` + `portfolio.html` — Clients 로고 stagger reveal**

style.css에 추가:
```css
.client-logo {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s var(--ease), transform 0.6s var(--ease),
              background 0.3s ease;
  transition-delay: var(--delay, 0s);
}
.client-logo.in-view {
  opacity: 1;
  transform: translateY(0);
}
.client-logo:hover { background: var(--white); transform: translateY(-4px); }

.client-logo:nth-child(1)  { --delay: 0s;    }
.client-logo:nth-child(2)  { --delay: 0.04s; }
.client-logo:nth-child(3)  { --delay: 0.08s; }
.client-logo:nth-child(4)  { --delay: 0.12s; }
.client-logo:nth-child(5)  { --delay: 0.16s; }
.client-logo:nth-child(6)  { --delay: 0.2s;  }
.client-logo:nth-child(7)  { --delay: 0.24s; }
.client-logo:nth-child(8)  { --delay: 0.28s; }
.client-logo:nth-child(9)  { --delay: 0.32s; }
.client-logo:nth-child(10) { --delay: 0.36s; }
.client-logo:nth-child(11) { --delay: 0.4s;  }
.client-logo:nth-child(12) { --delay: 0.44s; }
.client-logo:nth-child(13) { --delay: 0.48s; }
.client-logo:nth-child(14) { --delay: 0.52s; }
.client-logo:nth-child(15) { --delay: 0.56s; }
.client-logo:nth-child(16) { --delay: 0.6s;  }
.client-logo:nth-child(17) { --delay: 0.64s; }
.client-logo:nth-child(18) { --delay: 0.68s; }
.client-logo:nth-child(19) { --delay: 0.72s; }
.client-logo:nth-child(20) { --delay: 0.76s; }
.client-logo:nth-child(21) { --delay: 0.8s;  }
.client-logo:nth-child(22) { --delay: 0.84s; }
.client-logo:nth-child(23) { --delay: 0.88s; }
.client-logo:nth-child(24) { --delay: 0.92s; }
.client-logo:nth-child(25) { --delay: 0.96s; }
```

portfolio.html — 모든 `.client-logo`에 `reveal` 클래스 추가:
```html
<div class="client-logo reveal">
```

**B-3. `css/style.css` — service-row hover 강화**
```css
.service-row-ghost {
  transition: transform 0.5s var(--ease), color 0.4s ease;
}
.service-row:hover .service-row-ghost {
  color: var(--g4);
  transform: translateX(12px);
}
.service-row-right h2 {
  position: relative;
  display: inline-block;
}
.service-row-right h2::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 1.5px;
  background: var(--black);
  transition: width 0.4s var(--ease);
}
.service-row:hover .service-row-right h2::after { width: 100%; }
```

**B-4. `css/style.css` — history stagger 간격 확대**
```css
.history-item:nth-child(1) { --delay: 0s;    }
.history-item:nth-child(2) { --delay: 0.12s; }
.history-item:nth-child(3) { --delay: 0.24s; }
.history-item:nth-child(4) { --delay: 0.36s; }
```

**B-5. `css/style.css` — filter-btn active 배경 fill**
```css
.filter-btn.active {
  color: var(--black);
  border-bottom-color: var(--black);
  background: var(--g5);
  border-radius: 2px;
}
```

---

완료 후 `log.md` 기록 및 **팀장(Claude #1)에게 직접 보고**:
`"개발자 19차 완료 — 버그수정7개/모션5개 반영"`

---

## ⬇️ 이전 작업 요청 (완료)

## 이전 작업 요청 (팀장 지시 — 2026-03-26 / 18차)

### A. Clients 섹션 재배치 (기획자 9차 산출물)

#### A-1. `index.html` — `<section id="clients">` 블록 전체 제거

#### A-2. `portfolio.html` — `</section>` (포트폴리오 리스트 닫는 태그) ~ `<footer>` 사이에 삽입:

```html
<!-- ===== CLIENTS ===== -->
<section class="clients-section">
  <span class="clients-label">TRUSTED BY</span>
  <div class="clients-grid">
    <div class="client-logo"><img src="assets/portfolio/img/cl_01.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_02.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_03.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_04.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_05.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_06.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_07.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_08.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_09.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_10.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_11.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_12.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_13.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_14.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_15.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_16.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_17.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_18.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_19.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_20.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_21.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_22.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_23.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_24.png" alt="Client" loading="lazy"></div>
    <div class="client-logo"><img src="assets/portfolio/img/cl_25.png" alt="Client" loading="lazy"></div>
  </div>
</section>
```

#### A-3. `css/style.css` — 기존 `#clients`, `.clients-inner`, `.clients-track-wrap`, `.clients-track`, `@keyframes clientsScroll` 블록 전체 삭제 후 아래로 교체:

```css
/* ===== CLIENTS (portfolio.html 하단 정적 그리드) ===== */
.clients-section {
  padding: 80px 60px;
  background: var(--g6);
  border-top: 1px solid var(--g4);
  border-bottom: 1px solid var(--g4);
}
.clients-label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.3em;
  color: var(--black);
  text-align: center;
  margin-bottom: 48px;
}
.clients-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-top: 1px solid var(--g4);
  border-left: 1px solid var(--g4);
}
.client-logo {
  border-right: 1px solid var(--g4);
  border-bottom: 1px solid var(--g4);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 24px;
  height: 100px;
  transition: background 0.3s ease;
}
.client-logo:hover { background: var(--white); }
.client-logo img {
  max-width: 120px;
  max-height: 48px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.55);
  transition: filter 0.35s ease;
}
.client-logo:hover img { filter: grayscale(0%) opacity(1); }
@media (max-width: 768px) {
  .clients-section { padding: 60px 40px; }
  .clients-grid { grid-template-columns: repeat(4, 1fr); }
}
@media (max-width: 480px) {
  .clients-section { padding: 52px 20px; }
  .clients-grid { grid-template-columns: repeat(3, 1fr); }
  .client-logo { height: 80px; padding: 20px 16px; }
}
```

---

### B. 메인 포트폴리오 벤토 — 9개 전용 고정 레이아웃 (기획자 9차 산출물)

`css/style.css` — 기존 `.portfolio-item:nth-child(5n+1)` 블록 아래에 추가:

```css
/* ===== 메인 페이지 9개 전용 고정 레이아웃 ===== */
.portfolio-main .portfolio-grid { grid-auto-flow: row; }

/* 기존 반복 패턴 리셋 */
.portfolio-main .portfolio-item:nth-child(5n+1) { grid-column: span 1; grid-row: span 1; }
.portfolio-main .portfolio-item:nth-child(5n+3) { grid-row: span 1; }

/* 지그재그 wide 패턴: 1행좌 / 2행중 / 3행우 */
.portfolio-main .portfolio-item:nth-child(1),
.portfolio-main .portfolio-item:nth-child(5),
.portfolio-main .portfolio-item:nth-child(9) {
  grid-column: span 2;
}

@media (max-width: 768px) {
  .portfolio-main .portfolio-item:nth-child(5n+1) { grid-column: span 1; grid-row: span 1; }
  .portfolio-main .portfolio-item:nth-child(5n+3) { grid-row: span 1; }
  .portfolio-main .portfolio-item:nth-child(1),
  .portfolio-main .portfolio-item:nth-child(5),
  .portfolio-main .portfolio-item:nth-child(9) { grid-column: span 2; }
}
@media (max-width: 480px) {
  .portfolio-main .portfolio-item:nth-child(1),
  .portfolio-main .portfolio-item:nth-child(5),
  .portfolio-main .portfolio-item:nth-child(9) { grid-column: span 1; }
}
```

`index.html` — 포트폴리오 그리드 감싸는 div에 `portfolio-main` 클래스 추가:
```html
<!-- 기존 -->
<div class="section-inner">
  <div class="portfolio-grid" ...>

<!-- 변경 -->
<div class="section-inner portfolio-main">
  <div class="portfolio-grid" ...>
```

---

### C. 포트폴리오 호버 효과 강화 (디자이너 6차 산출물)

`css/style.css` — `.portfolio-item` card base부터 `.overlay-inner` 까지 전체 교체:

```css
/* Card base */
.portfolio-item {
  position: relative;
  overflow: hidden;
  background: var(--g5);
  display: block;
  will-change: transform;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

/* Spotlight */
.portfolio-grid:has(.portfolio-item:hover) .portfolio-item:not(:hover) {
  opacity: 0.18;
  transform: scale(0.94);
}
.portfolio-item:hover {
  opacity: 1;
  transform: scale(1.04);
  z-index: 2;
}

/* 이미지 줌 */
.portfolio-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.9s var(--ease);
}
.portfolio-item:hover .portfolio-thumb img { transform: scale(1.12); }

/* 오버레이 */
.portfolio-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.25) 50%, transparent 100%);
  display: flex;
  align-items: flex-end;
  opacity: 0;
  transition: opacity 0.25s ease;
}
.portfolio-item:hover .portfolio-overlay { opacity: 1; }

.overlay-inner {
  padding: 28px;
  transform: translateY(32px);
  transition: transform 0.5s var(--ease);
}
.portfolio-item:hover .overlay-inner { transform: translateY(0); }
```

`js/main.js` — `initPortfolioTilt()` 함수 안 transform 문자열에 scale 추가:
```javascript
// 기존
card.style.transform = `perspective(700px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
// 변경
card.style.transform = `perspective(700px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale(1.04)`;
```

---

### D. services.html nav 로고 버그픽스 (디자이너 긴급 산출물)

`services.html` — `<nav id="nav">` → `<nav id="nav" class="nav-light">`

`css/style.css` — `#nav.scrolled` 블록 아래에 추가:
```css
/* 다크 hero 페이지 nav */
#nav.nav-light:not(.scrolled) .nav-logo,
#nav.nav-light:not(.scrolled) .nav-links a { color: #fff; }
#nav.nav-light:not(.scrolled) .nav-links a:hover { color: rgba(255,255,255,0.6); }
#nav.nav-light:not(.scrolled) .nav-links a::after { background: #fff; }
#nav.nav-light:not(.scrolled) .nav-mobile-btn span { background: #fff; }
```

---

### E. Admin 카테고리 UI — 토글 버튼 형태로 개선 (`admin.html` + `css/admin.css`)

현재 체크박스 방식 → 클릭 시 색이 채워지는 버튼 토글로 교체. 다중 선택 로직(JS)은 그대로 유지.

`admin.html` — 카테고리 블록 교체:
```html
<div class="field-group">
  <label>카테고리 <span class="hint">(복수 선택 가능)</span></label>
  <div class="category-check-group">
    <label class="check-item"><input type="checkbox" name="category" value="web"><span>웹사이트</span></label>
    <label class="check-item"><input type="checkbox" name="category" value="design"><span>디자인</span></label>
    <label class="check-item"><input type="checkbox" name="category" value="program"><span>프로그램</span></label>
    <label class="check-item"><input type="checkbox" name="category" value="marketing"><span>마케팅</span></label>
    <label class="check-item"><input type="checkbox" name="category" value="video"><span>영상제작</span></label>
  </div>
</div>
```

`css/admin.css` — `.category-check-group`, `.check-item` 블록 전체 교체:
```css
.category-check-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}
.check-item {
  cursor: pointer;
}
.check-item input[type="checkbox"] {
  display: none;
}
.check-item span {
  display: inline-block;
  padding: 7px 16px;
  border: 1.5px solid var(--g3);
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  color: var(--g2);
  background: var(--white);
  transition: all 0.2s ease;
  user-select: none;
}
.check-item input[type="checkbox"]:checked + span {
  background: var(--black);
  border-color: var(--black);
  color: var(--white);
}
.check-item:hover span {
  border-color: var(--g1);
  color: var(--g1);
}
```

---

완료 후 `log.md` 기록 및 **팀장(Claude #1)에게 직접 보고**:
`"개발자 18차 완료 — Clients재배치/벤토패턴/호버강화/nav버그/Admin토글"`

---

## ⬇️ 이전 작업 요청 (완료)

## 이전 작업 요청 (팀장 지시 — 2026-03-26 / 17차)

### A. 검정 배경 저대비 수정 (`css/style.css`)

`services.html` `.process-section` (배경 #111)에서 텍스트가 안 보이는 문제:

```css
/* 아래 3개 선택자 color 값 수정 */
.process-section .section-label { color: #666; }
.process-num                     { color: #555; }
.process-step p                  { color: #777; }
```

---

### B. Impact 로켓 효과 강화 + 루프 (`css/style.css` + `js/main.js`)

현재 구현이 충격감이 없고 1회 재생 후 멈춤. Boss 요청: Impact가 로켓처럼 날아오는 효과가 계속 반복돼서 눈에 띄어야 함.

#### B-1. CSS — `wordImpact` 키프레임 교체 (`css/style.css`)
```css
@keyframes wordImpact {
  from { opacity: 0; transform: translateX(-120px) scale(0.85); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
}
.hero-label .word-impact {
  animation-name: wordImpact;
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  animation-delay: 1.4s;
  animation-fill-mode: both;
}
.hero-label .word-to {
  animation-name: wordSlideRight;
  animation-duration: 0.2s;
  animation-delay: 0.95s;
  animation-fill-mode: both;
}
```

#### B-2. JS — 전체 시퀀스 4.5초마다 루프 (`js/main.js`)

`initHeroLabel()` 함수 (또는 label 애니 초기화 블록) 안에 아래 루프 코드 추가.
핵심: 4.5초마다 `.hero-label` 안 모든 `span.word`의 animation을 리셋 → 재실행.

```javascript
// hero-label 루프 — 4.5초마다 전체 시퀀스 재실행
function replayHeroLabel() {
  const label = document.querySelector('.hero-label');
  if (!label) return;
  const words = label.querySelectorAll('.word');
  words.forEach(w => {
    w.style.animation = 'none';
    w.offsetHeight; // reflow 강제 (animation restart)
    w.style.animation = '';
  });
}
// 초기 재생(1.4s) + 홀드(0.6s) 후 루프 시작, 이후 4.5s 간격
setTimeout(() => {
  replayHeroLabel();
  setInterval(replayHeroLabel, 4500);
}, 4500);
```

#### B-3. JS — inline delay 제거 (word-impact, word-to는 CSS로 제어)
```javascript
const inlineDelay = (cls === 'word-impact' || cls === 'word-to') ? '' : `style="animation-delay:${0.8 + i * 0.07}s"`;
return `<span class="word ${cls}" ${inlineDelay}>${w}</span>`;
```

---

### C. OG 메타 태그 삽입 (전 페이지 `<head>`)

`index.html`, `about.html`, `services.html`, `portfolio.html`, `portfolio-detail.html` — `<head>` 안 `<title>` 바로 아래에 추가:

```html
<meta property="og:title" content="VDIRECTORS — We Direct Your Value">
<meta property="og:description" content="소프트웨어 개발, 홈페이지 제작, UI/UX 디자인, 시각디자인, 마케팅">
<meta property="og:type" content="website">
<meta property="og:url" content="https://vdirectors.com">
<meta property="og:image" content="https://vdirectors.com/assets/og.png">
<meta name="twitter:card" content="summary_large_image">
```

---

### D. 클라이언트 로고 섹션 (`index.html` + `css/style.css`)

포트폴리오 섹션(`#portfolio`) 바로 아래 삽입. 로고 파일: `assets/portfolio/img/cl_01.png ~ cl_25.png` (25개).
무한 마르키 형태로 구현 (양방향 대칭 — 2세트 복사).

`index.html` — `#portfolio` 섹션 닫는 태그 바로 아래:
```html
<!-- ===== CLIENTS ===== -->
<section id="clients">
  <div class="clients-inner">
    <span class="section-label reveal">CLIENTS</span>
    <div class="clients-track-wrap">
      <div class="clients-track">
        <img src="assets/portfolio/img/cl_01.png" alt="client">
        <img src="assets/portfolio/img/cl_02.png" alt="client">
        <!-- cl_03 ~ cl_25 동일하게 -->
        <img src="assets/portfolio/img/cl_25.png" alt="client">
        <!-- 무한 루프용 복사본 -->
        <img src="assets/portfolio/img/cl_01.png" alt="client">
        <!-- cl_02 ~ cl_25 복사본 동일하게 -->
        <img src="assets/portfolio/img/cl_25.png" alt="client">
      </div>
    </div>
  </div>
</section>
```

`css/style.css`:
```css
/* ===== CLIENTS ===== */
#clients {
  padding: 80px 0;
  overflow: hidden;
  border-top: 1px solid var(--g4);
}
.clients-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
}
.clients-inner .section-label {
  margin-bottom: 40px;
}
.clients-track-wrap {
  overflow: hidden;
}
.clients-track {
  display: flex;
  align-items: center;
  gap: 60px;
  width: max-content;
  animation: clientsScroll 35s linear infinite;
}
.clients-track:hover { animation-play-state: paused; }
.clients-track img {
  height: 36px;
  width: auto;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.5;
  transition: filter 0.3s ease, opacity 0.3s ease;
}
.clients-track img:hover {
  filter: grayscale(0%);
  opacity: 1;
}
@keyframes clientsScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

---

### E. 포트폴리오 grid transition (`css/style.css`)

`.portfolio-grid` 블록에 한 줄 추가:
```css
transition: opacity 0.4s ease, transform 0.4s ease;
```

---

완료 후 `log.md` 기록:
`2026-03-26 | 개발자 | 17차 — 검정배경대비/Impact강화/OG태그/클라이언트섹션/grid transition — ✅ 완료`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 16차: 디자이너5차 모션 CSS 반영

### 디자이너 5차 산출물 반영 — CSS만 추가 (`css/style.css`)

#### 1. `.section-label` 블록 하단에 추가
```css
/* section-label — clip-path 와이프 리빌 */
.section-label.reveal {
  clip-path: inset(0 100% 0 0);
  opacity: 1;
  transform: none;
  transition: clip-path 0.6s var(--ease), opacity 0s;
  transition-delay: var(--delay, 0s);
}
.section-label.reveal.in-view {
  clip-path: inset(0 0% 0 0);
  opacity: 1;
  transform: none;
}
```

#### 2. `.portfolio-item` 블록 하단에 추가
```css
.portfolio-item:nth-child(1) { --delay: 0s;    }
.portfolio-item:nth-child(2) { --delay: 0.05s; }
.portfolio-item:nth-child(3) { --delay: 0.1s;  }
.portfolio-item:nth-child(4) { --delay: 0.15s; }
.portfolio-item:nth-child(5) { --delay: 0.2s;  }
.portfolio-item:nth-child(6) { --delay: 0.25s; }
.portfolio-item:nth-child(7) { --delay: 0.3s;  }
.portfolio-item:nth-child(8) { --delay: 0.35s; }
.portfolio-item:nth-child(9) { --delay: 0.4s;  }
```

#### 3. `.value-card` 블록 하단에 추가
```css
.value-card.reveal {
  opacity: 0;
  transform: scale(0.94) translateY(44px);
}
.value-card.reveal.in-view {
  opacity: 1;
  transform: scale(1) translateY(0);
  transition: opacity 0.5s var(--ease), transform 0.5s var(--ease);
  transition-delay: var(--delay, 0s);
}
```

완료 후 `log.md` 기록:
`2026-03-26 | 개발자 | 디자이너5차 반영 — section-label와이프/포트폴리오stagger/value-card scale — ✅ 완료`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 15차: Admin 카테고리 다중선택+영상제작

### Admin 카테고리 다중 선택 + 영상제작 추가

#### STEP 1 — `admin.html` 카테고리 select → checkbox 다중 선택으로 교체

기존 `<select id="formCategory">` 제거, 체크박스 그룹으로 교체:

```html
<div class="field-group">
  <label>카테고리 (복수 선택 가능)</label>
  <div class="category-check-group">
    <label class="check-item"><input type="checkbox" name="category" value="web"> 웹사이트</label>
    <label class="check-item"><input type="checkbox" name="category" value="design"> 디자인</label>
    <label class="check-item"><input type="checkbox" name="category" value="program"> 프로그램</label>
    <label class="check-item"><input type="checkbox" name="category" value="marketing"> 마케팅</label>
    <label class="check-item"><input type="checkbox" name="category" value="video"> 영상제작</label>
  </div>
</div>
```

#### STEP 2 — `js/admin.js` 카테고리 저장/불러오기 수정

- **저장 시**: 체크된 value들을 배열로 수집 → `category` 컬럼에 배열로 저장
  ```javascript
  const categories = [...document.querySelectorAll('input[name="category"]:checked')].map(el => el.value);
  ```
- **불러오기 시**: 기존 데이터의 category가 string이면 배열로 변환 후 해당 체크박스 checked 처리
- Supabase `category` 컬럼 타입이 `text`면 `text[]`로 변경 필요 — 또는 쉼표 구분 string으로 저장도 가능 (기술적으로 더 간단하면 string 사용)

#### STEP 3 — `portfolio.html` 필터 버튼에 영상제작 추가

```html
<button class="filter-btn" data-filter="video">영상제작</button>
```

#### STEP 4 — `css/admin.css` 체크박스 그룹 스타일

```css
.category-check-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
}
.check-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  cursor: pointer;
}
```

---

완료 후 `log.md` 기록:
`2026-03-26 | 개발자 | Admin 카테고리 다중선택(checkbox)+영상제작 추가 — ✅ 완료`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 14차: 기획자7차 반영

### 기획자 7차 산출물 반영 — 개발자 담당 항목

#### STEP 1 — 포트폴리오 메인 9개 (`js/main.js`)
```javascript
// 기존
filtered.slice(0, 10)
// 변경
filtered.slice(0, 9)
```

#### STEP 2 — 포트폴리오 Spotlight Dim 호버 (`css/style.css`)
`.portfolio-grid` 및 `.portfolio-item` 관련 위치에 추가:
```css
.portfolio-grid:has(.portfolio-item:hover) .portfolio-item:not(:hover) {
  opacity: 0.45;
  transform: scale(0.98);
}
.portfolio-item {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.portfolio-item:hover {
  opacity: 1;
  transform: scale(1.02);
  z-index: 2;
}
```

#### STEP 3 — "Impact" 로켓 효과 (`js/main.js` + `css/style.css`)

`js/main.js` — label 단어 split 부분 수정:
```javascript
const wordClasses = { 'from': 'word-from', 'idea': 'word-idea', 'to': 'word-to', 'impact': 'word-impact' };
label.innerHTML = words.map((w, i) => {
  const cls = wordClasses[w.toLowerCase()] || '';
  return `<span class="word ${cls}" style="animation-delay:${0.8 + i * 0.07}s">${w}</span>`;
}).join(' ');
```

`css/style.css` — 기존 `.hero-label .word` 아래 추가:
```css
.hero-label .word-to {
  animation-name: wordSlideRight;
  animation-duration: 0.25s;
  animation-delay: 1.0s !important;
}
.hero-label .word-impact {
  animation-name: wordImpact;
  animation-duration: 0.55s;
  animation-delay: 1.1s !important;
}
@keyframes wordSlideRight {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes wordImpact {
  from { opacity: 0; transform: translateX(-110px); }
  to   { opacity: 1; transform: translateX(0); }
}
/* Impact 전용 easing: overshoot */
.hero-label .word-impact {
  animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

#### STEP 4 — 커서 크기 확대 (`css/style.css`)
```css
/* 기존 */
.cursor-ball { width: 26px; height: 26px; }
.cursor-ball::before { width: 4px; height: 4px; }

/* 변경 */
.cursor-ball { width: 36px; height: 36px; }
.cursor-ball::before { width: 6px; height: 6px; }
```

---

완료 후 `log.md` 기록:
`2026-03-26 | 개발자 | 기획자7차 반영 — 포트폴리오9개/Spotlight호버/Impact로켓/커서36px — ✅ 완료`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 13차: detail.js 에러 수정

### detail.js null 에러 수정

`index.html`에서 `detail.js:10 Uncaught TypeError: Cannot read properties of null` 발생.
`detail.js`가 `portfolio-detail.html` 전용인데 다른 페이지에서도 실행되는 것이 원인.

`js/detail.js` 파일 맨 위에 가드 추가:

```javascript
// portfolio-detail.html 에서만 실행
if (!document.getElementById('detailContainer') && !document.querySelector('.detail-page')) {
  // 실제 detail.js 코드에 맞게 — 첫 번째로 null이 되는 요소의 id로 조건 체크
}
```

또는 더 간단하게: `detail.js`를 `index.html`에서 `<script>` 태그로 로드하고 있다면 해당 script 태그 제거.

`index.html`에 `detail.js` include 있는지 먼저 확인 후 제거가 맞으면 제거, 가드가 맞으면 가드 추가.

완료 후 `log.md` 기록:
`2026-03-26 | 개발자 | detail.js null 에러 수정 — ✅ 완료`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 12차: 시딩URL+카테고리 추가

### A. 시딩 스크립트 thumb_url 수정 (`tools/seed-portfolio.html`)

현재 URL이 `https://vdirectors.com/assets/...` 절대경로라 로컬에서 안 보임.
상대경로로 변경:

```javascript
// 기존
thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt1.png'

// 변경
thumb_url: 'assets/portfolio/img/pt1.png'
```

24개 전부 동일하게 변경.

---

### B. Admin 카테고리 항목 추가 (`admin.html`)

현재 카테고리 select에 `web`, `design` 두 가지만 있음.
`프로그램`, `마케팅` 두 개 추가:

```html
<option value="web">웹사이트</option>
<option value="design">디자인</option>
<option value="program">프로그램</option>      <!-- 추가 -->
<option value="marketing">마케팅</option>      <!-- 추가 -->
```

`portfolio.html` 필터 버튼도 동일하게 추가 (현재 web/design 필터만 있을 경우):
```html
<button class="filter-btn" data-filter="program">프로그램</button>
<button class="filter-btn" data-filter="marketing">마케팅</button>
```

---

완료 후 `log.md` 기록:
`2026-03-26 | 개발자 | 시딩URL 상대경로 수정 + Admin/포트폴리오 카테고리 추가 (program/marketing) — ✅ 완료`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 11차: Admin URL제거+상세이미지업로드+시딩스크립트

### A. Admin URL 입력 제거 + 파일업로드 UI 정리 (`admin.html` + `js/admin.js` + `css/admin.css`)

직원이 사용하는 것을 고려 — URL 입력 완전 제거, 파일 업로드만 유지. 썸네일/상세이미지 명확히 구분.

**`admin.html`에서:**
- `formThumbUrl` input (URL 직접 입력 필드) 제거
- `formDetailImages` textarea (URL 입력) 제거
- 썸네일 업로드 영역 레이블: **"썸네일 이미지"** (1장)
- 상세 이미지 업로드 영역: **"상세 이미지"** (여러 장 가능, `multiple` 속성)
- 상세 이미지도 파일 업로드 input 추가 (`id="detailFiles"`, `multiple`)

**`js/admin.js`에서:**
- `formThumbUrl`, `formDetailImages` 관련 코드 제거
- 상세 이미지 파일 업로드 로직 추가 — 여러 파일을 순서대로 Supabase Storage `portfolio` 버킷에 업로드 → URL 배열 생성 → DB 저장
- Storage 경로: `{pt번호 or 타임스탬프}/detail_{index}.jpg`
- 기존 썸네일 업로드 로직은 유지

---

### B. 포트폴리오 시딩 스크립트 (`tools/seed-portfolio.html`)

브라우저에서 한 번 실행하면 Supabase에 24개 포트폴리오 데이터 자동 입력.
이미지 URL은 GitHub Pages 배포 후 기준: `https://vdirectors.com/assets/portfolio/img/pt{n}.png`

아래 데이터 그대로 사용:

```javascript
const portfolioData = [
  { sort_order: 1,  name: 'MBC C&I',          category: 'web',    tags: ['웹사이트'],     thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt1.png' },
  { sort_order: 2,  name: '연세대학교',          category: 'web',    tags: ['웹사이트'],     thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt2.png' },
  { sort_order: 3,  name: 'VARRAM',            category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt3.png' },
  { sort_order: 4,  name: '진해양봉',            category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt4.png' },
  { sort_order: 5,  name: '육대장',             category: 'web',    tags: ['웹사이트'],     thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt6.png' },
  { sort_order: 6,  name: 'b belladörr',      category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt7.png' },
  { sort_order: 7,  name: 'AIinsight',         category: 'web',    tags: ['웹사이트'],     thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt8.png' },
  { sort_order: 8,  name: 'BESTSOLUTION',      category: 'web',    tags: ['웹사이트'],     thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt9.png' },
  { sort_order: 9,  name: '나무감정평가법인',      category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt12.png' },
  { sort_order: 10, name: '피플인아트',           category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt13.png' },
  { sort_order: 11, name: 'THELSTAR',          category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt15.png' },
  { sort_order: 12, name: 'MOMENTO',           category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt18.png' },
  { sort_order: 13, name: 'SA',                category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt20.png' },
  { sort_order: 14, name: 'LA FLORELLE',       category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt21.png' },
  { sort_order: 15, name: 'CLEANHARA',         category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt23.png' },
  { sort_order: 16, name: 'DAEKYUNG ESCO',     category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt24.png' },
  { sort_order: 17, name: 'KEMY',              category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt28.png' },
  { sort_order: 18, name: 'ABCLABS',           category: 'web',    tags: ['웹사이트'],     thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt30.png' },
  { sort_order: 19, name: 'PROPER COMPANY',    category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt31.png' },
  { sort_order: 20, name: 'HYPHEN',            category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt32.png' },
  { sort_order: 21, name: 'CBS',               category: 'web',    tags: ['웹사이트'],     thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt33.png' },
  { sort_order: 22, name: 'ECO Bio',           category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt34.png' },
  { sort_order: 23, name: 'BLAZAR',            category: 'web',    tags: ['웹사이트'],     thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt35.png' },
  { sort_order: 24, name: 'YAMOUZINE BROS',    category: 'design', tags: ['디자인'],       thumb_url: 'https://vdirectors.com/assets/portfolio/img/pt37.png' },
];
```

`tools/seed-portfolio.html` 파일 생성:
- Supabase 연결 (`js/supabase-client.js` include)
- 버튼 클릭 시 위 데이터 `portfolio` 테이블에 upsert (sort_order 기준)
- 결과 로그 화면에 출력
- **주의:** 기존 데이터 있으면 sort_order 기준 upsert (중복 입력 방지)

---

완료 후 `log.md` 기록:
`2026-03-26 | 개발자 | Admin URL제거+상세이미지업로드 추가 + 시딩스크립트 생성 — ✅ 완료`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 10차: 커스텀 커서 완전 제거

### 커스텀 커서 완전 제거

CSS, JS, HTML에서 커서 관련 코드 전부 삭제.

#### `css/style.css`
- `.cursor-ball` 블록 전체 삭제 (`.cursor-ball`, `.cursor-ball.on-link`, `.cursor-ball.on-portfolio`, `.cursor-ball::before`, `.cursor-ball::after`, `.cursor-ball.on-portfolio::after`)
- `body { cursor: none; }` → `cursor: none;` 삭제 (기본값으로)
- `input, textarea, button, select { cursor: none; }` → 삭제

#### `js/main.js`
- `/* ===== 1. CURSOR ===== */` 섹션 전체 삭제 (cursorBall 변수 선언부터 mouseleave/mouseenter까지)
- `initPortfolioCursor()` 함수 전체 삭제
- `initPortfolioCursor()` 호출하는 곳도 삭제

#### HTML (전 페이지 공통)
- `<div class="cursor-ball" id="cursorBall"></div>` 삭제

완료 후 `log.md` 기록:
`2026-03-26 | 개발자 | 커스텀 커서 완전 제거 (CSS/JS/HTML) — ✅ 완료`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 9차: 마르키 #333

### 마르키 띠 색상 변경 — `css/style.css`

`.marquee-wrap` background 값만 교체:

```css
/* 기존 */
background: var(--black);  /* #111 */

/* 교체 */
background: #333;
```

완료 후 `log.md` 기록:
`2026-03-26 | 개발자 | 마르키 배경 #111 → #333 변경 — ✅ 완료`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 8차: 커서 재구현 + 파비콘

### 커서 완전 재구현 + 파비콘

#### STEP 1 — 커서: 2중 테두리 구조로 교체 (`css/style.css`)

기존 `.cursor-ball` 블록 전체 교체:

```css
/* ===== CURSOR ===== */
.cursor-ball {
  position: fixed;
  top: 0; left: 0;
  width: 28px; height: 28px;
  background: transparent;
  border: 2px solid #111;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.85);
  transition:
    width  0.35s var(--ease),
    height 0.35s var(--ease),
    opacity 0.3s ease;
  will-change: left, top;
}

/* 중앙 점 */
.cursor-ball::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 4px; height: 4px;
  background: #111;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.85);
}

.cursor-ball.on-link {
  width: 44px;
  height: 44px;
  opacity: 0.6;
}

.cursor-ball.on-portfolio {
  width: 64px;
  height: 64px;
}

.cursor-ball::after {
  content: 'VIEW';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: #111;
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
}

.cursor-ball.on-portfolio::after {
  opacity: 1;
}
```

#### STEP 2 — 파비콘 추가 (전 페이지 `<head>`)

`index.html`, `about.html`, `services.html`, `portfolio.html`, `portfolio-detail.html`, `admin.html` — `<head>` 안에 추가:

```html
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23111'/><text x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='700' font-size='18' fill='white'>V</text></svg>">
```

완료 후 `log.md` 기록:
`2026-03-26 | 개발자 | 커서 2중 테두리 구조 재구현 + 파비콘 추가 — ✅ 완료`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 7차: EmailJS 키 연결

### EmailJS 키 연결 — `js/main.js`

아래 3개 플레이스홀더를 실제 값으로 교체:

```javascript
// 교체 전
emailjs.init('YOUR_PUBLIC_KEY');
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', params);

// 교체 후
emailjs.init('dNSpRRXESfgzfghN1');
emailjs.send('service_vou848q', 'template_wkwtmfa', params);
```

완료 후 `log.md` 기록:
`2026-03-26 | 개발자 | EmailJS 키 연결 완료 (service_vou848q / template_wkwtmfa) — ✅ 완료`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 6차: 커서 사라짐 수정

### 커서 사라짐 근본 수정 — 긴급

**원인:** `#111` 커서가 `#111` 마르키 배경 위에서 색이 겹쳐 안 보임.

**해결:** `css/style.css` `.cursor-ball` 블록에 `box-shadow` 한 줄 추가.

```css
.cursor-ball {
  /* 기존 속성들 유지 */
  box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.75);
}
```

흰 테두리가 생겨 어두운 배경 위에서도 커서가 보임. 밝은 배경에선 거의 안 보여 자연스러움.

완료 후 `log.md` 기록:
`2026-03-26 | 개발자 | 커서 사라짐 수정 — box-shadow 흰 테두리 추가 — ✅ 완료`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 5차: 기획자(4차) 분석 기반 반영

---

#### STEP 1 — 커서 전면 교체 (`css/style.css` + `js/main.js`)

**mix-blend-mode 제거, 불투명 #111 단일 원으로 교체**

`css/style.css` — `.cursor-ball` 블록 교체:
```css
.cursor-ball {
  position: fixed;
  top: 0; left: 0;
  width: 26px; height: 26px;
  background: #111;
  opacity: 0.85;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  /* mix-blend-mode 제거 */
  transition:
    width  0.4s var(--ease),
    height 0.4s var(--ease),
    opacity 0.3s ease;
  will-change: left, top;
}

.cursor-ball.on-link {
  width: 44px;
  height: 44px;
  opacity: 0.5;
}

.cursor-ball.on-portfolio {
  width: 64px;
  height: 64px;
  opacity: 0.85;
}

.cursor-ball::after {
  content: 'VIEW';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: #fff;
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
}

.cursor-ball.on-portfolio::after {
  opacity: 1;
}
```

`js/main.js` — lerp 값만 수정:
```javascript
// 기존
cX += (mX - cX) * 0.12;
cY += (mY - cY) * 0.12;

// 교체
cX += (mX - cX) * 0.16;
cY += (mY - cY) * 0.16;
```

---

#### STEP 2 — 포트폴리오 메인 표시 방식 변경 (`js/main.js`)

랜덤 셔플 제거 → sort_order 상위 10개 고정 표시

```javascript
// 기존
if (isMainPage) {
  filtered = shuffleArray(filtered).slice(0, 8);
}

// 교체
if (isMainPage) {
  filtered = filtered.slice(0, 10);
}
```

`shuffleArray` 함수는 admin이나 다른 곳에서 사용 안 하면 삭제, 사용 중이면 유지.

---

#### STEP 3 — 폰트 크기 (`css/style.css`)

아래 5개 요소 font-size만 수정:

| 선택자 | 현재 | 변경 |
|--------|------|------|
| `.section-label` | 11px | **13px** |
| `.card-eyebrow` | 9px | **11px** |
| `.footer-right p` (또는 footer 주소 텍스트) | 12px | **14px** |
| `.history-month` | 11px | **13px** |
| `.service-detail-list li` | 13px | **14px** |

해당 선택자가 없으면 가장 근접한 선택자 찾아서 적용.

---

#### STEP 4 — 마르키 배경색 (`css/style.css`)

```css
/* 기존 */
background: #000;

/* 교체 */
background: var(--black);  /* = #111 */
```

`.marquee-wrap` 블록의 background 값 하나만 변경.

---

완료 후 `log.md`에 기록:
`2026-03-26 | 개발자 | 기획자 4차 분석 반영 — 커서 #111/lerp0.16 / 포트폴리오 상위10고정 / 폰트5개 / 마르키#111 — ✅ 완료`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 4차: 디자이너(3차) 산출물 반영

아래 순서대로 반영. 기술적 문제 없으면 디자인 판단 없이 그대로 적용.

---

#### STEP 1 — HTML (전 페이지 공통)

`index.html`, `about.html`, `services.html`, `portfolio.html`, `portfolio-detail.html` 5개 파일:

```html
<!-- 제거 (2줄) -->
<div class="cursor-ring" id="cursorRing"></div>
<div class="cursor-dot"  id="cursorDot"></div>

<!-- 교체 (1줄) -->
<div class="cursor-ball" id="cursorBall"></div>
```

---

#### STEP 2 — `css/style.css` 커서 블록 교체

**`/* ===== CURSOR ===== */` 블록 전체 (`.cursor-dot` + `.cursor-ring` + `.cursor-ring.on-link` + `.cursor-ring.on-portfolio` + `.cursor-ring::after` + `.cursor-ring.on-portfolio::after`)를 아래로 교체:**

```css
/* ===== CURSOR ===== */
/* ⚠️ mix-blend-mode: difference 작동 조건:
   body 또는 부모에 isolation: isolate 없어야 함 */
.cursor-ball {
  position: fixed;
  top: 0; left: 0;
  width: 28px; height: 28px;
  background: #fff;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  transition:
    width  0.4s var(--ease),
    height 0.4s var(--ease),
    opacity 0.3s ease;
  will-change: left, top;
}

.cursor-ball.on-link {
  width: 44px;
  height: 44px;
  opacity: 0.7;
}

.cursor-ball.on-portfolio {
  width: 64px;
  height: 64px;
}

.cursor-ball::after {
  content: 'VIEW';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: #fff;
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
}

.cursor-ball.on-portfolio::after {
  opacity: 1;
}
```

---

#### STEP 3 — `css/style.css` `:root` 변수 수정

`:root` 블록에서 아래 3개 값만 교체:

```css
--g1: #111111;   /* 기존 #444444 */
--g2: #555555;   /* 기존 #888888 */
--g4: #CCCCCC;   /* 기존 #DEDEDE */
```

---

#### STEP 4 — `css/style.css` 마르키 블록 교체

`.marquee-wrap` 관련 CSS 블록 교체 (background, border, 텍스트 색상):

```css
.marquee-wrap {
  overflow: hidden;
  border-top: none;
  border-bottom: none;
  padding: 20px 0;
  background: #000;
}

.marquee-track {
  display: flex;
  align-items: center;
  gap: 44px;
  white-space: nowrap;
  width: max-content;
  animation: marquee 25s linear infinite;
}

.marquee-wrap:hover .marquee-track { animation-play-state: paused; }

.marquee-track span {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: #fff;
}

.marquee-track .sep {
  color: #fff;
  letter-spacing: 0;
  font-weight: 400;
}
```

---

#### STEP 5 — `css/style.css` 인트로 인용구 + section-label

`.main-intro-quote` font-size 교체:
```css
font-size: clamp(48px, 6.5vw, 96px);  /* 기존 clamp(32px, 4vw, 58px) */
```

`.section-label` color 교체:
```css
color: #000;
```

---

#### STEP 6 — `js/main.js` 섹션 1 교체

**`/* ===== 1. CURSOR (듀얼: ring + dot) ===== */` 블록 전체**를 아래로 교체:

```javascript
/* ===== 1. CURSOR (mix-blend-mode: difference) ===== */
const cursorBall = document.getElementById('cursorBall');

let mX = -200, mY = -200;
let cX = -200, cY = -200;

document.addEventListener('mousemove', e => {
  mX = e.clientX;
  mY = e.clientY;
});

(function animateCursor() {
  cX += (mX - cX) * 0.12;
  cY += (mY - cY) * 0.12;
  if (cursorBall) {
    cursorBall.style.left = cX + 'px';
    cursorBall.style.top  = cY + 'px';
  }
  requestAnimationFrame(animateCursor);
})();

document.addEventListener('mouseleave', () => { if (cursorBall) cursorBall.style.opacity = '0'; });
document.addEventListener('mouseenter', () => { if (cursorBall) cursorBall.style.opacity = ''; });

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursorBall && cursorBall.classList.add('on-link'));
  el.addEventListener('mouseleave', () => cursorBall && cursorBall.classList.remove('on-link'));
});
```

---

#### STEP 7 — `js/main.js` `initPortfolioCursor()` 변수명 교체

`initPortfolioCursor()` 함수 내 `cursorRing` → `cursorBall` 전체 교체 (3곳):

```javascript
// 기존
if (cursorRing) {
  cursorRing.classList.remove('on-link');
  cursorRing.classList.add('on-portfolio');
}
// ...
if (cursorRing) cursorRing.classList.remove('on-portfolio');

// 교체 후
if (cursorBall) {
  cursorBall.classList.remove('on-link');
  cursorBall.classList.add('on-portfolio');
}
// ...
if (cursorBall) cursorBall.classList.remove('on-portfolio');
```

---

완료 후 `log.md`에 기록:
`2026-03-26 | 개발자 | 디자이너 3차 산출물 반영 — 커서 blend-mode / 마르키 검정 / 인트로 확대 / 텍스트 대비 / 구분선 — ✅ 완료`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 3차: 포트폴리오 그리드 잘림 현상 (완료)

---

## ❓ 현황 보고 (2026-03-26 최신)

**개발자 완료:**
- Admin 페이지 (admin.html + admin.css + admin.js) 구현 완료
- GitHub Pages 배포 준비 (CNAME + .nojekyll) 생성 완료
- 디자이너 v2 산출물 C(3D Tilt) main.js + style.css 반영 완료

**Boss 완료:**
- Supabase Storage 버킷 `portfolio` (Public) 생성 완료
- Supabase Auth 관리자 계정 생성 완료

**대기 중 (Boss 액션 필요):**
- EmailJS 키 제공 (PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID) → 받는 즉시 `js/main.js` 플레이스홀더 교체 가능
- GitHub 레포 생성 + push + Pages 설정 (05_output.md D항목 참고)
- 포트폴리오 이미지 24개 Admin 등록
