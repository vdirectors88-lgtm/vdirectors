/* ============================================
   VDIRECTORS — admin.js
   ============================================ */

/* ===== DOM REFS ===== */
const loginScreen    = document.getElementById('loginScreen');
const dashboard      = document.getElementById('dashboard');
const loginForm      = document.getElementById('loginForm');
const loginEmail     = document.getElementById('loginEmail');
const loginPassword  = document.getElementById('loginPassword');
const loginError     = document.getElementById('loginError');
const loginBtn       = document.getElementById('loginBtn');
const logoutBtn      = document.getElementById('logoutBtn');
const adminUserEmail = document.getElementById('adminUserEmail');

const portfolioLoading = document.getElementById('portfolioLoading');
const portfolioEmpty   = document.getElementById('portfolioEmpty');
const portfolioList    = document.getElementById('portfolioList');
const portfolioCount   = document.getElementById('portfolioCount');
const addBtn           = document.getElementById('addBtn');

const modal           = document.getElementById('modal');
const modalTitle      = document.getElementById('modalTitle');
const modalClose      = document.getElementById('modalClose');
const cancelBtn       = document.getElementById('cancelBtn');
const portfolioForm   = document.getElementById('portfolioForm');
const formId          = document.getElementById('formId');
const formName        = document.getElementById('formName');
const formTags        = document.getElementById('formTags');
const formSortOrder   = document.getElementById('formSortOrder');
const saveBtn         = document.getElementById('saveBtn');
const formError       = document.getElementById('formError');

const thumbFile        = document.getElementById('thumbFile');
const thumbUploadArea  = document.getElementById('thumbUploadArea');
const thumbPlaceholder = document.getElementById('thumbPlaceholder');
const thumbPreview     = document.getElementById('thumbPreview');

const detailFiles       = document.getElementById('detailFiles');
const detailUploadArea  = document.getElementById('detailUploadArea');
const detailPlaceholder = document.getElementById('detailPlaceholder');
const detailPreviewList = document.getElementById('detailPreviewList');

const deleteConfirm    = document.getElementById('deleteConfirm');
const deleteTargetName = document.getElementById('deleteTargetName');
const cancelDeleteBtn  = document.getElementById('cancelDeleteBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

/* ===== STATE ===== */
let portfolioData     = [];
let deleteTargetId    = null;
let uploadedThumbUrl  = null;
let existingThumbUrl  = null;
let uploadedDetailUrls = [];
let existingDetailUrls = [];

/* ===== SAVE INDICATOR ===== */
const saveIndicator = document.createElement('div');
saveIndicator.className = 'save-indicator';
saveIndicator.textContent = '저장 완료 ✓';
document.body.appendChild(saveIndicator);

function showSaveIndicator(msg = '저장 완료 ✓') {
  saveIndicator.textContent = msg;
  saveIndicator.classList.add('show');
  setTimeout(() => saveIndicator.classList.remove('show'), 2000);
}

/* ===== AUTH ===== */
async function checkAuth() {
  const { data: { session } } = await window.supabase.auth.getSession();
  if (session) {
    showDashboard(session.user.email);
    loadPortfolio();
  }
}

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  loginError.textContent = '';
  loginBtn.disabled = true;
  loginBtn.textContent = '로그인 중...';

  const { data, error } = await window.supabase.auth.signInWithPassword({
    email: loginEmail.value.trim(),
    password: loginPassword.value,
  });

  if (error) {
    loginError.textContent = '이메일 또는 비밀번호가 올바르지 않습니다.';
    loginBtn.disabled = false;
    loginBtn.textContent = '로그인';
    return;
  }

  showDashboard(data.user.email);
  loadPortfolio();
});

logoutBtn.addEventListener('click', async () => {
  await window.supabase.auth.signOut();
  dashboard.classList.add('hidden');
  loginScreen.style.display = 'flex';
  loginEmail.value = '';
  loginPassword.value = '';
  loginBtn.disabled = false;
  loginBtn.textContent = '로그인';
});

function showDashboard(email) {
  loginScreen.style.display = 'none';
  dashboard.classList.remove('hidden');
  adminUserEmail.textContent = email;
}

