/* ============================================================
   PAINT ORDER — main.js
   ============================================================

   KONFIGURACJA EMAILJS — wykonaj raz przed uruchomieniem:
   ─────────────────────────────────────────────────────────
   1. Załóż konto na https://www.emailjs.com/ (plan darmowy = 200 maili/mies.)
   2. W panelu EmailJS:
      a) "Email Services" → dodaj swoją skrzynkę (Gmail, Outlook itp.)
         → skopiuj Service ID → wklej do EMAILJS_SERVICE_ID poniżej
      b) "Email Templates" → stwórz DWIE szablony:

         ── Szablon 1: powiadomienie do CIEBIE ──────────────────
         Nazwa:   order_notification
         Subject: Nowe zamówienie od {{customer_name}}
         Body (przykład):
           Zamówienie od: {{customer_name}}
           E-mail: {{customer_email}}
           Telefon: {{customer_phone}}
           Poziom jakości: {{quality}}
           Modele: {{models}}
           Referencje: {{references}}
           Termin: {{deadline}}
         W polu "To email": TWÓJ ADRES MAILOWY (stały, nie zmienną)
         → skopiuj Template ID → wklej do EMAILJS_TEMPLATE_ORDER poniżej

         ── Szablon 2: potwierdzenie do KLIENTA ─────────────────
         Nazwa:   order_confirmation
         Subject: Potwierdzenie zamówienia — {{customer_name}}
         Body (przykład):
           Cześć {{customer_name}},
           Dziękuję za przesłanie zamówienia!
           Odezwę się z wyceną w ciągu 48 godzin.

           Podsumowanie zamówienia:
           Poziom jakości: {{quality}}
           Modele: {{models}}

           Pozdrawiam,
           NAZWA STUDIA
         W polu "To email": {{customer_email}}   ← to jest zmienna!
         → skopiuj Template ID → wklej do EMAILJS_TEMPLATE_CONFIRM poniżej

      c) Swoje konto → "Account" → skopiuj Public Key
         → wklej do EMAILJS_PUBLIC_KEY poniżej

   ─────────────────────────────────────────────────────────
*/

const EMAILJS_PUBLIC_KEY      = 'TWÓJ_PUBLIC_KEY';       // ← zamień
const EMAILJS_SERVICE_ID      = 'TWÓJ_SERVICE_ID';       // ← zamień
const EMAILJS_TEMPLATE_ORDER  = 'order_notification';    // ← zamień jeśli inna nazwa
const EMAILJS_TEMPLATE_CONFIRM= 'order_confirmation';    // ← zamień jeśli inna nazwa

/* ============================================================
   INICJALIZACJA EmailJS
   ============================================================ */
