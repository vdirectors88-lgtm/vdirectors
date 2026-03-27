# 어시스턴트 산출물 — 6차 (전체 HTML 일관성 감사 + cl 이미지 확인)

> 작성일: 2026-03-26

---

## A. cl_01~25 이미지 파일 존재 여부

**실제 파일 경로:** `assets/clients/`

| 결과 | 내용 |
|------|------|
| ✅ cl_01.png ~ cl_25.png | 25개 전부 존재 |

### ⚠️ 경로 불일치 — 개발자 확인 필요

`portfolio.html`의 정적 폴백 코드(line 119)가 아래 경로를 참조:
```
assets/portfolio/img/cl_01.png ~ cl_25.png
```
하지만 실제 파일 위치:
```
assets/clients/cl_01.png ~ cl_25.png
```
→ Supabase `clients` 테이블에 데이터가 없을 때 폴백이 깨짐. 경로 수정 또는 파일 이동 필요.

---

## B. 전체 HTML 페이지 일관성 감사

### 1. nav 링크

| 페이지 | ABOUT | SERVICES | PORTFOLIO | CONTACT |
|--------|-------|----------|-----------|---------|
| index.html | about.html ✅ | services.html ✅ | portfolio.html ✅ | #contact ✅ |
| about.html | about.html ✅ | services.html ✅ | portfolio.html ✅ | index.html#contact ✅ |
| services.html | about.html ✅ | services.html ✅ | portfolio.html ✅ | index.html#contact ✅ |
| portfolio.html | about.html ✅ | services.html ✅ | portfolio.html ✅ | index.html#contact ✅ |
| portfolio-detail.html | about.html ✅ | services.html ✅ | portfolio.html ✅ | index.html#contact ✅ |

> index.html의 CONTACT는 `#contact` (같은 페이지 앵커) — 정상.

**결과: 5개 페이지 모두 일치 ✅**

---

### 2. footer (대표 손휘민 · 사업자등록번호 713-81-02573 · Tel)

| 페이지 | 대표 손휘민 | 사업자등록번호 713-81-02573 | Tel |
|--------|:---------:|:------------------------:|:---:|
| index.html | ✅ | ✅ | ✅ |
| about.html | ✅ | ✅ | ✅ |
| services.html | ✅ | ✅ | ✅ |
| portfolio.html | ✅ | ✅ | ✅ |
| portfolio-detail.html | ✅ | ✅ | ✅ |

**결과: 5개 페이지 모두 일치 ✅**

---

### 3. 인스타 fab 버튼

| 페이지 | 존재 여부 | 비고 |
|--------|:-------:|------|
| index.html | ✅ | JS로 스크롤 200px 후 visible — 다른 페이지와 동작 다름 |
| about.html | ✅ | 처음부터 visible 클래스 |
| services.html | ✅ | 처음부터 visible 클래스 |
| portfolio.html | ✅ | 처음부터 visible 클래스 |
| portfolio-detail.html | ✅ | 처음부터 visible 클래스 |

**결과: 전 페이지 존재 ✅**
> index.html만 스크롤 트리거 방식 — 설계 의도로 보이나 팀장 확인 권장.

---

### 4. Supabase 스크립트 (필요한 페이지에만 포함됐는지)

| 페이지 | Supabase 포함 | 적절성 | 이유 |
|--------|:------------:|:------:|------|
| index.html | ✅ 포함 | ✅ 적절 | 포트폴리오 그리드 Supabase 로드 |
| about.html | ❌ 없음 | ✅ 적절 | DB 불필요 |
| services.html | ❌ 없음 | ✅ 적절 | DB 불필요 |
| portfolio.html | ✅ 포함 | ✅ 적절 | 포트폴리오 + 클라이언트 로고 |
| portfolio-detail.html | ✅ 포함 | ✅ 적절 | 상세 이미지 로드 |

**결과: 모두 올바름 ✅**

---

### 5. scrollProgress div

| 페이지 | 존재 여부 |
|--------|:-------:|
| index.html | ✅ |
| about.html | ✅ |
| services.html | ✅ |
| portfolio.html | ✅ |
| portfolio-detail.html | ✅ |

**결과: 전 페이지 존재 ✅**

---

## 요약 — 불일치 항목

| # | 항목 | 심각도 | 내용 |
|---|------|:------:|------|
| 1 | cl 이미지 경로 불일치 | 🔴 버그 | portfolio.html 폴백이 `assets/portfolio/img/cl_*.png` 참조 → 실제 위치는 `assets/clients/` |
| 2 | index.html FAB 동작 차이 | 🟡 확인 | index.html만 스크롤 후 노출, 나머지는 항상 노출 |

나머지 nav/footer/Supabase/scrollProgress 항목은 전부 일치.

---

---

# 어시스턴트 산출물 — 18차 (JS 동작·모바일 인터랙션 통합 점검)

> 작성일: 2026-03-27

---

## 18차 점검 결과

### 발견된 버그

