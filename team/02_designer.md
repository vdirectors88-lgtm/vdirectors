# 디자이너 작업지시서 — Claude #2

> 🚨 **세션 시작 시 이 파일(`02_designer.md`) 전체를 반드시 다시 읽을 것.**
> 이전 대화 컨텍스트에 의존하지 말 것 — 파일이 업데이트되어 있을 수 있음.
> 작업 전 `README.md` 먼저 확인하세요.

---

## ⚠️ 보고 원칙 (팀장 지시 — 필수)

**작업 완료 후 반드시 팀장(Claude #1)에게 직접 보고해야 한다.**

- `log.md` 기록 + `02_output.md` 산출물 작성 후
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

## 🆕 현재 작업 요청 (팀장 지시 — 2026-03-26 / 19차)

### 사이트 최종 UI 품질 점검 + About 팀 소개 섹션 제안

두 파트 완료 후 `02_output.md` 덮어쓰기 후 보고.

---

#### A. 전체 사이트 최종 UI 점검

아래 파일 읽고 지금까지 반영된 모든 변경사항 기준으로 **놓친 디테일** 집중 점검:
- `css/style.css` / `css/detail.css`
- `index.html` / `about.html` / `services.html` / `portfolio.html` / `portfolio-detail.html`

**집중 체크:**
1. 새로 추가된 요소(contact-reply-badge, contact-phone, footer-tel, history 타임라인, 라이트박스 등)가 다크 배경 섹션에서 색 대비 문제 없는지
2. `@media (max-width: 480px)` 미처리 영역 — 새 요소들 모바일 확인
3. 애니메이션/transition 과하거나 중복된 것
4. 타이포그래피 일관성 — 새로 추가된 텍스트 요소들 font-size/weight/letter-spacing 시스템과 맞는지
5. 눈에 띄는 버그나 이상한 점 자유롭게

---

#### B. About — 팀/담당자 소개 섹션 디자인 제안

현재 about.html에 팀 소개 섹션 없음 — 4번 10차에서 "담당자 프로필 없음" 이슈로 지적됨.

`about.html` 읽고 현재 페이지 구조 파악 후:

1. **위치 제안** — 연혁(history) 섹션 앞 또는 코어밸류(value) 뒤 어디에 삽입하면 자연스러운지
2. **컴포넌트 구조** — 팀원 1명 카드의 HTML 구조 제안 (이름/역할/한 줄 소개 정도)
3. **디자인 스펙** — CSS 코드 (그리드, 카드, 호버 등) — 현재 디자인 시스템과 일관성
4. **내용** — 현재 알 수 있는 정보: 대표 손휘민. 나머지는 placeholder로 처리.

> ⚠️ 실제 팀원 정보/사진은 Boss가 추후 제공. 지금은 구조와 디자인만.

---

**산출물:** `02_output.md` 덮어쓰기. A/B 섹션 분리.
완료 후 `log.md` 기록 및 **팀장(Claude #1)에게 직접 보고**: `"디자이너 19차 완료 — 최종점검 + 팀소개 제안"`

---

## ⬇️ 이전 작업 요청 (완료 / 18차)

### Contact 성공 메시지 + 포트폴리오 상세 라이트박스 디자인 제안

두 파트 완료 후 `02_output.md` 덮어쓰기 후 보고.

---

#### A. Contact 폼 성공 메시지 디자인 개선

`js/main.js`에서 현재 성공 상태 HTML 확인:
```js
contactForm.innerHTML = `
  <div class="form-success-state">
    <span class="form-success-icon">✓</span>
    <p class="form-success-title">감사합니다!</p>
    <p class="form-success-desc">문의가 접수되었습니다.<br>빠른 시간 내에 연락드리겠습니다.</p>
  </div>`;
```
`css/style.css`에서 `.form-success-state` 현재 스타일도 확인.

**개선 방향:**
- 현재 성공 화면이 너무 단순 → 브랜드 감성에 맞게 세련되게
- ✓ 아이콘 → 애니메이션 효과 (scale + fade-in)
- 다음 행동 유도: "인스타그램 팔로우" 대신 "포트폴리오 보러가기" 링크 또는 "다른 문의하기" (새 폼 리셋 버튼)
- "빠른 시간 내에 연락드리겠습니다" → "영업일 1일 내 연락드리겠습니다" 문구 개선

**산출물:** 개선된 HTML 구조 + CSS 애니메이션 코드 (개발자가 main.js + style.css에 반영할 수 있도록)

---

#### B. 포트폴리오 상세 — 라이트박스 UX 제안

`css/detail.css` + `js/detail.js` + `portfolio-detail.html` 읽고:

현재 상세 이미지는 세로 스크롤로만 볼 수 있음 (클릭해도 아무 반응 없음).
라이트박스(클릭 시 이미지 전체화면 팝업 + 좌우 화살표 이동)가 있으면 UX 대폭 향상.

**제안할 것:**
1. **CSS만으로 구현 가능한 간단한 라이트박스 스펙** — overlay + img 클릭 시 팝업
2. 순수 JS로 라이트박스 구현 코드 (외부 라이브러리 없이 — 사이트 정책상 CDN 최소화)
3. 닫기(×) 버튼 + 배경 클릭 닫기 + ESC 키 닫기
4. 모바일에서는 스와이프 또는 탭 닫기

**산출물:** CSS 블록 + JS 함수 코드 스니펫 (detail.css / detail.js에 추가할 수 있도록)

---

**산출물:** `02_output.md` 덮어쓰기. A/B 섹션 분리.
완료 후 `log.md` 기록 및 **팀장(Claude #1)에게 직접 보고**: `"디자이너 18차 완료 — 성공메시지 + 라이트박스 제안"`

---

## ⬇️ 이전 작업 요청 (완료 / 17차)

### portfolio-detail.html 디자인 점검 + Contact 섹션 전환율 개선 제안

두 파트 모두 완료 후 한 번에 `02_output.md`에 작성. 보고.

---

#### A. portfolio-detail.html 디자인 점검

`portfolio-detail.html` + `css/detail.css` + `js/detail.js` 읽고:

1. **레이아웃 흐름** — 상세 이미지 영역, 프로젝트 정보(이름/카테고리/태그), 뒤로가기 버튼 배치가 시각적으로 자연스러운지
2. **타이포그래피** — 폰트 크기 계층 (제목/서브/본문), 현재 사이트 design system과 일관성
3. **디테일 이미지 그리드** — 단일 컬럼인지, 2열 그리드가 더 나은지
4. **빈 상태(이미지 없을 때)** — 대체 UI 있는지
5. **모바일** — 768px / 480px에서 깨질 가능성
6. 개선 CSS 스니펫 포함해서 작성

---

#### B. Contact 섹션 전환율 개선 제안

`index.html` Contact 섹션 + `css/style.css` Contact 관련 블록 읽고:

1. **현재 폼 구성** — 입력 필드 배치, 제출 버튼, 레이블 가독성
2. **신뢰도 요소** — 섹션 내에 "빠른 회신", 연락처, 주소 등 안내 있는지
3. **모바일 전환** — 모바일에서 폼이 사용하기 편한지 (입력 타겟, 키보드 여백)
4. **개선 제안** — 전환율 높이는 작은 변화 2~3가지 (예: 입력 순서 변경, CTA 문구, 폼 성공 메시지 개선 등)
5. 개선 CSS/HTML 스니펫 포함

---

**산출물:** `02_output.md` 덮어쓰기. A/B 섹션 나눠서 이슈 + 코드 스니펫.
완료 후 `log.md` 기록 및 **팀장(Claude #1)에게 직접 보고**: `"디자이너 17차 완료 — portfolio-detail + Contact 점검"`

---

## ⬇️ 이전 작업 요청 (완료 / 16차)

### about.html 주요 연혁 디자인 개선안 작성

현재 연혁 구조:
```
연도(history-year) | 월(history-month) + 내용(history-desc)
```

Boss 피드백: "너무 밋밋하다" — 시각적으로 더 생동감 있게 개선 필요.

`about.html`과 `css/style.css`의 `.history-section` 블록 읽고 개선안 제시.

**방향 제안 (참고용, 더 나은 아이디어 있으면 제안):**
- 연도 왼쪽에 세로 타임라인 라인 + 이벤트 점(dot) 추가
- 연도 텍스트 크게, 이벤트 항목은 라인 아래 들여쓰기
- 호버 시 이벤트 행 하이라이트
- 연도 간 구분감 강화 (선 or 배경 컬러 차이)

**산출물:** `02_output.md`에 개선된 HTML 구조 + CSS 전체 코드.
완료 후 `log.md` 기록 및 **팀장(Claude #1)에게 직접 보고**.

---

## ⬇️ 이전 작업 요청 (완료 / 14차)

### 폰트 사이즈 + 모바일 반응형 전체 점검

`css/style.css` + 전체 HTML 파일 읽고 아래 두 가지 집중 점검.

---

#### A. PC 폰트 사이즈 점검

Boss 피드백: "PC로 봤을 때 폰트가 너무 작아 보이는 부분이 꽤 있다"

- 본문 텍스트 (p, li, desc 류) — 14px 이하인 곳 전부 체크
- section-label, card-eyebrow, hint 류 작은 텍스트 — 가독성 적정한지
- 서비스 카드, 포트폴리오 오버레이, 푸터, About 연혁 등 세부 영역
- 각 항목마다 현재 사이즈 → 권장 사이즈 제안

#### B. 모바일 반응형 점검 (`@media` 768px / 480px 블록 기준)

- 각 섹션 모바일에서 폰트 크기 적정한지 (너무 작거나 너무 큰 곳)
- 여백(padding/margin)이 모바일에서 너무 좁거나 넓은 곳
- 레이아웃 깨질 가능성 있는 곳 (grid→1열 전환 누락 등)
- 버튼/링크 탭 영역이 너무 작은 곳 (모바일 터치 기준 최소 44px)

**산출물:** `02_output.md`에 이슈 리스트 + 수정 CSS 스니펫 (파일명/선택자/현재값→제안값 형식).
완료 후 `log.md` 기록 및 **팀장(Claude #1)에게 직접 보고**.

---

## ⬇️ 이전 작업 요청 (완료 / 13차)

### 사이트 전체 UI/UX 점검 — 디자이너 관점

아래 파일들을 **직접 읽고** 현재 코드 기준으로 디자인/UX 문제점과 개선 포인트를 분석해서 보고.

**점검 파일:**
- `css/style.css` — 전체 디자인 시스템, 여백, 컬러, 타이포
- `index.html` — Hero, 마르키, 인트로, 포트폴리오 그리드, Contact
- `about.html` — 흐름, 계층 구조
- `services.html` — 서비스 카드 레이아웃, 정보 구조
- `portfolio.html` — 필터, 그리드, TRUSTED BY

**점검 항목:**
1. 섹션 간 여백/리듬 일관성 — 너무 좁거나 넓은 곳 있는지
2. 타이포그래피 계층 — h1/h2/p/label 크기 차이가 명확한지
3. 컬러 대비 — 텍스트 가독성 문제 있는 곳
4. 모바일 레이아웃 (@media 768px/480px 블록 기준) — 깨지거나 어색한 곳
5. 인터랙션 — 호버, 트랜지션 미흡한 곳
6. 기타 눈에 띄는 디자인 이슈 자유롭게

**산출물:** `02_output.md`에 번호 매긴 이슈 리스트 + 개선 제안 (CSS 스니펫 포함).
완료 후 `log.md` 기록 및 **팀장(Claude #1)에게 직접 보고**.

---

## ⬇️ 이전 작업 요청 (완료 / 12차)

### A. 커스텀 커서 CSS 설계

**요구사항:**
- 멋있는 화살표 커서 (기본 OS 화살표보다 세련된 느낌)
- 절대 사라지지 않을 것
- 속도 자연스러울 것 (느리지 않게)

**구현 방향 — CSS `cursor: url()` 방식:**
OS 레벨 커서라 절대 사라지지 않고 속도도 네이티브. JS 의존 없음.

SVG 인라인 데이터 URI로 커서 정의:
```css
html, * {
  cursor: url("data:image/svg+xml,...") 4 4, auto;
}
a, button, [role="button"], .filter-btn, .portfolio-item, .client-logo {
  cursor: url("data:image/svg+xml,...") 4 4, pointer;
}
```

**커서 디자인 스펙:**
- 크기: 22×22px 뷰포트
- 형태: 클래식 화살표이되 라인이 얇고 각진 미니멀 스타일
- 색상: fill `#111`, stroke `#fff` 1px (어두운/밝은 배경 모두 대비 확보)
- hotspot: 화살표 팁 기준 (0,0) 또는 (2,2)

SVG path 예시 (참고용, 더 세련되게 수정 가능):
```
M 3 1 L 3 17 L 7 13 L 11 20 L 13.5 18.8 L 9.5 11.8 L 15 11.8 Z
```

**산출물:** `02_output.md`에 완성된 CSS 코드 (SVG 인코딩 포함). `style.css`의 `:root` 바로 아래에 삽입할 수 있게 작성.

### B. Admin 카테고리 복수선택 시각적 피드백 강화

**현재 CSS (`admin.css`):**
```css
.check-item input[type="checkbox"]:checked + span {
  background: var(--black);
  border-color: var(--black);
  color: var(--white);
}
```

선택됐을 때 검정 배경/흰 글씨인데 Boss가 "시각적으로 했는지 알 수 없다"고 함.
더 명확하게 인식되는 스타일로 개선안 제시. 예:
- 체크 아이콘(✓) 앞에 추가
- 선택 시 scale 살짝 키우기
- 배경 강조 + box-shadow 추가
- 또는 선택된 항목 상단 별도 요약 표시

`admin.css`의 해당 블록 교체 코드로 산출물 작성.

완료 후 `log.md` 기록 및 **팀장(Claude #1)에게 직접 보고**.

---

## ⬇️ 이전 작업 요청 (완료 / 11차)

### 전체 UI/UX 능동 점검

PM이 Boss 피드백 기반으로 사이트 전체를 점검해달라는 요청.
아래 파일들을 **직접 읽고** 현재 코드 기준으로 UX/UI 문제 및 개선 포인트를 분석해서 보고.

**점검 범위:**
- `index.html` + `css/style.css` — Hero, About 인트로, 포트폴리오 그리드, Contact 폼
- `about.html` — 페이지 흐름, 정보 계층
- `services.html` — 서비스 카드, 프로세스 섹션
- `portfolio.html` — 필터, 그리드, TRUSTED BY 섹션
- 모바일 반응형 전반 (style.css @media 블록 기준)

**우선 체크 항목:**
1. 각 섹션 간 여백/리듬이 일관성 있는지
2. 빈 필터 카테고리 (프로그램/마케팅/영상제작) — 빈 결과 UX
3. Contact 폼 → 전송 후 다음 액션 유도 (SNS, 전화 등)
4. 모바일에서 portfolio 필터 버튼 overflow 여부
5. 기타 눈에 띄는 문제

**산출물 형식:** `02_output.md`에 번호 매긴 이슈 리스트 + 수정 제안 (CSS 코드 포함).
완료 후 `log.md` 기록 및 **팀장(Claude #1)에게 직접 보고**.

---

## ⬇️ 이전 작업 요청 (완료 / 10차)

### Admin 클라이언트 로고 관리 섹션 UI CSS

**배경:** Admin 페이지에 clients(클라이언트 로고) 관리 탭 기능을 새로 추가할 예정. 개발자가 HTML/JS를 붙이기 전에 디자이너가 CSS 스타일을 먼저 설계.

**작업 범위:** `css/admin.css` 파일에 아래 클래스들의 스타일 추가.

**필요한 UI 구성:**
```
[클라이언트 탭 버튼] — 상단 탭에서 포트폴리오 ↔ 클라이언트 전환
[클라이언트 그리드] — 현재 등록된 로고들을 5열 썸네일 그리드로 표시
[로고 카드] — 로고 이미지 + 삭제 버튼 오버레이 + 순서 번호
[업로드 영역] — 드래그&드롭 또는 파일 선택 버튼 (점선 테두리 스타일)
```

**클래스명 (개발자와 협의된 이름):**
- `.admin-tabs` — 탭 컨테이너 (포트폴리오 | 클라이언트)
- `.admin-tab-btn` — 탭 버튼 (`.active` 상태 포함)
- `.clients-admin-grid` — 로고 썸네일 그리드 (5열)
- `.client-logo-card` — 로고 카드 (이미지 + 삭제 오버레이)
- `.client-logo-card .delete-overlay` — 호버 시 나타나는 삭제 버튼
- `.clients-upload-zone` — 드래그&드롭 업로드 영역

**디자인 방향:**
- 기존 admin 스타일과 통일 (var(--admin-border), 폰트 등)
- 로고 카드: 흰 배경, 1px border, 100px 높이 셀, 호버 시 삭제 버튼 노출
- 업로드 영역: 점선 border-dashed, 클릭/드래그 영역 표시

`css/admin.css` 현재 스타일 먼저 확인 후 기존 패턴에 맞게 작성.
산출물: `02_output.md` 덮어쓰기.
완료 후 `log.md` 기록 및 **팀장(Claude #1)에게 직접 보고**.

---

## ⬇️ 이전 작업 요청 (완료 / 9차)

### Impact 단어 shimmer (빛 스치는 효과) CSS 교체

**배경:** heartbeat(scale 호흡) 적용해봤는데 티가 거의 안 남 → shimmer로 교체.

**방향:** Impact 단어 위로 밝은 빛이 왼→오로 스윽 지나가는 효과. 글자는 움직이지 않지만 살아있는 느낌. 고급스럽고 절제된 인터랙션.

**구현 방법 — background-clip 방식:**
```css
@keyframes impactShimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}

.hero-label .word-impact {
  /* wordImpact 로켓 착지 유지 */
  animation:
    wordImpact    0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 1.4s both,
    impactShimmer 3.5s linear 2.1s infinite;

  /* shimmer 색상 — 검정 텍스트 위 회색 빛 */
  background: linear-gradient(
    90deg,
    var(--black) 35%,
    #888        50%,
    var(--black) 65%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**주의사항:**
- `-webkit-text-fill-color: transparent` 적용 시 기존 `color` 속성 무효화됨 — 색상은 gradient로만 제어
- 밝기 조절: `#888` → `#aaa` 하면 더 밝은 shimmer, `#666` 하면 더 은은한 shimmer
- 3.5s 간격이 너무 잦으면 5s로 조정 가능 — 수치 제안 포함해서 산출물 작성

산출물: `02_output.md` 덮어쓰기.
완료 후 `log.md` 기록 및 **팀장(Claude #1)에게 직접 보고**.

---

## ⬇️ 이전 작업 요청 (완료)

## 이전 작업 요청 (팀장 지시 — 2026-03-26 / 8차)

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
