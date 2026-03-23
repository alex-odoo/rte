// ── Tarot Forecast Engine — Hybrid Numerological-Astrological Model ──
// Deterministic forecast generation: f(date, zodiac, arcana, moonPhase, planet)
(function() {
  'use strict';

  // ── Major Arcana metadata ──
  var MAJOR_ARCANA = [
    { id:0,  name:"The Fool",            planet:"Uranus",  element:"Air",   zodiacAffinity:["Aquarius"] },
    { id:1,  name:"The Magician",         planet:"Mercury", element:"Air",   zodiacAffinity:["Gemini","Virgo"] },
    { id:2,  name:"The High Priestess",   planet:"Moon",    element:"Water", zodiacAffinity:["Cancer"] },
    { id:3,  name:"The Empress",          planet:"Venus",   element:"Earth", zodiacAffinity:["Taurus","Libra"] },
    { id:4,  name:"The Emperor",          planet:"Mars",    element:"Fire",  zodiacAffinity:["Aries"] },
    { id:5,  name:"The Hierophant",       planet:"Venus",   element:"Earth", zodiacAffinity:["Taurus"] },
    { id:6,  name:"The Lovers",           planet:"Mercury", element:"Air",   zodiacAffinity:["Gemini"] },
    { id:7,  name:"The Chariot",          planet:"Moon",    element:"Water", zodiacAffinity:["Cancer"] },
    { id:8,  name:"Strength",             planet:"Sun",     element:"Fire",  zodiacAffinity:["Leo"] },
    { id:9,  name:"The Hermit",           planet:"Mercury", element:"Earth", zodiacAffinity:["Virgo"] },
    { id:10, name:"Wheel of Fortune",     planet:"Jupiter", element:"Fire",  zodiacAffinity:["Sagittarius"] },
    { id:11, name:"Justice",              planet:"Venus",   element:"Air",   zodiacAffinity:["Libra"] },
    { id:12, name:"The Hanged Man",       planet:"Neptune", element:"Water", zodiacAffinity:["Pisces"] },
    { id:13, name:"Death",                planet:"Pluto",   element:"Water", zodiacAffinity:["Scorpio"] },
    { id:14, name:"Temperance",           planet:"Jupiter", element:"Fire",  zodiacAffinity:["Sagittarius"] },
    { id:15, name:"The Devil",            planet:"Saturn",  element:"Earth", zodiacAffinity:["Capricorn"] },
    { id:16, name:"The Tower",            planet:"Mars",    element:"Fire",  zodiacAffinity:["Aries"] },
    { id:17, name:"The Star",             planet:"Uranus",  element:"Air",   zodiacAffinity:["Aquarius"] },
    { id:18, name:"The Moon",             planet:"Neptune", element:"Water", zodiacAffinity:["Pisces"] },
    { id:19, name:"The Sun",              planet:"Sun",     element:"Fire",  zodiacAffinity:["Leo"] },
    { id:20, name:"Judgement",            planet:"Pluto",   element:"Fire",  zodiacAffinity:["Scorpio"] },
    { id:21, name:"The World",            planet:"Saturn",  element:"Earth", zodiacAffinity:["Capricorn","Aquarius"] }
  ];

  // ── Zodiac signs ──
  var ZODIAC_SIGNS = {
    Aries:       { element:"Fire",  ruler:"Mars",    index:0 },
    Taurus:      { element:"Earth", ruler:"Venus",   index:1 },
    Gemini:      { element:"Air",   ruler:"Mercury", index:2 },
    Cancer:      { element:"Water", ruler:"Moon",    index:3 },
    Leo:         { element:"Fire",  ruler:"Sun",     index:4 },
    Virgo:       { element:"Earth", ruler:"Mercury", index:5 },
    Libra:       { element:"Air",   ruler:"Venus",   index:6 },
    Scorpio:     { element:"Water", ruler:"Pluto",   index:7 },
    Sagittarius: { element:"Fire",  ruler:"Jupiter", index:8 },
    Capricorn:   { element:"Earth", ruler:"Saturn",  index:9 },
    Aquarius:    { element:"Air",   ruler:"Uranus",  index:10 },
    Pisces:      { element:"Water", ruler:"Neptune", index:11 }
  };

  // ── Planetary days (day of week → ruling planet) ──
  var PLANETARY_DAYS = [
    { planet:"Sun",     energy:"success"    },  // Sunday
    { planet:"Moon",    energy:"intuition"  },  // Monday
    { planet:"Mars",    energy:"action"     },  // Tuesday
    { planet:"Mercury", energy:"communication" }, // Wednesday
    { planet:"Jupiter", energy:"growth"     },  // Thursday
    { planet:"Venus",   energy:"harmony"    },  // Friday
    { planet:"Saturn",  energy:"discipline" }   // Saturday
  ];

  // ── Element compatibility matrix ──
  var ELEMENT_COMPAT = {
    "Fire-Fire":1.0,   "Fire-Air":0.85,  "Fire-Earth":0.5, "Fire-Water":0.3,
    "Air-Fire":0.85,   "Air-Air":1.0,    "Air-Earth":0.5,  "Air-Water":0.4,
    "Earth-Fire":0.5,  "Earth-Air":0.5,  "Earth-Earth":1.0,"Earth-Water":0.85,
    "Water-Fire":0.3,  "Water-Air":0.4,  "Water-Earth":0.85,"Water-Water":1.0
  };

  // ── Moon phases (8 phases) ──
  var MOON_PHASES = [
    { name:"newMoon",        energy:"beginning", modifier:0.2 },
    { name:"waxingCrescent", energy:"growth",    modifier:0.4 },
    { name:"firstQuarter",   energy:"action",    modifier:0.6 },
    { name:"waxingGibbous",  energy:"building",  modifier:0.8 },
    { name:"fullMoon",       energy:"peak",      modifier:1.0 },
    { name:"waningGibbous",  energy:"sharing",   modifier:0.8 },
    { name:"lastQuarter",    energy:"review",    modifier:0.6 },
    { name:"waningCrescent", energy:"release",   modifier:0.4 }
  ];

  // ── djb2 hash for deterministic seed ──
  function generateSeed(zodiacIndex, arcanaId, dateString, period) {
    var raw = zodiacIndex + '-' + arcanaId + '-' + dateString + '-' + period;
    var hash = 5381;
    for (var i = 0; i < raw.length; i++) {
      hash = ((hash << 5) + hash) + raw.charCodeAt(i);
      hash = hash & hash; // 32-bit int
    }
    return Math.abs(hash);
  }

  // ── Moon phase calculation (Conway's algorithm) ──
  function getMoonPhase(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var r = year % 100;
    r %= 19;
    if (r > 9) r -= 19;
    r = ((r * 11) % 30) + month + day;
    if (month < 3) r += 2;
    r -= ((year < 2000) ? 4 : 8.3);
    r = Math.floor(r + 0.5) % 30;
    if (r < 0) r += 30;

    var phaseIndex = Math.floor(r / 3.75);
    return MOON_PHASES[Math.min(phaseIndex, 7)];
  }

  // ── Get moon phase icon ──
  function getMoonIcon(phaseName) {
    var icons = {
      newMoon:'\uD83C\uDF11', waxingCrescent:'\uD83C\uDF12',
      firstQuarter:'\uD83C\uDF13', waxingGibbous:'\uD83C\uDF14',
      fullMoon:'\uD83C\uDF15', waningGibbous:'\uD83C\uDF16',
      lastQuarter:'\uD83C\uDF17', waningCrescent:'\uD83C\uDF18'
    };
    return icons[phaseName] || '\uD83C\uDF19';
  }

  // ── Get planet symbol ──
  function getPlanetSymbol(planet) {
    var symbols = {
      Sun:'\u2609', Moon:'\u263D', Mercury:'\u263F', Venus:'\u2640',
      Mars:'\u2642', Jupiter:'\u2643', Saturn:'\u2644',
      Uranus:'\u2645', Neptune:'\u2646', Pluto:'\u2647'
    };
    return symbols[planet] || '\u2726';
  }

  // ── Element compatibility ──
  function getElementCompat(el1, el2) {
    return ELEMENT_COMPAT[el1 + '-' + el2] || 0.5;
  }

  // ── ISO week number ──
  function getISOWeek(date) {
    var d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
    var week1 = new Date(d.getFullYear(), 0, 4);
    return 1 + Math.round(((d - week1) / 86400000 - 3 +
      ((week1.getDay() + 6) % 7)) / 7);
  }

  // ── Date key for seed (deterministic per period) ──
  function getDateKey(date, period) {
    var y = date.getFullYear();
    var m = String(date.getMonth() + 1).padStart(2, '0');
    var d = String(date.getDate()).padStart(2, '0');

    switch (period) {
      case 'today':
        return y + '-' + m + '-' + d;
      case 'tomorrow':
        var tmrw = new Date(date);
        tmrw.setDate(tmrw.getDate() + 1);
        return tmrw.getFullYear() + '-' +
          String(tmrw.getMonth()+1).padStart(2,'0') + '-' +
          String(tmrw.getDate()).padStart(2,'0');
      case 'week':
        return y + '-W' + String(getISOWeek(date)).padStart(2, '0');
      case 'month':
        var nm = new Date(y, date.getMonth() + 1, 1);
        return nm.getFullYear() + '-' + String(nm.getMonth()+1).padStart(2,'0');
      case 'year':
        return String(y + 1);
      default:
        return y + '-' + m + '-' + d;
    }
  }

  // ── Target date for period ──
  function getTargetDate(date, period) {
    switch (period) {
      case 'tomorrow':
        var d = new Date(date);
        d.setDate(d.getDate() + 1);
        return d;
      default:
        return date;
    }
  }

  // ── Pick from array using seed (deterministic) ──
  function pick(arr, seed) {
    if (!arr || arr.length === 0) return null;
    return arr[seed % arr.length];
  }

  // ── Main forecast generation ──
  function generateForecast(zodiacSign, arcanaId, period) {
    // Validate inputs
    if (!ZODIAC_SIGNS[zodiacSign] || arcanaId < 0 || arcanaId > 21) return null;
    if (!window.FORECAST_DATA) return null;

    var today = new Date();
    var dateKey = getDateKey(today, period);
    var zodiac = ZODIAC_SIGNS[zodiacSign];
    var arcana = MAJOR_ARCANA[arcanaId];
    var targetDate = getTargetDate(today, period);
    var moonPhase = getMoonPhase(targetDate);
    var planetaryDay = PLANETARY_DAYS[targetDate.getDay()];
    var compatibility = getElementCompat(zodiac.element, arcana.element);

    // Determine tone (balanced: moon alone shouldn't force warning)
    var tone;
    var combined = compatibility * 0.7 + moonPhase.modifier * 0.3;
    if (combined >= 0.7) {
      tone = 'positive';
    } else if (combined < 0.4) {
      tone = 'warning';
    } else {
      tone = 'neutral';
    }

    // Ruler bonus: zodiac ruler = arcana planet → upgrade neutral to positive
    if (zodiac.ruler === arcana.planet && tone === 'neutral') {
      tone = 'positive';
    }

    // Day bonus: planetary day matches zodiac ruler
    var dayBonus = (planetaryDay.planet === zodiac.ruler);

    // Generate seed
    var seed = generateSeed(zodiac.index, arcanaId, dateKey, period);

    // Get data from FORECAST_DATA (multilingual: separate files per language)
    var FD = window.FORECAST_DATA;
    var lang = (window.i18n && window.i18n.getLang) ? window.i18n.getLang() : 'en';
    var langKey = lang.toUpperCase();
    var langData = window['FORECAST_DATA_' + langKey];
    var srcData = langData || FD;
    var arcanaTexts = srcData.arcana[arcanaId];
    if (!arcanaTexts) { arcanaTexts = FD.arcana[arcanaId]; }
    if (!arcanaTexts) return null;

    // Filter texts by tone and period (period is now a string, not array)
    var toneTexts = arcanaTexts[tone] || arcanaTexts.neutral || [];
    var filtered = toneTexts.filter(function(t) {
      // Support both old format (array) and new format (string)
      return Array.isArray(t.period) ? t.period.indexOf(period) !== -1 : t.period === period;
    });
    // Fallback: if no texts for this period, use all texts of this tone
    if (filtered.length === 0) filtered = toneTexts;
    if (filtered.length === 0) return null;

    var baseText = pick(filtered, seed);

    // Moon modifier (multilingual)
    var moonSrc = (langData && langData.moonModifiers) ? langData.moonModifiers : FD.moonModifiers;
    var moonMod = moonSrc[moonPhase.name];
    var moonPrefix = '';
    if (moonMod && moonMod.prefix && moonMod.prefix.length > 0) {
      moonPrefix = pick(moonMod.prefix, seed);
    }

    // Zodiac personal phrase (multilingual)
    var zodiacSrc = (langData && langData.zodiac) ? langData.zodiac : FD.zodiac;
    var zodiacData = zodiacSrc[zodiacSign];
    var personalPhrase = '';
    if (zodiacData && baseText.category) {
      var catPhrases = zodiacData[baseText.category];
      if (catPhrases && catPhrases.length > 0) {
        personalPhrase = pick(catPhrases, seed);
      }
    }

    // Planetary day energy name (localized)
    var dayPlanet = planetaryDay.planet;

    // Assemble forecast
    var text = assembleForecast(baseText.text, personalPhrase, moonPrefix, dayBonus);

    return {
      text: text,
      moonPhase: moonPhase,
      moonIcon: getMoonIcon(moonPhase.name),
      tone: tone,
      arcanaId: arcanaId,
      arcanaName: arcana.name,
      zodiacSign: zodiacSign,
      planetaryDay: dayPlanet,
      planetSymbol: getPlanetSymbol(dayPlanet),
      dayBonus: dayBonus,
      compatibility: compatibility
    };
  }

  // ── Assemble final text ──
  function assembleForecast(baseText, personalPhrase, moonPrefix, dayBonus) {
    var result = '';

    if (moonPrefix) {
      result = moonPrefix + '. ' + baseText;
    } else {
      result = baseText;
    }

    if (dayBonus && personalPhrase) {
      result += ' ' + personalPhrase;
    }

    // Limit to 5 sentences
    var sentences = result.match(/[^.!?]+[.!?]+/g) || [result];
    return sentences.slice(0, 5).join(' ').trim();
  }

  // ── Lazy-load forecast language data ──
  var _loadedLangs = {};
  function ensureForecastLang(lang, cb) {
    var key = lang.toUpperCase();
    // EN is always loaded via forecast-data.js
    if (key === 'EN' || window['FORECAST_DATA_' + key]) {
      if (cb) cb();
      return;
    }
    // Already loading
    if (_loadedLangs[key] === 'loading') {
      var check = setInterval(function() {
        if (_loadedLangs[key] === 'done') { clearInterval(check); if (cb) cb(); }
      }, 50);
      return;
    }
    var file = 'forecast-data-' + lang.toLowerCase() + '.js';
    _loadedLangs[key] = 'loading';
    var s = document.createElement('script');
    s.src = file;
    s.onload = function() { _loadedLangs[key] = 'done'; if (cb) cb(); };
    s.onerror = function() { _loadedLangs[key] = 'done'; if (cb) cb(); };
    document.head.appendChild(s);
  }

  // ── Public API ──
  window.forecast = {
    generate: generateForecast,
    getMoonPhase: getMoonPhase,
    getMoonIcon: getMoonIcon,
    getPlanetSymbol: getPlanetSymbol,
    getISOWeek: getISOWeek,
    ensureLang: ensureForecastLang,
    ZODIAC_SIGNS: ZODIAC_SIGNS,
    MAJOR_ARCANA: MAJOR_ARCANA,
    PLANETARY_DAYS: PLANETARY_DAYS
  };

})();
