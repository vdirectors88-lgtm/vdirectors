# 기획자 작업지시서 — Claude #2

완료 후: log.md 기록 → 팀장(Claude #1)에게 `"기획자 23차 완료 — [요약]"` 보고. 임의로 다음 작업 진행 금지.

---

## 현재 작업 (23차)

### 사이트 전체 버그 스캔

현재 GitHub Pages에 배포된 상태 (`https://vdirectors88-lgtm.github.io/vdirectors`).

아래 파일 전체를 직접 읽고 버그/UX 이슈를 찾아라:
- `index.html`, `about.html`, `services.html`, `portfolio.html`, `portfolio-detail.html`, `admin.html`
- `js/main.js`, `js/detail.js`, `js/admin.js`, `js/transitions.js`
- `css/style.css`, `css/detail.css`, `css/admin.css`

**찾아야 할 것:**
- 🔴 기능 버그 (작동 안 되는 것)
- 🟡 UX 이슈 (어색하거나 불완전한 것)
- 🟢 개선 권고 (있으면 좋은 것)

**`02_output.md`에 우선순위별로 정리해서 보고.**

단, 아래는 이미 처리됐으니 제외:
- Contact 다른 페이지 링크 버그 (3번 42차에서 수정 중)
- 41차 CSS 4개 (history g3 / form-success 모바일 / reply-dot / form-success-links)