(function () {
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }
})();

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  I18N.init();

  const burger = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });

    // Zamknij menu po kliknięciu w link
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ============================================================
     FORMULARZ ZAMÓWIENIA
     ============================================================ */
  const form = document.getElementById('orderForm');
  if (!form) return;

  const submitBtn    = document.getElementById('submitBtn');
  const successBox   = document.getElementById('successBox');
  const globalError  = document.getElementById('globalError');
  const qualityError = document.getElementById('qualityError');

  /* ---- Multi-step state ---- */
  let currentStep = 1;
  const TOTAL_STEPS = 3;

  function goToStep (next, direction) {
    if (next < 1 || next > TOTAL_STEPS || next === currentStep) return;
    const dir = direction || (next > currentStep ? 'forward' : 'back');

    const outCard = document.getElementById('card-' + currentStep);
    const inCard  = document.getElementById('card-' + next);

    // Ukryj bieżącą kartę
    outCard.classList.add('form-card--hidden');
    outCard.classList.remove('slide-in-forward', 'slide-in-back');

    // Pokaż nową kartę z animacją
    inCard.classList.remove('form-card--hidden', 'slide-in-forward', 'slide-in-back');
    inCard.classList.add(dir === 'forward' ? 'slide-in-forward' : 'slide-in-back');

    currentStep = next;
    syncStepIndicators();

    // Przewiń do górnej krawędzi wskaźnika kroków
    document.querySelector('.form-steps').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function syncStepIndicators () {
    for (var i = 1; i <= TOTAL_STEPS; i++) {
      var el = document.getElementById('step-ind-' + i);
      if (!el) continue;
      el.classList.remove('active', 'done');
      if (i < currentStep)      el.classList.add('done');
      else if (i === currentStep) el.classList.add('active');
    }
  }

  // Inicjalizacja: krok 1 aktywny
  syncStepIndicators();

  /* ---- Podgląd jakości ---- */
  const qpImg         = document.getElementById('qpImg');
  const qpName        = document.getElementById('qpName');
  const qpDesc        = document.getElementById('qpDesc');
  const qpContent     = document.getElementById('qpContent');
  const qpPlaceholder = document.getElementById('qpPlaceholder');

  function showQualityPreview (radio) {
    const img  = radio.dataset.img;
    const desc = radio.dataset.desc;
    const name = radio.dataset.displayName || radio.value;

    if (qpContent.style.display !== 'none') {
      qpImg.classList.add('fading');
      setTimeout(function () {
        qpImg.src = img;
        qpName.textContent = name;
        qpDesc.textContent = desc;
        qpImg.classList.remove('fading');
      }, 200);
    } else {
      qpImg.src = img;
      qpName.textContent = name;
      qpDesc.textContent = desc;
      qpPlaceholder.style.display = 'none';
      qpContent.style.display     = 'block';
    }
  }

  /* ---- Krok 1: podgląd jakości + przycisk Dalej ---- */
  const qualityRadios = form.querySelectorAll('input[name="quality"]');
  qualityRadios.forEach(function (radio) {
    radio.addEventListener('change', function () {
      qualityError.style.display = 'none';
      showQualityPreview(radio);
    });
  });

  document.getElementById('nextTo2').addEventListener('click', function () {
    if (!form.querySelector('input[name="quality"]:checked')) {
      qualityError.style.display = 'block';
      return;
    }
    goToStep(2, 'forward');
  });

  /* ---- Krok 2: walidacja i przejście ---- */
  function validateEmail (val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }
  function markField (input, valid) {
    input.classList.toggle('invalid', !valid);
  }

  function isStep2Valid () {
    var fn = document.getElementById('firstName').value.trim();
    var ln = document.getElementById('lastName').value.trim();
    var em = document.getElementById('email').value.trim();
    return fn && ln && validateEmail(em);
  }

  function validateStep2 () {
    var ok = true;
    var fn = document.getElementById('firstName');
    var ln = document.getElementById('lastName');
    var em = document.getElementById('email');
    markField(fn, fn.value.trim()); if (!fn.value.trim()) ok = false;
    markField(ln, ln.value.trim()); if (!ln.value.trim()) ok = false;
    markField(em, validateEmail(em.value.trim())); if (!validateEmail(em.value.trim())) ok = false;
    return ok;
  }

  // Auto-przejście gdy wszystkie wymagane pola wypełnione poprawnie
  ['firstName', 'lastName', 'email'].forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', function () {
      if (currentStep === 2 && isStep2Valid()) {
        setTimeout(function () { goToStep(3, 'forward'); }, 350);
      }
    });
  });

  // Przycisk "Dalej" na kroku 2
  document.getElementById('nextTo3').addEventListener('click', function () {
    if (validateStep2()) {
      goToStep(3, 'forward');
    } else {
      var first = form.querySelector('#card-2 .invalid');
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  // Przyciski "Wstecz"
  document.getElementById('backTo1').addEventListener('click', function () {
    goToStep(1, 'back');
  });
  document.getElementById('backTo2').addEventListener('click', function () {
    goToStep(2, 'back');
  });

  // Usuń .invalid przy edycji
  form.querySelectorAll('input, textarea').forEach(function (el) {
    el.addEventListener('input', function () { el.classList.remove('invalid'); });
  });

  /* ---- Flatpickr — wybór terminu ---- */
  I18N.reinitFlatpickr();

  /* ---- Krok 3: wysyłka ---- */
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    globalError.classList.remove('show');

    // Walidacja modeli
    var md = document.getElementById('models');
    markField(md, md.value.trim());
    if (!md.value.trim()) {
      md.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    var qualityVal  = form.querySelector('input[name="quality"]:checked').value;
    var firstName   = document.getElementById('firstName').value.trim();
    var lastName    = document.getElementById('lastName').value.trim();
    var emailVal    = document.getElementById('email').value.trim();
    var phoneVal    = document.getElementById('phone').value.trim() || '—';
    var modelsVal   = md.value.trim();
    var refsVal     = document.getElementById('references').value.trim() || '—';
    var deadlineVal = document.getElementById('deadline').value.trim() || '—';

    var templateParams = {
      customer_name:  firstName + ' ' + lastName,
      customer_email: emailVal,
      customer_phone: phoneVal,
      quality:        qualityVal,
      models:         modelsVal,
      references:     refsVal,
      deadline:       deadlineVal,
    };

    submitBtn.disabled = true;
    submitBtn.textContent = I18N.t('btn.submitting');

    try {
      if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS nie jest załadowane.');
      }
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ORDER,   templateParams);
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CONFIRM, templateParams);

      form.style.display = 'none';
      successBox.classList.add('show');
      successBox.scrollIntoView({ behavior: 'smooth', block: 'start' });

    } catch (err) {
      console.error('EmailJS error:', err);
      globalError.classList.add('show');
      globalError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      submitBtn.disabled = false;
      submitBtn.textContent = I18N.t('btn.submit');
    }
  });
});
