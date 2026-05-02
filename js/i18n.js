/* ============================================================
   i18n.js — language switcher (pl / en)
   ============================================================ */

var TRANSLATIONS = {
  pl: {
    /* nav */
    'nav.home':    'Główna',
    'nav.gallery': 'Galeria & O mnie',
    'nav.order':   'Zamów',

    /* index — hero */
    'hero.eyebrow':    'Profesjonalne malowanie modeli',
    'hero.h1':         'Twoje figurki<br /><span>ożywają</span> w moich rękach',
    'hero.sub':        'Od tabletop-ready po display quality — maluję figurki i modele z pasją i dbałością o każdy detal.',
    'hero.cta.order':  'Złóż zamówienie',
    'hero.cta.gallery':'Zobacz galerię',

    /* index — how it works */
    'how.title':       'Jak to działa?',
    'how.step1.title': 'Wypełnij formularz',
    'how.step1.desc':  'Wybierz poziom jakości malowania, podaj dane kontaktowe i opisz modele do pomalowania.',
    'how.step2.title': 'Otrzymaj wycenę',
    'how.step2.desc':  'Skontaktuję się z Tobą w ciągu 48h, żeby omówić szczegóły i podać ostateczną cenę.',
    'how.step3.title': 'Wyślij modele',
    'how.step3.desc':  'Po akceptacji wyceny wysyłasz figurki na mój adres lub dostarczasz osobiście.',
    'how.step4.title': 'Odbierz gotowe',
    'how.step4.desc':  'Odesyłam pomalowane modele i cieszysz się efektem końcowym.',

    /* index — quality preview */
    'quality.title':        'Poziomy jakości',
    'quality.subtitle':     'Każdy projekt jest inny — znajdź opcję dopasowaną do Twoich potrzeb i budżetu.',
    'quality.basic.name':   'Podstawowy',
    'quality.basic.desc':   'Basecoat, wash i drybrush. Gotowe na stolik do gry.',
    'quality.standard.name':'Standardowy',
    'quality.standard.desc':'Podświetlenia, cieniowania, detale. Wyraźna, czysta praca.',
    'quality.premium.name': 'Premium',
    'quality.premium.desc': 'Zaawansowane techniki — NMM, OSL, freehanding i efekty specjalne.',
    'quality.display.name': 'Display',
    'quality.display.desc': 'Poziom konkursowy. Pełne blending, maksymalna dbałość o każdy detal.',
    'quality.cta':          'Złóż zamówienie',

    /* footer */
    'footer.copy': '© 2025 NAZWA STUDIA. Wszelkie prawa zastrzeżone.',

    /* gallery page */
    'gallery.hero.title':  'Galeria & O mnie',
    'gallery.hero.sub':    'Poznaj moją pracę i dowiedz się, kto stoi za pędzlem.',
    'about.title':         'Cześć, jestem <span>TWOJE IMIĘ</span>',
    'about.p1':            'Maluję figurki od ponad X lat. Zaczęło się od gier planszowych i Warhammera, a z czasem pasja przerodziła się w coś więcej. Dziś maluję figurki dla klientów z całej Polski, dbając o każdy detal.',
    'about.p2':            'Specjalizuję się w modelach fantasy i sci-fi, choć chętnie podejmuję się każdego wyzwania. Każde zamówienie traktuję indywidualnie — zależy mi, żeby efekt końcowy przekroczył Twoje oczekiwania.',
    'about.p3':            'Masz pytania? Napisz do mnie przez formularz zamówienia lub bezpośrednio na e-mail.',
    'gallery.title':       'Moje prace',
    'gallery.subtitle':    'Każdy model to osobna historia — oto kilka z nich.',
    'gallery.item.label':  'Tytuł pracy / Poziom jakości',
    'gallery.cta':         'Chcę zamówić malowanie',

    /* order page */
    'order.title':      'Złóż zamówienie',
    'order.subtitle':   'Wypełnij poniższy formularz. Odpiszę w ciągu 48h z wyceną.',
    'step.label.1':     'Jakość',
    'step.label.2':     'Kontakt',
    'step.label.3':     'Modele',
    'error.global':     'Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub wyślij zamówienie bezpośrednio na:',
    'card1.title':      'Krok 1 — Wybierz poziom jakości',
    'qp.placeholder':   '← Wybierz poziom, aby zobaczyć przykład',
    'quality.error':    'Wybierz poziom jakości malowania.',

    /* quality picker options */
    'qp.basic.name':     'Podstawowy',
    'qp.basic.subtitle': 'Tabletop ready',
    'qp.basic.desc':     'Basecoat, wash, drybrush. Szybko i funkcjonalnie — gotowe na stolik do gry.',
    'qp.standard.name':     'Standardowy',
    'qp.standard.subtitle': 'Dobry tabletop',
    'qp.standard.desc':     'Podświetlenia, cieniowania, wyraźne detale. Dobry balans między ceną a jakością.',
    'qp.premium.name':     'Premium',
    'qp.premium.subtitle': 'Zaawansowane techniki',
    'qp.premium.desc':     'NMM, OSL, freehanding, efekty specjalne. Dla wymagających.',
    'qp.display.name':     'Display',
    'qp.display.subtitle': 'Poziom konkursowy',
    'qp.display.desc':     'Poziom konkursowy. Pełen blending, maksymalna dbałość o każdy detal.',

    /* contact step */
    'card2.title':       'Krok 2 — Twoje dane kontaktowe',
    'label.firstName':   'Imię',
    'label.lastName':    'Nazwisko',
    'label.email':       'Adres e-mail',
    'label.phone':       'Telefon',
    'phone.optional':    '(opcjonalnie)',
    'phone.hint':        'Możemy szybciej omówić szczegóły, jeśli podasz numer.',
    'error.firstName':   'Podaj imię.',
    'error.lastName':    'Podaj nazwisko.',
    'error.email':       'Podaj prawidłowy adres e-mail.',
    'ph.firstName':      'Jan',
    'ph.lastName':       'Kowalski',
    'ph.email':          'jan.kowalski@example.com',
    'ph.phone':          '+48 600 000 000',

    /* models step */
    'card3.title':           'Krok 3 — Modele do pomalowania',
    'label.models':          'Opis modeli',
    'ph.models':             'Np.: 10 piechurów Warhammer 40k (Space Marines), 1 bohater (HQ), wszystko w barwach Ultramarines...',
    'models.hint':           'Napisz co chcesz pomalować — nazwę serii, ilość modeli, frakcję, barwy, wszelkie preferencje.',
    'error.models':          'Opisz modele, które chcesz pomalować.',
    'label.references':      'Referencje / inspiracje',
    'references.optional':   '(opcjonalnie)',
    'ph.references':         'Np.: link do zdjęcia, opis schematu kolorów, inspiracja z internetu...',
    'references.hint':       'Jeśli masz konkretną wizję efektu końcowego, opisz ją lub wklej link do inspiracji.',
    'label.deadline':        'Preferowany termin',
    'deadline.optional':     '(opcjonalnie)',
    'ph.deadline':           'Wybierz datę…',
    'deadline.hint':         'Kiedy potrzebujesz gotowych modeli? Możesz też zostawić puste.',

    /* buttons & misc */
    'btn.next':       'Dalej ›',
    'btn.back':       '‹ Wstecz',
    'btn.submit':     'Wyślij zamówienie',
    'btn.submitting': 'Wysyłanie…',
    'form.note':      'Po wysłaniu otrzymasz e-mail z potwierdzeniem.<br />Wycenę prześlę w ciągu 48 godzin.',
    'success.title':  'Zamówienie wysłane!',
    'success.p':      'Dziękuję za kontakt. Na Twój adres e-mail wysłałem potwierdzenie otrzymania zamówienia. Odezwę się z wyceną w ciągu 48 godzin.',
    'success.btn':    'Wróć na stronę główną',
  },

  en: {
    /* nav */
    'nav.home':    'Home',
    'nav.gallery': 'Gallery & About',
    'nav.order':   'Order',

    /* index — hero */
    'hero.eyebrow':    'Professional miniature painting',
    'hero.h1':         'Your miniatures<br /><span>come alive</span> in my hands',
    'hero.sub':        'From tabletop-ready to display quality — I paint miniatures and models with passion and attention to every detail.',
    'hero.cta.order':  'Place an order',
    'hero.cta.gallery':'View gallery',

    /* index — how it works */
    'how.title':       'How it works',
    'how.step1.title': 'Fill in the form',
    'how.step1.desc':  'Choose a painting quality level, provide your contact details and describe the models to be painted.',
    'how.step2.title': 'Receive a quote',
    'how.step2.desc':  'I will contact you within 48h to discuss the details and provide a final price.',
    'how.step3.title': 'Send your models',
    'how.step3.desc':  'After accepting the quote, send the miniatures to my address or deliver them in person.',
    'how.step4.title': 'Receive them back',
    'how.step4.desc':  'I send back the painted models and you enjoy the final result.',

    /* index — quality preview */
    'quality.title':        'Quality levels',
    'quality.subtitle':     'Every project is different — find the option that fits your needs and budget.',
    'quality.basic.name':   'Basic',
    'quality.basic.desc':   'Basecoat, wash and drybrush. Ready for the gaming table.',
    'quality.standard.name':'Standard',
    'quality.standard.desc':'Highlights, shading, details. Clean, crisp work.',
    'quality.premium.name': 'Premium',
    'quality.premium.desc': 'Advanced techniques — NMM, OSL, freehanding and special effects.',
    'quality.display.name': 'Display',
    'quality.display.desc': 'Competition level. Full blending, maximum attention to every detail.',
    'quality.cta':          'Place an order',

    /* footer */
    'footer.copy': '© 2025 NAZWA STUDIA. All rights reserved.',

    /* gallery page */
    'gallery.hero.title':  'Gallery & About',
    'gallery.hero.sub':    'Discover my work and learn who is behind the brush.',
    'about.title':         'Hi, I am <span>YOUR NAME</span>',
    'about.p1':            'I have been painting miniatures for over X years. It started with board games and Warhammer, and over time the passion grew into something more. Today I paint miniatures for clients across the country, paying attention to every detail.',
    'about.p2':            'I specialise in fantasy and sci-fi models, though I am happy to take on any challenge. I treat every order individually — I want the final result to exceed your expectations.',
    'about.p3':            'Have questions? Write to me through the order form or directly by email.',
    'gallery.title':       'My work',
    'gallery.subtitle':    'Every model is its own story — here are some of them.',
    'gallery.item.label':  'Work title / Quality level',
    'gallery.cta':         'I want to order painting',

    /* order page */
    'order.title':      'Place an order',
    'order.subtitle':   'Fill in the form below. I will reply within 48h with a quote.',
    'step.label.1':     'Quality',
    'step.label.2':     'Contact',
    'step.label.3':     'Models',
    'error.global':     'An error occurred while sending. Please try again or send your order directly to:',
    'card1.title':      'Step 1 — Choose quality level',
    'qp.placeholder':   '← Choose a level to see an example',
    'quality.error':    'Please choose a painting quality level.',

    /* quality picker options */
    'qp.basic.name':     'Basic',
    'qp.basic.subtitle': 'Tabletop ready',
    'qp.basic.desc':     'Basecoat, wash, drybrush. Quick and functional — ready for the gaming table.',
    'qp.standard.name':     'Standard',
    'qp.standard.subtitle': 'Good tabletop',
    'qp.standard.desc':     'Highlights, shading, clear details. A good balance between price and quality.',
    'qp.premium.name':     'Premium',
    'qp.premium.subtitle': 'Advanced techniques',
    'qp.premium.desc':     'NMM, OSL, freehanding, special effects. For the demanding.',
    'qp.display.name':     'Display',
    'qp.display.subtitle': 'Competition level',
    'qp.display.desc':     'Competition level. Full blending, maximum attention to every detail.',

    /* contact step */
    'card2.title':       'Step 2 — Your contact details',
    'label.firstName':   'First name',
    'label.lastName':    'Last name',
    'label.email':       'Email address',
    'label.phone':       'Phone',
    'phone.optional':    '(optional)',
    'phone.hint':        'We can discuss details faster if you provide a number.',
    'error.firstName':   'Please enter your first name.',
    'error.lastName':    'Please enter your last name.',
    'error.email':       'Please enter a valid email address.',
    'ph.firstName':      'John',
    'ph.lastName':       'Smith',
    'ph.email':          'john.smith@example.com',
    'ph.phone':          '+44 7700 000000',

    /* models step */
    'card3.title':           'Step 3 — Models to paint',
    'label.models':          'Model description',
    'ph.models':             'E.g.: 10 Warhammer 40k infantry (Space Marines), 1 hero (HQ), all in Ultramarines colours...',
    'models.hint':           'Describe what you want painted — series name, number of models, faction, colours, any preferences.',
    'error.models':          'Please describe the models you want painted.',
    'label.references':      'References / inspiration',
    'references.optional':   '(optional)',
    'ph.references':         'E.g.: link to a photo, colour scheme description, inspiration from the web...',
    'references.hint':       'If you have a specific vision for the final result, describe it or paste a link to inspiration.',
    'label.deadline':        'Preferred deadline',
    'deadline.optional':     '(optional)',
    'ph.deadline':           'Choose a date…',
    'deadline.hint':         'When do you need the models ready? You can also leave this blank.',

    /* buttons & misc */
    'btn.next':       'Next ›',
    'btn.back':       '‹ Back',
    'btn.submit':     'Send order',
    'btn.submitting': 'Sending…',
    'form.note':      'After sending you will receive a confirmation email.<br />I will send the quote within 48 hours.',
    'success.title':  'Order sent!',
    'success.p':      'Thank you for getting in touch. I have sent a confirmation to your email address. I will get back to you with a quote within 48 hours.',
    'success.btn':    'Back to homepage',
  }
};

