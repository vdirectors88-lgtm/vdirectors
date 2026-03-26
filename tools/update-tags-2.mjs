// update-tags-2.mjs — 포트폴리오 2차 전체 tags/category 정밀 수정
// 실행: node tools/update-tags-2.mjs

const SUPABASE_URL = 'https://zpyzgicyfkancewoxmbg.supabase.co';
const SERVICE_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpweXpnaWN5ZmthbmNld294bWJnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDQ2MTk1NywiZXhwIjoyMDkwMDM3OTU3fQ.VC52H58cp7c-4WHRLvo6uHtoPtcvr09sBtbv3iPbonw';

const updates = [
  // ── category 변경 포함 ────────────────────────────────

  // BLAZAR: web(웹사이트 제작) → design(로고/브랜딩) — 실제로는 로고+명함+사이니지
  { sort_order: 13, name: 'BLAZAR',            category: 'design', tags: ['로고 디자인', '브랜딩'] },

  // HYPHEN: design → video (홍보영상 확인)
  { sort_order: 18, name: 'HYPHEN',            category: 'video',  tags: ['홍보영상', '영상 제작'] },

  // 글라세움: design(브랜딩) → web (반응형 웹사이트 제작)
  { sort_order: 20, name: '글라세움',           category: 'web',    tags: ['웹사이트 제작', '반응형 웹'] },

  // BESTSOLUTION: web → design (제품 촬영 + 누끼)
  { sort_order: 46, name: 'BESTSOLUTION',      category: 'design', tags: ['제품 촬영', '누끼 작업'] },

  // 루틴: design(브랜딩) → video (광고영상 + 바이럴)
  { sort_order: 47, name: '루틴',              category: 'video',  tags: ['광고 영상', '바이럴 마케팅'] },

  // DAEKYUNG ESCO: design → video (홍보영상 YouTube 확인)
  { sort_order: 48, name: 'DAEKYUNG ESCO',     category: 'video',  tags: ['홍보영상', '영상 제작'] },

  // 연세대학교: web(홈페이지 제작) → video (라이브 스트리밍 행사)
  { sort_order: 49, name: '연세대학교',         category: 'video',  tags: ['라이브 스트리밍', '행사 영상'] },

  // VARRAM: design → video (YouTube 5개 + 이벤트페이지)
  { sort_order: 55, name: 'VARRAM',            category: 'video',  tags: ['홍보영상', '이벤트페이지 디자인'] },

  // 나무감정평가법인: web → marketing (SNS+블로그+인스타그램 관리)
  { sort_order: 63, name: '나무감정평가법인',   category: 'marketing', tags: ['SNS 마케팅', '블로그 관리', '인스타그램'] },

  // 육대장 홈페이지(idx=100): web → design (제품 촬영 + 패키지)
  { sort_order: 66, name: '육대장 홈페이지',   category: 'design', tags: ['제품 촬영', '패키지 디자인'] },

  // 피플인아트: design → marketing (SNS브랜딩 + 인스타그램 + 블로그)
  { sort_order: 54, name: '피플인아트',         category: 'marketing', tags: ['SNS 마케팅', '브랜딩', '인스타그램'] },

  // ── tags만 변경 ───────────────────────────────────────

  // ARK: 브랜딩/패키지 → 로고/브랜딩 (네트워크 솔루션 로고)
  { sort_order: 9,  name: 'ARK',               tags: ['로고 디자인', '브랜딩'] },

  // ABCLABS: 웹사이트 제작 → 웹사이트 제작 + 반응형
  { sort_order: 10, name: 'ABCLABS',           tags: ['웹사이트 제작', '반응형 웹'] },

  // GreenPan: SNS 마케팅 → 이벤트페이지/상세페이지 디자인 (쿠킹웨어 스마트스토어)
  { sort_order: 11, name: 'GreenPan',          tags: ['이벤트페이지 디자인', '상세페이지 디자인'] },

  // ECO Bio: 브랜딩/패키지 → 패키지/라벨 디자인 (농약/비료 병 라벨)
  { sort_order: 14, name: 'ECO Bio',           tags: ['패키지 디자인', '라벨 디자인'] },

  // YAMOUZINE BROS: 패키지/브랜딩 → 상세페이지 디자인 (인테리어 시공 상세페이지)
  { sort_order: 16, name: 'YAMOUZINE BROS',    tags: ['상세페이지 디자인'] },

  // Applied Materials: 어드바이저리 → PPT 디자인
  { sort_order: 19, name: 'Applied Materials', tags: ['PPT 디자인', '프레젠테이션'] },

  // PROPER COMPANY: 홈쇼핑 운영/패키지 → 로고/브랜딩 (로고+명함+패키지박스)
  { sort_order: 39, name: 'PROPER COMPANY',    tags: ['로고 디자인', '브랜딩'] },

  // Your Vegan: 패키지 → 제품 촬영 (뷰티 제품 사진)
  { sort_order: 40, name: 'Your Vegan',        tags: ['제품 촬영', '뷰티'] },

  // 농가의아침: 패키지 → 이벤트페이지 디자인
  { sort_order: 41, name: '농가의아침',         tags: ['이벤트페이지 디자인', '상세페이지 디자인'] },

  // MOMENTO (idx=112): 브랜딩/패키지 → 제품 촬영 (의류 촬영)
  { sort_order: 42, name: 'MOMENTO',           tags: ['제품 촬영', '의류'] },

  // CLEANHARA: 상품기획/패키지 → 제품 촬영 (스킨케어 세럼)
  { sort_order: 44, name: 'CLEANHARA',         tags: ['제품 촬영', '뷰티'] },

  // 웰스: 패키지 → 제품 촬영 (정육/식재료)
  { sort_order: 45, name: '웰스',              tags: ['제품 촬영', '식품'] },

  // 리안컴퍼니: 브랜딩 → 제품 촬영 (카페 에스프레소 머신)
  { sort_order: 50, name: '리안컴퍼니',         tags: ['제품 촬영', '카페'] },

  // SA: 브랜딩전략/BI → 상세페이지 디자인 + 뷰티 (스킨케어 상세페이지)
  { sort_order: 51, name: 'SA',                tags: ['상세페이지 디자인', '뷰티'] },

  // LA FLORELLE: 패키지/브랜딩 → 제품 촬영 (핑크 컨셉 스킨케어)
  { sort_order: 52, name: 'LA FLORELLE',       tags: ['제품 촬영', '뷰티'] },

  // 신선닭갈비: 패키지 → 이벤트페이지 (스마트스토어 라이브방송 연계)
  { sort_order: 56, name: '신선닭갈비',         tags: ['이벤트페이지 디자인', '스마트스토어'] },

  // 꿀빠는시간: 패키지 → 이벤트페이지
  { sort_order: 57, name: '꿀빠는시간',         tags: ['이벤트페이지 디자인', '스마트스토어'] },

  // 시간을들이다: 패키지 → 이벤트페이지
  { sort_order: 58, name: '시간을들이다',        tags: ['이벤트페이지 디자인', '스마트스토어'] },

  // AIinsight: 웹사이트 제작/브랜딩/마케팅 → 복합 (웹 디자인 + 패키지 + 이벤트페이지)
  { sort_order: 59, name: 'AIinsight',         tags: ['웹 디자인', '패키지 디자인', '이벤트페이지 디자인'] },

  // 진해양봉: 패키지/브랜딩 → 이벤트페이지 (스마트스토어 꿀 제품)
  { sort_order: 60, name: '진해양봉',           tags: ['이벤트페이지 디자인', '스마트스토어'] },

  // 리빙안: 브랜딩 → 제품 촬영 (주방용품)
  { sort_order: 61, name: '리빙안',             tags: ['제품 촬영'] },

  // b belladörr: 브랜드아이덴티티/패키지 → 제품 촬영 (한방 건강 제품)
  { sort_order: 62, name: 'b belladörr',       tags: ['제품 촬영', '뷰티'] },

  // THELSTAR: 상품개발/브랜드네임/패키징 → 제품 촬영 (유아용품)
  { sort_order: 65, name: 'THELSTAR',          tags: ['제품 촬영'] },

  // MOMENTO (패키지, idx=99): 상품개발/패키징 → 패키지/브랜딩 (디퓨저)
  { sort_order: 67, name: 'MOMENTO (패키지)',   tags: ['패키지 디자인', '브랜딩'] },
];

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=minimal',
};

async function run() {
  console.log(`2차 tags/category 업데이트... 총 ${updates.length}개\n`);
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

    const patch = { tags: item.tags };
    if (item.category) patch.category = item.category;

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/portfolio?id=eq.${existing[0].id}`,
      { method: 'PATCH', headers, body: JSON.stringify(patch) }
    );

    const label = item.category ? `[→${item.category}] ` : '';
    if (res.ok) {
      console.log(`✅ [${item.sort_order}] ${item.name} — ${label}${JSON.stringify(item.tags)}`);
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
