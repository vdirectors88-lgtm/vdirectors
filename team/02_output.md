# 기획자 산출물 — Claude #2

> 최종 업데이트: 2026-03-27 (24차 — 최종 UX/디자인 점검)

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

> ✅ 개발자 반영 대기 중

---

---

# 24차 — 최종 UX/디자인 점검 결과

**점검 범위:** `index.html`, `about.html`, `services.html`, `portfolio.html`, `portfolio-detail.html`, `css/style.css`

---

## 🟡 I. portfolio-item stagger delay — 10~12번째 카드 누락

**파일:** `css/style.css`

**문제:**
- `portfolio-item:nth-child(1~9)` delay만 정의 (line 730~738)
- 메인 페이지는 최대 12개 표시 → 10~12번째 카드 delay 없이 즉시 표시됨 → stagger 효과 불완전

**수정:**
```css
.portfolio-item:nth-child(10) { --delay: 0.45s; }
.portfolio-item:nth-child(11) { --delay: 0.5s;  }
.portfolio-item:nth-child(12) { --delay: 0.55s; }
```

---

## 🟡 J. portfolio.html `etc` 카테고리 필터 버튼 없음

**파일:** `portfolio.html`, `js/main.js`

**문제:**
- `main.js` catLabel에 `etc: '기타'` 정의됨
- Admin 카테고리 체크박스에 `기타(etc)` 선택 가능
- `portfolio.html` 필터 버튼에 `etc` 없음 → 기타 카테고리 항목 개별 필터 불가

**수정:**
```html
<!-- portfolio.html 필터 버튼에 추가 -->
<button class="filter-btn" data-filter="etc">기타</button>
```

---

## 🟢 K. style.css dead CSS 3개 블록

**파일:** `css/style.css`

**문제 — 삭제 대상:**

| 셀렉터 | 이유 |
|--------|------|
| `#about { }` + `.about-quote`, `.quote-*`, `.about-grid`, `.about-body` (line 452~) | index.html에 `id="about"` 섹션 없음. about.html은 별도 클래스 사용. |
| `.modal-img-wrap`, `.modal-info` (line 1887~1888) | 포트폴리오 모달 폐기 후 잔존 |
| `.insta-fab` + `.insta-fab.*` (line 1892~1927) | 전체 HTML 파일 어디에도 `.insta-fab` 요소 없음 |

> ⚠️ `#about` 블록은 `.about-body` / `.about-values` 등 포함 — 삭제 전 about.html 전용 CSS와 혼재 여부 재확인 필요. `.about-body`는 about.html에서 사용 중 (line 1519에 재정의됨).

---

## 🟢 L. style.css `.about-body` 중복 정의

**파일:** `css/style.css`

**문제:**
- line 487: `.about-body { font-size: 16px; }`
- line 1519: `.about-body { font-size: 17px; }` (재정의 → 덮어씀)
- 두 블록 병합 후 하나로 정리 권고

---

## 🟢 M. portfolio.html — Contact 유도 없음

**현황:** Clients 섹션 이후 바로 Footer → 포트폴리오를 본 사용자에게 문의로 이어지는 동선 없음.

**권고:** Clients 섹션과 Footer 사이에 `.page-cta` 블록 추가 (services.html과 동일 패턴).

---

## 반영 범위 (24차)

| 우선순위 | 항목 | 파일 | 범위 |
|----------|------|------|------|
| 🟡 권고 | portfolio-item stagger delay 10~12 추가 | `css/style.css` | 3줄 |
| 🟡 권고 | `etc` 카테고리 필터 버튼 추가 | `portfolio.html` | 1줄 |
| 🟢 권고 | dead CSS 3블록 삭제 (`#about` 영역 주의) | `css/style.css` | 다수 |
| 🟢 권고 | `.about-body` 중복 정리 | `css/style.css` | 1블록 |
| 🟢 권고 | portfolio.html page-cta 추가 | `portfolio.html` | 5줄 |
