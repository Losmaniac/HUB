/* ============================================================
   Modul 1 — Proč Michelin (značka a prémiová hodnota)
   ============================================================ */

window.MichelinAcademy.registerModule("cz", {
  id: "znacka",
  order: 1,
  icon: "🏆",
  title: "Proč Michelin",
  description: "Co stojí za prémiovou pozicí značky Michelin a jak z ní udělat prodejní argument.",
  intro: "Zákazník neplatí za jméno — platí za technologii, životnost a bezpečnost. V tomto modulu se naučíte, co za značkou Michelin skutečně stojí a jak to srozumitelně vysvětlit u pultu.",

  lessons: [
    {
      id: "pribeh-znacky",
      title: "Příběh značky a co znamená prémiovost",
      minutes: 8,
      blocks: [
        { type: "p", text: "Michelin je jedním z největších výrobců pneumatik na světě a značka s více než 130letou historií inovací. Pro vás jako prodejce je důležité jedno: **za prémiovou cenou stojí měřitelné rozdíly**, ne jen logo." },
        { type: "h", text: "Milníky, které se hodí znát" },
        { type: "list", items: [
          "**1889** — bratři André a Édouard Michelinovi zakládají firmu v Clermont-Ferrand ve Francii.",
          "**1891** — první rozebíratelná pneumatika pro jízdní kola: oprava defektu za minuty místo hodin.",
          "**1946** — Michelin patentuje **radiální pneumatiku** — dnes celosvětový standard konstrukce. Jedna z nejvýznamnějších inovací v historii oboru.",
          "**1992** — první „zelená“ pneumatika se sníženým valivým odporem (úspora paliva).",
          "Dnes — vývoj pneumatik pro elektromobily, letadla, Formuli 1 (MotoGP, Le Mans) i pro kosmické projekty."
        ] },
        { type: "p", text: "Motorsport není jen marketing: technologie odzkoušené v závodech (směsi, konstrukce, odvod tepla) se přenášejí do běžných pneumatik, například do řady Pilot Sport." },
        { type: "keypoints", title: "Co si odnést", items: [
          "Michelin = vynálezce radiální pneumatiky, technologický lídr oboru.",
          "Prémiovost znamená měřitelný rozdíl: delší životnost, kratší brzdná dráha, nižší spotřeba.",
          "Příběh značky pomáhá budovat důvěru — zákazník kupuje jistotu."
        ] },
        { type: "tip", text: "Neprodávejte historii, prodávejte důsledek: „Michelin vymyslel radiální pneumatiku, kterou dnes jezdí celý svět. Tahle technologická převaha je i v pneumatice, kterou vám nabízím.“" }
      ]
    },
    {
      id: "total-performance",
      title: "Výkon, který vydrží: dlouhá životnost bez kompromisů",
      minutes: 10,
      blocks: [
        { type: "p", text: "Základní filozofií značky je **kombinace výkonů bez kompromisů** (Michelin Total Performance): pneumatika nesmí být jen dobrá v jedné disciplíně na úkor ostatních. Brzdná dráha, životnost, spotřeba a komfort musí fungovat **současně**." },
        { type: "h", text: "Bezpečná i sjetá — nejsilnější argument" },
        { type: "p", text: "Michelin navrhuje pneumatiky tak, aby podávaly vysoký výkon **od prvního do posledního kilometru** — tedy i těsně nad zákonným limitem hloubky dezénu. Mnoho pneumatik je skvělých nových, ale výrazně ztrácí výkon opotřebením. Michelin cíleně konstruuje dezén a směs tak, aby si pneumatika držela přilnavost za mokra i sjetá." },
        { type: "keypoints", title: "Proč je to důležité pro zákazníka", items: [
          "Nemusí měnit pneumatiky „preventivně“ ve 3 mm — může bezpečně dojezdit dezén blíže k zákonnému limitu.",
          "Reálně tak získá **více kilometrů z každé sady** = nižší náklady na kilometr.",
          "Menší počet předčasně vyhozených pneumatik = i ekologický argument."
        ] },
        { type: "h", text: "Cena vs. náklad na kilometr" },
        { type: "p", text: "Prémiová pneumatika je dražší na účtence, ale často **levnější na kilometr**. Toto je klíčová změna perspektivy, kterou zákazníkovi nabídnete." },
        { type: "table",
          headers: ["", "Rozpočtová pneumatika", "Michelin"],
          rows: [
            ["Pořizovací cena (ilustrace)", "1 600 Kč/ks", "2 600 Kč/ks"],
            ["Očekávaný nájezd sady", "např. 30 000 km", "např. 50 000 km i více"],
            ["Náklad na 10 000 km (4 ks)", "≈ 2 133 Kč", "≈ 2 080 Kč"],
            ["Brzdné vlastnosti při opotřebení", "často výrazně klesají", "navrženo pro výkon i sjeté"]
          ]
        },
        { type: "warning", text: "Čísla v tabulce jsou ilustrační pro nácvik argumentace. Konkrétní nájezdy závisí na autě, stylu jízdy a podmínkách — nikdy zákazníkovi neslibujte konkrétní kilometry." },
        { type: "tip", text: "Formulace k pultu: „Rozdíl v ceně je asi tisícovka na kus. Ale Michelin vám vydrží výrazně déle a brzdí dobře i sjetý — na kilometr vás nakonec vyjde stejně nebo levněji, a celou dobu jedete na bezpečnějším.“" }
      ]
    },
    {
      id: "udrzitelnost",
      title: "Udržitelnost a technologie budoucnosti",
      minutes: 7,
      blocks: [
        { type: "p", text: "Udržitelnost je pro rostoucí část zákazníků (a firemních flotil) rozhodovací kritérium. Michelin zde má silný a doložitelný příběh." },
        { type: "list", items: [
          "**Nízký valivý odpor** — pneumatiky jako e.Primacy snižují spotřebu paliva/energie, což šetří peníze i emise.",
          "**Dlouhá životnost** — méně vyrobených a vyhozených pneumatik je nejpřímější ekologický přínos.",
          "**Cíl 100% udržitelných materiálů** v pneumatikách do roku 2050 (rostoucí podíl obnovitelných a recyklovaných materiálů už dnes).",
          "**Vhodnost pro elektromobily** — nízký valivý odpor (dojezd), únosnost pro těžší vozy a nízká hlučnost. Většina moderních pneumatik Michelin je plně kompatibilní s EV."
        ] },
        { type: "h", text: "EV je příležitost pro prodejce" },
        { type: "p", text: "Elektromobily jsou těžší, mají okamžitý točivý moment a tišší kabinu — pneumatiky se na nich **sjíždí rychleji** a jejich hluk je více slyšet. Právě zde dává prémiová pneumatika s dlouhou životností a nízkou hlučností největší smysl. Ptejte se zákazníků, čím jezdí!" },
        { type: "keypoints", title: "Co si odnést", items: [
          "Úspora paliva a dlouhá životnost = ekologie, která šetří peníze. Argument funguje u soukromníků i flotil.",
          "U EV doporučujte pneumatiky s nízkým valivým odporem a vysokou životností — např. e.Primacy nebo řadu Primacy.",
          "Udržitelnost podkládejte konkrétními fakty, ne frázemi."
        ] }
      ]
    }
  ],

  quiz: {
    passPct: 70,
    questions: [
      {
        q: "Kterou zásadní inovaci v konstrukci pneumatik Michelin patentoval v roce 1946?",
        options: [
          "Bezdušovou pneumatiku",
          "Radiální pneumatiku",
          "Zimní směs se silikou",
          "Dojezdovou pneumatiku run-flat"
        ],
        correct: [1],
        explanation: "Radiální konstrukce, patentovaná Michelinem v roce 1946, je dnes celosvětovým standardem u osobních pneumatik."
      },
      {
        q: "Co znamená filozofie „kombinace výkonů bez kompromisů“ (Total Performance)?",
        options: [
          "Pneumatika je nejlepší v jedné klíčové disciplíně",
          "Pneumatika kombinuje vysoký výkon ve více disciplínách současně (brzdění, životnost, spotřeba)",
          "Pneumatika je vyrobena pouze pro závodní použití",
          "Pneumatika má nejnižší možnou cenu"
        ],
        correct: [1],
        explanation: "Michelin odmítá zlepšovat jeden parametr na úkor jiných — bezpečnost, životnost i úspornost musí fungovat najednou."
      },
      {
        q: "V čem spočívá argument „bezpečná, i když sjetá“?",
        options: [
          "Pneumatiky Michelin se nemusí nikdy měnit",
          "Michelin doporučuje jezdit pod zákonným limitem dezénu",
          "Pneumatiky Michelin jsou navrženy tak, aby si držely výkon (zejména za mokra) i při opotřebení",
          "Sjeté pneumatiky brzdí vždy stejně jako nové"
        ],
        correct: [2],
        explanation: "Michelin konstruuje dezén a směs tak, aby pneumatika podávala vysoký výkon od prvního do posledního kilometru. Zákonný limit 1,6 mm samozřejmě platí vždy."
      },
      {
        q: "Zákazník říká: „Michelin je moc drahý.“ Jaká je nejlepší první reakce?",
        options: [
          "Nabídnout okamžitě levnější značku",
          "Přepočítat cenu na náklad na kilometr díky delší životnosti",
          "Říct, že kvalita se musí zaplatit",
          "Nabídnout slevu"
        ],
        correct: [1],
        explanation: "Změna perspektivy z pořizovací ceny na náklad na kilometr je nejsilnější odpověď: delší životnost a stabilní výkon dělají z Michelinu ekonomickou volbu."
      },
      {
        q: "Proč jsou pneumatiky s nízkým valivým odporem (např. e.Primacy) zvlášť vhodné pro elektromobily? Vyberte všechny správné odpovědi.",
        options: [
          "Prodlužují dojezd na jedno nabití",
          "Elektromobily jsou lehčí, takže pneumatiky méně trpí",
          "EV jsou těžší a mají vysoký točivý moment, takže je důležitá vysoká životnost",
          "V tiché kabině EV je více slyšet hluk pneumatik, takže se hodí tišší pneumatika"
        ],
        correct: [0, 2, 3],
        multi: true,
        explanation: "EV jsou těžší (ne lehčí!), mají okamžitý točivý moment a tichou kabinu — proto potřebují úsporné, odolné a tiché pneumatiky."
      },
      {
        q: "Jaký cíl si Michelin stanovil v oblasti udržitelných materiálů?",
        options: [
          "100% udržitelných materiálů v pneumatikách do roku 2050",
          "Ukončení výroby letních pneumatik",
          "Výrobu pneumatik pouze z přírodního kaučuku od roku 2030",
          "Recyklaci poloviny pneumatik do roku 2100"
        ],
        correct: [0],
        explanation: "Michelin veřejně cílí na 100 % udržitelných (obnovitelných či recyklovaných) materiálů do roku 2050 a podíl průběžně zvyšuje."
      },
      {
        q: "Který ekologický přínos pneumatik Michelin je pro zákazníka zároveň přímou finanční úsporou? Vyberte všechny správné odpovědi.",
        options: [
          "Nižší spotřeba paliva díky nízkému valivému odporu",
          "Delší životnost = méně nakoupených sad",
          "Barevné logo na bočnici",
          "Možnost dojezdit dezén bezpečně blíže k zákonnému limitu"
        ],
        correct: [0, 1, 3],
        multi: true,
        explanation: "Úspora paliva, delší životnost i plné využití dezénu šetří peníze zákazníka a zároveň snižují ekologickou stopu."
      }
    ]
  }
});
