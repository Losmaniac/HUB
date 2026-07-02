# Michelin Academy · Inter Cars

E-learningová platforma pro prodejce **Inter Cars**: vše, co potřebují znát pro prodej
osobních pneumatik **Michelin** — značka, technika, portfolio, prodejní dovednosti
a konkurenční pozicování. První trh: **Česká republika**, architektura připravená
na rozšíření do dalších zemí.

## Co platforma umí (v1)

- **5 školicích modulů** (Proč Michelin · Základy pneumatik · Portfolio ·
  Prodejní dovednosti · Konkurence a pozicování), každý s lekcemi a kvízem
- **Kvízy s okamžitou zpětnou vazbou** a vysvětlením správné odpovědi
- **Závěrečná zkouška** (náhodný výběr otázek napříč moduly, práh 80 %),
  odemyká se po splnění všech modulových kvízů
- **Tisknutelný certifikát** se jménem, datem a výsledkem
- **Slovníček pojmů** s vyhledáváním
- **Sledování pokroku** — ukládá se v prohlížeči (localStorage), bez serveru
- **Vícetržní architektura** — přepínač trhů se objeví automaticky, jakmile
  je zaregistrován druhý trh

## Spuštění

Aplikace je čistě statická — žádný build, žádné závislosti, žádný server s databází.

```bash
# lokálně (kterýkoli statický server)
cd michelin-academy
python3 -m http.server 8000
# → http://localhost:8000
```

Funguje i po pouhém otevření `index.html` v prohlížeči a na jakémkoli statickém
hostingu (GitHub Pages, Netlify, firemní intranet…). Nasazení = nakopírování složky.

## Architektura

```
michelin-academy/
├── index.html                  ← shell aplikace + registrace obsahu trhů
├── assets/
│   ├── app.js                  ← jádro: router, renderer lekcí, kvízový engine,
│   │                             pokrok, certifikát (nezávislé na trhu/jazyku)
│   └── styles.css              ← design systém (Michelin blue & yellow)
└── content/
    ├── _template/              ← šablona pro nový trh (návod uvnitř)
    └── cz/                     ← obsahový balíček: Česká republika
        ├── market.js           ← metadata trhu + všechny UI texty (čeština)
        ├── glossary.js         ← slovníček pojmů
        └── modules/
            ├── 01-znacka.js    ← Proč Michelin
            ├── 02-zaklady.js   ← Základy pneumatik
            ├── 03-portfolio.js ← Portfolio Michelin
            ├── 04-prodej.js    ← Prodejní dovednosti
            └── 05-konkurence.js← Konkurence a pozicování
```

**Klíčový princip: aplikace ↔ obsah jsou oddělené.** Jádro (`assets/`) neobsahuje
jediný český text ani produktový údaj. Veškerý obsah, včetně textů tlačítek, žije
v obsahových balíčcích (`content/<trh>/`), které se registrují přes jednoduché API:

```js
window.MichelinAcademy.registerMarket({ code, name, locale, exam, ui });
window.MichelinAcademy.registerModule("cz", { id, title, lessons, quiz, … });
window.MichelinAcademy.registerGlossary("cz", [ { term, def }, … ]);
```

### Úprava obsahu (pro marketing — bez vývojáře)

Obsah jsou čitelné soubory v `content/cz/`. Lekce se skládají z bloků:

| Blok | Použití |
|---|---|
| `h`, `p`, `list` | nadpis, odstavec, odrážky (`**tučně**` je podporováno) |
| `keypoints` | zvýrazněný box „Co si odnést“ |
| `table` | srovnávací tabulka (`headers` + `rows`) |
| `tip` | žlutý box „Tip pro praxi“ |
| `warning` | červené upozornění |
| `dialog` | modelový rozhovor zákazník ↔ prodejce |

Otázky kvízu: `{ q, options, correct: [indexy od 0], multi?, explanation }`.
Otázka s `multi: true` má více správných odpovědí.

### Přidání nového trhu (např. Polsko)

1. Zkopírujte `content/_template/` → `content/pl/` a postupujte podle návodu uvnitř
2. Přeložte UI texty a adaptujte obsah (legislativa, ceny a dostupnost produktů
   jsou tržně specifické!)
3. Přidejte `<script>` tagy nového trhu do `index.html`

Přepínač trhů se v hlavičce objeví automaticky; každý trh má oddělený pokrok uživatele.

## ⚠️ Validace obsahu před spuštěním

Vzorový obsah připravil AI asistent jako výchozí bod pro Michelin CZ Marketing.
Před nasazením pro prodejce **zvalidujte zejména**:

- názvy a generace produktů (Primacy, Pilot Sport, CrossClimate, Alpin) proti
  aktuálnímu portfoliu a ceníku Michelin CZ,
- ilustrační cenové příklady v modulu 1 a 4,
- legislativní údaje v modulu 2 (zimní pravidla ČR),
- soulad tvrzení s aktuálními marketingovými claimy Michelin (interní schválení).

## Roadmapa (návrh)

| Fáze | Rozšíření |
|---|---|
| v1 (tato verze) | statická aplikace, pokrok v prohlížeči, CZ trh |
| v1.1 | obsah validovaný marketingem, nasazení na hosting, pilotní pobočky |
| v2 | backend: přihlášení prodejců, centrální evidence pokroku a certifikátů, reporting pro management Inter Cars / Michelin |
| v2.x | další trhy (PL, SK, HU…), notifikace, sezónní kampaně, gamifikace (žebříčky poboček) |
| v3 | napojení na LMS/HR systémy, SSO, mobilní aplikace |

Statická v1 je záměrně nejjednodušší možný start: nulové provozní náklady, okamžité
nasazení a obsahový model, který beze změny přežije přechod na backend ve v2
(obsahové balíčky se pouze přesunou na server / do CMS).
