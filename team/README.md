# VDIRECTORS 홈페이지 리뉴얼 — 팀 허브

> 이 파일은 팀장(Claude #1)이 관리합니다. 모든 팀원은 작업 전 반드시 이 파일을 먼저 읽으세요.

---

## 📋 디자이너 전체 모션 검토 완료 (2026-03-26) — 03_output.md 참고

> 우선순위: 🔴 Clients stagger(portfolio.html) / 마르키 pause 제거 → 🟡 service-row hover / history stagger / 필터 버튼

---

## 🚨 긴급 — Boss 피드백 (2026-03-26, 디자이너 전달)

> log.md 하단 참고. 핵심 3가지:
> 1. "From Idea to Impact" — 로켓 효과 미반영 상태. 기획자 재검토 + 디자이너 재작성 필요.
> 2. 커서 — 회색 섹션에서 안 보임. 사이즈 조정 or 방식 재검토.
> 3. 전체 모션 — fadeUp 단조로움. 수평·scale 믹스 요청.
> **팀장이 기획자(02_designer.md) 지시 업데이트 후 디자이너에게 재지시 필요.**

---

## 프로젝트 개요

- **사이트:** vdirectors.com
- **스택:** Vanilla HTML / CSS / JS · Supabase · EmailJS · GitHub Pages
- **로컬 경로:** `C:\Users\PC\Desktop\vdirectors`
- **목표:** 홈페이지 전면 리뉴얼 — 디자인 트렌디하게 + 기능 완성

---

## 팀 구성 및 역할 (엄격히 준수)

| # | 역할 | 담당 | 절대 하지 말 것 |
|---|------|------|-----------------|
| 1 | **팀장 (PM)** | Boss 소통 · 지시서 작성 · 산출물 검토 · 진행 조율 | **코드 직접 수정 금지** |
| 2 | **기획자** | UX 분석 · 카피 · 콘텐츠 방향 · 섹션 구성 제안 | 코드 작성 금지 |
| 3 | **디자이너** | CSS/JS 코드 스니펫 작성 · 시각 방향 제안 | 실제 파일 직접 수정 금지 |
| 4 | **개발자** | 실제 파일 수정 · 기능 구현 · 버그 수정 | 기획/디자인 판단 금지 |
| 5 | **어시스턴트** | Boss 액션 아이템 정리 · 리서치 · 서포트 | 코드/기획 판단 금지 |

### ⚠️ 역할 침범 금지 규칙
- **팀장(1번)은 절대 코드를 직접 수정하지 않는다** — 반드시 4번 개발자에게 지시
- **디자이너(3번)는 코드 스니펫만 작성** — 실제 파일 적용은 4번 담당
- **개발자(4번)는 디자인 판단 없이** — 3번 산출물 그대로 반영, 기술적 문제만 자체 판단
- **기획자(2번)는 텍스트/분석 산출물만** — 코드나 디자인 직접 제안 금지
- **역할 침범 발생 시 즉시 중단하고 팀장에게 보고**

---

## 작업 흐름 (의존관계)

```
[Boss 피드백]
     ↓
[1번 팀장] → 지시서 업데이트
     ↓
[2번 기획자] → UX 분석 산출물 (02_output.md)
     ↓
[3번 디자이너] → CSS/JS 코드 산출물 (03_output.md)
     ↓
[4번 개발자] → 실제 파일 반영 + log.md 기록
     ↓
[1번 팀장] → 검토 + Boss 보고
```

**독립 작업 (언제든 병렬 가능):**
- 4번 개발자 — 버그픽스, 포트폴리오 그리드 등 독립 이슈
- 5번 어시스턴트 — Boss 액션 아이템 정리

---

## ⚡ 신호 프로토콜

**Boss가 `.` (점 하나) = 작업 신호**

- **신호를 받을 창은 팀장(1번)이 항상 명시** — 임의로 신호 해석 금지
- 신호 받으면: 지시서 읽기 → log.md 확인 → 작업 수행 → 산출물 저장 → log.md 기록
- 의존관계 있는 작업: 팀장이 순서대로 지정 (2번 완료 후 3번, 3번 완료 후 4번)
- 독립 작업: 팀장이 "2번, 5번 동시에" 식으로 명시

---

## 현재 우선순위 (2026-03-26 기준)

1. 🔴 **디자인 마무리** — 모션/커서/Impact 등 파이프라인 진행 중
2. ✅ **포트폴리오 그리드** — 유리바 슬라이드업 + 벤토 레이아웃 완료
3. ✅ **EmailJS 연결** — 완료 (service_vou848q / template_wkwtmfa)
4. ✅ **Clients 섹션** — portfolio.html 25개 로고 반영 완료
5. 🟡 **포트폴리오 시딩** — seed-new-portfolio.html 준비 완료, Boss 실행 필요
6. 🟡 **GitHub 배포** — 디자인 완료 후 진행

---

## 현재 페이지 구조

```
index.html          ← Hero + Marquee + Intro + Portfolio + Contact
about.html          ← 회사소개 + 연혁 + 코어밸류
services.html       ← 서비스 5개 + 프로세스
portfolio.html      ← 포트폴리오 전체 + 필터
portfolio-detail.html ← 포트폴리오 상세
admin.html          ← 포트폴리오 관리 (완성)
```

---

## 🚨 Admin 이슈 (팀장 검토 필요 — 2026-03-26 어시스턴트 보고)

> **Boss가 Admin 포트폴리오 등록 중 다수 버그 발견. 개발자(4번) 재투입 필요.**
>
> 어시스턴트가 긴급 패치 적용 (log.md 9차 참고):
> - ✅ RLS 무음 실패 탐지 — UPDATE 후 .select() + data.length===0 에러 표시 추가
> - ✅ 탭 전환 목록 소실 — 클라이언트↔포트폴리오 탭 전환 시 목록 사라지는 버그 수정
>
> **개발자(4번)에게 추가 지시 필요한 것:**
> 1. 카테고리 체크박스 UX — Boss가 회색(미선택)·검정(선택) 구분을 직관적으로 못 느낌. 선택된 항목에 체크 아이콘·색상 강화 필요 (디자이너 검토 후 개발자 반영)
> 2. Admin 전반적 안정성 재점검 — 저장 후 목록 즉시 반영, 수정/삭제 흐름 전체 테스트

---

## 📬 어시스턴트 15차 완료 보고 — 팀장 검토 필요 (2026-03-26)

> **어시스턴트 → 팀장(1번)**

### 완료된 작업
- `update-tags-3.mjs` 실행 — 67개 전체 tags/category 히스토리 기반 MERGE 방식으로 업데이트 (63/64 성공)
- `sort_order 66` (육대장 홈페이지) DB 미존재 → INSERT 완료
- `about.html` / `services.html` AI 클리셰 텍스트 7곳 정제

### ⚠️ 팀장 판단 필요 — 디자이너 19차 미반영 이슈

디자이너 19차 산출물(log.md 참고)이 개발자에게 아직 전달되지 않음. 우선순위 확인 후 개발자(4번) 지시 필요:

| 우선순위 | 항목 | 세부 내용 |
|----------|------|-----------|
| 🔴 | History 타임라인 대비 | `var(--g4)` → `var(--g3)` (선/점 색상 강화) |
| 🔴 | form-success 480px | 패딩 `52px` → `28px` (모바일 잘림) |
| 🟡 | reply-dot 변수화 | 인라인 색상 → CSS 변수 교체 |
| 🟡 | form-success-links 모바일 | 버튼 방향 수직 전환 |

### migrate-detail-images.mjs 생성 완료 ✅
- `tools/migrate-detail-images.mjs` 생성 완료
- **DNS 전환 전 Boss가 직접 실행**: `node tools/migrate-detail-images.mjs`
- 동작: 구 사이트(`vdirectors.com`) URL 이미지 다운로드 → Supabase Storage `portfolio/detail/` 업로드 → DB `detail_images` 새 URL로 PATCH
- 실패 시 원본 URL 유지 + 실패 목록 출력 (안전하게 재실행 가능)

---

## 🐛 어시스턴트 버그 검토 보고 — 팀장(1번) 확인 후 개발자(4번) 지시 필요 (2026-03-26)

> **어시스턴트 → 팀장(1번)** | 전체 JS/HTML 코드 검토 완료

### 🔴 Critical — 즉시 수정 필요

| # | 위치 | 문제 | 수정 방향 |
|---|------|------|-----------|
| 1 | `main.js:320` | emailjs CDN 미로드 시 이메일 미전송인데 "문의 접수됨" 성공 표시 | `else { throw new Error('emailjs 로드 실패') }` 추가 |
| 2 | `portfolio-detail.html` | `#scrollProgress` 존재하지만 `detail.js`에 스크롤 진행 처리 없음 → 항상 0% | `detail.js`에 `initScrollProgress()` 동일 로직 추가 |

### 🟡 Medium — 우선순위 높음

| # | 위치 | 문제 | 수정 방향 |
|---|------|------|-----------|
| 3 | `admin.js:427` | 상세 이미지 다중 배치 업로드 시 이전 배치 URL 소실 (`uploadedDetailUrls = []` 재초기화) → Storage 고아 파일 생성 | `uploadedDetailUrls = []` 제거 → `push` 방식으로 누적 |
| 4 | `admin.js:675` | `loadClients()` 호출마다 `Sortable.create()` 중복 생성 → 탭 반복 전환 시 드래그 이벤트 다중 바인딩 | Sortable 인스턴스 변수로 관리, 이미 존재하면 skip |
| 5 | `admin.js:719` | `_isDragging` dragenter에서 `true` 설정 후 drop 없이 드래그 아웃 시 미복구 → 이후 업로드 존 클릭 무반응 | `dragleave`에서 `_isDragging = false` 추가 |
| 6 | `main.js:236` | 필터 빠른 클릭 시 300ms setTimeout 누적 실행 → 그리드 깜빡임 | `clearTimeout` debounce 처리 |
| 7 | `portfolio.html:59` | 필터 버튼 라벨 `"영상제작"` vs 카드 오버레이 catLabel `"동영상"` 불일치 | 둘 중 하나로 통일 (catLabel `video` 값 또는 버튼 텍스트) |

### 🟢 Low

| # | 위치 | 문제 |
|---|------|------|
| 8 | `about/services/portfolio.html` | `insta-fab visible` 하드코딩 — 스크롤 무관 항상 노출 (기존 알려진 이슈) |
| 9 | `main.js:182`, `detail.js:70` | `item.name` 비이스케이프 innerHTML 삽입 — Admin 신뢰 환경이므로 실질 위험 낮음 |

---

## 현재 알려진 이슈

- 디자인 파이프라인 계속 진행 중 (모션/커서/Impact)
- 포트폴리오 신규 14개 시딩 → tools/seed-new-portfolio.html (Boss 로그인 후 실행)
- 기존 24개 시딩 → tools/seed-portfolio.html (Boss 실행 필요)
- GitHub 미배포 → 디자인 완료 후 진행

---

## 보고 체계

- **Boss ↔ 팀장(1번)만 직접 소통**
- 각 역할 산출물 완성 시 `log.md` 기록
- 팀장이 검토 → 다음 단계 지시 → Boss 보고

---

## 🔁 공통 행동 규칙

1. 시작 시 `README.md` → 지시서(`0X_역할.md`) → `log.md` 순서로 읽기
2. 산출물 완성 시 즉시 `0X_output.md` 저장 + `log.md` 기록
3. 블로커/질문 발생 시 지시서 하단 `## ❓ 질문` 추가 후 저장
4. 할 일 없으면 대기 — Boss에게 직접 말 걸지 말 것
5. **역할 범위 벗어난 작업 요청 받으면 거부하고 팀장에게 보고**
