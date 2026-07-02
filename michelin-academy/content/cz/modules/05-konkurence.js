/* ============================================================
   Modul 5 — Konkurence a pozicování
   ============================================================ */

window.MichelinAcademy.registerModule("cz", {
  id: "konkurence",
  order: 5,
  icon: "⚖️",
  title: "Konkurence a pozicování",
  description: "Jak se Michelin liší od prémiové konkurence i rozpočtových značek — a jak férově argumentovat testy.",
  intro: "Zákazníci porovnávají. Dobrý prodejce konkurenci zná, nepomlouvá ji — a umí věcně vysvětlit, v čem je Michelin jiný.",

  lessons: [
    {
      id: "konkurencni-mapa",
      title: "Mapa trhu: prémium, střed a rozpočet",
      minutes: 9,
      blocks: [
        { type: "p", text: "Trh s pneumatikami má tři patra. Musíte vědět, ve kterém patře se zákazník pohybuje a jaké argumenty v něm fungují." },
        { type: "table",
          headers: ["Segment", "Značky (příklady)", "Charakteristika"],
          rows: [
            ["Prémium", "Michelin, Continental, Bridgestone, Goodyear, Pirelli", "špičkový výkon, vývoj, OE homologace, vyšší cena"],
            ["Střední třída", "např. Kleber (skupina Michelin), Fulda, Firestone, Barum", "rozumný kompromis výkon/cena"],
            ["Rozpočet", "ekonomické a importní značky", "nejnižší cena, větší rozptyl kvality a výkonu"]
          ]
        },
        { type: "h", text: "Čím se Michelin odlišuje uvnitř prémia" },
        { type: "keypoints", title: "Diferenciátory Michelin", items: [
          "**Výkon po celou životnost** — konstrukce cílená na to, aby pneumatika brzdila skvěle i sjetá. Konkurence často optimalizuje na testy nových pneumatik.",
          "**Životnost** — v nezávislých testech nájezdů patří Michelin dlouhodobě na špici; nižší cena za kilometr.",
          "**Šíře záběru** — od e.Primacy po Pilot Sport: úspora, komfort i motorsport z jedné ruky, technologie z F1/Le Mans/MotoGP.",
          "**CrossClimate** — průkopník celoročního segmentu s chováním blízkým letní pneumatice.",
          "**Důvěra značky** — jedna z nejcennějších značek oboru; pro zákazníka jistota, pro vás snadnější doporučení."
        ] },
        { type: "h", text: "Skupina Michelin: nabídka pro každý rozpočet" },
        { type: "p", text: "Když zákazník na prémiovou cenu opravdu nedosáhne, nemusí odejít ke konkurenci: skupina Michelin nabízí i značky střední třídy (např. **Kleber**). Zákazník zůstává „v rodině“ a vy máte odpověď pro každé patro trhu." },
        { type: "warning", text: "Nikdy nepomlouvejte konkrétní značku. Srovnávejte principy a doložitelná fakta (EU štítek, nezávislé testy). Pomluva snižuje důvěru ve vás, ne v konkurenci." }
      ]
    },
    {
      id: "testy-a-fakta",
      title: "Argumentace testy a fakty",
      minutes: 8,
      blocks: [
        { type: "p", text: "Nezávislé testy (ADAC, AutoBild, dTest…) jsou pro české zákazníky silná autorita. Naučte se s nimi pracovat korektně — a využít i situace, kdy Michelin není první v jedné dílčí disciplíně." },
        { type: "h", text: "Jak testy číst" },
        { type: "list", items: [
          "Dívejte se na **celkové hodnocení**, ne jen jednu disciplínu — pneumatika musí umět všechno najednou.",
          "Hledejte **test životnosti / opotřebení** — tam se prémiová konstrukce projeví nejvíc a bývá to slabina levných značek.",
          "Testy se dělají na **nových** pneumatikách — nezachycují, jak výkon klesá s opotřebením. Právě tam je síla Michelinu.",
          "Ověřte rozměr a rok testu — výsledky starší generace nevypovídají o aktuální."
        ] },
        { type: "dialog", lines: [
          { who: "customer", text: "Četl jsem test, kde na sněhu vyhrála jiná značka. Tak proč bych bral Michelin?" },
          { who: "seller", text: "Dobrý postřeh — v jedné disciplíně může vyhrát kdokoli. Podívejte se ale na celkové pořadí a hlavně na životnost: pneumatika, která vyhraje na sněhu, ale sjede se za dvě sezóny, vás nakonec stojí víc. Michelin míří na nejlepší celkový výsledek po celou životnost — a testy se dělají na nových gumách, takže rozdíl u sjetých v nich vůbec nevidíte." }
        ] },
        { type: "keypoints", title: "Fér argumentace = dlouhodobá důvěra", items: [
          "Používejte oficiální zdroje: EU štítek, nezávislé testy, technické listy.",
          "Přiznejte, když je konkurent v dílčí disciplíně dobrý — a vraťte pozornost k celku a životnosti.",
          "Neslibujte konkrétní kilometry ani výsledky; mluvte o principech a doložených datech.",
          "Váš cíl není vyhrát hádku, ale aby se zákazník vrátil."
        ] },
        { type: "tip", text: "Vytiskněte si aktuální srovnávací test pro nejprodávanější rozměr vaší pobočky (např. 205/55 R16). Papír na pultě je přesvědčivější než vzpomínka na internet." }
      ]
    }
  ],

  quiz: {
    passPct: 70,
    questions: [
      {
        q: "Které značky patří do prémiového segmentu vedle Michelinu?",
        options: [
          "Continental, Bridgestone, Goodyear, Pirelli",
          "Pouze evropské značky",
          "Všechny značky vyráběné v EU",
          "Žádné — prémiový je jen Michelin"
        ],
        correct: [0],
        explanation: "Prémiové patro tvoří vedle Michelinu zejména Continental, Bridgestone, Goodyear a Pirelli. Uvnitř prémia se Michelin odlišuje mj. výkonem po celou životnost."
      },
      {
        q: "Jaký je klíčový diferenciátor Michelinu vůči prémiové konkurenci?",
        options: [
          "Nejnižší cena v segmentu",
          "Výkon udržovaný po celou životnost pneumatiky (i sjeté) a špičková životnost",
          "Nejširší síť vlastních prodejen",
          "Barevné bočnice"
        ],
        correct: [1],
        explanation: "Michelin cíleně konstruuje pneumatiky pro vysoký výkon od prvního do posledního kilometru — testy nových pneumatik tento rozdíl nezachytí."
      },
      {
        q: "Zákazník nedosáhne na cenu prémiové pneumatiky. Co je nejlepší postup?",
        options: [
          "Nechat ho odejít",
          "Prodat mu neznámou rozpočtovou značku bez vysvětlení",
          "Nabídnout značku střední třídy ze skupiny Michelin (např. Kleber) a vysvětlit rozdíly",
          "Přemlouvat ho, dokud si prémiovou nekoupí"
        ],
        correct: [2],
        explanation: "Skupina Michelin pokrývá i střední třídu — zákazník dostane férové řešení ve svém rozpočtu a zůstává u vás."
      },
      {
        q: "Proč nezávislé testy plně nezachycují hlavní přednost Michelinu?",
        options: [
          "Protože testy jsou tajné",
          "Protože se testují nové pneumatiky — pokles výkonu s opotřebením test neukáže",
          "Protože Michelin testy bojkotuje",
          "Protože se testují jen zimní pneumatiky"
        ],
        correct: [1],
        explanation: "Testy se provádějí na nových pneumatikách. Výkon při opotřebení — silná stránka Michelinu — v nich není vidět. Zmiňte to při argumentaci."
      },
      {
        q: "Konkurenční pneumatika vyhrála dílčí disciplínu testu (např. sníh). Jak reagovat?",
        options: [
          "Prohlásit test za nedůvěryhodný",
          "Uznat dílčí výsledek a vrátit pozornost k celkovému hodnocení, životnosti a výkonu při opotřebení",
          "Pomluvit vítěznou značku",
          "Nabídnout slevu"
        ],
        correct: [1],
        explanation: "Férové uznání + přesměrování na celek („pneumatika musí umět všechno, po celou životnost“) je důvěryhodné a účinné."
      },
      {
        q: "Které zásady férové argumentace budují dlouhodobou důvěru? Vyberte všechny správné odpovědi.",
        options: [
          "Opírat se o EU štítek a nezávislé testy",
          "Nepomlouvat konkrétní konkurenční značky",
          "Slibovat přesný počet najetých kilometrů",
          "Přiznat silné stránky konkurence a argumentovat celkem"
        ],
        correct: [0, 1, 3],
        multi: true,
        explanation: "Oficiální data, žádné pomluvy, férovost. Konkrétní kilometry nikdy neslibujte — závisí na autě, stylu jízdy a podmínkách."
      }
    ]
  }
});
