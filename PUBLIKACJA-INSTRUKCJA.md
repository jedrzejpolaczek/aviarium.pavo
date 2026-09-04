# Jak opublikować stronę (jedrzejpolaczek.dev / .pl itp.)

## 1. Kup domenę
1. Wejdź na home.pl (albo OVH, nazwa.pl — porównaj ceny, .pl to zwykle 20-40 zł/rok, .dev bywa droższy).
2. Wyszukaj wolną domenę, np. `jedrzejpolaczek.pl`.
3. Kup na min. 1 rok. Włącz auto-odnawianie, żeby nie stracić domeny.
4. Włącz prywatność WHOIS (ukrycie danych właściciela), jeśli dostępne bezpłatnie.

## 2. Wybierz hosting (rekomendacja: Vercel lub Cloudflare Pages — darmowe, szybsze i prostsze niż hosting z home.pl)
Strona jest jednym statycznym plikiem HTML — nie potrzebuje serwera z bazą danych czy PHP. Hosting z home.pl (Apache/shared hosting) też zadziała, ale wymaga więcej ręcznej pracy (patrz opcja B).

### Opcja A — Vercel (polecane, najprościej)
1. Załóż darmowe konto na vercel.com (możesz się zalogować przez GitHub).
2. Kliknij "Add New Project" → "Import" swoje repozytorium GitHub (`aviarium.pavo`).
3. Vercel wykryje statyczny projekt — w ustawieniach build ustaw:
   - Framework Preset: `Other`
   - Build Command: (puste)
   - Output Directory: `.` (katalog główny)
4. Deploy. Dostaniesz adres typu `aviarium-pavo.vercel.app` — sprawdź, że strona działa.
5. W ustawieniach projektu → "Domains" → dodaj swoją kupioną domenę (np. `jedrzejpolaczek.pl`).
6. Vercel poda Ci wpisy DNS do ustawienia (rekordy A/CNAME).

### Opcja B — hosting z home.pl (klasyczny shared hosting)
1. Kup pakiet hostingowy w home.pl (najtańszy statyczny/PHP wystarczy).
2. Zaloguj się do panelu klienta home.pl → skonfiguruj domenę tak, by wskazywała na ten hosting (jeśli kupujesz domenę i hosting w tym samym miejscu, zwykle łączy się to automatycznie).
3. Wejdź do panelu hostingu (np. DirectAdmin/cPanel) → File Manager → katalog `public_html` (lub `domains/twojadomena.pl/public_html`).
4. Wgraj tam plik `Portfolio.dc.html`, zmieniając jego nazwę na `index.html`, oraz foldery `explainers/`, `image-slot.js`, `support.js` — zachowując tę samą strukturę katalogów co w ZIP-ie.
5. Sprawdź w przeglądarce `https://twojadomena.pl` — strona powinna się wczytać.
6. W panelu hostingu włącz darmowy certyfikat SSL (Let's Encrypt) — zwykle jedno kliknięcie w sekcji "SSL".

## 3. Podłącz domenę do hostingu (jeśli kupione w różnych miejscach)
1. W panelu domeny (home.pl → "Zarządzaj domeną" → "Serwery DNS" lub "Rekordy DNS") ustaw rekordy podane przez hosting (z kroku 2A lub 2B).
2. Typowo: rekord `A` wskazujący na adres IP hostingu, lub `CNAME` wskazujący na adres dostawcy (np. Vercel).
3. Propagacja DNS trwa od kilku minut do 24h.

## 4. Po publikacji
1. Sprawdź stronę na telefonie i desktopie.
2. Sprawdź certyfikat SSL — w adresie powinna być kłódka/`https://`.
3. Zgłoś stronę do Google Search Console (opcjonalnie, dla SEO): search.google.com/search-console.

## 5. Aktualizacje w przyszłości
- Jeśli hosting to Vercel: wystarczy zrobić `git push` do repo — strona zaktualizuje się automatycznie.
- Jeśli hosting to home.pl (shared): po każdej zmianie trzeba ręcznie wgrać zaktualizowane pliki przez File Manager/FTP.

## Pliki w tym ZIP
- `Portfolio.dc.html` — cała strona (zmień nazwę na `index.html` przy wgrywaniu na klasyczny hosting).
- `explainers/` — pełne przewodniki po algorytmach (P3, TPE, NSGA-Net itd.), linkowane ze strony głównej.
- `image-slot.js`, `support.js` — pliki wymagane do działania strony, muszą zostać w tej samej strukturze folderów.
- `github.md` — notatka o powiązanym repozytorium.
