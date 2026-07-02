/* ============================================================
   Modul 3 — Portfolio Michelin pro osobní vozy
   POZN. PRO EDITORY: názvy produktů a parametry před spuštěním
   zvalidujte proti aktuálnímu ceníku/portfoliu Michelin CZ.
   ============================================================ */

window.MichelinAcademy.registerModule("cz", {
  id: "portfolio",
  order: 3,
  icon: "🗂️",
  title: "Portfolio Michelin",
  description: "Letní, celoroční a zimní řady Michelin pro osobní vozy — a hlavně: která pneumatika pro kterého zákazníka.",
  intro: "Nemusíte znát každý rozměr zpaměti. Musíte ale jistě vědět, jaké produktové řady Michelin nabízí, čím se liší a komu kterou doporučit.",

  lessons: [
    {
      id: "letni",
      title: "Letní pneumatiky",
      minutes: 9,
      blocks: [
        { type: "p", text: "Letní portfolio Michelin pokrývá tři hlavní potřeby: **úsporné cestování, komfortní jistotu a sportovní výkon**." },
        { type: "h", text: "MICHELIN e.Primacy — úsporná volba" },
        { type: "list", items: [
          "Nejnižší valivý odpor v nabídce → úspora paliva a delší dojezd elektromobilů.",
          "Ideální pro: úsporné řidiče, hybridy a EV, flotily počítající TCO.",
          "Argument: „Pneumatika, která si na sebe vydělává nižší spotřebou.“"
        ] },
        { type: "h", text: "MICHELIN Primacy (4+ / 5) — komfort a bezpečí pro každý den" },
        { type: "list", items: [
          "Vlajková loď pro běžné rodinné a firemní vozy; nástupce Primacy 4+ je **Primacy 5**.",
          "Vyvážený mix: krátké brzdění za mokra i při opotřebení, tichý komfortní projev, dlouhá životnost.",
          "Ideální pro: rodinné sedany, kombi, MPV, kompaktní SUV, služební vozy.",
          "Argument: „Nejuniverzálnější volba — bezpečná od prvního do posledního kilometru.“"
        ] },
        { type: "h", text: "MICHELIN Pilot Sport (5 / S 5) — sportovní výkon" },
        { type: "list", items: [
          "Technologie z motorsportu; přesné řízení, maximální přilnavost, výkon i pro silné elektromobily.",
          "**Pilot Sport 5** pro sportovní hatchbacky a sedany, **Pilot Sport S 5** pro nejvýkonnější vozy (UHP).",
          "Ideální pro: řidiče, kteří chtějí z auta zážitek; výkonná auta od hot-hatchů po supersporty.",
          "Argument: „Stejná DNA jako pneumatiky pro Le Mans a Formuli E.“"
        ] },
        { type: "tip", text: "Ptejte se na auto a styl jízdy dřív, než vyslovíte produkt: e.Primacy šetří, Primacy chrání rodinu, Pilot Sport baví. Jedna otázka navíc = trefa napoprvé." }
      ]
    },
    {
      id: "celorocni",
      title: "Celoroční pneumatiky — CrossClimate",
      minutes: 8,
      blocks: [
        { type: "p", text: "Celoroční segment je **nejrychleji rostoucí část trhu** a MICHELIN CrossClimate je jeho průkopník a benchmark. Aktuální generace: **CrossClimate 3** a sportovnější **CrossClimate 3 Sport**." },
        { type: "keypoints", title: "Proč CrossClimate funguje", items: [
          "Certifikace **3PMSF** — splňuje zákonné požadavky na zimní provoz v ČR.",
          "Brzdění za sucha a mokra blízké letním pneumatikám — na rozdíl od „změkčených zimních“ konceptů některých konkurentů.",
          "Vysoká životnost — CrossClimate je pověstný nájezdy.",
          "Konec přezouvání a skladování — úspora času i peněz."
        ] },
        { type: "h", text: "Pro koho je celoroční pneumatika správná volba" },
        { type: "table",
          headers: ["Zákazník", "Doporučení"],
          rows: [
            ["Městský a příměstský provoz, nižší roční nájezd", "CrossClimate — ideální"],
            ["Druhé auto v rodině", "CrossClimate — ideální"],
            ["Pravidelné cesty na hory, vysoký nájezd", "raději letní + zimní sada (Alpin)"],
            ["Sportovní jízda po celý rok", "CrossClimate 3 Sport"],
            ["Elektromobil v městském provozu", "CrossClimate — tichý a úsporný"]
          ]
        },
        { type: "warning", text: "Celoroční pneumatika není náhrada zimní pro každého. Zákazníkovi, který jezdí často na hory nebo najíždí desítky tisíc km ročně, poctivě doporučte dvě sezónní sady — důvěra je víc než jeden prodej." },
        { type: "tip", text: "Otázka, která prodává CrossClimate: „Kolikrát jste loni v zimě opravdu jel po sněhu?“ Většina městských řidičů odpoví „párkrát“ — přesně pro ně je CrossClimate stvořený." }
      ]
    },
    {
      id: "zimni",
      title: "Zimní pneumatiky — Alpin",
      minutes: 7,
      blocks: [
        { type: "p", text: "Pro řidiče, kteří v zimě potřebují maximum — hory, dlouhé trasy, jistota za každých podmínek — je odpovědí řada **MICHELIN Alpin**." },
        { type: "h", text: "MICHELIN Alpin (6 / 7)" },
        { type: "list", items: [
          "Zimní pneumatika pro běžné osobní vozy; aktuální generace **Alpin 7**.",
          "Špičkový výkon na sněhu a mokru, certifikace 3PMSF, směsi pro nízké teploty.",
          "Konstrukce drží zimní výkon i při opotřebení (prohlubující se lamely)."
        ] },
        { type: "h", text: "MICHELIN Pilot Alpin 5 (+ SUV)" },
        { type: "list", items: [
          "Zimní pneumatika pro výkonné a prémiové vozy a SUV; časté OE homologace (BMW, Mercedes, Porsche…).",
          "Přenese vysoký výkon na studenou, mokrou i zasněženou silnici."
        ] },
        { type: "keypoints", title: "Kdy jednoznačně doporučit zimní sadu", items: [
          "Pravidelné cesty do hor či podhůří, dojíždění za každého počasí.",
          "Vysoký roční nájezd (dvě sezónní sady se sjíždí pomaleji a výkon je vždy optimální).",
          "Výkonné vozy — zimní výkon letní pneumatiky pod 7 °C dramaticky klesá.",
          "Řidiči, kteří chtějí prostě nejlepší možný zimní výkon."
        ] },
        { type: "tip", text: "Zimní argument číslem: pod 7 °C tvrdne směs letních pneumatik a brzdná dráha roste i na suchu. Zima nezačíná sněhem, ale teplotou." }
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
            ["Malý vůz, město, nízký nájezd", "e.Primacy / Primacy", "CrossClimate 3 ✓ nejčastější volba", "Alpin"],
            ["Rodinné kombi / MPV, smíšený provoz", "Primacy 5", "CrossClimate 3", "Alpin 7"],
            ["SUV / crossover", "Primacy (SUV rozměry)", "CrossClimate 3 (SUV rozměry)", "Alpin / Pilot Alpin 5 SUV"],
            ["Sportovní / výkonný vůz", "Pilot Sport 5 / S 5", "CrossClimate 3 Sport", "Pilot Alpin 5"],
            ["Elektromobil / hybrid", "e.Primacy / Pilot Sport (EV kompatibilní)", "CrossClimate 3", "Alpin 7 / Pilot Alpin 5"],
            ["Flotila, důraz na TCO", "e.Primacy", "CrossClimate 3", "Alpin 7"]
          ]
        },
        { type: "keypoints", title: "Zlatá pravidla doporučení", items: [
          "Vždy respektujte rozměr, index nosnosti a rychlosti předepsané výrobcem vozu.",
          "U prémiových vozů zkontrolujte OE značení (hvězdička, MO, N0…) — nabídněte homologovanou pneumatiku.",
          "EV zákazník = důraz na valivý odpor, nosnost (XL/HL) a tichost.",
          "Když si nejste jisti, ptejte se: nájezd, trasy, hory, styl jízdy, parkování venku/garáž."
        ] },
        { type: "warning", text: "Názvy generací a dostupnost rozměrů se v čase mění. Aktuální nabídku vždy ověřte v katalogu Inter Cars / ceníku Michelin — tento modul učí logiku výběru, ne ceník." }
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
        explanation: "e.Primacy má nejnižší valivý odpor v nabídce — přímá úspora paliva/energie. Ideální pro hybridy, EV a flotily."
      },
      {
        q: "Jaká řada Michelin je určena pro běžné rodinné vozy s důrazem na bezpečnost, komfort a životnost?",
        options: ["Pilot Sport", "Primacy", "X-Ice", "Pilot Alpin"],
        correct: [1],
        explanation: "Primacy (aktuálně generace 4+/5) je univerzální komfortně-bezpečnostní řada pro každodenní provoz."
      },
      {
        q: "Kterému zákazníkovi je CrossClimate 3 nejlepším doporučením?",
        options: [
          "Řidiči, který každý víkend v zimě jezdí na hory",
          "Městskému řidiči s nižším nájezdem, který chce jednu sadu bez přezouvání",
          "Majiteli supersportu na okruhové dny",
          "Dodávce s celoročním provozem v Alpách"
        ],
        correct: [1],
        explanation: "Celoroční CrossClimate ideálně sedí městskému/příměstskému provozu. Pro časté hory poctivě doporučte sezónní sady."
      },
      {
        q: "Má MICHELIN CrossClimate 3 certifikaci 3PMSF, a splňuje tedy požadavky na zimní provoz v ČR?",
        options: [
          "Ano, má certifikaci 3PMSF",
          "Ne, je to jen letní pneumatika",
          "Jen ve vybraných rozměrech nad 18 palců",
          "Pouze verze Sport"
        ],
        correct: [0],
        explanation: "CrossClimate nese certifikaci 3PMSF (vločka v hoře), takže z pohledu legislativy plní roli zimní pneumatiky."
      },
      {
        q: "Proč letní pneumatiky ztrácejí výkon v zimě i na suché silnici?",
        options: [
          "Mají užší dezén",
          "Pod cca 7 °C jejich směs tvrdne a prodlužuje se brzdná dráha",
          "Zákon jim snižuje povolenou rychlost",
          "Neztrácejí, rozdíl je jen na sněhu"
        ],
        correct: [1],
        explanation: "Letní směsi pod cca 7 °C tvrdnou a ztrácejí přilnavost — zima začíná teplotou, ne sněhem. Klíčový argument pro přezutí."
      },
      {
        q: "Který produkt doporučíte majiteli výkonného BMW M na zimu?",
        options: ["e.Primacy", "CrossClimate 3", "Pilot Alpin 5", "Primacy 5"],
        correct: [2],
        explanation: "Pilot Alpin 5 je zimní pneumatika pro výkonné a prémiové vozy, často s OE homologacemi (např. hvězdička BMW)."
      },
      {
        q: "Na co je třeba dát pozor při výběru pneumatik pro elektromobil? Vyberte všechny správné odpovědi.",
        options: [
          "Nízký valivý odpor kvůli dojezdu",
          "Dostatečný index nosnosti (XL/HL) kvůli vyšší hmotnosti",
          "Nízká hlučnost — v tiché kabině je hluk pneumatik slyšet víc",
          "EV potřebují speciální duše"
        ],
        correct: [0, 1, 2],
        multi: true,
        explanation: "EV = dojezd, nosnost, tichost. Duše moderní bezdušové pneumatiky nepotřebují. Většina pneumatik Michelin je pro EV plně vhodná."
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
        explanation: "MO = homologace Mercedes-Benz. Nabídněte opět homologovanou pneumatiku — vůz s ní byl vyladěn a je to silný prodejní argument."
      }
    ]
  }
});
