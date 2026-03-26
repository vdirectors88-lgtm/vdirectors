/* ============================================
   VDIRECTORS — detail.js
   ============================================ */

/* ===== NAV ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ===== MOBILE MENU ===== */
const mobileBtn  = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('active');
  mobileBtn.classList.toggle('active');
  document.body.style.overflow = open ? 'hidden' : '';
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileBtn.classList.remove('active');
    document.body.style.overflow = '';
  });
});

/* ===== FOOTER YEAR ===== */
const copyEl = document.querySelector('.footer-copy');
if (copyEl) copyEl.textContent = `© ${new Date().getFullYear()} VDIRECTORS. All rights reserved.`;

/* ===== PORTFOLIO DETAIL ===== */
const catLabel = { web: 'WEB', design: 'DESIGN', program: '프로그램', marketing: '마케팅', video: '영상제작', etc: '기타' };

async function loadDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const loading = document.getElementById('detailLoading');
  const body    = document.getElementById('detailBody');

  if (!id) {
    loading.innerHTML = '<p style="color:var(--g1)">잘못된 접근입니다.</p>';
    return;
  }

  try {
    const { data, error } = await supabase
      .from('portfolio')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) throw error || new Error('not found');

    // Meta title
    document.title = `VDIRECTORS — ${data.name}`;

    // Header
    const cats = typeof data.category === 'string'
      ? data.category.split(',').map(s => catLabel[s.trim()] || s.trim().toUpperCase()).join(' · ')
      : (catLabel[data.category] || String(data.category).toUpperCase());
    document.getElementById('detailCat').textContent = cats;
    document.getElementById('detailName').textContent = data.name;
    document.getElementById('detailTags').textContent = (Array.isArray(data.tags) ? data.tags : []).join(' · ');

    // Images
    const imagesEl = document.getElementById('detailImages');
    if (data.detail_images && data.detail_images.length) {
      imagesEl.innerHTML = data.detail_images
        .map(url => `<div class="detail-img-wrap"><img src="${url}" alt="${data.name}" loading="lazy"></div>`)
        .join('');
      if (data.detail_images.length >= 3) {
        imagesEl.classList.add('detail-images-grid');
      }
      initLightbox(data.detail_images);
    } else {
      imagesEl.innerHTML = '<p class="detail-empty">등록된 상세 이미지가 없습니다.</p>';
    }

    // Prev / Next nav
    await buildNav(data);

    loading.style.display = 'none';
    body.style.display    = 'block';

  } catch (err) {
    console.error(err);
    loading.innerHTML = '<p style="color:var(--g1)">항목을 불러올 수 없습니다.</p>';
  }
}

async function buildNav(current) {
  const { data: all } = await supabase
    .from('portfolio')
    .select('id, name')
    .order('sort_order', { ascending: true });

  if (!all) return;

  const idx  = all.findIndex(p => p.id === current.id);
  const prev = idx > 0            ? all[idx - 1] : null;
  const next = idx < all.length-1 ? all[idx + 1] : null;

  const wrap = document.getElementById('detailNavWrap');
  wrap.innerHTML = `
    <div class="detail-nav">
      ${prev
        ? `<a class="detail-nav-item detail-nav-prev" href="portfolio-detail.html?id=${prev.id}">
             <span class="nav-dir">← PREV</span>
             <span class="nav-name">${prev.name}</span>
           </a>`
        : '<div class="detail-nav-item"></div>'}
      <a class="detail-nav-item detail-nav-all" href="portfolio.html">ALL WORKS</a>
      ${next
        ? `<a class="detail-nav-item detail-nav-next" href="portfolio-detail.html?id=${next.id}">
             <span class="nav-dir">NEXT →</span>
             <span class="nav-name">${next.name}</span>
           </a>`
        : '<div class="detail-nav-item"></div>'}
    </div>`;
}

loadDetail();

/* ===== LIGHTBOX ===== */
function initLightbox(images) {
  if (!images || images.length === 0) return;
  let cur = 0;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="닫기">✕</button>
    <button class="lightbox-btn lightbox-prev" aria-label="이전 이미지">←</button>
    <div class="lightbox-img-wrap">
      <img class="lightbox-img" src="" alt="상세 이미지">
    </div>
    <button class="lightbox-btn lightbox-next" aria-label="다음 이미지">→</button>
    <span class="lightbox-counter"></span>
  `;
  document.body.appendChild(overlay);

  const lbImg   = overlay.querySelector('.lightbox-img');
  const counter = overlay.querySelector('.lightbox-counter');
  const prevBtn = overlay.querySelector('.lightbox-prev');
  const nextBtn = overlay.querySelector('.lightbox-next');

  function show(idx) {
    cur = idx;
    lbImg.src = images[idx];
    counter.textContent = images.length > 1 ? `${idx + 1} / ${images.length}` : '';
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === images.length - 1;
  }

  function open(idx) {
    show(idx);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.detail-img-wrap').forEach((wrap, i) => {
    wrap.addEventListener('click', () => open(i));
  });

  prevBtn.addEventListener('click', e => { e.stopPropagation(); if (cur > 0) show(cur - 1); });
  nextBtn.addEventListener('click', e => { e.stopPropagation(); if (cur < images.length - 1) show(cur + 1); });
  overlay.querySelector('.lightbox-close').addEventListener('click', close);

  overlay.addEventListener('click', e => {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft'  && cur > 0)                 show(cur - 1);
    if (e.key === 'ArrowRight' && cur < images.length - 1) show(cur + 1);
  });
}
