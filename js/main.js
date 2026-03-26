/* ============================================
   VDIRECTORS — main.js
   ============================================ */


/* ===== 2. HERO 텍스트 리빌 + LABEL 스태거 ===== */
window.addEventListener('DOMContentLoaded', () => {
  // 해시로 진입한 경우 애니메이션 후 스크롤
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }

  // Hero headline: clip-path 리빌
  setTimeout(() => {
    document.querySelectorAll('.line').forEach(l => l.classList.add('animated'));
  }, 300);

  // "From Idea to Impact" 단어별 stagger
  const label = document.querySelector('.hero-label');
  if (label) {
    const text = label.textContent.trim();
    const words = text.split(' ');
    const wordClasses = { 'from': 'word-from', 'idea': 'word-idea', 'to': 'word-to', 'impact': 'word-impact' };
    label.innerHTML = words.map((w, i) => {
      const cls = wordClasses[w.toLowerCase()] || '';
      const inlineDelay = (cls === 'word-impact' || cls === 'word-to') ? '' : `style="animation-delay:${0.8 + i * 0.07}s"`;
      return `<span class="word ${cls}" ${inlineDelay}>${w}</span>`;
    }).join(' ');
  }
});


/* ===== 3. HERO VD 배경 패럴랙스 ===== */
const heroBgText = document.querySelector('.hero-bg-text');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (heroBgText && scrollY < window.innerHeight) {
    heroBgText.style.transform = `translateY(${scrollY * 0.25}px)`;
  }
}, { passive: true });


/* ===== 4. NAV 스크롤 ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });


/* ===== 5. 모바일 메뉴 ===== */
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


/* ===== MAGNETIC BUTTON ===== */
(function initMagnetic() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll('.hero-cta, .submit-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r  = btn.getBoundingClientRect();
      const cx = r.left + r.width  / 2;
      const cy = r.top  + r.height / 2;
      const dx = (e.clientX - cx) * 0.35;
      const dy = (e.clientY - cy) * 0.35;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
})();


/* ===== SCROLL PROGRESS BAR ===== */
(function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrolled  = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docHeight > 0 ? (scrolled / docHeight * 100) + '%' : '0%';
  }, { passive: true });
})();


/* ===== 6. SCROLL REVEAL ===== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

function observeReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}
observeReveal();

/* ===== 6-B. BIDIRECTIONAL REVEAL (services alternating) ===== */
const bidiObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('in-view', entry.isIntersecting);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal-bidi').forEach(el => bidiObserver.observe(el));


/* ===== 6-C. MOUSE PARALLAX (메인 인트로) ===== */
const introQuote = document.querySelector('.main-intro-quote');
if (introQuote) {
  let tx = 0, ty = 0;
  document.addEventListener('mousemove', e => {
    const nx = (e.clientX / window.innerWidth  - 0.5);
    const ny = (e.clientY / window.innerHeight - 0.5);
    tx += (nx * 100 - tx) * 0.12;
    ty += (ny * 60  - ty) * 0.12;
    introQuote.style.transform = `translate(${tx}px, ${ty}px)`;
  });
}

/* ===== 6-D. 숫자 카운트업 ===== */
function countUp(el) {
  const target = parseInt(el.dataset.target, 10);
  const isPlus  = el.dataset.plus === 'true';
  const dur = 1400;
  const step = 16;
  const inc  = target / (dur / step);
  let cur = 0;
  const timer = setInterval(() => {
    cur = Math.min(cur + inc, target);
    el.textContent = Math.floor(cur) + (isPlus ? '+' : '');
    if (cur >= target) clearInterval(timer);
  }, step);
}

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countUp(entry.target);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.count-up').forEach(el => countObserver.observe(el));

/* ===== 7. 포트폴리오 ===== */
const catLabel = { web: 'WEB', design: 'DESIGN', program: '프로그램', marketing: '마케팅', video: '영상제작', etc: '기타' };

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let allPortfolioData = [];

function renderCard(item, idx) {
  const tags   = (Array.isArray(item.tags) ? item.tags : []).map(t => `<span class="overlay-tag">${t}</span>`).join('');
  const cat    = typeof item.category === 'string' && item.category
    ? item.category.split(',').map(s => catLabel[s.trim()] || s.trim().toUpperCase()).join(' · ')
    : '';
  const thumb  = item.thumb_url || '';
  const idxStr = String(idx + 1).padStart(2, '0');

  const thumbHtml = thumb
    ? `<div class="portfolio-thumb"><img src="${thumb}" alt="${item.name}" loading="lazy"></div>
       <div class="portfolio-overlay">
         <div class="overlay-inner">
           <span class="overlay-cat">${cat}</span>
           <h3 class="overlay-name">${item.name}</h3>
           <p class="overlay-tags">${tags}</p>
         </div>
       </div>`
    : `<div class="portfolio-no-thumb">
         <span class="no-thumb-cat">${cat}</span>
         <span class="no-thumb-name">${item.name}</span>
       </div>
       <div class="portfolio-overlay">
         <div class="overlay-inner">
           <span class="overlay-cat">${cat}</span>
           <h3 class="overlay-name">${item.name}</h3>
           <p class="overlay-tags">${tags}</p>
         </div>
       </div>`;

  return `
    <a class="portfolio-item reveal" href="portfolio-detail.html?id=${item.id}" data-category="${item.category}">
      <span class="card-idx">${idxStr}</span>
      ${thumbHtml}
    </a>`;
}

