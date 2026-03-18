// ── Tarot 22 Major Arcana — 3D Carousel Style (matching Angel Carousel) ──
(function() {
  'use strict';

  var TAROT = [
    { id:0, name:"The Fool", numeral:"0", ukName:"Блазень", meaning:"Нові початки, невинність, спонтанність, вільний дух", reversed:"Безрозсудність, ризик, стримування", colors:["#F5D16C","#8B5E3C","#E8A838"], desc:"Стрибок віри у невідоме", symbol:"🌟" },
    { id:1, name:"The Magician", numName:"I", ukName:"Маг", meaning:"Сила волі, творіння, прояв, винахідливість", reversed:"Маніпуляція, нерозкриті таланти, обман", colors:["#6A3D9A","#DAA520","#1A0533"], desc:"У вас є всі необхідні інструменти", symbol:"✨" },
    { id:2, name:"The High Priestess", numeral:"II", ukName:"Верховна Жриця", meaning:"Інтуїція, таємниця, внутрішнє знання, підсвідомість", reversed:"Секрети, відстороненість, мовчання", colors:["#1B3A6B","#C0C0C0","#4169E1"], desc:"Довіртесь внутрішньому голосу", symbol:"🌙" },
    { id:3, name:"The Empress", numeral:"III", ukName:"Імператриця", meaning:"Достаток, турбота, родючість, природа, краса", reversed:"Залежність, задушливість, творчий блок", colors:["#2E8B57","#FFD700","#8FBC8F"], desc:"Прийміть достаток і зростання", symbol:"🌿" },
    { id:4, name:"The Emperor", numeral:"IV", ukName:"Імператор", meaning:"Авторитет, структура, стабільність, лідерство", reversed:"Тиранія, жорсткість, домінування", colors:["#8B0000","#DAA520","#FF4500"], desc:"Будуйте свою імперію з дисципліною", symbol:"👑" },
    { id:5, name:"The Hierophant", numeral:"V", ukName:"Ієрофант", meaning:"Традиція, духовна мудрість, відповідність, освіта", reversed:"Бунтарство, підривність, нові підходи", colors:["#4B0082","#FFD700","#FF69B4"], desc:"Шукайте глибший духовний сенс", symbol:"🔑" },
    { id:6, name:"The Lovers", numeral:"VI", ukName:"Закохані", meaning:"Любов, гармонія, партнерство, вибір, єдність", reversed:"Дисгармонія, дисбаланс, неузгодженість", colors:["#FF69B4","#FFD700","#FF1493"], desc:"Обирайте серцем і душею", symbol:"💕" },
    { id:7, name:"The Chariot", numeral:"VII", ukName:"Колісниця", meaning:"Рішучість, сила волі, тріумф, контроль", reversed:"Відсутність напрямку, агресія, безконтрольність", colors:["#1C1C2E","#C0C0C0","#4682B4"], desc:"Перемога через зосереджену волю", symbol:"⚡" },
    { id:8, name:"Strength", numeral:"VIII", ukName:"Сила", meaning:"Мужність, внутрішня сила, співчуття, терпіння", reversed:"Невпевненість, слабкість, незахищеність", colors:["#DAA520","#FF6347","#FFD700"], desc:"М'яка сила перемагає все", symbol:"🦁" },
    { id:9, name:"The Hermit", numeral:"IX", ukName:"Відлюдник", meaning:"Пошук душі, самоаналіз, самотність, внутрішнє керівництво", reversed:"Ізоляція, самотність, відстороненість", colors:["#2F4F4F","#DAA520","#696969"], desc:"Освітіть шлях зсередини", symbol:"🕯️" },
    { id:10, name:"Wheel of Fortune", numeral:"X", ukName:"Колесо Фортуни", meaning:"Зміна, цикли, доля, поворотний момент, удача", reversed:"Невдача, опір змінам, руйнування циклів", colors:["#4169E1","#FFD700","#9370DB"], desc:"Колесо обертається — прийміть зміни", symbol:"🎡" },
    { id:11, name:"Justice", numeral:"XI", ukName:"Справедливість", meaning:"Чесність, істина, закон, причина та наслідок", reversed:"Несправедливість, нечесність, безвідповідальність", colors:["#8B0000","#DAA520","#DC143C"], desc:"Істина і баланс переважають", symbol:"⚖️" },
    { id:12, name:"The Hanged Man", numeral:"XII", ukName:"Повішений", meaning:"Капітуляція, відпускання, нова перспектива, пауза", reversed:"Застій, опір, нерішучість", colors:["#4682B4","#98FB98","#5F9EA0"], desc:"Здайтесь, щоб здобути нове бачення", symbol:"🔮" },
    { id:13, name:"Death", numeral:"XIII", ukName:"Смерть", meaning:"Закінчення, трансформація, перехід, звільнення", reversed:"Опір змінам, застій, розпад", colors:["#1C1C2E","#C0C0C0","#2F2F4F"], desc:"Трансформуйтесь і переродіться", symbol:"🦋" },
    { id:14, name:"Temperance", numeral:"XIV", ukName:"Поміркованість", meaning:"Баланс, терпіння, помірність, гармонія, мета", reversed:"Дисбаланс, надмірність, відсутність бачення", colors:["#FFD700","#87CEEB","#DDA0DD"], desc:"Знайдіть свій ідеальний баланс", symbol:"🏺" },
    { id:15, name:"The Devil", numeral:"XV", ukName:"Диявол", meaning:"Тіньове «я», прив'язаність, залежність, обмеження", reversed:"Звільнення від обмежень, свобода, повернення сили", colors:["#1C1C1C","#8B0000","#FF4500"], desc:"Звільніться від своїх ланцюгів", symbol:"🔗" },
    { id:16, name:"The Tower", numeral:"XVI", ukName:"Вежа", meaning:"Потрясіння, одкровення, раптова зміна, пробудження", reversed:"Запобігання катастрофі, страх змін, зволікання", colors:["#FF4500","#FFD700","#8B0000"], desc:"Руйнування створює простір для істини", symbol:"🗼" },
    { id:17, name:"The Star", numeral:"XVII", ukName:"Зірка", meaning:"Надія, віра, оновлення, спокій, натхнення", reversed:"Відсутність віри, відчай, відключеність", colors:["#87CEEB","#FFD700","#E6E6FA"], desc:"Надія сяє у темряві", symbol:"⭐" },
    { id:18, name:"The Moon", numeral:"XVIII", ukName:"Місяць", meaning:"Ілюзія, страх, тривога, інтуїція, підсвідомість", reversed:"Звільнення від страху, придушені емоції, ясність", colors:["#191970","#C0C0C0","#483D8B"], desc:"Пройдіть через ілюзію до істини", symbol:"🌑" },
    { id:19, name:"The Sun", numeral:"XIX", ukName:"Сонце", meaning:"Радість, успіх, життєва сила, позитивність, тепло", reversed:"Внутрішня дитина, пригніченість, надмірний оптимізм", colors:["#FFD700","#FF8C00","#FFA500"], desc:"Сяюча радість освітлює ваш шлях", symbol:"☀️" },
    { id:20, name:"Judgement", numeral:"XX", ukName:"Суд", meaning:"Роздуми, розплата, внутрішній поклик, відпущення", reversed:"Невпевненість, внутрішній критик, ігнорування поклику", colors:["#4B0082","#FFD700","#9370DB"], desc:"Відповідайте на вищий поклик", symbol:"🔔" },
    { id:21, name:"The World", numeral:"XXI", ukName:"Світ", meaning:"Завершення, досягнення, цілісність, подорож", reversed:"Незавершеність, скорочення шляху, пошук закриття", colors:["#2E8B57","#FFD700","#4169E1"], desc:"Ви прибули — святкуйте", symbol:"🌍" }
  ];

  // Fix: first card has numName instead of numeral
  TAROT[1].numeral = "I";

  // ── State ──
  var NUM_VISIBLE = 10;
  var SPIN_DURATION = 4000;
  var angle = 0;
  var speed = 0;
  var spinning = false;
  var revealed = false;
  var animId = null;
  var spinStartTime = 0;
  var drawnCards = [];
  var showMeanings = false;
  var shuffledDeck = [];
  var readingActive = false;

  var section = document.getElementById('tarotSection');
  var carouselEl = null;
  var RADIUS = 260;

  function getRadius() {
    var w = window.innerWidth;
    if (w < 400) return 180;
    if (w < 600) return 220;
    return 280;
  }

  function shuffleArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // ── Build the full Tarot 22 page ──
  function buildPage() {
    RADIUS = getRadius();
    var html = '<div class="t22-page">' +
      // Stars background
      '<div class="t22-bg-stars" id="t22BgStars"></div>' +
      // Frame border (matching angel mode)
      '<div class="t22-frame"></div>' +
      '<div class="t22-frame-corner t22-fc-tl"><svg viewBox="0 0 40 40"><path d="M2,38 L2,10 Q2,2 10,2 L38,2" fill="none" stroke="rgba(196,162,101,0.45)" stroke-width="1.5"/><circle cx="6" cy="6" r="2" fill="rgba(196,162,101,0.35)"/></svg></div>' +
      '<div class="t22-frame-corner t22-fc-tr"><svg viewBox="0 0 40 40"><path d="M2,38 L2,10 Q2,2 10,2 L38,2" fill="none" stroke="rgba(196,162,101,0.45)" stroke-width="1.5"/><circle cx="6" cy="6" r="2" fill="rgba(196,162,101,0.35)"/></svg></div>' +
      '<div class="t22-frame-corner t22-fc-bl"><svg viewBox="0 0 40 40"><path d="M2,38 L2,10 Q2,2 10,2 L38,2" fill="none" stroke="rgba(196,162,101,0.45)" stroke-width="1.5"/><circle cx="6" cy="6" r="2" fill="rgba(196,162,101,0.35)"/></svg></div>' +
      '<div class="t22-frame-corner t22-fc-br"><svg viewBox="0 0 40 40"><path d="M2,38 L2,10 Q2,2 10,2 L38,2" fill="none" stroke="rgba(196,162,101,0.45)" stroke-width="1.5"/><circle cx="6" cy="6" r="2" fill="rgba(196,162,101,0.35)"/></svg></div>' +
      // Mystic ring
      '<div class="t22-mystic-ring" id="t22MysticRing"></div>' +
      // Title
      '<div class="t22-title-area">' +
        '<h1 class="t22-title">СТАРШІ АРКАНИ</h1>' +
        '<p class="t22-subtitle">22 карти шляху душі</p>' +
        '<div class="t22-title-decor"><span></span><svg viewBox="0 0 24 24" fill="none" stroke="rgba(196,162,101,0.6)" stroke-width="1.5"><path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8Z"/></svg><span></span></div>' +
      '</div>' +
      // Drawn cards panel (scrollable overlay at top)
      '<div class="t22-drawn-panel" id="t22DrawnPanel"></div>' +
      // 3D Carousel Scene
      '<div class="t22-scene">' +
        '<div class="t22-carousel" id="t22Carousel"></div>' +
      '</div>' +
      // Revealed card
      '<div class="t22-revealed" id="t22Revealed">' +
        '<div class="t22-rev-border"></div>' +
        '<div class="t22-rev-num" id="t22RevNum"></div>' +
        '<div class="t22-rev-art" id="t22RevArt"></div>' +
        '<div class="t22-rev-divider"></div>' +
        '<div class="t22-rev-name" id="t22RevName"></div>' +
        '<div class="t22-rev-ukname" id="t22RevUkName"></div>' +
        '<div class="t22-rev-meaning" id="t22RevMeaning"></div>' +
      '</div>' +
      // Glow ring
      '<div class="t22-glow" id="t22Glow"></div>' +
      // Particles
      '<div class="t22-particles" id="t22Particles"></div>' +
      // Instruction
      '<div class="t22-instruction" id="t22Instruction">' +
        (drawnCards.length > 0 && !readingActive ? '' : 'Натисніть, щоб витягти карту') +
      '</div>' +
      // Tap again
      '<div class="t22-tap-again" id="t22TapAgain"></div>' +
      // Counter badge
      '<div class="t22-counter" id="t22Counter">' + drawnCards.length + ' / 8</div>' +
      // Bottom meanings area (scrollable)
      '<div class="t22-bottom-area" id="t22BottomArea"></div>' +
    '</div>';

    section.innerHTML = html;

    // Create background stars
    var starsEl = document.getElementById('t22BgStars');
    var count = window.innerWidth < 500 ? 50 : 80;
    for (var i = 0; i < count; i++) {
      var s = document.createElement('div');
      s.className = 't22-star';
      s.style.left = (Math.random() * 100) + '%';
      s.style.top = (Math.random() * 100) + '%';
      var size = (Math.random() * 2 + 0.5);
      s.style.width = s.style.height = size + 'px';
      s.style.animationDelay = (Math.random() * 3) + 's';
      s.style.animationDuration = (2 + Math.random() * 3) + 's';
      starsEl.appendChild(s);
    }

    // Create mystic ring symbols
    var ring = document.getElementById('t22MysticRing');
    var symbols = ['✦','☆','✧','⚝','✦','☆','✧','⚝','✦','☆','✧','⚝'];
    var ringSize = ring.offsetWidth || 380;
    var r = (ringSize / 2) - 15;
    symbols.forEach(function(sym, i) {
      var el = document.createElement('div');
      el.className = 't22-ring-char';
      el.textContent = sym;
      var a = (i / symbols.length) * 360;
      var rad = a * Math.PI / 180;
      el.style.left = (ringSize / 2 + Math.cos(rad) * r - 8) + 'px';
      el.style.top = (ringSize / 2 + Math.sin(rad) * r - 8) + 'px';
      ring.appendChild(el);
    });

    carouselEl = document.getElementById('t22Carousel');
    buildCarousel();
    layoutCards();
    startLoop();

    // Touch / click handling
    var page = section.querySelector('.t22-page');
    var touchStartX = 0, touchStartY = 0, touchStartT = 0, isTouchDrag = false, lastTouchTime = 0;

    page.addEventListener('click', function(e) {
      if (Date.now() - lastTouchTime < 500) return;
      if (e.target.closest('.t22-bottom-area') || e.target.closest('.t22-drawn-panel')) return;
      handleAction();
    }, false);

    page.addEventListener('touchstart', function(e) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchStartT = Date.now();
      isTouchDrag = false;
    }, { passive: true });

    page.addEventListener('touchmove', function(e) {
      var dx = e.touches[0].clientX - touchStartX;
      var dy = e.touches[0].clientY - touchStartY;
      if (Math.abs(dx) > 8 || Math.abs(dy) > 8) isTouchDrag = true;
      if (!spinning && !revealed && isTouchDrag) {
        angle += dx * 0.3;
        touchStartX = e.touches[0].clientX;
        layoutCards();
      }
    }, { passive: true });

    page.addEventListener('touchend', function(e) {
      lastTouchTime = Date.now();
      var dt = lastTouchTime - touchStartT;
      if (!isTouchDrag && dt < 400) {
        if (e.target.closest('.t22-bottom-area') || e.target.closest('.t22-drawn-panel')) return;
        e.preventDefault();
        handleAction();
      }
      isTouchDrag = false;
    }, { passive: false });
  }

  // ── Build carousel cards (card backs with tarot numeral) ──
  function buildCarousel() {
    if (!carouselEl) return;
    carouselEl.innerHTML = '';

    // Use shuffled deck or just the tarot cards
    if (shuffledDeck.length === 0) shuffledDeck = shuffleArray(TAROT);

    for (var i = 0; i < NUM_VISIBLE; i++) {
      var card = shuffledDeck[i % shuffledDeck.length];
      var el = document.createElement('div');
      el.className = 't22-card';
      el.dataset.index = i;
      el.dataset.id = card.id;
      el.dataset.name = card.name;
      el.dataset.ukName = card.ukName;
      el.dataset.meaning = card.meaning;
      el.dataset.numeral = card.numeral;
      el.dataset.symbol = card.symbol;
      el.dataset.reversed = card.reversed;

      // Card back with tarot design
      el.innerHTML =
        '<div class="t22-card-inner">' +
          '<div class="t22-ci-border"></div>' +
          '<div class="t22-ci-center">' +
            '<svg viewBox="0 0 50 50" class="t22-ci-svg">' +
              '<polygon points="25,3 28,18 43,18 31,27 35,42 25,33 15,42 19,27 7,18 22,18" fill="none" stroke="var(--gold)" stroke-width="0.8" opacity="0.6"/>' +
              '<circle cx="25" cy="25" r="8" fill="none" stroke="var(--gold)" stroke-width="0.6" opacity="0.4"/>' +
              '<circle cx="25" cy="25" r="3" fill="var(--gold)" opacity="0.2"/>' +
            '</svg>' +
          '</div>' +
          '<div class="t22-ci-num">' + card.numeral + '</div>' +
          '<div class="t22-ci-corners">' +
            '<i></i><i></i><i></i><i></i>' +
          '</div>' +
        '</div>';

      carouselEl.appendChild(el);
    }
  }

  // ── Position cards in 3D circle ──
  function layoutCards() {
    if (!carouselEl) return;
    var cards = carouselEl.children;
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

  // ── Animation loop ──
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
    if (!carouselEl) return null;
    var cards = carouselEl.children;
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

  // ── Reveal the front card ──
  function revealCard() {
    var front = getFrontCard();
    if (!front) return;
    revealed = true;

    var cardId = parseInt(front.dataset.id);
    var card = TAROT.find(function(c) { return c.id === cardId; });
    if (!card) return;

    // Add to drawn cards (avoid duplicates)
    if (!drawnCards.some(function(d) { return d.id === card.id; })) {
      drawnCards.push(card);
    }

    // Update revealed card display
    document.getElementById('t22RevNum').textContent = card.numeral;
    // Use SVG art if available, fallback to symbol
    var artEl = document.getElementById('t22RevArt');
    if (typeof TAROT_SVGS !== 'undefined' && TAROT_SVGS[card.id]) {
      artEl.innerHTML = TAROT_SVGS[card.id];
    } else {
      artEl.innerHTML = '<div style="font-size:60px;filter:drop-shadow(0 0 15px rgba(196,162,101,.3))">' + card.symbol + '</div>';
    }
    document.getElementById('t22RevName').textContent = card.name;
    document.getElementById('t22RevUkName').textContent = card.ukName;
    document.getElementById('t22RevMeaning').textContent = card.meaning;

    var revEl = document.getElementById('t22Revealed');
    revEl.style.borderColor = card.colors[0];
    revEl.style.boxShadow = '0 0 60px ' + card.colors[0] + '55, 0 0 120px rgba(100,50,180,0.25)';
    revEl.classList.add('show');

    document.getElementById('t22Glow').classList.add('show');

    // Update counter
    var counter = document.getElementById('t22Counter');
    counter.textContent = drawnCards.length + ' / 8';
    counter.classList.add('show');

    // Update drawn cards panel
    updateDrawnPanel();

    // Particles
    spawnParticles(card.colors[0]);

    // Show tap again
    var tapAgain = document.getElementById('t22TapAgain');
    if (drawnCards.length >= 8) {
      tapAgain.textContent = 'Натисніть, щоб розкрити значення';
    } else {
      tapAgain.textContent = 'Натисніть, щоб витягти наступну (' + drawnCards.length + '/8)';
    }
    tapAgain.classList.add('show');

    document.getElementById('t22Instruction').classList.add('hidden');

    startLoop();
  }

  function updateDrawnPanel() {
    var panel = document.getElementById('t22DrawnPanel');
    if (drawnCards.length === 0) { panel.innerHTML = ''; panel.classList.remove('show'); return; }
    panel.classList.add('show');
    var html = '';
    drawnCards.forEach(function(card, i) {
      html += '<div class="t22-mini-card" style="animation-delay:' + (i * 0.1) + 's;border-color:' + card.colors[0] + '88;background:linear-gradient(180deg,' + card.colors[0] + '15,' + card.colors[2] + '10)">' +
        '<div class="t22-mini-num">' + (i + 1) + '</div>' +
        '<div class="t22-mini-symbol">' + card.symbol + '</div>' +
        '<div class="t22-mini-name">' + card.ukName + '</div>' +
      '</div>';
    });
    panel.innerHTML = html;
  }

  // ── Particles ──
  function spawnParticles(color) {
    var el = document.getElementById('t22Particles');
    el.innerHTML = '';
    var count = window.innerWidth < 500 ? 18 : 30;
    for (var i = 0; i < count; i++) {
      var p = document.createElement('div');
      p.className = 't22-particle';
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
      p.style.background = Math.random() > 0.5 ? color : '#e8d5a3';
      el.appendChild(p);
      p.animate([
        { transform: 'translate(0,0) scale(1)', opacity: 1 },
        { transform: 'translate(' + tx + 'px,' + ty + 'px) scale(0)', opacity: 0 }
      ], { duration: 800 + Math.random() * 600, easing: 'cubic-bezier(0.25,0.46,0.45,0.94)', fill: 'forwards', delay: Math.random() * 200 });
    }
  }

  // ── Reset for next draw ──
  function resetForNextDraw() {
    revealed = false;
    document.getElementById('t22Revealed').classList.remove('show');
    document.getElementById('t22Glow').classList.remove('show');
    document.getElementById('t22TapAgain').classList.remove('show');
    document.getElementById('t22Instruction').classList.remove('hidden');
    document.getElementById('t22Instruction').textContent = 'Натисніть, щоб витягти карту (' + drawnCards.length + '/8)';
    document.getElementById('t22Particles').innerHTML = '';

    // Reshuffle, excluding already drawn cards
    var remaining = TAROT.filter(function(c) {
      return !drawnCards.some(function(d) { return d.id === c.id; });
    });
    if (remaining.length === 0) remaining = TAROT.slice();
    shuffledDeck = shuffleArray(remaining);
    buildCarousel();
    angle = Math.random() * 360;
    layoutCards();
    startLoop();
  }

  // ── Show meanings ──
  function showMeaningsPanel() {
    var bottom = document.getElementById('t22BottomArea');
    showMeanings = true;

    var html = '<div class="t22-meanings-wrap">' +
      '<h3 class="t22-meanings-title">✦ Значення вашого розкладу ✦</h3>';
    drawnCards.forEach(function(card, i) {
      html += '<div class="t22-meaning-card" style="--mc:' + card.colors[0] + '">' +
        '<div class="t22-mc-header">' +
          '<span class="t22-mc-badge">' + (i + 1) + '</span>' +
          '<span class="t22-mc-symbol">' + card.symbol + '</span>' +
          '<div class="t22-mc-names">' +
            '<div class="t22-mc-name">' + card.numeral + ' — ' + card.name + '</div>' +
            '<div class="t22-mc-ukname">' + card.ukName + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="t22-mc-body">' +
          '<p class="t22-mc-meaning">' + card.meaning + '</p>' +
          '<p class="t22-mc-reversed">Перевернута: ' + card.reversed + '</p>' +
        '</div>' +
      '</div>';
    });
    html += '<button class="t22-btn-new-reading" onclick="window.tarot22.newReading()">✦ Новий розклад</button>';
    html += '</div>';

    bottom.innerHTML = html;
    bottom.classList.add('show');
    bottom.scrollIntoView({ behavior: 'smooth' });
  }

  // ── New reading ──
  function newReading() {
    drawnCards = [];
    showMeanings = false;
    readingActive = false;
    document.getElementById('t22BottomArea').innerHTML = '';
    document.getElementById('t22BottomArea').classList.remove('show');
    document.getElementById('t22Counter').textContent = '0 / 8';
    document.getElementById('t22Counter').classList.remove('show');
    updateDrawnPanel();
    resetForNextDraw();
    document.getElementById('t22Instruction').textContent = 'Натисніть, щоб витягти карту';
  }

  // ── Core action handler ──
  function handleAction() {
    if (showMeanings) return; // meanings displayed, use buttons

    if (revealed) {
      if (drawnCards.length >= 8) {
        // All 8 drawn, show meanings
        revealed = false;
        document.getElementById('t22Revealed').classList.remove('show');
        document.getElementById('t22Glow').classList.remove('show');
        document.getElementById('t22TapAgain').classList.remove('show');
        document.getElementById('t22Particles').innerHTML = '';
        showMeaningsPanel();
        return;
      }
      resetForNextDraw();
      return;
    }

    if (spinning) {
      spinning = false;
      speed = 0;
      revealCard();
      return;
    }

    // Start spin
    readingActive = true;
    spinning = true;
    spinStartTime = Date.now();
    speed = 20;
    document.getElementById('t22Instruction').classList.add('hidden');
    startLoop();
  }

  // ── Public API ──
  window.tarot22 = {
    render: function() {
      buildPage();
    },
    cleanup: function() {
      if (animId) cancelAnimationFrame(animId);
      animId = null;
      spinning = false;
      revealed = false;
      drawnCards = [];
      showMeanings = false;
      readingActive = false;
      shuffledDeck = [];
      angle = 0;
      speed = 0;
    },
    newReading: newReading
  };

  // Resize
  window.addEventListener('resize', function() {
    if (section.classList.contains('active')) {
      RADIUS = getRadius();
      layoutCards();
    }
  });
})();
