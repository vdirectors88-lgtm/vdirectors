/* ============================================
   VDIRECTORS — transitions.js
   Page transition (enter / leave)
   ============================================ */

(function () {
  // Exit: intercept all internal link clicks
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;
    if (href.startsWith('#')) return;
    if (href.startsWith('mailto:') || href.startsWith('tel:')) return;
    if (link.target === '_blank') return;

    e.preventDefault();
    document.body.classList.add('is-leaving');
    setTimeout(function () {
      window.location.href = link.href;
    }, 460);
  });
})();
