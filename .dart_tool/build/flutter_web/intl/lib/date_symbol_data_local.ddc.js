define(['dart_sdk', 'packages/intl/intl', 'packages/intl/date_time_patterns', 'packages/intl/date_symbols'], function(dart_sdk, packages__intl__intl, packages__intl__date_time_patterns, packages__intl__date_symbols) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const date_format_internal = packages__intl__intl.src__date_format_internal;
  const date_time_patterns = packages__intl__date_time_patterns.date_time_patterns;
  const date_symbols = packages__intl__date_symbols.date_symbols;
  const date_symbol_data_local = Object.create(dart.library);
  let VoidToMap = () => (VoidToMap = dart.constFn(dart.fnType(core.Map, [])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(date_symbol_data_local.dateTimeSymbolMap, VoidToMap());
    },
    get C1() {
      return C1 = dart.fn(date_time_patterns.dateTimePatternMap, VoidToMap());
    },
    get C2() {
      return C2 = dart.constList(["BC", "AD"], core.String);
    },
    get C3() {
      return C3 = dart.constList(["Before Christ", "Anno Domini"], core.String);
    },
    get C4() {
      return C4 = dart.constList(["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], core.String);
    },
    get C5() {
      return C5 = dart.constList(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], core.String);
    },
    get C6() {
      return C6 = dart.constList(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], core.String);
    },
    get C7() {
      return C7 = dart.constList(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], core.String);
    },
    get C8() {
      return C8 = dart.constList(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], core.String);
    },
    get C9() {
      return C9 = dart.constList(["S", "M", "T", "W", "T", "F", "S"], core.String);
    },
    get C10() {
      return C10 = dart.constList(["Q1", "Q2", "Q3", "Q4"], core.String);
    },
    get C11() {
      return C11 = dart.constList(["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], core.String);
    },
    get C12() {
      return C12 = dart.constList(["AM", "PM"], core.String);
    },
    get C13() {
      return C13 = dart.constList(["EEEE, y MMMM dd", "y MMMM d", "y MMM d", "yyyy-MM-dd"], core.String);
    },
    get C14() {
      return C14 = dart.constList(["HH:mm:ss v", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], core.String);
    },
    get C15() {
      return C15 = dart.constList(["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C16() {
      return C16 = dart.constList([5, 6], core.int);
    },
    get C17() {
      return C17 = dart.constList(["v.C.", "n.C."], core.String);
    },
    get C18() {
      return C18 = dart.constList(["voor Christus", "na Christus"], core.String);
    },
    get C19() {
      return C19 = dart.constList(["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"], core.String);
    },
    get C20() {
      return C20 = dart.constList(["Jan.", "Feb.", "Mrt.", "Apr.", "Mei", "Jun.", "Jul.", "Aug.", "Sep.", "Okt.", "Nov.", "Des."], core.String);
    },
    get C21() {
      return C21 = dart.constList(["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"], core.String);
    },
    get C22() {
      return C22 = dart.constList(["So.", "Ma.", "Di.", "Wo.", "Do.", "Vr.", "Sa."], core.String);
    },
    get C23() {
      return C23 = dart.constList(["S", "M", "D", "W", "D", "V", "S"], core.String);
    },
    get C24() {
      return C24 = dart.constList(["K1", "K2", "K3", "K4"], core.String);
    },
    get C25() {
      return C25 = dart.constList(["1ste kwartaal", "2de kwartaal", "3de kwartaal", "4de kwartaal"], core.String);
    },
    get C26() {
      return C26 = dart.constList(["vm.", "nm."], core.String);
    },
    get C27() {
      return C27 = dart.constList(["EEEE dd MMMM y", "dd MMMM y", "dd MMM y", "y-MM-dd"], core.String);
    },
    get C28() {
      return C28 = dart.constList(["HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], core.String);
    },
    get C29() {
      return C29 = dart.constList(["{1} {0}", "{1} {0}", "{1} {0}", "{1} {0}"], core.String);
    },
    get C30() {
      return C30 = dart.constList(["ዓ/ዓ", "ዓ/ም"], core.String);
    },
    get C31() {
      return C31 = dart.constList(["ዓመተ ዓለም", "ዓመተ ምሕረት"], core.String);
    },
    get C32() {
      return C32 = dart.constList(["ጃ", "ፌ", "ማ", "ኤ", "ሜ", "ጁ", "ጁ", "ኦ", "ሴ", "ኦ", "ኖ", "ዲ"], core.String);
    },
    get C33() {
      return C33 = dart.constList(["ጃንዩወሪ", "ፌብሩወሪ", "ማርች", "ኤፕሪል", "ሜይ", "ጁን", "ጁላይ", "ኦገስት", "ሴፕቴምበር", "ኦክቶበር", "ኖቬምበር", "ዲሴምበር"], core.String);
    },
    get C34() {
      return C34 = dart.constList(["ጃንዩ", "ፌብሩ", "ማርች", "ኤፕሪ", "ሜይ", "ጁን", "ጁላይ", "ኦገስ", "ሴፕቴ", "ኦክቶ", "ኖቬም", "ዲሴም"], core.String);
    },
    get C35() {
      return C35 = dart.constList(["እሑድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"], core.String);
    },
    get C36() {
      return C36 = dart.constList(["እሑድ", "ሰኞ", "ማክሰ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"], core.String);
    },
    get C37() {
      return C37 = dart.constList(["እ", "ሰ", "ማ", "ረ", "ሐ", "ዓ", "ቅ"], core.String);
    },
    get C38() {
      return C38 = dart.constList(["ሩብ1", "ሩብ2", "ሩብ3", "ሩብ4"], core.String);
    },
    get C39() {
      return C39 = dart.constList(["1ኛው ሩብ", "2ኛው ሩብ", "3ኛው ሩብ", "4ኛው ሩብ"], core.String);
    },
    get C40() {
      return C40 = dart.constList(["ጥዋት", "ከሰዓት"], core.String);
    },
    get C41() {
      return C41 = dart.constList(["y MMMM d, EEEE", "d MMMM y", "d MMM y", "dd/MM/y"], core.String);
    },
    get C42() {
      return C42 = dart.constList(["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], core.String);
    },
    get C43() {
      return C43 = dart.constList(["ق.م", "م"], core.String);
    },
    get C44() {
      return C44 = dart.constList(["قبل الميلاد", "ميلادي"], core.String);
    },
    get C45() {
      return C45 = dart.constList(["ي", "ف", "م", "أ", "و", "ن", "ل", "غ", "س", "ك", "ب", "د"], core.String);
    },
    get C46() {
      return C46 = dart.constList(["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], core.String);
    },
    get C47() {
      return C47 = dart.constList(["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"], core.String);
    },
    get C48() {
      return C48 = dart.constList(["ح", "ن", "ث", "ر", "خ", "ج", "س"], core.String);
    },
    get C49() {
      return C49 = dart.constList(["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"], core.String);
    },
    get C50() {
      return C50 = dart.constList(["ص", "م"], core.String);
    },
    get C51() {
      return C51 = dart.constList(["EEEE، d MMMM y", "d MMMM y", "dd‏/MM‏/y", "d‏/M‏/y"], core.String);
    },
    get C52() {
      return C52 = dart.constList([4, 5], core.int);
    },
    get C53() {
      return C53 = dart.constList(["ج", "ف", "م", "أ", "م", "ج", "ج", "أ", "س", "أ", "ن", "د"], core.String);
    },
    get C54() {
      return C54 = dart.constList(["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], core.String);
    },
    get C55() {
      return C55 = dart.constList(["e.ə.", "y.e."], core.String);
    },
    get C56() {
      return C56 = dart.constList(["eramızdan əvvəl", "yeni era"], core.String);
    },
    get C57() {
      return C57 = dart.constList(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], core.String);
    },
    get C58() {
      return C58 = dart.constList(["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"], core.String);
    },
    get C59() {
      return C59 = dart.constList(["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"], core.String);
    },
    get C60() {
      return C60 = dart.constList(["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avq", "sen", "okt", "noy", "dek"], core.String);
    },
    get C61() {
      return C61 = dart.constList(["bazar", "bazar ertəsi", "çərşənbə axşamı", "çərşənbə", "cümə axşamı", "cümə", "şənbə"], core.String);
    },
    get C62() {
      return C62 = dart.constList(["B.", "B.E.", "Ç.A.", "Ç.", "C.A.", "C.", "Ş."], core.String);
    },
    get C63() {
      return C63 = dart.constList(["7", "1", "2", "3", "4", "5", "6"], core.String);
    },
    get C64() {
      return C64 = dart.constList(["1-ci kv.", "2-ci kv.", "3-cü kv.", "4-cü kv."], core.String);
    },
    get C65() {
      return C65 = dart.constList(["1-ci kvartal", "2-ci kvartal", "3-cü kvartal", "4-cü kvartal"], core.String);
    },
    get C66() {
      return C66 = dart.constList(["d MMMM y, EEEE", "d MMMM y", "d MMM y", "dd.MM.yy"], core.String);
    },
    get C67() {
      return C67 = dart.constList(["да н.э.", "н.э."], core.String);
    },
    get C68() {
      return C68 = dart.constList(["да нараджэння Хрыстова", "ад нараджэння Хрыстова"], core.String);
    },
    get C69() {
      return C69 = dart.constList(["с", "л", "с", "к", "м", "ч", "л", "ж", "в", "к", "л", "с"], core.String);
    },
    get C70() {
      return C70 = dart.constList(["студзеня", "лютага", "сакавіка", "красавіка", "мая", "чэрвеня", "ліпеня", "жніўня", "верасня", "кастрычніка", "лістапада", "снежня"], core.String);
    },
    get C71() {
      return C71 = dart.constList(["студзень", "люты", "сакавік", "красавік", "май", "чэрвень", "ліпень", "жнівень", "верасень", "кастрычнік", "лістапад", "снежань"], core.String);
    },
    get C72() {
      return C72 = dart.constList(["сту", "лют", "сак", "кра", "мая", "чэр", "ліп", "жні", "вер", "кас", "ліс", "сне"], core.String);
    },
    get C73() {
      return C73 = dart.constList(["сту", "лют", "сак", "кра", "май", "чэр", "ліп", "жні", "вер", "кас", "ліс", "сне"], core.String);
    },
    get C74() {
      return C74 = dart.constList(["нядзеля", "панядзелак", "аўторак", "серада", "чацвер", "пятніца", "субота"], core.String);
    },
    get C75() {
      return C75 = dart.constList(["нд", "пн", "аў", "ср", "чц", "пт", "сб"], core.String);
    },
    get C76() {
      return C76 = dart.constList(["н", "п", "а", "с", "ч", "п", "с"], core.String);
    },
    get C77() {
      return C77 = dart.constList(["1-шы кв.", "2-гі кв.", "3-ці кв.", "4-ты кв."], core.String);
    },
    get C78() {
      return C78 = dart.constList(["1-шы квартал", "2-гі квартал", "3-ці квартал", "4-ты квартал"], core.String);
    },
    get C79() {
      return C79 = dart.constList(["EEEE, d MMMM y 'г'.", "d MMMM y 'г'.", "d.MM.y", "d.MM.yy"], core.String);
    },
    get C80() {
      return C80 = dart.constList(["HH:mm:ss, zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], core.String);
    },
    get C81() {
      return C81 = dart.constList(["{1} 'у' {0}", "{1} 'у' {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C82() {
      return C82 = dart.constList(["пр.Хр.", "сл.Хр."], core.String);
    },
    get C83() {
      return C83 = dart.constList(["преди Христа", "след Христа"], core.String);
    },
    get C84() {
      return C84 = dart.constList(["я", "ф", "м", "а", "м", "ю", "ю", "а", "с", "о", "н", "д"], core.String);
    },
    get C85() {
      return C85 = dart.constList(["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"], core.String);
    },
    get C86() {
      return C86 = dart.constList(["яну", "фев", "март", "апр", "май", "юни", "юли", "авг", "сеп", "окт", "ное", "дек"], core.String);
    },
    get C87() {
      return C87 = dart.constList(["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"], core.String);
    },
    get C88() {
      return C88 = dart.constList(["нд", "пн", "вт", "ср", "чт", "пт", "сб"], core.String);
    },
    get C89() {
      return C89 = dart.constList(["н", "п", "в", "с", "ч", "п", "с"], core.String);
    },
    get C90() {
      return C90 = dart.constList(["1. трим.", "2. трим.", "3. трим.", "4. трим."], core.String);
    },
    get C91() {
      return C91 = dart.constList(["1. тримесечие", "2. тримесечие", "3. тримесечие", "4. тримесечие"], core.String);
    },
    get C92() {
      return C92 = dart.constList(["пр.об.", "сл.об."], core.String);
    },
    get C93() {
      return C93 = dart.constList(["EEEE, d MMMM y 'г'.", "d MMMM y 'г'.", "d.MM.y 'г'.", "d.MM.yy 'г'."], core.String);
    },
    get C94() {
      return C94 = dart.constList(["H:mm:ss 'ч'. zzzz", "H:mm:ss 'ч'. z", "H:mm:ss 'ч'.", "H:mm 'ч'."], core.String);
    },
    get C95() {
      return C95 = dart.constList(["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C96() {
      return C96 = dart.constList(["খ্রিস্টপূর্ব", "খৃষ্টাব্দ"], core.String);
    },
    get C97() {
      return C97 = dart.constList(["খ্রিস্টপূর্ব", "খ্রীষ্টাব্দ"], core.String);
    },
    get C98() {
      return C98 = dart.constList(["জা", "ফে", "মা", "এ", "মে", "জুন", "জু", "আ", "সে", "অ", "ন", "ডি"], core.String);
    },
    get C99() {
      return C99 = dart.constList(["জানুয়ারী", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"], core.String);
    },
    get C100() {
      return C100 = dart.constList(["জানু", "ফেব", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"], core.String);
    },
    get C101() {
      return C101 = dart.constList(["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"], core.String);
    },
    get C102() {
      return C102 = dart.constList(["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"], core.String);
    },
    get C103() {
      return C103 = dart.constList(["র", "সো", "ম", "বু", "বৃ", "শু", "শ"], core.String);
    },
    get C104() {
      return C104 = dart.constList(["ত্রৈমাসিক", "দ্বিতীয় ত্রৈমাসিক", "তৃতীয় ত্রৈমাসিক", "চতুর্থ ত্রৈমাসিক"], core.String);
    },
    get C105() {
      return C105 = dart.constList(["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "d/M/yy"], core.String);
    },
    get C106() {
      return C106 = dart.constList(["a-raok J.K.", "goude J.K."], core.String);
    },
    get C107() {
      return C107 = dart.constList(["a-raok Jezuz-Krist", "goude Jezuz-Krist"], core.String);
    },
    get C108() {
      return C108 = dart.constList(["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], core.String);
    },
    get C109() {
      return C109 = dart.constList(["Genver", "Cʼhwevrer", "Meurzh", "Ebrel", "Mae", "Mezheven", "Gouere", "Eost", "Gwengolo", "Here", "Du", "Kerzu"], core.String);
    },
    get C110() {
      return C110 = dart.constList(["Gen.", "Cʼhwe.", "Meur.", "Ebr.", "Mae", "Mezh.", "Goue.", "Eost", "Gwen.", "Here", "Du", "Kzu."], core.String);
    },
    get C111() {
      return C111 = dart.constList(["Sul", "Lun", "Meurzh", "Mercʼher", "Yaou", "Gwener", "Sadorn"], core.String);
    },
    get C112() {
      return C112 = dart.constList(["Sul", "Lun", "Meu.", "Mer.", "Yaou", "Gwe.", "Sad."], core.String);
    },
    get C113() {
      return C113 = dart.constList(["Su", "L", "Mz", "Mc", "Y", "G", "Sa"], core.String);
    },
    get C114() {
      return C114 = dart.constList(["1añ trim.", "2l trim.", "3e trim.", "4e trim."], core.String);
    },
    get C115() {
      return C115 = dart.constList(["1añ trimiziad", "2l trimiziad", "3e trimiziad", "4e trimiziad"], core.String);
    },
    get C116() {
      return C116 = dart.constList(["A.M.", "G.M."], core.String);
    },
    get C117() {
      return C117 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"], core.String);
    },
    get C118() {
      return C118 = dart.constList(["{1} 'da' {0}", "{1} 'da' {0}", "{1}, {0}", "{1} {0}"], core.String);
    },
    get C119() {
      return C119 = dart.constList(["p. n. e.", "n. e."], core.String);
    },
    get C120() {
      return C120 = dart.constList(["prije nove ere", "nove ere"], core.String);
    },
    get C121() {
      return C121 = dart.constList(["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], core.String);
    },
    get C122() {
      return C122 = dart.constList(["januar", "februar", "mart", "april", "maj", "juni", "juli", "august", "septembar", "oktobar", "novembar", "decembar"], core.String);
    },
    get C123() {
      return C123 = dart.constList(["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], core.String);
    },
    get C124() {
      return C124 = dart.constList(["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"], core.String);
    },
    get C125() {
      return C125 = dart.constList(["ned", "pon", "uto", "sri", "čet", "pet", "sub"], core.String);
    },
    get C126() {
      return C126 = dart.constList(["N", "P", "U", "S", "Č", "P", "S"], core.String);
    },
    get C127() {
      return C127 = dart.constList(["n", "p", "u", "s", "č", "p", "s"], core.String);
    },
    get C128() {
      return C128 = dart.constList(["KV1", "KV2", "KV3", "KV4"], core.String);
    },
    get C129() {
      return C129 = dart.constList(["Prvi kvartal", "Drugi kvartal", "Treći kvartal", "Četvrti kvartal"], core.String);
    },
    get C130() {
      return C130 = dart.constList(["prijepodne", "popodne"], core.String);
    },
    get C131() {
      return C131 = dart.constList(["EEEE, d. MMMM y.", "d. MMMM y.", "d. MMM y.", "d. M. y."], core.String);
    },
    get C132() {
      return C132 = dart.constList(["{1} 'u' {0}", "{1} 'u' {0}", "{1} {0}", "{1} {0}"], core.String);
    },
    get C133() {
      return C133 = dart.constList(["aC", "dC"], core.String);
    },
    get C134() {
      return C134 = dart.constList(["abans de Crist", "després de Crist"], core.String);
    },
    get C135() {
      return C135 = dart.constList(["GN", "FB", "MÇ", "AB", "MG", "JN", "JL", "AG", "ST", "OC", "NV", "DS"], core.String);
    },
    get C136() {
      return C136 = dart.constList(["de gener", "de febrer", "de març", "d’abril", "de maig", "de juny", "de juliol", "d’agost", "de setembre", "d’octubre", "de novembre", "de desembre"], core.String);
    },
    get C137() {
      return C137 = dart.constList(["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"], core.String);
    },
    get C138() {
      return C138 = dart.constList(["de gen.", "de febr.", "de març", "d’abr.", "de maig", "de juny", "de jul.", "d’ag.", "de set.", "d’oct.", "de nov.", "de des."], core.String);
    },
    get C139() {
      return C139 = dart.constList(["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."], core.String);
    },
    get C140() {
      return C140 = dart.constList(["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"], core.String);
    },
    get C141() {
      return C141 = dart.constList(["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."], core.String);
    },
    get C142() {
      return C142 = dart.constList(["dg", "dl", "dt", "dc", "dj", "dv", "ds"], core.String);
    },
    get C143() {
      return C143 = dart.constList(["1T", "2T", "3T", "4T"], core.String);
    },
    get C144() {
      return C144 = dart.constList(["1r trimestre", "2n trimestre", "3r trimestre", "4t trimestre"], core.String);
    },
    get C145() {
      return C145 = dart.constList(["a. m.", "p. m."], core.String);
    },
    get C146() {
      return C146 = dart.constList(["EEEE, d MMMM 'de' y", "d MMMM 'de' y", "d MMM y", "d/M/yy"], core.String);
    },
    get C147() {
      return C147 = dart.constList(["H:mm:ss zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"], core.String);
    },
    get C148() {
      return C148 = dart.constList(["{1} 'a' 'les' {0}", "{1} 'a' 'les' {0}", "{1}, {0}", "{1} {0}"], core.String);
    },
    get C149() {
      return C149 = dart.constList(["ᏧᏓᎷᎸ ᎤᎷᎯᏍᏗ ᎦᎶᏁᏛ", "ᎠᏃ ᏙᎻᏂ"], core.String);
    },
    get C150() {
      return C150 = dart.constList(["Ꭴ", "Ꭷ", "Ꭰ", "Ꭷ", "Ꭰ", "Ꮥ", "Ꭻ", "Ꭶ", "Ꮪ", "Ꮪ", "Ꮕ", "Ꭵ"], core.String);
    },
    get C151() {
      return C151 = dart.constList(["ᎤᏃᎸᏔᏅ", "ᎧᎦᎵ", "ᎠᏅᏱ", "ᎧᏬᏂ", "ᎠᏂᏍᎬᏘ", "ᏕᎭᎷᏱ", "ᎫᏰᏉᏂ", "ᎦᎶᏂ", "ᏚᎵᏍᏗ", "ᏚᏂᏅᏗ", "ᏅᏓᏕᏆ", "ᎥᏍᎩᏱ"], core.String);
    },
    get C152() {
      return C152 = dart.constList(["ᎤᏃ", "ᎧᎦ", "ᎠᏅ", "ᎧᏬ", "ᎠᏂ", "ᏕᎭ", "ᎫᏰ", "ᎦᎶ", "ᏚᎵ", "ᏚᏂ", "ᏅᏓ", "ᎥᏍ"], core.String);
    },
    get C153() {
      return C153 = dart.constList(["ᎤᎾᏙᏓᏆᏍᎬ", "ᎤᎾᏙᏓᏉᏅᎯ", "ᏔᎵᏁᎢᎦ", "ᏦᎢᏁᎢᎦ", "ᏅᎩᏁᎢᎦ", "ᏧᎾᎩᎶᏍᏗ", "ᎤᎾᏙᏓᏈᏕᎾ"], core.String);
    },
    get C154() {
      return C154 = dart.constList(["ᏆᏍᎬ", "ᏉᏅᎯ", "ᏔᎵᏁ", "ᏦᎢᏁ", "ᏅᎩᏁ", "ᏧᎾᎩ", "ᏈᏕᎾ"], core.String);
    },
    get C155() {
      return C155 = dart.constList(["Ꮖ", "Ꮙ", "Ꮤ", "Ꮶ", "Ꮕ", "Ꮷ", "Ꭴ"], core.String);
    },
    get C156() {
      return C156 = dart.constList(["1st ᎩᏄᏙᏗ", "2nd ᎩᏄᏙᏗ", "3rd ᎩᏄᏙᏗ", "4th ᎩᏄᏙᏗ"], core.String);
    },
    get C157() {
      return C157 = dart.constList(["ᏌᎾᎴ", "ᏒᎯᏱᎢᏗᏢ"], core.String);
    },
    get C158() {
      return C158 = dart.constList(["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], core.String);
    },
    get C159() {
      return C159 = dart.constList(["{1} ᎤᎾᎢ {0}", "{1} ᎤᎾᎢ {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C160() {
      return C160 = dart.constList(["př. n. l.", "n. l."], core.String);
    },
    get C161() {
      return C161 = dart.constList(["před naším letopočtem", "našeho letopočtu"], core.String);
    },
    get C162() {
      return C162 = dart.constList(["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"], core.String);
    },
    get C163() {
      return C163 = dart.constList(["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"], core.String);
    },
    get C164() {
      return C164 = dart.constList(["led", "úno", "bře", "dub", "kvě", "čvn", "čvc", "srp", "zář", "říj", "lis", "pro"], core.String);
    },
    get C165() {
      return C165 = dart.constList(["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"], core.String);
    },
    get C166() {
      return C166 = dart.constList(["ne", "po", "út", "st", "čt", "pá", "so"], core.String);
    },
    get C167() {
      return C167 = dart.constList(["N", "P", "Ú", "S", "Č", "P", "S"], core.String);
    },
    get C168() {
      return C168 = dart.constList(["1. čtvrtletí", "2. čtvrtletí", "3. čtvrtletí", "4. čtvrtletí"], core.String);
    },
    get C169() {
      return C169 = dart.constList(["dop.", "odp."], core.String);
    },
    get C170() {
      return C170 = dart.constList(["EEEE d. MMMM y", "d. MMMM y", "d. M. y", "dd.MM.yy"], core.String);
    },
    get C171() {
      return C171 = dart.constList(["CC", "OC"], core.String);
    },
    get C172() {
      return C172 = dart.constList(["Cyn Crist", "Oed Crist"], core.String);
    },
    get C173() {
      return C173 = dart.constList(["I", "Ch", "M", "E", "M", "M", "G", "A", "M", "H", "T", "Rh"], core.String);
    },
    get C174() {
      return C174 = dart.constList(["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"], core.String);
    },
    get C175() {
      return C175 = dart.constList(["Ion", "Chwef", "Maw", "Ebrill", "Mai", "Meh", "Gorff", "Awst", "Medi", "Hyd", "Tach", "Rhag"], core.String);
    },
    get C176() {
      return C176 = dart.constList(["Ion", "Chw", "Maw", "Ebr", "Mai", "Meh", "Gor", "Awst", "Medi", "Hyd", "Tach", "Rhag"], core.String);
    },
    get C177() {
      return C177 = dart.constList(["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"], core.String);
    },
    get C178() {
      return C178 = dart.constList(["Sul", "Llun", "Maw", "Mer", "Iau", "Gwen", "Sad"], core.String);
    },
    get C179() {
      return C179 = dart.constList(["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"], core.String);
    },
    get C180() {
      return C180 = dart.constList(["S", "Ll", "M", "M", "I", "G", "S"], core.String);
    },
    get C181() {
      return C181 = dart.constList(["Ch1", "Ch2", "Ch3", "Ch4"], core.String);
    },
    get C182() {
      return C182 = dart.constList(["chwarter 1af", "2il chwarter", "3ydd chwarter", "4ydd chwarter"], core.String);
    },
    get C183() {
      return C183 = dart.constList(["yb", "yh"], core.String);
    },
    get C184() {
      return C184 = dart.constList(["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd/MM/yy"], core.String);
    },
    get C185() {
      return C185 = dart.constList(["{1} 'am' {0}", "{1} 'am' {0}", "{1} {0}", "{1} {0}"], core.String);
    },
    get C186() {
      return C186 = dart.constList(["f.Kr.", "e.Kr."], core.String);
    },
    get C187() {
      return C187 = dart.constList(["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"], core.String);
    },
    get C188() {
      return C188 = dart.constList(["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], core.String);
    },
    get C189() {
      return C189 = dart.constList(["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"], core.String);
    },
    get C190() {
      return C190 = dart.constList(["søn.", "man.", "tir.", "ons.", "tor.", "fre.", "lør."], core.String);
    },
    get C191() {
      return C191 = dart.constList(["søn", "man", "tir", "ons", "tor", "fre", "lør"], core.String);
    },
    get C192() {
      return C192 = dart.constList(["S", "M", "T", "O", "T", "F", "L"], core.String);
    },
    get C193() {
      return C193 = dart.constList(["1. kvt.", "2. kvt.", "3. kvt.", "4. kvt."], core.String);
    },
    get C194() {
      return C194 = dart.constList(["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"], core.String);
    },
    get C195() {
      return C195 = dart.constList(["EEEE 'den' d. MMMM y", "d. MMMM y", "d. MMM y", "dd.MM.y"], core.String);
    },
    get C196() {
      return C196 = dart.constList(["HH.mm.ss zzzz", "HH.mm.ss z", "HH.mm.ss", "HH.mm"], core.String);
    },
    get C197() {
      return C197 = dart.constList(["{1} 'kl'. {0}", "{1} 'kl'. {0}", "{1} {0}", "{1} {0}"], core.String);
    },
    get C198() {
      return C198 = dart.constList(["v. Chr.", "n. Chr."], core.String);
    },
    get C199() {
      return C199 = dart.constList(["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], core.String);
    },
    get C200() {
      return C200 = dart.constList(["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."], core.String);
    },
    get C201() {
      return C201 = dart.constList(["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], core.String);
    },
    get C202() {
      return C202 = dart.constList(["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], core.String);
    },
    get C203() {
      return C203 = dart.constList(["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."], core.String);
    },
    get C204() {
      return C204 = dart.constList(["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], core.String);
    },
    get C205() {
      return C205 = dart.constList(["S", "M", "D", "M", "D", "F", "S"], core.String);
    },
    get C206() {
      return C206 = dart.constList(["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"], core.String);
    },
    get C207() {
      return C207 = dart.constList(["EEEE, d. MMMM y", "d. MMMM y", "dd.MM.y", "dd.MM.yy"], core.String);
    },
    get C208() {
      return C208 = dart.constList(["{1} 'um' {0}", "{1} 'um' {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C209() {
      return C209 = dart.constList(["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], core.String);
    },
    get C210() {
      return C210 = dart.constList(["Jän.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."], core.String);
    },
    get C211() {
      return C211 = dart.constList(["Jän", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], core.String);
    },
    get C212() {
      return C212 = dart.constList(["π.Χ.", "μ.Χ."], core.String);
    },
    get C213() {
      return C213 = dart.constList(["προ Χριστού", "μετά Χριστόν"], core.String);
    },
    get C214() {
      return C214 = dart.constList(["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"], core.String);
    },
    get C215() {
      return C215 = dart.constList(["Ιανουαρίου", "Φεβρουαρίου", "Μαρτίου", "Απριλίου", "Μαΐου", "Ιουνίου", "Ιουλίου", "Αυγούστου", "Σεπτεμβρίου", "Οκτωβρίου", "Νοεμβρίου", "Δεκεμβρίου"], core.String);
    },
    get C216() {
      return C216 = dart.constList(["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"], core.String);
    },
    get C217() {
      return C217 = dart.constList(["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαΐ", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"], core.String);
    },
    get C218() {
      return C218 = dart.constList(["Ιαν", "Φεβ", "Μάρ", "Απρ", "Μάι", "Ιούν", "Ιούλ", "Αύγ", "Σεπ", "Οκτ", "Νοέ", "Δεκ"], core.String);
    },
    get C219() {
      return C219 = dart.constList(["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"], core.String);
    },
    get C220() {
      return C220 = dart.constList(["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"], core.String);
    },
    get C221() {
      return C221 = dart.constList(["Κ", "Δ", "Τ", "Τ", "Π", "Π", "Σ"], core.String);
    },
    get C222() {
      return C222 = dart.constList(["Τ1", "Τ2", "Τ3", "Τ4"], core.String);
    },
    get C223() {
      return C223 = dart.constList(["1ο τρίμηνο", "2ο τρίμηνο", "3ο τρίμηνο", "4ο τρίμηνο"], core.String);
    },
    get C224() {
      return C224 = dart.constList(["π.μ.", "μ.μ."], core.String);
    },
    get C225() {
      return C225 = dart.constList(["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"], core.String);
    },
    get C226() {
      return C226 = dart.constList(["{1} - {0}", "{1} - {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C227() {
      return C227 = dart.constList(["Su.", "M.", "Tu.", "W.", "Th.", "F.", "Sa."], core.String);
    },
    get C228() {
      return C228 = dart.constList(["am", "pm"], core.String);
    },
    get C229() {
      return C229 = dart.constList(["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."], core.String);
    },
    get C230() {
      return C230 = dart.constList(["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."], core.String);
    },
    get C231() {
      return C231 = dart.constList(["a.m.", "p.m."], core.String);
    },
    get C232() {
      return C232 = dart.constList(["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "y-MM-dd"], core.String);
    },
    get C233() {
      return C233 = dart.constList(["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd/MM/y"], core.String);
    },
    get C234() {
      return C234 = dart.constList(["EEEE, d MMMM, y", "d MMMM y", "dd-MMM-y", "dd/MM/yy"], core.String);
    },
    get C235() {
      return C235 = dart.constList([6, 6], core.int);
    },
    get C236() {
      return C236 = dart.constList(["EEEE, dd MMMM y", "dd MMMM y", "dd MMM y", "y/MM/dd"], core.String);
    },
    get C237() {
      return C237 = dart.constList(["a. C.", "d. C."], core.String);
    },
    get C238() {
      return C238 = dart.constList(["antes de Cristo", "después de Cristo"], core.String);
    },
    get C239() {
      return C239 = dart.constList(["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], core.String);
    },
    get C240() {
      return C240 = dart.constList(["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"], core.String);
    },
    get C241() {
      return C241 = dart.constList(["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."], core.String);
    },
    get C242() {
      return C242 = dart.constList(["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"], core.String);
    },
    get C243() {
      return C243 = dart.constList(["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."], core.String);
    },
    get C244() {
      return C244 = dart.constList(["D", "L", "M", "X", "J", "V", "S"], core.String);
    },
    get C245() {
      return C245 = dart.constList(["T1", "T2", "T3", "T4"], core.String);
    },
    get C246() {
      return C246 = dart.constList(["1.er trimestre", "2.º trimestre", "3.er trimestre", "4.º trimestre"], core.String);
    },
    get C247() {
      return C247 = dart.constList(["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d MMM y", "d/M/yy"], core.String);
    },
    get C248() {
      return C248 = dart.constList(["H:mm:ss (zzzz)", "H:mm:ss z", "H:mm:ss", "H:mm"], core.String);
    },
    get C249() {
      return C249 = dart.constList(["{1}, {0}", "{1}, {0}", "{1} {0}", "{1} {0}"], core.String);
    },
    get C250() {
      return C250 = dart.constList(["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic."], core.String);
    },
    get C251() {
      return C251 = dart.constList(["d", "l", "m", "m", "j", "v", "s"], core.String);
    },
    get C252() {
      return C252 = dart.constList(["D", "L", "M", "M", "J", "V", "S"], core.String);
    },
    get C253() {
      return C253 = dart.constList(["1.º trimestre", "2.º trimestre", "3.º trimestre", "4.º trimestre"], core.String);
    },
    get C254() {
      return C254 = dart.constList(["1er. trim.", "2º. trim.", "3er. trim.", "4º trim."], core.String);
    },
    get C255() {
      return C255 = dart.constList(["1.er trimestre", "2º. trimestre", "3.er trimestre", "4o. trimestre"], core.String);
    },
    get C256() {
      return C256 = dart.constList(["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d MMM y", "dd/MM/yy"], core.String);
    },
    get C257() {
      return C257 = dart.constList(["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d MMM y", "d/M/y"], core.String);
    },
    get C258() {
      return C258 = dart.constList(["eKr", "pKr"], core.String);
    },
    get C259() {
      return C259 = dart.constList(["enne Kristust", "pärast Kristust"], core.String);
    },
    get C260() {
      return C260 = dart.constList(["J", "V", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], core.String);
    },
    get C261() {
      return C261 = dart.constList(["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"], core.String);
    },
    get C262() {
      return C262 = dart.constList(["jaan", "veebr", "märts", "apr", "mai", "juuni", "juuli", "aug", "sept", "okt", "nov", "dets"], core.String);
    },
    get C263() {
      return C263 = dart.constList(["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"], core.String);
    },
    get C264() {
      return C264 = dart.constList(["P", "E", "T", "K", "N", "R", "L"], core.String);
    },
    get C265() {
      return C265 = dart.constList(["EEEE, d. MMMM y", "d. MMMM y", "d. MMM y", "dd.MM.yy"], core.String);
    },
    get C266() {
      return C266 = dart.constList(["K.a.", "K.o."], core.String);
    },
    get C267() {
      return C267 = dart.constList(["K.a.", "Kristo ondoren"], core.String);
    },
    get C268() {
      return C268 = dart.constList(["U", "O", "M", "A", "M", "E", "U", "A", "I", "U", "A", "A"], core.String);
    },
    get C269() {
      return C269 = dart.constList(["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua"], core.String);
    },
    get C270() {
      return C270 = dart.constList(["urt.", "ots.", "mar.", "api.", "mai.", "eka.", "uzt.", "abu.", "ira.", "urr.", "aza.", "abe."], core.String);
    },
    get C271() {
      return C271 = dart.constList(["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"], core.String);
    },
    get C272() {
      return C272 = dart.constList(["ig.", "al.", "ar.", "az.", "og.", "or.", "lr."], core.String);
    },
    get C273() {
      return C273 = dart.constList(["I", "A", "A", "A", "O", "O", "L"], core.String);
    },
    get C274() {
      return C274 = dart.constList(["1Hh", "2Hh", "3Hh", "4Hh"], core.String);
    },
    get C275() {
      return C275 = dart.constList(["1. hiruhilekoa", "2. hiruhilekoa", "3. hiruhilekoa", "4. hiruhilekoa"], core.String);
    },
    get C276() {
      return C276 = dart.constList(["y('e')'ko' MMMM'ren' d('a'), EEEE", "y('e')'ko' MMMM'ren' d('a')", "y('e')'ko' MMM d('a')", "yy/M/d"], core.String);
    },
    get C277() {
      return C277 = dart.constList(["HH:mm:ss (zzzz)", "HH:mm:ss (z)", "HH:mm:ss", "HH:mm"], core.String);
    },
    get C278() {
      return C278 = dart.constList(["ق.م.", "م."], core.String);
    },
    get C279() {
      return C279 = dart.constList(["قبل از میلاد", "میلادی"], core.String);
    },
    get C280() {
      return C280 = dart.constList(["ژ", "ف", "م", "آ", "م", "ژ", "ژ", "ا", "س", "ا", "ن", "د"], core.String);
    },
    get C281() {
      return C281 = dart.constList(["ژانویهٔ", "فوریهٔ", "مارس", "آوریل", "مهٔ", "ژوئن", "ژوئیهٔ", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"], core.String);
    },
    get C282() {
      return C282 = dart.constList(["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"], core.String);
    },
    get C283() {
      return C283 = dart.constList(["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"], core.String);
    },
    get C284() {
      return C284 = dart.constList(["ی", "د", "س", "چ", "پ", "ج", "ش"], core.String);
    },
    get C285() {
      return C285 = dart.constList(["س‌م۱", "س‌م۲", "س‌م۳", "س‌م۴"], core.String);
    },
    get C286() {
      return C286 = dart.constList(["سه‌ماههٔ اول", "سه‌ماههٔ دوم", "سه‌ماههٔ سوم", "سه‌ماههٔ چهارم"], core.String);
    },
    get C287() {
      return C287 = dart.constList(["قبل‌ازظهر", "بعدازظهر"], core.String);
    },
    get C288() {
      return C288 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "y/M/d"], core.String);
    },
    get C289() {
      return C289 = dart.constList(["H:mm:ss (zzzz)", "H:mm:ss (z)", "H:mm:ss", "H:mm"], core.String);
    },
    get C290() {
      return C290 = dart.constList(["{1}، ساعت {0}", "{1}، ساعت {0}", "{1}،‏ {0}", "{1}،‏ {0}"], core.String);
    },
    get C291() {
      return C291 = dart.constList([4, 4], core.int);
    },
    get C292() {
      return C292 = dart.constList(["eKr.", "jKr."], core.String);
    },
    get C293() {
      return C293 = dart.constList(["ennen Kristuksen syntymää", "jälkeen Kristuksen syntymän"], core.String);
    },
    get C294() {
      return C294 = dart.constList(["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"], core.String);
    },
    get C295() {
      return C295 = dart.constList(["tammikuuta", "helmikuuta", "maaliskuuta", "huhtikuuta", "toukokuuta", "kesäkuuta", "heinäkuuta", "elokuuta", "syyskuuta", "lokakuuta", "marraskuuta", "joulukuuta"], core.String);
    },
    get C296() {
      return C296 = dart.constList(["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"], core.String);
    },
    get C297() {
      return C297 = dart.constList(["tammik.", "helmik.", "maalisk.", "huhtik.", "toukok.", "kesäk.", "heinäk.", "elok.", "syysk.", "lokak.", "marrask.", "jouluk."], core.String);
    },
    get C298() {
      return C298 = dart.constList(["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu"], core.String);
    },
    get C299() {
      return C299 = dart.constList(["sunnuntaina", "maanantaina", "tiistaina", "keskiviikkona", "torstaina", "perjantaina", "lauantaina"], core.String);
    },
    get C300() {
      return C300 = dart.constList(["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"], core.String);
    },
    get C301() {
      return C301 = dart.constList(["su", "ma", "ti", "ke", "to", "pe", "la"], core.String);
    },
    get C302() {
      return C302 = dart.constList(["S", "M", "T", "K", "T", "P", "L"], core.String);
    },
    get C303() {
      return C303 = dart.constList(["1. nelj.", "2. nelj.", "3. nelj.", "4. nelj."], core.String);
    },
    get C304() {
      return C304 = dart.constList(["1. neljännes", "2. neljännes", "3. neljännes", "4. neljännes"], core.String);
    },
    get C305() {
      return C305 = dart.constList(["ap.", "ip."], core.String);
    },
    get C306() {
      return C306 = dart.constList(["cccc d. MMMM y", "d. MMMM y", "d.M.y", "d.M.y"], core.String);
    },
    get C307() {
      return C307 = dart.constList(["H.mm.ss zzzz", "H.mm.ss z", "H.mm.ss", "H.mm"], core.String);
    },
    get C308() {
      return C308 = dart.constList(["{1} 'klo' {0}", "{1} 'klo' {0}", "{1} 'klo' {0}", "{1} {0}"], core.String);
    },
    get C309() {
      return C309 = dart.constList(["Ene", "Peb", "Mar", "Abr", "May", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"], core.String);
    },
    get C310() {
      return C310 = dart.constList(["E", "P", "M", "A", "M", "Hun", "Hul", "Ago", "Set", "Okt", "Nob", "Dis"], core.String);
    },
    get C311() {
      return C311 = dart.constList(["Enero", "Pebrero", "Marso", "Abril", "Mayo", "Hunyo", "Hulyo", "Agosto", "Setyembre", "Oktubre", "Nobyembre", "Disyembre"], core.String);
    },
    get C312() {
      return C312 = dart.constList(["Linggo", "Lunes", "Martes", "Miyerkules", "Huwebes", "Biyernes", "Sabado"], core.String);
    },
    get C313() {
      return C313 = dart.constList(["Lin", "Lun", "Mar", "Miy", "Huw", "Biy", "Sab"], core.String);
    },
    get C314() {
      return C314 = dart.constList(["ika-1 quarter", "ika-2 quarter", "ika-3 quarter", "ika-4 na quarter"], core.String);
    },
    get C315() {
      return C315 = dart.constList(["{1} 'nang' {0}", "{1} 'nang' {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C316() {
      return C316 = dart.constList(["av. J.-C.", "ap. J.-C."], core.String);
    },
    get C317() {
      return C317 = dart.constList(["avant Jésus-Christ", "après Jésus-Christ"], core.String);
    },
    get C318() {
      return C318 = dart.constList(["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"], core.String);
    },
    get C319() {
      return C319 = dart.constList(["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], core.String);
    },
    get C320() {
      return C320 = dart.constList(["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], core.String);
    },
    get C321() {
      return C321 = dart.constList(["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], core.String);
    },
    get C322() {
      return C322 = dart.constList(["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"], core.String);
    },
    get C323() {
      return C323 = dart.constList(["{1} 'à' {0}", "{1} 'à' {0}", "{1} 'à' {0}", "{1} {0}"], core.String);
    },
    get C324() {
      return C324 = dart.constList(["janv.", "févr.", "mars", "avr.", "mai", "juin", "juill.", "août", "sept.", "oct.", "nov.", "déc."], core.String);
    },
    get C325() {
      return C325 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "yy-MM-dd"], core.String);
    },
    get C326() {
      return C326 = dart.constList(["HH 'h' mm 'min' ss 's' zzzz", "HH 'h' mm 'min' ss 's' z", "HH 'h' mm 'min' ss 's'", "HH 'h' mm"], core.String);
    },
    get C327() {
      return C327 = dart.constList(["{1} 'à' {0}", "{1} 'à' {0}", "{1} {0}", "{1} {0}"], core.String);
    },
    get C328() {
      return C328 = dart.constList(["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd.MM.yy"], core.String);
    },
    get C329() {
      return C329 = dart.constList(["HH.mm:ss 'h' zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], core.String);
    },
    get C330() {
      return C330 = dart.constList(["RC", "AD"], core.String);
    },
    get C331() {
      return C331 = dart.constList(["Roimh Chríost", "Anno Domini"], core.String);
    },
    get C332() {
      return C332 = dart.constList(["E", "F", "M", "A", "B", "M", "I", "L", "M", "D", "S", "N"], core.String);
    },
    get C333() {
      return C333 = dart.constList(["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"], core.String);
    },
    get C334() {
      return C334 = dart.constList(["Ean", "Feabh", "Márta", "Aib", "Beal", "Meith", "Iúil", "Lún", "MFómh", "DFómh", "Samh", "Noll"], core.String);
    },
    get C335() {
      return C335 = dart.constList(["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"], core.String);
    },
    get C336() {
      return C336 = dart.constList(["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"], core.String);
    },
    get C337() {
      return C337 = dart.constList(["D", "L", "M", "C", "D", "A", "S"], core.String);
    },
    get C338() {
      return C338 = dart.constList(["R1", "R2", "R3", "R4"], core.String);
    },
    get C339() {
      return C339 = dart.constList(["1ú ráithe", "2ú ráithe", "3ú ráithe", "4ú ráithe"], core.String);
    },
    get C340() {
      return C340 = dart.constList(["r.n.", "i.n."], core.String);
    },
    get C341() {
      return C341 = dart.constList(["a.C.", "d.C."], core.String);
    },
    get C342() {
      return C342 = dart.constList(["antes de Cristo", "despois de Cristo"], core.String);
    },
    get C343() {
      return C343 = dart.constList(["x.", "f.", "m.", "a.", "m.", "x.", "x.", "a.", "s.", "o.", "n.", "d."], core.String);
    },
    get C344() {
      return C344 = dart.constList(["X", "F", "M", "A", "M", "X", "X", "A", "S", "O", "N", "D"], core.String);
    },
    get C345() {
      return C345 = dart.constList(["xaneiro", "febreiro", "marzo", "abril", "maio", "xuño", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro"], core.String);
    },
    get C346() {
      return C346 = dart.constList(["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xuño", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro"], core.String);
    },
    get C347() {
      return C347 = dart.constList(["xan.", "feb.", "mar.", "abr.", "maio", "xuño", "xul.", "ago.", "set.", "out.", "nov.", "dec."], core.String);
    },
    get C348() {
      return C348 = dart.constList(["Xan.", "Feb.", "Mar.", "Abr.", "Maio", "Xuño", "Xul.", "Ago.", "Set.", "Out.", "Nov.", "Dec."], core.String);
    },
    get C349() {
      return C349 = dart.constList(["domingo", "luns", "martes", "mércores", "xoves", "venres", "sábado"], core.String);
    },
    get C350() {
      return C350 = dart.constList(["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"], core.String);
    },
    get C351() {
      return C351 = dart.constList(["dom.", "luns", "mar.", "mér.", "xov.", "ven.", "sáb."], core.String);
    },
    get C352() {
      return C352 = dart.constList(["Dom.", "Luns", "Mar.", "Mér.", "Xov.", "Ven.", "Sáb."], core.String);
    },
    get C353() {
      return C353 = dart.constList(["d.", "l.", "m.", "m.", "x.", "v.", "s."], core.String);
    },
    get C354() {
      return C354 = dart.constList(["D", "L", "M", "M", "X", "V", "S"], core.String);
    },
    get C355() {
      return C355 = dart.constList(["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d 'de' MMM 'de' y", "dd/MM/yy"], core.String);
    },
    get C356() {
      return C356 = dart.constList(["{0} 'do' {1}", "{0} 'do' {1}", "{0}, {1}", "{0}, {1}"], core.String);
    },
    get C357() {
      return C357 = dart.constList(["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "Auguscht", "Septämber", "Oktoober", "Novämber", "Dezämber"], core.String);
    },
    get C358() {
      return C358 = dart.constList(["Sunntig", "Määntig", "Ziischtig", "Mittwuch", "Dunschtig", "Friitig", "Samschtig"], core.String);
    },
    get C359() {
      return C359 = dart.constList(["Su.", "Mä.", "Zi.", "Mi.", "Du.", "Fr.", "Sa."], core.String);
    },
    get C360() {
      return C360 = dart.constList(["am Vormittag", "am Namittag"], core.String);
    },
    get C361() {
      return C361 = dart.constList(["ઈ.સ.પૂર્વે", "ઈ.સ."], core.String);
    },
    get C362() {
      return C362 = dart.constList(["ઈસવીસન પૂર્વે", "ઇસવીસન"], core.String);
    },
    get C363() {
      return C363 = dart.constList(["જા", "ફે", "મા", "એ", "મે", "જૂ", "જુ", "ઑ", "સ", "ઑ", "ન", "ડિ"], core.String);
    },
    get C364() {
      return C364 = dart.constList(["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટેમ્બર", "ઑક્ટોબર", "નવેમ્બર", "ડિસેમ્બર"], core.String);
    },
    get C365() {
      return C365 = dart.constList(["જાન્યુ", "ફેબ્રુ", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટે", "ઑક્ટો", "નવે", "ડિસે"], core.String);
    },
    get C366() {
      return C366 = dart.constList(["રવિવાર", "સોમવાર", "મંગળવાર", "બુધવાર", "ગુરુવાર", "શુક્રવાર", "શનિવાર"], core.String);
    },
    get C367() {
      return C367 = dart.constList(["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"], core.String);
    },
    get C368() {
      return C368 = dart.constList(["ર", "સો", "મં", "બુ", "ગુ", "શુ", "શ"], core.String);
    },
    get C369() {
      return C369 = dart.constList(["1લો ત્રિમાસ", "2જો ત્રિમાસ", "3જો ત્રિમાસ", "4થો ત્રિમાસ"], core.String);
    },
    get C370() {
      return C370 = dart.constList(["hh:mm:ss a zzzz", "hh:mm:ss a z", "hh:mm:ss a", "hh:mm a"], core.String);
    },
    get C371() {
      return C371 = dart.constList(["{1} એ {0} વાગ્યે", "{1} એ {0} વાગ્યે", "{1} {0}", "{1} {0}"], core.String);
    },
    get C372() {
      return C372 = dart.constList(["BCE", "CE"], core.String);
    },
    get C373() {
      return C373 = dart.constList(["Ianuali", "Pepeluali", "Malaki", "ʻApelila", "Mei", "Iune", "Iulai", "ʻAukake", "Kepakemapa", "ʻOkakopa", "Nowemapa", "Kekemapa"], core.String);
    },
    get C374() {
      return C374 = dart.constList(["Ian.", "Pep.", "Mal.", "ʻAp.", "Mei", "Iun.", "Iul.", "ʻAu.", "Kep.", "ʻOk.", "Now.", "Kek."], core.String);
    },
    get C375() {
      return C375 = dart.constList(["Lāpule", "Poʻakahi", "Poʻalua", "Poʻakolu", "Poʻahā", "Poʻalima", "Poʻaono"], core.String);
    },
    get C376() {
      return C376 = dart.constList(["LP", "P1", "P2", "P3", "P4", "P5", "P6"], core.String);
    },
    get C377() {
      return C377 = dart.constList(["לפנה״ס", "לספירה"], core.String);
    },
    get C378() {
      return C378 = dart.constList(["לפני הספירה", "לספירה"], core.String);
    },
    get C379() {
      return C379 = dart.constList(["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"], core.String);
    },
    get C380() {
      return C380 = dart.constList(["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"], core.String);
    },
    get C381() {
      return C381 = dart.constList(["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "יום שבת"], core.String);
    },
    get C382() {
      return C382 = dart.constList(["יום א׳", "יום ב׳", "יום ג׳", "יום ד׳", "יום ה׳", "יום ו׳", "שבת"], core.String);
    },
    get C383() {
      return C383 = dart.constList(["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"], core.String);
    },
    get C384() {
      return C384 = dart.constList(["רבעון 1", "רבעון 2", "רבעון 3", "רבעון 4"], core.String);
    },
    get C385() {
      return C385 = dart.constList(["לפנה״צ", "אחה״צ"], core.String);
    },
    get C386() {
      return C386 = dart.constList(["EEEE, d בMMMM y", "d בMMMM y", "d בMMM y", "d.M.y"], core.String);
    },
    get C387() {
      return C387 = dart.constList(["{1} בשעה {0}", "{1} בשעה {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C388() {
      return C388 = dart.constList(["ईसा-पूर्व", "ईस्वी"], core.String);
    },
    get C389() {
      return C389 = dart.constList(["ईसा-पूर्व", "ईसवी सन"], core.String);
    },
    get C390() {
      return C390 = dart.constList(["ज", "फ़", "मा", "अ", "म", "जू", "जु", "अ", "सि", "अ", "न", "दि"], core.String);
    },
    get C391() {
      return C391 = dart.constList(["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्तूबर", "नवंबर", "दिसंबर"], core.String);
    },
    get C392() {
      return C392 = dart.constList(["जन॰", "फ़र॰", "मार्च", "अप्रैल", "मई", "जून", "जुल॰", "अग॰", "सित॰", "अक्तू॰", "नव॰", "दिस॰"], core.String);
    },
    get C393() {
      return C393 = dart.constList(["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"], core.String);
    },
    get C394() {
      return C394 = dart.constList(["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"], core.String);
    },
    get C395() {
      return C395 = dart.constList(["र", "सो", "मं", "बु", "गु", "शु", "श"], core.String);
    },
    get C396() {
      return C396 = dart.constList(["ति1", "ति2", "ति3", "ति4"], core.String);
    },
    get C397() {
      return C397 = dart.constList(["पहली तिमाही", "दूसरी तिमाही", "तीसरी तिमाही", "चौथी तिमाही"], core.String);
    },
    get C398() {
      return C398 = dart.constList(["{1} को {0}", "{1} को {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C399() {
      return C399 = dart.constList(["pr. Kr.", "po. Kr."], core.String);
    },
    get C400() {
      return C400 = dart.constList(["prije Krista", "poslije Krista"], core.String);
    },
    get C401() {
      return C401 = dart.constList(["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], core.String);
    },
    get C402() {
      return C402 = dart.constList(["siječnja", "veljače", "ožujka", "travnja", "svibnja", "lipnja", "srpnja", "kolovoza", "rujna", "listopada", "studenoga", "prosinca"], core.String);
    },
    get C403() {
      return C403 = dart.constList(["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"], core.String);
    },
    get C404() {
      return C404 = dart.constList(["sij", "velj", "ožu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"], core.String);
    },
    get C405() {
      return C405 = dart.constList(["1kv", "2kv", "3kv", "4kv"], core.String);
    },
    get C406() {
      return C406 = dart.constList(["EEEE, d. MMMM y.", "d. MMMM y.", "d. MMM y.", "dd. MM. y."], core.String);
    },
    get C407() {
      return C407 = dart.constList(["HH:mm:ss (zzzz)", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], core.String);
    },
    get C408() {
      return C408 = dart.constList(["i. e.", "i. sz."], core.String);
    },
    get C409() {
      return C409 = dart.constList(["Krisztus előtt", "időszámításunk szerint"], core.String);
    },
    get C410() {
      return C410 = dart.constList(["J", "F", "M", "Á", "M", "J", "J", "A", "Sz", "O", "N", "D"], core.String);
    },
    get C411() {
      return C411 = dart.constList(["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"], core.String);
    },
    get C412() {
      return C412 = dart.constList(["jan.", "febr.", "márc.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."], core.String);
    },
    get C413() {
      return C413 = dart.constList(["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"], core.String);
    },
    get C414() {
      return C414 = dart.constList(["V", "H", "K", "Sze", "Cs", "P", "Szo"], core.String);
    },
    get C415() {
      return C415 = dart.constList(["V", "H", "K", "Sz", "Cs", "P", "Sz"], core.String);
    },
    get C416() {
      return C416 = dart.constList(["I. n.év", "II. n.év", "III. n.év", "IV. n.év"], core.String);
    },
    get C417() {
      return C417 = dart.constList(["I. negyedév", "II. negyedév", "III. negyedév", "IV. negyedév"], core.String);
    },
    get C418() {
      return C418 = dart.constList(["de.", "du."], core.String);
    },
    get C419() {
      return C419 = dart.constList(["y. MMMM d., EEEE", "y. MMMM d.", "y. MMM d.", "y. MM. dd."], core.String);
    },
    get C420() {
      return C420 = dart.constList(["մ.թ.ա.", "մ.թ."], core.String);
    },
    get C421() {
      return C421 = dart.constList(["Քրիստոսից առաջ", "Քրիստոսից հետո"], core.String);
    },
    get C422() {
      return C422 = dart.constList(["Հ", "Փ", "Մ", "Ա", "Մ", "Հ", "Հ", "Օ", "Ս", "Հ", "Ն", "Դ"], core.String);
    },
    get C423() {
      return C423 = dart.constList(["հունվարի", "փետրվարի", "մարտի", "ապրիլի", "մայիսի", "հունիսի", "հուլիսի", "օգոստոսի", "սեպտեմբերի", "հոկտեմբերի", "նոյեմբերի", "դեկտեմբերի"], core.String);
    },
    get C424() {
      return C424 = dart.constList(["հունվար", "փետրվար", "մարտ", "ապրիլ", "մայիս", "հունիս", "հուլիս", "օգոստոս", "սեպտեմբեր", "հոկտեմբեր", "նոյեմբեր", "դեկտեմբեր"], core.String);
    },
    get C425() {
      return C425 = dart.constList(["հնվ", "փտվ", "մրտ", "ապր", "մյս", "հնս", "հլս", "օգս", "սեպ", "հոկ", "նոյ", "դեկ"], core.String);
    },
    get C426() {
      return C426 = dart.constList(["կիրակի", "երկուշաբթի", "երեքշաբթի", "չորեքշաբթի", "հինգշաբթի", "ուրբաթ", "շաբաթ"], core.String);
    },
    get C427() {
      return C427 = dart.constList(["կիր", "երկ", "երք", "չրք", "հնգ", "ուր", "շբթ"], core.String);
    },
    get C428() {
      return C428 = dart.constList(["Կ", "Ե", "Ե", "Չ", "Հ", "Ո", "Շ"], core.String);
    },
    get C429() {
      return C429 = dart.constList(["1-ին եռմս.", "2-րդ եռմս.", "3-րդ եռմս.", "4-րդ եռմս."], core.String);
    },
    get C430() {
      return C430 = dart.constList(["1-ին եռամսյակ", "2-րդ եռամսյակ", "3-րդ եռամսյակ", "4-րդ եռամսյակ"], core.String);
    },
    get C431() {
      return C431 = dart.constList(["y թ. MMMM d, EEEE", "dd MMMM, y թ.", "dd MMM, y թ.", "dd.MM.yy"], core.String);
    },
    get C432() {
      return C432 = dart.constList(["SM", "M"], core.String);
    },
    get C433() {
      return C433 = dart.constList(["Sebelum Masehi", "Masehi"], core.String);
    },
    get C434() {
      return C434 = dart.constList(["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"], core.String);
    },
    get C435() {
      return C435 = dart.constList(["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"], core.String);
    },
    get C436() {
      return C436 = dart.constList(["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"], core.String);
    },
    get C437() {
      return C437 = dart.constList(["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"], core.String);
    },
    get C438() {
      return C438 = dart.constList(["M", "S", "S", "R", "K", "J", "S"], core.String);
    },
    get C439() {
      return C439 = dart.constList(["Kuartal ke-1", "Kuartal ke-2", "Kuartal ke-3", "Kuartal ke-4"], core.String);
    },
    get C440() {
      return C440 = dart.constList(["EEEE, dd MMMM y", "d MMMM y", "d MMM y", "dd/MM/yy"], core.String);
    },
    get C441() {
      return C441 = dart.constList(["fyrir Krist", "eftir Krist"], core.String);
    },
    get C442() {
      return C442 = dart.constList(["J", "F", "M", "A", "M", "J", "J", "Á", "S", "O", "N", "D"], core.String);
    },
    get C443() {
      return C443 = dart.constList(["janúar", "febrúar", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "september", "október", "nóvember", "desember"], core.String);
    },
    get C444() {
      return C444 = dart.constList(["jan.", "feb.", "mar.", "apr.", "maí", "jún.", "júl.", "ágú.", "sep.", "okt.", "nóv.", "des."], core.String);
    },
    get C445() {
      return C445 = dart.constList(["sunnudagur", "mánudagur", "þriðjudagur", "miðvikudagur", "fimmtudagur", "föstudagur", "laugardagur"], core.String);
    },
    get C446() {
      return C446 = dart.constList(["sun.", "mán.", "þri.", "mið.", "fim.", "fös.", "lau."], core.String);
    },
    get C447() {
      return C447 = dart.constList(["S", "M", "Þ", "M", "F", "F", "L"], core.String);
    },
    get C448() {
      return C448 = dart.constList(["F1", "F2", "F3", "F4"], core.String);
    },
    get C449() {
      return C449 = dart.constList(["1. fjórðungur", "2. fjórðungur", "3. fjórðungur", "4. fjórðungur"], core.String);
    },
    get C450() {
      return C450 = dart.constList(["f.h.", "e.h."], core.String);
    },
    get C451() {
      return C451 = dart.constList(["EEEE, d. MMMM y", "d. MMMM y", "d. MMM y", "d.M.y"], core.String);
    },
    get C452() {
      return C452 = dart.constList(["{1} 'kl'. {0}", "{1} 'kl'. {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C453() {
      return C453 = dart.constList(["avanti Cristo", "dopo Cristo"], core.String);
    },
    get C454() {
      return C454 = dart.constList(["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"], core.String);
    },
    get C455() {
      return C455 = dart.constList(["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"], core.String);
    },
    get C456() {
      return C456 = dart.constList(["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], core.String);
    },
    get C457() {
      return C457 = dart.constList(["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"], core.String);
    },
    get C458() {
      return C458 = dart.constList(["dom", "lun", "mar", "mer", "gio", "ven", "sab"], core.String);
    },
    get C459() {
      return C459 = dart.constList(["D", "L", "M", "M", "G", "V", "S"], core.String);
    },
    get C460() {
      return C460 = dart.constList(["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"], core.String);
    },
    get C461() {
      return C461 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd/MM/yy"], core.String);
    },
    get C462() {
      return C462 = dart.constList(["{1} {0}", "{1} {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C463() {
      return C463 = dart.constList(["紀元前", "西暦"], core.String);
    },
    get C464() {
      return C464 = dart.constList(["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], core.String);
    },
    get C465() {
      return C465 = dart.constList(["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"], core.String);
    },
    get C466() {
      return C466 = dart.constList(["日", "月", "火", "水", "木", "金", "土"], core.String);
    },
    get C467() {
      return C467 = dart.constList(["第1四半期", "第2四半期", "第3四半期", "第4四半期"], core.String);
    },
    get C468() {
      return C468 = dart.constList(["午前", "午後"], core.String);
    },
    get C469() {
      return C469 = dart.constList(["y年M月d日EEEE", "y年M月d日", "y/MM/dd", "y/MM/dd"], core.String);
    },
    get C470() {
      return C470 = dart.constList(["H時mm分ss秒 zzzz", "H:mm:ss z", "H:mm:ss", "H:mm"], core.String);
    },
    get C471() {
      return C471 = dart.constList(["ძვ. წ.", "ახ. წ."], core.String);
    },
    get C472() {
      return C472 = dart.constList(["ძველი წელთაღრიცხვით", "ახალი წელთაღრიცხვით"], core.String);
    },
    get C473() {
      return C473 = dart.constList(["ი", "თ", "მ", "ა", "მ", "ი", "ი", "ა", "ს", "ო", "ნ", "დ"], core.String);
    },
    get C474() {
      return C474 = dart.constList(["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"], core.String);
    },
    get C475() {
      return C475 = dart.constList(["იან", "თებ", "მარ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"], core.String);
    },
    get C476() {
      return C476 = dart.constList(["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"], core.String);
    },
    get C477() {
      return C477 = dart.constList(["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"], core.String);
    },
    get C478() {
      return C478 = dart.constList(["კ", "ო", "ს", "ო", "ხ", "პ", "შ"], core.String);
    },
    get C479() {
      return C479 = dart.constList(["I კვ.", "II კვ.", "III კვ.", "IV კვ."], core.String);
    },
    get C480() {
      return C480 = dart.constList(["I კვარტალი", "II კვარტალი", "III კვარტალი", "IV კვარტალი"], core.String);
    },
    get C481() {
      return C481 = dart.constList(["EEEE, dd MMMM, y", "d MMMM, y", "d MMM. y", "dd.MM.yy"], core.String);
    },
    get C482() {
      return C482 = dart.constList(["б.з.д.", "б.з."], core.String);
    },
    get C483() {
      return C483 = dart.constList(["Біздің заманымызға дейін", "біздің заманымыз"], core.String);
    },
    get C484() {
      return C484 = dart.constList(["Қ", "А", "Н", "С", "М", "М", "Ш", "Т", "Қ", "Қ", "Қ", "Ж"], core.String);
    },
    get C485() {
      return C485 = dart.constList(["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"], core.String);
    },
    get C486() {
      return C486 = dart.constList(["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"], core.String);
    },
    get C487() {
      return C487 = dart.constList(["қаң.", "ақп.", "нау.", "сәу.", "мам.", "мау.", "шіл.", "там.", "қыр.", "қаз.", "қар.", "жел."], core.String);
    },
    get C488() {
      return C488 = dart.constList(["жексенбі", "дүйсенбі", "сейсенбі", "сәрсенбі", "бейсенбі", "жұма", "сенбі"], core.String);
    },
    get C489() {
      return C489 = dart.constList(["жс", "дс", "сс", "ср", "бс", "жм", "сб"], core.String);
    },
    get C490() {
      return C490 = dart.constList(["Ж", "Д", "С", "С", "Б", "Ж", "С"], core.String);
    },
    get C491() {
      return C491 = dart.constList(["І тқс.", "ІІ тқс.", "ІІІ тқс.", "IV тқс."], core.String);
    },
    get C492() {
      return C492 = dart.constList(["І тоқсан", "ІІ тоқсан", "ІІІ тоқсан", "IV тоқсан"], core.String);
    },
    get C493() {
      return C493 = dart.constList(["y 'ж'. d MMMM, EEEE", "y 'ж'. d MMMM", "y 'ж'. dd MMM", "dd.MM.yy"], core.String);
    },
    get C494() {
      return C494 = dart.constList(["មុន គ.ស.", "គ.ស."], core.String);
    },
    get C495() {
      return C495 = dart.constList(["មុន​គ្រិស្តសករាជ", "គ្រិស្តសករាជ"], core.String);
    },
    get C496() {
      return C496 = dart.constList(["ម", "ក", "ម", "ម", "ឧ", "ម", "ក", "ស", "ក", "ត", "វ", "ធ"], core.String);
    },
    get C497() {
      return C497 = dart.constList(["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"], core.String);
    },
    get C498() {
      return C498 = dart.constList(["អាទិត្យ", "ច័ន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"], core.String);
    },
    get C499() {
      return C499 = dart.constList(["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"], core.String);
    },
    get C500() {
      return C500 = dart.constList(["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហ", "សុក្រ", "សៅរ៍"], core.String);
    },
    get C501() {
      return C501 = dart.constList(["អ", "ច", "អ", "ព", "ព", "ស", "ស"], core.String);
    },
    get C502() {
      return C502 = dart.constList(["ត្រីមាសទី 1", "ត្រីមាសទី 2", "ត្រីមាសទី 3", "ត្រីមាសទី 4"], core.String);
    },
    get C503() {
      return C503 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "d/M/yy"], core.String);
    },
    get C504() {
      return C504 = dart.constList(["{1} នៅ​ម៉ោង {0}", "{1} នៅ​ម៉ោង {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C505() {
      return C505 = dart.constList(["ಕ್ರಿ.ಪೂ", "ಕ್ರಿ.ಶ"], core.String);
    },
    get C506() {
      return C506 = dart.constList(["ಕ್ರಿಸ್ತ ಪೂರ್ವ", "ಕ್ರಿಸ್ತ ಶಕ"], core.String);
    },
    get C507() {
      return C507 = dart.constList(["ಜ", "ಫೆ", "ಮಾ", "ಏ", "ಮೇ", "ಜೂ", "ಜು", "ಆ", "ಸೆ", "ಅ", "ನ", "ಡಿ"], core.String);
    },
    get C508() {
      return C508 = dart.constList(["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂಬರ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್"], core.String);
    },
    get C509() {
      return C509 = dart.constList(["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿ", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗ", "ಸೆಪ್ಟೆಂ", "ಅಕ್ಟೋ", "ನವೆಂ", "ಡಿಸೆಂ"], core.String);
    },
    get C510() {
      return C510 = dart.constList(["ಜನ", "ಫೆಬ್ರ", "ಮಾರ್ಚ್", "ಏಪ್ರಿ", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗ", "ಸೆಪ್ಟೆಂ", "ಅಕ್ಟೋ", "ನವೆಂ", "ಡಿಸೆಂ"], core.String);
    },
    get C511() {
      return C511 = dart.constList(["ಭಾನುವಾರ", "ಸೋಮವಾರ", "ಮಂಗಳವಾರ", "ಬುಧವಾರ", "ಗುರುವಾರ", "ಶುಕ್ರವಾರ", "ಶನಿವಾರ"], core.String);
    },
    get C512() {
      return C512 = dart.constList(["ಭಾನು", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"], core.String);
    },
    get C513() {
      return C513 = dart.constList(["ಭಾ", "ಸೋ", "ಮಂ", "ಬು", "ಗು", "ಶು", "ಶ"], core.String);
    },
    get C514() {
      return C514 = dart.constList(["ತ್ರೈ 1", "ತ್ರೈ 2", "ತ್ರೈ 3", "ತ್ರೈ 4"], core.String);
    },
    get C515() {
      return C515 = dart.constList(["1ನೇ ತ್ರೈಮಾಸಿಕ", "2ನೇ ತ್ರೈಮಾಸಿಕ", "3ನೇ ತ್ರೈಮಾಸಿಕ", "4ನೇ ತ್ರೈಮಾಸಿಕ"], core.String);
    },
    get C516() {
      return C516 = dart.constList(["ಪೂರ್ವಾಹ್ನ", "ಅಪರಾಹ್ನ"], core.String);
    },
    get C517() {
      return C517 = dart.constList(["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "d/M/yy"], core.String);
    },
    get C518() {
      return C518 = dart.constList(["기원전", "서기"], core.String);
    },
    get C519() {
      return C519 = dart.constList(["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], core.String);
    },
    get C520() {
      return C520 = dart.constList(["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"], core.String);
    },
    get C521() {
      return C521 = dart.constList(["일", "월", "화", "수", "목", "금", "토"], core.String);
    },
    get C522() {
      return C522 = dart.constList(["1분기", "2분기", "3분기", "4분기"], core.String);
    },
    get C523() {
      return C523 = dart.constList(["제 1/4분기", "제 2/4분기", "제 3/4분기", "제 4/4분기"], core.String);
    },
    get C524() {
      return C524 = dart.constList(["오전", "오후"], core.String);
    },
    get C525() {
      return C525 = dart.constList(["y년 M월 d일 EEEE", "y년 M월 d일", "y. M. d.", "yy. M. d."], core.String);
    },
    get C526() {
      return C526 = dart.constList(["a h시 m분 s초 zzzz", "a h시 m분 s초 z", "a h:mm:ss", "a h:mm"], core.String);
    },
    get C527() {
      return C527 = dart.constList(["б.з.ч.", "б.з."], core.String);
    },
    get C528() {
      return C528 = dart.constList(["биздин заманга чейин", "биздин заман"], core.String);
    },
    get C529() {
      return C529 = dart.constList(["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"], core.String);
    },
    get C530() {
      return C530 = dart.constList(["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"], core.String);
    },
    get C531() {
      return C531 = dart.constList(["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], core.String);
    },
    get C532() {
      return C532 = dart.constList(["янв.", "фев.", "мар.", "апр.", "май", "июн.", "июл.", "авг.", "сен.", "окт.", "ноя.", "дек."], core.String);
    },
    get C533() {
      return C533 = dart.constList(["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"], core.String);
    },
    get C534() {
      return C534 = dart.constList(["жекшемби", "дүйшөмбү", "шейшемби", "шаршемби", "бейшемби", "жума", "ишемби"], core.String);
    },
    get C535() {
      return C535 = dart.constList(["жек.", "дүй.", "шейш.", "шарш.", "бейш.", "жума", "ишм."], core.String);
    },
    get C536() {
      return C536 = dart.constList(["Ж", "Д", "Ш", "Ш", "Б", "Ж", "И"], core.String);
    },
    get C537() {
      return C537 = dart.constList(["1-чей.", "2-чей.", "3-чей.", "4-чей."], core.String);
    },
    get C538() {
      return C538 = dart.constList(["1-чейрек", "2-чейрек", "3-чейрек", "4-чейрек"], core.String);
    },
    get C539() {
      return C539 = dart.constList(["таңкы", "түштөн кийинки"], core.String);
    },
    get C540() {
      return C540 = dart.constList(["y-'ж'., d-MMMM, EEEE", "y-'ж'., d-MMMM", "y-'ж'., d-MMM", "d/M/yy"], core.String);
    },
    get C541() {
      return C541 = dart.constList(["libóso ya", "nsima ya Y"], core.String);
    },
    get C542() {
      return C542 = dart.constList(["Yambo ya Yézu Krís", "Nsima ya Yézu Krís"], core.String);
    },
    get C543() {
      return C543 = dart.constList(["y", "f", "m", "a", "m", "y", "y", "a", "s", "ɔ", "n", "d"], core.String);
    },
    get C544() {
      return C544 = dart.constList(["sánzá ya yambo", "sánzá ya míbalé", "sánzá ya mísáto", "sánzá ya mínei", "sánzá ya mítáno", "sánzá ya motóbá", "sánzá ya nsambo", "sánzá ya mwambe", "sánzá ya libwa", "sánzá ya zómi", "sánzá ya zómi na mɔ̌kɔ́", "sánzá ya zómi na míbalé"], core.String);
    },
    get C545() {
      return C545 = dart.constList(["yan", "fbl", "msi", "apl", "mai", "yun", "yul", "agt", "stb", "ɔtb", "nvb", "dsb"], core.String);
    },
    get C546() {
      return C546 = dart.constList(["eyenga", "mokɔlɔ mwa yambo", "mokɔlɔ mwa míbalé", "mokɔlɔ mwa mísáto", "mokɔlɔ ya mínéi", "mokɔlɔ ya mítáno", "mpɔ́sɔ"], core.String);
    },
    get C547() {
      return C547 = dart.constList(["eye", "ybo", "mbl", "mst", "min", "mtn", "mps"], core.String);
    },
    get C548() {
      return C548 = dart.constList(["e", "y", "m", "m", "m", "m", "p"], core.String);
    },
    get C549() {
      return C549 = dart.constList(["SM1", "SM2", "SM3", "SM4"], core.String);
    },
    get C550() {
      return C550 = dart.constList(["sánzá mísáto ya yambo", "sánzá mísáto ya míbalé", "sánzá mísáto ya mísáto", "sánzá mísáto ya mínei"], core.String);
    },
    get C551() {
      return C551 = dart.constList(["ntɔ́ngɔ́", "mpókwa"], core.String);
    },
    get C552() {
      return C552 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "d/M/y"], core.String);
    },
    get C553() {
      return C553 = dart.constList(["ກ່ອນ ຄ.ສ.", "ຄ.ສ."], core.String);
    },
    get C554() {
      return C554 = dart.constList(["ກ່ອນຄຣິດສັກກະລາດ", "ຄຣິດສັກກະລາດ"], core.String);
    },
    get C555() {
      return C555 = dart.constList(["ມັງກອນ", "ກຸມພາ", "ມີນາ", "ເມສາ", "ພຶດສະພາ", "ມິຖຸນາ", "ກໍລະກົດ", "ສິງຫາ", "ກັນຍາ", "ຕຸລາ", "ພະຈິກ", "ທັນວາ"], core.String);
    },
    get C556() {
      return C556 = dart.constList(["ມ.ກ.", "ກ.ພ.", "ມ.ນ.", "ມ.ສ.", "ພ.ພ.", "ມິ.ຖ.", "ກ.ລ.", "ສ.ຫ.", "ກ.ຍ.", "ຕ.ລ.", "ພ.ຈ.", "ທ.ວ."], core.String);
    },
    get C557() {
      return C557 = dart.constList(["ວັນອາທິດ", "ວັນຈັນ", "ວັນອັງຄານ", "ວັນພຸດ", "ວັນພະຫັດ", "ວັນສຸກ", "ວັນເສົາ"], core.String);
    },
    get C558() {
      return C558 = dart.constList(["ອາທິດ", "ຈັນ", "ອັງຄານ", "ພຸດ", "ພະຫັດ", "ສຸກ", "ເສົາ"], core.String);
    },
    get C559() {
      return C559 = dart.constList(["ອາ", "ຈ", "ອ", "ພ", "ພຫ", "ສຸ", "ສ"], core.String);
    },
    get C560() {
      return C560 = dart.constList(["ຕມ1", "ຕມ2", "ຕມ3", "ຕມ4"], core.String);
    },
    get C561() {
      return C561 = dart.constList(["ໄຕຣມາດ 1", "ໄຕຣມາດ 2", "ໄຕຣມາດ 3", "ໄຕຣມາດ 4"], core.String);
    },
    get C562() {
      return C562 = dart.constList(["ກ່ອນທ່ຽງ", "ຫຼັງທ່ຽງ"], core.String);
    },
    get C563() {
      return C563 = dart.constList(["EEEE ທີ d MMMM G y", "d MMMM y", "d MMM y", "d/M/y"], core.String);
    },
    get C564() {
      return C564 = dart.constList(["H ໂມງ m ນາທີ ss ວິນາທີ zzzz", "H ໂມງ m ນາທີ ss ວິນາທີ z", "H:mm:ss", "H:mm"], core.String);
    },
    get C565() {
      return C565 = dart.constList(["pr. Kr.", "po Kr."], core.String);
    },
    get C566() {
      return C566 = dart.constList(["prieš Kristų", "po Kristaus"], core.String);
    },
    get C567() {
      return C567 = dart.constList(["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"], core.String);
    },
    get C568() {
      return C568 = dart.constList(["sausio", "vasario", "kovo", "balandžio", "gegužės", "birželio", "liepos", "rugpjūčio", "rugsėjo", "spalio", "lapkričio", "gruodžio"], core.String);
    },
    get C569() {
      return C569 = dart.constList(["sausis", "vasaris", "kovas", "balandis", "gegužė", "birželis", "liepa", "rugpjūtis", "rugsėjis", "spalis", "lapkritis", "gruodis"], core.String);
    },
    get C570() {
      return C570 = dart.constList(["saus.", "vas.", "kov.", "bal.", "geg.", "birž.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."], core.String);
    },
    get C571() {
      return C571 = dart.constList(["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"], core.String);
    },
    get C572() {
      return C572 = dart.constList(["sk", "pr", "an", "tr", "kt", "pn", "št"], core.String);
    },
    get C573() {
      return C573 = dart.constList(["S", "P", "A", "T", "K", "P", "Š"], core.String);
    },
    get C574() {
      return C574 = dart.constList(["I k.", "II k.", "III k.", "IV k."], core.String);
    },
    get C575() {
      return C575 = dart.constList(["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"], core.String);
    },
    get C576() {
      return C576 = dart.constList(["priešpiet", "popiet"], core.String);
    },
    get C577() {
      return C577 = dart.constList(["y 'm'. MMMM d 'd'., EEEE", "y 'm'. MMMM d 'd'.", "y-MM-dd", "y-MM-dd"], core.String);
    },
    get C578() {
      return C578 = dart.constList(["p.m.ē.", "m.ē."], core.String);
    },
    get C579() {
      return C579 = dart.constList(["pirms mūsu ēras", "mūsu ērā"], core.String);
    },
    get C580() {
      return C580 = dart.constList(["janvāris", "februāris", "marts", "aprīlis", "maijs", "jūnijs", "jūlijs", "augusts", "septembris", "oktobris", "novembris", "decembris"], core.String);
    },
    get C581() {
      return C581 = dart.constList(["janv.", "febr.", "marts", "apr.", "maijs", "jūn.", "jūl.", "aug.", "sept.", "okt.", "nov.", "dec."], core.String);
    },
    get C582() {
      return C582 = dart.constList(["svētdiena", "pirmdiena", "otrdiena", "trešdiena", "ceturtdiena", "piektdiena", "sestdiena"], core.String);
    },
    get C583() {
      return C583 = dart.constList(["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"], core.String);
    },
    get C584() {
      return C584 = dart.constList(["svētd.", "pirmd.", "otrd.", "trešd.", "ceturtd.", "piektd.", "sestd."], core.String);
    },
    get C585() {
      return C585 = dart.constList(["Svētd.", "Pirmd.", "Otrd.", "Trešd.", "Ceturtd.", "Piektd.", "Sestd."], core.String);
    },
    get C586() {
      return C586 = dart.constList(["S", "P", "O", "T", "C", "P", "S"], core.String);
    },
    get C587() {
      return C587 = dart.constList(["1. cet.", "2. cet.", "3. cet.", "4. cet."], core.String);
    },
    get C588() {
      return C588 = dart.constList(["1. ceturksnis", "2. ceturksnis", "3. ceturksnis", "4. ceturksnis"], core.String);
    },
    get C589() {
      return C589 = dart.constList(["priekšpusdienā", "pēcpusdienā"], core.String);
    },
    get C590() {
      return C590 = dart.constList(["EEEE, y. 'gada' d. MMMM", "y. 'gada' d. MMMM", "y. 'gada' d. MMM", "dd.MM.yy"], core.String);
    },
    get C591() {
      return C591 = dart.constList(["пр.н.е.", "н.е."], core.String);
    },
    get C592() {
      return C592 = dart.constList(["пред нашата ера", "од нашата ера"], core.String);
    },
    get C593() {
      return C593 = dart.constList(["ј", "ф", "м", "а", "м", "ј", "ј", "а", "с", "о", "н", "д"], core.String);
    },
    get C594() {
      return C594 = dart.constList(["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"], core.String);
    },
    get C595() {
      return C595 = dart.constList(["јан.", "фев.", "мар.", "апр.", "мај", "јун.", "јул.", "авг.", "септ.", "окт.", "ноем.", "дек."], core.String);
    },
    get C596() {
      return C596 = dart.constList(["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"], core.String);
    },
    get C597() {
      return C597 = dart.constList(["нед.", "пон.", "вт.", "сре.", "чет.", "пет.", "саб."], core.String);
    },
    get C598() {
      return C598 = dart.constList(["нед.", "пон.", "вто.", "сре.", "чет.", "пет.", "саб."], core.String);
    },
    get C599() {
      return C599 = dart.constList(["јан-мар", "апр-јун", "јул-сеп", "окт-дек"], core.String);
    },
    get C600() {
      return C600 = dart.constList(["прво тромесечје", "второ тромесечје", "трето тромесечје", "четврто тромесечје"], core.String);
    },
    get C601() {
      return C601 = dart.constList(["претпладне", "попладне"], core.String);
    },
    get C602() {
      return C602 = dart.constList(["EEEE, dd MMMM y", "dd MMMM y", "dd.M.y", "dd.M.yy"], core.String);
    },
    get C603() {
      return C603 = dart.constList(["ക്രി.മു.", "എഡി"], core.String);
    },
    get C604() {
      return C604 = dart.constList(["ക്രിസ്‌തുവിന് മുമ്പ്", "ആന്നോ ഡൊമിനി"], core.String);
    },
    get C605() {
      return C605 = dart.constList(["ജ", "ഫെ", "മാ", "ഏ", "മെ", "ജൂൺ", "ജൂ", "ഓ", "സെ", "ഒ", "ന", "ഡി"], core.String);
    },
    get C606() {
      return C606 = dart.constList(["ജനുവരി", "ഫെബ്രുവരി", "മാർച്ച്", "ഏപ്രിൽ", "മേയ്", "ജൂൺ", "ജൂലൈ", "ഓഗസ്റ്റ്", "സെപ്റ്റംബർ", "ഒക്‌ടോബർ", "നവംബർ", "ഡിസംബർ"], core.String);
    },
    get C607() {
      return C607 = dart.constList(["ജനു", "ഫെബ്രു", "മാർ", "ഏപ്രി", "മേയ്", "ജൂൺ", "ജൂലൈ", "ഓഗ", "സെപ്റ്റം", "ഒക്ടോ", "നവം", "ഡിസം"], core.String);
    },
    get C608() {
      return C608 = dart.constList(["ഞായറാഴ്‌ച", "തിങ്കളാഴ്‌ച", "ചൊവ്വാഴ്ച", "ബുധനാഴ്‌ച", "വ്യാഴാഴ്‌ച", "വെള്ളിയാഴ്‌ച", "ശനിയാഴ്‌ച"], core.String);
    },
    get C609() {
      return C609 = dart.constList(["ഞായറാഴ്‌ച", "തിങ്കളാഴ്‌ച", "ചൊവ്വാഴ്‌ച", "ബുധനാഴ്‌ച", "വ്യാഴാഴ്‌ച", "വെള്ളിയാഴ്‌ച", "ശനിയാഴ്‌ച"], core.String);
    },
    get C610() {
      return C610 = dart.constList(["ഞായർ", "തിങ്കൾ", "ചൊവ്വ", "ബുധൻ", "വ്യാഴം", "വെള്ളി", "ശനി"], core.String);
    },
    get C611() {
      return C611 = dart.constList(["ഞ", "തി", "ചൊ", "ബു", "വ്യാ", "വെ", "ശ"], core.String);
    },
    get C612() {
      return C612 = dart.constList(["ഞാ", "തി", "ചൊ", "ബു", "വ്യാ", "വെ", "ശ"], core.String);
    },
    get C613() {
      return C613 = dart.constList(["ഒന്നാം പാദം", "രണ്ടാം പാദം", "മൂന്നാം പാദം", "നാലാം പാദം"], core.String);
    },
    get C614() {
      return C614 = dart.constList(["y, MMMM d, EEEE", "y, MMMM d", "y, MMM d", "d/M/yy"], core.String);
    },
    get C615() {
      return C615 = dart.constList(["МЭӨ", "МЭ"], core.String);
    },
    get C616() {
      return C616 = dart.constList(["манай эриний өмнөх", "манай эриний"], core.String);
    },
    get C617() {
      return C617 = dart.constList(["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"], core.String);
    },
    get C618() {
      return C618 = dart.constList(["нэгдүгээр сар", "хоёрдугаар сар", "гуравдугаар сар", "дөрөвдүгээр сар", "тавдугаар сар", "зургаадугаар сар", "долоодугаар сар", "наймдугаар сар", "есдүгээр сар", "аравдугаар сар", "арван нэгдүгээр сар", "арван хоёрдугаар сар"], core.String);
    },
    get C619() {
      return C619 = dart.constList(["Нэгдүгээр сар", "Хоёрдугаар сар", "Гуравдугаар сар", "Дөрөвдүгээр сар", "Тавдугаар сар", "Зургаадугаар сар", "Долоодугаар сар", "Наймдугаар сар", "Есдүгээр сар", "Аравдугаар сар", "Арван нэгдүгээр сар", "Арван хоёрдугаар сар"], core.String);
    },
    get C620() {
      return C620 = dart.constList(["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"], core.String);
    },
    get C621() {
      return C621 = dart.constList(["ням", "даваа", "мягмар", "лхагва", "пүрэв", "баасан", "бямба"], core.String);
    },
    get C622() {
      return C622 = dart.constList(["Ням", "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба"], core.String);
    },
    get C623() {
      return C623 = dart.constList(["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"], core.String);
    },
    get C624() {
      return C624 = dart.constList(["I улирал", "II улирал", "III улирал", "IV улирал"], core.String);
    },
    get C625() {
      return C625 = dart.constList(["1-р улирал", "2-р улирал", "3-р улирал", "4-р улирал"], core.String);
    },
    get C626() {
      return C626 = dart.constList(["ү.ө.", "ү.х."], core.String);
    },
    get C627() {
      return C627 = dart.constList(["y.MM.dd, EEEE", "y.MM.dd", "y 'оны' MMM'ын' d", "y.MM.dd"], core.String);
    },
    get C628() {
      return C628 = dart.constList(["इ. स. पू.", "इ. स."], core.String);
    },
    get C629() {
      return C629 = dart.constList(["ईसवीसनपूर्व", "ईसवीसन"], core.String);
    },
    get C630() {
      return C630 = dart.constList(["जा", "फे", "मा", "ए", "मे", "जू", "जु", "ऑ", "स", "ऑ", "नो", "डि"], core.String);
    },
    get C631() {
      return C631 = dart.constList(["जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर"], core.String);
    },
    get C632() {
      return C632 = dart.constList(["जाने", "फेब्रु", "मार्च", "एप्रि", "मे", "जून", "जुलै", "ऑग", "सप्टें", "ऑक्टो", "नोव्हें", "डिसें"], core.String);
    },
    get C633() {
      return C633 = dart.constList(["रविवार", "सोमवार", "मंगळवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"], core.String);
    },
    get C634() {
      return C634 = dart.constList(["रवि", "सोम", "मंगळ", "बुध", "गुरु", "शुक्र", "शनि"], core.String);
    },
    get C635() {
      return C635 = dart.constList(["ति१", "ति२", "ति३", "ति४"], core.String);
    },
    get C636() {
      return C636 = dart.constList(["प्रथम तिमाही", "द्वितीय तिमाही", "तृतीय तिमाही", "चतुर्थ तिमाही"], core.String);
    },
    get C637() {
      return C637 = dart.constList(["म.पू.", "म.उ."], core.String);
    },
    get C638() {
      return C638 = dart.constList(["{1} रोजी {0}", "{1} रोजी {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C639() {
      return C639 = dart.constList(["S.M.", "TM"], core.String);
    },
    get C640() {
      return C640 = dart.constList(["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"], core.String);
    },
    get C641() {
      return C641 = dart.constList(["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"], core.String);
    },
    get C642() {
      return C642 = dart.constList(["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"], core.String);
    },
    get C643() {
      return C643 = dart.constList(["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"], core.String);
    },
    get C644() {
      return C644 = dart.constList(["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"], core.String);
    },
    get C645() {
      return C645 = dart.constList(["A", "I", "S", "R", "K", "J", "S"], core.String);
    },
    get C646() {
      return C646 = dart.constList(["S1", "S2", "S3", "S4"], core.String);
    },
    get C647() {
      return C647 = dart.constList(["Suku pertama", "Suku Ke-2", "Suku Ke-3", "Suku Ke-4"], core.String);
    },
    get C648() {
      return C648 = dart.constList(["PG", "PTG"], core.String);
    },
    get C649() {
      return C649 = dart.constList(["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d/MM/yy"], core.String);
    },
    get C650() {
      return C650 = dart.constList(["QK", "WK"], core.String);
    },
    get C651() {
      return C651 = dart.constList(["Qabel Kristu", "Wara Kristu"], core.String);
    },
    get C652() {
      return C652 = dart.constList(["J", "F", "M", "A", "M", "Ġ", "L", "A", "S", "O", "N", "D"], core.String);
    },
    get C653() {
      return C653 = dart.constList(["Jn", "Fr", "Mz", "Ap", "Mj", "Ġn", "Lj", "Aw", "St", "Ob", "Nv", "Dċ"], core.String);
    },
    get C654() {
      return C654 = dart.constList(["Jannar", "Frar", "Marzu", "April", "Mejju", "Ġunju", "Lulju", "Awwissu", "Settembru", "Ottubru", "Novembru", "Diċembru"], core.String);
    },
    get C655() {
      return C655 = dart.constList(["Jan", "Fra", "Mar", "Apr", "Mej", "Ġun", "Lul", "Aww", "Set", "Ott", "Nov", "Diċ"], core.String);
    },
    get C656() {
      return C656 = dart.constList(["Il-Ħadd", "It-Tnejn", "It-Tlieta", "L-Erbgħa", "Il-Ħamis", "Il-Ġimgħa", "Is-Sibt"], core.String);
    },
    get C657() {
      return C657 = dart.constList(["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"], core.String);
    },
    get C658() {
      return C658 = dart.constList(["Ħd", "T", "Tl", "Er", "Ħm", "Ġm", "Sb"], core.String);
    },
    get C659() {
      return C659 = dart.constList(["Ħd", "Tn", "Tl", "Er", "Ħm", "Ġm", "Sb"], core.String);
    },
    get C660() {
      return C660 = dart.constList(["1el kwart", "2ni kwart", "3et kwart", "4ba’ kwart"], core.String);
    },
    get C661() {
      return C661 = dart.constList(["EEEE, d 'ta'’ MMMM y", "d 'ta'’ MMMM y", "dd MMM y", "dd/MM/y"], core.String);
    },
    get C662() {
      return C662 = dart.constList(["ဘီစီ", "အဒေီ"], core.String);
    },
    get C663() {
      return C663 = dart.constList(["ခရစ်တော် မပေါ်မီနှစ်", "ခရစ်နှစ်"], core.String);
    },
    get C664() {
      return C664 = dart.constList(["ဇ", "ဖ", "မ", "ဧ", "မ", "ဇ", "ဇ", "ဩ", "စ", "အ", "န", "ဒ"], core.String);
    },
    get C665() {
      return C665 = dart.constList(["ဇန်နဝါရီ", "ဖေဖော်ဝါရီ", "မတ်", "ဧပြီ", "မေ", "ဇွန်", "ဇူလိုင်", "ဩဂုတ်", "စက်တင်ဘာ", "အောက်တိုဘာ", "နိုဝင်ဘာ", "ဒီဇင်ဘာ"], core.String);
    },
    get C666() {
      return C666 = dart.constList(["ဇန်", "ဖေ", "မတ်", "ဧ", "မေ", "ဇွန်", "ဇူ", "ဩ", "စက်", "အောက်", "နို", "ဒီ"], core.String);
    },
    get C667() {
      return C667 = dart.constList(["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"], core.String);
    },
    get C668() {
      return C668 = dart.constList(["တ", "တ", "အ", "ဗ", "က", "သ", "စ"], core.String);
    },
    get C669() {
      return C669 = dart.constList(["ပထမ သုံးလပတ်", "ဒုတိယ သုံးလပတ်", "တတိယ သုံးလပတ်", "စတုတ္ထ သုံးလပတ်"], core.String);
    },
    get C670() {
      return C670 = dart.constList(["နံနက်", "ညနေ"], core.String);
    },
    get C671() {
      return C671 = dart.constList(["y၊ MMMM d၊ EEEE", "y၊ d MMMM", "y၊ MMM d", "dd-MM-yy"], core.String);
    },
    get C672() {
      return C672 = dart.constList(["zzzz HH:mm:ss", "z HH:mm:ss", "B HH:mm:ss", "B H:mm"], core.String);
    },
    get C673() {
      return C673 = dart.constList(["før Kristus", "etter Kristus"], core.String);
    },
    get C674() {
      return C674 = dart.constList(["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"], core.String);
    },
    get C675() {
      return C675 = dart.constList(["jan.", "feb.", "mar.", "apr.", "mai", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "des."], core.String);
    },
    get C676() {
      return C676 = dart.constList(["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"], core.String);
    },
    get C677() {
      return C677 = dart.constList(["EEEE d. MMMM y", "d. MMMM y", "d. MMM y", "dd.MM.y"], core.String);
    },
    get C678() {
      return C678 = dart.constList(["{1} {0}", "{1} 'kl'. {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C679() {
      return C679 = dart.constList(["ईसा पूर्व", "सन्"], core.String);
    },
    get C680() {
      return C680 = dart.constList(["जन", "फेब", "मार्च", "अप्र", "मे", "जुन", "जुल", "अग", "सेप", "अक्टो", "नोभे", "डिसे"], core.String);
    },
    get C681() {
      return C681 = dart.constList(["जन", "फेेब", "मार्च", "अप्र", "मे", "जुन", "जुल", "अग", "सेप", "अक्टो", "नोभे", "डिसे"], core.String);
    },
    get C682() {
      return C682 = dart.constList(["जनवरी", "फेब्रुअरी", "मार्च", "अप्रिल", "मे", "जुन", "जुलाई", "अगस्ट", "सेप्टेम्बर", "अक्टोबर", "नोभेम्बर", "डिसेम्बर"], core.String);
    },
    get C683() {
      return C683 = dart.constList(["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"], core.String);
    },
    get C684() {
      return C684 = dart.constList(["आइत", "सोम", "मङ्गल", "बुध", "बिहि", "शुक्र", "शनि"], core.String);
    },
    get C685() {
      return C685 = dart.constList(["आ", "सो", "म", "बु", "बि", "शु", "श"], core.String);
    },
    get C686() {
      return C686 = dart.constList(["पहिलो सत्र", "दोस्रो सत्र", "तेस्रो सत्र", "चौथो सत्र"], core.String);
    },
    get C687() {
      return C687 = dart.constList(["पूर्वाह्न", "अपराह्न"], core.String);
    },
    get C688() {
      return C688 = dart.constList(["y MMMM d, EEEE", "y MMMM d", "y MMM d", "yy/M/d"], core.String);
    },
    get C689() {
      return C689 = dart.constList(["v.Chr.", "n.Chr."], core.String);
    },
    get C690() {
      return C690 = dart.constList(["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"], core.String);
    },
    get C691() {
      return C691 = dart.constList(["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], core.String);
    },
    get C692() {
      return C692 = dart.constList(["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"], core.String);
    },
    get C693() {
      return C693 = dart.constList(["zo", "ma", "di", "wo", "do", "vr", "za"], core.String);
    },
    get C694() {
      return C694 = dart.constList(["Z", "M", "D", "W", "D", "V", "Z"], core.String);
    },
    get C695() {
      return C695 = dart.constList(["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"], core.String);
    },
    get C696() {
      return C696 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "dd-MM-y"], core.String);
    },
    get C697() {
      return C697 = dart.constList(["{1} 'om' {0}", "{1} 'om' {0}", "{1} {0}", "{1} {0}"], core.String);
    },
    get C698() {
      return C698 = dart.constList(["ଖ୍ରୀଷ୍ଟପୂର୍ବ", "ଖ୍ରୀଷ୍ଟାବ୍ଦ"], core.String);
    },
    get C699() {
      return C699 = dart.constList(["ଜା", "ଫେ", "ମା", "ଅ", "ମଇ", "ଜୁ", "ଜୁ", "ଅ", "ସେ", "ଅ", "ନ", "ଡି"], core.String);
    },
    get C700() {
      return C700 = dart.constList(["ଜାନୁଆରୀ", "ଫେବୃଆରୀ", "ମାର୍ଚ୍ଚ", "ଅପ୍ରେଲ", "ମଇ", "ଜୁନ", "ଜୁଲାଇ", "ଅଗଷ୍ଟ", "ସେପ୍ଟେମ୍ବର", "ଅକ୍ଟୋବର", "ନଭେମ୍ବର", "ଡିସେମ୍ବର"], core.String);
    },
    get C701() {
      return C701 = dart.constList(["ରବିବାର", "ସୋମବାର", "ମଙ୍ଗଳବାର", "ବୁଧବାର", "ଗୁରୁବାର", "ଶୁକ୍ରବାର", "ଶନିବାର"], core.String);
    },
    get C702() {
      return C702 = dart.constList(["ରବି", "ସୋମ", "ମଙ୍ଗଳ", "ବୁଧ", "ଗୁରୁ", "ଶୁକ୍ର", "ଶନି"], core.String);
    },
    get C703() {
      return C703 = dart.constList(["ର", "ସୋ", "ମ", "ବୁ", "ଗୁ", "ଶୁ", "ଶ"], core.String);
    },
    get C704() {
      return C704 = dart.constList(["1ମ ତ୍ରୟମାସ", "2ୟ ତ୍ରୟମାସ", "3ୟ ତ୍ରୟମାସ", "4ର୍ଥ ତ୍ରୟମାସ"], core.String);
    },
    get C705() {
      return C705 = dart.constList(["{0} ଠାରେ {1}", "{0} ଠାରେ {1}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C706() {
      return C706 = dart.constList(["ਈ. ਪੂ.", "ਸੰਨ"], core.String);
    },
    get C707() {
      return C707 = dart.constList(["ਈਸਵੀ ਪੂਰਵ", "ਈਸਵੀ ਸੰਨ"], core.String);
    },
    get C708() {
      return C708 = dart.constList(["ਜ", "ਫ਼", "ਮਾ", "ਅ", "ਮ", "ਜੂ", "ਜੁ", "ਅ", "ਸ", "ਅ", "ਨ", "ਦ"], core.String);
    },
    get C709() {
      return C709 = dart.constList(["ਜਨਵਰੀ", "ਫ਼ਰਵਰੀ", "ਮਾਰਚ", "ਅਪ੍ਰੈਲ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾਈ", "ਅਗਸਤ", "ਸਤੰਬਰ", "ਅਕਤੂਬਰ", "ਨਵੰਬਰ", "ਦਸੰਬਰ"], core.String);
    },
    get C710() {
      return C710 = dart.constList(["ਜਨ", "ਫ਼ਰ", "ਮਾਰਚ", "ਅਪ੍ਰੈ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾ", "ਅਗ", "ਸਤੰ", "ਅਕਤੂ", "ਨਵੰ", "ਦਸੰ"], core.String);
    },
    get C711() {
      return C711 = dart.constList(["ਐਤਵਾਰ", "ਸੋਮਵਾਰ", "ਮੰਗਲਵਾਰ", "ਬੁੱਧਵਾਰ", "ਵੀਰਵਾਰ", "ਸ਼ੁੱਕਰਵਾਰ", "ਸ਼ਨਿੱਚਰਵਾਰ"], core.String);
    },
    get C712() {
      return C712 = dart.constList(["ਐਤ", "ਸੋਮ", "ਮੰਗਲ", "ਬੁੱਧ", "ਵੀਰ", "ਸ਼ੁੱਕਰ", "ਸ਼ਨਿੱਚਰ"], core.String);
    },
    get C713() {
      return C713 = dart.constList(["ਐ", "ਸੋ", "ਮੰ", "ਬੁੱ", "ਵੀ", "ਸ਼ੁੱ", "ਸ਼"], core.String);
    },
    get C714() {
      return C714 = dart.constList(["ਤਿਮਾਹੀ1", "ਤਿਮਾਹੀ2", "ਤਿਮਾਹੀ3", "ਤਿਮਾਹੀ4"], core.String);
    },
    get C715() {
      return C715 = dart.constList(["ਪਹਿਲੀ ਤਿਮਾਹੀ", "ਦੂਜੀ ਤਿਮਾਹੀ", "ਤੀਜੀ ਤਿਮਾਹੀ", "ਚੌਥੀ ਤਿਮਾਹੀ"], core.String);
    },
    get C716() {
      return C716 = dart.constList(["ਪੂ.ਦੁ.", "ਬਾ.ਦੁ."], core.String);
    },
    get C717() {
      return C717 = dart.constList(["p.n.e.", "n.e."], core.String);
    },
    get C718() {
      return C718 = dart.constList(["przed naszą erą", "naszej ery"], core.String);
    },
    get C719() {
      return C719 = dart.constList(["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"], core.String);
    },
    get C720() {
      return C720 = dart.constList(["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"], core.String);
    },
    get C721() {
      return C721 = dart.constList(["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"], core.String);
    },
    get C722() {
      return C722 = dart.constList(["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"], core.String);
    },
    get C723() {
      return C723 = dart.constList(["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"], core.String);
    },
    get C724() {
      return C724 = dart.constList(["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"], core.String);
    },
    get C725() {
      return C725 = dart.constList(["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."], core.String);
    },
    get C726() {
      return C726 = dart.constList(["n", "p", "w", "ś", "c", "p", "s"], core.String);
    },
    get C727() {
      return C727 = dart.constList(["N", "P", "W", "Ś", "C", "P", "S"], core.String);
    },
    get C728() {
      return C728 = dart.constList(["I kw.", "II kw.", "III kw.", "IV kw."], core.String);
    },
    get C729() {
      return C729 = dart.constList(["I kwartał", "II kwartał", "III kwartał", "IV kwartał"], core.String);
    },
    get C730() {
      return C730 = dart.constList(["EEEE, d MMMM y", "d MMMM y", "d MMM y", "dd.MM.y"], core.String);
    },
    get C731() {
      return C731 = dart.constList(["له میلاد وړاندې", "م."], core.String);
    },
    get C732() {
      return C732 = dart.constList(["له میلاد څخه وړاندې", "له میلاد څخه وروسته"], core.String);
    },
    get C733() {
      return C733 = dart.constList(["ج", "ف", "م", "ا", "م", "ج", "ج", "ا", "س", "ا", "ن", "د"], core.String);
    },
    get C734() {
      return C734 = dart.constList(["جنوري", "فبروري", "مارچ", "اپریل", "مۍ", "جون", "جولای", "اگست", "سېپتمبر", "اکتوبر", "نومبر", "دسمبر"], core.String);
    },
    get C735() {
      return C735 = dart.constList(["جنوري", "فېبروري", "مارچ", "اپریل", "مۍ", "جون", "جولای", "اگست", "سپتمبر", "اکتوبر", "نومبر", "دسمبر"], core.String);
    },
    get C736() {
      return C736 = dart.constList(["جنوري", "فبروري", "مارچ", "اپریل", "مۍ", "جون", "جولای", "اگست", "سپتمبر", "اکتوبر", "نومبر", "دسمبر"], core.String);
    },
    get C737() {
      return C737 = dart.constList(["يونۍ", "دونۍ", "درېنۍ", "څلرنۍ", "پينځنۍ", "جمعه", "اونۍ"], core.String);
    },
    get C738() {
      return C738 = dart.constList(["لومړۍ ربعه", "۲مه ربعه", "۳مه ربعه", "۴مه ربعه"], core.String);
    },
    get C739() {
      return C739 = dart.constList(["غ.م.", "غ.و."], core.String);
    },
    get C740() {
      return C740 = dart.constList(["EEEE د y د MMMM d", "د y د MMMM d", "y MMM d", "y/M/d"], core.String);
    },
    get C741() {
      return C741 = dart.constList([3, 4], core.int);
    },
    get C742() {
      return C742 = dart.constList(["antes de Cristo", "depois de Cristo"], core.String);
    },
    get C743() {
      return C743 = dart.constList(["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"], core.String);
    },
    get C744() {
      return C744 = dart.constList(["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"], core.String);
    },
    get C745() {
      return C745 = dart.constList(["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"], core.String);
    },
    get C746() {
      return C746 = dart.constList(["dom", "seg", "ter", "qua", "qui", "sex", "sáb"], core.String);
    },
    get C747() {
      return C747 = dart.constList(["D", "S", "T", "Q", "Q", "S", "S"], core.String);
    },
    get C748() {
      return C748 = dart.constList(["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "d 'de' MMM 'de' y", "dd/MM/y"], core.String);
    },
    get C749() {
      return C749 = dart.constList(["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"], core.String);
    },
    get C750() {
      return C750 = dart.constList(["da manhã", "da tarde"], core.String);
    },
    get C751() {
      return C751 = dart.constList(["EEEE, d 'de' MMMM 'de' y", "d 'de' MMMM 'de' y", "dd/MM/y", "dd/MM/yy"], core.String);
    },
    get C752() {
      return C752 = dart.constList(["{1} 'às' {0}", "{1} 'às' {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C753() {
      return C753 = dart.constList(["î.Hr.", "d.Hr."], core.String);
    },
    get C754() {
      return C754 = dart.constList(["înainte de Hristos", "după Hristos"], core.String);
    },
    get C755() {
      return C755 = dart.constList(["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], core.String);
    },
    get C756() {
      return C756 = dart.constList(["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"], core.String);
    },
    get C757() {
      return C757 = dart.constList(["ian.", "feb.", "mar.", "apr.", "mai", "iun.", "iul.", "aug.", "sept.", "oct.", "nov.", "dec."], core.String);
    },
    get C758() {
      return C758 = dart.constList(["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"], core.String);
    },
    get C759() {
      return C759 = dart.constList(["dum.", "lun.", "mar.", "mie.", "joi", "vin.", "sâm."], core.String);
    },
    get C760() {
      return C760 = dart.constList(["trim. I", "trim. II", "trim. III", "trim. IV"], core.String);
    },
    get C761() {
      return C761 = dart.constList(["trimestrul I", "trimestrul al II-lea", "trimestrul al III-lea", "trimestrul al IV-lea"], core.String);
    },
    get C762() {
      return C762 = dart.constList(["до н. э.", "н. э."], core.String);
    },
    get C763() {
      return C763 = dart.constList(["до Рождества Христова", "от Рождества Христова"], core.String);
    },
    get C764() {
      return C764 = dart.constList(["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"], core.String);
    },
    get C765() {
      return C765 = dart.constList(["янв.", "февр.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."], core.String);
    },
    get C766() {
      return C766 = dart.constList(["янв.", "февр.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."], core.String);
    },
    get C767() {
      return C767 = dart.constList(["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"], core.String);
    },
    get C768() {
      return C768 = dart.constList(["вс", "пн", "вт", "ср", "чт", "пт", "сб"], core.String);
    },
    get C769() {
      return C769 = dart.constList(["В", "П", "В", "С", "Ч", "П", "С"], core.String);
    },
    get C770() {
      return C770 = dart.constList(["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."], core.String);
    },
    get C771() {
      return C771 = dart.constList(["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"], core.String);
    },
    get C772() {
      return C772 = dart.constList(["EEEE, d MMMM y 'г'.", "d MMMM y 'г'.", "d MMM y 'г'.", "dd.MM.y"], core.String);
    },
    get C773() {
      return C773 = dart.constList(["ක්‍රි.පූ.", "ක්‍රි.ව."], core.String);
    },
    get C774() {
      return C774 = dart.constList(["ක්‍රිස්තු පූර්ව", "ක්‍රිස්තු වර්ෂ"], core.String);
    },
    get C775() {
      return C775 = dart.constList(["ජ", "පෙ", "මා", "අ", "මැ", "ජූ", "ජූ", "අ", "සැ", "ඔ", "නෙ", "දෙ"], core.String);
    },
    get C776() {
      return C776 = dart.constList(["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"], core.String);
    },
    get C777() {
      return C777 = dart.constList(["ජන", "පෙබ", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝ", "සැප්", "ඔක්", "නොවැ", "දෙසැ"], core.String);
    },
    get C778() {
      return C778 = dart.constList(["ජන", "පෙබ", "මාර්", "අප්‍රේල්", "මැයි", "ජූනි", "ජූලි", "අගෝ", "සැප්", "ඔක්", "නොවැ", "දෙසැ"], core.String);
    },
    get C779() {
      return C779 = dart.constList(["ඉරිදා", "සඳුදා", "අඟහරුවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා"], core.String);
    },
    get C780() {
      return C780 = dart.constList(["ඉරිදා", "සඳුදා", "අඟහ", "බදාදා", "බ්‍රහස්", "සිකු", "සෙන"], core.String);
    },
    get C781() {
      return C781 = dart.constList(["ඉ", "ස", "අ", "බ", "බ්‍ර", "සි", "සෙ"], core.String);
    },
    get C782() {
      return C782 = dart.constList(["කාර්:1", "කාර්:2", "කාර්:3", "කාර්:4"], core.String);
    },
    get C783() {
      return C783 = dart.constList(["1 වන කාර්තුව", "2 වන කාර්තුව", "3 වන කාර්තුව", "4 වන කාර්තුව"], core.String);
    },
    get C784() {
      return C784 = dart.constList(["පෙ.ව.", "ප.ව."], core.String);
    },
    get C785() {
      return C785 = dart.constList(["y MMMM d, EEEE", "y MMMM d", "y MMM d", "y-MM-dd"], core.String);
    },
    get C786() {
      return C786 = dart.constList(["pred Kr.", "po Kr."], core.String);
    },
    get C787() {
      return C787 = dart.constList(["pred Kristom", "po Kristovi"], core.String);
    },
    get C788() {
      return C788 = dart.constList(["januára", "februára", "marca", "apríla", "mája", "júna", "júla", "augusta", "septembra", "októbra", "novembra", "decembra"], core.String);
    },
    get C789() {
      return C789 = dart.constList(["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"], core.String);
    },
    get C790() {
      return C790 = dart.constList(["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"], core.String);
    },
    get C791() {
      return C791 = dart.constList(["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"], core.String);
    },
    get C792() {
      return C792 = dart.constList(["ne", "po", "ut", "st", "št", "pi", "so"], core.String);
    },
    get C793() {
      return C793 = dart.constList(["n", "p", "u", "s", "š", "p", "s"], core.String);
    },
    get C794() {
      return C794 = dart.constList(["1. štvrťrok", "2. štvrťrok", "3. štvrťrok", "4. štvrťrok"], core.String);
    },
    get C795() {
      return C795 = dart.constList(["EEEE d. MMMM y", "d. MMMM y", "d. M. y", "d. M. y"], core.String);
    },
    get C796() {
      return C796 = dart.constList(["{1}, {0}", "{1}, {0}", "{1}, {0}", "{1} {0}"], core.String);
    },
    get C797() {
      return C797 = dart.constList(["pred Kristusom", "po Kristusu"], core.String);
    },
    get C798() {
      return C798 = dart.constList(["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"], core.String);
    },
    get C799() {
      return C799 = dart.constList(["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "avg.", "sep.", "okt.", "nov.", "dec."], core.String);
    },
    get C800() {
      return C800 = dart.constList(["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"], core.String);
    },
    get C801() {
      return C801 = dart.constList(["ned.", "pon.", "tor.", "sre.", "čet.", "pet.", "sob."], core.String);
    },
    get C802() {
      return C802 = dart.constList(["n", "p", "t", "s", "č", "p", "s"], core.String);
    },
    get C803() {
      return C803 = dart.constList(["1. čet.", "2. čet.", "3. čet.", "4. čet."], core.String);
    },
    get C804() {
      return C804 = dart.constList(["1. četrtletje", "2. četrtletje", "3. četrtletje", "4. četrtletje"], core.String);
    },
    get C805() {
      return C805 = dart.constList(["dop.", "pop."], core.String);
    },
    get C806() {
      return C806 = dart.constList(["EEEE, dd. MMMM y", "dd. MMMM y", "d. MMM y", "d. MM. yy"], core.String);
    },
    get C807() {
      return C807 = dart.constList(["p.K.", "mb.K."], core.String);
    },
    get C808() {
      return C808 = dart.constList(["para Krishtit", "mbas Krishtit"], core.String);
    },
    get C809() {
      return C809 = dart.constList(["j", "sh", "m", "p", "m", "q", "k", "g", "sh", "t", "n", "dh"], core.String);
    },
    get C810() {
      return C810 = dart.constList(["janar", "shkurt", "mars", "prill", "maj", "qershor", "korrik", "gusht", "shtator", "tetor", "nëntor", "dhjetor"], core.String);
    },
    get C811() {
      return C811 = dart.constList(["jan", "shk", "mar", "pri", "maj", "qer", "korr", "gush", "sht", "tet", "nën", "dhj"], core.String);
    },
    get C812() {
      return C812 = dart.constList(["e diel", "e hënë", "e martë", "e mërkurë", "e enjte", "e premte", "e shtunë"], core.String);
    },
    get C813() {
      return C813 = dart.constList(["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Sht"], core.String);
    },
    get C814() {
      return C814 = dart.constList(["die", "hën", "mar", "mër", "enj", "pre", "sht"], core.String);
    },
    get C815() {
      return C815 = dart.constList(["d", "h", "m", "m", "e", "p", "sh"], core.String);
    },
    get C816() {
      return C816 = dart.constList(["tremujori I", "tremujori II", "tremujori III", "tremujori IV"], core.String);
    },
    get C817() {
      return C817 = dart.constList(["tremujori i parë", "tremujori i dytë", "tremujori i tretë", "tremujori i katërt"], core.String);
    },
    get C818() {
      return C818 = dart.constList(["e paradites", "e pasdites"], core.String);
    },
    get C819() {
      return C819 = dart.constList(["EEEE, d MMMM y", "d MMMM y", "d MMM y", "d.M.yy"], core.String);
    },
    get C820() {
      return C820 = dart.constList(["h:mm:ss a, zzzz", "h:mm:ss a, z", "h:mm:ss a", "h:mm a"], core.String);
    },
    get C821() {
      return C821 = dart.constList(["{1} 'në' {0}", "{1} 'në' {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C822() {
      return C822 = dart.constList(["п. н. е.", "н. е."], core.String);
    },
    get C823() {
      return C823 = dart.constList(["пре нове ере", "нове ере"], core.String);
    },
    get C824() {
      return C824 = dart.constList(["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"], core.String);
    },
    get C825() {
      return C825 = dart.constList(["јан", "феб", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "нов", "дец"], core.String);
    },
    get C826() {
      return C826 = dart.constList(["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"], core.String);
    },
    get C827() {
      return C827 = dart.constList(["нед", "пон", "уто", "сре", "чет", "пет", "суб"], core.String);
    },
    get C828() {
      return C828 = dart.constList(["н", "п", "у", "с", "ч", "п", "с"], core.String);
    },
    get C829() {
      return C829 = dart.constList(["К1", "К2", "К3", "К4"], core.String);
    },
    get C830() {
      return C830 = dart.constList(["први квартал", "други квартал", "трећи квартал", "четврти квартал"], core.String);
    },
    get C831() {
      return C831 = dart.constList(["пре подне", "по подне"], core.String);
    },
    get C832() {
      return C832 = dart.constList(["EEEE, dd. MMMM y.", "dd. MMMM y.", "dd.MM.y.", "d.M.yy."], core.String);
    },
    get C833() {
      return C833 = dart.constList(["pre nove ere", "nove ere"], core.String);
    },
    get C834() {
      return C834 = dart.constList(["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"], core.String);
    },
    get C835() {
      return C835 = dart.constList(["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], core.String);
    },
    get C836() {
      return C836 = dart.constList(["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"], core.String);
    },
    get C837() {
      return C837 = dart.constList(["ned", "pon", "uto", "sre", "čet", "pet", "sub"], core.String);
    },
    get C838() {
      return C838 = dart.constList(["prvi kvartal", "drugi kvartal", "treći kvartal", "četvrti kvartal"], core.String);
    },
    get C839() {
      return C839 = dart.constList(["pre podne", "po podne"], core.String);
    },
    get C840() {
      return C840 = dart.constList(["före Kristus", "efter Kristus"], core.String);
    },
    get C841() {
      return C841 = dart.constList(["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"], core.String);
    },
    get C842() {
      return C842 = dart.constList(["jan.", "feb.", "mars", "apr.", "maj", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."], core.String);
    },
    get C843() {
      return C843 = dart.constList(["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"], core.String);
    },
    get C844() {
      return C844 = dart.constList(["sön", "mån", "tis", "ons", "tors", "fre", "lör"], core.String);
    },
    get C845() {
      return C845 = dart.constList(["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"], core.String);
    },
    get C846() {
      return C846 = dart.constList(["fm", "em"], core.String);
    },
    get C847() {
      return C847 = dart.constList(["EEEE d MMMM y", "d MMMM y", "d MMM y", "y-MM-dd"], core.String);
    },
    get C848() {
      return C848 = dart.constList(["'kl'. HH:mm:ss zzzz", "HH:mm:ss z", "HH:mm:ss", "HH:mm"], core.String);
    },
    get C849() {
      return C849 = dart.constList(["KK", "BK"], core.String);
    },
    get C850() {
      return C850 = dart.constList(["Kabla ya Kristo", "Baada ya Kristo"], core.String);
    },
    get C851() {
      return C851 = dart.constList(["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba"], core.String);
    },
    get C852() {
      return C852 = dart.constList(["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ago", "Sep", "Okt", "Nov", "Des"], core.String);
    },
    get C853() {
      return C853 = dart.constList(["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"], core.String);
    },
    get C854() {
      return C854 = dart.constList(["Robo ya 1", "Robo ya 2", "Robo ya 3", "Robo ya 4"], core.String);
    },
    get C855() {
      return C855 = dart.constList(["கி.மு.", "கி.பி."], core.String);
    },
    get C856() {
      return C856 = dart.constList(["கிறிஸ்துவுக்கு முன்", "அன்னோ டோமினி"], core.String);
    },
    get C857() {
      return C857 = dart.constList(["ஜ", "பி", "மா", "ஏ", "மே", "ஜூ", "ஜூ", "ஆ", "செ", "அ", "ந", "டி"], core.String);
    },
    get C858() {
      return C858 = dart.constList(["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"], core.String);
    },
    get C859() {
      return C859 = dart.constList(["ஜன.", "பிப்.", "மார்.", "ஏப்.", "மே", "ஜூன்", "ஜூலை", "ஆக.", "செப்.", "அக்.", "நவ.", "டிச."], core.String);
    },
    get C860() {
      return C860 = dart.constList(["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"], core.String);
    },
    get C861() {
      return C861 = dart.constList(["ஞாயி.", "திங்.", "செவ்.", "புத.", "வியா.", "வெள்.", "சனி"], core.String);
    },
    get C862() {
      return C862 = dart.constList(["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"], core.String);
    },
    get C863() {
      return C863 = dart.constList(["காலா.1", "காலா.2", "காலா.3", "காலா.4"], core.String);
    },
    get C864() {
      return C864 = dart.constList(["ஒன்றாம் காலாண்டு", "இரண்டாம் காலாண்டு", "மூன்றாம் காலாண்டு", "நான்காம் காலாண்டு"], core.String);
    },
    get C865() {
      return C865 = dart.constList(["முற்பகல்", "பிற்பகல்"], core.String);
    },
    get C866() {
      return C866 = dart.constList(["a h:mm:ss zzzz", "a h:mm:ss z", "a h:mm:ss", "a h:mm"], core.String);
    },
    get C867() {
      return C867 = dart.constList(["{1} ’அன்று’ {0}", "{1} ’அன்று’ {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C868() {
      return C868 = dart.constList(["క్రీపూ", "క్రీశ"], core.String);
    },
    get C869() {
      return C869 = dart.constList(["క్రీస్తు పూర్వం", "క్రీస్తు శకం"], core.String);
    },
    get C870() {
      return C870 = dart.constList(["జ", "ఫి", "మా", "ఏ", "మే", "జూ", "జు", "ఆ", "సె", "అ", "న", "డి"], core.String);
    },
    get C871() {
      return C871 = dart.constList(["జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్", "జులై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్"], core.String);
    },
    get C872() {
      return C872 = dart.constList(["జన", "ఫిబ్ర", "మార్చి", "ఏప్రి", "మే", "జూన్", "జులై", "ఆగ", "సెప్టెం", "అక్టో", "నవం", "డిసెం"], core.String);
    },
    get C873() {
      return C873 = dart.constList(["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం"], core.String);
    },
    get C874() {
      return C874 = dart.constList(["ఆది", "సోమ", "మంగళ", "బుధ", "గురు", "శుక్ర", "శని"], core.String);
    },
    get C875() {
      return C875 = dart.constList(["ఆ", "సో", "మ", "బు", "గు", "శు", "శ"], core.String);
    },
    get C876() {
      return C876 = dart.constList(["త్రై1", "త్రై2", "త్రై3", "త్రై4"], core.String);
    },
    get C877() {
      return C877 = dart.constList(["1వ త్రైమాసికం", "2వ త్రైమాసికం", "3వ త్రైమాసికం", "4వ త్రైమాసికం"], core.String);
    },
    get C878() {
      return C878 = dart.constList(["d, MMMM y, EEEE", "d MMMM, y", "d MMM, y", "dd-MM-yy"], core.String);
    },
    get C879() {
      return C879 = dart.constList(["{1} {0}కి", "{1} {0}కి", "{1} {0}", "{1} {0}"], core.String);
    },
    get C880() {
      return C880 = dart.constList(["ก่อน ค.ศ.", "ค.ศ."], core.String);
    },
    get C881() {
      return C881 = dart.constList(["ปีก่อนคริสตกาล", "คริสต์ศักราช"], core.String);
    },
    get C882() {
      return C882 = dart.constList(["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."], core.String);
    },
    get C883() {
      return C883 = dart.constList(["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"], core.String);
    },
    get C884() {
      return C884 = dart.constList(["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"], core.String);
    },
    get C885() {
      return C885 = dart.constList(["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."], core.String);
    },
    get C886() {
      return C886 = dart.constList(["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"], core.String);
    },
    get C887() {
      return C887 = dart.constList(["ไตรมาส 1", "ไตรมาส 2", "ไตรมาส 3", "ไตรมาส 4"], core.String);
    },
    get C888() {
      return C888 = dart.constList(["ก่อนเที่ยง", "หลังเที่ยง"], core.String);
    },
    get C889() {
      return C889 = dart.constList(["EEEEที่ d MMMM G y", "d MMMM G y", "d MMM y", "d/M/yy"], core.String);
    },
    get C890() {
      return C890 = dart.constList(["H นาฬิกา mm นาที ss วินาที zzzz", "H นาฬิกา mm นาที ss วินาที z", "HH:mm:ss", "HH:mm"], core.String);
    },
    get C891() {
      return C891 = dart.constList(["MÖ", "MS"], core.String);
    },
    get C892() {
      return C892 = dart.constList(["Milattan Önce", "Milattan Sonra"], core.String);
    },
    get C893() {
      return C893 = dart.constList(["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"], core.String);
    },
    get C894() {
      return C894 = dart.constList(["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], core.String);
    },
    get C895() {
      return C895 = dart.constList(["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"], core.String);
    },
    get C896() {
      return C896 = dart.constList(["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"], core.String);
    },
    get C897() {
      return C897 = dart.constList(["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"], core.String);
    },
    get C898() {
      return C898 = dart.constList(["P", "P", "S", "Ç", "P", "C", "C"], core.String);
    },
    get C899() {
      return C899 = dart.constList(["Ç1", "Ç2", "Ç3", "Ç4"], core.String);
    },
    get C900() {
      return C900 = dart.constList(["1. çeyrek", "2. çeyrek", "3. çeyrek", "4. çeyrek"], core.String);
    },
    get C901() {
      return C901 = dart.constList(["ÖÖ", "ÖS"], core.String);
    },
    get C902() {
      return C902 = dart.constList(["d MMMM y EEEE", "d MMMM y", "d MMM y", "d.MM.y"], core.String);
    },
    get C903() {
      return C903 = dart.constList(["до н. е.", "н. е."], core.String);
    },
    get C904() {
      return C904 = dart.constList(["до нашої ери", "нашої ери"], core.String);
    },
    get C905() {
      return C905 = dart.constList(["с", "л", "б", "к", "т", "ч", "л", "с", "в", "ж", "л", "г"], core.String);
    },
    get C906() {
      return C906 = dart.constList(["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"], core.String);
    },
    get C907() {
      return C907 = dart.constList(["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"], core.String);
    },
    get C908() {
      return C908 = dart.constList(["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"], core.String);
    },
    get C909() {
      return C909 = dart.constList(["січ.", "лют.", "бер.", "квіт.", "трав.", "черв.", "лип.", "серп.", "вер.", "жовт.", "лист.", "груд."], core.String);
    },
    get C910() {
      return C910 = dart.constList(["січ", "лют", "бер", "кві", "тра", "чер", "лип", "сер", "вер", "жов", "лис", "гру"], core.String);
    },
    get C911() {
      return C911 = dart.constList(["неділя", "понеділок", "вівторок", "середа", "четвер", "пʼятниця", "субота"], core.String);
    },
    get C912() {
      return C912 = dart.constList(["Н", "П", "В", "С", "Ч", "П", "С"], core.String);
    },
    get C913() {
      return C913 = dart.constList(["дп", "пп"], core.String);
    },
    get C914() {
      return C914 = dart.constList(["EEEE, d MMMM y 'р'.", "d MMMM y 'р'.", "d MMM y 'р'.", "dd.MM.yy"], core.String);
    },
    get C915() {
      return C915 = dart.constList(["{1} 'о' {0}", "{1} 'о' {0}", "{1}, {0}", "{1}, {0}"], core.String);
    },
    get C916() {
      return C916 = dart.constList(["قبل مسیح", "عیسوی"], core.String);
    },
    get C917() {
      return C917 = dart.constList(["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"], core.String);
    },
    get C918() {
      return C918 = dart.constList(["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"], core.String);
    },
    get C919() {
      return C919 = dart.constList(["پہلی سہ ماہی", "دوسری سہ ماہی", "تیسری سہ ماہی", "چوتهی سہ ماہی"], core.String);
    },
    get C920() {
      return C920 = dart.constList(["EEEE، d MMMM، y", "d MMMM، y", "d MMM، y", "d/M/yy"], core.String);
    },
    get C921() {
      return C921 = dart.constList(["m.a.", "milodiy"], core.String);
    },
    get C922() {
      return C922 = dart.constList(["miloddan avvalgi", "milodiy"], core.String);
    },
    get C923() {
      return C923 = dart.constList(["Y", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], core.String);
    },
    get C924() {
      return C924 = dart.constList(["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"], core.String);
    },
    get C925() {
      return C925 = dart.constList(["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"], core.String);
    },
    get C926() {
      return C926 = dart.constList(["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avg", "sen", "okt", "noy", "dek"], core.String);
    },
    get C927() {
      return C927 = dart.constList(["Yan", "Fev", "Mar", "Apr", "May", "Iyn", "Iyl", "Avg", "Sen", "Okt", "Noy", "Dek"], core.String);
    },
    get C928() {
      return C928 = dart.constList(["yakshanba", "dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba"], core.String);
    },
    get C929() {
      return C929 = dart.constList(["Yak", "Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"], core.String);
    },
    get C930() {
      return C930 = dart.constList(["Y", "D", "S", "C", "P", "J", "S"], core.String);
    },
    get C931() {
      return C931 = dart.constList(["1-ch", "2-ch", "3-ch", "4-ch"], core.String);
    },
    get C932() {
      return C932 = dart.constList(["1-chorak", "2-chorak", "3-chorak", "4-chorak"], core.String);
    },
    get C933() {
      return C933 = dart.constList(["TO", "TK"], core.String);
    },
    get C934() {
      return C934 = dart.constList(["EEEE, d-MMMM, y", "d-MMMM, y", "d-MMM, y", "dd/MM/yy"], core.String);
    },
    get C935() {
      return C935 = dart.constList(["H:mm:ss (zzzz)", "H:mm:ss (z)", "HH:mm:ss", "HH:mm"], core.String);
    },
    get C936() {
      return C936 = dart.constList(["Trước CN", "sau CN"], core.String);
    },
    get C937() {
      return C937 = dart.constList(["tháng 1", "tháng 2", "tháng 3", "tháng 4", "tháng 5", "tháng 6", "tháng 7", "tháng 8", "tháng 9", "tháng 10", "tháng 11", "tháng 12"], core.String);
    },
    get C938() {
      return C938 = dart.constList(["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"], core.String);
    },
    get C939() {
      return C939 = dart.constList(["thg 1", "thg 2", "thg 3", "thg 4", "thg 5", "thg 6", "thg 7", "thg 8", "thg 9", "thg 10", "thg 11", "thg 12"], core.String);
    },
    get C940() {
      return C940 = dart.constList(["Thg 1", "Thg 2", "Thg 3", "Thg 4", "Thg 5", "Thg 6", "Thg 7", "Thg 8", "Thg 9", "Thg 10", "Thg 11", "Thg 12"], core.String);
    },
    get C941() {
      return C941 = dart.constList(["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"], core.String);
    },
    get C942() {
      return C942 = dart.constList(["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"], core.String);
    },
    get C943() {
      return C943 = dart.constList(["CN", "T2", "T3", "T4", "T5", "T6", "T7"], core.String);
    },
    get C944() {
      return C944 = dart.constList(["Quý 1", "Quý 2", "Quý 3", "Quý 4"], core.String);
    },
    get C945() {
      return C945 = dart.constList(["SA", "CH"], core.String);
    },
    get C946() {
      return C946 = dart.constList(["EEEE, d MMMM, y", "d MMMM, y", "d MMM, y", "dd/MM/y"], core.String);
    },
    get C947() {
      return C947 = dart.constList(["{0} {1}", "{0} {1}", "{0}, {1}", "{0}, {1}"], core.String);
    },
    get C948() {
      return C948 = dart.constList(["公元前", "公元"], core.String);
    },
    get C949() {
      return C949 = dart.constList(["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], core.String);
    },
    get C950() {
      return C950 = dart.constList(["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], core.String);
    },
    get C951() {
      return C951 = dart.constList(["周日", "周一", "周二", "周三", "周四", "周五", "周六"], core.String);
    },
    get C952() {
      return C952 = dart.constList(["日", "一", "二", "三", "四", "五", "六"], core.String);
    },
    get C953() {
      return C953 = dart.constList(["1季度", "2季度", "3季度", "4季度"], core.String);
    },
    get C954() {
      return C954 = dart.constList(["第一季度", "第二季度", "第三季度", "第四季度"], core.String);
    },
    get C955() {
      return C955 = dart.constList(["上午", "下午"], core.String);
    },
    get C956() {
      return C956 = dart.constList(["y年M月d日EEEE", "y年M月d日", "y年M月d日", "y/M/d"], core.String);
    },
    get C957() {
      return C957 = dart.constList(["zzzz ah:mm:ss", "z ah:mm:ss", "ah:mm:ss", "ah:mm"], core.String);
    },
    get C958() {
      return C958 = dart.constList(["週日", "週一", "週二", "週三", "週四", "週五", "週六"], core.String);
    },
    get C959() {
      return C959 = dart.constList(["第1季", "第2季", "第3季", "第4季"], core.String);
    },
    get C960() {
      return C960 = dart.constList(["y年M月d日EEEE", "y年M月d日", "y年M月d日", "d/M/y"], core.String);
    },
    get C961() {
      return C961 = dart.constList(["ah:mm:ss [zzzz]", "ah:mm:ss [z]", "ah:mm:ss", "ah:mm"], core.String);
    },
    get C962() {
      return C962 = dart.constList(["西元前", "西元"], core.String);
    },
    get C963() {
      return C963 = dart.constList(["y年M月d日 EEEE", "y年M月d日", "y年M月d日", "y/M/d"], core.String);
    },
    get C964() {
      return C964 = dart.constList(["J", "F", "M", "E", "M", "J", "J", "A", "S", "O", "N", "D"], core.String);
    },
    get C965() {
      return C965 = dart.constList(["Januwari", "Februwari", "Mashi", "Ephreli", "Meyi", "Juni", "Julayi", "Agasti", "Septhemba", "Okthoba", "Novemba", "Disemba"], core.String);
    },
    get C966() {
      return C966 = dart.constList(["Jan", "Feb", "Mas", "Eph", "Mey", "Jun", "Jul", "Aga", "Sep", "Okt", "Nov", "Dis"], core.String);
    },
    get C967() {
      return C967 = dart.constList(["ISonto", "UMsombuluko", "ULwesibili", "ULwesithathu", "ULwesine", "ULwesihlanu", "UMgqibelo"], core.String);
    },
    get C968() {
      return C968 = dart.constList(["Son", "Mso", "Bil", "Tha", "Sin", "Hla", "Mgq"], core.String);
    },
    get C969() {
      return C969 = dart.constList(["S", "M", "B", "T", "S", "H", "M"], core.String);
    },
    get C970() {
      return C970 = dart.constList(["ikota yesi-1", "ikota yesi-2", "ikota yesi-3", "ikota yesi-4"], core.String);
    }
  });
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C33;
  let C34;
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  let C40;
  let C41;
  let C42;
  let C43;
  let C44;
  let C45;
  let C46;
  let C47;
  let C48;
  let C49;
  let C50;
  let C51;
  let C52;
  let C53;
  let C54;
  let C55;
  let C56;
  let C57;
  let C58;
  let C59;
  let C60;
  let C61;
  let C62;
  let C63;
  let C64;
  let C65;
  let C66;
  let C67;
  let C68;
  let C69;
  let C70;
  let C71;
  let C72;
  let C73;
  let C74;
  let C75;
  let C76;
  let C77;
  let C78;
  let C79;
  let C80;
  let C81;
  let C82;
  let C83;
  let C84;
  let C85;
  let C86;
  let C87;
  let C88;
  let C89;
  let C90;
  let C91;
  let C92;
  let C93;
  let C94;
  let C95;
  let C96;
  let C97;
  let C98;
  let C99;
  let C100;
  let C101;
  let C102;
  let C103;
  let C104;
  let C105;
  let C106;
  let C107;
  let C108;
  let C109;
  let C110;
  let C111;
  let C112;
  let C113;
  let C114;
  let C115;
  let C116;
  let C117;
  let C118;
  let C119;
  let C120;
  let C121;
  let C122;
  let C123;
  let C124;
  let C125;
  let C126;
  let C127;
  let C128;
  let C129;
  let C130;
  let C131;
  let C132;
  let C133;
  let C134;
  let C135;
  let C136;
  let C137;
  let C138;
  let C139;
  let C140;
  let C141;
  let C142;
  let C143;
  let C144;
  let C145;
  let C146;
  let C147;
  let C148;
  let C149;
  let C150;
  let C151;
  let C152;
  let C153;
  let C154;
  let C155;
  let C156;
  let C157;
  let C158;
  let C159;
  let C160;
  let C161;
  let C162;
  let C163;
  let C164;
  let C165;
  let C166;
  let C167;
  let C168;
  let C169;
  let C170;
  let C171;
  let C172;
  let C173;
  let C174;
  let C175;
  let C176;
  let C177;
  let C178;
  let C179;
  let C180;
  let C181;
  let C182;
  let C183;
  let C184;
  let C185;
  let C186;
  let C187;
  let C188;
  let C189;
  let C190;
  let C191;
  let C192;
  let C193;
  let C194;
  let C195;
  let C196;
  let C197;
  let C198;
  let C199;
  let C200;
  let C201;
  let C202;
  let C203;
  let C204;
  let C205;
  let C206;
  let C207;
  let C208;
  let C209;
  let C210;
  let C211;
  let C212;
  let C213;
  let C214;
  let C215;
  let C216;
  let C217;
  let C218;
  let C219;
  let C220;
  let C221;
  let C222;
  let C223;
  let C224;
  let C225;
  let C226;
  let C227;
  let C228;
  let C229;
  let C230;
  let C231;
  let C232;
  let C233;
  let C234;
  let C235;
  let C236;
  let C237;
  let C238;
  let C239;
  let C240;
  let C241;
  let C242;
  let C243;
  let C244;
  let C245;
  let C246;
  let C247;
  let C248;
  let C249;
  let C250;
  let C251;
  let C252;
  let C253;
  let C254;
  let C255;
  let C256;
  let C257;
  let C258;
  let C259;
  let C260;
  let C261;
  let C262;
  let C263;
  let C264;
  let C265;
  let C266;
  let C267;
  let C268;
  let C269;
  let C270;
  let C271;
  let C272;
  let C273;
  let C274;
  let C275;
  let C276;
  let C277;
  let C278;
  let C279;
  let C280;
  let C281;
  let C282;
  let C283;
  let C284;
  let C285;
  let C286;
  let C287;
  let C288;
  let C289;
  let C290;
  let C291;
  let C292;
  let C293;
  let C294;
  let C295;
  let C296;
  let C297;
  let C298;
  let C299;
  let C300;
  let C301;
  let C302;
  let C303;
  let C304;
  let C305;
  let C306;
  let C307;
  let C308;
  let C309;
  let C310;
  let C311;
  let C312;
  let C313;
  let C314;
  let C315;
  let C316;
  let C317;
  let C318;
  let C319;
  let C320;
  let C321;
  let C322;
  let C323;
  let C324;
  let C325;
  let C326;
  let C327;
  let C328;
  let C329;
  let C330;
  let C331;
  let C332;
  let C333;
  let C334;
  let C335;
  let C336;
  let C337;
  let C338;
  let C339;
  let C340;
  let C341;
  let C342;
  let C343;
  let C344;
  let C345;
  let C346;
  let C347;
  let C348;
  let C349;
  let C350;
  let C351;
  let C352;
  let C353;
  let C354;
  let C355;
  let C356;
  let C357;
  let C358;
  let C359;
  let C360;
  let C361;
  let C362;
  let C363;
  let C364;
  let C365;
  let C366;
  let C367;
  let C368;
  let C369;
  let C370;
  let C371;
  let C372;
  let C373;
  let C374;
  let C375;
  let C376;
  let C377;
  let C378;
  let C379;
  let C380;
  let C381;
  let C382;
  let C383;
  let C384;
  let C385;
  let C386;
  let C387;
  let C388;
  let C389;
  let C390;
  let C391;
  let C392;
  let C393;
  let C394;
  let C395;
  let C396;
  let C397;
  let C398;
  let C399;
  let C400;
  let C401;
  let C402;
  let C403;
  let C404;
  let C405;
  let C406;
  let C407;
  let C408;
  let C409;
  let C410;
  let C411;
  let C412;
  let C413;
  let C414;
  let C415;
  let C416;
  let C417;
  let C418;
  let C419;
  let C420;
  let C421;
  let C422;
  let C423;
  let C424;
  let C425;
  let C426;
  let C427;
  let C428;
  let C429;
  let C430;
  let C431;
  let C432;
  let C433;
  let C434;
  let C435;
  let C436;
  let C437;
  let C438;
  let C439;
  let C440;
  let C441;
  let C442;
  let C443;
  let C444;
  let C445;
  let C446;
  let C447;
  let C448;
  let C449;
  let C450;
  let C451;
  let C452;
  let C453;
  let C454;
  let C455;
  let C456;
  let C457;
  let C458;
  let C459;
  let C460;
  let C461;
  let C462;
  let C463;
  let C464;
  let C465;
  let C466;
  let C467;
  let C468;
  let C469;
  let C470;
  let C471;
  let C472;
  let C473;
  let C474;
  let C475;
  let C476;
  let C477;
  let C478;
  let C479;
  let C480;
  let C481;
  let C482;
  let C483;
  let C484;
  let C485;
  let C486;
  let C487;
  let C488;
  let C489;
  let C490;
  let C491;
  let C492;
  let C493;
  let C494;
  let C495;
  let C496;
  let C497;
  let C498;
  let C499;
  let C500;
  let C501;
  let C502;
  let C503;
  let C504;
  let C505;
  let C506;
  let C507;
  let C508;
  let C509;
  let C510;
  let C511;
  let C512;
  let C513;
  let C514;
  let C515;
  let C516;
  let C517;
  let C518;
  let C519;
  let C520;
  let C521;
  let C522;
  let C523;
  let C524;
  let C525;
  let C526;
  let C527;
  let C528;
  let C529;
  let C530;
  let C531;
  let C532;
  let C533;
  let C534;
  let C535;
  let C536;
  let C537;
  let C538;
  let C539;
  let C540;
  let C541;
  let C542;
  let C543;
  let C544;
  let C545;
  let C546;
  let C547;
  let C548;
  let C549;
  let C550;
  let C551;
  let C552;
  let C553;
  let C554;
  let C555;
  let C556;
  let C557;
  let C558;
  let C559;
  let C560;
  let C561;
  let C562;
  let C563;
  let C564;
  let C565;
  let C566;
  let C567;
  let C568;
  let C569;
  let C570;
  let C571;
  let C572;
  let C573;
  let C574;
  let C575;
  let C576;
  let C577;
  let C578;
  let C579;
  let C580;
  let C581;
  let C582;
  let C583;
  let C584;
  let C585;
  let C586;
  let C587;
  let C588;
  let C589;
  let C590;
  let C591;
  let C592;
  let C593;
  let C594;
  let C595;
  let C596;
  let C597;
  let C598;
  let C599;
  let C600;
  let C601;
  let C602;
  let C603;
  let C604;
  let C605;
  let C606;
  let C607;
  let C608;
  let C609;
  let C610;
  let C611;
  let C612;
  let C613;
  let C614;
  let C615;
  let C616;
  let C617;
  let C618;
  let C619;
  let C620;
  let C621;
  let C622;
  let C623;
  let C624;
  let C625;
  let C626;
  let C627;
  let C628;
  let C629;
  let C630;
  let C631;
  let C632;
  let C633;
  let C634;
  let C635;
  let C636;
  let C637;
  let C638;
  let C639;
  let C640;
  let C641;
  let C642;
  let C643;
  let C644;
  let C645;
  let C646;
  let C647;
  let C648;
  let C649;
  let C650;
  let C651;
  let C652;
  let C653;
  let C654;
  let C655;
  let C656;
  let C657;
  let C658;
  let C659;
  let C660;
  let C661;
  let C662;
  let C663;
  let C664;
  let C665;
  let C666;
  let C667;
  let C668;
  let C669;
  let C670;
  let C671;
  let C672;
  let C673;
  let C674;
  let C675;
  let C676;
  let C677;
  let C678;
  let C679;
  let C680;
  let C681;
  let C682;
  let C683;
  let C684;
  let C685;
  let C686;
  let C687;
  let C688;
  let C689;
  let C690;
  let C691;
  let C692;
  let C693;
  let C694;
  let C695;
  let C696;
  let C697;
  let C698;
  let C699;
  let C700;
  let C701;
  let C702;
  let C703;
  let C704;
  let C705;
  let C706;
  let C707;
  let C708;
  let C709;
  let C710;
  let C711;
  let C712;
  let C713;
  let C714;
  let C715;
  let C716;
  let C717;
  let C718;
  let C719;
  let C720;
  let C721;
  let C722;
  let C723;
  let C724;
  let C725;
  let C726;
  let C727;
  let C728;
  let C729;
  let C730;
  let C731;
  let C732;
  let C733;
  let C734;
  let C735;
  let C736;
  let C737;
  let C738;
  let C739;
  let C740;
  let C741;
  let C742;
  let C743;
  let C744;
  let C745;
  let C746;
  let C747;
  let C748;
  let C749;
  let C750;
  let C751;
  let C752;
  let C753;
  let C754;
  let C755;
  let C756;
  let C757;
  let C758;
  let C759;
  let C760;
  let C761;
  let C762;
  let C763;
  let C764;
  let C765;
  let C766;
  let C767;
  let C768;
  let C769;
  let C770;
  let C771;
  let C772;
  let C773;
  let C774;
  let C775;
  let C776;
  let C777;
  let C778;
  let C779;
  let C780;
  let C781;
  let C782;
  let C783;
  let C784;
  let C785;
  let C786;
  let C787;
  let C788;
  let C789;
  let C790;
  let C791;
  let C792;
  let C793;
  let C794;
  let C795;
  let C796;
  let C797;
  let C798;
  let C799;
  let C800;
  let C801;
  let C802;
  let C803;
  let C804;
  let C805;
  let C806;
  let C807;
  let C808;
  let C809;
  let C810;
  let C811;
  let C812;
  let C813;
  let C814;
  let C815;
  let C816;
  let C817;
  let C818;
  let C819;
  let C820;
  let C821;
  let C822;
  let C823;
  let C824;
  let C825;
  let C826;
  let C827;
  let C828;
  let C829;
  let C830;
  let C831;
  let C832;
  let C833;
  let C834;
  let C835;
  let C836;
  let C837;
  let C838;
  let C839;
  let C840;
  let C841;
  let C842;
  let C843;
  let C844;
  let C845;
  let C846;
  let C847;
  let C848;
  let C849;
  let C850;
  let C851;
  let C852;
  let C853;
  let C854;
  let C855;
  let C856;
  let C857;
  let C858;
  let C859;
  let C860;
  let C861;
  let C862;
  let C863;
  let C864;
  let C865;
  let C866;
  let C867;
  let C868;
  let C869;
  let C870;
  let C871;
  let C872;
  let C873;
  let C874;
  let C875;
  let C876;
  let C877;
  let C878;
  let C879;
  let C880;
  let C881;
  let C882;
  let C883;
  let C884;
  let C885;
  let C886;
  let C887;
  let C888;
  let C889;
  let C890;
  let C891;
  let C892;
  let C893;
  let C894;
  let C895;
  let C896;
  let C897;
  let C898;
  let C899;
  let C900;
  let C901;
  let C902;
  let C903;
  let C904;
  let C905;
  let C906;
  let C907;
  let C908;
  let C909;
  let C910;
  let C911;
  let C912;
  let C913;
  let C914;
  let C915;
  let C916;
  let C917;
  let C918;
  let C919;
  let C920;
  let C921;
  let C922;
  let C923;
  let C924;
  let C925;
  let C926;
  let C927;
  let C928;
  let C929;
  let C930;
  let C931;
  let C932;
  let C933;
  let C934;
  let C935;
  let C936;
  let C937;
  let C938;
  let C939;
  let C940;
  let C941;
  let C942;
  let C943;
  let C944;
  let C945;
  let C946;
  let C947;
  let C948;
  let C949;
  let C950;
  let C951;
  let C952;
  let C953;
  let C954;
  let C955;
  let C956;
  let C957;
  let C958;
  let C959;
  let C960;
  let C961;
  let C962;
  let C963;
  let C964;
  let C965;
  let C966;
  let C967;
  let C968;
  let C969;
  let C970;
  date_symbol_data_local.initializeDateFormatting = function initializeDateFormatting(locale = null, ignored = null) {
    date_format_internal.initializeDateSymbols(C0 || CT.C0);
    date_format_internal.initializeDatePatterns(C1 || CT.C1);
    return FutureOfvoid().value(null);
  };
  date_symbol_data_local.dateTimeSymbolMap = function dateTimeSymbolMap() {
    return new _js_helper.LinkedMap.from(["en_ISO", new date_symbols.DateSymbols.new({NAME: "en_ISO", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C12 || CT.C12, DATEFORMATS: C13 || CT.C13, TIMEFORMATS: C14 || CT.C14, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "af", new date_symbols.DateSymbols.new({NAME: "af", ERAS: C17 || CT.C17, ERANAMES: C18 || CT.C18, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C19 || CT.C19, STANDALONEMONTHS: C19 || CT.C19, SHORTMONTHS: C20 || CT.C20, STANDALONESHORTMONTHS: C20 || CT.C20, WEEKDAYS: C21 || CT.C21, STANDALONEWEEKDAYS: C21 || CT.C21, SHORTWEEKDAYS: C22 || CT.C22, STANDALONESHORTWEEKDAYS: C22 || CT.C22, NARROWWEEKDAYS: C23 || CT.C23, STANDALONENARROWWEEKDAYS: C23 || CT.C23, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C25 || CT.C25, AMPMS: C26 || CT.C26, DATEFORMATS: C27 || CT.C27, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "am", new date_symbols.DateSymbols.new({NAME: "am", ERAS: C30 || CT.C30, ERANAMES: C31 || CT.C31, NARROWMONTHS: C32 || CT.C32, STANDALONENARROWMONTHS: C32 || CT.C32, MONTHS: C33 || CT.C33, STANDALONEMONTHS: C33 || CT.C33, SHORTMONTHS: C34 || CT.C34, STANDALONESHORTMONTHS: C34 || CT.C34, WEEKDAYS: C35 || CT.C35, STANDALONEWEEKDAYS: C35 || CT.C35, SHORTWEEKDAYS: C36 || CT.C36, STANDALONESHORTWEEKDAYS: C36 || CT.C36, NARROWWEEKDAYS: C37 || CT.C37, STANDALONENARROWWEEKDAYS: C37 || CT.C37, SHORTQUARTERS: C38 || CT.C38, QUARTERS: C39 || CT.C39, AMPMS: C40 || CT.C40, DATEFORMATS: C41 || CT.C41, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "ar", new date_symbols.DateSymbols.new({NAME: "ar", ZERODIGIT: "٠", ERAS: C43 || CT.C43, ERANAMES: C44 || CT.C44, NARROWMONTHS: C45 || CT.C45, STANDALONENARROWMONTHS: C45 || CT.C45, MONTHS: C46 || CT.C46, STANDALONEMONTHS: C46 || CT.C46, SHORTMONTHS: C46 || CT.C46, STANDALONESHORTMONTHS: C46 || CT.C46, WEEKDAYS: C47 || CT.C47, STANDALONEWEEKDAYS: C47 || CT.C47, SHORTWEEKDAYS: C47 || CT.C47, STANDALONESHORTWEEKDAYS: C47 || CT.C47, NARROWWEEKDAYS: C48 || CT.C48, STANDALONENARROWWEEKDAYS: C48 || CT.C48, SHORTQUARTERS: C49 || CT.C49, QUARTERS: C49 || CT.C49, AMPMS: C50 || CT.C50, DATEFORMATS: C51 || CT.C51, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 5, WEEKENDRANGE: C52 || CT.C52, FIRSTWEEKCUTOFFDAY: 4}), "ar_DZ", new date_symbols.DateSymbols.new({NAME: "ar_DZ", ERAS: C43 || CT.C43, ERANAMES: C44 || CT.C44, NARROWMONTHS: C53 || CT.C53, STANDALONENARROWMONTHS: C53 || CT.C53, MONTHS: C54 || CT.C54, STANDALONEMONTHS: C54 || CT.C54, SHORTMONTHS: C54 || CT.C54, STANDALONESHORTMONTHS: C54 || CT.C54, WEEKDAYS: C47 || CT.C47, STANDALONEWEEKDAYS: C47 || CT.C47, SHORTWEEKDAYS: C47 || CT.C47, STANDALONESHORTWEEKDAYS: C47 || CT.C47, NARROWWEEKDAYS: C48 || CT.C48, STANDALONENARROWWEEKDAYS: C48 || CT.C48, SHORTQUARTERS: C49 || CT.C49, QUARTERS: C49 || CT.C49, AMPMS: C50 || CT.C50, DATEFORMATS: C51 || CT.C51, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 5, WEEKENDRANGE: C52 || CT.C52, FIRSTWEEKCUTOFFDAY: 4}), "ar_EG", new date_symbols.DateSymbols.new({NAME: "ar_EG", ZERODIGIT: "٠", ERAS: C43 || CT.C43, ERANAMES: C44 || CT.C44, NARROWMONTHS: C45 || CT.C45, STANDALONENARROWMONTHS: C45 || CT.C45, MONTHS: C46 || CT.C46, STANDALONEMONTHS: C46 || CT.C46, SHORTMONTHS: C46 || CT.C46, STANDALONESHORTMONTHS: C46 || CT.C46, WEEKDAYS: C47 || CT.C47, STANDALONEWEEKDAYS: C47 || CT.C47, SHORTWEEKDAYS: C47 || CT.C47, STANDALONESHORTWEEKDAYS: C47 || CT.C47, NARROWWEEKDAYS: C48 || CT.C48, STANDALONENARROWWEEKDAYS: C48 || CT.C48, SHORTQUARTERS: C49 || CT.C49, QUARTERS: C49 || CT.C49, AMPMS: C50 || CT.C50, DATEFORMATS: C51 || CT.C51, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 5, WEEKENDRANGE: C52 || CT.C52, FIRSTWEEKCUTOFFDAY: 4}), "az", new date_symbols.DateSymbols.new({NAME: "az", ERAS: C55 || CT.C55, ERANAMES: C56 || CT.C56, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C58 || CT.C58, STANDALONEMONTHS: C59 || CT.C59, SHORTMONTHS: C60 || CT.C60, STANDALONESHORTMONTHS: C60 || CT.C60, WEEKDAYS: C61 || CT.C61, STANDALONEWEEKDAYS: C61 || CT.C61, SHORTWEEKDAYS: C62 || CT.C62, STANDALONESHORTWEEKDAYS: C62 || CT.C62, NARROWWEEKDAYS: C63 || CT.C63, STANDALONENARROWWEEKDAYS: C63 || CT.C63, SHORTQUARTERS: C64 || CT.C64, QUARTERS: C65 || CT.C65, AMPMS: C12 || CT.C12, DATEFORMATS: C66 || CT.C66, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "be", new date_symbols.DateSymbols.new({NAME: "be", ERAS: C67 || CT.C67, ERANAMES: C68 || CT.C68, NARROWMONTHS: C69 || CT.C69, STANDALONENARROWMONTHS: C69 || CT.C69, MONTHS: C70 || CT.C70, STANDALONEMONTHS: C71 || CT.C71, SHORTMONTHS: C72 || CT.C72, STANDALONESHORTMONTHS: C73 || CT.C73, WEEKDAYS: C74 || CT.C74, STANDALONEWEEKDAYS: C74 || CT.C74, SHORTWEEKDAYS: C75 || CT.C75, STANDALONESHORTWEEKDAYS: C75 || CT.C75, NARROWWEEKDAYS: C76 || CT.C76, STANDALONENARROWWEEKDAYS: C76 || CT.C76, SHORTQUARTERS: C77 || CT.C77, QUARTERS: C78 || CT.C78, AMPMS: C12 || CT.C12, DATEFORMATS: C79 || CT.C79, TIMEFORMATS: C80 || CT.C80, DATETIMEFORMATS: C81 || CT.C81, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "bg", new date_symbols.DateSymbols.new({NAME: "bg", ERAS: C82 || CT.C82, ERANAMES: C83 || CT.C83, NARROWMONTHS: C84 || CT.C84, STANDALONENARROWMONTHS: C84 || CT.C84, MONTHS: C85 || CT.C85, STANDALONEMONTHS: C85 || CT.C85, SHORTMONTHS: C86 || CT.C86, STANDALONESHORTMONTHS: C86 || CT.C86, WEEKDAYS: C87 || CT.C87, STANDALONEWEEKDAYS: C87 || CT.C87, SHORTWEEKDAYS: C88 || CT.C88, STANDALONESHORTWEEKDAYS: C88 || CT.C88, NARROWWEEKDAYS: C89 || CT.C89, STANDALONENARROWWEEKDAYS: C89 || CT.C89, SHORTQUARTERS: C90 || CT.C90, QUARTERS: C91 || CT.C91, AMPMS: C92 || CT.C92, DATEFORMATS: C93 || CT.C93, TIMEFORMATS: C94 || CT.C94, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "bn", new date_symbols.DateSymbols.new({NAME: "bn", ZERODIGIT: "০", ERAS: C96 || CT.C96, ERANAMES: C97 || CT.C97, NARROWMONTHS: C98 || CT.C98, STANDALONENARROWMONTHS: C98 || CT.C98, MONTHS: C99 || CT.C99, STANDALONEMONTHS: C99 || CT.C99, SHORTMONTHS: C100 || CT.C100, STANDALONESHORTMONTHS: C99 || CT.C99, WEEKDAYS: C101 || CT.C101, STANDALONEWEEKDAYS: C101 || CT.C101, SHORTWEEKDAYS: C102 || CT.C102, STANDALONESHORTWEEKDAYS: C102 || CT.C102, NARROWWEEKDAYS: C103 || CT.C103, STANDALONENARROWWEEKDAYS: C103 || CT.C103, SHORTQUARTERS: C104 || CT.C104, QUARTERS: C104 || CT.C104, AMPMS: C12 || CT.C12, DATEFORMATS: C105 || CT.C105, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "br", new date_symbols.DateSymbols.new({NAME: "br", ERAS: C106 || CT.C106, ERANAMES: C107 || CT.C107, NARROWMONTHS: C108 || CT.C108, STANDALONENARROWMONTHS: C108 || CT.C108, MONTHS: C109 || CT.C109, STANDALONEMONTHS: C109 || CT.C109, SHORTMONTHS: C110 || CT.C110, STANDALONESHORTMONTHS: C110 || CT.C110, WEEKDAYS: C111 || CT.C111, STANDALONEWEEKDAYS: C111 || CT.C111, SHORTWEEKDAYS: C112 || CT.C112, STANDALONESHORTWEEKDAYS: C112 || CT.C112, NARROWWEEKDAYS: C113 || CT.C113, STANDALONENARROWWEEKDAYS: C113 || CT.C113, SHORTQUARTERS: C114 || CT.C114, QUARTERS: C115 || CT.C115, AMPMS: C116 || CT.C116, DATEFORMATS: C117 || CT.C117, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C118 || CT.C118, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "bs", new date_symbols.DateSymbols.new({NAME: "bs", ERAS: C119 || CT.C119, ERANAMES: C120 || CT.C120, NARROWMONTHS: C121 || CT.C121, STANDALONENARROWMONTHS: C121 || CT.C121, MONTHS: C122 || CT.C122, STANDALONEMONTHS: C122 || CT.C122, SHORTMONTHS: C123 || CT.C123, STANDALONESHORTMONTHS: C123 || CT.C123, WEEKDAYS: C124 || CT.C124, STANDALONEWEEKDAYS: C124 || CT.C124, SHORTWEEKDAYS: C125 || CT.C125, STANDALONESHORTWEEKDAYS: C125 || CT.C125, NARROWWEEKDAYS: C126 || CT.C126, STANDALONENARROWWEEKDAYS: C127 || CT.C127, SHORTQUARTERS: C128 || CT.C128, QUARTERS: C129 || CT.C129, AMPMS: C130 || CT.C130, DATEFORMATS: C131 || CT.C131, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C132 || CT.C132, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "ca", new date_symbols.DateSymbols.new({NAME: "ca", ERAS: C133 || CT.C133, ERANAMES: C134 || CT.C134, NARROWMONTHS: C135 || CT.C135, STANDALONENARROWMONTHS: C135 || CT.C135, MONTHS: C136 || CT.C136, STANDALONEMONTHS: C137 || CT.C137, SHORTMONTHS: C138 || CT.C138, STANDALONESHORTMONTHS: C139 || CT.C139, WEEKDAYS: C140 || CT.C140, STANDALONEWEEKDAYS: C140 || CT.C140, SHORTWEEKDAYS: C141 || CT.C141, STANDALONESHORTWEEKDAYS: C141 || CT.C141, NARROWWEEKDAYS: C142 || CT.C142, STANDALONENARROWWEEKDAYS: C142 || CT.C142, SHORTQUARTERS: C143 || CT.C143, QUARTERS: C144 || CT.C144, AMPMS: C145 || CT.C145, DATEFORMATS: C146 || CT.C146, TIMEFORMATS: C147 || CT.C147, DATETIMEFORMATS: C148 || CT.C148, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "chr", new date_symbols.DateSymbols.new({NAME: "chr", ERAS: C2 || CT.C2, ERANAMES: C149 || CT.C149, NARROWMONTHS: C150 || CT.C150, STANDALONENARROWMONTHS: C150 || CT.C150, MONTHS: C151 || CT.C151, STANDALONEMONTHS: C151 || CT.C151, SHORTMONTHS: C152 || CT.C152, STANDALONESHORTMONTHS: C152 || CT.C152, WEEKDAYS: C153 || CT.C153, STANDALONEWEEKDAYS: C153 || CT.C153, SHORTWEEKDAYS: C154 || CT.C154, STANDALONESHORTWEEKDAYS: C154 || CT.C154, NARROWWEEKDAYS: C155 || CT.C155, STANDALONENARROWWEEKDAYS: C155 || CT.C155, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C156 || CT.C156, AMPMS: C157 || CT.C157, DATEFORMATS: C158 || CT.C158, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C159 || CT.C159, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "cs", new date_symbols.DateSymbols.new({NAME: "cs", ERAS: C160 || CT.C160, ERANAMES: C161 || CT.C161, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C162 || CT.C162, STANDALONEMONTHS: C163 || CT.C163, SHORTMONTHS: C164 || CT.C164, STANDALONESHORTMONTHS: C164 || CT.C164, WEEKDAYS: C165 || CT.C165, STANDALONEWEEKDAYS: C165 || CT.C165, SHORTWEEKDAYS: C166 || CT.C166, STANDALONESHORTWEEKDAYS: C166 || CT.C166, NARROWWEEKDAYS: C167 || CT.C167, STANDALONENARROWWEEKDAYS: C167 || CT.C167, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C168 || CT.C168, AMPMS: C169 || CT.C169, DATEFORMATS: C170 || CT.C170, TIMEFORMATS: C147 || CT.C147, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "cy", new date_symbols.DateSymbols.new({NAME: "cy", ERAS: C171 || CT.C171, ERANAMES: C172 || CT.C172, NARROWMONTHS: C173 || CT.C173, STANDALONENARROWMONTHS: C173 || CT.C173, MONTHS: C174 || CT.C174, STANDALONEMONTHS: C174 || CT.C174, SHORTMONTHS: C175 || CT.C175, STANDALONESHORTMONTHS: C176 || CT.C176, WEEKDAYS: C177 || CT.C177, STANDALONEWEEKDAYS: C177 || CT.C177, SHORTWEEKDAYS: C178 || CT.C178, STANDALONESHORTWEEKDAYS: C179 || CT.C179, NARROWWEEKDAYS: C180 || CT.C180, STANDALONENARROWWEEKDAYS: C180 || CT.C180, SHORTQUARTERS: C181 || CT.C181, QUARTERS: C182 || CT.C182, AMPMS: C183 || CT.C183, DATEFORMATS: C184 || CT.C184, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C185 || CT.C185, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "da", new date_symbols.DateSymbols.new({NAME: "da", ERAS: C186 || CT.C186, ERANAMES: C186 || CT.C186, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C187 || CT.C187, STANDALONEMONTHS: C187 || CT.C187, SHORTMONTHS: C188 || CT.C188, STANDALONESHORTMONTHS: C188 || CT.C188, WEEKDAYS: C189 || CT.C189, STANDALONEWEEKDAYS: C189 || CT.C189, SHORTWEEKDAYS: C190 || CT.C190, STANDALONESHORTWEEKDAYS: C191 || CT.C191, NARROWWEEKDAYS: C192 || CT.C192, STANDALONENARROWWEEKDAYS: C192 || CT.C192, SHORTQUARTERS: C193 || CT.C193, QUARTERS: C194 || CT.C194, AMPMS: C12 || CT.C12, DATEFORMATS: C195 || CT.C195, TIMEFORMATS: C196 || CT.C196, DATETIMEFORMATS: C197 || CT.C197, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "de", new date_symbols.DateSymbols.new({NAME: "de", ERAS: C198 || CT.C198, ERANAMES: C198 || CT.C198, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C199 || CT.C199, STANDALONEMONTHS: C199 || CT.C199, SHORTMONTHS: C200 || CT.C200, STANDALONESHORTMONTHS: C201 || CT.C201, WEEKDAYS: C202 || CT.C202, STANDALONEWEEKDAYS: C202 || CT.C202, SHORTWEEKDAYS: C203 || CT.C203, STANDALONESHORTWEEKDAYS: C204 || CT.C204, NARROWWEEKDAYS: C205 || CT.C205, STANDALONENARROWWEEKDAYS: C205 || CT.C205, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C206 || CT.C206, AMPMS: C12 || CT.C12, DATEFORMATS: C207 || CT.C207, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C208 || CT.C208, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "de_AT", new date_symbols.DateSymbols.new({NAME: "de_AT", ERAS: C198 || CT.C198, ERANAMES: C198 || CT.C198, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C209 || CT.C209, STANDALONEMONTHS: C209 || CT.C209, SHORTMONTHS: C210 || CT.C210, STANDALONESHORTMONTHS: C211 || CT.C211, WEEKDAYS: C202 || CT.C202, STANDALONEWEEKDAYS: C202 || CT.C202, SHORTWEEKDAYS: C203 || CT.C203, STANDALONESHORTWEEKDAYS: C204 || CT.C204, NARROWWEEKDAYS: C205 || CT.C205, STANDALONENARROWWEEKDAYS: C205 || CT.C205, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C206 || CT.C206, AMPMS: C12 || CT.C12, DATEFORMATS: C207 || CT.C207, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C208 || CT.C208, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "de_CH", new date_symbols.DateSymbols.new({NAME: "de_CH", ERAS: C198 || CT.C198, ERANAMES: C198 || CT.C198, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C199 || CT.C199, STANDALONEMONTHS: C199 || CT.C199, SHORTMONTHS: C200 || CT.C200, STANDALONESHORTMONTHS: C201 || CT.C201, WEEKDAYS: C202 || CT.C202, STANDALONEWEEKDAYS: C202 || CT.C202, SHORTWEEKDAYS: C203 || CT.C203, STANDALONESHORTWEEKDAYS: C204 || CT.C204, NARROWWEEKDAYS: C205 || CT.C205, STANDALONENARROWWEEKDAYS: C205 || CT.C205, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C206 || CT.C206, AMPMS: C12 || CT.C12, DATEFORMATS: C207 || CT.C207, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C208 || CT.C208, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "el", new date_symbols.DateSymbols.new({NAME: "el", ERAS: C212 || CT.C212, ERANAMES: C213 || CT.C213, NARROWMONTHS: C214 || CT.C214, STANDALONENARROWMONTHS: C214 || CT.C214, MONTHS: C215 || CT.C215, STANDALONEMONTHS: C216 || CT.C216, SHORTMONTHS: C217 || CT.C217, STANDALONESHORTMONTHS: C218 || CT.C218, WEEKDAYS: C219 || CT.C219, STANDALONEWEEKDAYS: C219 || CT.C219, SHORTWEEKDAYS: C220 || CT.C220, STANDALONESHORTWEEKDAYS: C220 || CT.C220, NARROWWEEKDAYS: C221 || CT.C221, STANDALONENARROWWEEKDAYS: C221 || CT.C221, SHORTQUARTERS: C222 || CT.C222, QUARTERS: C223 || CT.C223, AMPMS: C224 || CT.C224, DATEFORMATS: C225 || CT.C225, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C226 || CT.C226, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "en", new date_symbols.DateSymbols.new({NAME: "en", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C12 || CT.C12, DATEFORMATS: C158 || CT.C158, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "en_AU", new date_symbols.DateSymbols.new({NAME: "en_AU", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C227 || CT.C227, STANDALONENARROWWEEKDAYS: C227 || CT.C227, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C228 || CT.C228, DATEFORMATS: C225 || CT.C225, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "en_CA", new date_symbols.DateSymbols.new({NAME: "en_CA", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C229 || CT.C229, STANDALONESHORTMONTHS: C229 || CT.C229, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C230 || CT.C230, STANDALONESHORTWEEKDAYS: C230 || CT.C230, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C231 || CT.C231, DATEFORMATS: C232 || CT.C232, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "en_GB", new date_symbols.DateSymbols.new({NAME: "en_GB", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C228 || CT.C228, DATEFORMATS: C233 || CT.C233, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "en_IE", new date_symbols.DateSymbols.new({NAME: "en_IE", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C231 || CT.C231, DATEFORMATS: C117 || CT.C117, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "en_IN", new date_symbols.DateSymbols.new({NAME: "en_IN", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C228 || CT.C228, DATEFORMATS: C234 || CT.C234, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C235 || CT.C235, FIRSTWEEKCUTOFFDAY: 5}), "en_MY", new date_symbols.DateSymbols.new({NAME: "en_MY", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C228 || CT.C228, DATEFORMATS: C233 || CT.C233, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "en_SG", new date_symbols.DateSymbols.new({NAME: "en_SG", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C228 || CT.C228, DATEFORMATS: C225 || CT.C225, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "en_US", new date_symbols.DateSymbols.new({NAME: "en_US", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C12 || CT.C12, DATEFORMATS: C158 || CT.C158, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "en_ZA", new date_symbols.DateSymbols.new({NAME: "en_ZA", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C5 || CT.C5, STANDALONEMONTHS: C5 || CT.C5, SHORTMONTHS: C6 || CT.C6, STANDALONESHORTMONTHS: C6 || CT.C6, WEEKDAYS: C7 || CT.C7, STANDALONEWEEKDAYS: C7 || CT.C7, SHORTWEEKDAYS: C8 || CT.C8, STANDALONESHORTWEEKDAYS: C8 || CT.C8, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C11 || CT.C11, AMPMS: C228 || CT.C228, DATEFORMATS: C236 || CT.C236, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C15 || CT.C15, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "es", new date_symbols.DateSymbols.new({NAME: "es", ERAS: C237 || CT.C237, ERANAMES: C238 || CT.C238, NARROWMONTHS: C239 || CT.C239, STANDALONENARROWMONTHS: C239 || CT.C239, MONTHS: C240 || CT.C240, STANDALONEMONTHS: C240 || CT.C240, SHORTMONTHS: C241 || CT.C241, STANDALONESHORTMONTHS: C241 || CT.C241, WEEKDAYS: C242 || CT.C242, STANDALONEWEEKDAYS: C242 || CT.C242, SHORTWEEKDAYS: C243 || CT.C243, STANDALONESHORTWEEKDAYS: C243 || CT.C243, NARROWWEEKDAYS: C244 || CT.C244, STANDALONENARROWWEEKDAYS: C244 || CT.C244, SHORTQUARTERS: C245 || CT.C245, QUARTERS: C246 || CT.C246, AMPMS: C145 || CT.C145, DATEFORMATS: C247 || CT.C247, TIMEFORMATS: C248 || CT.C248, DATETIMEFORMATS: C249 || CT.C249, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "es_419", new date_symbols.DateSymbols.new({NAME: "es_419", ERAS: C237 || CT.C237, ERANAMES: C238 || CT.C238, NARROWMONTHS: C239 || CT.C239, STANDALONENARROWMONTHS: C239 || CT.C239, MONTHS: C240 || CT.C240, STANDALONEMONTHS: C240 || CT.C240, SHORTMONTHS: C250 || CT.C250, STANDALONESHORTMONTHS: C250 || CT.C250, WEEKDAYS: C242 || CT.C242, STANDALONEWEEKDAYS: C242 || CT.C242, SHORTWEEKDAYS: C243 || CT.C243, STANDALONESHORTWEEKDAYS: C243 || CT.C243, NARROWWEEKDAYS: C251 || CT.C251, STANDALONENARROWWEEKDAYS: C252 || CT.C252, SHORTQUARTERS: C245 || CT.C245, QUARTERS: C253 || CT.C253, AMPMS: C231 || CT.C231, DATEFORMATS: C247 || CT.C247, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C249 || CT.C249, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "es_ES", new date_symbols.DateSymbols.new({NAME: "es_ES", ERAS: C237 || CT.C237, ERANAMES: C238 || CT.C238, NARROWMONTHS: C239 || CT.C239, STANDALONENARROWMONTHS: C239 || CT.C239, MONTHS: C240 || CT.C240, STANDALONEMONTHS: C240 || CT.C240, SHORTMONTHS: C241 || CT.C241, STANDALONESHORTMONTHS: C241 || CT.C241, WEEKDAYS: C242 || CT.C242, STANDALONEWEEKDAYS: C242 || CT.C242, SHORTWEEKDAYS: C243 || CT.C243, STANDALONESHORTWEEKDAYS: C243 || CT.C243, NARROWWEEKDAYS: C244 || CT.C244, STANDALONENARROWWEEKDAYS: C244 || CT.C244, SHORTQUARTERS: C245 || CT.C245, QUARTERS: C246 || CT.C246, AMPMS: C145 || CT.C145, DATEFORMATS: C247 || CT.C247, TIMEFORMATS: C248 || CT.C248, DATETIMEFORMATS: C249 || CT.C249, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "es_MX", new date_symbols.DateSymbols.new({NAME: "es_MX", ERAS: C237 || CT.C237, ERANAMES: C238 || CT.C238, NARROWMONTHS: C239 || CT.C239, STANDALONENARROWMONTHS: C239 || CT.C239, MONTHS: C240 || CT.C240, STANDALONEMONTHS: C240 || CT.C240, SHORTMONTHS: C250 || CT.C250, STANDALONESHORTMONTHS: C250 || CT.C250, WEEKDAYS: C242 || CT.C242, STANDALONEWEEKDAYS: C242 || CT.C242, SHORTWEEKDAYS: C243 || CT.C243, STANDALONESHORTWEEKDAYS: C243 || CT.C243, NARROWWEEKDAYS: C252 || CT.C252, STANDALONENARROWWEEKDAYS: C252 || CT.C252, SHORTQUARTERS: C254 || CT.C254, QUARTERS: C255 || CT.C255, AMPMS: C145 || CT.C145, DATEFORMATS: C256 || CT.C256, TIMEFORMATS: C147 || CT.C147, DATETIMEFORMATS: C249 || CT.C249, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "es_US", new date_symbols.DateSymbols.new({NAME: "es_US", ERAS: C237 || CT.C237, ERANAMES: C238 || CT.C238, NARROWMONTHS: C239 || CT.C239, STANDALONENARROWMONTHS: C239 || CT.C239, MONTHS: C240 || CT.C240, STANDALONEMONTHS: C240 || CT.C240, SHORTMONTHS: C250 || CT.C250, STANDALONESHORTMONTHS: C250 || CT.C250, WEEKDAYS: C242 || CT.C242, STANDALONEWEEKDAYS: C242 || CT.C242, SHORTWEEKDAYS: C243 || CT.C243, STANDALONESHORTWEEKDAYS: C243 || CT.C243, NARROWWEEKDAYS: C252 || CT.C252, STANDALONENARROWWEEKDAYS: C252 || CT.C252, SHORTQUARTERS: C245 || CT.C245, QUARTERS: C246 || CT.C246, AMPMS: C145 || CT.C145, DATEFORMATS: C257 || CT.C257, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C249 || CT.C249, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "et", new date_symbols.DateSymbols.new({NAME: "et", ERAS: C258 || CT.C258, ERANAMES: C259 || CT.C259, NARROWMONTHS: C260 || CT.C260, STANDALONENARROWMONTHS: C260 || CT.C260, MONTHS: C261 || CT.C261, STANDALONEMONTHS: C261 || CT.C261, SHORTMONTHS: C262 || CT.C262, STANDALONESHORTMONTHS: C262 || CT.C262, WEEKDAYS: C263 || CT.C263, STANDALONEWEEKDAYS: C263 || CT.C263, SHORTWEEKDAYS: C264 || CT.C264, STANDALONESHORTWEEKDAYS: C264 || CT.C264, NARROWWEEKDAYS: C264 || CT.C264, STANDALONENARROWWEEKDAYS: C264 || CT.C264, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C194 || CT.C194, AMPMS: C12 || CT.C12, DATEFORMATS: C265 || CT.C265, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "eu", new date_symbols.DateSymbols.new({NAME: "eu", ERAS: C266 || CT.C266, ERANAMES: C267 || CT.C267, NARROWMONTHS: C268 || CT.C268, STANDALONENARROWMONTHS: C268 || CT.C268, MONTHS: C269 || CT.C269, STANDALONEMONTHS: C269 || CT.C269, SHORTMONTHS: C270 || CT.C270, STANDALONESHORTMONTHS: C270 || CT.C270, WEEKDAYS: C271 || CT.C271, STANDALONEWEEKDAYS: C271 || CT.C271, SHORTWEEKDAYS: C272 || CT.C272, STANDALONESHORTWEEKDAYS: C272 || CT.C272, NARROWWEEKDAYS: C273 || CT.C273, STANDALONENARROWWEEKDAYS: C273 || CT.C273, SHORTQUARTERS: C274 || CT.C274, QUARTERS: C275 || CT.C275, AMPMS: C12 || CT.C12, DATEFORMATS: C276 || CT.C276, TIMEFORMATS: C277 || CT.C277, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "fa", new date_symbols.DateSymbols.new({NAME: "fa", ZERODIGIT: "۰", ERAS: C278 || CT.C278, ERANAMES: C279 || CT.C279, NARROWMONTHS: C280 || CT.C280, STANDALONENARROWMONTHS: C280 || CT.C280, MONTHS: C281 || CT.C281, STANDALONEMONTHS: C282 || CT.C282, SHORTMONTHS: C281 || CT.C281, STANDALONESHORTMONTHS: C282 || CT.C282, WEEKDAYS: C283 || CT.C283, STANDALONEWEEKDAYS: C283 || CT.C283, SHORTWEEKDAYS: C283 || CT.C283, STANDALONESHORTWEEKDAYS: C283 || CT.C283, NARROWWEEKDAYS: C284 || CT.C284, STANDALONENARROWWEEKDAYS: C284 || CT.C284, SHORTQUARTERS: C285 || CT.C285, QUARTERS: C286 || CT.C286, AMPMS: C287 || CT.C287, DATEFORMATS: C288 || CT.C288, TIMEFORMATS: C289 || CT.C289, DATETIMEFORMATS: C290 || CT.C290, FIRSTDAYOFWEEK: 5, WEEKENDRANGE: C291 || CT.C291, FIRSTWEEKCUTOFFDAY: 4}), "fi", new date_symbols.DateSymbols.new({NAME: "fi", ERAS: C292 || CT.C292, ERANAMES: C293 || CT.C293, NARROWMONTHS: C294 || CT.C294, STANDALONENARROWMONTHS: C294 || CT.C294, MONTHS: C295 || CT.C295, STANDALONEMONTHS: C296 || CT.C296, SHORTMONTHS: C297 || CT.C297, STANDALONESHORTMONTHS: C298 || CT.C298, WEEKDAYS: C299 || CT.C299, STANDALONEWEEKDAYS: C300 || CT.C300, SHORTWEEKDAYS: C301 || CT.C301, STANDALONESHORTWEEKDAYS: C301 || CT.C301, NARROWWEEKDAYS: C302 || CT.C302, STANDALONENARROWWEEKDAYS: C302 || CT.C302, SHORTQUARTERS: C303 || CT.C303, QUARTERS: C304 || CT.C304, AMPMS: C305 || CT.C305, DATEFORMATS: C306 || CT.C306, TIMEFORMATS: C307 || CT.C307, DATETIMEFORMATS: C308 || CT.C308, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "fil", new date_symbols.DateSymbols.new({NAME: "fil", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C309 || CT.C309, STANDALONENARROWMONTHS: C310 || CT.C310, MONTHS: C311 || CT.C311, STANDALONEMONTHS: C311 || CT.C311, SHORTMONTHS: C309 || CT.C309, STANDALONESHORTMONTHS: C309 || CT.C309, WEEKDAYS: C312 || CT.C312, STANDALONEWEEKDAYS: C312 || CT.C312, SHORTWEEKDAYS: C313 || CT.C313, STANDALONESHORTWEEKDAYS: C313 || CT.C313, NARROWWEEKDAYS: C313 || CT.C313, STANDALONENARROWWEEKDAYS: C313 || CT.C313, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C314 || CT.C314, AMPMS: C12 || CT.C12, DATEFORMATS: C158 || CT.C158, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C315 || CT.C315, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "fr", new date_symbols.DateSymbols.new({NAME: "fr", ERAS: C316 || CT.C316, ERANAMES: C317 || CT.C317, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C318 || CT.C318, STANDALONEMONTHS: C318 || CT.C318, SHORTMONTHS: C319 || CT.C319, STANDALONESHORTMONTHS: C319 || CT.C319, WEEKDAYS: C320 || CT.C320, STANDALONEWEEKDAYS: C320 || CT.C320, SHORTWEEKDAYS: C321 || CT.C321, STANDALONESHORTWEEKDAYS: C321 || CT.C321, NARROWWEEKDAYS: C252 || CT.C252, STANDALONENARROWWEEKDAYS: C252 || CT.C252, SHORTQUARTERS: C245 || CT.C245, QUARTERS: C322 || CT.C322, AMPMS: C12 || CT.C12, DATEFORMATS: C117 || CT.C117, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C323 || CT.C323, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "fr_CA", new date_symbols.DateSymbols.new({NAME: "fr_CA", ERAS: C316 || CT.C316, ERANAMES: C317 || CT.C317, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C318 || CT.C318, STANDALONEMONTHS: C318 || CT.C318, SHORTMONTHS: C324 || CT.C324, STANDALONESHORTMONTHS: C324 || CT.C324, WEEKDAYS: C320 || CT.C320, STANDALONEWEEKDAYS: C320 || CT.C320, SHORTWEEKDAYS: C321 || CT.C321, STANDALONESHORTWEEKDAYS: C321 || CT.C321, NARROWWEEKDAYS: C252 || CT.C252, STANDALONENARROWWEEKDAYS: C252 || CT.C252, SHORTQUARTERS: C245 || CT.C245, QUARTERS: C322 || CT.C322, AMPMS: C231 || CT.C231, DATEFORMATS: C325 || CT.C325, TIMEFORMATS: C326 || CT.C326, DATETIMEFORMATS: C327 || CT.C327, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "fr_CH", new date_symbols.DateSymbols.new({NAME: "fr_CH", ERAS: C316 || CT.C316, ERANAMES: C317 || CT.C317, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C318 || CT.C318, STANDALONEMONTHS: C318 || CT.C318, SHORTMONTHS: C319 || CT.C319, STANDALONESHORTMONTHS: C319 || CT.C319, WEEKDAYS: C320 || CT.C320, STANDALONEWEEKDAYS: C320 || CT.C320, SHORTWEEKDAYS: C321 || CT.C321, STANDALONESHORTWEEKDAYS: C321 || CT.C321, NARROWWEEKDAYS: C252 || CT.C252, STANDALONENARROWWEEKDAYS: C252 || CT.C252, SHORTQUARTERS: C245 || CT.C245, QUARTERS: C322 || CT.C322, AMPMS: C12 || CT.C12, DATEFORMATS: C328 || CT.C328, TIMEFORMATS: C329 || CT.C329, DATETIMEFORMATS: C323 || CT.C323, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "ga", new date_symbols.DateSymbols.new({NAME: "ga", ERAS: C330 || CT.C330, ERANAMES: C331 || CT.C331, NARROWMONTHS: C332 || CT.C332, STANDALONENARROWMONTHS: C332 || CT.C332, MONTHS: C333 || CT.C333, STANDALONEMONTHS: C333 || CT.C333, SHORTMONTHS: C334 || CT.C334, STANDALONESHORTMONTHS: C334 || CT.C334, WEEKDAYS: C335 || CT.C335, STANDALONEWEEKDAYS: C335 || CT.C335, SHORTWEEKDAYS: C336 || CT.C336, STANDALONESHORTWEEKDAYS: C336 || CT.C336, NARROWWEEKDAYS: C337 || CT.C337, STANDALONENARROWWEEKDAYS: C337 || CT.C337, SHORTQUARTERS: C338 || CT.C338, QUARTERS: C339 || CT.C339, AMPMS: C340 || CT.C340, DATEFORMATS: C117 || CT.C117, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "gl", new date_symbols.DateSymbols.new({NAME: "gl", ERAS: C341 || CT.C341, ERANAMES: C342 || CT.C342, NARROWMONTHS: C343 || CT.C343, STANDALONENARROWMONTHS: C344 || CT.C344, MONTHS: C345 || CT.C345, STANDALONEMONTHS: C346 || CT.C346, SHORTMONTHS: C347 || CT.C347, STANDALONESHORTMONTHS: C348 || CT.C348, WEEKDAYS: C349 || CT.C349, STANDALONEWEEKDAYS: C350 || CT.C350, SHORTWEEKDAYS: C351 || CT.C351, STANDALONESHORTWEEKDAYS: C352 || CT.C352, NARROWWEEKDAYS: C353 || CT.C353, STANDALONENARROWWEEKDAYS: C354 || CT.C354, SHORTQUARTERS: C245 || CT.C245, QUARTERS: C253 || CT.C253, AMPMS: C231 || CT.C231, DATEFORMATS: C355 || CT.C355, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C356 || CT.C356, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "gsw", new date_symbols.DateSymbols.new({NAME: "gsw", ERAS: C198 || CT.C198, ERANAMES: C198 || CT.C198, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C357 || CT.C357, STANDALONEMONTHS: C357 || CT.C357, SHORTMONTHS: C201 || CT.C201, STANDALONESHORTMONTHS: C201 || CT.C201, WEEKDAYS: C358 || CT.C358, STANDALONEWEEKDAYS: C358 || CT.C358, SHORTWEEKDAYS: C359 || CT.C359, STANDALONESHORTWEEKDAYS: C359 || CT.C359, NARROWWEEKDAYS: C205 || CT.C205, STANDALONENARROWWEEKDAYS: C205 || CT.C205, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C206 || CT.C206, AMPMS: C360 || CT.C360, DATEFORMATS: C207 || CT.C207, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "gu", new date_symbols.DateSymbols.new({NAME: "gu", ERAS: C361 || CT.C361, ERANAMES: C362 || CT.C362, NARROWMONTHS: C363 || CT.C363, STANDALONENARROWMONTHS: C363 || CT.C363, MONTHS: C364 || CT.C364, STANDALONEMONTHS: C364 || CT.C364, SHORTMONTHS: C365 || CT.C365, STANDALONESHORTMONTHS: C365 || CT.C365, WEEKDAYS: C366 || CT.C366, STANDALONEWEEKDAYS: C366 || CT.C366, SHORTWEEKDAYS: C367 || CT.C367, STANDALONESHORTWEEKDAYS: C367 || CT.C367, NARROWWEEKDAYS: C368 || CT.C368, STANDALONENARROWWEEKDAYS: C368 || CT.C368, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C369 || CT.C369, AMPMS: C12 || CT.C12, DATEFORMATS: C105 || CT.C105, TIMEFORMATS: C370 || CT.C370, DATETIMEFORMATS: C371 || CT.C371, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C235 || CT.C235, FIRSTWEEKCUTOFFDAY: 5}), "haw", new date_symbols.DateSymbols.new({NAME: "haw", ERAS: C372 || CT.C372, ERANAMES: C372 || CT.C372, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C373 || CT.C373, STANDALONEMONTHS: C373 || CT.C373, SHORTMONTHS: C374 || CT.C374, STANDALONESHORTMONTHS: C374 || CT.C374, WEEKDAYS: C375 || CT.C375, STANDALONEWEEKDAYS: C375 || CT.C375, SHORTWEEKDAYS: C376 || CT.C376, STANDALONESHORTWEEKDAYS: C376 || CT.C376, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C10 || CT.C10, AMPMS: C12 || CT.C12, DATEFORMATS: C225 || CT.C225, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "he", new date_symbols.DateSymbols.new({NAME: "he", ERAS: C377 || CT.C377, ERANAMES: C378 || CT.C378, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C379 || CT.C379, STANDALONEMONTHS: C379 || CT.C379, SHORTMONTHS: C380 || CT.C380, STANDALONESHORTMONTHS: C380 || CT.C380, WEEKDAYS: C381 || CT.C381, STANDALONEWEEKDAYS: C381 || CT.C381, SHORTWEEKDAYS: C382 || CT.C382, STANDALONESHORTWEEKDAYS: C382 || CT.C382, NARROWWEEKDAYS: C383 || CT.C383, STANDALONENARROWWEEKDAYS: C383 || CT.C383, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C384 || CT.C384, AMPMS: C385 || CT.C385, DATEFORMATS: C386 || CT.C386, TIMEFORMATS: C147 || CT.C147, DATETIMEFORMATS: C387 || CT.C387, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C52 || CT.C52, FIRSTWEEKCUTOFFDAY: 5}), "hi", new date_symbols.DateSymbols.new({NAME: "hi", ERAS: C388 || CT.C388, ERANAMES: C389 || CT.C389, NARROWMONTHS: C390 || CT.C390, STANDALONENARROWMONTHS: C390 || CT.C390, MONTHS: C391 || CT.C391, STANDALONEMONTHS: C391 || CT.C391, SHORTMONTHS: C392 || CT.C392, STANDALONESHORTMONTHS: C392 || CT.C392, WEEKDAYS: C393 || CT.C393, STANDALONEWEEKDAYS: C393 || CT.C393, SHORTWEEKDAYS: C394 || CT.C394, STANDALONESHORTWEEKDAYS: C394 || CT.C394, NARROWWEEKDAYS: C395 || CT.C395, STANDALONENARROWWEEKDAYS: C395 || CT.C395, SHORTQUARTERS: C396 || CT.C396, QUARTERS: C397 || CT.C397, AMPMS: C228 || CT.C228, DATEFORMATS: C225 || CT.C225, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C398 || CT.C398, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C235 || CT.C235, FIRSTWEEKCUTOFFDAY: 5}), "hr", new date_symbols.DateSymbols.new({NAME: "hr", ERAS: C399 || CT.C399, ERANAMES: C400 || CT.C400, NARROWMONTHS: C401 || CT.C401, STANDALONENARROWMONTHS: C401 || CT.C401, MONTHS: C402 || CT.C402, STANDALONEMONTHS: C403 || CT.C403, SHORTMONTHS: C404 || CT.C404, STANDALONESHORTMONTHS: C404 || CT.C404, WEEKDAYS: C124 || CT.C124, STANDALONEWEEKDAYS: C124 || CT.C124, SHORTWEEKDAYS: C125 || CT.C125, STANDALONESHORTWEEKDAYS: C125 || CT.C125, NARROWWEEKDAYS: C126 || CT.C126, STANDALONENARROWWEEKDAYS: C127 || CT.C127, SHORTQUARTERS: C405 || CT.C405, QUARTERS: C194 || CT.C194, AMPMS: C12 || CT.C12, DATEFORMATS: C406 || CT.C406, TIMEFORMATS: C407 || CT.C407, DATETIMEFORMATS: C132 || CT.C132, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "hu", new date_symbols.DateSymbols.new({NAME: "hu", ERAS: C408 || CT.C408, ERANAMES: C409 || CT.C409, NARROWMONTHS: C410 || CT.C410, STANDALONENARROWMONTHS: C410 || CT.C410, MONTHS: C411 || CT.C411, STANDALONEMONTHS: C411 || CT.C411, SHORTMONTHS: C412 || CT.C412, STANDALONESHORTMONTHS: C412 || CT.C412, WEEKDAYS: C413 || CT.C413, STANDALONEWEEKDAYS: C413 || CT.C413, SHORTWEEKDAYS: C414 || CT.C414, STANDALONESHORTWEEKDAYS: C414 || CT.C414, NARROWWEEKDAYS: C415 || CT.C415, STANDALONENARROWWEEKDAYS: C415 || CT.C415, SHORTQUARTERS: C416 || CT.C416, QUARTERS: C417 || CT.C417, AMPMS: C418 || CT.C418, DATEFORMATS: C419 || CT.C419, TIMEFORMATS: C147 || CT.C147, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "hy", new date_symbols.DateSymbols.new({NAME: "hy", ERAS: C420 || CT.C420, ERANAMES: C421 || CT.C421, NARROWMONTHS: C422 || CT.C422, STANDALONENARROWMONTHS: C422 || CT.C422, MONTHS: C423 || CT.C423, STANDALONEMONTHS: C424 || CT.C424, SHORTMONTHS: C425 || CT.C425, STANDALONESHORTMONTHS: C425 || CT.C425, WEEKDAYS: C426 || CT.C426, STANDALONEWEEKDAYS: C426 || CT.C426, SHORTWEEKDAYS: C427 || CT.C427, STANDALONESHORTWEEKDAYS: C427 || CT.C427, NARROWWEEKDAYS: C428 || CT.C428, STANDALONENARROWWEEKDAYS: C428 || CT.C428, SHORTQUARTERS: C429 || CT.C429, QUARTERS: C430 || CT.C430, AMPMS: C12 || CT.C12, DATEFORMATS: C431 || CT.C431, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "id", new date_symbols.DateSymbols.new({NAME: "id", ERAS: C432 || CT.C432, ERANAMES: C433 || CT.C433, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C434 || CT.C434, STANDALONEMONTHS: C434 || CT.C434, SHORTMONTHS: C435 || CT.C435, STANDALONESHORTMONTHS: C435 || CT.C435, WEEKDAYS: C436 || CT.C436, STANDALONEWEEKDAYS: C436 || CT.C436, SHORTWEEKDAYS: C437 || CT.C437, STANDALONESHORTWEEKDAYS: C437 || CT.C437, NARROWWEEKDAYS: C438 || CT.C438, STANDALONENARROWWEEKDAYS: C438 || CT.C438, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C439 || CT.C439, AMPMS: C12 || CT.C12, DATEFORMATS: C440 || CT.C440, TIMEFORMATS: C196 || CT.C196, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "in", new date_symbols.DateSymbols.new({NAME: "in", ERAS: C432 || CT.C432, ERANAMES: C433 || CT.C433, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C434 || CT.C434, STANDALONEMONTHS: C434 || CT.C434, SHORTMONTHS: C435 || CT.C435, STANDALONESHORTMONTHS: C435 || CT.C435, WEEKDAYS: C436 || CT.C436, STANDALONEWEEKDAYS: C436 || CT.C436, SHORTWEEKDAYS: C437 || CT.C437, STANDALONESHORTWEEKDAYS: C437 || CT.C437, NARROWWEEKDAYS: C438 || CT.C438, STANDALONENARROWWEEKDAYS: C438 || CT.C438, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C439 || CT.C439, AMPMS: C12 || CT.C12, DATEFORMATS: C440 || CT.C440, TIMEFORMATS: C196 || CT.C196, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "is", new date_symbols.DateSymbols.new({NAME: "is", ERAS: C186 || CT.C186, ERANAMES: C441 || CT.C441, NARROWMONTHS: C442 || CT.C442, STANDALONENARROWMONTHS: C442 || CT.C442, MONTHS: C443 || CT.C443, STANDALONEMONTHS: C443 || CT.C443, SHORTMONTHS: C444 || CT.C444, STANDALONESHORTMONTHS: C444 || CT.C444, WEEKDAYS: C445 || CT.C445, STANDALONEWEEKDAYS: C445 || CT.C445, SHORTWEEKDAYS: C446 || CT.C446, STANDALONESHORTWEEKDAYS: C446 || CT.C446, NARROWWEEKDAYS: C447 || CT.C447, STANDALONENARROWWEEKDAYS: C447 || CT.C447, SHORTQUARTERS: C448 || CT.C448, QUARTERS: C449 || CT.C449, AMPMS: C450 || CT.C450, DATEFORMATS: C451 || CT.C451, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C452 || CT.C452, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "it", new date_symbols.DateSymbols.new({NAME: "it", ERAS: C341 || CT.C341, ERANAMES: C453 || CT.C453, NARROWMONTHS: C454 || CT.C454, STANDALONENARROWMONTHS: C454 || CT.C454, MONTHS: C455 || CT.C455, STANDALONEMONTHS: C455 || CT.C455, SHORTMONTHS: C456 || CT.C456, STANDALONESHORTMONTHS: C456 || CT.C456, WEEKDAYS: C457 || CT.C457, STANDALONEWEEKDAYS: C457 || CT.C457, SHORTWEEKDAYS: C458 || CT.C458, STANDALONESHORTWEEKDAYS: C458 || CT.C458, NARROWWEEKDAYS: C459 || CT.C459, STANDALONENARROWWEEKDAYS: C459 || CT.C459, SHORTQUARTERS: C245 || CT.C245, QUARTERS: C460 || CT.C460, AMPMS: C12 || CT.C12, DATEFORMATS: C461 || CT.C461, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C462 || CT.C462, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "it_CH", new date_symbols.DateSymbols.new({NAME: "it_CH", ERAS: C341 || CT.C341, ERANAMES: C453 || CT.C453, NARROWMONTHS: C454 || CT.C454, STANDALONENARROWMONTHS: C454 || CT.C454, MONTHS: C455 || CT.C455, STANDALONEMONTHS: C455 || CT.C455, SHORTMONTHS: C456 || CT.C456, STANDALONESHORTMONTHS: C456 || CT.C456, WEEKDAYS: C457 || CT.C457, STANDALONEWEEKDAYS: C457 || CT.C457, SHORTWEEKDAYS: C458 || CT.C458, STANDALONESHORTWEEKDAYS: C458 || CT.C458, NARROWWEEKDAYS: C459 || CT.C459, STANDALONENARROWWEEKDAYS: C459 || CT.C459, SHORTQUARTERS: C245 || CT.C245, QUARTERS: C460 || CT.C460, AMPMS: C12 || CT.C12, DATEFORMATS: C328 || CT.C328, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C462 || CT.C462, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "iw", new date_symbols.DateSymbols.new({NAME: "iw", ERAS: C377 || CT.C377, ERANAMES: C378 || CT.C378, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C379 || CT.C379, STANDALONEMONTHS: C379 || CT.C379, SHORTMONTHS: C380 || CT.C380, STANDALONESHORTMONTHS: C380 || CT.C380, WEEKDAYS: C381 || CT.C381, STANDALONEWEEKDAYS: C381 || CT.C381, SHORTWEEKDAYS: C382 || CT.C382, STANDALONESHORTWEEKDAYS: C382 || CT.C382, NARROWWEEKDAYS: C383 || CT.C383, STANDALONENARROWWEEKDAYS: C383 || CT.C383, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C384 || CT.C384, AMPMS: C385 || CT.C385, DATEFORMATS: C386 || CT.C386, TIMEFORMATS: C147 || CT.C147, DATETIMEFORMATS: C387 || CT.C387, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C52 || CT.C52, FIRSTWEEKCUTOFFDAY: 5}), "ja", new date_symbols.DateSymbols.new({NAME: "ja", ERAS: C463 || CT.C463, ERANAMES: C463 || CT.C463, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C464 || CT.C464, STANDALONEMONTHS: C464 || CT.C464, SHORTMONTHS: C464 || CT.C464, STANDALONESHORTMONTHS: C464 || CT.C464, WEEKDAYS: C465 || CT.C465, STANDALONEWEEKDAYS: C465 || CT.C465, SHORTWEEKDAYS: C466 || CT.C466, STANDALONESHORTWEEKDAYS: C466 || CT.C466, NARROWWEEKDAYS: C466 || CT.C466, STANDALONENARROWWEEKDAYS: C466 || CT.C466, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C467 || CT.C467, AMPMS: C468 || CT.C468, DATEFORMATS: C469 || CT.C469, TIMEFORMATS: C470 || CT.C470, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "ka", new date_symbols.DateSymbols.new({NAME: "ka", ERAS: C471 || CT.C471, ERANAMES: C472 || CT.C472, NARROWMONTHS: C473 || CT.C473, STANDALONENARROWMONTHS: C473 || CT.C473, MONTHS: C474 || CT.C474, STANDALONEMONTHS: C474 || CT.C474, SHORTMONTHS: C475 || CT.C475, STANDALONESHORTMONTHS: C475 || CT.C475, WEEKDAYS: C476 || CT.C476, STANDALONEWEEKDAYS: C476 || CT.C476, SHORTWEEKDAYS: C477 || CT.C477, STANDALONESHORTWEEKDAYS: C477 || CT.C477, NARROWWEEKDAYS: C478 || CT.C478, STANDALONENARROWWEEKDAYS: C478 || CT.C478, SHORTQUARTERS: C479 || CT.C479, QUARTERS: C480 || CT.C480, AMPMS: C12 || CT.C12, DATEFORMATS: C481 || CT.C481, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "kk", new date_symbols.DateSymbols.new({NAME: "kk", ERAS: C482 || CT.C482, ERANAMES: C483 || CT.C483, NARROWMONTHS: C484 || CT.C484, STANDALONENARROWMONTHS: C484 || CT.C484, MONTHS: C485 || CT.C485, STANDALONEMONTHS: C486 || CT.C486, SHORTMONTHS: C487 || CT.C487, STANDALONESHORTMONTHS: C487 || CT.C487, WEEKDAYS: C488 || CT.C488, STANDALONEWEEKDAYS: C488 || CT.C488, SHORTWEEKDAYS: C489 || CT.C489, STANDALONESHORTWEEKDAYS: C489 || CT.C489, NARROWWEEKDAYS: C490 || CT.C490, STANDALONENARROWWEEKDAYS: C490 || CT.C490, SHORTQUARTERS: C491 || CT.C491, QUARTERS: C492 || CT.C492, AMPMS: C12 || CT.C12, DATEFORMATS: C493 || CT.C493, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "km", new date_symbols.DateSymbols.new({NAME: "km", ERAS: C494 || CT.C494, ERANAMES: C495 || CT.C495, NARROWMONTHS: C496 || CT.C496, STANDALONENARROWMONTHS: C496 || CT.C496, MONTHS: C497 || CT.C497, STANDALONEMONTHS: C497 || CT.C497, SHORTMONTHS: C497 || CT.C497, STANDALONESHORTMONTHS: C497 || CT.C497, WEEKDAYS: C498 || CT.C498, STANDALONEWEEKDAYS: C499 || CT.C499, SHORTWEEKDAYS: C500 || CT.C500, STANDALONESHORTWEEKDAYS: C500 || CT.C500, NARROWWEEKDAYS: C501 || CT.C501, STANDALONENARROWWEEKDAYS: C501 || CT.C501, SHORTQUARTERS: C502 || CT.C502, QUARTERS: C502 || CT.C502, AMPMS: C12 || CT.C12, DATEFORMATS: C503 || CT.C503, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C504 || CT.C504, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "kn", new date_symbols.DateSymbols.new({NAME: "kn", ERAS: C505 || CT.C505, ERANAMES: C506 || CT.C506, NARROWMONTHS: C507 || CT.C507, STANDALONENARROWMONTHS: C507 || CT.C507, MONTHS: C508 || CT.C508, STANDALONEMONTHS: C508 || CT.C508, SHORTMONTHS: C509 || CT.C509, STANDALONESHORTMONTHS: C510 || CT.C510, WEEKDAYS: C511 || CT.C511, STANDALONEWEEKDAYS: C511 || CT.C511, SHORTWEEKDAYS: C512 || CT.C512, STANDALONESHORTWEEKDAYS: C512 || CT.C512, NARROWWEEKDAYS: C513 || CT.C513, STANDALONENARROWWEEKDAYS: C513 || CT.C513, SHORTQUARTERS: C514 || CT.C514, QUARTERS: C515 || CT.C515, AMPMS: C516 || CT.C516, DATEFORMATS: C517 || CT.C517, TIMEFORMATS: C370 || CT.C370, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C235 || CT.C235, FIRSTWEEKCUTOFFDAY: 5}), "ko", new date_symbols.DateSymbols.new({NAME: "ko", ERAS: C2 || CT.C2, ERANAMES: C518 || CT.C518, NARROWMONTHS: C519 || CT.C519, STANDALONENARROWMONTHS: C519 || CT.C519, MONTHS: C519 || CT.C519, STANDALONEMONTHS: C519 || CT.C519, SHORTMONTHS: C519 || CT.C519, STANDALONESHORTMONTHS: C519 || CT.C519, WEEKDAYS: C520 || CT.C520, STANDALONEWEEKDAYS: C520 || CT.C520, SHORTWEEKDAYS: C521 || CT.C521, STANDALONESHORTWEEKDAYS: C521 || CT.C521, NARROWWEEKDAYS: C521 || CT.C521, STANDALONENARROWWEEKDAYS: C521 || CT.C521, SHORTQUARTERS: C522 || CT.C522, QUARTERS: C523 || CT.C523, AMPMS: C524 || CT.C524, DATEFORMATS: C525 || CT.C525, TIMEFORMATS: C526 || CT.C526, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "ky", new date_symbols.DateSymbols.new({NAME: "ky", ERAS: C527 || CT.C527, ERANAMES: C528 || CT.C528, NARROWMONTHS: C529 || CT.C529, STANDALONENARROWMONTHS: C529 || CT.C529, MONTHS: C530 || CT.C530, STANDALONEMONTHS: C531 || CT.C531, SHORTMONTHS: C532 || CT.C532, STANDALONESHORTMONTHS: C533 || CT.C533, WEEKDAYS: C534 || CT.C534, STANDALONEWEEKDAYS: C534 || CT.C534, SHORTWEEKDAYS: C535 || CT.C535, STANDALONESHORTWEEKDAYS: C535 || CT.C535, NARROWWEEKDAYS: C536 || CT.C536, STANDALONENARROWWEEKDAYS: C536 || CT.C536, SHORTQUARTERS: C537 || CT.C537, QUARTERS: C538 || CT.C538, AMPMS: C539 || CT.C539, DATEFORMATS: C540 || CT.C540, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "ln", new date_symbols.DateSymbols.new({NAME: "ln", ERAS: C541 || CT.C541, ERANAMES: C542 || CT.C542, NARROWMONTHS: C543 || CT.C543, STANDALONENARROWMONTHS: C543 || CT.C543, MONTHS: C544 || CT.C544, STANDALONEMONTHS: C544 || CT.C544, SHORTMONTHS: C545 || CT.C545, STANDALONESHORTMONTHS: C545 || CT.C545, WEEKDAYS: C546 || CT.C546, STANDALONEWEEKDAYS: C546 || CT.C546, SHORTWEEKDAYS: C547 || CT.C547, STANDALONESHORTWEEKDAYS: C547 || CT.C547, NARROWWEEKDAYS: C548 || CT.C548, STANDALONENARROWWEEKDAYS: C548 || CT.C548, SHORTQUARTERS: C549 || CT.C549, QUARTERS: C550 || CT.C550, AMPMS: C551 || CT.C551, DATEFORMATS: C552 || CT.C552, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "lo", new date_symbols.DateSymbols.new({NAME: "lo", ERAS: C553 || CT.C553, ERANAMES: C554 || CT.C554, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C555 || CT.C555, STANDALONEMONTHS: C555 || CT.C555, SHORTMONTHS: C556 || CT.C556, STANDALONESHORTMONTHS: C556 || CT.C556, WEEKDAYS: C557 || CT.C557, STANDALONEWEEKDAYS: C557 || CT.C557, SHORTWEEKDAYS: C558 || CT.C558, STANDALONESHORTWEEKDAYS: C558 || CT.C558, NARROWWEEKDAYS: C559 || CT.C559, STANDALONENARROWWEEKDAYS: C559 || CT.C559, SHORTQUARTERS: C560 || CT.C560, QUARTERS: C561 || CT.C561, AMPMS: C562 || CT.C562, DATEFORMATS: C563 || CT.C563, TIMEFORMATS: C564 || CT.C564, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "lt", new date_symbols.DateSymbols.new({NAME: "lt", ERAS: C565 || CT.C565, ERANAMES: C566 || CT.C566, NARROWMONTHS: C567 || CT.C567, STANDALONENARROWMONTHS: C567 || CT.C567, MONTHS: C568 || CT.C568, STANDALONEMONTHS: C569 || CT.C569, SHORTMONTHS: C570 || CT.C570, STANDALONESHORTMONTHS: C570 || CT.C570, WEEKDAYS: C571 || CT.C571, STANDALONEWEEKDAYS: C571 || CT.C571, SHORTWEEKDAYS: C572 || CT.C572, STANDALONESHORTWEEKDAYS: C572 || CT.C572, NARROWWEEKDAYS: C573 || CT.C573, STANDALONENARROWWEEKDAYS: C573 || CT.C573, SHORTQUARTERS: C574 || CT.C574, QUARTERS: C575 || CT.C575, AMPMS: C576 || CT.C576, DATEFORMATS: C577 || CT.C577, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "lv", new date_symbols.DateSymbols.new({NAME: "lv", ERAS: C578 || CT.C578, ERANAMES: C579 || CT.C579, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C580 || CT.C580, STANDALONEMONTHS: C580 || CT.C580, SHORTMONTHS: C581 || CT.C581, STANDALONESHORTMONTHS: C581 || CT.C581, WEEKDAYS: C582 || CT.C582, STANDALONEWEEKDAYS: C583 || CT.C583, SHORTWEEKDAYS: C584 || CT.C584, STANDALONESHORTWEEKDAYS: C585 || CT.C585, NARROWWEEKDAYS: C586 || CT.C586, STANDALONENARROWWEEKDAYS: C586 || CT.C586, SHORTQUARTERS: C587 || CT.C587, QUARTERS: C588 || CT.C588, AMPMS: C589 || CT.C589, DATEFORMATS: C590 || CT.C590, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "mk", new date_symbols.DateSymbols.new({NAME: "mk", ERAS: C591 || CT.C591, ERANAMES: C592 || CT.C592, NARROWMONTHS: C593 || CT.C593, STANDALONENARROWMONTHS: C593 || CT.C593, MONTHS: C594 || CT.C594, STANDALONEMONTHS: C594 || CT.C594, SHORTMONTHS: C595 || CT.C595, STANDALONESHORTMONTHS: C595 || CT.C595, WEEKDAYS: C596 || CT.C596, STANDALONEWEEKDAYS: C596 || CT.C596, SHORTWEEKDAYS: C597 || CT.C597, STANDALONESHORTWEEKDAYS: C598 || CT.C598, NARROWWEEKDAYS: C89 || CT.C89, STANDALONENARROWWEEKDAYS: C89 || CT.C89, SHORTQUARTERS: C599 || CT.C599, QUARTERS: C600 || CT.C600, AMPMS: C601 || CT.C601, DATEFORMATS: C602 || CT.C602, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "ml", new date_symbols.DateSymbols.new({NAME: "ml", ERAS: C603 || CT.C603, ERANAMES: C604 || CT.C604, NARROWMONTHS: C605 || CT.C605, STANDALONENARROWMONTHS: C605 || CT.C605, MONTHS: C606 || CT.C606, STANDALONEMONTHS: C606 || CT.C606, SHORTMONTHS: C607 || CT.C607, STANDALONESHORTMONTHS: C607 || CT.C607, WEEKDAYS: C608 || CT.C608, STANDALONEWEEKDAYS: C609 || CT.C609, SHORTWEEKDAYS: C610 || CT.C610, STANDALONESHORTWEEKDAYS: C610 || CT.C610, NARROWWEEKDAYS: C611 || CT.C611, STANDALONENARROWWEEKDAYS: C612 || CT.C612, SHORTQUARTERS: C613 || CT.C613, QUARTERS: C613 || CT.C613, AMPMS: C12 || CT.C12, DATEFORMATS: C614 || CT.C614, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C235 || CT.C235, FIRSTWEEKCUTOFFDAY: 5}), "mn", new date_symbols.DateSymbols.new({NAME: "mn", ERAS: C615 || CT.C615, ERANAMES: C616 || CT.C616, NARROWMONTHS: C617 || CT.C617, STANDALONENARROWMONTHS: C617 || CT.C617, MONTHS: C618 || CT.C618, STANDALONEMONTHS: C619 || CT.C619, SHORTMONTHS: C620 || CT.C620, STANDALONESHORTMONTHS: C620 || CT.C620, WEEKDAYS: C621 || CT.C621, STANDALONEWEEKDAYS: C622 || CT.C622, SHORTWEEKDAYS: C623 || CT.C623, STANDALONESHORTWEEKDAYS: C623 || CT.C623, NARROWWEEKDAYS: C623 || CT.C623, STANDALONENARROWWEEKDAYS: C623 || CT.C623, SHORTQUARTERS: C624 || CT.C624, QUARTERS: C625 || CT.C625, AMPMS: C626 || CT.C626, DATEFORMATS: C627 || CT.C627, TIMEFORMATS: C277 || CT.C277, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "mr", new date_symbols.DateSymbols.new({NAME: "mr", ZERODIGIT: "०", ERAS: C628 || CT.C628, ERANAMES: C629 || CT.C629, NARROWMONTHS: C630 || CT.C630, STANDALONENARROWMONTHS: C630 || CT.C630, MONTHS: C631 || CT.C631, STANDALONEMONTHS: C631 || CT.C631, SHORTMONTHS: C632 || CT.C632, STANDALONESHORTMONTHS: C632 || CT.C632, WEEKDAYS: C633 || CT.C633, STANDALONEWEEKDAYS: C633 || CT.C633, SHORTWEEKDAYS: C634 || CT.C634, STANDALONESHORTWEEKDAYS: C634 || CT.C634, NARROWWEEKDAYS: C395 || CT.C395, STANDALONENARROWWEEKDAYS: C395 || CT.C395, SHORTQUARTERS: C635 || CT.C635, QUARTERS: C636 || CT.C636, AMPMS: C637 || CT.C637, DATEFORMATS: C105 || CT.C105, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C638 || CT.C638, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C235 || CT.C235, FIRSTWEEKCUTOFFDAY: 5}), "ms", new date_symbols.DateSymbols.new({NAME: "ms", ERAS: C639 || CT.C639, ERANAMES: C639 || CT.C639, NARROWMONTHS: C640 || CT.C640, STANDALONENARROWMONTHS: C640 || CT.C640, MONTHS: C641 || CT.C641, STANDALONEMONTHS: C641 || CT.C641, SHORTMONTHS: C642 || CT.C642, STANDALONESHORTMONTHS: C642 || CT.C642, WEEKDAYS: C643 || CT.C643, STANDALONEWEEKDAYS: C643 || CT.C643, SHORTWEEKDAYS: C644 || CT.C644, STANDALONESHORTWEEKDAYS: C644 || CT.C644, NARROWWEEKDAYS: C645 || CT.C645, STANDALONENARROWWEEKDAYS: C645 || CT.C645, SHORTQUARTERS: C646 || CT.C646, QUARTERS: C647 || CT.C647, AMPMS: C648 || CT.C648, DATEFORMATS: C649 || CT.C649, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C462 || CT.C462, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "mt", new date_symbols.DateSymbols.new({NAME: "mt", ERAS: C650 || CT.C650, ERANAMES: C651 || CT.C651, NARROWMONTHS: C652 || CT.C652, STANDALONENARROWMONTHS: C653 || CT.C653, MONTHS: C654 || CT.C654, STANDALONEMONTHS: C654 || CT.C654, SHORTMONTHS: C655 || CT.C655, STANDALONESHORTMONTHS: C655 || CT.C655, WEEKDAYS: C656 || CT.C656, STANDALONEWEEKDAYS: C656 || CT.C656, SHORTWEEKDAYS: C657 || CT.C657, STANDALONESHORTWEEKDAYS: C657 || CT.C657, NARROWWEEKDAYS: C658 || CT.C658, STANDALONENARROWWEEKDAYS: C659 || CT.C659, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C660 || CT.C660, AMPMS: C12 || CT.C12, DATEFORMATS: C661 || CT.C661, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "my", new date_symbols.DateSymbols.new({NAME: "my", ZERODIGIT: "၀", ERAS: C662 || CT.C662, ERANAMES: C663 || CT.C663, NARROWMONTHS: C664 || CT.C664, STANDALONENARROWMONTHS: C664 || CT.C664, MONTHS: C665 || CT.C665, STANDALONEMONTHS: C665 || CT.C665, SHORTMONTHS: C666 || CT.C666, STANDALONESHORTMONTHS: C666 || CT.C666, WEEKDAYS: C667 || CT.C667, STANDALONEWEEKDAYS: C667 || CT.C667, SHORTWEEKDAYS: C667 || CT.C667, STANDALONESHORTWEEKDAYS: C667 || CT.C667, NARROWWEEKDAYS: C668 || CT.C668, STANDALONENARROWWEEKDAYS: C668 || CT.C668, SHORTQUARTERS: C669 || CT.C669, QUARTERS: C669 || CT.C669, AMPMS: C670 || CT.C670, DATEFORMATS: C671 || CT.C671, TIMEFORMATS: C672 || CT.C672, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "nb", new date_symbols.DateSymbols.new({NAME: "nb", ERAS: C186 || CT.C186, ERANAMES: C673 || CT.C673, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C674 || CT.C674, STANDALONEMONTHS: C674 || CT.C674, SHORTMONTHS: C675 || CT.C675, STANDALONESHORTMONTHS: C676 || CT.C676, WEEKDAYS: C189 || CT.C189, STANDALONEWEEKDAYS: C189 || CT.C189, SHORTWEEKDAYS: C190 || CT.C190, STANDALONESHORTWEEKDAYS: C190 || CT.C190, NARROWWEEKDAYS: C192 || CT.C192, STANDALONENARROWWEEKDAYS: C192 || CT.C192, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C194 || CT.C194, AMPMS: C231 || CT.C231, DATEFORMATS: C677 || CT.C677, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C678 || CT.C678, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "ne", new date_symbols.DateSymbols.new({NAME: "ne", ZERODIGIT: "०", ERAS: C679 || CT.C679, ERANAMES: C679 || CT.C679, NARROWMONTHS: C680 || CT.C680, STANDALONENARROWMONTHS: C681 || CT.C681, MONTHS: C682 || CT.C682, STANDALONEMONTHS: C682 || CT.C682, SHORTMONTHS: C682 || CT.C682, STANDALONESHORTMONTHS: C682 || CT.C682, WEEKDAYS: C683 || CT.C683, STANDALONEWEEKDAYS: C683 || CT.C683, SHORTWEEKDAYS: C684 || CT.C684, STANDALONESHORTWEEKDAYS: C684 || CT.C684, NARROWWEEKDAYS: C685 || CT.C685, STANDALONENARROWWEEKDAYS: C685 || CT.C685, SHORTQUARTERS: C686 || CT.C686, QUARTERS: C686 || CT.C686, AMPMS: C687 || CT.C687, DATEFORMATS: C688 || CT.C688, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C462 || CT.C462, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "nl", new date_symbols.DateSymbols.new({NAME: "nl", ERAS: C689 || CT.C689, ERANAMES: C18 || CT.C18, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C690 || CT.C690, STANDALONEMONTHS: C690 || CT.C690, SHORTMONTHS: C691 || CT.C691, STANDALONESHORTMONTHS: C691 || CT.C691, WEEKDAYS: C692 || CT.C692, STANDALONEWEEKDAYS: C692 || CT.C692, SHORTWEEKDAYS: C693 || CT.C693, STANDALONESHORTWEEKDAYS: C693 || CT.C693, NARROWWEEKDAYS: C694 || CT.C694, STANDALONENARROWWEEKDAYS: C694 || CT.C694, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C695 || CT.C695, AMPMS: C231 || CT.C231, DATEFORMATS: C696 || CT.C696, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C697 || CT.C697, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "no", new date_symbols.DateSymbols.new({NAME: "no", ERAS: C186 || CT.C186, ERANAMES: C673 || CT.C673, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C674 || CT.C674, STANDALONEMONTHS: C674 || CT.C674, SHORTMONTHS: C675 || CT.C675, STANDALONESHORTMONTHS: C676 || CT.C676, WEEKDAYS: C189 || CT.C189, STANDALONEWEEKDAYS: C189 || CT.C189, SHORTWEEKDAYS: C190 || CT.C190, STANDALONESHORTWEEKDAYS: C190 || CT.C190, NARROWWEEKDAYS: C192 || CT.C192, STANDALONENARROWWEEKDAYS: C192 || CT.C192, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C194 || CT.C194, AMPMS: C231 || CT.C231, DATEFORMATS: C677 || CT.C677, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C678 || CT.C678, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "no_NO", new date_symbols.DateSymbols.new({NAME: "no_NO", ERAS: C186 || CT.C186, ERANAMES: C673 || CT.C673, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C674 || CT.C674, STANDALONEMONTHS: C674 || CT.C674, SHORTMONTHS: C675 || CT.C675, STANDALONESHORTMONTHS: C676 || CT.C676, WEEKDAYS: C189 || CT.C189, STANDALONEWEEKDAYS: C189 || CT.C189, SHORTWEEKDAYS: C190 || CT.C190, STANDALONESHORTWEEKDAYS: C190 || CT.C190, NARROWWEEKDAYS: C192 || CT.C192, STANDALONENARROWWEEKDAYS: C192 || CT.C192, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C194 || CT.C194, AMPMS: C231 || CT.C231, DATEFORMATS: C677 || CT.C677, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C678 || CT.C678, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "or", new date_symbols.DateSymbols.new({NAME: "or", ERAS: C2 || CT.C2, ERANAMES: C698 || CT.C698, NARROWMONTHS: C699 || CT.C699, STANDALONENARROWMONTHS: C699 || CT.C699, MONTHS: C700 || CT.C700, STANDALONEMONTHS: C700 || CT.C700, SHORTMONTHS: C700 || CT.C700, STANDALONESHORTMONTHS: C700 || CT.C700, WEEKDAYS: C701 || CT.C701, STANDALONEWEEKDAYS: C701 || CT.C701, SHORTWEEKDAYS: C702 || CT.C702, STANDALONESHORTWEEKDAYS: C702 || CT.C702, NARROWWEEKDAYS: C703 || CT.C703, STANDALONENARROWWEEKDAYS: C703 || CT.C703, SHORTQUARTERS: C704 || CT.C704, QUARTERS: C704 || CT.C704, AMPMS: C12 || CT.C12, DATEFORMATS: C158 || CT.C158, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C705 || CT.C705, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C235 || CT.C235, FIRSTWEEKCUTOFFDAY: 5}), "pa", new date_symbols.DateSymbols.new({NAME: "pa", ERAS: C706 || CT.C706, ERANAMES: C707 || CT.C707, NARROWMONTHS: C708 || CT.C708, STANDALONENARROWMONTHS: C708 || CT.C708, MONTHS: C709 || CT.C709, STANDALONEMONTHS: C709 || CT.C709, SHORTMONTHS: C710 || CT.C710, STANDALONESHORTMONTHS: C710 || CT.C710, WEEKDAYS: C711 || CT.C711, STANDALONEWEEKDAYS: C711 || CT.C711, SHORTWEEKDAYS: C712 || CT.C712, STANDALONESHORTWEEKDAYS: C712 || CT.C712, NARROWWEEKDAYS: C713 || CT.C713, STANDALONENARROWWEEKDAYS: C713 || CT.C713, SHORTQUARTERS: C714 || CT.C714, QUARTERS: C715 || CT.C715, AMPMS: C716 || CT.C716, DATEFORMATS: C225 || CT.C225, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C462 || CT.C462, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C235 || CT.C235, FIRSTWEEKCUTOFFDAY: 5}), "pl", new date_symbols.DateSymbols.new({NAME: "pl", ERAS: C717 || CT.C717, ERANAMES: C718 || CT.C718, NARROWMONTHS: C719 || CT.C719, STANDALONENARROWMONTHS: C720 || CT.C720, MONTHS: C721 || CT.C721, STANDALONEMONTHS: C722 || CT.C722, SHORTMONTHS: C723 || CT.C723, STANDALONESHORTMONTHS: C723 || CT.C723, WEEKDAYS: C724 || CT.C724, STANDALONEWEEKDAYS: C724 || CT.C724, SHORTWEEKDAYS: C725 || CT.C725, STANDALONESHORTWEEKDAYS: C725 || CT.C725, NARROWWEEKDAYS: C726 || CT.C726, STANDALONENARROWWEEKDAYS: C727 || CT.C727, SHORTQUARTERS: C728 || CT.C728, QUARTERS: C729 || CT.C729, AMPMS: C12 || CT.C12, DATEFORMATS: C730 || CT.C730, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C462 || CT.C462, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "ps", new date_symbols.DateSymbols.new({NAME: "ps", ZERODIGIT: "۰", ERAS: C731 || CT.C731, ERANAMES: C732 || CT.C732, NARROWMONTHS: C733 || CT.C733, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C734 || CT.C734, STANDALONEMONTHS: C735 || CT.C735, SHORTMONTHS: C734 || CT.C734, STANDALONESHORTMONTHS: C736 || CT.C736, WEEKDAYS: C737 || CT.C737, STANDALONEWEEKDAYS: C737 || CT.C737, SHORTWEEKDAYS: C737 || CT.C737, STANDALONESHORTWEEKDAYS: C737 || CT.C737, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C738 || CT.C738, QUARTERS: C738 || CT.C738, AMPMS: C739 || CT.C739, DATEFORMATS: C740 || CT.C740, TIMEFORMATS: C289 || CT.C289, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 5, WEEKENDRANGE: C741 || CT.C741, FIRSTWEEKCUTOFFDAY: 4}), "pt", new date_symbols.DateSymbols.new({NAME: "pt", ERAS: C341 || CT.C341, ERANAMES: C742 || CT.C742, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C743 || CT.C743, STANDALONEMONTHS: C743 || CT.C743, SHORTMONTHS: C744 || CT.C744, STANDALONESHORTMONTHS: C744 || CT.C744, WEEKDAYS: C745 || CT.C745, STANDALONEWEEKDAYS: C745 || CT.C745, SHORTWEEKDAYS: C746 || CT.C746, STANDALONESHORTWEEKDAYS: C746 || CT.C746, NARROWWEEKDAYS: C747 || CT.C747, STANDALONENARROWWEEKDAYS: C747 || CT.C747, SHORTQUARTERS: C245 || CT.C245, QUARTERS: C460 || CT.C460, AMPMS: C12 || CT.C12, DATEFORMATS: C748 || CT.C748, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "pt_BR", new date_symbols.DateSymbols.new({NAME: "pt_BR", ERAS: C341 || CT.C341, ERANAMES: C742 || CT.C742, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C743 || CT.C743, STANDALONEMONTHS: C743 || CT.C743, SHORTMONTHS: C744 || CT.C744, STANDALONESHORTMONTHS: C744 || CT.C744, WEEKDAYS: C745 || CT.C745, STANDALONEWEEKDAYS: C745 || CT.C745, SHORTWEEKDAYS: C746 || CT.C746, STANDALONESHORTWEEKDAYS: C746 || CT.C746, NARROWWEEKDAYS: C747 || CT.C747, STANDALONENARROWWEEKDAYS: C747 || CT.C747, SHORTQUARTERS: C245 || CT.C245, QUARTERS: C460 || CT.C460, AMPMS: C12 || CT.C12, DATEFORMATS: C748 || CT.C748, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "pt_PT", new date_symbols.DateSymbols.new({NAME: "pt_PT", ERAS: C341 || CT.C341, ERANAMES: C742 || CT.C742, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C743 || CT.C743, STANDALONEMONTHS: C743 || CT.C743, SHORTMONTHS: C744 || CT.C744, STANDALONESHORTMONTHS: C744 || CT.C744, WEEKDAYS: C745 || CT.C745, STANDALONEWEEKDAYS: C745 || CT.C745, SHORTWEEKDAYS: C749 || CT.C749, STANDALONESHORTWEEKDAYS: C749 || CT.C749, NARROWWEEKDAYS: C747 || CT.C747, STANDALONENARROWWEEKDAYS: C747 || CT.C747, SHORTQUARTERS: C245 || CT.C245, QUARTERS: C253 || CT.C253, AMPMS: C750 || CT.C750, DATEFORMATS: C751 || CT.C751, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C752 || CT.C752, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 2}), "ro", new date_symbols.DateSymbols.new({NAME: "ro", ERAS: C753 || CT.C753, ERANAMES: C754 || CT.C754, NARROWMONTHS: C755 || CT.C755, STANDALONENARROWMONTHS: C755 || CT.C755, MONTHS: C756 || CT.C756, STANDALONEMONTHS: C756 || CT.C756, SHORTMONTHS: C757 || CT.C757, STANDALONESHORTMONTHS: C757 || CT.C757, WEEKDAYS: C758 || CT.C758, STANDALONEWEEKDAYS: C758 || CT.C758, SHORTWEEKDAYS: C759 || CT.C759, STANDALONESHORTWEEKDAYS: C759 || CT.C759, NARROWWEEKDAYS: C252 || CT.C252, STANDALONENARROWWEEKDAYS: C252 || CT.C252, SHORTQUARTERS: C760 || CT.C760, QUARTERS: C761 || CT.C761, AMPMS: C231 || CT.C231, DATEFORMATS: C730 || CT.C730, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "ru", new date_symbols.DateSymbols.new({NAME: "ru", ERAS: C762 || CT.C762, ERANAMES: C763 || CT.C763, NARROWMONTHS: C529 || CT.C529, STANDALONENARROWMONTHS: C529 || CT.C529, MONTHS: C764 || CT.C764, STANDALONEMONTHS: C530 || CT.C530, SHORTMONTHS: C765 || CT.C765, STANDALONESHORTMONTHS: C766 || CT.C766, WEEKDAYS: C767 || CT.C767, STANDALONEWEEKDAYS: C767 || CT.C767, SHORTWEEKDAYS: C768 || CT.C768, STANDALONESHORTWEEKDAYS: C768 || CT.C768, NARROWWEEKDAYS: C768 || CT.C768, STANDALONENARROWWEEKDAYS: C769 || CT.C769, SHORTQUARTERS: C770 || CT.C770, QUARTERS: C771 || CT.C771, AMPMS: C12 || CT.C12, DATEFORMATS: C772 || CT.C772, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "si", new date_symbols.DateSymbols.new({NAME: "si", ERAS: C773 || CT.C773, ERANAMES: C774 || CT.C774, NARROWMONTHS: C775 || CT.C775, STANDALONENARROWMONTHS: C775 || CT.C775, MONTHS: C776 || CT.C776, STANDALONEMONTHS: C776 || CT.C776, SHORTMONTHS: C777 || CT.C777, STANDALONESHORTMONTHS: C778 || CT.C778, WEEKDAYS: C779 || CT.C779, STANDALONEWEEKDAYS: C779 || CT.C779, SHORTWEEKDAYS: C780 || CT.C780, STANDALONESHORTWEEKDAYS: C780 || CT.C780, NARROWWEEKDAYS: C781 || CT.C781, STANDALONENARROWWEEKDAYS: C781 || CT.C781, SHORTQUARTERS: C782 || CT.C782, QUARTERS: C783 || CT.C783, AMPMS: C784 || CT.C784, DATEFORMATS: C785 || CT.C785, TIMEFORMATS: C196 || CT.C196, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "sk", new date_symbols.DateSymbols.new({NAME: "sk", ERAS: C786 || CT.C786, ERANAMES: C787 || CT.C787, NARROWMONTHS: C121 || CT.C121, STANDALONENARROWMONTHS: C121 || CT.C121, MONTHS: C788 || CT.C788, STANDALONEMONTHS: C789 || CT.C789, SHORTMONTHS: C790 || CT.C790, STANDALONESHORTMONTHS: C790 || CT.C790, WEEKDAYS: C791 || CT.C791, STANDALONEWEEKDAYS: C791 || CT.C791, SHORTWEEKDAYS: C792 || CT.C792, STANDALONESHORTWEEKDAYS: C792 || CT.C792, NARROWWEEKDAYS: C793 || CT.C793, STANDALONENARROWWEEKDAYS: C793 || CT.C793, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C794 || CT.C794, AMPMS: C12 || CT.C12, DATEFORMATS: C795 || CT.C795, TIMEFORMATS: C147 || CT.C147, DATETIMEFORMATS: C796 || CT.C796, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "sl", new date_symbols.DateSymbols.new({NAME: "sl", ERAS: C565 || CT.C565, ERANAMES: C797 || CT.C797, NARROWMONTHS: C121 || CT.C121, STANDALONENARROWMONTHS: C121 || CT.C121, MONTHS: C798 || CT.C798, STANDALONEMONTHS: C798 || CT.C798, SHORTMONTHS: C799 || CT.C799, STANDALONESHORTMONTHS: C799 || CT.C799, WEEKDAYS: C800 || CT.C800, STANDALONEWEEKDAYS: C800 || CT.C800, SHORTWEEKDAYS: C801 || CT.C801, STANDALONESHORTWEEKDAYS: C801 || CT.C801, NARROWWEEKDAYS: C802 || CT.C802, STANDALONENARROWWEEKDAYS: C802 || CT.C802, SHORTQUARTERS: C803 || CT.C803, QUARTERS: C804 || CT.C804, AMPMS: C805 || CT.C805, DATEFORMATS: C806 || CT.C806, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "sq", new date_symbols.DateSymbols.new({NAME: "sq", ERAS: C807 || CT.C807, ERANAMES: C808 || CT.C808, NARROWMONTHS: C809 || CT.C809, STANDALONENARROWMONTHS: C809 || CT.C809, MONTHS: C810 || CT.C810, STANDALONEMONTHS: C810 || CT.C810, SHORTMONTHS: C811 || CT.C811, STANDALONESHORTMONTHS: C811 || CT.C811, WEEKDAYS: C812 || CT.C812, STANDALONEWEEKDAYS: C812 || CT.C812, SHORTWEEKDAYS: C813 || CT.C813, STANDALONESHORTWEEKDAYS: C814 || CT.C814, NARROWWEEKDAYS: C815 || CT.C815, STANDALONENARROWWEEKDAYS: C815 || CT.C815, SHORTQUARTERS: C816 || CT.C816, QUARTERS: C817 || CT.C817, AMPMS: C818 || CT.C818, DATEFORMATS: C819 || CT.C819, TIMEFORMATS: C820 || CT.C820, DATETIMEFORMATS: C821 || CT.C821, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "sr", new date_symbols.DateSymbols.new({NAME: "sr", ERAS: C822 || CT.C822, ERANAMES: C823 || CT.C823, NARROWMONTHS: C593 || CT.C593, STANDALONENARROWMONTHS: C593 || CT.C593, MONTHS: C824 || CT.C824, STANDALONEMONTHS: C824 || CT.C824, SHORTMONTHS: C825 || CT.C825, STANDALONESHORTMONTHS: C825 || CT.C825, WEEKDAYS: C826 || CT.C826, STANDALONEWEEKDAYS: C826 || CT.C826, SHORTWEEKDAYS: C827 || CT.C827, STANDALONESHORTWEEKDAYS: C827 || CT.C827, NARROWWEEKDAYS: C828 || CT.C828, STANDALONENARROWWEEKDAYS: C828 || CT.C828, SHORTQUARTERS: C829 || CT.C829, QUARTERS: C830 || CT.C830, AMPMS: C831 || CT.C831, DATEFORMATS: C832 || CT.C832, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "sr_Latn", new date_symbols.DateSymbols.new({NAME: "sr_Latn", ERAS: C119 || CT.C119, ERANAMES: C833 || CT.C833, NARROWMONTHS: C121 || CT.C121, STANDALONENARROWMONTHS: C121 || CT.C121, MONTHS: C834 || CT.C834, STANDALONEMONTHS: C834 || CT.C834, SHORTMONTHS: C835 || CT.C835, STANDALONESHORTMONTHS: C835 || CT.C835, WEEKDAYS: C836 || CT.C836, STANDALONEWEEKDAYS: C836 || CT.C836, SHORTWEEKDAYS: C837 || CT.C837, STANDALONESHORTWEEKDAYS: C837 || CT.C837, NARROWWEEKDAYS: C127 || CT.C127, STANDALONENARROWWEEKDAYS: C127 || CT.C127, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C838 || CT.C838, AMPMS: C839 || CT.C839, DATEFORMATS: C832 || CT.C832, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "sv", new date_symbols.DateSymbols.new({NAME: "sv", ERAS: C186 || CT.C186, ERANAMES: C840 || CT.C840, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C841 || CT.C841, STANDALONEMONTHS: C841 || CT.C841, SHORTMONTHS: C842 || CT.C842, STANDALONESHORTMONTHS: C842 || CT.C842, WEEKDAYS: C843 || CT.C843, STANDALONEWEEKDAYS: C843 || CT.C843, SHORTWEEKDAYS: C844 || CT.C844, STANDALONESHORTWEEKDAYS: C844 || CT.C844, NARROWWEEKDAYS: C192 || CT.C192, STANDALONENARROWWEEKDAYS: C192 || CT.C192, SHORTQUARTERS: C24 || CT.C24, QUARTERS: C845 || CT.C845, AMPMS: C846 || CT.C846, DATEFORMATS: C847 || CT.C847, TIMEFORMATS: C848 || CT.C848, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 3}), "sw", new date_symbols.DateSymbols.new({NAME: "sw", ERAS: C849 || CT.C849, ERANAMES: C850 || CT.C850, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C851 || CT.C851, STANDALONEMONTHS: C851 || CT.C851, SHORTMONTHS: C852 || CT.C852, STANDALONESHORTMONTHS: C852 || CT.C852, WEEKDAYS: C853 || CT.C853, STANDALONEWEEKDAYS: C853 || CT.C853, SHORTWEEKDAYS: C853 || CT.C853, STANDALONESHORTWEEKDAYS: C853 || CT.C853, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C854 || CT.C854, QUARTERS: C854 || CT.C854, AMPMS: C12 || CT.C12, DATEFORMATS: C233 || CT.C233, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "ta", new date_symbols.DateSymbols.new({NAME: "ta", ERAS: C855 || CT.C855, ERANAMES: C856 || CT.C856, NARROWMONTHS: C857 || CT.C857, STANDALONENARROWMONTHS: C857 || CT.C857, MONTHS: C858 || CT.C858, STANDALONEMONTHS: C858 || CT.C858, SHORTMONTHS: C859 || CT.C859, STANDALONESHORTMONTHS: C859 || CT.C859, WEEKDAYS: C860 || CT.C860, STANDALONEWEEKDAYS: C860 || CT.C860, SHORTWEEKDAYS: C861 || CT.C861, STANDALONESHORTWEEKDAYS: C861 || CT.C861, NARROWWEEKDAYS: C862 || CT.C862, STANDALONENARROWWEEKDAYS: C862 || CT.C862, SHORTQUARTERS: C863 || CT.C863, QUARTERS: C864 || CT.C864, AMPMS: C865 || CT.C865, DATEFORMATS: C105 || CT.C105, TIMEFORMATS: C866 || CT.C866, DATETIMEFORMATS: C867 || CT.C867, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C235 || CT.C235, FIRSTWEEKCUTOFFDAY: 5}), "te", new date_symbols.DateSymbols.new({NAME: "te", ERAS: C868 || CT.C868, ERANAMES: C869 || CT.C869, NARROWMONTHS: C870 || CT.C870, STANDALONENARROWMONTHS: C870 || CT.C870, MONTHS: C871 || CT.C871, STANDALONEMONTHS: C871 || CT.C871, SHORTMONTHS: C872 || CT.C872, STANDALONESHORTMONTHS: C872 || CT.C872, WEEKDAYS: C873 || CT.C873, STANDALONEWEEKDAYS: C873 || CT.C873, SHORTWEEKDAYS: C874 || CT.C874, STANDALONESHORTWEEKDAYS: C874 || CT.C874, NARROWWEEKDAYS: C875 || CT.C875, STANDALONENARROWWEEKDAYS: C875 || CT.C875, SHORTQUARTERS: C876 || CT.C876, QUARTERS: C877 || CT.C877, AMPMS: C12 || CT.C12, DATEFORMATS: C878 || CT.C878, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C879 || CT.C879, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C235 || CT.C235, FIRSTWEEKCUTOFFDAY: 5}), "th", new date_symbols.DateSymbols.new({NAME: "th", ERAS: C880 || CT.C880, ERANAMES: C881 || CT.C881, NARROWMONTHS: C882 || CT.C882, STANDALONENARROWMONTHS: C882 || CT.C882, MONTHS: C883 || CT.C883, STANDALONEMONTHS: C883 || CT.C883, SHORTMONTHS: C882 || CT.C882, STANDALONESHORTMONTHS: C882 || CT.C882, WEEKDAYS: C884 || CT.C884, STANDALONEWEEKDAYS: C884 || CT.C884, SHORTWEEKDAYS: C885 || CT.C885, STANDALONESHORTWEEKDAYS: C885 || CT.C885, NARROWWEEKDAYS: C886 || CT.C886, STANDALONENARROWWEEKDAYS: C886 || CT.C886, SHORTQUARTERS: C887 || CT.C887, QUARTERS: C887 || CT.C887, AMPMS: C888 || CT.C888, DATEFORMATS: C889 || CT.C889, TIMEFORMATS: C890 || CT.C890, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "tl", new date_symbols.DateSymbols.new({NAME: "tl", ERAS: C2 || CT.C2, ERANAMES: C3 || CT.C3, NARROWMONTHS: C309 || CT.C309, STANDALONENARROWMONTHS: C310 || CT.C310, MONTHS: C311 || CT.C311, STANDALONEMONTHS: C311 || CT.C311, SHORTMONTHS: C309 || CT.C309, STANDALONESHORTMONTHS: C309 || CT.C309, WEEKDAYS: C312 || CT.C312, STANDALONEWEEKDAYS: C312 || CT.C312, SHORTWEEKDAYS: C313 || CT.C313, STANDALONESHORTWEEKDAYS: C313 || CT.C313, NARROWWEEKDAYS: C313 || CT.C313, STANDALONENARROWWEEKDAYS: C313 || CT.C313, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C314 || CT.C314, AMPMS: C12 || CT.C12, DATEFORMATS: C158 || CT.C158, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C315 || CT.C315, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "tr", new date_symbols.DateSymbols.new({NAME: "tr", ERAS: C891 || CT.C891, ERANAMES: C892 || CT.C892, NARROWMONTHS: C893 || CT.C893, STANDALONENARROWMONTHS: C893 || CT.C893, MONTHS: C894 || CT.C894, STANDALONEMONTHS: C894 || CT.C894, SHORTMONTHS: C895 || CT.C895, STANDALONESHORTMONTHS: C895 || CT.C895, WEEKDAYS: C896 || CT.C896, STANDALONEWEEKDAYS: C896 || CT.C896, SHORTWEEKDAYS: C897 || CT.C897, STANDALONESHORTWEEKDAYS: C897 || CT.C897, NARROWWEEKDAYS: C898 || CT.C898, STANDALONENARROWWEEKDAYS: C898 || CT.C898, SHORTQUARTERS: C899 || CT.C899, QUARTERS: C900 || CT.C900, AMPMS: C901 || CT.C901, DATEFORMATS: C902 || CT.C902, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "uk", new date_symbols.DateSymbols.new({NAME: "uk", ERAS: C903 || CT.C903, ERANAMES: C904 || CT.C904, NARROWMONTHS: C905 || CT.C905, STANDALONENARROWMONTHS: C906 || CT.C906, MONTHS: C907 || CT.C907, STANDALONEMONTHS: C908 || CT.C908, SHORTMONTHS: C909 || CT.C909, STANDALONESHORTMONTHS: C910 || CT.C910, WEEKDAYS: C911 || CT.C911, STANDALONEWEEKDAYS: C911 || CT.C911, SHORTWEEKDAYS: C88 || CT.C88, STANDALONESHORTWEEKDAYS: C88 || CT.C88, NARROWWEEKDAYS: C912 || CT.C912, STANDALONENARROWWEEKDAYS: C912 || CT.C912, SHORTQUARTERS: C770 || CT.C770, QUARTERS: C771 || CT.C771, AMPMS: C913 || CT.C913, DATEFORMATS: C914 || CT.C914, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C915 || CT.C915, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "ur", new date_symbols.DateSymbols.new({NAME: "ur", ERAS: C916 || CT.C916, ERANAMES: C916 || CT.C916, NARROWMONTHS: C4 || CT.C4, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C917 || CT.C917, STANDALONEMONTHS: C917 || CT.C917, SHORTMONTHS: C917 || CT.C917, STANDALONESHORTMONTHS: C917 || CT.C917, WEEKDAYS: C918 || CT.C918, STANDALONEWEEKDAYS: C918 || CT.C918, SHORTWEEKDAYS: C918 || CT.C918, STANDALONESHORTWEEKDAYS: C918 || CT.C918, NARROWWEEKDAYS: C9 || CT.C9, STANDALONENARROWWEEKDAYS: C9 || CT.C9, SHORTQUARTERS: C919 || CT.C919, QUARTERS: C919 || CT.C919, AMPMS: C12 || CT.C12, DATEFORMATS: C920 || CT.C920, TIMEFORMATS: C42 || CT.C42, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "uz", new date_symbols.DateSymbols.new({NAME: "uz", ERAS: C921 || CT.C921, ERANAMES: C922 || CT.C922, NARROWMONTHS: C923 || CT.C923, STANDALONENARROWMONTHS: C923 || CT.C923, MONTHS: C924 || CT.C924, STANDALONEMONTHS: C925 || CT.C925, SHORTMONTHS: C926 || CT.C926, STANDALONESHORTMONTHS: C927 || CT.C927, WEEKDAYS: C928 || CT.C928, STANDALONEWEEKDAYS: C928 || CT.C928, SHORTWEEKDAYS: C929 || CT.C929, STANDALONESHORTWEEKDAYS: C929 || CT.C929, NARROWWEEKDAYS: C930 || CT.C930, STANDALONENARROWWEEKDAYS: C930 || CT.C930, SHORTQUARTERS: C931 || CT.C931, QUARTERS: C932 || CT.C932, AMPMS: C933 || CT.C933, DATEFORMATS: C934 || CT.C934, TIMEFORMATS: C935 || CT.C935, DATETIMEFORMATS: C95 || CT.C95, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "vi", new date_symbols.DateSymbols.new({NAME: "vi", ERAS: C936 || CT.C936, ERANAMES: C936 || CT.C936, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C937 || CT.C937, STANDALONEMONTHS: C938 || CT.C938, SHORTMONTHS: C939 || CT.C939, STANDALONESHORTMONTHS: C940 || CT.C940, WEEKDAYS: C941 || CT.C941, STANDALONEWEEKDAYS: C941 || CT.C941, SHORTWEEKDAYS: C942 || CT.C942, STANDALONESHORTWEEKDAYS: C942 || CT.C942, NARROWWEEKDAYS: C943 || CT.C943, STANDALONENARROWWEEKDAYS: C943 || CT.C943, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C944 || CT.C944, AMPMS: C945 || CT.C945, DATEFORMATS: C946 || CT.C946, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C947 || CT.C947, FIRSTDAYOFWEEK: 0, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 6}), "zh", new date_symbols.DateSymbols.new({NAME: "zh", ERAS: C948 || CT.C948, ERANAMES: C948 || CT.C948, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C949 || CT.C949, STANDALONEMONTHS: C949 || CT.C949, SHORTMONTHS: C464 || CT.C464, STANDALONESHORTMONTHS: C464 || CT.C464, WEEKDAYS: C950 || CT.C950, STANDALONEWEEKDAYS: C950 || CT.C950, SHORTWEEKDAYS: C951 || CT.C951, STANDALONESHORTWEEKDAYS: C951 || CT.C951, NARROWWEEKDAYS: C952 || CT.C952, STANDALONENARROWWEEKDAYS: C952 || CT.C952, SHORTQUARTERS: C953 || CT.C953, QUARTERS: C954 || CT.C954, AMPMS: C955 || CT.C955, DATEFORMATS: C956 || CT.C956, TIMEFORMATS: C957 || CT.C957, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "zh_CN", new date_symbols.DateSymbols.new({NAME: "zh_CN", ERAS: C948 || CT.C948, ERANAMES: C948 || CT.C948, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C949 || CT.C949, STANDALONEMONTHS: C949 || CT.C949, SHORTMONTHS: C464 || CT.C464, STANDALONESHORTMONTHS: C464 || CT.C464, WEEKDAYS: C950 || CT.C950, STANDALONEWEEKDAYS: C950 || CT.C950, SHORTWEEKDAYS: C951 || CT.C951, STANDALONESHORTWEEKDAYS: C951 || CT.C951, NARROWWEEKDAYS: C952 || CT.C952, STANDALONENARROWWEEKDAYS: C952 || CT.C952, SHORTQUARTERS: C953 || CT.C953, QUARTERS: C954 || CT.C954, AMPMS: C955 || CT.C955, DATEFORMATS: C956 || CT.C956, TIMEFORMATS: C957 || CT.C957, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "zh_HK", new date_symbols.DateSymbols.new({NAME: "zh_HK", ERAS: C948 || CT.C948, ERANAMES: C948 || CT.C948, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C464 || CT.C464, STANDALONEMONTHS: C464 || CT.C464, SHORTMONTHS: C464 || CT.C464, STANDALONESHORTMONTHS: C464 || CT.C464, WEEKDAYS: C950 || CT.C950, STANDALONEWEEKDAYS: C950 || CT.C950, SHORTWEEKDAYS: C958 || CT.C958, STANDALONESHORTWEEKDAYS: C958 || CT.C958, NARROWWEEKDAYS: C952 || CT.C952, STANDALONENARROWWEEKDAYS: C952 || CT.C952, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C959 || CT.C959, AMPMS: C955 || CT.C955, DATEFORMATS: C960 || CT.C960, TIMEFORMATS: C961 || CT.C961, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "zh_TW", new date_symbols.DateSymbols.new({NAME: "zh_TW", ERAS: C962 || CT.C962, ERANAMES: C962 || CT.C962, NARROWMONTHS: C57 || CT.C57, STANDALONENARROWMONTHS: C57 || CT.C57, MONTHS: C464 || CT.C464, STANDALONEMONTHS: C464 || CT.C464, SHORTMONTHS: C464 || CT.C464, STANDALONESHORTMONTHS: C464 || CT.C464, WEEKDAYS: C950 || CT.C950, STANDALONEWEEKDAYS: C950 || CT.C950, SHORTWEEKDAYS: C958 || CT.C958, STANDALONESHORTWEEKDAYS: C958 || CT.C958, NARROWWEEKDAYS: C952 || CT.C952, STANDALONENARROWWEEKDAYS: C952 || CT.C952, SHORTQUARTERS: C959 || CT.C959, QUARTERS: C959 || CT.C959, AMPMS: C955 || CT.C955, DATEFORMATS: C963 || CT.C963, TIMEFORMATS: C961 || CT.C961, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5}), "zu", new date_symbols.DateSymbols.new({NAME: "zu", ERAS: C2 || CT.C2, ERANAMES: C2 || CT.C2, NARROWMONTHS: C964 || CT.C964, STANDALONENARROWMONTHS: C4 || CT.C4, MONTHS: C965 || CT.C965, STANDALONEMONTHS: C965 || CT.C965, SHORTMONTHS: C966 || CT.C966, STANDALONESHORTMONTHS: C966 || CT.C966, WEEKDAYS: C967 || CT.C967, STANDALONEWEEKDAYS: C967 || CT.C967, SHORTWEEKDAYS: C968 || CT.C968, STANDALONESHORTWEEKDAYS: C968 || CT.C968, NARROWWEEKDAYS: C969 || CT.C969, STANDALONENARROWWEEKDAYS: C969 || CT.C969, SHORTQUARTERS: C10 || CT.C10, QUARTERS: C970 || CT.C970, AMPMS: C12 || CT.C12, DATEFORMATS: C158 || CT.C158, TIMEFORMATS: C28 || CT.C28, DATETIMEFORMATS: C29 || CT.C29, FIRSTDAYOFWEEK: 6, WEEKENDRANGE: C16 || CT.C16, FIRSTWEEKCUTOFFDAY: 5})]);
  };
  dart.trackLibraries("packages/intl/date_symbol_data_local", {
    "package:intl/date_symbol_data_local.dart": date_symbol_data_local
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_symbol_data_local.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sFA+B8C,eAAe;AACnB,IAAxC;AAC0C,IAA1C;AACA,UAAW,sBAAa;EAC1B;;AAK6C,0CAEvC,UAAc,wCACJ,ylBAkJU,oDAEI,KAGxB,MAAU,wCACA,6mBAkJU,oDAEI,KAExB,MAAU,wCACA,inBA6HU,oDAEI,KAExB,MAAU,wCACA,iBACK,gnBAuJK,oDAEI,KAExB,SAAa,wCACH,onBAuJU,oDAEI,KAGxB,SAAa,wCACH,oBACK,gnBAuJK,oDAEI,KAExB,MAAU,wCACA,inBA0IU,oDAEI,KAExB,MAAU,wCACA,inBA+IU,oDAEI,KAExB,MAAU,wCACA,inBA+IU,oDAEI,KAExB,MAAU,wCACA,iBACK,ooBA+JK,oDAEI,KAExB,MAAU,wCACA,upBAoKU,oDAEI,KAExB,MAAU,wCACA,upBAuJU,oDAEI,KAExB,MAAU,wCACA,ypBA0JU,oDAEI,KAExB,OAAW,wCACD,kpBAkJU,oDAEI,KAExB,MAAU,wCACA,ipBAqIU,oDAEI,KAExB,MAAU,wCACA,upBAuJU,oDAEI,KAExB,MAAU,wCACA,+oBAuJU,oDAEI,KAExB,MAAU,wCACA,2oBAuJU,oDAEI,KAExB,SAAa,wCACH,8oBAuJU,oDAEI,KAGxB,SAAa,wCACH,8oBAuJU,oDAEI,KAExB,MAAU,wCACA,upBAuJU,oDAEI,KAExB,MAAU,wCACA,ulBAuJU,oDAEI,KAExB,SAAa,wCACH,omBA+JU,oDAEI,KAExB,SAAa,wCACH,4mBAuJU,oDAEI,KAExB,SAAa,wCACH,4lBAuJU,oDAEI,KAExB,SAAa,wCACH,4lBAuJU,oDAEI,KAExB,SAAa,wCACH,4lBAuJU,sDAEI,KAExB,SAAa,wCACH,4lBAuJU,oDAEI,KAExB,SAAa,wCACH,4lBAuJU,oDAEI,KAGxB,SAAa,wCACH,0lBAuJU,oDAEI,KAExB,SAAa,wCACH,4lBAuJU,oDAEI,KAExB,MAAU,wCACA,ypBA6IU,oDAEI,KAExB,UAAc,wCACJ,2pBAkJU,oDAEI,KAGxB,SAAa,wCACH,4pBA6IU,oDAEI,KAExB,SAAa,wCACH,4pBAkJU,oDAEI,KAExB,SAAa,wCACH,0pBAkJU,oDAEI,KAExB,MAAU,wCACA,ipBAkIU,oDAEI,KAExB,MAAU,wCACA,qpBAkJU,oDAEI,KAExB,MAAU,wCACA,iBACK,wpBAkJK,sDAEI,KAExB,MAAU,wCACA,ypBAwIU,oDAEI,KAExB,OAAW,wCACD,4oBAuKU,oDAEI,KAExB,MAAU,wCACA,6oBAuJU,oDAEI,KAExB,SAAa,wCACH,opBAuJU,oDAEI,KAExB,SAAa,wCACH,kpBAuJU,oDAEI,KAExB,MAAU,wCACA,qpBA6IU,oDAEI,KAExB,MAAU,wCACA,upBAuJU,oDAEI,KAExB,OAAW,wCACD,4oBAkJU,oDAEI,KAExB,MAAU,wCACA,qpBA+JU,sDAEI,KAExB,OAAW,wCACD,ooBAqIU,oDAEI,KAExB,MAAU,wCACA,mpBAqJU,oDAEI,KAExB,MAAU,wCACA,upBA+JU,sDAEI,KAExB,MAAU,wCACA,upBAuJU,oDAEI,KAExB,MAAU,wCACA,upBA6IU,oDAEI,KAExB,MAAU,wCACA,mpBA4JU,oDAEI,KAExB,MAAU,wCACA,2oBAkJU,oDAEI,KAExB,MAAU,wCACA,2oBAkJU,oDAEI,KAExB,MAAU,wCACA,upBAuJU,oDAEI,KAExB,MAAU,wCACA,qpBAkJU,oDAEI,KAExB,SAAa,wCACH,wpBAkJU,oDAEI,KAExB,MAAU,wCACA,mpBAqJU,oDAEI,KAExB,MAAU,wCACA,ipBA2GU,oDAEI,KAExB,MAAU,wCACA,mpBAuJU,oDAEI,KAExB,MAAU,wCACA,mpBA0IU,oDAEI,KAExB,MAAU,wCACA,qpBAuJU,oDAEI,KAExB,MAAU,wCACA,upBA0JU,sDAEI,KAExB,MAAU,wCACA,mpBAqHU,oDAEI,KAExB,MAAU,wCACA,qpBA6IU,oDAEI,KAExB,MAAU,wCACA,qpBA6IU,oDAEI,KAExB,MAAU,wCACA,mpBA0JU,oDAEI,KAExB,MAAU,wCACA,qpBA0IU,oDAEI,KAExB,MAAU,wCACA,6oBAkJU,oDAEI,KAExB,MAAU,wCACA,ipBAkJU,oDAEI,KAExB,MAAU,wCACA,mpBA+JU,sDAEI,KAExB,MAAU,wCACA,upBAuJU,oDAEI,KAExB,MAAU,wCACA,iBACK,spBA+JK,sDAEI,KAExB,MAAU,wCACA,upBAkJU,oDAEI,KAExB,MAAU,wCACA,ipBAqJU,oDAEI,KAExB,MAAU,wCACA,iBACK,spBAuJK,oDAEI,KAExB,MAAU,wCACA,6oBAuJU,oDAEI,KAExB,MAAU,wCACA,iBACK,spBA+JK,oDAEI,KAExB,MAAU,wCACA,2oBA+IU,oDAEI,KAExB,MAAU,wCACA,6oBAuJU,oDAEI,KAGxB,SAAa,wCACH,gpBAuJU,oDAEI,KAExB,MAAU,wCACA,ipBAoKU,sDAEI,KAExB,MAAU,wCACA,upBA0JU,sDAEI,KAExB,MAAU,wCACA,qpBAkJU,oDAEI,KAExB,MAAU,wCACA,iBACK,4oBAkJK,sDAEI,KAExB,MAAU,wCACA,2oBAkJU,oDAEI,KAGxB,SAAa,wCACH,8oBAkJU,oDAEI,KAExB,SAAa,wCACH,kpBAuJU,oDAEI,KAExB,MAAU,wCACA,qpBAuJU,oDAEI,KAExB,MAAU,wCACA,mpBA+IU,oDAEI,KAExB,MAAU,wCACA,upBA0JU,oDAEI,KAExB,MAAU,wCACA,qpBA0IU,oDAEI,KAExB,MAAU,wCACA,qpBAkJU,oDAEI,KAExB,MAAU,wCACA,ypBA4JU,oDAEI,KAExB,MAAU,wCACA,qpBAkJU,oDAEI,KAExB,WAAe,wCACL,wpBAkJU,oDAEI,KAExB,MAAU,wCACA,6oBAkJU,oDAEI,KAExB,MAAU,wCACA,moBAkJU,oDAEI,KAExB,MAAU,wCACA,ypBA+JU,sDAEI,KAExB,MAAU,wCACA,qpBA+JU,sDAEI,KAExB,MAAU,wCACA,upBAqIU,oDAEI,KAExB,MAAU,wCACA,2oBAuKU,oDAEI,KAExB,MAAU,wCACA,qpBAwIU,oDAEI,KAExB,MAAU,wCACA,mpBA+IU,oDAEI,KAExB,MAAU,wCACA,moBAuJU,oDAEI,KAExB,MAAU,wCACA,upBAkJU,oDAEI,KAExB,MAAU,wCACA,ipBAqJU,oDAEI,KAExB,MAAU,wCACA,mpBAwHU,oDAEI,KAGxB,SAAa,wCACH,spBAwHU,oDAEI,KAExB,SAAa,wCACH,opBAwHU,oDAEI,KAExB,SAAa,wCACH,spBAwHU,oDAEI,KAExB,MAAU,wCACA,qoBAkJU,oDAEI;EACzB","file":"date_symbol_data_local.ddc.js"}');
  // Exports:
  return {
    date_symbol_data_local: date_symbol_data_local
  };
});

//# sourceMappingURL=date_symbol_data_local.ddc.js.map
