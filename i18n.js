// ── Internationalization — 7 Languages ──
(function(){
  'use strict';

  var LANGS = ['en','ru','fr','es','de','it','ro'];

  var META = {
    en:{flag:'\u{1F1EC}\u{1F1E7}',name:'English'},
    ru:{flag:'\u{1F1F7}\u{1F1FA}',name:'\u0420\u0443\u0441\u0441\u043A\u0438\u0439'},
    fr:{flag:'\u{1F1EB}\u{1F1F7}',name:'Fran\u00e7ais'},
    es:{flag:'\u{1F1EA}\u{1F1F8}',name:'Espa\u00f1ol'},
    de:{flag:'\u{1F1E9}\u{1F1EA}',name:'Deutsch'},
    it:{flag:'\u{1F1EE}\u{1F1F9}',name:'Italiano'},
    ro:{flag:'\u{1F1F7}\u{1F1F4}',name:'Rom\u00e2n\u0103'}
  };

  // ── UI Strings ──
  var UI = {
    en:{
      angelTitle:'ANGEL MESSAGES',angelSub:'Receive guidance from the angels',
      tarotTitle:'MAJOR ARCANA',tarotSub:'22 cards of the soul\'s journey',
      tap:'Tap to receive a message',tapShuffle:'Tap to shuffle',
      tapDraw:'Tap to draw a card',tapDrawN:'Tap to draw next',
      tapReveal:'Tap to reveal meanings',
      meanTitle:'\u2726 Your Reading Meanings \u2726',reversed:'Reversed',
      newReading:'\u2726 New Reading',counter:'of',btnAngel:'\uD83D\uDC7C Angels',btnTarot:'\u2726 Tarot 22',
      zodiacTitle:'Choose your zodiac sign',readingTitle:'Your reading',
      cardsWord:'cards',drawCount:'drawn',tapDrawCard:'Tap to draw a card'
    },
    ru:{
      angelTitle:'\u041F\u041E\u0421\u041B\u0410\u041D\u0418\u042F \u0410\u041D\u0413\u0415\u041B\u041E\u0412',angelSub:'\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0441\u043E\u0432\u0435\u0442 \u043E\u0442 \u0430\u043D\u0433\u0435\u043B\u043E\u0432',
      tarotTitle:'\u0421\u0422\u0410\u0420\u0428\u0418\u0415 \u0410\u0420\u041A\u0410\u041D\u042B',tarotSub:'22 \u043A\u0430\u0440\u0442\u044B \u043F\u0443\u0442\u0438 \u0434\u0443\u0448\u0438',
      tap:'\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0430\u043D\u0438\u0435',tapShuffle:'\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u0442\u044C',
      tapDraw:'\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0442\u044F\u043D\u0443\u0442\u044C \u043A\u0430\u0440\u0442\u0443',tapDrawN:'\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439',
      tapReveal:'\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0441\u043A\u0440\u044B\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F',
      meanTitle:'\u2726 \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0440\u0430\u0441\u043A\u043B\u0430\u0434\u0430 \u2726',reversed:'\u041F\u0435\u0440\u0435\u0432\u0451\u0440\u043D\u0443\u0442\u0430\u044F',
      newReading:'\u2726 \u041D\u043E\u0432\u044B\u0439 \u0440\u0430\u0441\u043A\u043B\u0430\u0434',counter:'\u0438\u0437',btnAngel:'\uD83D\uDC7C \u0410\u043D\u0433\u0435\u043B\u044B',btnTarot:'\u2726 \u0422\u0430\u0440\u043E 22',
      zodiacTitle:'\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u043A \u0437\u043E\u0434\u0438\u0430\u043A\u0430',readingTitle:'\u0412\u0430\u0448 \u0440\u0430\u0441\u043A\u043B\u0430\u0434',
      cardsWord:'\u043A\u0430\u0440\u0442',drawCount:'\u0432\u044B\u0442\u044F\u043D\u0443\u0442\u043E',tapDrawCard:'\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0442\u044F\u043D\u0443\u0442\u044C \u043A\u0430\u0440\u0442\u0443'
    },
    fr:{
      angelTitle:'MESSAGES DES ANGES',angelSub:'Recevez les conseils des anges',
      tarotTitle:'ARCANES MAJEURS',tarotSub:'22 cartes du voyage de l\'\u00e2me',
      tap:'Appuyez pour recevoir un message',tapShuffle:'Appuyez pour m\u00e9langer',
      tapDraw:'Appuyez pour tirer une carte',tapDrawN:'Appuyez pour la suivante',
      tapReveal:'Appuyez pour r\u00e9v\u00e9ler les significations',
      meanTitle:'\u2726 Significations de votre tirage \u2726',reversed:'Invers\u00e9e',
      newReading:'\u2726 Nouveau tirage',counter:'sur',btnAngel:'\uD83D\uDC7C Anges',btnTarot:'\u2726 Tarot 22',
      zodiacTitle:'Choisissez votre signe du zodiaque',readingTitle:'Votre tirage',
      cardsWord:'cartes',drawCount:'tir\u00e9es',tapDrawCard:'Appuyez pour tirer une carte'
    },
    es:{
      angelTitle:'MENSAJES DE LOS \u00c1NGELES',angelSub:'Recibe gu\u00eda de los \u00e1ngeles',
      tarotTitle:'ARCANOS MAYORES',tarotSub:'22 cartas del viaje del alma',
      tap:'Toca para recibir un mensaje',tapShuffle:'Toca para mezclar',
      tapDraw:'Toca para sacar una carta',tapDrawN:'Toca para la siguiente',
      tapReveal:'Toca para revelar significados',
      meanTitle:'\u2726 Significados de tu lectura \u2726',reversed:'Invertida',
      newReading:'\u2726 Nueva lectura',counter:'de',btnAngel:'\uD83D\uDC7C \u00c1ngeles',btnTarot:'\u2726 Tarot 22',
      zodiacTitle:'Elige tu signo del zod\u00edaco',readingTitle:'Tu lectura',
      cardsWord:'cartas',drawCount:'sacadas',tapDrawCard:'Toca para sacar una carta'
    },
    de:{
      angelTitle:'ENGELSBOTSCHAFTEN',angelSub:'Empfangen Sie die F\u00fchrung der Engel',
      tarotTitle:'GROSSE ARKANA',tarotSub:'22 Karten der Seelenreise',
      tap:'Tippen Sie f\u00fcr eine Botschaft',tapShuffle:'Tippen Sie zum Mischen',
      tapDraw:'Tippen Sie, um eine Karte zu ziehen',tapDrawN:'Tippen Sie f\u00fcr die n\u00e4chste',
      tapReveal:'Tippen Sie f\u00fcr die Bedeutungen',
      meanTitle:'\u2726 Bedeutungen Ihrer Legung \u2726',reversed:'Umgekehrt',
      newReading:'\u2726 Neue Legung',counter:'von',btnAngel:'\uD83D\uDC7C Engel',btnTarot:'\u2726 Tarot 22',
      zodiacTitle:'W\u00e4hlen Sie Ihr Sternzeichen',readingTitle:'Ihre Legung',
      cardsWord:'Karten',drawCount:'gezogen',tapDrawCard:'Tippen Sie, um eine Karte zu ziehen'
    },
    it:{
      angelTitle:'MESSAGGI DEGLI ANGELI',angelSub:'Ricevi la guida degli angeli',
      tarotTitle:'ARCANI MAGGIORI',tarotSub:'22 carte del viaggio dell\'anima',
      tap:'Tocca per ricevere un messaggio',tapShuffle:'Tocca per mescolare',
      tapDraw:'Tocca per estrarre una carta',tapDrawN:'Tocca per la prossima',
      tapReveal:'Tocca per rivelare i significati',
      meanTitle:'\u2726 Significati della tua lettura \u2726',reversed:'Invertita',
      newReading:'\u2726 Nuova lettura',counter:'di',btnAngel:'\uD83D\uDC7C Angeli',btnTarot:'\u2726 Tarot 22',
      zodiacTitle:'Scegli il tuo segno zodiacale',readingTitle:'La tua lettura',
      cardsWord:'carte',drawCount:'estratte',tapDrawCard:'Tocca per estrarre una carta'
    },
    ro:{
      angelTitle:'MESAJE DE LA \u00ceNGERI',angelSub:'Prime\u0219te ghidare de la \u00eengeri',
      tarotTitle:'ARCANELE MAJORE',tarotSub:'22 de c\u0103r\u021bi ale c\u0103l\u0103toriei sufletului',
      tap:'Atinge pentru a primi un mesaj',tapShuffle:'Atinge pentru a amesteca',
      tapDraw:'Atinge pentru a trage o carte',tapDrawN:'Atinge pentru urm\u0103toarea',
      tapReveal:'Atinge pentru a dezv\u0103lui semnifica\u021biile',
      meanTitle:'\u2726 Semnifica\u021biile lecturii tale \u2726',reversed:'Inversat\u0103',
      newReading:'\u2726 Lectur\u0103 nou\u0103',counter:'din',btnAngel:'\uD83D\uDC7C \u00cengeri',btnTarot:'\u2726 Tarot 22',
      zodiacTitle:'Alege-\u021bi semnul zodiacal',readingTitle:'Lectura ta',
      cardsWord:'c\u0103r\u021bi',drawCount:'extrase',tapDrawCard:'Atinge pentru a trage o carte'
    }
  };

  // ── Zodiac Signs ──
  var ZODIAC_SYMBOLS = ['\u2648','\u2649','\u264A','\u264B','\u264C','\u264D','\u264E','\u264F','\u2650','\u2651','\u2652','\u2653'];

  var ZODIAC = {
    en:['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'],
    ru:['\u041E\u0432\u0435\u043D','\u0422\u0435\u043B\u0435\u0446','\u0411\u043B\u0438\u0437\u043D\u0435\u0446\u044B','\u0420\u0430\u043A','\u041B\u0435\u0432','\u0414\u0435\u0432\u0430','\u0412\u0435\u0441\u044B','\u0421\u043A\u043E\u0440\u043F\u0438\u043E\u043D','\u0421\u0442\u0440\u0435\u043B\u0435\u0446','\u041A\u043E\u0437\u0435\u0440\u043E\u0433','\u0412\u043E\u0434\u043E\u043B\u0435\u0439','\u0420\u044B\u0431\u044B'],
    fr:['B\u00e9lier','Taureau','G\u00e9meaux','Cancer','Lion','Vierge','Balance','Scorpion','Sagittaire','Capricorne','Verseau','Poissons'],
    es:['Aries','Tauro','G\u00e9minis','C\u00e1ncer','Leo','Virgo','Libra','Escorpio','Sagitario','Capricornio','Acuario','Piscis'],
    de:['Widder','Stier','Zwillinge','Krebs','L\u00f6we','Jungfrau','Waage','Skorpion','Sch\u00fctze','Steinbock','Wassermann','Fische'],
    it:['Ariete','Toro','Gemelli','Cancro','Leone','Vergine','Bilancia','Scorpione','Sagittario','Capricorno','Acquario','Pesci'],
    ro:['Berbec','Taur','Gemeni','Rac','Leu','Fecioara','Balanta','Scorpion','Sagetator','Capricorn','Varsator','Pesti']
  };

  // ── Angel Cards: 44 cards × 7 languages [displayName, meaning] ──
  var ANGEL = {
    en:[
      ['Healing','Angels send you healing energy. Open your heart to receive'],
      ['Forgiveness','Let go of resentment and anger. Forgiveness frees the soul'],
      ['Love','Love surrounds you. Open yourself to new relationships'],
      ['Trust','Trust the Divine plan. Everything happens in its time'],
      ['Peace','Peace comes from within. Let go of worries'],
      ['Abundance','The Universe prepares gifts for you. Accept them with gratitude'],
      ['Guardian Angel','Your angel is near. You are under protection and guidance'],
      ['Courage','Angels give you strength. Act without fear'],
      ['Gratitude','Gratitude opens new blessings'],
      ['Patience','Everything has its time. Trust the process'],
      ['Faith','Strengthen your faith. Angels will not leave you'],
      ['Joy','Joy is your natural state. Allow yourself happiness'],
      ['Wisdom','The answers are already within you. Listen to your heart'],
      ['Strength','You are stronger than you think. Angels support you'],
      ['Miracle','Prepare for a miracle. Angels are working on your prayer'],
      ['Protection','You are safe. Angels guard you'],
      ['Harmony','Harmony is being restored. Trust the flow'],
      ['New Beginning','A new chapter begins. Let go of the past'],
      ['Divine Guidance','Angels guide your every step'],
      ['Compassion','Be merciful to yourself and others'],
      ['Dream','Your dreams come true. Keep believing'],
      ['Serenity','Find inner peace. All is well'],
      ['Purpose','You are on the right path. Follow your soul\'s calling'],
      ['Blessing','Blessings pour upon you. Accept them'],
      ['Clarity','Clarity is near. Answers will come to you'],
      ['Release','Let go of what no longer serves you'],
      ['Transformation','Changes bring good. Accept renewal'],
      ['Prayer','Your prayers are heard. The answer is on its way'],
      ['Intuition','Trust your inner voice'],
      ['Hope','Hope illuminates your path. Light ahead'],
      ['Grace','Divine grace descends upon you'],
      ['Truth','Be honest with yourself and the world'],
      ['Surrender','Let go of control. Allow angels to help'],
      ['Inner Child','Heal your inner child'],
      ['Meditation','Silence opens doors to angels'],
      ['Destiny','You are fulfilling your purpose'],
      ['Balance','Find balance in everything. Harmony within and without'],
      ['Light','You carry light. Let it shine'],
      ['Soul Mate','A kindred soul is near. Open your heart'],
      ['Detox','Cleanse body, mind and soul of toxins'],
      ['Archangel Michael','Michael protects and guides you'],
      ['Archangel Raphael','Raphael brings healing to your life'],
      ['Boundaries','Set healthy boundaries with love'],
      ['Creativity','Express yourself through creativity. Angels inspire']
    ],
    ru:[
      ['\u0418\u0441\u0446\u0435\u043B\u0435\u043D\u0438\u0435','\u0410\u043D\u0433\u0435\u043B\u044B \u043F\u043E\u0441\u044B\u043B\u0430\u044E\u0442 \u0432\u0430\u043C \u0438\u0441\u0446\u0435\u043B\u044F\u044E\u0449\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E. \u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0441\u0435\u0440\u0434\u0446\u0435'],
      ['\u041F\u0440\u043E\u0449\u0435\u043D\u0438\u0435','\u041E\u0442\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043E\u0431\u0438\u0434\u044B \u0438 \u0433\u043D\u0435\u0432. \u041F\u0440\u043E\u0449\u0435\u043D\u0438\u0435 \u043E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0430\u0435\u0442 \u0434\u0443\u0448\u0443'],
      ['\u041B\u044E\u0431\u043E\u0432\u044C','\u041B\u044E\u0431\u043E\u0432\u044C \u043E\u043A\u0440\u0443\u0436\u0430\u0435\u0442 \u0432\u0430\u0441. \u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435\u0441\u044C \u043D\u043E\u0432\u044B\u043C \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F\u043C'],
      ['\u0414\u043E\u0432\u0435\u0440\u0438\u0435','\u0414\u043E\u0432\u0435\u0440\u044C\u0442\u0435\u0441\u044C \u0411\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C\u0443 \u043F\u043B\u0430\u043D\u0443. \u0412\u0441\u0451 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0432\u043E\u0432\u0440\u0435\u043C\u044F'],
      ['\u041C\u0438\u0440','\u041F\u043E\u043A\u043E\u0439 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u0438\u0437\u043D\u0443\u0442\u0440\u0438. \u041E\u0442\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0442\u0440\u0435\u0432\u043E\u0433\u0438'],
      ['\u0418\u0437\u043E\u0431\u0438\u043B\u0438\u0435','\u0412\u0441\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u0433\u043E\u0442\u043E\u0432\u0438\u0442 \u0434\u043B\u044F \u0432\u0430\u0441 \u0434\u0430\u0440\u044B. \u041F\u0440\u0438\u043C\u0438\u0442\u0435 \u0438\u0445 \u0441 \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u044C\u044E'],
      ['\u0410\u043D\u0433\u0435\u043B-\u0425\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u044C','\u0412\u0430\u0448 \u0430\u043D\u0433\u0435\u043B \u0440\u044F\u0434\u043E\u043C. \u0412\u044B \u043F\u043E\u0434 \u0437\u0430\u0449\u0438\u0442\u043E\u0439 \u0438 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E\u043C'],
      ['\u0421\u043C\u0435\u043B\u043E\u0441\u0442\u044C','\u0410\u043D\u0433\u0435\u043B\u044B \u0434\u0430\u044E\u0442 \u0432\u0430\u043C \u0441\u0438\u043B\u0443. \u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0439\u0442\u0435 \u0431\u0435\u0437 \u0441\u0442\u0440\u0430\u0445\u0430'],
      ['\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u044C','\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u044C \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043D\u043E\u0432\u044B\u0435 \u0431\u043B\u0430\u0433\u043E\u0441\u043B\u043E\u0432\u0435\u043D\u0438\u044F'],
      ['\u0422\u0435\u0440\u043F\u0435\u043D\u0438\u0435','\u0412\u0441\u0435\u043C\u0443 \u0441\u0432\u043E\u0451 \u0432\u0440\u0435\u043C\u044F. \u0414\u043E\u0432\u0435\u0440\u044C\u0442\u0435\u0441\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0443'],
      ['\u0412\u0435\u0440\u0430','\u0423\u043A\u0440\u0435\u043F\u0438\u0442\u0435 \u0441\u0432\u043E\u044E \u0432\u0435\u0440\u0443. \u0410\u043D\u0433\u0435\u043B\u044B \u043D\u0435 \u043E\u0441\u0442\u0430\u0432\u044F\u0442 \u0432\u0430\u0441'],
      ['\u0420\u0430\u0434\u043E\u0441\u0442\u044C','\u0420\u0430\u0434\u043E\u0441\u0442\u044C \u2014 \u0432\u0430\u0448\u0435 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435. \u041F\u043E\u0437\u0432\u043E\u043B\u044C\u0442\u0435 \u0441\u0435\u0431\u0435 \u0441\u0447\u0430\u0441\u0442\u044C\u0435'],
      ['\u041C\u0443\u0434\u0440\u043E\u0441\u0442\u044C','\u041E\u0442\u0432\u0435\u0442\u044B \u0443\u0436\u0435 \u0432\u043D\u0443\u0442\u0440\u0438 \u0432\u0430\u0441. \u041F\u0440\u0438\u0441\u043B\u0443\u0448\u0430\u0439\u0442\u0435\u0441\u044C \u043A \u0441\u0435\u0440\u0434\u0446\u0443'],
      ['\u0421\u0438\u043B\u0430','\u0412\u044B \u0441\u0438\u043B\u044C\u043D\u0435\u0435, \u0447\u0435\u043C \u0434\u0443\u043C\u0430\u0435\u0442\u0435. \u0410\u043D\u0433\u0435\u043B\u044B \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442 \u0432\u0430\u0441'],
      ['\u0427\u0443\u0434\u043E','\u0413\u043E\u0442\u043E\u0432\u044C\u0442\u0435\u0441\u044C \u043A \u0447\u0443\u0434\u0443. \u0410\u043D\u0433\u0435\u043B\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043D\u0430\u0434 \u0432\u0430\u0448\u0435\u0439 \u043C\u043E\u043B\u0438\u0442\u0432\u043E\u0439'],
      ['\u0417\u0430\u0449\u0438\u0442\u0430','\u0412\u044B \u0432 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438. \u0410\u043D\u0433\u0435\u043B\u044B \u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442 \u0432\u0430\u0441'],
      ['\u0413\u0430\u0440\u043C\u043E\u043D\u0438\u044F','\u0413\u0430\u0440\u043C\u043E\u043D\u0438\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F. \u0414\u043E\u0432\u0435\u0440\u044C\u0442\u0435\u0441\u044C \u043F\u043E\u0442\u043E\u043A\u0443'],
      ['\u041D\u043E\u0432\u043E\u0435 \u041D\u0430\u0447\u0430\u043B\u043E','\u041D\u043E\u0432\u0430\u044F \u0433\u043B\u0430\u0432\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F. \u041E\u0442\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043F\u0440\u043E\u0448\u043B\u043E\u0435'],
      ['\u0411\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E','\u0410\u043D\u0433\u0435\u043B\u044B \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0442 \u043A\u0430\u0436\u0434\u044B\u0439 \u0432\u0430\u0448 \u0448\u0430\u0433'],
      ['\u0421\u043E\u0441\u0442\u0440\u0430\u0434\u0430\u043D\u0438\u0435','\u0411\u0443\u0434\u044C\u0442\u0435 \u043C\u0438\u043B\u043E\u0441\u0435\u0440\u0434\u043D\u044B \u043A \u0441\u0435\u0431\u0435 \u0438 \u0434\u0440\u0443\u0433\u0438\u043C'],
      ['\u041C\u0435\u0447\u0442\u0430','\u0412\u0430\u0448\u0438 \u043C\u0435\u0447\u0442\u044B \u0441\u0431\u044B\u0432\u0430\u044E\u0442\u0441\u044F. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0439\u0442\u0435 \u0432\u0435\u0440\u0438\u0442\u044C'],
      ['\u0411\u0435\u0437\u043C\u044F\u0442\u0435\u0436\u043D\u043E\u0441\u0442\u044C','\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \u043F\u043E\u043A\u043E\u0439. \u0412\u0441\u0451 \u0445\u043E\u0440\u043E\u0448\u043E'],
      ['\u041F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435','\u0412\u044B \u043D\u0430 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u043C \u043F\u0443\u0442\u0438. \u0421\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0437\u043E\u0432\u0443 \u0434\u0443\u0448\u0438'],
      ['\u0411\u043B\u0430\u0433\u043E\u0441\u043B\u043E\u0432\u0435\u043D\u0438\u0435','\u0411\u043B\u0430\u0433\u043E\u0441\u043B\u043E\u0432\u0435\u043D\u0438\u044F \u0438\u0437\u043B\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u0432\u0430\u0441. \u041F\u0440\u0438\u043C\u0438\u0442\u0435 \u0438\u0445'],
      ['\u042F\u0441\u043D\u043E\u0441\u0442\u044C','\u041F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u0431\u043B\u0438\u0437\u043A\u043E. \u041E\u0442\u0432\u0435\u0442\u044B \u043F\u0440\u0438\u0434\u0443\u0442 \u043A \u0432\u0430\u043C'],
      ['\u041E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0435\u043D\u0438\u0435','\u041E\u0442\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0442\u043E, \u0447\u0442\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0441\u043B\u0443\u0436\u0438\u0442 \u0432\u0430\u043C'],
      ['\u0422\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F','\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u044B \u043D\u0435\u0441\u0443\u0442 \u0431\u043B\u0430\u0433\u043E. \u041F\u0440\u0438\u043C\u0438\u0442\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435'],
      ['\u041C\u043E\u043B\u0438\u0442\u0432\u0430','\u0412\u0430\u0448\u0438 \u043C\u043E\u043B\u0438\u0442\u0432\u044B \u0443\u0441\u043B\u044B\u0448\u0430\u043D\u044B. \u041E\u0442\u0432\u0435\u0442 \u0443\u0436\u0435 \u0432 \u043F\u0443\u0442\u0438'],
      ['\u0418\u043D\u0442\u0443\u0438\u0446\u0438\u044F','\u0414\u043E\u0432\u0435\u0440\u044C\u0442\u0435\u0441\u044C \u0441\u0432\u043E\u0435\u043C\u0443 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u043C\u0443 \u0433\u043E\u043B\u043E\u0441\u0443'],
      ['\u041D\u0430\u0434\u0435\u0436\u0434\u0430','\u041D\u0430\u0434\u0435\u0436\u0434\u0430 \u043E\u0441\u0432\u0435\u0449\u0430\u0435\u0442 \u0432\u0430\u0448 \u043F\u0443\u0442\u044C. \u0421\u0432\u0435\u0442 \u0432\u043F\u0435\u0440\u0435\u0434\u0438'],
      ['\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0442\u044C','\u0411\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0442\u044C \u043D\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043D\u0430 \u0432\u0430\u0441'],
      ['\u0418\u0441\u0442\u0438\u043D\u0430','\u0411\u0443\u0434\u044C\u0442\u0435 \u0447\u0435\u0441\u0442\u043D\u044B \u0441 \u0441\u043E\u0431\u043E\u0439 \u0438 \u043C\u0438\u0440\u043E\u043C'],
      ['\u041F\u0440\u0438\u043D\u044F\u0442\u0438\u0435','\u041E\u0442\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C. \u041F\u043E\u0437\u0432\u043E\u043B\u044C\u0442\u0435 \u0430\u043D\u0433\u0435\u043B\u0430\u043C \u043F\u043E\u043C\u043E\u0447\u044C'],
      ['\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \u0420\u0435\u0431\u0451\u043D\u043E\u043A','\u0418\u0441\u0446\u0435\u043B\u0438\u0442\u0435 \u0441\u0432\u043E\u0435\u0433\u043E \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0433\u043E \u0440\u0435\u0431\u0451\u043D\u043A\u0430'],
      ['\u041C\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u044F','\u0422\u0438\u0448\u0438\u043D\u0430 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0434\u0432\u0435\u0440\u0438 \u043A \u0430\u043D\u0433\u0435\u043B\u0430\u043C'],
      ['\u0421\u0443\u0434\u044C\u0431\u0430','\u0412\u044B \u0438\u0441\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0435 \u0441\u0432\u043E\u0451 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435'],
      ['\u0420\u0430\u0432\u043D\u043E\u0432\u0435\u0441\u0438\u0435','\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0431\u0430\u043B\u0430\u043D\u0441 \u0432\u043E \u0432\u0441\u0451\u043C. \u0413\u0430\u0440\u043C\u043E\u043D\u0438\u044F \u0432\u043D\u0443\u0442\u0440\u0438 \u0438 \u0441\u043D\u0430\u0440\u0443\u0436\u0438'],
      ['\u0421\u0432\u0435\u0442','\u0412\u044B \u043D\u0435\u0441\u0451\u0442\u0435 \u0441\u0432\u0435\u0442. \u041F\u043E\u0437\u0432\u043E\u043B\u044C\u0442\u0435 \u0435\u043C\u0443 \u0441\u0438\u044F\u0442\u044C'],
      ['\u0420\u043E\u0434\u043D\u0430\u044F \u0414\u0443\u0448\u0430','\u0420\u043E\u0434\u043D\u0430\u044F \u0434\u0443\u0448\u0430 \u0440\u044F\u0434\u043E\u043C. \u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0441\u0435\u0440\u0434\u0446\u0435'],
      ['\u041E\u0447\u0438\u0449\u0435\u043D\u0438\u0435','\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0435 \u0442\u0435\u043B\u043E, \u0440\u0430\u0437\u0443\u043C \u0438 \u0434\u0443\u0448\u0443 \u043E\u0442 \u0442\u043E\u043A\u0441\u0438\u043D\u043E\u0432'],
      ['\u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B \u041C\u0438\u0445\u0430\u0438\u043B','\u041C\u0438\u0445\u0430\u0438\u043B \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u0432\u0430\u0441'],
      ['\u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B \u0420\u0430\u0444\u0430\u0438\u043B','\u0420\u0430\u0444\u0430\u0438\u043B \u043D\u0435\u0441\u0451\u0442 \u0438\u0441\u0446\u0435\u043B\u0435\u043D\u0438\u0435 \u0432 \u0432\u0430\u0448\u0443 \u0436\u0438\u0437\u043D\u044C'],
      ['\u0413\u0440\u0430\u043D\u0438\u0446\u044B','\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0437\u0434\u043E\u0440\u043E\u0432\u044B\u0435 \u0433\u0440\u0430\u043D\u0438\u0446\u044B \u0441 \u043B\u044E\u0431\u043E\u0432\u044C\u044E'],
      ['\u0422\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u043E','\u0412\u044B\u0440\u0430\u0437\u0438\u0442\u0435 \u0441\u0435\u0431\u044F \u0447\u0435\u0440\u0435\u0437 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u043E. \u0410\u043D\u0433\u0435\u043B\u044B \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u043B\u044F\u044E\u0442']
    ],
    fr:[
      ['Gu\u00e9rison','Les anges vous envoient une \u00e9nergie de gu\u00e9rison. Ouvrez votre c\u0153ur'],
      ['Pardon','Laissez aller les ranc\u0153urs. Le pardon lib\u00e8re l\'\u00e2me'],
      ['Amour','L\'amour vous entoure. Ouvrez-vous \u00e0 de nouvelles relations'],
      ['Confiance','Faites confiance au Plan Divin. Tout arrive en son temps'],
      ['Paix','La paix vient de l\'int\u00e9rieur. Laissez aller les soucis'],
      ['Abondance','L\'Univers pr\u00e9pare des cadeaux pour vous. Acceptez-les avec gratitude'],
      ['Ange Gardien','Votre ange est proche. Vous \u00eates sous protection et guidance'],
      ['Courage','Les anges vous donnent la force. Agissez sans peur'],
      ['Gratitude','La gratitude ouvre de nouvelles b\u00e9n\u00e9dictions'],
      ['Patience','Chaque chose en son temps. Faites confiance au processus'],
      ['Foi','Renforcez votre foi. Les anges ne vous abandonneront pas'],
      ['Joie','La joie est votre \u00e9tat naturel. Permettez-vous le bonheur'],
      ['Sagesse','Les r\u00e9ponses sont d\u00e9j\u00e0 en vous. \u00c9coutez votre c\u0153ur'],
      ['Force','Vous \u00eates plus fort que vous ne pensez. Les anges vous soutiennent'],
      ['Miracle','Pr\u00e9parez-vous au miracle. Les anges travaillent sur votre pri\u00e8re'],
      ['Protection','Vous \u00eates en s\u00e9curit\u00e9. Les anges veillent sur vous'],
      ['Harmonie','L\'harmonie se r\u00e9tablit. Faites confiance au flux'],
      ['Nouveau D\u00e9part','Un nouveau chapitre commence. Laissez aller le pass\u00e9'],
      ['Guidance Divine','Les anges guident chacun de vos pas'],
      ['Compassion','Soyez mis\u00e9ricordieux envers vous-m\u00eame et les autres'],
      ['R\u00eave','Vos r\u00eaves se r\u00e9alisent. Continuez \u00e0 croire'],
      ['S\u00e9r\u00e9nit\u00e9','Trouvez la paix int\u00e9rieure. Tout va bien'],
      ['But','Vous \u00eates sur le bon chemin. Suivez l\'appel de votre \u00e2me'],
      ['B\u00e9n\u00e9diction','Les b\u00e9n\u00e9dictions se d\u00e9versent sur vous. Acceptez-les'],
      ['Clart\u00e9','La clart\u00e9 approche. Les r\u00e9ponses viendront \u00e0 vous'],
      ['Lib\u00e9ration','Laissez aller ce qui ne vous sert plus'],
      ['Transformation','Les changements apportent le bien. Acceptez le renouveau'],
      ['Pri\u00e8re','Vos pri\u00e8res sont entendues. La r\u00e9ponse est en chemin'],
      ['Intuition','Faites confiance \u00e0 votre voix int\u00e9rieure'],
      ['Espoir','L\'espoir \u00e9claire votre chemin. La lumi\u00e8re est devant'],
      ['Gr\u00e2ce','La gr\u00e2ce divine descend sur vous'],
      ['V\u00e9rit\u00e9','Soyez honn\u00eate avec vous-m\u00eame et le monde'],
      ['L\u00e2cher-prise','Laissez aller le contr\u00f4le. Permettez aux anges d\'aider'],
      ['Enfant Int\u00e9rieur','Gu\u00e9rissez votre enfant int\u00e9rieur'],
      ['M\u00e9ditation','Le silence ouvre les portes aux anges'],
      ['Destin\u00e9e','Vous accomplissez votre destin\u00e9e'],
      ['\u00c9quilibre','Trouvez l\'\u00e9quilibre en tout. Harmonie int\u00e9rieure et ext\u00e9rieure'],
      ['Lumi\u00e8re','Vous portez la lumi\u00e8re. Laissez-la briller'],
      ['\u00c2me S\u0153ur','Une \u00e2me s\u0153ur est proche. Ouvrez votre c\u0153ur'],
      ['D\u00e9tox','Purifiez corps, esprit et \u00e2me des toxines'],
      ['Archange Michel','Michel vous prot\u00e8ge et vous guide'],
      ['Archange Rapha\u00ebl','Rapha\u00ebl apporte la gu\u00e9rison dans votre vie'],
      ['Limites','\u00c9tablissez des limites saines avec amour'],
      ['Cr\u00e9ativit\u00e9','Exprimez-vous par la cr\u00e9ativit\u00e9. Les anges inspirent']
    ],
    es:[
      ['Sanaci\u00f3n','Los \u00e1ngeles te env\u00edan energ\u00eda sanadora. Abre tu coraz\u00f3n'],
      ['Perd\u00f3n','Suelta los rencores y la ira. El perd\u00f3n libera el alma'],
      ['Amor','El amor te rodea. \u00c1brete a nuevas relaciones'],
      ['Confianza','Conf\u00eda en el Plan Divino. Todo sucede a su tiempo'],
      ['Paz','La paz viene de adentro. Suelta las preocupaciones'],
      ['Abundancia','El Universo prepara regalos para ti. Ac\u00e9ptalos con gratitud'],
      ['\u00c1ngel Guardi\u00e1n','Tu \u00e1ngel est\u00e1 cerca. Est\u00e1s bajo protecci\u00f3n y gu\u00eda'],
      ['Valent\u00eda','Los \u00e1ngeles te dan fuerza. Act\u00faa sin miedo'],
      ['Gratitud','La gratitud abre nuevas bendiciones'],
      ['Paciencia','Todo tiene su momento. Conf\u00eda en el proceso'],
      ['Fe','Fortalece tu fe. Los \u00e1ngeles no te abandonar\u00e1n'],
      ['Alegr\u00eda','La alegr\u00eda es tu estado natural. Perm\u00edtete la felicidad'],
      ['Sabidur\u00eda','Las respuestas ya est\u00e1n dentro de ti. Escucha tu coraz\u00f3n'],
      ['Fuerza','Eres m\u00e1s fuerte de lo que piensas. Los \u00e1ngeles te apoyan'],
      ['Milagro','Prep\u00e1rate para un milagro. Los \u00e1ngeles trabajan en tu oraci\u00f3n'],
      ['Protecci\u00f3n','Est\u00e1s a salvo. Los \u00e1ngeles te cuidan'],
      ['Armon\u00eda','La armon\u00eda se restaura. Conf\u00eda en el flujo'],
      ['Nuevo Comienzo','Un nuevo cap\u00edtulo comienza. Suelta el pasado'],
      ['Gu\u00eda Divina','Los \u00e1ngeles gu\u00edan cada uno de tus pasos'],
      ['Compasi\u00f3n','S\u00e9 compasivo contigo mismo y con los dem\u00e1s'],
      ['Sue\u00f1o','Tus sue\u00f1os se hacen realidad. Sigue creyendo'],
      ['Serenidad','Encuentra la paz interior. Todo est\u00e1 bien'],
      ['Prop\u00f3sito','Est\u00e1s en el camino correcto. Sigue el llamado de tu alma'],
      ['Bendici\u00f3n','Las bendiciones se derraman sobre ti. Ac\u00e9ptalas'],
      ['Claridad','La claridad est\u00e1 cerca. Las respuestas vendr\u00e1n a ti'],
      ['Liberaci\u00f3n','Suelta lo que ya no te sirve'],
      ['Transformaci\u00f3n','Los cambios traen el bien. Acepta la renovaci\u00f3n'],
      ['Oraci\u00f3n','Tus oraciones son escuchadas. La respuesta est\u00e1 en camino'],
      ['Intuici\u00f3n','Conf\u00eda en tu voz interior'],
      ['Esperanza','La esperanza ilumina tu camino. La luz est\u00e1 adelante'],
      ['Gracia','La gracia divina desciende sobre ti'],
      ['Verdad','S\u00e9 honesto contigo mismo y con el mundo'],
      ['Entrega','Suelta el control. Permite que los \u00e1ngeles ayuden'],
      ['Ni\u00f1o Interior','Sana a tu ni\u00f1o interior'],
      ['Meditaci\u00f3n','El silencio abre puertas a los \u00e1ngeles'],
      ['Destino','Est\u00e1s cumpliendo tu prop\u00f3sito'],
      ['Equilibrio','Encuentra el equilibrio en todo. Armon\u00eda interior y exterior'],
      ['Luz','Llevas luz. D\u00e9jala brillar'],
      ['Alma Gemela','Un alma gemela est\u00e1 cerca. Abre tu coraz\u00f3n'],
      ['Desintoxicaci\u00f3n','Limpia cuerpo, mente y alma de toxinas'],
      ['Arc\u00e1ngel Miguel','Miguel te protege y te gu\u00eda'],
      ['Arc\u00e1ngel Rafael','Rafael trae sanaci\u00f3n a tu vida'],
      ['L\u00edmites','Establece l\u00edmites saludables con amor'],
      ['Creatividad','Expr\u00e9sate a trav\u00e9s de la creatividad. Los \u00e1ngeles inspiran']
    ],
    de:[
      ['Heilung','Die Engel senden Ihnen heilende Energie. \u00d6ffnen Sie Ihr Herz'],
      ['Vergebung','Lassen Sie Groll und Zorn los. Vergebung befreit die Seele'],
      ['Liebe','Liebe umgibt Sie. \u00d6ffnen Sie sich f\u00fcr neue Beziehungen'],
      ['Vertrauen','Vertrauen Sie dem g\u00f6ttlichen Plan. Alles geschieht zur rechten Zeit'],
      ['Frieden','Frieden kommt von innen. Lassen Sie die Sorgen los'],
      ['F\u00fclle','Das Universum bereitet Geschenke f\u00fcr Sie vor. Nehmen Sie sie dankbar an'],
      ['Schutzengel','Ihr Engel ist nah. Sie stehen unter Schutz und F\u00fchrung'],
      ['Mut','Die Engel geben Ihnen Kraft. Handeln Sie ohne Angst'],
      ['Dankbarkeit','Dankbarkeit \u00f6ffnet neue Segnungen'],
      ['Geduld','Alles hat seine Zeit. Vertrauen Sie dem Prozess'],
      ['Glaube','St\u00e4rken Sie Ihren Glauben. Die Engel werden Sie nicht verlassen'],
      ['Freude','Freude ist Ihr nat\u00fcrlicher Zustand. Erlauben Sie sich Gl\u00fcck'],
      ['Weisheit','Die Antworten sind bereits in Ihnen. H\u00f6ren Sie auf Ihr Herz'],
      ['St\u00e4rke','Sie sind st\u00e4rker als Sie denken. Die Engel unterst\u00fctzen Sie'],
      ['Wunder','Bereiten Sie sich auf ein Wunder vor. Die Engel arbeiten an Ihrem Gebet'],
      ['Schutz','Sie sind sicher. Die Engel besch\u00fctzen Sie'],
      ['Harmonie','Harmonie wird wiederhergestellt. Vertrauen Sie dem Fluss'],
      ['Neubeginn','Ein neues Kapitel beginnt. Lassen Sie die Vergangenheit los'],
      ['G\u00f6ttliche F\u00fchrung','Die Engel leiten jeden Ihrer Schritte'],
      ['Mitgef\u00fchl','Seien Sie barmherzig mit sich selbst und anderen'],
      ['Traum','Ihre Tr\u00e4ume werden wahr. Glauben Sie weiter'],
      ['Gelassenheit','Finden Sie inneren Frieden. Alles ist gut'],
      ['Bestimmung','Sie sind auf dem richtigen Weg. Folgen Sie dem Ruf Ihrer Seele'],
      ['Segen','Segnungen ergie\u00dfen sich \u00fcber Sie. Nehmen Sie sie an'],
      ['Klarheit','Klarheit ist nah. Antworten werden zu Ihnen kommen'],
      ['Befreiung','Lassen Sie los, was Ihnen nicht mehr dient'],
      ['Transformation','Ver\u00e4nderungen bringen Gutes. Nehmen Sie die Erneuerung an'],
      ['Gebet','Ihre Gebete werden geh\u00f6rt. Die Antwort ist unterwegs'],
      ['Intuition','Vertrauen Sie Ihrer inneren Stimme'],
      ['Hoffnung','Hoffnung erhellt Ihren Weg. Licht liegt voraus'],
      ['Gnade','G\u00f6ttliche Gnade kommt auf Sie herab'],
      ['Wahrheit','Seien Sie ehrlich mit sich selbst und der Welt'],
      ['Hingabe','Lassen Sie die Kontrolle los. Erlauben Sie den Engeln zu helfen'],
      ['Inneres Kind','Heilen Sie Ihr inneres Kind'],
      ['Meditation','Stille \u00f6ffnet T\u00fcren zu den Engeln'],
      ['Schicksal','Sie erf\u00fcllen Ihre Bestimmung'],
      ['Gleichgewicht','Finden Sie Balance in allem. Harmonie innen und au\u00dfen'],
      ['Licht','Sie tragen Licht. Lassen Sie es leuchten'],
      ['Seelenverwandte','Eine verwandte Seele ist nah. \u00d6ffnen Sie Ihr Herz'],
      ['Entgiftung','Reinigen Sie K\u00f6rper, Geist und Seele von Giften'],
      ['Erzengel Michael','Michael besch\u00fctzt und f\u00fchrt Sie'],
      ['Erzengel Raphael','Raphael bringt Heilung in Ihr Leben'],
      ['Grenzen','Setzen Sie gesunde Grenzen mit Liebe'],
      ['Kreativit\u00e4t','Dr\u00fccken Sie sich durch Kreativit\u00e4t aus. Die Engel inspirieren']
    ],
    it:[
      ['Guarigione','Gli angeli ti inviano energia di guarigione. Apri il tuo cuore'],
      ['Perdono','Lascia andare rancori e rabbia. Il perdono libera l\'anima'],
      ['Amore','L\'amore ti circonda. Apriti a nuove relazioni'],
      ['Fiducia','Fidati del Piano Divino. Tutto accade al momento giusto'],
      ['Pace','La pace viene dall\'interno. Lascia andare le preoccupazioni'],
      ['Abbondanza','L\'Universo prepara doni per te. Accettali con gratitudine'],
      ['Angelo Custode','Il tuo angelo \u00e8 vicino. Sei sotto protezione e guida'],
      ['Coraggio','Gli angeli ti danno forza. Agisci senza paura'],
      ['Gratitudine','La gratitudine apre nuove benedizioni'],
      ['Pazienza','Ogni cosa ha il suo tempo. Fidati del processo'],
      ['Fede','Rafforza la tua fede. Gli angeli non ti lasceranno'],
      ['Gioia','La gioia \u00e8 il tuo stato naturale. Concediti la felicit\u00e0'],
      ['Saggezza','Le risposte sono gi\u00e0 dentro di te. Ascolta il tuo cuore'],
      ['Forza','Sei pi\u00f9 forte di quanto pensi. Gli angeli ti sostengono'],
      ['Miracolo','Preparati al miracolo. Gli angeli lavorano sulla tua preghiera'],
      ['Protezione','Sei al sicuro. Gli angeli vegliano su di te'],
      ['Armonia','L\'armonia si ristabilisce. Fidati del flusso'],
      ['Nuovo Inizio','Un nuovo capitolo inizia. Lascia andare il passato'],
      ['Guida Divina','Gli angeli guidano ogni tuo passo'],
      ['Compassione','Sii compassionevole con te stesso e gli altri'],
      ['Sogno','I tuoi sogni si avverano. Continua a credere'],
      ['Serenit\u00e0','Trova la pace interiore. Tutto va bene'],
      ['Scopo','Sei sulla strada giusta. Segui la chiamata della tua anima'],
      ['Benedizione','Le benedizioni si riversano su di te. Accettale'],
      ['Chiarezza','La chiarezza \u00e8 vicina. Le risposte verranno a te'],
      ['Liberazione','Lascia andare ci\u00f2 che non ti serve pi\u00f9'],
      ['Trasformazione','I cambiamenti portano il bene. Accetta il rinnovamento'],
      ['Preghiera','Le tue preghiere sono ascoltate. La risposta \u00e8 in arrivo'],
      ['Intuizione','Fidati della tua voce interiore'],
      ['Speranza','La speranza illumina il tuo cammino. La luce \u00e8 davanti'],
      ['Grazia','La grazia divina discende su di te'],
      ['Verit\u00e0','Sii onesto con te stesso e il mondo'],
      ['Resa','Lascia andare il controllo. Permetti agli angeli di aiutare'],
      ['Bambino Interiore','Guarisci il tuo bambino interiore'],
      ['Meditazione','Il silenzio apre le porte agli angeli'],
      ['Destino','Stai compiendo il tuo destino'],
      ['Equilibrio','Trova l\'equilibrio in tutto. Armonia dentro e fuori'],
      ['Luce','Porti luce. Lasciala risplendere'],
      ['Anima Gemella','Un\'anima gemella \u00e8 vicina. Apri il tuo cuore'],
      ['Disintossicazione','Purifica corpo, mente e anima dalle tossine'],
      ['Arcangelo Michele','Michele ti protegge e ti guida'],
      ['Arcangelo Raffaele','Raffaele porta guarigione nella tua vita'],
      ['Confini','Stabilisci confini sani con amore'],
      ['Creativit\u00e0','Esprimi te stesso attraverso la creativit\u00e0. Gli angeli ispirano']
    ],
    ro:[
      ['Vindecare','\u00cengerii \u00ee\u021bi trimit energie de vindecare. Deschide-\u021bi inima'],
      ['Iertare','Las\u0103 s\u0103 plece resentimentele. Iertarea elibereaz\u0103 sufletul'],
      ['Dragoste','Dragostea te \u00eenconjoar\u0103. Deschide-te pentru rela\u021bii noi'],
      ['\u00cencredere','Ai \u00eencredere \u00een Planul Divin. Totul se \u00eent\u00e2mpl\u0103 la momentul potrivit'],
      ['Pace','Pacea vine din interior. Las\u0103 grijile s\u0103 plece'],
      ['Abundan\u021b\u0103','Universul preg\u0103te\u0219te daruri pentru tine. Accept\u0103-le cu recuno\u0219tin\u021b\u0103'],
      ['\u00cengerul P\u0103zitor','\u00cengerul t\u0103u este aproape. E\u0219ti sub protec\u021bie \u0219i ghidare'],
      ['Curaj','\u00cengerii \u00ee\u021bi dau putere. Ac\u021bioneaz\u0103 f\u0103r\u0103 fric\u0103'],
      ['Recuno\u0219tin\u021b\u0103','Recuno\u0219tin\u021ba deschide noi binecuv\u00e2nt\u0103ri'],
      ['R\u0103bdare','Toate au timpul lor. Ai \u00eencredere \u00een proces'],
      ['Credin\u021b\u0103','\u00cent\u0103re\u0219te-\u021bi credin\u021ba. \u00cengerii nu te vor p\u0103r\u0103si'],
      ['Bucurie','Bucuria este starea ta natural\u0103. Permite-\u021bi fericirea'],
      ['\u00cen\u021belepciune','R\u0103spunsurile sunt deja \u00een tine. Ascult\u0103-\u021bi inima'],
      ['Putere','E\u0219ti mai puternic dec\u00e2t crezi. \u00cengerii te sus\u021bin'],
      ['Miracol','Preg\u0103te\u0219te-te pentru un miracol. \u00cengerii lucreaz\u0103 la rug\u0103ciunea ta'],
      ['Protec\u021bie','E\u0219ti \u00een siguran\u021b\u0103. \u00cengerii te ocrotesc'],
      ['Armonie','Armonia se restabile\u0219te. Ai \u00eencredere \u00een flux'],
      ['Nou \u00cenceput','Un nou capitol \u00eencepe. Las\u0103 trecutul s\u0103 plece'],
      ['Ghidare Divin\u0103','\u00cengerii \u00ee\u021bi ghideaz\u0103 fiecare pas'],
      ['Compasiune','Fii milostiv cu tine \u0219i cu ceilal\u021bi'],
      ['Vis','Visele tale se \u00eemplinesc. Continu\u0103 s\u0103 crezi'],
      ['Serenitate','G\u0103se\u0219te pacea interioar\u0103. Totul este bine'],
      ['Scop','E\u0219ti pe drumul corect. Urmeaz\u0103 chemarea sufletului'],
      ['Binecuv\u00e2ntare','Binecuv\u00e2nt\u0103rile se revars\u0103 asupra ta. Accept\u0103-le'],
      ['Claritate','Claritatea este aproape. R\u0103spunsurile vor veni la tine'],
      ['Eliberare','Las\u0103 s\u0103 plece ceea ce nu te mai serve\u0219te'],
      ['Transformare','Schimb\u0103rile aduc binele. Accept\u0103 re\u00eennoirea'],
      ['Rug\u0103ciune','Rug\u0103ciunile tale sunt auzite. R\u0103spunsul este pe drum'],
      ['Intui\u021bie','Ai \u00eencredere \u00een vocea ta interioar\u0103'],
      ['Speran\u021b\u0103','Speran\u021ba \u00ee\u021bi lumineaz\u0103 calea. Lumina este \u00eenainte'],
      ['Har','Harul divin coboar\u0103 asupra ta'],
      ['Adev\u0103r','Fii sincer cu tine \u0219i cu lumea'],
      ['Acceptare','Las\u0103 controlul s\u0103 plece. Permite \u00eengerilor s\u0103 ajute'],
      ['Copilul Interior','Vindec\u0103-\u021bi copilul interior'],
      ['Medita\u021bie','Lini\u0219tea deschide u\u0219i c\u0103tre \u00eengeri'],
      ['Destin','\u00ce\u021bi \u00eempline\u0219ti destinul'],
      ['Echilibru','G\u0103se\u0219te echilibrul \u00een toate. Armonie \u00een\u0103untru \u0219i \u00een afar\u0103'],
      ['Lumin\u0103','Por\u021bi lumin\u0103. Las-o s\u0103 str\u0103luceasc\u0103'],
      ['Suflet Pereche','Un suflet pereche este aproape. Deschide-\u021bi inima'],
      ['Detoxifiere','Cur\u0103\u021b\u0103 corpul, mintea \u0219i sufletul de toxine'],
      ['Arhanghelul Mihail','Mihail te protejeaz\u0103 \u0219i te ghideaz\u0103'],
      ['Arhanghelul Rafael','Rafael aduce vindecare \u00een via\u021ba ta'],
      ['Limite','Stabile\u0219te limite s\u0103n\u0103toase cu dragoste'],
      ['Creativitate','Exprim\u0103-te prin creativitate. \u00cengerii inspir\u0103']
    ]
  };

  // ── Tarot 22: [localName, meaning, reversed, desc] ──
  var TAROT_I18N = {
    en:[
      ['The Fool','New beginnings, innocence, spontaneity, free spirit','Recklessness, risk-taking, holding back','A leap of faith into the unknown'],
      ['The Magician','Willpower, creation, manifestation, resourcefulness','Manipulation, untapped talents, trickery','You have all the tools you need'],
      ['The High Priestess','Intuition, mystery, inner knowledge, the subconscious','Secrets, withdrawal, silence','Trust your inner voice'],
      ['The Empress','Abundance, nurturing, fertility, nature, beauty','Dependence, smothering, creative block','Embrace abundance and growth'],
      ['The Emperor','Authority, structure, stability, leadership','Tyranny, rigidity, domination','Build your empire with discipline'],
      ['The Hierophant','Tradition, spiritual wisdom, conformity, education','Rebellion, subversiveness, new approaches','Seek deeper spiritual meaning'],
      ['The Lovers','Love, harmony, partnerships, choices, alignment','Disharmony, imbalance, misalignment','Choose with your heart and soul'],
      ['The Chariot','Determination, willpower, triumph, control','Lack of direction, aggression, no control','Victory through focused will'],
      ['Strength','Courage, inner strength, compassion, patience','Self-doubt, weakness, insecurity','Gentle power overcomes all'],
      ['The Hermit','Soul-searching, introspection, solitude, inner guidance','Isolation, loneliness, withdrawal','Light the way from within'],
      ['Wheel of Fortune','Change, cycles, fate, turning point, luck','Bad luck, resistance to change, breaking cycles','The wheel turns \u2014 embrace change'],
      ['Justice','Fairness, truth, law, cause and effect, clarity','Unfairness, dishonesty, lack of accountability','Truth and balance prevail'],
      ['The Hanged Man','Surrender, letting go, new perspective, pause','Stalling, resistance, indecision','Surrender to gain new vision'],
      ['Death','Endings, transformation, transition, release','Resistance to change, stagnation, decay','Transform and be reborn'],
      ['Temperance','Balance, patience, moderation, harmony, purpose','Imbalance, excess, lack of long-term vision','Find your perfect balance'],
      ['The Devil','Shadow self, attachment, addiction, restriction','Releasing limiting beliefs, freedom, reclaiming power','Break free from your chains'],
      ['The Tower','Upheaval, revelation, sudden change, awakening','Averting disaster, fear of change, delaying','Destruction creates space for truth'],
      ['The Star','Hope, faith, renewal, serenity, inspiration','Lack of faith, despair, disconnection','Hope shines in the darkness'],
      ['The Moon','Illusion, fear, anxiety, intuition, the subconscious','Release of fear, repressed emotion, clarity','Navigate through illusion to truth'],
      ['The Sun','Joy, success, vitality, positivity, warmth','Inner child, feeling down, overly optimistic','Radiant joy illuminates your path'],
      ['Judgement','Reflection, reckoning, inner calling, absolution','Self-doubt, inner critic, ignoring the call','Answer your higher calling'],
      ['The World','Completion, accomplishment, wholeness, travel','Incompletion, shortcuts, seeking personal closure','You have arrived \u2014 celebrate']
    ],
    ru:[
      ['\u0428\u0443\u0442','\u041D\u043E\u0432\u044B\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u043D\u0438\u044F, \u043D\u0435\u0432\u0438\u043D\u043D\u043E\u0441\u0442\u044C, \u0441\u043F\u043E\u043D\u0442\u0430\u043D\u043D\u043E\u0441\u0442\u044C','\u0411\u0435\u0437\u0440\u0430\u0441\u0441\u0443\u0434\u0441\u0442\u0432\u043E, \u0440\u0438\u0441\u043A, \u0441\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u043D\u0438\u0435','\u041F\u0440\u044B\u0436\u043E\u043A \u0432\u0435\u0440\u044B \u0432 \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0435'],
      ['\u041C\u0430\u0433','\u0421\u0438\u043B\u0430 \u0432\u043E\u043B\u0438, \u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0435, \u043F\u0440\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0435','\u041C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0446\u0438\u044F, \u043D\u0435\u0440\u0430\u0441\u043A\u0440\u044B\u0442\u044B\u0435 \u0442\u0430\u043B\u0430\u043D\u0442\u044B, \u043E\u0431\u043C\u0430\u043D','\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B'],
      ['\u0412\u0435\u0440\u0445\u043E\u0432\u043D\u0430\u044F \u0416\u0440\u0438\u0446\u0430','\u0418\u043D\u0442\u0443\u0438\u0446\u0438\u044F, \u0442\u0430\u0439\u043D\u0430, \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0435 \u0437\u043D\u0430\u043D\u0438\u0435','\u0421\u0435\u043A\u0440\u0435\u0442\u044B, \u043E\u0442\u0441\u0442\u0440\u0430\u043D\u0451\u043D\u043D\u043E\u0441\u0442\u044C, \u043C\u043E\u043B\u0447\u0430\u043D\u0438\u0435','\u0414\u043E\u0432\u0435\u0440\u044C\u0442\u0435\u0441\u044C \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u043C\u0443 \u0433\u043E\u043B\u043E\u0441\u0443'],
      ['\u0418\u043C\u043F\u0435\u0440\u0430\u0442\u0440\u0438\u0446\u0430','\u0418\u0437\u043E\u0431\u0438\u043B\u0438\u0435, \u0437\u0430\u0431\u043E\u0442\u0430, \u043F\u043B\u043E\u0434\u043E\u0440\u043E\u0434\u0438\u0435, \u043A\u0440\u0430\u0441\u043E\u0442\u0430','\u0417\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u044C, \u0443\u0434\u0443\u0448\u044C\u0435, \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u0431\u043B\u043E\u043A','\u041F\u0440\u0438\u043C\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0438\u043B\u0438\u0435 \u0438 \u0440\u043E\u0441\u0442'],
      ['\u0418\u043C\u043F\u0435\u0440\u0430\u0442\u043E\u0440','\u0410\u0432\u0442\u043E\u0440\u0438\u0442\u0435\u0442, \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430, \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043B\u0438\u0434\u0435\u0440\u0441\u0442\u0432\u043E','\u0422\u0438\u0440\u0430\u043D\u0438\u044F, \u0436\u0451\u0441\u0442\u043A\u043E\u0441\u0442\u044C, \u0434\u043E\u043C\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435','\u0421\u0442\u0440\u043E\u0439\u0442\u0435 \u0441\u0432\u043E\u044E \u0438\u043C\u043F\u0435\u0440\u0438\u044E \u0441 \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u043E\u0439'],
      ['\u0418\u0435\u0440\u043E\u0444\u0430\u043D\u0442','\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u044F, \u0434\u0443\u0445\u043E\u0432\u043D\u0430\u044F \u043C\u0443\u0434\u0440\u043E\u0441\u0442\u044C, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435','\u0411\u0443\u043D\u0442\u0430\u0440\u0441\u0442\u0432\u043E, \u043F\u043E\u0434\u0440\u044B\u0432\u043D\u043E\u0441\u0442\u044C, \u043D\u043E\u0432\u044B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044B','\u0418\u0449\u0438\u0442\u0435 \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0439 \u0434\u0443\u0445\u043E\u0432\u043D\u044B\u0439 \u0441\u043C\u044B\u0441\u043B'],
      ['\u0412\u043B\u044E\u0431\u043B\u0451\u043D\u043D\u044B\u0435','\u041B\u044E\u0431\u043E\u0432\u044C, \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u044F, \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0441\u0442\u0432\u043E, \u0432\u044B\u0431\u043E\u0440','\u0414\u0438\u0441\u0433\u0430\u0440\u043C\u043E\u043D\u0438\u044F, \u0434\u0438\u0441\u0431\u0430\u043B\u0430\u043D\u0441, \u043D\u0435\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435','\u0412\u044B\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0441\u0435\u0440\u0434\u0446\u0435\u043C \u0438 \u0434\u0443\u0448\u043E\u0439'],
      ['\u041A\u043E\u043B\u0435\u0441\u043D\u0438\u0446\u0430','\u0420\u0435\u0448\u0438\u043C\u043E\u0441\u0442\u044C, \u0441\u0438\u043B\u0430 \u0432\u043E\u043B\u0438, \u0442\u0440\u0438\u0443\u043C\u0444, \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C','\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u044F','\u041F\u043E\u0431\u0435\u0434\u0430 \u0447\u0435\u0440\u0435\u0437 \u0441\u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0432\u043E\u043B\u044E'],
      ['\u0421\u0438\u043B\u0430','\u041C\u0443\u0436\u0435\u0441\u0442\u0432\u043E, \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u0441\u0438\u043B\u0430, \u0441\u043E\u0441\u0442\u0440\u0430\u0434\u0430\u043D\u0438\u0435','\u041D\u0435\u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C, \u0441\u043B\u0430\u0431\u043E\u0441\u0442\u044C, \u043D\u0435\u0437\u0430\u0449\u0438\u0449\u0451\u043D\u043D\u043E\u0441\u0442\u044C','\u041C\u044F\u0433\u043A\u0430\u044F \u0441\u0438\u043B\u0430 \u043F\u043E\u0431\u0435\u0436\u0434\u0430\u0435\u0442 \u0432\u0441\u0451'],
      ['\u041E\u0442\u0448\u0435\u043B\u044C\u043D\u0438\u043A','\u041F\u043E\u0438\u0441\u043A \u0434\u0443\u0448\u0438, \u0441\u0430\u043C\u043E\u0430\u043D\u0430\u043B\u0438\u0437, \u043E\u0434\u0438\u043D\u043E\u0447\u0435\u0441\u0442\u0432\u043E','\u0418\u0437\u043E\u043B\u044F\u0446\u0438\u044F, \u043E\u0434\u0438\u043D\u043E\u0447\u0435\u0441\u0442\u0432\u043E, \u0437\u0430\u043C\u043A\u043D\u0443\u0442\u043E\u0441\u0442\u044C','\u041E\u0441\u0432\u0435\u0442\u0438\u0442\u0435 \u043F\u0443\u0442\u044C \u0438\u0437\u043D\u0443\u0442\u0440\u0438'],
      ['\u041A\u043E\u043B\u0435\u0441\u043E \u0424\u043E\u0440\u0442\u0443\u043D\u044B','\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u044B, \u0446\u0438\u043A\u043B\u044B, \u0441\u0443\u0434\u044C\u0431\u0430, \u0443\u0434\u0430\u0447\u0430','\u041D\u0435\u0443\u0434\u0430\u0447\u0430, \u0441\u043E\u043F\u0440\u043E\u0442\u0438\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u0430\u043C','\u041A\u043E\u043B\u0435\u0441\u043E \u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u2014 \u043F\u0440\u0438\u043C\u0438\u0442\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u044B'],
      ['\u0421\u043F\u0440\u0430\u0432\u0435\u0434\u043B\u0438\u0432\u043E\u0441\u0442\u044C','\u0427\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044C, \u0438\u0441\u0442\u0438\u043D\u0430, \u0437\u0430\u043A\u043E\u043D, \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u0438 \u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0435','\u041D\u0435\u0441\u043F\u0440\u0430\u0432\u0435\u0434\u043B\u0438\u0432\u043E\u0441\u0442\u044C, \u043D\u0435\u0447\u0435\u0441\u0442\u043D\u043E\u0441\u0442\u044C','\u0418\u0441\u0442\u0438\u043D\u0430 \u0438 \u0431\u0430\u043B\u0430\u043D\u0441 \u0442\u043E\u0440\u0436\u0435\u0441\u0442\u0432\u0443\u044E\u0442'],
      ['\u041F\u043E\u0432\u0435\u0448\u0435\u043D\u043D\u044B\u0439','\u041A\u0430\u043F\u0438\u0442\u0443\u043B\u044F\u0446\u0438\u044F, \u043E\u0442\u043F\u0443\u0441\u043A\u0430\u043D\u0438\u0435, \u043D\u043E\u0432\u0430\u044F \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0430','\u0417\u0430\u0441\u0442\u043E\u0439, \u0441\u043E\u043F\u0440\u043E\u0442\u0438\u0432\u043B\u0435\u043D\u0438\u0435, \u043D\u0435\u0440\u0435\u0448\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C','\u0421\u0434\u0430\u0439\u0442\u0435\u0441\u044C, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u043D\u043E\u0432\u043E\u0435 \u0432\u0438\u0434\u0435\u043D\u0438\u0435'],
      ['\u0421\u043C\u0435\u0440\u0442\u044C','\u041E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F, \u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043F\u0435\u0440\u0435\u0445\u043E\u0434','\u0421\u043E\u043F\u0440\u043E\u0442\u0438\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u0430\u043C, \u0437\u0430\u0441\u0442\u043E\u0439, \u0440\u0430\u0441\u043F\u0430\u0434','\u0422\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u0438 \u043F\u0435\u0440\u0435\u0440\u043E\u0434\u0438\u0442\u0435\u0441\u044C'],
      ['\u0423\u043C\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C','\u0411\u0430\u043B\u0430\u043D\u0441, \u0442\u0435\u0440\u043F\u0435\u043D\u0438\u0435, \u0443\u043C\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C, \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u044F','\u0414\u0438\u0441\u0431\u0430\u043B\u0430\u043D\u0441, \u0438\u0437\u0431\u044B\u0442\u043E\u043A, \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0432\u0438\u0434\u0435\u043D\u0438\u044F','\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0431\u0430\u043B\u0430\u043D\u0441'],
      ['\u0414\u044C\u044F\u0432\u043E\u043B','\u0422\u0435\u043D\u0435\u0432\u043E\u0435 \u00AB\u044F\u00BB, \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u044C, \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u044C','\u041E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0435\u043D\u0438\u0435, \u0441\u0432\u043E\u0431\u043E\u0434\u0430, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0441\u0438\u043B\u044B','\u041E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0442\u0435\u0441\u044C \u043E\u0442 \u0441\u0432\u043E\u0438\u0445 \u0446\u0435\u043F\u0435\u0439'],
      ['\u0411\u0430\u0448\u043D\u044F','\u041F\u043E\u0442\u0440\u044F\u0441\u0435\u043D\u0438\u0435, \u043E\u0442\u043A\u0440\u043E\u0432\u0435\u043D\u0438\u0435, \u0432\u043D\u0435\u0437\u0430\u043F\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u0430','\u041F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u043A\u0430\u0442\u0430\u0441\u0442\u0440\u043E\u0444\u044B, \u0441\u0442\u0440\u0430\u0445 \u043F\u0435\u0440\u0435\u043C\u0435\u043D','\u0420\u0430\u0437\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0434\u043B\u044F \u0438\u0441\u0442\u0438\u043D\u044B'],
      ['\u0417\u0432\u0435\u0437\u0434\u0430','\u041D\u0430\u0434\u0435\u0436\u0434\u0430, \u0432\u0435\u0440\u0430, \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435, \u043F\u043E\u043A\u043E\u0439','\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0432\u0435\u0440\u044B, \u043E\u0442\u0447\u0430\u044F\u043D\u0438\u0435','\u041D\u0430\u0434\u0435\u0436\u0434\u0430 \u0441\u0438\u044F\u0435\u0442 \u0432\u043E \u0442\u044C\u043C\u0435'],
      ['\u041B\u0443\u043D\u0430','\u0418\u043B\u043B\u044E\u0437\u0438\u044F, \u0441\u0442\u0440\u0430\u0445, \u0442\u0440\u0435\u0432\u043E\u0433\u0430, \u0438\u043D\u0442\u0443\u0438\u0446\u0438\u044F','\u041E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043E\u0442 \u0441\u0442\u0440\u0430\u0445\u0430, \u044F\u0441\u043D\u043E\u0441\u0442\u044C','\u041F\u0440\u043E\u0439\u0434\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 \u0438\u043B\u043B\u044E\u0437\u0438\u044E \u043A \u0438\u0441\u0442\u0438\u043D\u0435'],
      ['\u0421\u043E\u043B\u043D\u0446\u0435','\u0420\u0430\u0434\u043E\u0441\u0442\u044C, \u0443\u0441\u043F\u0435\u0445, \u0436\u0438\u0437\u043D\u0435\u043D\u043D\u0430\u044F \u0441\u0438\u043B\u0430, \u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C','\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \u0440\u0435\u0431\u0451\u043D\u043E\u043A, \u043F\u043E\u0434\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u044C','\u0421\u0438\u044F\u044E\u0449\u0430\u044F \u0440\u0430\u0434\u043E\u0441\u0442\u044C \u043E\u0437\u0430\u0440\u044F\u0435\u0442 \u0432\u0430\u0448 \u043F\u0443\u0442\u044C'],
      ['\u0421\u0443\u0434','\u0420\u0430\u0437\u043C\u044B\u0448\u043B\u0435\u043D\u0438\u044F, \u0440\u0430\u0441\u043F\u043B\u0430\u0442\u0430, \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \u043F\u0440\u0438\u0437\u044B\u0432','\u041D\u0435\u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C, \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \u043A\u0440\u0438\u0442\u0438\u043A','\u041E\u0442\u0432\u0435\u0442\u044C\u0442\u0435 \u043D\u0430 \u0432\u044B\u0441\u0448\u0438\u0439 \u043F\u0440\u0438\u0437\u044B\u0432'],
      ['\u041C\u0438\u0440','\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435, \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0435, \u0446\u0435\u043B\u043E\u0441\u0442\u043D\u043E\u0441\u0442\u044C','\u041D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u043E\u0441\u0442\u044C, \u0441\u0440\u0435\u0437\u0430\u043D\u0438\u0435 \u043F\u0443\u0442\u0438','\u0412\u044B \u043F\u0440\u0438\u0431\u044B\u043B\u0438 \u2014 \u043F\u0440\u0430\u0437\u0434\u043D\u0443\u0439\u0442\u0435']
    ],
    fr:[
      ['Le Mat','Nouveaux d\u00e9parts, innocence, spontan\u00e9it\u00e9','Imprudence, prise de risque, retenue','Un saut de foi dans l\'inconnu'],
      ['Le Magicien','Volont\u00e9, cr\u00e9ation, manifestation','Manipulation, talents inexploit\u00e9s','Vous avez tous les outils n\u00e9cessaires'],
      ['La Papesse','Intuition, myst\u00e8re, savoir int\u00e9rieur','Secrets, retrait, silence','Faites confiance \u00e0 votre voix int\u00e9rieure'],
      ['L\'Imp\u00e9ratrice','Abondance, maternit\u00e9, fertilit\u00e9, beaut\u00e9','D\u00e9pendance, \u00e9touffement, blocage cr\u00e9atif','Embrassez l\'abondance et la croissance'],
      ['L\'Empereur','Autorit\u00e9, structure, stabilit\u00e9, leadership','Tyrannie, rigidit\u00e9, domination','Construisez votre empire avec discipline'],
      ['Le Hi\u00e9rophante','Tradition, sagesse spirituelle, conformit\u00e9','R\u00e9bellion, subversion, nouvelles approches','Cherchez un sens spirituel profond'],
      ['Les Amoureux','Amour, harmonie, partenariat, choix','Disharmonie, d\u00e9s\u00e9quilibre','Choisissez avec votre c\u0153ur et votre \u00e2me'],
      ['Le Chariot','D\u00e9termination, volont\u00e9, triomphe, contr\u00f4le','Manque de direction, agression','Victoire par la volont\u00e9 concentr\u00e9e'],
      ['La Force','Courage, force int\u00e9rieure, compassion','Doute de soi, faiblesse, ins\u00e9curit\u00e9','La douceur surmonte tout'],
      ['L\'Hermite','Qu\u00eate de l\'\u00e2me, introspection, solitude','Isolation, solitude, retrait','\u00c9clairez le chemin de l\'int\u00e9rieur'],
      ['La Roue de Fortune','Changement, cycles, destin, chance','Malchance, r\u00e9sistance au changement','La roue tourne \u2014 embrassez le changement'],
      ['La Justice','\u00c9quit\u00e9, v\u00e9rit\u00e9, loi, cause et effet','Injustice, malhonn\u00eatet\u00e9','La v\u00e9rit\u00e9 et l\'\u00e9quilibre pr\u00e9valent'],
      ['Le Pendu','Abandon, l\u00e2cher-prise, nouvelle perspective','Stagnation, r\u00e9sistance, ind\u00e9cision','Abandonnez pour gagner une nouvelle vision'],
      ['La Mort','Fins, transformation, transition','R\u00e9sistance au changement, stagnation','Transformez-vous et renaissez'],
      ['Temp\u00e9rance','\u00c9quilibre, patience, mod\u00e9ration, harmonie','D\u00e9s\u00e9quilibre, exc\u00e8s','Trouvez votre \u00e9quilibre parfait'],
      ['Le Diable','Ombre, attachement, addiction, restriction','Lib\u00e9ration, libert\u00e9, reprise du pouvoir','Brisez vos cha\u00eenes'],
      ['La Tour','Bouleversement, r\u00e9v\u00e9lation, changement soudain','\u00c9viter la catastrophe, peur du changement','La destruction cr\u00e9e l\'espace pour la v\u00e9rit\u00e9'],
      ['L\'\u00c9toile','Espoir, foi, renouveau, s\u00e9r\u00e9nit\u00e9','Manque de foi, d\u00e9sespoir','L\'espoir brille dans les t\u00e9n\u00e8bres'],
      ['La Lune','Illusion, peur, anxi\u00e9t\u00e9, intuition','Lib\u00e9ration de la peur, clart\u00e9','Naviguez \u00e0 travers l\'illusion vers la v\u00e9rit\u00e9'],
      ['Le Soleil','Joie, succ\u00e8s, vitalit\u00e9, positivit\u00e9','Enfant int\u00e9rieur, d\u00e9prime','La joie radieuse illumine votre chemin'],
      ['Le Jugement','R\u00e9flexion, jugement, appel int\u00e9rieur','Doute de soi, critique int\u00e9rieure','R\u00e9pondez \u00e0 votre appel sup\u00e9rieur'],
      ['Le Monde','Accomplissement, pl\u00e9nitude, voyage','Inach\u00e8vement, raccourcis','Vous \u00eates arriv\u00e9 \u2014 c\u00e9l\u00e9brez']
    ],
    es:[
      ['El Loco','Nuevos comienzos, inocencia, espontaneidad','Imprudencia, riesgo, contenci\u00f3n','Un salto de fe hacia lo desconocido'],
      ['El Mago','Voluntad, creaci\u00f3n, manifestaci\u00f3n','Manipulaci\u00f3n, talentos sin explotar','Tienes todas las herramientas que necesitas'],
      ['La Sacerdotisa','Intuici\u00f3n, misterio, conocimiento interior','Secretos, retirada, silencio','Conf\u00eda en tu voz interior'],
      ['La Emperatriz','Abundancia, maternidad, fertilidad, belleza','Dependencia, sofocaci\u00f3n, bloqueo creativo','Abraza la abundancia y el crecimiento'],
      ['El Emperador','Autoridad, estructura, estabilidad, liderazgo','Tiran\u00eda, rigidez, dominaci\u00f3n','Construye tu imperio con disciplina'],
      ['El Hierofante','Tradici\u00f3n, sabidur\u00eda espiritual, conformidad','Rebeli\u00f3n, subversi\u00f3n, nuevos enfoques','Busca un significado espiritual profundo'],
      ['Los Enamorados','Amor, armon\u00eda, asociaci\u00f3n, elecci\u00f3n','Desarmon\u00eda, desequilibrio','Elige con tu coraz\u00f3n y tu alma'],
      ['El Carro','Determinaci\u00f3n, voluntad, triunfo, control','Falta de direcci\u00f3n, agresi\u00f3n','Victoria a trav\u00e9s de la voluntad enfocada'],
      ['La Fuerza','Coraje, fuerza interior, compasi\u00f3n','Duda, debilidad, inseguridad','La fuerza gentil lo supera todo'],
      ['El Ermita\u00f1o','B\u00fasqueda del alma, introspecci\u00f3n, soledad','Aislamiento, soledad, retirada','Ilumina el camino desde dentro'],
      ['La Rueda de la Fortuna','Cambio, ciclos, destino, suerte','Mala suerte, resistencia al cambio','La rueda gira \u2014 abraza el cambio'],
      ['La Justicia','Equidad, verdad, ley, causa y efecto','Injusticia, deshonestidad','La verdad y el equilibrio prevalecen'],
      ['El Colgado','Rendici\u00f3n, soltar, nueva perspectiva','Estancamiento, resistencia, indecisi\u00f3n','R\u00edndete para ganar nueva visi\u00f3n'],
      ['La Muerte','Finales, transformaci\u00f3n, transici\u00f3n','Resistencia al cambio, estancamiento','Transf\u00f3rmate y renace'],
      ['La Templanza','Equilibrio, paciencia, moderaci\u00f3n, armon\u00eda','Desequilibrio, exceso','Encuentra tu equilibrio perfecto'],
      ['El Diablo','Sombra, apego, adicci\u00f3n, restricci\u00f3n','Liberaci\u00f3n, libertad, recuperar poder','Lib\u00e9rate de tus cadenas'],
      ['La Torre','Trastorno, revelaci\u00f3n, cambio repentino','Evitar desastres, miedo al cambio','La destrucci\u00f3n crea espacio para la verdad'],
      ['La Estrella','Esperanza, fe, renovaci\u00f3n, serenidad','Falta de fe, desesperaci\u00f3n','La esperanza brilla en la oscuridad'],
      ['La Luna','Ilusi\u00f3n, miedo, ansiedad, intuici\u00f3n','Liberaci\u00f3n del miedo, claridad','Navega a trav\u00e9s de la ilusi\u00f3n hacia la verdad'],
      ['El Sol','Alegr\u00eda, \u00e9xito, vitalidad, positividad','Ni\u00f1o interior, des\u00e1nimo','La alegr\u00eda radiante ilumina tu camino'],
      ['El Juicio','Reflexi\u00f3n, ajuste de cuentas, llamada interior','Duda, cr\u00edtico interior','Responde a tu llamada superior'],
      ['El Mundo','Realizaci\u00f3n, plenitud, viaje','Incompletitud, atajos','Has llegado \u2014 celebra']
    ],
    de:[
      ['Der Narr','Neuanf\u00e4nge, Unschuld, Spontanit\u00e4t','Leichtsinn, Risikobereitschaft','Ein Vertrauenssprung ins Unbekannte'],
      ['Der Magier','Willenskraft, Sch\u00f6pfung, Manifestation','Manipulation, ungenutzte Talente','Sie haben alle Werkzeuge die Sie brauchen'],
      ['Die Hohepriesterin','Intuition, Mysterium, inneres Wissen','Geheimnisse, R\u00fcckzug, Schweigen','Vertrauen Sie Ihrer inneren Stimme'],
      ['Die Kaiserin','F\u00fclle, F\u00fcrsorge, Fruchtbarkeit, Sch\u00f6nheit','Abh\u00e4ngigkeit, Erdr\u00fcckung, kreative Blockade','Empfangen Sie F\u00fclle und Wachstum'],
      ['Der Kaiser','Autorit\u00e4t, Struktur, Stabilit\u00e4t, F\u00fchrung','Tyrannei, Starrheit, Dominanz','Bauen Sie Ihr Reich mit Disziplin'],
      ['Der Hierophant','Tradition, spirituelle Weisheit, Konformit\u00e4t','Rebellion, Subversion, neue Ans\u00e4tze','Suchen Sie tieferen spirituellen Sinn'],
      ['Die Liebenden','Liebe, Harmonie, Partnerschaft, Wahl','Disharmonie, Ungleichgewicht','W\u00e4hlen Sie mit Herz und Seele'],
      ['Der Wagen','Entschlossenheit, Willenskraft, Triumph','Richtungslosigkeit, Aggression','Sieg durch fokussierten Willen'],
      ['Die Kraft','Mut, innere St\u00e4rke, Mitgef\u00fchl','Selbstzweifel, Schw\u00e4che, Unsicherheit','Sanfte Kraft \u00fcberwindet alles'],
      ['Der Eremit','Seelensuche, Introspektion, Einsamkeit','Isolation, Einsamkeit, R\u00fcckzug','Erleuchten Sie den Weg von innen'],
      ['Das Rad des Schicksals','Wandel, Zyklen, Schicksal, Gl\u00fcck','Pech, Widerstand gegen Ver\u00e4nderung','Das Rad dreht sich \u2014 umarmen Sie den Wandel'],
      ['Die Gerechtigkeit','Fairness, Wahrheit, Gesetz, Ursache und Wirkung','Ungerechtigkeit, Unehrlichkeit','Wahrheit und Gleichgewicht siegen'],
      ['Der Geh\u00e4ngte','Hingabe, Loslassen, neue Perspektive','Stillstand, Widerstand, Unentschlossenheit','Geben Sie auf, um neue Sicht zu gewinnen'],
      ['Der Tod','Enden, Transformation, \u00dcbergang','Widerstand gegen Ver\u00e4nderung, Stagnation','Transformieren Sie sich und werden Sie wiedergeboren'],
      ['Die M\u00e4\u00dfigkeit','Balance, Geduld, M\u00e4\u00dfigung, Harmonie','Ungleichgewicht, \u00dcberma\u00df','Finden Sie Ihr perfektes Gleichgewicht'],
      ['Der Teufel','Schatten-Ich, Anhaftung, Sucht','Befreiung, Freiheit, Kraftr\u00fcckgewinnung','Befreien Sie sich von Ihren Ketten'],
      ['Der Turm','Umbruch, Offenbarung, pl\u00f6tzliche Ver\u00e4nderung','Katastrophenvermeidung, Angst vor Ver\u00e4nderung','Zerst\u00f6rung schafft Raum f\u00fcr Wahrheit'],
      ['Der Stern','Hoffnung, Glaube, Erneuerung, Gelassenheit','Glaubensmangel, Verzweiflung','Hoffnung scheint in der Dunkelheit'],
      ['Der Mond','Illusion, Angst, Unruhe, Intuition','Befreiung von Angst, Klarheit','Navigieren Sie durch Illusion zur Wahrheit'],
      ['Die Sonne','Freude, Erfolg, Vitalit\u00e4t, Positivit\u00e4t','Inneres Kind, Niedergeschlagenheit','Strahlende Freude erleuchtet Ihren Weg'],
      ['Das Gericht','Reflexion, Abrechnung, innerer Ruf','Selbstzweifel, innerer Kritiker','Antworten Sie auf Ihren h\u00f6heren Ruf'],
      ['Die Welt','Vollendung, Erf\u00fcllung, Ganzheit','Unvollst\u00e4ndigkeit, Abk\u00fcrzungen','Sie sind angekommen \u2014 feiern Sie']
    ],
    it:[
      ['Il Matto','Nuovi inizi, innocenza, spontaneit\u00e0','Imprudenza, rischio, trattenersi','Un salto di fede nell\'ignoto'],
      ['Il Mago','Volont\u00e0, creazione, manifestazione','Manipolazione, talenti inesplorati','Hai tutti gli strumenti di cui hai bisogno'],
      ['La Papessa','Intuizione, mistero, conoscenza interiore','Segreti, ritiro, silenzio','Fidati della tua voce interiore'],
      ['L\'Imperatrice','Abbondanza, cura, fertilit\u00e0, bellezza','Dipendenza, soffocamento, blocco creativo','Abbraccia l\'abbondanza e la crescita'],
      ['L\'Imperatore','Autorit\u00e0, struttura, stabilit\u00e0, leadership','Tirannia, rigidit\u00e0, dominazione','Costruisci il tuo impero con disciplina'],
      ['Il Gerofante','Tradizione, saggezza spirituale, conformit\u00e0','Ribellione, sovversione, nuovi approcci','Cerca un significato spirituale profondo'],
      ['Gli Amanti','Amore, armonia, partnership, scelta','Disarmonia, squilibrio','Scegli con il cuore e l\'anima'],
      ['Il Carro','Determinazione, volont\u00e0, trionfo, controllo','Mancanza di direzione, aggressione','Vittoria attraverso la volont\u00e0 concentrata'],
      ['La Forza','Coraggio, forza interiore, compassione','Dubbio, debolezza, insicurezza','La forza gentile supera tutto'],
      ['L\'Eremita','Ricerca dell\'anima, introspezione, solitudine','Isolamento, solitudine, ritiro','Illumina la via dall\'interno'],
      ['La Ruota della Fortuna','Cambiamento, cicli, destino, fortuna','Sfortuna, resistenza al cambiamento','La ruota gira \u2014 abbraccia il cambiamento'],
      ['La Giustizia','Equit\u00e0, verit\u00e0, legge, causa ed effetto','Ingiustizia, disonest\u00e0','La verit\u00e0 e l\'equilibrio prevalgono'],
      ['L\'Appeso','Resa, lasciar andare, nuova prospettiva','Stagnazione, resistenza, indecisione','Arrenditi per guadagnare nuova visione'],
      ['La Morte','Fini, trasformazione, transizione','Resistenza al cambiamento, stagnazione','Trasformati e rinasci'],
      ['La Temperanza','Equilibrio, pazienza, moderazione, armonia','Squilibrio, eccesso','Trova il tuo equilibrio perfetto'],
      ['Il Diavolo','Ombra, attaccamento, dipendenza, restrizione','Liberazione, libert\u00e0, ripresa del potere','Liberati dalle tue catene'],
      ['La Torre','Sconvolgimento, rivelazione, cambiamento improvviso','Evitare il disastro, paura del cambiamento','La distruzione crea spazio per la verit\u00e0'],
      ['La Stella','Speranza, fede, rinnovamento, serenit\u00e0','Mancanza di fede, disperazione','La speranza brille nell\'oscurit\u00e0'],
      ['La Luna','Illusione, paura, ansia, intuizione','Liberazione dalla paura, chiarezza','Naviga attraverso l\'illusione verso la verit\u00e0'],
      ['Il Sole','Gioia, successo, vitalit\u00e0, positivit\u00e0','Bambino interiore, abbattimento','La gioia radiosa illumina il tuo cammino'],
      ['Il Giudizio','Riflessione, resa dei conti, chiamata interiore','Dubbio, critico interiore','Rispondi alla tua chiamata superiore'],
      ['Il Mondo','Completamento, realizzazione, pienezza','Incompletezza, scorciatoie','Sei arrivato \u2014 festeggia']
    ],
    ro:[
      ['Nebunul','Noi \u00eenceputuri, inocen\u021b\u0103, spontaneitate','Nes\u0103buin\u021b\u0103, risc, re\u021binere','Un salt de credin\u021b\u0103 \u00een necunoscut'],
      ['Magicianul','Voin\u021b\u0103, crea\u021bie, manifestare','Manipulare, talente neexplorate','Ai toate instrumentele de care ai nevoie'],
      ['Marea Preoteas\u0103','Intui\u021bie, mister, cunoa\u0219tere interioar\u0103','Secrete, retragere, t\u0103cere','Ai \u00eencredere \u00een vocea ta interioar\u0103'],
      ['\u00cemp\u0103r\u0103teasa','Abunden\u021b\u0103, grij\u0103, fertilitate, frumuse\u021be','Dependen\u021b\u0103, sufocare, blocaj creativ','\u00cembr\u0103\u021bi\u0219eaz\u0103 abunden\u021ba \u0219i cre\u0219terea'],
      ['\u00cemp\u0103ratul','Autoritate, structur\u0103, stabilitate, leadership','Tiranie, rigiditate, dominare','Construie\u0219te-\u021bi imperiul cu disciplin\u0103'],
      ['Ierofantul','Tradi\u021bie, \u00een\u021belepciune spiritual\u0103, conformitate','Rebeliune, subversiune, abord\u0103ri noi','Caut\u0103 un sens spiritual profund'],
      ['\u00cendr\u0103gosti\u021bii','Dragoste, armonie, parteneriat, alegere','Dezarmonie, dezechilibru','Alege cu inima \u0219i sufletul'],
      ['Carul','Determinare, voin\u021b\u0103, triumf, control','Lips\u0103 de direc\u021bie, agresiune','Victorie prin voin\u021b\u0103 concentrat\u0103'],
      ['Puterea','Curaj, for\u021b\u0103 interioar\u0103, compasiune','\u00cendoial\u0103, sl\u0103biciune, insecuritate','Puterea bl\u00e2nd\u0103 dep\u0103\u0219e\u0219te totul'],
      ['Ermitul','C\u0103utarea sufletului, introspec\u021bie, solitudine','Izolare, singur\u0103tate, retragere','Lumineaz\u0103 calea din interior'],
      ['Roata Norocului','Schimbare, cicluri, destin, noroc','Ghinion, rezisten\u021b\u0103 la schimbare','Roata se \u00eenv\u00e2rte \u2014 \u00eembr\u0103\u021bi\u0219eaz\u0103 schimbarea'],
      ['Justi\u021bia','Corectitudine, adev\u0103r, lege, cauz\u0103 \u0219i efect','Nedreptate, necinste','Adev\u0103rul \u0219i echilibrul prevaleaz\u0103'],
      ['Sp\u00e2nzuratul','Abandon, eliberare, perspectiv\u0103 nou\u0103','Stagnare, rezisten\u021b\u0103, indecizie','Abandoneaz\u0103 pentru a c\u00e2\u0219tiga o viziune nou\u0103'],
      ['Moartea','Sf\u00e2r\u0219ituri, transformare, tranzi\u021bie','Rezisten\u021b\u0103 la schimbare, stagnare','Transform\u0103-te \u0219i rena\u0219te'],
      ['Cump\u0103tarea','Echilibru, r\u0103bdare, modera\u021bie, armonie','Dezechilibru, exces','G\u0103se\u0219te echilibrul t\u0103u perfect'],
      ['Diavolul','Umbra sinelui, ata\u0219ament, dependen\u021b\u0103','Eliberare, libertate, rec\u00e2\u0219tigarea puterii','Elibereaz\u0103-te de lan\u021buri'],
      ['Turnul','Tulburare, revela\u021bie, schimbare brusc\u0103','Evitarea dezastrului, frica de schimbare','Distrugerea creeaz\u0103 spa\u021biu pentru adev\u0103r'],
      ['Steaua','Speran\u021b\u0103, credin\u021b\u0103, re\u00eennoire, serenitate','Lips\u0103 de credin\u021b\u0103, disperare','Speran\u021ba str\u0103luce\u0219te \u00een \u00eentuneric'],
      ['Luna','Iluzie, fric\u0103, anxietate, intui\u021bie','Eliberarea de fric\u0103, claritate','Navigheaz\u0103 prin iluzie spre adev\u0103r'],
      ['Soarele','Bucurie, succes, vitalitate, pozitivitate','Copilul interior, descurajare','Bucuria radiant\u0103 \u00ee\u021bi lumineaz\u0103 calea'],
      ['Judecata','Reflec\u021bie, socoteal\u0103, chemare interioar\u0103','\u00cendoial\u0103, criticul interior','R\u0103spunde chem\u0103rii tale superioare'],
      ['Lumea','Completare, realizare, plenitudine','Incompletitudine, scurt\u0103turi','Ai ajuns \u2014 s\u0103rb\u0103tore\u0219te']
    ]
  };

  // ── Language detection ──
  function detectLang() {
    var saved = localStorage.getItem('tarot_lang');
    if (saved && META[saved]) return saved;
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    var code = nav.split('-')[0];
    return META[code] ? code : 'en';
  }

  var currentLang = detectLang();

  function t(key) {
    var strings = UI[currentLang] || UI.en;
    return strings[key] || (UI.en[key] || key);
  }

  function getAngelCard(index) {
    var cards = ANGEL[currentLang] || ANGEL.en;
    var c = cards[index] || ANGEL.en[index];
    return { displayName: c[0], meaning: c[1] };
  }

  function getTarotCard(index) {
    var cards = TAROT_I18N[currentLang] || TAROT_I18N.en;
    var c = cards[index] || TAROT_I18N.en[index];
    return { localName: c[0], meaning: c[1], reversed: c[2], desc: c[3] };
  }

  function getZodiacSigns() {
    var signs = ZODIAC[currentLang] || ZODIAC.en;
    return signs.map(function(name, i) {
      return { symbol: ZODIAC_SYMBOLS[i], name: name, index: i };
    });
  }

  function setLang(code) {
    if (!META[code]) return;
    currentLang = code;
    localStorage.setItem('tarot_lang', code);
    if (window.applyLanguage) window.applyLanguage();
  }

  // ── Build language dropdown ──
  function buildLangDropdown() {
    var existing = document.getElementById('langDropdown');
    if (existing) existing.remove();

    var wrap = document.createElement('div');
    wrap.id = 'langDropdown';
    wrap.style.cssText = 'position:fixed;top:16px;right:16px;z-index:200;font-family:"Cinzel","Cormorant Garamond",serif;';

    var btn = document.createElement('button');
    btn.id = 'langBtn';
    btn.style.cssText = 'padding:8px 14px;border-radius:12px;background:rgba(218,165,32,0.08);border:1.5px solid rgba(218,165,32,0.3);color:#DAA520;font-size:13px;cursor:pointer;backdrop-filter:blur(10px);transition:all .3s ease;display:flex;align-items:center;gap:6px;';
    btn.textContent = META[currentLang].flag + ' ' + META[currentLang].name;

    var menu = document.createElement('div');
    menu.id = 'langMenu';
    menu.style.cssText = 'display:none;position:absolute;top:100%;right:0;margin-top:6px;background:rgba(13,11,26,0.95);border:1.5px solid rgba(218,165,32,0.3);border-radius:12px;overflow:hidden;backdrop-filter:blur(15px);min-width:160px;box-shadow:0 8px 30px rgba(0,0,0,0.5);';

    LANGS.forEach(function(code) {
      var item = document.createElement('div');
      item.style.cssText = 'padding:10px 16px;cursor:pointer;color:#DAA520;font-size:12px;display:flex;align-items:center;gap:8px;transition:background .2s;border-bottom:1px solid rgba(218,165,32,0.08);';
      item.textContent = META[code].flag + ' ' + META[code].name;
      if (code === currentLang) item.style.background = 'rgba(218,165,32,0.15)';
      item.addEventListener('mouseenter', function() { this.style.background = 'rgba(218,165,32,0.12)'; });
      item.addEventListener('mouseleave', function() { this.style.background = code === currentLang ? 'rgba(218,165,32,0.15)' : 'transparent'; });
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        menu.style.display = 'none';
        setLang(code);
      });
      menu.appendChild(item);
    });

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });

    document.addEventListener('click', function() { menu.style.display = 'none'; });

    wrap.appendChild(btn);
    wrap.appendChild(menu);
    document.body.appendChild(wrap);
  }

  // Build on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildLangDropdown);
  } else {
    buildLangDropdown();
  }

  // ── Public API ──
  window.i18n = {
    t: t,
    getAngelCard: getAngelCard,
    getTarotCard: getTarotCard,
    getZodiacSigns: getZodiacSigns,
    getZodiacSymbols: function() { return ZODIAC_SYMBOLS; },
    setLang: setLang,
    getLang: function() { return currentLang; },
    langs: LANGS,
    meta: META,
    refreshDropdown: function() {
      var btn = document.getElementById('langBtn');
      if (btn) btn.textContent = META[currentLang].flag + ' ' + META[currentLang].name;
    }
  };
})();