/* ===== PORTFOLIO CRUD ===== */
async function loadPortfolio() {
  portfolioLoading.style.display = 'block';
  portfolioEmpty.classList.add('hidden');
  portfolioList.innerHTML = '';

  const { data, error } = await window.supabase
    .from('portfolio')
    .select('*')
    .order('sort_order', { ascending: true });

  portfolioLoading.style.display = 'none';

  if (error) {
    portfolioLoading.style.display = 'block';
    portfolioLoading.textContent = '불러오기 실패: ' + error.message;
    return;
  }

  portfolioData = data || [];
  portfolioCount.textContent = `${portfolioData.length}개`;
  updateFeaturedCount();

  if (portfolioData.length === 0) {
    portfolioEmpty.classList.remove('hidden');
    return;
  }

  renderList();
  initSortable();
}

function renderList() {
  portfolioList.innerHTML = '';
  portfolioData.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'portfolio-item';
    li.dataset.id = item.id;

    const thumbHtml = item.thumb_url
      ? `<img class="item-thumb" src="${escapeHtml(item.thumb_url)}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
        + `<div class="item-thumb-placeholder" style="display:none">NO IMG</div>`
      : `<div class="item-thumb-placeholder">NO IMG</div>`;

    const tagsText = Array.isArray(item.tags) ? item.tags.join(', ') : (item.tags || '');

    li.innerHTML = `
      <span class="drag-handle" title="드래그하여 순서 변경">⠿</span>
      ${thumbHtml}
      <div class="item-info">
        <div class="item-name">${escapeHtml(item.name)}</div>
        <div class="item-meta">
          <span class="item-category">${escapeHtml(
            (item.category || '').split(',').map(s => s.trim().toUpperCase()).filter(Boolean).join(' · ')
          )}</span>
          <span class="item-tags">${escapeHtml(tagsText)}</span>
        </div>
      </div>
      <span class="item-order">#${item.sort_order ?? '—'}</span>
      <button class="btn-featured${item.is_featured ? ' active' : ''}" title="메인 노출 토글" data-id="${item.id}">★ MAIN</button>
      <div class="item-actions">
        <button class="btn-icon move-up" title="위로" data-id="${item.id}">↑</button>
        <button class="btn-icon move-down" title="아래로" data-id="${item.id}">↓</button>
        <button class="btn-icon edit" title="수정" data-id="${item.id}">✎</button>
        <button class="btn-icon delete" title="삭제" data-id="${item.id}">✕</button>
      </div>
    `;

    li.querySelector('.btn-icon.move-up').addEventListener('click', () => moveItem(item.id, -1));
    li.querySelector('.btn-icon.move-down').addEventListener('click', () => moveItem(item.id, 1));
    li.querySelector('.btn-icon.edit').addEventListener('click', () => openEditModal(item.id));
    li.querySelector('.btn-icon.delete').addEventListener('click', () => openDeleteConfirm(item.id, item.name));
    li.querySelector('.btn-featured').addEventListener('click', async () => {
      const newVal = !item.is_featured;
      await window.supabase.from('portfolio').update({ is_featured: newVal }).eq('id', item.id);
      item.is_featured = newVal;
      const btn = li.querySelector('.btn-featured');
      btn.classList.toggle('active', newVal);
      updateFeaturedCount();
      showSaveIndicator(newVal ? '메인 노출 설정 ✓' : '메인 노출 해제 ✓');
    });

    portfolioList.appendChild(li);
  });
}

/* ===== SORTABLE ===== */
function initSortable() {
  Sortable.create(portfolioList, {
    animation: 150,
    handle: '.drag-handle',
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    onEnd: async () => {
      const items = portfolioList.querySelectorAll('.portfolio-item');
      const updates = [];
      items.forEach((el, index) => {
        const id = el.dataset.id;
        updates.push({ id, sort_order: index + 1 });
        const orderEl = el.querySelector('.item-order');
        if (orderEl) orderEl.textContent = `#${index + 1}`;
      });
      await saveSortOrder(updates);
    },
  });
}

