/* ============================================================
   Michelin Academy — market: Czech Republic (cz)
   Market metadata + all UI strings for the app shell.
   ============================================================ */

window.MichelinAcademy.registerMarket({
  code: "cz",
  name: "Česká republika",
  locale: "cs",
  flag: "🇨🇿",

  /* final exam settings for this market */
  exam: {
    questionCount: 12,
    passPct: 80
  },

  ui: {
    appName: "Michelin Academy",
    academyWord: "Academy",
    partner: "Inter Cars",
    marketLabel: "Trh",
    notFound: "Stránka nebyla nalezena.",

    nav: {
      home: "Přehled",
      glossary: "Slovníček",
      certificate: "Certifikát"
    },

    badges: {
      done: "Dokončeno",
      inProgress: "Rozpracováno",
      notStarted: "Nezahájeno",
      unlocked: "Odemčeno",
      locked: "Uzamčeno"
    },

    home: {
      welcome: "Vítejte, {name}!",
      subtitle: "Staňte se expertem na prodej osobních pneumatik Michelin. Projděte moduly, splňte kvízy a získejte certifikát Michelin Academy.",
      progressLabel: "Celkový pokrok",
      modulesTitle: "Školicí moduly",
      lessonsCount: "{n} lekcí",
      examTitle: "Závěrečná zkouška",
      examDesc: "{n} otázek napříč všemi moduly. K získání certifikátu potřebujete alespoň {pct} %. Odemkne se po splnění všech kvízů.",
      examPassed: "Splněno · {pct} %",
      startExam: "Zahájit zkoušku",
      retakeExam: "Zkusit znovu",
      viewCertificate: "Zobrazit certifikát"
    },

    module: {
      lessonsTitle: "Lekce",
      minutes: "{n} min",
      progress: "Dokončeno {done} z {total} kroků",
      quizTitle: "Kvíz modulu",
      quizNotTaken: "Zatím nevyzkoušeno",
      quizBest: "Nejlepší výsledek: {pct} %",
      quizPassed: "Splněno · nejlepší výsledek {pct} %",
      quizPassInfo: "ke splnění potřebujete {pct} %",
      startQuiz: "Spustit kvíz",
      retakeQuiz: "Opakovat kvíz"
    },

    lesson: {
      position: "Lekce {n} z {total}",
      prev: "Předchozí lekce",
      backToModule: "Zpět na modul",
      completeNext: "Dokončit a pokračovat",
      completeQuiz: "Dokončit a přejít na kvíz"
    },

    quiz: {
      progress: "Otázka {n} z {total}",
      multiHint: "Vyberte všechny správné odpovědi.",
      check: "Vyhodnotit",
      next: "Další otázka",
      finish: "Dokončit",
      correct: "Správně!",
      incorrect: "Tentokrát ne.",
      passed: "Gratulujeme, splněno!",
      failed: "Ke splnění je potřeba alespoň {pct} %. Zkuste to znovu!",
      correctCount: "Správně {n} z {total} otázek",
      retry: "Zkusit znovu",
      back: "Zpět na modul",
      backHome: "Zpět na přehled",
      reviewTitle: "Přehled odpovědí",
      showCertificate: "Zobrazit certifikát"
    },

    exam: {
      title: "Závěrečná zkouška",
      intro: "Zkouška obsahuje {n} náhodně vybraných otázek ze všech modulů. K získání certifikátu potřebujete alespoň {pct} %. Zkoušku můžete opakovat, kolikrát chcete.",
      start: "Zahájit zkoušku",
      lockedTitle: "Zkouška je uzamčena",
      lockedText: "Nejprve splňte kvízy všech školicích modulů, poté se závěrečná zkouška odemkne."
    },

    cert: {
      title: "Certifikát o absolvování",
      awardedTo: "uděluje se",
      forCompleting: "za úspěšné absolvování školení prodeje osobních pneumatik Michelin",
      date: "Datum",
      score: "Výsledek zkoušky",
      market: "Trh",
      certId: "Číslo certifikátu",
      print: "Vytisknout / uložit PDF",
      lockedTitle: "Certifikát zatím nemáte",
      lockedText: "Certifikát získáte po úspěšném složení závěrečné zkoušky (odemkne se po splnění všech kvízů)."
    },

    glossary: {
      title: "Slovníček pojmů",
      subtitle: "Rychlá referenční příručka pojmů ze světa pneumatik — pro jistotu při rozhovoru se zákazníkem.",
      search: "Hledat pojem…",
      empty: "Žádný pojem neodpovídá hledání."
    },

    onboarding: {
      title: "Vítejte v Michelin Academy!",
      text: "Školicí program pro prodejce Inter Cars. Zadejte své jméno — použije se pro sledování pokroku a na certifikát.",
      placeholder: "Jméno a příjmení",
      start: "Začít školení"
    },

    blocks: {
      tip: "Tip pro praxi",
      customer: "Z",
      seller: "P"
    },

    footer: {
      left: "Michelin Academy · Interní školicí nástroj pro Inter Cars",
      right: "Zdroje: Technický katalog Michelin 2024–2025 (CZ) · michelin.cz"
    }
  }
});
