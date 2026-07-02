/* ============================================================
   Michelin Academy — NEW MARKET TEMPLATE
   ------------------------------------------------------------
   How to launch a new market (example: Poland):

   1. Copy this folder:            content/_template  ->  content/pl
   2. Fill in the market metadata and translate ALL `ui` strings
      below (copy the full `ui` object from content/cz/market.js
      as a reference — it contains every key the app uses).
   3. Create the modules:          content/pl/modules/01-*.js …
      (copy the cz modules and translate/adapt them — pricing
      examples, legislation and product availability are
      market-specific!)
   4. Create the glossary:         content/pl/glossary.js
   5. Register everything in index.html:

        <!-- Poland -->
        <script src="content/pl/market.js"></script>
        <script src="content/pl/modules/01-....js"></script>
        ...
        <script src="content/pl/glossary.js"></script>

   The market switcher in the header appears automatically as
   soon as more than one market is registered. Each market keeps
   its own user progress (stored separately in the browser).
   ============================================================ */

/*
window.MichelinAcademy.registerMarket({
  code: "pl",                 // short market code, used in URLs & storage
  name: "Polska",             // market name shown in the switcher
  locale: "pl",               // BCP-47 locale for dates & typography
  flag: "🇵🇱",

  exam: {
    questionCount: 12,        // number of questions in the final exam
    passPct: 80               // pass threshold in %
  },

  ui: {
    //  Translate every key from content/cz/market.js
  }
});
*/