async function moveItem(id, direction) {
  const idx = portfolioData.findIndex(p => p.id === id);
  const swapIdx = idx + direction;
  if (swapIdx < 0 || swapIdx >= portfolioData.length) return;

  const a = portfolioData[idx];
  const b = portfolioData[swapIdx];
  const tempOrder = a.sort_order;
  a.sort_order = b.sort_order;
  b.sort_order = tempOrder;

  portfolioData.splice(idx, 1);
  portfolioData.splice(swapIdx, 0, a);

  renderList();
  initSortable();

  await saveSortOrder([
    { id: a.id, sort_order: a.sort_order },
    { id: b.id, sort_order: b.sort_order },
  ]);
}

async function saveSortOrder(updates) {
  for (const { id, sort_order } of updates) {
    await window.supabase
      .from('portfolio')
      .update({ sort_order })
      .eq('id', id);
  }
  showSaveIndicator('순서 저장 완료 ✓');
}

/* ===== MODAL ===== */
addBtn.addEventListener('click', openAddModal);
modalClose.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

function getCategoryCheckboxes() {
  return document.querySelectorAll('input[name="category"]');
}

function setCategories(categoryValue) {
  const cats = typeof categoryValue === 'string'
    ? categoryValue.split(',').map(s => s.trim()).filter(Boolean)
    : (Array.isArray(categoryValue) ? categoryValue : []);
  getCategoryCheckboxes().forEach(cb => {
    cb.checked = cats.includes(cb.value);
  });
}

function getSelectedCategories() {
  return [...document.querySelectorAll('input[name="category"]:checked')]
    .map(el => el.value)
    .join(',');
}

function openAddModal() {
  modalTitle.textContent = '새 항목 추가';
  portfolioForm.reset();
  formId.value = '';
  getCategoryCheckboxes().forEach(cb => { cb.checked = false; });
  document.getElementById('formFeatured').checked = false;
  uploadedThumbUrl  = null;
  existingThumbUrl  = null;
  uploadedDetailUrls = [];
  existingDetailUrls = [];
  resetThumbPreview();
  resetDetailPreview();
  showFormError('');
  formSortOrder.value = portfolioData.length + 1;
  modal.classList.remove('hidden');
}

function openEditModal(id) {
  const item = portfolioData.find(p => p.id === id);
  if (!item) return;

  modalTitle.textContent = '항목 수정';
  formId.value = item.id;
  formName.value = item.name || '';
  setCategories(item.category || '');
  formTags.value = Array.isArray(item.tags) ? item.tags.join(', ') : (item.tags || '');
  formSortOrder.value = item.sort_order ?? '';
  document.getElementById('formFeatured').checked = item.is_featured ?? false;

  uploadedThumbUrl   = null;
  existingThumbUrl   = item.thumb_url || null;
  uploadedDetailUrls = [];
  existingDetailUrls = Array.isArray(item.detail_images) ? item.detail_images : [];

  if (item.thumb_url) {
    thumbPreview.src = item.thumb_url;
    thumbPreview.classList.remove('hidden');
    thumbPlaceholder.style.display = 'none';
  } else {
    resetThumbPreview();
  }

  resetDetailPreview();
  if (existingDetailUrls.length) {
    detailPlaceholder.style.display = 'none';
    existingDetailUrls.forEach((url, idx) => {
      const wrap = document.createElement('div');
      wrap.className = 'detail-preview-wrap';
      wrap.innerHTML = `
        <img src="${url}" class="detail-preview-img" alt="">
        <button type="button" class="detail-remove-btn" data-idx="${idx}">✕</button>
      `;
      wrap.querySelector('.detail-remove-btn').addEventListener('click', () => {
        const urlIdx = existingDetailUrls.indexOf(url);
        if (urlIdx !== -1) existingDetailUrls.splice(urlIdx, 1);
        wrap.remove();
        if (!existingDetailUrls.length && !uploadedDetailUrls.length) {
          detailPlaceholder.style.display = '';
        }
      });
      detailPreviewList.appendChild(wrap);
    });
  }

  showFormError('');
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  uploadedThumbUrl   = null;
  existingThumbUrl   = null;
  uploadedDetailUrls = [];
  existingDetailUrls = [];
}

