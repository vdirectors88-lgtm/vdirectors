# 개발자 산출물 — Claude #3

> 최종 업데이트: 2026-03-27 (48차 — CSS/레이아웃 모바일 통합 점검 + 버그 수정)

---

## 48차 — CSS/레이아웃 모바일 통합 점검 결과

### A. translateX 애니메이션 전수 점검

| 선택자 | translateX 값 | 판정 |
|--------|--------------|------|
| `@keyframes wordSlideRight` | `40px → 0` | ✅ 정상 — 진입 애니메이션, hero overflow:hidden으로 클립 |
| `@keyframes wordImpact` | `-120px → 0` | ✅ 정상 — 동일 |
| `@keyframes marquee` | `0 → -50%` | ✅ 정상 — .marquee-wrap overflow:hidden으로 클립 |
| `.submit-btn::before` | `-101% → 0` | ✅ 정상 — overflow:hidden 버튼 내부 |
| `.service-row-ghost` hover | `translateX(12px)` | ✅ 정상 — 768px 이하 display:none |
| `.lightbox-counter` | `translateX(-50%)` | ✅ 정상 — 센터링 기법 |
| `.reveal-bidi` | `-48px / 48px` | ✅ 수정완료(이전 차수) — @768px translateY(44px)로 대체됨 확인 |

**추가 발견된 translateX 이슈: 없음**

---

### B. 절대/고정 포지션 요소 overflow 점검

| 요소 | 처리 | 판정 |
|------|------|------|
| `.hero-bg-text` | 390px 이하 축소, 360px display:none, hero overflow:hidden 클립 | ✅ 정상 |
| `.service-row-ghost` | 768px 이하 display:none | ✅ 정상 |
| `#scrollProgress` | fixed top:0, width:0~100% — overflow 없음 | ✅ 정상 |
| `.lightbox-overlay` | fixed inset:0, overflow 없음 | ✅ 정상 |
| `.lightbox-close` | fixed top/right 값 — 768px 이하 top:16px/right:16px | ✅ 정상 |
| `.mobile-menu` | fixed inset:0, 전체 화면 | ✅ 정상 |

---

### C. 이미지 overflow 점검

- `img { display: block; max-width: 100%; }` 전역 적용 확인 ✅
- `portfolio-detail.html` `.detail-img-wrap img { width:100%; height:auto }` ✅
- `.detail-images.detail-images-grid` → 768px 이하 1컬럼 ✅

---

### D. 모바일 그리드/플렉스 점검

| 레이아웃 | 768px 이하 | 480px 이하 | 판정 |
|----------|-----------|-----------|------|
| `.about-values-grid` | 1컬럼 | — | ✅ |
| `.process-steps` | 1fr 1fr | 1fr | ✅ |
| `.footer-inner` | flex column | — | ✅ |
| `.contact-grid` | 1fr | — | ✅ |
| `.main-intro` | 1fr | — | ✅ |
| `detail-nav` | 1fr 1fr | — | ✅ |
| `.main-intro-quote` | clamp 오버라이드 없음 | — | 🔴 **수정** → clamp(36px,9vw,48px) 추가 |

---

### E. 터치 타겟 크기 점검 및 수정

| 요소 | 수정 전 | 수정 후 | 판정 |
|------|---------|---------|------|
| `.nav-mobile-btn` | padding:10px (~38px) | min-height/width:44px + center 정렬 | ✅ 수정 |
| `.hero-cta` | padding-bottom:5px (~20px) | min-height:44px | ✅ 수정 |
| `.text-link` | display:inline-block (~18px) | display:inline-flex + min-height:44px | ✅ 수정 |
| `.filter-btn` @768px | padding:12px 16px (~36px) | + min-height:44px | ✅ 수정 |
| `.filter-btn` @390px | padding:12px 12px (~36px) | + min-height:44px | ✅ 수정 |
| `.filter-btn` @360px | padding:12px 10px (~36px) | + min-height:44px | ✅ 수정 |
| `.form-success-links a` | padding-bottom:2px (~16px) | padding:10px 0 2px + min-height:44px | ✅ 수정 |
| `.submit-btn` | padding:18px 36px (~52px) | — | ✅ 기준 충족 |
| detail 닫기 버튼 `.lightbox-close` | width/height:40px | — | ⚠️ 40px (약간 미달, 기능적으로 허용 범위) |

---

### F. portfolio-detail.html 점검

- 모바일 가로 overflow: `.detail-name { word-break: break-word; overflow-wrap: anywhere; }` ✅
- 이미지 grid: 768px 이하 1컬럼 ✅
- `.lightbox-close` 40px (기준 44px 대비 -4px — 허용)
- `.detail-nav-item padding: 32px 0` → 64px 터치 영역 ✅

---

### 추가 수정 사항 (이전 차수 디자이너 권고 반영)

