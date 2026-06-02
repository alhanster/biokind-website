// Biokind Analytics — interactivity
(function () {
  'use strict';

  // ---- Sticky nav border toggle ----
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 16) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Reveal on scroll ----
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  // ---- Count-up animation for stats ----
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  function animateCount(el, to, duration = 1400) {
    const cv = el.querySelector('.cv');
    if (!cv) return;
    const start = performance.now();
    const from = 0;
    const isFloat = to % 1 !== 0;
    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = easeOutCubic(t);
      const value = from + (to - from) * eased;
      cv.textContent = isFloat ? value.toFixed(1) : Math.round(value).toLocaleString();
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const statEls = document.querySelectorAll('[data-count-to]');
  if ('IntersectionObserver' in window) {
    const sio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const to = parseFloat(el.getAttribute('data-count-to'));
          animateCount(el, to);
          sio.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    statEls.forEach((el) => sio.observe(el));
  } else {
    statEls.forEach((el) => {
      const to = parseFloat(el.getAttribute('data-count-to'));
      animateCount(el, to);
    });
  }

  // ---- Partners grid: featured + the rest ----
  const FEATURED = [
    { file: 'nami.png',                   name: 'NAMI' },
    { file: 'als.png',                    name: 'ALS Association' },
    { file: 'make-a-wish.png',           name: 'Make-A-Wish' },
    { file: 'planned-parenthood.png',     name: 'Planned Parenthood' },
    { file: 'americorps-transparent.png', name: 'AmeriCorps' }
  ];

  const OTHER_LOGOS = [
    // PAGE 1 (24)
    '02609596.png','american-red-cross.png','25e95b6a.png','7874794.jpg','7vcxdlpu.png',
    'ability-connection-texas.png','afahc.jpeg',
    'babies-beyond.png','c8asfn.png','cancer-services.jpg','children-at-risk.png',
    'claris.png','compass-to-care.png','24-foundation.png','central-virginia.png',
    'download-1.png','download-min.png','download.png','dr-logo.png',
    'sanford-health.png','gloria-gemma.png','halo-house.png',
    'hfc-logo.png','hope-for-three.png',
    // PAGE 2 (24)
    'image-1.png','images-min.png','interfaith-carepartners.png','jibba.png',
    'journey.png','lawrence-hall.png','logo-560.png','maw-greater-virginia.png',
    'logo-e1559580222609.png','mamas-kitchen.png','logo-min.png','logo-no-bg.png',
    'long-logo.png','noras-home.png','onestar.png','opica.png','parkland.png',
    'als-texas.png','qt-q95.png','usa-logo.png','uth-sph.png','vbcf.png',
    'reining-strength.png','wonders-worries.png'
  ];

  const makeCell = (path, alt) => {
    const cell = document.createElement('div');
    cell.className = 'partner-cell';
    const img = document.createElement('img');
    img.src = `assets/partners/${path}`;
    img.alt = alt || '';
    img.loading = 'lazy';
    const crop = FINAL_CROPS[path];
    if (crop) {
      img.style.setProperty('--tx', crop.tx + 'px');
      img.style.setProperty('--ty', crop.ty + 'px');
      img.style.setProperty('--scale', crop.scale);
    }
    cell.appendChild(img);
    return cell;
  };

  // Finalized per-logo crops baked in from review
  const FINAL_CROPS = {
    'nami.png':                   { tx: -5,        ty: -2.03,   scale: 1.180 },
    'als.png':                    { tx: -2.62,     ty: 4.40,    scale: 0.895 },
    'make-a-wish.png':            { tx: 3.58,      ty: -2.03,   scale: 1.313 },
    'planned-parenthood.png':     { tx: -0.27,     ty: 5.12,    scale: 1.145 },
    'americorps-transparent.png': { tx: -3.37,     ty: -10.54,  scale: 0.933 },
    '7vcxdlpu.png':               { tx: -1.16,     ty: -36.04,  scale: 0.763 },
    'ability-connection-texas.png':{ tx: 1.82,     ty: -35.08,  scale: 1 },
    'afahc.jpeg':                 { tx: -1.05,     ty: 0.01,    scale: 1.230 },
    'c8asfn.png':                 { tx: -0.25,     ty: -6.09,   scale: 1 },
    'compass-to-care.png':        { tx: -3.19,     ty: -23.01,  scale: 0.739 },
    'download-min.png':           { tx: -0.27,     ty: -27.89,  scale: 0.768 },
    'gloria-gemma.png':           { tx: -0.18,     ty: -37.71,  scale: 0.848 },
    'images-min.png':             { tx: -2.26,     ty: -28.79,  scale: 1 },
    'image-1.png':                { tx: -0.98,     ty: 1.07,    scale: 1.220 },
    'hope-for-three.png':         { tx: 0,         ty: 0,       scale: 1.172 },
    'hfc-logo.png':               { tx: 0,         ty: 0,       scale: 1.201 },
    'halo-house.png':             { tx: 0,         ty: 0,       scale: 1.186 },
    'interfaith-carepartners.png':{ tx: -0.62,     ty: -37.06,  scale: 0.599 },
    'jibba.png':                  { tx: -2.35,     ty: -35.77,  scale: 1.362 },
    'journey.png':                { tx: 0,         ty: 0,       scale: 1.395 },
    'lawrence-hall.png':          { tx: 0,         ty: 0,       scale: 1.237 },
    'logo-560.png':               { tx: 0,         ty: 0,       scale: 1.204 },
    'logo-e1559580222609.png':    { tx: 1.67,      ty: -2.44,   scale: 1.252 },
    'mamas-kitchen.png':          { tx: 0.13,      ty: -2.60,   scale: 1.162 },
    'logo-min.png':               { tx: 0,         ty: 0,       scale: 1.165 },
    'logo-no-bg.png':             { tx: 0.00,      ty: -3.57,   scale: 1.049 },
    'long-logo.png':              { tx: 0,         ty: 0,       scale: 1.208 },
    'maw-greater-virginia.png':   { tx: 0,         ty: 0,       scale: 0.667 },
    'noras-home.png':             { tx: 0,         ty: 0,       scale: 0.599 },
    'onestar.png':                { tx: 0,         ty: 0,       scale: 1.219 },
    'opica.png':                  { tx: 0,         ty: 0,       scale: 1.121 },
    'wonders-worries.png':        { tx: -0.47,     ty: -36.63,  scale: 0.753 },
    'reining-strength.png':       { tx: 0,         ty: 0,       scale: 1.127 },
    'vbcf.png':                   { tx: 1.84,      ty: -8.79,   scale: 1 },
    'uth-sph.png':                { tx: -5.14,     ty: -0.25,   scale: 1.302 },
    'usa-logo.png':               { tx: 0,         ty: 0,       scale: 1.127 },
    'qt-q95.png':                 { tx: 0,         ty: 0,       scale: 1.241 },
    'parkland.png':               { tx: 0,         ty: 0,       scale: 1.179 },
    'central-virginia.png':       { tx: 0,         ty: 0,       scale: 1.215 },
    '25e95b6a.png':               { tx: 0.81,      ty: -5.04,   scale: 1.158 },
    'download-1.png':             { tx: 0,         ty: 0,       scale: 1.354 },
    'download.png':               { tx: 0,         ty: 0,       scale: 1.234 },
    'claris.png':                 { tx: 0,         ty: 0,       scale: 1.245 },
    'american-red-cross.png':     { tx: 0,         ty: 0,       scale: 1.101 }
  };

  const featuredEl = document.getElementById('featuredPartners');
  if (featuredEl) {
    FEATURED.forEach(({ file, name }) => {
      const cell = makeCell(file, name);
      const tag = document.createElement('span');
      tag.className = 'featured-tag';
      tag.textContent = 'Featured';
      cell.appendChild(tag);
      featuredEl.appendChild(cell);
    });
  }

  const grid1 = document.getElementById('partnerGrid1');
  const grid2 = document.getElementById('partnerGrid2');
  if (grid1 && grid2) {
    const PAGE_SIZE = 24;
    OTHER_LOGOS.slice(0, PAGE_SIZE).forEach((file) => grid1.appendChild(makeCell(file)));
    OTHER_LOGOS.slice(PAGE_SIZE).forEach((file) => grid2.appendChild(makeCell(file)));
  }

  // ---- Partner-grid pagination (24 at a time, auto-advance every 30s) ----
  const track = document.getElementById('paginatedTrack');
  const prevBtn = document.getElementById('pagePrev');
  const nextBtn = document.getElementById('pageNext');
  const indicator = document.getElementById('pageIndicator');
  const dots = document.querySelectorAll('.page-dot');
  const TOTAL_PAGES = 2;
  const AUTO_MS = 30000;
  let currentPage = 0;
  let autoTimer = null;

  const goToPage = (p) => {
    currentPage = ((p % TOTAL_PAGES) + TOTAL_PAGES) % TOTAL_PAGES;
    if (track) track.style.setProperty('--page', currentPage);
    if (indicator) indicator.textContent = `${currentPage + 1} / ${TOTAL_PAGES}`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentPage));
  };
  const resetTimer = () => {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(() => goToPage(currentPage + 1), AUTO_MS);
  };

  if (track) {
    prevBtn && prevBtn.addEventListener('click', () => { goToPage(currentPage - 1); resetTimer(); });
    nextBtn && nextBtn.addEventListener('click', () => { goToPage(currentPage + 1); resetTimer(); });
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        goToPage(parseInt(dot.dataset.page, 10));
        resetTimer();
      });
    });
    // Pause auto-advance when the section isn't on screen
    const section = document.getElementById('partnersPaginated');
    if (section && 'IntersectionObserver' in window) {
      const visIo = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) resetTimer();
          else if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
        });
      }, { threshold: 0.1 });
      visIo.observe(section);
    } else {
      resetTimer();
    }
  }

  // ---- Hero canvas data animation ----
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, offset = 0;
    const TEAL = '#74dcbb';

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Three "data series" — different frequencies and amplitudes
    const series = [
      { amp: 0.08, freq: 0.006, speed: 0.18, phase: 0,    alpha: 0.55, width: 1.5 },
      { amp: 0.05, freq: 0.010, speed: 0.28, phase: 2.1,  alpha: 0.30, width: 1.0 },
      { amp: 0.03, freq: 0.018, speed: 0.40, phase: 4.5,  alpha: 0.20, width: 0.8 }
    ];

    const drawLine = (s) => {
      ctx.beginPath();
      ctx.strokeStyle = TEAL;
      ctx.lineWidth = s.width;
      ctx.globalAlpha = s.alpha;
      const baseY = H * 0.62;
      for (let x = 0; x <= W; x += 2) {
        const y = baseY - Math.sin((x + offset * s.speed * 80) * s.freq + s.phase) * H * s.amp
                        - Math.sin((x + offset * s.speed * 40) * s.freq * 1.7 + s.phase * 1.3) * H * s.amp * 0.4;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    // Subtle horizontal grid lines
    const drawGrid = () => {
      ctx.strokeStyle = TEAL;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.08;
      ctx.setLineDash([4, 8]);
      for (let i = 1; i <= 4; i++) {
        const y = H * (0.35 + i * 0.12);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
      ctx.setLineDash([]);
    };

    // Live "head" dot on the primary series
    const drawHead = () => {
      const s = series[0];
      const x = W * 0.78;
      const baseY = H * 0.62;
      const y = baseY - Math.sin((x + offset * s.speed * 80) * s.freq + s.phase) * H * s.amp
                      - Math.sin((x + offset * s.speed * 40) * s.freq * 1.7 + s.phase * 1.3) * H * s.amp * 0.4;
      ctx.globalAlpha = 0.9;
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = TEAL;
      ctx.fill();
      // Pulse ring
      const pulse = (Math.sin(offset * 2) + 1) / 2;
      ctx.globalAlpha = 0.15 + pulse * 0.25;
      ctx.beginPath();
      ctx.arc(x, y, 8 + pulse * 5, 0, Math.PI * 2);
      ctx.strokeStyle = TEAL;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    let lastT = 0;
    const animate = (t) => {
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;
      offset += dt;
      ctx.clearRect(0, 0, W, H);
      drawGrid();
      series.forEach(drawLine);
      drawHead();
      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  // ---- Mobile nav toggle ----
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', open);
    });
    document.querySelectorAll('.nav-links a').forEach((link) => {
      link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-inner') && document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- Smooth-scroll already via CSS scroll-behavior. Done. ----
})();
