# 작업 완료 로그

> 작업 완료 시 아래 형식으로 기록하세요.
> `[날짜] [역할] 작업내용 — 상태`

---

## 형식 예시
```
2026-03-26 | 팀장   | 팀 폴더 및 작업지시서 전체 생성 — ✅ 완료
2026-03-26 | 개발자 | Admin 페이지 초안 구현 — ✅ 완료
2026-03-26 | 디자이너 | Hero outlined text CSS 작성 — ✅ 완료, 팀장 검토 대기
```

---

## 로그

2026-03-26 | 팀장 | 팀 폴더 생성 + README / 02~05 지시서 / log.md 작성 — ✅ 완료
2026-03-26 | 팀장 | Services 페이지 모바일 반응형 완성 (768px / 480px) — ✅ 완료
2026-03-26 | 기획자 | 동적 요소 UX 검토 — ✅ 완료 (02_output.md)
2026-03-26 | 기획자 | Hero 효과 개선 UX 검토 (2차) — ✅ 완료 (02_output.md)
2026-03-26 | 팀장   | 02_output 검토 완료, 03_designer.md에 기획자 결과 반영 + 구체 지시 추가 — ✅ 완료
2026-03-26 | 디자이너 | 동적 요소 CSS/JS 작성 v1 (A + B + E) — ✅ 완료
2026-03-26 | 디자이너 | 동적 요소 CSS/JS 작성 v2 (기획자 검토 반영 — C Tilt + E + A + 커서VIEW + B) — ✅ 완료, 팀장 검토 대기
2026-03-26 | 팀장   | 03_output 검토 완료 — A/B/E 코드 main.js + style.css + 전 페이지 HTML 반영 완료 — ✅ 완료
2026-03-26 | 팀장   | Hero 2차 개선 직접 반영 — 듀얼커서(ring+dot) + clip-path 리빌 + label stagger — ✅ 완료
2026-03-26 | 개발자 | Admin 페이지 구현 완료 (admin.html + css/admin.css + js/admin.js) — ✅ 완료
2026-03-26 | 어시스턴트 | Boss 액션 아이템 정리 — ✅ 완료 (05_output.md)
2026-03-26 | 어시스턴트 | Boss 완료 보고 — Supabase Storage `portfolio` 버킷 생성(Public) ✅ + Auth 계정 생성 ✅ → Admin 페이지 즉시 사용 가능 상태
2026-03-26 | 어시스턴트 | README 이슈 섹션 + 05_output 상태표 최신화 — ✅ 완료
2026-03-26 | 개발자 | GitHub Pages 배포 준비 — CNAME(vdirectors.com) + .nojekyll 생성 — ✅ 완료
2026-03-26 | 개발자 | 디자이너 v2 산출물 반영 — C(3D Tilt) js/main.js + css/style.css 적용 — ✅ 완료
2026-03-26 | 개발자 | 포트폴리오 그리드 개선 — ✅ 완료
  · gap 4px → 3px
  · align-content: start 추가 (마지막 행 빈 셀 팽창 방지)
  · 이미지 없는 카드 → 회색 배경 + 카테고리·프로젝트명 중앙 표시 (renderCard + CSS)
  · initPortfolioTilt() 함수 추가 (lerp 관성, ±8deg, hover:none 모바일 비활성화)
  · renderPortfolio() 내 호출 추가 (동적 렌더 대응)
  · .portfolio-item { will-change: transform } style.css 추가
  · Supabase Auth 로그인/로그아웃
  · 포트폴리오 목록 조회 (sort_order 순)
  · 항목 추가 / 수정 / 삭제 (CRUD 전체)
  · SortableJS 드래그앤드롭 → sort_order 자동 업데이트
  · 썸네일 파일 업로드 (Supabase Storage) + URL 직접 입력 병행
  · 상세 이미지 URL 멀티라인 입력
  · 저장 완료 토스트 인디케이터
2026-03-26 | 디자이너 | Hero/커서 개선 CSS/JS (2차) — 현황 검토 + VIEW 페이드인 버그 발견 — ✅ 완료, 팀장 검토 대기
2026-03-26 | 기획자 | 커서/인트로/대비 UX 분석 (3차) — ✅ 완료 (02_output.md)
2026-03-26 | 기획자 | 커서/포트폴리오/폰트/마르키 UX 분석 (4차) — ✅ 완료 (02_output.md)
2026-03-26 | 개발자 | VIEW 레이블 페이드인 버그 수정 — ✅ 완료
  · .cursor-ring::after 기본 opacity:0 + transition:opacity 0.25s 분리
  · .cursor-ring.on-portfolio::after opacity:1 만 유지 → 페이드인 정상 작동
