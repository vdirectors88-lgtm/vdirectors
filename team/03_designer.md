# 디자이너 작업지시서 — Claude #3

> 작업 전 `README.md` 먼저 확인하세요.

---

## ⚠️ 보고 원칙 (팀장 지시 — 필수)

**작업 완료 후 반드시 팀장(Claude #1)에게 직접 보고해야 한다.**

- `log.md` 기록 + `03_output.md` 산출물 작성 후
- 팀장 창에 다음 형식으로 보고: `"디자이너 N차 완료 — [작업 요약 1줄]"`
- 팀장이 검토 후 다음 지시를 내린다. 임의로 다음 작업 진행 금지.

---

## 역할 정의

디자인 개선 방향 제안, CSS/JS 수정안 작성. 팀장이 검토 후 실제 파일에 반영.

---

## 현재 디자인 시스템

```
--white:  #FFFFFF  /  --black:  #111111
--g1: #444  --g2: #888  --g3: #BBB  --g4: #DDD  --g5: #F0F0F0  --g6: #F8F8F8
--ease:  cubic-bezier(0.16, 1, 0.3, 1)
--ease2: cubic-bezier(0.87, 0, 0.13, 1)
폰트: Pretendard
```

---

## 🆕 현재 작업 요청 (팀장 지시 — 2026-03-26 / 8차)

### Impact 단어 미세호흡(heartbeat) CSS 작성

**확정 방향:** replayHeroLabel() 루프 제거. 대신 "Impact" 단어가 착지 후 미세하게 숨쉬는 느낌으로 계속 눈에 걸리게.

**조건:**
- 로켓 착지 완료(1.4s + 0.6s = 약 2s) 이후에 시작
- `scale(1) → scale(1.04) → scale(1)` 3초 간격, infinite
- `transform-origin: left center` (왼쪽 정렬 텍스트 기준)
- easing: `ease-in-out`
- 기존 `wordImpact` 키프레임과 충돌 없도록 별도 animation으로 추가

**작성할 것:**
```css
/* 예시 구조 — 수치 정교하게 다듬어서 작성 */
@keyframes impactBreathe {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.04); }
}
.hero-label .word-impact {
  /* 기존 wordImpact animation 유지하면서 */
  /* animation-delay 2s 후 impactBreathe infinite 추가 방법 제시 */
}
```

CSS animation 속성에서 두 개 animation을 쉼표로 연결하는 방식으로 작성.
`animation: wordImpact 0.6s ... , impactBreathe 3s ease-in-out 2s infinite;`

산출물: `03_output.md` 덮어쓰기.
완료 후 `log.md` 기록 및 **팀장(Claude #1)에게 직접 보고**.

---

## ⬇️ 이전 작업 요청 (완료)

## 이전 작업 요청 (팀장 지시 — 2026-03-26 / 6차)

### 포트폴리오 호버 효과 강화 (`css/style.css`)

**문제:** 현재 `scale(1.02)` vs `scale(0.98)` — 4% 차이라 육안으로 거의 안 보임. Boss가 "거의 차이를 모르겠다"고 피드백.

**현재 코드 (참고):**
```css
.portfolio-grid:has(.portfolio-item:hover) .portfolio-item:not(:hover) {
  opacity: 0.45;
  transform: scale(0.98);
}
.portfolio-item:hover {
  opacity: 1;
  transform: scale(1.02);
  z-index: 2;
}
.portfolio-item:hover .portfolio-thumb img { transform: scale(1.06); }
.portfolio-overlay { opacity: 0; transition: opacity 0.35s ease; }
.portfolio-item:hover .portfolio-overlay { opacity: 1; }
.overlay-inner { transform: translateY(10px); transition: transform 0.4s var(--ease); }
.portfolio-item:hover .overlay-inner { transform: translateY(0); }
```

**요구사항:**
- 호버했을 때 명확하게 "이 카드가 선택됐다"는 느낌
- Spotlight 효과 — 비호버 카드가 확실히 뒤로 물러나는 느낌
- 오버레이 슬라이드업 더 드라마틱하게
- 모던 포트폴리오 사이트 수준 (Clay/Humaan 참고)
- JS 없이 CSS만으로 해결

**작성할 것:** 위 블록 전체를 교체할 CSS 스니펫 (선택자/수치 모두 구체적으로).

산출물: `03_output.md` 덮어쓰기.
완료 후 `log.md` 기록: `2026-03-26 | 디자이너 | 포트폴리오 호버 효과 강화 CSS (6차) — ✅ 완료, 팀장 검토 대기`

---

## ⬇️ 이전 작업 요청 (완료)

## 이전 작업 요청 (팀장 지시 — 2026-03-26 / 5차)

### 기획자 7차 산출물 반영 — 디자이너 담당 항목 (CSS 스니펫 작성)

#### 1. section-label 좌→우 클립패스 와이프 (`css/style.css`)

기존 `.section-label`의 reveal 방식을 fade-up에서 clip-path 와이프로 교체:
```css
/* 기존 reveal 대신 */
.section-label.reveal {
  clip-path: inset(0 100% 0 0);
  opacity: 1; /* opacity 제거, clip-path만 사용 */
  transform: none;
}
.section-label.reveal.in-view {
  clip-path: inset(0 0% 0 0);
  transition: clip-path 0.6s var(--ease);
}
```

#### 2. 포트폴리오 아이템 stagger (`css/style.css`)

포트폴리오 카드 진입 시 nth-child 기반 순차 등장. `var(--delay)` 활용:
```css
.portfolio-item:nth-child(1)  { --delay: 0s; }
.portfolio-item:nth-child(2)  { --delay: 0.05s; }
.portfolio-item:nth-child(3)  { --delay: 0.1s; }
.portfolio-item:nth-child(4)  { --delay: 0.15s; }
.portfolio-item:nth-child(5)  { --delay: 0.2s; }
.portfolio-item:nth-child(6)  { --delay: 0.25s; }
.portfolio-item:nth-child(7)  { --delay: 0.3s; }
.portfolio-item:nth-child(8)  { --delay: 0.35s; }
.portfolio-item:nth-child(9)  { --delay: 0.4s; }
```
reveal 애니메이션에 `animation-delay: var(--delay)` 적용되도록.

#### 3. value-card scale reveal (`css/style.css`)

About 페이지 코어밸류 카드 — scale 팽창 효과:
```css
.value-card.reveal {
  opacity: 0;
  transform: scale(0.94);
}
.value-card.reveal.in-view {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.5s var(--ease), transform 0.5s var(--ease);
}
```

---

산출물: `03_output.md` 덮어쓰기.
완료 후 `log.md` 기록: `2026-03-26 | 디자이너 | 모션 개선 CSS — section-label와이프/포트폴리오stagger/value-card scale (5차) — ✅ 완료, 팀장 검토 대기`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 4차

### OG 이미지 스펙 작성

SNS/카카오톡 공유 시 나오는 미리보기 이미지 스펙을 작성해라.
실제 이미지 파일은 Boss가 직접 만든다 — 디자이너는 스펙과 가이드만 작성.

**요구사항:**
- 규격: 1200 × 630px
- 브랜드: VDIRECTORS, 슬로건 "We Direct Your Value"
- 키컬러: 흑백 계열 (흰 배경 or 검정 배경)
- 폰트: Pretendard (없으면 동일 계열 sans-serif)
- 파일명: `assets/og-image.jpg`

**산출물에 포함할 것:**
1. 배경색 / 텍스트 색 / 레이아웃 구성 (텍스트 위치, 크기, 여백)
2. Figma 또는 Canva에서 재현 가능한 수준의 구체적 가이드
3. 완성 후 `index.html` `<head>`에 추가할 meta 태그 코드:
```html
<meta property="og:title" content="VDIRECTORS">
<meta property="og:description" content="We Direct Your Value">
<meta property="og:image" content="https://vdirectors.com/assets/og-image.jpg">
<meta property="og:url" content="https://vdirectors.com">
<meta name="twitter:card" content="summary_large_image">
```

산출물: `03_output.md` 덮어쓰기.
완료 후 `log.md` 기록: `2026-03-26 | 디자이너 | OG 이미지 스펙 작성 (4차) — ✅ 완료, 팀장 검토 대기`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 3차

### 기획자(3차) 확정 스펙 — 아래 5가지 CSS/JS 코드 전체 작성

#### 1. 커서 — mix-blend-mode: difference 단일 원으로 전면 교체

**현재 구조 (ring+dot) 완전 제거, 아래로 교체:**

```
.cursor-ball (단일 원)
  background: #ffffff
  mix-blend-mode: difference
  width: 28px / height: 28px
  border-radius: 50%
  pointer-events: none
  position: fixed
  z-index: 9999
  transform: translate(-50%, -50%)
  transition: width 0.4s var(--ease), height 0.4s var(--ease), opacity 0.3s ease
```

- `.on-link`: width/height 44px, opacity 0.7
- `.on-portfolio`: width/height 64px + "VIEW" 텍스트 (::after, 흰 배경에서 보이도록 color: #111 → blend-mode에 의해 자동 반전되므로 color: #fff 로)
- `body` 또는 `#cursorBall` 부모에 `isolation: isolate` **금지** — cursor 자체는 그대로 fixed
- JS: 기존 ring/dot 추적 코드 → `cursorBall` 단일 원 추적으로 교체 (lerp 0.12 유지)
- HTML: `<div class="cursor-ring" id="cursorRing"></div>` + `<div class="cursor-dot" id="cursorDot"></div>` → `<div class="cursor-ball" id="cursorBall"></div>` 단일 div로 교체

#### 2. 마르키 섹션 — 검정 배경 전환

```css
.marquee-section {
  background: #000;
  border-top: none;
  border-bottom: none;
}
.marquee-text {
  color: #fff;
  font-size: 15px;  /* 현재 11px → 15px */
}
.marquee-section .sep {
  color: #fff;
}
```

#### 3. 인트로 인용구 크기 확대

```css
.main-intro-quote {
  font-size: clamp(48px, 6.5vw, 96px);  /* 현재 clamp(32px, 4vw, 58px) */
  color: #000;
}
.main-intro .desc {
  color: #111;  /* 현재 #444 */
}
```

#### 4. 전체 텍스트 대비 강화 (CSS 변수 수정)

```css
:root {
  --g1: #111111;  /* 현재 #444444 */
  --g2: #555555;  /* 현재 #888888 */
}
.section-label {
  color: #000;
  font-weight: 700;  /* 유지 */
}
```

#### 5. 구분선 강화

```css
/* border에 var(--g4) 대신 아래 값으로 */
/* 전역 적용: style.css에서 border 사용하는 곳에 */
--g4: #cccccc;  /* 현재 #dddddd 수준에서 강화 */
```

---

## 요청 사항

위 1~5번에 대한 **CSS + JS 코드 전체** 작성 (`03_output.md`에 저장):

- **CSS**: style.css에 추가/교체할 스니펫 (위치 명시)
- **JS**: main.js에서 교체할 커서 코드 스니펫 (기존 ring/dot → cursorBall 단일 원)
- **HTML**: 모든 페이지 공통으로 교체할 cursor div 라인

### 코드 규칙
- vanilla JS, 라이브러리 없음
- 교체/추가 위치 명확히 명시 ("// 기존 커서 코드 대체" 등)
- mix-blend-mode가 작동하려면 parent에 isolation이 없어야 함 — 주석으로 주의사항 명시

---

## 산출물 형식

`03_output.md` 덮어쓰기.
완료 후 `log.md`에 기록: `2026-03-26 | 디자이너 | 커서/마르키/인트로/대비 CSS/JS (3차) — ✅ 완료, 팀장 검토 대기`

---

## ⬇️ 이전 지시 (참고용 — 이미 반영 완료)

### 현재 작업 요청 (팀장 지시 — 2026-03-26 / 2차)

### Boss 피드백
- "From Idea to Impact" 효과 약함
- Hero 헤드라인 스크램블 너무 정신없음 → 깔끔하게
- 커서 잘 안 보임

### 기획자(2차) 확정 스펙

#### 1. "From Idea to Impact" 레이블
- **단어별 stagger fade-up, 1회 재생 후 완전 정지 (루프 없음)**
- "From" / "Idea" / "to" / "Impact" 단어 단위로 순차 등장
- stagger 간격: 0.07s, 전체 완료: 0.5s 이내
- 완료 후 정지 (루프 애니메이션 제거)

#### 2. Hero 헤드라인 ("We Direct" / "Your Value.")
- **Clip-path 행별 리빌로 교체** (스크램블 제거)
- `clip-path: inset(100% 0 0 0)` → `inset(0% 0 0 0)` + `translateY(20px)` → `translateY(0)`
- Line 1 먼저, 0.15s 후 Line 2
- easing: `var(--ease)`, 전체 0.7s
- 현재 `.line.animated` + `scrambleText()` 전부 교체

#### 3. 커서 — 듀얼 커서로 교체
- **mix-blend-mode 완전 제거**
- **outer ring**: 32px, `border: 1.5px solid #111`, 투명 배경, 커서 위치에서 0.1s 지연
- **inner dot**: 6px, `background: #111`, 지연 없음 정확한 위치
- hover (링크/버튼): outer ring 48px로 확대 + opacity 0.5
- portfolio hover: outer ring 68px + "VIEW" 텍스트 (기존 on-portfolio 유지)
- HTML: `<div class="cursor-ring" id="cursorRing"></div>` + `<div class="cursor-dot" id="cursorDot"></div>` 로 교체

---

## 요청 사항

위 3가지에 대한 **CSS + JS 코드 전체** 작성:

### CSS
- `.cursor-ring`, `.cursor-dot` 스타일
- `.cursor-ring.on-link`, `.cursor-ring.on-portfolio` 상태
- `.cursor-ring.on-portfolio::after { content: 'VIEW' }` 텍스트
- `.hero-label` 단어별 stagger용 스타일 (기존 `rocketLabel` 키프레임 교체)
- `.line` clip-path 리빌 애니 (기존 `lineUp` 키프레임 교체)

### JS
- 기존 커서 코드 (bX/bY 추적 + animateCursor) → 듀얼 커서로 전면 교체
- outer ring에 0.1s 지연 추가 (`lerp` 또는 setTimeout 방식)
- inner dot은 즉시 이동
- 기존 `scrambleText()` 함수 및 DOMContentLoaded 내 scramble 호출 제거
- `.line.animated` clip-path 리빌로 교체
- "From Idea to Impact" 단어 split + stagger 적용

### 코드 규칙
- vanilla JS, 라이브러리 없이
- `js/main.js`에 추가될 스니펫 형태 (교체/추가 위치 명시)
- `css/style.css`에 추가될 스니펫 형태
- HTML 변경사항도 명시 (cursor-ball → cursor-ring + cursor-dot)

---

## 산출물 형식

`03_output.md` 덮어쓰기.
완료 후 `log.md`에 기록: `2026-03-26 | 디자이너 | Hero/커서 개선 CSS/JS (2차) — ✅ 완료, 팀장 검토 대기`
