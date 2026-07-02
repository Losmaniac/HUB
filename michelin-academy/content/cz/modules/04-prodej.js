/* ============================================================
   Modul 4 — Obchodní argumentace Michelin
   Pro obchodníky Inter Cars v terénu: jak prodat prémiový mix
   pneuservisu/autoservisu a jak vybavit jeho pult argumenty
   pro koncového zákazníka.
   Číselné claimy: Technický katalog Michelin B2C 2024–2025 (CZ).
   Obchodní příklady (ceny, marže) jsou ilustrační.
   ============================================================ */

window.MichelinAcademy.registerModule("cz", {
  id: "prodej",
  order: 4,
  icon: "💼",
  title: "Obchodní argumentace Michelin",
  description: "Obchodní myšlení pro terén: proč se pneuservisu vyplatí prémiový mix, jaké argumenty dát jeho pultu a jak vést obchodní návštěvu.",
  intro: "Váš zákazník je pneuservis nebo autoservis — a jeho zákazník je řidič. Prodáte jen tehdy, když pomůžete vydělat oběma. Tento modul je čisté obchodní myšlení: marže, výtěžnost zvedáku, argumenty pro pult a vedení návštěvy v terénu.",

  lessons: [
    {
      id: "byznys-pneuservisu",
      title: "Byznys pneuservisu: proč se prémiový mix vyplatí",
      minutes: 12,
      blocks: [
        { type: "p", text: "Majitel servisu neslyší na „skvělou pneumatiku“. Slyší na **zisk, čas a klid**. Vaším úkolem je ukázat, že prémiový mix s Michelinem zlepšuje všechny tři." },
        { type: "h", text: "1. Marže v procentech klame — počítejte koruny" },
        { type: "p", text: "Servisy často drží levné značky kvůli „lepší marži v procentech“. Jenže účty se platí v korunách. Stejná procentní marže na dražším produktu = **víc peněz z každé zakázky**." },
        { type: "table",
          headers: ["Ilustrační příklad (205/55 R16)", "Rozpočtová značka", "MICHELIN"],
          rows: [
            ["Nákupní cena", "1 100 Kč/ks", "2 000 Kč/ks"],
            ["Prodejní cena", "1 500 Kč/ks", "2 700 Kč/ks"],
            ["Marže na kus", "400 Kč (27 %)", "700 Kč (26 %)"],
            ["Marže na sadu 4 ks", "1 600 Kč", "**2 800 Kč**"],
            ["Čas montáže", "≈ 1 h zvedáku", "≈ 1 h zvedáku"]
          ]
        },
        { type: "keypoints", title: "Klíčová obchodní rovnice", items: [
          "Montáž sady trvá stejně dlouho, ať stojí pneumatika 1 500 nebo 2 700 Kč.",
          "**Zvedák je nejvzácnější zdroj servisu** — o zisku rozhoduje výtěžnost hodiny zvedáku, ne marže v procentech.",
          "V příkladu výše vydělá servis na stejné hodině práce o **1 200 Kč víc** — jen tím, že prodal lepší produkt.",
          "V přezouvací špičce (říjen–listopad, březen–duben) je kapacita plná tak jako tak: každá zakázka navíc v prémiu = čistý rozdíl v zisku."
        ] },
        { type: "warning", text: "Čísla v tabulce jsou ilustrační pro nácvik argumentace. V terénu vždy počítejte s reálnými cenami z aktuálního ceníku Inter Cars a s konkrétní cenotvorbou daného servisu." },
        { type: "h", text: "2. Prémiová značka se prodává snáz, než si servis myslí" },
        { type: "list", items: [
          "Michelin je jedna z nejcennějších značek oboru — **zákazník ji zná a věří jí dřív, než pult cokoli řekne**. Levnou značku musí pult obhajovat, Michelin obhajuje sám sebe.",
          "Podle studie CBM 2021 (z katalogu Michelin) zákazníci nejvíc chtějí **životnost, nízkou spotřebu a brzdění na mokru** — přesně profil Michelinu. Poptávka po prémiu existuje; servis ji jen musí umět obsloužit.",
          "Méně reklamací a problémů = méně neproduktivního času a nespokojených zákazníků.",
          "Servis, který doporučuje prémiové řešení, **buduje vlastní pověst odborníka** — a odborníkovi zákazník neutíká na internet kvůli stokoruně."
        ] },
        { type: "h", text: "3. Zákazník servisu má hodnotu v čase, ne v jedné účtence" },
        { type: "p", text: "Řidič, který koupí sadu Michelin s uskladněním, se vrací **dvakrát ročně na přezutí** — a s ním přichází geometrie, brzdy, servisní prohlídky. Prémiový zákazník je loajálnější a jeho celoživotní hodnota pro servis násobně převyšuje rozdíl marže na první sadě. Prodávejte servisu tuhle matematiku, ne jednu fakturu." },
        { type: "dialog", lines: [
          { who: "customer", text: "Michelinky mi tu stojí. Moji lidi berou to, co je v letáku nejlevnější." },
          { who: "seller", text: "Rozumím, podívejme se na to obchodně. Kolik sad denně namontujete ve špičce?" },
          { who: "customer", text: "Tak osm, deset. Víc zvedáky nedají." },
          { who: "seller", text: "Přesně — víc zakázek neuděláte, kapacita je strop. Ale na stejné hodině zvedáku vyděláte s Michelinem o víc než tisícovku na sadě víc. Při osmi sadách denně je to přes osm tisíc denně navíc, bez jediné minuty práce navíc. Pojďme nastavit mix tak, aby pult uměl Michelin nabídnout jako první — já vám k tomu dodám argumenty i zaškolení." }
        ] },
        { type: "tip", text: "Mluvte s majitelem jazykem jeho výkazu: marže v Kč na zakázku, výtěžnost hodiny zvedáku, návratnost zákazníka. „Nejlepší pneumatika“ je argument pro pult — „nejlepší zisk z hodiny práce“ je argument pro majitele." }
      ]
    },
    {
      id: "argumenty-pro-pult",
      title: "Argumentační sada pro pult: prémiovka koncovému zákazníkovi",
      minutes: 12,
      blocks: [
        { type: "p", text: "Nejlepší mix nepomůže, když ho pult neumí prodat. Vaše druhá role v terénu: **vybavit lidi u pultu hotovými argumenty**. Tady je sada, kterou můžete rovnou předat — všechna čísla jsou z oficiálního katalogu Michelin." },
        { type: "h", text: "Pět argumentů, které fungují u pultu" },
        { type: "table",
          headers: ["Argument", "Číslo z katalogu", "Věta pro pult"],
          rows: [
            ["Brzdná dráha", "třída A brzdí z 80 km/h o 9 m dřív než třída D", "„Devět metrů jsou dvě délky auta — rozdíl mezi zastavením a nárazem.“"],
            ["Spotřeba", "pneumatiky spotřebují 1 nádrž z 5; E→A ušetří ~150 l/40 000 km", "„Část ceny se vám vrátí v palivu — u téhle pneumatiky nejvíc.“"],
            ["Životnost", "výkon od prvního do posledního km, až do limitu 1,6 mm", "„Michelin bezpečně dojezdíte, nemusíte ho vyhazovat ve třech milimetrech.“"],
            ["Cena za kilometr", "delší nájezd = nižší náklad na km", "„Na účtence dražší, na kilometr často levnější.“"],
            ["Zima", "pod 7 °C: −4 m na mokru z 80 km/h, −30 m na sněhu z 50 km/h", "„Zima nezačíná sněhem, ale sedmi stupni.“"]
          ]
        },
        { type: "h", text: "Cenová námitka: třízkrokový scénář pro pult" },
        { type: "list", items: [
          "**1. Přijmout.** „Rozumím, rozdíl na účtence je znát.“ Nikdy se nehádat.",
          "**2. Přerámovat na náklad na kilometr.** Delší životnost + úspora paliva = srovnatelná nebo nižší cena za kilometr.",
          "**3. Přidat bezpečnost.** 9 metrů brzdné dráhy se týká rodiny zákazníka — to není marketing, to je fyzika."
        ] },
        { type: "dialog", lines: [
          { who: "customer", text: "Tři tisíce za kus? Vedle mají o třetinu levnější." },
          { who: "seller", text: "Rozumím, na účtence je to rozdíl. Kolik ročně najedete?" },
          { who: "customer", text: "Kolem 20 000 km." },
          { who: "seller", text: "Michelin je stavěný, aby brzdil skvěle i sjetý — takže ho bezpečně dojezdíte a měníte později. Na kilometr vás vyjde stejně nebo líp, k tomu ušetříte na palivu a celou dobu máte o dvě délky auta kratší brzdnou dráhu na mokru. Chcete, abych vám spočítal obě varianty?" }
        ] },
        { type: "h", text: "Vyšší košík: co patří ke každé sadě" },
        { type: "list", items: [
          "**4 kusy místo 2** — nové vždy na zadní nápravu (oficiální doporučení Michelin); kontrola druhé nápravy často rozhodne o kompletní sadě.",
          "**Geometrie** — špatná sbíhavost sjede i prémiovou pneumatiku za pár tisíc km; při novém obutí je to služba v zájmu zákazníka.",
          "**Uskladnění** — pro servis jistý kontakt 2× ročně, pro zákazníka pohodlí.",
          "**Kontrola tlaku a DOT při každém přezutí** — TPMS hlásí ztrátu až od 20 %, po 10 letech od výroby Michelin doporučuje výměnu. Každá kontrola = příležitost."
        ] },
        { type: "keypoints", title: "Jak to předat pultu (vy jako trenér)", items: [
          "Nechte pultu tahák s pěti argumenty a čísly — ideálně vytištěné EU štítky nabízených pneumatik vedle sebe.",
          "Natrénujte s nimi cenovou námitku nahlas — dvakrát, třikrát, dokud věty nesedí.",
          "Domluvte pravidlo „Michelin první“: pult vždy nabídne prémiovou variantu jako výchozí a levnější jako alternativu — ne obráceně.",
          "Vracejte se k číslům: podíl prémia na prodejích je metrika, kterou s majitelem vyhodnocujete při další návštěvě."
        ] },
        { type: "tip", text: "Slovo „investice“ funguje lépe než „cena“. A nabídka „spočítám vám obě varianty“ ukazuje férovost — zákazník cítí, že mu pult pomáhá vybrat, ne že mu prodává." }
      ]
    },
    {
      id: "navsteva-v-terenu",
      title: "Obchodní návštěva: jak vést rozhovor se servisem",
      minutes: 12,
      blocks: [
        { type: "p", text: "Dobrá návštěva není o katalogu, ale o **byznysu toho konkrétního servisu**. Struktura: příprava → otázky → argumentace na míru → námitky → konkrétní další krok." },
        { type: "h", text: "Příprava před návštěvou" },
        { type: "list", items: [
          "Znejte jeho čísla: co odebírá, jaký má podíl prémia, jak se vyvíjí sell-out (co reálně prodá koncovým zákazníkům — sklad plný Michelinů nic neznamená, dokud se netočí).",
          "Znejte jeho region a klientelu: město vs. podhůří, flotily v okolí, prémiové vozy na parkovišti.",
          "Znejte sezónu: před přezouvací špičkou se řeší mix a sklad, po špičce vyhodnocení a doplnění.",
          "Mějte připravený jeden konkrétní návrh — ne „něco od Michelinu“, ale „tohle do vašeho mixu a proč“."
        ] },
        { type: "h", text: "Otevírací otázky majiteli" },
        { type: "list", items: [
          "„Co vám dnes na pneumatikách vydělává nejvíc — a co nejmíň?“",
          "„Kolik sad denně zvládnete ve špičce? Kolik z nich je prémium?“",
          "„Co vaši zákazníci nejčastěji řeší — cenu, životnost, zimu?“",
          "„Kolik času vám berou reklamace a problémy s levnými značkami?“",
          "„Kdo u vás mluví se zákazníkem o výběru — a má po ruce argumenty?“"
        ] },
        { type: "h", text: "Argumentace podle typu servisu" },
        { type: "table",
          headers: ["Typ servisu", "Obchodní příležitost", "Nosný produkt"],
          rows: [
            ["Městský servis, běžná klientela", "celoroční segment roste nejrychleji; „kolikrát vaši zákazníci loni jeli po sněhu?“", "CrossClimate"],
            ["Podhorský region, dojíždění", "zákon 4 mm, Rakousko 4 mm; zimní výkon jako služba", "Alpin, Pilot Alpin"],
            ["Prémiová klientela (BMW, Mercedes…)", "OE homologace (★, MO, N0…) — auto naladěné výrobcem; vyšší košík", "Pilot Sport, Pilot Alpin 5, Primacy"],
            ["Flotily a služební vozy v okolí", "TCO: 1 nádrž z 5, životnost, cena za km", "e.Primacy, CrossClimate"],
            ["Servis s rostoucím podílem elektromobilů", "EV sjíždí pneumatiky o 20 % rychleji; nosnost HL, tichost", "e.Primacy, Pilot Sport EV, CrossClimate"]
          ]
        },
        { type: "h", text: "Nejčastější námitky servisu — a odpovědi" },
        { type: "dialog", lines: [
          { who: "customer", text: "Prémiovku mi tu nikdo nekupuje, moji zákazníci jsou na cenu." },
          { who: "seller", text: "To říká skoro každý servis, dokud pult nezačne prémiovku aktivně nabízet. Zákazníci podle průzkumů chtějí hlavně životnost a bezpečí — jen jim to nikdo nepřeloží do korun. Zaškolím vám pult, dám vám tahák s čísly a za měsíc se podíváme na podíl prémia. Když se nepohne, mluvili jsme naposledy." },
          { who: "customer", text: "Nechci vázat peníze ve skladu drahých pneumatik." },
          { who: "seller", text: "Nemusíte. S logistikou Inter Cars máte běžné rozměry do druhého dne — držte na skladě jen točivé rozměry na špičku a zbytek objednávejte na zakázku. Prémiový mix bez mrtvého skladu." },
          { who: "customer", text: "Zákazník si to stejně koupí levněji na internetu." },
          { who: "seller", text: "Ten, kdo kupuje jen cenu, ano. Ale montáž, uskladnění, geometrii a záruku z internetu nedostane. Prodávejte zakázku jako celek — pneumatiky s odborností pultu a servisem okolo. Přesně tam vzniká vaše marže a jeho důvod se vracet." }
        ] },
        { type: "h", text: "Uzavření návštěvy: vždy konkrétní další krok" },
        { type: "list", items: [
          "Dohodněte **měřitelný cíl**: např. podíl Michelin na sell-outu, mix na sezónu, zalistování CrossClimate.",
          "Dohodněte **akci**: školení pultu (třeba touto akademií), tahák s argumenty, štítky k pultu, POS materiály.",
          "Dohodněte **termín další návštěvy** a co na ní vyhodnotíte.",
          "Po návštěvě pošlete krátké shrnutí — co jste domluvili a do kdy. Profesionalita se počítá."
        ] },
        { type: "keypoints", title: "Obchodní myšlení v kostce", items: [
          "Prodáváte zisk servisu, ne pneumatiku: marže v Kč × výtěžnost zvedáku × vracející se zákazník.",
          "Sell-in bez sell-outu je jen přesunutý sklad — vaším cílem je, aby se Michelin točil.",
          "Každý servis má jiný byznys: argumentujte podle jeho klientely, ne podle katalogu.",
          "Vždy odcházejte s dohodnutým dalším krokem a termínem."
        ] },
        { type: "tip", text: "Nejsilnější věta v terénu: „Pojďme se na to podívat vašima očima — co to udělá s vaší maržovostí za sezónu?“ V ten moment nejste dodavatel, ale partner." }
      ]
    }
  ],

  quiz: {
    passPct: 70,
    questions: [
      {
        q: "Majitel servisu drží levné značky, protože „mají lepší marži v procentech“. Jaký je nejsilnější protiargument?",
        options: [
          "Procenta jsou důležitější než koruny",
          "Marže se počítá v korunách: prémiová sada přinese na stejné hodině zvedáku výrazně víc peněz",
          "Levné značky se nesmí prodávat",
          "Nabídnout mu ještě levnější značku"
        ],
        correct: [1],
        explanation: "Účty se platí v korunách. Montáž trvá stejně — na stejné hodině zvedáku vydělá servis s prémiovou sadou o stovky až tisíce korun víc."
      },
      {
        q: "Proč je „výtěžnost hodiny zvedáku“ klíčová metrika pro pneuservis?",
        options: [
          "Protože zvedák je nejdražší stroj v servisu",
          "Protože kapacita zvedáků je strop byznysu — víc zakázek servis neudělá, může ale vydělat víc na každé z nich",
          "Protože ji vyžaduje zákon",
          "Protože ji sleduje Michelin"
        ],
        correct: [1],
        explanation: "Ve špičce je kapacita plná tak jako tak. Jediná cesta k vyššímu zisku je vyšší hodnota každé zakázky — přesně to dělá prémiový mix a širší košík (geometrie, uskladnění)."
      },
      {
        q: "Co znamená rozdíl mezi sell-in a sell-out — a proč vás jako obchodníka zajímá hlavně sell-out?",
        options: [
          "Sell-in je prodej v zimě, sell-out v létě",
          "Sell-in je prodej do servisu, sell-out prodej koncovému zákazníkovi; bez sell-outu je sklad jen přesunutý a další objednávka nepřijde",
          "Jsou to synonyma",
          "Sell-out znamená výprodej skladu"
        ],
        correct: [1],
        explanation: "Naplnit servisu sklad je snadné — jednou. Obchod se opakuje jen tehdy, když se Michelin u pultu skutečně točí. Proto školíte pult a vyhodnocujete podíl prémia na prodejích."
      },
      {
        q: "Servis namítá: „Prémiovku mi nikdo nekupuje, moji zákazníci jsou na cenu.“ Jaká je nejlepší reakce?",
        options: [
          "Souhlasit a nabídnout jen rozpočtové značky",
          "Navrhnout zaškolení pultu s hotovými argumenty a měřit podíl prémia — poptávka po životnosti a bezpečí podle průzkumů existuje",
          "Říct, že jeho zákazníci nerozumí pneumatikám",
          "Nabídnout slevu na celý sklad"
        ],
        correct: [1],
        explanation: "Zákazníci podle studie CBM 2021 nejvíc chtějí životnost, úsporu a brzdění na mokru — jen to potřebují slyšet v korunách a metrech. Když pult umí argumentovat, podíl prémia roste. Navrhněte experiment s měřitelným cílem."
      },
      {
        q: "Servis nechce „vázat peníze ve skladu drahých pneumatik“. Co odpovíte?",
        options: [
          "Že sklad je jeho problém",
          "Že musí koupit celý kamion, jinak nedostane cenu",
          "Držet skladem jen točivé rozměry a zbytek objednávat přes logistiku Inter Cars na zakázku — prémiový mix bez mrtvého skladu",
          "Že Michelin se neskladuje"
        ],
        correct: [2],
        explanation: "Rychlá logistika Inter Cars je váš obchodní trumf: servis nemusí volit mezi prémiovým mixem a vázaným kapitálem."
      },
      {
        q: "Které argumenty s čísly z katalogu Michelin patří do taháku pro pult? Vyberte všechny správné odpovědi.",
        options: [
          "Třída A brzdí z 80 km/h o 9 metrů dříve než třída D",
          "Pneumatiky spotřebují průměrně 1 nádrž paliva z 5",
          "Michelin vydrží přesně 80 000 km",
          "Pod 7 °C brzdí zimní pneumatika na mokru z 80 km/h o 4 m dříve než letní"
        ],
        correct: [0, 1, 3],
        multi: true,
        explanation: "Argumentujte oficiálními čísly z katalogu (9 m, 1 nádrž z 5, data k 7 °C). Konkrétní nájezd nikdy neslibujte — závisí na autě, stylu jízdy a podmínkách."
      },
      {
        q: "Proč je zákazník s uskladněním pneumatik pro servis strategicky cenný?",
        options: [
          "Platí nejvyšší ceny",
          "Vrací se 2× ročně na přezutí — s ním přichází geometrie, servis a další nákupy; jeho hodnota v čase násobně převyšuje jednu účtenku",
          "Nikdy nereklamuje",
          "Není cenný, uskladnění je jen náklad"
        ],
        correct: [1],
        explanation: "Prodávejte servisu hodnotu zákazníka v čase (LTV), ne jednu fakturu. Uskladnění je nejlevnější věrnostní program, jaký servis má."
      },
      {
        q: "Čím má končit každá obchodní návštěva v servisu?",
        options: [
          "Předáním katalogu",
          "Pozváním na oběd",
          "Dohodnutým konkrétním dalším krokem, měřitelným cílem a termínem další návštěvy",
          "Slevou"
        ],
        correct: [2],
        explanation: "Návštěva bez dohodnutého dalšího kroku je jen kafe. Cíl (např. podíl prémia), akce (školení pultu, tahák, štítky) a termín vyhodnocení dělají z návštěvy obchod."
      }
    ]
  }
});
