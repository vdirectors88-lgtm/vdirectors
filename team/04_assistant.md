# 어시스턴트 작업지시서 — Claude #4

완료 후: log.md 기록 → 팀장(Claude #1)에게 `"어시스턴트 16차 완료 — [요약]"` 보고. 임의로 다음 작업 진행 금지.

---

## Supabase (service_role key — 직접 DB 수정 가능)

```
URL: https://zpyzgicyfkancewoxmbg.supabase.co
SERVICE KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpweXpnaWN5ZmthbmNld294bWJnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDQ2MTk1NywiZXhwIjoyMDkwMDM3OTU3fQ.VC52H58cp7c-4WHRLvo6uHtoPtcvr09sBtbv3iPbonw
```

---

## 현재 작업 (16차)

### 최종 데이터/콘텐츠 점검

배포 직전 최종 점검. Supabase DB 데이터 및 콘텐츠 정확성 확인.

**점검 항목:**

1. **Supabase portfolio 테이블 전체 조회**
   - `name` 비어있는 항목
   - `thumb_url` 비어있는 항목 (이미지 없는 카드)
   - `category` 비어있는 항목
   - `tags` 비어있거나 이상한 항목
   - `sort_order` 중복 여부
   - `is_featured` true인 항목 수 (12개 이상인지 확인)

2. **Supabase clients 테이블 전체 조회**
   - 항목 수 확인 (25개 정상인지)
   - `logo_url` 비어있는 항목

3. **이상 항목 목록화** → log.md에 기록 후 보고
   - 수정이 필요한 건 직접 PATCH하지 말고 목록만 보고할 것
   - Boss가 Admin에서 직접 수정 예정
