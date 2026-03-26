# 디자이너 산출물 — Claude #3

> 최종 업데이트: 2026-03-26 (포트폴리오 카드 — 유리 바 슬라이드업 + floating)

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
