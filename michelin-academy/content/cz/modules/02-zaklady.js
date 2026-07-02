/* ============================================================
   Modul 2 — Základy pneumatik (technické minimum prodejce)
   ============================================================ */

window.MichelinAcademy.registerModule("cz", {
  id: "zaklady",
  order: 2,
  icon: "🛞",
  title: "Základy pneumatik",
  description: "Značení na bočnici, evropský štítek a česká legislativa — technické minimum, které musí prodejce znát.",
  intro: "Zákazník od vás čeká jistotu. Kdo umí přečíst bočnici pneumatiky a vysvětlit EU štítek, působí jako profesionál a snadněji obhájí doporučení.",

  lessons: [
    {
      id: "znaceni-bocnice",
      title: "Jak číst bočnici pneumatiky",
      minutes: 10,
      blocks: [
        { type: "p", text: "Všechny podstatné údaje o pneumatice najdete přímo na její bočnici. Vzorové značení: **205/55 R16 91V**." },
        { type: "table",
          headers: ["Údaj", "Význam", "Příklad"],
          rows: [
            ["205", "Šířka pneumatiky v milimetrech", "205 mm"],
            ["55", "Profil — výška bočnice v % šířky", "55 % z 205 mm ≈ 113 mm"],
            ["R", "Radiální konstrukce (dnešní standard)", "R"],
            ["16", "Průměr ráfku v palcích", "16″"],
            ["91", "Index nosnosti — max. zatížení jedné pneumatiky", "91 = 615 kg"],
            ["V", "Index rychlosti — max. povolená rychlost", "V = 240 km/h"]
          ]
        },
        { type: "h", text: "Nejčastější indexy rychlosti" },
        { type: "table",
          headers: ["Symbol", "Max. rychlost", "Typické použití"],
          rows: [
            ["T", "190 km/h", "menší vozy, zimní pneumatiky"],
            ["H", "210 km/h", "střední třída, zimní i letní"],
            ["V", "240 km/h", "střední a vyšší třída, letní"],
            ["W", "270 km/h", "výkonné vozy"],
            ["Y", "300 km/h", "sportovní vozy"]
          ]
        },
        { type: "warning", text: "Index nosnosti a rychlosti nesmí být **nižší**, než předepisuje výrobce vozidla (údaj v technickém průkazu, na štítku ve dveřích nebo víčku nádrže). U zimních pneumatik je povolen nižší rychlostní index, řidič ale musí mít v zorném poli nálepku s omezením rychlosti." },
        { type: "h", text: "Další značení, na které se zákazníci ptají" },
        { type: "list", items: [
          "**DOT / datum výroby** — čtyřčíslí na konci DOT kódu: „3525“ = 35. týden roku 2025.",
          "**M+S** — označení pro bláto a sníh; samodeklarace výrobce, bez garantovaného testu.",
          "**3PMSF (sněhová vločka v hoře)** — certifikovaný zimní výkon ověřený standardizovaným testem. Skutečná záruka zimních vlastností.",
          "**XL** — zesílená konstrukce pro vyšší nosnost (těžší vozy, SUV, EV).",
          "**OE homologace** — pneumatika vyvinutá pro konkrétní automobilku: * (BMW), MO (Mercedes), AO (Audi), N0–N4 (Porsche), VOL (Volvo), T0/T1 (Tesla)…",
          "**ZP** — run-flat (dojezdová pneumatika) v označení Michelin: Zero Pressure.",
          "**Acoustic / MICHELIN Acoustic** — pěnová vložka snižující hluk v kabině, častá u OE pro prémiové a elektrické vozy."
        ] },
        { type: "tip", text: "OE homologace je skvělý prodejní argument u prémiových vozů: „Tuhle pneumatiku vyvíjel Michelin přímo s BMW pro vaše auto — poznáte to podle hvězdičky na bočnici.“" }
      ]
    },
    {
      id: "eu-stitek",
      title: "Evropský štítek pneumatik",
      minutes: 8,
      blocks: [
        { type: "p", text: "Od května 2021 platí nový EU štítek (nařízení 2020/740). Je povinný pro všechny nové pneumatiky a je to nejrychlejší nástroj, jak zákazníkovi **porovnat nabídky černé na bílém**." },
        { type: "table",
          headers: ["Prvek štítku", "Co říká", "Stupnice"],
          rows: [
            ["Palivová účinnost", "Valivý odpor → spotřeba paliva/energie", "A (nejlepší) až E"],
            ["Přilnavost za mokra", "Brzdná dráha na mokré vozovce", "A (nejlepší) až E"],
            ["Vnější hluk", "Hlučnost odvalování v dB", "třídy A–C + hodnota v dB"],
            ["Piktogram 3PMSF", "Certifikovaný výkon na sněhu", "je/není"],
            ["Piktogram ledu", "Přilnavost na ledu (severské zimní)", "je/není"],
            ["QR kód", "Odkaz do evropské databáze EPREL", "detailní parametry"]
          ]
        },
        { type: "keypoints", title: "Jak štítek prodává", items: [
          "Rozdíl mezi třídou A a E v přilnavosti za mokra může znamenat **až 18 metrů brzdné dráhy** ze 100 km/h?! To jsou čtyři délky auta.",
          "Rozdíl mezi A a E v palivové účinnosti = zhruba 0,5 l/100 km — za životnost sady tisíce korun.",
          "Štítek je oficiální a jednotný — ideální pro férové srovnání s levnější alternativou."
        ] },
        { type: "warning", text: "Štítek neměří všechno! Neukazuje životnost, chování na suchu, aquaplaning ani stabilitu — právě v těchto disciplínách se prémiové pneumatiky odlišují nejvíc. Štítek je začátek srovnání, ne jeho konec." },
        { type: "tip", text: "Mějte u pultu vytištěné štítky nabízených pneumatik vedle sebe. Zákazník uvidí rozdíl na papíře — a vy doplníte, co štítek neukazuje: životnost a výkon při opotřebení." }
      ]
    },
    {
      id: "legislativa-cr",
      title: "Legislativa a bezpečnost v ČR",
      minutes: 9,
      blocks: [
        { type: "h", text: "Zimní pravidla v České republice" },
        { type: "list", items: [
          "**Období: 1. listopadu – 31. března** — zimní pneumatiky jsou povinné, pokud je na silnici souvislá vrstva sněhu, led či námraza, **nebo** lze takové podmínky vzhledem k teplotě (pod 4 °C) očekávat.",
          "Za zimní pneumatiku se považuje pneumatika s označením **M+S** (3PMSF podmínku splňuje také).",
          "**Minimální hloubka dezénu zimních pneumatik: 4 mm** (u vozidel do 3,5 t) — na všech kolech.",
          "Značka **„Zimní výbava“ (C 15a)** přikazuje zimní pneumatiky bez ohledu na aktuální počasí."
        ] },
        { type: "h", text: "Celoroční minimum" },
        { type: "list", items: [
          "**Minimální zákonná hloubka dezénu: 1,6 mm** (letní provoz) — Michelin však připomíná: kontrolujte pravidelně a vyměňte, jakmile pneumatika ztrácí výkon nebo dosáhne ukazatelů opotřebení.",
          "**Stáří pneumatik** — po 5 letech doporučujte každoroční odbornou kontrolu; obecné doporučení výrobců je nepoužívat pneumatiky starší 10 let.",
          "**Tlak** — kontrola ideálně měsíčně a před dlouhou cestou; podhuštění zvyšuje spotřebu, ničí bočnice a prodlužuje brzdnou dráhu.",
          "**TPMS** — od roku 2014 povinný u nových vozů; po přezutí je třeba senzory zkontrolovat/spárovat.",
          "Nové (nebo méně sjeté) pneumatiky patří **na zadní nápravu** — stabilita vozu při smyku."
        ] },
        { type: "h", text: "Proč 4 mm dává smysl i u letních" },
        { type: "p", text: "Pod cca 3 mm výrazně roste riziko aquaplaningu a prodlužuje se brzdná dráha za mokra u většiny pneumatik. Síla Michelinu: díky konstrukci navržené pro výkon i při opotřebení si pneumatiky drží bezpečné chování déle — zákazník tak může dezén skutečně využít, ne jej předčasně vyhazovat." },
        { type: "keypoints", title: "Co si odnést", items: [
          "Zimní povinnost v ČR: 1. 11. – 31. 3. při zimních podmínkách, M+S, min. 4 mm.",
          "Letní zákonné minimum 1,6 mm; nové pneumatiky vždy na zadní nápravu.",
          "Kontrola tlaku a stáří pneumatik je bezpečnostní i prodejní příležitost (prohlídka = kontakt se zákazníkem)."
        ] },
        { type: "tip", text: "Při každém přezutí nabídněte zákazníkovi zápis hloubky dezénu a doporučení, kdy přijít příště. Vytváříte důvod k návratu — a příští prodej." }
      ]
    }
  ],

  quiz: {
    passPct: 70,
    questions: [
      {
        q: "Co znamená údaj „91“ ve značení 205/55 R16 91V?",
        options: [
          "Rok vývoje pneumatiky",
          "Index nosnosti (max. zatížení jedné pneumatiky, zde 615 kg)",
          "Maximální rychlost v km/h",
          "Šířku bočnice v milimetrech"
        ],
        correct: [1],
        explanation: "91 je index nosnosti — jedna pneumatika unese max. 615 kg. Index nesmí být nižší, než předepisuje výrobce vozu."
      },
      {
        q: "Jakou maximální rychlost povoluje index rychlosti „V“?",
        options: ["190 km/h", "210 km/h", "240 km/h", "270 km/h"],
        correct: [2],
        explanation: "V = 240 km/h. Pro srovnání: T = 190, H = 210, W = 270, Y = 300 km/h."
      },
      {
        q: "Jaký je rozdíl mezi značením M+S a symbolem 3PMSF (vločka v hoře)?",
        options: [
          "Žádný, jde o totéž",
          "M+S je samodeklarace výrobce, 3PMSF je certifikace ověřená standardizovaným testem na sněhu",
          "3PMSF platí jen pro letní pneumatiky",
          "M+S je přísnější norma než 3PMSF"
        ],
        correct: [1],
        explanation: "M+S si výrobce může uvést sám, 3PMSF vyžaduje složení oficiálního testu zimního výkonu. Pro skutečné zimní vlastnosti doporučujte 3PMSF."
      },
      {
        q: "Co znamená DOT kód končící „3525“?",
        options: [
          "Pneumatika vyrobená 25. 3. 2035",
          "Pneumatika vyrobená ve 35. týdnu roku 2025",
          "Sériové číslo formy",
          "Maximální tlak 3,5 baru"
        ],
        correct: [1],
        explanation: "Poslední čtyřčíslí DOT kódu = týden a rok výroby: 35. týden 2025."
      },
      {
        q: "Které údaje najdete na aktuálním EU štítku pneumatik? Vyberte všechny správné odpovědi.",
        options: [
          "Palivovou účinnost (A–E)",
          "Přilnavost za mokra (A–E)",
          "Očekávanou životnost v kilometrech",
          "Vnější hluk a piktogramy zimního výkonu"
        ],
        correct: [0, 1, 3],
        multi: true,
        explanation: "Štítek ukazuje palivovou účinnost, mokrou přilnavost, hluk a případně 3PMSF/led. Životnost na štítku není — právě tam vyniká Michelin, a je třeba to říct."
      },
      {
        q: "Jaká je minimální hloubka dezénu zimních pneumatik v ČR (vozidla do 3,5 t)?",
        options: ["1,6 mm", "2 mm", "3 mm", "4 mm"],
        correct: [3],
        explanation: "V zimním období při zimních podmínkách zákon vyžaduje minimálně 4 mm na všech kolech. Letní zákonné minimum je 1,6 mm."
      },
      {
        q: "Kdy jsou v ČR povinné zimní pneumatiky?",
        options: [
          "Vždy od 1. 11. do 31. 3. bez výjimky",
          "Od 1. 11. do 31. 3., pokud jsou na silnici zimní podmínky nebo je lze očekávat (teplota pod 4 °C); vždy pod značkou „Zimní výbava“",
          "Pouze pokud sněží",
          "Od 1. 10. do 30. 4. za každého počasí"
        ],
        correct: [1],
        explanation: "Povinnost platí 1. 11. – 31. 3. při (očekávatelných) zimních podmínkách a vždy v úseku se značkou C 15a „Zimní výbava“."
      },
      {
        q: "Kam se při výměně pouze dvou pneumatik montují ty nové (méně sjeté)?",
        options: [
          "Na přední nápravu, protože řídí",
          "Na zadní nápravu kvůli stabilitě vozu",
          "Na náhonovou nápravu",
          "Je to jedno"
        ],
        correct: [1],
        explanation: "Nové pneumatiky patří na zadní nápravu — ztráta přilnavosti zadku vede ke smyku, který běžný řidič nezvládne. Doporučený standard výrobců pneumatik."
      }
    ]
  }
});