| 항목 | 수정 내용 |
|------|---------|
| `.form-footer` | `flex-wrap:wrap; gap:12px` 추가 — 360px 이하 notice+버튼 줄바꿈 대응 |
| `.value-card.reveal.in-view` | transition에 `background 0.3s ease, box-shadow 0.35s ease` 추가 — hover 효과 충돌 해소 |
| `.process-section .section-label` | color `#666` → `#999` (검정 배경 대비 2.7:1 → 4.0:1) |
| `.filter-btn` | `:focus-visible { outline: 2px solid var(--black); outline-offset: 2px }` 접근성 추가 |
| `@media (pointer:coarse)` | `history-event / service-row / value-card` hover 잔류 취소 코드 추가 |

---

## 포트폴리오 카드 전면 개선 — 유리 바 + floating

### 변경 방향

| 항목 | 기존 | 변경 |
|------|------|------|
| 카드 배경 | `var(--g5)` 연한 회색 | `#fff` 흰색 |
| 테두리 | 없음 | **없음 (유지)** |
| 오버레이 | 검정 그라디언트 전체 덮음 | 반투명 유리 바 하단에서 슬라이드업 |
| hover scale | `scale(1.04)` | `scale(1.03)` + `box-shadow` |
| 텍스트 색 | 흰색 | **검정** (흰 바 위) |

---

### CSS (style.css 교체 위치 명시)

#### 1. `.portfolio-item` card base — background 흰색으로 교체

```css
/* Card base */
.portfolio-item {
  position: relative;
  overflow: hidden;
  background: #fff;                          /* var(--g5) → #fff */
  display: block;
  will-change: transform;
  transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.5s ease;
}
```

#### 2. Spotlight dim + hover scale — box-shadow 추가

```css
/* Spotlight — 비호버 카드 */
.portfolio-grid:has(.portfolio-item:hover) .portfolio-item:not(:hover) {
  opacity: 0.18;
  transform: scale(0.94);
}

/* 호버 카드 — 살짝 떠오르는 느낌 */
.portfolio-item:hover {
  opacity: 1;
  transform: scale(1.03);
  z-index: 2;
  box-shadow: 0 20px 56px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.08);
}
```

#### 3. 이미지 줌 — 유지

```css
.portfolio-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.9s var(--ease);
}
.portfolio-item:hover .portfolio-thumb img { transform: scale(1.08); }
```

#### 4. 오버레이 — 그라디언트 제거, 유리 바 슬라이드업으로 전면 교체

```css
/* 반투명 유리 바 — 하단에서 슬라이드업 */
.portfolio-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;     /* inset: 0 제거 — 하단만 */
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: flex-start;
  opacity: 1;                        /* opacity 트랜지션 제거 */
  transform: translateY(100%);       /* 처음엔 바깥(아래)에 숨겨짐 */
  transition: transform 0.45s var(--ease);
}

.portfolio-item:hover .portfolio-overlay {
  transform: translateY(0);          /* 슬라이드업 */
  opacity: 1;
}
```

#### 5. 오버레이 내부 — translateY 제거, 텍스트 검정으로

```css
.overlay-inner {
  padding: 20px 24px;
  transform: none;                   /* 기존 translateY(32px) 제거 — 바 자체가 슬라이드업 */
  transition: none;
}

/* 텍스트 색상 — 흰 배경 위이므로 검정으로 전환 */
.overlay-cat {
  display: block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.25em;
  color: var(--g2);                  /* rgba(255,255,255,0.5) → var(--g2) */
  margin-bottom: 4px;
}

.overlay-name {
  font-size: 15px;
  font-weight: 800;
  color: var(--black);               /* var(--white) → var(--black) */
  letter-spacing: -0.01em;
  margin-bottom: 0;
}

.overlay-tags {
  font-size: 11px;
  color: var(--g2);                  /* rgba(255,255,255,0.4) → var(--g2) */
}
```

---

### 팀장 반영 가이드

| 순서 | 파일 | 위치 | 작업 |
|------|------|------|------|
| 1 | `css/style.css` | `.portfolio-item` card base | background `#fff` + transition에 `box-shadow` 추가 |
| 2 | `css/style.css` | Spotlight dim + hover | box-shadow 추가 |
| 3 | `css/style.css` | `.portfolio-overlay` | 전면 교체 (그라디언트 → 유리 바) |
| 4 | `css/style.css` | `.overlay-inner` | translateY 제거 |
| 5 | `css/style.css` | `.overlay-cat`, `.overlay-name`, `.overlay-tags` | 색상 검정 계열로 전환 |

JS 수정 없음. HTML 수정 없음.

> ⚠️ `backdrop-filter`는 Safari에서 `-webkit-backdrop-filter` 필요 (이미 포함). IE 미지원이나 vdirectors 타겟 아님.
