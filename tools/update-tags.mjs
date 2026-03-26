// update-tags.mjs — 포트폴리오 tags/category 보완 스크립트 (14차 시각적 검토 반영)
// 실행: node tools/update-tags.mjs

const SUPABASE_URL = 'https://zpyzgicyfkancewoxmbg.supabase.co';
const SERVICE_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpweXpnaWN5ZmthbmNld294bWJnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDQ2MTk1NywiZXhwIjoyMDkwMDM3OTU3fQ.VC52H58cp7c-4WHRLvo6uHtoPtcvr09sBtbv3iPbonw';

// 변경 필요한 항목만 (sort_order 기준)
// patch: { tags } 또는 { tags, category } — category가 있으면 함께 변경
const updates = [
  // ── 패키지 + 상세페이지 ──────────────────────────────
  { sort_order: 1,  name: '육대장',        tags: ['패키지 디자인', '브랜딩', '상세페이지 디자인'] },
  { sort_order: 2,  name: 'HARIK',         tags: ['패키지 디자인', '브랜딩', '상세페이지 디자인'] },
  { sort_order: 15, name: '미풍양주',       tags: ['패키지 디자인', '브랜딩'] },
  { sort_order: 36, name: '펫사랑',         tags: ['패키지 디자인', '브랜딩', '상세페이지 디자인'] },
  { sort_order: 37, name: '펫츠앤',         tags: ['패키지 디자인', '제품 사진', '상세페이지 디자인'] },
  { sort_order: 35, name: '주간목장',       tags: ['브랜딩', '패키지 디자인', '홈페이지 제작', '상세페이지 디자인'] },
  { sort_order: 64, name: 'NST바이오',      tags: ['패키지 디자인', '제품 사진', '상세페이지 디자인'] },

  // ── 브랜딩 + 영상 복합 ────────────────────────────────
  { sort_order: 4,  name: 'Yogo',          tags: ['브랜딩', '패키지 디자인', '시각디자인', '영상 제작'] },
  { sort_order: 5,  name: 'KoKoPang',      tags: ['브랜딩', '로고 디자인', '영상 제작'] },

  // ── 상세페이지 / SNS 콘텐츠 ──────────────────────────
  { sort_order: 12, name: 'HAM',           tags: ['상세페이지 디자인', 'SNS 콘텐츠', '시각디자인'] },
  { sort_order: 43, name: 'DCN바이오',     tags: ['상세페이지 디자인', '제품 사진'] },
  { sort_order: 53, name: 'Market M Bang', tags: ['상세페이지 디자인', 'SNS 콘텐츠', '시각디자인'] },

  // ── 브랜딩 / 로고 ────────────────────────────────────
  { sort_order: 38, name: '그린에너지',    tags: ['브랜딩', '로고 디자인'] },

  // ── category: design → video + tags 변경 ─────────────
  { sort_order: 6,  name: '바른보험',      category: 'video', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 7,  name: '배차킹',        category: 'video', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 21, name: '인천국제공항',  category: 'video', tags: ['영상 제작', '모션그래픽'] },

  // ── 영상 13개 — 전부 모션그래픽 ─────────────────────
  { sort_order: 22, name: '플레이보이',    tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 23, name: 'TED',           tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 24, name: 'CUBEME',        tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 25, name: '딩고',          tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 26, name: '애터미',        tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 27, name: '브이라이브',    tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 28, name: '멜론',          tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 29, name: '비비고',        tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 30, name: '설화수',        tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 31, name: '네이버 바이브', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 32, name: '네이버 웹툰',  tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 33, name: '카카오페이지', tags: ['영상 제작', '모션그래픽'] },
  { sort_order: 34, name: '카카오프렌즈', tags: ['영상 제작', '모션그래픽'] },
];

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=minimal',
};

async function run() {
  console.log(`tags/category 업데이트 시작... 총 ${updates.length}개\n`);
  let ok = 0, fail = 0;

  for (const item of updates) {
    // sort_order로 id 조회
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
      {
        method: 'PATCH',
        headers,
        body: JSON.stringify(patch),
      }
    );

    const label = item.category ? `[${item.category}] ` : '';
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
