/* ACI Institute, bilingual message catalog loader (EN and CN).
   Copy lives in /assets/i18n/<lang>.json, addressed by key.
   Any key missing from the active catalog falls back to English,
   so an untranslated string shows the graceful state, never a blank. */
(function () {
  "use strict";
  var LS_KEY = "aci-lang";
  var SUPPORTED = ["en", "zh"];
  var state = { lang: "en", dict: { en: {}, zh: {} } };

  function detect() {
    try {
      var saved = localStorage.getItem(LS_KEY);
      if (SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var q = new URLSearchParams(location.search).get("lang");
    if (SUPPORTED.indexOf(q) !== -1) return q;
    if ((navigator.language || "").toLowerCase().indexOf("zh") === 0) return "zh";
    return "en";
  }

  function t(key) {
    var d = state.dict;
    return (d[state.lang] && d[state.lang][key]) ||
           (d.en && d.en[key]) ||
           key;
  }

  function apply() {
    document.documentElement.lang = state.lang === "zh" ? "zh-Hans" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var bits = pair.split(":");
        var attr = (bits[0] || "").trim();
        var key = (bits[1] || "").trim();
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
    document.querySelectorAll(".lang-switch [data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === state.lang ? "true" : "false");
    });
    document.dispatchEvent(new CustomEvent("aci:i18n", { detail: { lang: state.lang } }));
  }

  function load(lang) {
    if (Object.keys(state.dict[lang] || {}).length) return Promise.resolve();
    return fetch("/assets/i18n/" + lang + ".json", { cache: "no-cache" })
      .then(function (r) { return r.ok ? r.json() : {}; })
      .then(function (json) { state.dict[lang] = json || {}; })
      .catch(function () { state.dict[lang] = state.dict[lang] || {}; });
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return Promise.resolve();
    state.lang = lang;
    try { localStorage.setItem(LS_KEY, lang); } catch (e) {}
    return Promise.all([load("en"), load(lang)]).then(apply);
  }

  function init() {
    state.lang = detect();
    return Promise.all([load("en"), load(state.lang)]).then(apply);
  }

  window.ACII18n = {
    init: init,
    setLang: setLang,
    t: t,
    get lang() { return state.lang; }
  };
})();
