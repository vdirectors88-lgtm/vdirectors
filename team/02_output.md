# 기획자 산출물 — Claude #2

> 최종 업데이트: 2026-03-26 (23차 — 사이트 전체 버그 스캔)

---

## A. 포트폴리오 카드 — 오버레이 밝은 회색으로 교체

**파일:** `css/style.css`

**현재:**
```css
.portfolio-overlay {
  background: rgba(10, 10, 10, 0.86);
}
.overlay-cat  { color: …; }   /* 흰 텍스트 계열 */
.overlay-name { color: …; }
```

**교체:**
```css
.portfolio-overlay {
  background: rgba(248, 248, 248, 0.93);  /* var(--g6) 계열 */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* 텍스트 — 흰색 → 검정 계열로 전환 */
.overlay-cat  {
  color: var(--g2);
}
.overlay-name {
  font-size: 15px;
  font-weight: 700;
  color: var(--black);
  letter-spacing: -0.01em;
}
.overlay-tags span {
  color: var(--g2);
  border-color: var(--g4);
}
```

---

## B. Process 섹션 — 그리드 구분선 + 호버 가시성 개선

**파일:** `css/style.css`

**현재:**
```css
.process-steps { background: #1a1a1a; }   /* 구분선 — 안 보임 */
.process-step:hover { background: #181818; }  /* 효과 없음 */
```

**교체:**
```css
.process-steps { background: #2a2a2a; }
.process-step:hover { background: #1e1e1e; }
```

---

## C. Contact — 인스타그램 링크 제거

**파일:** `index.html`

**제거 대상 — 아래 블록 전체 삭제:**
```html
<a href="https://instagram.com/vdirectors" target="_blank" rel="noopener" class="contact-insta" aria-label="인스타그램">
  <svg ...>...</svg>
  Instagram
</a>
```

**CSS도 함께 정리** (`css/style.css`):
```css
/* 아래 블록 삭제 */
.contact-insta { ... }
.contact-insta:hover { ... }
```

---

## 반영 범위 (22차)

| 우선순위 | 항목 | 파일 | 범위 |
|----------|------|------|------|
| 🔴 즉시 | Contact 인스타 링크 + CSS 제거 | `index.html` + `css/style.css` | HTML 5줄 + CSS 2블록 |
| 🔴 즉시 | 포트폴리오 오버레이 배경 + 텍스트 색 | `css/style.css` | ~6줄 |
| 🟡 권고 | Process 그리드/호버 색상 | `css/style.css` | 2줄 |

> ✅ 40차(개발자)에서 전부 반영 완료

---

---

# 23차 — 사이트 전체 버그 스캔 결과

**스캔 범위:** `index.html`, `about.html`, `services.html`, `portfolio.html`, `portfolio-detail.html`, `admin.html` / `js/main.js`, `js/detail.js`, `js/admin.js`, `js/transitions.js` / `css/style.css`, `css/detail.css`, `css/admin.css`

---

## 🔴 D. admin.css — 클라이언트 삭제 버튼 CSS 클래스 불일치

**파일:** `css/admin.css`

**문제:**
- `admin.js` `renderClientCard()` → `<button class="client-delete-btn">✕</button>` 생성
- `admin.css` line 823 → `.delete-overlay .btn-delete { }` / `.delete-overlay .btn-delete:hover { }` 정의
- `client-delete-btn` 에 대한 CSS 없음 → 삭제 버튼 hover 스타일(빨간 배경 + transform) 미적용

**수정:**
```css
/* 기존 */
.delete-overlay .btn-delete { ... }
.delete-overlay .btn-delete:hover { ... }

/* 교체 */
.delete-overlay .client-delete-btn { ... }
.delete-overlay .client-delete-btn:hover { ... }
```

---

## 🟡 E. portfolio.html video 카테고리 필터 텍스트 불일치

**파일:** `portfolio.html`, `js/main.js`

**문제:**
- `portfolio.html` line 59: 필터 버튼 텍스트 `영상제작`
- `main.js` line 170: `catLabel = { video: '동영상' }` → 카드 오버레이 표기 `동영상`
- 필터 버튼과 카드 표기가 달라 사용자 혼동 가능

**수정 (둘 중 하나 통일):**
```js
// main.js catLabel — 권고: 필터 버튼에 맞춰 변경
video: '영상제작'
```

---

## 🟡 F. hero-scroll-hint dead CSS

**파일:** `css/style.css`

**문제:**
- `style.css`에 `.hero-scroll-hint` 스타일 블록 존재 (line 379 + 1847 + 1862)
- `index.html` 어디에도 해당 HTML 요소 없음
- 쓸모없는 CSS 3개 블록 잔존

**수정:** style.css에서 `.hero-scroll-hint` 관련 규칙 전체 삭제

---

## 🟢 G. footer-copy 오진 정정

**사항:** 이전 UI/UX 검토(22차 보고)에서 "`about.html`, `services.html` footer JS 연결 없음"으로 보고했으나 **오진**.

- `main.js` line 392: `document.querySelector('.footer-copy').textContent = ...` 코드 존재 ✅
- `about.html`, `services.html`, `portfolio.html` 모두 `<script src="js/main.js">` 로드 중 ✅
- 실제 footer-copy 는 정상 작동. 이전 보고 철회.

---

## 🟢 H. admin.css .btn-delete dead CSS

**파일:** `css/admin.css`

**문제:** `.delete-overlay .btn-delete` + `:hover` CSS 정의(line 823~842)가 있으나 D항 수정 전까지는 실제로 적용된 HTML 요소 없음 → dead CSS

**수정:** D항 클래스명 교체 시 함께 처리됨.

---

## 반영 범위 (23차)

| 우선순위 | 항목 | 파일 | 범위 |
|----------|------|------|------|
| 🔴 즉시 | admin.css `.btn-delete` → `.client-delete-btn` 교체 | `css/admin.css` | 2줄 |
| 🟡 권고 | video catLabel `'동영상'` → `'영상제작'` | `js/main.js` | 1줄 |
| 🟡 권고 | hero-scroll-hint dead CSS 삭제 | `css/style.css` | 3블록 |
| 🟢 참고 | footer-copy 이전 보고 오진 정정 — 실제 정상 작동 | — | — |
