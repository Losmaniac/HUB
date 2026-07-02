/* ============================================================
   Modul 3 — Portfolio Michelin pro osobní vozy
   Zdroje: Technický katalog Michelin B2C 2024–2025 (CZ)
   a produktové stránky michelin.cz (aktuální generace).
   Dostupnost konkrétních rozměrů ověřujte v katalogu Inter Cars.
   ============================================================ */

window.MichelinAcademy.registerModule("cz", {
  id: "portfolio",
  order: 3,
  icon: "🗂️",
  title: "Portfolio Michelin",
  description: "Letní, celoroční a zimní řady Michelin pro osobní vozy — a hlavně: která pneumatika pro kterého zákazníka.",
  intro: "Nemusíte znát každý rozměr zpaměti. Musíte ale jistě vědět, jaké produktové řady Michelin nabízí, čím se liší a komu kterou doporučit. Portfolio odpovídá katalogu 2024–2025 a aktuální nabídce na michelin.cz.",

  lessons: [
    {
      id: "letni",
      title: "Letní pneumatiky: e.Primacy, Primacy a Pilot Sport",
      minutes: 9,
      blocks: [
        { type: "p", text: "Letní portfolio Michelin pokrývá tři hlavní potřeby: **úsporné cestování, komfortní jistotu a sportovní výkon**." },
        { type: "h", text: "MICHELIN e.Primacy — úsporná volba" },
        { type: "list", items: [
          "Nejnižší valivý odpor v nabídce (pod 5 kg/t) → úspora paliva a delší dojezd elektromobilů.",
          "Ideální pro: úsporné řidiče, hybridy a EV, flotily počítající celkové náklady (TCO).",
          "Argument: „Pneumatiky spotřebují průměrně nádrž z pěti — tahle vám z toho většinu vrátí.“"
        ] },
        { type: "h", text: "MICHELIN Primacy (4+ / 5) — „Objevte svůj potenciál“" },
        { type: "list", items: [
          "Komfortně-bezpečnostní řada pro běžné rodinné a firemní vozy; v nabídce **Primacy 4+** (katalog 2024–2025) i nová generace **Primacy 5**.",
          "Vyvážený mix: krátké brzdění za mokra i při opotřebení, tichý projev, dlouhá životnost.",
          "Ideální pro: rodinné sedany, kombi, MPV, kompaktní SUV, služební vozy.",
          "Argument: „Nejuniverzálnější volba — navržená tak, aby brzdila skvěle od prvního do posledního kilometru.“"
        ] },
        { type: "h", text: "MICHELIN Pilot Sport — „Zbystřete své smysly“" },
        { type: "list", items: [
          "Technologie z motorsportu; přesné řízení a maximální přilnavost. V nabídce **Pilot Sport 5**, vrcholný **Pilot Sport S 5** a **Pilot Sport EV** pro výkonné elektromobily; pro SUV Pilot Sport 4 SUV.",
          "Ideální pro: řidiče, kteří chtějí z auta zážitek — od hot-hatchů po supersporty.",
          "Argument: „Stejná DNA jako pneumatiky pro Le Mans.“"
        ] },
        { type: "tip", text: "Ptejte se na auto a styl jízdy dřív, než vyslovíte produkt: e.Primacy šetří, Primacy chrání rodinu, Pilot Sport baví. Jedna otázka navíc = trefa napoprvé." }
      ]
    },
    {
      id: "celorocni",
      title: "Celoroční pneumatiky — CrossClimate",
      minutes: 8,
      blocks: [
        { type: "p", text: "Celoroční segment je **nejrychleji rostoucí část trhu** a MICHELIN CrossClimate („Nenechte se zastavit počasím“) je jeho průkopník a měřítko. V nabídce: **CrossClimate 2** a **CrossClimate 2 SUV** (katalog 2024–2025) a nová generace **CrossClimate 3** a **CrossClimate 3 Sport**." },
        { type: "keypoints", title: "Proč CrossClimate funguje", items: [
          "Certifikace **3PMSF** — splňuje zákonné požadavky na zimní provoz v ČR i ve většině Evropy.",
          "Brzdění za sucha a mokra blízké letním pneumatikám — na rozdíl od „změkčených zimních“ konceptů.",
          "Katalog jej řadí mezi řady navržené pro **dlouhotrvající výkony** — vysoké nájezdy jsou pověstné.",
          "Konec přezouvání a skladování — úspora času i peněz."
        ] },
        { type: "h", text: "Pro koho je celoroční pneumatika správná volba" },
        { type: "table",
          headers: ["Zákazník", "Doporučení"],
          rows: [
            ["Městský a příměstský provoz, nižší roční nájezd", "CrossClimate — ideální"],
            ["Druhé auto v rodině", "CrossClimate — ideální"],
            ["Pravidelné cesty na hory, vysoký nájezd", "raději letní + zimní sada (Alpin)"],
            ["Sportovnější jízda po celý rok", "CrossClimate 3 Sport"],
            ["Elektromobil v městském provozu", "CrossClimate — tichý a úsporný"]
          ]
        },
        { type: "warning", text: "Celoroční pneumatika není náhrada zimní pro každého. Zákazníkovi, který jezdí často na hory nebo najíždí desítky tisíc km ročně, poctivě doporučte dvě sezónní sady — důvěra je víc než jeden prodej." },
        { type: "tip", text: "Otázka, která prodává CrossClimate: „Kolikrát jste loni v zimě opravdu jel po sněhu?“ Většina městských řidičů odpoví „párkrát“ — přesně pro ně je CrossClimate stvořený. A nezapomeňte: 9 z 10 zimních nehod se stane mimo sníh a led." }
      ]
    },
    {
      id: "zimni",
      title: "Zimní pneumatiky — Alpin a Pilot Alpin",
      minutes: 7,
      blocks: [
        { type: "p", text: "Pro řidiče, kteří v zimě potřebují maximum — hory, dlouhé trasy, jistota za každých podmínek — je odpovědí řada **MICHELIN Alpin**: „Nenechte se zastavit žádným zimním počasím.“" },
        { type: "h", text: "MICHELIN Alpin (6 / 7)" },
        { type: "list", items: [
          "Zimní pneumatika pro běžné osobní vozy; v nabídce **Alpin 6** (katalog 2024–2025) a nová generace **Alpin 7**.",
          "Certifikace 3PMSF, směsi pro nízké teploty, špičkový výkon na sněhu i studeném mokru.",
          "Praktický detail z katalogu: u certifikovaných zimních pneumatik Michelin značí **sněhová vločka na bočnici** polohu zimního indikátoru opotřebení."
        ] },
        { type: "h", text: "MICHELIN Pilot Alpin 5 (+ SUV)" },
        { type: "list", items: [
          "Zimní pneumatika pro výkonné a prémiové vozy a SUV; časté OE homologace (★ BMW, MO Mercedes, N0–N4 Porsche…).",
          "Přenese vysoký výkon na studenou, mokrou i zasněženou silnici."
        ] },
        { type: "keypoints", title: "Kdy jednoznačně doporučit zimní sadu", items: [
          "Pravidelné cesty do hor či podhůří, dojíždění za každého počasí, cesty do Rakouska (min. 4 mm!).",
          "Vysoký roční nájezd — dvě sezónní sady se sjíždí pomaleji a výkon je vždy optimální.",
          "Výkonné vozy — pod 7 °C tvrdne směs letních pneumatik a ztrácí účinnost i na suchu.",
          "Data z katalogu: pod 7 °C brzdí zimní pneumatika na mokru z 80 km/h o 4 m dříve a na sněhu z 50 km/h o 30 m dříve než letní."
        ] },
        { type: "tip", text: "Zimní argument: „Zima pro pneumatiky nezačíná sněhem, ale teplotou 7 °C. A vždy montujeme všechny čtyři — dvě zimní jen na hnací nápravě znamenají nevyvážené auto a smyk.“" }
      ]
    },
    {
      id: "vyber",
      title: "Která pneumatika pro kterého zákazníka",
      minutes: 8,
      blocks: [
        { type: "p", text: "Shrnutí celého modulu do jedné mapy. Cíl: po dvou otázkách („Čím jezdíte a jak?“) umět nabídnout správnou řadu." },
        { type: "table",
          headers: ["Zákazník / vůz", "Léto", "Celý rok", "Zima"],
          rows: [
            ["Malý vůz, město, nízký nájezd", "e.Primacy / Primacy", "CrossClimate ✓ nejčastější volba", "Alpin"],
            ["Rodinné kombi / MPV, smíšený provoz", "Primacy 4+ / 5", "CrossClimate 2 / 3", "Alpin 6 / 7"],
            ["SUV / crossover", "Primacy nebo Pilot Sport 4 SUV", "CrossClimate 2 SUV / 3", "Alpin, Pilot Alpin 5 SUV"],
            ["Sportovní / výkonný vůz", "Pilot Sport 5 / S 5", "CrossClimate 3 Sport", "Pilot Alpin 5"],
            ["Elektromobil / hybrid", "e.Primacy / Pilot Sport EV", "CrossClimate", "Alpin / Pilot Alpin 5"],
            ["Flotila, důraz na TCO", "e.Primacy", "CrossClimate", "Alpin"]
          ]
        },
        { type: "keypoints", title: "Zlatá pravidla doporučení", items: [
          "Vždy respektujte rozměr, index nosnosti a rychlosti předepsané výrobcem vozu; HL nahrazujte zase jen HL.",
          "U prémiových vozů zkontrolujte OE značení (★, MO, N0, +…) — nabídněte homologovanou pneumatiku.",
          "Všechny pneumatiky MICHELIN jsou vhodné pro EV — u těžších elektromobilů hlídejte nosnost (XL/HL) a oceňte technologii Acoustic.",
          "Když si nejste jisti, ptejte se: nájezd, trasy, hory, styl jízdy, parkování venku/garáž."
        ] },
        { type: "warning", text: "Generace a dostupnost rozměrů se v čase mění (Primacy 4+ → 5, Alpin 6 → 7, CrossClimate 2 → 3). Aktuální nabídku vždy ověřte v katalogu Inter Cars — tento modul učí logiku výběru, ne ceník." }
      ]
    }
  ],

  quiz: {
    passPct: 70,
    questions: [
      {
        q: "Který produkt Michelin doporučíte úspornému řidiči hybridu, který chce co nejnižší spotřebu?",
        options: ["Pilot Sport 5", "e.Primacy", "Alpin 7", "CrossClimate 3 Sport"],
        correct: [1],
        explanation: "e.Primacy má nejnižší valivý odpor v nabídce (pod 5 kg/t) — přímá úspora paliva/energie. Ideální pro hybridy, EV a flotily."
      },
      {
        q: "Jaká řada Michelin je určena pro běžné rodinné vozy s důrazem na bezpečnost, komfort a životnost?",
        options: ["Pilot Sport", "Primacy", "X-Ice", "Pilot Alpin"],
        correct: [1],
        explanation: "Primacy (generace 4+ a nová 5) je univerzální komfortně-bezpečnostní řada pro každodenní provoz — „Objevte svůj potenciál“."
      },
      {
        q: "Kterému zákazníkovi je CrossClimate nejlepším doporučením?",
        options: [
          "Řidiči, který každý víkend v zimě jezdí na hory",
          "Městskému řidiči s nižším nájezdem, který chce jednu sadu bez přezouvání",
          "Majiteli supersportu na okruhové dny",
          "Dodávce s celoročním provozem v Alpách"
        ],
        correct: [1],
        explanation: "Celoroční CrossClimate ideálně sedí městskému/příměstskému provozu. Pro časté hory poctivě doporučte sezónní sady Alpin."
      },
      {
        q: "Má MICHELIN CrossClimate certifikaci 3PMSF, a splňuje tedy požadavky na zimní provoz v ČR?",
        options: [
          "Ano, CrossClimate nese certifikaci 3PMSF",
          "Ne, je to jen letní pneumatika",
          "Jen ve vybraných rozměrech nad 18 palců",
          "Pouze verze Sport"
        ],
        correct: [0],
        explanation: "CrossClimate je certifikovaný symbolem 3PMSF (vločka v hoře), takže z pohledu legislativy plní roli zimní pneumatiky v ČR i většině Evropy."
      },
      {
        q: "Proč letní pneumatiky ztrácejí výkon v zimě i na suché silnici?",
        options: [
          "Mají užší dezén",
          "Pod 7 °C jejich směs tuhne a ztrácí účinnost — pro pneumatiky začíná zima při 7 °C",
          "Zákon jim snižuje povolenou rychlost",
          "Neztrácejí, rozdíl je jen na sněhu"
        ],
        correct: [1],
        explanation: "Přesně dle katalogu: pro pneumatiky začíná zima při 7 °C. Pod touto teplotou letní směs tuhne — zimní pneumatika pak brzdí na mokru z 80 km/h o 4 m dříve."
      },
      {
        q: "Který produkt doporučíte majiteli výkonného BMW M na zimu?",
        options: ["e.Primacy", "CrossClimate 2", "Pilot Alpin 5", "Primacy 5"],
        correct: [2],
        explanation: "Pilot Alpin 5 je zimní pneumatika pro výkonné a prémiové vozy, často s OE homologacemi (např. hvězdička BMW)."
      },
      {
        q: "Na co je třeba dát pozor při výběru pneumatik pro elektromobil? Vyberte všechny správné odpovědi.",
        options: [
          "Nízký valivý odpor kvůli dojezdu",
          "Dostatečná nosnost (XL, případně HL) kvůli vyšší hmotnosti",
          "Nízká hlučnost — v tiché kabině je hluk pneumatik slyšet víc",
          "EV potřebují speciální duše"
        ],
        correct: [0, 1, 2],
        multi: true,
        explanation: "EV = dojezd, nosnost, tichost (EV navíc sjíždí pneumatiky o 20 % rychleji — argument pro životnost Michelin). Duše moderní pneumatiky nepotřebují; všechny pneumatiky MICHELIN jsou pro EV vhodné."
      },
      {
        q: "Zákazník s prémiovým vozem má na stávajících pneumatikách značení „MO“. Co to znamená?",
        options: [
          "Pneumatika s maximální odolností",
          "Homologace pro Mercedes-Benz — pneumatika vyvinutá pro tuto značku",
          "Měsíc výroby: říjen",
          "Pneumatika pouze pro montáž vzadu"
        ],
        correct: [1],
        explanation: "MO = homologace Mercedes-Benz (MOE je verze run-flat, MO1 pro AMG). Nabídněte opět homologovanou pneumatiku — a nikdy nemíchejte různá OE značení na jedné nápravě."
      }
    ]
  }
});