var I18N = (function () {
  var DEFAULT_LANG = 'pl';
  var urlLang      = new URLSearchParams(window.location.search).get('lang');
  var currentLang  = (TRANSLATIONS[urlLang] ? urlLang : null) || localStorage.getItem('lang') || DEFAULT_LANG;
  if (urlLang && TRANSLATIONS[urlLang]) { localStorage.setItem('lang', urlLang); }

  function t(key) {
    var lang = TRANSLATIONS[currentLang] || TRANSLATIONS[DEFAULT_LANG];
    return lang[key] !== undefined ? lang[key] : (TRANSLATIONS[DEFAULT_LANG][key] || key);
  }

  function updateNavLinks(lang) {
    document.querySelectorAll('a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || !href.match(/\.html/)) return;
      a.setAttribute('href', href.split('?')[0] + '?lang=' + lang);
    });
  }

  function apply() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.dataset.i18nHtml);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    /* update quality picker radio data for JS preview */
    document.querySelectorAll('input[name="quality"]').forEach(function (radio) {
      if (radio.dataset.descKey)  radio.dataset.desc        = t(radio.dataset.descKey);
      if (radio.dataset.nameKey)  radio.dataset.displayName = t(radio.dataset.nameKey);
    });

    /* refresh quality preview if one is already selected */
    var qpName = document.getElementById('qpName');
    var qpDesc = document.getElementById('qpDesc');
    if (qpName && qpDesc) {
      var checked = document.querySelector('input[name="quality"]:checked');
      if (checked) {
        if (checked.dataset.nameKey) qpName.textContent = t(checked.dataset.nameKey);
        if (checked.dataset.descKey) qpDesc.textContent = t(checked.dataset.descKey);
      }
    }

    /* keep submit button label in sync if not mid-submit */
    var submitBtn = document.getElementById('submitBtn');
    if (submitBtn && !submitBtn.disabled) {
      submitBtn.textContent = t('btn.submit');
    }

    /* sync switcher active state */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    updateNavLinks(currentLang);
  }

  function reinitFlatpickr() {
    var el = document.getElementById('deadline');
    if (!el || typeof flatpickr === 'undefined') return;
    if (el._flatpickr) el._flatpickr.destroy();
    var opts = {
      dateFormat:     'd.m.Y',
      minDate:        'today',
      disableMobile:  false,
      allowInput:     false,
    };
    if (currentLang === 'pl') opts.locale = 'pl';
    flatpickr(el, opts);
    /* update placeholder after reinit */
    el.placeholder = t('ph.deadline');
  }

  function setLang(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    apply();
    reinitFlatpickr();
  }

  function init() {
    apply();
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.dataset.lang); });
    });
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        var pageLang = new URLSearchParams(window.location.search).get('lang');
        currentLang = (TRANSLATIONS[pageLang] ? pageLang : null) || localStorage.getItem('lang') || DEFAULT_LANG;
        apply();
      }
    });
  }

  return {
    init:            init,
    t:               t,
    setLang:         setLang,
    reinitFlatpickr: reinitFlatpickr,
    getLang:         function () { return currentLang; }
  };
})();
