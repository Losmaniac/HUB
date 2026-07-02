/* ============================================================
   Modul 2 — Základy pneumatik (technické minimum prodejce)
   Zdroj: Technický katalog Michelin B2C 2024–2025 (CZ),
   kapitoly Obecné informace a Technické informace.
   ============================================================ */

window.MichelinAcademy.registerModule("cz", {
  id: "zaklady",
  order: 2,
  icon: "🛞",
  title: "Základy pneumatik",
  description: "Značení na bočnici, homologace výrobců, EU štítek, zimní legislativa a péče o pneumatiky — podle oficiálního technického katalogu Michelin.",
  intro: "Zákazník od vás čeká jistotu. Tento modul vychází z oficiálního technického katalogu Michelin 2024–2025: kdo umí přečíst bočnici a zná pravidla, působí jako profesionál a snadno obhájí své doporučení.",

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
            ["205", "Nominální šířka pneumatiky v milimetrech", "205 mm"],
            ["55", "Profil — poměr výšky bočnice k šířce v %", "55 % z 205 mm ≈ 113 mm"],
            ["R", "Radiální konstrukce (dnešní standard)", "R (ZR u vysokorychlostních)"],
            ["16", "Nominální průměr ráfku v palcích", "16″"],
            ["91", "Index nosnosti — max. zatížení jedné pneumatiky", "91 = 615 kg"],
            ["V", "Index rychlosti — max. povolená rychlost", "V = 240 km/h"]
          ]
        },
        { type: "h", text: "Indexy rychlosti (dle katalogu Michelin)" },
        { type: "table",
          headers: ["Symbol", "Max. rychlost", "Symbol", "Max. rychlost"],
          rows: [
            ["N", "140 km/h", "T", "190 km/h"],
            ["Q", "160 km/h", "H", "210 km/h"],
            ["R", "170 km/h", "V", "240 km/h"],
            ["S", "180 km/h", "W / Y", "270 / 300 km/h"],
            ["ZR", "nad 240 km/h", "ZR (Y)", "nad 300 km/h"]
          ]
        },
        { type: "h", text: "Index nosnosti — vybrané hodnoty" },
        { type: "table",
          headers: ["Index", "kg na pneumatiku", "Index", "kg na pneumatiku"],
          rows: [
            ["87", "545 kg", "98", "750 kg"],
            ["91", "615 kg", "101", "825 kg"],
            ["95", "690 kg", "104", "900 kg"]
          ]
        },
        { type: "warning", text: "Index nosnosti a rychlosti nesmí být **nižší**, než předepisuje výrobce vozidla (technický průkaz, štítek ve dveřích či víčku nádrže). Výjimku mají certifikované zimní pneumatiky (3PMSF) — viz lekce o zimní legislativě." },
        { type: "h", text: "Další značení, na které se zákazníci ptají" },
        { type: "list", items: [
          "**DOT / datum výroby** — čtyřčíslí na konci: týden a rok výroby („3524“ = 35. týden 2024).",
          "**M+S** (Mud and Snow) — deklarace výrobce, že pneumatika odpovídá definici pneumatiky pro jízdu na sněhu; nevyžaduje test (najdete ji i na většině SUV pneumatik).",
          "**3PMSF** (vločka ve trojvrcholí) — certifikovaný zimní výkon ověřený objektivním testem dle předpisu OSN č. 117.",
          "**XL / Extra Load / Reinf** — zesílená konstrukce s vyšším indexem nosnosti.",
          "**C** — lehké nákladní (užitkové) pneumatiky; **CP** — pneumatiky pro obytné vozy; **POR** — profesionální terénní.",
          "**ZP** (Zero Pressure) — dojezdová run-flat technologie Michelin.",
          "**MICHELIN Acoustic** — polyuretanová pěna uvnitř pneumatiky snižující hluk v kabině (časté u OE pro prémiové vozy a elektromobily)."
        ] },
        { type: "h", text: "HL — nový standard vysoké nosnosti" },
        { type: "p", text: "Kvůli těžším vozům (velké baterie elektromobilů) definovala ETRTO standard **HL**, který unese více než XL. Poznáte jej podle „HL“ **před rozměrem**: HL 285/35 ZR21 108Y Extra Load. Při stejném rozměru a tlaku nabízí HL asi o **10 % vyšší nosnost** než XL (např. index 101 = 825 kg místo 98 = 750 kg)." },
        { type: "warning", text: "Pokud bylo vozidlo z výroby obuté na HL pneumatikách, **musí být vyměněny opět za HL** — nikdy je nenahrazujte běžnými XL." },
        { type: "tip", text: "Ukažte zákazníkovi bočnici jeho staré pneumatiky a přečtěte ji spolu s ním. Za dvě minuty získáte důvěru experta — a přesná data pro nabídku." }
      ]
    },
    {
      id: "oe-homologace",
      title: "Specifická značení výrobců vozidel (OE)",
      minutes: 8,
      blocks: [
        { type: "p", text: "Automobilky vyvíjejí s Michelinem pneumatiky na míru konkrétním modelům. Takové pneumatiky nesou na bočnici **specifické značení výrobce vozidla** — a pro majitele těchto vozů jsou první volbou." },
        { type: "table",
          headers: ["Značení", "Výrobce vozidla"],
          rows: [
            ["★ (hvězdička), S1", "BMW / Mini"],
            ["MO, MOE, MO1", "Mercedes-Benz (MOE = run-flat, MO1 = AMG)"],
            ["AO, AO1, RO1", "Audi (RO1 = Audi Sport)"],
            ["N0–N4, NA0…", "Porsche"],
            ["+", "Volkswagen, Seat, Škoda"],
            ["T0, T1, T2", "Tesla"],
            ["VOL", "Volvo / Lynk & Co"],
            ["K1, K2, K3", "Ferrari"],
            ["JLR, J, LR", "Jaguar / Land Rover"],
            ["HN", "Hyundai N Performance"],
            ["POL", "Polestar"],
            ["STL / R / GOE", "Stellantis / Renault / Genesis-Hyundai"]
          ]
        },
        { type: "keypoints", title: "Pravidla montáže dle katalogu Michelin", items: [
          "Na jedné nápravě **nekombinujte pneumatiky s různým specifickým značením**.",
          "U vozidel s pohonem 4 kol Michelin důrazně doporučuje všechny 4 pneumatiky stejného typu.",
          "Pokud OE pneumatika není dostupná, lze vozidlo zpravidla dočasně vybavit pneumatikami bez značení (u většiny značek celou sadou 4 kusů).",
          "Pneumatiky se specifickým značením lze většinou montovat i na vozy jiných výrobců — pozor na výjimky (např. MOE run-flat jen na vozy uzpůsobené pro ZP)."
        ] },
        { type: "p", text: "Předpis EHK/OSN č. 30 navíc vyžaduje montovat na stejnou nápravu pneumatiky **stejného typu** — stejná značka, rozměr, kategorie užití, konstrukce, indexy i profil. A doporučuje se srovnatelné opotřebení (např. francouzský zákon povoluje max. rozdíl 5 mm hloubky dezénu na nápravě)." },
        { type: "tip", text: "Prodejní argument u prémiových vozů: „Tuhle pneumatiku vyvíjel Michelin přímo s BMW pro vaše auto — poznáte to podle hvězdičky na bočnici. Auto s ní jezdí přesně tak, jak ho výrobce naladil.“" }
      ]
    },
    {
      id: "eu-stitek",
      title: "Evropský štítek pneumatik",
      minutes: 9,
      blocks: [
        { type: "p", text: "EU zavedla štítky pneumatik v roce 2012; **od 1. května 2021** platí nová podoba dle nařízení 2020/740. Štítek je povinný pro každou osobní, SUV i užitkovou pneumatiku — a je to nejrychlejší nástroj, jak zákazníkovi porovnat nabídky černé na bílém." },
        { type: "table",
          headers: ["Prvek štítku", "Co říká", "Stupnice"],
          rows: [
            ["Palivová účinnost", "Valivý odpor → spotřeba paliva / energie", "A (nejlepší) až E"],
            ["Přilnavost za mokra", "Brzdná dráha na mokré vozovce", "A (nejlepší) až E"],
            ["Vnější hlučnost", "Hluk odvalování v dB", "třídy A–B–C + hodnota v dB"],
            ["Piktogram 3PMSF", "Pneumatika pro náročné sněhové podmínky", "je/není"],
            ["Piktogram přilnavosti na ledu", "Severská zimní pneumatika pro led", "je/není"],
            ["QR kód", "Odkaz do evropské databáze EPREL", "kompletní informační list"]
          ]
        },
        { type: "keypoints", title: "Čísla z katalogu Michelin, která prodávají", items: [
          "Pneumatiky spotřebují průměrně **1 nádrž z 5** — valivý odpor přímo ovlivňuje spotřebu i dojezd elektromobilu.",
          "Třída A v přilnavosti za mokra zkrátí brzdnou dráhu z 80 km/h o **9 metrů** oproti třídě D.",
          "Přechod z třídy E na A v palivové účinnosti ušetří asi **150 litrů paliva na 40 000 km** (cca 4 300 Kč).",
          "Pneumatika s hlučností třídy A je oproti třídě B **o polovinu tišší**.",
          "Pneumatika s piktogramem ledu brzdí na ledu z 20 km/h minimálně o 1,4 m dříve než referenční celoroční pneumatika."
        ] },
        { type: "h", text: "Pozor: letní a zimní štítky nelze srovnávat" },
        { type: "p", text: "Zimní pneumatika (M+S/3PMSF) se třídou C za mokra může vedle letní pneumatiky třídy A působit slabě. Srovnání ale neplatí: **výpočet tříd i testovací teploty se liší** (zimní se testují při cca 7 °C, letní při 20 °C). Pneumatiky porovnávejte vždy jen v rámci stejné kategorie — a pod 7 °C má zimní pneumatika navrch vždy." },
        { type: "warning", text: "Štítek neměří životnost, chování na suchu ani stabilitu výkonu při opotřebení — přesně tam se prémiové pneumatiky liší nejvíce. Katalog Michelin to říká přímo: prodejci mají klíčovou roli v seznámení zákazníka s parametry, které štítek nezachycuje." },
        { type: "tip", text: "Mějte u pultu štítky nabízených pneumatik vedle sebe. Devět metrů brzdné dráhy jsou dvě délky auta — to je rozdíl mezi zastavením a nárazem." }
      ]
    },
    {
      id: "legislativa-zima",
      title: "Zimní legislativa a přezouvání",
      minutes: 10,
      blocks: [
        { type: "h", text: "Pravidla v České republice" },
        { type: "list", items: [
          "**Období: 1. listopadu – 31. března** — zimní pneumatiky jsou povinné, pokud je na silnici souvislá vrstva sněhu, led či námraza, **nebo** lze takové podmínky očekávat (teplota pod 4 °C).",
          "Za zimní pneumatiku zákon považuje pneumatiku s označením **M+S** (3PMSF podmínku splňuje také).",
          "**Minimální hloubka dezénu v zimě: 4 mm** (vozidla do 3,5 t) na všech kolech; celoroční zákonné minimum je 1,6 mm.",
          "Značka **„Zimní výbava“ (C 15a)** přikazuje zimní pneumatiky bez ohledu na aktuální počasí."
        ] },
        { type: "h", text: "Zákazník jezdí do zahraničí? Poraďte mu" },
        { type: "table",
          headers: ["Země", "Povinnost", "Období", "Min. hloubka"],
          rows: [
            ["Rakousko", "dle podmínek", "1. 11. – 15. 4.", "4 mm"],
            ["Německo", "dle podmínek", "situačně", "1,6 mm"],
            ["Slovensko", "dle podmínek", "15. 11. – 31. 3.", "3 mm"],
            ["Itálie", "dle místních předpisů", "15. 11. – 15. 4.", "1,6 mm"],
            ["Polsko", "není povinné", "—", "1,6 mm"]
          ]
        },
        { type: "p", text: "Předpisy se vyvíjejí a značení **3PMSF se v Evropě stává normou** — v některých zemích už M+S nestačí. Před cestou vždy doporučte ověření aktuálních místních pravidel." },
        { type: "h", text: "Proč přezouvat: zima začíná při 7 °C" },
        { type: "p", text: "Pro pneumatiky začíná zima při teplotě **7 °C** — pod ní směs letní pneumatiky tuhne a ztrácí účinnost. Podle testů TÜV SÜD má zimní pneumatika pod 7 °C oproti letní o **4 m kratší brzdnou dráhu na mokru z 80 km/h** a o **30 m kratší brzdnou dráhu na sněhu z 50 km/h**." },
        { type: "keypoints", title: "Fakta proti mýtům (statistiky z katalogu)", items: [
          "Více než **9 z 10 zimních nehod** se stane na suché, vlhké či holé vozovce — ne na sněhu. Zimní pneumatiky nejsou jen „na hory“.",
          "**68 % nehod** se stane ve městě, často blízko bydliště — tam, kde řidiči poleví v pozornosti.",
          "Montujte vždy **všechny 4 zimní** — jen 2 na hnací nápravě způsobí nevyváženost a smyk.",
          "Při výměně jen dvou pneumatik patří nové (méně sjeté) **na zadní nápravu** — oficiální doporučení Michelin pro stabilitu vozu."
        ] },
        { type: "warning", text: "U certifikovaných zimních pneumatik (3PMSF) smí být index rychlosti nižší než maximální rychlost vozidla — řidič ale musí mít v zorném poli **nálepku s omezením rychlosti** (předpis OSN č. 142). U M+S bez 3PMSF to neplatí." },
        { type: "tip", text: "Otázka „Jezdíte v zimě i do Rakouska?“ otevírá prodej: Rakousko vyžaduje 4 mm — pneumatika, která v ČR ještě „projde“, tam už nemusí stačit." }
      ]
    },
    {
      id: "pece-a-tlak",
      title: "Tlak, TPMS a životnost pneumatik",
      minutes: 10,
      blocks: [
        { type: "h", text: "Správný tlak = bezpečnost i peníze" },
        { type: "p", text: "Tlak kontrolujte **jednou měsíčně a vždy na studených pneumatikách** (po jízdě připočtěte 0,3 baru a po vychladnutí znovu zkontrolujte). Hodnoty najdete ve dveřích, víčku nádrže nebo návodu. Co říká katalog Michelin o podhuštění:" },
        { type: "table",
          headers: ["Podhuštění", "Důsledek"],
          rows: [
            ["−0,5 baru", "životnost kratší až o 8 000 km (−20 %)"],
            ["−1 bar", "riziko zničení pneumatiky + ročně o nádrž paliva navíc"],
            ["silné podhuštění", "brzdná dráha na mokru delší až o 11 m; nižší stabilita"],
            ["každých −0,5 baru", "poloviční kontaktní plocha na mokru → aquaplaning"]
          ]
        },
        { type: "warning", text: "Pneumatika, která jezdila výrazně podhuštěná, může mít nevratně poškozenou kostru — a prasknout i poté, co ji znovu nahustíte. Před dohuštěním „záhadně“ prázdné pneumatiky vždy hledejte příčinu a nechte ji zkontrolovat odborníkem." },
        { type: "h", text: "TPMS — pomocník, ne náhrada kontroly" },
        { type: "list", items: [
          "Systém monitorování tlaku je **povinný u vozidel vyrobených od 1. 11. 2014** (EU).",
          "**Nepřímý systém** počítá tlak z otáček kol (snímače ABS); **přímý systém** má snímač na ventilu každého kola.",
          "TPMS se ozve **až při ztrátě cca 20 % tlaku** (≈ 0,4 baru) — to už pneumatika jede podhuštěná a opotřebovává se rychleji. Měsíční kontrola tlaku je proto potřeba i s TPMS.",
          "Při přezutí je nutné snímače přímého systému chránit a po změně rozměru pneumatik systém překalibrovat."
        ] },
        { type: "h", text: "Stárnutí a skladování" },
        { type: "list", items: [
          "Od **5 let** stáří doporučujte každoroční kontrolu odborníkem; po **10 letech od data výroby (DOT)** Michelin doporučuje výměnu, i když dezén ještě zbývá.",
          "Skladování: v suchu, chladnu a temnu, daleko od chemikálií, ozónu (el. motory, svářečky) a zdrojů tepla.",
          "Dlouhodobě skladujte pneumatiky **nastojato** na policích min. 10 cm nad podlahou a jednou měsíčně je pootočte; komplety na ráfcích nahuštěné nastojato.",
          "Opravy průpichů patří vždy odborníkovi — pneumatika se musí demontovat a zkontrolovat zevnitř. Těsnicí sprej je jen dočasné nouzové řešení."
        ] },
        { type: "keypoints", title: "Prodejní příležitosti z této lekce", items: [
          "Nabídka kontroly tlaku a dohuštění zdarma = pravidelný kontakt se zákazníkem.",
          "Servis ventilků a TPMS snímačů patří ke každé montáži.",
          "Uskladnění pneumatik u vás = správné skladování + jistá návštěva dvakrát ročně.",
          "Kontrola DOT při přezutí: pneumatiky po 10 letech doporučte vyměnit — bezpečnostní argument přímo z katalogu výrobce."
        ] }
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
        explanation: "V = 240 km/h. Pro srovnání: T = 190, H = 210, W = 270, Y = 300 km/h; ZR = nad 240 km/h."
      },
      {
        q: "Jaký je rozdíl mezi značením M+S a symbolem 3PMSF (vločka v hoře)?",
        options: [
          "Žádný, jde o totéž",
          "M+S je deklarace výrobce bez povinného testu, 3PMSF je certifikace ověřená objektivním testem dle předpisu OSN č. 117",
          "3PMSF platí jen pro letní pneumatiky",
          "M+S je přísnější norma než 3PMSF"
        ],
        correct: [1],
        explanation: "M+S deklaruje výrobce sám (najdete ho i na SUV pneumatikách), 3PMSF vyžaduje složení oficiálního testu zimního výkonu. 3PMSF se v Evropě stává normou."
      },
      {
        q: "Vozidlo bylo z výroby obuté na HL pneumatikách. Čím je smíte nahradit?",
        options: [
          "Běžnými pneumatikami stejného rozměru",
          "XL pneumatikami stejného rozměru",
          "Opět pouze HL pneumatikami",
          "Čímkoli se stejným průměrem ráfku"
        ],
        correct: [2],
        explanation: "HL standard (ETRTO) nabízí cca o 10 % vyšší nosnost než XL. Vozidlo dodané s HL pneumatikami musí být znovu obuto na HL — katalog Michelin to výslovně zdůrazňuje."
      },
      {
        q: "Které údaje najdete na aktuálním EU štítku pneumatik? Vyberte všechny správné odpovědi.",
        options: [
          "Palivovou účinnost (A–E)",
          "Přilnavost za mokra (A–E)",
          "Očekávanou životnost v kilometrech",
          "Vnější hlučnost a piktogramy 3PMSF / přilnavosti na ledu"
        ],
        correct: [0, 1, 3],
        multi: true,
        explanation: "Štítek (nařízení 2020/740, od 1. 5. 2021) ukazuje palivovou účinnost, mokrou přilnavost, hlučnost a zimní piktogramy + QR do databáze EPREL. Životnost na štítku není — právě tam vyniká Michelin a je rolí prodejce to říct."
      },
      {
        q: "O kolik metrů kratší je podle katalogu brzdná dráha z 80 km/h na mokru u pneumatiky třídy A oproti třídě D?",
        options: ["2 metry", "9 metrů", "25 metrů", "Třídy brzdnou dráhu neovlivňují"],
        correct: [1],
        explanation: "9 metrů — přibližně dvě délky auta. Silný a oficiální argument pro kvalitní pneumatiku."
      },
      {
        q: "Proč nelze přímo srovnávat třídu přilnavosti za mokra letní a zimní pneumatiky?",
        options: [
          "Protože zimní pneumatiky se testují jen na sněhu",
          "Protože se liší výpočet tříd i testovací teploty (zimní cca 7 °C, letní 20 °C)",
          "Protože zimní pneumatiky štítek nemají",
          "Srovnávat je lze bez omezení"
        ],
        correct: [1],
        explanation: "Katalog upozorňuje: metodika i teploty testů se liší. Zimní pneumatika se třídou C může být pod 7 °C bezpečnější než letní s třídou A. Porovnávejte vždy jen v rámci stejné kategorie."
      },
      {
        q: "Jaká je minimální hloubka dezénu zimních pneumatik v ČR (vozidla do 3,5 t)?",
        options: ["1,6 mm", "2 mm", "3 mm", "4 mm"],
        correct: [3],
        explanation: "V zimním období při zimních podmínkách zákon vyžaduje minimálně 4 mm na všech kolech. Celoroční zákonné minimum je 1,6 mm. Pozor: Rakousko vyžaduje v zimě také 4 mm, Slovensko 3 mm."
      },
      {
        q: "Kdy se ozve systém TPMS a co z toho vyplývá?",
        options: [
          "Okamžitě při jakémkoli poklesu tlaku — měsíční kontroly jsou zbytečné",
          "Až při ztrátě cca 20 % tlaku (≈ 0,4 baru) — pneumatika už jede podhuštěná, měsíční kontrola je stále nutná",
          "Jen při defektu",
          "Jednou ročně při servisu"
        ],
        correct: [1],
        explanation: "TPMS (povinný od 11/2014) upozorní až při −20 % tlaku. Podhuštění o 0,5 baru přitom zkracuje životnost až o 8 000 km — proto Michelin doporučuje kontrolu tlaku každý měsíc."
      },
      {
        q: "Jaké je doporučení Michelin ke stáří pneumatik?",
        options: [
          "Pneumatiky nestárnou, rozhoduje jen dezén",
          "Od 5 let každoroční odborná kontrola, po 10 letech od data výroby (DOT) výměna",
          "Výměna povinná po 3 letech",
          "Kontrola pouze při STK"
        ],
        correct: [1],
        explanation: "Pryž stárne oxidací. Od 5. roku doporučujte roční kontrolu odborníkem, po 10 letech od DOT výměnu — i když dezén ještě zbývá."
      },
      {
        q: "Kam se při výměně pouze dvou pneumatik montují ty nové (méně sjeté)?",
        options: [
          "Na přední nápravu, protože řídí",
          "Na zadní nápravu kvůli stabilitě a kontrole nad vozidlem",
          "Na náhonovou nápravu",
          "Je to jedno"
        ],
        correct: [1],
        explanation: "Oficiální doporučení Michelin: nové či méně opotřebené pneumatiky na zadní nápravu — zajistí přesnější kontrolu nad vozidlem a vyšší bezpečnost."
      }
    ]
  }
});
