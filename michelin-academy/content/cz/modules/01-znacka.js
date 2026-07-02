/* ============================================================
   Modul 1 — Proč Michelin (značka a prémiová hodnota)
   Zdroj: Technický katalog Michelin B2C 2024–2025 (CZ)
   a michelin.cz.
   ============================================================ */

window.MichelinAcademy.registerModule("cz", {
  id: "znacka",
  order: 1,
  icon: "🏆",
  title: "Proč Michelin",
  description: "Co stojí za prémiovou pozicí značky Michelin a jak z ní udělat prodejní argument podložený oficiálními daty.",
  intro: "Zákazník neplatí za jméno — platí za technologii, životnost a bezpečnost. V tomto modulu se naučíte, co za značkou Michelin skutečně stojí a jak to srozumitelně vysvětlit u pultu.",

  lessons: [
    {
      id: "pribeh-znacky",
      title: "Příběh značky a co znamená prémiovost",
      minutes: 8,
      blocks: [
        { type: "p", text: "Michelin je **specialista na pneumatiky od roku 1889** a jedna z nejcennějších značek oboru. Pro vás jako prodejce je důležité jedno: **za prémiovou cenou stojí měřitelné rozdíly**, ne jen logo." },
        { type: "h", text: "Milníky, které se hodí znát" },
        { type: "list", items: [
          "**1889** — bratři André a Édouard Michelinovi zakládají firmu v Clermont-Ferrand ve Francii.",
          "**1891** — první rozebíratelná pneumatika pro jízdní kola: oprava defektu za minuty místo hodin.",
          "**1946** — Michelin patentuje **radiální pneumatiku** — dnes celosvětový standard konstrukce a jedna z nejvýznamnějších inovací v historii oboru.",
          "**Před 30 lety** — Michelin jako první uvedl energeticky účinnou „zelenou“ pneumatiku se sníženým valivým odporem; od té doby valivý odpor svých pneumatik snížil na polovinu.",
          "Dnes — pneumatiky pro elektromobily, letadla i motorsport (Le Mans, MotoGP, rally) a průkopnické technologie jako MICHELIN Acoustic či Selfseal."
        ] },
        { type: "p", text: "Motorsport není jen marketing: směsi, konstrukce a odvod tepla odzkoušené v závodech se přenášejí do sériových pneumatik, například do řady Pilot Sport." },
        { type: "keypoints", title: "Co si odnést", items: [
          "Michelin = vynálezce radiální pneumatiky a technologický lídr oboru od roku 1889.",
          "Prémiovost znamená měřitelný rozdíl: delší životnost, kratší brzdná dráha, nižší spotřeba.",
          "Příběh značky pomáhá budovat důvěru — zákazník kupuje jistotu."
        ] },
        { type: "tip", text: "Neprodávejte historii, prodávejte důsledek: „Michelin vymyslel radiální pneumatiku, kterou dnes jezdí celý svět. Stejná technologická převaha je i v pneumatice, kterou vám nabízím.“" }
      ]
    },
    {
      id: "dlouhotrvajici-vykony",
      title: "Dlouhotrvající výkony: bezpečná od prvního do posledního kilometru",
      minutes: 10,
      blocks: [
        { type: "p", text: "Ústřední filozofie Michelin podle oficiálního katalogu: **vynikající životnost v kombinaci s vysokou úrovní výkonů od prvního do posledního kilometru** — tedy až do zákonem stanoveného limitu opotřebení. Pneumatika nesmí být dobrá jen nová; musí bezpečně brzdit i sjetá." },
        { type: "p", text: "Nezapomeňte na základní fakt z katalogu: pneumatiky jsou **jediná část vozidla v kontaktu s vozovkou** — a kontaktní plocha každé z nich má velikost lidské dlaně. Všechno, co auto umí, se přenáší přes čtyři dlaně." },
        { type: "h", text: "Co zákazníci skutečně chtějí (studie z katalogu)" },
        { type: "p", text: "Podle spotřebitelské studie CBM 2021 jsou nejdůležitějšími kritérii při výběru pneumatik **dlouhá životnost, spotřeba paliva, brzdný výkon na mokru** — a „všechny vlastnosti bez kompromisů, po dlouhou dobu“. Přesně na to je nabídka Michelin stavěná. A pozor: životnost na EU štítku nenajdete — vysvětlit ji je vaše role." },
        { type: "h", text: "Cena vs. náklad na kilometr" },
        { type: "p", text: "Prémiová pneumatika je dražší na účtence, ale často **levnější na kilometr**. Toto je klíčová změna perspektivy, kterou zákazníkovi nabídnete." },
        { type: "table",
          headers: ["", "Rozpočtová pneumatika", "Michelin"],
          rows: [
            ["Pořizovací cena (ilustrace)", "1 600 Kč/ks", "2 600 Kč/ks"],
            ["Očekávaný nájezd sady", "např. 30 000 km", "např. 50 000 km i více"],
            ["Náklad na 10 000 km (4 ks)", "≈ 2 133 Kč", "≈ 2 080 Kč"],
            ["Výkon při opotřebení", "často výrazně klesá", "navrženo pro výkon až do limitu 1,6 mm"]
          ]
        },
        { type: "warning", text: "Ceny a nájezdy v tabulce jsou ilustrační pro nácvik argumentace — závisí na autě, stylu jízdy a podmínkách. Nikdy zákazníkovi neslibujte konkrétní kilometry." },
        { type: "keypoints", title: "Řady navržené pro dlouhotrvající výkony (dle katalogu)", items: [
          "Celoroční: MICHELIN CrossClimate 2 a CrossClimate 2 SUV (dnes i nová generace CrossClimate 3).",
          "Letní: MICHELIN Primacy 4+ (nově Primacy 5), e.Primacy, Pilot Sport 5, Pilot Sport 4 SUV, Pilot Sport EV.",
          "Zimní: MICHELIN Alpin 6 (nově Alpin 7) a Pilot Alpin 5."
        ] },
        { type: "tip", text: "Formulace k pultu: „Rozdíl v ceně je asi tisícovka na kus. Ale Michelin je stavěný tak, aby brzdil skvěle i sjetý — takže dezén bezpečně dojezdíte, nebudete měnit předčasně a na kilometr vás vyjde stejně nebo levněji.“" }
      ]
    },
    {
      id: "udrzitelnost-ev",
      title: "Úspornost, udržitelnost a elektromobily",
      minutes: 8,
      blocks: [
        { type: "p", text: "Úspornost a udržitelnost jsou pro rostoucí část zákazníků (a firemních flotil) rozhodovací kritérium. Michelin zde má silný a doložitelný příběh — přímo z technického katalogu." },
        { type: "list", items: [
          "**Pneumatiky spotřebují v průměru 1 nádrž z 5** (20 % paliva jde na překonání valivého odporu). Nízký valivý odpor = přímá úspora.",
          "Michelin uvedl energeticky účinnou pneumatiku jako první — **před 30 lety** — a od té doby valivý odpor snížil **na polovinu**: e.Primacy a Pilot Sport EV mají valivý odpor pod 5 kg/t.",
          "**Dlouhá životnost** — méně vyrobených a vyhozených pneumatik je nejpřímější ekologický přínos.",
          "Cíl **100 % udržitelných materiálů** v pneumatikách do roku 2050; podíl obnovitelných a recyklovaných materiálů roste už dnes."
        ] },
        { type: "h", text: "Elektromobily: přesně to, v čem je Michelin silný" },
        { type: "p", text: "Katalog Michelin uvádí, že elektromobily opotřebovávají pneumatiky **v průměru o 20 % rychleji** než vozy se spalovacím motorem — jsou těžší (baterie) a mají okamžitý točivý moment. Co EV od pneumatiky potřebuje, je přesně profil Michelin:" },
        { type: "table",
          headers: ["Potřeba elektromobilu", "Odpověď Michelin"],
          rows: [
            ["Vyšší hmotnost", "vysoká nosnost — XL a nový standard HL"],
            ["Rychlejší opotřebení (+20 %)", "pověstná životnost Michelin"],
            ["Dojezd baterie", "nízký valivý odpor (e.Primacy, Pilot Sport EV < 5 kg/t)"],
            ["Tichá kabina", "MICHELIN Acoustic — až o 20 % nižší vnitřní hlučnost"]
          ]
        },
        { type: "keypoints", title: "Co si odnést", items: [
          "**Všechny pneumatiky MICHELIN jsou vhodné pro elektromobily** — oficiální stanovisko z katalogu; není nutná speciální „EV pneumatika“.",
          "U EV zákazníka zdůrazněte životnost, dojezd a tichost — a zkontrolujte, zda vůz nevyžaduje HL nosnost.",
          "Úspora paliva a dlouhá životnost = ekologie, která šetří peníze. Funguje u soukromníků i flotil."
        ] },
        { type: "tip", text: "Ptejte se: „Čím jezdíte — benzín, nafta, hybrid, elektro?“ U elektromobilu máte okamžitě tři argumenty: dojezd, tišší kabinu a pneumatiky, které vydrží jeho vyšší hmotnost i točivý moment." }
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
        q: "Co znamená filozofie „dlouhotrvajících výkonů“ Michelin?",
        options: [
          "Pneumatika je nejlepší v jedné klíčové disciplíně, dokud je nová",
          "Vynikající životnost v kombinaci s vysokou úrovní výkonů od prvního do posledního kilometru — až do zákonného limitu opotřebení",
          "Pneumatika je vyrobena pouze pro závodní použití",
          "Pneumatika má nejnižší možnou cenu"
        ],
        correct: [1],
        explanation: "Přesně tak to formuluje technický katalog Michelin: špičkový výkon nejen u nové pneumatiky, ale po celou dobu její životnosti."
      },
      {
        q: "Kolik paliva spotřebují podle katalogu Michelin pneumatiky (překonáváním valivého odporu)?",
        options: [
          "Zanedbatelné množství",
          "V průměru 1 nádrž z 20",
          "V průměru 1 nádrž z 5 (20 %)",
          "Polovinu spotřeby vozidla"
        ],
        correct: [2],
        explanation: "V průměru 1 plná nádrž z 5 jde na valivý odpor pneumatik — proto se pneumatika s nízkým valivým odporem (e.Primacy) zákazníkovi reálně vyplatí."
      },
      {
        q: "Zákazník říká: „Michelin je moc drahý.“ Jaká je nejlepší první reakce?",
        options: [
          "Nabídnout okamžitě levnější značku",
          "Přepočítat cenu na náklad na kilometr díky delší životnosti a výkonu při opotřebení",
          "Říct, že kvalita se musí zaplatit",
          "Nabídnout slevu"
        ],
        correct: [1],
        explanation: "Změna perspektivy z pořizovací ceny na náklad na kilometr je nejsilnější odpověď — podpořená studií CBM 2021: životnost je pro zákazníky nejdůležitější kritérium, které EU štítek neukazuje."
      },
      {
        q: "Proč elektromobily kladou na pneumatiky vyšší nároky? Vyberte všechny správné odpovědi.",
        options: [
          "Opotřebovávají pneumatiky v průměru o 20 % rychleji",
          "Jsou lehčí, takže pneumatiky méně trpí",
          "Kvůli hmotnosti baterií potřebují vyšší nosnost (XL/HL)",
          "V tiché kabině je více slyšet hluk pneumatik"
        ],
        correct: [0, 2, 3],
        multi: true,
        explanation: "EV jsou těžší (ne lehčí!), mají okamžitý točivý moment (+20 % opotřebení dle katalogu) a tichou kabinu — proto potřebují odolné, únosné a tiché pneumatiky s nízkým valivým odporem."
      },
      {
        q: "Jsou pneumatiky MICHELIN vhodné pro elektromobily?",
        options: [
          "Jen speciální EV modely",
          "Ano — podle katalogu jsou všechny pneumatiky MICHELIN vhodné pro EV",
          "Ne, pro EV Michelin pneumatiky nevyrábí",
          "Jen zimní řady"
        ],
        correct: [1],
        explanation: "Oficiální stanovisko z katalogu: všechny pneumatiky MICHELIN jsou vhodné pro elektromobily — jsou vyvinuté s ohledem na valivý odpor, opotřebení i hlučnost. U těžších EV zkontrolujte požadavek na HL nosnost."
      },
      {
        q: "Jaký cíl si Michelin stanovil v oblasti udržitelných materiálů?",
        options: [
          "100 % udržitelných materiálů v pneumatikách do roku 2050",
          "Ukončení výroby letních pneumatik",
          "Výrobu pneumatik pouze z přírodního kaučuku od roku 2030",
          "Recyklaci poloviny pneumatik do roku 2100"
        ],
        correct: [0],
        explanation: "Michelin veřejně cílí na 100 % udržitelných (obnovitelných či recyklovaných) materiálů do roku 2050 a podíl průběžně zvyšuje."
      }
    ]
  }
});
