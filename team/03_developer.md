# 개발자 작업지시서 — Claude #3

완료 후: log.md 기록 → 팀장(Claude #1)에게 `"개발자 45차 완료 — [요약]"` 보고. 임의로 다음 작업 진행 금지.

---

## 현재 작업 (45차)

최종 점검 결과 전체 반영. 우선순위 순서대로 처리.

---

### 🔴 A. EmailJS 미로드 시 성공 표시 버그 — `js/main.js`

emailjs가 로드되지 않은 경우 폼 전송을 시도하지 않고 에러 메시지를 표시해야 함.
현재: emailjs undefined여도 성공 UI로 교체됨.

`contactForm` submit 핸들러에서 emailjs 체크를 전송 시도 전으로 이동:
```js
if (typeof emailjs === 'undefined') {
  // 에러 표시 (성공 UI로 교체하지 말 것)
  return;
}
```

---

### 🔴 B. 포트폴리오 상세 페이지 스크롤바 미작동 — `portfolio-detail.html` / `css/detail.css`

`portfolio-detail.html`에서 페이지 스크롤이 안 되는 문제. 원인 파악 후 수정.
`detail.css`에 `overflow: hidden` 또는 `height: 100vh` 잘못 설정됐는지 확인.

---

### 🟡 C. Admin 버그 3건 — `js/admin.js`

1. **상세이미지 배치 소실 (line 427 근처):** 수정 모달 열 때 기존 상세이미지 미표시 → `openEditModal()` 에서 기존 detail_images 렌더 로직 점검
2. **Sortable 중복생성 (line 675 근처):** `loadPortfolio()` 호출마다 Sortable 인스턴스 중복 생성 → 기존 인스턴스 destroy 후 재생성
3. **_isDragging 미복구 (line 719 근처):** 드래그 종료 후 `_isDragging = false` 복구 누락 → click 이벤트 영구 무시됨

---

### 🟡 D. 포트폴리오 필터 debounce — `js/main.js`

필터 버튼 클릭 시 연속 클릭 방지 debounce 또는 클릭 중복 처리 방지 로직 추가.

---

### 🟡 E. stagger delay 10~12번째 추가 — `css/style.css`

```css
.portfolio-item:nth-child(10) { --delay: 0.45s; }
.portfolio-item:nth-child(11) { --delay: 0.5s;  }
.portfolio-item:nth-child(12) { --delay: 0.55s; }
```

---

### 🟡 F. `etc` 카테고리 필터 버튼 추가 — `portfolio.html`

기존 필터 버튼 목록 끝에 추가:
```html
<button class="filter-btn" data-filter="etc">기타</button>
```

---

### 🟢 G. insta-fab 하드코딩 제거 — `about.html`, `services.html`, `portfolio.html`

3개 파일에서 `class="insta-fab visible"` → `class="insta-fab"` 로 변경.
서브 페이지는 항상 표시 정책이면 `visible` 유지해도 되나, main.js 스크롤 토글과 일관성 맞출 것.

---

### 🟢 H. dead CSS 삭제 — `css/style.css`

아래 2개만 삭제 (`.#about` 블록은 `.about-body` 혼재로 건드리지 말 것):
- `.modal-img-wrap`, `.modal-info` 블록
- `.insta-fab` + `.insta-fab.*` 전체 블록 (G항 처리 후)

---

### 🟢 I. `.about-body` 중복 정의 정리 — `css/style.css`

- line 487: `font-size: 16px` 블록 삭제
- line 1519: `font-size: 17px` 블록 유지

---

### 🟢 J. portfolio.html Contact CTA 추가 — `portfolio.html`

Clients 섹션과 Footer 사이에 CTA 블록 추가. `services.html`의 `.page-cta` 패턴 참고.
