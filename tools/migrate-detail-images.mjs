// migrate-detail-images.mjs — detail_images 구 사이트 URL → Supabase Storage 이전
// 실행: node tools/migrate-detail-images.mjs
// ⚠️ DNS 전환 전 반드시 실행 (구 사이트 vdirectors.com 폐쇄 전)

const SUPABASE_URL = 'https://zpyzgicyfkancewoxmbg.supabase.co';
const SERVICE_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpweXpnaWN5ZmthbmNld294bWJnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDQ2MTk1NywiZXhwIjoyMDkwMDM3OTU3fQ.VC52H58cp7c-4WHRLvo6uHtoPtcvr09sBtbv3iPbonw';
const BUCKET = 'portfolio';

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
};

function getExt(url) {
  const path = url.split('?')[0];
  const match = path.match(/\.(jpg|jpeg|png|gif|webp)$/i);
  return match ? match[1].toLowerCase() : 'jpg';
}

function getContentType(ext) {
  const map = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', gif: 'image/gif', webp: 'image/webp' };
  return map[ext] || 'image/jpeg';
}

async function uploadToStorage(filePath, buffer, contentType) {
  const res = await fetch(
    `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${filePath}`,
    {
      method: 'POST',
      headers: {
        'apikey': SERVICE_KEY,
        'Authorization': `Bearer ${SERVICE_KEY}`,
        'Content-Type': contentType,
        'x-upsert': 'true',
      },
      body: buffer,
    }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Storage 업로드 실패: ${err}`);
  }
  return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${filePath}`;
}

async function downloadImage(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`다운로드 실패 (${res.status}): ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function run() {
  // 1. detail_images가 있는 전체 포트폴리오 조회
  const listRes = await fetch(
    `${SUPABASE_URL}/rest/v1/portfolio?select=id,sort_order,name,detail_images&order=sort_order.asc`,
    { headers }
  );
  const items = await listRes.json();
  console.log(`총 ${items.length}개 항목 확인\n`);

  let ok = 0, skip = 0, fail = 0;
  const failList = [];

  for (const item of items) {
    const images = item.detail_images;
    if (!Array.isArray(images) || images.length === 0) {
      console.log(`⏭  [${item.sort_order}] ${item.name} — detail_images 없음, 스킵`);
      skip++;
      continue;
    }

    // 구 사이트 URL이 하나도 없으면 스킵
    const hasOldUrl = images.some(url => typeof url === 'string' && url.includes('vdirectors.com'));
    if (!hasOldUrl) {
      console.log(`⏭  [${item.sort_order}] ${item.name} — 이미 Storage URL, 스킵`);
      skip++;
      continue;
    }

    const newImages = [];
    let itemFailed = false;

    for (let i = 0; i < images.length; i++) {
      const url = images[i];

      // 이미 Storage URL이면 그대로 유지
      if (!url.includes('vdirectors.com')) {
        newImages.push(url);
        continue;
      }

      const ext = getExt(url);
      const contentType = getContentType(ext);
      const storagePath = `detail/${item.sort_order}_${i + 1}.${ext}`;

      try {
        const buffer = await downloadImage(url);
        const newUrl = await uploadToStorage(storagePath, buffer, contentType);
        newImages.push(newUrl);
        process.stdout.write(`  └ [${i + 1}/${images.length}] 업로드 완료\n`);
      } catch (e) {
        console.log(`  └ ❌ [${i + 1}/${images.length}] 실패: ${e.message}`);
        newImages.push(url); // 실패 시 원본 유지
        itemFailed = true;
        failList.push(`[${item.sort_order}] ${item.name} — 이미지 ${i + 1}: ${url}`);
      }
    }

    // DB 업데이트
    const patchRes = await fetch(
      `${SUPABASE_URL}/rest/v1/portfolio?id=eq.${item.id}`,
      {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ detail_images: newImages }),
      }
    );

    if (patchRes.ok) {
      const label = itemFailed ? '⚠️ 일부 실패' : '✅';
      console.log(`${label} [${item.sort_order}] ${item.name} — ${images.length}장 처리 완료`);
      if (!itemFailed) ok++;
    } else {
      const err = await patchRes.text();
      console.log(`❌ [${item.sort_order}] ${item.name} — DB 업데이트 실패: ${err}`);
      fail++;
      failList.push(`[${item.sort_order}] ${item.name} — DB PATCH 실패`);
    }
  }

  console.log(`\n완료: ✅ ${ok}개 성공 / ⏭ ${skip}개 스킵 / ❌ ${fail}개 실패`);

  if (failList.length > 0) {
    console.log('\n실패 목록:');
    failList.forEach(f => console.log(`  · ${f}`));
  }
}

run();
