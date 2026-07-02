/* ============================================================
   Modul 4 — Prodejní dovednosti u pultu
   ============================================================ */

window.MichelinAcademy.registerModule("cz", {
  id: "prodej",
  order: 4,
  icon: "🤝",
  title: "Prodejní dovednosti",
  description: "Zjišťování potřeb, práce s cenovou námitkou a doplňkový prodej — praktické scénáře od pultu.",
  intro: "Technické znalosti prodávají jen tehdy, když je umíte použít v rozhovoru. Tento modul je čistá praxe: otázky, formulace a scénáře, které fungují.",

  lessons: [
    {
      id: "zjistovani-potreb",
      title: "Zjišťování potřeb: 5 otázek, které rozhodnou",
      minutes: 9,
      blocks: [
        { type: "p", text: "Nejčastější chyba: prodejce začne mluvit o produktu dřív, než ví, komu prodává. Kdo se ptá, ten vede rozhovor — a trefí nabídku napoprvé." },
        { type: "h", text: "Pět klíčových otázek" },
        { type: "list", items: [
          "**„Čím jezdíte?“** — vůz, motorizace, případně elektromobil/hybrid (nosnost, valivý odpor).",
          "**„Kolik ročně najedete a kudy?“** — město / dálnice / hory → sezónní vs. celoroční, důraz na životnost.",
          "**„Jak jezdíte?“** — klidně a úsporně / svižně → Primacy vs. Pilot Sport.",
          "**„Jak jste byl spokojený se stávajícími pneumatikami?“** — co mu vadilo (hluk, životnost, zima) je přesně to, co má nová sada vyřešit.",
          "**„Přezouváte dvakrát ročně, nebo byste to rád vyřešil jednou sadou?“** — otevírá CrossClimate a služby uskladnění."
        ] },
        { type: "dialog", lines: [
          { who: "customer", text: "Dobrý den, potřebuju pneumatiky 205/55 R16. Kolik stojí ty nejlevnější?" },
          { who: "seller", text: "Dobrý den, najdu vám nejlepší řešení. Jen dvě rychlé otázky — čím jezdíte a kolik toho ročně najedete?" },
          { who: "customer", text: "Octavia, asi 25 000 km ročně, hodně dálnice za prací." },
          { who: "seller", text: "Při takovém nájezdu se vám vyplatí životnost. Doporučím MICHELIN Primacy — vydrží výrazně déle než rozpočtové značky a brzdí spolehlivě i sjetá. Na kilometr vás vyjde srovnatelně s levnou pneumatikou, ale celou dobu jedete bezpečněji." }
        ] },
        { type: "keypoints", title: "Co si odnést", items: [
          "Nikdy nezačínejte cenou ani produktem — začněte otázkami.",
          "Odpovědi zákazníka = vaše prodejní argumenty (vysoký nájezd → životnost, EV → dojezd, rodina → bezpečnost).",
          "Otázka „S čím jste byl nespokojený?“ je nejkratší cesta k prémiovému prodeji."
        ] }
      ]
    },
    {
      id: "prace-s-cenou",
      title: "Prezentace hodnoty a cenová námitka",
      minutes: 10,
      blocks: [
        { type: "p", text: "„Je to drahé“ většinou neznamená „nemám peníze“, ale **„zatím nevidím důvod, proč zaplatit víc“**. Vaším úkolem je ten důvod ukázat — konkrétně a v korunách či metrech." },
        { type: "h", text: "Tři kroky práce s cenovou námitkou" },
        { type: "list", items: [
          "**1. Přijměte ji.** „Rozumím, rozdíl na účtence je znát.“ Nikdy se nehádejte.",
          "**2. Přerámujte na náklad na kilometr.** Delší životnost + nižší spotřeba = srovnatelná nebo nižší cena za kilometr.",
          "**3. Přidejte bezpečnost.** Metrů brzdné dráhy se týká rodina zákazníka — to není marketing, to je fyzika."
        ] },
        { type: "dialog", lines: [
          { who: "customer", text: "Tři tisíce za kus? Vedle mají o třetinu levnější." },
          { who: "seller", text: "Rozumím, na účtence je to rozdíl. Můžu vám to ukázat jinak? Kolik ročně najedete?" },
          { who: "customer", text: "Kolem 20 000 km." },
          { who: "seller", text: "Michelin vám při tomhle nájezdu typicky vydrží o sezóny déle než rozpočtová značka. Když si rozdíl rozpočítáte na kilometry, vyjde vás stejně — a k tomu máte kratší brzdnou dráhu za mokra i ve chvíli, kdy už je pneumatika sjetá. Za stejné peníze na kilometr jezdíte celou dobu na bezpečnějším." },
          { who: "customer", text: "Hm, takhle jsem o tom nepřemýšlel." },
          { who: "seller", text: "A ještě jedna věc — díky nižšímu valivému odporu ušetříte i na palivu. Chcete, abych vám spočítal obě varianty?" }
        ] },
        { type: "keypoints", title: "Argumenty, které mají čísla", items: [
          "**Životnost:** více kilometrů ze sady = nižší cena za kilometr.",
          "**Brzdná dráha za mokra:** rozdíl mezi třídami EU štítku může být mnoho metrů — ukažte štítky vedle sebe.",
          "**Spotřeba:** nižší valivý odpor = úspora na palivu po celou životnost.",
          "**Výkon při opotřebení:** Michelin je navržen tak, aby brzdil skvěle i sjetý — levná pneumatika často ne."
        ] },
        { type: "warning", text: "Nikdy nepomlouvejte konkrétní levnou značku a neslibujte přesné nájezdy. Argumentujte principy a oficiálními údaji (EU štítek), zůstanete důvěryhodní." },
        { type: "tip", text: "Slovo „investice“ funguje lépe než „cena“. A nabídka „spočítám vám obě varianty“ ukazuje férovost — zákazník cítí, že mu pomáháte vybrat, ne že mu prodáváte." }
      ]
    },
    {
      id: "doplnkovy-prodej",
      title: "Doplňkový prodej a dlouhodobý vztah",
      minutes: 8,
      blocks: [
        { type: "p", text: "Prodej pneumatik nekončí u pneumatik. Správně nabídnuté služby zvyšují hodnotu zakázky, bezpečnost zákazníka — a vytvářejí důvod k návratu." },
        { type: "h", text: "Co nabídnout ke každé sadě" },
        { type: "list", items: [
          "**4 kusy místo 2** — vysvětlete rozdíl přilnavosti mezi nápravami; pokud jen 2, nové vždy dozadu.",
          "**Geometrie (seřízení sbíhavosti)** — špatná geometrie sežere i tu nejlepší pneumatiku za pár tisíc km. Při novém obutí ideální okamžik.",
          "**Vyvážení a nové ventilky / servis TPMS** — standard kvalitní montáže.",
          "**Uskladnění pneumatik** — pohodlí pro zákazníka a jistý kontakt dvakrát ročně.",
          "**Kontrola dorazů, tlaku rezervy, stěračů** — drobnosti, které budují dojem péče."
        ] },
        { type: "dialog", lines: [
          { who: "customer", text: "Tak tedy ty Michelinky. Stačí vyměnit ty dvě přední, ne?" },
          { who: "seller", text: "Můžeme vyměnit dvě — v tom případě nové patří na zadní nápravu kvůli stabilitě. Ale mrknu na hloubku vzadu… 3 milimetry. Do zimy je stejně budete měnit. Když vezmete rovnou čtyři, auto bude brzdit rovnoměrně a příště řešíte jen přezutí. Chcete k tomu rovnou pohlídat geometrii, ať nové gumy sjíždíte rovně?" }
        ] },
        { type: "h", text: "Vytvořte důvod k návratu" },
        { type: "list", items: [
          "Zapište hloubku dezénu a doporučte termín další kontroly.",
          "Připomeňte sezónní přezutí (SMS/e-mail podle praxe pobočky).",
          "Při přezutí vždy zkontrolujte i druhou sadu — odhalíte příští prodej s předstihem."
        ] },
        { type: "keypoints", title: "Co si odnést", items: [
          "Ke každé sadě patří nabídka geometrie, uskladnění a kompletní montáže.",
          "Doplňkové služby nejsou „vnucování“ — chrání zákazníkovu investici do pneumatik.",
          "Spokojený zákazník s uskladněním u vás = zákazník, který se vrátí a koupí znovu."
        ] }
      ]
    }
  ],

  quiz: {
    passPct: 70,
    questions: [
      {
        q: "Zákazník hned na začátku žádá „ty nejlevnější“. Jaká je nejlepší první reakce?",
        options: [
          "Vyhledat nejlevnější položku v systému",
          "Položit zjišťovací otázky (čím jezdí, kolik najede) a teprve pak doporučit",
          "Nabídnout rovnou nejdražší produkt",
          "Říct, že levné pneumatiky neprodáváte"
        ],
        correct: [1],
        explanation: "Kdo se ptá, vede rozhovor. Odpovědi zákazníka vám dají argumenty pro hodnotovou nabídku — často zjistíte, že „nejlevnější“ ve skutečnosti nechce."
      },
      {
        q: "Co obvykle skutečně znamená námitka „to je drahé“?",
        options: [
          "Zákazník nemá peníze a je zbytečné pokračovat",
          "Zákazník zatím nevidí důvod, proč zaplatit víc",
          "Zákazník chce slevu 50 %",
          "Zákazník si chce koupit jinou velikost"
        ],
        correct: [1],
        explanation: "Cenová námitka je nejčastěji žádost o zdůvodnění hodnoty. Ukažte náklad na kilometr, bezpečnost a úsporu paliva."
      },
      {
        q: "Jaké jsou tři kroky práce s cenovou námitkou v pořadí?",
        options: [
          "Sleva → dárek → poděkování",
          "Přijmout námitku → přerámovat na náklad na kilometr → přidat bezpečnostní argument",
          "Ignorovat → zopakovat cenu → ukončit rozhovor",
          "Nabídnout konkurenci → porovnat → prodat nejlevnější"
        ],
        correct: [1],
        explanation: "Přijetí („rozumím“), přerámování (cena za kilometr díky životnosti) a bezpečnost (brzdná dráha) — v tomto pořadí."
      },
      {
        q: "Které doplňkové služby dává smysl nabídnout k nové sadě pneumatik? Vyberte všechny správné odpovědi.",
        options: [
          "Seřízení geometrie",
          "Uskladnění druhé sady",
          "Vyvážení a servis ventilků/TPMS",
          "Přelakování brzdových třmenů"
        ],
        correct: [0, 1, 2],
        multi: true,
        explanation: "Geometrie chrání investici do pneumatik, uskladnění buduje vztah, vyvážení a ventilky jsou standard poctivé montáže."
      },
      {
        q: "Proč je seřízení geometrie dobrou nabídkou právě při prodeji nových pneumatik?",
        options: [
          "Protože je to nejdražší služba",
          "Špatná geometrie dokáže novou sadu nesprávně a rychle sjet — seřízení chrání zákazníkovu investici",
          "Bez geometrie nelze pneumatiky namontovat",
          "Geometrie zvyšuje maximální rychlost vozu"
        ],
        correct: [1],
        explanation: "Nesprávná sbíhavost sjede i prémiovou pneumatiku za pár tisíc kilometrů. Nabídka geometrie je v zájmu zákazníka — tak ji i formulujte."
      },
      {
        q: "Jak správně reagovat, když si zákazník chce koupit jen dvě nové pneumatiky?",
        options: [
          "Odmítnout prodej dvou kusů",
          "Namontovat nové dopředu, protože přední kola řídí",
          "Vysvětlit, že nové patří dozadu, zkontrolovat dezén druhé nápravy a případně nabídnout kompletní sadu",
          "Prodat dvě bez dalších informací"
        ],
        correct: [2],
        explanation: "Nové pneumatiky patří na zadní nápravu. Kontrola druhé nápravy často odhalí, že se vyplatí vyměnit rovnou čtyři — a je to bezpečnostně korektní doporučení."
      },
      {
        q: "Proč je uskladnění pneumatik strategická služba, nejen doplňkový příjem?",
        options: [
          "Zabírá místo ve skladu",
          "Zajišťuje, že se zákazník dvakrát ročně vrátí — vzniká vztah a příležitost k dalšímu prodeji",
          "Umožňuje pneumatiky dále prodat",
          "Není strategická, je jen povinná ze zákona"
        ],
        correct: [1],
        explanation: "Uskladněná sada = jistá návštěva při každém přezutí. Pravidelný kontakt je nejlevnější marketing pobočky."
      }
    ]
  }
});
