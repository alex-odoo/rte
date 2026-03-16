// ── Angel Messages Carousel — Game Logic ──
(function () {
  const NUM_VISIBLE = 12;
  const SPIN_DURATION = 4000; // 4 seconds total spin time
  const container = document.getElementById('container');
  const carousel = document.getElementById('carousel');
  const revealedCard = document.getElementById('revealedCard');
  const instruction = document.getElementById('instruction');
  const tapAgain = document.getElementById('tapAgain');
  const glowRing = document.getElementById('glowRing');
  const particlesEl = document.getElementById('particles');

  // Responsive radius
  function getRadius() {
    const w = window.innerWidth;
    if (w < 400) return 200;
    if (w < 600) return 260;
    return 320;
  }
  let RADIUS = getRadius();

  let angle = 0;
  let speed = 0;
  let spinning = false;
  let revealed = false;
  let animId = null;
  let touchStartX = 0;
  let touchStartTime = 0;
  let isDragging = false;
  let spinStartTime = 0;

  // ── Stars ──
  (function createStars() {
    const starsEl = document.getElementById('stars');
    const count = window.innerWidth < 500 ? 60 : 100;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      const size = (Math.random() * 2 + 0.5);
      s.style.width = s.style.height = size + 'px';
      s.style.animationDelay = (Math.random() * 3) + 's';
      s.style.animationDuration = (2 + Math.random() * 3) + 's';
      starsEl.appendChild(s);
    }
  })();

  // ── Angel ring (replaces zodiac) ──
  (function createAngelRing() {
    const ring = document.getElementById('angelRing');
    const symbols = ['\u2721', '\u2726', '\u2605', '\u2720', '\u2741', '\u273F', '\u2742', '\u2743', '\u2727', '\u2736', '\u2733', '\u2734'];
    const ringSize = ring.offsetWidth || 380;
    const r = (ringSize / 2) - 15;
    symbols.forEach((sym, i) => {
      const el = document.createElement('div');
      el.className = 'angel-char';
      el.textContent = sym;
      const a = (i / symbols.length) * 360;
      const rad = a * Math.PI / 180;
      el.style.left = (ringSize/2 + Math.cos(rad) * r - 8) + 'px';
      el.style.top = (ringSize/2 + Math.sin(rad) * r - 8) + 'px';
      ring.appendChild(el);
    });
  })();

  // ── Floating feathers ──
  (function createFeathers() {
    for (let i = 0; i < 5; i++) {
      const f = document.createElement('div');
      f.className = 'feather';
      f.innerHTML = '<svg width="12" height="24" viewBox="0 0 12 24"><path d="M6 0 Q8 6 10 12 Q8 18 6 24 Q4 18 2 12 Q4 6 6 0" fill="none" stroke="rgba(196,162,101,0.25)" stroke-width="0.8"/><path d="M6 0 L6 24" stroke="rgba(196,162,101,0.15)" stroke-width="0.5"/></svg>';
      f.style.left = (10 + Math.random() * 80) + '%';
      f.style.animationDuration = (12 + Math.random() * 10) + 's';
      f.style.animationDelay = (Math.random() * 15) + 's';
      container.appendChild(f);
    }
  })();

  // ── Build carousel cards ──
  function buildCarousel() {
    carousel.innerHTML = '';
    const shuffled = [...CARDS].sort(() => Math.random() - 0.5);
    for (let i = 0; i < NUM_VISIBLE; i++) {
      const card = shuffled[i % shuffled.length];
      const el = document.createElement('div');
      el.className = 'card';
      el.dataset.index = i;
      el.dataset.name = card.name;
      el.dataset.displayName = card.displayName;
      el.dataset.meaning = card.meaning;
      el.dataset.num = card.num;
      el.innerHTML = `
        <div class="card-face">
          <div class="cf-border"></div>
          <div class="cf-num">${card.num}</div>
          <div class="cf-icon">${CARD_SVGS[card.name] || ''}</div>
          <div class="cf-divider"></div>
          <div class="cf-name">${card.displayName}</div>
          <div class="cf-meaning">${card.meaning}</div>
        </div>`;
      carousel.appendChild(el);
    }
  }

  // ── Position cards in 3D circle ──
  function layoutCards() {
    const cards = carousel.querySelectorAll('.card');
    const step = 360 / NUM_VISIBLE;
    cards.forEach((c, i) => {
      const a = angle + i * step;
      const rad = (a * Math.PI) / 180;
      const x = Math.sin(rad) * RADIUS;
      const z = Math.cos(rad) * RADIUS - RADIUS;
      const scale = (z + RADIUS * 2) / (RADIUS * 3);
      const opacity = 0.25 + scale * 0.75;
      c.style.transform = `translateX(${x}px) translateZ(${z}px) scale(${0.45 + scale * 0.55})`;
      c.style.opacity = opacity;
      c.style.zIndex = Math.round(scale * 100);
    });
  }

  // ── Animation loop with time-based 4-second spin ──
  function animate() {
    if (spinning) {
      const elapsed = Date.now() - spinStartTime;
      const progress = Math.min(elapsed / SPIN_DURATION, 1);
      // Ease-out: fast start, smooth deceleration
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      // Speed starts at 10 (2x original) and decelerates to 0
      speed = 10 * (1 - easedProgress);
      angle += speed;

      if (progress >= 1) {
        spinning = false;
        speed = 0;
        revealCard();
        return;
      }
    }
    layoutCards();
    animId = requestAnimationFrame(animate);
  }

  // ── Find the front card ──
  function getFrontCard() {
    const cards = carousel.querySelectorAll('.card');
    let best = null;
    let bestZ = -Infinity;
    const step = 360 / NUM_VISIBLE;
    cards.forEach((c, i) => {
      const a = ((angle + i * step) % 360 + 360) % 360;
      const rad = (a * Math.PI) / 180;
      const z = Math.cos(rad) * RADIUS;
      if (z > bestZ) { bestZ = z; best = c; }
    });
    return best;
  }

  // ── Reveal the chosen card ──
  function revealCard() {
    const front = getFrontCard();
    if (!front) return;
    revealed = true;
    document.getElementById('cardNumber').textContent = front.dataset.num;
    document.getElementById('cardImage').innerHTML = CARD_SVGS[front.dataset.name] || '';
    document.getElementById('cardName').textContent = front.dataset.displayName;
    document.getElementById('cardMeaning').textContent = front.dataset.meaning;
    const svg = document.getElementById('cardImage').querySelector('svg');
    if (svg) svg.classList.add('card-icon-svg');
    revealedCard.classList.add('show');
    glowRing.classList.add('show');
    tapAgain.classList.add('show');
    spawnParticles();
  }

  // ── Particles burst ──
  function spawnParticles() {
    particlesEl.innerHTML = '';
    const count = window.innerWidth < 500 ? 18 : 30;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const a = Math.random() * Math.PI * 2;
      const dist = 60 + Math.random() * 140;
      const tx = Math.cos(a) * dist;
      const ty = Math.sin(a) * dist;
      const size = 2 + Math.random() * 3;
      p.style.width = p.style.height = size + 'px';
      p.style.left = cx + 'px';
      p.style.top = cy + 'px';
      p.style.background = Math.random() > 0.5 ? '#c4a265' : '#e8d5a3';
      particlesEl.appendChild(p);
      p.animate([
        { transform: 'translate(0,0) scale(1)', opacity: 1 },
        { transform: `translate(${tx}px,${ty}px) scale(0)`, opacity: 0 }
      ], { duration: 800 + Math.random() * 600, easing: 'cubic-bezier(0.25,0.46,0.45,0.94)', fill: 'forwards', delay: Math.random() * 200 });
    }
  }

  // ── Reset for new spin ──
  function reset() {
    revealed = false;
    revealedCard.classList.remove('show');
    glowRing.classList.remove('show');
    tapAgain.classList.remove('show');
    instruction.classList.remove('hidden');
    particlesEl.innerHTML = '';
    buildCarousel();
    angle = Math.random() * 360;
    layoutCards();
  }

  // ── Spin action ──
  function startSpin() {
    if (revealed) { reset(); return; }
    if (spinning) {
      // User clicked/tapped during spin — immediately reveal
      spinning = false;
      speed = 0;
      if (animId) cancelAnimationFrame(animId);
      revealCard();
      return;
    }
    spinning = true;
    spinStartTime = Date.now();
    speed = 10; // 2x original speed
    instruction.classList.add('hidden');
    if (animId) cancelAnimationFrame(animId);
    animate();
  }

  // ── Click handler ──
  container.addEventListener('click', function(e) {
    if (!isDragging) startSpin();
  });

  // ── Touch support with swipe ──
  container.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartTime = Date.now();
    isDragging = false;
  }, { passive: true });

  container.addEventListener('touchmove', function(e) {
    const dx = e.touches[0].clientX - touchStartX;
    if (Math.abs(dx) > 10) isDragging = true;
    if (!spinning && !revealed && isDragging) {
      angle += dx * 0.3;
      touchStartX = e.touches[0].clientX;
      layoutCards();
    }
  }, { passive: true });

  container.addEventListener('touchend', function(e) {
    const dt = Date.now() - touchStartTime;
    if (!isDragging && dt < 300) {
      startSpin();
    }
    isDragging = false;
  }, { passive: true });

  // ── Resize handler ──
  window.addEventListener('resize', function() {
    RADIUS = getRadius();
    layoutCards();
  });

  // ── Init ──
  buildCarousel();
  layoutCards();

  // Idle slow rotation (2x speed)
  function idleRotate() {
    if (!spinning && !revealed) {
      angle += 0.24;
      layoutCards();
    }
    requestAnimationFrame(idleRotate);
  }
  idleRotate();
})();