function renderPortfolio(category = 'all') {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  const isMainPage = !document.querySelector('.portfolio-page-section');

  let filtered = category === 'all'
    ? allPortfolioData
    : allPortfolioData.filter(p => {
        const cats = typeof p.category === 'string'
          ? p.category.split(',').map(s => s.trim())
          : (Array.isArray(p.category) ? p.category : []);
        return cats.includes(category);
      });

  // 메인 페이지: featured 항목 랜덤 12개 표시 (featured 부족 시 전체 랜덤)
  if (isMainPage) {
    const pool = filtered.filter(p => p.is_featured);
    const display = pool.length >= 12
      ? shuffleArray(pool).slice(0, 12)
      : shuffleArray(filtered).slice(0, 12);
    filtered = display;
  }

  grid.style.opacity   = '0';
  grid.style.transform = 'translateY(14px)';

  setTimeout(() => {
    if (filtered.length === 0) {
      grid.innerHTML = '<p class="portfolio-empty">해당 카테고리 작업물이 준비 중입니다.</p>';
      requestAnimationFrame(() => { grid.style.opacity = '1'; grid.style.transform = 'translateY(0)'; });
      return;
    }
    grid.innerHTML = filtered.map((item, i) => renderCard(item, i)).join('');
    grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    requestAnimationFrame(() => {
      grid.style.opacity   = '1';
      grid.style.transform = 'translateY(0)';
    });
  }, 300);
}

async function loadPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  try {
    const { data, error } = await supabase
      .from('portfolio')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) throw error;
    allPortfolioData = data;

    const countEl = document.getElementById('portfolioCount');
    if (countEl) countEl.textContent = data.length;

    renderPortfolio('all');
  } catch (err) {
    console.error('포트폴리오 로드 실패:', err);
  }
}

loadPortfolio();

let filterDebounceTimer = null;
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (filterDebounceTimer) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPortfolio(btn.dataset.filter);
    filterDebounceTimer = setTimeout(() => { filterDebounceTimer = null; }, 400);
  });
});




/* ===== 10. CONTACT FORM (EmailJS) ===== */
(function() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init('dNSpRRXESfgzfghN1');
  }
})();

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn     = this.querySelector('.submit-btn');
    const btnText = btn.querySelector('.btn-text');

    if (!this.name.value.trim() || !this.phone.value.trim() || !this.message.value.trim()) {
      contactForm.style.animation = 'shake 0.4s ease';
      contactForm.addEventListener('animationend', () => {
        contactForm.style.animation = '';
      }, { once: true });
      return;
    }

    if (typeof emailjs === 'undefined') {
      btnText.textContent = '전송 실패 — 다시 시도해주세요.';
      setTimeout(() => { btnText.textContent = '전송하기'; }, 3000);
      return;
    }

    btnText.textContent = '전송 중...';
    btn.style.pointerEvents = 'none';

    const params = {
      from_name: this.name.value.trim(),
      company:   this.company.value.trim()  || '—',
      position:  this.position.value.trim() || '—',
      phone:     this.phone.value.trim(),
      message:   this.message.value.trim(),
    };

    try {
      await emailjs.send('service_vou848q', 'template_wkwtmfa', params);
      contactForm.innerHTML = `
        <div class="form-success-state">
          <div class="form-success-icon-wrap">
            <svg class="form-success-check" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
              <circle class="check-circle" cx="26" cy="26" r="23" fill="none"/>
              <path class="check-path" d="M15 26 l8 8 l14 -14" fill="none"/>
            </svg>
          </div>
          <p class="form-success-title">문의가 접수되었습니다.</p>
          <p class="form-success-desc">영업일 1일 내에 담당자가 직접 연락드리겠습니다.<br>소중한 프로젝트 문의 감사드립니다.</p>
          <div class="form-success-links">
            <a href="portfolio.html">포트폴리오 보러가기 →</a>
            <button type="button" class="form-reset-btn" id="formResetBtn">다시 문의하기</button>
          </div>
        </div>`;
      document.getElementById('formResetBtn')
        ?.addEventListener('click', () => location.reload());
    } catch (err) {
      console.error(err);
      btnText.textContent = '전송 실패 — 다시 시도해주세요.';
      btn.style.pointerEvents = '';
      setTimeout(() => { btnText.textContent = '전송하기'; }, 3000);
    }
  });
}

const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%,100%{transform:translateX(0)}
    20%{transform:translateX(-7px)}
    40%{transform:translateX(7px)}
    60%{transform:translateX(-4px)}
    80%{transform:translateX(4px)}
  }`;
document.head.appendChild(shakeStyle);


/* ===== 11. 스무스 스크롤 ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  });
});


/* ===== 11-B. HERO 스크롤 버튼 ===== */
const heroScrollBtn = document.getElementById('heroScrollBtn');
if (heroScrollBtn) {
  heroScrollBtn.addEventListener('click', () => {
    const next = document.querySelector('.marquee-wrap') || document.querySelector('.main-intro');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ===== 12. 푸터 연도 ===== */
const copyEl = document.querySelector('.footer-copy');
if (copyEl) copyEl.textContent = `© ${new Date().getFullYear()} VDIRECTORS. All rights reserved.`;
