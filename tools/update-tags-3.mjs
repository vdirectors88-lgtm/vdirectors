// update-tags-3.mjs — 포트폴리오 tags/category 정밀 수정 (3차: 원본 히스토리 기반 추가 방식)
// 원칙: tags = [...원본tags, ...스캔tags].filter(중복제거), category 다중값 허용
// 실행: node tools/update-tags-3.mjs

const SUPABASE_URL = 'https://zpyzgicyfkancewoxmbg.supabase.co';
const SERVICE_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpweXpnaWN5ZmthbmNld294bWJnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDQ2MTk1NywiZXhwIjoyMDkwMDM3OTU3fQ.VC52H58cp7c-4WHRLvo6uHtoPtcvr09sBtbv3iPbonw';

// 원본 seed-runner.mjs 히스토리 + 스캔 결과 합산
// category: 다중값은 콤마 구분 문자열 (e.g. 'design,video')
// tags: 원본 + 스캔 결과 합집합 (중복 없음)
const updates = [
  // sort 1: 육대장 — 원본: ['패키지 디자인'] + 스캔: 브랜딩, 상세페이지
  { sort_order: 1,  name: '육대장',
    category: 'design',
    tags: ['패키지 디자인', '브랜딩', '상세페이지 디자인'] },

  // sort 2: HARIK — 원본: ['패키지 디자인'] + 스캔: 브랜딩, 상세페이지
  { sort_order: 2,  name: 'HARIK',
    category: 'design',
    tags: ['패키지 디자인', '브랜딩', '상세페이지 디자인'] },

  // sort 4: Yogo — 원본: ['패키지 디자인'] + 스캔: 브랜딩, 시각디자인, 영상 제작
  { sort_order: 4,  name: 'Yogo',
    category: 'design,video',
    tags: ['패키지 디자인', '브랜딩', '시각디자인', '영상 제작'] },

  // sort 5: KoKoPang — 원본: ['패키지 디자인'] + 스캔: 브랜딩, 로고 디자인, 영상 제작
  { sort_order: 5,  name: 'KoKoPang',
    category: 'design,video',
    tags: ['패키지 디자인', '브랜딩', '로고 디자인', '영상 제작'] },

  // sort 6: 바른보험 — 원본: ['시각 디자인'] + 스캔: 영상 제작, 모션그래픽 / category: design→design,video
  { sort_order: 6,  name: '바른보험',
    category: 'design,video',
    tags: ['시각 디자인', '영상 제작', '모션그래픽'] },

  // sort 7: 배차킹 — 원본: ['시각 디자인'] + 스캔: 영상 제작, 모션그래픽 / category: design→design,video
  { sort_order: 7,  name: '배차킹',
    category: 'design,video',
    tags: ['시각 디자인', '영상 제작', '모션그래픽'] },

  // sort 9: ARK — 원본: ['브랜딩', '패키지 디자인'] + 스캔: 로고 디자인
  { sort_order: 9,  name: 'ARK',
    category: 'design',
    tags: ['브랜딩', '패키지 디자인', '로고 디자인'] },

  // sort 10: ABCLABS — 원본: ['웹사이트 제작'] + 스캔: 반응형 웹
  { sort_order: 10, name: 'ABCLABS',
    category: 'web',
    tags: ['웹사이트 제작', '반응형 웹'] },

  // sort 11: GreenPan — 원본: ['SNS 마케팅', '콘텐츠 제작'] + 스캔: 이벤트페이지, 상세페이지
  { sort_order: 11, name: 'GreenPan',
    category: 'marketing',
    tags: ['SNS 마케팅', '콘텐츠 제작', '이벤트페이지 디자인', '상세페이지 디자인'] },

  // sort 12: HAM — 원본: ['패키지 디자인'] + 스캔: 상세페이지, SNS 콘텐츠, 시각디자인
  { sort_order: 12, name: 'HAM',
    category: 'design',
    tags: ['패키지 디자인', '상세페이지 디자인', 'SNS 콘텐츠', '시각디자인'] },

  // sort 13: BLAZAR — 원본: ['웹사이트 제작', '마케팅'] + 스캔: 로고 디자인, 브랜딩 / category: web→design,web
  { sort_order: 13, name: 'BLAZAR',
    category: 'design,web',
    tags: ['웹사이트 제작', '마케팅', '로고 디자인', '브랜딩'] },

  // sort 14: ECO Bio — 원본: ['브랜딩', '패키지 디자인'] + 스캔: 라벨 디자인
  { sort_order: 14, name: 'ECO Bio',
    category: 'design',
    tags: ['브랜딩', '패키지 디자인', '라벨 디자인'] },

  // sort 15: 미풍양주 — 원본: ['패키지 디자인'] + 스캔: 브랜딩
  { sort_order: 15, name: '미풍양주',
    category: 'design',
    tags: ['패키지 디자인', '브랜딩'] },

  // sort 16: YAMOUZINE BROS — 원본: ['패키지 디자인', '브랜딩'] + 스캔: 상세페이지
  { sort_order: 16, name: 'YAMOUZINE BROS',
    category: 'design',
    tags: ['패키지 디자인', '브랜딩', '상세페이지 디자인'] },

  // sort 18: HYPHEN — 원본: ['광고 영상', '타이틀 디자인'] + 스캔: 홍보영상, 영상 제작 / category: design→design,video
  { sort_order: 18, name: 'HYPHEN',
    category: 'design,video',
    tags: ['광고 영상', '타이틀 디자인', '홍보영상', '영상 제작'] },

  // sort 19: Applied Materials — 원본: ['어드바이저리 머터리얼', '시각 디자인'] + 스캔: PPT 디자인, 프레젠테이션
  { sort_order: 19, name: 'Applied Materials',
    category: 'design',
    tags: ['어드바이저리 머터리얼', '시각 디자인', 'PPT 디자인', '프레젠테이션'] },

  // sort 20: 글라세움 — 원본: ['브랜딩'] + 스캔: 웹사이트 제작, 반응형 웹 / category: design→design,web
  { sort_order: 20, name: '글라세움',
    category: 'design,web',
    tags: ['브랜딩', '웹사이트 제작', '반응형 웹'] },

  // sort 21: 인천국제공항 — 원본: ['시각 디자인'] + 스캔: 영상 제작, 모션그래픽 / category: design→design,video
  { sort_order: 21, name: '인천국제공항',
    category: 'design,video',
    tags: ['시각 디자인', '영상 제작', '모션그래픽'] },

  // sort 22~34: 영상 13개 — 원본: ['영상 제작'] + 스캔: 모션그래픽
  { sort_order: 22, name: '플레이보이',   category: 'video', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 23, name: 'TED',          category: 'video', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 24, name: 'CUBEME',       category: 'video', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 25, name: '딩고',          category: 'video', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 26, name: '애터미',        category: 'video', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 27, name: '브이라이브',    category: 'video', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 28, name: '멜론',          category: 'video', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 29, name: '비비고',        category: 'video', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 30, name: '설화수',        category: 'video', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 31, name: '네이버 바이브', category: 'video', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 32, name: '네이버 웹툰',  category: 'video', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 33, name: '카카오페이지', category: 'video', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 34, name: '카카오프렌즈', category: 'video', tags: ['영상 제작', '모션그래픽'] },

  // sort 35: 주간목장 — 원본: ['패키지 디자인'] + 스캔: 브랜딩, 홈페이지 제작, 상세페이지 / category: design→design,web
  { sort_order: 35, name: '주간목장',
    category: 'design,web',
    tags: ['패키지 디자인', '브랜딩', '홈페이지 제작', '상세페이지 디자인'] },

  // sort 36: 펫사랑 — 원본: ['패키지 디자인'] + 스캔: 브랜딩, 상세페이지
  { sort_order: 36, name: '펫사랑',
    category: 'design',
    tags: ['패키지 디자인', '브랜딩', '상세페이지 디자인'] },

  // sort 37: 펫츠앤 — 원본: ['패키지 디자인'] + 스캔: 제품 촬영, 상세페이지
  { sort_order: 37, name: '펫츠앤',
    category: 'design',
    tags: ['패키지 디자인', '제품 촬영', '상세페이지 디자인'] },

  // sort 38: 그린에너지 — 원본: ['시각 디자인'] + 스캔: 브랜딩, 로고 디자인
  { sort_order: 38, name: '그린에너지',
    category: 'design',
    tags: ['시각 디자인', '브랜딩', '로고 디자인'] },

  // sort 39: PROPER COMPANY — 원본: ['홈쇼핑 운영', '패키지 디자인'] + 스캔: 로고 디자인, 브랜딩
  { sort_order: 39, name: 'PROPER COMPANY',
    category: 'design',
    tags: ['홈쇼핑 운영', '패키지 디자인', '로고 디자인', '브랜딩'] },

  // sort 40: Your Vegan — 원본: ['패키지 디자인'] + 스캔: 제품 촬영, 뷰티
  { sort_order: 40, name: 'Your Vegan',
    category: 'design',
    tags: ['패키지 디자인', '제품 촬영', '뷰티'] },

  // sort 41: 농가의아침 — 원본: ['패키지 디자인'] + 스캔: 이벤트페이지, 상세페이지
  { sort_order: 41, name: '농가의아침',
    category: 'design',
    tags: ['패키지 디자인', '이벤트페이지 디자인', '상세페이지 디자인'] },

  // sort 42: MOMENTO — 원본: ['브랜딩', '패키지 디자인'] + 스캔: 제품 촬영, 의류
  { sort_order: 42, name: 'MOMENTO',
    category: 'design',
    tags: ['브랜딩', '패키지 디자인', '제품 촬영', '의류'] },

  // sort 43: DCN바이오 — 원본: ['시각 디자인'] + 스캔: 상세페이지, 제품 촬영
  { sort_order: 43, name: 'DCN바이오',
    category: 'design',
    tags: ['시각 디자인', '상세페이지 디자인', '제품 촬영'] },

  // sort 44: CLEANHARA — 원본: ['상품 기획', '패키지 디자인'] + 스캔: 제품 촬영, 뷰티
  { sort_order: 44, name: 'CLEANHARA',
    category: 'design',
    tags: ['상품 기획', '패키지 디자인', '제품 촬영', '뷰티'] },

  // sort 45: 웰스 — 원본: ['패키지 디자인'] + 스캔: 제품 촬영, 식품
  { sort_order: 45, name: '웰스',
    category: 'design',
    tags: ['패키지 디자인', '제품 촬영', '식품'] },

  // sort 46: BESTSOLUTION — 원본: ['상품 기획', '홈페이지 제작'] + 스캔: 제품 촬영, 누끼 작업 / category: web→design,web
  { sort_order: 46, name: 'BESTSOLUTION',
    category: 'design,web',
    tags: ['상품 기획', '홈페이지 제작', '제품 촬영', '누끼 작업'] },

  // sort 47: 루틴 — 원본: ['브랜딩'] + 스캔: 광고 영상, 바이럴 마케팅 / category: design→design,video
  { sort_order: 47, name: '루틴',
    category: 'design,video',
    tags: ['브랜딩', '광고 영상', '바이럴 마케팅'] },

  // sort 48: DAEKYUNG ESCO — 원본: ['홈쇼핑 운영', '패키징'] + 스캔: 홍보영상, 영상 제작 / category: design→design,video
  { sort_order: 48, name: 'DAEKYUNG ESCO',
    category: 'design,video',
    tags: ['홈쇼핑 운영', '패키징', '홍보영상', '영상 제작'] },

  // sort 49: 연세대학교 — 원본: ['홈페이지 제작'] + 스캔: 라이브 스트리밍, 행사 영상 / category: web→web,video
  { sort_order: 49, name: '연세대학교',
    category: 'web,video',
    tags: ['홈페이지 제작', '라이브 스트리밍', '행사 영상'] },

  // sort 50: 리안컴퍼니 — 원본: ['브랜딩'] + 스캔: 제품 촬영, 카페
  { sort_order: 50, name: '리안컴퍼니',
    category: 'design',
    tags: ['브랜딩', '제품 촬영', '카페'] },

  // sort 51: SA — 원본: ['브랜딩 전략', 'BI 개발'] + 스캔: 상세페이지, 뷰티
  { sort_order: 51, name: 'SA',
    category: 'design',
    tags: ['브랜딩 전략', 'BI 개발', '상세페이지 디자인', '뷰티'] },

  // sort 52: LA FLORELLE — 원본: ['패키지 디자인', '브랜딩'] + 스캔: 제품 촬영, 뷰티
  { sort_order: 52, name: 'LA FLORELLE',
    category: 'design',
    tags: ['패키지 디자인', '브랜딩', '제품 촬영', '뷰티'] },

  // sort 53: Market M Bang — 원본: ['시각 디자인'] + 스캔: 상세페이지, SNS 콘텐츠
  { sort_order: 53, name: 'Market M Bang',
    category: 'design',
    tags: ['시각 디자인', '상세페이지 디자인', 'SNS 콘텐츠'] },

  // sort 54: 피플인아트 — 원본: ['브랜딩', '패턴 디자인'] + 스캔: SNS 마케팅, 인스타그램 / category: design→design,marketing
  { sort_order: 54, name: '피플인아트',
    category: 'design,marketing',
    tags: ['브랜딩', '패턴 디자인', 'SNS 마케팅', '인스타그램'] },

  // sort 55: VARRAM — 원본: ['브랜딩', '패키지 디자인'] + 스캔: 홍보영상, 이벤트페이지 / category: design→design,video
  { sort_order: 55, name: 'VARRAM',
    category: 'design,video',
    tags: ['브랜딩', '패키지 디자인', '홍보영상', '이벤트페이지 디자인'] },

  // sort 56: 신선닭갈비 — 원본: ['패키지 디자인'] + 스캔: 이벤트페이지, 스마트스토어
  { sort_order: 56, name: '신선닭갈비',
    category: 'design',
    tags: ['패키지 디자인', '이벤트페이지 디자인', '스마트스토어'] },

  // sort 57: 꿀빠는시간 — 원본: ['패키지 디자인'] + 스캔: 이벤트페이지, 스마트스토어
  { sort_order: 57, name: '꿀빠는시간',
    category: 'design',
    tags: ['패키지 디자인', '이벤트페이지 디자인', '스마트스토어'] },

  // sort 58: 시간을들이다 — 원본: ['패키지 디자인'] + 스캔: 이벤트페이지, 스마트스토어
  { sort_order: 58, name: '시간을들이다',
    category: 'design',
    tags: ['패키지 디자인', '이벤트페이지 디자인', '스마트스토어'] },

  // sort 59: AIinsight — 원본: ['웹사이트 제작', '브랜딩', '마케팅'] + 스캔: 패키지 디자인, 이벤트페이지
  { sort_order: 59, name: 'AIinsight',
    category: 'web',
    tags: ['웹사이트 제작', '브랜딩', '마케팅', '패키지 디자인', '이벤트페이지 디자인'] },

  // sort 60: 진해양봉 — 원본: ['패키지 디자인', '브랜딩'] + 스캔: 이벤트페이지
  { sort_order: 60, name: '진해양봉',
    category: 'design',
    tags: ['패키지 디자인', '브랜딩', '이벤트페이지 디자인'] },

  // sort 61: 리빙안 — 원본: ['브랜딩'] + 스캔: 제품 촬영
  { sort_order: 61, name: '리빙안',
    category: 'design',
    tags: ['브랜딩', '제품 촬영'] },

  // sort 62: b belladörr — 원본: ['브랜드 아이덴티티', '패키지 디자인'] + 스캔: 제품 촬영, 뷰티
  { sort_order: 62, name: 'b belladörr',
    category: 'design',
    tags: ['브랜드 아이덴티티', '패키지 디자인', '제품 촬영', '뷰티'] },

  // sort 63: 나무감정평가법인 — 원본: ['홈페이지 제작', 'SNS 마케팅'] + 스캔: 블로그 관리, 인스타그램 / category: web→web,marketing
  { sort_order: 63, name: '나무감정평가법인',
    category: 'web,marketing',
    tags: ['홈페이지 제작', 'SNS 마케팅', '블로그 관리', '인스타그램'] },

  // sort 64: NST바이오 — 원본: ['시각 디자인'] + 스캔: 패키지 디자인, 제품 촬영, 상세페이지
  { sort_order: 64, name: 'NST바이오',
    category: 'design',
    tags: ['시각 디자인', '패키지 디자인', '제품 촬영', '상세페이지 디자인'] },

  // sort 65: THELSTAR — 원본: ['상품 개발', '브랜드 네임', '패키징 디자인'] + 스캔: 제품 촬영
  { sort_order: 65, name: 'THELSTAR',
    category: 'design',
    tags: ['상품 개발', '브랜드 네임', '패키징 디자인', '제품 촬영'] },

  // sort 66: 육대장 홈페이지 — 원본: ['홈페이지 제작', '패키지 디자인'] + 스캔: 제품 촬영 / category: web→design,web
  { sort_order: 66, name: '육대장 홈페이지',
    category: 'design,web',
    tags: ['홈페이지 제작', '패키지 디자인', '제품 촬영'] },

  // sort 67: MOMENTO (패키지) — 원본: ['상품 개발', '패키징'] + 스캔: 패키지 디자인, 브랜딩
  { sort_order: 67, name: 'MOMENTO (패키지)',
    category: 'design',
    tags: ['상품 개발', '패키징', '패키지 디자인', '브랜딩'] },
];

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=minimal',
};

async function run() {
  console.log(`3차 tags/category 업데이트 (히스토리 기반 추가 방식)... 총 ${updates.length}개\n`);
  let ok = 0, fail = 0;

  for (const item of updates) {
    const checkRes = await fetch(
      `${SUPABASE_URL}/rest/v1/portfolio?select=id&sort_order=eq.${item.sort_order}`,
      { headers }
    );
    const existing = await checkRes.json();

    if (!existing || existing.length === 0) {
      console.log(`⚠️  [${item.sort_order}] ${item.name} — DB에 없음, 스킵`);
      fail++;
      continue;
    }

    const patch = { tags: item.tags, category: item.category };

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/portfolio?id=eq.${existing[0].id}`,
      { method: 'PATCH', headers, body: JSON.stringify(patch) }
    );

    if (res.ok) {
      console.log(`✅ [${item.sort_order}] ${item.name} — [${item.category}] ${JSON.stringify(item.tags)}`);
      ok++;
    } else {
      const err = await res.text();
      console.log(`❌ [${item.sort_order}] ${item.name} — ${err}`);
      fail++;
    }
  }

  console.log(`\n완료: ✅ ${ok}개 성공 / ❌ ${fail}개 실패`);
}

run();