2026-03-26 | 팀장   | 02_output(3차) 검토 완료 → 03_designer.md 3차 지시 작성 (커서 blend-mode/마르키 검정/인트로 확대/텍스트 대비/구분선) — ✅ 완료
2026-03-26 | 팀장   | 03_output(3차) 검토 완료 → 04_developer.md 4차 지시 작성 (7-step 반영 지시) — ✅ 완료
2026-03-26 | 팀장   | Boss 4차 피드백 수신 → 02_planner.md 4차 지시 작성 (커서/포트폴리오/폰트/마르키) — ✅ 완료
2026-03-26 | 팀장   | 02_output(4차) 검토 완료 → 04_developer.md 5차 지시 작성 (커서 #111/lerp0.16/포트폴리오 상위10/폰트/마르키#111) — ✅ 완료
2026-03-26 | 디자이너 | 커서/마르키/인트로/대비 CSS/JS (3차) — ✅ 완료, 팀장 검토 대기
2026-03-26 | 개발자 | 디자이너 3차 산출물 반영 — 커서 blend-mode / 마르키 검정 / 인트로 확대 / 텍스트 대비 / 구분선 — ✅ 완료
  · STEP1: 전 페이지 HTML cursor-ring/dot → cursor-ball 단일 교체
  · STEP2: CSS 커서 블록 mix-blend-mode:difference 단일 원으로 교체
  · STEP3: :root --g1:#111 --g2:#555 --g4:#ccc 대비 강화
  · STEP4: 마르키 background:#000, 텍스트 #fff, font-size 15px
  · STEP5: .main-intro-quote clamp(48px,6.5vw,96px) / .section-label color:#000
  · STEP6: main.js 섹션1 cursorBall 단일 원 lerp 0.12
  · STEP7: initPortfolioCursor() cursorRing → cursorBall 교체
2026-03-26 | 개발자 | 기획자 4차 분석 반영 — 커서 #111/lerp0.16 / 포트폴리오 상위10고정 / 폰트5개 / 마르키#111 — ✅ 완료
  · STEP1: cursor-ball background:#111 opacity:0.85, mix-blend-mode 제거, lerp 0.12→0.16
  · STEP2: 포트폴리오 메인 shuffleArray 제거 → sort_order 상위 10개 고정
  · STEP3: section-label 11→13px / card-eyebrow 9→11px / footer-right p 12→14px / history-month 11→13px / service-detail-list li 13→14px
  · STEP4: 마르키 background #000 → var(--black)
2026-03-26 | 개발자 | 커서 사라짐 수정 — box-shadow 흰 테두리 추가 — ✅ 완료
2026-03-26 | 개발자 | EmailJS 키 연결 완료 (service_vou848q / template_wkwtmfa) — ✅ 완료
2026-03-26 | 어시스턴트 | README + 05_output EmailJS 완료 반영 — ✅ 완료
2026-03-26 | 어시스턴트 | Boss 액션 아이템 상세 가이드 (3차) — GitHub배포+포트폴리오등록 — ✅ 완료 (05_output.md)
2026-03-26 | 기획자 | 사이트 전체 디테일 스캔 (5차) — ✅ 완료 (02_output.md)
2026-03-26 | 기획자 | 능동 스캔 (6차) — 커서소실/OG미구현/grid transition/5차미반영 — ✅ 완료 (02_output.md)
2026-03-26 | 기획자 | 그리드잘림+호버효과+Boss피드백 대응 (7차) — ✅ 완료 (02_output.md)
2026-03-26 | 팀장   | 병렬 지시 — 02(5차:전체스캔) / 03(4차:OG스펙) / 04(8차:커서재구현+파비콘) 동시 가동 — ✅ 완료
2026-03-26 | 디자이너 | OG 이미지 스펙 작성 (4차) — ✅ 완료, 팀장 검토 대기
2026-03-26 | 개발자 | 커서 2중 테두리 재구현 + 파비콘 전 페이지 추가 (8차) — ✅ 완료
2026-03-26 | 개발자 | 마르키 배경 #111 → #333 변경 (9차) — ✅ 완료
2026-03-26 | 개발자 | 커스텀 커서 완전 제거 (CSS/JS/HTML) — ✅ 완료
  · STEP1: cursor-ball transparent bg + border:2px #111 + ::before 중앙 점 + box-shadow 흰 테두리
  · STEP2: 파비콘 SVG inline (검정 배경 + V 흰 텍스트) — 6개 HTML 전체 반영
2026-03-26 | 개발자 | Admin URL제거+상세이미지업로드 추가 + 시딩스크립트 생성 (11차) — ✅ 완료
2026-03-26 | 개발자 | 시딩URL 상대경로 수정 + Admin/포트폴리오 카테고리 추가 (program/marketing) — ✅ 완료
2026-03-26 | 개발자 | 기획자7차 반영 — 포트폴리오9개/Spotlight호버/Impact로켓/커서36px — ✅ 완료
2026-03-26 | 개발자 | Admin 카테고리 다중선택(checkbox)+영상제작 추가 (15차) — ✅ 완료
2026-03-26 | 개발자 | 디자이너5차 반영 — section-label와이프/포트폴리오stagger/value-card scale (16차) — ✅ 완료
  · admin.html select → checkbox group (web/design/program/marketing/video)
  · admin.js getCategoryCheckboxes/setCategories/getSelectedCategories 헬퍼 추가, 쉼표 구분 string 저장
  · portfolio.html 영상제작 필터 버튼 추가
  · main.js catLabel video 추가 + 필터링 split(',') 대응
  · admin.css .category-check-group / .check-item 스타일 추가
  · STEP1: main.js slice(0,10) → slice(0,9)
  · STEP2: style.css Spotlight Dim — :has() + scale(0.98/1.02) + opacity 0.45
  · STEP3: main.js word 클래스 분기 + style.css wordSlideRight(to) / wordImpact(impact) 키프레임
  · STEP4: 커서 이미 제거됨 — 스킵
  · A: admin.html 썸네일/상세이미지 URL 입력 제거, 파일업로드 UI 분리 (thumbFile 1장 / detailFiles multiple)
  · A: admin.js formThumbUrl/formDetailImages 제거, handleDetailFiles() 추가, existingThumbUrl/existingDetailUrls 상태 추가
  · A: admin.css .detail-preview-list / .detail-preview-img 스타일 추가
  · B: tools/seed-portfolio.html 생성 (24개 upsert, sort_order 기준 중복 방지)
2026-03-26 | 디자이너 | 🚨 Boss 피드백 전달 (팀장/기획자 즉시 확인 요망)
  [1] "From Idea to Impact" — 현재 stagger fade-up 방식 효과 없음. Boss 요청:
      "Impact" 단어가 로켓처럼 빠르게 날아와서 탁 박히는 느낌으로 변경 필요.
      제안: "From Idea" 조용히 등장 → "to" 빠르게 통과 → "Impact" translateX(-120px)→0
      easing: cubic-bezier(0.87, 0, 0.13, 1) + 살짝 overshoot. 기획자 재검토 필요.
  [2] 커서 — 회색 섹션(about/services)에서 안 보임. 사이즈 28→36px 확대 or 듀얼 커서 재검토.
  [3] 전체 모션 — fadeUp 일색이라 맴도는 느낌. 수평 진입 / 속도 차이 / scale 변화 믹스 필요.
      기획자가 동적 요소를 너무 보수적으로 확정한 것이 원인으로 판단됨.
2026-03-26 | 디자이너 | 모션 개선 CSS — section-label와이프/포트폴리오stagger/value-card scale (5차) — ✅ 완료, 팀장 검토 대기
2026-03-26 | 기획자 | 능동 스캔 (8차) — 디자이너5차미반영/클라이언트섹션미구현/저대비/Impact로켓/OG — ✅ 완료 (02_output.md)
2026-03-26 | 디자이너 | 긴급 버그픽스 — services.html nav 로고 안 보임 (nav-light 클래스 CSS 작성) — ✅ 완료, 팀장 검토 대기
2026-03-26 | 어시스턴트 | 구 사이트 FTP(www) clients 로고 수집 — cl_01~cl_25.png 25개 → assets/clients/ 복사 완료 ✅
2026-03-26 | 어시스턴트 | 구 사이트 www 회사 이미지 수집 — assets/www-backup/ (cbs/mbccni/glaceum/yukdaejang/ls/incheonAirport 등 + 2023-sub1 팀 이미지) ✅
2026-03-26 | 어시스턴트 | 4차 — 신규 포트폴리오 14개 이미지 다운로드 완료 → assets/portfolio/img/pt_new_{idx}.png ✅
  · 카카오뱅크(182) / 하림(181) / 자심(180) / ARK(179) / 남성보약(174) / 렘디아(173)
  · 다른공간(172) / 하트립(171) / BNI(170) / 라이프뷰티아(165) / 더그린(164)
  · HAM(163) / 인천도시공사(157) / 삼성증권(156) — 전부 성공
2026-03-26 | 기획자 | 디자이너 버그픽스 검토 (9차) — services.html만 적용/about.html 불필요 확인 + 클라이언트 로고 준비 확인 + 전체 미반영 우선순위 정리 — ✅ 완료 (02_output.md)
2026-03-26 | 개발자 | 17차 — 검정배경대비/Impact강화/OG태그/클라이언트섹션/grid transition — ✅ 완료
  · A: process-section label#666 / num#555 / p#777 대비 강화
  · B: wordImpact translateX(-120px)+scale(0.85), delay 1.4s, fill-mode:both / word-to 0.95s / inline delay 제거
  · B-2: replayHeroLabel() 추가 — 4.5s마다 animation 리셋→재실행 루프
  · C: OG+Twitter 메타태그 5개 HTML 전체 반영
  · D: index.html #clients 섹션 (cl_01~25 ×2세트) + style.css clientsScroll 애니메이션
  · E: portfolio-grid transition 0.3s→0.4s
2026-03-26 | 디자이너 | 포트폴리오 호버 효과 강화 CSS (6차) — ✅ 완료, 팀장 검토 대기
2026-03-26 | 기획자 | 10차 능동 스캔 — 17차검증/nav-light버그/클라이언트마르키재검토/디자이너6차검토/replayHeroLabel UX검토 — ✅ 완료 (02_output.md)
2026-03-26 | 개발자 | 에러 점검 — detail.js 커서 잔존 삭제 + catLabel 확장 + 다중카테고리 대응 — ✅ 완료
2026-03-26 | 기획자 | Clients 위치 변경 + 포트폴리오 벤토 재설계 (9차) — ✅ 완료 (02_output.md)
2026-03-26 | 개발자 | 18차 — Clients재배치/벤토9개레이아웃/호버강화/nav-light/Admin토글 — ✅ 완료
  · A: index.html #clients 섹션 제거 / portfolio.html footer 앞에 clients-section 삽입 / style.css 정적 그리드 CSS 교체
  · B: style.css .portfolio-main .portfolio-grid — 9개 전용 벤토 레이아웃 (1,5,9번 grid-column span 2)
  · C: style.css 호버 강화 — opacity 0.18 / scale 0.94/1.04 / img scale 1.12 / overlay gradient rgba(0,0,0,0.92) / overlay-inner translateY(32px) transition 0.5s / main.js tilt scale(1.04) 추가
  · D: services.html nav-light 클래스 추가 / style.css nav-light CSS 추가
  · E: admin.html checkbox + <span> 추가 / admin.css 토글 버튼 스타일 교체
2026-03-26 | 디자이너 | 전체 페이지 모션 검토 — 7개 항목 발견, 03_output.md + README 보고 완료
2026-03-26 | 기획자 | UX/UI 전체 보완 스캔 (11차) — 주소불일치/브레이크링크/저대비/count-up오류/디자이너7차검토 — ✅ 완료 (02_output.md)
2026-03-26 | 디자이너 | Impact heartbeat CSS (8차) — impactBreathe keyframe + word-impact shorthand animation — ✅ 완료, 팀장 검토 대기
2026-03-26 | 개발자 | 19차 — 버그수정7개/모션5개 반영 — ✅ 완료
  · A-1: about/services/index footer 주소 "송도테크노파크BT센터 1401호" 통일
  · A-2: portfolio-detail.html nav 링크 about.html/services.html/portfolio.html로 수정
  · A-3: style.css .page-hero-dark .page-hero-label color #444→#666
  · A-4: main.js replayHeroLabel() 함수 + setTimeout/setInterval 전체 제거
  · A-5: about.html 설립연도 count-up 클래스 제거 → 정적 "2021"
  · A-6: style.css textarea 130px / service-card p #777 / service-tag 11px / page-hero-label 12px
  · A-7: portfolio-detail.html "← PORTFOLIO" href portfolio.html로 수정
  · B-1: style.css 마르키 hover pause 줄 삭제
  · B-2: style.css client-logo stagger reveal (opacity 0→1, translateY 20→0, 25개 delay) / portfolio.html reveal 클래스 추가
  · B-3: style.css service-row-ghost transition+translateX(12px) / service-row-right h2::after underline 호버
  · B-4: style.css history-item nth-child(1~4) stagger delay 0/0.12/0.24/0.36s
  · B-5: style.css filter-btn.active background:var(--g5) border-radius:2px 추가
2026-03-26 | 개발자 | 디자이너 8차 산출물 반영 — impactBreathe heartbeat CSS 적용 — ✅ 완료
  · @keyframes impactBreathe 추가 (scale 1→1.04→1, 3s, ease-in-out, infinite)
  · .hero-label .word-impact animation shorthand로 교체 (wordImpact + impactBreathe 연결, delay 2.1s)
2026-03-26 | 어시스턴트 | 5차 — tools/seed-new-portfolio.html 생성 (Admin 로그인 후 14개 upsert) ✅
2026-03-26 | 디자이너 | 포트폴리오 카드 유리바 슬라이드업 CSS — 배경 흰색 + backdrop-filter 반투명 바 + floating shadow — ✅ 완료, 팀장 검토 대기
2026-03-26 | 디자이너 | 개발자(4번)에게 포트폴리오 유리바 CSS 직전달 — 04_developer.md 20차 작업 추가 완료
2026-03-26 | 개발자 | 포트폴리오 유리바 슬라이드업 CSS 반영 (20차) — ✅ 완료
  · .portfolio-item background #fff + box-shadow transition 추가
  · :hover scale 1.04→1.03 + box-shadow 0 20px 56px rgba(0,0,0,0.16)
  · img hover scale 1.12→1.08
  · .portfolio-overlay 전면 교체 — translateY(100%)→0 슬라이드업, rgba(255,255,255,0.88) 유리 바, backdrop-filter blur(10px)
  · .overlay-inner padding 20px 24px, transform/transition none
  · .overlay-cat/#name/#tags 텍스트 색상 검정 계열로 전환
2026-03-26 | 개발자 | portfolio-detail.html insta-fab 추가 (누락 페이지 보완) — ✅ 완료
2026-03-26 | 어시스턴트 | 5차 — clients 테이블 SQL + Storage 버킷 가이드 작성 (04_output.md) ✅
2026-03-26 | 어시스턴트 | Boss 완료 보고 — clients 테이블 생성 ✅ + Storage clients 버킷(Public) 생성 ✅
2026-03-26 | 디자이너 | Admin 클라이언트 로고 관리 탭 UI CSS (10차) — .admin-tabs/.admin-tab-btn/.clients-admin-grid/.client-logo-card/.delete-overlay/.clients-upload-zone — ✅ 완료, 팀장 검토 대기
2026-03-26 | 개발자 | 20차 Impact shimmer + 21차 Admin 클라이언트 로고 관리 구현 — ✅ 완료
  · 20차: impactBreathe → impactShimmer 교체 (background gradient + webkit-background-clip, 3.5s linear infinite)
  · 21차A: admin.html 탭(.admin-tabs) + clientsPanel 추가
  · 21차B: admin.js 탭 전환 / loadClients() / renderClientCard() / deleteClient() / uploadClientFiles() (drag&drop+click)
  · 21차C: portfolio.html 하드코딩 cl_01~25 제거 → clientsGrid + 인라인 JS loadClients() 동적 렌더링
  · 21차D: admin.css 탭/업로드존/클라이언트그리드/카드/삭제오버레이 스타일 추가
  · ⚠️ Boss 필수: Supabase `clients` 테이블 생성 (id, logo_url, sort_order, created_at) + Storage `portfolio/clients/` 경로 확인
2026-03-26 | 개발자 | 22차 — Storage 버킷명 수정 + clients 시딩 스크립트 생성 — ✅ 완료
  · A: admin.js uploadClientFiles() Storage .from('portfolio') → .from('trusted by'), 경로 clients/ prefix 제거
  · B: tools/seed-clients.html 생성 — cl_01~cl_25 25개 upsert (sort_order 충돌 방지)

2026-03-26 | 어시스턴트 | HTML 5개 페이지 일관성 감사 + cl_01~25 파일 확인 (6차) — ✅ 완료. 불일치: portfolio.html 폴백 cl 이미지 경로 오류(🔴), index FAB 동작 차이(🟡)
2026-03-26 | 디자이너 | 전체 UI/UX 능동 점검 (11차) — 7개 이슈 발견 (02_output.md) — ✅ 완료, 팀장 검토 대기
  · 🔴 필터 버튼 모바일 오버플로 (flex-wrap 누락)
  · 🔴 clients 폴백 이미지 경로 오류 (portfolio/img → assets/clients)
  · 🟡 빈 필터 결과 UX 미구현 (.portfolio-empty CSS + JS)
  · 🟡 Contact 성공 상태 CSS 없음 (.form-success-state)
  · 🟡 client-logo hover transform 0.6s → 0.3s 개선
  · 🟢 footer-copy 연도 JS 누락
  · 🟢 portfolio.html insta-fab visible 하드코딩
2026-03-26 | 개발자 | 23차 — 디자이너11차 JS 반영 — ✅ 완료
  · A: main.js renderPortfolio() setTimeout 내부 — filtered.length === 0 빈 결과 .portfolio-empty 메시지 표시
  · B: main.js contactForm.innerHTML 인라인 스타일 제거 → .form-success-state 클래스 기반으로 교체 (✓ 아이콘 / 감사합니다! / 문의접수 안내 / INSTAGRAM 링크)
2026-03-26 | 어시스턴트 | portfolio.html TOTAL WORKS 텍스트 블록 제거 (7차) — ✅ 완료
2026-03-26 | 디자이너 | 커스텀 커서 CSS + Admin 체크박스 피드백 강화 (12차) — ✅ 완료, 팀장 검토 대기
  · A: cursor url() SVG 데이터 URI — 기본(stroke 0.8) / 포인터(stroke 1.5) 2종, hotspot (2,1)
  · B: .check-item span ✓ 아이콘 슬라이드인 + scale(1.04) + box-shadow 선택 피드백
2026-03-26 | 개발자 | 24차 — 포트폴리오 contain 전환 + 디자이너12차 CSS 반영 — ✅ 완료
  · A: style.css .portfolio-thumb background:var(--g6) 추가 / .portfolio-thumb img object-fit:cover→contain + padding:16px
  · B: admin.js 카테고리 체크박스 JS 확인 — getCategoryCheckboxes/setCategories/getSelectedCategories 정상, 수정 불필요
  · 디자이너12차A: style.css :root 바로 아래 커스텀 커서 CSS 삽입 (html,* 기본 / a,button 등 포인터)
  · 디자이너12차B: admin.css .check-item span → inline-flex + ::before ✓ 슬라이드인 + :checked scale(1.04) + box-shadow
2026-03-26 | 어시스턴트 | Admin 버그 수정 + 클라이언트 로고 업로드 완료 (8차) — ✅ 완료
  · admin.html 텍스트 수정 — 프로젝트명→클라이언트, 태그→세부 용역
  · admin.js parseInt(uuid) 버그 수정 → 수정 시 UPDATE 대신 INSERT되던 문제 해결 (formId.value, el.dataset.id 3곳)
  · admin.js Storage 버킷명 오류 수정 — 'trusted by' → 'clients'
  · admin.js 드래그앤드롭 다중 창 버그 수정 — _isDragging 플래그로 click 이벤트 충돌 방지
  · Supabase RLS 정책 추가 — portfolio FOR ALL (authenticated) + storage.objects clients 버킷 INSERT/DELETE
  · cl_01~cl_25.png 25개 Supabase Storage(clients) + clients 테이블 업로드 완료 ✅
  · portfolio.html TOTAL WORKS 카운트 섹션 제거 (7차 이월)
2026-03-26 | 디자이너 | 사이트 전체 UI/UX 점검 (13차) — 7개 이슈 발견 (02_output.md) — ✅ 완료, 팀장 검토 대기
  · 🔴 services.html 모바일 햄버거 닫기 버튼 안 보임 (nav-light + mobile-menu 충돌)
  · 🟡 portfolio thumbnail contain→cover 복원 권고 / count-up 잔존 / 마케팅 제목 불균형 / process-step 호버
  · 🟢 value-card hover 강화 / about 한글 자간 완화
2026-03-26 | 개발자 | 25차 — 사이트 전체 기능/코드 점검 — ✅ 완료 (이슈 6건)

  🔴 버그 (수정 필요)
  1. [js/main.js:162] renderCard() — item.tags.join() 크래시 위험
     · 문제: tags가 DB에서 null이거나 string으로 오면 TypeError (join은 Array 메서드)
     · 제안: Array.isArray(item.tags) 방어 처리 추가
  2. [portfolio.html:119] clients 정적 폴백 이미지 경로 오류
     · 문제: `assets/portfolio/img/cl_XX.png` — 실제 파일 위치는 `assets/clients/cl_XX.png`
     · 제안: 폴백 경로 수정 (Supabase 정상이면 폴백 미사용이지만 오프라인 대비)
  3. [tools/seed-clients.html:35] 시딩 logo_url 경로 오류
     · 문제: `assets/portfolio/img/cl_XX.png` — 실제는 `assets/clients/` (어시스턴트 8차 업로드는 Storage이므로 URL 다름)
     · 현황: Supabase clients 테이블 이미 업로드됨 → 시딩 스크립트는 참고용 보관

  🟡 개선 권장
  4. [js/main.js:343] emailjs 미로드 시에도 성공 메시지 표시
     · 문제: emailjs undefined일 때 전송 생략되지만 success HTML로 교체됨 — 실제 미전송 상태
     · 제안: emailjs 체크를 try 블록 상단으로 이동, 없으면 에러 표시
  5. [about.html:183 / services.html:203 / portfolio.html:90] insta-fab visible 하드코딩
     · 문제: 3개 페이지 모두 `class="insta-fab visible"` — 항상 노출. index.html은 JS 스크롤 후 토글
     · 제안: id="instaFab" 추가 + FAB 스크롤 토글 로직 3페이지에도 삽입 (또는 서브페이지는 항상 표시 정책 확인)
  6. [js/transitions.js:14] index.html#contact 링크 — 페이지 전환 애니메이션 없음
     · 문제: href.includes('#') 조건으로 about/services CONTACT 클릭 시 exit 트랜지션 스킵
     · 제안: 의도 확인 후 유지 or href.startsWith('#')만 남기고 해당 조건 제거
2026-03-26 | 디자이너 | 폰트 사이즈 + 모바일 반응형 전체 점검 (14차) — 9개 이슈 발견 (02_output.md) — ✅ 완료, 팀장 검토 대기
  · 🔴 .service-card p 13px→14px / .process-step p 13px→14px
  · 🔴 .filter-btn 터치 영역 44px 미달 (padding 8→12px) / .nav-mobile-btn 터치 영역 미달 (padding 4→10px)
  · 🟡 본문류 4종 14→15px / 레이블류 10~11→12px / portfolio 카드 480px 160→180px
  · 🟢 about-body 480px 조정 / main-intro-right p margin 모바일 축소
2026-03-26 | 디자이너 | 연혁 타임라인 디자인 개선 (15차) — HTML 변경 없음, CSS만으로 구현 (02_output.md) — ✅ 완료, 팀장 검토 대기
  · 연도 13px → 44px bold 장식 숫자 (color: var(--g4))
  · history-events::before 세로 타임라인 선 + history-event::before 도트 추가
  · 호버: 행 하이라이트 + 점 scale(1.6) + 연도/선 컬러 변화
  · 모바일 768px: 2컬럼 → 수직 배열, 연도 30px / 480px: 연도 26px
2026-03-26 | 디자이너 | Admin 전체 UX/UI 점검 (16차) — 7개 이슈 발견 (02_output.md) — ✅ 완료, 팀장 검토 대기
  · 🔴 카테고리 체크박스 ✓ + scale + shadow (admin.css 교체) / form-grid 재배치 (카테고리 full-width, 정렬순서 grid 2열)
  · 🟡 item-order 대비 #ccc→#666 / drag-handle 가시성 개선 / clients 업로드 존 인라인→클래스 / admin.css 중복 블록 4개 정리 권고
  · 🟢 클라이언트 로고 수 표시 추가 제안
2026-03-26 | 디자이너 | portfolio-detail 점검 + Contact 전환율 개선 (17차) — 10개 이슈 발견 (02_output.md) — ✅ 완료, 팀장 검토 대기
  · A(detail): 480px 미디어쿼리 추가 / detail-cat·back·nav-dir 12px / detail-name 한글 자간 완화 / 빈 상태 클래스화 / 이미지 2열 그리드 제안 / 모바일 목록 링크
  · B(contact): 🔴 "영업일 1일 내 회신" 배지(녹색 pulse 점) / 전화번호 tel: 직통 링크 / 🟡 textarea placeholder 구체화 / CTA "무료 상담 신청"
2026-03-26 | 디자이너 | Contact 성공 메시지 + 라이트박스 제안 (18차) — HTML/CSS/JS 코드 완성 (02_output.md) — ✅ 완료, 팀장 검토 대기
  · A: SVG stroke 드로잉 체크 애니메이션 + "영업일 1일 내" 문구 + 포트폴리오 링크/리셋 버튼 추가
  · B: 순수 JS 라이트박스 — 클릭팝업/←→버튼/ESC/배경클릭 닫기/키보드/카운터/모바일 대응 (외부 라이브러리 없음)
2026-03-26 | 개발자 | 26차 — 디자이너13차 + 25차 점검 결과 반영 A~G — ✅ 완료
  · A: style.css #nav.nav-light .nav-mobile-btn.active span { background: var(--black) !important } 추가 (X버튼 흰 배경 문제)
  · B: main.js renderCard() item.tags → Array.isArray 방어처리 (.map 크래시 방지)
  · C: about.html count-up 클래스 + data-target + data-plus 제거 → 정적 텍스트(100+, 5)
  · D: style.css .process-step transition + :hover background:#181818 + :hover .process-num color:var(--g2) 추가
  · E: style.css .service-row:last-child .service-row-right h2 { padding-bottom:0.9em } 추가
  · F: style.css .value-card transition에 transform/box-shadow 추가 + :hover translateY(-6px) + box-shadow 강화
  · G: about.html page-hero-title style="letter-spacing:-0.01em" 추가
2026-03-26 | 개발자 | 27차 — Admin 업로드 가이드 + 버그 수정 A~D — ✅ 완료
  · A: admin.html thumbUploadArea/detailUploadArea 아래 .upload-guide 문구 추가 / clientsUploadZone 가이드 문구 교체
  · A: admin.css .upload-guide { font-size:11px; color:#aaa; margin-top:6px } 추가
  · C: admin.js uploadClientFiles() — max sort_order 루프 전 1회만 조회 후 nextOrder++ 증가 (동시 업로드 중복 방지)
  · D: admin.js confirmDeleteBtn — DB 삭제 전 Storage thumb_url + detail_images 파일 remove 처리 추가
2026-03-26 | 개발자 | 28차 — Admin 클라이언트 드래그 순서 + 상세 이미지 개별 삭제 — ✅ 완료
  · A: admin.js loadClients() 끝에 Sortable.create(grid) 추가 — onEnd 시 sort_order 순차 업데이트
  · A: admin.css .client-logo-card cursor:grab / :active cursor:grabbing 추가
  · B: admin.js openEditModal() 기존 상세 이미지 렌더 → detail-preview-wrap + detail-remove-btn X버튼 개별 삭제
  · B: admin.css .detail-preview-wrap (relative/inline-block) + .detail-remove-btn (absolute top-right 원형) 추가
2026-03-26 | 개발자 | 29차 — 디자이너14차 폰트/모바일 A~F 반영 — ✅ 완료
  · A: service-card p 13→14px / process-step p 13→14px
  · B: value-card p 14→15px / contact-desc 14→15px / service-detail-list li 14→15px
  · C: nav-links a 11→12px / filter-btn 11→12px / card-eyebrow 11→12px / form-notice 11→12px / stat-label 11→12px / footer-slogan 11→12px / service-tag 11→12px / service-row-tag 10→11px
  · D: nav-mobile-btn padding 4→10px / @media 768px .filter-btn padding 12px 16px 추가
  · E: @media 480px portfolio-grid grid-auto-rows 160→180px
  · F: @media 480px .about-body font-size 16px 추가 / @media 768px .main-intro-right p margin-bottom 24px 추가
2026-03-26 | 개발자 | 30차 — about.html 수치 변경 + 핵심 서비스 바로가기 — ✅ 완료
  · A: about.html stat-num 100+ → 300+
  · B: about.html 핵심 서비스 stat에 <a class="stat-link"> 바로가기 → services.html 추가
  · B: style.css .stat-link / .stat-link:hover 스타일 추가
2026-03-26 | 개발자 | 31차 — admin.css 긴급 버그 수정 — ✅ 완료
  · A: admin.css :root에 --black:#111111 / --white:#ffffff 추가 (check-item:checked 배경색 무효화 수정)
2026-03-26 | 개발자 | 32차 — 연혁 타임라인 CSS + Admin UX 16차 반영 — ✅ 완료
  · A: style.css history 블록 전면 개선 — .history-year 44px/700/var(--g4), ::before 세로선+도트, hover scale(1.6)+컬러변화, @768px 30px/@480px 26px
  · B-1: admin.css .check-item 블록 교체 — border-radius:20px pill, ::before ✓ (checked 시), scale(1.06)+shadow
  · B-2: admin.html form-grid 재배치 — [클라이언트+정렬순서] 2열, 카테고리 full-width, 세부용역 독립
  · B-3: admin.css .item-order color var(--g5)→var(--g3) + font-weight 700
  · B-4: admin.css .drag-handle color var(--g5)→var(--g4) + hover: var(--g2) + transition 추가
  · B-5: admin.html clients 업로드 존 인라인 스타일 → .upload-label/.upload-hint 클래스 교체 + admin.css 클래스 추가
  · B-6: admin.css 중복 블록 4개 삭제 (구버전 admin-tabs/admin-tab-btn/clients-upload-zone/client-logo-card)
  · B-7: admin.html 클라이언트 로고 탭에 <span id="clientsCount"> 추가 + admin.js loadClients() 완료 후 카운트 업데이트
2026-03-26 | 개발자 | 33차 — 긴급버그2 + detail개선 + Contact개선 — ✅ 완료
  · A-1: detail.js:64 data.tags.join() → Array.isArray 방어처리 (null 크래시 수정)
  · A-2: index/about/services/portfolio/portfolio-detail.html footer Tel. 텍스트 → <a class="footer-tel" href="tel:..."> + style.css 스타일 추가
  · B-1: detail.css @media (max-width:480px) 블록 추가 (padding/font-size 조정)
  · B-2: detail.css .detail-cat/.detail-back/.nav-dir font-size 11→12px
  · B-3: detail.css .detail-name letter-spacing -.03em→-.015em + word-break:keep-all 추가
  · B-4: detail.css .detail-empty 클래스 추가 / detail.js:73 인라인 스타일 → class="detail-empty" 교체
  · B-5: detail.css 이미지 3장 이상 2열 그리드 (.detail-images-grid) + detail.js 렌더 후 클래스 추가
  · C-1: index.html .contact-email 아래 contact-reply-badge (녹색 pulse 점 + "영업일 1일 내 회신") 추가 + style.css CSS
  · C-2: index.html .contact-insta 앞에 contact-phone tel: 링크 추가 + style.css CSS
  · C-3: index.html textarea placeholder 구체화 (업종/규모/일정 안내)
  · C-4: index.html 각 input/textarea에 aria-label 추가
2026-03-26 | 개발자 | 34차 — Contact버그+성공메시지+라이트박스 — ✅ 완료
  · A: transitions.js 14번 줄 삭제 (href.includes('#') — index.html#contact 전환 불안정 수정)
  · B-1: main.js contactForm.innerHTML — SVG stroke 체크 애니 + 문구 개선 + 포트폴리오 링크 + 다시문의 버튼 + 클릭 리스너
  · B-2: style.css .form-success-state 블록 교체 — checkAppear/circleStroke/checkStroke/fadeUp 순차 애니메이션
  · C-1: detail.css 끝에 /* ===== LIGHTBOX ===== */ 블록 추가 (오버레이+버튼+카운터+모바일 반응형)
  · C-2: detail.js 이미지 렌더 후 initLightbox(data.detail_images) 호출 + 파일 끝에 initLightbox() 함수 추가
2026-03-26 | 개발자 | 35차 — seed 로그인 UI + portfolio 67개 대응 확인 — ✅ 완료
  · A: tools/seed-portfolio-final.html 상단에 로그인 폼(이메일/비번/로그인 버튼) 추가 + seedBtn 기본 disabled, 로그인 성공 시 활성화
  · B: portfolio.html .portfolio-page-section 확인 → isMainPage=false → slice(0,9) 미적용, 전체 67개 표시. loadPortfolio() limit 없음. 필터/레이아웃 이상 없음.
2026-03-26 | 개발자 | 36차 — 포트폴리오 정사각형 그리드 + card-idx 베리에이션 — ✅ 완료
  · A: style.css 벤토 규칙 전부 삭제 (5n+1/5n+3 span, grid-auto-rows, portfolio-main nth-child 전부)
  · A: style.css .portfolio-grid → repeat(4,1fr) gap:3px (grid-auto-rows/dense 제거)
  · A: style.css .portfolio-item → aspect-ratio:1/1, will-change, 새 transition/hover 스펙
  · A: style.css .portfolio-thumb img → object-fit:cover (contain+padding 제거), scale(1.06)
  · A: style.css .card-idx + hover opacity:0 추가
  · A: style.css @768px → repeat(3,1fr) gap:2px / @480px → repeat(2,1fr) gap:2px (벤토 반응형 삭제)
  · B: main.js renderCard(item, idx) → idxStr padStart(2,'0') → <span class="card-idx"> 추가
  · B: main.js filtered.map((item,i) => renderCard(item,i)) 호출부 수정
2026-03-26 | 개발자 | 37차 — 포트폴리오 tilt 제거 — ✅ 완료
  · A: main.js initPortfolioTilt() 함수 전체 삭제 (/* ===== PORTFOLIO 3D TILT ===== */ 블록)
  · A: main.js renderPortfolio() 내 initPortfolioTilt() 호출 줄 삭제
  · B: style.css .portfolio-item에서 will-change: transform 삭제
2026-03-26 | 개발자 | 38차 — Admin sort_order swap + 메인 노출 12개 — ✅ 완료
  · admin.js 저장 시 sort_order swap 로직 추가 (새 번호와 충돌하는 항목이 있으면 구 번호로 교환)
  · admin.html 정렬순서 힌트 "1~9위" → "1~12위" + placeholder 업데이트
  · main.js slice(0,9) → slice(0,12) (메인 페이지 포트폴리오 노출 개수 확대)
2026-03-26 | 개발자 | 39차 — is_featured 메인 노출 구현 — ✅ 완료
  · admin.html 정렬순서 아래 <label class="featured-check"> 체크박스 추가
  · admin.js payload에 is_featured 포함 / 수정 모달에서 기존 값 복원 / 새 항목 추가 시 false 초기화
  · admin.js renderList() — is_featured===true 항목에 ★ MAIN 뱃지 표시
  · main.js shuffleArray() 함수 추가 + isMainPage 분기: featured>=12 시 featured 랜덤 12개, 미달 시 전체 랜덤 12개
  · admin.css .featured-check + .item-featured-badge 스타일 추가
2026-03-26 | 개발자 | 40차 — 기획자22차 반영 (오버레이/Process/인스타) — ✅ 완료
  · A: style.css .portfolio-overlay background 밝은 회색(rgba(248,248,248,0.93)) + backdrop-filter blur(8px) / overlay-cat→g2 / overlay-name 15px/700/black / overlay-tags span 색상 전환
  · B: style.css .process-steps background #1a1a1a→#2a2a2a / .process-step:hover #181818→#1e1e1e
  · C: index.html .contact-insta 링크 블록 삭제 / style.css .contact-insta + :hover 블록 삭제
2026-03-26 | 개발자 | 41차 — style.css 미반영 CSS 4개 처리 — ✅ 완료
  · A: .history-year color var(--g4) → var(--g3)
  · B: @480px .form-success-state { padding: 32px 0 } 추가
  · C: :root에 --reply-green: #2ecc71 추가 / .reply-dot background → var(--reply-green, #2ecc71)
  · D: @480px .form-success-links { flex-direction: column; gap: 12px } 추가

2026-03-26 | 어시스턴트 | Admin 버그 수정 (9차) — RLS 무음 실패 탐지 + 탭 전환 목록 소실 수정 — ✅ 완료
  · 문제 1: portfolio UPDATE가 RLS로 0행 업데이트 돼도 error=null → "저장 완료" 뜨며 실제로 저장 안됨
    → admin.js .update().select() 추가 + data.length===0 시 에러 표시로 수정
    → Boss가 Supabase SQL Editor에서 portfolio FOR ALL (authenticated) 정책 재생성 완료 ✅
  · 문제 2: 클라이언트 로고 탭 갔다가 포트폴리오 탭 복귀 시 portfolioList.style.display='none' 미복구 → 목록 소실
    → tab 전환 시 portfolioList.style.display='' 복구 코드 추가
  · ⚠️ 잔존 이슈: Admin 카테고리 UX — 회색(미선택)·검정(선택) 구분이 Boss에게 직관적이지 않음 → 개발자/디자이너 재검토 필요
2026-03-26 | 어시스턴트 | 11차 — 포트폴리오 전체 38개 수집 + seed-portfolio-full.html 생성 — ✅ 완료 (05_output.md)
  · 구 사이트 vdirectors.com 전체 수집: 확정 24개(board_idx 매핑) + 신규 14개
  · category/tags 세부 분류, 상세 이미지 URL(구 사이트 외부 URL) 포함
  · tools/seed-portfolio-full.html 생성 — name 기준 upsert, 38개 데이터
  · ⚠️ KEMY/ABCLABS/인천도시공사 board_idx 미확인 → 상세 이미지 없음. Admin 수동 보완 필요
  · ⚠️ 상세 이미지가 구 사이트 URL — 사이트 폐쇄 전 Supabase Storage 이전 필요
2026-03-26 | 어시스턴트 | 14차 — 상세 페이지 시각 검토 후 tags/category 재수정 — ✅ 완료
  · 29개 항목 업데이트 (tools/update-tags.mjs)
  · 바른보험(172)/배차킹(171)/인천국제공항(148): category design→video + ["영상 제작","모션그래픽"]
  · HAM(163)/DCN바이오(111)/Market M Bang(89): 상세페이지 디자인/SNS 콘텐츠/제품 사진으로 재분류
  · 영상 13개(sort 22~34): ["영상 제작","모션그래픽"] 통일
  · Yogo(174)/KoKoPang(173): 브랜딩+영상 복합
  · 실행: node tools/update-tags.mjs
2026-03-26 | 어시스턴트 | 13차 — seed-portfolio-final.html 이름 6개 수정 + Boss 실행 가이드 05_output.md 추가 — ✅ 완료
  · 하릭→HARIK / 코시→COSI / 요고프로즌→Yogo / 코코팡→KoKoPang / 그린팬→GreenPan / 어플라이드 머터리얼즈→Applied Materials
2026-03-26 | 어시스턴트 | 12차 — vdirectors.com 실제 스캔(67개) + seed-portfolio-final.html 생성 — ✅ 완료 (05_output.md)
  · 6페이지 전체 fetch: 총 67개 항목 (board_idx 87~182)
  · 카테고리 분류: video 15개(GIF 썸네일 기준) / web 8개 / marketing 1개 / design 43개
  · 이전 11차는 무효 처리(67개 중 이상 데이터 포함) → 이번 12차가 최종 기준
  · tools/seed-portfolio-final.html 생성 — sort_order 기준 upsert(onConflict: 'sort_order')
  · ⚠️ sort 19(어플라이드 머터리얼즈, board_idx 156): thumb_url 파일명 미확인 → thumb_url 빈값
  · ⚠️ 육대장 2건: sort 1(신규 디자인, idx 182) / sort 66(홈페이지, idx 100 = 기존 pt6)
  · ⚠️ MOMENTO 2건: sort 42(idx 112) / sort 67(idx 99) — 다른 작업물
2026-03-26 | 어시스턴트 | 10차 — detail/접근성/에이전시 비교 A/B/C 점검 — ✅ 완료 (05_output.md)
  · A 🔴: detail.js:64 tags null 크래시 위험 (Array.isArray 방어처리 누락) → 개발자 수정 필요
  · A 🟡: 상세 이미지 onerror 없음 / insta-fab 전 페이지 부재(정책 확인 필요)
  · B 🔴: Contact 폼 aria-label 없음 / portfolio.html clients img alt="Client"(의미 없음)
  · B 🟡: filter-btn aria-pressed 없음
  · C 🔴: tel: 전화 링크 없음(모바일 클릭 전화 불가) / 카카오톡 채널 없음
  · C 🟡: 케이스스터디/수상배지/고객 후기 없음
2026-03-26 | 디자이너 | 최종 UI 품질 점검 + About 팀 소개 섹션 제안 (19차) — ✅ 완료, 팀장 검토 대기
  · A: 4개 이슈 발견 — 🔴 History 타임라인 선/점 var(--g4)→var(--g3) 대비 수정 / 🔴 form-success-state 480px 패딩 52→28px / 🟡 reply-dot 변수화 / 🟡 form-success-links 모바일 방향
  · B: About 팀 소개 섹션 — about-values-section 뒤 삽입 / 4열 그리드 / 사진 없음 / CEO·기획마케팅팀·디자인팀·개발팀 / 반응형 포함
2026-03-26 | 기획자 | 포트폴리오 정사각형 그리드 재설계 + 호버 효과 (20차) — ✅ 완료, 팀장 검토 대기
  · A: 4열 균일 그리드 / aspect-ratio 1/1 / object-fit cover / 벤토 규칙 전부 제거 / 768px→3열 / 480px→2열
  · B: 베리에이션 추천 — 카드 우하단 순번 인덱스 (CSS .card-idx + JS renderCard index 파라미터)
  · C: 다크 오버레이 슬라이드업 유지 / Spotlight Dim 0.18→0.35 / scale 0.94→0.97 완화
2026-03-26 | 기획자 | 포트폴리오 호버 재설계 — tilt 제거 (21차) — ✅ 완료, 팀장 검토 대기
  · initPortfolioTilt() 전체 삭제 / renderPortfolio 내 호출 삭제 / will-change 제거
  · CSS hover (scale/spotlight/overlay/img zoom) 그대로 유지 — 추가 변경 없음
2026-03-26 | 기획자 | 포트폴리오 오버레이 + Process 호버 + Contact 인스타 제거 CSS 스펙 (22차) — ✅ 완료, 팀장 검토 대기
  · A: 포트폴리오 오버레이 rgba(10,10,10,0.86) → rgba(248,248,248,0.93) + backdrop-filter blur(8px) + 텍스트 검정 전환
  · B: Process .process-steps #1a1a1a→#2a2a2a / .process-step:hover #181818→#1e1e1e
  · C: index.html Contact 섹션 .contact-insta 블록 제거 + style.css .contact-insta 스타일 삭제
2026-03-26 | 어시스턴트 | 12차 — 구 사이트 기준 67개 수집 + seed-portfolio-final.html 생성 — ✅ 완료 (05_output.md)
  · vdirectors.com 6페이지 전체 스캔 / 67개 / thumb_url + detail_images(구 사이트 URL) 포함
  · tools/seed-portfolio-final.html 생성 (sort_order 기준 upsert)
2026-03-26 | 팀장 | 업무 분장 — 4번(13차:이름수정+가이드) / 3번(35차:seed수정+portfolio확인) / 2번(19차:UX점검) — ✅ 지시 완료
  · 4번→3번 순서 의존성 있음 (동일 파일 수정) — 3번은 4번 13차 완료 후 시작

2026-03-26 | 기획자 | 19차 — 건너뜀 (팀장 지시) → 20차 바로 진행

2026-03-26 | 어시스턴트 | 15차 — tags 3차 업데이트 + 텍스트 정제 + sort66 복구 — ✅ 완료
  · tools/update-tags-2.mjs 실행 완료 — 35개 category/tags PATCH (REPLACE 방식, 구 버전)
  · tools/update-tags-3.mjs 생성 + 실행 완료 — 64개 히스토리 기반 MERGE 방식, 63개 성공 / 1개(sort66) 스킵
  · about.html 텍스트 정제 4곳: "사명은" → 회사명 표현 수정 / 나침반 클리셰 제거 / Continuity 중복 정리 / "항상 한 발 앞서" 교체
  · services.html 텍스트 정제 4곳: 소프트웨어개발 / UI/UX / 시각디자인 / 마케팅 AI 클리셰 제거
  · sort_order 66 (육대장 홈페이지) DB 미존재 확인 → INSERT 완료 (category:design,web / tags:홈페이지 제작,패키지 디자인,제품 촬영)
  · ⚠️ 디자이너 19차 이슈 미반영: History 타임라인 var(--g4)→var(--g3) / form-success 480px 패딩 / reply-dot 변수화 / form-success-links 모바일 → 개발자 반영 필요
  · tools/migrate-detail-images.mjs 생성 — detail_images 구 사이트 URL → Supabase Storage 이전 스크립트 (DNS 전환 전 Boss가 직접 실행)