/* ===== THUMBNAIL UPLOAD ===== */
thumbFile.addEventListener('change', handleThumbFile);

thumbUploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  thumbUploadArea.classList.add('drag-over');
});
thumbUploadArea.addEventListener('dragleave', () => thumbUploadArea.classList.remove('drag-over'));
thumbUploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  thumbUploadArea.classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    processThumbFile(file);
  }
});

async function handleThumbFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  processThumbFile(file);
}

async function processThumbFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    thumbPreview.src = e.target.result;
    thumbPreview.classList.remove('hidden');
    thumbPlaceholder.style.display = 'none';
  };
  reader.readAsDataURL(file);

  const ext = file.name.split('.').pop();
  const fileName = `thumb_${Date.now()}.${ext}`;

  const { data, error } = await window.supabase.storage
    .from('portfolio')
    .upload(fileName, file, { upsert: true });

  if (error) {
    console.warn('썸네일 업로드 실패:', error.message);
    showFormError('썸네일 업로드 실패: ' + error.message);
    return;
  }

  const { data: urlData } = window.supabase.storage
    .from('portfolio')
    .getPublicUrl(fileName);

  uploadedThumbUrl = urlData.publicUrl;
  showFormError('');
}

function resetThumbPreview() {
  thumbPreview.src = '';
  thumbPreview.classList.add('hidden');
  thumbPlaceholder.style.display = '';
  thumbFile.value = '';
}

/* ===== DETAIL IMAGES UPLOAD ===== */
detailFiles.addEventListener('change', handleDetailFiles);

async function handleDetailFiles(e) {
  const files = Array.from(e.target.files);
  if (!files.length) return;

  showFormError('');
  saveBtn.disabled = true;
  saveBtn.textContent = '업로드 중...';

  uploadedDetailUrls = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const ext  = file.name.split('.').pop();
    const ts   = Date.now();
    const fileName = `detail_${ts}_${i}.${ext}`;

    const { error } = await window.supabase.storage
      .from('portfolio')
      .upload(fileName, file, { upsert: true });

    if (error) {
      console.warn('상세 이미지 업로드 실패:', error.message);
      showFormError(`상세 이미지 업로드 실패 (${i + 1}번째): ` + error.message);
      saveBtn.disabled = false;
      saveBtn.textContent = '저장';
      return;
    }

    const { data: urlData } = window.supabase.storage
      .from('portfolio')
      .getPublicUrl(fileName);

    uploadedDetailUrls.push(urlData.publicUrl);

    const img = document.createElement('img');
    img.src = urlData.publicUrl;
    img.className = 'detail-preview-img';
    detailPreviewList.appendChild(img);
  }

  detailPlaceholder.style.display = 'none';
  saveBtn.disabled = false;
  saveBtn.textContent = '저장';
}

function resetDetailPreview() {
  detailPreviewList.innerHTML = '';
  detailPlaceholder.style.display = '';
  detailFiles.value = '';
}

/* ===== FORM SUBMIT ===== */
portfolioForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  showFormError('');
  saveBtn.disabled = true;
  saveBtn.textContent = '저장 중...';

  const id = formId.value || null;

  const tagsRaw = formTags.value.trim();
  const tags = tagsRaw
    ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean)
    : [];

  const thumbUrl      = uploadedThumbUrl || existingThumbUrl;
  const detail_images = [...existingDetailUrls, ...uploadedDetailUrls];

  const payload = {
    name:          formName.value.trim(),
    category:      getSelectedCategories(),
    tags,
    thumb_url:     thumbUrl || null,
    detail_images,
    sort_order:    formSortOrder.value !== '' ? parseInt(formSortOrder.value) : null,
    is_featured:   document.getElementById('formFeatured').checked,
  };

  // sort_order swap: 새 번호가 이미 다른 항목에 사용 중이면 서로 교환
  if (payload.sort_order !== null && id) {
    const { data: currentItem } = await window.supabase
      .from('portfolio').select('sort_order').eq('id', id).single();
    const oldOrder = currentItem?.sort_order ?? null;

    if (oldOrder !== payload.sort_order) {
      const { data: conflicting } = await window.supabase
        .from('portfolio').select('id').eq('sort_order', payload.sort_order).neq('id', id).maybeSingle();
      if (conflicting) {
        await window.supabase.from('portfolio').update({ sort_order: oldOrder }).eq('id', conflicting.id);
      }
    }
  }

  let error;
  if (id) {
    const result = await window.supabase.from('portfolio').update(payload).eq('id', id).select();
    error = result.error;
    if (!error && (!result.data || result.data.length === 0)) {
      error = { message: 'RLS 권한 오류: 저장되지 않았습니다. Supabase 대시보드에서 portfolio 테이블 UPDATE 정책을 확인하세요.' };
    }
  } else {
    ({ error } = await window.supabase.from('portfolio').insert([payload]));
  }

  saveBtn.disabled = false;
  saveBtn.textContent = '저장';

  if (error) {
    showFormError('저장 실패: ' + error.message);
    return;
  }

  closeModal();
  showSaveIndicator('저장 완료 ✓');
  loadPortfolio();
});

