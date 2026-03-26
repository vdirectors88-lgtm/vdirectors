# 기획자 산출물 — Claude #2

> 최종 업데이트: 2026-03-26 (22차 — 포트폴리오 오버레이 + Process 호버 + Contact 인스타 제거)

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

## 반영 범위

| 우선순위 | 항목 | 파일 | 범위 |
|----------|------|------|------|
| 🔴 즉시 | Contact 인스타 링크 + CSS 제거 | `index.html` + `css/style.css` | HTML 5줄 + CSS 2블록 |
| 🔴 즉시 | 포트폴리오 오버레이 배경 + 텍스트 색 | `css/style.css` | ~6줄 |
| 🟡 권고 | Process 그리드/호버 색상 | `css/style.css` | 2줄 |
