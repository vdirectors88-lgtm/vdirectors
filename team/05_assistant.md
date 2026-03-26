# 어시스턴트 작업지시서 — Claude #5

> 작업 전 `README.md` 먼저 확인하세요.

---

## ⚠️ 보고 원칙 (팀장 지시 — 필수)

**작업 완료 후 반드시 팀장(Claude #1)에게 직접 보고해야 한다.**

- `log.md` 기록 + `05_output.md` 산출물 작성 후
- 팀장 창에 다음 형식으로 보고: `"어시스턴트 N차 완료 — [작업 요약 1줄]"`
- 팀장이 검토 후 다음 지시를 내린다. 임의로 다음 작업 진행 금지.

---

## 역할 정의

Boss가 직접 해야 하는 일을 친절하고 명확하게 정리해서 전달.
Claude가 접근 불가한 외부 서비스 관련 작업을 단계별로 안내.

---

## 🆕 현재 작업 요청 (팀장 지시 — 2026-03-26 / 4차)

### 구 사이트 신규 포트폴리오 이미지 다운로드

구 사이트(`vdirectors.com`)에 우리가 가져오지 못한 신규 포트폴리오 항목들이 있음.
아래 board_idx 기준으로 이미지를 다운로드해서 `assets/portfolio/img/` 폴더에 저장해야 함.

**대상 항목 (board_idx → 저장 파일명):**

| 회사명 | board_idx | 저장 파일명 |
|--------|-----------|------------|
| 카카오뱅크 | 182 | pt_new_182.png |
| 하림 | 181 | pt_new_181.png |
| 자심 | 180 | pt_new_180.png |
| ARK | 179 | pt_new_179.png |
| 남성보약 | 174 | pt_new_174.png |
| 렘디아 | 173 | pt_new_173.png |
| 다른공간 | 172 | pt_new_172.png |
| 하트립 | 171 | pt_new_171.png |
| BNI | 170 | pt_new_170.png |
| 라이프뷰티아 | 165 | pt_new_165.png |
| 더그린 | 164 | pt_new_164.png |
| HAM | 163 | pt_new_163.png |
| 인천도시공사 | 157 | pt_new_157.png |
| 삼성증권 | 156 | pt_new_156.png |

**이미지 URL 패턴:**
```
https://vdirectors.com/bizdemo119798/component/board/board_7/u_image/{board_idx}/{파일명}
```

각 항목의 실제 파일명은 페이지 fetch 후 HTML에서 `<img src=...>` 태그로 확인 가능.
개별 상세 페이지 URL:
```
https://vdirectors.com/default/portfolio/sub1.php?com_board_basic=read_form&com_board_idx={board_idx}
```

**작업 순서:**
1. 각 board_idx의 상세 페이지 fetch → 썸네일 이미지 파일명 확인
2. 이미지 URL 완성 후 `assets/portfolio/img/` 에 저장
3. 저장된 파일명 목록을 `05_output.md`에 기록

산출물: `05_output.md` 덮어쓰기 (다운로드 완료 목록 + 실제 파일명).
완료 후 `log.md` 기록 및 **팀장(Claude #1)에게 직접 보고**.

---

## ⬇️ 이전 작업 요청 (완료)

## 이전 작업 요청 (팀장 지시 — 2026-03-26 / 3차)

Boss가 지금 해야 할 액션 아이템을 **아주 자세하고 친절하게** 정리해줘.
이전 05_output.md보다 더 구체적으로 — 각 단계마다 스크린샷 찍듯 어디를 클릭하는지까지.

`05_output.md`에 덮어쓰기. 아래 3가지 항목 기준.

### 완료된 항목 (제외)
- Supabase Storage 버킷 `portfolio` (Public) ✅
- Supabase Auth 관리자 계정 ✅
- GitHub Pages 배포 준비 (CNAME + .nojekyll) ✅

### 자세하게 설명할 것들

**1. EmailJS 설정 (단계별 — 계정 만들기부터 키 얻기까지 전부)**
- emailjs.com 회원가입 방법 포함
- Gmail 서비스 연결 구체적 방법
- 템플릿 만드는 법 + 변수 삽입 방법 (예시 포함)
- Public Key 찾는 위치
- 최종적으로 팀장에게 전달할 정보 3가지 명확히

**2. GitHub 레포 생성 + 배포 + DNS 설정 (단계별)**
- github.com에서 레포 만드는 법 (설정 옵션 포함)
- 팀장에게 URL 전달 → git push 명령어 받는 흐름
- GitHub Pages 설정 방법 (Settings 위치까지)
- DNS 설정 — 어떤 레코드를 어디에 추가하는지 (도메인 업체 공통 가이드)
- 완료 후 사이트 확인 방법

**3. 포트폴리오 이미지 24개 Admin 등록 (순서 + 주의사항)**
- admin.html 로컬 접속 방법 (파일 경로 직접 열기)
- 로그인 방법
- 항목 하나 등록하는 전체 과정 (이름, 카테고리, 태그, 이미지 업로드)
- 24개 목록과 파일명 매핑 (pt1=MBC C&I 식으로)
- 등록 순서 팁 (sort_order 어떻게 설정하면 좋은지)

---

## 산출물 형식
`05_output.md` 덮어쓰기.
완료 후 `log.md` 기록: `2026-03-26 | 어시스턴트 | Boss 액션 아이템 상세 가이드 (3차) — ✅ 완료`

---

## ⬇️ 이전 작업 요청 (완료)

### 팀장 지시 — 2026-03-26 / 2차

팀이 디자인·개발 작업 중인 동안 **Boss가 지금 당장 할 수 있는 일**을 정리해줘.

`05_output.md`에 작성. 아래 항목 기준으로 — 이미 완료된 건 제외하고 **남은 것만**.

### 완료된 항목 (제외)
- Supabase Storage 버킷 `portfolio` (Public) ✅
- Supabase Auth 관리자 계정 ✅

### 아직 안 된 것들 (친절하게 정리)

**1. EmailJS 설정**
- 목적: Contact 폼 → contact@vdirectors.com 실제 발송
- 필요 정보: Service ID, Template ID, Public Key
- 템플릿 변수: `{{from_name}}`, `{{company}}`, `{{position}}`, `{{phone}}`, `{{message}}`

**2. GitHub 레포 생성 + 배포**
- 계정: vdirectors00-blip
- 배포 준비는 개발자가 완료 (CNAME, .nojekyll 생성)
- Boss가 할 것: 레포 생성 → 팀장에게 URL 전달 → git push 명령어 받기
- DNS 설정도 필요 (도메인 업체에서)

**3. 포트폴리오 이미지 24개 Admin 등록**
- Admin 페이지 + Storage 준비 완료 상태
- 이미지 파일: `C:\Users\PC\Desktop\vdirectors\assets\portfolio\img\`
- Boss가 `admin.html` 직접 접속해서 등록 가능 (로컬에서)

---

## 산출물 형식
`05_output.md` 덮어쓰기.
완료 후 `log.md` 기록: `2026-03-26 | 어시스턴트 | Boss 액션 아이템 업데이트 (2차) — ✅ 완료`
