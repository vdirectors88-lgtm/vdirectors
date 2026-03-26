# vdirectors 홈페이지 리뉴얼

## 프로젝트 개요
- **회사명:** vdirectors (브이디렉터스)
- **도메인:** vdirectors.com
- **작업 목적:** 홈페이지 전면 리뉴얼 — 서비스 변경 + 디자인 전면 수정

## 기술 스택
- **호스팅:** GitHub Pages
- **프론트:** Vanilla HTML / CSS / JavaScript (프레임워크 없음)
- **DB / 백엔드:** Supabase (포트폴리오 Admin 관리용)
- **관리자 페이지:** 있음 (포트폴리오 등록/수정/삭제 + 순서 변경, SortableJS 드래그앤드롭, Supabase Auth 로그인)

## 카피
- **슬로건:** We Direct Your Value
- **서브텍스트:** From Idea to Impact

## 디자인 방향
- **키 컬러:** Grey 계열 (라이트 테마, 흰 배경 기반)
- **스타일:** 모던, 미니멀
- **레퍼런스:** Clay(clay.global) + Humaan(humaan.com) 믹스
- **모션:** 스크롤 시 콘텐츠 페이드인 (스크롤 하이재킹 없음)
- **폰트:** Pretendard (한/영 모두, 각지고 단단한 느낌)
- **구성:** 원페이지
- **언어:** 한국어 + 영어 혼용 (간지나게)
- **로고:** VDIRECTORS 올캡스 텍스트, 넓은 자간 (명함 스타일 참고)

## 섹션 구성
1. **Hero** — 슬로건 + 서브텍스트 + CTA (흰 배경 단색)
2. **About** — 회사 소개 텍스트 + 코어 밸류 3개
3. **Services** — 5개 서비스 카드
4. **Portfolio** — 작업물 쇼케이스 (Admin으로 관리) / 호버 시 오버레이+프로젝트명 슬라이드업 / 클릭 시 모달 팝업
5. **Contact** — 폼 형태 (contact@vdirectors.com으로 전송, EmailJS 사용)
6. **Footer**

## 회사 소개 텍스트
브이디렉터스는 브랜드의 가치(Value)를 이끌어가는 사람들(Directors)이라는 뜻입니다.
기획, 디자인, 개발, 마케팅까지 각 분야의 트렌드를 선도하는 젊은 전문가들이 모여 탄생한 아웃소싱 스타트업입니다.
어떤 종류의 프로젝트든, 주어진 리소스로 최대의 가치를 창출할 수 있도록 구성원 모두가 하나의 팀이 되어 끊임없이 고민합니다.

## 코어 밸류
- **Directionality** — 명확한 목표와 전략으로 프로젝트의 방향을 제시합니다
- **Continuity** — 납품 이후에도 함께하는 장기적 파트너십
- **Trend-Insight** — 빠르게 변화하는 시장과 기술 트렌드를 앞서 읽습니다

## 제공 서비스 (5개)
1. 소프트웨어 개발
2. 홈페이지 제작
3. UI/UX 디자인
4. 시각디자인
5. 마케팅

## Contact
- **이메일:** contact@vdirectors.com
- **형태:** 폼 (이름, 연락처, 문의내용 → 이메일 전송)

## Footer
- **주소:** 인천광역시 연수구 송도과학로56, 송도테크노파크BT센터 1401호 (주)브이디렉터스
- 기존 푸터 레이아웃 참고하되 디자인 전면 수정

## 포트폴리오 확정 목록 (24개)
pt1 MBC C&I, pt2 연세대학교, pt3 VARRAM, pt4 진해양봉, pt6 육대장,
pt7 b belladörr, pt8 AIinsight, pt9 BESTSOLUTION, pt12 나무감정평가법인,
pt13 피플인아트, pt15 THELSTAR, pt18 MOMENTO, pt20 SA, pt21 LA FLORELLE,
pt23 CLEANHARA, pt24 DAEKYUNG ESCO, pt28 KEMY, pt30 ABCLABS,
pt31 PROPER COMPANY, pt32 HYPHEN, pt33 CBS, pt34 ECO Bio,
pt35 BLAZAR, pt37 YAMOUZINE BROS

이미지 경로: assets/portfolio/img/pt{n}.png

## GitHub
- **계정:** vdirectors00-blip
- **레포:** 미정 (생성 필요)
- **로컬 경로:** C:\Users\PC\Desktop\vdirectors

## 파일 구조 (예정)
- index.html — 메인 페이지
- admin.html — 포트폴리오 관리자 페이지
- css/style.css
- css/admin.css
- js/main.js
- js/admin.js
- js/supabase-client.js
- assets/portfolio/img/ — 포트폴리오 이미지
- assets/ — 기타 이미지, 폰트 등

## 배포
- GitHub Pages 연결
- vdirectors.com 도메인 연결 (DNS → GitHub Pages)

## 주의사항
- 콘텐츠 수정 시 코드 직접 수정 후 GitHub push
- 포트폴리오만 Admin 페이지에서 관리
