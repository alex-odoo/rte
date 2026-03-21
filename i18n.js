// ── Internationalization — 23 Languages ──
(function(){
  'use strict';

  var LANGS = ['am','ar','be','cs','de','en','es','fr','ha','he','hu','it','ja','ko','mt','pl','pt','ro','ru','sw','th','uk','zh'];

  var META = {
    en:{flag:'\u{1F1EC}\u{1F1E7}',name:'English'},
    ru:{flag:'\u{1F1F7}\u{1F1FA}',name:'\u0420\u0443\u0441\u0441\u043A\u0438\u0439'},
    fr:{flag:'\u{1F1EB}\u{1F1F7}',name:'Fran\u00e7ais'},
    es:{flag:'\u{1F1EA}\u{1F1F8}',name:'Espa\u00f1ol'},
    de:{flag:'\u{1F1E9}\u{1F1EA}',name:'Deutsch'},
    it:{flag:'\u{1F1EE}\u{1F1F9}',name:'Italiano'},
    ro:{flag:'\u{1F1F7}\u{1F1F4}',name:'Rom\u00e2n\u0103'},
    uk:{flag:'\u{1F1FA}\u{1F1E6}',name:'\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430'},
    am:{flag:'🇦🇲',name:'አማርኛ'},
    ar:{flag:'🇸🇦',name:'عربي',rtl:true},
    be:{flag:'🇧🇾',name:'Беларуская'},
    cs:{flag:'🇨🇿',name:'Čeština'},
    ha:{flag:'🇳🇬',name:'Hausa'},
    he:{flag:'🇮🇱',name:'עברית',rtl:true},
    hu:{flag:'🇭🇺',name:'Magyar'},
    ja:{flag:'🇯🇵',name:'日本語'},
    ko:{flag:'🇰🇷',name:'한국어'},
    mt:{flag:'🇲🇹',name:'Malti'},
    pl:{flag:'🇵🇱',name:'Polski'},
    pt:{flag:'🇵🇹',name:'Português'},
    sw:{flag:'🇹🇿',name:'Kiswahili'},
    th:{flag:'🇹🇭',name:'ไทย'},
    zh:{flag:'🇨🇳',name:'中文'}
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
    },
    uk:{
      angelTitle:'\u041F\u041E\u0421\u041B\u0410\u041D\u041D\u042F \u0410\u041D\u0413\u0415\u041B\u0406\u0412',angelSub:'\u041E\u0442\u0440\u0438\u043C\u0430\u0439\u0442\u0435 \u043F\u043E\u0440\u0430\u0434\u0443 \u0432\u0456\u0434 \u0430\u043D\u0433\u0435\u043B\u0456\u0432',
      tarotTitle:'\u0421\u0422\u0410\u0420\u0428\u0406 \u0410\u0420\u041A\u0410\u041D\u0418',tarotSub:'22 \u043A\u0430\u0440\u0442\u0438 \u0448\u043B\u044F\u0445\u0443 \u0434\u0443\u0448\u0456',
      tap:'\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u043E\u0441\u043B\u0430\u043D\u043D\u044F',tapShuffle:'\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u043C\u0456\u0448\u0430\u0442\u0438',
      tapDraw:'\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0432\u0438\u0442\u044F\u0433\u043D\u0443\u0442\u0438 \u043A\u0430\u0440\u0442\u0443',tapDrawN:'\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0434\u043B\u044F \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0457',
      tapReveal:'\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0440\u043E\u0437\u043A\u0440\u0438\u0442\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F',
      meanTitle:'\u2726 \u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u0440\u043E\u0437\u043A\u043B\u0430\u0434\u0443 \u2726',reversed:'\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u0430',
      newReading:'\u2726 \u041D\u043E\u0432\u0438\u0439 \u0440\u043E\u0437\u043A\u043B\u0430\u0434',counter:'\u0437',btnAngel:'\uD83D\uDC7C \u0410\u043D\u0433\u0435\u043B\u0438',btnTarot:'\u2726 \u0422\u0430\u0440\u043E 22',
      zodiacTitle:'\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0437\u043D\u0430\u043A \u0437\u043E\u0434\u0456\u0430\u043A\u0443',readingTitle:'\u0412\u0430\u0448 \u0440\u043E\u0437\u043A\u043B\u0430\u0434',
      cardsWord:'\u043A\u0430\u0440\u0442',drawCount:'\u0432\u0438\u0442\u044F\u0433\u043D\u0443\u0442\u043E',tapDrawCard:'\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0432\u0438\u0442\u044F\u0433\u043D\u0443\u0442\u0438 \u043A\u0430\u0440\u0442\u0443'
    },
    am:{
      angelTitle:'የመላእክት መልዕክቶች',angelSub:'ከመላዕክት መመሪያ ይቀበሉ',
      tarotTitle:'ዋና አርካና',tarotSub:'22 የነፍስ ጉዞ ካርዶች',
      tap:'መልዕክት ለመቀበል ይጫኑ',tapShuffle:'ለማደባለቅ ይጫኑ',
      tapDraw:'ካርድ ለመሳብ ይጫኑ',tapDrawN:'ቀጣዩን ለመሳብ ይጫኑ',
      tapReveal:'ትርጉሞችን ለማሳየት ይጫኑ',
      meanTitle:'✦ የንባብዎ ትርጉሞች ✦',reversed:'ተቃራኒ',
      newReading:'✦ አዲስ ንባብ',counter:'ከ',btnAngel:'👼 መላዕክት',btnTarot:'✦ ታሮት 22',
      zodiacTitle:'የዞዲያክ ምልክትዎን ይምረጡ',readingTitle:'ንባብዎ',
      cardsWord:'ካርዶች',drawCount:'ተሳቡ',tapDrawCard:'ካርድ ለመሳብ ይጫኑ'
    },
    ar:{
      angelTitle:'رسائل الملائكة',angelSub:'استقبل إرشادات الملائكة',
      tarotTitle:'الأركانا الكبرى',tarotSub:'22 بطاقة رحلة الروح',
      tap:'انقر لتلقي رسالة',tapShuffle:'انقر للخلط',
      tapDraw:'انقر لسحب بطاقة',tapDrawN:'انقر للتالية',
      tapReveal:'انقر لكشف المعاني',
      meanTitle:'✦ معاني قراءتك ✦',reversed:'معكوس',
      newReading:'✦ قراءة جديدة',counter:'من',btnAngel:'👼 ملائكة',btnTarot:'✦ تاروت 22',
      zodiacTitle:'اختر برجك',readingTitle:'قراءتك',
      cardsWord:'بطاقات',drawCount:'مسحوبة',tapDrawCard:'انقر لسحب بطاقة'
    },
    be:{
      angelTitle:'ПАСЛАННІ АНЁЛАЎ',angelSub:'Атрымайце кіраўніцтва ад анёлаў',
      tarotTitle:'СТАРЭЙШЫЯ АРКАНЫ',tarotSub:'22 карты шляху душы',
      tap:'Націсніце, каб атрымаць пасланне',tapShuffle:'Націсніце, каб перамяшаць',
      tapDraw:'Націсніце, каб выцягнуць карту',tapDrawN:'Націсніце для наступнай',
      tapReveal:'Націсніце, каб раскрыць значэнні',
      meanTitle:'✦ Значэнні вашага раскладу ✦',reversed:'Перавернутая',
      newReading:'✦ Новы расклад',counter:'з',btnAngel:'👼 Анёлы',btnTarot:'✦ Тара 22',
      zodiacTitle:'Выберыце знак задыяка',readingTitle:'Ваш расклад',
      cardsWord:'карт',drawCount:'выцягнута',tapDrawCard:'Націсніце, каб выцягнуць карту'
    },
    cs:{
      angelTitle:'ZPRÁVY ANDĚLŮ',angelSub:'Přijměte vedení od andělů',
      tarotTitle:'VELKÉ ARKÁNY',tarotSub:'22 karet cesty duše',
      tap:'Klepněte pro přijetí zprávy',tapShuffle:'Klepněte pro zamíchání',
      tapDraw:'Klepněte pro výběr karty',tapDrawN:'Klepněte pro další',
      tapReveal:'Klepněte pro odhalení',
      meanTitle:'✦ Výklady vašeho čtení ✦',reversed:'Obrácená',
      newReading:'✦ Nové čtení',counter:'z',btnAngel:'👼 Andělé',btnTarot:'✦ Tarot 22',
      zodiacTitle:'Vyberte své znamení zvěrokruhu',readingTitle:'Vaše čtení',
      cardsWord:'karet',drawCount:'taženo',tapDrawCard:'Klepněte pro výběr karty'
    },
    ha:{
      angelTitle:'SAƘONNIN MALAIKU',angelSub:'Karbi jagorancin malaiku',
      tarotTitle:'MANYAN ARCANA',tarotSub:'Katunan 22 na tafiyar ruhi',
      tap:'Taɓa don karɓar saƙo',tapShuffle:'Taɓa don gauraya',
      tapDraw:'Taɓa don ja katunan',tapDrawN:'Taɓa don na gaba',
      tapReveal:'Taɓa don bayyana ma\'anoni',
      meanTitle:'✦ Ma\'anonin karatunka ✦',reversed:'Jujjuye',
      newReading:'✦ Sabon karatu',counter:'na',btnAngel:'👼 Malaiku',btnTarot:'✦ Tarot 22',
      zodiacTitle:'Zaɓi alamar zodiac',readingTitle:'Karatunka',
      cardsWord:'katunan',drawCount:'an ja',tapDrawCard:'Taɓa don ja katunan'
    },
    he:{
      angelTitle:'מסרי מלאכים',angelSub:'קבל הדרכה מהמלאכים',
      tarotTitle:'ארקנות הגדולות',tarotSub:'22 קלפי מסע הנשמה',
      tap:'לחץ לקבלת מסר',tapShuffle:'לחץ לערבוב',
      tapDraw:'לחץ לשליפת קלף',tapDrawN:'לחץ לבא',
      tapReveal:'לחץ לחשיפת משמעויות',
      meanTitle:'✦ משמעויות הקריאה שלך ✦',reversed:'הפוך',
      newReading:'✦ קריאה חדשה',counter:'מתוך',btnAngel:'👼 מלאכים',btnTarot:'✦ טארוט 22',
      zodiacTitle:'בחר את מזלך',readingTitle:'הקריאה שלך',
      cardsWord:'קלפים',drawCount:'נשלפו',tapDrawCard:'לחץ לשליפת קלף'
    },
    hu:{
      angelTitle:'ANGYALI ÜZENETEK',angelSub:'Fogadd az angyalok útmutatását',
      tarotTitle:'NAGY ARKANUMOK',tarotSub:'A lélek útjának 22 lapja',
      tap:'Kattints egy üzenetért',tapShuffle:'Kattints a keveréshez',
      tapDraw:'Kattints egy lap húzásához',tapDrawN:'Kattints a következőhöz',
      tapReveal:'Kattints a jelentések megtekintéséhez',
      meanTitle:'✦ Olvasatod jelentései ✦',reversed:'Fordított',
      newReading:'✦ Új olvasat',counter:'/',btnAngel:'👼 Angyalok',btnTarot:'✦ Tarot 22',
      zodiacTitle:'Válaszd ki a csillagjegyedet',readingTitle:'Az olvasatod',
      cardsWord:'lap',drawCount:'húzott',tapDrawCard:'Kattints egy lap húzásához'
    },
    ja:{
      angelTitle:'天使のメッセージ',angelSub:'天使からのガイダンスを受け取る',
      tarotTitle:'大アルカナ',tarotSub:'魂の旅の22枚のカード',
      tap:'メッセージを受け取るにはタップ',tapShuffle:'シャッフルするにはタップ',
      tapDraw:'カードを引くにはタップ',tapDrawN:'次を引くにはタップ',
      tapReveal:'意味を表示するにはタップ',
      meanTitle:'✦ あなたのリーディングの意味 ✦',reversed:'逆位置',
      newReading:'✦ 新しいリーディング',counter:'/',btnAngel:'👼 天使',btnTarot:'✦ タロット22',
      zodiacTitle:'星座を選んでください',readingTitle:'あなたのリーディング',
      cardsWord:'枚',drawCount:'引かれた',tapDrawCard:'カードを引くにはタップ'
    },
    ko:{
      angelTitle:'천사의 메시지',angelSub:'천사로부터 안내를 받으세요',
      tarotTitle:'대 아르카나',tarotSub:'영혼의 여정 22장의 카드',
      tap:'메시지를 받으려면 탭하세요',tapShuffle:'섞으려면 탭하세요',
      tapDraw:'카드를 뽑으려면 탭하세요',tapDrawN:'다음을 뽑으려면 탭하세요',
      tapReveal:'의미를 보려면 탭하세요',
      meanTitle:'✦ 당신의 리딩 의미 ✦',reversed:'역방향',
      newReading:'✦ 새 리딩',counter:'/',btnAngel:'👼 천사',btnTarot:'✦ 타로 22',
      zodiacTitle:'별자리를 선택하세요',readingTitle:'당신의 리딩',
      cardsWord:'장',drawCount:'뽑힌',tapDrawCard:'카드를 뽑으려면 탭하세요'
    },
    mt:{
      angelTitle:'MESSAĠĠI TAL-ANĠLI',angelSub:'Irċievi gwida mill-anġli',
      tarotTitle:'ARKANIJIET MAĠĠURI',tarotSub:'22 karta tal-vjaġġ tar-ruħ',
      tap:'Agħfas biex tirċievi messaġġ',tapShuffle:'Agħfas biex taħżen',
      tapDraw:'Agħfas biex tiġbed karta',tapDrawN:'Agħfas għall-li jmiss',
      tapReveal:'Agħfas biex tikxef',
      meanTitle:'✦ It-Tifsiriet tal-Qari Tiegħek ✦',reversed:'Mgħawweġ',
      newReading:'✦ Qari Ġdid',counter:'minn',btnAngel:'👼 Anġli',btnTarot:'✦ Tarot 22',
      zodiacTitle:'Agħżel is-sinjal taz-zodjaku tiegħek',readingTitle:'Il-Qari Tiegħek',
      cardsWord:'karti',drawCount:'miġbuda',tapDrawCard:'Agħfas biex tiġbed karta'
    },
    pl:{
      angelTitle:'PRZESŁANIA ANIOŁÓW',angelSub:'Odbierz wskazówki od aniołów',
      tarotTitle:'WIELKIE ARKANA',tarotSub:'22 karty podróży duszy',
      tap:'Dotknij, aby odebrać wiadomość',tapShuffle:'Dotknij, aby potasować',
      tapDraw:'Dotknij, aby ciągnąć kartę',tapDrawN:'Dotknij dla następnej',
      tapReveal:'Dotknij, aby odkryć znaczenia',
      meanTitle:'✦ Znaczenia twojego układu ✦',reversed:'Odwrócona',
      newReading:'✦ Nowy układ',counter:'z',btnAngel:'👼 Aniołowie',btnTarot:'✦ Tarot 22',
      zodiacTitle:'Wybierz swój znak zodiaku',readingTitle:'Twój układ',
      cardsWord:'kart',drawCount:'wyciągnięto',tapDrawCard:'Dotknij, aby ciągnąć kartę'
    },
    pt:{
      angelTitle:'MENSAGENS DOS ANJOS',angelSub:'Receba orientação dos anjos',
      tarotTitle:'ARCANOS MAIORES',tarotSub:'22 cartas da jornada da alma',
      tap:'Toque para receber uma mensagem',tapShuffle:'Toque para embaralhar',
      tapDraw:'Toque para tirar uma carta',tapDrawN:'Toque para a próxima',
      tapReveal:'Toque para revelar os significados',
      meanTitle:'✦ Significados da sua leitura ✦',reversed:'Invertida',
      newReading:'✦ Nova leitura',counter:'de',btnAngel:'👼 Anjos',btnTarot:'✦ Tarot 22',
      zodiacTitle:'Escolha seu signo do zodíaco',readingTitle:'Sua leitura',
      cardsWord:'cartas',drawCount:'tiradas',tapDrawCard:'Toque para tirar uma carta'
    },
    sw:{
      angelTitle:'UJUMBE WA MALAIKA',angelSub:'Pokea mwongozo kutoka kwa malaika',
      tarotTitle:'ARCANA KUU',tarotSub:'Kadi 22 za safari ya roho',
      tap:'Gusa kupokea ujumbe',tapShuffle:'Gusa kuchanganya',
      tapDraw:'Gusa kuchora kadi',tapDrawN:'Gusa kwa inayofuata',
      tapReveal:'Gusa kufunua maana',
      meanTitle:'✦ Maana za Usomaji Wako ✦',reversed:'Kinyume',
      newReading:'✦ Usomaji Mpya',counter:'ya',btnAngel:'👼 Malaika',btnTarot:'✦ Tarot 22',
      zodiacTitle:'Chagua ishara yako ya zodiac',readingTitle:'Usomaji Wako',
      cardsWord:'kadi',drawCount:'zilizosorwa',tapDrawCard:'Gusa kuchora kadi'
    },
    th:{
      angelTitle:'ข้อความจากนางฟ้า',angelSub:'รับคำแนะนำจากนางฟ้า',
      tarotTitle:'อาร์คาน่าใหญ่',tarotSub:'22 ใบไพ่แห่งการเดินทางของวิญญาณ',
      tap:'แตะเพื่อรับข้อความ',tapShuffle:'แตะเพื่อสับไพ่',
      tapDraw:'แตะเพื่อหยิบไพ่',tapDrawN:'แตะเพื่อหยิบใบต่อไป',
      tapReveal:'แตะเพื่อดูความหมาย',
      meanTitle:'✦ ความหมายการทำนายของคุณ ✦',reversed:'กลับด้าน',
      newReading:'✦ การทำนายใหม่',counter:'จาก',btnAngel:'👼 นางฟ้า',btnTarot:'✦ ไพ่ทาโรต์ 22',
      zodiacTitle:'เลือกราศีของคุณ',readingTitle:'การทำนายของคุณ',
      cardsWord:'ใบ',drawCount:'ถูกหยิบ',tapDrawCard:'แตะเพื่อหยิบไพ่'
    },
    zh:{
      angelTitle:'天使信息',angelSub:'接受天使的指引',
      tarotTitle:'大阿尔卡那',tarotSub:'灵魂之旅的22张牌',
      tap:'点击接收信息',tapShuffle:'点击洗牌',
      tapDraw:'点击抽牌',tapDrawN:'点击抽下一张',
      tapReveal:'点击揭示含义',
      meanTitle:'✦ 你的占卜含义 ✦',reversed:'逆位',
      newReading:'✦ 新占卜',counter:'共',btnAngel:'👼 天使',btnTarot:'✦ 塔罗22',
      zodiacTitle:'选择你的星座',readingTitle:'你的占卜',
      cardsWord:'张',drawCount:'已抽',tapDrawCard:'点击抽牌'
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
    ro:['Berbec','Taur','Gemeni','Rac','Leu','Fecioara','Balanta','Scorpion','Sagetator','Capricorn','Varsator','Pesti'],
    uk:['\u041E\u0432\u0435\u043D','\u0422\u0435\u043B\u0435\u0446\u044C','\u0411\u043B\u0438\u0437\u043D\u044E\u043A\u0438','\u0420\u0430\u043A','\u041B\u0435\u0432','\u0414\u0456\u0432\u0430','\u0422\u0435\u0440\u0435\u0437\u0438','\u0421\u043A\u043E\u0440\u043F\u0456\u043E\u043D','\u0421\u0442\u0440\u0456\u043B\u0435\u0446\u044C','\u041A\u043E\u0437\u0435\u0440\u0456\u0433','\u0412\u043E\u0434\u043E\u043B\u0456\u0439','\u0420\u0438\u0431\u0438'],
    am:['አሪስ','ቶሪስ','ጀሚኒ','ካንሰር','ሊዮ','ቨርጎ','ሊብራ','ስኮርፒዮ','ሳጂታሪዮስ','ካፕሪኮርን','አኳሪዮስ','ፒሺስ'],
    ar:['الحمل','الثور','الجوزاء','السرطان','الأسد','العذراء','الميزان','العقرب','القوس','الجدي','الدلو','الحوت'],
    be:['Авен','Цялец','Блізняты','Рак','Леў','Дзева','Шалі','Скарпіён','Стралец','Казярог','Вадалей','Рыбы'],
    cs:['Beran','Býk','Blíženci','Rak','Lev','Panna','Váhy','Štír','Střelec','Kozoroh','Vodnář','Ryby'],
    ha:['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'],
    he:['טלה','שור','תאומים','סרטן','אריה','בתולה','מאזניים','עקרב','קשת','גדי','דלי','דגים'],
    hu:['Kos','Bika','Ikrek','Rák','Oroszlán','Szűz','Mérleg','Skorpió','Nyilas','Bak','Vízöntő','Halak'],
    ja:['牡羊座','牡牛座','双子座','蟹座','獅子座','乙女座','天秤座','蠍座','射手座','山羊座','水瓶座','魚座'],
    ko:['양자리','황소자리','쌍둥이자리','게자리','사자자리','처녀자리','천칭자리','전갈자리','사수자리','염소자리','물병자리','물고기자리'],
    mt:['Wiżgħa','Barri','Tewmin','Qamħ','Ljun','Verġni','Miżien','Skorpjun','Sagittarju','Kaprikorn','Akkwarju','Ħut'],
    pl:['Baran','Byk','Bliźnięta','Rak','Lew','Panna','Waga','Skorpion','Strzelec','Koziorożec','Wodnik','Ryby'],
    pt:['Áries','Touro','Gêmeos','Câncer','Leão','Virgem','Libra','Escorpião','Sagitário','Capricórnio','Aquário','Peixes'],
    sw:['Kondoo','Ng\'ombe','Mapacha','Kaa','Simba','Bikira','Mizani','Nge','Mpiga Mishale','Mbuzi','Ndoo','Samaki'],
    th:['ราศีเมษ','ราศีพฤษภ','ราศีเมถุน','ราศีกรกฏ','ราศีสิงห์','ราศีกันย์','ราศีตุลย์','ราศีพิจิก','ราศีธนู','ราศีมังกร','ราศีกุมภ์','ราศีมีน'],
    zh:['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座']
  };

  var SEO_META = {
    am:{title:'ታሮት ካሩዝ — የመላዕክት መልዕክቶች | ነፃ ቃናቄ ኦንላይን',desc:'ነፃ የኦንላይን ታሮት እና የመላዕክት ካርዶች ቃናቄ። ምስጢራዊ ካርድዎን ይምረጡ እና ከጠባቂ መላዕክቶዎ መልዕክቶችን ያግኙ። 44 ካርዶች ከትርጓሜ ጋር።',kw:'ታሮት ኦንላይን, የመላዕክት ካርዶች, ነፃ ቃናቄ, ምስጢራዊ ካርዶች, መላዕክት, ጸሎት',locale:'am_ET',geo:'ET'},
    ar:{title:'دوامة التاروت — رسائل الملائكة | قراءة التاروت المجانية أونلاين',desc:'قراءة تاروت وأوراق ملائكة مجانية عبر الإنترنت. اختر بطاقتك الروحانية واستقبل رسائل وإرشادات من الملائكة الحارسة. 44 بطاقة مع تفسيرات شاملة.',kw:'تاروت اونلاين, رسائل الملائكة, قراءة تاروت مجاناً, بطاقات الملائكة, تاروت عربي, عرافة اونلاين, أوراق الملائكة',locale:'ar_SA',geo:'SA',dir:'rtl'},
    be:{title:'Тара-Карусель — Пасланні Анёлаў | Гаданне на картах онлайн',desc:'Бясплатнае онлайн гаданне на картах Тара і анёлаў. Абярыце сваю магічную карту і атрымайце пасланне ад анёлаў-ахоўнікаў. 44 карты з тлумачэннямі.',kw:'тара онлайн, карты анёлаў, гаданне онлайн, пасланні анёлаў, таро беларуская, аракул',locale:'be_BY',geo:'BY'},
    cs:{title:'Tarot Karusel — Poselství andělů | Výklad karet online zdarma',desc:'Bezplatný online výklad tarotových karet a karet andělů. Vyberte svou mystickou kartu a získejte poselství od strážných andělů. 44 karet s výklady.',kw:'tarot online, poselství andělů, výklad karet zdarma, andělské karty, tarot česky, věštění online, orákulum',locale:'cs_CZ',geo:'CZ'},
    de:{title:'Tarot Karussell — Engelsbotschaften | Kostenloses Online-Tarot',desc:'Kostenloses Online-Tarot und Engelskarten-Orakel. Wählen Sie Ihre mystische Engelskarte und erhalten Sie Botschaften von Schutzengeln. 44 Karten mit Deutungen.',kw:'Tarot Online, Engelsbotschaften, Tarot kostenlos, Engelskarten, Online-Orakel, Tarot legen, Engel Botschaft, Wahrsagen',locale:'de_DE',geo:'DE'},
    en:{title:'Tarot Carousel — Angel Messages | Free Online Tarot & Angel Card Reading',desc:'Free online tarot and angel card readings. Choose your mystical angel card and receive guidance from guardian angels. 44 angel cards with full interpretations. Spiritual guidance for your life journey.',kw:'tarot carousel, angel messages, free tarot online, angel cards reading, tarot reading, oracle cards, guardian angel, free divination, spiritual guidance, angel oracle',locale:'en_US',geo:'US'},
    es:{title:'Carrusel del Tarot — Mensajes de los Ángeles | Lectura gratuita online',desc:'Lectura gratuita de tarot y cartas de ángeles en línea. Elige tu carta mística y recibe mensajes de tus ángeles guardianes. 44 cartas con interpretaciones completas.',kw:'tarot online gratis, mensajes de ángeles, lectura de cartas, cartas de ángeles, tarot español, oráculo online, adivinación, arcanos mayores',locale:'es_ES',geo:'ES'},
    fr:{title:'Carrousel du Tarot — Messages des Anges | Tirage gratuit en ligne',desc:'Tirage gratuit de tarot et de cartes des anges en ligne. Choisissez votre carte mystique et recevez des messages de vos anges gardiens. 44 cartes avec interprétations.',kw:'tarot en ligne gratuit, messages des anges, tirage de cartes, cartes des anges, tarot français, oracle gratuit, divination, arcanes majeurs',locale:'fr_FR',geo:'FR'},
    ha:{title:'Tarot Carousel — Saƙon Mala\'iku | Karatun Kati na Kyauta Online',desc:'Karatun tarot da katin mala\'iku na kyauta a layi. Zaɓi katin ɓoye naka kuma karɓi jagoranci daga mala\'ikun ka. Kati 44 tare da bayanai na cikakke.',kw:'tarot online, sakon mala\'iku, karatun kati, duba na kyauta, mala\'iku, kati na asiri',locale:'ha_NG',geo:'NG'},
    he:{title:'קרוסלת טארוט — מסרי המלאכים | קריאת קלפים חינם אונליין',desc:'קריאת טארוט וקלפי מלאכים חינם באינטרנט. בחר את הקלף המיסטי שלך וקבל מסרים והדרכה ממלאכי השמירה. 44 קלפים עם פירושים מלאים.',kw:'טארוט אונליין, מסרי מלאכים, קלפי מלאכים, קריאת קלפים, אורקל חינם, ניחוש, מלאכים, קלפי טארוט',locale:'he_IL',geo:'IL',dir:'rtl'},
    hu:{title:'Tarot Körhinta — Angyali üzenetek | Ingyenes online tarot olvasás',desc:'Ingyenes online tarot és angyalkártyák olvasása. Válaszd ki misztikus angyalkártyádat és kapj üzeneteket az oltalmazó angyaloktól. 44 kártya értelmezésekkel.',kw:'tarot online, angyali üzenetek, ingyenes tarot, angyalkártyák, jóslás online, tarot magyar, orákulum, tarot kártya',locale:'hu_HU',geo:'HU'},
    it:{title:'Giostra dei Tarocchi — Messaggi degli Angeli | Lettura gratuita online',desc:'Lettura gratuita di tarocchi e carte degli angeli online. Scegli la tua carta mistica e ricevi messaggi e guida dai tuoi angeli custodi. 44 carte con interpretazioni.',kw:'tarocchi online, messaggi degli angeli, carte degli angeli, lettura tarocchi gratuita, oracolo online, divinazione, arcani maggiori',locale:'it_IT',geo:'IT'},
    ja:{title:'タロットカルーセル — 天使のメッセージ | 無料オンラインタロット占い',desc:'無料のオンラインタロットと天使カード占い。神秘的な天使カードを選んで、守護天使からのメッセージと導きを受け取りましょう。44枚のカードと詳しい解説付き。',kw:'タロット占い, 天使カード, 無料タロット, 守護天使, オンライン占い, エンジェルカード, タロットカルーセル, 占い',locale:'ja_JP',geo:'JP'},
    ko:{title:'타로 카루셀 — 천사의 메시지 | 무료 온라인 타로 카드 리딩',desc:'무료 온라인 타로와 천사 카드 리딩. 신비로운 천사 카드를 선택하고 수호 천사로부터 메시지와 인도를 받으세요. 해석이 포함된 44장의 카드.',kw:'타로 카드, 천사 메시지, 무료 타로, 온라인 점술, 엔젤 카드, 타로 리딩, 수호천사, 점성술',locale:'ko_KR',geo:'KR'},
    mt:{title:'Giroferr tat-Tarot — Messaġġi tal-Anġli | Qari ħieles online',desc:'Qari ħieles tat-tarot u karti tal-anġli online. Agħżel il-karta mistika tiegħek u irċievi messaġġi u gwida mill-anġli protettivi. 44 karta b\'interpretazzjonijiet.',kw:'tarot online, messaġġi anġli, karti anġli, qari karti, oraklu ħieles, divinazzjoni, anġli',locale:'mt_MT',geo:'MT'},
    pl:{title:'Karuzela Tarota — Przesłania Aniołów | Darmowy odczyt kart online',desc:'Darmowy odczyt kart tarota i kart aniołów online. Wybierz swoją mistyczną kartę i otrzymaj przesłania oraz wskazówki od aniołów stróżów. 44 karty z interpretacjami.',kw:'tarot online, przesłania aniołów, karty anielskie, wróżenie online, darmowy tarot, orakulum, anioły, karuzela tarota',locale:'pl_PL',geo:'PL'},
    pt:{title:'Carrossel do Tarô — Mensagens dos Anjos | Leitura gratuita online',desc:'Leitura gratuita de tarô e cartas dos anjos online. Escolha sua carta mística e receba mensagens e orientações dos anjos guardiões. 44 cartas com interpretações.',kw:'tarô online, mensagens dos anjos, cartas dos anjos, leitura de tarô grátis, oráculo online, adivinhação, anjos guardiões',locale:'pt_BR',geo:'BR'},
    ro:{title:'Caruselul Tarot — Mesajele Îngerilor | Citire gratuită a cărților online',desc:'Citire gratuită de tarot și cărți ale îngerilor online. Alege cartea ta mistică și primește mesaje și îndrumare de la îngerii păzitori. 44 de cărți cu interpretări.',kw:'tarot online, mesajele îngerilor, cărți îngerești, ghicit online, tarot gratuit, oracol, îngeri, carusel tarot',locale:'ro_RO',geo:'RO'},
    ru:{title:'Таро Карусель — Послания Ангелов | Бесплатное гадание онлайн',desc:'Бесплатное онлайн гадание на картах Таро и картах ангелов. Выберите свою мистическую карту и получите послания и руководство от ангелов-хранителей. 44 карты с толкованиями.',kw:'таро онлайн, послания ангелов, карты ангелов, гадание онлайн бесплатно, таро карусель, оракул, ангелы, карты таро',locale:'ru_RU',geo:'RU'},
    sw:{title:'Tarot Carousel — Ujumbe wa Malaika | Usomaji wa Bure Online',desc:'Usomaji wa bure wa tarot na kadi za malaika mtandaoni. Chagua kadi yako ya ajabu na upokee mwongozo na ujumbe kutoka kwa malaika walinzi wako. Kadi 44 na maelezo.',kw:'tarot online, ujumbe wa malaika, kadi za malaika, usomaji wa bure, utabiri, malaika, bahati',locale:'sw_KE',geo:'KE'},
    th:{title:'ไพ่ทาโรต์ชิงช้าสวรรค์ — ข้อความจากเทวทูต | ดูไพ่ฟรีออนไลน์',desc:'ดูไพ่ทาโรต์และไพ่เทวทูตฟรีออนไลน์ เลือกไพ่มิสติคของคุณและรับข้อความและคำแนะนำจากเทวทูตผู้พิทักษ์ ไพ่ 44 ใบพร้อมการตีความครบถ้วน',kw:'ไพ่ทาโรต์, ข้อความเทวทูต, ดูไพ่ฟรี, ทำนาย, เทวทูต, ไพ่ออนไลน์, โชคชะตา, ไพ่ยิปซี',locale:'th_TH',geo:'TH'},
    uk:{title:'Таро Карусель — Послання Ангелів | Магічні Карти Онлайн',desc:'Безкоштовне онлайн ворожіння на картах Таро та картах ангелів. Оберіть свою магічну карту і отримайте послання від ангелів-хранителів. 44 карти з тлумаченнями.',kw:'таро карусель, послання ангелів, карти ангелів онлайн, ворожіння онлайн, таро онлайн безкоштовно, оракул ангелів, ангельські карти',locale:'uk_UA',geo:'UA'},
    zh:{title:'塔罗旋转木马 — 天使的信息 | 免费在线塔罗牌占卜',desc:'免费在线塔罗牌和天使卡占卜。选择您的神秘天使卡，从守护天使那里获得信息和指引。44张卡牌附有详细解释说明。',kw:'塔罗牌, 天使信息, 免费塔罗, 在线占卜, 天使卡, 塔罗旋转木马, 占卜, 大阿卡纳',locale:'zh_CN',geo:'CN'}
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
    ],
    uk:[
      ['\u0417\u0446\u0456\u043B\u0435\u043D\u043D\u044F','\u0410\u043D\u0433\u0435\u043B\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u044E\u0442\u044C \u0432\u0430\u043C \u0437\u0446\u0456\u043B\u044E\u0432\u0430\u043B\u044C\u043D\u0443 \u0435\u043D\u0435\u0440\u0433\u0456\u044E. \u0412\u0456\u0434\u043A\u0440\u0438\u0439\u0442\u0435 \u0441\u0435\u0440\u0446\u0435 \u0434\u043B\u044F \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F'],
      ['\u041F\u0440\u043E\u0449\u0435\u043D\u043D\u044F','\u0412\u0456\u0434\u043F\u0443\u0441\u0442\u0456\u0442\u044C \u043E\u0431\u0440\u0430\u0437\u0438 \u0442\u0430 \u0433\u043D\u0456\u0432. \u041F\u0440\u043E\u0449\u0435\u043D\u043D\u044F \u0437\u0432\u0456\u043B\u044C\u043D\u044F\u0454 \u0434\u0443\u0448\u0443'],
      ['\u041B\u044E\u0431\u043E\u0432','\u041B\u044E\u0431\u043E\u0432 \u043E\u0442\u043E\u0447\u0443\u0454 \u0432\u0430\u0441. \u0412\u0456\u0434\u043A\u0440\u0438\u0439\u0442\u0435\u0441\u044C \u043D\u043E\u0432\u0438\u043C \u0441\u0442\u043E\u0441\u0443\u043D\u043A\u0430\u043C'],
      ['\u0414\u043E\u0432\u0456\u0440\u0430','\u0414\u043E\u0432\u0456\u0440\u0442\u0435\u0441\u044C \u0411\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C\u0443 \u043F\u043B\u0430\u043D\u0443. \u0412\u0441\u0435 \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u0432\u0447\u0430\u0441\u043D\u043E'],
      ['\u041C\u0438\u0440','\u0421\u043F\u043E\u043A\u0456\u0439 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u044C \u0437\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0438. \u0412\u0456\u0434\u043F\u0443\u0441\u0442\u0456\u0442\u044C \u0442\u0440\u0438\u0432\u043E\u0433\u0438'],
      ['\u0414\u043E\u0441\u0442\u0430\u0442\u043E\u043A','\u0412\u0441\u0435\u0441\u0432\u0456\u0442 \u0433\u043E\u0442\u0443\u0454 \u0434\u043B\u044F \u0432\u0430\u0441 \u0434\u0430\u0440\u0438. \u041F\u0440\u0438\u0439\u043C\u0456\u0442\u044C \u0457\u0445 \u0437 \u0432\u0434\u044F\u0447\u043D\u0456\u0441\u0442\u044E'],
      ['\u0410\u043D\u0433\u0435\u043B-\u041E\u0445\u043E\u0440\u043E\u043D\u0435\u0446\u044C','\u0412\u0430\u0448 \u0430\u043D\u0433\u0435\u043B \u043F\u043E\u0440\u0443\u0447. \u0412\u0438 \u043F\u0456\u0434 \u0437\u0430\u0445\u0438\u0441\u0442\u043E\u043C \u0456 \u043A\u0435\u0440\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E\u043C'],
      ['\u0421\u043C\u0456\u043B\u0438\u0432\u0456\u0441\u0442\u044C','\u0410\u043D\u0433\u0435\u043B\u0438 \u0434\u0430\u044E\u0442\u044C \u0432\u0430\u043C \u0441\u0438\u043B\u0443. \u0414\u0456\u0439\u0442\u0435 \u0431\u0435\u0437 \u0441\u0442\u0440\u0430\u0445\u0443'],
      ['\u0412\u0434\u044F\u0447\u043D\u0456\u0441\u0442\u044C','\u0412\u0434\u044F\u0447\u043D\u0456\u0441\u0442\u044C \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0454 \u043D\u043E\u0432\u0456 \u0431\u043B\u0430\u0433\u043E\u0441\u043B\u043E\u0432\u0435\u043D\u043D\u044F'],
      ['\u0422\u0435\u0440\u043F\u0456\u043D\u043D\u044F','\u0423\u0441\u044C\u043E\u043C\u0443 \u0441\u0432\u0456\u0439 \u0447\u0430\u0441. \u0414\u043E\u0432\u0456\u0440\u0442\u0435\u0441\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0443'],
      ['\u0412\u0456\u0440\u0430','\u0417\u043C\u0456\u0446\u043D\u0456\u0442\u044C \u0441\u0432\u043E\u044E \u0432\u0456\u0440\u0443. \u0410\u043D\u0433\u0435\u043B\u0438 \u043D\u0435 \u0437\u0430\u043B\u0438\u0448\u0430\u0442\u044C \u0432\u0430\u0441'],
      ['\u0420\u0430\u0434\u0456\u0441\u0442\u044C','\u0420\u0430\u0434\u0456\u0441\u0442\u044C \u2014 \u0432\u0430\u0448 \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u0438\u0439 \u0441\u0442\u0430\u043D. \u0414\u043E\u0437\u0432\u043E\u043B\u044C\u0442\u0435 \u0441\u043E\u0431\u0456 \u0449\u0430\u0441\u0442\u044F'],
      ['\u041C\u0443\u0434\u0440\u0456\u0441\u0442\u044C','\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456 \u0432\u0436\u0435 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 \u0432\u0430\u0441. \u041F\u0440\u0438\u0441\u043B\u0443\u0445\u0430\u0439\u0442\u0435\u0441\u044C \u0434\u043E \u0441\u0435\u0440\u0446\u044F'],
      ['\u0421\u0438\u043B\u0430','\u0412\u0438 \u0441\u0438\u043B\u044C\u043D\u0456\u0448\u0456, \u043D\u0456\u0436 \u0434\u0443\u043C\u0430\u0454\u0442\u0435. \u0410\u043D\u0433\u0435\u043B\u0438 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u044E\u0442\u044C \u0432\u0430\u0441'],
      ['\u0414\u0438\u0432\u043E','\u0413\u043E\u0442\u0443\u0439\u0442\u0435\u0441\u044C \u0434\u043E \u0434\u0438\u0432\u0430. \u0410\u043D\u0433\u0435\u043B\u0438 \u043F\u0440\u0430\u0446\u044E\u044E\u0442\u044C \u043D\u0430\u0434 \u0432\u0430\u0448\u043E\u044E \u043C\u043E\u043B\u0438\u0442\u0432\u043E\u044E'],
      ['\u0417\u0430\u0445\u0438\u0441\u0442','\u0412\u0438 \u0432 \u0431\u0435\u0437\u043F\u0435\u0446\u0456. \u0410\u043D\u0433\u0435\u043B\u0438 \u043E\u0445\u043E\u0440\u043E\u043D\u044F\u044E\u0442\u044C \u0432\u0430\u0441'],
      ['\u0413\u0430\u0440\u043C\u043E\u043D\u0456\u044F','\u0413\u0430\u0440\u043C\u043E\u043D\u0456\u044F \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u044E\u0454\u0442\u044C\u0441\u044F. \u0414\u043E\u0432\u0456\u0440\u0442\u0435\u0441\u044C \u043F\u043E\u0442\u043E\u043A\u0443'],
      ['\u041D\u043E\u0432\u0438\u0439 \u041F\u043E\u0447\u0430\u0442\u043E\u043A','\u041D\u043E\u0432\u0430 \u0433\u043B\u0430\u0432\u0430 \u043F\u043E\u0447\u0438\u043D\u0430\u0454\u0442\u044C\u0441\u044F. \u0412\u0456\u0434\u043F\u0443\u0441\u0442\u0456\u0442\u044C \u043C\u0438\u043D\u0443\u043B\u0435'],
      ['\u0411\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0435 \u041A\u0435\u0440\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E','\u0410\u043D\u0433\u0435\u043B\u0438 \u0441\u043F\u0440\u044F\u043C\u043E\u0432\u0443\u044E\u0442\u044C \u043A\u043E\u0436\u0435\u043D \u0432\u0430\u0448 \u043A\u0440\u043E\u043A'],
      ['\u0421\u043F\u0456\u0432\u0447\u0443\u0442\u0442\u044F','\u0411\u0443\u0434\u044C\u0442\u0435 \u043C\u0438\u043B\u043E\u0441\u0435\u0440\u0434\u043D\u0456 \u0434\u043E \u0441\u0435\u0431\u0435 \u0442\u0430 \u0456\u043D\u0448\u0438\u0445'],
      ['\u041C\u0440\u0456\u044F','\u0412\u0430\u0448\u0456 \u043C\u0440\u0456\u0457 \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u044E\u0442\u044C\u0441\u044F. \u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u0439\u0442\u0435 \u0432\u0456\u0440\u0438\u0442\u0438'],
      ['\u0421\u043F\u043E\u043A\u0456\u0439','\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u0441\u043F\u043E\u043A\u0456\u0439. \u0412\u0441\u0435 \u0434\u043E\u0431\u0440\u0435'],
      ['\u041F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F','\u0412\u0438 \u043D\u0430 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u043C\u0443 \u0448\u043B\u044F\u0445\u0443. \u0421\u043B\u0456\u0434\u0443\u0439\u0442\u0435 \u043F\u043E\u043A\u043B\u0438\u043A\u0443 \u0434\u0443\u0448\u0456'],
      ['\u0411\u043B\u0430\u0433\u043E\u0441\u043B\u043E\u0432\u0435\u043D\u043D\u044F','\u0411\u043B\u0430\u0433\u043E\u0441\u043B\u043E\u0432\u0435\u043D\u043D\u044F \u0437\u043B\u0438\u0432\u0430\u044E\u0442\u044C\u0441\u044F \u043D\u0430 \u0432\u0430\u0441. \u041F\u0440\u0438\u0439\u043C\u0456\u0442\u044C \u0457\u0445'],
      ['\u042F\u0441\u043D\u0456\u0441\u0442\u044C','\u041F\u0440\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F \u0431\u043B\u0438\u0437\u044C\u043A\u043E. \u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456 \u043F\u0440\u0438\u0439\u0434\u0443\u0442\u044C \u0434\u043E \u0432\u0430\u0441'],
      ['\u0417\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u043D\u044F','\u0412\u0456\u0434\u043F\u0443\u0441\u0442\u0456\u0442\u044C \u0442\u0435, \u0449\u043E \u0431\u0456\u043B\u044C\u0448\u0435 \u043D\u0435 \u0441\u043B\u0443\u0436\u0438\u0442\u044C \u0432\u0430\u043C'],
      ['\u0422\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F','\u0417\u043C\u0456\u043D\u0438 \u043D\u0435\u0441\u0443\u0442\u044C \u0431\u043B\u0430\u0433\u043E. \u041F\u0440\u0438\u0439\u043C\u0456\u0442\u044C \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F'],
      ['\u041C\u043E\u043B\u0438\u0442\u0432\u0430','\u0412\u0430\u0448\u0456 \u043C\u043E\u043B\u0438\u0442\u0432\u0438 \u043F\u043E\u0447\u0443\u0442\u0456. \u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C \u0432\u0436\u0435 \u0432 \u0434\u043E\u0440\u043E\u0437\u0456'],
      ['\u0406\u043D\u0442\u0443\u0457\u0446\u0456\u044F','\u0414\u043E\u0432\u0456\u0440\u0442\u0435\u0441\u044C \u0441\u0432\u043E\u0454\u043C\u0443 \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u044C\u043E\u043C\u0443 \u0433\u043E\u043B\u043E\u0441\u0443'],
      ['\u041D\u0430\u0434\u0456\u044F','\u041D\u0430\u0434\u0456\u044F \u043E\u0441\u044F\u044E\u0454 \u0432\u0430\u0448 \u0448\u043B\u044F\u0445. \u0421\u0432\u0456\u0442\u043B\u043E \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u0443'],
      ['\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0442\u044C','\u0411\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430 \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0442\u044C \u0441\u0445\u043E\u0434\u0438\u0442\u044C \u043D\u0430 \u0432\u0430\u0441'],
      ['\u0406\u0441\u0442\u0438\u043D\u0430','\u0411\u0443\u0434\u044C\u0442\u0435 \u0447\u0435\u0441\u043D\u0456 \u0437 \u0441\u043E\u0431\u043E\u044E \u0442\u0430 \u0441\u0432\u0456\u0442\u043E\u043C'],
      ['\u041F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F','\u0412\u0456\u0434\u043F\u0443\u0441\u0442\u0456\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C. \u0414\u043E\u0437\u0432\u043E\u043B\u044C\u0442\u0435 \u0430\u043D\u0433\u0435\u043B\u0430\u043C \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438'],
      ['\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u044F \u0414\u0438\u0442\u0438\u043D\u0430','\u0417\u0446\u0456\u043B\u0456\u0442\u044C \u0441\u0432\u043E\u044E \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u044E \u0434\u0438\u0442\u0438\u043D\u0443'],
      ['\u041C\u0435\u0434\u0438\u0442\u0430\u0446\u0456\u044F','\u0422\u0438\u0448\u0430 \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0454 \u0434\u0432\u0435\u0440\u0456 \u0434\u043E \u0430\u043D\u0433\u0435\u043B\u0456\u0432'],
      ['\u0414\u043E\u043B\u044F','\u0412\u0438 \u0432\u0438\u043A\u043E\u043D\u0443\u0454\u0442\u0435 \u0441\u0432\u043E\u0454 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F'],
      ['\u0420\u0456\u0432\u043D\u043E\u0432\u0430\u0433\u0430','\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u0431\u0430\u043B\u0430\u043D\u0441 \u0443 \u0432\u0441\u044C\u043E\u043C\u0443. \u0413\u0430\u0440\u043C\u043E\u043D\u0456\u044F \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 \u0456 \u0437\u0437\u043E\u0432\u043D\u0456'],
      ['\u0421\u0432\u0456\u0442\u043B\u043E','\u0412\u0438 \u043D\u0435\u0441\u0435\u0442\u0435 \u0441\u0432\u0456\u0442\u043B\u043E. \u0414\u043E\u0437\u0432\u043E\u043B\u044C\u0442\u0435 \u0439\u043E\u043C\u0443 \u0441\u044F\u044F\u0442\u0438'],
      ['\u0420\u0456\u0434\u043D\u0430 \u0414\u0443\u0448\u0430','\u0420\u0456\u0434\u043D\u0430 \u0434\u0443\u0448\u0430 \u043F\u043E\u0440\u0443\u0447. \u0412\u0456\u0434\u043A\u0440\u0438\u0439\u0442\u0435 \u0441\u0435\u0440\u0446\u0435'],
      ['\u041E\u0447\u0438\u0449\u0435\u043D\u043D\u044F','\u041E\u0447\u0438\u0441\u0442\u0456\u0442\u044C \u0442\u0456\u043B\u043E, \u0440\u043E\u0437\u0443\u043C \u0456 \u0434\u0443\u0448\u0443 \u0432\u0456\u0434 \u0442\u043E\u043A\u0441\u0438\u043D\u0456\u0432'],
      ['\u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B \u041C\u0438\u0445\u0430\u0457\u043B','\u041C\u0438\u0445\u0430\u0457\u043B \u0437\u0430\u0445\u0438\u0449\u0430\u0454 \u0456 \u0441\u043F\u0440\u044F\u043C\u043E\u0432\u0443\u0454 \u0432\u0430\u0441'],
      ['\u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B \u0420\u0430\u0444\u0430\u0457\u043B','\u0420\u0430\u0444\u0430\u0457\u043B \u043D\u0435\u0441\u0435 \u0437\u0446\u0456\u043B\u0435\u043D\u043D\u044F \u0443 \u0432\u0430\u0448\u0435 \u0436\u0438\u0442\u0442\u044F'],
      ['\u041A\u043E\u0440\u0434\u043E\u043D\u0438','\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0456\u0442\u044C \u0437\u0434\u043E\u0440\u043E\u0432\u0456 \u043A\u043E\u0440\u0434\u043E\u043D\u0438 \u0437 \u043B\u044E\u0431\u043E\u0432\u2019\u044E'],
      ['\u0422\u0432\u043E\u0440\u0447\u0456\u0441\u0442\u044C','\u0412\u0438\u0440\u0430\u0437\u0456\u0442\u044C \u0441\u0435\u0431\u0435 \u0447\u0435\u0440\u0435\u0437 \u0442\u0432\u043E\u0440\u0447\u0456\u0441\u0442\u044C. \u0410\u043D\u0433\u0435\u043B\u0438 \u043D\u0430\u0434\u0438\u0445\u0430\u044E\u0442\u044C']
    ],
    am:[
      ['ፈውስ','መላዕክት ፈውስ ይልካሉ'],
      ['ይቅርታ','ቁጣ ይልቀቁ። ይቅርታ ነፍስን ነፃ ያወጣል'],
      ['ፍቅር','ፍቅር ይሸበብዎታል'],
      ['እምነት','የአምላክ ዕቅድ ይታመኑ'],
      ['ሰላም','ሰላም ከውስጥ ይመጣል'],
      ['ብዛት','ዩኒቨርስ ስጦታዎችን ያዘጋጃል'],
      ['ጠባቂ መላዕክ','ጠባቂ መላዕክ ቅርብ ነው'],
      ['ድፍረት','ፈሪሀ ሳይኖርዎ ይስሩ'],
      ['ምስጋና','ምስጋና ምርቃቶችን ይከፍታል'],
      ['ትዕግስት','ሁሉም ነገር ጊዜ አለው'],
      ['እምነት','እምነትዎን ያጠናክሩ'],
      ['ደስታ','ደስታ ተፈጥሯዊ ሁኔታዎ ነው'],
      ['ጥበብ','መልሶቹ በውስጥዎ ናቸው'],
      ['ጥንካሬ','ከሚታሰቡ ይበልጣሉ'],
      ['ተዓምር','ለተዓምር ይዘጋጁ'],
      ['ጥበቃ','ደህና ናቸው'],
      ['ስምምነት','ስምምነት ይመለሳል'],
      ['አዲስ ጅምር','አዲስ ምዕራፍ ይጀምራል'],
      ['ሰማያዊ ምሪት','መላዕክት ይመሩዎታል'],
      ['ሩህሩህ','ለራስዎ ሩህሩህ ይሁኑ'],
      ['ህልም','ህልሞቾ ይሳካሉ'],
      ['ስዕለ ሃሳብ','ውስጣዊ ሰላም ያግኙ'],
      ['ዓላማ','ትክክለኛ መንገድ ላይ ናቸው'],
      ['ምርቃት','ምርቃቶች ይፈስሱ'],
      ['ግልጽነት','ግልጽነት ቅርብ ነው'],
      ['ልቀቅ','ያልጠቀሙዎትን ይልቀቁ'],
      ['ለውጥ','ለውጦቹ ጥሩ ናቸው'],
      ['ጸሎት','ጸሎቶቾ ተሰምተዋል'],
      ['ምሁርነት','ምሁርነትዎን ያምኑ'],
      ['ተስፋ','ተስፋ ያበሩ'],
      ['ጸጋ','መለኮታዊ ጸጋ ይወርዳል'],
      ['እውነት','ከእውነት ጋር ይሁኑ'],
      ['አሳልፍ','ቁጥጥርን ይልቀቁ'],
      ['ልጅ ነፍስ','ልጅ ነፍሱን ፈውሱ'],
      ['ማሰላሰል','ዝምታ ደጆችን ይከፍታል'],
      ['እድል','ዓላማዎን እየፈጸሙ ናቸው'],
      ['ሚዛን','ሚዛን ያግኙ'],
      ['ብርሃን','ብርሃን ይሸከሙ'],
      ['የነፍስ ጓደኛ','ቅርብ ነፍስ ቅርብ ነው'],
      ['ማጥራት','ሰውነትን ከቆሻሻ ያጥሩ'],
      ['አርካዲ ሚካዔል','ሚካዔል ይጠብቅዎ'],
      ['አርካዲ ሩፋዔል','ሩፋዔል ፈውስ ያመጣል'],
      ['ወሰን','ጤናማ ወሰን ይሁኑ'],
      ['ፈጠራ','በፈጠራ ይገለጹ']
    ],
    ar:[
      ['الشفاء','يرسل لك الملائكة طاقة الشفاء'],
      ['المغفرة','تخلص من الضغينة. المغفرة تحرر الروح'],
      ['الحب','الحب يحيط بك'],
      ['الثقة','ثق بالخطة الإلهية'],
      ['السلام','السلام يأتي من الداخل'],
      ['الوفرة','الكون يُعدّ هدايا لك'],
      ['ملاك الحارس','ملاكك قريب منك'],
      ['الشجاعة','الملائكة يمنحونك القوة'],
      ['الامتنان','الامتنان يفتح البركات'],
      ['الصبر','كل شيء له وقته'],
      ['الإيمان','قوّ إيمانك'],
      ['الفرح','الفرح هو حالتك الطبيعية'],
      ['الحكمة','الإجابات بداخلك'],
      ['القوة','أنت أقوى مما تعتقد'],
      ['المعجزة','استعد لمعجزة'],
      ['الحماية','أنت في أمان'],
      ['الانسجام','الانسجام يعود'],
      ['البداية الجديدة','فصل جديد يبدأ'],
      ['التوجيه الإلهي','الملائكة يوجهون كل خطوة'],
      ['الرحمة','كن رحيماً بنفسك'],
      ['الحلم','أحلامك تتحقق'],
      ['الهدوء','اعثر على السلام الداخلي'],
      ['الهدف','أنت على الطريق الصحيح'],
      ['البركة','البركات تتدفق عليك'],
      ['الوضوح','الوضوح اقترب'],
      ['التحرر','تخلص مما لا يخدمك'],
      ['التحول','التغييرات تحمل الخير'],
      ['الصلاة','صلاتك مسموعة'],
      ['الحدس','ثق بصوتك الداخلي'],
      ['الأمل','الأمل ينير طريقك'],
      ['النعمة','النعمة الإلهية تنزل عليك'],
      ['الحقيقة','كن صادقاً مع نفسك'],
      ['التسليم','تخلص عن السيطرة'],
      ['الطفل الداخلي','اشفِ طفلك الداخلي'],
      ['التأمل','الصمت يفتح أبواب الملائكة'],
      ['القدر','أنت تحقق غرضك'],
      ['التوازن','ابحث عن التوازن'],
      ['النور','أنت تحمل النور'],
      ['رفيق الروح','روح شقيقة قريبة'],
      ['التطهير','نظف جسدك وعقلك وروحك'],
      ['رئيس الملائكة ميكائيل','ميكائيل يحميك ويوجهك'],
      ['رئيس الملائكة رافائيل','رافائيل يحمل الشفاء لحياتك'],
      ['الحدود','ضع حدوداً صحية بالمحبة'],
      ['الإبداع','عبّر عن نفسك بالإبداع']
    ],
    be:[
      ['Ацаленне','Анёлы пасылаюць лячэбную энергію'],
      ['Дараванне','Адпусціце крыўды. Дараванне вызваляе душу'],
      ['Каханне','Каханне акружае вас'],
      ['Даверіе','Давярайце Боскаму плану'],
      ['Мір','Спакой прыходзіць знутры'],
      ['Дастатак','Сусвет рыхтуе дары для вас'],
      ['Анёл-ахоўнік','Ваш анёл побач'],
      ['Смеласць','Анёлы даюць вам сілу'],
      ['Удзячнасць','Удзячнасць адкрывае блаславенні'],
      ['Цярпенне','Усяму свой час'],
      ['Вера','Умацуйце сваю веру'],
      ['Радасць','Радасць — ваш натуральны стан'],
      ['Мудрасць','Адказы ўжо ўнутры вас'],
      ['Сіла','Вы мацнейшыя чым думаеце'],
      ['Цуд','Рыхтуйцеся да цуду'],
      ['Абарона','Вы ў бяспецы'],
      ['Гармонія','Гармонія аднаўляецца'],
      ['Новы Пачатак','Новы раздзел пачынаецца'],
      ['Боскае Кіраўніцтва','Анёлы вядуць кожны ваш крок'],
      ['Спачуванне','Будзьце літасцівымі да сябе'],
      ['Мара','Вашы мары збываюцца'],
      ['Спакой','Знайдзіце ўнутраны спакой'],
      ['Прызначэнне','Вы на правільным шляху'],
      ['Блаславенне','Блаславенні сыплюцца на вас'],
      ['Яснасць','Яснасць набліжаецца'],
      ['Вызваленне','Адпусціце тое, што не служыць вам'],
      ['Трансфармацыя','Змены нясуць дабро'],
      ['Малітва','Вашы малітвы пачуты'],
      ['Інтуіцыя','Давярайце свайму ўнутранаму голасу'],
      ['Надзея','Надзея асвятляе ваш шлях'],
      ['Ласка','Боская ласка зыходзіць на вас'],
      ['Ісціна','Будзьце шчырымі з сабой'],
      ['Адданасць','Адпусціце кантроль'],
      ['Унутранае Дзіця','Вылечыце сваё ўнутранае дзіця'],
      ['Медытацыя','Цішыня адкрывае дзверы да анёлаў'],
      ['Лёс','Вы выконваеце сваё прызначэнне'],
      ['Раўнавага','Знайдзіце раўнавагу ва ўсім'],
      ['Святло','Вы нясяце святло'],
      ['Роднасная Душа','Роднасная душа побач'],
      ['Ачышчэнне','Ачысціце цела, розум і душу'],
      ['Арханёл Міхаіл','Міхаіл абараняе і кіруе вамі'],
      ['Арханёл Рафаіл','Рафаіл нясе ацаленне ў ваша жыццё'],
      ['Межы','Усталюйце здаровыя межы з любоўю'],
      ['Творчасць','Выказвайцеся праз творчасць']
    ],
    cs:[
      ['Léčení','Andělé vám posílají léčivou energii'],
      ['Odpuštění','Pusťte zatrpklost. Odpuštění osvobozuje duši'],
      ['Láska','Láska vás obklopuje'],
      ['Důvěra','Důvěřujte Božímu plánu'],
      ['Mír','Mír přichází zevnitř'],
      ['Hojnost','Vesmír připravuje dary pro vás'],
      ['Anděl strážný','Váš anděl je nablízku'],
      ['Odvaha','Andělé vám dávají sílu'],
      ['Vděčnost','Vděčnost otevírá nová požehnání'],
      ['Trpělivost','Vše má svůj čas'],
      ['Víra','Posilte svou víru'],
      ['Radost','Radost je váš přirozený stav'],
      ['Moudrost','Odpovědi jsou již ve vás'],
      ['Síla','Jste silnější než si myslíte'],
      ['Zázrak','Připravte se na zázrak'],
      ['Ochrana','Jste v bezpečí'],
      ['Harmonie','Harmonie se obnovuje'],
      ['Nový Začátek','Nová kapitola začíná'],
      ['Boží Vedení','Andělé vedou každý váš krok'],
      ['Soucit','Buďte milosrdní k sobě i druhým'],
      ['Sen','Vaše sny se plní'],
      ['Klid','Najděte vnitřní mír'],
      ['Účel','Jste na správné cestě'],
      ['Požehnání','Požehnání se na vás sypou'],
      ['Jasnost','Jasnost se blíží'],
      ['Uvolnění','Pusťte to, co vám neslouží'],
      ['Proměna','Změny přinášejí dobro'],
      ['Modlitba','Vaše modlitby jsou vyslyšeny'],
      ['Intuice','Důvěřujte svému vnitřnímu hlasu'],
      ['Naděje','Naděje osvětluje vaši cestu'],
      ['Milost','Boží milost na vás sestupuje'],
      ['Pravda','Buďte upřímní k sobě'],
      ['Odevzdání','Pusťte kontrolu'],
      ['Vnitřní dítě','Vyléčte své vnitřní dítě'],
      ['Meditace','Ticho otevírá dveře k andělům'],
      ['Osud','Naplňujete svůj účel'],
      ['Rovnováha','Najděte rovnováhu ve všem'],
      ['Světlo','Nesete světlo'],
      ['Spřízněná duše','Spřízněná duše je nablízku'],
      ['Detox','Očistěte tělo, mysl a duši'],
      ['Archanděl Michael','Michael vás chrání a vede'],
      ['Archanděl Raphael','Raphael přináší léčení do vašeho života'],
      ['Hranice','Nastavte zdravé hranice s láskou'],
      ['Kreativita','Vyjadřujte se prostřednictvím kreativity']
    ],
    ha:[
      ['Waraka','Mala\'iku suna aiko da kuzarin waraka'],
      ['Gafara','Ku saki fushi. Gafara tana yantar da rai'],
      ['Ƙauna','Ƙauna tana kewaye da ku'],
      ['Amana','Amintar da tsarin Allah'],
      ['Zaman Lafiya','Salama tana zuwa daga ciki'],
      ['Albarka','Duniya tana shirya kyauta a gare ku'],
      ['Mala\'ikan Tsaro','Mala\'ikanka yana kusa'],
      ['Ƙarfi','Mala\'iku suna ba ku ƙarfi'],
      ['Godiya','Godiya tana buɗe albarka'],
      ['Haƙuri','Komai yana da lokacinta'],
      ['Imani','Ƙarfafa imani naka'],
      ['Farin Ciki','Farin ciki shine yanayin ku na halitta'],
      ['Hikima','Amsoshi suna a cikin ku'],
      ['Ƙarfin Hali','Ku fi ƙarfi da kuke zaton'],
      ['Mu\'ujiza','Shirya don mu\'ujiza'],
      ['Kariya','Kuna da aminci'],
      ['Jituwa','Ana maido da jituwa'],
      ['Sabon Farko','Sabon babi yana farawa'],
      ['Jagorancin Allah','Mala\'iku suna jagorantar kowane matakinka'],
      ['Tausayi','Ku yi tausayi ga kanku'],
      ['Mafarki','Mafarkai naku suna cika'],
      ['Natsuwa','Nemi salama ta ciki'],
      ['Manufa','Kuna kan hanyar daidai'],
      ['Albarka','Albarka tana zuwa a kanku'],
      ['Fayyace','Fayyacewa tana kusa'],
      ['Sakewa','Sakewa abin da bai yi muku amfani ba'],
      ['Canjin Yanayi','Canjin suna kawo alheri'],
      ['Addu\'a','An ji addu\'o\'inku'],
      ['Hankali','Dogara ga muryar ciki naku'],
      ['Bege','Bege yana haskaka tafarkinku'],
      ['Alheri','Alherin Allah yana sauka a kanku'],
      ['Gaskiya','Ku yi gaskiya da kanku'],
      ['Mika Wuya','Ku bar sarrafawa'],
      ['Yaron Ciki','Warkar da yaron ciki naku'],
      ['Zikiri','Shiru yana bude kofofi'],
      ['Kaddara','Kuna cika manufarku'],
      ['Daidaito','Nemo daidaito a komai'],
      ['Haske','Kuna ɗauke da haske'],
      ['Aboki na Ruhi','Ruhin aboki yana kusa'],
      ['Tsarkakewa','Tsarkake jiki da hankali da ruhi'],
      ['Babban Mala\'ikan Mika\'ilu','Mika\'ilu yana kare ku'],
      ['Babban Mala\'ikan Rafa\'ilu','Rafa\'ilu yana kawo waraka'],
      ['Iyaka','Saita iyakoki masu lafiya'],
      ['Kirkira','Yi bayyana ta hanyar kirkira']
    ],
    he:[
      ['ריפוי','המלאכים שולחים לך אנרגיית ריפוי'],
      ['סליחה','שחרר טינה. הסליחה משחררת את הנשמה'],
      ['אהבה','האהבה מקיפה אותך'],
      ['אמון','בטח בתוכנית האלוהית'],
      ['שלום','השלום בא מבפנים'],
      ['שפע','היקום מכין מתנות עבורך'],
      ['מלאך שומר','המלאך שלך קרוב'],
      ['אומץ','המלאכים נותנים לך כוח'],
      ['הכרת תודה','הכרת תודה פותחת ברכות'],
      ['סבלנות','לכל דבר יש זמנו'],
      ['אמונה','חזק את אמונתך'],
      ['שמחה','השמחה היא מצבך הטבעי'],
      ['חכמה','התשובות כבר בתוכך'],
      ['כוח','אתה חזק יותר ממה שאתה חושב'],
      ['נס','התכונן לנס'],
      ['הגנה','אתה בטוח'],
      ['הרמוניה','ההרמוניה מתחדשת'],
      ['התחלה חדשה','פרק חדש מתחיל'],
      ['הנחיה אלוהית','המלאכים מנחים כל צעד שלך'],
      ['חמלה','היה רחום לעצמך ולאחרים'],
      ['חלום','חלומותיך מתגשמים'],
      ['שלווה','מצא שלום פנימי'],
      ['מטרה','אתה על הדרך הנכונה'],
      ['ברכה','ברכות שופעות עליך'],
      ['בהירות','הבהירות קרובה'],
      ['שחרור','שחרר מה שכבר לא משרת אותך'],
      ['שינוי','השינויים מביאים טוב'],
      ['תפילה','תפילותיך נשמעות'],
      ['אינטואיציה','בטח בקולך הפנימי'],
      ['תקווה','התקווה מאירה את דרכך'],
      ['חסד','חסד אלוהי יורד עליך'],
      ['אמת','היה כנה עם עצמך'],
      ['כניעה','שחרר את השליטה'],
      ['הילד הפנימי','רפא את ילדך הפנימי'],
      ['מדיטציה','השקט פותח דלתות למלאכים'],
      ['גורל','אתה ממלא את ייעודך'],
      ['איזון','מצא איזון בכל'],
      ['אור','אתה נושא אור'],
      ['נשמה תאומה','נשמה קרובה נמצאת'],
      ['טיהור','נקה גוף, נפש ורוח'],
      ['מלאך ראשי מיכאל','מיכאל מגן ומנחה אותך'],
      ['מלאך ראשי רפאל','רפאל מביא ריפוי לחייך'],
      ['גבולות','קבע גבולות בריאים באהבה'],
      ['יצירתיות','בטא את עצמך דרך יצירתיות']
    ],
    hu:[
      ['Gyógyulás','Az angyalok gyógyító energiát küldenek'],
      ['Megbocsátás','Engedd el a haragot. A megbocsátás felszabadítja a lelket'],
      ['Szeretet','Szeretet vesz körül téged'],
      ['Bizalom','Bízz az Isteni tervben'],
      ['Béke','A béke belülről jön'],
      ['Bőség','Az Univerzum ajándékokat készít számodra'],
      ['Őrzőangyal','Az angyalod közel van'],
      ['Bátorság','Az angyalok erőt adnak neked'],
      ['Hála','A hála új áldásokat nyit meg'],
      ['Türelem','Mindennek megvan a maga ideje'],
      ['Hit','Erősítsd meg a hitedet'],
      ['Öröm','Az öröm a természetes állapotod'],
      ['Bölcsesség','A válaszok már benned vannak'],
      ['Erő','Erősebb vagy mint gondolod'],
      ['Csoda','Készülj csodára'],
      ['Védelem','Biztonságban vagy'],
      ['Harmónia','A harmónia helyreáll'],
      ['Új Kezdet','Új fejezet kezdődik'],
      ['Isteni Útmutatás','Az angyalok irányítanak minden lépésed'],
      ['Együttérzés','Légy könyörületes magaddal'],
      ['Álom','Álmaid valóra válnak'],
      ['Derű','Találd meg a belső békét'],
      ['Célod','A helyes úton jársz'],
      ['Áldás','Áldások zuhognak rád'],
      ['Tisztaság','A tisztánlátás közeleg'],
      ['Elengedés','Engedd el ami már nem szolgál'],
      ['Átalakulás','A változások jót hoznak'],
      ['Ima','Imáid meghallgattatnak'],
      ['Intuíció','Bízz belső hangodban'],
      ['Remény','A remény megvilágítja utadat'],
      ['Kegyelem','Isteni kegyelem száll rád'],
      ['Igazság','Légy őszinte magaddal'],
      ['Lemondás','Engedd el az irányítást'],
      ['Belső Gyermek','Gyógyítsd meg belső gyermekedet'],
      ['Meditáció','A csend megnyitja az angyalok kapuját'],
      ['Sors','Betöltöd a célodat'],
      ['Egyensúly','Találj egyensúlyt mindenben'],
      ['Fény','Te fényt hordozol'],
      ['Lélektárs','Egy rokonszellem közel van'],
      ['Méregtelenítés','Tisztítsd meg tested, elméd és lelked'],
      ['Mihály Arkangyal','Mihály véd és vezet téged'],
      ['Rafael Arkangyal','Rafael gyógyulást hoz az életedbe'],
      ['Határok','Állíts fel egészséges határokat szeretettel'],
      ['Kreativitás','Fejezd ki magad a kreativitáson keresztül']
    ],
    ja:[
      ['癒し','天使が癒しのエネルギーを送っています'],
      ['許し','恨みを手放してください。許しは魂を解放します'],
      ['愛','愛があなたを包んでいます'],
      ['信頼','神のご計画を信頼してください'],
      ['平和','平和は内側から来ます'],
      ['豊かさ','宇宙があなたに贈り物を準備しています'],
      ['守護天使','あなたの天使は近くにいます'],
      ['勇気','天使があなたに力を与えます'],
      ['感謝','感謝が新しい祝福を開きます'],
      ['忍耐','すべてには時があります'],
      ['信仰','あなたの信仰を強めてください'],
      ['喜び','喜びはあなたの自然な状態です'],
      ['知恵','答えはすでにあなたの中にあります'],
      ['強さ','あなたは思うより強いです'],
      ['奇跡','奇跡の準備をしてください'],
      ['保護','あなたは安全です'],
      ['調和','調和が回復されています'],
      ['新しい始まり','新しい章が始まります'],
      ['神のご導き','天使があなたのすべての歩みを導きます'],
      ['思いやり','自分と他人に慈悲深くなってください'],
      ['夢','あなたの夢は叶います'],
      ['静寂','内なる平和を見つけてください'],
      ['目的','あなたは正しい道にいます'],
      ['祝福','祝福があなたに注がれています'],
      ['明晰さ','明晰さが近づいています'],
      ['解放','あなたに役立たないものを手放してください'],
      ['変容','変化は良いものをもたらします'],
      ['祈り','あなたの祈りは聞かれています'],
      ['直感','内なる声を信頼してください'],
      ['希望','希望があなたの道を照らします'],
      ['恵み','神の恵みがあなたに降ります'],
      ['真実','自分に正直になってください'],
      ['委ねる','コントロールを手放してください'],
      ['内なる子供','あなたの内なる子供を癒してください'],
      ['瞑想','静けさが天使への扉を開きます'],
      ['運命','あなたは目的を果たしています'],
      ['バランス','すべてにおいてバランスを見つけてください'],
      ['光','あなたは光を運んでいます'],
      ['魂の仲間','魂の仲間が近くにいます'],
      ['デトックス','体、心、魂を毒素から清めてください'],
      ['大天使ミカエル','ミカエルがあなたを守り導きます'],
      ['大天使ラファエル','ラファエルがあなたの人生に癒しをもたらします'],
      ['境界線','愛を持って健全な境界線を設けてください'],
      ['創造性','創造性を通じて自己表現してください']
    ],
    ko:[
      ['치유','천사들이 치유 에너지를 보냅니다'],
      ['용서','원망을 놓아주세요. 용서는 영혼을 해방시킵니다'],
      ['사랑','사랑이 당신을 감싸고 있습니다'],
      ['신뢰','신성한 계획을 신뢰하세요'],
      ['평화','평화는 내면에서 옵니다'],
      ['풍요','우주가 당신을 위해 선물을 준비합니다'],
      ['수호천사','당신의 천사가 가까이 있습니다'],
      ['용기','천사들이 당신에게 힘을 줍니다'],
      ['감사','감사가 새로운 축복을 열어줍니다'],
      ['인내','모든 것에는 때가 있습니다'],
      ['믿음','당신의 믿음을 강화하세요'],
      ['기쁨','기쁨은 당신의 자연스러운 상태입니다'],
      ['지혜','답은 이미 당신 안에 있습니다'],
      ['강인함','당신은 생각보다 강합니다'],
      ['기적','기적을 준비하세요'],
      ['보호','당신은 안전합니다'],
      ['조화','조화가 회복되고 있습니다'],
      ['새로운 시작','새로운 장이 시작됩니다'],
      ['신성한 인도','천사들이 당신의 모든 발걸음을 인도합니다'],
      ['자비','자신과 다른 사람들에게 자비로워지세요'],
      ['꿈','당신의 꿈이 이루어집니다'],
      ['평온','내면의 평화를 찾으세요'],
      ['목적','당신은 올바른 길에 있습니다'],
      ['축복','축복이 당신에게 내립니다'],
      ['명확함','명확함이 가까이 옵니다'],
      ['해방','더 이상 도움이 되지 않는 것을 놓아주세요'],
      ['변화','변화는 좋은 것을 가져옵니다'],
      ['기도','당신의 기도는 들립니다'],
      ['직관','내면의 목소리를 신뢰하세요'],
      ['희망','희망이 당신의 길을 밝힙니다'],
      ['은혜','신성한 은혜가 당신에게 내립니다'],
      ['진실','자신에게 정직해지세요'],
      ['내맡김','통제를 내려놓으세요'],
      ['내면 아이','당신의 내면 아이를 치유하세요'],
      ['명상','고요함이 천사들의 문을 열어줍니다'],
      ['운명','당신은 목적을 이루고 있습니다'],
      ['균형','모든 것에서 균형을 찾으세요'],
      ['빛','당신은 빛을 지니고 있습니다'],
      ['영혼의 동반자','친근한 영혼이 가까이 있습니다'],
      ['정화','몸, 마음, 영혼을 독소에서 정화하세요'],
      ['대천사 미카엘','미카엘이 당신을 보호하고 인도합니다'],
      ['대천사 라파엘','라파엘이 당신의 삶에 치유를 가져옵니다'],
      ['경계','사랑으로 건강한 경계를 설정하세요'],
      ['창의성','창의성을 통해 자신을 표현하세요']
    ],
    mt:[
      ['Fejqan','L-anġli jibgħatu enerġija ta\' fejqan'],
      ['Maħfra','Ħalli l-mibegħda. Il-maħfra tħeles ir-ruħ'],
      ['Imħabba','L-imħabba iddawwar lilek'],
      ['Fiduċja','Afda fil-pjan Divin'],
      ['Paċi','Il-paċi ġejja minn ġewwa'],
      ['Abbundanza','L-univers qed iħejji rigali għalik'],
      ['Anġlu Gwardjan','L-anġlu tiegħek qrib'],
      ['Kuraġġ','L-anġli jagħtulek il-qawwa'],
      ['Gratitudni','Il-gratitudni tiftaħ barkiet ġodda'],
      ['Sabar','Kollox għandu l-waqt tiegħu'],
      ['Fidi','Issaħħaħ il-fidi tiegħek'],
      ['Ferħ','Il-ferħ huwa l-istat naturali tiegħek'],
      ['Għerf','It-tweġibiet diġà ġewwek'],
      ['Qawwa','Int aktar b\'saħħtek milli taħseb'],
      ['Miraklu','Ippreapara ruħek għal miraklu'],
      ['Protezzjoni','Int fil-ħarsien'],
      ['Armonija','L-armonija qed tiġi restawrata'],
      ['Bidu Ġdid','Kapitlu ġdid jibda'],
      ['Gwida Divina','L-anġli jiggwidaw kull pass tiegħek'],
      ['Ħniena','Kun ħanin miegħek innifsek'],
      ['Ħolma','Il-ħolmiet tiegħek qed isiru realtà'],
      ['Serenità','Sib il-paċi ġewwienija'],
      ['Skop','Int fuq it-triq it-tajba'],
      ['Barka','Barkiet jinżlu fuqek'],
      ['Ċarezza','Iċ-ċarezza qrib'],
      ['Rilaxx','Ħalli dak li ma jaqdikx'],
      ['Trasformazzjoni','Il-bidliet iġibu l-ġid'],
      ['Talb','It-talb tiegħek instema\''],
      ['Intuwizzjoni','Afda fil-vuċi ġewwienija tiegħek'],
      ['Tama','It-tama ddawwal it-triq tiegħek'],
      ['Grazzja','Il-grazzja divina tinżel fuqek'],
      ['Verità','Kun onest miegħek innifsek'],
      ['Abbandun','Ħalli l-kontroll'],
      ['Tifel Ġewwieni','Fejjaq it-tifel ġewwieni tiegħek'],
      ['Meditazzjoni','Is-skiet jiftaħ bibien għall-anġli'],
      ['Destin','Int qed twettaq il-għan tiegħek'],
      ['Bilanċ','Sib bilanċ f\'kollox'],
      ['Dawl','Int ġġorr id-dawl'],
      ['Kompann tar-Ruħ','Ruħ qrib qrib'],
      ['Detox','Naddaf ġisem, moħħ u ruħ'],
      ['Arkanġlu Mikiel','Mikiel jipproteġi u jiggwidak'],
      ['Arkanġlu Rafel','Rafel iġib il-fejqan f\'ħajtek'],
      ['Fruntieri','Stabbilixxi fruntieri b\'imħabba'],
      ['Kreattività','Esprimixi permezz tal-kreattività']
    ],
    pl:[
      ['Uzdrowienie','Aniołowie wysyłają ci energię uzdrowienia'],
      ['Przebaczenie','Puść urazy. Przebaczenie wyzwala duszę'],
      ['Miłość','Miłość otacza cię'],
      ['Zaufanie','Zaufaj Boskiemu planowi'],
      ['Spokój','Spokój pochodzi z wewnątrz'],
      ['Obfitość','Wszechświat przygotowuje dla ciebie dary'],
      ['Anioł Stróż','Twój anioł jest blisko'],
      ['Odwaga','Aniołowie dają ci siłę'],
      ['Wdzięczność','Wdzięczność otwiera nowe błogosławieństwa'],
      ['Cierpliwość','Wszystko ma swój czas'],
      ['Wiara','Umocnij swoją wiarę'],
      ['Radość','Radość jest twoim naturalnym stanem'],
      ['Mądrość','Odpowiedzi już są w tobie'],
      ['Siła','Jesteś silniejszy niż myślisz'],
      ['Cud','Przygotuj się na cud'],
      ['Ochrona','Jesteś bezpieczny'],
      ['Harmonia','Harmonia się odnawia'],
      ['Nowy Początek','Nowy rozdział się zaczyna'],
      ['Boże Prowadzenie','Aniołowie prowadzą każdy twój krok'],
      ['Współczucie','Bądź miłosierny dla siebie i innych'],
      ['Marzenie','Twoje marzenia się spełniają'],
      ['Spokój ducha','Znajdź wewnętrzny spokój'],
      ['Cel','Jesteś na właściwej drodze'],
      ['Błogosławieństwo','Błogosławieństwa spływają na ciebie'],
      ['Jasność','Jasność jest blisko'],
      ['Uwolnienie','Puść to, co ci już nie służy'],
      ['Przemiana','Zmiany niosą dobro'],
      ['Modlitwa','Twoje modlitwy zostały wysłuchane'],
      ['Intuicja','Zaufaj swojemu wewnętrznemu głosowi'],
      ['Nadzieja','Nadzieja oświetla twoją drogę'],
      ['Łaska','Boska łaska zstępuje na ciebie'],
      ['Prawda','Bądź szczery wobec siebie'],
      ['Poddanie','Puść kontrolę'],
      ['Wewnętrzne Dziecko','Ulecz swoje wewnętrzne dziecko'],
      ['Medytacja','Cisza otwiera drzwi do aniołów'],
      ['Przeznaczenie','Wypełniasz swój cel'],
      ['Równowaga','Znajdź równowagę we wszystkim'],
      ['Światło','Nosisz w sobie światło'],
      ['Pokrewna Dusza','Pokrewna dusza jest blisko'],
      ['Detoks','Oczyść ciało, umysł i duszę'],
      ['Archanioł Michał','Michał chroni cię i prowadzi'],
      ['Archanioł Rafał','Rafał niesie uzdrowienie do twojego życia'],
      ['Granice','Ustanów zdrowe granice z miłością'],
      ['Kreatywność','Wyrażaj siebie poprzez kreatywność']
    ],
    pt:[
      ['Cura','Os anjos enviam energia de cura'],
      ['Perdão','Libere o ressentimento. O perdão liberta a alma'],
      ['Amor','O amor te envolve'],
      ['Confiança','Confie no plano divino'],
      ['Paz','A paz vem de dentro'],
      ['Abundância','O universo prepara presentes para você'],
      ['Anjo da Guarda','Seu anjo está perto'],
      ['Coragem','Os anjos te dão força'],
      ['Gratidão','A gratidão abre novas bênçãos'],
      ['Paciência','Tudo tem seu tempo'],
      ['Fé','Fortaleça sua fé'],
      ['Alegria','A alegria é seu estado natural'],
      ['Sabedoria','As respostas já estão em você'],
      ['Força','Você é mais forte do que pensa'],
      ['Milagre','Prepare-se para um milagre'],
      ['Proteção','Você está em segurança'],
      ['Harmonia','A harmonia está sendo restaurada'],
      ['Novo Começo','Um novo capítulo começa'],
      ['Orientação Divina','Os anjos guiam cada passo seu'],
      ['Compaixão','Seja misericordioso consigo mesmo'],
      ['Sonho','Seus sonhos estão se realizando'],
      ['Serenidade','Encontre paz interior'],
      ['Propósito','Você está no caminho certo'],
      ['Bênção','Bênçãos derramam sobre você'],
      ['Clareza','A clareza está próxima'],
      ['Libertação','Solte o que não te serve mais'],
      ['Transformação','As mudanças trazem bom'],
      ['Oração','Suas orações foram ouvidas'],
      ['Intuição','Confie na sua voz interior'],
      ['Esperança','A esperança ilumina o seu caminho'],
      ['Graça','A graça divina desce sobre você'],
      ['Verdade','Seja honesto consigo mesmo'],
      ['Entrega','Solte o controle'],
      ['Criança Interior','Cure sua criança interior'],
      ['Meditação','O silêncio abre portas para os anjos'],
      ['Destino','Você está cumprindo seu propósito'],
      ['Equilíbrio','Encontre equilíbrio em tudo'],
      ['Luz','Você carrega luz'],
      ['Alma Gêmea','Uma alma afim está perto'],
      ['Desintoxicação','Limpe corpo, mente e alma'],
      ['Arcanjo Miguel','Miguel protege e guia você'],
      ['Arcanjo Rafael','Rafael traz cura para sua vida'],
      ['Limites','Estabeleça limites saudáveis com amor'],
      ['Criatividade','Expresse-se através da criatividade']
    ],
    sw:[
      ['Uponyaji','Malaika wanakutumia nishati ya uponyaji'],
      ['Msamaha','Acha chuki. Msamaha unaumuru roho'],
      ['Upendo','Upendo unakuzunguka'],
      ['Imani','Amini mpango wa Mungu'],
      ['Amani','Amani inatoka ndani'],
      ['Wingi','Ulimwengu unakuandalia zawadi'],
      ['Malaika Mlinzi','Malaika wako yuko karibu'],
      ['Ujasiri','Malaika wanakupa nguvu'],
      ['Shukrani','Shukrani inafungua baraka'],
      ['Uvumilivu','Kila kitu kina wakati wake'],
      ['Imani','Imarisha imani yako'],
      ['Furaha','Furaha ndiyo hali yako ya asili'],
      ['Hekima','Majibu tayari yako ndani yako'],
      ['Nguvu','Una nguvu zaidi ya unavyodhani'],
      ['Muujiza','Jiandae kwa muujiza'],
      ['Ulinzi','Uko salama'],
      ['Maelewano','Maelewano yanarejeshwa'],
      ['Mwanzo Mpya','Sura mpya inaanza'],
      ['Mwongozo wa Kimungu','Malaika wanaongoza kila hatua yako'],
      ['Huruma','Kuwa na huruma kwako mwenyewe'],
      ['Ndoto','Ndoto zako zinakuwa kweli'],
      ['Utulivu','Tafuta amani ya ndani'],
      ['Kusudi','Uko kwenye njia sahihi'],
      ['Baraka','Baraka zinamiminika juu yako'],
      ['Uwazi','Uwazi unakaribia'],
      ['Ukombozi','Acha kinachokusumbua'],
      ['Mabadiliko','Mabadiliko yanaleta mema'],
      ['Sala','Sala zako zimesikiwa'],
      ['Hisia za Ndani','Amini sauti yako ya ndani'],
      ['Tumaini','Tumaini linaiangazia njia yako'],
      ['Neema','Neema ya Kimungu inashuka juu yako'],
      ['Ukweli','Kuwa mkweli na nafsi yako'],
      ['Kutoa','Acha udhibiti'],
      ['Mtoto wa Ndani','Ponya mtoto wako wa ndani'],
      ['Tafakuri','Ukimya unafungua milango kwa malaika'],
      ['Hatima','Unatekeleza kusudi lako'],
      ['Usawa','Tafuta usawa katika kila kitu'],
      ['Nuru','Unabeba nuru'],
      ['Roho Mwenzi','Roho karibu iko karibu'],
      ['Usafi','Safisha mwili, akili na roho'],
      ['Malaika Mkuu Mikaeli','Mikaeli anakulinda na kukuongoza'],
      ['Malaika Mkuu Rafaeli','Rafaeli analeta uponyaji katika maisha yako'],
      ['Mipaka','Weka mipaka yenye afya kwa upendo'],
      ['Ubunifu','Jionyeshe kupitia ubunifu']
    ],
    th:[
      ['การรักษา','นางฟ้าส่งพลังงานแห่งการรักษาให้คุณ'],
      ['การให้อภัย','ปล่อยวางความขุ่นเคือง การให้อภัยปลดปล่อยจิตวิญญาณ'],
      ['ความรัก','ความรักล้อมรอบคุณอยู่'],
      ['ความไว้วางใจ','ไว้วางใจในแผนอันศักดิ์สิทธิ์'],
      ['สันติ','สันติภาพมาจากภายใน'],
      ['ความอุดมสมบูรณ์','จักรวาลเตรียมของขวัญให้คุณ'],
      ['นางฟ้าผู้พิทักษ์','นางฟ้าของคุณอยู่ใกล้'],
      ['ความกล้าหาญ','นางฟ้าให้กำลังใจคุณ'],
      ['ความกตัญญู','ความกตัญญูเปิดพรใหม่'],
      ['ความอดทน','ทุกอย่างมีเวลาของมัน'],
      ['ศรัทธา','เสริมสร้างศรัทธาของคุณ'],
      ['ความสุข','ความสุขคือสภาวะธรรมชาติของคุณ'],
      ['ปัญญา','คำตอบอยู่ในตัวคุณแล้ว'],
      ['พลัง','คุณแข็งแกร่งกว่าที่คิด'],
      ['ปาฏิหาริย์','เตรียมพร้อมสำหรับปาฏิหาริย์'],
      ['การปกป้อง','คุณปลอดภัย'],
      ['ความสามัคคี','ความสามัคคีกำลังได้รับการฟื้นฟู'],
      ['จุดเริ่มต้นใหม่','บทใหม่กำลังเริ่มต้น'],
      ['การนำทางอันศักดิ์สิทธิ์','นางฟ้านำทางทุกก้าวของคุณ'],
      ['ความเมตตา','เมตตาตัวเองและผู้อื่น'],
      ['ความฝัน','ความฝันของคุณกำลังเป็นจริง'],
      ['ความสงบ','ค้นหาสันติภายใน'],
      ['จุดมุ่งหมาย','คุณอยู่บนเส้นทางที่ถูกต้อง'],
      ['พร','พรกำลังหลั่งไหลมาหาคุณ'],
      ['ความชัดเจน','ความชัดเจนกำลังมาถึง'],
      ['การปลดปล่อย','ปล่อยวางสิ่งที่ไม่เป็นประโยชน์'],
      ['การเปลี่ยนแปลง','การเปลี่ยนแปลงนำมาซึ่งสิ่งดี'],
      ['การสวดมนต์','คำอธิษฐานของคุณได้รับการฟัง'],
      ['สัญชาตญาณ','เชื่อเสียงภายในของคุณ'],
      ['ความหวัง','ความหวังส่องสว่างเส้นทางของคุณ'],
      ['พระคุณ','พระคุณอันศักดิ์สิทธิ์ลงมาบนคุณ'],
      ['ความจริง','ซื่อสัตย์ต่อตัวเอง'],
      ['การยอมจำนน','ปล่อยวางการควบคุม'],
      ['เด็กในตัว','รักษาเด็กในตัวคุณ'],
      ['การทำสมาธิ','ความเงียบสงบเปิดประตูสู่นางฟ้า'],
      ['โชคชะตา','คุณกำลังบรรลุเป้าหมาย'],
      ['ความสมดุล','หาความสมดุลในทุกสิ่ง'],
      ['แสงสว่าง','คุณนำพาแสงสว่าง'],
      ['วิญญาณคู่','วิญญาณที่ใกล้ชิดอยู่ใกล้'],
      ['การล้างพิษ','ชำระร่างกาย จิตใจ และวิญญาณจากพิษ'],
      ['อัครเทวทูตไมเคิล','ไมเคิลปกป้องและนำทางคุณ'],
      ['อัครเทวทูตราฟาเอล','ราฟาเอลนำการรักษามาสู่ชีวิตคุณ'],
      ['ขอบเขต','กำหนดขอบเขตที่ดีต่อสุขภาพด้วยความรัก'],
      ['ความคิดสร้างสรรค์','แสดงออกตัวเองผ่านความคิดสร้างสรรค์']
    ],
    zh:[
      ['疗愈','天使为你送来疗愈能量'],
      ['宽恕','放下怨恨。宽恕解放灵魂'],
      ['爱','爱围绕着你'],
      ['信任','相信神圣计划'],
      ['平和','平静来自内心'],
      ['丰盛','宇宙为你准备礼物'],
      ['守护天使','你的天使就在身边'],
      ['勇气','天使给你力量'],
      ['感恩','感恩开启新的祝福'],
      ['耐心','一切都有其时'],
      ['信仰','加强你的信仰'],
      ['喜悦','喜悦是你的自然状态'],
      ['智慧','答案已在你内心'],
      ['力量','你比你想象的更强大'],
      ['奇迹','准备好迎接奇迹'],
      ['保护','你是安全的'],
      ['和谐','和谐正在恢复'],
      ['新开始','新的篇章开始了'],
      ['神圣指引','天使引导你的每一步'],
      ['慈悲','对自己和他人慈悲'],
      ['梦想','你的梦想正在实现'],
      ['宁静','寻找内心的平静'],
      ['使命','你在正确的道路上'],
      ['祝福','祝福涌向你'],
      ['清晰','清晰即将到来'],
      ['释放','放下不再服务于你的'],
      ['蜕变','改变带来美好'],
      ['祈祷','你的祈祷被听见了'],
      ['直觉','相信你的内心声音'],
      ['希望','希望照亮你的道路'],
      ['恩典','神圣恩典降临于你'],
      ['真实','对自己诚实'],
      ['臣服','放下控制'],
      ['内在小孩','疗愈你的内在小孩'],
      ['冥想','静默为天使打开门'],
      ['命运','你正在实现你的目标'],
      ['平衡','在一切中找到平衡'],
      ['光明','你携带着光'],
      ['灵魂伴侣','亲近的灵魂在附近'],
      ['排毒','净化身体、思想和灵魂'],
      ['大天使米迦勒','米迦勒保护和引导你'],
      ['大天使拉斐尔','拉斐尔为你的生命带来疗愈'],
      ['界限','用爱设定健康的界限'],
      ['创造力','通过创造力表达自己']
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
    ],
    uk:[
      ['\u0411\u043B\u0430\u0437\u0435\u043D\u044C','\u041D\u043E\u0432\u0456 \u043F\u043E\u0447\u0430\u0442\u043A\u0438, \u043D\u0435\u0432\u0438\u043D\u043D\u0456\u0441\u0442\u044C, \u0441\u043F\u043E\u043D\u0442\u0430\u043D\u043D\u0456\u0441\u0442\u044C, \u0432\u0456\u043B\u044C\u043D\u0438\u0439 \u0434\u0443\u0445','\u0411\u0435\u0437\u0440\u043E\u0437\u0441\u0443\u0434\u043D\u0456\u0441\u0442\u044C, \u0440\u0438\u0437\u0438\u043A, \u0441\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u043D\u043D\u044F','\u0421\u0442\u0440\u0438\u0431\u043E\u043A \u0432\u0456\u0440\u0438 \u0443 \u043D\u0435\u0432\u0456\u0434\u043E\u043C\u0435'],
      ['\u041C\u0430\u0433','\u0421\u0438\u043B\u0430 \u0432\u043E\u043B\u0456, \u0442\u0432\u043E\u0440\u0456\u043D\u043D\u044F, \u043F\u0440\u043E\u044F\u0432, \u0432\u0438\u043D\u0430\u0445\u0456\u0434\u043B\u0438\u0432\u0456\u0441\u0442\u044C','\u041C\u0430\u043D\u0456\u043F\u0443\u043B\u044F\u0446\u0456\u044F, \u043D\u0435\u0440\u043E\u0437\u043A\u0440\u0438\u0442\u0456 \u0442\u0430\u043B\u0430\u043D\u0442\u0438, \u043E\u0431\u043C\u0430\u043D','\u0423 \u0432\u0430\u0441 \u0454 \u0432\u0441\u0456 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0456 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438'],
      ['\u0412\u0435\u0440\u0445\u043E\u0432\u043D\u0430 \u0416\u0440\u0438\u0446\u044F','\u0406\u043D\u0442\u0443\u0457\u0446\u0456\u044F, \u0442\u0430\u0454\u043C\u043D\u0438\u0446\u044F, \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0454 \u0437\u043D\u0430\u043D\u043D\u044F, \u043F\u0456\u0434\u0441\u0432\u0456\u0434\u043E\u043C\u0456\u0441\u0442\u044C','\u0421\u0435\u043A\u0440\u0435\u0442\u0438, \u0432\u0456\u0434\u0441\u0442\u043E\u0440\u043E\u043D\u0435\u043D\u0456\u0441\u0442\u044C, \u043C\u043E\u0432\u0447\u0430\u043D\u043D\u044F','\u0414\u043E\u0432\u0456\u0440\u0442\u0435\u0441\u044C \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u044C\u043E\u043C\u0443 \u0433\u043E\u043B\u043E\u0441\u0443'],
      ['\u0406\u043C\u043F\u0435\u0440\u0430\u0442\u0440\u0438\u0446\u044F','\u0414\u043E\u0441\u0442\u0430\u0442\u043E\u043A, \u0442\u0443\u0440\u0431\u043E\u0442\u0430, \u0440\u043E\u0434\u044E\u0447\u0456\u0441\u0442\u044C, \u043F\u0440\u0438\u0440\u043E\u0434\u0430, \u043A\u0440\u0430\u0441\u0430','\u0417\u0430\u043B\u0435\u0436\u043D\u0456\u0441\u0442\u044C, \u0437\u0430\u0434\u0443\u0448\u043B\u0438\u0432\u0456\u0441\u0442\u044C, \u0442\u0432\u043E\u0440\u0447\u0438\u0439 \u0431\u043B\u043E\u043A','\u041F\u0440\u0438\u0439\u043C\u0456\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u043A \u0456 \u0437\u0440\u043E\u0441\u0442\u0430\u043D\u043D\u044F'],
      ['\u0406\u043C\u043F\u0435\u0440\u0430\u0442\u043E\u0440','\u0410\u0432\u0442\u043E\u0440\u0438\u0442\u0435\u0442, \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430, \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u0456\u0441\u0442\u044C, \u043B\u0456\u0434\u0435\u0440\u0441\u0442\u0432\u043E','\u0422\u0438\u0440\u0430\u043D\u0456\u044F, \u0436\u043E\u0440\u0441\u0442\u043A\u0456\u0441\u0442\u044C, \u0434\u043E\u043C\u0456\u043D\u0443\u0432\u0430\u043D\u043D\u044F','\u0411\u0443\u0434\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u044E \u0456\u043C\u043F\u0435\u0440\u0456\u044E \u0437 \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0456\u043D\u043E\u044E'],
      ['\u0406\u0454\u0440\u043E\u0444\u0430\u043D\u0442','\u0422\u0440\u0430\u0434\u0438\u0446\u0456\u044F, \u0434\u0443\u0445\u043E\u0432\u043D\u0430 \u043C\u0443\u0434\u0440\u0456\u0441\u0442\u044C, \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0456\u0441\u0442\u044C, \u043E\u0441\u0432\u0456\u0442\u0430','\u0411\u0443\u043D\u0442\u0430\u0440\u0441\u0442\u0432\u043E, \u043F\u0456\u0434\u0440\u0438\u0432\u043D\u0456\u0441\u0442\u044C, \u043D\u043E\u0432\u0456 \u043F\u0456\u0434\u0445\u043E\u0434\u0438','\u0428\u0443\u043A\u0430\u0439\u0442\u0435 \u0433\u043B\u0438\u0431\u0448\u0438\u0439 \u0434\u0443\u0445\u043E\u0432\u043D\u0438\u0439 \u0441\u0435\u043D\u0441'],
      ['\u0417\u0430\u043A\u043E\u0445\u0430\u043D\u0456','\u041B\u044E\u0431\u043E\u0432, \u0433\u0430\u0440\u043C\u043E\u043D\u0456\u044F, \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u0442\u0432\u043E, \u0432\u0438\u0431\u0456\u0440, \u0454\u0434\u043D\u0456\u0441\u0442\u044C','\u0414\u0438\u0441\u0433\u0430\u0440\u043C\u043E\u043D\u0456\u044F, \u0434\u0438\u0441\u0431\u0430\u043B\u0430\u043D\u0441, \u043D\u0435\u0443\u0437\u0433\u043E\u0434\u0436\u0435\u043D\u0456\u0441\u0442\u044C','\u041E\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0441\u0435\u0440\u0446\u0435\u043C \u0456 \u0434\u0443\u0448\u0435\u044E'],
      ['\u041A\u043E\u043B\u0456\u0441\u043D\u0438\u0446\u044F','\u0420\u0456\u0448\u0443\u0447\u0456\u0441\u0442\u044C, \u0441\u0438\u043B\u0430 \u0432\u043E\u043B\u0456, \u0442\u0440\u0456\u0443\u043C\u0444, \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C','\u0412\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0443, \u0430\u0433\u0440\u0435\u0441\u0456\u044F, \u0431\u0435\u0437\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u0456\u0441\u0442\u044C','\u041F\u0435\u0440\u0435\u043C\u043E\u0433\u0430 \u0447\u0435\u0440\u0435\u0437 \u0437\u043E\u0441\u0435\u0440\u0435\u0434\u0436\u0435\u043D\u0443 \u0432\u043E\u043B\u044E'],
      ['\u0421\u0438\u043B\u0430','\u041C\u0443\u0436\u043D\u0456\u0441\u0442\u044C, \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u044F \u0441\u0438\u043B\u0430, \u0441\u043F\u0456\u0432\u0447\u0443\u0442\u0442\u044F, \u0442\u0435\u0440\u043F\u0456\u043D\u043D\u044F','\u041D\u0435\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456\u0441\u0442\u044C, \u0441\u043B\u0430\u0431\u043A\u0456\u0441\u0442\u044C, \u043D\u0435\u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456\u0441\u0442\u044C','\u041C\u2019\u044F\u043A\u0430 \u0441\u0438\u043B\u0430 \u043F\u0435\u0440\u0435\u043C\u0430\u0433\u0430\u0454 \u0432\u0441\u0435'],
      ['\u0412\u0456\u0434\u043B\u044E\u0434\u043D\u0438\u043A','\u041F\u043E\u0448\u0443\u043A \u0434\u0443\u0448\u0456, \u0441\u0430\u043C\u043E\u0430\u043D\u0430\u043B\u0456\u0437, \u0441\u0430\u043C\u043E\u0442\u043D\u0456\u0441\u0442\u044C, \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0454 \u043A\u0435\u0440\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u043E','\u0406\u0437\u043E\u043B\u044F\u0446\u0456\u044F, \u0441\u0430\u043C\u043E\u0442\u043D\u0456\u0441\u0442\u044C, \u0432\u0456\u0434\u0441\u0442\u043E\u0440\u043E\u043D\u0435\u043D\u0456\u0441\u0442\u044C','\u041E\u0441\u0432\u0456\u0442\u0456\u0442\u044C \u0448\u043B\u044F\u0445 \u0437\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0438'],
      ['\u041A\u043E\u043B\u0435\u0441\u043E \u0424\u043E\u0440\u0442\u0443\u043D\u0438','\u0417\u043C\u0456\u043D\u0430, \u0446\u0438\u043A\u043B\u0438, \u0434\u043E\u043B\u044F, \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043D\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442, \u0443\u0434\u0430\u0447\u0430','\u041D\u0435\u0432\u0434\u0430\u0447\u0430, \u043E\u043F\u0456\u0440 \u0437\u043C\u0456\u043D\u0430\u043C, \u0440\u0443\u0439\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0446\u0438\u043A\u043B\u0456\u0432','\u041A\u043E\u043B\u0435\u0441\u043E \u043E\u0431\u0435\u0440\u0442\u0430\u0454\u0442\u044C\u0441\u044F \u2014 \u043F\u0440\u0438\u0439\u043C\u0456\u0442\u044C \u0437\u043C\u0456\u043D\u0438'],
      ['\u0421\u043F\u0440\u0430\u0432\u0435\u0434\u043B\u0438\u0432\u0456\u0441\u0442\u044C','\u0427\u0435\u0441\u043D\u0456\u0441\u0442\u044C, \u0456\u0441\u0442\u0438\u043D\u0430, \u0437\u0430\u043A\u043E\u043D, \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u0442\u0430 \u043D\u0430\u0441\u043B\u0456\u0434\u043E\u043A','\u041D\u0435\u0441\u043F\u0440\u0430\u0432\u0435\u0434\u043B\u0438\u0432\u0456\u0441\u0442\u044C, \u043D\u0435\u0447\u0435\u0441\u043D\u0456\u0441\u0442\u044C, \u0431\u0435\u0437\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C','\u0406\u0441\u0442\u0438\u043D\u0430 \u0456 \u0431\u0430\u043B\u0430\u043D\u0441 \u043F\u0435\u0440\u0435\u0432\u0430\u0436\u0430\u044E\u0442\u044C'],
      ['\u041F\u043E\u0432\u0456\u0448\u0435\u043D\u0438\u0439','\u041A\u0430\u043F\u0456\u0442\u0443\u043B\u044F\u0446\u0456\u044F, \u0432\u0456\u0434\u043F\u0443\u0441\u043A\u0430\u043D\u043D\u044F, \u043D\u043E\u0432\u0430 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0430, \u043F\u0430\u0443\u0437\u0430','\u0417\u0430\u0441\u0442\u0456\u0439, \u043E\u043F\u0456\u0440, \u043D\u0435\u0440\u0456\u0448\u0443\u0447\u0456\u0441\u0442\u044C','\u0417\u0434\u0430\u0439\u0442\u0435\u0441\u044C, \u0449\u043E\u0431 \u0437\u0434\u043E\u0431\u0443\u0442\u0438 \u043D\u043E\u0432\u0435 \u0431\u0430\u0447\u0435\u043D\u043D\u044F'],
      ['\u0421\u043C\u0435\u0440\u0442\u044C','\u0417\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F, \u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F, \u043F\u0435\u0440\u0435\u0445\u0456\u0434, \u0437\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u043D\u044F','\u041E\u043F\u0456\u0440 \u0437\u043C\u0456\u043D\u0430\u043C, \u0437\u0430\u0441\u0442\u0456\u0439, \u0440\u043E\u0437\u043F\u0430\u0434','\u0422\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0443\u0439\u0442\u0435\u0441\u044C \u0456 \u043F\u0435\u0440\u0435\u0440\u043E\u0434\u0456\u0442\u044C\u0441\u044F'],
      ['\u041F\u043E\u043C\u0456\u0440\u043A\u043E\u0432\u0430\u043D\u0456\u0441\u0442\u044C','\u0411\u0430\u043B\u0430\u043D\u0441, \u0442\u0435\u0440\u043F\u0456\u043D\u043D\u044F, \u043F\u043E\u043C\u0456\u0440\u043D\u0456\u0441\u0442\u044C, \u0433\u0430\u0440\u043C\u043E\u043D\u0456\u044F, \u043C\u0435\u0442\u0430','\u0414\u0438\u0441\u0431\u0430\u043B\u0430\u043D\u0441, \u043D\u0430\u0434\u043C\u0456\u0440\u043D\u0456\u0441\u0442\u044C, \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C \u0431\u0430\u0447\u0435\u043D\u043D\u044F','\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u0441\u0432\u0456\u0439 \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441'],
      ['\u0414\u0438\u044F\u0432\u043E\u043B','\u0422\u0456\u043D\u044C\u043E\u0432\u0435 \u00AB\u044F\u00BB, \u043F\u0440\u0438\u0432\u2019\u044F\u0437\u0430\u043D\u0456\u0441\u0442\u044C, \u0437\u0430\u043B\u0435\u0436\u043D\u0456\u0441\u0442\u044C, \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F','\u0417\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u043D\u044F \u0432\u0456\u0434 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u044C, \u0441\u0432\u043E\u0431\u043E\u0434\u0430, \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0441\u0438\u043B\u0438','\u0417\u0432\u0456\u043B\u044C\u043D\u0456\u0442\u044C\u0441\u044F \u0432\u0456\u0434 \u0441\u0432\u043E\u0457\u0445 \u043B\u0430\u043D\u0446\u044E\u0433\u0456\u0432'],
      ['\u0412\u0435\u0436\u0430','\u041F\u043E\u0442\u0440\u044F\u0441\u0456\u043D\u043D\u044F, \u043E\u0434\u043A\u0440\u043E\u0432\u0435\u043D\u043D\u044F, \u0440\u0430\u043F\u0442\u043E\u0432\u0430 \u0437\u043C\u0456\u043D\u0430, \u043F\u0440\u043E\u0431\u0443\u0434\u0436\u0435\u043D\u043D\u044F','\u0417\u0430\u043F\u043E\u0431\u0456\u0433\u0430\u043D\u043D\u044F \u043A\u0430\u0442\u0430\u0441\u0442\u0440\u043E\u0444\u0456, \u0441\u0442\u0440\u0430\u0445 \u0437\u043C\u0456\u043D, \u0437\u0432\u043E\u043B\u0456\u043A\u0430\u043D\u043D\u044F','\u0420\u0443\u0439\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0432\u043E\u0440\u044E\u0454 \u043F\u0440\u043E\u0441\u0442\u0456\u0440 \u0434\u043B\u044F \u0456\u0441\u0442\u0438\u043D\u0438'],
      ['\u0417\u0456\u0440\u043A\u0430','\u041D\u0430\u0434\u0456\u044F, \u0432\u0456\u0440\u0430, \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F, \u0441\u043F\u043E\u043A\u0456\u0439, \u043D\u0430\u0442\u0445\u043D\u0435\u043D\u043D\u044F','\u0412\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C \u0432\u0456\u0440\u0438, \u0432\u0456\u0434\u0447\u0430\u0439, \u0432\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0456\u0441\u0442\u044C','\u041D\u0430\u0434\u0456\u044F \u0441\u044F\u0454 \u0443 \u0442\u0435\u043C\u0440\u044F\u0432\u0456'],
      ['\u041C\u0456\u0441\u044F\u0446\u044C','\u0406\u043B\u044E\u0437\u0456\u044F, \u0441\u0442\u0440\u0430\u0445, \u0442\u0440\u0438\u0432\u043E\u0433\u0430, \u0456\u043D\u0442\u0443\u0457\u0446\u0456\u044F, \u043F\u0456\u0434\u0441\u0432\u0456\u0434\u043E\u043C\u0456\u0441\u0442\u044C','\u0417\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u043D\u044F \u0432\u0456\u0434 \u0441\u0442\u0440\u0430\u0445\u0443, \u043F\u0440\u0438\u0434\u0443\u0448\u0435\u043D\u0456 \u0435\u043C\u043E\u0446\u0456\u0457, \u044F\u0441\u043D\u0456\u0441\u0442\u044C','\u041F\u0440\u043E\u0439\u0434\u0456\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u0456\u043B\u044E\u0437\u0456\u044E \u0434\u043E \u0456\u0441\u0442\u0438\u043D\u0438'],
      ['\u0421\u043E\u043D\u0446\u0435','\u0420\u0430\u0434\u0456\u0441\u0442\u044C, \u0443\u0441\u043F\u0456\u0445, \u0436\u0438\u0442\u0442\u0454\u0432\u0430 \u0441\u0438\u043B\u0430, \u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u0456\u0441\u0442\u044C, \u0442\u0435\u043F\u043B\u043E','\u0412\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u044F \u0434\u0438\u0442\u0438\u043D\u0430, \u043F\u0440\u0438\u0433\u043D\u0456\u0447\u0435\u043D\u0456\u0441\u0442\u044C, \u043D\u0430\u0434\u043C\u0456\u0440\u043D\u0438\u0439 \u043E\u043F\u0442\u0438\u043C\u0456\u0437\u043C','\u0421\u044F\u044E\u0447\u0430 \u0440\u0430\u0434\u0456\u0441\u0442\u044C \u043E\u0441\u0432\u0456\u0442\u043B\u044E\u0454 \u0432\u0430\u0448 \u0448\u043B\u044F\u0445'],
      ['\u0421\u0443\u0434','\u0420\u043E\u0437\u0434\u0443\u043C\u0438, \u0440\u043E\u0437\u043F\u043B\u0430\u0442\u0430, \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u043F\u043E\u043A\u043B\u0438\u043A, \u0432\u0456\u0434\u043F\u0443\u0449\u0435\u043D\u043D\u044F','\u041D\u0435\u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456\u0441\u0442\u044C, \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456\u0439 \u043A\u0440\u0438\u0442\u0438\u043A, \u0456\u0433\u043D\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u043A\u043B\u0438\u043A\u0443','\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0439\u0442\u0435 \u043D\u0430 \u0432\u0438\u0449\u0438\u0439 \u043F\u043E\u043A\u043B\u0438\u043A'],
      ['\u0421\u0432\u0456\u0442','\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F, \u0434\u043E\u0441\u044F\u0433\u043D\u0435\u043D\u043D\u044F, \u0446\u0456\u043B\u0456\u0441\u043D\u0456\u0441\u0442\u044C, \u043F\u043E\u0434\u043E\u0440\u043E\u0436','\u041D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0456\u0441\u0442\u044C, \u0441\u043A\u043E\u0440\u043E\u0447\u0435\u043D\u043D\u044F \u0448\u043B\u044F\u0445\u0443, \u043F\u043E\u0448\u0443\u043A \u0437\u0430\u043A\u0440\u0438\u0442\u0442\u044F','\u0412\u0438 \u043F\u0440\u0438\u0431\u0443\u043B\u0438 \u2014 \u0441\u0432\u044F\u0442\u043A\u0443\u0439\u0442\u0435']
    ],
    am:[
      ['ሞኝ','አዲስ ጅምር፣ ንጽህና','ቸልተኝነት፣ ሃሳብ ማቆም','ወደ ማይታወቀው ዘሎ ሂድ'],
      ['ጠቁሚ','ፈቃደኝነት፣ ፈጠራ','ማጭበርበር፣ ድብቅ ስጦታ','ሁሉም መሳሪያ አለህ'],
      ['ከፍተኛ ካህናዊ','ስሜት፣ ምስጢር','ምስጢሮች፣ ዝምታ','ውስጣዊ ድምጽህን ታምን'],
      ['ንግሥት','ብዛት፣ ፍሬ','ጥገኝነት፣ ፈጠራ ማቆም','ብዛትን ቀበል'],
      ['ንጉሥ','ሥልጣን፣ ሥርዓት','አምባ ገነን','ዲሲፕሊን ቤተ ሀገርህን ሥ'],
      ['ሊቀ ካህናት','ባህል፣ መንፈሳዊ ጥበብ','ዓምጸኝነት','ጥልቅ መንፈሳዊ ትርጉም ፈልግ'],
      ['ፍቅረኛሞች','ፍቅር፣ ስምምነት፣ ምርጫ','አለ ስምምነት','ከልብ ምረጥ'],
      ['ሠረቃ','ቆርጦ ዓሳቢ፣ ፈቃድ','አቅጣጫ ማጣት','ጥንካሬ ያሸንፋል'],
      ['ጥንካሬ','ድፍረት፣ ውስጣዊ ጥንካሬ','ጥርጣሬ','ቅን ኃይል ሁሉን ያሸንፋል'],
      ['ሊቅ','ሃሳብ፣ ብቸኝነት','መነጠል','ከውስጥ ያብሩ'],
      ['የዕድል ጎማ','ለውጥ፣ ዕጣ ፈንታ','መጥፎ ዕድል','ጎማ ይሽከረከራል'],
      ['ፍትህ','ፍትሃዊነት፣ እውነት','ፍትህ ማጣት','እውነትና ሚዛን ያሸንፋሉ'],
      ['የተሰቀለ ሰው','አሳልፍ፣ አዲስ ዕይታ','ያቆምህ','አሳልፍ አዲስ ዕይታ ለማግኘት'],
      ['ሞት','ፍጻሜ፣ ለውጥ','ለውጥ መቃወም','ለውጥ ሆኑ እንደገና ይወለዱ'],
      ['ቁጥቁጥ','ሚዛን፣ ዓላማ','አለ ሚዛን','ሚዛን ፈልጉ'],
      ['ሰይጣን','ጥላ ነፍስ፣ ትስስር','ነፃ መሆን','ከሰንሰለቶቹ ሸሽ'],
      ['ሚናሬ','ሁከት፣ ራዕይ','አደጋ ማስቀረት','ጥፋት ለእውነት ቦታ ይፈጥራል'],
      ['ኮከብ','ተስፋ፣ ሃሳቡ','ተስፋ ማጣት','ተስፋ ይበሩ'],
      ['ጨረቃ','ቅዠት፣ ፍርሃት','ፍርሃት ማስወገድ','ቅዠቱን ካልፍ ወደ እውነት'],
      ['ፀሐይ','ደስታ፣ ስኬት','ዝቅ ያለ ደስታ','ቀዩ ደስታ ያበራሃል'],
      ['ፍርድ','ሃሳብ፣ ጥሪ','ጥርጣሬ','ዕጣ ፈንታህን ሁን'],
      ['ዓለም','ፍጻሜ፣ ስኬት','ያልተጠናቀቀ','ደርሰዋሉ — ይደሰቱ']
    ],
    ar:[
      ['الأحمق','بدايات جديدة، براءة، عفوية','تهور، مخاطرة','قفزة إيمان في المجهول'],
      ['الساحر','الإرادة، الخلق، التجلي','التلاعب، مواهب كامنة','لديك كل الأدوات اللازمة'],
      ['الكاهنة العليا','الحدس، الغموض، المعرفة الداخلية','أسرار، انسحاب','ثق بصوتك الداخلي'],
      ['الإمبراطورة','الوفرة، الرعاية، الخصوبة','الاعتماد، حصار الإبداع','احتضن الوفرة والنمو'],
      ['الإمبراطور','السلطة، الهيكل، الاستقرار','الطغيان، الصلابة','ابنِ إمبراطوريتك بانضباط'],
      ['الحبر الأعظم','التقليد، الحكمة الروحية','التمرد، مناهج جديدة','ابحث عن المعنى الروحي العميق'],
      ['العشاق','الحب، الانسجام، الشراكة','الخلاف، عدم التوازن','اختر بقلبك وروحك'],
      ['العجلة','الحسم، الإرادة، الانتصار','فقدان الاتجاه','النصر بإرادة مركزة'],
      ['القوة','الشجاعة، القوة الداخلية','الشك الذاتي، الضعف','القوة اللطيفة تتغلب على الكل'],
      ['الناسك','البحث الروحي، التأمل','العزلة، الوحدة','أضيء الطريق من الداخل'],
      ['عجلة الحظ','التغيير، الدورات، المصير','الحظ السيء','العجلة تدور — احتضن التغيير'],
      ['العدالة','العدل، الحقيقة، القانون','الظلم','الحقيقة والتوازن ينتصران'],
      ['المشنوق','الاستسلام، منظور جديد','المماطلة، التردد','استسلم لرؤية جديدة'],
      ['الموت','نهايات، تحول، انتقال','مقاومة التغيير','تحول وتجدد'],
      ['الاعتدال','التوازن، الصبر، الانسجام','عدم التوازن، الإفراط','جد توازنك المثالي'],
      ['الشيطان','الذات الظلية، التعلق','التحرر من القيود','تحرر من قيودك'],
      ['البرج','اضطراب، وحي، تغيير مفاجئ','تفادي الكارثة','الدمار يخلق مساحة للحقيقة'],
      ['النجمة','الأمل، الإيمان، التجديد','اليأس، الانفصال','الأمل يضيء في الظلام'],
      ['القمر','الوهم، الخوف، الحدس','التحرر من الخوف','انتقل عبر الوهم إلى الحقيقة'],
      ['الشمس','الفرح، النجاح، الحيوية','الطفل الداخلي','الفرح المشع ينير طريقك'],
      ['الحكم','التأمل، الاستجابة الداخلية','الشك الذاتي','أجب على ندائك الأعلى'],
      ['العالم','اكتمال، إنجاز، شمولية','لم يكتمل','لقد وصلت — احتفل']
    ],
    be:[
      ['Шут','Новыя пачаткі, нявіннасць','Бяздумнасць, рызыка','Скачок веры ў невядомасць'],
      ['Маг','Воля, творчасць, праява','Маніпуляцыі, хітрасць','У вас ёсць усе інструменты'],
      ['Вярхоўная Жрыца','Інтуіцыя, таямніца, веданне','Сакрэты, маўчанне','Давярайце ўнутранаму голасу'],
      ['Імператрыца','Дастатак, клопат, урадлівасць','Залежнасць, застой','Прымайце дастатак і рост'],
      ['Імператар','Аўтарытэт, структура, стабільнасць','Тыранія, жорсткасць','Будуйце з дысцыплінай'],
      ['Іерафант','Традыцыя, духоўная мудрасць','Бунт, новыя падыходы','Шукайце духоўны сэнс'],
      ['Каханыя','Любоў, гармонія, выбар','Разлад, дысбаланс','Выбірайце сэрцам і душой'],
      ['Калясніца','Рашучасць, воля, перамога','Адсутнасць напрамку','Перамога праз сканцэнтраваную волю'],
      ['Сіла','Смеласць, унутраная сіла','Сумненне, слабасць','Мяккая сіла перамагае'],
      ['Адшэльнік','Пошук душы, роздум','Ізаляцыя, самотнасць','Асвятляйце шлях знутры'],
      ['Кола Фартуны','Перамены, лёс, удача','Нядача, супраціў','Кола круціцца — прымайце перамены'],
      ['Справядлівасць','Справядлівасць, праўда, закон','Несправядлівасць','Праўда і раўнавага перамагаюць'],
      ['Падвешаны','Адданасць, новы погляд','Цягавітасць, нерашучасць','Адданасць прыносіць новае бачанне'],
      ['Смерць','Канцы, трансфармацыя','Супраціў зменам','Трансфармуйцеся і адрадзіцеся'],
      ['Памяркоўнасць','Раўнавага, цярпенне, гармонія','Дысбаланс, залішняе','Знайдзіце сваю ідэальную раўнавагу'],
      ['Д\'ябал','Цёмнае Я, прывязанасць','Вызваленне ад абмежаванняў','Вырвіцеся з кайданоў'],
      ['Вежа','Замяшанне, адкрыццё','Пазбяганне катастрофы','Разбурэнне стварае прастору для праўды'],
      ['Зорка','Надзея, вера, аднаўленне','Адчай, адарванасць','Надзея зіхаціць у цемры'],
      ['Месяц','Ілюзія, страх, інтуіцыя','Вызваленне ад страху','Прайдзіце скрозь ілюзію да праўды'],
      ['Сонца','Радасць, поспех, жыццёвасць','Унутранае дзіця','Зіхоткая радасць асвятляе шлях'],
      ['Суд','Роздум, унутраны заклік','Сумненне','Адкажыце на вышэйшы заклік'],
      ['Свет','Завяршэнне, дасягненне, цэласнасць','Незавершанасць','Вы прыбылі — святкуйце']
    ],
    cs:[
      ['Blázen','Nové začátky, nevinnost','Lehkomyslnost, riskování','Skok víry do neznáma'],
      ['Mág','Vůle, tvorba, manifestace','Manipulace, skryté talenty','Máte všechny potřebné nástroje'],
      ['Velekněžka','Intuice, tajemství, vnitřní znalost','Tajemství, mlčení','Věřte svému vnitřnímu hlasu'],
      ['Císařovna','Hojnost, péče, plodnost','Závislost, kreativní blok','Přijměte hojnost a růst'],
      ['Císař','Autorita, struktura, stabilita','Tyranie, rigidita','Budujte s disciplínou'],
      ['Hierofant','Tradice, duchovní moudrost','Vzpoura, nové přístupy','Hledejte hlubší duchovní smysl'],
      ['Milenci','Láska, harmonie, partnerství','Disharmonie, nerovnováha','Vyberte si srdcem i duší'],
      ['Vůz','Odhodlání, vůle, triumf','Nedostatek směru','Vítězství soustředěnou vůlí'],
      ['Síla','Odvaha, vnitřní síla, soucit','Pochybnosti, slabost','Jemná síla překonává vše'],
      ['Poustevník','Hledání duše, introspekce','Izolace, samota','Svítěte cestu zevnitř'],
      ['Kolo štěstí','Změna, cykly, osud','Smůla, odpor ke změně','Kolo se točí — přijměte změnu'],
      ['Spravedlnost','Spravedlnost, pravda, zákon','Nespravedlnost','Pravda a rovnováha vítězí'],
      ['Oběšenec','Odevzdání, nový pohled','Váhání, nerozhodnost','Odevzdejte se pro nové vidění'],
      ['Smrt','Konce, transformace','Odpor ke změně','Proměňte se a znovuzroďte se'],
      ['Mírnost','Rovnováha, trpělivost, harmonie','Nerovnováha, přebytek','Najděte svou dokonalou rovnováhu'],
      ['Ďábel','Temné já, připoutanost','Osvobození od omezení','Osvoboďte se z pout'],
      ['Věž','Otřes, zjevení, náhlá změna','Vyhýbání se katastrofě','Zkáza vytváří prostor pro pravdu'],
      ['Hvězda','Naděje, víra, obnova','Zoufalství, odpojení','Naděje svítí ve tmě'],
      ['Měsíc','Iluze, strach, intuice','Uvolnění strachu','Procházejte iluzí k pravdě'],
      ['Slunce','Radost, úspěch, vitalita','Vnitřní dítě, pesimismus','Zářivá radost osvětluje cestu'],
      ['Soud','Reflexe, vnitřní volání','Pochybnosti','Odpovězte na vyšší volání'],
      ['Svět','Dokončení, úspěch, celistvost','Nedokončenost','Přijeli jste — slavte']
    ],
    ha:[
      ['Wawa','Sabon farko, kauna','Rashin hankali, hadari','Mataki na imani zuwa cikin rashin sanin abu'],
      ['Mai Sihiri','Nufin karfi, kirkira','Yaudarar, keta haddi','Kana da dukkan kayan aiki'],
      ['Babbar Firistace','Hankali, asiri','Sirri, shiru','Amince da muryar ciki naka'],
      ['Sarauniya','Yalwa, kula, albarka','Dogaro, toshe kirkira','Karbi yalwa da ci gaba'],
      ['Sarki','Iko, tsari, kwanciyar hankali','Zalunci, tsauri','Gina daularku da horo'],
      ['Babban Firist','Al\'ada, hikimar ruhaniya','Tawaye, hanyoyi sabo','Nemi zurfin ma\'ana ta ruhaniya'],
      ['Masoya','Ƙauna, jituwa, zabi','Sabani, rashin daidaito','Zabi da zuciyarka da ranka'],
      ['Karusar Yaƙi','Ƙuduri, nufin karfi, nasara','Rashin jagora','Nasara ta hanyar nufin mai iyaka'],
      ['Ƙarfin Hali','Jaruntaka, ƙarfin ciki','Shakka, rauni','Laulayin karfi yana yin nasara'],
      ['Mai Zaman Kadai','Neman ruhi, tunani','Keɓewa, kadaici','Haskaka hanya daga ciki'],
      ['Waƙar Dama','Canjin, zagaye, dama','Sa na mugun dama','Waƙar tana juyawa'],
      ['Adalci','Gaskiya, doka, dalili','Rashin adalci','Gaskiya da daidaito suna nasara'],
      ['Rataye','Miƙa wuya, sabon ra\'ayi','Jinkirta, rashin yanke shawara','Miƙa wuya don sabon hangen nesa'],
      ['Mutuwa','Ƙarewa, canji','Tsayin daka ga canjin','Canza kuma sake haihuwa'],
      ['Matsakaici','Daidaito, haƙuri, jituwa','Rashin daidaito','Nemi daidaitonka'],
      ['Shaiɗan','Inuwar kai, ɗaurewa','Ƙaurace wa iyakoki','Sakin sarkar'],
      ['Hasumiya','Tashin hankali, gaskiya','Kauce wa bala\'i','Halaka tana yin wuri don gaskiya'],
      ['Tauraron Sama','Bege, imani, sabuntawa','Ƙoƙarin bege','Bege yana haskakawa a cikin duhu'],
      ['Wata','Ruɗu, tsoro, hankali','Sakin tsoro','Ƙetare ruɗu don gaskiya'],
      ['Rana','Farin ciki, nasara, rayuwa','Ɓataccen farin ciki','Farin ciki yana haskaka tafarkin'],
      ['Hukunci','Tunani, kiran ciki','Shakkar kai','Amsa ƙiran mafi girma'],
      ['Duniya','Kammala, nasara, gaba ɗaya','Rashin kammala','An isa — yi murna']
    ],
    he:[
      ['השוטה','התחלות חדשות, תמימות','פזיזות, נטילת סיכונים','קפיצת אמונה אל הלא נודע'],
      ['הקוסם','כוח רצון, יצירה, גילוי','מניפולציה, כישרונות נסתרים','יש לך את כל הכלים הדרושים'],
      ['הכוהנת הגדולה','אינטואיציה, מסתורין, ידע פנימי','סודות, שתיקה','בטח בקולך הפנימי'],
      ['האימפרטריצה','שפע, טיפול, פוריות','תלות, חסימה יצירתית','חבק שפע וצמיחה'],
      ['הקיסר','סמכות, מבנה, יציבות','עריצות, נוקשות','בנה את האימפריה שלך בנחישות'],
      ['הכוהן הגדול','מסורת, חכמה רוחנית','מרד, גישות חדשות','חפש משמעות רוחנית עמוקה'],
      ['האוהבים','אהבה, הרמוניה, שותפויות','חוסר הרמוניה, חוסר איזון','בחר עם לבך ונשמתך'],
      ['המרכבה','נחישות, כוח רצון, ניצחון','חוסר כיוון, תוקפנות','ניצחון דרך רצון מרוכז'],
      ['הכוח','אומץ, כוח פנימי, חמלה','ספק עצמי, חולשה','כוח עדין מנצח הכל'],
      ['הנזיר','חיפוש נפשי, הסתגרות','בידוד, בדידות','האר את הדרך מבפנים'],
      ['גלגל המזל','שינוי, מחזורים, גורל','מזל רע, התנגדות לשינוי','הגלגל מסתובב — חבק שינוי'],
      ['הצדק','הוגנות, אמת, חוק','חוסר הוגנות','אמת ואיזון גוברים'],
      ['התלוי','כניעה, נקודת מבט חדשה','דחיינות, חוסר החלטיות','כנע כדי לקבל חזון חדש'],
      ['המוות','סיומים, טרנספורמציה','התנגדות לשינוי','הפוך ותיוולד מחדש'],
      ['מתינות','איזון, סבלנות, הרמוניה','חוסר איזון','מצא את האיזון המושלם שלך'],
      ['השטן','העצמי הצל, התקשרות','שחרור מגבלות','שחרר את עצמך מהאזיקים'],
      ['המגדל','תהפוכות, גילוי, שינוי פתאומי','מניעת אסון','ההרס יוצר מקום לאמת'],
      ['הכוכב','תקווה, אמונה, חידוש','ייאוש, ניתוק','תקווה זורחת בחשכה'],
      ['הירח','אשליה, פחד, אינטואיציה','שחרור פחד','נווט דרך האשליה אל האמת'],
      ['השמש','שמחה, הצלחה, חיוניות','ילד פנימי','שמחה זוהרת מאירה דרכך'],
      ['המשפט','הרהור, קריאה פנימית','ספק עצמי','ענה לקריאה הגבוהה שלך'],
      ['העולם','השלמה, הישג, שלמות','אי השלמה','הגעת — חגוג']
    ],
    hu:[
      ['A Bolond','Új kezdetek, ártatlanság','Meggondolatlanság, kockázat','Ugrás a hitbe az ismeretlenbe'],
      ['A Mágus','Akaraterő, teremtés, megnyilvánulás','Manipuláció, rejtett tehetség','Minden szükséges eszközöd megvan'],
      ['A Főpapnő','Intuíció, misztérium, belső tudás','Titkok, visszahúzódás','Bízz belső hangodban'],
      ['A Császárné','Bőség, gondoskodás, termékenység','Függőség, kreatív blokk','Fogadd el a bőséget és növekedést'],
      ['A Császár','Tekintély, struktúra, stabilitás','Zsarnokság, merevség','Építsd birodalmadat fegyelemmel'],
      ['A Főpap','Hagyomány, lelki bölcsesség','Lázadás, új megközelítések','Keress mélyebb lelki értelmet'],
      ['A Szerelmesek','Szerelem, harmónia, partnerség','Diszharmónia, egyensúlyhiány','Válassz szíveddel és lelkeddel'],
      ['A Harci Szekér','Elszántság, akaraterő, diadal','Irányválasztás hiánya','Győzelem összpontosított akarattal'],
      ['Az Erő','Bátorság, belső erő, együttérzés','Önkétely, gyengeség','A szelíd erő mindent legyőz'],
      ['A Remete','Lélekkeresés, elmélkedés','Elszigeteltség, magány','Világítsd meg az utat belülről'],
      ['A Szerencsekerék','Változás, ciklusok, sors','Balszerencse, ellenállás','A kerék forog — fogadd a változást'],
      ['Az Igazság','Igazságosság, igazság, törvény','Igazságtalanság','Az igazság és egyensúly győz'],
      ['Az Akasztott','Megadás, új perspektíva','Halogat, határozatlanság','Add meg magad az új látomásért'],
      ['A Halál','Végek, átalakulás','Ellenállás a változásnak','Alakulj át és újjászületsz'],
      ['Mértékletesség','Egyensúly, türelem, harmónia','Egyensúlyhiány','Találd meg tökéletes egyensúlyodat'],
      ['Az Ördög','Árnyék-én, ragaszkodás','Felszabadulás a korlátok alól','Törj ki a láncodból'],
      ['A Torony','Felfordulás, kinyilatkoztatás','Katasztrófa elhárítása','A rombolás helyet teremt az igazságnak'],
      ['A Csillag','Remény, hit, megújulás','Kétségbeesés, leválás','Remény ragyog a sötétségben'],
      ['A Hold','Illúzió, félelem, intuíció','Félelem elengedése','Navigálj az illúzión át az igazsághoz'],
      ['A Nap','Öröm, siker, vitalitás','Belső gyermek, pesszimizmus','A ragyogó öröm megvilágítja utadat'],
      ['Az Ítélet','Elmélkedés, belső hívás','Önkétely','Válaszolj magasabb hívásodra'],
      ['A Világ','Befejezés, teljesítmény, teljességet','Befejezetlen','Megérkeztél — ünnepelj']
    ],
    ja:[
      ['愚者','新しい始まり、無邪気さ、自発性','無謀さ、リスク','未知への信仰の跳躍'],
      ['魔術師','意志力、創造、顕現','操作、隠れた才能','必要な道具はすべて揃っている'],
      ['女教皇','直感、謎、内なる知識','秘密、引きこもり','内なる声を信頼して'],
      ['女帝','豊かさ、育み、肥沃','依存、創造的ブロック','豊かさと成長を受け入れて'],
      ['皇帝','権威、構造、安定','専制政治、硬直性','規律で帝国を築け'],
      ['教皇','伝統、精神的な知恵','反乱、新しいアプローチ','より深い精神的意味を求めて'],
      ['恋人','愛、調和、パートナーシップ','不調和、アンバランス','心と魂で選んで'],
      ['戦車','決意、意志力、勝利','方向性の欠如、攻撃性','集中した意志による勝利'],
      ['力','勇気、内なる強さ、思いやり','自己不信、弱さ','優しい力がすべてを克服する'],
      ['隠者','魂の探求、内省、孤独','孤立、孤独','内側から道を照らせ'],
      ['運命の輪','変化、サイクル、運命','不運、変化への抵抗','輪は回る — 変化を受け入れて'],
      ['正義','公正、真実、法律','不公正、不誠実','真実とバランスが勝つ'],
      ['吊られた男','降伏、新しい視点','先延ばし、優柔不断','新しいビジョンのために降伏せよ'],
      ['死神','終わり、変容、移行','変化への抵抗','変容して生まれ変われ'],
      ['節制','バランス、忍耐、調和','アンバランス、過剰','完璧なバランスを見つけて'],
      ['悪魔','影の自己、執着、依存','制限からの解放','鎖から解放されろ'],
      ['塔','激動、啓示、突然の変化','災害の回避','破壊は真実のための空間を作る'],
      ['星','希望、信仰、更新','絶望、切断','希望は暗闇に輝く'],
      ['月','幻想、恐怖、直感','恐怖の解放','幻想を通って真実へ'],
      ['太陽','喜び、成功、活力','内なる子供、悲観主義','輝く喜びが道を照らす'],
      ['審判','内省、内なる呼び声','自己不信','高い呼びかけに答えよ'],
      ['世界','完成、達成、全体性','未完成','到着した — 祝え']
    ],
    ko:[
      ['바보','새로운 시작, 순수함, 자발성','무모함, 위험 감수','알 수 없는 것으로의 믿음의 도약'],
      ['마법사','의지력, 창조, 현현','조작, 숨겨진 재능','필요한 도구가 모두 있습니다'],
      ['여사제','직관, 신비, 내면의 지식','비밀, 침묵','내면의 목소리를 믿으세요'],
      ['여황제','풍요, 돌봄, 비옥함','의존, 창의적 막힘','풍요와 성장을 받아들이세요'],
      ['황제','권위, 구조, 안정','독재, 경직성','규율로 제국을 건설하세요'],
      ['교황','전통, 영적 지혜','반항, 새로운 접근','더 깊은 영적 의미를 찾으세요'],
      ['연인','사랑, 조화, 파트너십','불화, 불균형','마음과 영혼으로 선택하세요'],
      ['전차','결단력, 의지력, 승리','방향 상실, 공격성','집중된 의지로 승리하세요'],
      ['힘','용기, 내면의 힘, 연민','자기 의심, 약함','부드러운 힘이 모든 것을 이깁니다'],
      ['은둔자','영혼 탐구, 내성, 고독','고립, 외로움','내면에서 길을 밝히세요'],
      ['운명의 수레바퀴','변화, 순환, 운명','불운, 변화 저항','바퀴가 돌아갑니다 — 변화를 받아들이세요'],
      ['정의','공정함, 진실, 법률','불공평, 불성실','진실과 균형이 승리합니다'],
      ['매달린 사람','항복, 새로운 관점','지연, 우유부단','새로운 비전을 위해 항복하세요'],
      ['죽음','끝, 변용, 이행','변화 저항','변용하고 다시 태어나세요'],
      ['절제','균형, 인내, 조화','불균형, 과잉','완벽한 균형을 찾으세요'],
      ['악마','그림자 자아, 집착','제약으로부터의 해방','사슬에서 해방되세요'],
      ['탑','격변, 계시, 갑작스러운 변화','재난 회피','파괴는 진실을 위한 공간을 만듭니다'],
      ['별','희망, 믿음, 갱신','절망, 단절','희망이 어둠 속에 빛납니다'],
      ['달','환상, 두려움, 직관','두려움의 해방','환상을 통해 진실로 나아가세요'],
      ['태양','기쁨, 성공, 활력','내면 아이, 지나친 낙관','빛나는 기쁨이 길을 비춥니다'],
      ['심판','성찰, 내면의 부름','자기 의심','더 높은 부름에 응답하세요'],
      ['세계','완성, 성취, 전체성','미완성','도착했습니다 — 축하하세요']
    ],
    mt:[
      ['Il-Buffun','Bidu ġdid, innoċenza','Imprudenza, riskji','Saltà tal-fidi fl-inkonnut'],
      ['Il-Maġiku','Rieda, ħolqien, manifestazzjoni','Manipulazzjoni, talenti moħbija','Għandek il-għodod kollha'],
      ['Il-Qassisat Kbira','Intuizzjoni, misteru, għarfien intern','Sigriet, rtirar','Afda l-vuċi ġewwienija tiegħek'],
      ['L-Imperatriċi','Abbundanza, kura, fertilità','Dipendenza, blokkament kreattiv','Ilqa\' l-abbundanza u t-tkabbir'],
      ['L-Imperatur','Awtorità, struttura, stabbiltà','Tirannija, riġidità','Ibni l-imperu tiegħek bid-dixxiplina'],
      ['Il-Ġerarkiku','Tradizzjoni, għerf spiritwali','Ribelljoni, approċċi ġodda','Fittex tifsira spiritwali aktar profonda'],
      ['L-Imħabbiet','Imħabba, armonija, sħubija','Dizarmonija, żbilanċ','Agħżel b\'qalbek u ruħek'],
      ['Il-Karettun','Determinazzjoni, rieda, trijonf','Nuqqas ta\' direzzjoni','Rebħa permezz tar-rieda konċentrata'],
      ['Il-Qawwa','Kuraġġ, qawwa interna, ħniena','Dubju, dgħjufija','Il-qawwa ħelwa titgħeleb fuq kollox'],
      ['Il-Penitent','Tfittxija tal-qalb, introspezzjoni','Iżolament, waħda','Dawwal it-triq minn ġewwa'],
      ['Ir-Rota tal-Fortuna','Tibdil, ċikli, destin','Xofrtok ħażina','Ir-rota ddur — ilqa\' t-tibdil'],
      ['Il-Ġustizzja','Ġustizzja, verità, liġi','Inġustizzja','Il-verità u l-bilanċ jirbaħu'],
      ['Il-Mimdud','Abbandun, perspettiva ġdida','Dewmien, indecizzjoni','Abbanduna biex takkwista viżjoni ġdida'],
      ['Il-Mewt','Tmiemiet, trasformazzjoni','Reżistenza għat-tibdil','Ibdel u tintweled mill-ġdid'],
      ['It-Temperanza','Bilanċ, sabar, armonija','Żbilanċ, żejjed','Sib il-bilanċ perfett tiegħek'],
      ['Id-Demonju','Jien ta\' dell, rabta','Ħelsien mill-limitazzjonijiet','Ħeles mill-ktajjen tiegħek'],
      ['It-Torri','Qlib, rivelazzjoni, tibdil f\'daqqa','Twarrib tal-katastrofa','Il-qerda toħloq spazju għall-verità'],
      ['Il-Kewkba','Tama, fidi, tiġdid','Diżperazzjoni, qtugħ','It-tama tiddi fid-dlam'],
      ['Il-Qamar','Illużjoni, biża\', intuizzjoni','Ħelsien tal-biża\'','Naviga permezz tal-illużjoni'],
      ['Ix-Xemx','Ferħ, suċċess, vitalità','Tfajjel intern, pessimiżmu','Ferħ radjanti jiddawwal it-triq'],
      ['Il-Ġudizzju','Riflessjoni, sejħa interna','Dubju','Wieġeb is-sejħa ogħla'],
      ['Id-Dinja','Tlestija, kisba, sħuħija','Mhux lesta','Wasalt — iċċelebra']
    ],
    pl:[
      ['Głupiec','Nowe początki, niewinność, spontaniczność','Lekkomyślność, ryzyka','Skok wiary w nieznane'],
      ['Mag','Siła woli, tworzenie, manifestacja','Manipulacja, ukryte talenty','Masz wszystkie potrzebne narzędzia'],
      ['Najwyższa Kapłanka','Intuicja, tajemnica, wewnętrzna wiedza','Sekrety, wycofanie','Zaufaj swojemu wewnętrznemu głosowi'],
      ['Cesarzowa','Obfitość, troska, płodność','Zależność, blokada twórcza','Przyjmij obfitość i wzrost'],
      ['Cesarz','Autorytet, struktura, stabilność','Tyrania, sztywność','Buduj swoje imperium z dyscypliną'],
      ['Hierofant','Tradycja, duchowa mądrość','Bunt, nowe podejścia','Szukaj głębszego sensu duchowego'],
      ['Kochankowie','Miłość, harmonia, partnerstwo','Disharmonia, brak równowagi','Wybieraj sercem i duszą'],
      ['Rydwan','Determinacja, siła woli, triumf','Brak kierunku, agresja','Zwycięstwo przez skupioną wolę'],
      ['Siła','Odwaga, wewnętrzna siła, współczucie','Zwątpienie, słabość','Delikatna siła pokonuje wszystko'],
      ['Pustelnik','Poszukiwanie duszy, introspekcja','Izolacja, samotność','Oświetl drogę od wewnątrz'],
      ['Koło Fortuny','Zmiana, cykle, przeznaczenie','Pech, opór wobec zmian','Koło się obraca — przyjmij zmianę'],
      ['Sprawiedliwość','Sprawiedliwość, prawda, prawo','Niesprawiedliwość','Prawda i równowaga zwyciężają'],
      ['Powieszony','Poddanie, nowa perspektywa','Zwlekanie, niezdecydowanie','Poddaj się dla nowej wizji'],
      ['Śmierć','Końce, transformacja, przejście','Opór wobec zmian','Transformuj się i odrodzisz'],
      ['Umiarkowanie','Równowaga, cierpliwość, harmonia','Brak równowagi, nadmiar','Znajdź swoją doskonałą równowagę'],
      ['Diabeł','Cień ego, przywiązanie','Uwolnienie od ograniczeń','Uwolnij się z łańcuchów'],
      ['Wieża','Wstrząs, objawienie, nagła zmiana','Unikanie katastrofy','Zniszczenie tworzy przestrzeń dla prawdy'],
      ['Gwiazda','Nadzieja, wiara, odnowa','Rozpacz, odłączenie','Nadzieja świeci w ciemności'],
      ['Księżyc','Iluzja, strach, intuicja','Uwolnienie strachu','Przejdź przez iluzję ku prawdzie'],
      ['Słońce','Radość, sukces, witalność','Wewnętrzne dziecko, pesymizm','Promienna radość oświetla twoją drogę'],
      ['Sąd','Refleksja, wewnętrzne wołanie','Wątpliwości','Odpowiedz na wyższe wołanie'],
      ['Świat','Dopełnienie, osiągnięcie, całość','Niedopełnienie','Dotarłeś — świętuj']
    ],
    pt:[
      ['O Louco','Novos começos, inocência, espontaneidade','Imprudência, riscos','Um salto de fé para o desconhecido'],
      ['O Mago','Força de vontade, criação, manifestação','Manipulação, talentos ocultos','Você tem todas as ferramentas necessárias'],
      ['A Sacerdotisa','Intuição, mistério, conhecimento interior','Segredos, retirada','Confie em sua voz interior'],
      ['A Imperatriz','Abundância, cuidado, fertilidade','Dependência, bloqueio criativo','Abrace abundância e crescimento'],
      ['O Imperador','Autoridade, estrutura, estabilidade','Tirania, rigidez','Construa seu império com disciplina'],
      ['O Hierofante','Tradição, sabedoria espiritual','Rebeldia, novas abordagens','Busque significado espiritual mais profundo'],
      ['Os Amantes','Amor, harmonia, parcerias','Desarmonia, desequilíbrio','Escolha com coração e alma'],
      ['O Carro','Determinação, força de vontade, triunfo','Falta de direção, agressão','Vitória pela vontade focada'],
      ['A Força','Coragem, força interior, compaixão','Dúvida, fraqueza','O poder gentil supera tudo'],
      ['O Eremita','Busca da alma, introspecção, solidão','Isolamento, solidão','Ilumine o caminho de dentro'],
      ['Roda da Fortuna','Mudança, ciclos, destino','Azar, resistência à mudança','A roda gira — aceite a mudança'],
      ['A Justiça','Justiça, verdade, lei','Injustiça','Verdade e equilíbrio prevalecem'],
      ['O Enforcado','Rendição, nova perspectiva','Procrastinação, indecisão','Renda-se para ganhar nova visão'],
      ['A Morte','Finais, transformação, transição','Resistência à mudança','Transforme-se e renasça'],
      ['A Temperança','Equilíbrio, paciência, harmonia','Desequilíbrio, excesso','Encontre seu equilíbrio perfeito'],
      ['O Diabo','Sombra do ego, apego','Libertação das limitações','Liberte-se de suas correntes'],
      ['A Torre','Agitação, revelação, mudança repentina','Evitar desastre','A destruição cria espaço para a verdade'],
      ['A Estrela','Esperança, fé, renovação','Desespero, desconexão','A esperança brilha na escuridão'],
      ['A Lua','Ilusão, medo, intuição','Libertação do medo','Navegue pela ilusão até a verdade'],
      ['O Sol','Alegria, sucesso, vitalidade','Criança interior, pessimismo','Alegria radiante ilumina seu caminho'],
      ['O Julgamento','Reflexão, chamado interior','Dúvida','Responda ao seu chamado superior'],
      ['O Mundo','Conclusão, realização, totalidade','Incompleto','Você chegou — celebre']
    ],
    sw:[
      ['Mpumbavu','Mwanzo mpya, usafi, msisimko','Upuuzi, hatari','Kuruka kwa imani katika yasiyojulikana'],
      ['Msihiri','Nguvu ya mapenzi, uumbaji','Udanganyifu, talanta zilizofichwa','Una zana zote unazohitaji'],
      ['Kuhani Mkubwa Mke','Hisia za moyoni, siri, ujuzi wa ndani','Siri, kujitoa','Amini sauti yako ya ndani'],
      ['Malkia','Wingi, kujali, uzazi','Utegemezi, kizuizi cha ubunifu','Pokea wingi na ukuaji'],
      ['Mfalme','Mamlaka, muundo, utulivu','Udhalimu, ugumu','Jenga dola lako kwa nidhamu'],
      ['Mchungaji Mkuu','Mila, hekima ya kiroho','Uasi, njia mpya','Tafuta maana ya kiroho ya kina'],
      ['Wapenzi','Upendo, maelewano, ushirika','Kutokubaliana','Chagua kwa moyo na roho'],
      ['Gari la Vita','Uamuzi, nguvu, ushindi','Ukosefu wa mwelekeo','Ushindi kupitia nguvu iliyoelekezwa'],
      ['Nguvu','Ujasiri, nguvu ya ndani, huruma','Shaka, udhaifu','Nguvu ya upole inashinda kila kitu'],
      ['Mtu Peke Yake','Kutafuta roho, kujifikiria','Kutengwa, upweke','Angaza njia kutoka ndani'],
      ['Gurudumu la Bahati','Mabadiliko, mizunguko, hatima','Bahati mbaya, kupinga mabadiliko','Gurudumu linazunguka — pokea mabadiliko'],
      ['Haki','Uadilifu, ukweli, sheria','Dhuluma','Ukweli na usawa unashinda'],
      ['Aliyening\'inia','Kukubali, mtazamo mpya','Kusita, kutokuwa na uamuzi','Kubali ili kupata maono mapya'],
      ['Mauti','Mwisho, mabadiliko, mpito','Kupinga mabadiliko','Badilika na uzaliwe upya'],
      ['Kiasi','Usawa, uvumilivu, maelewano','Kutokuwa na usawa','Tafuta usawa wako kamili'],
      ['Shetani','Nafsi ya kivuli, kifungo','Uhuru kutoka kwa vikwazo','Jiachilie kutoka kwa minyororo'],
      ['Mnara','Msukosuko, ufunuo, mabadiliko ya ghafla','Kuepuka maafa','Uharibifu unaunda nafasi ya ukweli'],
      ['Nyota','Tumaini, imani, upyaisho','Kukata tamaa, kutengana','Tumaini linaangaza gizani'],
      ['Mwezi','Udanganyifu, hofu, hisia za ndani','Kuachilia hofu','Pitia udanganyifu hadi ukweli'],
      ['Jua','Furaha, mafanikio, nguvu za maisha','Mtoto wa ndani, unyonge','Furaha inayong\'aa inaiangazia njia'],
      ['Hukumu','Tafakuri, wito wa ndani','Shaka la nafsi','Jibu wito wako wa juu'],
      ['Dunia','Ukamilishaji, mafanikio, ukamilifu','Kutokukamilika','Umefika — sherehekea']
    ],
    th:[
      ['คนโง่','การเริ่มต้นใหม่ ความบริสุทธิ์','ความประมาท การเสี่ยง','การก้าวกระโดดแห่งศรัทธาสู่สิ่งที่ไม่รู้จัก'],
      ['นักมายากล','พลังเจตจำนง การสร้างสรรค์','การบงการ ความสามารถที่ซ่อนอยู่','คุณมีเครื่องมือทั้งหมดที่ต้องการ'],
      ['นักบวชหญิงสูงสุด','สัญชาตญาณ ความลึกลับ ความรู้ภายใน','ความลับ การถอยห่าง','เชื่อเสียงภายในของคุณ'],
      ['จักรพรรดินี','ความอุดม การดูแล ความอุดมสมบูรณ์','การพึ่งพา อุปสรรคความคิดสร้างสรรค์','รับความอุดมและการเติบโต'],
      ['จักรพรรดิ','อำนาจ โครงสร้าง ความมั่นคง','ทรราช ความแข็งกร้าว','สร้างอาณาจักรด้วยวินัย'],
      ['นักบวชใหญ่','ประเพณี ปัญญาทางจิตวิญญาณ','การกบฏ แนวทางใหม่','แสวงหาความหมายทางจิตวิญญาณที่ลึกซึ้ง'],
      ['คู่รัก','ความรัก ความสามัคคี ความร่วมมือ','ความไม่สามัคคี ความไม่สมดุล','เลือกด้วยใจและวิญญาณ'],
      ['รถศึก','ความมุ่งมั่น พลังเจตจำนง ชัยชนะ','ขาดทิศทาง ความก้าวร้าว','ชัยชนะผ่านเจตจำนงที่มุ่งเน้น'],
      ['ความแข็งแกร่ง','ความกล้าหาญ ความแข็งแกร่งภายใน ความเมตตา','ความสงสัยตัวเอง ความอ่อนแอ','พลังอ่อนโยนเอาชนะทุกสิ่ง'],
      ['ฤาษี','การค้นหาจิตวิญญาณ การใคร่ครวญ','การแยกตัว ความเหงา','ส่องสว่างเส้นทางจากภายใน'],
      ['วงล้อแห่งโชคชะตา','การเปลี่ยนแปลง วงจร โชคชะตา','โชคร้าย การต้านทานการเปลี่ยนแปลง','วงล้อหมุน — รับการเปลี่ยนแปลง'],
      ['ความยุติธรรม','ความเป็นธรรม ความจริง กฎหมาย','ความอยุติธรรม','ความจริงและความสมดุลชนะ'],
      ['คนถูกแขวน','การยอมจำนน มุมมองใหม่','การผัดวันประกันพรุ่ง ความลังเล','ยอมจำนนเพื่อรับวิสัยทัศน์ใหม่'],
      ['ความตาย','การสิ้นสุด การเปลี่ยนแปลง การเปลี่ยนผ่าน','การต้านทานการเปลี่ยนแปลง','เปลี่ยนแปลงและเกิดใหม่'],
      ['ความพอดี','ความสมดุล ความอดทน ความสามัคคี','ความไม่สมดุล การมากเกิน','หาความสมดุลที่สมบูรณ์แบบ'],
      ['ปีศาจ','ตัวตนในเงามืด การยึดติด การพึ่งพา','การปลดปล่อยจากข้อจำกัด','ปลดโซ่ตรวนของคุณ'],
      ['หอคอย','ความวุ่นวาย การเปิดเผย การเปลี่ยนแปลง','การหลีกเลี่ยงภัยพิบัติ','การทำลายสร้างพื้นที่สำหรับความจริง'],
      ['ดาว','ความหวัง ศรัทธา การต่ออายุ','ความสิ้นหวัง การตัดการเชื่อมต่อ','ความหวังส่องสว่างในความมืด'],
      ['ดวงจันทร์','ภาพลวงตา ความกลัว สัญชาตญาณ','การปลดปล่อยความกลัว','นำทางผ่านภาพลวงตาสู่ความจริง'],
      ['ดวงอาทิตย์','ความสุข ความสำเร็จ ความมีชีวิตชีวา','เด็กภายใน มองโลกในแง่ร้าย','ความสุขที่เปล่งประกายส่องทาง'],
      ['วันพิพากษา','การไตร่ตรอง การเรียกจากภายใน','ความสงสัยตัวเอง','ตอบสนองต่อการเรียกที่สูงกว่า'],
      ['โลก','การสำเร็จ ความสมบูรณ์ ความเป็นหนึ่ง','ยังไม่เสร็จสมบูรณ์','คุณมาถึงแล้ว — ฉลอง']
    ],
    zh:[
      ['愚者','新的开始，纯真，自发性','鲁莽，冒险','向未知跃出的信心之跳'],
      ['魔法师','意志力，创造，显化','操纵，隐藏的才能','你拥有所需的一切工具'],
      ['女祭司','直觉，神秘，内在知识','秘密，退缩','信任你的内心声音'],
      ['女皇','丰盛，养育，肥沃','依赖，创意障碍','拥抱丰盛与成长'],
      ['皇帝','权威，结构，稳定','专制，僵化','用纪律建立你的帝国'],
      ['教皇','传统，精神智慧','叛逆，新方法','寻求更深的精神意义'],
      ['恋人','爱，和谐，伙伴关系','不和谐，失衡','用心和灵魂选择'],
      ['战车','决心，意志力，胜利','缺乏方向，攻击性','通过专注的意志取得胜利'],
      ['力量','勇气，内在力量，同情','自我怀疑，软弱','温柔的力量克服一切'],
      ['隐士','灵魂探寻，内省，孤独','孤立，孤独','从内心照亮道路'],
      ['命运之轮','变化，循环，命运','厄运，抗拒变化','轮子在转 — 接受变化'],
      ['正义','公平，真理，法律','不公正','真理与平衡胜利'],
      ['倒吊人','臣服，新视角','拖延，优柔寡断','臣服以获得新视野'],
      ['死神','结束，转变，过渡','抗拒变化','转变并重生'],
      ['节制','平衡，耐心，和谐','失衡，过度','找到你完美的平衡'],
      ['恶魔','阴影自我，执著，束缚','从限制中解放','从枷锁中解放自己'],
      ['塔','激变，启示，突然变化','避免灾难','破坏为真理创造空间'],
      ['星星','希望，信念，更新','绝望，脱节','希望在黑暗中闪耀'],
      ['月亮','幻觉，恐惧，直觉','释放恐惧','穿越幻觉走向真理'],
      ['太阳','喜悦，成功，活力','内在小孩，悲观','光辉的喜悦照亮你的道路'],
      ['审判','反思，内心召唤','自我怀疑','回应你更高的召唤'],
      ['世界','完成，成就，整体','未完成','你已抵达 — 庆祝']
    ]
  };

  // ── Language detection ──
  function detectLang() {
    // Check URL ?lang= param first (for SEO/GEO indexed pages)
    try {
      var urlLang = new URLSearchParams(window.location.search).get('lang');
      if (urlLang && META[urlLang]) { return urlLang; }
    } catch(e) {}
    var saved = localStorage.getItem('tarot_lang');
    if (saved && META[saved]) return saved;
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    var code = nav.split('-')[0];
    return META[code] ? code : 'en';
  }

  var currentLang = detectLang();
  updateSEOMeta(currentLang);

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
    updateSEOMeta(code);
    if (window.applyLanguage) window.applyLanguage();
  }


  // ── Dynamic SEO meta updater ──
  function updateSEOMeta(lang) {
    var d = SEO_META[lang] || SEO_META['en'];
    var isRTL = d.dir === 'rtl';

    // html lang + dir
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    // title
    document.title = d.title;

    // helper: set or create meta
    function setMeta(sel, attr, val) {
      var el = document.querySelector(sel);
      if (!el) { el = document.createElement('meta'); document.head.appendChild(el); }
      el.setAttribute(attr, val);
    }
    function setProp(prop, val) {
      var el = document.querySelector('meta[property="' + prop + '"]');
      if (!el) { el = document.createElement('meta'); el.setAttribute('property', prop); document.head.appendChild(el); }
      el.setAttribute('content', val);
    }

    setMeta('meta[name="description"]',        'content', d.desc);
    setMeta('meta[name="keywords"]',           'content', d.kw);
    setMeta('meta[http-equiv="content-language"]', 'content', lang);
    setMeta('meta[name="geo.region"]',         'content', d.geo);
    setMeta('meta[name="geo.country"]',        'content', d.geo);

    setProp('og:title',       d.title);
    setProp('og:description', d.desc);
    setProp('og:locale',      d.locale);

    setMeta('meta[name="twitter:title"]',       'content', d.title);
    setMeta('meta[name="twitter:description"]', 'content', d.desc);

    // JSON-LD: update inLanguage
    var ld = document.querySelector('script[type="application/ld+json"]');
    if (ld) {
      try {
        var obj = JSON.parse(ld.textContent);
        obj.inLanguage = lang;
        obj.name = d.title.split(' | ')[0];
        obj.description = d.desc;
        ld.textContent = JSON.stringify(obj);
      } catch(e) {}
    }

    // canonical URL keeps base, no lang param (canonical = default)
    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = 'https://tarocarousel.online/';
  }

  // ── Build language dropdown ──
  function buildLangDropdown() {
    var existing = document.getElementById('langDropdown');
    if (existing) existing.remove();

    // Inject scrollbar + search styles once
    if (!document.getElementById('langPickerStyle')) {
      var ss = document.createElement('style');
      ss.id = 'langPickerStyle';
      ss.textContent = [
        '#langList::-webkit-scrollbar{width:4px}',
        '#langList::-webkit-scrollbar-track{background:rgba(0,0,0,0.3)}',
        '#langList::-webkit-scrollbar-thumb{background:rgba(218,165,32,0.4);border-radius:2px}',
        '#langList::-webkit-scrollbar-thumb:hover{background:rgba(218,165,32,0.7)}',
        '#langSearchInput::placeholder{color:rgba(218,165,32,0.4);font-style:italic}',
        '#langBtn:hover{background:rgba(218,165,32,0.14)!important;border-color:rgba(218,165,32,0.6)!important}',
      ].join('');
      document.head.appendChild(ss);
    }

    var wrap = document.createElement('div');
    wrap.id = 'langDropdown';
    wrap.style.cssText = 'position:fixed;top:16px;right:16px;z-index:200;font-family:"Cinzel","Cormorant Garamond",serif;';

    // ── Trigger button
    var btn = document.createElement('button');
    btn.id = 'langBtn';
    btn.style.cssText = 'padding:7px 13px;border-radius:20px;background:rgba(218,165,32,0.08);border:1.5px solid rgba(218,165,32,0.32);color:#DAA520;font-size:13px;cursor:pointer;backdrop-filter:blur(10px);transition:background .2s,border-color .2s;display:flex;align-items:center;gap:6px;white-space:nowrap;letter-spacing:.3px;';
    function renderBtn() {
      btn.innerHTML = '<span style="font-size:15px">' + META[currentLang].flag + '</span>'
        + '<span>' + META[currentLang].name + '</span>'
        + '<span style="font-size:9px;opacity:.5;margin-left:1px">&#9660;</span>';
    }
    renderBtn();

    // ── Panel
    var panel = document.createElement('div');
    panel.id = 'langMenu';
    panel.style.cssText = [
      'display:none',
      'position:absolute',
      'top:calc(100% + 8px)',
      'right:0',
      'width:220px',
      'background:rgba(9,7,20,0.97)',
      'border:1.5px solid rgba(218,165,32,0.4)',
      'border-radius:14px',
      'backdrop-filter:blur(24px)',
      'box-shadow:0 16px 48px rgba(0,0,0,0.8)',
      'opacity:0',
      'transform:scale(.94) translateY(-6px)',
      'transform-origin:top right',
      'transition:opacity .16s ease,transform .16s ease',
    ].join(';');

    // ── Search row
    var searchRow = document.createElement('div');
    searchRow.style.cssText = 'padding:10px;border-bottom:1px solid rgba(218,165,32,0.2);border-radius:14px 14px 0 0;background:rgba(218,165,32,0.04);';

    var searchBox = document.createElement('div');
    searchBox.style.cssText = 'display:flex;align-items:center;background:rgba(218,165,32,0.1);border:1.5px solid rgba(218,165,32,0.4);border-radius:8px;padding:6px 10px;gap:7px;';

    var searchIcon = document.createElement('span');
    searchIcon.textContent = '🔍';
    searchIcon.style.cssText = 'font-size:13px;flex-shrink:0;line-height:1;';

    var searchInput = document.createElement('input');
    searchInput.id = 'langSearchInput';
    searchInput.type = 'text';
    searchInput.placeholder = 'Search…';
    searchInput.autocomplete = 'off';
    searchInput.spellcheck = false;
    searchInput.style.cssText = 'background:none;border:none;outline:none;color:#DAA520;font-size:13px;font-family:inherit;letter-spacing:.3px;width:100%;min-width:0;';

    var clearX = document.createElement('button');
    clearX.textContent = '×';
    clearX.style.cssText = 'background:none;border:none;color:rgba(218,165,32,0.38);font-size:17px;line-height:1;cursor:pointer;padding:0;flex-shrink:0;display:none;transition:color .15s;';

    searchBox.appendChild(searchIcon);
    searchBox.appendChild(searchInput);
    searchBox.appendChild(clearX);
    searchRow.appendChild(searchBox);

    // ── List
    var list = document.createElement('div');
    list.id = 'langList';
    list.style.cssText = 'max-height:260px;overflow-y:scroll;-webkit-overflow-scrolling:touch;padding:4px 0;border-radius:0 0 13px 13px;';

    // Empty state
    var emptyMsg = document.createElement('div');
    emptyMsg.style.cssText = 'padding:18px;text-align:center;color:rgba(218,165,32,0.28);font-size:11px;letter-spacing:.8px;display:none;';
    emptyMsg.textContent = '— not found —';

    // Build items
    var itemObjs = LANGS.map(function(code) {
      var row = document.createElement('div');
      row.dataset.code = code;
      row.dataset.name = META[code].name.toLowerCase();
      row.style.cssText = 'padding:9px 14px 9px 12px;cursor:pointer;color:#DAA520;font-size:12px;display:flex;align-items:center;gap:9px;transition:background .12s;letter-spacing:.3px;';

      var flagEl = document.createElement('span');
      flagEl.textContent = META[code].flag;
      flagEl.style.cssText = 'font-size:16px;flex-shrink:0;line-height:1;';

      var nameEl = document.createElement('span');
      nameEl.textContent = META[code].name;
      nameEl.style.cssText = 'flex:1;';

      var tick = document.createElement('span');
      tick.textContent = '✓';
      tick.style.cssText = 'font-size:11px;color:rgba(218,165,32,0.7);opacity:0;transition:opacity .12s;flex-shrink:0;';

      row.appendChild(flagEl);
      row.appendChild(nameEl);
      row.appendChild(tick);
      list.appendChild(row);

      if (code === currentLang) {
        row.style.background = 'rgba(218,165,32,0.11)';
        tick.style.opacity = '1';
      }

      row.addEventListener('mouseenter', function() { row.style.background = 'rgba(218,165,32,0.09)'; });
      row.addEventListener('mouseleave', function() { row.style.background = code === currentLang ? 'rgba(218,165,32,0.11)' : ''; });
      row.addEventListener('click', function(e) {
        e.stopPropagation();
        closeMenu();
        setLang(code);
        // Update active highlight immediately
        itemObjs.forEach(function(o) {
          o.row.style.background = o.code === code ? 'rgba(218,165,32,0.11)' : '';
          o.tick.style.opacity = o.code === code ? '1' : '0';
        });
        renderBtn();
      });

      return { code: code, row: row, tick: tick };
    });

    list.appendChild(emptyMsg);

    // ── Filter
    function applyFilter(q) {
      q = q.trim().toLowerCase();
      var shown = 0;
      itemObjs.forEach(function(o) {
        var match = !q || o.code.indexOf(q) >= 0 || o.row.dataset.name.indexOf(q) >= 0;
        o.row.style.display = match ? 'flex' : 'none';
        if (match) shown++;
      });
      emptyMsg.style.display = shown === 0 ? 'block' : 'none';
      clearX.style.display = q ? 'flex' : 'none';
    }

    searchInput.addEventListener('input', function() { applyFilter(this.value); });

    clearX.addEventListener('click', function(e) {
      e.stopPropagation();
      searchInput.value = '';
      applyFilter('');
      searchInput.focus();
    });

    // Keyboard nav
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') { closeMenu(); btn.focus(); return; }
      if (e.key === 'Enter') {
        var vis = itemObjs.filter(function(o) { return o.row.style.display !== 'none'; });
        if (vis.length) { closeMenu(); setLang(vis[0].code); renderBtn(); }
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        var vis = itemObjs.filter(function(o) { return o.row.style.display !== 'none'; });
        if (vis.length) vis[0].row.focus();
      }
    });

    // Arrow key nav on items
    list.addEventListener('keydown', function(e) {
      var focused = document.activeElement;
      var vis = itemObjs.filter(function(o) { return o.row.style.display !== 'none'; });
      var idx = vis.findIndex(function(o) { return o.row === focused; });
      if (e.key === 'ArrowDown' && idx < vis.length - 1) { e.preventDefault(); vis[idx + 1].row.focus(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); idx > 0 ? vis[idx - 1].row.focus() : searchInput.focus(); }
      if (e.key === 'Enter' && idx >= 0) { closeMenu(); setLang(vis[idx].code); renderBtn(); }
      if (e.key === 'Escape') { closeMenu(); btn.focus(); }
    });

    // ── Open / close
    var isOpen = false;

    function openMenu() {
      isOpen = true;
      panel.style.display = 'block';
      requestAnimationFrame(function() {
        panel.style.opacity = '1';
        panel.style.transform = 'scale(1) translateY(0)';
      });
      searchInput.value = '';
      applyFilter('');
      setTimeout(function() { searchInput.focus(); }, 30);
      // Scroll active item into view
      var activeRow = list.querySelector('[data-code="' + currentLang + '"]');
      if (activeRow) setTimeout(function() { activeRow.scrollIntoView({ block: 'nearest' }); }, 60);
    }

    function closeMenu() {
      isOpen = false;
      panel.style.opacity = '0';
      panel.style.transform = 'scale(.94) translateY(-6px)';
      setTimeout(function() { if (!isOpen) panel.style.display = 'none'; }, 170);
    }

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      isOpen ? closeMenu() : openMenu();
    });

    document.addEventListener('click', function(e) {
      if (isOpen && !wrap.contains(e.target)) closeMenu();
    });

    panel.appendChild(searchRow);
    panel.appendChild(list);
    wrap.appendChild(btn);
    wrap.appendChild(panel);
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
    updateSEOMeta: updateSEOMeta,
    refreshDropdown: function() {
      var btn = document.getElementById('langBtn');
      if (btn) btn.innerHTML = '<span style="font-size:15px">' + META[currentLang].flag + '</span>'
        + '<span>' + META[currentLang].name + '</span>'
        + '<span style="font-size:9px;opacity:.5;margin-left:1px">&#9660;</span>';
    }
  };
})();
