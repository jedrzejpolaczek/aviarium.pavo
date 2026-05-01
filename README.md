# aviarium.pavo

A static website template for a miniature painting commission studio. Built in Polish, ready to customise with your own branding, photos, and EmailJS credentials.

## Pages

| File | Route | Description |
|---|---|---|
| `index.html` | `/` | Landing page — hero, "how it works" (4 steps), quality-level preview cards |
| `galery.html` | `/galery.html` | Gallery & about — painter bio, 9-item photo grid |
| `order.html` | `/order.html` | Order form — 3-step wizard with EmailJS submission |

## Tech stack

- Vanilla HTML / CSS / JavaScript — no build step, no framework
- **Google Fonts** — Cinzel (headings) + Open Sans (body)
- **EmailJS** (`@emailjs/browser@4`) — sends two emails on form submission: an order notification to the studio owner and a confirmation to the customer
- **Flatpickr** — Polish-locale date picker for the preferred-deadline field
- Dark theme with gold (`#c9a84c`) accents

## Order form flow

The form on `order.html` is a 3-step wizard:

1. **Quality** — radio picker with live image/description preview (Podstawowy / Standardowy / Premium / Display)
2. **Contact** — first name, last name, e-mail (required), phone (optional); auto-advances to step 3 when all required fields are valid on blur
3. **Models** — textarea for model description (required), references/inspiration (optional), preferred deadline via Flatpickr (optional)

On submit, two `emailjs.send()` calls are made: `order_notification` (to the studio owner) and `order_confirmation` (to the customer). A success box is shown on both calls completing; a global error alert is shown on failure.

## Setup

### 1. EmailJS

1. Create a free account at [emailjs.com](https://www.emailjs.com/) (200 emails/month on the free plan).
2. Add an email service ("Email Services") and copy the **Service ID**.
3. Create two templates ("Email Templates"):
   - `order_notification` — recipient is your fixed address; available variables: `customer_name`, `customer_email`, `customer_phone`, `quality`, `models`, `references`, `deadline`
   - `order_confirmation` — recipient is `{{customer_email}}`; same variables available
4. Copy your **Public Key** from Account → General.
5. Open `js/main.js` and fill in the four constants at the top:

```js
const EMAILJS_PUBLIC_KEY      = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID      = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ORDER  = 'order_notification';   // or your template ID
const EMAILJS_TEMPLATE_CONFIRM= 'order_confirmation';   // or your template ID
```

### 2. Branding

Replace every occurrence of `NAZWA STUDIA` (studio name) and `TWOJE IMIĘ` (painter name) across all three HTML files.

Update the fallback email address in the global error alert in `order.html`:

```html
<a href="mailto:TWÓJ@EMAIL.PL" ...>TWÓJ@EMAIL.PL</a>
```

### 3. Images

Replace the `placehold.co` URLs with your own photos:

- Quality-level examples — `<img>` tags in `index.html` (quality cards) and the `data-img` attributes on radio inputs in `order.html`
- Gallery items — `<img>` tags in the `.gallery-grid` in `galery.html`
- Painter portrait — `<img class="about__img">` in `galery.html`

## Project structure

```
aviarium.pavo/
├── index.html
├── galery.html
├── order.html
├── css/
│   └── style.css
└── js/
    └── main.js
```

## License

See [LICENSE](LICENSE).
