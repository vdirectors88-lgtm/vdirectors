# 개발자 작업지시서 — Claude #3

완료 후: log.md 기록 → 팀장(Claude #1)에게 `"개발자 43차 완료 — [요약]"` 보고. 임의로 다음 작업 진행 금지.

---

## 현재 작업 (43차)

기획자 23차 결과 반영. 3개 항목 처리.

---

### D. `css/admin.css` — 클라이언트 삭제 버튼 클래스 교체 🔴

`.delete-overlay .btn-delete` → `.delete-overlay .client-delete-btn` 으로 교체 (hover 포함 2줄).

---

### E. `js/main.js` — video catLabel 통일 🟡

```js
// 변경
video: '영상제작'   // 기존: '동영상'
```

---

### F. `css/style.css` — hero-scroll-hint dead CSS 삭제 🟡

`.hero-scroll-hint` 관련 규칙 전체 삭제 (3개 블록).
