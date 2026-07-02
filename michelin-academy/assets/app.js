/* ============================================================
   Michelin Academy — application core
   ------------------------------------------------------------
   Zero-build static app. Market content packs register
   themselves via window.MichelinAcademy.* (see content/).
   The app shell is market-agnostic: all user-facing strings
   come from the active market's `ui` dictionary.
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- content registry ---------------- */

  var registry = { markets: {}, order: [] };

  window.MichelinAcademy = {
    registerMarket: function (def) {
      registry.markets[def.code] = {
        code: def.code,
        name: def.name,
        locale: def.locale || "en",
        flag: def.flag || "",
        exam: def.exam || { questionCount: 12, passPct: 80 },
        ui: def.ui || {},
        modules: [],
        glossary: []
      };
      registry.order.push(def.code);
    },
    registerModule: function (marketCode, mod) {
      var m = registry.markets[marketCode];
      if (!m) throw new Error("Unknown market: " + marketCode);
      m.modules.push(mod);
      m.modules.sort(function (a, b) { return a.order - b.order; });
    },
    registerGlossary: function (marketCode, terms) {
      var m = registry.markets[marketCode];
      if (!m) throw new Error("Unknown market: " + marketCode);
      m.glossary = terms;
    }
  };

  /* ---------------- utilities ---------------- */

  function $(sel) { return document.querySelector(sel); }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* escape, then allow **bold** authored in content */
  function fmt(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  function t(path) {
    var cur = M.ui;
    var parts = path.split(".");
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return path;
      cur = cur[parts[i]];
    }
    return cur == null ? path : cur;
  }

  function tf(path, vars) {
    var s = t(path);
    Object.keys(vars || {}).forEach(function (k) {
      s = s.replace(new RegExp("\\{" + k + "\\}", "g"), vars[k]);
    });
    return s;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var sa = a.slice().sort().join(","), sb = b.slice().sort().join(",");
    return sa === sb;
  }

  /* ---------------- persistent store (per market) ---------------- */

  var APP_KEY = "michelinAcademy";
  var market, M, store;

  function storageKey(code) { return APP_KEY + "." + code + ".v1"; }

  function defaultStore() {
    return { name: "", lessons: {}, quizzes: {}, exam: null };
  }

  function loadStore(code) {
    try {
      var raw = localStorage.getItem(storageKey(code));
      if (raw) {
        var parsed = JSON.parse(raw);
        return Object.assign(defaultStore(), parsed);
      }
    } catch (e) { /* corrupted or unavailable storage -> fresh */ }
    return defaultStore();
  }

  function saveStore() {
    try { localStorage.setItem(storageKey(market), JSON.stringify(store)); }
    catch (e) { /* private mode etc. — app still works, progress not kept */ }
  }

  function selectMarket(code) {
    market = code;
    M = registry.markets[code];
    store = loadStore(code);
    try { localStorage.setItem(APP_KEY + ".market", code); } catch (e) {}
    document.documentElement.lang = M.locale;
    document.title = t("appName") + " · " + t("partner");
  }

  /* ---------------- progress helpers ---------------- */

  function lessonDone(modId, lessonId) {
    return (store.lessons[modId] || []).indexOf(lessonId) !== -1;
  }

  function markLessonDone(modId, lessonId) {
    if (!store.lessons[modId]) store.lessons[modId] = [];
    if (store.lessons[modId].indexOf(lessonId) === -1) {
      store.lessons[modId].push(lessonId);
      saveStore();
    }
  }

  function quizState(modId) {
    return store.quizzes[modId] || null; /* {best, attempts, passed} */
  }

  function moduleProgress(mod) {
    var total = mod.lessons.length + 1; /* +1 for the quiz */
    var done = (store.lessons[mod.id] || []).length;
    var qs = quizState(mod.id);
    if (qs && qs.passed) done += 1;
    return { done: done, total: total, pct: Math.round((done / total) * 100), quizPassed: !!(qs && qs.passed) };
  }

  function overallProgress() {
    var done = 0, total = 0;
    M.modules.forEach(function (mod) {
      var p = moduleProgress(mod);
      done += p.done; total += p.total;
    });
    return { done: done, total: total, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  function allQuizzesPassed() {
    return M.modules.every(function (mod) {
      var qs = quizState(mod.id);
      return qs && qs.passed;
    });
  }

  function getModule(id) {
    for (var i = 0; i < M.modules.length; i++) if (M.modules[i].id === id) return M.modules[i];
    return null;
  }

  /* ---------------- shell (header / footer) ---------------- */

  function renderShell() {
    /* the switcher only appears once a second market is registered */
    var marketSelect = "";
    if (registry.order.length > 1) {
      var marketOptions = registry.order.map(function (code) {
        var mk = registry.markets[code];
        return '<option value="' + esc(code) + '"' + (code === market ? " selected" : "") + ">" +
          esc(mk.flag ? mk.flag + " " + mk.name : mk.name) + "</option>";
      }).join("");
      marketSelect = '<select class="market-select" id="marketSelect" title="' + esc(t("marketLabel")) + '">' +
        marketOptions + "</select>";
    }

    $("#header").innerHTML =
      '<div class="container">' +
        '<a class="brand" href="#/">' +
          '<span class="brand-michelin">Michelin</span>' +
          '<span class="brand-academy">' + esc(t("academyWord")) + "</span>" +
        "</a>" +
        '<span class="partner-chip">' + esc(t("partner")) + "</span>" +
        '<div class="header-spacer"></div>' +
        '<nav class="site-nav">' +
          '<a href="#/" data-nav="home">' + esc(t("nav.home")) + "</a>" +
          '<a href="#/glossary" data-nav="glossary">' + esc(t("nav.glossary")) + "</a>" +
          '<a href="#/certificate" data-nav="certificate">' + esc(t("nav.certificate")) + "</a>" +
        "</nav>" +
        marketSelect +
      "</div>";

    $("#footer").innerHTML =
      '<div class="container">' +
        "<div>" + esc(t("footer.left")) + "</div>" +
        "<div>" + esc(t("footer.right")) + "</div>" +
      "</div>";

    var sel = $("#marketSelect");
    if (sel) sel.addEventListener("change", function (e) {
      selectMarket(e.target.value);
      renderShell();
      location.hash = "#/";
      render();
    });
  }

  function setActiveNav(name) {
    document.querySelectorAll(".site-nav a").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("data-nav") === name);
    });
  }

  /* ---------------- onboarding ---------------- */

  function maybeOnboard() {
    if (store.name) return;
    var wrap = document.createElement("div");
    wrap.className = "modal-backdrop";
    wrap.innerHTML =
      '<div class="modal">' +
        "<h2>" + esc(t("onboarding.title")) + "</h2>" +
        '<p class="muted">' + esc(t("onboarding.text")) + "</p>" +
        '<input type="text" id="onbName" maxlength="60" placeholder="' + esc(t("onboarding.placeholder")) + '" />' +
        '<button class="btn btn-accent" id="onbStart">' + esc(t("onboarding.start")) + "</button>" +
      "</div>";
    document.body.appendChild(wrap);
    var input = wrap.querySelector("#onbName");
    input.focus();
    function start() {
      var name = input.value.trim();
      if (!name) { input.focus(); return; }
      store.name = name;
      saveStore();
      document.body.removeChild(wrap);
      render();
    }
    wrap.querySelector("#onbStart").addEventListener("click", start);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") start(); });
  }

  /* ---------------- content block renderer ---------------- */

  function renderBlock(b) {
    switch (b.type) {
      case "h":
        return "<h2>" + fmt(b.text) + "</h2>";
      case "p":
        return "<p>" + fmt(b.text) + "</p>";
      case "list":
        return "<ul>" + b.items.map(function (i) { return "<li>" + fmt(i) + "</li>"; }).join("") + "</ul>";
      case "keypoints":
        return '<div class="block-keypoints">' +
          (b.title ? '<div class="kp-title">' + fmt(b.title) + "</div>" : "") +
          "<ul>" + b.items.map(function (i) { return "<li>" + fmt(i) + "</li>"; }).join("") + "</ul></div>";
      case "table":
        return "<table><thead><tr>" +
          b.headers.map(function (h) { return "<th>" + fmt(h) + "</th>"; }).join("") +
          "</tr></thead><tbody>" +
          b.rows.map(function (r) {
            return "<tr>" + r.map(function (c) { return "<td>" + fmt(c) + "</td>"; }).join("") + "</tr>";
          }).join("") +
          "</tbody></table>";
      case "tip":
        return '<div class="block-tip">' +
          '<div class="tip-title">' + esc(b.title || t("blocks.tip")) + "</div>" +
          "<div>" + fmt(b.text) + "</div></div>";
      case "warning":
        return '<div class="block-warning">' + fmt(b.text) + "</div>";
      case "dialog":
        return '<div class="block-dialog">' + b.lines.map(function (l) {
          var isSeller = l.who === "seller";
          return '<div class="dialog-line ' + (isSeller ? "seller" : "customer") + '">' +
            '<div class="who">' + esc(isSeller ? t("blocks.seller") : t("blocks.customer")) + "</div>" +
            '<div class="bubble">' + fmt(l.text) + "</div></div>";
        }).join("") + "</div>";
      default:
        return "";
    }
  }

  /* ---------------- views ---------------- */

  function viewHome() {
    setActiveNav("home");
    var op = overallProgress();
    var examUnlocked = allQuizzesPassed();
    var exam = store.exam;

    var moduleCards = M.modules.map(function (mod, idx) {
      var p = moduleProgress(mod);
      var badge;
      if (p.pct === 100) badge = '<span class="badge badge-done">' + esc(t("badges.done")) + "</span>";
      else if (p.done > 0) badge = '<span class="badge badge-progress">' + esc(t("badges.inProgress")) + "</span>";
      else badge = '<span class="badge badge-new">' + esc(t("badges.notStarted")) + "</span>";

      return '<a class="card module-card" href="#/module/' + esc(mod.id) + '">' +
        '<span class="module-num">' + (idx + 1) + "/" + M.modules.length + "</span>" +
        '<div class="module-icon">' + esc(mod.icon) + "</div>" +
        "<h3>" + esc(mod.title) + "</h3>" +
        "<p>" + esc(mod.description) + "</p>" +
        '<div class="progress-track"><div class="progress-fill" style="width:' + p.pct + '%"></div></div>' +
        '<div class="module-meta">' +
          "<span>" + tf("home.lessonsCount", { n: mod.lessons.length }) + "</span>" + badge +
        "</div></a>";
    }).join("");

    var examBadge, examBtn;
    if (exam && exam.passed) {
      examBadge = '<span class="badge badge-done">' + esc(tf("home.examPassed", { pct: exam.best })) + "</span>";
      examBtn = '<a class="btn btn-ghost" href="#/certificate">' + esc(t("home.viewCertificate")) + "</a>" +
        '<a class="btn btn-primary" href="#/exam">' + esc(t("home.retakeExam")) + "</a>";
    } else if (examUnlocked) {
      examBadge = '<span class="badge badge-new">' + esc(t("badges.unlocked")) + "</span>";
      examBtn = '<a class="btn btn-accent" href="#/exam">' + esc(t("home.startExam")) + "</a>";
    } else {
      examBadge = '<span class="badge badge-locked">🔒 ' + esc(t("badges.locked")) + "</span>";
      examBtn = '<button class="btn btn-accent" disabled>' + esc(t("home.startExam")) + "</button>";
    }

    return (
      '<section class="hero">' +
        "<h1>" + esc(tf("home.welcome", { name: store.name || "" })) + "</h1>" +
        "<p>" + esc(t("home.subtitle")) + "</p>" +
        '<div class="progress-wrap">' +
          '<div class="progress-label"><span>' + esc(t("home.progressLabel")) + "</span><span>" + op.pct + "%</span></div>" +
          '<div class="progress-track"><div class="progress-fill" style="width:' + op.pct + '%"></div></div>' +
        "</div>" +
      "</section>" +
      "<h2>" + esc(t("home.modulesTitle")) + "</h2>" +
      '<div class="module-grid">' + moduleCards + "</div>" +
      '<div class="card exam-card">' +
        '<div class="exam-info">' +
          "<h3>🎓 " + esc(t("home.examTitle")) + " " + examBadge + "</h3>" +
          "<p>" + esc(tf("home.examDesc", { n: M.exam.questionCount, pct: M.exam.passPct })) + "</p>" +
        "</div>" +
        '<div class="btn-row">' + examBtn + "</div>" +
      "</div>"
    );
  }

  function viewModule(modId) {
    setActiveNav("home");
    var mod = getModule(modId);
    if (!mod) return viewNotFound();
    var p = moduleProgress(mod);
    var qs = quizState(mod.id);

    var lessons = mod.lessons.map(function (l, idx) {
      var done = lessonDone(mod.id, l.id);
      return '<a class="card lesson-item' + (done ? " done" : "") + '" href="#/module/' + esc(mod.id) + "/lesson/" + esc(l.id) + '">' +
        '<div class="lesson-check">' + (done ? "✓" : (idx + 1)) + "</div>" +
        '<div class="lesson-title">' + esc(l.title) + "</div>" +
        '<div class="lesson-mins">' + tf("module.minutes", { n: l.minutes }) + "</div></a>";
    }).join("");

    var quizLabel = qs && qs.passed
      ? tf("module.quizPassed", { pct: qs.best })
      : (qs ? tf("module.quizBest", { pct: qs.best }) : t("module.quizNotTaken"));

    return (
      '<div class="breadcrumb"><a href="#/">' + esc(t("nav.home")) + "</a> · " + esc(mod.title) + "</div>" +
      '<div class="page-head"><h1>' + esc(mod.icon) + " " + esc(mod.title) + "</h1><p>" + esc(mod.intro || mod.description) + "</p></div>" +
      '<div class="progress-track" style="max-width:420px"><div class="progress-fill" style="width:' + p.pct + '%"></div></div>' +
      '<p class="muted small">' + tf("module.progress", { done: p.done, total: p.total }) + "</p>" +
      "<h2>" + esc(t("module.lessonsTitle")) + "</h2>" +
      '<div class="lesson-list">' + lessons + "</div>" +
      '<div class="card exam-card" style="margin-top:22px">' +
        '<div class="exam-info"><h3>📝 ' + esc(t("module.quizTitle")) + "</h3>" +
        '<p>' + esc(quizLabel) + " · " + esc(tf("module.quizPassInfo", { pct: mod.quiz.passPct })) + "</p></div>" +
        '<a class="btn ' + (qs && qs.passed ? "btn-ghost" : "btn-accent") + '" href="#/module/' + esc(mod.id) + '/quiz">' +
          esc(qs ? t("module.retakeQuiz") : t("module.startQuiz")) + "</a>" +
      "</div>"
    );
  }

  function viewLesson(modId, lessonId) {
    setActiveNav("home");
    var mod = getModule(modId);
    if (!mod) return viewNotFound();
    var idx = -1;
    for (var i = 0; i < mod.lessons.length; i++) if (mod.lessons[i].id === lessonId) { idx = i; break; }
    if (idx === -1) return viewNotFound();
    var lesson = mod.lessons[idx];
    var prev = idx > 0 ? mod.lessons[idx - 1] : null;
    var next = idx < mod.lessons.length - 1 ? mod.lessons[idx + 1] : null;

    var body = lesson.blocks.map(renderBlock).join("");

    var nextHref = next
      ? "#/module/" + esc(mod.id) + "/lesson/" + esc(next.id)
      : "#/module/" + esc(mod.id) + "/quiz";
    var nextLabel = next ? t("lesson.completeNext") : t("lesson.completeQuiz");

    return (
      '<div class="breadcrumb"><a href="#/">' + esc(t("nav.home")) + '</a> · <a href="#/module/' + esc(mod.id) + '">' + esc(mod.title) + "</a> · " + esc(lesson.title) + "</div>" +
      '<div class="page-head"><h1>' + esc(lesson.title) + "</h1>" +
      '<p class="muted small">' + tf("lesson.position", { n: idx + 1, total: mod.lessons.length }) + " · " + tf("module.minutes", { n: lesson.minutes }) + "</p></div>" +
      '<div class="card lesson-body">' + body + "</div>" +
      '<div class="lesson-nav">' +
        (prev
          ? '<a class="btn btn-ghost" href="#/module/' + esc(mod.id) + "/lesson/" + esc(prev.id) + '">← ' + esc(t("lesson.prev")) + "</a>"
          : '<a class="btn btn-ghost" href="#/module/' + esc(mod.id) + '">← ' + esc(t("lesson.backToModule")) + "</a>") +
        '<a class="btn btn-primary" href="' + nextHref + '" id="lessonNext">' + esc(nextLabel) + " →</a>" +
      "</div>"
    );
  }

  /* ---------------- quiz engine ---------------- */

  var quizSession = null;
  /* {kind:'module'|'exam', modId, questions:[...], index, selected:[], answered:bool, results:[{q, ok}]} */

  function startQuiz(kind, modId) {
    var questions, passPct, title;
    if (kind === "module") {
      var mod = getModule(modId);
      questions = mod.quiz.questions.slice();
      passPct = mod.quiz.passPct;
      title = mod.title;
    } else {
      var bank = [];
      M.modules.forEach(function (mod) {
        mod.quiz.questions.forEach(function (q) { bank.push(q); });
      });
      questions = shuffle(bank).slice(0, Math.min(M.exam.questionCount, bank.length));
      passPct = M.exam.passPct;
      title = t("exam.title");
    }
    quizSession = {
      kind: kind, modId: modId || null, questions: questions, passPct: passPct, title: title,
      index: 0, selected: [], answered: false, results: []
    };
  }

  function quizFinished() {
    var s = quizSession;
    var correct = s.results.filter(function (r) { return r.ok; }).length;
    var pct = Math.round((correct / s.questions.length) * 100);
    var passed = pct >= s.passPct;

    if (s.kind === "module") {
      var qs = store.quizzes[s.modId] || { best: 0, attempts: 0, passed: false };
      qs.attempts += 1;
      qs.best = Math.max(qs.best, pct);
      qs.passed = qs.passed || passed;
      store.quizzes[s.modId] = qs;
    } else {
      var ex = store.exam || { best: 0, attempts: 0, passed: false, date: null };
      ex.attempts += 1;
      if (pct > ex.best) ex.best = pct;
      if (passed && !ex.passed) {
        ex.passed = true;
        ex.date = new Date().toISOString();
      }
      store.exam = ex;
    }
    saveStore();

    var review = s.results.map(function (r) {
      return '<div class="quiz-review-item ' + (r.ok ? "ok" : "ko") + '">' +
        '<span class="rv-mark">' + (r.ok ? "✓" : "✗") + "</span><span>" + fmt(r.q.q) + "</span></div>";
    }).join("");

    var backHref = s.kind === "module" ? "#/module/" + esc(s.modId) : "#/";
    var afterBtns;
    if (s.kind === "exam" && passed) {
      afterBtns = '<a class="btn btn-accent" href="#/certificate">🎓 ' + esc(t("quiz.showCertificate")) + "</a>" +
        '<a class="btn btn-ghost" href="#/">' + esc(t("quiz.backHome")) + "</a>";
    } else {
      afterBtns =
        '<button class="btn btn-primary" id="quizRetry">' + esc(t("quiz.retry")) + "</button>" +
        '<a class="btn btn-ghost" href="' + backHref + '">' + esc(t("quiz.back")) + "</a>";
    }

    return (
      '<div class="quiz-wrap">' +
      '<div class="card" style="text-align:center;padding:36px 24px">' +
        '<div class="quiz-result-score">' + pct + "%</div>" +
        '<p style="font-size:1.1rem;font-weight:700;margin:6px 0">' +
          (passed ? "🎉 " + esc(t("quiz.passed")) : esc(tf("quiz.failed", { pct: s.passPct }))) + "</p>" +
        '<p class="muted">' + tf("quiz.correctCount", { n: correct, total: s.questions.length }) + "</p>" +
        '<div class="btn-row" style="justify-content:center;margin-top:14px">' + afterBtns + "</div>" +
      "</div>" +
      "<h2>" + esc(t("quiz.reviewTitle")) + "</h2>" +
      '<div class="quiz-review">' + review + "</div></div>"
    );
  }

  function viewQuiz() {
    var s = quizSession;
    if (!s) return viewNotFound();
    if (s.index >= s.questions.length) return quizFinished();

    var q = s.questions[s.index];
    var letters = "ABCDEFGH";

    var opts = q.options.map(function (opt, i) {
      var cls = "quiz-option";
      var disabled = "";
      if (s.answered) {
        disabled = " disabled";
        if (q.correct.indexOf(i) !== -1) cls += " correct";
        else if (s.selected.indexOf(i) !== -1) cls += " wrong";
      } else if (s.selected.indexOf(i) !== -1) {
        cls += " selected";
      }
      return '<button class="' + cls + '" data-opt="' + i + '"' + disabled + ">" +
        '<span class="opt-letter">' + letters[i] + "</span><span>" + fmt(opt) + "</span></button>";
    }).join("");

    var feedback = "";
    if (s.answered) {
      var ok = s.results[s.results.length - 1].ok;
      feedback = '<div class="quiz-feedback ' + (ok ? "ok" : "ko") + '">' +
        '<div class="fb-head">' + esc(ok ? t("quiz.correct") : t("quiz.incorrect")) + "</div>" +
        "<div>" + fmt(q.explanation || "") + "</div></div>";
    }

    var isLast = s.index === s.questions.length - 1;
    var action = s.answered
      ? '<button class="btn btn-primary" id="quizNext">' + esc(isLast ? t("quiz.finish") : t("quiz.next")) + " →</button>"
      : '<button class="btn btn-accent" id="quizCheck"' + (s.selected.length ? "" : " disabled") + ">" + esc(t("quiz.check")) + "</button>";

    return (
      '<div class="quiz-wrap">' +
      '<div class="breadcrumb"><a href="#/">' + esc(t("nav.home")) + "</a> · " + esc(s.title) + "</div>" +
      '<div class="quiz-progress"><span>' + tf("quiz.progress", { n: s.index + 1, total: s.questions.length }) + "</span>" +
        "<span>" + esc(s.title) + "</span></div>" +
      '<div class="progress-track"><div class="progress-fill blue" style="width:' + Math.round((s.index / s.questions.length) * 100) + '%"></div></div>' +
      '<div class="card" style="margin-top:18px">' +
        '<div class="quiz-question">' + fmt(q.q) + "</div>" +
        (q.multi ? '<p class="muted small">' + esc(t("quiz.multiHint")) + "</p>" : "") +
        '<div class="quiz-options">' + opts + "</div>" +
        feedback +
        '<div class="btn-row" style="margin-top:18px;justify-content:flex-end">' + action + "</div>" +
      "</div></div>"
    );
  }

  function bindQuizEvents() {
    var s = quizSession;
    if (!s || s.index >= s.questions.length) {
      var retry = $("#quizRetry");
      if (retry) retry.addEventListener("click", function () {
        startQuiz(s.kind, s.modId);
        render();
      });
      return;
    }
    var q = s.questions[s.index];

    document.querySelectorAll(".quiz-option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (s.answered) return;
        var i = parseInt(btn.getAttribute("data-opt"), 10);
        if (q.multi) {
          var pos = s.selected.indexOf(i);
          if (pos === -1) s.selected.push(i); else s.selected.splice(pos, 1);
        } else {
          s.selected = [i];
        }
        render();
      });
    });

    var check = $("#quizCheck");
    if (check) check.addEventListener("click", function () {
      if (!s.selected.length) return;
      var ok = sameSet(s.selected, q.correct);
      s.results.push({ q: q, ok: ok });
      s.answered = true;
      render();
    });

    var next = $("#quizNext");
    if (next) next.addEventListener("click", function () {
      s.index += 1;
      s.selected = [];
      s.answered = false;
      render();
    });
  }

  /* ---------------- exam intro / certificate ---------------- */

  function viewExamIntro() {
    setActiveNav("home");
    if (!allQuizzesPassed()) {
      return '<div class="card" style="max-width:640px"><h1>🔒 ' + esc(t("exam.lockedTitle")) + "</h1>" +
        "<p>" + esc(t("exam.lockedText")) + '</p><a class="btn btn-primary" href="#/">' + esc(t("quiz.backHome")) + "</a></div>";
    }
    return (
      '<div class="card" style="max-width:640px">' +
      "<h1>🎓 " + esc(t("exam.title")) + "</h1>" +
      "<p>" + esc(tf("exam.intro", { n: M.exam.questionCount, pct: M.exam.passPct })) + "</p>" +
      '<div class="btn-row" style="margin-top:16px">' +
        '<button class="btn btn-accent" id="examStart">' + esc(t("exam.start")) + "</button>" +
        '<a class="btn btn-ghost" href="#/">' + esc(t("quiz.backHome")) + "</a>" +
      "</div></div>"
    );
  }

  function certId(name, dateIso) {
    /* deterministic short id — display only, not a security feature */
    var s = name + "|" + dateIso + "|" + market;
    var h = 0;
    for (var i = 0; i < s.length; i++) { h = ((h << 5) - h + s.charCodeAt(i)) | 0; }
    return "MA-" + market.toUpperCase() + "-" + Math.abs(h).toString(36).toUpperCase();
  }

  function viewCertificate() {
    setActiveNav("certificate");
    var ex = store.exam;
    if (!ex || !ex.passed) {
      return '<div class="card" style="max-width:640px"><h1>' + esc(t("cert.lockedTitle")) + "</h1>" +
        "<p>" + esc(t("cert.lockedText")) + '</p><a class="btn btn-primary" href="#/">' + esc(t("quiz.backHome")) + "</a></div>";
    }
    var date = new Date(ex.date);
    var dateStr = date.toLocaleDateString(M.locale, { year: "numeric", month: "long", day: "numeric" });
    var modules = M.modules.map(function (m) { return esc(m.title); }).join(" · ");

    return (
      '<div class="certificate">' +
        '<div class="cert-brand">Michelin ' + esc(t("academyWord")) + " × " + esc(t("partner")) + "</div>" +
        "<h1>" + esc(t("cert.title")) + "</h1>" +
        '<p class="muted">' + esc(t("cert.awardedTo")) + "</p>" +
        '<div class="cert-name">' + esc(store.name) + "</div>" +
        "<p>" + esc(t("cert.forCompleting")) + "</p>" +
        '<p class="muted small">' + modules + "</p>" +
        '<div class="cert-meta">' +
          "<div>" + esc(t("cert.date")) + "<strong>" + esc(dateStr) + "</strong></div>" +
          "<div>" + esc(t("cert.score")) + "<strong>" + ex.best + " %</strong></div>" +
          "<div>" + esc(t("cert.market")) + "<strong>" + esc(M.name) + "</strong></div>" +
        "</div>" +
        '<div class="cert-id">' + esc(t("cert.certId")) + ": " + esc(certId(store.name, ex.date)) + "</div>" +
      "</div>" +
      '<div class="btn-row no-print" style="justify-content:center">' +
        '<button class="btn btn-accent" id="certPrint">🖨 ' + esc(t("cert.print")) + "</button>" +
        '<a class="btn btn-ghost" href="#/">' + esc(t("quiz.backHome")) + "</a>" +
      "</div>"
    );
  }

  /* ---------------- glossary ---------------- */

  var glossaryFilter = "";

  function viewGlossary() {
    setActiveNav("glossary");
    var f = glossaryFilter.toLowerCase();
    var terms = M.glossary.filter(function (term) {
      return !f || term.term.toLowerCase().indexOf(f) !== -1 || term.def.toLowerCase().indexOf(f) !== -1;
    });
    var cards = terms.map(function (term) {
      return '<div class="card glossary-term"><h3>' + esc(term.term) + "</h3><p>" + fmt(term.def) + "</p></div>";
    }).join("");
    return (
      '<div class="page-head"><h1>' + esc(t("glossary.title")) + "</h1><p>" + esc(t("glossary.subtitle")) + "</p></div>" +
      '<input type="search" class="glossary-search" id="glossarySearch" placeholder="' + esc(t("glossary.search")) + '" value="' + esc(glossaryFilter) + '" />' +
      '<div class="glossary-grid">' + (cards || '<p class="muted">' + esc(t("glossary.empty")) + "</p>") + "</div>"
    );
  }

  function viewNotFound() {
    return '<div class="card"><h1>404</h1><p>' + esc(t("notFound")) + '</p><a class="btn btn-primary" href="#/">' + esc(t("quiz.backHome")) + "</a></div>";
  }

  /* ---------------- router ---------------- */

  function parseRoute() {
    var h = location.hash.replace(/^#\/?/, "");
    var parts = h.split("/").filter(Boolean);
    if (parts.length === 0) return { name: "home" };
    if (parts[0] === "module" && parts.length === 2) return { name: "module", modId: parts[1] };
    if (parts[0] === "module" && parts[2] === "lesson") return { name: "lesson", modId: parts[1], lessonId: parts[3] };
    if (parts[0] === "module" && parts[2] === "quiz") return { name: "moduleQuiz", modId: parts[1] };
    if (parts[0] === "exam") return { name: "exam" };
    if (parts[0] === "certificate") return { name: "certificate" };
    if (parts[0] === "glossary") return { name: "glossary" };
    return { name: "notFound" };
  }

  function render() {
    var route = parseRoute();
    var view = $("#view");
    var html;

    switch (route.name) {
      case "home": html = viewHome(); break;
      case "module": html = viewModule(route.modId); break;
      case "lesson": html = viewLesson(route.modId, route.lessonId); break;
      case "moduleQuiz":
        if (!quizSession || quizSession.kind !== "module" || quizSession.modId !== route.modId) {
          if (!getModule(route.modId)) { html = viewNotFound(); break; }
          startQuiz("module", route.modId);
        }
        html = viewQuiz();
        break;
      case "exam":
        if (quizSession && quizSession.kind === "exam") html = viewQuiz();
        else html = viewExamIntro();
        break;
      case "certificate": html = viewCertificate(); break;
      case "glossary": html = viewGlossary(); break;
      default: html = viewNotFound();
    }

    view.innerHTML = html;
    bindViewEvents(route);
    window.scrollTo(0, 0);
  }

  function bindViewEvents(route) {
    if (route.name === "moduleQuiz" || (route.name === "exam" && quizSession && quizSession.kind === "exam")) {
      bindQuizEvents();
    }
    if (route.name === "exam") {
      var st = $("#examStart");
      if (st) st.addEventListener("click", function () {
        startQuiz("exam", null);
        render();
      });
    }
    if (route.name === "lesson") {
      var nx = $("#lessonNext");
      if (nx) nx.addEventListener("click", function () {
        markLessonDone(route.modId, route.lessonId);
        /* navigation handled by the href */
      });
    }
    if (route.name === "certificate") {
      var pr = $("#certPrint");
      if (pr) pr.addEventListener("click", function () { window.print(); });
    }
    if (route.name === "glossary") {
      var gs = $("#glossarySearch");
      if (gs) gs.addEventListener("input", function () {
        glossaryFilter = gs.value;
        /* re-render only the grid to keep input focus */
        var f = glossaryFilter.toLowerCase();
        var terms = M.glossary.filter(function (term) {
          return !f || term.term.toLowerCase().indexOf(f) !== -1 || term.def.toLowerCase().indexOf(f) !== -1;
        });
        document.querySelector(".glossary-grid").innerHTML = terms.map(function (term) {
          return '<div class="card glossary-term"><h3>' + esc(term.term) + "</h3><p>" + fmt(term.def) + "</p></div>";
        }).join("") || '<p class="muted">' + esc(t("glossary.empty")) + "</p>";
      });
    }
  }

  /* leaving a quiz mid-way discards the session */
  window.addEventListener("hashchange", function () {
    var route = parseRoute();
    var inQuiz = route.name === "moduleQuiz" || route.name === "exam";
    if (!inQuiz) quizSession = null;
    render();
  });

  /* ---------------- boot ---------------- */

  document.addEventListener("DOMContentLoaded", function () {
    if (registry.order.length === 0) {
      document.body.innerHTML = "<p style='padding:40px;font-family:sans-serif'>No market content registered. Check the &lt;script&gt; tags in index.html.</p>";
      return;
    }
    var saved = null;
    try { saved = localStorage.getItem(APP_KEY + ".market"); } catch (e) {}
    selectMarket(saved && registry.markets[saved] ? saved : registry.order[0]);
    renderShell();
    render();
    maybeOnboard();
  });
})();