function showFormError(msg) {
  formError.textContent = msg;
  formError.classList.toggle('hidden', !msg);
}

/* ===== DELETE ===== */
function openDeleteConfirm(id, name) {
  deleteTargetId = id;
  deleteTargetName.textContent = name;
  deleteConfirm.classList.remove('hidden');
}

cancelDeleteBtn.addEventListener('click', () => {
  deleteConfirm.classList.add('hidden');
  deleteTargetId = null;
});

deleteConfirm.addEventListener('click', (e) => {
  if (e.target === deleteConfirm) {
    deleteConfirm.classList.add('hidden');
    deleteTargetId = null;
  }
});

confirmDeleteBtn.addEventListener('click', async () => {
  if (!deleteTargetId) return;
  confirmDeleteBtn.disabled = true;
  confirmDeleteBtn.textContent = '삭제 중...';

  // Storage 파일 삭제
  const item = portfolioData.find(p => p.id === deleteTargetId);
  if (item) {
    const toRemove = [];
    if (item.thumb_url) {
      const path = item.thumb_url.split('/storage/v1/object/public/portfolio/')[1];
      if (path) toRemove.push(path);
    }
    if (Array.isArray(item.detail_images)) {
      item.detail_images.forEach(url => {
        const path = url.split('/storage/v1/object/public/portfolio/')[1];
        if (path) toRemove.push(path);
      });
    }
    if (toRemove.length) {
      await window.supabase.storage.from('portfolio').remove(toRemove);
    }
  }

  // DB 삭제
  const { error } = await window.supabase
    .from('portfolio')
    .delete()
    .eq('id', deleteTargetId);

  confirmDeleteBtn.disabled = false;
  confirmDeleteBtn.textContent = '삭제';
  deleteConfirm.classList.add('hidden');
  deleteTargetId = null;

  if (error) {
    alert('삭제 실패: ' + error.message);
    return;
  }

  showSaveIndicator('삭제 완료 ✓');
  loadPortfolio();
});

function updateFeaturedCount() {
  const el = document.getElementById('featuredCount');
  if (!el) return;
  const cnt = portfolioData.filter(p => p.is_featured).length;
  el.textContent = `★ MAIN ${cnt}개`;
}

/* ===== UTILS ===== */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ===== TAB ===== */
const tabBtns    = document.querySelectorAll('.admin-tab-btn');
const adminToolbar = document.querySelector('.admin-toolbar');
const adminHint    = document.querySelector('.admin-hint');
const clientsPanel = document.getElementById('clientsPanel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    if (tab === 'portfolio') {
      adminToolbar.style.display = '';
      adminHint.style.display = '';
      portfolioList.style.display = '';
      clientsPanel.classList.add('hidden');
      loadPortfolio();
    } else {
      adminToolbar.style.display = 'none';
      adminHint.style.display = 'none';
      portfolioLoading.style.display = 'none';
      portfolioList.style.display = 'none';
      clientsPanel.classList.remove('hidden');
      loadClients();
    }
  });
});

