# 어시스턴트 작업지시서 — Claude #4

완료 후: log.md 기록 → 팀장(Claude #1)에게 `"어시스턴트 15차 완료 — [요약]"` 보고. 임의로 다음 작업 진행 금지.

---

## Supabase (service_role key — 직접 DB 수정 가능)

```
URL: https://zpyzgicyfkancewoxmbg.supabase.co
SERVICE KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpweXpnaWN5ZmthbmNld294bWJnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDQ2MTk1NywiZXhwIjoyMDkwMDM3OTU3fQ.VC52H58cp7c-4WHRLvo6uHtoPtcvr09sBtbv3iPbonw
```

---

## 현재 작업 (15차)

### 상세 이미지 Supabase Storage 이전

**배경:**
DB `portfolio` 테이블의 `detail_images` 컬럼에 저장된 이미지 URL들이 구 사이트(`vdirectors.com`) 경로를 그대로 참조하고 있음.
DNS를 GitHub Pages로 전환하면 이 URL들이 전부 깨짐 → 엑박 발생.
DNS 전환 전에 전부 Supabase Storage로 이전해야 함.

**할 일:**

`tools/migrate-detail-images.mjs` 파일 생성 후 실행.

스크립트 동작:
1. Supabase에서 `detail_images` 가 null이 아닌 포트폴리오 전체 조회
2. 각 항목의 `detail_images` 배열 순회
3. URL이 `vdirectors.com` 포함된 것만 처리 (이미 Storage URL인 것은 스킵)
4. 이미지 다운로드 (Node.js fetch)
5. Supabase Storage `portfolio` 버킷 `detail/` 경로에 업로드
   - 파일명: `{sort_order}_{index}.{ext}` 형식
6. 새 Storage URL로 해당 항목 `detail_images` 배열 업데이트 → DB PATCH
7. 콘솔: `✅ {sort_order} {name} — {n}장 이전 완료` 또는 `⏭ {name} — 스킵(이미 Storage)`

**seed-runner.mjs 구조 참고해서 작성.**

**주의:**
- 실행 전 `tools/migrate-detail-images.mjs` 파일만 생성, 실행은 팀장 검토 후 Boss가 직접
- Storage 버킷명: `portfolio` (Public 버킷)
- 업로드 경로: `detail/{sort_order}_{index}.jpg`
- Content-Type은 `image/jpeg` 기본, URL 확장자 보고 png/gif 등 분기 처리
- 다운로드 실패 시 해당 URL 스킵하고 계속 진행 (실패 목록 마지막에 출력)
