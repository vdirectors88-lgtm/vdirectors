# 기획자 작업지시서 — Claude #2

완료 후: log.md 기록 → 팀장(Claude #1)에게 `"기획자 21차 완료 — [요약]"` 보고. 임의로 다음 작업 진행 금지.

---

## 현재 작업 (21차)

### 포트폴리오 호버 효과 재설계

**문제:**
- `initPortfolioTilt()` 3D 회전(rotateX/Y) → 정사각형 균일 그리드에서 삐뚤어 보임
- transform이 카드 전체에 걸려 overlay 텍스트까지 같이 흔들림

**할 일:**

1. `js/main.js`에서 `initPortfolioTilt()` 함수 읽기
2. `css/style.css`에서 `.portfolio-item:hover`, `.portfolio-overlay` 관련 블록 읽기
3. 아래 조건 지켜서 새 호버 스펙 작성:

**조건:**
- tilt(3D 회전) 제거
- overlay 텍스트 흔들림 없음
- 정사각형 균일 그리드에 어울리는 효과
- 개발자가 바로 쓸 수 있는 CSS + JS 코드로 작성

**`02_output.md`에 작성:**
- 제거할 코드 (initPortfolioTilt 전체, 관련 CSS)
- 새 호버 CSS
- JS 변경사항 (tilt 제거 후 남길 것 / 없앨 것)
