// ââ Tarot Carousel â Game Logic ââ
(function () {
  const NUM_VISIBLE = 10;
  const RADIUS = 320;
  const container = document.getElementById('container');
  const carousel = document.getElementById('carousel');
  const revealedCard = document.getElementById('revealedCard');
  const instruction = document.getElementById('instruction');
  const tapAgain = document.getElementById('tapAgain');
  const glowRing = document.getElementById('glowRing');
  const particlesEl = document.getElementById('particles');

  let angle = 0;
  let speed = 0;
  let spinning = false;
  let revealed = false;
  let animId = null;

  // ââ Stars ââ
  (function createStars() {
    const starsEl = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      s.style.width = s.style.height = (Math.random() * 2 + 1) + 'px';
      s.style.animationDelay = (Math.random() * 3) + 's';
      s.style.animationDuration = (2 + Math.random() * 3) + 's';
      starsEl.appendChild(s);
    }
  })();

  // ââ Zodiac ring ââ
  (function createZodiac() {
    const zodiacRing = document.getElementById('zodiacRing');
    const symbols = ['â','â','â','â','â','â','â','â','â','â','â','â'];
    symbols.forEach((sym, i) => {
      const el = document.createElement('div');
      el.className = 'zodiac-char';
      el.textContent = sym;
      const a = (i / symbols.length) * 360;
      const r = 170;
      const rad = a * Math.PI / 180;
      el.style.left = (190 + Math.cos(rad) * r - 8) + 'px';
      el.style.top = (190 + Math.sin(rad) * r - 8) + 'px';
      zodiacRing.appendChild(el);
    });
  })();

  // ââ Build carousel cards ââ
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

  // ââ Position cards in 3D circle ââ
  function layoutCards() {
    const cards = carousel.querySelectorAll('.card');
    const step = 360 / NUM_VISIBLE;
    cards.forEach((c, i) => {
      const a = angle + i * step;
      const rad = (a * Math.PI) / 180;
      const x = Math.sin(rad) * RADIUS;
      const z = Math.cos(rad) * RADIUS - RADIUS;
      const scale = (z + RADIUS * 2) / (RADIUS * 3);
      const opacity = 0.3 + scale * 0.7;
      c.style.transform = `translateX(${x}px) translateZ(${z}px) scale(${0.5 + scale * 0.5})`;
      c.style.opacity = opacity;
      c.style.zIndex = Math.round(scale * 100);
    });
  }

  // ââ Animation loop ââ
  function animate() {
    if (spinning) {
      angle += speed;
      if (speed > 0.05) {
        speed *= 0.995;
      } else {
        spinning = false;
        speed = 0;
        revealCard();
        return;
      }
    }
    layoutCards();
    animId = requestAnimationFrame(animate);
  }

  // ââ Find the front card ââ
  function getFrontCard() {
    const cards = carousel.querySelectorAll('.card');
    let best = null;
    let bestZ = -Infinity;
    const step = 360 / NUM_VISIBLE;
    cards.forEach((c, i) => {
      const a = ((angle + i * step) % 360 + 360) % 360;
      const rad = (a * Math.PI) / 180;
      const z = Math.cos(rad) * RADIUS;
      if (z > bestZ) {
        bestZ = z;
        best = c;
      }
    });
    return best;
  }

  // ââ Reveal the chosen card ââ
  function revealCard() {
    const front = getFrontCard();
    if (!front) return;

    revealed = true;
    const num = front.dataset.num;
    const name = front.dataset.name;
    const displayName = front.dataset.displayName;
    const meaning = front.dataset.meaning;

    document.getElementById('cardNumber').textContent = num;
    document.getElementById('cardImage').innerHTML = CARD_SVGS[name] || '';
    document.getElementById('cardName').textContent = displayName;
    document.getElementById('cardMeaning').textContent = meaning;

    // Scale the SVG inside revealed card
    const svg = document.getElementById('cardImage').querySelector('svg');
    if (svg) {
      svg.classList.add('card-icon-svg');
    }

    revealedCard.classList.add('show');
    glowRing.classList.add('show');
    tapAgain.classList.add('show');

    spawnParticles();
  }

  // ââ Particles burst ââ
  function spawnParticles() {
    particlesEl.innerHTML = '';
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const a = Math.random() * Math.PI * 2;
      const dist = 80 + Math.random() * 160;
      const tx = Math.cos(a) * dist;
      const ty = Math.sin(a) * dist;
      const size = 2 + Math.random() * 4;
      p.style.width = p.style.height = size + 'px';
      p.style.left = cx + 'px';
      p.style.top = cy + 'px';
      p.style.background = Math.random() > 0.5 ? '#bd9a52' : '#e8d5a3';
      p.style.borderRadius = '50%';
      particlesEl.appendChild(p);

      p.animate([
        { transform: 'translate(0,0) scale(1)', opacity: 1 },
        { transform: `translate(${tx}px,${ty}px) scale(0)`, opacity: 0 }
      ], {
        duration: 800 + Math.random() * 600,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fill: 'forwards',
        delay: Math.random() * 200
      });
    }
  }

  // ââ Reset for new spin ââ
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

  // ââ Tap handler ââ
  container.addEventListener('click', function () {
    if (revealed) {
      reset();
      return;
    }
    if (!spinning) {
      spinning = true;
      speed = 5 + Math.random() * 3;
      instruction.classList.add('hidden');
      if (animId) cancelAnimationFrame(animId);
      animate();
    }
  });

  // ââ Touch support ââ
  container.addEventListener('touchstart', function (e) {
    e.preventDefault();
  }, { passive: false });

  // ââ Init ââ
  buildCarousel();
  layoutCards();

  // Idle slow rotation
  function idleRotate() {
    if (!spinning && !revealed) {
      angle += 0.15;
      layoutCards();
    }
    requestAnimationFrame(idleRotate);
  }
  idleRotate();
})();
