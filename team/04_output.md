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