| 항목 | 위치 | 내용 | 심각도 |
|------|------|------|:------:|
| A | `js/detail.js` | 모바일 메뉴 `orientationchange` 핸들러 누락 — 화면 회전 시 메뉴가 열린 채로 남아 body scroll lock 유지됨 | 🔴 |
| B | `js/detail.js` | 라이트박스 터치 스와이프 미지원 — 모바일에서 이미지 전환/닫기 방법이 버튼 탭뿐 | 🟡 |
| C | `css/style.css` | `html { scroll-behavior: smooth }` — iOS 15.3 이하 Safari 미지원 (JS smooth scroll은 정상 작동하나 CSS smooth scroll 미지원 버전 존재) | 🟡 |
| D | `css/style.css` | `#hero { min-height: 100vh }` — iOS Safari 주소창 포함 시 100vh가 실제 뷰포트보다 크게 계산됨 (스크롤 발생 가능) | 🟡 |
| E | `js/main.js:131` | `bidiObserver rootMargin: '0px 0px -60px 0px'` — 모바일 소형 기기(360px)에서 하단 -60px 마진이 뷰포트 대비 커서 `.reveal-bidi` 요소가 뷰포트에 들어와도 트리거 안 될 수 있음 | 🟡 |

---

### 즉시 수정된 JS 버그 (이번 차수에 직접 반영)

#### 1. `detail.js` — `orientationchange` 핸들러 추가 (🔴 버그 수정)

`js/main.js`에는 구현되어 있으나 `js/detail.js`(portfolio-detail.html에서 사용)에 누락된 핸들러 추가:

```js
window.addEventListener('orientationchange', () => {
  mobileMenu.classList.remove('active');
  mobileBtn.classList.remove('active');
  document.body.style.overflow = '';
});
```

#### 2. `detail.js` — 라이트박스 터치 스와이프 지원 추가 (🟡 개선)

좌우 스와이프 40px 이상 → 이미지 전환, 아래 스와이프 60px 이상 → 닫기:

```js
// touchstart/touchend passive 이벤트 리스너 추가
// dx > 40 → 이미지 좌우 전환
// dy > 60 → 라이트박스 닫기
```

---

### 정상 확인 항목

| 항목 | 결과 | 비고 |
|------|:----:|------|
| A. reveal threshold (0.08) | ✅ | 모바일에서 적절한 낮은 threshold |
| A. reveal rootMargin (-40px) | ✅ | 소형 기기에도 무방한 수준 |
| A. 페이지 진입 시 이미 노출 요소 | ✅ | IntersectionObserver 초기 실행 시 자동 트리거 |
| B. main.js 모바일 메뉴 scroll lock | ✅ | open 시 `overflow:hidden`, close 시 해제 |
| B. main.js 메뉴 링크 클릭 후 닫힘 | ✅ | forEach 리스너 정상 |
| B. main.js orientationchange | ✅ | 구현되어 있음 |
| B. mobile-menu position:fixed + inset:0 | ✅ | 전체화면 커버 |
| C. 라이트박스 body scroll lock | ✅ | open/close 시 overflow 토글 |
| D. Contact input font-size | ✅ | `.card-field input/textarea` 기본 16px — iOS 자동 줌인 없음 |
| D. 폼 제출 success 상태 | ✅ | SVG 체크 + .form-success-state CSS 정상 |
| E. scrollProgress 모바일 | ✅ | passive scroll, docHeight 계산 정상 |
| E. nav scrolled 클래스 | ✅ | passive scroll, 60px threshold |
| E. JS smooth scroll | ✅ | `window.scrollTo({ behavior:'smooth' })` — 모든 브라우저 지원 |
| E. hero parallax 성능 | ✅ | passive, `scrollY < innerHeight` 가드로 히어로 구간에서만 실행 |
| E. 마우스 패럴랙스 모바일 | ✅ | mousemove 이벤트 — 터치 기기에서 미발동, 무해 |
| F. backdrop-filter webkit | ✅ | `-webkit-backdrop-filter` 함께 선언 |
| F. nav/footer safe-area-inset | ✅ | `env(safe-area-inset-top/bottom)` 적용 |
| F. 터치 기기 커스텀 커서 비활성화 | ✅ | `@media (pointer: coarse)` cursor:auto |

---

### 개발자(#3) 반영 필요 사항 — CSS

1. **`#hero min-height: 100svh` 대응 (iOS 주소창 이슈)**
   - 현재: `min-height: 100vh`
   - 권장: `min-height: 100svh` (small viewport height — iOS 주소창 포함 최소 높이) + 구형 브라우저 폴백으로 `min-height: 100vh` 앞에 유지
   ```css
   #hero {
     min-height: 100vh;           /* fallback */
     min-height: 100svh;          /* iOS Safari 15.4+ */
   }
   ```

2. **`bidiObserver rootMargin -60px` 소형 기기 조정 (선택)**
   - JS 수정 사항: `rootMargin: '0px 0px -60px 0px'` → `'0px 0px -20px 0px'`으로 완화 권고
   - 영향 범위: `.reveal-bidi` 요소가 있는 섹션 (services alternating 등)
   - 현재 서비스 상 무해하나 360px 이하 기기에서 마지막 카드 미노출 가능성 있음
