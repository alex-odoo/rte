// ── Angel Messages Carousel — Game Logic (i18n-aware) ──
(function () {
  const NUM_VISIBLE = 12;
  const SPIN_DURATION = 4000;
  const container = document.getElementById('container');
  const carousel = document.getElementById('carousel');
  const revealedCard = document.getElementById('revealedCard');
  const instruction = document.getElementById('instruction');
  const tapAgain = document.getElementById('tapAgain');
  const glowRing = document.getElementById('glowRing');
  const particlesEl = document.getElementById('particles');

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
  let spinStartTime = 0;

  // Touch state
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;
  let isTouchDrag = false;
  let lastTouchTime = 0;

  // ── i18n helpers ──
  function getCardText(cardIndex) {
    if (window.i18n) return window.i18n.getAngelCard(cardIndex);
    return { displayName: CARDS[cardIndex].displayName, meaning: CARDS[cardIndex].meaning };
  }

  function uiText(key) {
    if (window.i18n) return window.i18n.t(key);
    return key;
  }

  function applyUILanguage() {
    var titleEl = container.querySelector('.title h1');
    var subtitleEl = container.querySelector('.title p');
    if (titleEl) titleEl.textContent = uiText('angelTitle');
    if (subtitleEl) subtitleEl.textContent = uiText('angelSub');
    if (!spinning && !revealed) {
      instruction.textContent = uiText('tap');
    }
    tapAgain.textContent = uiText('tapShuffle');
    // Update mode switcher buttons
    var btnAngel = document.getElementById('btnAngel');
    var btnTarot = document.getElementById('btnTarot');
    if (btnAngel) btnAngel.textContent = uiText('btnAngel');
    if (btnTarot) btnTarot.textContent = uiText('btnTarot');
    // Rebuild carousel to update card text
    if (!spinning && !revealed) {
      buildCarousel();
      layoutCards();
    }
    // Update language dropdown button
    if (window.i18n && window.i18n.refreshDropdown) window.i18n.refreshDropdown();
  }

  // Register global language change handler
  window.applyLanguage = function() {
    applyUILanguage();
    // Also refresh tarot if it has its own handler
    if (window.tarot22 && window.tarot22.applyLanguage) window.tarot22.applyLanguage();
  };

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

  // ── Angel ring ──
  (function createAngelRing() {
    const ring = document.getElementById('angelRing');
    const symbols = ['\u2721', '\u2726', '\u2605', '\u2720', '\u2741', '\u273F', '\u2742', '\u2743', '\u2727', '\u2736', '\u2733', '\u2734'];
    const ringSize = ring.offsetWidth || 380;
    const r = (ringSize / 2) - 15;
    symbols.forEach(function (sym, i) {
      const el = document.createElement('div');
      el.className = 'angel-char';
      el.textContent = sym;
      const a = (i / symbols.length) * 360;
      const rad = a * Math.PI / 180;
      el.style.left = (ringSize / 2 + Math.cos(rad) * r - 8) + 'px';
      el.style.top = (ringSize / 2 + Math.sin(rad) * r - 8) + 'px';
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
    const shuffled = CARDS.slice().sort(function () { return Math.random() - 0.5; });
    for (let i = 0; i < NUM_VISIBLE; i++) {
      const card = shuffled[i % shuffled.length];
      const cardIdx = parseInt(card.num) - 1;
      const tr = getCardText(cardIdx);
      const el = document.createElement('div');
      el.className = 'card';
      el.dataset.index = i;
      el.dataset.name = card.name;
      el.dataset.cardIdx = cardIdx;
      el.dataset.num = card.num;
      el.innerHTML =
        '<div class="card-face">' +
          '<div class="cf-border"></div>' +
          '<div class="cf-num">' + card.num + '</div>' +
          '<div class="cf-icon">' + (CARD_SVGS[card.name] || '') + '</div>' +
          '<div class="cf-divider"></div>' +
          '<div class="cf-name">' + tr.displayName + '</div>' +
          '<div class="cf-meaning">' + tr.meaning + '</div>' +
        '</div>';
      carousel.appendChild(el);
    }
  }

  // ── Position cards in 3D circle ──
  function layoutCards() {
    var cards = carousel.children;
    var step = 360 / NUM_VISIBLE;
    for (var i = 0; i < cards.length; i++) {
      var c = cards[i];
      var a = angle + i * step;
      var rad = (a * Math.PI) / 180;
      var x = Math.sin(rad) * RADIUS;
      var z = Math.cos(rad) * RADIUS - RADIUS;
      var scale = (z + RADIUS * 2) / (RADIUS * 3);
      var opacity = 0.25 + scale * 0.75;
      c.style.transform = 'translateX(' + x + 'px) translateZ(' + z + 'px) scale(' + (0.45 + scale * 0.55) + ')';
      c.style.opacity = opacity;
      c.style.zIndex = Math.round(scale * 100);
    }
  }

  // ── Single unified animation loop ──
  function tick() {
    if (spinning) {
      var elapsed = Date.now() - spinStartTime;
      var progress = elapsed / SPIN_DURATION;
      if (progress >= 1) {
        spinning = false;
        speed = 0;
        layoutCards();
        revealCard();
        return;
      }
      var easedProgress = 1 - Math.pow(1 - progress, 3);
      speed = 20 * (1 - easedProgress);
      angle += speed;
    } else if (!revealed) {
      angle += 0.48;
    }
    layoutCards();
    animId = requestAnimationFrame(tick);
  }

  function startLoop() {
    if (animId) cancelAnimationFrame(animId);
    animId = requestAnimationFrame(tick);
  }

  // ── Find the front card ──
  function getFrontCard() {
    var cards = carousel.children;
    var best = null;
    var bestZ = -Infinity;
    var step = 360 / NUM_VISIBLE;
    for (var i = 0; i < cards.length; i++) {
      var a = ((angle + i * step) % 360 + 360) % 360;
      var rad = (a * Math.PI) / 180;
      var z = Math.cos(rad) * RADIUS;
      if (z > bestZ) { bestZ = z; best = cards[i]; }
    }
    return best;
  }

  // ── Reveal the chosen card ──
  function revealCard() {
    var front = getFrontCard();
    if (!front) return;
    revealed = true;
    var cardIdx = parseInt(front.dataset.cardIdx);
    var tr = getCardText(cardIdx);
    document.getElementById('cardNumber').textContent = front.dataset.num;
    document.getElementById('cardImage').innerHTML = CARD_SVGS[front.dataset.name] || '';
    document.getElementById('cardName').textContent = tr.displayName;
    document.getElementById('cardMeaning').textContent = tr.meaning;
    var svg = document.getElementById('cardImage').querySelector('svg');
    if (svg) svg.classList.add('card-icon-svg');
    revealedCard.classList.add('show');
    glowRing.classList.add('show');
    tapAgain.classList.add('show');
    tapAgain.textContent = uiText('tapShuffle');
    spawnParticles();
    startLoop();
  }

  // ── Particles burst ──
  function spawnParticles() {
    particlesEl.innerHTML = '';
    var count = window.innerWidth < 500 ? 18 : 30;
    for (var i = 0; i < count; i++) {
      var p = document.createElement('div');
      p.className = 'particle';
      var cx = window.innerWidth / 2;
      var cy = window.innerHeight / 2;
      var a = Math.random() * Math.PI * 2;
      var dist = 60 + Math.random() * 140;
      var tx = Math.cos(a) * dist;
      var ty = Math.sin(a) * dist;
      var size = 2 + Math.random() * 3;
      p.style.width = p.style.height = size + 'px';
      p.style.left = cx + 'px';
      p.style.top = cy + 'px';
      p.style.background = Math.random() > 0.5 ? '#c4a265' : '#e8d5a3';
      particlesEl.appendChild(p);
      p.animate([
        { transform: 'translate(0,0) scale(1)', opacity: 1 },
        { transform: 'translate(' + tx + 'px,' + ty + 'px) scale(0)', opacity: 0 }
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
    instruction.textContent = uiText('tap');
    particlesEl.innerHTML = '';
    buildCarousel();
    angle = Math.random() * 360;
    layoutCards();
    startLoop();
  }

  // ── Core spin / reveal / reset action ──
  function handleAction() {
    if (revealed) {
      reset();
      return;
    }
    if (spinning) {
      spinning = false;
      speed = 0;
      revealCard();
      return;
    }
    spinning = true;
    spinStartTime = Date.now();
    speed = 20;
    instruction.classList.add('hidden');
    startLoop();
  }

  // ── EVENT HANDLING ──
  container.addEventListener('click', function (e) {
    if (Date.now() - lastTouchTime < 500) return;
    handleAction();
  }, false);

  container.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
    isTouchDrag = false;
  }, { passive: true });

  container.addEventListener('touchmove', function (e) {
    var dx = e.touches[0].clientX - touchStartX;
    var dy = e.touches[0].clientY - touchStartY;
    if (Math.abs(dx) > 8 || Math.abs(dy) > 8) isTouchDrag = true;
    if (!spinning && !revealed && isTouchDrag) {
      angle += dx * 0.3;
      touchStartX = e.touches[0].clientX;
      layoutCards();
    }
  }, { passive: true });

  container.addEventListener('touchend', function (e) {
    lastTouchTime = Date.now();
    var dt = lastTouchTime - touchStartTime;
    if (!isTouchDrag && dt < 400) {
      e.preventDefault();
      handleAction();
    }
    isTouchDrag = false;
  }, { passive: false });

  // ── Resize handler ──
  window.addEventListener('resize', function () {
    RADIUS = getRadius();
    layoutCards();
  });

  // ── Init ──
  applyUILanguage();
  buildCarousel();
  layoutCards();
  startLoop();
})();