/* ===== CLIENTS CRUD ===== */
async function loadClients() {
  const grid = document.getElementById('clientsAdminGrid');
  grid.innerHTML = '<p style="color:#999;font-size:13px">불러오는 중...</p>';

  const { data, error } = await window.supabase
    .from('clients')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    grid.innerHTML = `<p style="color:#e55;font-size:13px">오류: ${error.message}</p>`;
    return;
  }

  grid.innerHTML = data.length
    ? data.map(renderClientCard).join('')
    : '<p style="color:#999;font-size:13px">등록된 로고가 없습니다.</p>';

  const countEl = document.getElementById('clientsCount');
  if (countEl) countEl.textContent = data.length ? `${data.length}개` : '';

  grid.querySelectorAll('.client-delete-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteClient(btn.dataset.id, btn.dataset.url));
  });

  Sortable.create(grid, {
    animation: 150,
    ghostClass: 'sortable-ghost',
    onEnd: async () => {
      const cards = grid.querySelectorAll('.client-logo-card');
      for (let i = 0; i < cards.length; i++) {
        const id = cards[i].dataset.id;
        await window.supabase.from('clients').update({ sort_order: i + 1 }).eq('id', id);
      }
      showSaveIndicator('순서 저장 완료 ✓');
    }
  });
}

function renderClientCard(item) {
  return `
    <div class="client-logo-card" data-id="${item.id}">
      <img src="${item.logo_url}" alt="client logo">
      <div class="delete-overlay">
        <button class="client-delete-btn" data-id="${item.id}" data-url="${item.logo_url}">✕</button>
      </div>
    </div>`;
}

async function deleteClient(id, logoUrl) {
  if (!confirm('이 로고를 삭제하시겠습니까?')) return;
  const filePath = logoUrl.split('/storage/v1/object/public/')[1];
  if (filePath) {
    const bucket = filePath.split('/')[0];
    const path   = filePath.slice(bucket.length + 1);
    await window.supabase.storage.from(bucket).remove([path]);
  }
  const { error } = await window.supabase.from('clients').delete().eq('id', id);
  if (error) { alert('삭제 실패: ' + error.message); return; }
  showSaveIndicator('로고 삭제 완료 ✓');
  loadClients();
}

/* 업로드 영역 */
const clientsUploadZone = document.getElementById('clientsUploadZone');
const clientsFileInput  = document.getElementById('clientsFileInput');

let _isDragging = false;
clientsUploadZone.addEventListener('click', () => { if (!_isDragging) clientsFileInput.click(); });
clientsUploadZone.addEventListener('dragenter', () => { _isDragging = true; });
clientsUploadZone.addEventListener('dragover', e => { e.preventDefault(); clientsUploadZone.classList.add('drag-over'); });
clientsUploadZone.addEventListener('dragleave', () => { clientsUploadZone.classList.remove('drag-over'); });
clientsUploadZone.addEventListener('drop', e => {
  e.preventDefault();
  _isDragging = false;
  clientsUploadZone.classList.remove('drag-over');
  uploadClientFiles(e.dataTransfer.files);
});
clientsFileInput.addEventListener('change', () => uploadClientFiles(clientsFileInput.files));

async function uploadClientFiles(files) {
  if (!files || !files.length) return;
  showSaveIndicator('업로드 중...');

  // max sort_order 한 번만 조회
  const { data: maxData } = await window.supabase
    .from('clients').select('sort_order').order('sort_order', { ascending: false }).limit(1);
  let nextOrder = maxData && maxData.length ? maxData[0].sort_order + 1 : 1;

  for (const file of files) {
    const fileName = `${Date.now()}_${file.name}`;
    const { error: storageErr } = await window.supabase.storage
      .from('clients').upload(fileName, file, { upsert: false });
    if (storageErr) { alert('업로드 실패: ' + storageErr.message); continue; }
    const { data: urlData } = window.supabase.storage.from('clients').getPublicUrl(fileName);
    await window.supabase.from('clients').insert({ logo_url: urlData.publicUrl, sort_order: nextOrder });
    nextOrder++;
  }
  showSaveIndicator('업로드 완료 ✓');
  clientsFileInput.value = '';
  loadClients();
}

/* ===== INIT ===== */
checkAuth();
