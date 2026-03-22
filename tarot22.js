// ── Tarot 22 Major Arcana — 3D Carousel Style (i18n + Zodiac) ──
(function() {
  'use strict';

  var TAROT = [
    { id:0, name:"The Fool", numeral:"0", colors:["#F5D16C","#8B5E3C","#E8A838"], symbol:"\uD83C\uDF1F" },
    { id:1, name:"The Magician", numeral:"I", colors:["#6A3D9A","#DAA520","#1A0533"], symbol:"\u2728" },
    { id:2, name:"The High Priestess", numeral:"II", colors:["#1B3A6B","#C0C0C0","#4169E1"], symbol:"\uD83C\uDF19" },
    { id:3, name:"The Empress", numeral:"III", colors:["#2E8B57","#FFD700","#8FBC8F"], symbol:"\uD83C\uDF3F" },
    { id:4, name:"The Emperor", numeral:"IV", colors:["#8B0000","#DAA520","#FF4500"], symbol:"\uD83D\uDC51" },
    { id:5, name:"The Hierophant", numeral:"V", colors:["#4B0082","#FFD700","#FF69B4"], symbol:"\uD83D\uDD11" },
    { id:6, name:"The Lovers", numeral:"VI", colors:["#FF69B4","#FFD700","#FF1493"], symbol:"\uD83D\uDC95" },
    { id:7, name:"The Chariot", numeral:"VII", colors:["#1C1C2E","#C0C0C0","#4682B4"], symbol:"\u26A1" },
    { id:8, name:"Strength", numeral:"VIII", colors:["#DAA520","#FF6347","#FFD700"], symbol:"\uD83E\uDD81" },
    { id:9, name:"The Hermit", numeral:"IX", colors:["#2F4F4F","#DAA520","#696969"], symbol:"\uD83D\uDD6F\uFE0F" },
    { id:10, name:"Wheel of Fortune", numeral:"X", colors:["#4169E1","#FFD700","#9370DB"], symbol:"\uD83C\uDFA1" },
    { id:11, name:"Justice", numeral:"XI", colors:["#8B0000","#DAA520","#DC143C"], symbol:"\u2696\uFE0F" },
    { id:12, name:"The Hanged Man", numeral:"XII", colors:["#4682B4","#98FB98","#5F9EA0"], symbol:"\uD83D\uDD2E" },
    { id:13, name:"Death", numeral:"XIII", colors:["#1C1C2E","#C0C0C0","#2F2F4F"], symbol:"\uD83E\uDD8B" },
    { id:14, name:"Temperance", numeral:"XIV", colors:["#FFD700","#87CEEB","#DDA0DD"], symbol:"\uD83C\uDFFA" },
    { id:15, name:"The Devil", numeral:"XV", colors:["#1C1C1C","#8B0000","#FF4500"], symbol:"\uD83D\uDD17" },
    { id:16, name:"The Tower", numeral:"XVI", colors:["#FF4500","#FFD700","#8B0000"], symbol:"\uD83D\uDDFC" },
    { id:17, name:"The Star", numeral:"XVII", colors:["#87CEEB","#FFD700","#E6E6FA"], symbol:"\u2B50" },
    { id:18, name:"The Moon", numeral:"XVIII", colors:["#191970","#C0C0C0","#483D8B"], symbol:"\uD83C\uDF11" },
    { id:19, name:"The Sun", numeral:"XIX", colors:["#FFD700","#FF8C00","#FFA500"], symbol:"\u2600\uFE0F" },
    { id:20, name:"Judgement", numeral:"XX", colors:["#4B0082","#FFD700","#9370DB"], symbol:"\uD83D\uDD14" },
    { id:21, name:"The World", numeral:"XXI", colors:["#2E8B57","#FFD700","#4169E1"], symbol:"\uD83C\uDF0D" }
  ];

  // ── i18n helpers ──
  function t(key) { return window.i18n ? window.i18n.t(key) : key; }

  // ── Pick the most readable (brightest) color from card palette ──
  function readableColor(colors) {
    var best = '#C4A265'; // gold fallback
    var bestLum = -1;
    for (var i = 0; i < colors.length; i++) {
      var hex = colors[i].replace('#', '');
      var r = parseInt(hex.slice(0,2), 16) / 255;
      var g = parseInt(hex.slice(2,4), 16) / 255;
      var b = parseInt(hex.slice(4,6), 16) / 255;
      var lum = 0.299 * r + 0.587 * g + 0.114 * b;
      if (lum > bestLum) { bestLum = lum; best = colors[i]; }
    }
    // If brightest is still too dark, return gold
    return bestLum < 0.22 ? '#C4A265' : best;
  }

  function getTarotTr(id) {
    if (window.i18n) return window.i18n.getTarotCard(id);
    return { localName: TAROT[id].name, meaning: '', reversed: '', desc: '' };
  }

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
  var selectedZodiac = localStorage.getItem('tarot_zodiac') || null;
  var zodiacPanelOpen = false;
  var currentFcPeriod = 'today';

  // ── Step-by-step state machine ──
  var stepState = {
    step: 0,        // 0=nothing, 1=zodiac chosen, 2=period chosen, 3=after spin
    isSpinning: false
  };
  // Auto-restore if zodiac was saved
  if (selectedZodiac !== null) stepState.step = 1;
  var ZODIAC_NAMES = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
  var ZODIAC_SYMBOLS = ['\u2648','\u2649','\u264A','\u264B','\u264C','\u264D','\u264E','\u264F','\u2650','\u2651','\u2652','\u2653'];

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
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  // ── Build the full Tarot 22 page ──
  function buildPage() {
    RADIUS = getRadius();
    var html = '<div class="t22-page">' +
      '<div class="t22-bg-stars" id="t22BgStars"></div>' +
      '<div class="t22-frame"></div>' +
      '<div class="t22-frame-corner t22-fc-tl"><svg viewBox="0 0 40 40"><path d="M2,38 L2,10 Q2,2 10,2 L38,2" fill="none" stroke="rgba(196,162,101,0.45)" stroke-width="1.5"/><circle cx="6" cy="6" r="2" fill="rgba(196,162,101,0.35)"/></svg></div>' +
      '<div class="t22-frame-corner t22-fc-tr"><svg viewBox="0 0 40 40"><path d="M2,38 L2,10 Q2,2 10,2 L38,2" fill="none" stroke="rgba(196,162,101,0.45)" stroke-width="1.5"/><circle cx="6" cy="6" r="2" fill="rgba(196,162,101,0.35)"/></svg></div>' +
      '<div class="t22-frame-corner t22-fc-bl"><svg viewBox="0 0 40 40"><path d="M2,38 L2,10 Q2,2 10,2 L38,2" fill="none" stroke="rgba(196,162,101,0.45)" stroke-width="1.5"/><circle cx="6" cy="6" r="2" fill="rgba(196,162,101,0.35)"/></svg></div>' +
      '<div class="t22-frame-corner t22-fc-br"><svg viewBox="0 0 40 40"><path d="M2,38 L2,10 Q2,2 10,2 L38,2" fill="none" stroke="rgba(196,162,101,0.45)" stroke-width="1.5"/><circle cx="6" cy="6" r="2" fill="rgba(196,162,101,0.35)"/></svg></div>' +
      '<div class="t22-mystic-ring" id="t22MysticRing"></div>' +
      '<div class="t22-title-area">' +
        '<h1 class="t22-title" id="t22Title">' + t('tarotTitle') + '</h1>' +
        '<p class="t22-subtitle" id="t22Subtitle">' + t('tarotSub') + '</p>' +
        '<div class="t22-title-decor"><span></span><svg viewBox="0 0 24 24" fill="none" stroke="rgba(196,162,101,0.6)" stroke-width="1.5"><path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8Z"/></svg><span></span></div>' +
      '</div>' +
      // ── Step 1: Zodiac selector (BEFORE carousel) ──
      '<div class="t22-step-zodiac" id="t22StepZodiac">' +
        '<div class="fc-section-title" id="t22FcTitle">' + t('fcTitle') + '</div>' +
        '<p class="t22-step-hint" id="t22StepHint">' + t('fcSelectZodiac') + '</p>' +
        '<div class="fc-zodiac-row" id="fcZodiacRow">' + buildZodiacButtons() + '</div>' +
      '</div>' +
      // ── Step 2: Period selector (locked until zodiac chosen) ──
      '<div class="t22-step-period' + (stepState.step < 1 ? ' t22-locked' : '') + '" id="t22StepPeriod">' +
        '<div class="fc-period-row" id="fcPeriodRow">' + buildPeriodButtons() + '</div>' +
      '</div>' +
      // ── Step 3: Spin button (locked until period chosen) ──
      '<div class="t22-step-spin" id="t22StepSpin">' +
        '<button class="t22-spin-btn' + (stepState.step < 2 ? ' t22-locked' : ' t22-pulse-glow') + '" id="t22SpinBtn" onclick="window.tarot22.spinAction()"' + (stepState.step < 2 ? ' disabled' : '') + '>' +
          '\uD83D\uDD2E ' + (t('fcGetForecast') || 'GET FORECAST') +
        '</button>' +
      '</div>' +
      '<div class="t22-drawn-panel" id="t22DrawnPanel"></div>' +
      '<div class="t22-scene">' +
        '<div class="t22-carousel" id="t22Carousel"></div>' +
      '</div>' +
      '<div class="t22-revealed" id="t22Revealed">' +
        '<div class="t22-rev-border"></div>' +
        '<div class="t22-rev-num" id="t22RevNum"></div>' +
        '<div class="t22-rev-art" id="t22RevArt"></div>' +
        '<div class="t22-rev-divider"></div>' +
        '<div class="t22-rev-name" id="t22RevName"></div>' +
        '<div class="t22-rev-ukname" id="t22RevUkName"></div>' +
        '<div class="t22-rev-meaning" id="t22RevMeaning"></div>' +
      '</div>' +
      '<div class="t22-glow" id="t22Glow"></div>' +
      '<div class="t22-particles" id="t22Particles"></div>' +
      '<div class="t22-instruction" id="t22Instruction">' +
        (drawnCards.length > 0 && !readingActive ? '' : t('tapDrawCard')) +
      '</div>' +
      '<div class="t22-tap-again" id="t22TapAgain"></div>' +
      '<div class="t22-counter" id="t22Counter">' + drawnCards.length + ' / 1</div>' +
      // Bottom meanings area
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
    var symbols = ['\u2726','\u2606','\u2727','\u269D','\u2726','\u2606','\u2727','\u269D','\u2726','\u2606','\u2727','\u269D'];
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
    updateUIState();

    // Touch / click handling
    var page = section.querySelector('.t22-page');
    var touchStartX = 0, touchStartY = 0, touchStartT = 0, isTouchDrag = false, lastTouchTime = 0;

    page.addEventListener('click', function(e) {
      if (Date.now() - lastTouchTime < 500) return;
      if (e.target.closest('.t22-bottom-area') || e.target.closest('.t22-drawn-panel') || e.target.closest('.t22-step-zodiac') || e.target.closest('.t22-step-period') || e.target.closest('.t22-step-spin')) return;
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
      if (!spinning && !revealed && isTouchDrag && stepState.step >= 2) {
        angle += dx * 0.3;
        touchStartX = e.touches[0].clientX;
        layoutCards();
      }
    }, { passive: true });

    page.addEventListener('touchend', function(e) {
      lastTouchTime = Date.now();
      var dt = lastTouchTime - touchStartT;
      if (!isTouchDrag && dt < 400) {
        if (e.target.closest('.t22-bottom-area') || e.target.closest('.t22-drawn-panel') || e.target.closest('.t22-step-zodiac') || e.target.closest('.t22-step-period') || e.target.closest('.t22-step-spin')) return;
        e.preventDefault();
        handleAction();
      }
      isTouchDrag = false;
    }, { passive: false });
  }

  // ── Build zodiac buttons HTML ──
  function buildZodiacButtons() {
    var signs = window.i18n ? window.i18n.getZodiacSigns() : [];
    var zodiacIdx = selectedZodiac !== null ? parseInt(selectedZodiac) : null;
    var html = '';
    for (var i = 0; i < 12; i++) {
      var signName = signs[i] ? signs[i].name : ZODIAC_NAMES[i];
      var active = (zodiacIdx === i) ? ' active' : '';
      html += '<button class="fc-zodiac-btn' + active + '" data-zidx="' + i + '" onclick="window.tarot22.selectFcZodiac(' + i + ')" title="' + signName + '">' +
        ZODIAC_SYMBOLS[i] +
        '<span class="fc-zodiac-label">' + signName + '</span>' +
      '</button>';
    }
    return html;
  }

  // ── Build period buttons HTML ──
  function buildPeriodButtons() {
    var periods = getForecastPeriods();
    var html = '';
    periods.forEach(function(p) {
      var active = (currentFcPeriod === p.key) ? ' active' : '';
      html += '<button class="fc-period-btn' + active + '" data-period="' + p.key + '" onclick="window.tarot22.selectFcPeriod(\'' + p.key + '\')">' +
        '<span>' + p.label + '</span>' +
        '<span class="fc-period-sub">' + p.sub + '</span>' +
      '</button>';
    });
    return html;
  }

  // ── Update UI based on step state ──
  function updateUIState() {
    var periodSec = document.getElementById('t22StepPeriod');
    var spinBtn = document.getElementById('t22SpinBtn');
    var hintEl = document.getElementById('t22StepHint');

    // Step 1: Period unlock
    if (periodSec) {
      if (stepState.step >= 1) {
        periodSec.classList.remove('t22-locked');
      } else {
        periodSec.classList.add('t22-locked');
      }
    }

    // Step 2: Spin button unlock
    if (spinBtn) {
      if (stepState.step >= 2) {
        spinBtn.classList.remove('t22-locked');
        spinBtn.classList.add('t22-pulse-glow');
        spinBtn.disabled = false;
        if (stepState.step >= 3) {
          spinBtn.textContent = '\uD83D\uDD04 ' + (t('fcSpinAgain') || 'SPIN AGAIN');
        }
      } else {
        spinBtn.classList.add('t22-locked');
        spinBtn.classList.remove('t22-pulse-glow');
        spinBtn.disabled = true;
      }
    }

    // Update hint text
    if (hintEl) {
      if (stepState.step === 0) {
        hintEl.textContent = t('fcSelectZodiac') || 'Select your zodiac sign';
        hintEl.style.display = '';
      } else if (stepState.step === 1) {
        hintEl.textContent = t('fcSelectPeriod') || 'Choose forecast period';
        hintEl.style.display = '';
      } else {
        hintEl.style.display = 'none';
      }
    }

    // Hide step sections when meanings panel is shown
    var zodiacSec = document.getElementById('t22StepZodiac');
    var spinSec = document.getElementById('t22StepSpin');
    if (showMeanings) {
      if (zodiacSec) zodiacSec.style.display = 'none';
      if (periodSec) periodSec.style.display = 'none';
      if (spinSec) spinSec.style.display = 'none';
    } else {
      if (zodiacSec) zodiacSec.style.display = '';
      if (periodSec) periodSec.style.display = '';
      if (spinSec) spinSec.style.display = '';
    }
  }

  // ── Build carousel cards ──
  function buildCarousel() {
    if (!carouselEl) return;
    carouselEl.innerHTML = '';
    if (shuffledDeck.length === 0) shuffledDeck = shuffleArray(TAROT);

    for (var i = 0; i < NUM_VISIBLE; i++) {
      var card = shuffledDeck[i % shuffledDeck.length];
      var el = document.createElement('div');
      el.className = 't22-card';
      el.dataset.index = i;
      el.dataset.id = card.id;

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
          '<div class="t22-ci-corners"><i></i><i></i><i></i><i></i></div>' +
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
    var card = TAROT[cardId];
    if (!card) return;

    // Add to drawn cards (avoid duplicates)
    if (!drawnCards.some(function(d) { return d.id === card.id; })) {
      drawnCards.push(card);
    }

    var tr = getTarotTr(card.id);

    // Update revealed card display
    document.getElementById('t22RevNum').textContent = card.numeral;
    var artEl = document.getElementById('t22RevArt');
    if (typeof TAROT_SVGS !== 'undefined' && TAROT_SVGS[card.id]) {
      artEl.innerHTML = TAROT_SVGS[card.id];
    } else {
      artEl.innerHTML = '<div style="font-size:60px;filter:drop-shadow(0 0 15px rgba(196,162,101,.3))">' + card.symbol + '</div>';
    }
    document.getElementById('t22RevName').textContent = card.name;
    document.getElementById('t22RevUkName').textContent = tr.localName;
    document.getElementById('t22RevMeaning').textContent = tr.meaning;

    var revEl = document.getElementById('t22Revealed');
    revEl.style.borderColor = card.colors[0];
    revEl.style.boxShadow = '0 0 60px ' + card.colors[0] + '55, 0 0 120px rgba(100,50,180,0.25)';
    revEl.classList.add('show');

    document.getElementById('t22Glow').classList.add('show');

    // Update counter
    var counter = document.getElementById('t22Counter');
    counter.textContent = drawnCards.length + ' / 1';
    counter.classList.add('show');

    updateDrawnPanel();
    spawnParticles(card.colors[0]);

    // Step 3: spin complete
    stepState.step = 3;
    stepState.isSpinning = false;
    updateUIState();

    // Show tap again
    var tapAgainEl = document.getElementById('t22TapAgain');
    if (drawnCards.length >= 1) {
      tapAgainEl.textContent = t('tapReveal');
    } else {
      tapAgainEl.textContent = t('tapDrawN') + ' (' + drawnCards.length + '/1)';
    }
    tapAgainEl.classList.add('show');

    document.getElementById('t22Instruction').classList.add('hidden');
    startLoop();
  }

  function updateDrawnPanel() {
    var panel = document.getElementById('t22DrawnPanel');
    if (drawnCards.length === 0) { panel.innerHTML = ''; panel.classList.remove('show'); return; }
    panel.classList.add('show');
    var html = '';
    drawnCards.forEach(function(card, i) {
      var tr = getTarotTr(card.id);
      html += '<div class="t22-mini-card" style="animation-delay:' + (i * 0.1) + 's;border-color:' + card.colors[0] + '88;background:linear-gradient(180deg,' + card.colors[0] + '15,' + card.colors[2] + '10)">' +
        '<div class="t22-mini-num">' + (i + 1) + '</div>' +
        '<div class="t22-mini-symbol">' + card.symbol + '</div>' +
        '<div class="t22-mini-name">' + tr.localName + '</div>' +
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
      var sz = 2 + Math.random() * 3;
      p.style.width = p.style.height = sz + 'px';
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
    zodiacPanelOpen = false;
    document.getElementById('t22Revealed').classList.remove('show');
    document.getElementById('t22Glow').classList.remove('show');
    document.getElementById('t22TapAgain').classList.remove('show');
    document.getElementById('t22Instruction').classList.remove('hidden');
    document.getElementById('t22Instruction').textContent = t('tapDraw') + ' (' + drawnCards.length + '/1)';
    document.getElementById('t22Particles').innerHTML = '';

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
    updateUIState();

    var html = '<div class="t22-meanings-wrap">' +
      '<h3 class="t22-meanings-title">' + t('meanTitle') + '</h3>';
    drawnCards.forEach(function(card, i) {
      var tr = getTarotTr(card.id);
      html += '<div class="t22-meaning-card" style="--mc:' + card.colors[0] + ';--mc-text:' + readableColor(card.colors) + '">' +
        '<div class="t22-mc-header">' +
          '<span class="t22-mc-badge">' + (i + 1) + '</span>' +
          '<span class="t22-mc-symbol">' + card.symbol + '</span>' +
          '<div class="t22-mc-names">' +
            '<div class="t22-mc-name">' + card.numeral + ' \u2014 ' + card.name + '</div>' +
            '<div class="t22-mc-ukname">' + tr.localName + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="t22-mc-body">' +
          '<p class="t22-mc-meaning">' + tr.meaning + '</p>' +
          '<div class="t22-mc-divider"></div>' +
          '<div class="t22-mc-reversed-label">' + t('reversed') + '</div>' +
          '<p class="t22-mc-reversed">' + tr.reversed + '</p>' +
        '</div>' +
      '</div>';
    });

    // ── Inline forecast block (zodiac/period already at top of page) ──
    if (window.forecast) {
      html += '<div class="forecast-section" id="fcSection">' +
        '<div class="fc-section-divider"></div>' +
        '<div class="fc-section-title">' + t('fcTitle') + '</div>' +
        '<div class="fc-section-divider"></div>' +
        '<div class="fc-block" id="fcBlock">' +
          '<div class="fc-header">' +
            '<span class="fc-badge" id="fcMoonBadge"></span>' +
            '<span class="fc-badge" id="fcPlanetBadge"></span>' +
          '</div>' +
          '<div class="fc-text" id="fcText"></div>' +
          '<div class="fc-footer">' +
            '<span id="fcSignLabel"></span>' +
            '<span>\u2022</span>' +
            '<span id="fcDateLabel"></span>' +
            '<span class="fc-tone" id="fcToneLabel"></span>' +
          '</div>' +
        '</div>' +
      '</div>';
    }

    html += '<button class="t22-btn-new-reading" onclick="window.tarot22.newReading()">' + t('newReading') + '</button>';
    html += '</div>';

    bottom.innerHTML = html;
    bottom.classList.add('show');
    bottom.scrollIntoView({ behavior: 'smooth' });

    // Render forecast after DOM is ready
    setTimeout(function() {
      renderForecast();
    }, 50);
  }

  // ── Build forecast HTML skeleton ──
  function buildForecastSection() {
    if (!window.forecast) return '';

    var signs = window.i18n ? window.i18n.getZodiacSigns() : [];
    var zodiacIdx = selectedZodiac !== null ? parseInt(selectedZodiac) : null;

    var html = '<div class="forecast-section" id="fcSection">' +
      '<div class="fc-section-divider"></div>' +
      '<div class="fc-section-title">' + t('fcTitle') + '</div>' +
      '<div class="fc-section-divider"></div>';

    // Zodiac selector row
    html += '<div class="fc-zodiac-row" id="fcZodiacRow">';
    for (var i = 0; i < 12; i++) {
      var signName = signs[i] ? signs[i].name : ZODIAC_NAMES[i];
      var active = (zodiacIdx === i) ? ' active' : '';
      html += '<button class="fc-zodiac-btn' + active + '" data-zidx="' + i + '" onclick="window.tarot22.selectFcZodiac(' + i + ')" title="' + signName + '">' +
        ZODIAC_SYMBOLS[i] +
        '<span class="fc-zodiac-label">' + signName + '</span>' +
      '</button>';
    }
    html += '</div>';

    // Period selector
    html += '<div class="fc-period-row" id="fcPeriodRow">';
    var periods = getForecastPeriods();
    periods.forEach(function(p) {
      var active = (currentFcPeriod === p.key) ? ' active' : '';
      html += '<button class="fc-period-btn' + active + '" data-period="' + p.key + '" onclick="window.tarot22.selectFcPeriod(\'' + p.key + '\')">' +
        '<span>' + p.label + '</span>' +
        '<span class="fc-period-sub">' + p.sub + '</span>' +
      '</button>';
    });
    html += '</div>';

    // Forecast output block
    html += '<div class="fc-block" id="fcBlock">' +
      '<div class="fc-header">' +
        '<span class="fc-badge" id="fcMoonBadge"></span>' +
        '<span class="fc-badge" id="fcPlanetBadge"></span>' +
      '</div>' +
      '<div class="fc-text" id="fcText"></div>' +
      '<div class="fc-footer">' +
        '<span id="fcSignLabel"></span>' +
        '<span>\u2022</span>' +
        '<span id="fcDateLabel"></span>' +
        '<span class="fc-tone" id="fcToneLabel"></span>' +
      '</div>' +
    '</div>';

    // No zodiac selected prompt
    if (zodiacIdx === null) {
      html += '<div id="fcPrompt" style="text-align:center;color:rgba(255,215,0,.5);font-family:\'Cormorant Garamond\',serif;font-size:13px;padding:8px 0;letter-spacing:1px">' +
        t('fcSelectZodiac') +
      '</div>';
    }

    html += '</div>';
    return html;
  }

  // ── Period labels ──
  function getForecastPeriods() {
    var now = new Date();
    var months = [t('fcJan'),t('fcFeb'),t('fcMar'),t('fcApr'),t('fcMay'),t('fcJun'),
                  t('fcJul'),t('fcAug'),t('fcSep'),t('fcOct'),t('fcNov'),t('fcDec')];
    // fallback if i18n keys missing
    var mFallback = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    for (var i = 0; i < 12; i++) { if (months[i] === 'fcJan' || !months[i]) months = mFallback; }

    var tmrw = new Date(now); tmrw.setDate(tmrw.getDate() + 1);
    var nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    return [
      { key:'today',    label:t('fcToday')    || 'Today',    sub:now.getDate() + ' ' + months[now.getMonth()] },
      { key:'tomorrow', label:t('fcTomorrow') || 'Tomorrow', sub:tmrw.getDate() + ' ' + months[tmrw.getMonth()] },
      { key:'week',     label:t('fcWeek')     || 'Week',     sub:'W' + (window.forecast ? window.forecast.getISOWeek(now) : '') },
      { key:'month',    label:t('fcMonth')    || 'Month',    sub:months[nextMonth.getMonth()] },
      { key:'year',     label:t('fcYear')     || 'Year',     sub:String(now.getFullYear() + 1) }
    ];
  }

  // ── Render forecast into the block ──
  function renderForecast() {
    var block = document.getElementById('fcBlock');
    var prompt = document.getElementById('fcPrompt');
    if (!block || !window.forecast) return;

    var zodiacIdx = selectedZodiac !== null ? parseInt(selectedZodiac) : null;
    if (zodiacIdx === null || drawnCards.length === 0) {
      block.classList.remove('visible');
      if (prompt) prompt.style.display = '';
      return;
    }
    if (prompt) prompt.style.display = 'none';

    var card = drawnCards[drawnCards.length - 1]; // last drawn card
    var signName = ZODIAC_NAMES[zodiacIdx];
    var result = window.forecast.generate(signName, card.id, currentFcPeriod);

    if (!result) {
      block.classList.remove('visible');
      return;
    }

    // Moon badge
    var moonBadge = document.getElementById('fcMoonBadge');
    var moonNames = getMoonPhaseNames();
    moonBadge.innerHTML = result.moonIcon + ' ' + (moonNames[result.moonPhase.name] || result.moonPhase.energy);

    // Planet badge
    var planetBadge = document.getElementById('fcPlanetBadge');
    var dayNames = getPlanetaryDayNames();
    planetBadge.innerHTML = result.planetSymbol + ' ' + (dayNames[result.planetaryDay] || result.planetaryDay);

    // Forecast text
    document.getElementById('fcText').textContent = result.text;

    // Footer: sign + date + tone
    var signs = window.i18n ? window.i18n.getZodiacSigns() : [];
    var signLabel = signs[zodiacIdx] ? (ZODIAC_SYMBOLS[zodiacIdx] + ' ' + signs[zodiacIdx].name) : (ZODIAC_SYMBOLS[zodiacIdx] + ' ' + signName);
    document.getElementById('fcSignLabel').textContent = signLabel;
    document.getElementById('fcDateLabel').textContent = getFcDateLabel(currentFcPeriod);

    var toneEl = document.getElementById('fcToneLabel');
    var toneLabels = { positive: '\u{1F7E2}', neutral: '\u{1F7E1}', warning: '\u{1F534}' };
    toneEl.textContent = toneLabels[result.tone] || '';
    toneEl.className = 'fc-tone fc-tone-' + result.tone;

    // Show block with animation
    block.classList.remove('visible');
    block.style.animation = 'none';
    block.offsetHeight; // force reflow
    block.style.animation = '';
    setTimeout(function() { block.classList.add('visible'); }, 30);
  }

  // ── Moon phase localized names ──
  function getMoonPhaseNames() {
    return {
      newMoon:        t('fcMoonNew')      || 'New Moon',
      waxingCrescent: t('fcMoonWaxCr')    || 'Waxing Crescent',
      firstQuarter:   t('fcMoonFQ')       || 'First Quarter',
      waxingGibbous:  t('fcMoonWaxGi')    || 'Waxing Gibbous',
      fullMoon:       t('fcMoonFull')      || 'Full Moon',
      waningGibbous:  t('fcMoonWanGi')    || 'Waning Gibbous',
      lastQuarter:    t('fcMoonLQ')        || 'Last Quarter',
      waningCrescent: t('fcMoonWanCr')     || 'Waning Crescent'
    };
  }

  // ── Planetary day localized names ──
  function getPlanetaryDayNames() {
    return {
      Sun:     t('fcPlanetSun')     || 'Sun',
      Moon:    t('fcPlanetMoon')    || 'Moon',
      Mars:    t('fcPlanetMars')    || 'Mars',
      Mercury: t('fcPlanetMercury') || 'Mercury',
      Jupiter: t('fcPlanetJupiter') || 'Jupiter',
      Venus:   t('fcPlanetVenus')   || 'Venus',
      Saturn:  t('fcPlanetSaturn')  || 'Saturn'
    };
  }

  // ── Date label for period ──
  function getFcDateLabel(period) {
    var now = new Date();
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    switch (period) {
      case 'today':
        return (t('fcToday') || 'Today') + ', ' + now.getDate() + ' ' + months[now.getMonth()];
      case 'tomorrow':
        var tmrw = new Date(now); tmrw.setDate(tmrw.getDate() + 1);
        return (t('fcTomorrow') || 'Tomorrow') + ', ' + tmrw.getDate() + ' ' + months[tmrw.getMonth()];
      case 'week':
        return (t('fcWeek') || 'Week') + ' ' + (window.forecast ? window.forecast.getISOWeek(now) : '');
      case 'month':
        var nm = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        return months[nm.getMonth()] + ' ' + nm.getFullYear();
      case 'year':
        return (now.getFullYear() + 1) + '';
      default:
        return '';
    }
  }

  // ── Scroll zodiac row so active button is centered ──
  function scrollZodiacToActive() {
    var row = document.getElementById('fcZodiacRow');
    if (!row) return;
    var active = row.querySelector('.fc-zodiac-btn.active');
    if (!active) return;
    var rowRect = row.getBoundingClientRect();
    var btnRect = active.getBoundingClientRect();
    var scrollTarget = active.offsetLeft - (row.clientWidth / 2) + (active.offsetWidth / 2);
    row.scrollTo({ left: scrollTarget, behavior: 'smooth' });
  }

  // ── Forecast zodiac selection ──
  function selectFcZodiac(index) {
    selectedZodiac = index;
    localStorage.setItem('tarot_zodiac', index);

    // Update zodiac buttons
    var btns = document.querySelectorAll('.fc-zodiac-btn');
    btns.forEach(function(b, i) {
      b.classList.toggle('active', i === index);
    });

    // Advance step
    if (stepState.step < 1) stepState.step = 1;
    updateUIState();

    // Re-render forecast if already shown
    if (stepState.step >= 3 && drawnCards.length > 0) {
      renderForecast();
    }
    scrollZodiacToActive();
  }

  // ── Forecast period selection ──
  function selectFcPeriod(period) {
    if (stepState.step < 1) return; // Periods locked
    currentFcPeriod = period;

    var btns = document.querySelectorAll('.fc-period-btn');
    btns.forEach(function(b) {
      b.classList.toggle('active', b.dataset.period === period);
    });

    if (stepState.step < 2) stepState.step = 2;
    updateUIState();

    // Re-render forecast if already shown
    if (stepState.step >= 3 && drawnCards.length > 0) {
      renderForecast();
    }
  }

  // ── Zodiac panel ──
  function toggleZodiac() {
    var panel = document.getElementById('zodiacPanel');
    if (zodiacPanelOpen) {
      panel.classList.remove('show');
      panel.innerHTML = '';
      zodiacPanelOpen = false;
      return;
    }
    zodiacPanelOpen = true;

    var signs = window.i18n ? window.i18n.getZodiacSigns() : [];
    var html = '<div class="zodiac-panel-title">' + t('zodiacTitle') + '</div>' +
      '<div class="zodiac-grid">';
    signs.forEach(function(sign) {
      var sel = selectedZodiac === sign.index ? ' selected' : '';
      html += '<div class="zodiac-item' + sel + '" onclick="window.tarot22.selectZodiac(' + sign.index + ')">' +
        '<span class="zi-symbol">' + sign.symbol + '</span>' +
        '<span class="zi-name">' + sign.name + '</span>' +
      '</div>';
    });
    html += '</div>';
    panel.innerHTML = html;
    panel.classList.add('show');
  }

  function selectZodiac(index) {
    selectedZodiac = index;
    localStorage.setItem('tarot_zodiac', index);
    // Update trigger button text
    var signs = window.i18n ? window.i18n.getZodiacSigns() : [];
    var sign = signs[index];
    var trigger = document.getElementById('zodiacTrigger');
    if (trigger && sign) {
      trigger.querySelector('button').textContent = sign.symbol + ' ' + sign.name;
    }
    // Highlight selected
    var items = document.querySelectorAll('.zodiac-item');
    items.forEach(function(item, i) {
      item.classList.toggle('selected', i === index);
    });
    // Close panel after selection
    setTimeout(function() {
      var panel = document.getElementById('zodiacPanel');
      if (panel) { panel.classList.remove('show'); zodiacPanelOpen = false; }
    }, 300);
  }

  // ── New reading ──
  function newReading() {
    drawnCards = [];
    showMeanings = false;
    readingActive = false;
    zodiacPanelOpen = false;
    document.getElementById('t22BottomArea').innerHTML = '';
    document.getElementById('t22BottomArea').classList.remove('show');
    document.getElementById('t22Counter').textContent = '0 / 1';
    document.getElementById('t22Counter').classList.remove('show');
    updateDrawnPanel();

    // Keep zodiac selection but reset step to match
    stepState.step = selectedZodiac !== null ? 1 : 0;
    stepState.isSpinning = false;
    updateUIState();

    // Reset spin button text
    var spinBtn = document.getElementById('t22SpinBtn');
    if (spinBtn) spinBtn.textContent = '\uD83D\uDD2E ' + (t('fcGetForecast') || 'GET FORECAST');

    resetForNextDraw();
    document.getElementById('t22Instruction').textContent = t('tapDrawCard');
  }

  // ── Spin action from button or tap ──
  function spinAction() {
    if (stepState.step < 2 || stepState.isSpinning) return;
    doSpin();
  }

  function doSpin() {
    stepState.isSpinning = true;
    readingActive = true;
    spinning = true;
    spinStartTime = Date.now();
    speed = 20;
    document.getElementById('t22Instruction').classList.add('hidden');

    // Hide previous forecast if re-spinning
    var bottom = document.getElementById('t22BottomArea');
    if (bottom) { bottom.classList.remove('show'); bottom.innerHTML = ''; }
    showMeanings = false;

    startLoop();
  }

  // ── Core action handler ──
  function handleAction() {
    if (showMeanings) return;
    if (zodiacPanelOpen) return;

    if (revealed) {
      if (drawnCards.length >= 1) {
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

    // Only allow spin if step >= 2
    if (stepState.step < 2) return;
    doSpin();
  }

  // ── Language change handler ──
  function applyLanguageT22() {
    if (!section.classList.contains('active')) return;
    // Re-render the full page with new translations
    buildPage();
  }

  // ── Public API ──
  window.tarot22 = {
    render: function() { buildPage(); },
    cleanup: function() {
      if (animId) cancelAnimationFrame(animId);
      animId = null;
      spinning = false;
      revealed = false;
      drawnCards = [];
      showMeanings = false;
      readingActive = false;
      shuffledDeck = [];
      zodiacPanelOpen = false;
      angle = 0;
      speed = 0;
      stepState.step = selectedZodiac !== null ? 1 : 0;
      stepState.isSpinning = false;
    },
    newReading: newReading,
    selectFcZodiac: selectFcZodiac,
    selectFcPeriod: selectFcPeriod,
    spinAction: spinAction,
    applyLanguage: applyLanguageT22
  };

  // Resize
  window.addEventListener('resize', function() {
    if (section.classList.contains('active')) {
      RADIUS = getRadius();
      layoutCards();
    }
  });
})();
